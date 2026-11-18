// Geo v5 S5, Shopify dev Phase 2a, page 7 of 15: Boise (metro), service format.
//
// Keywords (v5 plan 3.3):
//   primary    shopify developer boise (SEMrush 10 / Ahrefs 10, KD 0).
//              Google rewrites to "shopify development boise"; no Jobs pack.
//   secondary  shopify agency boise (KD 7)
// SERP (2026-11-18, location applied): 100xelevate #1 and #7 (app page),
// Better Together, Click Biscuit, Mozack, Netalico, FactoryJet; Solo Media and
// Shero already pitch outdoor brands, so this page doesn't. Both AI Overviews
// ask: new store or theme, migrate to Plus, or fix performance.
// H1 owner pick #1 ("Custom Themes, Plus Migrations and Speed Fixes").
// Chilly's is headless on Commerce Layer, not Shopify, so it is not used for
// the speed proof; Denim Tears (Shopify Hydrogen) is.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_BOISE: ServiceGeoPage = {
  type: "service",
  slug: "boise",
  path: "/services/shopify-development-agency/boise",
  hub: "/services/shopify-development-agency",
  geo: { name: "Boise", type: "metro", areaServed: "Boise, Idaho" },

  targetKeyword: "shopify developer boise",
  secondaryKeywords: ["shopify agency boise"],
  faqKeywords: [],
  metaTitle: "Shopify Developer Boise | Custom Themes, Plus Moves, Speed Fixes",
  metaDescription:
    "Looking for a Shopify developer? Boise brands hire us for custom themes, Shopify Plus migrations and speed fixes, at a fixed price agreed upfront.",
  shortTitle: "Shopify Developer Boise",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Development for Boise Brands",
    h1Lead: "",
    h1Gradient: "Shopify Developer",
    h1Tail: "Boise Brands Hire for Custom Themes, Plus Migrations and Speed Fixes",
    intro:
      "Your theme no longer fits how you sell, your platform is holding you back, or your pages take too long to load on a phone. Each one is a job for a Shopify developer. Boise brands hire our team for [link:/services/shopify-theme-development|custom themes], [link:/services/shopify-plus-development|Shopify Plus migrations] and [link:/services/shopify-speed-optimization|speed fixes], at a fixed price agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-boise-hero-v1.webp",
      alt: "Shopify stores for John Hardy, 111SKIN and Denim Tears, with conversion rate up 71% and page load time down 45%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency that builds custom themes, moves stores onto Shopify Plus and fixes slow ones for Boise and Treasure Valley brands, Meridian and Nampa included. A new theme suits a store that has outgrown its template; Plus suits brands needing checkout control or wholesale. Every project has a fixed price and date in writing.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "Wondering what good work from a Shopify developer looks like? Boise brands can judge by these: custom themes, platform moves and speed rebuilds, all built in-house.",
  },

  pains: {
    heading: "Signs Your Store Needs Developer Time",
    intro:
      "Most stores run fine on a template until they don't. These four problems are the usual reason to call a Shopify developer. Boise or anywhere else, here is what each one costs you.",
    items: [
      {
        icon: "alert",
        name: "A Theme You Keep Working Around",
        desc: "Every new product, promotion or landing page needs a workaround, an extra app or a call to whoever set the theme up years ago.",
        cost: "Slow launches and a store that looks pieced together.",
      },
      {
        icon: "layers",
        name: "A Platform Holding You Back",
        desc: "WooCommerce plugins clash, Magento needs a developer for small changes, or you've outgrown standard Shopify's checkout and wholesale options.",
        cost: "Money spent maintaining the platform instead of growing on it.",
      },
      {
        icon: "clock",
        name: "Pages That Load Slowly on a Phone",
        desc: "Large images, stacked apps and old scripts make every page wait. Most of your visitors are on a phone, and they don't wait long.",
        cost: "Paid clicks that leave before the page appears.",
      },
      {
        icon: "receipt",
        name: "Tax Copied From Another State's Settings",
        desc: "Groceries marked tax-exempt, or one rate charged everywhere, because the settings came from a template built for somewhere else.",
        cost: "Under-collected tax you end up paying yourself.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Boise Brands",
    intro:
      "Every project is designed and developed by our own Shopify team, never passed to subcontractors. After launch, we can also take on [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO].",
    // Visual rows; the page's own case studies (111SKIN, John Hardy, Denim
    // Tears) are not reused here.
    items: [
      {
        title: "Custom Theme Development",
        heading: "A theme built for your range, so new launches don't need workarounds",
        body: "Custom sections your team can rearrange, collection pages built around how customers shop, and product pages with everything they ask about. Feetures' rebuilt theme lifted add-to-cart rate 32%.",
        covers: ["Custom theme", "Editable sections", "Collection pages", "Product pages", "Mobile design"],
        caseSlug: "feetures-shopify-theme-development",
        imageAlt: "Feetures performance sock store on a custom Shopify theme",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Shopify Plus Migrations",
        heading: "Onto Shopify Plus with every product, customer and URL intact",
        body: "Products, customers, order history and reviews moved from Magento, WooCommerce or standard Shopify, every URL redirected, then Plus checkout and automation set up. This Works moved to Shopify Plus and grew conversion rate 38%.",
        covers: ["Magento", "WooCommerce", "Standard to Plus", "301 redirects", "Shopify Flow"],
        caseSlug: "this-works-shopify-plus-migration",
        imageAlt: "This Works skincare store migrated to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        title: "Speed and Performance Fixes",
        heading: "Find what slows each page down, then remove it",
        body: "We measure every template, compress images, remove unused apps and scripts, and fix layout shifts, then check Core Web Vitals again. Sneak Energy's rebuild brought load time under three seconds and lifted mobile conversion rate 68%.",
        covers: ["Core Web Vitals", "Image compression", "App cleanup", "Script audit", "Layout shift"],
        caseSlug: "sneak-energy-shopify-redesign",
        imageAlt: "Sneak Energy store rebuilt for mobile speed",
        cta: { label: "Explore speed optimization", href: "/services/shopify-speed-optimization" },
      },
      {
        title: "Food Stores and Tax Setup",
        heading: "Food taxed correctly, plus gift boxes that lift every order",
        body: "Product categories set so food is taxed the way Idaho taxes it, plus gift boxes, bundles and ship-day rules. Candy Kittens' store rebuilt around gifting lifted conversion rate 182%.",
        covers: ["Shopify Tax", "Food categories", "Gift boxes", "Bundles", "Ship-day rules"],
        caseSlug: "candy-kittens-shopify-food-beverage-cro",
        imageAlt: "Candy Kittens confectionery store built around gifting",
      },
      {
        title: "Subscriptions and Repeat Orders",
        heading: "Regular customers on autopilot, with a portal to skip or swap",
        body: "Subscribe-and-save on any product, a customer portal for changing the next order and renewal emails that keep churn down. Wild grew to more than 80,000 monthly subscribers.",
        covers: ["Subscriptions", "Customer portal", "Skip and swap", "Renewal emails", "Churn reports"],
        caseSlug: "wild-shopify-plus-subscriptions",
        imageAlt: "Wild refillable personal care subscriptions on Shopify",
      },
      {
        title: "Conversion Work and Support",
        heading: "Tested improvements after launch, and help when you need it",
        body: "A/B tests on product pages and checkout, plus 60 days of fixes with every build and a monthly plan if you want one. Twillory kept 70% of its tests as winners and added $5.4M in new annual revenue.",
        covers: ["A/B testing", "Analytics", "Checkout tests", "60-day support", "Monthly plan"],
        caseSlug: "twillory-shopify-cro",
        imageAlt: "Twillory shirt store improved through A/B testing",
        cta: { label: "Explore conversion optimization", href: "/services/shopify-cro-agency" },
      },
    ],
  },

  local: {
    label: "Selling from Boise",
    heading: "What Idaho Means for Your Store",
    intro:
      "Three Idaho rules shape how a Boise store should be set up. Settle each one with your Shopify developer. Boise brands selling food or using state labels meet them first.",
    items: [
      {
        icon: "receipt",
        name: "A Flat 6%, Except in Resort Towns",
        desc: "Idaho has no general local sales tax, so an order to a Boise address carries the 6% state rate and nothing more. About two dozen resort cities, Sun Valley, Ketchum and McCall among them, add 1% to 4% of their own. Your store has to charge by delivery address so those orders come out right; your accountant handles registration and filing.",
      },
      {
        icon: "food",
        name: "Groceries Are Still Taxed",
        desc: "Idaho is one of the few states that taxes groceries at the full state rate, giving residents a credit on their income tax instead. A 2026 ballot measure to repeal it was withdrawn in April. If you sell food, don't copy tax-exempt settings from another state's template; your accountant confirms how each product should be treated.",
      },
      {
        icon: "flag",
        name: "The Idaho Preferred Logo",
        desc: "Idaho Preferred is the Idaho State Department of Agriculture's program for Idaho food and farm products, and only approved members may use its logo. If you're a member, show the badge from product data, so it appears only on approved products and a new product never carries it by accident.",
      },
    ],
  },

  caseStudies: {
    heading: "Custom Themes, Plus Migrations and Speed: Three Results",
    intro:
      "One project for each kind of work you might hire a Shopify developer for. Boise brands can compare like for like: each comes with measured results.",
    items: [
      {
        slug: "111skin-shopify-cro-redesign",
        tags: ["Custom Theme", "Skin Quiz", "Skincare"],
        description: "A luxury skincare brand rebuilt its Shopify Plus store on a custom theme with a skin quiz, planned from a data-led roadmap. Conversion rate rose 46% and revenue 21%.",
        video: "/images/Case%20studies/111skin%20video.mp4",
      },
      {
        slug: "john-hardy-shopify-plus-migration",
        tags: ["Plus Migration", "Salesforce to Shopify", "Jewelry"],
        description: "A luxury jewelry brand moved from Salesforce Commerce Cloud to Shopify Plus in under three months, launched in time for Black Friday, and grew conversion rate 71%.",
        video: "/images/Case%20studies/John%20Hardy%20video.mp4",
      },
      {
        slug: "denim-tears-headless-shopify-hydrogen",
        tags: ["Speed", "Headless Shopify", "Fashion"],
        description: "A fashion label needed pages that loaded fast under heavy launch traffic. We built a headless Shopify storefront on Hydrogen; load time fell 45% and conversion rate rose 38%.",
        video: "/images/Case%20studies/Denim%20Tears%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How Theme, Migration and Speed Projects Run",
    intro:
      "Five stages, each approved by you before the next begins. That's how a project with a Shopify developer should run. Boise projects typically go live about six weeks after the first call.",
    steps: [
      { title: "Audit and Quote", desc: "We review your theme, platform and page speed, then write down what to build, move or fix, with one price and a date." },
      { title: "Design or Migration Map", desc: "New page designs for phone and desktop, or a map of every product, customer and URL that moves. You sign it off first." },
      { title: "Build on Staging", desc: "All work happens on a staging store, so your live store keeps selling while we build." },
      { title: "Test Speed and Orders", desc: "Core Web Vitals on every template, test orders, Idaho tax by address and redirects, all checked before launch." },
      { title: "Switch Over and Support", desc: "We go live at a quiet hour, watch orders, speed and rankings, and handle fixes for 60 days." },
    ],
  },

  compare: {
    heading: "Shopify Agency, Boise Freelancer or Template Shop?",
    intro: "Before hiring a Shopify developer, Boise owners tend to weigh three kinds of help. Each fits someone; these questions show which fits you.",
    options: [
      {
        name: "Freelance developer",
        goodFor: "Small theme edits and single features.",
        watchFor: "A Plus migration or a full theme rebuild is a lot for one person. Ask who tests it and who answers after launch.",
      },
      {
        name: "Multi-platform web studio",
        goodFor: "Brochure sites on Squarespace or WordPress, branding and copy.",
        watchFor: "Shopify themes, Plus checkout and migrations are their own specialty. Ask how many Shopify Plus stores they've moved.",
      },
      {
        name: "Premium theme plus apps",
        goodFor: "A quick launch with standard features.",
        watchFor: "Every app adds a script and a fee. Ask what the store will weigh, and cost, once the apps are in.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Themes, Plus migrations and speed work in-house",
        "One fixed price and date, in writing",
        "Real numbers from every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Every category asks something different of its store. Before you brief a Shopify developer, Boise brands in these categories should list the following.",
    items: [
      { icon: "food", name: "Food and Specialty Goods", desc: "Correct food tax, gift boxes, Idaho Preferred badges and ship-day rules." },
      { icon: "shirt", name: "Apparel and Accessories", desc: "Size guides, fast collection pages and new-season launches." },
      { icon: "star", name: "Health and Beauty", desc: "Product quizzes, subscriptions and pages that load fast on a phone." },
      { icon: "home", name: "Home and Garden", desc: "Large option sets, freight delivery and seasonal collections." },
      { icon: "paw", name: "Pet Products", desc: "Recurring orders, pet profiles and reorder reminders." },
      { icon: "box", name: "Wholesale and Trade", desc: "Company accounts and price lists on Shopify Plus. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Developer Boise FAQs",
  faqs: [
    {
      question: "Should I customize my theme or build a new one?",
      answer:
        "If your theme mostly fits and a few pages need work, customize it. If every launch needs a workaround or the store is slow at its core, a custom theme costs less over time. We'll look at yours and recommend one in writing.",
      unique: true,
    },
    {
      question: "When is it worth moving to Shopify Plus?",
      answer:
        "When you need checkout customization, wholesale with company accounts, more automation or several storefronts. Many brands never need it, and we'll say so if that's you.",
      unique: true,
    },
    {
      question: "What makes a Shopify store slow?",
      answer:
        "Usually large images, too many apps each adding scripts, and theme code that loads everything on every page. We measure each template, remove what isn't earning its place and recheck Core Web Vitals.",
      unique: true,
    },
    {
      question: "How should my store handle Idaho sales tax?",
      answer:
        "Charge by delivery address: 6% for most of Idaho, plus local tax in resort cities, and tax food unless your accountant says a product is exempt. We set that up in Shopify Tax and test it with real addresses.",
      unique: true,
    },
    {
      question: "Do I need an agency or a freelancer?",
      answer:
        "A freelancer suits a small edit. A theme rebuild, a Plus migration or a speed overhaul needs design, development, testing and support working together, which is what an agency provides.",
      unique: false,
    },
    {
      question: "Will a migration hurt my search rankings?",
      answer:
        "It shouldn't. Every old URL is redirected to its new page, product content comes across intact, and we watch your rankings for a month after launch.",
      unique: false,
    },
    {
      question: "How much does Shopify development cost?",
      answer:
        "It depends on whether you need a theme, a migration or speed work, so we quote per project, not per hour. You'll have a written scope, one fixed price and a date within 48 hours of a short call.",
      unique: false,
    },
    {
      question: "How long does a project take?",
      answer:
        "About six weeks for most themes and migrations, and less for a focused speed fix. We work back from the date that matters to you and put it in the scope.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a time for a video call with a senior Shopify specialist. Tell us what's slowing your store down; within two working days you'll have a written price and date.",
    bullets: [
      "Talk through your theme, your platform and your page speed",
      "Find out whether you need a new theme, a migration or a fix",
      "Get a fixed price and a date within 48 hours",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "id-sales-tax-resort",
      claim: "Idaho's state sales tax is 6%; Idaho has no general local sales tax, so Boise's rate is 6%; local option taxes of 1% to 4% apply only in designated resort cities such as Sun Valley, Ketchum and McCall",
      url: "https://stripe.com/us/resources/more/idaho-sales-tax-rate",
      publisher: "Stripe",
      captured: "2026-11-18",
      reviewAfterDays: 365,
    },
    {
      id: "id-boise-rate",
      claim: "Boise, ID combined sales tax rate is 6% (2026); Boise is not a resort city",
      url: "https://trykintsugi.com/sales-tax-guides/usa/idaho/boise",
      publisher: "Kintsugi",
      captured: "2026-11-18",
      reviewAfterDays: 180,
    },
    {
      id: "id-grocery-tax",
      claim: "Idaho taxes groceries at the 6% state rate and offers residents a grocery credit on the state income tax return; the 2026 ballot initiative to repeal the food tax was withdrawn in April 2026",
      url: "https://www.eastidahonews.com/?p=735137",
      publisher: "East Idaho News",
      captured: "2026-11-18",
      reviewAfterDays: 180,
    },
    {
      id: "id-preferred-program",
      claim: "Idaho Preferred is a voluntary Idaho State Department of Agriculture program identifying and promoting Idaho food and agricultural products; rules (IDAPA 02.01.04) set requirements for using the logo",
      url: "https://agri.idaho.gov/wp-content/uploads/directors-office/ArchivedRuleMaking/IDAPA-Rules-Governing-Idaho-Preferred-Program-02.01.04.pdf",
      publisher: "Idaho State Department of Agriculture",
      captured: "2026-11-18",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
