const CACHE_NAME = 'taxcanada-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icon-192.png',
    '/icon-512.png',
    '/icon-maskable-192.png',
    '/icon-maskable-512.png',
    '/privacy.html'
];

// Install - cache assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching app assets');
                return cache.addAll(ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate - clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

// Fetch - cache first, then network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cached => {
                if (cached) {
                    return cached;
                }
                return fetch(event.request)
                    .then(response => {
                        // Don't cache non-successful responses
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        // Clone and cache
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, responseToCache));
                        return response;
                    });
            })
            .catch(() => {
                // Fallback for navigation requests
                if (event.request.mode === 'navigate') {
                    return caches.match('/index.html');
                }
            })
    );
});
