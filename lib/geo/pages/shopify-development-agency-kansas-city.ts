// Geo v5 S5, Shopify dev Phase 2a, page 13 of 15: Kansas City (metro),
// service format.
//
// Keywords (v5 plan 3.3; no measured volume):
//   primary    shopify agency kansas city (KD 9)
//   secondary  shopify developer kansas city (KD 0; Google rewrites to
//              "development"; ZipRecruiter lists 95 KC jobs at $39-70/hr)
// SERP (2026-11-20): Netalico #1 on all three; Uncap owns B2B, Solo Media owns
// the generic "two states" pitch, Web Tonic "every firm is local". AI asks:
// new build vs migration, Plus or B2B, budget, local team or remote. PAA adds
// "Does Shopify have agents?" and "Will AI replace Shopify developers?".
// The live Kansas page is statewide and left KC terms for this page; this
// page covers both sides of State Line Road. H1 owner pick #1.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_KANSAS_CITY: ServiceGeoPage = {
  type: "service",
  slug: "kansas-city",
  path: "/services/shopify-development-agency/kansas-city",
  hub: "/services/shopify-development-agency",
  geo: { name: "Kansas City", type: "metro", areaServed: "Kansas City, Missouri and Kansas" },

  targetKeyword: "shopify agency kansas city",
  secondaryKeywords: ["shopify developer kansas city"],
  faqKeywords: [],
  metaTitle: "Shopify Agency Kansas City | Custom Builds, Migrations, Speed",
  metaDescription:
    "The Shopify agency Kansas City brands hire for custom builds, migrations and faster stores on both sides of State Line Road, at a fixed price agreed upfront.",
  shortTitle: "Shopify Agency Kansas City",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Kansas City Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Kansas City Brands Hire for Custom Builds, Migrations and Faster Stores",
    intro:
      "Maybe the template can't do what your products need, the old platform is holding you back, or the pages simply take too long to load. We're the Shopify agency Kansas City brands hire to fix all three: [link:/services/shopify-theme-development|custom builds], [link:/services/migration|migrations] and [link:/services/shopify-speed-optimization|speed work], for stores on either side of State Line Road, at a fixed price agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-kansas-city-hero-v1.webp",
      alt: "Shopify stores for Ronaldo Jewelry, ChloBo and Sneak Energy, with total sales up 250% and mobile conversion up 68%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency that builds custom stores, moves brands off older platforms and speeds up slow ones for Kansas City businesses in Missouri and Kansas, Overland Park and Independence included. A custom build suits a brand outgrowing its template; a migration suits one stuck on WooCommerce or Magento. Every project has a fixed price and date in writing.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "Custom builds, platform moves and speed rebuilds, every one designed and coded by our own people.",
  },

  pains: {
    heading: "Four Things That Hold a Store Back",
    intro:
      "Most calls we get start with one of these problems. They're what the Shopify agency Kansas City brands hire should tackle first, and here's what each one is costing you today.",
    items: [
      {
        icon: "alert",
        name: "A Template That Fights Your Products",
        desc: "Options, sizes, engraving or bundles don't fit the theme, so customers email to ask instead of ordering.",
        cost: "Orders that turn into conversations, or don't happen at all.",
      },
      {
        icon: "layers",
        name: "A Platform You Patch Every Month",
        desc: "WooCommerce plugins clash after updates, or Magento needs a developer for every small change.",
        cost: "Budget spent on upkeep instead of growth.",
      },
      {
        icon: "clock",
        name: "Pages That Lag on a Phone",
        desc: "Heavy images, stacked apps and leftover scripts make every product page wait to appear.",
        cost: "Shoppers who leave before they see the price.",
      },
      {
        icon: "receipt",
        name: "Tax Set Up for One Side of the Line",
        desc: "Orders to Missouri and Kansas addresses charged the same way, food included, because nobody checked both states' rules.",
        cost: "Wrong totals at checkout and tax you cover yourself.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Kansas City Brands",
    intro:
      "Our own Shopify team designs and codes every project; nothing goes to subcontractors. Selling across the Sunflower State as well? Our [link:/services/shopify-development-agency/kansas|Kansas page] covers what changes statewide.",
    // Visual rows; the page's own case studies (Ronaldo Jewelry, ChloBo,
    // Sneak Energy) are not reused here.
    items: [
      {
        title: "Custom Theme Builds",
        heading: "Pages built around what you sell, not what a template allows",
        body: "Product pages, collections and sections designed for your range, easy for your team to edit and quick on a phone. Feetures' made-from-scratch theme lifted add-to-cart rate 32%.",
        covers: ["Custom theme", "Product pages", "Collections", "Editable sections", "Mobile design"],
        caseSlug: "feetures-shopify-theme-development",
        imageAlt: "Feetures performance sock store on a custom Shopify theme",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Platform Migrations",
        heading: "From WooCommerce, Magento or BigCommerce with nothing left behind",
        body: "Catalog, customer accounts, past orders and reviews carried across, each old address redirected and rankings tracked after launch. This Works moved from Magento to Shopify Plus and grew conversion rate 38%.",
        covers: ["WooCommerce", "Magento", "BigCommerce", "301 redirects", "Rank tracking"],
        caseSlug: "this-works-shopify-plus-migration",
        imageAlt: "This Works skincare store migrated to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        title: "Speed and Headless Builds",
        heading: "Pages that appear the moment a shopper taps",
        body: "We measure each template, cut scripts and apps that slow it down and, where it pays, build a headless storefront on Shopify's Hydrogen. Denim Tears' headless store cut load time 45%.",
        covers: ["Core Web Vitals", "Script cleanup", "Image work", "Hydrogen", "Headless"],
        caseSlug: "denim-tears-headless-shopify-hydrogen",
        imageAlt: "Denim Tears headless Shopify storefront",
        cta: { label: "Explore speed optimization", href: "/services/shopify-speed-optimization" },
      },
      {
        title: "Food, Sauce and Gift Stores",
        heading: "Gift sets, bundles and tax categories for food brands",
        body: "Gift boxes and multi-packs, holiday shipping cutoffs and product tax categories set for both Missouri and Kansas addresses. Candy Kittens' gifting rebuild lifted conversion rate 182%.",
        covers: ["Gift sets", "Bundles", "Food tax categories", "Holiday cutoffs", "Gift messages"],
        caseSlug: "candy-kittens-shopify-food-beverage-cro",
        imageAlt: "Candy Kittens confectionery store built around gifting",
      },
      {
        title: "Delivery Dates and Checkout",
        heading: "A delivery date on every product page, and a checkout that finishes",
        body: "Estimated delivery dates shown before the cart, express payment options and address checks at checkout. Dryrobe's rebuilt checkout lifted checkout completion 23%.",
        covers: ["Delivery estimates", "Shop Pay", "Pay later", "Address validation", "Carrier rates"],
        caseSlug: "dryrobe-shopify-plus-redesign",
        imageAlt: "Dryrobe store with a rebuilt checkout",
      },
      {
        title: "Integrations and Support",
        heading: "Your other systems connected, and someone to call after launch",
        body: "ERP, 3PL and accounting connections with alerts when a sync fails, then 60 days of fixes and a monthly plan if you want one. Mouldings One's ERP-linked trade portal grew B2B revenue 50%.",
        covers: ["ERP sync", "3PL routing", "Accounting", "60-day support", "Monthly plan"],
        caseSlug: "mouldings-one-shopify-b2b-portal",
        imageAlt: "Mouldings One trade portal connected to its ERP",
        cta: { label: "Explore integrations", href: "/services/shopify-integration-services" },
      },
    ],
  },

  local: {
    label: "Selling from Kansas City",
    heading: "What Kansas City Means for Your Store",
    intro:
      "A metro split between two states brings a few things to plan for. A Shopify agency Kansas City brands rely on should sort out all three before launch.",
    items: [
      {
        icon: "receipt",
        name: "Two States, Two Grocery Taxes",
        desc: "Missouri taxes food at a reduced 1.225% state rate, plus full local tax. Kansas dropped its state food tax to 0% in 2025, though local tax still applies. A food order to Westport and one to Overland Park can carry different tax, so your store has to charge by delivery address; your accountant handles registration and filing.",
      },
      {
        icon: "food",
        name: "The Barbecue Capital",
        desc: "The metro has more than 100 barbecue restaurants, and the American Royal World Series of Barbecue draws over 500 teams each fall. If you sell sauces, rubs or anything for the grill, build for gifting: sets, bundles, gift messages and clear holiday shipping cutoffs.",
      },
      {
        icon: "truck",
        name: "A Rail and Freight Crossroads",
        desc: "Kansas City is the largest rail center in the country by tonnage, served by five Class I railroads. Ground freight reaches most of the US quickly from here, so your store can show confident delivery dates on every product page instead of a vague range.",
      },
    ],
  },

  caseStudies: {
    heading: "Custom Builds, Migrations and Speed: Three Results",
    intro:
      "One project for each kind of work. Ask any Shopify agency Kansas City brands consider for proof like this: real stores with measured results.",
    items: [
      {
        slug: "ronaldo-jewelry-shopify-plus-redesign",
        tags: ["Custom Build", "Product Configurator", "Handmade Jewelry"],
        description: "A handmade jewelry brand had a custom store built with a configurator, so shoppers design a piece and see it before paying. Total sales rose 250% and conversion rate 120%.",
        video: "/images/Case%20studies/Ronaldo%20Jewelry-video.mp4",
      },
      {
        slug: "chlobo-shopify-plus-migration",
        tags: ["Migration", "Magento to Shopify Plus", "Jewelry"],
        description: "A jewelry brand left Magento for Shopify Plus, with a redesign and an engraving preview. Conversion rate rose 48% and platform running costs fell 52%.",
        video: "/images/Case%20studies/ChloBo%20video.mp4",
      },
      {
        slug: "sneak-energy-shopify-redesign",
        tags: ["Faster Store", "Mobile Rebuild", "Drinks"],
        description: "An energy drink brand with 80% mobile traffic had a store built for desktop. The rebuild loads in under three seconds and mobile conversion rate rose 68%.",
        video: "/images/Case%20studies/Sneak%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How a Build, Move or Speed Project Runs",
    intro:
      "You approve each stage before work moves to the next: the way the Shopify agency Kansas City brands trust should run a project. Most stores are live about six weeks after we first talk.",
    steps: [
      { title: "Look Under the Hood", desc: "We review your theme, platform and page speed, then set the scope, one price and a launch date in writing." },
      { title: "Sign Off the Plan", desc: "New page designs, or a map of every product, customer and URL that moves. Nothing is built until you approve it." },
      { title: "Work on a Private Copy", desc: "Every change happens on a staging store, so your live site keeps taking orders." },
      { title: "Prove It Works", desc: "Speed scores on each template, test orders to Missouri and Kansas addresses, redirects and checkout, all checked first." },
      { title: "Switch Over and Stay Close", desc: "We go live in a quiet hour, watch orders, rankings and speed, and cover fixes for 60 days." },
    ],
  },

  compare: {
    heading: "Comparing Your Shopify Agency Kansas City Options",
    intro: "Kansas City owners usually look at three alternatives. Here's the question that tells each one apart from us.",
    options: [
      {
        name: "Hiring a developer in-house",
        goodFor: "Constant small changes once the store is built.",
        watchFor: "Local postings run about $39 to $70 an hour, and one hire rarely covers design, testing and backup too.",
      },
      {
        name: "B2B-only specialist",
        goodFor: "Distributor portals and heavy ERP projects.",
        watchFor: "A consumer storefront needs a different focus. Ask for direct-to-consumer stores they've grown.",
      },
      {
        name: "Solo web designer",
        goodFor: "A simple brochure site or light theme edits.",
        watchFor: "A migration or speed rebuild is a lot for one person. Ask how changes are tested before they go live.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, 150+ stores built",
        "Custom builds, migrations and speed work in-house",
        "One fixed price and date, in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Every category leans on different features. These are what a Shopify agency Kansas City brands work with should plan for, category by category.",
    items: [
      { icon: "food", name: "Sauces, Rubs and Specialty Food", desc: "Gift sets, bundles, two-state food tax and holiday cutoffs." },
      { icon: "shirt", name: "Apparel and Fan Gear", desc: "Size guides, limited drops and fast collection pages." },
      { icon: "home", name: "Home and Outdoor Living", desc: "Large option sets, freight delivery and delivery estimates." },
      { icon: "star", name: "Health and Beauty", desc: "Product quizzes, subscriptions and quick mobile checkout." },
      { icon: "paw", name: "Pet Products", desc: "Recurring orders, pet profiles and reorder reminders." },
      { icon: "box", name: "Wholesale and Distribution", desc: "Company accounts and ERP sync. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency Kansas City FAQs",
  faqs: [
    {
      question: "Can I hire someone to set up my Shopify store?",
      answer:
        "Yes. We handle the whole setup: theme, products, payments, shipping, tax for both states, apps and integrations, then launch on the date in your scope and support the store for 60 days.",
      unique: true,
    },
    {
      question: "Does Shopify have agents?",
      answer:
        "Shopify doesn't build stores itself; it lists independent partners in its Partner Directory. We're one of them, a Shopify Plus Partner that designs and builds stores with its own team.",
      unique: true,
    },
    {
      question: "Shopify developer or agency for a Kansas City brand?",
      answer:
        "A Shopify developer Kansas City job boards list may be right for steady small changes after launch. A custom build, a migration or a speed rebuild needs design, development and testing together, which is what an agency brings.",
      unique: true,
    },
    {
      question: "Will AI replace Shopify developers?",
      answer:
        "Not for work your store depends on. We use AI tools to write code faster, but someone still has to decide how a migration handles your data, test it against real orders and stand behind it after launch.",
      unique: true,
    },
    {
      question: "Do you work with brands on both sides of the state line?",
      answer:
        "Yes. We set up tax, shipping and delivery estimates for Missouri and Kansas addresses alike, and work with every client the same way: video calls, a staging store you can test and weekly written updates.",
      unique: true,
    },
    {
      question: "How do you make a slow store faster?",
      answer:
        "We measure every template, compress images, remove apps and scripts that aren't earning their place and fix layout shifts, then measure again. Where a theme can't get fast enough, we look at a headless storefront.",
      unique: true,
    },
    {
      question: "What will my project cost?",
      answer:
        "A speed fix costs far less than a custom build or a migration, so there's no rate card. After a short call you receive one fixed price and a launch date in writing, usually within two working days.",
      unique: false,
    },
    {
      question: "How soon could we launch?",
      answer:
        "Most custom builds and migrations take about six weeks; speed work alone is quicker. If gift season or a product launch sets your deadline, we plan backwards from it.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Set up a video call with a senior Shopify specialist. Show us the store and tell us what's slowing it down; you'll have a written price and date within two working days.",
    bullets: [
      "Walk us through your theme, platform and page speed",
      "Hear whether a custom build, a move or a speed fix comes first",
      "Receive one fixed price and a launch date in writing",
      "Keep the scope document, whatever you decide",
    ],
  },

  sources: [
    {
      id: "mo-food-rate",
      claim: "Missouri's state sales tax is 4.225%; food is taxed at a reduced 1.225% state rate, with local taxes applying at the full local rate; Kansas City, MO combined rates vary by county (roughly 8.7% to 10%)",
      url: "https://taxcloud.com/sales-tax/missouri/",
      publisher: "TaxCloud",
      captured: "2026-11-20",
      reviewAfterDays: 180,
    },
    {
      id: "ks-food-sales-tax-0",
      claim: "As of January 1, 2025, the Kansas state sales tax on food and food ingredients is 0%; local sales tax on food still applies",
      url: "https://ksrevenue.gov/faqs-taxsales.html",
      publisher: "Kansas Department of Revenue",
      captured: "2026-11-20",
      reviewAfterDays: 365,
    },
    {
      id: "kc-barbecue",
      claim: "The Kansas City metro has more than 100 barbecue restaurants; the American Royal World Series of Barbecue features more than 500 teams",
      url: "https://www.visitkc.com/visitors/places-eat/kansas-city-barbecue-capital-world",
      publisher: "Visit KC",
      captured: "2026-11-20",
      reviewAfterDays: 365,
    },
    {
      id: "kc-rail-center",
      claim: "Kansas City is the largest rail center in the US by tonnage, served by five Class I railroads",
      url: "https://onekc.org/kc-smartport/why-kc/",
      publisher: "KC SmartPort",
      captured: "2026-11-20",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
