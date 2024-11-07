'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d764ec83b4ea278b6e2950154d42336b",
"assets/AssetManifest.json": "60084fa712580999ba4330714fe3158e",
"assets/assets/icons/Bell.svg": "f9a892e2f89ca5dae066a4a7869eb0c2",
"assets/assets/icons/BlogPost.svg": "939f9fb6cd26d3cbda222efc588109c8",
"assets/assets/icons/Comments.svg": "143a3d52dffc4e48fc5a91d95f0b3dc0",
"assets/assets/icons/Dashboard.svg": "76143897d92103aa1a722a8a935c180f",
"assets/assets/icons/Dribbble.svg": "498fb76de8c7319c101cea72ba949d45",
"assets/assets/icons/Facebook.svg": "540cdcfff64442a60ea6a639827e6f5a",
"assets/assets/icons/Linkedin.svg": "e29b9c1efa3c6d212c4e1862126b0807",
"assets/assets/icons/Logout.svg": "cc8c02a3992f5c79a727174c41cdf9df",
"assets/assets/icons/Message.svg": "9dc649696d3907e25f5a2f3410fed494",
"assets/assets/icons/Pages.svg": "7afb8a5289f1e1cf9858b70a8a239700",
"assets/assets/icons/Post.svg": "f7de05f5c7937dcf5ac9211460e1549e",
"assets/assets/icons/Setting.svg": "fa19f55ba5bb75150a93264dbb456c87",
"assets/assets/icons/Statistics.svg": "70d980e389901023c21fdbf751c5d5d7",
"assets/assets/icons/Subscribers.svg": "a086f90bff322d22e27a96d166681ccf",
"assets/assets/icons/Twitter.svg": "3c43caf125b9400f0d7bd12e0ace53de",
"assets/assets/images/logo.png": "df0ec1f100c140c1a02e0d17a13d8ae7",
"assets/assets/images/logowithtext.png": "954fb979bd2b0dfd1476b0758fd014cb",
"assets/assets/images/photo1.jpg": "8919c83cfb6ca5a6106c2841ae065056",
"assets/assets/images/photo2.jpg": "8b69cc14acbdd21b279403cbcfa37ac2",
"assets/assets/images/photo3.jpg": "e15fc31e4ed05eb4370c40f1e765131e",
"assets/assets/images/photo4.jpg": "28b8b952e3faf30125d56b8c5f47c532",
"assets/assets/images/photo5.jpg": "4415164461b5175e14d55b6f40470faa",
"assets/assets/images/photo6.jpg": "fcc4a2d57e985be46673cc5107ed39ef",
"assets/FontManifest.json": "05628feb9c03803351619588c64184e3",
"assets/fonts/MaterialIcons-Regular.otf": "829ac8cc63ff7759adaa51430cf1f621",
"assets/fonts/Montserrat/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/fonts/Montserrat/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/images/app_icon.png": "62e86f006a412b5d62d30f5c6ce8988c",
"assets/images/default_profilepic.png": "404926f6dcc8de25d90f26289cff152d",
"assets/images/ic_menu.png": "6ea8252ce906d3e66135745cef0e84a2",
"assets/images/img_cover_pemilihan.png": "0d77416e2e47d9ea5ed32fab699d0244",
"assets/images/img_cover_perulangan.png": "bcbb064fefa3ad228bae454b21f22918",
"assets/images/pertemuan.png": "528a41b700eed255786f8cded907c363",
"assets/images/test.jpg": "256600646651e638361646aa2b1b8388",
"assets/images/test.pdf": "ecd332fd3f797c1f18b5df4fc400f2a5",
"assets/NOTICES": "abc8c82a8209fb6f47c011ddf17d9a90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a85c49e49fc5b629e56ce60919c3f03c",
"/": "a85c49e49fc5b629e56ce60919c3f03c",
"main.dart.js": "e0c9118b87d5c45599d3573052035bf3",
"manifest.json": "424b2b7fdd3617596fc326e735c5167f",
"version.json": "b1b7aaea7476b8ce3a8e5a2d9942aa53"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
