// Service Worker للعمل في الخلفية
const CACHE_NAME = 'android-security-render-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
    console.log('✅ Service Worker Installed');
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
    console.log('✅ Service Worker Activated');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response('🔒 Offline - Device Security Active');
        })
    );
});
