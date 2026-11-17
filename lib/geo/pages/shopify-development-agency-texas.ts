// Geo v5 S5, Shopify dev Phase 2a, page 1 of 15: Texas (state), service format.
//
// Keywords (v5 plan 3.3; SEMrush 10 / Ahrefs 10):
//   primary    shopify agency texas (KD 3): programme target state
//   secondary  shopify developer texas (KD 0). Google rewrites it to
//              "shopify development texas" and mixes Upwork rates and Indeed
//              jobs into page 1; "Shopify development" is used naturally too.
// Must not target Dallas, Houston or Austin terms: those dev pages exist and
// own them. This page links down to them as the state page.
// SERP (2026-11-17, results personalised to Charlotte NC despite the uule):
// Netalico's Houston page #1, Texas-wide pages (Dynamic Dreamz, Shero),
// listicles, city pages. AI Overview groups agencies by Austin / DFW /
// Houston and asks: standard or Plus; build, migration or growth; local or
// remote. H1 owner pick #1 ("Build, Migrate and Grow") answers the second.
// Local facts are state-level and reuse nothing from the city pages (no city
// rates, no $500k remote-seller threshold, no DFW logistics).

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_TEXAS: ServiceGeoPage = {
  type: "service",
  slug: "texas",
  path: "/services/shopify-development-agency/texas",
  hub: "/services/shopify-development-agency",
  geo: { name: "Texas", type: "state", areaServed: "Texas" },

  targetKeyword: "shopify agency texas",
  secondaryKeywords: ["shopify developer texas"],
  faqKeywords: [],
  metaTitle: "Shopify Agency Texas | Build, Migrate and Grow Your Store",
  metaDescription:
    "The Shopify agency Texas brands hire to build a new store, migrate from another platform or grow the one they have. Shopify Plus, B2B and a fixed price upfront.",
  shortTitle: "Shopify Agency Texas",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Texas Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Texas Brands Hire to Build, Migrate and Grow",
    intro:
      "You're launching a new store, leaving WooCommerce or Magento, or trying to get more from the Shopify store you already run. We're the Shopify agency Texas brands hire for all three: [link:/services/shopify-theme-development|custom themes], [link:/services/migration|migrations] and [link:/services/shopify-plus-development|Shopify Plus], with sales tax, privacy and shipping set up for how Texas works. One fixed price, agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-texas-hero-v1.webp",
      alt: "Shopify stores for VITHIT, ChloBo and Evie Lou, with revenue up 115% and conversion rate up 82%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency Texas brands hire to build new stores, migrate from WooCommerce, Magento or BigCommerce, and grow existing Shopify and Shopify Plus stores, with Dallas, Houston, Austin and San Antonio brands served online. The team works only on Shopify, has built 150+ stores, and agrees a fixed price and launch date in writing before work starts.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "New builds, migrations and growth programs, each one designed, built and launched by our own Shopify team.",
  },

  pains: {
    heading: "What Holds a Growing Store Back",
    intro:
      "Whether you're building, moving or growing, the same four problems tend to show up. These are what a Shopify agency Texas brands hire should fix first, and what each one is costing you now.",
    items: [
      {
        icon: "alert",
        name: "A Platform You've Outgrown",
        desc: "WooCommerce plugins that break on every update, or a Magento site that needs a developer for every small change. Each fix takes longer than the last.",
        cost: "Money spent keeping the old site alive instead of growing it.",
      },
      {
        icon: "chart",
        name: "Traffic That Doesn't Turn Into Orders",
        desc: "Ads and search bring visitors, but slow pages, thin product detail and a long checkout send them away before they buy.",
        cost: "You pay for every click, and most of them leave.",
      },
      {
        icon: "receipt",
        name: "Tax Settings Nobody Has Checked",
        desc: "The store charges one rate everywhere, or the wrong one, because nobody set up locations, tax-free weekends or product categories properly.",
        cost: "Refunds, corrections and an unpleasant conversation with your accountant.",
      },
      {
        icon: "box",
        name: "Wholesale Kept Outside the Store",
        desc: "Retail runs on Shopify while trade orders arrive by email, phone and spreadsheet, priced by hand.",
        cost: "Hours of admin, and buyers who order less often than they would.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Texas Brands",
    intro:
      "Every build is designed and developed by our own Shopify team, never passed to subcontractors. Selling from one of the big metros? Our [link:/services/shopify-development-agency/dallas|Dallas], [link:/services/shopify-development-agency/houston|Houston] and [link:/services/shopify-development-agency/austin|Austin] pages cover what changes there.",
    // Visual rows, each with a video case study the page's own case-studies
    // section doesn't use (VITHIT, ChloBo, Evie Lou are kept for that).
    items: [
      {
        title: "Custom Theme Development",
        heading: "A store designed around what your customers need to see before they buy",
        body: "A custom theme with product pages, filters and collection layouts planned around your range, fast on a phone and easy for your team to edit. For Feetures we rebuilt the theme from scratch, and add-to-cart rate rose 32%.",
        covers: ["Custom theme", "Product pages", "Collection filters", "Mobile design", "Editable sections"],
        caseSlug: "feetures-shopify-theme-development",
        imageAlt: "Feetures performance sock store on a custom Shopify theme",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Migration to Shopify",
        heading: "Off WooCommerce, Magento or BigCommerce without losing rankings or order history",
        body: "Products, customers, past orders and reviews come across, every old URL is redirected, and we watch your search rankings after launch. This Works left Magento for Shopify Plus and grew conversion rate 38%.",
        covers: ["WooCommerce", "Magento", "BigCommerce", "301 redirects", "Order history"],
        caseSlug: "this-works-shopify-plus-migration",
        imageAlt: "This Works store migrated from Magento to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        title: "Shopify Plus and B2B",
        heading: "Retail and wholesale in one store, each buyer seeing their own prices",
        body: "Trade accounts with price lists, payment terms and quick reorders alongside your retail store, plus Shopify Plus checkout and automation when order volume calls for it. Henchman's online revenue grew 58% after its B2B rebuild.",
        covers: ["Shopify Plus", "Trade accounts", "Price lists", "Payment terms", "Shopify Flow"],
        caseSlug: "henchman-shopify-plus-b2b",
        imageAlt: "Henchman wholesale ordering on Shopify Plus",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        title: "Tax, Shipping and Checkout Setup",
        heading: "The right tax on every order and delivery dates before the cart",
        body: "Shopify Tax configured for your locations and product categories, shipping rates and delivery estimates shown on the product page, and a checkout tested with real orders to several states.",
        covers: ["Shopify Tax", "Product categories", "Ship-from locations", "Delivery dates", "Checkout testing"],
        caseSlug: "dryrobe-shopify-plus-redesign",
        imageAlt: "Dryrobe Shopify Plus checkout and delivery setup",
      },
      {
        title: "Integrations and Custom Apps",
        heading: "Your ERP, warehouse and accounting tools talking to Shopify on their own",
        body: "Orders out to your ERP or 3PL as they're placed, stock and tracking back into Shopify, and custom apps where no off-the-shelf app fits. Mouldings One's trade customers now see live stock and reorder in minutes.",
        covers: ["ERP sync", "3PL routing", "Accounting export", "Custom apps", "Error alerts"],
        caseSlug: "mouldings-one-shopify-b2b-portal",
        imageAlt: "Mouldings One trade portal connected to its ERP",
        cta: { label: "Explore integrations", href: "/services/shopify-integration-services" },
      },
      {
        title: "Growth After Launch",
        heading: "Tested changes that lift sales, once the store is live",
        body: "A/B tests on product pages, navigation and checkout, speed work and a monthly support plan. Twillory kept 70% of its tests as winners and added $5.4M in new annual revenue.",
        covers: ["A/B testing", "Speed work", "Analytics", "Monthly support", "60-day support"],
        caseSlug: "twillory-shopify-cro",
        imageAlt: "Twillory shirt store improved through A/B testing",
        cta: { label: "Explore conversion optimization", href: "/services/shopify-cro-agency" },
      },
    ],
  },

  local: {
    label: "Selling from Texas",
    heading: "What Texas Rules Mean for Your Store",
    intro:
      "Three Texas rules shape how your store should be set up, wherever your customers are. A Shopify agency Texas brands rely on should get all three right before launch.",
    items: [
      {
        icon: "calendar",
        name: "Three Tax-Free Weekends a Year",
        desc: "Texas holds sales tax holidays for emergency supplies in April, ENERGY STAR and water-efficient products in May, and clothing, shoes and school supplies in August. In 2026 the August holiday ran Aug 7 to 9, with qualifying clothing and shoes under $100 an item tax-free. If you sell those products, your store has to drop tax on exactly the right items for exactly those days, then put it back.",
      },
      {
        icon: "user",
        name: "The Texas Data Privacy and Security Act",
        desc: "In force since July 1, 2024 and enforced by the Texas Attorney General. Most small businesses are exempt from most of it, but even they must get consent before selling a customer's sensitive data. We set up your privacy notice, consent banner and the opt-outs your apps need; whether the Act covers you is a question for your lawyer.",
      },
      {
        icon: "store",
        name: "Local Tax Follows Where Orders Ship From",
        desc: "For a Texas-based seller, the local tax rate on in-state orders generally follows the place of business that fills the order, under the Comptroller's sourcing rule updated in January 2024. That makes your warehouse and ship-from locations in Shopify a tax setting, not just a shipping one. We set them up to match how you fulfill; your accountant confirms the rest.",
      },
    ],
  },

  caseStudies: {
    heading: "Built, Migrated and Grown: Three Measured Results",
    intro:
      "One store for each job a Shopify agency Texas brands hire is asked to do, each with the numbers from the project.",
    items: [
      {
        slug: "vithit-shopify-plus-d2c",
        tags: ["New Build", "Shopify Plus", "Drinks"],
        description: "A functional drinks brand sold mostly through retailers needed a direct store that could keep up. We built it on Shopify Plus with automated bundles and discounts, and direct revenue grew 115% year on year.",
        video: "/images/Case%20studies/VITHIT%20video%202.mp4",
      },
      {
        slug: "chlobo-shopify-plus-migration",
        tags: ["Migration", "Magento to Shopify Plus", "Jewelry"],
        description: "A jewelry brand left Magento for Shopify Plus, with a redesign and an engraving preview for personalized orders. Conversion rate rose 48% and platform running costs fell 52%.",
        video: "/images/Case%20studies/ChloBo%20video.mp4",
      },
      {
        slug: "evie-lou-shopify-fashion-cro",
        tags: ["Growth", "Mobile UX", "Fashion"],
        description: "A women's fashion brand rebuilt its existing Shopify Plus store around mobile shoppers and better product discovery. Conversion rate rose 82% and organic revenue 47% within a year.",
        video: "/images/Case%20studies/evie-lou%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How Your Project Runs, Start to Launch",
    intro:
      "Five stages, each signed off by you before the next starts: the way a Shopify agency Texas brands trust should run a build, a migration or a redesign. Most stores go live about six weeks after the first call.",
    steps: [
      { title: "Scope and Price in Writing", desc: "We look at your store, your platform and your goals, then fix the scope, one price and a launch date in writing." },
      { title: "Design You Approve", desc: "Figma designs for desktop and mobile. Nothing is built until you've signed off every screen." },
      { title: "Build or Migrate on Staging", desc: "Theme, apps, integrations and any data migration built on a staging store you can click through whenever you like." },
      { title: "Test Tax, Shipping and Checkout", desc: "Test orders to Texas and out-of-state addresses, tax-free items, discounts and wholesale accounts, all checked before launch." },
      { title: "Launch and 60 Days of Support", desc: "We go live at a quiet hour, watch the first orders and rankings, and fix anything that comes up for 60 days." },
    ],
  },

  compare: {
    heading: "Comparing Your Shopify Agency Texas Options",
    intro: "Texas brands usually weigh three kinds of help against us. Each suits someone; these questions show which one suits you.",
    options: [
      {
        name: "Freelance developer",
        goodFor: "Small fixes, single features and one-off theme changes.",
        watchFor: "A migration or a B2B build is a lot for one person. Ask who covers the work when they're away, and who keeps it running after launch.",
      },
      {
        name: "Metro design studio",
        goodFor: "Brand identity, photography and campaign creative.",
        watchFor: "A beautiful site isn't the same as one that sells. Ask what conversion rate did after their last Shopify launch.",
      },
      {
        name: "Large national partner",
        goodFor: "Very large programs with enterprise budgets.",
        watchFor: "Minimum budgets sized for national retailers, and a junior team often runs the day-to-day.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Builds, migrations and growth work in-house",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Each category needs something different from its store. Here is what a Shopify agency Texas brands hire should build in for each.",
    items: [
      { icon: "shirt", name: "Apparel and Western Wear", desc: "Size guides, new-season drops and a store set up for the August tax-free weekend on qualifying items." },
      { icon: "food", name: "Food, Drinks and Sauces", desc: "Bundles, subscriptions and ship-day rules for products that can't sit in a hot truck." },
      { icon: "home", name: "Home and Outdoor Living", desc: "Large option sets, freight delivery quotes and ENERGY STAR items flagged for the May tax holiday." },
      { icon: "flag", name: "Hunting, Fishing and Outdoor Gear", desc: "Spec tables, comparisons and the age and shipping checks some products need." },
      { icon: "star", name: "Jewelry and Gifts", desc: "Engraving previews, gift guides and the trust a higher-value order needs." },
      { icon: "box", name: "Wholesale and Manufacturing", desc: "Account pricing, bulk ordering and ERP syncs for trade buyers. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency Texas FAQs",
  faqs: [
    {
      question: "How much does it cost to hire a Shopify agency?",
      answer:
        "It depends on whether you're building, migrating or growing, and on how much custom work is involved, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours, and that number holds unless you add to the work.",
      unique: false,
    },
    {
      question: "Shopify developer or agency: which should a Texas brand hire?",
      answer:
        "A freelancer suits small fixes. A Shopify developer Texas brands find on Upwork or Indeed may be fine for a single feature. A new build, a migration or a B2B store needs design, development, testing and support together, which is where an agency earns its fee. Ask anyone you consider who does each of those.",
      unique: true,
    },
    {
      question: "Do I need Shopify Plus or standard Shopify?",
      answer:
        "Most stores start on standard Shopify. Plus makes sense when you need checkout customization, wholesale and retail in one store at scale, more automation or several storefronts. We'll tell you which fits on the first call and put the reasoning in writing.",
      unique: true,
    },
    {
      question: "Does my agency need to be local?",
      answer:
        "No. We run every project through online calls, a staging store you can test yourself and written weekly updates, with the scope, price and launch date agreed in writing first.",
      unique: false,
    },
    {
      question: "How does my store handle Texas tax-free weekends?",
      answer:
        "We give every product the right category so Shopify Tax can treat qualifying items correctly, then check the first holiday weekend's orders with you. If a product's status is unclear, your accountant makes the call.",
      unique: true,
    },
    {
      question: "Does the Texas privacy law apply to my store?",
      answer:
        "It depends on your business. The Texas Data Privacy and Security Act exempts most small businesses from most of its rules, but not from getting consent before selling sensitive data. We set up the privacy notice and consent tools; your lawyer confirms what applies to you.",
      unique: true,
    },
    {
      question: "Can you move us off WooCommerce or Magento?",
      answer:
        "Yes. Your products, customer accounts, past orders and reviews come across, each old page points to its new address, and we track your search rankings for a month to catch anything that drops.",
      unique: false,
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Around six weeks for most stores, longer for large migrations or B2B builds. We count back from the date that matters to you, such as the August tax-free weekend or the holidays, and write it into the scope.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Choose a slot for a video call with a senior Shopify specialist. Tell us whether you're building, moving or growing; two working days later you'll have a written price and launch date.",
    bullets: [
      "Walk through your store, your platform and your goals",
      "Get a fixed price and a launch date within 48 hours",
      "Find out whether you need standard Shopify or Shopify Plus",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "tx-holiday-back-to-school-2026",
      claim: "Texas back-to-school sales tax holiday Aug 7-9, 2026; qualifying clothing and footwear priced under $100 per item exempt",
      url: "https://comptroller.texas.gov/about/media-center/news/20260806-huffines-reminder-to-shoppers-texas-sales-tax-holiday-is-aug-7-9-1786024915687",
      publisher: "Texas Comptroller of Public Accounts",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
    {
      id: "tx-holiday-energy-star-2026",
      claim: "Texas ENERGY STAR and water-efficient products sales tax holidays May 23-25, 2026",
      url: "https://comptroller.texas.gov/about/media-center/news/20260519-sales-tax-holidays-for-water-efficient-and-energy-starr-products-set-for-may-23-25-1779119182554",
      publisher: "Texas Comptroller of Public Accounts",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
    {
      id: "tx-holiday-emergency-2026",
      claim: "Texas emergency preparation supplies sales tax holiday April 25-27, 2026",
      url: "https://www.fox7austin.com/news/how-buy-emergency-supplies-tax-free-texas-month",
      publisher: "FOX 7 Austin",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
    {
      id: "tx-tdpsa",
      claim: "Texas Data Privacy and Security Act effective July 1, 2024; enforced by the Attorney General; SBA-defined small businesses generally exempt except they must obtain consent before selling a consumer's sensitive data",
      url: "https://www.texasattorneygeneral.gov/consumer-protection/file-consumer-complaint/consumer-privacy-rights/texas-data-privacy-and-security-act",
      publisher: "Office of the Texas Attorney General",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
    {
      id: "tx-rule-3334-sourcing",
      claim: "Texas Comptroller Rule 3.334 amended effective January 5, 2024: for Texas sellers, local sales tax is generally sourced to the place of business where the order is fulfilled (origin sourcing)",
      url: "https://www.salestaxinstitute.com/?p=18931",
      publisher: "Sales Tax Institute",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
