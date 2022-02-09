const CACHE_ID = "JS_CONSOLE_CACHE_ID";
const urlsToCache = [
    "/",
    "/vue2.min.js",
    "/ranas-db.js",
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_ID)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});