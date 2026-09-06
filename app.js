/* =========================================================
   GTH — God’stime Holdings
   Main Application Logic
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------
     CONFIG
     ------------------------------------------------------- */

  const config = window.GTH_CONFIG || {
    newUserFormUrl: "#",
    existingUserFormUrl: "#",
    waitDays: 3
  };

  const WAIT_TIME =
    Number(config.waitDays || 3) *
    24 *
    60 *
    60 *
    1000;


  /* -------------------------------------------------------
     STORAGE KEYS
     ------------------------------------------------------- */

  const STORAGE = {
    human: "gth_human_v1",
    policy: "gth_policy_v1",
    verified: "gth_verified_v1",
    existingStarted: "gth_existing_started_v1",
    existingStartTime: "gth_existing_start_time_v1",
    theme: "gth_theme_v1"
  };


  /* -------------------------------------------------------
     ELEMENTS
     ------------------------------------------------------- */

  const gateScreen = document.getElementById("gateScreen");
  const holdingScreen = document.getElementById("holdingScreen");
  const homeScreen = document.getElementById("homeScreen");

  const humanStep = document.getElementById("humanStep");
  const policyStep = document.getElementById("policyStep");
  const choiceStep = document.getElementById("choiceStep");
  const newUserStep = document.getElementById("newUserStep");
  const existingUserStep = document.getElementById("existingUserStep");

  const humanChallenge = document.getElementById("humanChallenge");
  const humanInput = document.getElementById("humanInput");
  const humanButton = document.getElementById("humanButton");
  const humanError = document.getElementById("humanError");

  const policyCheckbox = document.getElementById("policyCheckbox");
  const policyButton = document.getElementById("policyButton");
  const policyError = document.getElementById("policyError");

  const newUserButton = document.getElementById("newUserButton");
  const existingUserButton = document.getElementById("existingUserButton");

  const newUserFormLink =
    document.getElementById("newUserFormLink");

  const existingUserFormLink =
    document.getElementById("existingUserFormLink");

  const newUserSubmittedButton =
    document.getElementById("newUserSubmittedButton");

  const existingUserSubmittedButton =
    document.getElementById("existingUserSubmittedButton");

  const holdingTitle =
    document.getElementById("holdingTitle");

  const holdingMessage =
    document.getElementById("holdingMessage");

  const countdown =
    document.getElementById("countdown");

  const countdownBox =
    document.getElementById("countdownBox");

  const loginButton =
    document.getElementById("loginButton");

  const abandonButton =
    document.getElementById("abandonButton");

  const statusIcon =
    document.getElementById("statusIcon");

  const themeButton =
    document.getElementById("themeButton");

  const themeMenu =
    document.getElementById("themeMenu");

  const currentYear =
    document.getElementById("currentYear");


  /* -------------------------------------------------------
     BASIC SETUP
     ------------------------------------------------------- */

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (newUserFormLink) {
    newUserFormLink.href = config.newUserFormUrl;
  }

  if (existingUserFormLink) {
    existingUserFormLink.href = config.existingUserFormUrl;
  }


  /* -------------------------------------------------------
     SCREEN CONTROL
     ------------------------------------------------------- */

  function hideAllScreens() {
    gateScreen?.classList.add("hidden");
    holdingScreen?.classList.add("hidden");
    homeScreen?.classList.add("hidden");
  }

  function showGate() {
    hideAllScreens();
    gateScreen?.classList.remove("hidden");
  }

  function showHolding() {
    hideAllScreens();
    holdingScreen?.classList.remove("hidden");
    updateHoldingPage();
  }

  function showHome() {
    hideAllScreens();
    homeScreen?.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  /* -------------------------------------------------------
     GATE STEP CONTROL
     ------------------------------------------------------- */

  function hideGateSteps() {
    humanStep?.classList.add("hidden");
    policyStep?.classList.add("hidden");
    choiceStep?.classList.add("hidden");
    newUserStep?.classList.add("hidden");
    existingUserStep?.classList.add("hidden");
  }

  function showHumanStep() {
    hideGateSteps();
    humanStep?.classList.remove("hidden");
    createHumanChallenge();
  }

  function showPolicyStep() {
    hideGateSteps();
    policyStep?.classList.remove("hidden");
  }

  function showChoiceStep() {
    hideGateSteps();
    choiceStep?.classList.remove("hidden");
  }

  function showNewUserStep() {
    hideGateSteps();
    newUserStep?.classList.remove("hidden");
  }

  function showExistingUserStep() {
    hideGateSteps();
    existingUserStep?.classList.remove("hidden");
  }


  /* -------------------------------------------------------
     HUMAN VERIFICATION
     ------------------------------------------------------- */

  let humanAnswer = "";

  function createHumanChallenge() {

    const characters =
      "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let result = "";

    for (let i = 0; i < 5; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    humanAnswer = result;

    if (humanChallenge) {
      humanChallenge.textContent = result;
    }

    if (humanInput) {
      humanInput.value = "";
      humanInput.focus();
    }
  }


  humanButton?.addEventListener("click", () => {

    const answer =
      humanInput?.value
        .trim()
        .toUpperCase();

    if (answer !== humanAnswer) {

      if (humanError) {
        humanError.textContent =
          "Incorrect characters. Please try again.";
      }

      createHumanChallenge();
      return;
    }

    localStorage.setItem(STORAGE.human, "true");

    if (humanError) {
      humanError.textContent = "";
    }

    showPolicyStep();
  });


  humanInput?.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
      humanButton?.click();
    }

  });


  /* -------------------------------------------------------
     POLICY
     ------------------------------------------------------- */

  policyButton?.addEventListener("click", () => {

    if (!policyCheckbox?.checked) {

      if (policyError) {
        policyError.textContent =
          "You must agree to the GTH Policies to continue.";
      }

      return;
    }

    localStorage.setItem(STORAGE.policy, "true");

    if (policyError) {
      policyError.textContent = "";
    }

    showChoiceStep();
  });


  /* -------------------------------------------------------
     ACCOUNT CHOICE
     ------------------------------------------------------- */

  newUserButton?.addEventListener("click", () => {
    showNewUserStep();
  });

  existingUserButton?.addEventListener("click", () => {
    showExistingUserStep();
  });


  /* -------------------------------------------------------
     NEW USER
     ------------------------------------------------------- */

  newUserSubmittedButton?.addEventListener("click", () => {

    /*
      Tally handles the actual registration.

      The browser only records that the user completed
      this step. No password, secret or authentication
      information is stored here.
    */

    localStorage.setItem(STORAGE.verified, "true");

    showHome();
  });


  /* -------------------------------------------------------
     EXISTING USER
     ------------------------------------------------------- */

  existingUserSubmittedButton?.addEventListener("click", () => {

    const now = Date.now();

    localStorage.setItem(
      STORAGE.existingStarted,
      "true"
    );

    localStorage.setItem(
      STORAGE.existingStartTime,
      String(now)
    );

    localStorage.removeItem(STORAGE.verified);

    showHolding();
  });


  /* -------------------------------------------------------
     HOLDING PAGE
     ------------------------------------------------------- */

  function updateHoldingPage() {

    const startTime = Number(
      localStorage.getItem(
        STORAGE.existingStartTime
      )
    );

    if (!startTime) {
      showGate();
      showHumanStep();
      return;
    }

    const finishTime =
      startTime + WAIT_TIME;

    const remaining =
      finishTime - Date.now();

    if (remaining <= 0) {

      if (holdingTitle) {
        holdingTitle.textContent =
          "Verification Waiting Period Complete";
      }

      if (holdingMessage) {
        holdingMessage.textContent =
          "The 3-day waiting period is complete. You can now log in.";
      }

      if (statusIcon) {
        statusIcon.textContent = "✓";
      }

      if (countdownBox) {
        countdownBox.classList.add("hidden");
      }

      loginButton?.classList.remove("hidden");

      return;
    }

    loginButton?.classList.add("hidden");

    if (holdingTitle) {
      holdingTitle.textContent =
        "Verification Pending";
    }

    if (holdingMessage) {
      holdingMessage.textContent =
        "Your information has been submitted successfully. Please wait up to 3 days while your information is reviewed.";
    }

    if (statusIcon) {
      statusIcon.textContent = "⌛";
    }

    if (countdownBox) {
      countdownBox.classList.remove("hidden");
    }

    if (countdown) {
      countdown.textContent =
        formatRemainingTime(remaining);
    }
  }


  function formatRemainingTime(milliseconds) {

    let seconds =
      Math.max(0, Math.floor(milliseconds / 1000));

    const days =
      Math.floor(seconds / 86400);

    seconds %= 86400;

    const hours =
      Math.floor(seconds / 3600);

    seconds %= 3600;

    const minutes =
      Math.floor(seconds / 60);

    seconds %= 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }


  loginButton?.addEventListener("click", () => {

    localStorage.setItem(
      STORAGE.verified,
      "true"
    );

    localStorage.removeItem(
      STORAGE.existingStarted
    );

    localStorage.removeItem(
      STORAGE.existingStartTime
    );

    showHome();
  });


  /* -------------------------------------------------------
     ABANDON EXISTING ACCOUNT PROCESS
     ------------------------------------------------------- */

  abandonButton?.addEventListener("click", () => {

    const confirmed =
      window.confirm(
        "This will cancel the current waiting process and allow you to start a new account process. Continue?"
      );

    if (!confirmed) {
      return;
    }

    localStorage.removeItem(
      STORAGE.existingStarted
    );

    localStorage.removeItem(
      STORAGE.existingStartTime
    );

    localStorage.removeItem(
      STORAGE.verified
    );

    /*
      Human verification and policy agreement remain valid
      during the current browser session.
    */

    showGate();
    showChoiceStep();
  });


  /* -------------------------------------------------------
     THEME SYSTEM
     -------------------------------------------------------

     Available themes:

     gold
     blue
     green
     system

     "system" follows the phone/browser light or dark mode.
     The color theme remains GTH gold by default.
     ------------------------------------------------------- */

  function applyTheme(theme) {

    if (theme === "system" || !theme) {

      document.body.removeAttribute("data-theme");

      localStorage.setItem(
        STORAGE.theme,
        "system"
      );

      return;
    }

    document.body.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      STORAGE.theme,
      theme
    );
  }


  function loadTheme() {

    const savedTheme =
      localStorage.getItem(STORAGE.theme);

    if (
      savedTheme === "gold" ||
      savedTheme === "blue" ||
      savedTheme === "green"
    ) {
      applyTheme(savedTheme);
      return;
    }

    applyTheme("system");
  }


  themeButton?.addEventListener("click", () => {

    themeMenu?.classList.toggle("hidden");

  });


  document.querySelectorAll(
    "[data-theme]"
  ).forEach((button) => {

    button.addEventListener("click", () => {

      const selectedTheme =
        button.getAttribute("data-theme");

      applyTheme(selectedTheme);

      themeMenu?.classList.add("hidden");

    });

  });


  document.addEventListener("click", (event) => {

    if (
      themeMenu &&
      themeButton &&
      !themeMenu.contains(event.target) &&
      !themeButton.contains(event.target)
    ) {
      themeMenu.classList.add("hidden");
    }

  });


  /* -------------------------------------------------------
     NAVIGATION
     ------------------------------------------------------- */

  document.querySelectorAll(
    "[data-page]"
  ).forEach((link) => {

    link.addEventListener("click", (event) => {

      event.preventDefault();

      if (
        localStorage.getItem(STORAGE.verified) !== "true"
      ) {
        return;
      }

      const target =
        link.getAttribute("data-page");

      showHome();

      setTimeout(() => {

        const element =
          document.getElementById(target);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }

      }, 50);

    });

  });


  document.getElementById(
    "brandLink"
  )?.addEventListener("click", (event) => {

    event.preventDefault();

    if (
      localStorage.getItem(STORAGE.verified) === "true"
    ) {
      showHome();
    }

  });


  /* -------------------------------------------------------
     INITIAL STATE
     ------------------------------------------------------- */

  function initializeApp() {

    loadTheme();

    const verified =
      localStorage.getItem(
        STORAGE.verified
      ) === "true";

    const existingStarted =
      localStorage.getItem(
        STORAGE.existingStarted
      ) === "true";

    const humanVerified =
      localStorage.getItem(
        STORAGE.human
      ) === "true";

    const policyAccepted =
      localStorage.getItem(
        STORAGE.policy
      ) === "true";


    /* Already successfully verified */

    if (verified) {
      showHome();
      return;
    }


    /* Existing account process already started */

    if (
      existingStarted &&
      localStorage.getItem(
        STORAGE.existingStartTime
      )
    ) {
      showHolding();
      return;
    }


    /* Human verification completed */

    showGate();

    if (!humanVerified) {
      showHumanStep();
      return;
    }


    /* Human verification completed,
       policy not completed */

    if (!policyAccepted) {
      showPolicyStep();
      return;
    }


    /* Both completed */

    showChoiceStep();
  }


  initializeApp();


  /* -------------------------------------------------------
     UPDATE HOLDING PAGE TIMER
     ------------------------------------------------------- */

  setInterval(() => {

    if (
      !holdingScreen?.classList.contains("hidden")
    ) {
      updateHoldingPage();
    }

  }, 1000);

});
