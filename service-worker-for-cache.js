const CACHE_ID = "JS_CONSOLE_CACHE_ID";
const urlsToCache = [
    "/",
    "/improeditor",
    "/improeditor/",
    "/improeditor/vue2.min.js",
    "/improeditor/ranas-db.js",
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_ID)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});