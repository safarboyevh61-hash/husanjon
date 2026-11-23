/* ===== TESTUZ bot: «Akkauntni o'chirish» (ilova v138 uchun) =====
   Bu faylni Apps Script loyihasiga YANGI fayl qilib qo'shing (asosiy koddan pastda tursin),
   so'ng: «Управление развертываниями» → ✏️ → «Новая версия» → «Развернуть».

   Nima o'chadi: shu foydalanuvchining UID si yozilgan barcha qatorlar
   (Platforma — profil va sayt to'lovi belgisi, Natijalar, Ro'yxat, Auditoriya natijalari,
   Akkauntlar, o'yin va reyting varaqlari).
   Nima QOLADI: «Sertifikatlar» va «Auditoriya to'lovlari» varaqlari (rasmiy hisob yozuvlari),
   «Mafiya ovoz…» varaqlari, suhbat xabarlari. */
const OCH_QOLADI = ["Sertifikatlar", "Auditoriya to'lovlari"];
API.del = function (q) {
  const uid = String(q.uid || "");
  if (!uidOk(uid)) return { ok: false, err: "ID noto'g'ri" };
  // Telegram akkaunti faqat egasining o'zi tomonidan o'chiriladi (Mini App imzosi yoki sayt kaliti)
  if (/^tg\d/.test(uid)) { const k = kimTg(q); if (!k || "tg" + k.id !== uid) return { ok: false, err: "Tasdiqlanmadi" }; }
  return qulf(function () {
    let jami = 0, ism = ""; const qayer = [];
    kitob().getSheets().forEach(function (sh) {
      const nom = sh.getName();
      if (OCH_QOLADI.indexOf(nom) >= 0 || /^Mafiya ovoz/.test(nom)) return;
      const n = sh.getLastRow(), m = sh.getLastColumn(); if (n < 2 || m < 1) return;
      const bosh = sh.getRange(1, 1, 1, Math.min(m, 12)).getValues()[0], c = bosh.indexOf("UID"); if (c < 0) return;
      const v = sh.getRange(2, c + 1, n - 1, 1).getValues(); let k = 0;
      for (let i = v.length - 1; i >= 0; i--) if (String(v[i][0]) === uid) {
        if (nom === "Platforma" && !ism) { try { const r = sh.getRange(i + 2, 1, 1, 3).getValues()[0]; ism = String(r[1] || "") + " " + String(r[2] || ""); } catch (e) { } }
        sh.deleteRow(i + 2); k++;
      }
      if (k) { jami += k; qayer.push(nom + ": " + k); }
    });
    try { duC().remove("bhm_n"); } catch (e) { }
    try { const admin = P.getProperty("ADMIN"); if (admin && jami) send(admin, "🗑 Akkaunt o'chirildi: <b>" + esc(ism.trim() || uid) + "</b>\n" + esc(qayer.join(", "))); } catch (e) { }
    return { ok: true, n: jami };
  });
};
