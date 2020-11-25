'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "927c68ecabab0c9c3abf67efef1e7ce7",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/NOTICES": "92b03c1479f879c932fb80ddbdd7e621",
"assets/assets/ibooster/topology_pon_red_42_gsssss.png": "fda5356169777589f113bb6b4ad6e5d7",
"assets/assets/ibooster/arrow_right_yellow.png": "739101a981e451771f89c46b8896a04c",
"assets/assets/ibooster/topology_pon_red_11.png": "6680160fa8646e5c724dfd204761ad5b",
"assets/assets/ibooster/topology_pon_red_42.png": "c8aedc6a565e667f47e07b45dbf12530",
"assets/assets/ibooster/topology_pon_green_36.png": "4f5c13eb0f6e415174d5c4c9da026a2c",
"assets/assets/ibooster/topology_pon_green_22.png": "1f7158f27d048336fb728d4ca7d5b95b",
"assets/assets/ibooster/Asset15.svg": "9a373976ff054ea63b3579816ec7ed7e",
"assets/assets/ibooster/Asset13-orange.png": "ef5fee1f61ed9a6b9560eb297c7c7276",
"assets/assets/ibooster/Asset11.svg": "d7d2d1434ee3e87c26a36af685304062",
"assets/assets/ibooster/Asset16.svg": "968eb59cc25bfc07c1c8322dbc48da0f",
"assets/assets/ibooster/Asset4.svg": "9d8111e2b34a79ef9d88951bfceb7b4b",
"assets/assets/ibooster/Asset13.svg": "bcb3d43e6528ca54f547c2dbf5f01252",
"assets/assets/ibooster/arrow_left_red.png": "19117af7c3b12bb46edecf986d7e828f",
"assets/assets/ibooster/topology_pon_silver_27.png": "f6dc8b4bed9b8a62c7f6fb1c4af5bc52",
"assets/assets/ibooster/Asset14.svg": "dcad7eb7035e902e4e8c6c0b63d70195",
"assets/assets/ibooster/topology_pon_silver_45.png": "71b2c2f36dea4956e6633320fc0a983c",
"assets/assets/ibooster/topology_pon_green_11.png": "c1014a3d7d1653eb995d0326d7a4b488",
"assets/assets/ibooster/Asset1.svg": "9741ed6c28b925b1bddc88c6b012428f",
"assets/assets/ibooster/arrow_right_green.png": "a84e94bb392d2a1bb18cd8a660488704",
"assets/assets/ibooster/Asset2.svg": "9741ed6c28b925b1bddc88c6b012428f",
"assets/assets/ibooster/topology_pon_silver_11.png": "1870d39c93ee62315adfa187a7fa5037",
"assets/assets/ibooster/topology_pon_red_45.png": "859d3ba50b90bd86357ceb56bacf691d",
"assets/assets/ibooster/Asset12.svg": "b96a38bb76a651fe8e0f537f1a14ac1d",
"assets/assets/ibooster/Asset5.svg": "324464ff1cfc120fa89516775787c6e5",
"assets/assets/ibooster/Asset9.svg": "9d0082fde6101ca072872f18fd5f981a",
"assets/assets/ibooster/topology_pon_silver_42.png": "016062749b37d229bee9dd30611062ca",
"assets/assets/ibooster/arrow_right_red.png": "5a1d84a2912ae8cc7ca8bb3f1f862472",
"assets/assets/ibooster/topology_pon_red_36.png": "5ef53b9618297648b886026f3199ee94",
"assets/assets/ibooster/topology_pon_green_45.png": "0ff0d59bd2e54545fe7f8259879cd109",
"assets/assets/ibooster/topology_pon_green_27.png": "d8b10dbfeaf772ea664e8338b9487d6b",
"assets/assets/ibooster/topology_pon_green_09.png": "ddadff2e3b0fbe54be125789733c954c",
"assets/assets/ibooster/topology_pon_silver_22.png": "c9ef58d2b9659c6bd3ec3202049a0c91",
"assets/assets/ibooster/topology_pon_blue_42_gsssss.png": "abb0e9a85909d6548e989e6c5f193475",
"assets/assets/ibooster/arrow_left_yellow.png": "071417d692e5221543215807e22c63e9",
"assets/assets/ibooster/topology_pon_silver_09.png": "8b5a1f7e4ee40015b82162fee7c15466",
"assets/assets/ibooster/Asset3.svg": "2e9c3972d57ae96e576af50e5b65257b",
"assets/assets/ibooster/topology_pon_red_09.png": "c0fba114b3117a9e265308d0347436b9",
"assets/assets/ibooster/Asset6.svg": "d7fe82a7ea7011ed74750970e17809fe",
"assets/assets/ibooster/arrow_left_green.png": "c2d4b8dc1c50cab703c630e82781c8ec",
"assets/assets/ibooster/Asset13-orange.svg": "d2a07897a1a38445826826cec76a7a42",
"assets/assets/ibooster/topology_pon_red_27.png": "00d0c50ad01491ebc64d174ee37e9dce",
"assets/assets/ibooster/topology_pon_red_22.png": "43eca68b454e70fc613829659184e778",
"assets/assets/ibooster/topology_pon_silver_36.png": "7001d444483f58d2aec8ddad6db8ea4c",
"assets/assets/fonts/cm_sans_serif_2012.ttf": "b2c533d45ade59514b04062247d96aaa",
"assets/assets/search.svg": "889a0b86d8c97aa839e0dfa91a9d3e6e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "b125848682ac8a4e2ea2a602ccfa5576",
"assets/AssetManifest.json": "51229ed1bfa8eed512f9dc5483b74133",
"index.html": "680d30631f5f75a3dda99f711c6f1453",
"/": "680d30631f5f75a3dda99f711c6f1453",
"manifest.json": "3f8b0e1e5dddff65d073619c9e824a63",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "923a921d1a92b680e272099020b7f56f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
