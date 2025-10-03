const CACHE_NAME = "iostube-cache-v1";
const urlsToCache = [
  "/iostube/",
  "/iostube/index.html",
  "/iostube/styles.css",
  "/iostube/script.js"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch Requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});