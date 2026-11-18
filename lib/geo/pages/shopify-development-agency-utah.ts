// Geo v5 S5, Shopify dev Phase 2a, page 11 of 15: Utah (state), service format.
//
// Keywords (v5 plan 3.3):
//   primary    shopify agency utah (SEMrush 10 / Ahrefs 10, KD 4)
//   secondary  shopify developer utah (KD 14). SERP is the most job-heavy so
//              far (Jobs block: Skullcandy, Pattern, Young Living; PASF
//              "...jobs"); kept light, answered by an in-house-or-agency FAQ.
// SERP (2026-11-19, location applied): Netalico (owns outdoor/lifestyle),
// aqsashahzad.com, Kinex, Ecomstrat, listicles. AI Overview asks: new build,
// redesign, migration or custom app; standard, Plus, B2B or headless.
// H1 owner pick #1 ("New Stores, Affiliate Programs and Subscriptions").
// No case study covers affiliate or referral work, so none is claimed: the
// affiliate row describes the service and cites Saddleback's trade pricing;
// Everlast stands for separate retail and trade checkout paths.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_UTAH: ServiceGeoPage = {
  type: "service",
  slug: "utah",
  path: "/services/shopify-development-agency/utah",
  hub: "/services/shopify-development-agency",
  geo: { name: "Utah", type: "state", areaServed: "Utah" },

  targetKeyword: "shopify agency utah",
  secondaryKeywords: ["shopify developer utah"],
  faqKeywords: [],
  metaTitle: "Shopify Agency Utah | New Stores, Affiliates and Subscriptions",
  metaDescription:
    "The Shopify agency Utah brands hire for new stores, affiliate and rep programs, and subscriptions that keep families reordering, at a fixed price agreed upfront.",
  shortTitle: "Shopify Agency Utah",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Utah Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Utah Brands Hire for New Stores, Affiliate Programs and Subscriptions",
    intro:
      "Your customers find you through a friend, a rep or an ambassador, buy for the whole family and want the same order next month. We're the Shopify agency Utah brands hire to build for exactly that: [link:/services/shopify-theme-development|new stores], affiliate and rep programs that track every referral, and subscriptions that reorder on their own. One fixed price, agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-utah-hero-v1.webp",
      alt: "Shopify stores for Happy Mammoth, Daring and Everlast, with subscription revenue up 134% and conversion rate up 152%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency that builds new stores, affiliate and rep programs, and subscription setups for Utah brands from Salt Lake City and Lehi to Provo and St. George. Most start on standard Shopify; Plus suits brands with wholesale, rep pricing or several storefronts. Every project has a fixed price and date agreed in writing.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "New stores, trade and loyalty setups, and subscription programs, each designed and developed in-house by our own Shopify team.",
  },

  pains: {
    heading: "Where Word-of-Mouth Sales Get Lost",
    intro:
      "Brands that grow through people tend to hit the same four problems. These are what the Shopify agency Utah brands hire should fix first, and what each one costs you now.",
    items: [
      {
        icon: "user",
        name: "Referrals Nobody Can Track",
        desc: "Reps and ambassadors share links and codes by hand, and commissions are worked out in a spreadsheet at month-end.",
        cost: "Disputes with your best sellers and hours of admin.",
      },
      {
        icon: "calendar",
        name: "Families Reordering From Scratch",
        desc: "Customers who buy the same household staples every month have to find them, add them and check out again each time.",
        cost: "Repeat orders lost to friction or to a cheaper store.",
      },
      {
        icon: "box",
        name: "No Family-Size Options",
        desc: "Single units only, with no bundles, bulk packs or multi-buy pricing for bigger households.",
        cost: "Smaller orders than your customers are ready to place.",
      },
      {
        icon: "alert",
        name: "A Store Built by One Busy Developer",
        desc: "One in-house hire or freelancer carries design, code and fixes alone, and the work stalls when they're out.",
        cost: "Launches that slip and a store that only one person understands.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Utah Brands",
    intro:
      "Every project is designed and developed by our own Shopify team, never passed to subcontractors. After launch, we can also take on [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO].",
    // Visual rows; the page's own case studies (Daring, Everlast, Happy
    // Mammoth) are not reused here.
    items: [
      {
        title: "New Store Builds",
        heading: "A new store that launches on the date in your plan",
        body: "Custom theme, product pages, apps and integrations planned up front and built on a staging store you can try as it comes together. VITHIT's new Shopify Plus store grew direct revenue 115% year on year.",
        covers: ["Custom theme", "Product pages", "App setup", "Integrations", "Launch plan"],
        caseSlug: "vithit-shopify-plus-d2c",
        imageAlt: "VITHIT drinks store built on Shopify Plus",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Affiliate, Referral and Rep Programs",
        heading: "Every referral tracked, every rep paid correctly, without a spreadsheet",
        body: "Referral links and codes for reps, ambassadors and affiliates, separate pricing for rep accounts, and order data your commission tool can read. For trade pricing, Saddleback's B2B store with custom credit approval grew wholesale sales 881% in its first month.",
        covers: ["Referral links", "Affiliate codes", "Rep accounts", "Rep pricing", "Commission data"],
        caseSlug: "saddleback-shopify-plus-b2b",
        imageAlt: "Saddleback store with trade accounts and custom pricing",
      },
      {
        title: "Subscriptions and Repeat Orders",
        heading: "Household staples that reorder themselves",
        body: "Subscribe-and-save on any product, a portal to skip, swap or change frequency, and renewal emails that keep churn down. Wild grew to more than 80,000 active monthly subscribers.",
        covers: ["Subscribe and save", "Customer portal", "Skip and swap", "Renewal emails", "Churn reports"],
        caseSlug: "wild-shopify-plus-subscriptions",
        imageAlt: "Wild refillable personal care subscriptions on Shopify",
      },
      {
        title: "Family Bundles and Bulk Packs",
        heading: "Bigger orders for bigger households",
        body: "Build-your-own bundles, multi-packs and tiered pricing that rewards larger orders, shown where shoppers decide. Sneak Energy's bundle builder helped lift add-to-cart rate 52%.",
        covers: ["Bundle builder", "Multi-packs", "Tiered pricing", "Volume discounts", "Gift sets"],
        caseSlug: "sneak-energy-shopify-redesign",
        imageAlt: "Sneak Energy store with a mix-and-match bundle builder",
      },
      {
        title: "Mobile Checkout",
        heading: "A checkout built for phones, because that's where your customers buy",
        body: "Shop Pay, Apple Pay, pay-later options and address validation, with fewer fields and faster pages. Dryrobe's rebuilt checkout lifted checkout completion 23%.",
        covers: ["Shop Pay", "Apple Pay", "Pay later", "Address validation", "Page speed"],
        caseSlug: "dryrobe-shopify-plus-redesign",
        imageAlt: "Dryrobe store with a rebuilt mobile checkout",
      },
      {
        title: "Migrations and Support",
        heading: "Off your old platform, and looked after once you're live",
        body: "Products, customers, subscriptions and order history moved with every URL redirected, then 60 days of fixes and a monthly plan if you want one. John Hardy moved to Shopify Plus in under three months.",
        covers: ["WooCommerce", "Magento", "Salesforce", "301 redirects", "60-day support"],
        caseSlug: "john-hardy-shopify-plus-migration",
        imageAlt: "John Hardy jewelry store migrated to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
    ],
  },

  local: {
    label: "Selling from Utah",
    heading: "What Utah Means for Your Store",
    intro:
      "Three things about Utah shape who buys from you and who builds your store. A Shopify agency Utah brands rely on should plan around all three.",
    items: [
      {
        icon: "user",
        name: "A Direct-Selling Heartland",
        desc: "Utah is home to around 91 direct-selling companies, doTERRA, Young Living and Nu Skin among them. Plenty of Utah brands grow the same way, through reps, ambassadors and affiliates. If yours does, the store should track every referral, price rep accounts separately and send clean order data to your commission tool.",
      },
      {
        icon: "home",
        name: "Young Families, Bigger Households",
        desc: "Utah has the youngest median age in the country, 32.4 against a national 39.1, and the largest households, about 2.9 people against 2.6. If you sell household goods, build for how families buy: bundles, bulk packs, subscriptions and a checkout that works one-handed on a phone.",
      },
      {
        icon: "chart",
        name: "Hiring In-House Means Competing for Talent",
        desc: "Utah's remote Shopify developers average about $48 an hour, and the state's bigger online brands recruit from the same small pool. One hire still leaves you without a designer, a tester and a backup. A team covers all four roles for one fixed price per project.",
      },
    ],
  },

  caseStudies: {
    heading: "New Stores, Trade Paths and Subscriptions: Three Results",
    intro:
      "One project for each part of the job, and the proof to ask of any Shopify agency Utah brands consider: real stores with measured results.",
    items: [
      {
        slug: "daring-headless-shopify-hydrogen",
        tags: ["New Store", "Headless Shopify", "Plant-Based Food"],
        description: "A plant-based food brand launched a new Shopify Plus storefront with recipes, product discovery and checkout in one place. Conversion rate rose 38% and pages load 42% faster.",
        video: "/images/Case%20studies/Daring%20video.mp4",
      },
      {
        slug: "everlast-shopify-plus-sports-redesign",
        tags: ["Retail and Trade Paths", "Shopify Plus", "Sporting Goods"],
        description: "A boxing brand needed consumers and trade buyers in one store, each with their own path to checkout. Conversion rate rose 152% and orders 48%.",
        video: "/images/Case%20studies/Everlast%20video.mp4",
      },
      {
        slug: "happy-mammoth-shopify-subscriptions-cro",
        tags: ["Subscriptions", "Product Quiz", "Supplements"],
        description: "A supplement brand rebuilt its product quiz and launched recurring orders through Recharge, with new retention emails. Subscription revenue grew 134% and customer lifetime value 89%.",
        video: "/images/Case%20studies/happy-mammoth-video.mp4",
      },
    ],
  },

  process: {
    heading: "How a Store, Program or Subscription Build Runs",
    intro:
      "You approve each of five stages before work moves on: the way a Shopify agency Utah brands can count on should run a project. Most stores go live about six weeks after the first call.",
    steps: [
      { title: "Map How You Sell", desc: "Direct, through reps, by subscription or wholesale: we list every path, then fix the scope, one price and a date in writing." },
      { title: "Design Each Path", desc: "Store pages, rep sign-up and the subscription portal, designed for phone first. You approve every screen." },
      { title: "Build on Staging", desc: "Theme, referral tracking, subscriptions and integrations built on a staging store you can test." },
      { title: "Test Real Orders", desc: "Referral orders, rep pricing, subscription renewals and bundles, all checked before launch." },
      { title: "Launch and Support", desc: "We go live at a quiet hour, watch the first orders and referrals, and fix anything for 60 days." },
    ],
  },

  compare: {
    heading: "Comparing Your Shopify Agency Utah Options",
    intro: "Utah owners usually weigh three kinds of help against us. Each fits someone; these questions show which fits you.",
    options: [
      {
        name: "In-house hire",
        goodFor: "Constant small changes once the store is built.",
        watchFor: "One person rarely covers design, code, testing and backup. Count recruiting time and salary against a fixed project price.",
      },
      {
        name: "Direct-sales software platform",
        goodFor: "Large multi-level compensation plans and back offices.",
        watchFor: "Your storefront still needs to sell. Ask how the platform connects to Shopify and who maintains it.",
      },
      {
        name: "Freelance developer",
        goodFor: "Single features and theme edits.",
        watchFor: "Referral tracking plus subscriptions is a lot for one person. Ask who tests it and who answers after launch.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Stores, referral programs and subscriptions in-house",
        "One fixed price and date, in writing",
        "Real numbers from every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Each category grows a little differently. These are the features a Shopify agency Utah brands work with should plan for, category by category.",
    items: [
      { icon: "star", name: "Wellness, Oils and Supplements", desc: "Rep pricing, referral tracking and subscriptions." },
      { icon: "home", name: "Household and Family Goods", desc: "Bulk packs, bundles and subscribe-and-save." },
      { icon: "shirt", name: "Apparel and Activewear", desc: "Size guides, drops and ambassador codes." },
      { icon: "food", name: "Food and Snacks", desc: "Family bundles, gift boxes and recurring orders." },
      { icon: "flag", name: "Outdoor Gear", desc: "Spec comparisons, fit finders and seasonal launches." },
      { icon: "box", name: "Wholesale and Retail Partners", desc: "Company accounts and price lists. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency Utah FAQs",
  faqs: [
    {
      question: "Should I hire an in-house Shopify developer or an agency?",
      answer:
        "In-house makes sense once the store is built and you need constant small changes. For a new store, an affiliate program or subscriptions, a team gives you design, development, testing and support at once. A Shopify developer Utah brands hire alone rarely covers all four.",
      unique: true,
    },
    {
      question: "Can Shopify track affiliate and rep referrals?",
      answer:
        "Yes, through a referral or affiliate app connected to your store. We set up links and codes, separate pricing for rep accounts and order data your commission tool can read, so payouts stop being a month-end spreadsheet.",
      unique: true,
    },
    {
      question: "Can my store run subscriptions and one-time orders together?",
      answer:
        "Yes. Customers choose one-time or subscribe-and-save on the same product page, and subscribers manage everything from a portal: skip, swap, change frequency or pause.",
      unique: true,
    },
    {
      question: "Can you build bundles and family packs?",
      answer:
        "Yes. Build-your-own bundles, fixed multi-packs and tiered pricing that steps up with order size, all inside Shopify's checkout rather than bolted on with scripts.",
      unique: true,
    },
    {
      question: "Will rep pricing need Shopify Plus?",
      answer:
        "Simple rep discounts run on standard Shopify. Separate company accounts, payment terms and price lists for each rep group are Plus features, worth the fee once your rep network is large. We'll tell you which you need.",
      unique: false,
    },
    {
      question: "How do we work together day to day?",
      answer:
        "Over video calls and a shared staging store you can click through at any hour, with a written progress note every week. Everything that matters, scope, price and launch date, is agreed in writing before work begins.",
      unique: false,
    },
    {
      question: "What does a store with referrals and subscriptions cost?",
      answer:
        "It depends on how many programs run together and what they connect to, so there's no rate card. A short call is enough for us to send one fixed price and a launch date in writing, usually within two working days.",
      unique: false,
    },
    {
      question: "When could we launch?",
      answer:
        "A new store usually takes around six weeks; adding a referral program and subscriptions at the same time stretches that. Name your target date and the plan works backwards from it.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Book a video call with a senior Shopify specialist. Tell us how your customers find you and how often they reorder; a written price and date follow within two working days.",
    bullets: [
      "Walk through how you sell: direct, reps or subscriptions",
      "Find out what a referral or subscription setup involves",
      "Get one fixed price and a launch date in writing",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "ut-direct-selling",
      claim: "Utah had about 91 direct selling companies (2020 data), including doTERRA (Pleasant Grove), Young Living (Lehi) and Nu Skin (Provo)",
      url: "https://gardner.utah.edu/wp-content/uploads/DirectSales-Aug2022.pdf",
      publisher: "Kem C. Gardner Policy Institute, University of Utah",
      captured: "2026-11-19",
      reviewAfterDays: 365,
    },
    {
      id: "ut-median-age",
      claim: "Utah is the youngest state, median age 32.4 in 2024 against a US median of 39.1",
      url: "https://www.ksl.com/article/51336110/utah-retains-title-as-youngest-in-the-nation-but-its-also-one-of-the-fastest-aging-states",
      publisher: "KSL (US Census Bureau data)",
      captured: "2026-11-19",
      reviewAfterDays: 365,
    },
    {
      id: "ut-household-size",
      claim: "Utah has the largest households in the nation, averaging about 2.9 people against 2.6 nationally (American Community Survey)",
      url: "https://www.ldsliving.com/who-is-utah-survey-shows-its-largest-highest-lowest-youngest/s/65973",
      publisher: "LDS Living (American Community Survey)",
      captured: "2026-11-19",
      reviewAfterDays: 365,
    },
    {
      id: "ut-shopify-dev-pay",
      claim: "Average hourly pay for a remote Shopify developer in Utah was $48.10 as of May 31, 2026",
      url: "https://www.ziprecruiter.com/Jobs/Remote-Shopify-Developer/--in-Utah",
      publisher: "ZipRecruiter",
      captured: "2026-11-19",
      reviewAfterDays: 180,
    },
  ],
  wordCountTarget: [1600, 2800],
};
