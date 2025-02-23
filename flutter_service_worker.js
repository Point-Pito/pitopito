'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c60270caaac16345fc8172a199fa2206",
"version.json": "07e46b299f44ef551bc77a719e75da12",
"index.html": "cf9b96b6c085c3e3f23069a87405f811",
"/": "cf9b96b6c085c3e3f23069a87405f811",
"main.dart.js": "00f6da38129337b383fa456ac041089f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "2aed751ed2c66b14b5c655359a9605c5",
"icons/Icon-192.png": "02661c4ce466f401347b39c8b1a05dc9",
"icons/Icon-maskable-192.png": "02661c4ce466f401347b39c8b1a05dc9",
"icons/Icon-maskable-512.png": "5eb24e39bac397e0d01b1716298d647a",
"icons/Icon-512.png": "5eb24e39bac397e0d01b1716298d647a",
"manifest.json": "2e94a28476e2d74147bce81682103e59",
"assets/AssetManifest.json": "c3910eda0301d89b927eb0c2070c665d",
"assets/NOTICES": "5f62feb27be1da21b41b435a39c0922d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "424879f32fcf4e9d6e2722664737c722",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e2827b3b416935cdeca15eeb875996b2",
"assets/fonts/MaterialIcons-Regular.otf": "5e64c6e506146afff0a7d71234ac0f3a",
"assets/assets/yt.png": "af8eef592e217d59b54fe15075b88d8e",
"assets/assets/pointpito.png": "3ef4f4cfe19ec59b690fad31f1030a15",
"assets/assets/login.png": "84a672b71924bcc0a9e9bae944112890",
"assets/assets/package.png": "b0c622405014125a6d0c3b39aadf9916",
"assets/assets/image1_notext.png": "83ee27fcd2f496f6221eb4c4d0ebf1b4",
"assets/assets/logo_white_noBack_256px.png": "84702eb5c77951e06c7b29b48f660f0c",
"assets/assets/logo_white_noBack_128px.png": "ae525529a829f767b226f062744701ca",
"assets/assets/map.png": "ac33649e7f3bef8a8c1294bc96fbae2b",
"assets/assets/resa_inputs.png": "13c0a10d275c9eb45f7927028335720a",
"assets/assets/why.png": "e74dbe35cc69ddf3602ba5f2262b9271",
"assets/assets/notif.png": "9384ebee4a2a79035249b26d4a1116df",
"assets/assets/pin_noborder_120px.png": "83f11022312d9bf78354b3b01204205c",
"assets/assets/ico.png": "71c69817596a0814f653b417eb84c014",
"assets/assets/logo_white_noBack_64px.png": "02a1558aed253a4b5d447468777e5d75",
"assets/assets/logo_purple_noBack_100px.png": "4f892631028f304555834b0f4bdb86ea",
"assets/assets/logo_purple_noBack_64px.png": "3f63cd1127b29233605a0082bd6fe6a9",
"assets/assets/pito.png": "cf4f9acbaff2d5f06cb02de457f956b3",
"assets/assets/logo_purple_noBack_128px.png": "f12786acc4e723995835c503fadb894f",
"assets/assets/screen_cart.png": "88817f6fcd047d96383f0e8aa68dcc79",
"assets/assets/logo_white_noBack_32px.png": "9878accd4bb0009114637f941f4eac3e",
"assets/assets/logo_purple_noBack_32px.png": "71c69817596a0814f653b417eb84c014",
"assets/assets/md/app_privacy.md": "bbb031e59115e402080a05a08bd5b8b4",
"assets/assets/md/privacy.md": "dd60c54e274bb4913beecb4c66ec38c1",
"assets/assets/logo_white_noBack_48px.png": "145d42e3a437333270e3c7081363d5b3",
"assets/assets/map_wPins_1080.png": "16094e18c12a93a14770a76f694a8b11",
"assets/assets/trust.png": "60075a70606c113ad99ca6a31f529260",
"assets/assets/qr.png": "dbfee4a7eed096259e91a29748ae20a7",
"assets/assets/app-store.png": "3baa08d5e7a2e2e91443963623bbc333",
"assets/assets/image4.png": "a1f0fec511c5d3211e79ced7a0ca17b2",
"assets/assets/map_wPins_720.png": "363f27d599c356ccec1c8b3cf30599b8",
"assets/assets/logo_purple_noBack_110px.png": "71e030aa8960568ef025f9de30205e76",
"assets/assets/image1.png": "48d67b553ff8cddb7af546a4b5da079e",
"assets/assets/yt2.jpg": "c0aed0d90dd7b7c0391efbc90fa3eba9",
"assets/assets/play-store.png": "2229fcab45e5a81bf04839e20297511e",
"assets/assets/image2.png": "6e66595b42340e0e55ad2cff333623c1",
"assets/assets/start.png": "5a8e6cc7fd86c4289360ffd9502784b6",
"assets/assets/logo_purple_noBack_256px.png": "9ee02ff0e29c7ab69fe11df553cb73ec",
"assets/assets/image3.png": "a333c46f9c228cc182d1b8da755a4b56",
"assets/google_fonts/MPLUSRounded1c-Thin.ttf": "ee0aa6a3dca41ea3f717cb1b3481f417",
"assets/google_fonts/MPLUSRounded1c-Bold.ttf": "d4599c8dc8ba3353fd83af468838f1f8",
"assets/google_fonts/MPLUSRounded1c-ExtraBold.ttf": "fc7e42ded9e4dd88949f2d9be3919306",
"assets/google_fonts/Varela-Regular.ttf": "24ba6c180e414dc24bbf34fe4c895f41",
"assets/google_fonts/MPLUSRounded1c-Light.ttf": "9c62a03e973fc7c73bfb935296a2b693",
"assets/google_fonts/MPLUSRounded1c-Black.ttf": "988787f5e9f48e6a950ac797c9cb5f28",
"assets/google_fonts/OFL.txt": "9f72222ea730de544131fb6e90924190",
"assets/google_fonts/VarelaRound-Regular.ttf": "3c3c18c24b0bd85a303bc3f2581d53fc",
"assets/google_fonts/MPLUSRounded1c-Medium.ttf": "428413a2d843a18cc400656f1b0c364f",
"assets/google_fonts/MPLUSRounded1c-Regular.ttf": "686088cf66e883b2d4c2e8c9cde6d32f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
