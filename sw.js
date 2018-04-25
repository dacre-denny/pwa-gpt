var CACHE_NAME = 'pwa-gpt-cache-v1';
var urlsToCache = [
  '/',
  '/bundle.js',
];

self.addEventListener('install', function(event) {
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});