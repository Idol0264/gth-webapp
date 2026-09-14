window.GTH_CONFIG = {
  newUserFormUrl: "https://tally.so/r/81XNzo",
  existingUserFormUrl: "https://tally.so/r/gDEbqM",
  waitDays: 3
};


/* =========================================================
   GTH INDEX-ONLY NOTIFICATION PERMISSION
========================================================= */

(function () {

  function isIndexPage() {
    const path = window.location.pathname;

    return (
      path.endsWith("/") ||
      path.endsWith("/index.html")
    );
  }


  function addManifestFallback() {

    if (
      document.querySelector(
        'link[rel="manifest"]'
      )
    ) {
      return;
    }

    const manifest =
      document.createElement("link");

    manifest.rel = "manifest";
    manifest.href =
      "manifest.webmanifest";

    document.head.appendChild(manifest);

  }


  function addNotificationButton() {

    if (!isIndexPage()) {
      return;
    }

    if (
      typeof Notification === "undefined"
    ) {
      return;
    }


    const header =
      document.querySelector(
        ".site-header"
      );

    if (!header) {
      return;
    }


    if (
      document.getElementById(
        "gthNotificationButton"
      )
    ) {
      updateNotificationButton();
      return;
    }


    const button =
      document.createElement("button");

    button.id =
      "gthNotificationButton";

    button.type = "button";

    button.className =
      "gth-notification-button";

    button.setAttribute(
      "aria-label",
      "Allow GTH notifications"
    );

    button.innerHTML =
      '<span aria-hidden="true">🔔</span>' +
      '<span>Allow Notifications</span>';


    button.addEventListener(
      "click",
      async function () {

        try {

          const permission =
            await Notification.requestPermission();

          updateNotificationButton(
            permission
          );

        } catch (error) {

          updateNotificationButton();

        }

      }
    );


    const themeControls =
      header.querySelector(
        ".theme-controls"
      );


    if (themeControls) {

      header.insertBefore(
        button,
        themeControls
      );

    } else {

      header.appendChild(
        button
      );

    }


    updateNotificationButton();

  }


  function updateNotificationButton(
    permission
  ) {

    const button =
      document.getElementById(
        "gthNotificationButton"
      );

    if (!button) {
      return;
    }


    const currentPermission =
      permission ||
      (
        typeof Notification !== "undefined"
          ? Notification.permission
          : "denied"
      );


    if (
      currentPermission === "granted"
    ) {

      button.classList.add(
        "hidden"
      );

      return;

    }


    button.classList.remove(
      "hidden"
    );

  }


  function checkPermissionAgain() {

    if (!isIndexPage()) {
      return;
    }

    updateNotificationButton();

  }


  function start() {

    addManifestFallback();
    addNotificationButton();

    document.addEventListener(
      "visibilitychange",
      function () {

        if (
          document.visibilityState ===
          "visible"
        ) {

          checkPermissionAgain();

        }

      }
    );

    window.addEventListener(
      "focus",
      checkPermissionAgain
    );

  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();

  }

})();
