// Geo v5 S5, Shopify dev Phase 2a, page 5 of 15: Maryland (state), service
// format.
//
// Keywords (v5 plan 3.3):
//   primary    shopify developer maryland (SEMrush 20 / Ahrefs 20, KD 14).
//              Google rewrites it to "shopify development maryland"; PASF adds
//              "...jobs" and "free...", but page 1 is agency pages.
//   secondary  shopify agency maryland (KD 9)
// Existing /services/ecommerce-agency/maryland owns "ecommerce agency
// maryland" and the federal 30-day shipping rule angle; this page targets
// none of that and links across to it.
// SERP (2026-11-17): Baltimore and Rockville agencies; AI Overview leans on
// ERP/CRM/POS integrations and B2B portals. H1 owner pick #1.
// Keyword lines follow the split-sentence style the owner kept on Sacramento;
// the summary is plain English with no forced keyword.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_MARYLAND: ServiceGeoPage = {
  type: "service",
  slug: "maryland",
  path: "/services/shopify-development-agency/maryland",
  hub: "/services/shopify-development-agency",
  geo: { name: "Maryland", type: "state", areaServed: "Maryland" },

  targetKeyword: "shopify developer maryland",
  secondaryKeywords: ["shopify agency maryland"],
  faqKeywords: [],
  metaTitle: "Shopify Developer Maryland | Custom Builds, B2B and Integrations",
  metaDescription:
    "Looking for a Shopify developer? Maryland brands hire us for custom builds, B2B portals and ERP, CRM and POS integrations, at a fixed price agreed upfront.",
  shortTitle: "Shopify Developer Maryland",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Development for Maryland Brands",
    h1Lead: "",
    h1Gradient: "Shopify Developer",
    h1Tail: "Maryland Brands Hire for Custom Builds, B2B Portals and Integrations",
    intro:
      "Your store has to do more than show products. Trade customers need their own prices, orders need to reach your ERP without retyping, and your theme has to fit how you actually sell. That takes a Shopify developer. Maryland brands hire our team for [link:/services/shopify-theme-development|custom builds], [link:/services/shopify-b2b-store-setup|B2B portals] and [link:/services/erp-connections-to-shopify|ERP integrations], at a fixed price agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-maryland-hero-v1.webp",
      alt: "Shopify stores for Everlast, Saddleback and Henchman, with conversion rate up 152% and B2B sales up 881%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency that builds custom stores, B2B portals and system integrations for Maryland brands, from Baltimore and Rockville to Annapolis and Frederick. Most start on standard Shopify and move to Plus when wholesale, checkout rules or several storefronts call for it. Every project has a fixed price and date agreed in writing.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "Not sure what to expect from a Shopify developer? Maryland brands can start here: custom builds, trade portals and integrations, all designed and developed in-house by our own team.",
  },

  pains: {
    heading: "Where a Template Store Stops Working",
    intro:
      "A theme and a few apps get you started. These four problems are where most growing brands call a Shopify developer. Maryland or anywhere else, here is what each one costs you.",
    items: [
      {
        icon: "box",
        name: "Trade Buyers Ordering by Email",
        desc: "Distributors and stockists send orders by email or phone, someone checks their price list by hand, and invoices go out a day later.",
        cost: "Slow reorders, pricing mistakes and hours of admin every week.",
      },
      {
        icon: "layers",
        name: "Orders Retyped Into the ERP",
        desc: "Every Shopify order is copied into NetSuite, SAP, QuickBooks or a warehouse system by hand, and stock counts are updated the same way.",
        cost: "Typos, oversold stock and a full-time job nobody planned for.",
      },
      {
        icon: "alert",
        name: "A Theme That Almost Fits",
        desc: "Your product needs options, comparisons or a buying path the theme doesn't support, so customers email to ask instead of buying.",
        cost: "Questions that should have been orders.",
      },
      {
        icon: "user",
        name: "Apps Sharing Data You Never Checked",
        desc: "Review apps, pixels and marketing tools each collect customer data, and nobody has a list of what goes where.",
        cost: "Privacy risk you can't see, and a slower store for every visitor.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Maryland Brands",
    intro:
      "Every project is designed and developed by our own Shopify team, never passed to subcontractors. Looking for help across your whole store rather than development alone? See our [link:/services/ecommerce-agency/maryland|Maryland ecommerce agency page].",
    // Visual rows; the page's own case studies (Everlast, Saddleback,
    // Henchman) are not reused here.
    items: [
      {
        title: "Custom Builds",
        heading: "A store built around your products, not bent to fit a template",
        body: "Custom themes, product builders and buying paths designed for what you sell, fast on a phone and easy for your team to edit. Ronaldo Jewelry's configurator and redesign lifted total sales 250%.",
        covers: ["Custom theme", "Product builders", "Comparisons", "Custom sections", "Mobile design"],
        caseSlug: "ronaldo-jewelry-shopify-plus-redesign",
        imageAlt: "Ronaldo Jewelry store with a custom bracelet configurator",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "B2B and Wholesale Portals",
        heading: "Trade accounts that log in, see their prices and reorder in minutes",
        body: "Company accounts with price lists, payment terms, minimum orders and live stock, in the same store as your retail site. Mouldings One's trade portal grew B2B revenue 50% and cut order processing time 74%.",
        covers: ["Company accounts", "Price lists", "Payment terms", "Live stock", "Quick reorder"],
        caseSlug: "mouldings-one-shopify-b2b-portal",
        imageAlt: "Mouldings One trade portal on Shopify Plus",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        title: "ERP, CRM and POS Integrations",
        heading: "Orders, stock and customers flowing between Shopify and your other systems",
        body: "Shopify connected to NetSuite, SAP, QuickBooks, your CRM or Shopify POS, with alerts when a sync fails. NEOM brought four retail locations under Shopify POS and grew checkout conversion 34%.",
        covers: ["ERP sync", "CRM sync", "Shopify POS", "Inventory sync", "Error alerts"],
        caseSlug: "neom-wellbeing-shopify-upgrade",
        imageAlt: "NEOM Wellbeing retail and online store on Shopify",
        cta: { label: "Explore ERP connections", href: "/services/erp-connections-to-shopify" },
      },
      {
        title: "Migrations to Shopify Plus",
        heading: "Off Magento, Salesforce or WooCommerce on a date you can plan around",
        body: "Products, customers, orders and trade accounts moved with every URL redirected, and rankings watched after launch. John Hardy moved from Salesforce Commerce Cloud to Shopify Plus in under three months.",
        covers: ["Magento", "Salesforce", "WooCommerce", "301 redirects", "Rank tracking"],
        caseSlug: "john-hardy-shopify-plus-migration",
        imageAlt: "John Hardy jewelry store migrated to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        title: "Custom Apps and App Stacks",
        heading: "The right apps, connected properly, and custom code where none fits",
        body: "We pick and configure the apps you need, connect them to each other, and build custom apps for the jobs no app does. Capelli Sports launched on Shopify with a 10-app stack and kept 95% of its search traffic.",
        covers: ["App selection", "App configuration", "Custom apps", "Webhooks", "Data audits"],
        caseSlug: "capelli-sports-shopify-migration",
        imageAlt: "Capelli Sports store on Shopify with its integrated app stack",
        cta: { label: "Explore custom app development", href: "/services/shopify-app-development" },
      },
      {
        title: "Speed and Ongoing Support",
        heading: "A store that stays fast as you add to it, and help when you need it",
        body: "Lighter code, fewer scripts and image work, then 60 days of fixes with every build and a monthly plan if you want one. Chilly's rebuilt store loads 42% faster.",
        covers: ["Core Web Vitals", "Script cleanup", "Image work", "60-day support", "Monthly plan"],
        caseSlug: "chillys-headless-commerce-layer",
        imageAlt: "Chilly's bottle store rebuilt to load 42% faster",
        cta: { label: "Explore speed optimization", href: "/services/shopify-speed-optimization" },
      },
    ],
  },

  local: {
    label: "Selling from Maryland",
    heading: "What Maryland Means for Your Store",
    intro:
      "Three Maryland rules and seasons change how your store should be built. Settle each one with your Shopify developer. Maryland enforces two of them, and the third sets your calendar.",
    items: [
      {
        icon: "user",
        name: "A Strict State Privacy Law",
        desc: "The Maryland Online Data Privacy Act took effect October 1, 2025, and the Attorney General has enforced it since April 1, 2026. It reaches businesses with data on 35,000 Maryland consumers, and the Attorney General says sensitive data cannot be sold at all. We audit which apps and pixels share customer data and collect only what your store needs; whether the Act applies to you is a question for your lawyer.",
      },
      {
        icon: "receipt",
        name: "A 3% Tax on Software and IT Services",
        desc: "Since July 1, 2025, Maryland has taxed many data, IT and software publishing services at 3%. That can include the app subscriptions and software tools your business pays for. When you compare a stack of monthly apps with a one-time custom build, count it in; your accountant confirms what applies to you.",
      },
      {
        icon: "calendar",
        name: "Blue Crab Season Sets the Calendar",
        desc: "Chesapeake Bay crab season runs from April 1 to December 15. If you sell seafood or anything tied to the season, your store needs products that switch on and off by date, pre-orders before opening day and overnight-shipping cutoffs shown on the product page.",
      },
    ],
  },

  caseStudies: {
    heading: "Custom Builds, B2B Portals and Integrations: Three Results",
    intro:
      "One project for each kind of work you might hire a Shopify developer for. Maryland brands can compare like for like: each comes with measured results.",
    items: [
      {
        slug: "everlast-shopify-plus-sports-redesign",
        tags: ["Custom Build", "Shopify Plus", "Sporting Goods"],
        description: "A boxing brand needed a store for consumers and trade buyers at once. We built a custom theme with product comparisons and separate retail and trade checkouts. Conversion rate rose 152% and orders 48%.",
        video: "/images/Case%20studies/Everlast%20video.mp4",
      },
      {
        slug: "saddleback-shopify-plus-b2b",
        tags: ["B2B Portal", "Shopify Plus", "Cycling"],
        description: "A cycling distributor replaced a clunky wholesale portal with a Shopify Plus B2B store, a custom credit application and bulk CSV ordering. B2B sales grew 881% in the first month.",
        video: "/images/Case%20studies/Saddleback%20video.mp4",
      },
      {
        slug: "henchman-shopify-plus-b2b",
        tags: ["ERP Integration", "Brightpearl", "Access Equipment"],
        description: "A ladder and access equipment specialist left Magento for Shopify Plus, with tiered price books and Brightpearl ERP handling orders automatically. Online revenue grew 58% and order handling time fell 70%.",
        video: "/images/Case%20studies/Henchman%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How a Build or Integration Runs",
    intro:
      "Five stages, each signed off by you before the next. It's how working with a Shopify developer should go. Maryland projects usually go live in about six weeks, longer for large ERP integrations.",
    steps: [
      { title: "Map Your Store and Systems", desc: "We list your products, buyer types and every system Shopify needs to talk to, then fix the scope, one price and a date in writing." },
      { title: "Design and Data Plan", desc: "Page designs for phone and desktop, plus a written plan of what data moves between systems and when. You approve both." },
      { title: "Build on Staging", desc: "Theme, trade accounts and integrations built on a staging store connected to test copies of your other systems." },
      { title: "Test Every Order Type", desc: "Retail and trade orders, ERP syncs, failed-sync alerts, tax and seasonal products, all checked before launch." },
      { title: "Launch and 60 Days of Support", desc: "We go live at a quiet hour, watch the first orders and syncs, and fix anything that comes up for 60 days." },
    ],
  },

  compare: {
    heading: "Shopify Agency, Maryland Freelancer or Big Integrator?",
    intro: "Most Maryland owners weigh three kinds of help against us. Each suits someone; these questions show which suits you.",
    options: [
      {
        name: "Freelance developer",
        goodFor: "A single fix or one new feature.",
        watchFor: "A B2B portal plus an ERP integration is a lot for one person. Ask who tests the syncs and who fixes them when one fails.",
      },
      {
        name: "ERP or IT integrator",
        goodFor: "Back-office systems, networks and ERP configuration.",
        watchFor: "Shopify's checkout, themes and B2B features are their own specialty. Ask how many Shopify stores they've launched.",
      },
      {
        name: "Large national agency",
        goodFor: "Enterprise programs with large budgets.",
        watchFor: "Minimum budgets sized for national retailers, and a junior team doing the day-to-day work.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Custom builds, B2B and integrations in-house",
        "Fixed price and date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Each category needs different things built in, so raise them early with your Shopify developer. Maryland brands in these categories should expect the following.",
    items: [
      { icon: "box", name: "Manufacturing and Industrial Supply", desc: "Trade portals, part search, spec sheets and ERP syncs for account pricing." },
      { icon: "food", name: "Seafood and Specialty Food", desc: "Seasonal availability, pre-orders, gift boxes and overnight-shipping cutoffs." },
      { icon: "star", name: "Health, Beauty and Wellness", desc: "Product quizzes, subscriptions and careful handling of customer data." },
      { icon: "shirt", name: "Apparel and Sporting Goods", desc: "Size guides, team and bulk orders, and stock shared across channels." },
      { icon: "home", name: "Home and Furniture", desc: "Product builders, freight delivery and trade accounts for designers." },
      { icon: "store", name: "Retail With a Physical Shop", desc: "Shopify POS, shared stock and customers across your shop and your site." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Developer Maryland FAQs",
  faqs: [
    {
      question: "Can you connect Shopify to our ERP?",
      answer:
        "Yes. We connect Shopify to NetSuite, SAP Business One, Microsoft Dynamics, Acumatica, Odoo, QuickBooks and others, so orders, stock, prices and tracking move without retyping, with alerts when a sync fails.",
      unique: true,
    },
    {
      question: "Do I need Shopify Plus for B2B?",
      answer:
        "Not always. Standard Shopify handles simple trade pricing. Plus adds company accounts, payment terms and checkout rules that matter once wholesale grows. We'll tell you which you need on the first call.",
      unique: true,
    },
    {
      question: "Shopify agency or freelance developer: which do I need?",
      answer:
        "A freelancer suits one fix or a single feature. A custom build, a B2B portal or an ERP integration needs design, development, testing and support together, which is what an agency is for.",
      unique: true,
    },
    {
      question: "Can I hire a Shopify developer for free?",
      answer:
        "Not for custom work. Shopify's own themes and guides cover a simple store for free, but custom builds, trade portals and integrations need a paid Shopify developer. Maryland brands can start with our free first call and keep the written scope whether they hire us or not.",
      unique: true,
    },
    {
      question: "Does Maryland's privacy law affect my store?",
      answer:
        "It can, depending on how many Maryland customers you have and what data you hold. We audit which apps and pixels collect and share data, and set up your store to collect only what it needs; your lawyer confirms whether the Act applies to you.",
      unique: true,
    },
    {
      question: "Will I lose rankings when I migrate to Shopify?",
      answer:
        "Not if the move is planned. Every old URL points to its new page, product content comes across intact, and we track your rankings for a month after launch.",
      unique: false,
    },
    {
      question: "How much does Shopify development cost?",
      answer:
        "It depends on the build and how many systems it connects to, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a date within 48 hours.",
      unique: false,
    },
    {
      question: "How long does a project take?",
      answer:
        "Around six weeks for most builds, longer for large ERP integrations. We count back from the date that matters to you, such as crab season or the holidays, and write it into the scope.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a time for a video call with a senior Shopify specialist. Tell us what you sell, who buys it and which systems your store needs to talk to; within two working days you'll have a written price and date.",
    bullets: [
      "Talk through your store, your buyers and your systems",
      "Find out whether you need standard Shopify or Shopify Plus",
      "Get a fixed price and a date within 48 hours",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "md-modpa",
      claim: "Maryland Online Data Privacy Act effective October 1, 2025, applying to processing from April 1, 2026; covers controllers handling data of at least 35,000 Maryland consumers (excluding payment-only data); the Attorney General states a controller cannot sell sensitive data",
      url: "https://oag.maryland.gov/resources-info/Pages/data-privacy.aspx",
      publisher: "Maryland Office of the Attorney General",
      captured: "2026-11-17",
      reviewAfterDays: 180,
    },
    {
      id: "md-tech-tax-3pct",
      claim: "Effective July 1, 2025, Maryland imposes a 3% sales and use tax on data or information technology services (NAICS 518, 519, 5415) and system or application software publishing services (NAICS 5132)",
      url: "https://www.marylandcomptroller.gov/legal-library/tb-30-jun-2025.html",
      publisher: "Comptroller of Maryland",
      captured: "2026-11-17",
      reviewAfterDays: 180,
    },
    {
      id: "md-blue-crab-season",
      claim: "Maryland's blue crab season in the Chesapeake Bay and its tidal tributaries opens April 1 and runs through December 15",
      url: "https://southernmarylandchronicle.com/2026/04/01/maryland-blue-crabs-return-april-1-with-state-crustacean-pride",
      publisher: "Southern Maryland Chronicle",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
