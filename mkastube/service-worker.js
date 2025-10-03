const CACHE_NAME = "mkastube-cache-v1";
const urlsToCache = [
  "/mkastube/",
  "/mkastube/index.html",
  "/mkastube/styles.css",
  "/mkastube/script.js"
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
