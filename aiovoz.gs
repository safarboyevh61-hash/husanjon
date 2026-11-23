/* ===== TESTUZ bot: «AI bilan savol-javob» — OVOZLI rejim (ilova v139 uchun) =====
   Bu faylni Apps Script loyihasiga YANGI fayl qilib qo'shing (asosiy koddan pastda tursin),
   so'ng: «Управление развертываниями» → ✏️ → «Новая версия» → «Развернуть».
   Yangi kalit kerak emas: «AI tahlil kaliti» (Gemini) va Mafiya boshlovchisi ovozi ishlatiladi.

   1) aisjtts — AI savolni va bahoni ovoz chiqarib o'qiydi (Gemini TTS, 6 soat keshda turadi).
   2) aisjov  — o'quvchining ovozli javobi (WAV) matnga aylantiriladi va namuna javob bilan solishtiriladi. */
(function () {
  if (typeof saytPost !== "function" || typeof API !== "object" || !API) return; // fayl asosiy koddan oldin tursa — hech narsa buzilmaydi
  const asl = saytPost;
  saytPost = function (u) {
    if (u && u.act === "aisjov") {
      let out; try { out = aisjOvoz(u); } catch (e) { out = { ok: false, err: String(e && e.message || e).slice(0, 200) }; }
      out.now = Date.now();
      return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
    }
    return asl(u);
  };
  API.aisjtts = function (q) { return aisjTts(q); };
})();

function aisjLimit(tur, uid, kunlik, shaxsiy) { // kunlik umumiy va shaxsiy chegara; {ok} yoki {ok:false, err:"limit"}
  const cache = CacheService.getScriptCache(), kun = tahKun(), uk = tur + "q" + kun + String(uid || "").slice(0, 20), un = Number(cache.get(uk) || 0);
  if (un >= shaxsiy) return null;
  const g = String(P.getProperty(tur.toUpperCase()) || "").split("|"), gn = g[0] === kun ? Number(g[1] || 0) : 0;
  if (gn >= Number(P.getProperty(tur.toUpperCase() + "LIM") || kunlik)) return null;
  return function () { try { cache.put(uk, String(un + 1), 21600); } catch (e) { } P.setProperty(tur.toUpperCase(), kun + "|" + (gn + 1)); };
}

function aisjTts(q) {
  const t = String(q.t || "").replace(/\s+/g, " ").trim().slice(0, 320);
  if (t.length < 2) return { ok: false, err: "Matn bo'sh" };
  if (!gKey()) return { ok: false, err: "nokey" };
  const cache = CacheService.getScriptCache(), key = "sjv" + md5(t), n = Number(cache.get(key + "n") || 0);
  if (n > 0) { // keshdan: bo'laklab saqlangan
    const ks = []; for (let i = 0; i < n; i++) ks.push(key + i);
    const m = cache.getAll(ks); let b = "", butun = true;
    ks.forEach(function (k) { if (m[k] == null) butun = false; else b += m[k]; });
    if (butun && b) return { ok: true, b: b, r: Number(cache.get(key + "r") || 16000), kesh: 1 };
  }
  const yoz = aisjLimit("aisjv", q.uid, 1200, 160); if (!yoz) return { ok: false, err: "limit" };
  const x = mfTtsYarat(t, null, "");
  if (!x || x.err || !x.b) return { ok: false, err: (x && x.err) || "ai" };
  try {
    const B = 90000, o = {}; let k = 0;
    for (let i = 0; i < x.b.length; i += B) o[key + (k++)] = x.b.slice(i, i + B);
    if (k <= 12) { o[key + "n"] = String(k); o[key + "r"] = String(x.r || 16000); cache.putAll(o, 21600); }
  } catch (e) { }
  yoz();
  return { ok: true, b: x.b, r: x.r || 16000 };
}

function aisjOvoz(u) {
  const s = String(u.s || "").replace(/\s+/g, " ").trim().slice(0, 600), j = String(u.j || "").replace(/\s+/g, " ").trim().slice(0, 900), b = String(u.b || "");
  if (s.length < 5 || !j) return { ok: false, err: "Savol bo'sh" };
  if (b.length < 4000) return { ok: false, err: "qisqa" };
  if (b.length > 950000) return { ok: false, err: "uzun" };
  if (!gKey()) return { ok: false, err: "nokey" };
  const yoz = aisjLimit("aisjo", u.uid, 1500, 80); if (!yoz) return { ok: false, err: "limit" };
  const prompt = "Sen tajribali o'qituvchisan. O'quvchiga quyidagi savol berildi va u OVOZ bilan (o'zbek tilida) javob berdi — ovoz yozuvi ilova qilingan.\n" +
    "Savol: «" + s + "»\nNamuna (to'g'ri) javob: «" + j + "»\n\n" +
    "1) Ovozdagi gapni so'zma-so'z matnga aylantir (o'zbek lotin yozuvida). Hech narsa eshitilmasa yoki faqat shovqin bo'lsa — matn bo'sh bo'lsin, o'zingdan so'z qo'shma.\n" +
    "2) O'quvchi aytgan javobni MAZMUNAN namuna javob bilan solishtir: asosiy fakt, son, nom va tushunchalar to'g'rimi. Talaffuz, sheva, sinonim va boshqacha tartib uchun ball kesma. " +
    "Namuna javobdan tashqari yangi fakt qo'shma.\nFaqat JSON qaytar, boshqa hech narsa yozma:\n" +
    '{"matn": "o\'quvchi aytgan gap", "ball": 0..10 butun son, "izoh": "1-2 qisqa jumla o\'zbek tilida (lotin yozuvida): nimasi to\'g\'ri, nimasi yetishmaydi yoki xato — samimiy ohangda"}';
  const models = (P.getProperty("GMODELS") || "gemini-flash-latest,gemini-flash-lite-latest").split(",").filter(String);
  let out = null;
  for (let i = 0; i < models.length && i < 3 && !out; i++) {
    for (let k = 0; k < 2 && !out; k++) {
      const body = { contents: [{ role: "user", parts: [{ text: prompt }, { inlineData: { mimeType: "audio/wav", data: b } }] }], generationConfig: { temperature: 0.2, maxOutputTokens: 500, responseMimeType: "application/json" } };
      if (k === 0) body.generationConfig.thinkingConfig = { thinkingBudget: 0 };
      const r = gSor("models/" + models[i] + ":generateContent", body);
      if (r.code === 200) {
        const t = gMatn(r.j), m = t.match(/\{[\s\S]*\}/);
        try {
          const x = JSON.parse(m ? m[0] : t), matn = String(x.matn || "").replace(/\s+/g, " ").trim().slice(0, 500);
          const bl = Math.max(0, Math.min(10, Math.round(Number(x.ball))));
          if (!isNaN(bl)) out = { matn: matn, ball: matn ? bl : 0, izoh: String(x.izoh || "").replace(/\*\*/g, "").slice(0, 400) };
        } catch (e) { }
        break;
      }
      if (r.code === 400 && k === 0 && /thinking|responseMimeType/i.test(r.msg)) continue;
      if ((r.code === 400 || r.code === 403) && /API key|API_KEY|permission/i.test(r.msg)) return { ok: false, err: "nokey" };
      break;
    }
  }
  if (!out) return { ok: false, err: "ai" };
  if (!out.matn) return { ok: false, err: "jim" };
  yoz();
  return Object.assign({ ok: true }, out);
}
