// Geo v5 S5, Shopify dev Phase 2a, page 6 of 15: Arkansas (state), service
// format.
//
// Keywords (v5 plan 3.3):
//   primary    shopify developer arkansas (SEMrush 10, KD 7)
//   secondary  shopify agency arkansas
// SERP (2026-11-17): 100xelevate holds #1 and #9 for the primary, #1 and #8
// for the secondary, pitching "food, retail and outdoor brands" and a 6.5%
// destination-tax setup; this page avoids both. Demand centres on Northwest
// Arkansas (Bentonville, Fayetteville, Rogers, Springdale): map pack, a Hive
// Networking NWA post and a Fayetteville job listing.
// H1 owner pick #7 ("Store Builds, Marketplace Sync and B2B Portals").
// No case study covers Walmart or Amazon work, so the marketplace row
// describes the service and cites a real app-stack project instead; NEOM
// stands for channel sync (retail POS plus online on one inventory).

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_ARKANSAS: ServiceGeoPage = {
  type: "service",
  slug: "arkansas",
  path: "/services/shopify-development-agency/arkansas",
  hub: "/services/shopify-development-agency",
  geo: { name: "Arkansas", type: "state", areaServed: "Arkansas" },

  targetKeyword: "shopify developer arkansas",
  secondaryKeywords: ["shopify agency arkansas"],
  faqKeywords: [],
  metaTitle: "Shopify Developer Arkansas | Store Builds, Marketplace Sync, B2B",
  metaDescription:
    "Looking for a Shopify developer? Arkansas brands hire us for store builds, Walmart Marketplace sync and B2B portals, at a fixed price agreed upfront.",
  shortTitle: "Shopify Developer Arkansas",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Development for Arkansas Brands",
    h1Lead: "",
    h1Gradient: "Shopify Developer",
    h1Tail: "Arkansas Brands Hire for Store Builds, Marketplace Sync and B2B Portals",
    intro:
      "You sell on your own store, on Walmart Marketplace and to the shops that stock you, and each channel keeps its own stock count. Pulling them into one system is a job for a Shopify developer. Arkansas brands hire our team for [link:/services/shopify-theme-development|store builds], [link:/services/shopify-integration-services|marketplace sync] and [link:/services/shopify-b2b-store-setup|B2B portals], at a fixed price agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-arkansas-hero-v1.webp",
      alt: "Shopify stores for Dryrobe, NEOM Wellbeing and Mouldings One, with online revenue up 89% and B2B revenue up 50%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency that builds stores for Arkansas brands selling direct, through Walmart Marketplace and to wholesale buyers, from Bentonville and Fayetteville to Little Rock. Most start on standard Shopify and move to Plus when wholesale or several storefronts call for it. Every project has a fixed price and date agreed in writing.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "Store builds, channel syncs and trade portals made in-house: the work to expect from any Shopify developer. Arkansas brands can check every result below.",
  },

  pains: {
    heading: "When Every Channel Keeps Its Own Books",
    intro:
      "Selling in three places from three systems is where the mistakes start. These four problems are usually what brings in a Shopify developer. Arkansas brands selling on Walmart and to retailers feel them first; here is what each one costs you.",
    items: [
      {
        icon: "layers",
        name: "Stock That Doesn't Match",
        desc: "Your Shopify store, your Walmart listings and your wholesale orders all draw on the same shelves, but each keeps its own count.",
        cost: "Oversold products, canceled orders and marketplace penalties.",
      },
      {
        icon: "box",
        name: "Wholesale by Email and Spreadsheet",
        desc: "Retail buyers email purchase orders, someone checks a price sheet and keys the order in by hand.",
        cost: "Slow reorders and pricing mistakes on your biggest accounts.",
      },
      {
        icon: "alert",
        name: "A Store That Looks Smaller Than the Brand",
        desc: "Shoppers who know you from a store shelf land on a template site with thin product pages and no comparisons.",
        cost: "They buy the same product from Walmart or Amazon instead of from you.",
      },
      {
        icon: "receipt",
        name: "Tax Settings Left on Default",
        desc: "Food items still charged state tax, or local rates set once and never updated, because nobody revisited the settings.",
        cost: "Refunds, corrections and an awkward call with your accountant.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Arkansas Brands",
    intro:
      "Every project is designed and developed by our own Shopify team, never passed to subcontractors. After launch, we can also take on [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO].",
    // Visual rows; the page's own case studies (Dryrobe, NEOM, Mouldings One)
    // are not reused here.
    items: [
      {
        title: "Custom Store Builds",
        heading: "A store that looks as established as your brand on the shelf",
        body: "A custom theme with full product pages, comparisons and reviews, fast on a phone and simple for your team to edit. 111SKIN's custom theme and skin quiz lifted conversion rate 46%.",
        covers: ["Custom theme", "Product pages", "Comparisons", "Reviews", "Mobile speed"],
        caseSlug: "111skin-shopify-cro-redesign",
        imageAlt: "111SKIN skincare store on a custom Shopify theme",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Walmart Marketplace and Channel Sync",
        heading: "One stock count across Shopify, Walmart Marketplace and your other channels",
        body: "We connect Walmart Marketplace, Amazon or your retail POS to Shopify with the right connector, map your products and set the rules for stock, prices and orders. Capelli Sports runs a 10-app connected stack on Shopify and kept 95% of its search traffic through its move.",
        covers: ["Walmart Marketplace", "Amazon", "Inventory sync", "Order import", "Price rules"],
        caseSlug: "capelli-sports-shopify-migration",
        imageAlt: "Capelli Sports store on Shopify with its connected app stack",
        cta: { label: "Explore integrations", href: "/services/shopify-integration-services" },
      },
      {
        title: "B2B and Wholesale Portals",
        heading: "Retail buyers log in, see their own prices and reorder without emailing you",
        body: "Company accounts with price lists, payment terms, minimum orders and bulk ordering, in the same store as your retail site. Saddleback's B2B store grew wholesale sales 881% in its first month.",
        covers: ["Company accounts", "Price lists", "Payment terms", "Bulk ordering", "Purchase orders"],
        caseSlug: "saddleback-shopify-plus-b2b",
        imageAlt: "Saddleback wholesale store on Shopify Plus",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        title: "Outdoor and Bike Stores",
        heading: "Spec comparisons and fit finders that answer questions before checkout",
        body: "Comparison tables, size and fit finders, and seasonal launch pages for gear people research before they buy. Everlast's store with product comparison tools lifted conversion rate 152%.",
        covers: ["Spec comparisons", "Fit finders", "Size guides", "Seasonal launches", "Bundles"],
        caseSlug: "everlast-shopify-plus-sports-redesign",
        imageAlt: "Everlast sporting goods store with product comparisons",
      },
      {
        title: "Food Stores and Tax Setup",
        heading: "Food tagged correctly for tax, and bundles that lift every order",
        body: "Product categories set so groceries skip the state tax while local tax still applies, plus bundles, gift boxes and ship-day rules. VITHIT's store with automated bundles grew direct revenue 115% year on year.",
        covers: ["Food tax categories", "Shopify Tax", "Bundles", "Gift boxes", "Ship-day rules"],
        caseSlug: "vithit-shopify-plus-d2c",
        imageAlt: "VITHIT drinks store with automated bundles",
      },
      {
        title: "Migrations and Support",
        heading: "Off your old platform, and looked after once you're live",
        body: "Products, customers, trade accounts and order history moved with every URL redirected, then 60 days of support and a monthly plan if you want one. ChloBo left Magento and grew conversion rate 48%.",
        covers: ["WooCommerce", "Magento", "BigCommerce", "301 redirects", "60-day support"],
        caseSlug: "chlobo-shopify-plus-migration",
        imageAlt: "ChloBo jewelry store migrated from Magento to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
    ],
  },

  local: {
    label: "Selling from Arkansas",
    heading: "What Arkansas Means for Your Store",
    intro:
      "Three things about Arkansas shape how your store should be set up. Settle each one with your Shopify developer. Arkansas brands that sell through Walmart, outdoors or in food meet them first.",
    items: [
      {
        icon: "store",
        name: "Walmart's Home Market",
        desc: "Walmart calls Bentonville home, and many Northwest Arkansas brands sell through it as well as on their own store. If you list on Walmart Marketplace, your Shopify store should own the stock count: one inventory, orders flowing back into Shopify, so a sale in one place never oversells the other.",
      },
      {
        icon: "flag",
        name: "The Mountain Biking Capital",
        desc: "Bentonville has called itself the Mountain Biking Capital of the World since 2020, with more than 80 miles of trails in town linked to a regional network of around 500 miles. If you sell bikes, gear or outdoor apparel, your buyers compare specs and sizes before they buy, so the store should answer those questions on the product page.",
      },
      {
        icon: "receipt",
        name: "No State Tax on Groceries Since 2026",
        desc: "Arkansas removed its last state sales tax on food and food ingredients on January 1, 2026, but city and county taxes still apply, and candy, soft drinks and prepared food are taxed in full. Your food products need the right tax category; your accountant confirms which ones qualify.",
      },
    ],
  },

  caseStudies: {
    heading: "Store Builds, Channel Sync and B2B: Three Measured Results",
    intro:
      "One project for each kind of work you might hire a Shopify developer for. Arkansas brands can compare like for like: each comes with measured results.",
    items: [
      {
        slug: "dryrobe-shopify-plus-redesign",
        tags: ["Store Build", "Shopify Plus", "Outdoor Apparel"],
        description: "An outdoor apparel brand running three separate Shopify stores merged them into one, with a custom activity and size finder. Online revenue grew 89% and returns fell 31%.",
        video: "/images/Case%20studies/dryrobe%20video%20test.mp4",
      },
      {
        slug: "neom-wellbeing-shopify-upgrade",
        tags: ["Channel Sync", "Shopify POS", "Wellbeing"],
        description: "A wellbeing brand brought four retail locations and its online stores onto one Shopify setup, sharing stock and customers across every channel. Checkout conversion rose 34%.",
        video: "/images/Case%20studies/NEOM%20Wellbeing%20video.mp4",
      },
      {
        slug: "mouldings-one-shopify-b2b-portal",
        tags: ["B2B Portal", "ERP Integration", "Building Supplies"],
        description: "Contractors and designers who used to phone in orders now log in, see live stock and reorder in minutes. B2B revenue grew 50% and the time to process each order fell 74%.",
        video: "/images/Case%20studies/Mouldings%20One%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How a Build or Channel Sync Runs",
    intro:
      "Five stages, each approved by you before work moves on. That is what a good Shopify developer should offer. Arkansas projects typically launch about six weeks after the first call.",
    steps: [
      { title: "Map Your Channels", desc: "We list where you sell, who buys and how stock moves between channels, then fix the scope, one price and a date in writing." },
      { title: "Design and Sync Plan", desc: "Page designs for phone and desktop, plus a written plan for which system owns stock, prices and orders. You approve both." },
      { title: "Build on Staging", desc: "Theme, trade accounts and channel connectors built on a staging store you can test whenever you like." },
      { title: "Test Every Channel", desc: "Test orders from the store, the marketplace and trade accounts, stock syncs, food tax and local tax, all checked before launch." },
      { title: "Go Live and Stay Supported", desc: "We switch over at a quiet hour, check the first orders on every channel, and handle fixes for 60 days." },
    ],
  },

  compare: {
    heading: "Shopify Agency, Arkansas Freelancer or Marketplace Consultant?",
    intro: "Most Arkansas owners weigh three kinds of help against us. Each suits someone; these questions show which suits you.",
    options: [
      {
        name: "Freelance developer",
        goodFor: "Quick theme tweaks and single features.",
        watchFor: "Connecting Walmart, building a trade portal and redesigning the store is more than one person can cover. Ask who tests the syncs, and who answers when one breaks.",
      },
      {
        name: "Marketplace consultant",
        goodFor: "Listing optimization and advertising on Walmart or Amazon.",
        watchFor: "Your own store and its integrations are a different job. Ask who builds and maintains the Shopify side.",
      },
      {
        name: "Big-name enterprise agency",
        goodFor: "Global brands with enterprise budgets and long timelines.",
        watchFor: "Their minimums are set for national retailers, and senior people often step back once the contract is signed.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, 150+ stores built",
        "Store builds, channel sync and B2B under one roof",
        "One fixed price and a date, in writing",
        "Real numbers from every case study",
        "The code, data and accounts are yours",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Every category asks something different of its store. Before you brief a Shopify developer, Arkansas brands in these categories should list the following.",
    items: [
      { icon: "flag", name: "Bikes and Outdoor Gear", desc: "Spec comparisons, fit finders and seasonal launch pages." },
      { icon: "store", name: "Consumer Goods Sold Through Retail", desc: "Your own store alongside Walmart Marketplace, on one inventory." },
      { icon: "food", name: "Food and Specialty Goods", desc: "Grocery tax categories, gift boxes and ship-day rules." },
      { icon: "shirt", name: "Apparel and Lifestyle", desc: "Size guides, new-season drops and stock shared across channels." },
      { icon: "home", name: "Home and Furniture", desc: "Large option sets, freight delivery and trade accounts." },
      { icon: "box", name: "Wholesale and Distribution", desc: "Company accounts, price lists and bulk ordering. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Developer Arkansas FAQs",
  faqs: [
    {
      question: "Can Shopify sync with Walmart Marketplace?",
      answer:
        "Yes, through a connector app or a custom integration. We set Shopify as the source of truth for stock and prices, map your products to Walmart's catalog and pull Walmart orders back into Shopify, so every channel works from one inventory.",
      unique: true,
    },
    {
      question: "Does wholesale need Shopify Plus?",
      answer:
        "Small wholesale programs run fine on standard Shopify with customer-specific price lists. Plus earns its cost with company accounts for several buyers, net payment terms and checkout rules per account. We recommend one, with reasons, on the first call.",
      unique: false,
    },
    {
      question: "Do I need an agency, or will a freelancer do?",
      answer:
        "For one small change, a freelancer is often fine. When the work spans a new store, a Walmart connector and a trade portal, you need design, development, testing and support working together, and that is what an agency provides.",
      unique: false,
    },
    {
      question: "How does my store handle the Arkansas grocery tax change?",
      answer:
        "Each food product gets the right tax category in Shopify Tax, so the state tax drops off while city and county taxes still apply, and candy, soft drinks and prepared food stay fully taxed. Your accountant confirms which products qualify.",
      unique: true,
    },
    {
      question: "Can you build fit finders and spec comparisons?",
      answer:
        "Yes. We build comparison tables, size and fit finders and product quizzes into the theme, so shoppers get answers on the product page instead of emailing you.",
      unique: true,
    },
    {
      question: "Will moving to Shopify hurt my Google rankings?",
      answer:
        "It shouldn't. We redirect every old address to its new page, carry product descriptions and images across unchanged, and watch your rankings for a month after launch so anything that slips gets fixed.",
      unique: false,
    },
    {
      question: "What does a project like this cost?",
      answer:
        "That depends on how many channels and buyer types the store has to serve, so we quote per project, not per hour. You'll have a written scope, one fixed price and a date within 48 hours of a short call.",
      unique: false,
    },
    {
      question: "When could my store be live?",
      answer:
        "Most builds launch about six weeks after the first call. Add a marketplace connector and a trade portal at the same time and it runs longer. We work back from your target date and put it in the scope.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Choose a time for a video call with a senior Shopify specialist. Walk us through where you sell and who buys; you'll get a written price and date within two working days.",
    bullets: [
      "Go through your store, your channels and your trade buyers",
      "Learn whether standard Shopify or Plus fits you",
      "Receive a fixed price and date within 48 hours",
      "Keep the written scope, hire us or not",
    ],
  },

  sources: [
    {
      id: "walmart-hq-bentonville",
      claim: "Walmart Inc. is headquartered in Bentonville, Arkansas",
      url: "https://corporate.walmart.com/about",
      publisher: "Walmart",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
    {
      id: "bentonville-mtb-capital",
      claim: "Bentonville has promoted itself as the Mountain Biking Capital of the World since July 2020, with more than 80 miles of trails in the city connected to a roughly 500-mile Northwest Arkansas network",
      url: "https://visitbentonville.com/sp/bike",
      publisher: "Visit Bentonville",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
    {
      id: "ar-grocery-tax-2026",
      claim: "Act 1008 (Grocery Tax Relief Act) exempts food and food ingredients from Arkansas state sales and use tax from January 1, 2026; municipal and county taxes still apply; prepared food, candy and soft drinks are taxed at full rates",
      url: "https://taxcloud.com/sales-tax-radar/arkansas-state-grocery-sales-tax-elimination-2026/",
      publisher: "TaxCloud",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
