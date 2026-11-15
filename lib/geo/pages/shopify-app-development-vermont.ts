// Geo v5 app pages, 2 of 2: Shopify app development for Vermont, in the
// service format (ServicePageTemplate). H1 chosen by the owner 2026-11-14
// (option 3a).
//
// Keywords (Ahrefs + Google SERP, Nov 2026; no SEMrush access this round):
//   primary    shopify app development vermont (40/mo in the v5 plan, Ahrefs
//              trending toward ~22)
//   secondary  none. The SERP is store-build pages apart from one generic app
//              page, and the Vermont dev page owns "shopify developer vermont",
//              "shopify experts vermont" and "shopify support vermont".
// Must not reuse the dev page's local facts (maple origin, maker state,
// remote-seller threshold). Never "in Vermont" (presence rule): origin claims
// are written as "Vermont-made". Facts are sourced below.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_APP_VERMONT: ServiceGeoPage = {
  type: "service",
  slug: "vermont",
  path: "/services/shopify-app-development/vermont",
  hub: "/services/shopify-app-development",
  geo: { name: "Vermont", type: "state", areaServed: "Vermont" },

  targetKeyword: "shopify app development vermont",
  secondaryKeywords: [],
  faqKeywords: [],
  metaTitle: "Shopify App Development Vermont | Custom Apps for Makers",
  metaDescription:
    "Shopify app development Vermont makers hire for custom apps, bundles, subscriptions and ERP connections. One fixed price, and the code is yours.",
  shortTitle: "Shopify App Development Vermont",
  serviceType: "Shopify app development",

  hero: {
    badge: "Shopify App Development for Vermont Makers",
    h1Lead: "",
    h1Gradient: "Shopify App Development Vermont",
    h1Tail: "Makers Hire for Custom Apps That Fit How They Sell",
    intro:
      "You sell the way your business works: gift boxes at the holidays, a subscription for regulars, wholesale orders to shops that stock you. Off-the-shelf apps each handle a slice of that and charge a monthly fee for it. The Shopify app development Vermont makers hire us for builds the one app your store actually needs, from [link:/services/shopify-integration-services|integrations] with the tools you already run to a private app nobody else has. You get one fixed price before any code is written, and you own what we build.",
    stats: [
      { value: "8+", label: "Years on Shopify" },
      { value: "150+", label: "Stores Built" },
      { value: "9+", label: "Industry Awards" },
      { value: "4.9★", label: "Client Rating" },
    ],
    image: {
      src: "/images/shopify-app-development-vermont-hero-v1.webp",
      alt: "Shopify apps we built for teelaunch, what3words and ABASK, with 50,000+ merchants onboarded and 165 territories live from day one",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. Custom apps, integrations and App Store builds.",
  },

  summary:
    "Ecomm Wizards is a Shopify-only agency that designs and builds custom Shopify apps, integrations and public App Store apps for brands across the US, Vermont makers included. Each project starts with a written scope and a single fixed price, is built on Shopify's own app framework, and ends with the code and documentation handed to you.",

  trust: {
    heading: "Brands That Run on Apps and Stores We Built",
    subheading: "A print-on-demand app with 50,000+ merchants, the official what3words checkout app, and private tools built for a single store. That track record is what Shopify app development Vermont brands get from us.",
  },

  pains: {
    heading: "What Your App Stack Costs You Now",
    intro:
      "Nobody wakes up wanting software. You notice the same chore every week, or the same app bill every month. These are the four problems Shopify app development Vermont makers bring us most, and what each one is costing you today.",
    items: [
      {
        icon: "receipt",
        name: "Subscriptions That Keep Adding Up",
        desc: "A bundle app, a subscription app, a wholesale app, a product options app. Each one bills monthly, and many charge more as your order count grows, so a good season raises your software bill too.",
        cost: "A fixed cost line that grows faster than your margin.",
      },
      {
        icon: "box",
        name: "Gift Boxes Built by Hand",
        desc: "Customers want to mix three jams and a mug, or pick their own sampler. Without a proper builder, your team makes those orders up from notes in the order comments.",
        cost: "Picking mistakes, and shoppers who give up before they finish the box.",
      },
      {
        icon: "store",
        name: "Wholesale Orders by Email",
        desc: "The shops that stock you send orders by email or phone, and someone keys them into Shopify, then again into your accounting tool. Trade pricing lives in a spreadsheet.",
        cost: "Hours each week, and the wrong price on an invoice now and then.",
      },
      {
        icon: "alert",
        name: "A Workaround Your Team Remembers",
        desc: "An app does almost what you need, and your team covers the gap with a routine only one person knows. When they're out, orders wait.",
        cost: "A store that depends on one person's memory.",
      },
    ],
  },

  services: {
    label: "App Development Services",
    heading: "Shopify App Development Services for Vermont Makers",
    intro:
      "Every app below is scoped, built and supported by our own developers, who work on nothing but Shopify. Sometimes the right answer is an app you already have, configured properly: we'll tell you if so, and [link:/services/shopify-app-setup-and-app-optimization|app setup] costs far less than a build.",
    // Visual rows. Case studies avoid the page's own three (teelaunch,
    // what3words, ABASK) and differ in order and framing from Charlotte.
    items: [
      {
        title: "Bundle and Build-a-Box Apps",
        heading: "Let shoppers fill their own box, with a discount that grows as they add",
        body: "A builder that sits on your product or collection page: shoppers pick the items, see the box fill and watch the saving step up. Your team gets one clean order with every item listed. For emma&noah, the mix-and-match app we built lifted average order value 61%.",
        covers: ["Bundle builder", "Tiered discounts", "Theme app block", "Stock-aware picks", "Admin settings"],
        caseSlug: "emma-noah-bundle-app",
        imageAlt: "emma&noah bundle builder on a Shopify product page",
        cta: { label: "Explore app development", href: "/services/shopify-app-development" },
      },
      {
        title: "Subscriptions and Recurring Orders",
        heading: "Regular customers on a schedule that suits them, not a fixed monthly box",
        body: "Subscribe-and-save on any product, skip and swap from a customer portal, and renewal rules written as Shopify Functions so they run inside checkout. For Happy Mammoth we set up Recharge-powered recurring orders around a rebuilt product quiz.",
        covers: ["Subscriptions", "Customer portal", "Skip and swap", "Shopify Functions", "Renewal emails"],
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        imageAlt: "Happy Mammoth supplement store with subscribe-and-save",
      },
      {
        title: "Private Apps Around Your Process",
        heading: "A tool built for the one job only your business does",
        body: "A private app installs on your store alone and skips App Store review, so it does exactly what you describe. For Vytronix we built a product registration app after their move off Magento, so the service team sees every registration inside Shopify admin.",
        covers: ["Custom app", "Admin screens", "Customer accounts", "Webhooks", "Metafields"],
        caseSlug: "vytronix-shopify-app-development",
        imageAlt: "Vytronix home appliance store on Shopify",
      },
      {
        title: "Gift Cards, Loyalty and Custom APIs",
        heading: "Gift cards and rewards that work the way you want to give them",
        body: "Digital gift cards sent straight to the recipient, loyalty rules tied to what customers buy, and an API that other systems can call. For UntuckIt we built a gift card app and API that held up when holiday traffic nearly tripled.",
        covers: ["Gift card app", "Loyalty rules", "Custom API", "Scheduled delivery", "Peak-load hosting"],
        caseSlug: "untuckit-gift-card-api",
        imageAlt: "UntuckIt digital gift card page on Shopify",
      },
      {
        title: "Wholesale, ERP and Accounting Connections",
        heading: "Trade orders and stock counts that match everywhere, without retyping",
        body: "Wholesale customers order from a trade portal at their own prices, and orders, stock and invoices sync to your ERP or accounting tool automatically, with an alert if a sync ever fails.",
        covers: ["Trade portal", "ERP sync", "Accounting export", "Account pricing", "Error alerts"],
        caseSlug: "mouldings-one-shopify-b2b-portal",
        imageAlt: "Mouldings One trade portal on Shopify Plus",
        cta: { label: "Explore ERP connections", href: "/services/erp-connections-to-shopify" },
      },
      {
        title: "App Stack Reviews and Support",
        heading: "Pay for fewer apps, load a faster store, and keep custom code current",
        body: "We go through every app and script on your store, remove what overlaps, and replace the costly ones with a small custom build where the numbers favor it. Then we keep your custom apps current as Shopify ships new API versions each quarter.",
        covers: ["App review", "Script cleanup", "API upgrades", "Speed checks", "Monthly support"],
        caseSlug: "chillys-headless-commerce-layer",
        imageAlt: "Chilly's bottle store, rebuilt to load 42% faster",
        cta: { label: "Explore app optimization", href: "/services/shopify-app-setup-and-app-optimization" },
      },
    ],
  },

  local: {
    label: "Vermont Rules Your App Should Know",
    heading: "What Vermont Means for the App You Build",
    intro:
      "Two Vermont rules change how you should weigh an app: one affects what your current app subscriptions cost, the other affects what your product pages are allowed to say. Both are worth settling before Shopify app development Vermont makers start on a build.",
    items: [
      {
        icon: "receipt",
        name: "Vermont Now Taxes Software Subscriptions",
        desc: "Since July 1, 2024, Vermont charges its 6% sales tax, plus the 1% local option where a town has one, on remotely accessed software. That covers the kind of monthly subscription most Shopify apps are. When you compare a stack of app fees against a one-time custom build, count the tax too. Your accountant confirms what applies to your business.",
      },
      {
        icon: "flag",
        name: "Origin Claims Follow the Vermont Origin Rule",
        desc: "Vermont's Origin Rule (CP 120), enforced by the Attorney General's office, sets when a product can be sold as Vermont-made. If some products qualify and others don't, an app can drive the badge and wording from product data, so a supplier change removes the claim automatically instead of leaving it live. Whether a product qualifies is a call for you and your advisers.",
      },
    ],
  },

  caseStudies: {
    heading: "Shopify Apps We Built and Still Run",
    intro: "An App Store app that defined its category, the official checkout app for a delivery technology company, and a private wishlist built for one luxury store, each with the numbers from the project.",
    items: [
      {
        slug: "teelaunch-print-on-demand",
        tags: ["Public App", "Print-on-Demand", "Fulfillment"],
        description: "teelaunch wanted the first print-on-demand app on the Shopify App Store. We built the app, the admin and the order routing behind it, and it went on to onboard 50,000+ merchants.",
      },
      {
        slug: "what3words-shopify-checkout-app",
        tags: ["Checkout App", "Carrier APIs", "Delivery"],
        description: "what3words needed merchants to collect precise delivery locations at checkout. We built the official app, connected it to DHL, DPD and Evri, and have kept developing it for over five years.",
      },
      {
        slug: "abask-shopify-wishlist-app",
        tags: ["Private App", "Wishlist", "Luxury Goods"],
        description: "A curated luxury goods store wanted shoppers to build and share wishlists and mood boards. We built a custom collaborative wishlist app alongside a Shopify Markets launch across 165 territories.",
      },
    ],
  },

  process: {
    heading: "How Your App Gets Built",
    intro: "Five steps, a written scope and one fixed price: how Shopify app development Vermont makers should expect a project to run, whether the app is for your store alone or for the App Store.",
    steps: [
      { title: "Agree What the App Must Do", desc: "We start with the chore or the cost you want gone, then decide whether that takes a private app, an integration, a public app or a better setup of what you have. You get the scope and a fixed price in writing." },
      { title: "List Every Connection", desc: "Accounting, wholesale, fulfillment or email: we write down what data moves where, how often, and what the app does if the other side is offline." },
      { title: "Build on Shopify's Framework", desc: "Admin and Storefront APIs, Shopify Functions and app extensions, on a development store you can try out as it takes shape." },
      { title: "Test Against Your Real Orders", desc: "Gift boxes, subscriptions, refunds and wholesale orders, run on a copy of your store before any customer sees a change." },
      { title: "Launch and Keep It Current", desc: "The app goes live, or into App Store review. You receive the code, the documentation and every login, and we update it as Shopify releases new API versions." },
    ],
  },

  compare: {
    heading: "Comparing Your Shopify App Development Vermont Options",
    intro: "Most makers weigh three routes before a custom build. Each suits someone. Here is how to tell which one fits the app you need.",
    options: [
      {
        name: "Freelance developers",
        goodFor: "One small, clearly defined change you can explain in a few lines.",
        watchFor: "Ask who keeps the app working after Shopify's next API change, and where the code will live if they take on other work.",
      },
      {
        name: "General software studios",
        goodFor: "Mobile apps and internal software unrelated to your store.",
        watchFor: "Shopify's checkout rules, APIs and App Store review take experience. Ask to see Shopify apps they have shipped.",
      },
      {
        name: "Off-the-shelf apps",
        goodFor: "Common jobs like reviews, pop-ups or email capture, running the same afternoon.",
        watchFor: "Monthly fees that rise with your orders, an extra script on your pages, and features that change when the vendor decides.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only: custom apps, integrations and App Store builds",
        "A written scope and fixed price before any build starts",
        "The developers you meet are the developers who build it",
        "The code and every account it runs on belong to you",
        "Updated as Shopify releases new API versions",
      ],
    },
  },

  industries: {
    heading: "Makers We Build Shopify Apps For",
    intro: "Each kind of product leads to a different app. Here is what we build most for each, and what Shopify app development Vermont makers in these categories tend to ask for first.",
    items: [
      { icon: "food", name: "Specialty Food and Drink", desc: "Gift box builders, subscribe-and-save on pantry staples, and ship-day rules for products that shouldn't sit in transit over a weekend." },
      { icon: "home", name: "Home Goods and Furniture", desc: "Options for wood, finish and size, made-to-order lead times on the product page, and freight quotes at checkout." },
      { icon: "shirt", name: "Apparel and Outdoor Gear", desc: "Fit guides, digital gift cards, and stock syncs between the online store, a retail shop and the warehouse." },
      { icon: "paw", name: "Pet Products", desc: "Recurring food and treat orders, pet profiles on customer accounts, and reminders timed to when the bag runs out." },
      { icon: "box", name: "Wholesale and Trade", desc: "Trade portals with account pricing, minimum order rules and invoice terms. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
      { icon: "star", name: "Craft and Gifts", desc: "Personalization fields, made-to-order workflows and gift messages that reach the person packing the order." },
    ],
    footnote: "Making something else? If it sells on Shopify, we can build the app for it.",
  },

  faqHeading: "Shopify App Development Vermont FAQs",
  faqs: [
    {
      question: "Is a custom app worth it for a small brand?",
      answer:
        "Sometimes not, and we'll say so. A custom app pays off when you're paying several monthly fees for apps that overlap, when your team works around a gap every day, or when the job is specific to how you sell. We put the build cost next to what you pay for apps today, in writing, before you decide.",
      unique: true,
    },
    {
      question: "What's the difference between a private app and a public app?",
      answer:
        "A private app, which Shopify calls a custom app, is installed on your store only and isn't reviewed for the App Store. A public app is listed on the Shopify App Store for any merchant, so it must meet Shopify's app requirements, include billing and pass review. We build both kinds.",
      unique: true,
    },
    {
      question: "How much does a Shopify app cost to build?",
      answer:
        "That depends on what the app does and how many systems it connects to, so there's no price list. A private app with one job is a far smaller project than a public app with billing and onboarding. After a short call you get one fixed price in writing, usually within 48 hours, and that's what you pay.",
      unique: false,
    },
    {
      question: "How long does it take to build a Shopify app?",
      answer:
        "A private app with one or two integrations is usually ready in a few weeks. A public App Store app, with design, testing and Shopify's review, typically takes two to four months. The timeline comes in writing with your fixed price.",
      unique: false,
    },
    {
      question: "Does Vermont's tax on software affect my app costs?",
      answer:
        "It can. Since July 1, 2024, Vermont taxes remotely accessed software at 6%, plus 1% where a local option tax applies, and most Shopify app subscriptions fall into that category. That's worth including when you compare monthly app fees against a custom build. Your accountant confirms what applies to you.",
      unique: true,
    },
    {
      question: "Can an app control which products show a Vermont-made claim?",
      answer:
        "Yes. We store origin details as product data and let the app decide which products show the badge and wording, so the claim follows the product rather than a manual edit. Whether a product meets the Vermont Origin Rule is a decision for you and your advisers; the app makes sure the store reflects it.",
      unique: true,
    },
    {
      question: "Will AI replace Shopify developers?",
      answer:
        "Not for building apps your store depends on. We use AI tools to write code faster, but someone still has to decide what happens when a sync fails, test the app against real orders and keep it working through Shopify's API updates. That judgment is the part you're hiring.",
      unique: true,
    },
    {
      question: "Who owns the app once it's built?",
      answer:
        "You do. We hand over the code and documentation at launch, and the accounts it runs on are in your name. If you ever stop working with us, the app carries on exactly as built.",
      unique: false,
    },
  ],

  book: {
    heading: "Book Your Free Shopify App Call",
    sub: "Choose a time below for an online call with a senior Shopify developer. Describe the job the app has to do and the tools it connects to, and we'll send a fixed price and timeline in writing within 48 hours.",
    bullets: [
      "Talk through the app you need: private, integration or App Store",
      "Hear whether an app you already pay for could do the job",
      "Get a fixed price and timeline within 48 hours",
      "Keep a written scope you can hold any other quote against",
    ],
  },

  sources: [
    {
      id: "shopify-app-distribution-types",
      claim: "Custom (private) apps install on one store and are not reviewed for the Shopify App Store; public apps are listed on the App Store and must pass review",
      url: "https://shopify.dev/docs/apps/launch/distribution",
      publisher: "Shopify",
      captured: "2026-11-14",
      reviewAfterDays: 365,
    },
    {
      id: "shopify-api-versioning",
      claim: "Shopify releases a new API version every quarter, each supported for a minimum of 12 months",
      url: "https://shopify.dev/docs/api/usage/versioning",
      publisher: "Shopify",
      captured: "2026-11-14",
      reviewAfterDays: 365,
    },
    {
      id: "vt-tax-prewritten-software",
      claim: "Since July 1, 2024, Vermont sales tax (6%, plus 1% local option tax where applicable) applies to remotely accessed prewritten software; it was exempt from 2015 to June 30, 2024",
      url: "https://tax.vermont.gov/business-and-corp/sales-and-use-tax/prewritten-computer-software",
      publisher: "Vermont Department of Taxes",
      captured: "2026-11-14",
      reviewAfterDays: 365,
    },
    {
      id: "vt-ago-origin-rule",
      claim: "Vermont's Origin Rule (CP 120) governs when products may be represented as made in Vermont, and the Attorney General's office enforces it",
      url: "https://ago.vermont.gov/sites/ago/files/2024-04/Guidance%20on%20the%20Vermont%20Origins%20Rule.pdf",
      publisher: "Vermont Office of the Attorney General",
      captured: "2026-11-14",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
