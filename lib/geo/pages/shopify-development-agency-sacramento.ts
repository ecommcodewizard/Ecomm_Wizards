// Geo v5 S5, Shopify dev Phase 2a, page 3 of 15: Sacramento (metro), service
// format.
//
// Keywords (v5 plan 3.3):
//   primary    shopify developer sacramento (SEMrush 10 / Ahrefs 20, KD 0).
//              SERP checked 2026-11-17: agency pages throughout, ZipRecruiter
//              only at #7, no Jobs pack, so the plan's order stands.
//   secondary  shopify agency sacramento (KD 8)
// People also search: "freelance shopify developer sacramento", "free shopify
// developer sacramento" (answered in the FAQs). AI Overview asks: brand-new
// store, migrate from WooCommerce/Magento, or optimize an existing site;
// Shopify vs Plus; full-service or one-time build. Answered in the summary.
// H1 owner pick: "Launch, Move or Fix Their Store". Texas uses "Build, Migrate
// and Grow", so this page uses different case studies, sections and order.
// Local facts avoid everything on the California page (CCPA, Unruh/ADA,
// honest pricing) and San Diego (automatic renewal law). aqsashahzad.com
// leads on farm-to-fork; here it is one category, not the page's angle.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_SACRAMENTO: ServiceGeoPage = {
  type: "service",
  slug: "sacramento",
  path: "/services/shopify-development-agency/sacramento",
  hub: "/services/shopify-development-agency",
  geo: { name: "Sacramento", type: "metro", areaServed: "Sacramento, California" },

  targetKeyword: "shopify developer sacramento",
  secondaryKeywords: ["shopify agency sacramento"],
  faqKeywords: [],
  metaTitle: "Shopify Developer Sacramento | Launch, Move or Fix Your Store",
  metaDescription:
    "Looking for a Shopify developer? Sacramento brands hire us to launch a new store, move from WooCommerce or Magento, or fix one that isn't selling. Fixed price.",
  shortTitle: "Shopify Developer Sacramento",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Development for Sacramento Brands",
    h1Lead: "",
    h1Gradient: "Shopify Developer",
    h1Tail: "Sacramento Brands Hire to Launch, Move or Fix Their Store",
    intro:
      "Your store is new, stuck on the wrong platform, or live but not selling the way it should. Each one needs a different kind of help. Whichever it is, you need a Shopify developer. Sacramento brands hire our team for all three: [link:/services/shopify-theme-development|new store builds], [link:/services/migration|platform moves] and [link:/services/shopify-cro-agency|fixes that lift sales], from a team that works on nothing but Shopify. One fixed price, agreed in writing before any work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-sacramento-hero-v1.webp",
      alt: "Shopify stores for Capelli Sports, Sneak Energy and Daring, with 95% of search traffic kept through migration and mobile conversion up 68%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  // Answers the AI Overviews' follow-ups (owner, 2026-11-17): launch, move or
  // fix; Shopify or Plus; full-service partner or one-time build.
  summary:
    "Ecomm Wizards is a Shopify agency that helps Sacramento brands launch a new store, move from WooCommerce, Magento or WordPress, or fix a store that isn't selling. Most brands start on standard Shopify and move to Plus for checkout control, wholesale or more storefronts. Work runs as a one-time build or ongoing support, always at a fixed price.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "New launches, platform moves and rebuilds, each designed and developed in-house by our own Shopify team.",
  },

  pains: {
    heading: "Why Brands Call a Shopify Developer",
    intro:
      "Most calls start with one of these four problems, and each is a job for a Shopify developer. Sacramento or anywhere else, here is what each one costs you.",
    items: [
      {
        icon: "calendar",
        name: "A Launch That Keeps Slipping",
        desc: "The products are ready but the store isn't. The theme half-fits, the apps don't talk to each other, and the launch date has moved twice.",
        cost: "Every week late is a week of sales you don't make.",
      },
      {
        icon: "layers",
        name: "A Platform That Fights You",
        desc: "WooCommerce updates break plugins, Magento needs a developer for every small change, and a WordPress shop was never built to scale.",
        cost: "Money spent keeping the old site running instead of growing it.",
      },
      {
        icon: "chart",
        name: "A Live Store That Doesn't Sell",
        desc: "Traffic arrives, but slow mobile pages, confusing navigation and a long checkout send most of it away again.",
        cost: "You pay for visitors who leave without buying.",
      },
      {
        icon: "truck",
        name: "Shipping Rules Nobody Set Up",
        desc: "Perishable or heat-sensitive orders go out on a Friday in July, sit in a hot depot over the weekend and arrive ruined.",
        cost: "Refunds, reshipments and one-star reviews.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Sacramento Brands",
    intro:
      "Every project is designed and developed by our own Shopify team, never passed to subcontractors. Selling statewide? Our [link:/services/shopify-development-agency/california|California page] covers the state rules every store has to follow.",
    // Visual rows; the page's own case studies (Daring, Capelli Sports, Sneak
    // Energy) are not reused here.
    items: [
      {
        title: "New Store Builds",
        heading: "Launch on time, with a store built for your products from day one",
        body: "Custom theme, product pages, apps and integrations planned before a line of code, then built on a staging store you can try as it comes together. VITHIT's new Shopify Plus store grew direct revenue 115% year on year.",
        covers: ["Custom theme", "Product pages", "App setup", "Integrations", "Launch plan"],
        caseSlug: "vithit-shopify-plus-d2c",
        imageAlt: "VITHIT drinks store built on Shopify Plus",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Platform Migrations",
        heading: "Move from WooCommerce, Magento or WordPress without losing what you've built",
        body: "Products, customers, past orders and reviews come across, every old URL is redirected, and search rankings are watched for a month after launch. ChloBo left Magento and grew conversion rate 48%.",
        covers: ["WooCommerce", "Magento", "WordPress", "301 redirects", "Rank tracking"],
        caseSlug: "chlobo-shopify-plus-migration",
        imageAlt: "ChloBo jewelry store migrated from Magento to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        title: "Fixes and Redesigns",
        heading: "Find out why the store isn't selling, then fix that first",
        body: "We review analytics, speed and the path to checkout, list what's costing you sales, and rebuild in that order. Dryrobe merged three separate stores into one and grew online revenue 89%.",
        covers: ["Store audit", "Redesign", "Navigation", "Checkout fixes", "Speed work"],
        caseSlug: "dryrobe-shopify-plus-redesign",
        imageAlt: "Dryrobe outdoor store rebuilt on Shopify Plus",
        cta: { label: "Explore conversion optimization", href: "/services/shopify-cro-agency" },
      },
      {
        title: "Food and Farm Brand Stores",
        heading: "Pre-orders, gift boxes and delivery rules for food that has to arrive fresh",
        body: "Harvest pre-orders, build-your-own boxes, local delivery and pickup zones, and ship-day rules for perishable orders. For Candy Kittens we rebuilt the store around gifting and seasonal campaigns, and conversion rate rose 182%.",
        covers: ["Pre-orders", "Gift boxes", "Local delivery", "Pickup zones", "Ship-day rules"],
        caseSlug: "candy-kittens-shopify-food-beverage-cro",
        imageAlt: "Candy Kittens confectionery store built around gifting",
      },
      {
        title: "Speed and Headless Builds",
        heading: "Pages that load fast on a phone, however much your store grows",
        body: "Lighter themes, fewer apps and, where it pays off, a headless storefront on Shopify's Hydrogen. Denim Tears' headless build cut page load time 45%.",
        covers: ["Core Web Vitals", "App cleanup", "Image compression", "Hydrogen", "Headless"],
        caseSlug: "denim-tears-headless-shopify-hydrogen",
        imageAlt: "Denim Tears headless Shopify storefront",
        cta: { label: "Explore headless Shopify", href: "/services/headless-shopify-agency" },
      },
      {
        title: "Wholesale and Ongoing Support",
        heading: "Trade buyers who reorder online, and a team on call after launch",
        body: "B2B accounts with their own prices and bulk ordering, then 60 days of fixes with every build and a monthly plan if you want one. Saddleback's B2B store grew wholesale sales 881% in its first month.",
        covers: ["B2B accounts", "Bulk ordering", "Price lists", "60-day support", "Monthly plan"],
        caseSlug: "saddleback-shopify-plus-b2b",
        imageAlt: "Saddleback wholesale store on Shopify Plus",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
    ],
  },

  local: {
    label: "Selling from Sacramento",
    heading: "What Sacramento Means for Your Store",
    intro:
      "Three things about Sacramento change how a store here should be set up. Settle each one with your Shopify developer. Sacramento heat, tax and harvest seasons won't wait for launch day.",
    items: [
      {
        icon: "truck",
        name: "Triple-Digit Summers",
        desc: "Sacramento sees about 23 days a year at 100°F or hotter, and set a record of 45 such days in 2024. If you ship chocolate, candles, cosmetics or fresh food, your store needs ship-day rules: send early in the week, hold orders during a heat wave and show insulated packaging before checkout, not after.",
      },
      {
        icon: "receipt",
        name: "Sales Tax Set by the Delivery Address",
        desc: "The city of Sacramento's combined rate is 8.75%, including its 1% Measure U tax, but the ZIP codes with a Sacramento mailing address run from 7.75% to 9.25%. A store that charges one rate for every Sacramento order gets some of them wrong. We set up Shopify Tax to charge by exact address; your accountant handles registration and filing.",
      },
      {
        icon: "food",
        name: "America's Farm-to-Fork Capital",
        desc: "Sacramento has called itself America's Farm-to-Fork Capital since 2012, and its free Farm-to-Fork Festival draws more than 100,000 people. For a food or farm brand, that means a store with harvest pre-orders, local delivery and pickup zones and seasonal subscriptions, not just a product grid.",
      },
    ],
  },

  caseStudies: {
    heading: "Launched, Moved and Fixed: Three Measured Results",
    intro:
      "One project for each reason brands hire a Shopify developer. Sacramento owners can compare like for like: each comes with the numbers from the work.",
    items: [
      {
        slug: "daring-headless-shopify-hydrogen",
        tags: ["Launch", "Headless Shopify", "Plant-Based Food"],
        description: "A plant-based food brand launched a new headless Shopify Plus storefront with recipes, product discovery and checkout in one place. Conversion rate rose 38% and pages load 42% faster.",
        video: "/images/Case%20studies/Daring%20video.mp4",
      },
      {
        slug: "capelli-sports-shopify-migration",
        tags: ["Move", "WordPress to Shopify", "Sportswear"],
        description: "A sportswear brand moved from WordPress to Shopify with zero downtime and kept 95% of its search traffic. Conversion rate rose 24% and site speed 38%.",
        video: "/images/Case%20studies/Capelli%20Sports%20test%20video-2.mp4",
      },
      {
        slug: "sneak-energy-shopify-redesign",
        tags: ["Fix", "Mobile Rebuild", "Drinks"],
        description: "An energy drink brand with 80% mobile traffic had a store built for desktop. We rebuilt it for phones with a bundle builder, and mobile conversion rate rose 68%.",
        video: "/images/Case%20studies/Sneak%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How a Project Runs, Whatever You Need",
    intro:
      "Launch, move or fix, every project runs through the same five stages, each signed off by you before the next. It's how working with a Shopify developer should go. Sacramento projects usually finish in about six weeks.",
    steps: [
      { title: "Diagnose and Quote", desc: "We look at your store, your platform and your numbers, then write down what to build, move or fix, with one price and a date." },
      { title: "Plan and Design", desc: "Page designs for phone and desktop, or a migration map of every product, customer and URL. You approve it before anything changes." },
      { title: "Build on Staging", desc: "All work happens on a staging store you can click through any time, so your live store keeps selling meanwhile." },
      { title: "Test Real Orders", desc: "Test orders with heat-hold rules, tax by address, discounts and redirects, all checked before launch." },
      { title: "Launch and Support", desc: "We go live at a quiet hour, watch orders and rankings, and fix anything that comes up for 60 days." },
    ],
  },

  compare: {
    heading: "Shopify Agency, Sacramento Freelancer or DIY: How to Choose",
    intro: "Before choosing a Shopify developer, Sacramento owners usually compare three kinds of help. Each is right for someone; these questions show which is right for you.",
    options: [
      {
        name: "Freelance developer",
        goodFor: "Quick fixes and single features you can describe in a paragraph.",
        watchFor: "A full launch or migration is a lot for one person. Ask who tests the work and who answers when something breaks.",
      },
      {
        name: "Do-it-yourself with Shopify",
        goodFor: "A simple store with a free theme and a handful of products.",
        watchFor: "Migrations, custom features and shipping rules take time to learn. Count your own hours as part of the price.",
      },
      {
        name: "Large full-service agency",
        goodFor: "Big budgets that also need branding, ads and PR.",
        watchFor: "Minimum budgets sized for national retailers, and a junior team doing the day-to-day work.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Launches, migrations and fixes in-house",
        "Fixed price and date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Each category needs different things from its store, so raise them early with your Shopify developer. Sacramento brands in these categories should expect the following built in.",
    items: [
      { icon: "food", name: "Farm, Food and Specialty Goods", desc: "Harvest pre-orders, gift boxes, pickup zones and heat-hold shipping rules." },
      { icon: "home", name: "Home, Garden and Outdoor", desc: "Large option sets, freight delivery and seasonal collections." },
      { icon: "shirt", name: "Apparel and Sportswear", desc: "Size guides, team and bulk orders, and fast collection pages on a phone." },
      { icon: "star", name: "Beauty and Wellness", desc: "Product quizzes, subscriptions and shipping rules for products that melt." },
      { icon: "paw", name: "Pet Products", desc: "Recurring food orders, pet profiles and reminders timed to when the bag runs out." },
      { icon: "box", name: "Wholesale and Trade", desc: "Account pricing, bulk ordering and reorders for the shops that stock you. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Developer Sacramento FAQs",
  faqs: [
    {
      question: "Do I need a new store, a migration or a fix?",
      answer:
        "A new store suits a brand not selling online yet. A migration suits a store on WooCommerce, Magento or WordPress that's become hard to run. A fix suits a Shopify store that gets visitors but not enough orders. We tell you which on the first call, in writing.",
      unique: true,
    },
    {
      question: "Is a freelance Shopify developer cheaper?",
      answer:
        "Often, per hour. For one fix or one feature a freelancer can be the right call. For a launch or migration, check who designs, who tests and who supports the store after launch; with a freelancer, that is often one person or nobody.",
      unique: true,
    },
    {
      question: "Can I get Shopify development for free?",
      answer:
        "You can start free: Shopify's own themes and guides cover a simple store. Custom features, migrations and shipping rules take paid work. Our first call is free, and you keep the written scope whether you hire us or not.",
      unique: true,
    },
    {
      question: "Should I be on standard Shopify or Shopify Plus?",
      answer:
        "Most brands start on standard Shopify. Plus is worth it when you need checkout customization, wholesale and retail at volume, or more than one storefront. We'll recommend one and explain why before you commit.",
      unique: true,
    },
    {
      question: "How do you ship perishables through a Sacramento summer?",
      answer:
        "We set ship-day rules so heat-sensitive orders go out early in the week, add a hold option for heat waves, and show insulated packaging and delivery dates on the product page before checkout.",
      unique: true,
    },
    {
      question: "Will I lose search rankings when I move to Shopify?",
      answer:
        "Not if the move is planned. Every old page points to its new address, product content comes across intact, and we track your rankings for a month after launch to catch anything that drops.",
      unique: false,
    },
    {
      question: "What does a Shopify developer cost?",
      answer:
        "It depends on whether you're launching, moving or fixing, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a date within 48 hours.",
      unique: false,
    },
    {
      question: "How long does a project take?",
      answer:
        "Around six weeks for most launches and migrations, and less for a focused fix. If a harvest, a festival or the holidays matter to you, we count back from that date and write it into the scope.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a time for a video call with a senior Shopify specialist. Tell us whether you're launching, moving or fixing; within two working days you'll have a written price and date.",
    bullets: [
      "Talk through your store and what's holding it back",
      "Find out whether you need a launch, a migration or a fix",
      "Get a fixed price and a date within 48 hours",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "sac-100-degree-days",
      claim: "Sacramento typically sees about 23 days of 100-degree heat a year; 2024 set a record with 45 days (previous record 44 in 2022)",
      url: "https://www.cbsnews.com/sacramento/news/sacrament-new-record-for-most-triple-digit-heats-days-in-year-2024/",
      publisher: "CBS Sacramento",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
    {
      id: "sac-sales-tax-rate",
      claim: "City of Sacramento combined sales tax 8.75% (2026), including the city's 1% Measure U transactions and use tax",
      url: "https://www.commenda.io/usa/california/sacramento-sales-tax",
      publisher: "Commenda",
      captured: "2026-11-17",
      reviewAfterDays: 180,
    },
    {
      id: "sac-zip-rate-range",
      claim: "The 92 ZIP codes with a Sacramento mailing address range from 7.75% to 9.25% combined sales tax",
      url: "https://trykintsugi.com/sales-tax-guides/usa/california/sacramento",
      publisher: "Kintsugi",
      captured: "2026-11-17",
      reviewAfterDays: 180,
    },
    {
      id: "sac-farm-to-fork",
      claim: "Sacramento has promoted itself as America's Farm-to-Fork Capital since October 2012 through Visit Sacramento; its free Farm-to-Fork Festival attracts more than 100,000 attendees",
      url: "https://www.visitsacramento.com/restaurants-and-drinks/farm-to-fork",
      publisher: "Visit Sacramento",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
