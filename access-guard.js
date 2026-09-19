/* =========================================================
   GTH — Protected Page Access Guard
   Sends unverified visitors to the main GTH verification flow.
   ========================================================= */

(function () {

  const VERIFIED_KEY = "gth_verified_v1";
  const RETURN_KEY = "gth_return_to_v1";

  /*
    index.html is the public entrance/gate.
    Do not protect it with this guard.
  */

  const file =
    (window.location.pathname.split("/").pop() || "index.html")
      .toLowerCase();

  if (file === "index.html" || file === "") {
    return;
  }


  /*
    Check whether this browser has already
    completed the GTH verification process.
  */

  if (
    localStorage.getItem(VERIFIED_KEY) === "true"
  ) {
    return;
  }


  /*
    Visitor is NOT verified.

    Save the exact page they originally tried
    to open so we can return them there after
    verification.
  */

  const requestedPath =
    window.location.pathname +
    window.location.search +
    window.location.hash;


  try {

    sessionStorage.setItem(
      RETURN_KEY,
      requestedPath
    );

  } catch (error) {

    // Continue to verification even if
    // sessionStorage is unavailable.

  }


  /*
    Send visitor to the main GTH entrance.
  */

  const indexUrl =
    new URL(
      "index.html",
      document.baseURI
    );


  window.location.replace(
    indexUrl.href
  );

})();
