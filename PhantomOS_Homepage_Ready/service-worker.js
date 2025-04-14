
const CACHE_NAME = 'phantomos-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/index.html',
    '/manifest.json',
    '/assets/css/phantom.css',
    '/assets/js/phantom.js',
    '/assets/js/config.js',
    '/assets/js/ui.js',
    '/assets/icons/favicon.ico',
    '/config/phantom-config.json',
    '/pages/phantomstore.html',
    '/pages/phantomcast.html',
    '/pages/phantomcam.html',
    '/pages/phantomnav.html',
    '/pages/carplaymask.html',
    '/pages/modpanel.html',
    '/pages/securebundle.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
});
