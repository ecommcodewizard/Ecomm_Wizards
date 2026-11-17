// Geo v5 S5, Shopify dev Phase 2a, page 4 of 15: Kansas (state), service format.
//
// Keywords (v5 plan 3.3; no measured volume in either tool):
//   primary    shopify agency kansas (KD 10)
//   secondary  shopify developer kansas (KD 7; Google rewrites it to
//              "shopify development kansas")
// SERP (2026-11-17, personalised to Sacramento): Google reads "kansas" as
// Kansas City. 7 of 9 results are KC pages; only 100xelevate (#3) and
// aqsashahzad.com (#6) are statewide. Owner chose Option A: a true statewide
// page (Wichita, Overland Park, Topeka, Lawrence) that never targets Kansas
// City terms, so the later Kansas City page (Phase 2a #13) owns those.
// H1 owner pick: "Retail, Wholesale and Subscriptions" (owner-edited menu).

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_KANSAS: ServiceGeoPage = {
  type: "service",
  slug: "kansas",
  path: "/services/shopify-development-agency/kansas",
  hub: "/services/shopify-development-agency",
  geo: { name: "Kansas", type: "state", areaServed: "Kansas" },

  targetKeyword: "shopify agency kansas",
  secondaryKeywords: ["shopify developer kansas"],
  faqKeywords: [],
  metaTitle: "Shopify Agency Kansas | Retail, Wholesale and Subscriptions",
  metaDescription:
    "The Shopify agency Kansas brands hire to sell retail, wholesale and subscriptions from one Shopify store, built at a fixed price agreed upfront.",
  shortTitle: "Shopify Agency Kansas",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Kansas Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Kansas Brands Hire for Retail, Wholesale and Subscriptions",
    intro:
      "Shoppers buy one at a time, shops that stock you buy by the case, and your regulars want the same order every month. Most stores handle one of those well and patch the other two. We're the Shopify agency Kansas brands hire to run all three from one store: [link:/services/shopify-theme-development|retail], [link:/services/shopify-b2b-store-setup|wholesale] and subscriptions, at a fixed price agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-kansas-hero-v1.webp",
      alt: "Shopify stores for Mouldings One, Feetures and Happy Mammoth, with B2B revenue up 50% and subscription revenue up 134%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency that builds stores for Kansas brands selling retail, wholesale and subscriptions from one Shopify admin, from Wichita and Overland Park to Topeka and Lawrence. Most start on standard Shopify and move to Plus when wholesale volume or checkout rules call for it. Every project has a fixed price and date agreed in writing.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "Retail stores, trade portals and subscription programs, each designed and built in-house by our own Shopify team.",
  },

  pains: {
    heading: "When One Store Has to Serve Three Kinds of Buyer",
    intro:
      "Selling retail, wholesale and subscriptions from separate tools is where the hours go. These four problems come up first. They're what a Shopify agency Kansas brands work with should solve before anything else, and here is what each one costs you.",
    items: [
      {
        icon: "box",
        name: "Trade Orders by Phone and Email",
        desc: "The shops and distributors that stock you call or email their orders, and someone keys them in, checks the price list and sends an invoice by hand.",
        cost: "Hours of admin, and buyers who reorder less often than they would online.",
      },
      {
        icon: "calendar",
        name: "Regulars Reordering From Scratch",
        desc: "Customers who buy the same thing every month have to find it, add it to the cart and check out again each time. Some forget; some buy elsewhere.",
        cost: "Repeat revenue that should be automatic, lost to friction.",
      },
      {
        icon: "layers",
        name: "Stock Counted in Three Places",
        desc: "Retail, wholesale and subscription orders draw on the same shelves, but each lives in its own app or spreadsheet.",
        cost: "Oversold products and wholesale orders you can't fill.",
      },
      {
        icon: "receipt",
        name: "Tax Set Up Once and Never Checked",
        desc: "Food items charged the full state rate, or no tax at all, because nobody revisited the settings when the rules changed.",
        cost: "Overcharged customers or a bill for the tax you didn't collect.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Kansas Brands",
    intro:
      "Every store is designed and built by our own Shopify team, never passed to subcontractors. After launch, we can also take on [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO].",
    // Visual rows; the page's own case studies (Feetures, Mouldings One,
    // Happy Mammoth) are not reused here.
    items: [
      {
        title: "Retail Store Design",
        heading: "A store your retail customers find easy to buy from on a phone",
        body: "A custom theme with clear product pages, quick filters and reviews where shoppers look for them. 111SKIN's custom theme and skin quiz lifted conversion rate 46%.",
        covers: ["Custom theme", "Product pages", "Collection filters", "Reviews", "Mobile speed"],
        caseSlug: "111skin-shopify-cro-redesign",
        imageAlt: "111SKIN skincare store on a custom Shopify theme",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Wholesale and Trade Portals",
        heading: "Stockists log in, see their own prices and reorder without calling you",
        body: "Trade accounts with price lists, minimum orders, payment terms and bulk ordering, in the same store as your retail site. Saddleback's B2B store grew wholesale sales 881% in its first month.",
        covers: ["Trade accounts", "Price lists", "Minimum orders", "Payment terms", "Bulk ordering"],
        caseSlug: "saddleback-shopify-plus-b2b",
        imageAlt: "Saddleback wholesale store on Shopify Plus",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        title: "Subscriptions and Recurring Orders",
        heading: "Monthly orders that place themselves, with a portal to skip or swap",
        body: "Subscribe-and-save on any product, a customer portal for changing the next box, and renewal emails that keep churn down. Wild built its subscription program from zero to more than 80,000 monthly subscribers.",
        covers: ["Subscribe and save", "Customer portal", "Skip and swap", "Renewal emails", "Churn reports"],
        caseSlug: "wild-shopify-plus-subscriptions",
        imageAlt: "Wild refillable personal care subscriptions on Shopify",
      },
      {
        title: "Food and Grocery Stores",
        heading: "Food tagged correctly for tax, and bundles that lift every order",
        body: "Product categories set so food skips the state tax while local tax still applies, plus bundles, gift boxes and ship-day rules. VITHIT's store with automated bundles grew direct revenue 115% year on year.",
        covers: ["Food tax categories", "Bundles", "Gift boxes", "Ship-day rules", "Shopify Tax"],
        caseSlug: "vithit-shopify-plus-d2c",
        imageAlt: "VITHIT drinks store with automated bundles",
      },
      {
        title: "Parts and Industrial Catalogs",
        heading: "Part numbers, spec sheets and quote requests your trade buyers expect",
        body: "Searchable catalogs with part numbers, downloadable spec sheets, tiered price books and request-a-quote for large orders, synced to your ERP. Henchman's B2B rebuild grew online revenue 58%.",
        covers: ["Part search", "Spec sheets", "Tiered pricing", "Request a quote", "ERP sync"],
        caseSlug: "henchman-shopify-plus-b2b",
        imageAlt: "Henchman ladder and access equipment store on Shopify Plus",
        cta: { label: "Explore integrations", href: "/services/shopify-integration-services" },
      },
      {
        title: "Migration and Support",
        heading: "Off your old platform, and looked after once you're live",
        body: "Products, customers, trade accounts and order history moved with every URL redirected, then 60 days of support and a monthly plan if you want one. This Works left Magento and grew conversion rate 38%.",
        covers: ["WooCommerce", "Magento", "BigCommerce", "301 redirects", "60-day support"],
        caseSlug: "this-works-shopify-plus-migration",
        imageAlt: "This Works store migrated from Magento to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
    ],
  },

  local: {
    label: "Selling from Kansas",
    heading: "What Kansas Means for Your Store",
    intro:
      "Three things about Kansas change how your store should be built. A Shopify agency Kansas brands rely on should plan for all three before launch.",
    items: [
      {
        icon: "receipt",
        name: "No State Tax on Groceries Since 2025",
        desc: "Kansas cut its state sales tax on food and food ingredients to 0% on January 1, 2025, but city and county taxes still apply. If you sell food, your products need the right tax category so the state rate drops off while local tax stays. We set that up in Shopify Tax; your accountant confirms which products qualify.",
      },
      {
        icon: "flag",
        name: "Wichita's Supply Chain",
        desc: "Wichita has called itself the Air Capital of the World since 1929, and aircraft makers such as Textron Aviation and Spirit AeroSystems still build there. That supports a long chain of parts and component suppliers. If you're one of them, your buyers expect part numbers, spec sheets, account pricing and a quote button, not a consumer checkout.",
      },
      {
        icon: "truck",
        name: "Shipping From the Middle of the Map",
        desc: "The geographic center of the lower 48 states is marked near Lebanon, Kansas. Your orders travel roughly the same distance to either coast, so your store can show clear delivery dates to every customer instead of one promise for nearby states and a vague one for everyone else.",
      },
    ],
  },

  caseStudies: {
    heading: "Retail, Wholesale and Subscriptions: Three Measured Results",
    intro:
      "One store for each kind of buyer: the proof to ask of any Shopify agency Kansas brands shortlist, with every result measured.",
    items: [
      {
        slug: "feetures-shopify-theme-development",
        tags: ["Retail", "Custom Theme", "Performance Socks"],
        description: "A performance sock brand outgrew its theme and had it rebuilt from scratch, with new collection pages and a free-shipping progress bar. Add-to-cart rate rose 32% and average order value 19%.",
        video: "/images/Case%20studies/Feetures%20video.mp4",
      },
      {
        slug: "mouldings-one-shopify-b2b-portal",
        tags: ["Wholesale", "Trade Portal", "ERP Integration"],
        description: "Contractors and designers who used to phone in orders now log in, see live stock and reorder in minutes. B2B revenue grew 50% and the time to process each order fell 74%.",
        video: "/images/Case%20studies/Mouldings%20One%20video.mp4",
      },
      {
        slug: "happy-mammoth-shopify-subscriptions-cro",
        tags: ["Subscriptions", "Product Quiz", "Supplements"],
        description: "A supplement brand rebuilt its product quiz and launched recurring orders through Recharge. Subscription revenue grew 134% and customer lifetime value 89%.",
        video: "/images/Case%20studies/happy-mammoth-video.mp4",
      },
    ],
  },

  process: {
    heading: "How We Build a Store for Three Kinds of Buyer",
    intro:
      "Five stages, each signed off by you before the next starts: the way a Shopify agency Kansas brands trust should run a build. Most stores go live about six weeks after the first call.",
    steps: [
      { title: "Map Your Buyers and Price", desc: "We list who buys from you, how each group orders and what they pay, then fix the scope, one price and a launch date in writing." },
      { title: "Design Each Buying Path", desc: "Retail pages, the trade login and the subscription portal, designed for phone and desktop. You approve every screen." },
      { title: "Build on Staging", desc: "Theme, trade accounts, subscriptions and integrations built on a staging store you can test whenever you like." },
      { title: "Test Every Order Type", desc: "Retail, wholesale and subscription orders, food tax, local tax and shipping to both coasts, all checked before launch." },
      { title: "Launch and 60 Days of Support", desc: "We go live at a quiet hour, watch the first orders of each type and fix anything that comes up for 60 days." },
    ],
  },

  compare: {
    heading: "Comparing Your Shopify Agency Kansas Options",
    intro: "Most Kansas owners compare three kinds of help with us. Each suits someone; these questions show which suits you.",
    options: [
      {
        name: "Freelance developer",
        goodFor: "A single fix or one new feature.",
        watchFor: "Retail, wholesale and subscriptions in one build is a lot for one person. Ask who tests each order type and who supports it afterwards.",
      },
      {
        name: "Separate apps for each channel",
        goodFor: "Getting one channel running quickly.",
        watchFor: "Three apps mean three bills and three sets of stock counts. Ask how they share inventory and customers.",
      },
      {
        name: "Large national partner",
        goodFor: "Enterprise programs with large budgets.",
        watchFor: "Minimum budgets sized for national retailers, and a junior team doing the day-to-day work.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Retail, wholesale and subscriptions in one store",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Each category mixes retail, wholesale and repeat buyers differently. Here is what a Shopify agency Kansas brands hire should build in for each.",
    items: [
      { icon: "food", name: "Food, Coffee and Specialty Goods", desc: "Food tax categories, subscriptions, gift boxes and stockist ordering." },
      { icon: "box", name: "Parts and Industrial Supply", desc: "Part search, spec sheets, account pricing and quote requests synced to your ERP." },
      { icon: "paw", name: "Pet and Farm Supply", desc: "Recurring feed and supply orders, bulk pricing and freight delivery." },
      { icon: "shirt", name: "Apparel and Team Wear", desc: "Size guides, bulk team orders and stock shared between retail and wholesale." },
      { icon: "home", name: "Home and Outdoor Goods", desc: "Large option sets, freight delivery and stockist accounts for the shops that carry you." },
      { icon: "star", name: "Health and Beauty", desc: "Subscriptions, product quizzes and salon or spa trade accounts." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency Kansas FAQs",
  faqs: [
    {
      question: "Can one Shopify store handle retail, wholesale and subscriptions?",
      answer:
        "Yes. Retail shoppers, trade accounts and subscribers can all buy from the same store, each seeing their own prices and checkout options, with one set of stock counts and one admin behind them.",
      unique: true,
    },
    {
      question: "Shopify developer or agency: which should a Kansas brand hire?",
      answer:
        "A Shopify developer Kansas brands find on a freelance site may be enough for one fix or a single feature. A store serving retail, wholesale and subscriptions needs design, development, testing and support together, which is what an agency is for.",
      unique: true,
    },
    {
      question: "Do I need Shopify Plus for wholesale?",
      answer:
        "Not always. Standard Shopify handles basic trade pricing well. Plus adds company accounts, payment terms and checkout rules that matter once wholesale grows. We'll tell you which you need on the first call.",
      unique: true,
    },
    {
      question: "How does my store handle the Kansas food tax?",
      answer:
        "Each food product gets the right tax category in Shopify Tax, so the state rate, now 0% on food, drops off while city and county taxes still apply. Your accountant confirms which products qualify.",
      unique: true,
    },
    {
      question: "Can trade buyers request a quote instead of checking out?",
      answer:
        "Yes. We add request-a-quote for large or custom orders, so the buyer sends a cart for pricing and you reply with a draft order they can pay online.",
      unique: true,
    },
    {
      question: "Does my agency need to be local?",
      answer:
        "No. We run every project through online calls, a staging store you can test yourself and written weekly updates, with the scope, price and launch date agreed in writing first.",
      unique: false,
    },
    {
      question: "How much does a Shopify agency cost?",
      answer:
        "It depends on how many of retail, wholesale and subscriptions you need, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours.",
      unique: false,
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Around six weeks for most stores, a little longer when wholesale and subscriptions launch together. We count back from the date that matters to you and write it into the scope.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a time for a video call with a senior Shopify specialist. Tell us who buys from you and how; within two working days you'll have a written price and launch date.",
    bullets: [
      "Walk through your retail, wholesale and repeat buyers",
      "Get a fixed price and a launch date within 48 hours",
      "Find out whether you need standard Shopify or Shopify Plus",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "ks-food-sales-tax-0",
      claim: "As of January 1, 2025, the Kansas state sales tax on food and food ingredients is 0%; full local sales tax rates on food still apply",
      url: "https://ksrevenue.gov/faqs-taxsales.html",
      publisher: "Kansas Department of Revenue",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
    {
      id: "wichita-air-capital",
      claim: "Wichita was named 'Air Capital City' in 1929 for producing more aircraft than any other US city; Textron Aviation and Spirit AeroSystems still have operations there",
      url: "https://www.visitwichita.com/group-travel/planner/air-capital-of-the-world/",
      publisher: "Visit Wichita",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
    {
      id: "wichita-aerospace-employers",
      claim: "Greater Wichita aerospace industry overview: Textron Aviation, Spirit AeroSystems and other manufacturers in the metro",
      url: "https://greaterwichitapartnership.org/industry-selectors/aerospace",
      publisher: "Greater Wichita Partnership",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
    {
      id: "geographic-center-lebanon-ks",
      claim: "The geographic center of the contiguous United States (1918 survey) is marked about 2.6 miles northwest of Lebanon, Kansas",
      url: "https://en.wikipedia.org/wiki/Geographic_center_of_the_United_States",
      publisher: "Wikipedia",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
