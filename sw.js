const appCacheNames = [
  'glazing-scraper--short-term--003',
  'glazing-scraper--long-term--001'
];

const appCache = [
  {
    name: appCacheNames[0],
    files: [
      '/',
      'index.html',
      'css/styles.aaecf0493cc4f9429e653bb74918d69a.css',
      'js/scripts.636b098d6b1e5004eb69.js',
      'js/worker.18a309d5c77a2383530b.js'
    ]
  },
  {
    name: appCacheNames[1],
    files: [
      'fonts/Montserrat-Black.ttf',
      'fonts/Montserrat-BlackItalic.ttf',
      'fonts/Montserrat-Bold.ttf',
      'fonts/Montserrat-BoldItalic.ttf',
      'fonts/Montserrat-ExtraBold.ttf',
      'fonts/Montserrat-ExtraBoldItalic.ttf',
      'fonts/Montserrat-ExtraLight.ttf',
      'fonts/Montserrat-ExtraLightItalic.ttf',
      'fonts/Montserrat-Italic.ttf',
      'fonts/Montserrat-Light.ttf',
      'fonts/Montserrat-LightItalic.ttf',
      'fonts/Montserrat-Medium.ttf',
      'fonts/Montserrat-MediumItalic.ttf',
      'fonts/Montserrat-Regular.ttf',
      'fonts/Montserrat-SemiBold.ttf',
      'fonts/Montserrat-SemiBoldItalic.ttf',
      'fonts/Montserrat-Thin.ttf',
      'fonts/Montserrat-ThinItalic.ttf'
    ]
  }
];

self.addEventListener('install', (e) => {
  self.skipWaiting();

  e.waitUntil((
    Promise.all(
      appCache.map((appCache) => {
        caches.open(appCache.name).then((cache) => {
          return cache.addAll(appCache.files);
        })
      })
    )
  ));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (!appCacheNames.includes(key)) {
          return caches.delete(key);
        }
      }));
    })
  ));

  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  e.respondWith((
    caches.match(e.request).then((response) => {
      return response || fetch(e.request).catch(() => {
        console.log('[ServiceWorker] Caught', e.request.url);
      });
    })
  ));
});
