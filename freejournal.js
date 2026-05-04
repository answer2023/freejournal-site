/* global React, ReactDOM */
const Icon = ({
  name,
  size = 18,
  stroke = 1.6
}) => {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (name) {
    case "bolt":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M13 2 4 14h7l-1 8 9-12h-7l1-8z"
      }));
    case "lock":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
        x: "4",
        y: "11",
        width: "16",
        height: "10",
        rx: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8 11V7a4 4 0 0 1 8 0v4"
      }));
    case "sparkle":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"
      }));
    case "cloud":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M7 18a5 5 0 1 1 .5-9.97A6 6 0 0 1 19 11a4 4 0 0 1 0 8H7z"
      }));
    case "search":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "11",
        cy: "11",
        r: "7"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m20 20-4-4"
      }));
    case "image":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "4",
        width: "18",
        height: "16",
        rx: "2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "9",
        cy: "10",
        r: "1.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m4 18 6-6 8 8"
      }));
    case "tag":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M3 13V4a1 1 0 0 1 1-1h9l8 8-9 9-9-9z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "8",
        cy: "8",
        r: "1.5"
      }));
    case "mic":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
        x: "9",
        y: "3",
        width: "6",
        height: "12",
        rx: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 11a7 7 0 0 0 14 0M12 18v3"
      }));
    case "doc":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14 3v6h6"
      }));
    case "key":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "8",
        cy: "15",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m11 12 9-9M16 7l3 3M14 9l3 3"
      }));
    case "palette":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "7.5",
        cy: "10.5",
        r: "1"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "11",
        cy: "6.5",
        r: "1"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "16",
        cy: "9",
        r: "1"
      }));
    case "arrow-right":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M5 12h14M13 6l6 6-6 6"
      }));
    case "download":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 3v12m-5-5 5 5 5-5M4 21h16"
      }));
    case "globe":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
      }));
    default:
      return null;
  }
};
const Nav = () => /*#__PURE__*/React.createElement("nav", {
  className: "nav"
}, /*#__PURE__*/React.createElement("div", {
  className: "nav-inner"
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  className: "nav-logo"
}, /*#__PURE__*/React.createElement("span", {
  className: "nav-logo-mark"
}), "ClearSky"), /*#__PURE__*/React.createElement("div", {
  className: "nav-links"
}, /*#__PURE__*/React.createElement("a", {
  href: "#features"
}, "Features"), /*#__PURE__*/React.createElement("a", {
  href: "#origin"
}, "Origin"), /*#__PURE__*/React.createElement("a", {
  href: "#download"
}, "Download"), /*#__PURE__*/React.createElement("a", {
  href: "https://jotbee.app",
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px"
  }
}, /*#__PURE__*/React.createElement(Icon, {
  name: "globe",
  size: 13
}), "\u4E2D\u6587"))));
const SubNav = () => /*#__PURE__*/React.createElement("div", {
  className: "subnav"
}, /*#__PURE__*/React.createElement("div", {
  className: "subnav-inner"
}, /*#__PURE__*/React.createElement("span", {
  className: "subnav-name"
}, /*#__PURE__*/React.createElement("img", {
  src: "assets/jotbee-icon.png",
  alt: ""
}), " JotBee \xB7 freejournal.app"), /*#__PURE__*/React.createElement("div", {
  className: "subnav-links"
}, /*#__PURE__*/React.createElement("a", {
  href: "#features"
}, "Features"), /*#__PURE__*/React.createElement("a", {
  href: "#privacy"
}, "Privacy"), /*#__PURE__*/React.createElement("a", {
  href: "#ai"
}, "AI"), /*#__PURE__*/React.createElement("a", {
  href: "#origin"
}, "Origin"), /*#__PURE__*/React.createElement("a", {
  href: "#download"
}, "Download"))));
const Hero = () => /*#__PURE__*/React.createElement("section", {
  className: "section section-dark",
  style: {
    paddingBottom: "40px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner center"
}, /*#__PURE__*/React.createElement("div", {
  className: "product-hero"
}, /*#__PURE__*/React.createElement("img", {
  src: "assets/jotbee-icon.png",
  alt: "JotBee",
  className: "product-hero-icon"
}), /*#__PURE__*/React.createElement("h1", null, "A free journal,", /*#__PURE__*/React.createElement("br", null), "that just lets you write."), /*#__PURE__*/React.createElement("p", {
  className: "product-hero-tag"
}, "No accounts. No subscriptions. No ads.", /*#__PURE__*/React.createElement("br", null), "Open it, write, close it. That\u2019s the whole product."), /*#__PURE__*/React.createElement("div", {
  className: "cta-buttons"
}, /*#__PURE__*/React.createElement("a", {
  href: "#download",
  className: "btn btn-primary"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "download",
  size: 14
}), "Download on App Store"), /*#__PURE__*/React.createElement("a", {
  href: "#origin",
  className: "btn btn-ghost"
}, "Read the story")), /*#__PURE__*/React.createElement("div", {
  className: "product-hero-meta"
}, "JotBee v1.1.0 \xB7 iOS 17.0+ \xB7 macOS 14.0+ \xB7 Always free")), /*#__PURE__*/React.createElement("div", {
  className: "devices-row",
  style: {
    maxWidth: "720px",
    margin: "56px auto 0"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "mac-mock"
}, /*#__PURE__*/React.createElement("div", {
  className: "mac-mock-bar"
}, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", {
  className: "mac-mock-body"
}, /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-date",
  style: {
    color: "#a89a82"
  }
}, "2026 \xB7 05 \xB7 04 \xB7 MON"), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-title",
  style: {
    color: "#2a241a"
  }
}, "Morning coffee, again"), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-line medium"
}), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-line"
}), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-line short"
}), /*#__PURE__*/React.createElement("div", {
  className: "mock-jotbee-emoji",
  style: {
    marginTop: "16px"
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "mock-jotbee-tag"
}, "daily"), /*#__PURE__*/React.createElement("span", {
  className: "mock-jotbee-tag"
}, "coffee")))), /*#__PURE__*/React.createElement("div", {
  className: "iphone-mock"
}, /*#__PURE__*/React.createElement("div", {
  className: "iphone-mock-screen"
}, /*#__PURE__*/React.createElement("div", {
  className: "iphone-mock-line med"
}), /*#__PURE__*/React.createElement("div", {
  className: "iphone-mock-line"
}), /*#__PURE__*/React.createElement("div", {
  className: "iphone-mock-line short"
}), /*#__PURE__*/React.createElement("div", {
  className: "iphone-reflect"
}, /*#__PURE__*/React.createElement("div", {
  className: "iphone-reflect-label"
}, "AI REFLECT"), /*#__PURE__*/React.createElement("div", {
  className: "iphone-reflect-line"
}), /*#__PURE__*/React.createElement("div", {
  className: "iphone-reflect-line short"
})))))));
const FeatureBlock = ({
  eyebrow,
  title,
  desc,
  dark
}) => /*#__PURE__*/React.createElement("section", {
  className: `section ${dark ? "section-dark" : "section-white"}`
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner center"
}, /*#__PURE__*/React.createElement("div", {
  className: "feature-block"
}, eyebrow && /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, eyebrow), /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement("p", {
  className: "subtitle"
}, desc))));
const Stats = () => /*#__PURE__*/React.createElement("section", {
  className: "section section-light",
  style: {
    paddingTop: "60px",
    paddingBottom: "60px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "stats"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat-num"
}, "3s"), /*#__PURE__*/React.createElement("div", {
  className: "stat-label"
}, "to a finished entry")), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat-num"
}, "iCloud"), /*#__PURE__*/React.createElement("div", {
  className: "stat-label"
}, "photo sync across devices")), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat-num"
}, "7+"), /*#__PURE__*/React.createElement("div", {
  className: "stat-label"
}, "AI engines, your choice")), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat-num"
}, "$0"), /*#__PURE__*/React.createElement("div", {
  className: "stat-label"
}, "no IAP, no ads, ever")))));
const FeaturesGrid = () => {
  const items = [{
    icon: "mic",
    title: "Voice to text",
    desc: "Hold to talk, release to text. Pairs with VoiceBee for instant dictation."
  }, {
    icon: "doc",
    title: "Export anywhere",
    desc: "Export to PDF or Markdown. Your data, always portable."
  }, {
    icon: "search",
    title: "Fast search",
    desc: "Full-text search, filter by date or tag. Find anything in seconds."
  }, {
    icon: "palette",
    title: "Themes & sizes",
    desc: "8 color themes and 5 type sizes. Make it feel like home."
  }, {
    icon: "key",
    title: "Bring your own key",
    desc: "Use your own AI API key. Costs are transparent — no markup."
  }, {
    icon: "cloud",
    title: "iCloud sync",
    desc: "Photos sync between iPhone and Mac via iCloud. No third-party servers."
  }, {
    icon: "tag",
    title: "Tags & dates",
    desc: "Organize memories with tags. Browse by time or theme."
  }, {
    icon: "image",
    title: "Photo entries",
    desc: "Capture a moment with a photo, alongside your words."
  }, {
    icon: "lock",
    title: "Local-first",
    desc: "Entries are stored locally. We don&rsquo;t run a server. We can&rsquo;t see your data."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    className: "section section-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Every detail"), /*#__PURE__*/React.createElement("h2", null, "Built for daily use,", /*#__PURE__*/React.createElement("br", null), "not for the screenshots.")), /*#__PURE__*/React.createElement("div", {
    className: "features-grid"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    className: "feature-card",
    key: it.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "feature-card-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("h3", null, it.title), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: it.desc
    }
  }))))));
};

/* ─── Origin Story — the centerpiece of this domain ─────────────── */
const Origin = () => /*#__PURE__*/React.createElement("section", {
  id: "origin",
  className: "section section-dark",
  style: {
    paddingTop: "120px",
    paddingBottom: "120px"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "feature-block"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "about this domain"), /*#__PURE__*/React.createElement("h2", null, "Why ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--accent)"
  }
}, "freejournal.app"), "?"), /*#__PURE__*/React.createElement("p", {
  className: "subtitle"
}, "This was the first domain I bought when I started building. Before there was a product, before there was a name, there was just an idea \u2014 a free journal app that gets out of your way. The product changed names twice in two months. The domain stayed.")), /*#__PURE__*/React.createElement("div", {
  className: "origin-timeline"
}, /*#__PURE__*/React.createElement("div", {
  className: "origin-step"
}, /*#__PURE__*/React.createElement("div", {
  className: "origin-step-year"
}, "2025 \xB7 MAR"), /*#__PURE__*/React.createElement("div", {
  className: "origin-step-name"
}, "FreeJournal"), /*#__PURE__*/React.createElement("div", {
  className: "origin-step-tag"
}, "the idea"), /*#__PURE__*/React.createElement("p", null, "I bought ", /*#__PURE__*/React.createElement("code", null, "freejournal.app"), " the night I decided I wanted to make something. I didn\u2019t know how to code. I didn\u2019t have a design. I just had a name and a feeling: every journal app was either too heavy, too paid, or abandoned.")), /*#__PURE__*/React.createElement("div", {
  className: "origin-arrow"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "arrow-right",
  size: 20
})), /*#__PURE__*/React.createElement("div", {
  className: "origin-step"
}, /*#__PURE__*/React.createElement("div", {
  className: "origin-step-year"
}, "2025 \xB7 APR"), /*#__PURE__*/React.createElement("div", {
  className: "origin-step-name"
}, "BabyJournal"), /*#__PURE__*/React.createElement("div", {
  className: "origin-step-tag"
}, "the first build"), /*#__PURE__*/React.createElement("p", null, "One month in, the idea found its first shape \u2014 a place to record my child\u2019s growth. I renamed it BabyJournal. It was small, ugly, and only I used it. But it worked. I learned that I could build things, even without writing the code myself.")), /*#__PURE__*/React.createElement("div", {
  className: "origin-arrow"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "arrow-right",
  size: 20
})), /*#__PURE__*/React.createElement("div", {
  className: "origin-step origin-step-current"
}, /*#__PURE__*/React.createElement("div", {
  className: "origin-step-year"
}, "2025 \xB7 MAY"), /*#__PURE__*/React.createElement("div", {
  className: "origin-step-name"
}, "JotBee"), /*#__PURE__*/React.createElement("div", {
  className: "origin-step-tag"
}, "today"), /*#__PURE__*/React.createElement("p", null, "Recording isn\u2019t just for parents \u2014 everyone deserves a little bee that helps gather the moments. Two months from idea to ship, the app became JotBee: native SwiftUI, iCloud sync, AI Reflect, free for everyone. Same idea. Better craft."))), /*#__PURE__*/React.createElement("div", {
  className: "origin-quote"
}, /*#__PURE__*/React.createElement("p", null, "\u201CI\u2019m not a programmer. I work an office job at an insurance company. But I know exactly what I want. AI is my development partner \u2014 I define the experience, AI writes the code. Like renovating a house: I can\u2019t lay bricks, but I know exactly what kind of home I want to live in.\u201D"), /*#__PURE__*/React.createElement("div", {
  className: "origin-quote-cite"
}, "\u2014 Tang Zhihong, ClearSky"))));
const CTA = () => /*#__PURE__*/React.createElement("section", {
  id: "download",
  className: "section section-light",
  style: {
    padding: "100px 0"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner center"
}, /*#__PURE__*/React.createElement("div", {
  className: "eyebrow"
}, "start writing"), /*#__PURE__*/React.createElement("h2", {
  className: "headline-section"
}, "Free forever. Download and write."), /*#__PURE__*/React.createElement("p", {
  className: "subtitle",
  style: {
    margin: "16px auto 0"
  }
}, "No trial. No paywall. No ads. Just a journal."), /*#__PURE__*/React.createElement("div", {
  className: "cta-buttons"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://apps.apple.com/app/jotbee/id6761894417",
  className: "btn btn-primary"
}, /*#__PURE__*/React.createElement(Icon, {
  name: "download",
  size: 14
}), "Download on App Store"), /*#__PURE__*/React.createElement("a", {
  href: "https://jotbee.app",
  className: "btn btn-ghost"
}, "\u4E2D\u6587\u7248 jotbee.app"))));
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-brand-col"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-brand"
}, "ClearSky"), /*#__PURE__*/React.createElement("p", {
  className: "footer-tagline"
}, "An independent studio. One person + AI, building tools we\u2019d use ourselves.")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Product"), /*#__PURE__*/React.createElement("a", {
  href: "#features"
}, "Features"), /*#__PURE__*/React.createElement("a", {
  href: "#origin"
}, "Origin story"), /*#__PURE__*/React.createElement("a", {
  href: "#download"
}, "Download")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Other apps"), /*#__PURE__*/React.createElement("a", {
  href: "https://voicebee.app"
}, "VoiceBee"), /*#__PURE__*/React.createElement("a", {
  href: "https://jotbee.app"
}, "JotBee \u4E2D\u6587")), /*#__PURE__*/React.createElement("div", {
  className: "footer-col"
}, /*#__PURE__*/React.createElement("h4", null, "Studio"), /*#__PURE__*/React.createElement("a", {
  href: "https://tangzhihong.com"
}, "tangzhihong.com"), /*#__PURE__*/React.createElement("a", {
  href: "mailto:hi@tangzhihong.com"
}, "Email"))), /*#__PURE__*/React.createElement("div", {
  className: "footer-legal"
}, /*#__PURE__*/React.createElement("span", null, "Copyright \xA9 2026 ClearSky. freejournal.app since March 2025."), /*#__PURE__*/React.createElement("a", {
  href: "https://jotbee.app/privacy"
}, "Privacy")));
const App = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(SubNav, null), /*#__PURE__*/React.createElement("main", {
  id: "main"
}, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(FeatureBlock, {
  eyebrow: "open & write",
  title: "Native SwiftUI. Opens instantly.",
  desc: "No splash screen. No onboarding. The app opens straight to the editor \u2014 three seconds from tap to a finished entry."
}), /*#__PURE__*/React.createElement(Stats, null), /*#__PURE__*/React.createElement(FeatureBlock, {
  eyebrow: "privacy",
  title: "Your journal stays yours.",
  desc: "Entries are stored locally. We don\u2019t run a server, so we literally cannot read your data. Photos sync between iPhone and Mac through your own iCloud \u2014 secured by Apple, not by us.",
  dark: true
}), /*#__PURE__*/React.createElement(FeatureBlock, {
  eyebrow: "AI Reflect",
  title: "AI that helps you remember.",
  desc: "When you finish an entry, AI Reflect responds gently \u2014 like a friend who actually listened. It helps you see what was worth keeping."
}), /*#__PURE__*/React.createElement(FeaturesGrid, null), /*#__PURE__*/React.createElement(Origin, null), /*#__PURE__*/React.createElement(CTA, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));