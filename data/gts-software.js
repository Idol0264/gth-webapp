const GTS_SOFTWARE = [

  {
    id: "example-web-app",
    name: "Example Web App",
    category: "WEB APP",
    description: "An example web application available through GTS.",
    image: "images/software-placeholder.jpg",
    type: ["web"],
    platforms: {
      web: "https://example.com"
    },
    page: "gts-software.html"
  },

  {
    id: "example-mobile-app",
    name: "Example Mobile App",
    category: "MOBILE APP",
    description: "An example application available for Android and iOS.",
    image: "images/software-placeholder.jpg",
    type: ["android", "ios"],
    platforms: {
      android: "#",
      ios: "#"
    },
    page: "gts-software.html"
  },

  {
    id: "example-desktop-software",
    name: "Example Desktop Software",
    category: "DESKTOP SOFTWARE",
    description: "An example desktop application available through GTS.",
    image: "images/software-placeholder.jpg",
    type: ["windows"],
    platforms: {
      windows: "#"
    },
    page: "gts-software.html"
  },

  {
    id: "wordpress-com",
    name: "WordPress.com",
    category: "WEB APP",
    description: "Create, build and manage websites with WordPress.com, a managed WordPress platform for websites, blogs, businesses and online stores.",
    image: "images/wordpress.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://wordpress.com/",
      android: "https://play.google.com/store/apps/details?id=org.wordpress.android",
      ios: "https://apps.apple.com/app/wordpress/id335703880"
    },
    page: "gts-software.html"
  },

  {
    id: "canva",
    name: "Canva",
    category: "DESIGN",
    description: "Create designs, presentations, videos, documents, social media content and more with Canva.",
    image: "images/canva.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://www.canva.com/",
      android: "https://play.google.com/store/apps/details?id=com.canva.editor",
      ios: "https://apps.apple.com/app/canva-design-photo-video/id897446215",
      windows: "https://www.canva.com/download/windows/",
      mac: "https://www.canva.com/download/mac/"
    },
    page: "gts-software.html"
  },

  {
    id: "google-drive",
    name: "Google Drive",
    category: "CLOUD STORAGE",
    description: "Store, manage, share and collaborate on files securely with Google Drive across your devices.",
    image: "images/google-drive.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://drive.google.com/",
      android: "https://play.google.com/store/apps/details?id=com.google.android.apps.docs",
      ios: "https://apps.apple.com/app/google-drive/id507874739",
      windows: "https://www.google.com/drive/download/",
      mac: "https://www.google.com/drive/download/"
    },
    page: "gts-software.html"
  },

  {
    id: "zoom",
    name: "Zoom",
    category: "COMMUNICATION",
    description: "Meet, communicate and collaborate online with Zoom for video meetings, chat, webinars and more.",
    image: "images/zoom.jpg",
    type: ["web", "android", "ios", "windows", "mac", "linux"],
    platforms: {
      web: "https://zoom.us/",
      android: "https://play.google.com/store/apps/details?id=us.zoom.videomeetings",
      ios: "https://apps.apple.com/app/zoom-workplace/id546505307",
      windows: "https://zoom.us/download",
      mac: "https://zoom.us/download",
      linux: "https://zoom.us/download"
    },
    page: "gts-software.html"
  },

  {
    id: "notion",
    name: "Notion",
    category: "PRODUCTIVITY",
    description: "Organize notes, documents, wikis, projects and tasks in one flexible workspace with Notion.",
    image: "images/notion.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://www.notion.com/",
      android: "https://play.google.com/store/apps/details?id=notion.id",
      ios: "https://apps.apple.com/app/notion-notes-tasks-ai/id1232780281",
      windows: "https://www.notion.com/desktop",
      mac: "https://www.notion.com/desktop"
    },
    page: "gts-software.html"
  },

  {
    id: "trello",
    name: "Trello",
    category: "PRODUCTIVITY",
    description: "Organize projects, tasks and workflows with Trello boards, lists and cards.",
    image: "images/trello.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://trello.com/",
      android: "https://play.google.com/store/apps/details?id=com.trello",
      ios: "https://apps.apple.com/app/trello-manage-team-projects/id461504587",
      windows: "https://trello.com/platforms",
      mac: "https://trello.com/platforms"
    },
    page: "gts-software.html"
  },

  {
    id: "figma",
    name: "Figma",
    category: "DESIGN",
    description: "Design, prototype and collaborate on digital products with Figma's collaborative design platform.",
    image: "images/figma.jpg",
    type: ["web", "windows", "mac"],
    platforms: {
      web: "https://www.figma.com/",
      windows: "https://www.figma.com/downloads/",
      mac: "https://www.figma.com/downloads/"
    },
    page: "gts-software.html"
  },

  {
    id: "dropbox",
    name: "Dropbox",
    category: "CLOUD STORAGE",
    description: "Store, sync, organize and share files securely with Dropbox across your devices.",
    image: "images/dropbox.jpg",
    type: ["web", "android", "ios", "windows", "mac", "linux"],
    platforms: {
      web: "https://www.dropbox.com/",
      android: "https://play.google.com/store/apps/details?id=com.dropbox.android",
      ios: "https://apps.apple.com/app/dropbox-cloud-storage-to-backup-photos/id327630330",
      windows: "https://www.dropbox.com/desktop",
      mac: "https://www.dropbox.com/desktop",
      linux: "https://www.dropbox.com/install-linux"
    },
    page: "gts-software.html"
  },

  {
    id: "microsoft-365",
    name: "Microsoft 365",
    category: "PRODUCTIVITY",
    description: "Create, edit, collaborate and work across Word, Excel, PowerPoint, Outlook, OneDrive and other Microsoft 365 apps and services.",
    image: "images/microsoft-365.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://www.microsoft.com/microsoft-365",
      android: "https://play.google.com/store/apps/details?id=com.microsoft.office.officehubrow",
      ios: "https://apps.apple.com/app/microsoft-365/id541164041",
      windows: "https://www.microsoft.com/microsoft-365/download-office",
      mac: "https://www.microsoft.com/microsoft-365/download-office"
    },
    page: "gts-software.html"
  },

  {
    id: "slack",
    name: "Slack",
    category: "COMMUNICATION",
    description: "Communicate and collaborate with teams through channels, messaging, file sharing, voice, video and connected work tools.",
    image: "images/slack.jpg",
    type: ["web", "android", "ios", "windows", "mac", "linux"],
    platforms: {
      web: "https://slack.com/",
      android: "https://slack.com/downloads/android",
      ios: "https://slack.com/downloads/ios",
      windows: "https://slack.com/downloads/windows",
      mac: "https://slack.com/downloads/mac",
      linux: "https://slack.com/downloads"
    },
    page: "gts-software.html"
  },

  {
    id: "adobe-creative-cloud",
    name: "Adobe Creative Cloud",
    category: "DESIGN",
    description: "Access a collection of creative applications and services for photography, graphic design, video, illustration and more.",
    image: "images/adobe-creative-cloud.jpg",
    type: ["web", "windows", "mac"],
    platforms: {
      web: "https://www.adobe.com/creativecloud.html",
      windows: "https://www.adobe.com/creativecloud/desktop-app.html",
      mac: "https://www.adobe.com/creativecloud/desktop-app.html"
    },
    page: "gts-software.html"
  },

  {
    id: "adobe-photoshop",
    name: "Adobe Photoshop",
    category: "DESIGN",
    description: "Create, edit and enhance images, graphics and digital artwork with Adobe Photoshop.",
    image: "images/adobe-photoshop.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://www.adobe.com/products/photoshop.html",
      android: "https://play.google.com/store/apps/details?id=com.adobe.psmobile",
      ios: "https://apps.apple.com/app/adobe-photoshop/id1457771281",
      windows: "https://www.adobe.com/products/photoshop.html",
      mac: "https://www.adobe.com/products/photoshop.html"
    },
    page: "gts-software.html"
  },

  {
    id: "adobe-illustrator",
    name: "Adobe Illustrator",
    category: "DESIGN",
    description: "Create vector graphics, illustrations, logos, icons and other scalable artwork with Adobe Illustrator.",
    image: "images/adobe-illustrator.jpg",
    type: ["web", "windows", "mac"],
    platforms: {
      web: "https://www.adobe.com/products/illustrator.html",
      windows: "https://www.adobe.com/products/illustrator.html",
      mac: "https://www.adobe.com/products/illustrator.html"
    },
    page: "gts-software.html"
  },

  {
    id: "adobe-acrobat",
    name: "Adobe Acrobat",
    category: "PRODUCTIVITY",
    description: "Create, edit, convert, review, sign and manage PDF documents with Adobe Acrobat.",
    image: "images/adobe-acrobat.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://www.adobe.com/acrobat.html",
      android: "https://play.google.com/store/apps/details?id=com.adobe.reader",
      ios: "https://apps.apple.com/app/adobe-acrobat-reader-edit-pdf/id469337564",
      windows: "https://www.adobe.com/acrobat/desktop.html",
      mac: "https://www.adobe.com/acrobat/desktop.html"
    },
    page: "gts-software.html"
  },

  {
    id: "adobe-premiere-pro",
    name: "Adobe Premiere Pro",
    category: "VIDEO",
    description: "Edit, create and produce professional videos with Adobe Premiere Pro.",
    image: "images/adobe-premiere-pro.jpg",
    type: ["web", "windows", "mac"],
    platforms: {
      web: "https://www.adobe.com/products/premiere.html",
      windows: "https://www.adobe.com/products/premiere.html",
      mac: "https://www.adobe.com/products/premiere.html"
    },
    page: "gts-software.html"
  },

  {
    id: "adobe-express",
    name: "Adobe Express",
    category: "DESIGN",
    description: "Create social posts, graphics, videos, flyers, presentations and other visual content with Adobe Express.",
    image: "images/adobe-express.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://www.adobe.com/express/",
      android: "https://play.google.com/store/apps/details?id=com.adobe.spark.post",
      ios: "https://apps.apple.com/app/adobe-express-ai-photo-video/id1051937863",
      windows: "https://www.adobe.com/express/",
      mac: "https://www.adobe.com/express/"
    },
    page: "gts-software.html"
  },

  {
    id: "capcut",
    name: "CapCut",
    category: "VIDEO",
    description: "Create and edit videos with CapCut's video editing tools, templates, effects and creative features.",
    image: "images/capcut.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://www.capcut.com/",
      android: "https://play.google.com/store/apps/details?id=com.lemon.lvoverseas",
      ios: "https://apps.apple.com/app/capcut-video-editor/id1500855883",
      windows: "https://www.capcut.com/download",
      mac: "https://www.capcut.com/download"
    },
    page: "gts-software.html"
  },

  {
    id: "github",
    name: "GitHub",
    category: "DEVELOPER",
    description: "Build, collaborate on, manage and deploy software projects with GitHub.",
    image: "images/github.jpg",
    type: ["web", "windows", "mac"],
    platforms: {
      web: "https://github.com/",
      windows: "https://desktop.github.com/download/",
      mac: "https://desktop.github.com/download/"
    },
    page: "gts-software.html"
  },

  {
    id: "gitlab",
    name: "GitLab",
    category: "DEVELOPER",
    description: "Plan, develop, secure and deploy software with GitLab's DevSecOps platform.",
    image: "images/gitlab.jpg",
    type: ["web"],
    platforms: {
      web: "https://gitlab.com/"
    },
    page: "gts-software.html"
  },

  {
    id: "replit",
    name: "Replit",
    category: "DEVELOPER",
    description: "Build websites, applications and software projects in the browser with Replit.",
    image: "images/replit.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://replit.com/",
      android: "https://play.google.com/store/apps/details?id=com.replit.app",
      ios: "https://apps.apple.com/app/replit-code-anything/id1614023053"
    },
    page: "gts-software.html"
  },

  {
    id: "codepen",
    name: "CodePen",
    category: "DEVELOPER",
    description: "Create, test, share and discover front-end web development projects with CodePen.",
    image: "images/codepen.jpg",
    type: ["web"],
    platforms: {
      web: "https://codepen.io/"
    },
    page: "gts-software.html"
  },

  {
    id: "vercel",
    name: "Vercel",
    category: "DEVELOPER",
    description: "Build, deploy and scale websites, web applications and AI-powered applications with Vercel.",
    image: "images/vercel.jpg",
    type: ["web"],
    platforms: {
      web: "https://vercel.com/"
    },
    page: "gts-software.html"
  },

  {
    id: "netlify",
    name: "Netlify",
    category: "DEVELOPER",
    description: "Build, deploy and manage modern websites and web applications with Netlify.",
    image: "images/netlify.jpg",
    type: ["web"],
    platforms: {
      web: "https://www.netlify.com/"
    },
    page: "gts-software.html"
  },

  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "AI",
    description: "An AI assistant for writing, learning, coding, brainstorming, analysis and many other everyday tasks.",
    image: "images/chatgpt.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://chatgpt.com/",
      android: "https://play.google.com/store/apps/details?id=com.openai.chatgpt",
      ios: "https://apps.apple.com/app/chatgpt/id6448311069",
      windows: "https://chatgpt.com/download/",
      mac: "https://chatgpt.com/download/"
    },
    page: "gts-software.html"
  },

  {
    id: "google-gemini",
    name: "Google Gemini",
    category: "AI",
    description: "Google's AI assistant for answering questions, generating content, analyzing information and helping with everyday tasks.",
    image: "images/google-gemini.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://gemini.google.com/",
      android: "https://play.google.com/store/apps/details?id=com.google.android.apps.bard",
      ios: "https://apps.apple.com/app/google-gemini/id6477489729"
    },
    page: "gts-software.html"
  },

  {
    id: "claude",
    name: "Claude",
    category: "AI",
    description: "An AI assistant from Anthropic for writing, analysis, coding, research and problem solving.",
    image: "images/claude.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://claude.ai/",
      android: "https://play.google.com/store/apps/details?id=com.anthropic.claude",
      ios: "https://apps.apple.com/app/claude-by-anthropic/id6473753684"
    },
    page: "gts-software.html"
  },

  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    category: "AI",
    description: "Microsoft's AI assistant for answering questions, creating content, researching information and getting work done.",
    image: "images/microsoft-copilot.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://copilot.microsoft.com/",
      android: "https://play.google.com/store/apps/details?id=com.microsoft.copilot",
      ios: "https://apps.apple.com/app/microsoft-copilot/id6472538445"
    },
    page: "gts-software.html"
  },

  {
    id: "perplexity",
    name: "Perplexity",
    category: "AI",
    description: "An AI-powered search and answer platform that provides conversational responses with sources and links.",
    image: "images/perplexity.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://www.perplexity.ai/",
      android: "https://play.google.com/store/apps/details?id=ai.perplexity.app.android",
      ios: "https://apps.apple.com/app/perplexity-ask-anything/id1668000334"
    },
    page: "gts-software.html"
  },

  {
    id: "deepl",
    name: "DeepL",
    category: "AI",
    description: "AI-powered translation and writing tools for translating and improving text across supported languages.",
    image: "images/deepl.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://www.deepl.com/",
      android: "https://www.deepl.com/en/android-app",
      ios: "https://www.deepl.com/en/ios-app",
      windows: "https://www.deepl.com/en/windows-app",
      mac: "https://www.deepl.com/en/macos-app"
    },
    page: "gts-software.html"
  },

  {
    id: "google-docs",
    name: "Google Docs",
    category: "PRODUCTIVITY",
    description: "Create, edit and collaborate on documents online with Google Docs.",
    image: "images/google-docs.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://docs.google.com/",
      android: "https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.docs",
      ios: "https://apps.apple.com/app/google-docs/id842842640"
    },
    page: "gts-software.html"
  },

  {
    id: "google-sheets",
    name: "Google Sheets",
    category: "PRODUCTIVITY",
    description: "Create, edit, organize and collaborate on spreadsheets online with Google Sheets.",
    image: "images/google-sheets.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://sheets.google.com/",
      android: "https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.sheets",
      ios: "https://apps.apple.com/app/google-sheets/id842849113"
    },
    page: "gts-software.html"
  },

  {
    id: "google-slides",
    name: "Google Slides",
    category: "PRODUCTIVITY",
    description: "Create presentations and collaborate with others online using Google Slides.",
    image: "images/google-slides.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://slides.google.com/",
      android: "https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.slides",
      ios: "https://apps.apple.com/app/google-slides/id879478102"
    },
    page: "gts-software.html"
  },

  {
    id: "google-meet",
    name: "Google Meet",
    category: "COMMUNICATION",
    description: "Meet and collaborate through online video meetings with Google Meet.",
    image: "images/google-meet.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://meet.google.com/",
      android: "https://play.google.com/store/apps/details?id=com.google.android.apps.tachyon",
      ios: "https://apps.apple.com/app/google-meet/id1013231476"
    },
    page: "gts-software.html"
  },

  {
    id: "onedrive",
    name: "OneDrive",
    category: "CLOUD STORAGE",
    description: "Store, sync, access and share files across devices with Microsoft OneDrive.",
    image: "images/onedrive.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://onedrive.live.com/",
      android: "https://play.google.com/store/apps/details?id=com.microsoft.skydrive",
      ios: "https://apps.apple.com/app/microsoft-onedrive/id477537958",
      windows: "https://www.microsoft.com/microsoft-365/onedrive/download",
      mac: "https://www.microsoft.com/microsoft-365/onedrive/download"
    },
    page: "gts-software.html"
  },

  {
    id: "evernote",
    name: "Evernote",
    category: "PRODUCTIVITY",
    description: "Capture, organize and manage notes, documents, tasks and information with Evernote.",
    image: "images/evernote.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://evernote.com/",
      android: "https://play.google.com/store/apps/details?id=com.evernote",
      ios: "https://apps.apple.com/app/evernote-notes-organizer/id281796108",
      windows: "https://evernote.com/download",
      mac: "https://evernote.com/download"
    },
    page: "gts-software.html"
  },

  {
    id: "asana",
    name: "Asana",
    category: "PRODUCTIVITY",
    description: "Manage projects, tasks, goals and team workflows with Asana.",
    image: "images/asana.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://asana.com/",
      android: "https://play.google.com/store/apps/details?id=com.asana.app",
      ios: "https://apps.apple.com/app/asana-your-work-manager/id489969512"
    },
    page: "gts-software.html"
  },

  {
    id: "monday",
    name: "Monday.com",
    category: "PRODUCTIVITY",
    description: "Plan projects, manage workflows and collaborate with teams using Monday.com.",
    image: "images/monday.jpg",
    type: ["web"],
    platforms: {
      web: "https://monday.com/"
    },
    page: "gts-software.html"
  },

  {
    id: "airtable",
    name: "Airtable",
    category: "PRODUCTIVITY",
    description: "Organize information, build databases and manage projects with Airtable.",
    image: "images/airtable.jpg",
    type: ["web"],
    platforms: {
      web: "https://www.airtable.com/"
    },
    page: "gts-software.html"
  },

  {
    id: "youtube-studio",
    name: "YouTube Studio",
    category: "VIDEO",
    description: "Manage YouTube channels, videos, analytics, comments and creator activities with YouTube Studio.",
    image: "images/youtube-studio.jpg",
    type: ["web"],
    platforms: {
      web: "https://studio.youtube.com/"
    },
    page: "gts-software.html"
  },

  {
    id: "vimeo",
    name: "Vimeo",
    category: "VIDEO",
    description: "Host, manage, share and create professional video content with Vimeo.",
    image: "images/vimeo.jpg",
    type: ["web"],
    platforms: {
      web: "https://vimeo.com/"
    },
    page: "gts-software.html"
  },

  {
    id: "veed",
    name: "VEED",
    category: "VIDEO",
    description: "Create and edit videos online with VEED's browser-based video editing tools.",
    image: "images/veed.jpg",
    type: ["web"],
    platforms: {
      web: "https://www.veed.io/"
    },
    page: "gts-software.html"
  },

  {
    id: "descript",
    name: "Descript",
    category: "VIDEO",
    description: "Edit video and audio using text-based editing, transcription and AI-powered media tools.",
    image: "images/descript.jpg",
    type: ["web", "windows", "mac"],
    platforms: {
      web: "https://www.descript.com/",
      windows: "https://www.descript.com/download",
      mac: "https://www.descript.com/download"
    },
    page: "gts-software.html"
  },

  {
    id: "streamyard",
    name: "StreamYard",
    category: "VIDEO",
    description: "Create and broadcast live streams, interviews, webinars and recorded video content.",
    image: "images/streamyard.jpg",
    type: ["web"],
    platforms: {
      web: "https://streamyard.com/"
    },
    page: "gts-software.html"
  },

  {
    id: "shopify",
    name: "Shopify",
    category: "E-COMMERCE",
    description: "Create and manage an online store, sell products and manage e-commerce operations with Shopify.",
    image: "images/shopify.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://www.shopify.com/",
      android: "https://play.google.com/store/apps/details?id=com.shopify.mobile",
      ios: "https://apps.apple.com/app/shopify-your-ecommerce-store/id371294169"
    },
    page: "gts-software.html"
  },

  {
    id: "wix",
    name: "Wix",
    category: "WEBSITE BUILDER",
    description: "Create, design and manage websites and online businesses with Wix.",
    image: "images/wix.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://www.wix.com/",
      android: "https://play.google.com/store/apps/details?id=com.wix.android",
      ios: "https://apps.apple.com/app/wix-website-builder/id543613122"
    },
    page: "gts-software.html"
  },

  {
    id: "squarespace",
    name: "Squarespace",
    category: "WEBSITE BUILDER",
    description: "Build and manage professional websites, online stores and digital brands with Squarespace.",
    image: "images/squarespace.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://www.squarespace.com/",
      android: "https://play.google.com/store/apps/details?id=com.squarespace.android",
      ios: "https://apps.apple.com/app/squarespace-website-builder/id530621395"
    },
    page: "gts-software.html"
  },

  {
    id: "woocommerce",
    name: "WooCommerce",
    category: "E-COMMERCE",
    description: "Build and manage an online store with the open-source WooCommerce e-commerce platform.",
    image: "images/woocommerce.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://woocommerce.com/",
      android: "https://play.google.com/store/apps/details?id=com.woocommerce.android",
      ios: "https://apps.apple.com/app/woocommerce/id1389130815"
    },
    page: "gts-software.html"
  },

  {
    id: "hubspot",
    name: "HubSpot",
    category: "BUSINESS",
    description: "Manage marketing, sales, customer service, CRM and business growth with HubSpot.",
    image: "images/hubspot.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://www.hubspot.com/",
      android: "https://play.google.com/store/apps/details?id=com.hubspot.android",
      ios: "https://apps.apple.com/app/hubspot-crm/id1107711722"
    },
    page: "gts-software.html"
  },

  {
    id: "mailchimp",
    name: "Mailchimp",
    category: "MARKETING",
    description: "Create email campaigns, marketing automations and customer communications with Mailchimp.",
    image: "images/mailchimp.jpg",
    type: ["web", "android", "ios"],
    platforms: {
      web: "https://mailchimp.com/",
      android: "https://play.google.com/store/apps/details?id=com.mailchimp.mailchimp",
      ios: "https://apps.apple.com/app/mailchimp-email-marketing/id366794783"
    },
    page: "gts-software.html"
  },

  {
    id: "1password",
    name: "1Password",
    category: "SECURITY",
    description: "Securely manage passwords, passkeys, private information and digital credentials with 1Password.",
    image: "images/1password.jpg",
    type: ["web", "android", "ios", "windows", "mac", "linux"],
    platforms: {
      web: "https://1password.com/",
      android: "https://play.google.com/store/apps/details?id=com.agilebits.onepassword",
      ios: "https://apps.apple.com/app/1password-password-manager/id568903335",
      windows: "https://1password.com/downloads/windows/",
      mac: "https://1password.com/downloads/mac/",
      linux: "https://1password.com/downloads/linux/"
    },
    page: "gts-software.html"
  },

  {
    id: "bitwarden",
    name: "Bitwarden",
    category: "SECURITY",
    description: "Securely store and manage passwords, passkeys and other sensitive information with Bitwarden.",
    image: "images/bitwarden.jpg",
    type: ["web", "android", "ios", "windows", "mac", "linux"],
    platforms: {
      web: "https://vault.bitwarden.com/",
      android: "https://play.google.com/store/apps/details?id=com.x8bit.bitwarden",
      ios: "https://apps.apple.com/app/bitwarden-password-manager/id1137397744",
      windows: "https://bitwarden.com/download/",
      mac: "https://bitwarden.com/download/",
      linux: "https://bitwarden.com/download/"
    },
    page: "gts-software.html"
  },

  {
    id: "cloudflare",
    name: "Cloudflare",
    category: "DEVELOPER",
    description: "Protect, connect and accelerate websites, applications and networks with Cloudflare.",
    image: "images/cloudflare.jpg",
    type: ["web"],
    platforms: {
      web: "https://www.cloudflare.com/"
    },
    page: "gts-software.html"
  },

  {
    id: "grammarly",
    name: "Grammarly",
    category: "PRODUCTIVITY",
    description: "Improve writing with grammar, spelling, clarity, tone and AI-powered writing assistance.",
    image: "images/grammarly.jpg",
    type: ["web", "android", "ios", "windows", "mac"],
    platforms: {
      web: "https://www.grammarly.com/",
      android: "https://play.google.com/store/apps/details?id=com.grammarly.android.keyboard",
      ios: "https://apps.apple.com/app/grammarly-keyboard/id1158877342",
      windows: "https://www.grammarly.com/desktop",
      mac: "https://www.grammarly.com/desktop"
    },
    page: "gts-software.html"
  },

  {
    id: "7zip",
    name: "7-Zip",
    category: "UTILITY",
    description: "A free file archiver for compressing, extracting and managing archive files.",
    image: "images/7zip.jpg",
    type: ["windows"],
    platforms: {
      windows: "https://www.7-zip.org/"
    },
    page: "gts-software.html"
  }

];


/* =========================================================
   GTS SOFTWARE INFORMATION
   Additional information for individual software pages
========================================================= */

const GTS_SOFTWARE_INFO = {

  "wordpress-com": {
    about: "WordPress.com is a managed website and publishing platform that lets people create blogs, business websites, portfolios, online stores and other types of websites.",
    developer: "Automattic",
    developerInfo: "WordPress.com is operated by Automattic, the company behind WordPress.com and other web products including WooCommerce, Jetpack and WordPress VIP.",
    platformReach: "40.7% of the web",
    platformReachLabel: "Websites running on WordPress"
  },

  "canva": {
    about: "Canva is a visual communication and design platform for creating presentations, social media graphics, videos, documents, websites and other visual content.",
    developer: "Canva",
    developerInfo: "Canva is developed by Canva, a visual communication and design technology company.",
    platformReach: "Global",
    platformReachLabel: "Design platform"
  },

  "google-drive": {
    about: "Google Drive is a cloud storage and file collaboration service that allows users to store, access, organize and share files across devices.",
    developer: "Google",
    developerInfo: "Google Drive is developed and operated by Google as part of its Google Workspace and Google services ecosystem.",
    platformReach: "Global",
    platformReachLabel: "Cloud storage users"
  },

  "zoom": {
    about: "Zoom is a communications platform providing video meetings, chat, webinars, online collaboration and other communication tools.",
    developer: "Zoom Video Communications",
    developerInfo: "Zoom is developed by Zoom Video Communications.",
    platformReach: "Global",
    platformReachLabel: "Communication platform"
  },

  "notion": {
    about: "Notion is a workspace for notes, documents, wikis, projects, databases and task management.",
    developer: "Notion Labs",
    developerInfo: "Notion is developed by Notion Labs.",
    platformReach: "Global",
    platformReachLabel: "Productivity workspace"
  },

  "trello": {
    about: "Trello is a visual project and task management platform based around boards, lists and cards.",
    developer: "Atlassian",
    developerInfo: "Trello is developed by Atlassian.",
    platformReach: "Global",
    platformReachLabel: "Project management platform"
  },

  "figma": {
    about: "Figma is a collaborative design and prototyping platform used to create interfaces, prototypes and digital products.",
    developer: "Figma",
    developerInfo: "Figma is developed by Figma.",
    platformReach: "Global",
    platformReachLabel: "Design and prototyping platform"
  },

  "dropbox": {
    about: "Dropbox is a cloud storage and file synchronization platform for storing, organizing, sharing and collaborating on files.",
    developer: "Dropbox",
    developerInfo: "Dropbox is developed and operated by Dropbox.",
    platformReach: "Global",
    platformReachLabel: "Cloud storage platform"
  },

  "microsoft-365": {
    about: "Microsoft 365 is a productivity ecosystem containing applications and services such as Word, Excel, PowerPoint, Outlook and OneDrive.",
    developer: "Microsoft",
    developerInfo: "Microsoft 365 is developed and operated by Microsoft.",
    platformReach: "Global",
    platformReachLabel: "Productivity ecosystem"
  },

  "slack": {
    about: "Slack is a workplace communication and collaboration platform built around channels, messaging, file sharing and integrations.",
    developer: "Salesforce",
    developerInfo: "Slack is developed and operated by Salesforce.",
    platformReach: "Global",
    platformReachLabel: "Workplace communication platform"
  },

  "adobe-creative-cloud": {
    about: "Adobe Creative Cloud provides a collection of creative applications and services for design, photography, video, illustration and other creative work.",
    developer: "Adobe",
    developerInfo: "Adobe Creative Cloud is developed and operated by Adobe.",
    platformReach: "Global",
    platformReachLabel: "Creative software ecosystem"
  },

  "adobe-photoshop": {
    about: "Adobe Photoshop is an image editing and digital artwork application used by photographers, designers and creators.",
    developer: "Adobe",
    developerInfo: "Adobe Photoshop is developed by Adobe.",
    platformReach: "Global",
    platformReachLabel: "Image editing software"
  },

  "adobe-illustrator": {
    about: "Adobe Illustrator is vector graphics software used for logos, illustrations, icons and scalable artwork.",
    developer: "Adobe",
    developerInfo: "Adobe Illustrator is developed by Adobe.",
    platformReach: "Global",
    platformReachLabel: "Vector graphics software"
  },

  "adobe-acrobat": {
    about: "Adobe Acrobat provides tools for creating, editing, converting, signing, reviewing and managing PDF documents.",
    developer: "Adobe",
    developerInfo: "Adobe Acrobat is developed by Adobe.",
    platformReach: "Global",
    platformReachLabel: "PDF software"
  },

  "adobe-premiere-pro": {
    about: "Adobe Premiere Pro is professional video editing software used to edit and produce video content.",
    developer: "Adobe",
    developerInfo: "Adobe Premiere Pro is developed by Adobe.",
    platformReach: "Global",
    platformReachLabel: "Video editing software"
  },

  "adobe-express": {
    about: "Adobe Express is a content creation platform for producing graphics, social posts, videos, flyers, presentations and other visual content.",
    developer: "Adobe",
    developerInfo: "Adobe Express is developed by Adobe.",
    platformReach: "Global",
    platformReachLabel: "Content creation platform"
  },

  "capcut": {
    about: "CapCut is a video creation and editing platform offering editing tools, templates, effects and creative features.",
    developer: "ByteDance",
    developerInfo: "CapCut is developed by ByteDance.",
    platformReach: "Global",
    platformReachLabel: "Video creation platform"
  },

  "github": {
    about: "GitHub is a software development and collaboration platform used for hosting code, version control, project management and deployment.",
    developer: "GitHub",
    developerInfo: "GitHub is developed and operated by GitHub, a Microsoft company.",
    platformReach: "Global",
    platformReachLabel: "Software development platform"
  },

  "gitlab": {
    about: "GitLab is a DevSecOps platform combining source code management, collaboration, CI/CD, security and deployment tools.",
    developer: "GitLab",
    developerInfo: "GitLab is developed by GitLab Inc.",
    platformReach: "Global",
    platformReachLabel: "DevSecOps platform"
  },

  "replit": {
    about: "Replit is a browser-based development platform for creating, running and collaborating on software projects.",
    developer: "Replit",
    developerInfo: "Replit is developed and operated by Replit.",
    platformReach: "Global",
    platformReachLabel: "Online development platform"
  },

  "codepen": {
    about: "CodePen is an online development environment for creating, testing, sharing and discovering front-end web projects.",
    developer: "CodePen",
    developerInfo: "CodePen is developed and operated by CodePen.",
    platformReach: "Global",
    platformReachLabel: "Front-end development platform"
  },

  "vercel": {
    about: "Vercel is a cloud platform for building and deploying modern websites, web applications and AI-powered applications.",
    developer: "Vercel",
    developerInfo: "Vercel is developed and operated by Vercel.",
    platformReach: "Global",
    platformReachLabel: "Web development and deployment platform"
  },

  "netlify": {
    about: "Netlify is a platform for building, deploying and managing modern websites and web applications.",
    developer: "Netlify",
    developerInfo: "Netlify is developed and operated by Netlify.",
    platformReach: "Global",
    platformReachLabel: "Web development and deployment platform"
  },

  "chatgpt": {
    about: "ChatGPT is an AI assistant for writing, learning, coding, brainstorming, analysis and many other everyday tasks.",
    developer: "OpenAI",
    developerInfo: "ChatGPT is developed and operated by OpenAI.",
    platformReach: "Global",
    platformReachLabel: "AI assistant"
  },

  "google-gemini": {
    about: "Google Gemini is an AI assistant and generative AI service developed by Google.",
    developer: "Google",
    developerInfo: "Gemini is developed and operated by Google.",
    platformReach: "Global",
    platformReachLabel: "AI platform"
  },

  "claude": {
    about: "Claude is an AI assistant developed by Anthropic for writing, analysis, coding, research and problem solving.",
    developer: "Anthropic",
    developerInfo: "Claude is developed and operated by Anthropic.",
    platformReach: "Global",
    platformReachLabel: "AI assistant"
  },

  "microsoft-copilot": {
    about: "Microsoft Copilot is Microsoft's AI assistant for answering questions, creating content, researching information and supporting productivity.",
    developer: "Microsoft",
    developerInfo: "Microsoft Copilot is developed and operated by Microsoft.",
    platformReach: "Global",
    platformReachLabel: "AI assistant"
  },

  "perplexity": {
    about: "Perplexity is an AI-powered search and answer platform that combines conversational responses with sources and links.",
    developer: "Perplexity AI",
    developerInfo: "Perplexity is developed and operated by Perplexity AI.",
    platformReach: "Global",
    platformReachLabel: "AI search platform"
  },

  "deepl": {
    about: "DeepL provides AI-powered translation and writing tools for supported languages.",
    developer: "DeepL",
    developerInfo: "DeepL is developed and operated by DeepL SE.",
    platformReach: "Global",
    platformReachLabel: "AI translation platform"
  },

  "google-docs": {
    about: "Google Docs is an online document editor that allows users to create, edit and collaborate on documents.",
    developer: "Google",
    developerInfo: "Google Docs is developed and operated by Google.",
    platformReach: "Global",
    platformReachLabel: "Online document platform"
  },

  "google-sheets": {
    about: "Google Sheets is an online spreadsheet application for creating, editing and collaborating on spreadsheets.",
    developer: "Google",
    developerInfo: "Google Sheets is developed and operated by Google.",
    platformReach: "Global",
    platformReachLabel: "Online spreadsheet platform"
  },

  "google-slides": {
    about: "Google Slides is an online presentation application for creating and collaborating on presentations.",
    developer: "Google",
    developerInfo: "Google Slides is developed and operated by Google.",
    platformReach: "Global",
    platformReachLabel: "Online presentation platform"
  },

  "google-meet": {
    about: "Google Meet is a video communication and collaboration service for online meetings.",
    developer: "Google",
    developerInfo: "Google Meet is developed and operated by Google.",
    platformReach: "Global",
    platformReachLabel: "Video meeting platform"
  },

  "onedrive": {
    about: "OneDrive is Microsoft's cloud storage service for storing, synchronizing, accessing and sharing files.",
    developer: "Microsoft",
    developerInfo: "OneDrive is developed and operated by Microsoft.",
    platformReach: "Global",
    platformReachLabel: "Cloud storage platform"
  },

  "evernote": {
    about: "Evernote is a note-taking and organization platform for capturing and managing notes, documents and tasks.",
    developer: "Evernote Corporation",
    developerInfo: "Evernote is developed and operated by Evernote Corporation.",
    platformReach: "Global",
    platformReachLabel: "Productivity platform"
  },

  "asana": {
    about: "Asana is a project and work management platform for tasks, goals, projects and team workflows.",
    developer: "Asana",
    developerInfo: "Asana is developed and operated by Asana, Inc.",
    platformReach: "Global",
    platformReachLabel: "Work management platform"
  },

  "monday": {
    about: "Monday.com is a work management platform for planning projects, organizing workflows and collaborating with teams.",
    developer: "monday.com",
    developerInfo: "Monday.com is developed and operated by monday.com.",
    platformReach: "Global",
    platformReachLabel: "Work management platform"
  },

  "airtable": {
    about: "Airtable is a flexible database and workflow platform for organizing information and managing projects.",
    developer: "Airtable",
    developerInfo: "Airtable is developed and operated by Airtable.",
    platformReach: "Global",
    platformReachLabel: "Database and workflow platform"
  },

  "youtube-studio": {
    about: "YouTube Studio is the creator management environment for managing YouTube channels, videos, analytics, comments and other creator activities.",
    developer: "Google",
    developerInfo: "YouTube Studio is developed and operated by YouTube, a Google company.",
    platformReach: "Global",
    platformReachLabel: "Creator management platform"
  },

  "vimeo": {
    about: "Vimeo is a video hosting, management, sharing and creation platform for individuals, creators and businesses.",
    developer: "Vimeo",
    developerInfo: "Vimeo is developed and operated by Vimeo.",
    platformReach: "Global",
    platformReachLabel: "Video platform"
  },

  "veed": {
    about: "VEED is a browser-based video creation and editing platform.",
    developer: "VEED",
    developerInfo: "VEED is developed and operated by VEED.",
    platformReach: "Global",
    platformReachLabel: "Online video platform"
  },

  "descript": {
    about: "Descript is a media editing platform that uses text-based editing, transcription and AI-powered tools for video and audio.",
    developer: "Descript",
    developerInfo: "Descript is developed and operated by Descript.",
    platformReach: "Global",
    platformReachLabel: "Audio and video editing platform"
  },

  "streamyard": {
    about: "StreamYard is a browser-based live streaming and recording platform for broadcasts, interviews and webinars.",
    developer: "StreamYard",
    developerInfo: "StreamYard is developed and operated by StreamYard.",
    platformReach: "Global",
    platformReachLabel: "Live streaming platform"
  },

  "shopify": {
    about: "Shopify is an e-commerce platform for creating, operating and managing online stores.",
    developer: "Shopify",
    developerInfo: "Shopify is developed and operated by Shopify Inc.",
    platformReach: "Global",
    platformReachLabel: "E-commerce platform"
  },

  "wix": {
    about: "Wix is a website creation and business platform for building websites, online stores and digital businesses.",
    developer: "Wix",
    developerInfo: "Wix is developed and operated by Wix.com Ltd.",
    platformReach: "Global",
    platformReachLabel: "Website builder platform"
  },

  "squarespace": {
    about: "Squarespace is a website and commerce platform for building professional websites, online stores and digital brands.",
    developer: "Squarespace",
    developerInfo: "Squarespace is developed and operated by Squarespace.",
    platformReach: "Global",
    platformReachLabel: "Website and commerce platform"
  },

  "woocommerce": {
    about: "WooCommerce is an open-source e-commerce platform for building and managing online stores with WordPress.",
    developer: "Automattic",
    developerInfo: "WooCommerce is developed and operated by Automattic.",
    platformReach: "Global",
    platformReachLabel: "E-commerce platform"
  },

  "hubspot": {
    about: "HubSpot is a customer platform providing CRM, marketing, sales, customer service and business growth tools.",
    developer: "HubSpot",
    developerInfo: "HubSpot is developed and operated by HubSpot.",
    platformReach: "Global",
    platformReachLabel: "Customer platform"
  },

  "mailchimp": {
    about: "Mailchimp is a marketing platform for email campaigns, automation and customer communications.",
    developer: "Intuit",
    developerInfo: "Mailchimp is operated by Intuit.",
    platformReach: "Global",
    platformReachLabel: "Marketing platform"
  },

  "1password": {
    about: "1Password is a password and credential manager for securely storing passwords, passkeys and private information.",
    developer: "1Password",
    developerInfo: "1Password is developed and operated by 1Password.",
    platformReach: "Global",
    platformReachLabel: "Password management platform"
  },

  "bitwarden": {
    about: "Bitwarden is an open-source password manager for securely storing and managing passwords, passkeys and other sensitive information.",
    developer: "Bitwarden",
    developerInfo: "Bitwarden is developed and operated by Bitwarden Inc.",
    platformReach: "Global",
    platformReachLabel: "Password management platform"
  },

  "cloudflare": {
    about: "Cloudflare provides web security, connectivity, performance and network services for websites and applications.",
    developer: "Cloudflare",
    developerInfo: "Cloudflare is developed and operated by Cloudflare, Inc.",
    platformReach: "Global",
    platformReachLabel: "Internet infrastructure platform"
  },

  "grammarly": {
    about: "Grammarly is a writing assistance platform providing grammar, spelling, clarity, tone and AI-powered writing features.",
    developer: "Grammarly",
    developerInfo: "Grammarly is developed and operated by Grammarly.",
    platformReach: "Global",
    platformReachLabel: "Writing assistance platform"
  },

  "7zip": {
    about: "7-Zip is a free and open-source file archiver used for compressing, extracting and managing archive files.",
    developer: "Igor Pavlov",
    developerInfo: "7-Zip is developed by Igor Pavlov and distributed as free software.",
    platformReach: "Global",
    platformReachLabel: "File archiving utility"
  }

};


/* =========================================================
   PLATFORM HELPERS
   Makes the platform data consistent across GTS.
========================================================= */

function getGTSPlatforms(software) {
  if (!software || !software.platforms) {
    return [];
  }

  return Object.keys(software.platforms);
}


function getGTSPlatformLabel(platform) {
  const labels = {
    web: "Web",
    android: "Android",
    ios: "iOS",
    windows: "Windows",
    mac: "Mac",
    linux: "Linux"
  };

  return labels[platform] || platform;
}


function getGTSPlatformIcon(platform) {
  const icons = {
    web: "🌐",
    android: "🤖",
    ios: "",
    windows: "▣",
    mac: "",
    linux: "🐧"
  };

  return icons[platform] || "↗";
}


/*
  IMPORTANT:

  Do not use "mobile", "desktop" or "macos" as the actual
  platform identifiers anymore.

  GTS uses these standard identifiers:

  web
  android
  ios
  windows
  mac
  linux

  The "type" array is automatically kept synchronized
  with the available platform sources.
*/

GTS_SOFTWARE.forEach(function(software) {

  if (!software.platforms) {
    software.platforms = {};
  }

  software.type = Object.keys(software.platforms);

});


/* =========================================================
   END OF GTS SOFTWARE DATA
========================================================= */


