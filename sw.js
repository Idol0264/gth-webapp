const CACHE_NAME = "gth-app-v1";


const APP_SHELL = [

  "./",
  "./index.html",

  "./style.css",
  "./platform-effects.css",

  "./app.js",
  "./platform-effects.js",

  "./gth-icon.svg",

  "./offline.html",

  "./manifest.webmanifest",

  "./data/gth-config.js"

];


self.addEventListener(
  "install",
  event => {

    event.waitUntil(

      caches
        .open(CACHE_NAME)
        .then(cache => {

          return Promise.all(

            APP_SHELL.map(file =>

              cache.add(file)
                .catch(() => null)

            )

          );

        })

        .then(() =>
          self.skipWaiting()
        )

    );

  }
);


self.addEventListener(
  "activate",
  event => {

    event.waitUntil(

      caches
        .keys()
        .then(keys => {

          return Promise.all(

            keys
              .filter(
                key =>
                  key !== CACHE_NAME
              )
              .map(
                key =>
                  caches.delete(key)
              )

          );

        })

        .then(() =>
          self.clients.claim()
        )

    );

  }
);


self.addEventListener(
  "fetch",
  event => {

    const request =
      event.request;


    /*
      Navigation request:
      try internet first.
      If it fails, use cached page.
      If no cached page exists,
      show GTH offline screen.
    */

    if (
      request.mode === "navigate"
    ) {

      event.respondWith(

        fetch(request)
          .then(response => {

            if (
              response &&
              response.ok
            ) {

              const copy =
                response.clone();

              caches
                .open(CACHE_NAME)
                .then(cache => {

                  cache.put(
                    request,
                    copy
                  );

                })
                .catch(() => {});

            }

            return response;

          })

          .catch(() => {

            return caches
              .match(request)
              .then(cached => {

                return (
                  cached ||
                  caches.match(
                    "./offline.html"
                  )
                );

              });

          })

      );

      return;

    }


    /*
      Normal files:
      use cache when available,
      otherwise try the network.
    */

    event.respondWith(

      caches
        .match(request)
        .then(cached => {

          if (cached) {
            return cached;
          }

          return fetch(request);

        })

    );

  }
);
