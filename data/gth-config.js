window.GTH_CONFIG = {
  newUserFormUrl: "https://tally.so/r/81XNzo",
  existingUserFormUrl: "https://tally.so/r/gDEbqM",
  waitDays: 3
};


/* =========================================================
   GTH — INDEX-ONLY PWA INSTALL BUTTON
========================================================= */

(function () {

  let deferredInstallPrompt = null;


  /* -------------------------------------------------------
     INDEX PAGE CHECK
  ------------------------------------------------------- */

  function isIndexPage() {

    const path = window.location.pathname;

    return (
      path.endsWith("/") ||
      path.endsWith("/index.html")
    );

  }


  /* -------------------------------------------------------
     CHECK WHETHER GTH IS ALREADY INSTALLED
  ------------------------------------------------------- */

  function isGTHInstalled() {

    return (
      window.matchMedia(
        "(display-mode: standalone)"
      ).matches ||

      window.navigator.standalone === true
    );

  }


  /* -------------------------------------------------------
     CREATE INSTALL BUTTON
  ------------------------------------------------------- */

  function addInstallButton() {

    if (!isIndexPage()) {
      return;
    }


    const header =
      document.querySelector(".site-header");

    if (!header) {
      return;
    }


    if (
      document.getElementById(
        "gthInstallButton"
      )
    ) {
      updateInstallButton();
      return;
    }


    const button =
      document.createElement("button");

    button.id =
      "gthInstallButton";

    button.type =
      "button";

    button.className =
      "gth-install-button";

    button.setAttribute(
      "aria-label",
      "Install GTH"
    );


    button.innerHTML =
      '<span aria-hidden="true">＋</span>' +
      '<span>Install GTH</span>';


    button.addEventListener(
      "click",
      installGTH
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


    updateInstallButton();

  }


  /* -------------------------------------------------------
     UPDATE BUTTON
  ------------------------------------------------------- */

  function updateInstallButton() {

    const button =
      document.getElementById(
        "gthInstallButton"
      );

    if (!button) {
      return;
    }


    if (isGTHInstalled()) {

      button.classList.add(
        "hidden"
      );

      return;

    }


    button.classList.remove(
      "hidden"
    );

  }


  /* -------------------------------------------------------
     REAL INSTALL ACTION
  ------------------------------------------------------- */

  async function installGTH() {

    const button =
      document.getElementById(
        "gthInstallButton"
      );

    if (isGTHInstalled()) {

      updateInstallButton();
      return;

    }


    /*
      Chrome/Chromium has provided the
      real installation prompt.
    */

    if (deferredInstallPrompt) {

      try {

        deferredInstallPrompt.prompt();

        const result =
          await deferredInstallPrompt.userChoice;


        deferredInstallPrompt = null;


        if (
          result &&
          result.outcome === "accepted"
        ) {

          if (button) {
            button.classList.add(
              "hidden"
            );
          }

        } else {

          updateInstallButton();

        }

      } catch (error) {

        updateInstallButton();

      }

      return;

    }


    /*
      The browser has not supplied an
      install prompt yet.

      We do NOT request notification
      permission and we do NOT pretend
      that installation happened.
    */

    showInstallHelp();

  }


  /* -------------------------------------------------------
     FALLBACK MESSAGE
  ------------------------------------------------------- */

  function showInstallHelp() {

    let message =
      document.getElementById(
        "gthInstallMessage"
      );


    if (!message) {

      message =
        document.createElement("div");

      message.id =
        "gthInstallMessage";

      message.className =
        "gth-install-message";

      message.setAttribute(
        "role",
        "status"
      );


      document.body.appendChild(
        message
      );

    }


    message.textContent =
      "GTH can be installed from your browser menu. " +
      "Open the browser menu and choose “Install app” or “Add to Home screen”.";


    message.classList.add(
      "show"
    );


    window.setTimeout(
      function () {

        message.classList.remove(
          "show"
        );

      },
      5000
    );

  }


  /* -------------------------------------------------------
     BROWSER INSTALL PROMPT
  ------------------------------------------------------- */

  window.addEventListener(
    "beforeinstallprompt",
    function (event) {

      /*
        Stop the browser from automatically
        showing the prompt.

        We will show it only when the user
        taps "Install GTH".
      */

      event.preventDefault();

      deferredInstallPrompt =
        event;


      updateInstallButton();

    }
  );


  /* -------------------------------------------------------
     APP INSTALLED
  ------------------------------------------------------- */

  window.addEventListener(
    "appinstalled",
    function () {

      deferredInstallPrompt =
        null;

      updateInstallButton();

    }
  );


  /* -------------------------------------------------------
     RECHECK WHEN USER RETURNS TO THE SITE
  ------------------------------------------------------- */

  function recheckInstallState() {

    if (!isIndexPage()) {
      return;
    }

    updateInstallButton();

  }


    /* -------------------------------------------------------
     GTH CUSTOMER SERVICE BUTTON
     VISIBLE ONLY ON THE ACTUAL GTH HOME SCREEN
  ------------------------------------------------------- */

  function isActualGTHHomeVisible() {

    if (!isIndexPage()) {
      return false;
    }

    const homeScreen =
      document.getElementById("homeScreen");

    if (!homeScreen) {
      return false;
    }

    return !homeScreen.classList.contains("hidden");

  }


  /* -------------------------------------------------------
     UPDATE CUSTOMER SERVICE VISIBILITY
  ------------------------------------------------------- */

  function updateCustomerServiceButton() {

    const button =
      document.getElementById(
        "gthCustomerServiceButton"
      );

    if (!button) {
      return;
    }

    if (isActualGTHHomeVisible()) {

      button.classList.remove("hidden");

    } else {

      button.classList.add("hidden");

    }

  }


  /* -------------------------------------------------------
     CREATE CUSTOMER SERVICE BUTTON
  ------------------------------------------------------- */

  function addCustomerServiceButton() {

    if (!isIndexPage()) {
      return;
    }

    const header =
      document.querySelector(".site-header");

    if (!header) {
      return;
    }


    if (
      document.getElementById(
        "gthCustomerServiceButton"
      )
    ) {

      updateCustomerServiceButton();
      return;

    }


    const button =
      document.createElement("a");

    button.id =
      "gthCustomerServiceButton";

    button.className =
      "gth-customer-service-button hidden";

    button.href =
      "https://wa.me/qr/VGCCQ6WUPR4SO1";

    button.target =
      "_blank";

    button.rel =
      "noopener noreferrer";

    button.setAttribute(
      "aria-label",
      "Call GTH customer service on WhatsApp"
    );


    button.innerHTML = `
  <img
    src="images/customer%20service.png"
    alt=""
    class="gth-customer-service-image"
    aria-hidden="true"
  >
`;


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


    updateCustomerServiceButton();


    /* Watch the Home screen's hidden/visible state */

    const homeScreen =
      document.getElementById("homeScreen");

    if (homeScreen) {

      const observer =
        new MutationObserver(
          function () {

            updateCustomerServiceButton();

          }
        );

      observer.observe(
        homeScreen,
        {
          attributes: true,
          attributeFilter: ["class"]
        }
      );

    }

  }

  
  /* -------------------------------------------------------
     START
  ------------------------------------------------------- */

    function start() {

    addInstallButton();
    addCustomerServiceButton();

    recheckInstallState();
    updateCustomerServiceButton();

    document.addEventListener(
      "visibilitychange",
      function () {

        if (
          document.visibilityState ===
          "visible"
        ) {

          recheckInstallState();
          updateCustomerServiceButton();

        }

      }
    );


    window.addEventListener(
      "focus",
      function () {

        recheckInstallState();
        updateCustomerServiceButton();

      }
    );


    window.addEventListener(
      "pageshow",
      function () {

        recheckInstallState();
        updateCustomerServiceButton();

      }
    );

  }
