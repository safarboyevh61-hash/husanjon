/* TESTUZ — oflayn rejim (Profil → Rejim → Oflayn). Avval internetdan, bo'lmasa telefondagi nusxadan ochiladi. */
const C = 'testuz-v34';
const ASOS = ['./', 'index.html', 'savollar.js', 'config.js'];
const yukla = u => caches.open(C).then(c => Promise.all(u.map(x => fetch(x, { cache: 'no-cache' }).then(r => { if (r.ok) return c.put(x, r); }).catch(() => {}))));
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(yukla(ASOS)); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C && x.indexOf('testuz-') === 0).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('message', e => { if (e.data && e.data.t === 'yukla' && Array.isArray(e.data.u)) e.waitUntil(yukla(e.data.u.filter(x => typeof x === 'string').slice(0, 60))); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (u.origin !== location.origin || (r.method !== 'GET' && r.method !== 'HEAD')) return;
  const kesh = () => caches.match(r.url, { ignoreSearch: true }).then(m => m || (r.mode === 'navigate' ? caches.match('index.html') : null));
  if (r.method === 'HEAD') { e.respondWith(fetch(r).catch(() => kesh().then(m => m ? new Response(null, { status: 200 }) : Response.error()))); return; }
  e.respondWith(fetch(r).then(x => { if (x.ok && x.type === 'basic') { const y = x.clone(); caches.open(C).then(c => c.put(u.origin + u.pathname, y)); } return x; })
    .catch(() => kesh().then(m => m || Response.error())));
});
