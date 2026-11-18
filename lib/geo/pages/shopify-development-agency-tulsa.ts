// Geo v5 S5, Shopify dev Phase 2a, page 10 of 15: Tulsa (metro), service
// format.
//
// Keywords (v5 plan 3.3):
//   primary    shopify agency tulsa (SEMrush 10 / Ahrefs 10, KD 2)
//   secondary  shopify developer tulsa (KD 0; Google rewrites to
//              "shopify development tulsa", whose PAA is all cost questions)
// SERP (2026-11-18): Thails #1, 100xelevate, Shero (energy/industrial),
// Animus Digital, PrimaryDM and MMC Global quoting prices. AI Overviews ask:
// new store or migrating; standard or Plus; custom theme design or app
// integrations. H1 owner pick #1. Links up to the Oklahoma page, which left
// Tulsa terms for this one.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_TULSA: ServiceGeoPage = {
  type: "service",
  slug: "tulsa",
  path: "/services/shopify-development-agency/tulsa",
  hub: "/services/shopify-development-agency",
  geo: { name: "Tulsa", type: "metro", areaServed: "Tulsa, Oklahoma" },

  targetKeyword: "shopify agency tulsa",
  secondaryKeywords: ["shopify developer tulsa"],
  faqKeywords: [],
  metaTitle: "Shopify Agency Tulsa | Custom Themes, Integrations, Launches",
  metaDescription:
    "The Shopify agency Tulsa brands hire for custom themes, app and ERP integrations, and store launches that go live on time, at a fixed price agreed upfront.",
  shortTitle: "Shopify Agency Tulsa",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Tulsa Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Tulsa Brands Hire for Custom Themes, App Integrations and Store Launches",
    intro:
      "Your store needs to look like your brand, talk to the other tools you run, and go live on the date you planned. We're the Shopify agency Tulsa brands hire for all three: [link:/services/shopify-theme-development|custom themes], [link:/services/shopify-integration-services|app and ERP integrations] and store launches, built by a team that works only on Shopify, at a fixed price agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-tulsa-hero-v1.webp",
      alt: "Shopify stores for Feetures, VITHIT and Capelli Sports, with revenue up 115% and add-to-cart rate up 32%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency that designs custom themes, connects Shopify to the apps and systems a business runs on, and launches new stores for Tulsa brands, Broken Arrow and Owasso included. Most start on standard Shopify and move to Plus when wholesale or checkout needs grow. Every project has a fixed price and date in writing.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "Custom themes, connected systems and on-time launches, each designed and developed in-house by our own Shopify team.",
  },

  pains: {
    heading: "What Slows a Growing Store Down",
    intro:
      "These four problems show up in most stores we're asked to fix. They're what the Shopify agency Tulsa brands hire should solve first, and here is what each one costs you now.",
    items: [
      {
        icon: "alert",
        name: "A Theme Everyone Else Uses",
        desc: "A popular template with a new logo looks like a hundred other stores, and every custom request turns into a workaround.",
        cost: "A brand that blends in, and changes that take weeks.",
      },
      {
        icon: "layers",
        name: "Apps That Don't Talk to Each Other",
        desc: "Your ERP, accounting, email and shipping tools each hold part of the picture, and someone copies data between them by hand.",
        cost: "Errors, oversold stock and hours lost every week.",
      },
      {
        icon: "calendar",
        name: "A Launch Date That Keeps Moving",
        desc: "The new store is half-built, the apps aren't set up and nobody owns the finish line.",
        cost: "Every week late is a week of sales you don't make.",
      },
      {
        icon: "truck",
        name: "Customers Left Guessing When Orders Are Late",
        desc: "A storm delays the carrier and nobody tells the customer, so they email, call or ask for a refund.",
        cost: "Support time, cancellations and worse reviews.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Tulsa Brands",
    intro:
      "Every project is designed and developed by our own Shopify team, never passed to subcontractors. Selling statewide? Our [link:/services/shopify-development-agency/oklahoma|Oklahoma page] covers what changes across the state.",
    // Visual rows; the page's own case studies (Feetures, Capelli Sports,
    // VITHIT) are not reused here.
    items: [
      {
        title: "Custom Theme Development",
        heading: "A theme designed for your brand, not borrowed from someone else's",
        body: "A custom Shopify theme with sections your team can rearrange, built around how your customers shop and fast on a phone. 111SKIN's custom theme and skin quiz lifted conversion rate 46%.",
        covers: ["Custom theme", "Brand design", "Editable sections", "Product pages", "Mobile speed"],
        caseSlug: "111skin-shopify-cro-redesign",
        imageAlt: "111SKIN skincare store on a custom Shopify theme",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "App and ERP Integrations",
        heading: "Your ERP, accounting and shipping tools in sync with Shopify",
        body: "Orders flow out to your ERP, 3PL or accounting tool as they're placed, and stock, prices and tracking flow back, with alerts if a sync fails. Mouldings One's trade portal and ERP sync grew B2B revenue 50%.",
        covers: ["ERP sync", "Accounting", "3PL routing", "Inventory sync", "Error alerts"],
        caseSlug: "mouldings-one-shopify-b2b-portal",
        imageAlt: "Mouldings One trade portal connected to its ERP",
        cta: { label: "Explore ERP connections", href: "/services/erp-connections-to-shopify" },
      },
      {
        title: "New Store Launches",
        heading: "A launch plan with a date, an owner and nothing left half-built",
        body: "We plan every page, app and integration up front, build on staging and launch on the date in your scope. Daring's new storefront lifted conversion rate 38%.",
        covers: ["Launch plan", "Store setup", "App setup", "Payments", "Go-live checklist"],
        caseSlug: "daring-headless-shopify-hydrogen",
        imageAlt: "Daring plant-based food storefront on Shopify",
      },
      {
        title: "Delivery Updates and Checkout",
        heading: "Customers who know where their order is, even when weather slows it down",
        body: "Delivery estimates on product pages, delay notices sent automatically, a clear order-status page and address checks at checkout. Dryrobe's rebuilt checkout with address validation lifted checkout completion 23%.",
        covers: ["Delivery estimates", "Delay notices", "Order status page", "Address validation", "Carrier tracking"],
        caseSlug: "dryrobe-shopify-plus-redesign",
        imageAlt: "Dryrobe store with a rebuilt checkout",
      },
      {
        title: "Wholesale and B2B",
        heading: "Trade buyers who order online at their own prices",
        body: "Company accounts with price lists, payment terms and bulk ordering, in the same store as your retail site. Saddleback's B2B store grew wholesale sales 881% in its first month.",
        covers: ["Company accounts", "Price lists", "Payment terms", "Bulk ordering", "Reorders"],
        caseSlug: "saddleback-shopify-plus-b2b",
        imageAlt: "Saddleback wholesale store on Shopify Plus",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        title: "Migrations and Support",
        heading: "Off WooCommerce, Magento or Wix, and looked after once you're live",
        body: "Products, customers, orders and reviews moved with every URL redirected, then 60 days of fixes and a monthly plan if you want one. This Works moved to Shopify Plus and grew conversion rate 38%.",
        covers: ["WooCommerce", "Magento", "Wix", "301 redirects", "60-day support"],
        caseSlug: "this-works-shopify-plus-migration",
        imageAlt: "This Works skincare store migrated to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
    ],
  },

  local: {
    label: "Selling from Tulsa",
    heading: "What Tulsa Means for Your Store",
    intro:
      "Three things about Tulsa shape how a store here should be set up and who builds it. A Shopify agency Tulsa brands rely on should plan for all three.",
    items: [
      {
        icon: "truck",
        name: "Storm Season Delays Shipments",
        desc: "Oklahoma averages more than 60 tornadoes a year, and 2024 set a record with 152. Storms and ice close roads and slow carriers. When your orders are late, your store should tell customers first: automatic delay notices, updated delivery estimates and an order-status page they can check themselves.",
      },
      {
        icon: "receipt",
        name: "Rates Change Across the Metro",
        desc: "An order to a Tulsa address carries 8.517% sales tax. Broken Arrow runs from 8.917% to 9.6% depending on the address, and parts of Owasso reach about 10%. Your store has to charge by delivery address, not by city name; your accountant handles registration and filing.",
      },
      {
        icon: "user",
        name: "A City Used to Remote Teams",
        desc: "Tulsa Remote has brought more than 4,000 remote workers to Tulsa since 2018. Working with people you meet on video is normal here, so you can choose a Shopify team for its results rather than its zip code. We run every project on video calls, a staging store you can test and weekly written updates.",
      },
    ],
  },

  caseStudies: {
    heading: "Custom Themes, Integrations and Launches: Three Results",
    intro:
      "One project for each kind of work. Ask any Shopify agency Tulsa brands consider for proof like this: real stores with measured results.",
    items: [
      {
        slug: "feetures-shopify-theme-development",
        tags: ["Custom Theme", "Collection Pages", "Performance Socks"],
        description: "A performance sock brand outgrew its theme and had a new one built from scratch, with custom collection pages and a free-shipping progress bar. Add-to-cart rate rose 32% and average order value 19%.",
        video: "/images/Case%20studies/Feetures%20video.mp4",
      },
      {
        slug: "capelli-sports-shopify-migration",
        tags: ["App Integrations", "WordPress to Shopify", "Sportswear"],
        description: "A sportswear brand moved from WordPress to Shopify with a 10-app integration stack and zero downtime. Conversion rate rose 24% and it kept 95% of its search traffic.",
        video: "/images/Case%20studies/Capelli%20Sports%20test%20video-2.mp4",
      },
      {
        slug: "vithit-shopify-plus-d2c",
        tags: ["Store Launch", "Shopify Plus", "Drinks"],
        description: "A functional drinks brand launched a direct store on Shopify Plus with automated bundles and discounts. Direct revenue grew 115% year on year and conversion rate 170%.",
        video: "/images/Case%20studies/VITHIT%20video%202.mp4",
      },
    ],
  },

  process: {
    heading: "How a Theme, Integration or Launch Runs",
    intro:
      "You sign off each of five stages before we move on: how the Shopify agency Tulsa brands choose should work. Most stores are live about six weeks after the first call.",
    steps: [
      { title: "Scope and Price", desc: "We list your pages, apps and systems, then fix the scope, one price and a launch date in writing." },
      { title: "Design and Data Map", desc: "Theme designs for phone and desktop, plus a map of what data moves between Shopify and your other systems. You approve both." },
      { title: "Build on Staging", desc: "Theme, apps and integrations built on a staging store connected to test copies of your systems." },
      { title: "Test Orders and Syncs", desc: "Test orders to Tulsa-area addresses, sync failures, delay notices and checkout, all checked before launch." },
      { title: "Launch and Support", desc: "We go live on the agreed date at a quiet hour, watch the first orders and syncs, and fix anything for 60 days." },
    ],
  },

  compare: {
    heading: "Comparing Your Shopify Agency Tulsa Options",
    intro: "Tulsa owners usually weigh three kinds of help against us. Each fits someone; these questions show which fits you.",
    options: [
      {
        name: "Monthly-plan Shopify shop",
        goodFor: "Small edits on a low monthly fee.",
        watchFor: "A custom theme or an ERP integration rarely fits a small plan. Ask what's included and what's billed extra.",
      },
      {
        name: "Hourly offshore developer",
        goodFor: "Simple tasks at a low hourly rate.",
        watchFor: "Hours add up without a fixed scope. Ask who designs, who tests and who answers when something breaks.",
      },
      {
        name: "Industrial B2B specialist",
        goodFor: "Large distributor catalogs and heavy ERP work.",
        watchFor: "Consumer brands need a different focus. Ask for direct-to-consumer stores they've grown.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Themes, integrations and launches in-house",
        "One fixed price and date, in writing",
        "Real numbers from every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Each category leans on different features. These are what a Shopify agency Tulsa brands work with should build in, category by category.",
    items: [
      { icon: "shirt", name: "Apparel and Western Wear", desc: "Size guides, new-season drops and a custom collection layout." },
      { icon: "food", name: "Food and Specialty Goods", desc: "Gift boxes, subscriptions and ship-day rules around storm season." },
      { icon: "home", name: "Home and Outdoor", desc: "Large option sets, freight delivery and delivery estimates on every product." },
      { icon: "star", name: "Health and Beauty", desc: "Product quizzes, subscriptions and connected email flows." },
      { icon: "paw", name: "Pet Products", desc: "Recurring orders, pet profiles and reorder reminders." },
      { icon: "box", name: "Wholesale and Distribution", desc: "Company accounts, ERP sync and bulk ordering. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency Tulsa FAQs",
  faqs: [
    {
      question: "Can I hire someone to build my Shopify store?",
      answer:
        "Yes. We design and build the whole store: theme, product pages, apps, integrations and payments, then launch it on the date in your scope and support it for 60 days.",
      unique: true,
    },
    {
      question: "How much does it cost to hire a Shopify developer?",
      answer:
        "Hourly rates vary widely, which is why we don't work by the hour. After a short call you get one fixed price for the whole project in writing within 48 hours, and that's what you pay unless you add work.",
      unique: true,
    },
    {
      question: "Shopify developer or agency: which should a Tulsa brand hire?",
      answer:
        "A Shopify developer Tulsa job boards list may suit one fix or a small feature. A custom theme, an ERP integration or a full launch needs design, development, testing and support together, which is what an agency is for.",
      unique: true,
    },
    {
      question: "Custom theme or a premium theme?",
      answer:
        "A premium theme is fine if your brand fits it and your needs are standard. If every change needs a workaround or your store looks like everyone else's, a custom theme costs less over time. We'll recommend one in writing.",
      unique: true,
    },
    {
      question: "Which systems can you connect to Shopify?",
      answer:
        "ERPs such as NetSuite, Acumatica and Microsoft Dynamics, accounting tools, 3PLs, CRMs and email platforms. Every sync gets error alerts and retries, so a failure is flagged rather than found at month-end.",
      unique: true,
    },
    {
      question: "How do I tell customers about weather delays automatically?",
      answer:
        "We set up shipping notifications and an order-status page that update from carrier tracking, plus a site banner you can switch on in a storm. Customers see the delay before they think to ask.",
      unique: true,
    },
    {
      question: "Do I need Shopify Plus?",
      answer:
        "Most brands don't at first. Plus earns its cost with checkout customization, wholesale company accounts, more automation or several storefronts. We'll recommend one, with reasons.",
      unique: false,
    },
    {
      question: "How long does a project take?",
      answer:
        "Around six weeks for most themes and launches, longer for large ERP integrations. We plan back from your launch date and write it into the scope.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Book a video call with a senior Shopify specialist. Tell us about your theme, your systems and your launch date; within two working days you'll have a written price and date.",
    bullets: [
      "Go through your theme, apps and systems",
      "Find out what a custom theme or integration involves",
      "Get one fixed price and a launch date in writing",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "ok-tornado-average",
      claim: "Oklahoma averages roughly 62 to 66 tornadoes a year depending on the period measured; 2024 saw 152, a record",
      url: "https://www.aol.com/2024-record-setting-tornado-oklahoma-110217909.html",
      publisher: "The Oklahoman (via AOL)",
      captured: "2026-11-18",
      reviewAfterDays: 365,
    },
    {
      id: "tulsa-metro-rates",
      claim: "Tulsa combined sales tax 8.517% (4.5% state, 0.367% county, 3.65% city); Broken Arrow 8.917% to 9.6% by ZIP; Owasso about 10.05% in its Rogers County portion (September 2026)",
      url: "https://trykintsugi.com/sales-tax-guides/usa/oklahoma/tulsa-county",
      publisher: "Kintsugi",
      captured: "2026-11-18",
      reviewAfterDays: 180,
    },
    {
      id: "tulsa-remote-4000",
      claim: "Tulsa Remote has welcomed 4,000 people to Tulsa in its first eight years (April 2026)",
      url: "https://tulsaflyer.org/2026/04/07/business/post/tulsa-remote-reaches-4k-arrivals/",
      publisher: "Tulsa Flyer",
      captured: "2026-11-18",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
