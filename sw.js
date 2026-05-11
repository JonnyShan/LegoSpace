const CACHE = 'xwing-v4';
const ASSETS = [
  './',
  './index.html',
  './legologo.png?v=3',
  './luke.png?v=3',
  './leia.png?v=3',
  './obi.png?v=3',
  './starwars-ships-night.png',
  './midnight-circuit-loop.m4a',
  './manifest.json',
  './voice/direct-hit-she-is-going-down-171a7608.mp3',
  './voice/got-an-elite-on-our-scope-1aa62d19.mp3',
  './voice/look-at-the-size-of-that-thing-08624e05.mp3',
  './voice/use-the-force-8eac0015.mp3',
  './voice/decoy-out-f6d5f5b4.mp3',
  './voice/you-will-not-pass-a36bb53d.mp3',
  './voice/great-shot-kid-e5d1b19e.mp3',
  './voice/i-can-t-hold-them-2a256387.mp3',
  './voice/stay-on-target-17f0a69d.mp3',
  './voice/watch-yourself-45a7b03f.mp3',
  './voice/lock-onto-them-b5d699ca.mp3',
  './voice/cover-me-wedge-591f713f.mp3',
  './voice/heads-up-fighters-e3c76e84.mp3',
  './voice/i-see-them-on-my-tail-e9686f7f.mp3',
  './voice/red-five-on-your-six-57aa27ab.mp3',
  './voice/form-up-rogue-squadron-9e44b07f.mp3',
  './voice/got-a-bandit-locking-on-308f1f23.mp3',
  './voice/red-leader-this-is-red-two-8144a192.mp3',
  './voice/cut-the-chatter-red-two-2e63a4aa.mp3',
  './voice/almost-there-4f4ee854.mp3'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Network-first for HTML so updates ship; cache-first for static assets
  if (e.request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    e.respondWith(
      fetch(e.request).then(r => { caches.open(CACHE).then(c => c.put(e.request, r.clone())); return r; })
        .catch(() => caches.match(e.request).then(c => c || caches.match('./index.html')))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(c => c || fetch(e.request).then(r => {
      if (r && r.ok) caches.open(CACHE).then(c => c.put(e.request, r.clone()));
      return r;
    }))
  );
});
