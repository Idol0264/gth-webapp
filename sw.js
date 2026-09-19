const CACHE_NAME = "gth-app-v3";


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
      GTH NAVIGATION RULE

      When the user opens or navigates
      to another page:

      ONLINE:
      → Load the requested page normally.

      OFFLINE:
      → NEVER load another cached GTH page.
      → Show offline.html instead.

      IMPORTANT:
      We do not redirect the page that
      the user is already viewing.
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

            return caches.match(
              "./offline.html"
            );

          })

      );

      return;

    }


    /*
      NORMAL FILES

      Keep using cached files when
      available so the page the user
      is already viewing can continue
      working while offline.
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
