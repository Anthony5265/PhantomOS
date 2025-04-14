self.addEventListener('install', function(e) {
  e.waitUntil(caches.open('phantomos').then(function(cache) {
    return cache.addAll([
      '../index.html',
      '../dashboard.html',
      '../phantom.js',
      '../phantom.css'
    ]);
  }));
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
