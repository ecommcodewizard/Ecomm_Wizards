// Geo v5 app pages, 1 of 2: Shopify app development for Charlotte, in the
// service format (ServicePageTemplate). H1 chosen by the owner 2026-11-13.
//
// Keywords (SEMrush / Ahrefs, Nov 2026):
//   primary    shopify app development charlotte (70 / 70, KD 1)
//   secondary  none. "e-commerce app development charlotte" (40) was checked
//              and dropped: its SERP is mobile-app and custom-software firms,
//              and we don't build mobile apps.
// Must not target store-build terms (the Charlotte dev page owns those).
// Never "in Charlotte" (presence rule). Facts are sourced below; nothing else
// about the city is claimed. Case studies come from lib/shopify-app-studies.ts
// (no videos, so cards show the study's hero image).

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_APP_CHARLOTTE: ServiceGeoPage = {
  type: "service",
  slug: "charlotte",
  path: "/services/shopify-app-development/charlotte",
  hub: "/services/shopify-app-development",
  geo: { name: "Charlotte", type: "metro", areaServed: "Charlotte, North Carolina" },

  targetKeyword: "shopify app development charlotte",
  secondaryKeywords: [],
  faqKeywords: [],
  metaTitle: "Shopify App Development Charlotte | Private Apps & Integrations",
  metaDescription:
    "Shopify app development Charlotte brands hire for private apps, ERP and 3PL integrations and App Store builds. Fixed price, and you own the code.",
  shortTitle: "Shopify App Development Charlotte",
  serviceType: "Shopify app development",

  hero: {
    badge: "Shopify App Development for Charlotte Brands",
    h1Lead: "",
    h1Gradient: "Shopify App Development Charlotte",
    h1Tail: "Brands Hire for Private Apps and Integrations",
    intro:
      "Your store runs on more than Shopify: a warehouse system, an ERP, a subscription tool and a spreadsheet someone updates by hand every Monday. The Shopify app development Charlotte brands hire us for joins those pieces up: [link:/services/erp-connections-to-shopify|ERP connections], private apps built for your store alone, and [link:/services/shopify-integration-services|integrations] with the tools you already pay for. One fixed price, agreed before any code is written, and the code is yours.",
    stats: [
      { value: "8+", label: "Years on Shopify" },
      { value: "150+", label: "Stores Built" },
      { value: "9+", label: "Industry Awards" },
      { value: "4.9★", label: "Client Rating" },
    ],
    image: {
      src: "/images/shopify-app-development-charlotte-hero-v1.webp",
      alt: "Custom Shopify apps we built for Vytronix, UntuckIt and emma&noah, with average order value up 61% and gift card traffic peaks of 3x",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. Private apps, integrations and App Store builds.",
  },

  summary:
    "Ecomm Wizards is a Shopify-only agency that builds private apps, ERP, 3PL and CRM integrations, and public Shopify App Store apps for brands across the US, Charlotte included. Every build starts with a written scope and one fixed price, uses Shopify's own app tools, and hands over the code and documentation at launch.",

  trust: {
    heading: "The Brands Behind Our Shopify Apps and Stores",
    subheading: "From an App Store app used by 50,000+ merchants to private tools for one brand, all built in-house. That's the Shopify app development Charlotte brands get from us.",
  },

  pains: {
    heading: "Where Your Team Loses Hours Every Week",
    intro:
      "Most brands don't come to us wanting an app. They come because something keeps breaking or someone keeps retyping. These are the four problems Shopify app development Charlotte brands bring us most often, and what each one costs you today.",
    items: [
      {
        icon: "layers",
        name: "Orders Retyped Into Another System",
        desc: "Every order gets copied into your ERP, accounting tool or warehouse system by hand, and stock levels are updated the same way. It works until the day it doesn't: a typo, a missed order, a product sold twice.",
        cost: "Hours of someone's week, plus the refunds and apology emails when stock counts drift.",
      },
      {
        icon: "grid",
        name: "Five Apps Doing the Job of One",
        desc: "A bundle app, a gift card app, a wishlist app and two more to patch the gaps between them. Each adds a monthly fee and a script to every page, and none of them share data.",
        cost: "Fees that grow with your order volume, and a slower store for every shopper.",
      },
      {
        icon: "alert",
        name: "An App That Almost Fits",
        desc: "The App Store tool does most of what you need. The part it can't do is the part that's specific to how you sell, so your team works around it every day.",
        cost: "Your process bends to the software instead of the other way round.",
      },
      {
        icon: "clock",
        name: "Custom Code Nobody Can Maintain",
        desc: "A freelancer built it years ago, it runs on an old API version, and nobody has the login to where it's hosted. Shopify releases a new API version every quarter and retires old ones, so code nobody updates eventually stops working.",
        cost: "A checkout feature or a sync that fails without warning, usually in your busiest week.",
      },
    ],
  },

  services: {
    label: "App Development Services",
    heading: "Shopify App Development Services for Charlotte Brands",
    intro:
      "Everything below is scoped, built and supported in-house by developers who work only on Shopify. If what you need turns out to be an existing app set up properly, we'll tell you: [link:/services/shopify-app-setup-and-app-optimization|app setup] is a much smaller job than a build.",
    // Visual rows. Case studies avoid the page's own three (emma&noah,
    // UntuckIt, Vytronix).
    items: [
      {
        title: "Private Apps for One Store",
        heading: "An app built for your store alone, doing the job no App Store app does",
        body: "A private app installs on your store only and skips App Store review, so we build exactly the workflow you describe: a registration tool, a trade account approver, a shared wishlist. Your team uses it inside Shopify admin like any other app.",
        covers: ["Custom app", "Admin screens", "Theme app blocks", "Webhooks", "Shopify Functions"],
        caseSlug: "abask-shopify-wishlist-app",
        imageAlt: "ABASK luxury goods storefront on Shopify",
        cta: { label: "Explore app development", href: "/services/shopify-app-development" },
      },
      {
        title: "ERP and Inventory Integrations",
        heading: "One stock count across Shopify, your ERP and the warehouse",
        body: "Orders flow out to your ERP the moment they're placed, and stock, prices and tracking numbers flow back, so nobody exports a CSV again. We connect NetSuite, Acumatica, Microsoft Dynamics, SAP Business One, Odoo and Sage, with alerts when a sync fails.",
        covers: ["ERP sync", "Live stock", "Order export", "Price lists", "Error alerts"],
        caseSlug: "mouldings-one-shopify-b2b-portal",
        imageAlt: "Mouldings One trade portal on Shopify Plus",
        cta: { label: "Explore ERP connections", href: "/services/erp-connections-to-shopify" },
      },
      {
        title: "3PL, Shipping and Checkout Apps",
        heading: "Orders reach the warehouse, and the warehouse's answers reach the customer",
        body: "Order routing to your 3PL, delivery-date estimates, address checks at checkout and tracking back into Shopify. For what3words we built the official checkout app that passes a precise delivery location to DHL, DPD and Evri.",
        covers: ["3PL routing", "Checkout extensions", "Address validation", "Carrier APIs", "Tracking sync"],
        caseSlug: "what3words-shopify-checkout-app",
        imageAlt: "what3words address field inside a Shopify checkout",
        cta: { label: "Explore integrations", href: "/services/shopify-integration-services" },
      },
      {
        title: "Public Apps for the Shopify App Store",
        heading: "An app other merchants install, built to Shopify's review checklist from day one",
        body: "If you have a tool other merchants would pay for, we build the app, the admin, the billing and the listing, and work through Shopify's app requirements before submission. teelaunch, the print-on-demand app we built, went on to onboard 50,000+ merchants.",
        covers: ["App Store listing", "Billing API", "Merchant onboarding", "Review checklist", "Multi-store scale"],
        caseSlug: "teelaunch-print-on-demand",
        imageAlt: "teelaunch print-on-demand app for Shopify merchants",
      },
      {
        title: "Subscriptions, Bundles and Discount Logic",
        heading: "Recurring orders and discount rules that work the way you price",
        body: "Subscription portals, build-your-own boxes, tiered discounts and checkout rules written as Shopify Functions, so they run inside Shopify's checkout instead of in a script that slows it down. For Happy Mammoth we set up Recharge-powered recurring orders around a rebuilt product quiz.",
        covers: ["Subscriptions", "Bundle builders", "Shopify Functions", "Tiered discounts", "Customer portal"],
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        imageAlt: "Happy Mammoth supplement store with recurring orders",
      },
      {
        title: "App Audits and Ongoing Support",
        heading: "Fewer apps, a faster store, and code kept current every quarter",
        body: "We list every app and script on your store, cut what overlaps, replace the expensive ones with a small custom build where that pays off, and keep custom apps updated as Shopify releases new API versions.",
        covers: ["App audit", "Script cleanup", "API upgrades", "Sync monitoring", "Monthly support"],
        caseSlug: "chillys-headless-commerce-layer",
        imageAlt: "Chilly's bottle store, rebuilt to load 42% faster",
        cta: { label: "Explore app optimization", href: "/services/shopify-app-setup-and-app-optimization" },
      },
    ],
  },

  local: {
    label: "Charlotte Brands and Their Apps",
    heading: "What Charlotte Means for the App You Build",
    intro:
      "Where you sell from shapes what your app has to handle: where orders ship from, which tax rules apply to what you sell, and how your systems cope when a rate changes. Three things Shopify app development Charlotte brands should settle before the first line of code.",
    items: [
      {
        icon: "truck",
        name: "A Freight Hub Puts a Warehouse in the Loop",
        desc: "Norfolk Southern runs a rail-to-truck freight terminal between the runways at Charlotte Douglas airport. If a third-party warehouse ships your orders, the app's real job is the handoff: orders out to the warehouse system the moment they're placed, tracking numbers and stock counts back into Shopify without anyone touching them.",
      },
      {
        icon: "receipt",
        name: "North Carolina Taxes Digital Products",
        desc: "North Carolina charges sales tax on digital audio, video and books, whether customers buy outright or pay for ongoing access. If your app sells downloads, memberships or streaming, it has to pass the right product category to Shopify Tax on every order. Your accountant still makes the filing calls.",
      },
      {
        icon: "calendar",
        name: "A Mid-Year Rate Change Your Sync Has to Survive",
        desc: "Mecklenburg County's combined sales tax rate rose to 8.25% on July 1, 2026. An app that reads the tax line from each Shopify order carries a change like that without a code release. One with a rate typed into the code charges the wrong amount until someone notices. We build the first kind.",
      },
    ],
  },

  caseStudies: {
    heading: "Shopify Apps We Built for Brands Like Yours",
    intro: "A bundle builder, a gift card platform and a private registration tool: three apps solving three different problems, each with the numbers from the project.",
    items: [
      {
        slug: "emma-noah-bundle-app",
        tags: ["Bundle App", "Theme App Block", "Baby Products"],
        description: "A sustainable baby brand wanted shoppers to build their own bundles, with a discount that grows as the box fills. The mix-and-match app we built lifted average order value 61% from launch.",
      },
      {
        slug: "untuckit-gift-card-api",
        tags: ["Gift Card API", "AWS", "Apparel"],
        description: "A shirt brand with 74 US stores needed digital gift cards sent straight to any recipient. Our custom app and API held up when holiday traffic nearly tripled.",
      },
      {
        slug: "vytronix-shopify-app-development",
        tags: ["Private App", "Magento Migration", "Home Appliances"],
        description: "A home appliance brand moved off Magento and needed its product registrations in one place. We built a private Shopify app so the service team sees every registration without leaving Shopify.",
      },
    ],
  },

  process: {
    heading: "From Brief to a Working App, Step by Step",
    intro: "Five steps, one written scope and a fixed price: the way Shopify app development Charlotte brands should expect a build to run, whether the app installs on one store or goes to the App Store.",
    steps: [
      { title: "Decide Which App This Is", desc: "Private app, integration or public app. We work out which one you need, or whether an existing app set up properly does the job. You get a written scope and a fixed price before work starts." },
      { title: "Map Every System It Touches", desc: "Your ERP, warehouse, CRM or payment tool: we document what data moves in each direction, how often, and what should happen when the other system is down." },
      { title: "Build With Shopify's Own Tools", desc: "Admin and Storefront APIs, Shopify Functions, and checkout and theme app extensions, built on a development store you can click through every week." },
      { title: "Test on a Copy of Your Store", desc: "Real orders, refunds, partial shipments and failed syncs, run against a copy of your store before anything reaches a live customer." },
      { title: "Install, Hand Over, Keep It Current", desc: "The app goes live on your store or into App Store review. You get the code, the documentation and the logins, and we keep it current as Shopify releases new API versions." },
    ],
  },

  compare: {
    heading: "Building Your Shopify App Development Charlotte Shortlist",
    intro: "You will probably weigh three options. Each is the right fit for someone. Here is how to tell which one your app needs.",
    options: [
      {
        name: "Freelance developers",
        goodFor: "A small, well-defined fix you can describe in a paragraph.",
        watchFor: "When they move on, so does the knowledge. Ask where the code lives and who keeps it current after launch.",
      },
      {
        name: "General software studios",
        goodFor: "Mobile apps, internal tools and software that has nothing to do with your store.",
        watchFor: "Shopify's APIs, checkout rules and App Store review are their own world. Ask how many Shopify apps they have shipped.",
      },
      {
        name: "Off-the-shelf apps",
        goodFor: "Common needs like reviews or email capture, live the same day.",
        watchFor: "A monthly fee that grows with your orders, a script on every page, and no say over what changes next.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only: private apps, integrations and App Store builds",
        "Written scope and fixed price before development starts",
        "The developers on your call are the developers on your app",
        "You own the code and every account it runs on",
        "Kept current as Shopify releases new API versions",
      ],
    },
  },

  industries: {
    heading: "Industries We Build Shopify Apps For",
    intro: "Every category ends up needing a different kind of app. Here is what we build most often for each, and what Shopify app development Charlotte brands in these categories should ask about.",
    items: [
      { icon: "home", name: "Home and Furniture", desc: "Product configurators for fabric and finish, freight quote tools, and trade account approvals for designers." },
      { icon: "shirt", name: "Apparel and Footwear", desc: "Fit finders, digital gift cards, and stock syncs between the store, retail locations and the warehouse." },
      { icon: "food", name: "Food and Supplements", desc: "Subscription portals, build-a-box bundles, and delivery-date rules for products that can't sit in a depot over a weekend." },
      { icon: "flag", name: "Fan Merch and Drops", desc: "Waitlists, per-customer purchase limits, and queue logic that keeps a drop fair when everyone arrives at once." },
      { icon: "box", name: "B2B and Wholesale", desc: "Trade portals, credit and net-terms approvals, and ERP syncs for account pricing. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
      { icon: "code", name: "Digital Products", desc: "Download delivery, license keys and membership access, with the right tax category passed to Shopify on every order." },
    ],
    footnote: "Selling something else? If it runs on Shopify, we can build the app for it.",
  },

  faqHeading: "Shopify App Development Charlotte FAQs",
  faqs: [
    {
      question: "Do I need a custom app, or will an App Store app do?",
      answer:
        "Often an existing app does the job, and we'll say so. A custom app makes sense when your process is specific to your business, when several apps are patching the gaps between each other, or when monthly fees that grow with your orders add up to more than a one-time build. You get that comparison in writing before you commit.",
      unique: true,
    },
    {
      question: "What's the difference between a private app and a public app?",
      answer:
        "A private app, which Shopify calls a custom app, installs on your store only and doesn't go through App Store review. A public app is listed on the Shopify App Store for any merchant to install, so it has to meet Shopify's app requirements, handle billing and pass review. We build both.",
      unique: true,
    },
    {
      question: "How much does it cost to develop a Shopify app?",
      answer:
        "It depends on what the app has to do and how many systems it touches, so we don't publish a price list. A private app that does one job is a much smaller project than a public app with billing and onboarding. After a short call you get one fixed price in writing, usually within 48 hours, and that is the price you pay.",
      unique: false,
    },
    {
      question: "How long does a Shopify app take to build?",
      answer:
        "A private app with one or two integrations can be ready in a few weeks. A public app for the Shopify App Store, including design, testing and Shopify's own review, typically takes two to four months. You get the timeline in writing with the fixed price, before work starts.",
      unique: false,
    },
    {
      question: "Can you connect Shopify to our ERP or warehouse system?",
      answer:
        "Yes. We connect Shopify to ERPs, accounting tools, 3PLs and CRMs through their APIs, so orders, stock, prices and tracking move without anyone re-entering them. Every sync has error alerts and retries, so a failed update gets flagged instead of being found at month-end.",
      unique: true,
    },
    {
      question: "Will AI replace Shopify developers?",
      answer:
        "Not for this kind of work. AI tools help developers write code faster, and we use them. But an app that moves orders between your store and your ERP needs someone to decide what happens when a sync fails, test it against real orders and keep it current with Shopify's API changes. That judgment is what you are paying for.",
      unique: true,
    },
    {
      question: "Does my app need to handle North Carolina tax on digital products?",
      answer:
        "If it sells digital audio, video or books, yes. North Carolina taxes them whether the customer buys outright or pays for access, so the app has to pass the right product category to Shopify Tax on every order. We build the store side; registration and filing stay with your accountant.",
      unique: true,
    },
    {
      question: "Do I own the app and its code?",
      answer:
        "Yes. The code is handed over with documentation at launch, and the accounts the app runs on are yours. If you stop working with us, the app keeps running exactly as we built it.",
      unique: false,
    },
  ],

  book: {
    heading: "Book Your Free Shopify App Call",
    sub: "Pick a time below for an online call with a senior Shopify developer. Tell us what the app has to do and what it connects to, and we send a fixed price and timeline in writing within 48 hours.",
    bullets: [
      "Talk through the app: private, integration or App Store",
      "Find out whether an existing app already does the job",
      "Get a fixed-price quote and timeline within 48 hours",
      "Leave with a written scope you can compare against any other quote",
    ],
  },

  sources: [
    {
      id: "shopify-app-distribution-types",
      claim: "Custom (private) apps install on one store and are not reviewed for the Shopify App Store; public apps are listed on the App Store and must pass review",
      url: "https://shopify.dev/docs/apps/launch/distribution",
      publisher: "Shopify",
      captured: "2026-11-13",
      reviewAfterDays: 365,
    },
    {
      id: "shopify-api-versioning",
      claim: "Shopify releases a new API version every quarter, each supported for a minimum of 12 months",
      url: "https://shopify.dev/docs/api/usage/versioning",
      publisher: "Shopify",
      captured: "2026-11-13",
      reviewAfterDays: 365,
    },
    {
      id: "ncdor-digital-property",
      claim: "North Carolina sales tax applies to certain digital property (digital audio works, digital audiovisual works, digital books) regardless of whether the purchaser has permanent use or pays continued payments",
      url: "https://www.ncdor.gov/taxes-forms/sales-and-use-tax/taxable-items",
      publisher: "North Carolina Department of Revenue",
      captured: "2026-11-13",
      reviewAfterDays: 365,
    },
    {
      id: "ncdor-mecklenburg-rate",
      claim: "Mecklenburg County combined sales and use tax rate 8.25% effective July 1, 2026 (up from 7.25%)",
      url: "https://www.ncdor.gov/taxes-forms/sales-and-use-tax/sales-and-use-tax-rates/current-sales-and-use-tax-rates",
      publisher: "North Carolina Department of Revenue",
      captured: "2026-11-08",
      reviewAfterDays: 180,
    },
    {
      id: "ns-charlotte-intermodal",
      claim: "Norfolk Southern's Charlotte Regional Intermodal Facility sits between two runways at Charlotte Douglas International Airport, moving containers between rail and truck",
      url: "https://norfolksouthern.mediaroom.com/2012-05-02-Norfolk-Southerns-new-Charlotte-Regional-Intermodal-Facility-will-support-growing-rail-traffic-and-less-crowded-highways",
      publisher: "Norfolk Southern",
      captured: "2026-11-13",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
