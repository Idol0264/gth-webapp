/* =========================================================
   GTH PLATFORM VISUAL EFFECTS
   VISIBLE / PREMIUM VERSION
   ========================================================= */

(() => {
  "use strict";

  const path = window.location.pathname.toLowerCase();

  let platform = "gth";

  if (
    path.includes("gt-connect") ||
    path.includes("gtconnect")
  ) {
    platform = "connect";
  } else if (path.includes("gtf")) {
    platform = "gtf";
  } else if (path.includes("gtc")) {
    platform = "gtc";
  } else if (path.includes("gts")) {
    platform = "gts";
  }

  document.body.classList.add(`platform-${platform}`);

  if (platform === "connect") {
    if (path.includes("dashboard")) {
      document.body.classList.add(
        "platform-connect-dashboard"
      );
    }

    createConnectEffects();
    return;
  }

  const configurations = {
    gth: {
      symbols: [
        "AI",
        "$",
        "▶",
        "</>",
        "◎",
        "◈",
        "☁",
        "↗",
        "◉",
        "+",
        "✦",
        "⌁"
      ],
      labels: [
        "AI",
        "FINANCE",
        "MEDIA",
        "SOFTWARE",
        "NETWORK",
        "DIGITAL"
      ],
      ai: true
    },

    gtf: {
      symbols: [
        "$",
        "₦",
        "↗",
        "↗",
        "▥",
        "◈",
        "◎",
        "₿",
        "%",
        "＋",
        "◆",
        "↗"
      ],
      labels: [
        "INVESTMENT",
        "MARKET",
        "GROWTH",
        "FINANCE",
        "DATA",
        "CAPITAL"
      ],
      ai: false
    },

    gtc: {
      symbols: [
        "▶",
        "●",
        "◉",
        "♫",
        "▣",
        "▶",
        "◎",
        "◌",
        "◆",
        "✦",
        "▤",
        "◍"
      ],
      labels: [
        "MEDIA",
        "VIDEO",
        "MUSIC",
        "CHANNELS",
        "ENTERTAINMENT",
        "CONTENT"
      ],
      ai: false
    },

    gts: {
      symbols: [
        "AI",
        "</>",
        "{}",
        "[]",
        "◈",
        "☁",
        "⚙",
        "◎",
        "▣",
        "⌘",
        "◉",
        "＋"
      ],
      labels: [
        "AI",
        "SOFTWARE",
        "APPS",
        "CODE",
        "CLOUD",
        "DIGITAL"
      ],
      ai: true
    }
  };

  const config = configurations[platform];

  if (!config) return;

  if (platform === "gth") {
    const gate = document.getElementById("gateScreen");

    if (gate) {
      addEffectTarget(gate, config);
    }

    const homeHero = document.querySelector(".gth-home-hero");

    if (homeHero) {
      addEffectTarget(homeHero, config);
    }

    return;
  }

  const hero = document.querySelector(".hero");

  if (hero) {
    addEffectTarget(hero, config);
  }
})();


/* =========================================================
   CREATE PLATFORM EFFECT FIELD
   ========================================================= */

function addEffectTarget(target, config) {
  if (!target) return;

  if (
    target.querySelector(
      ":scope > .platform-effects-layer"
    )
  ) {
    return;
  }

  target.classList.add("platform-effect-target");

  const layer = document.createElement("div");

  layer.className = "platform-effects-layer";
  layer.setAttribute("aria-hidden", "true");


  /* -------------------------------------------------------
     FLOATING SYMBOLS
     ------------------------------------------------------- */

  config.symbols.forEach((symbol, index) => {
    const item = document.createElement("span");

    item.className = "effect-symbol";
    item.textContent = symbol;

    const left =
      4 + ((index * 17) % 91);

    const top =
      8 + ((index * 23) % 78);

    const size =
      38 + ((index * 11) % 25);

    const duration =
      7 + ((index * 1.7) % 6);

    const delay =
      -((index * 1.3) % 8);

    const moveX =
      (index % 2 === 0 ? 1 : -1) *
      (7 + (index % 4) * 3);

    const moveY =
      -(8 + (index % 5) * 3);

    const rotation =
      (index % 2 === 0 ? -1 : 1) *
      (3 + (index % 5));

    /* Increased visibility */
    const opacity =
      0.38 +
      ((index % 4) * 0.06);

    item.style.setProperty(
      "--left",
      `${left}%`
    );

    item.style.setProperty(
      "--top",
      `${top}%`
    );

    item.style.setProperty(
      "--size",
      `${size}px`
    );

    item.style.setProperty(
      "--font-size",
      `${Math.max(
        10,
        Math.round(size * 0.25)
      )}px`
    );

    item.style.setProperty(
      "--duration",
      `${duration}s`
    );

    item.style.setProperty(
      "--delay",
      `${delay}s`
    );

    item.style.setProperty(
      "--move-x",
      `${moveX}px`
    );

    item.style.setProperty(
      "--move-y",
      `${moveY}px`
    );

    item.style.setProperty(
      "--rotation",
      `${rotation}deg`
    );

    item.style.setProperty(
      "--opacity",
      opacity.toFixed(2)
    );

    layer.appendChild(item);
  });


  /* -------------------------------------------------------
     FLOATING LABELS
     ------------------------------------------------------- */

  config.labels.forEach((label, index) => {
    const item = document.createElement("span");

    item.className = "effect-label";
    item.textContent = label;

    item.style.setProperty(
      "--left",
      `${9 + index * 15}%`
    );

    item.style.setProperty(
      "--top",
      `${18 + ((index * 19) % 65)}%`
    );

    item.style.setProperty(
      "--duration",
      `${8 + index * 0.8}s`
    );

    item.style.setProperty(
      "--delay",
      `${-(index * 1.4)}s`
    );

    item.style.setProperty(
      "--opacity",
      "0.30"
    );

    layer.appendChild(item);
  });


  /* -------------------------------------------------------
     AI NODE
     ------------------------------------------------------- */

  if (config.ai) {
    const ai = document.createElement("span");

    ai.className = "effect-ai";

    ai.style.setProperty(
      "--left",
      "76%"
    );

    ai.style.setProperty(
      "--top",
      "18%"
    );

    ai.style.setProperty(
      "--size",
      "64px"
    );

    ai.style.setProperty(
      "--duration",
      "5s"
    );

    ai.style.setProperty(
      "--delay",
      "-2s"
    );

    ai.style.setProperty(
      "--opacity",
      "0.42"
    );

    layer.appendChild(ai);
  }


  /* -------------------------------------------------------
     DIGITAL CONNECTION LINES
     ------------------------------------------------------- */

  for (let i = 0; i < 5; i++) {
    const line = document.createElement("span");

    line.className = "effect-line";

    line.style.setProperty(
      "--left",
      `${10 + i * 18}%`
    );

    line.style.setProperty(
      "--top",
      `${25 + ((i * 17) % 55)}%`
    );

    line.style.setProperty(
      "--length",
      `${80 + i * 25}px`
    );

    line.style.setProperty(
      "--rotation",
      `${i % 2 === 0 ? -15 : 15}deg`
    );

    line.style.setProperty(
      "--duration",
      `${6 + i}s`
    );

    line.style.setProperty(
      "--delay",
      `${-i}s`
    );

    line.style.setProperty(
      "--opacity",
      "0.24"
    );

    layer.appendChild(line);
  }


  /* -------------------------------------------------------
     PARTICLES
     ------------------------------------------------------- */

  for (let i = 0; i < 14; i++) {
    const particle =
      document.createElement("span");

    particle.className =
      "effect-particle";

    particle.style.setProperty(
      "--left",
      `${3 + ((i * 29) % 94)}%`
    );

    particle.style.setProperty(
      "--top",
      `${5 + ((i * 37) % 88)}%`
    );

    particle.style.setProperty(
      "--size",
      `${2 + (i % 3)}px`
    );

    particle.style.setProperty(
      "--duration",
      `${5 + (i % 6)}s`
    );

    particle.style.setProperty(
      "--delay",
      `${-(i * 0.7)}s`
    );

    particle.style.setProperty(
      "--opacity",
      `${0.30 + (i % 4) * 0.06}`
    );

    layer.appendChild(particle);
  }

  target.prepend(layer);
}


/* =========================================================
   GT CONNECT
   ========================================================= */

function createConnectEffects() {
  const layer =
    document.createElement("div");

  layer.className =
    "platform-effects-layer";

  layer.setAttribute(
    "aria-hidden",
    "true"
  );

  const symbols = [
    "◉",
    "◎",
    "⌁",
    "◆",
    "＋",
    "◈",
    "●",
    "◇",
    "⌘",
    "◍"
  ];

  symbols.forEach((symbol, index) => {
    const item =
      document.createElement("span");

    item.className =
      "effect-symbol";

    item.textContent = symbol;

    item.style.setProperty(
      "--left",
      `${5 + ((index * 21) % 90)}%`
    );

    item.style.setProperty(
      "--top",
      `${8 + ((index * 27) % 82)}%`
    );

    item.style.setProperty(
      "--size",
      `${34 + (index % 3) * 10}px`
    );

    item.style.setProperty(
      "--font-size",
      "14px"
    );

    item.style.setProperty(
      "--duration",
      `${7 + index * 0.4}s`
    );

    item.style.setProperty(
      "--delay",
      `${-(index * 0.8)}s`
    );

    item.style.setProperty(
      "--move-x",
      `${index % 2 === 0 ? 8 : -8}px`
    );

    item.style.setProperty(
      "--move-y",
      "-12px"
    );

    item.style.setProperty(
      "--rotation",
      "0deg"
    );

    item.style.setProperty(
      "--opacity",
      "0.28"
    );

    layer.appendChild(item);
  });

  document.body.prepend(layer);
}
