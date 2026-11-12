// Geo v5 S2, page 2 of 18: Chicago, service format (template approved on the
// Charlotte pilot, 2026-11-08). Rendered by ServicePageTemplate.
//
// Keywords (v5 plan 3.2; SERP checked 2026-11-08, SEMrush KD 5%, Ahrefs KD 0,
// top results have ~0 backlinks and win on exact wording):
//   primary    shopify website design company chicago (90 / 100)
//   secondary  shopify experts chicago (40): "Are you Shopify experts" FAQ + meta
//              shopify web developers chicago (10): development service block
//   variants   shopify design company chicago, shopify website company chicago,
//              shopify expert chicago
// Kept clear of /services/ecommerce-agency/chicago, which owns "ecommerce
// agency chicago" and "ecommerce website design chicago": this page never says
// "ecommerce website design". PAA was three cost questions: answered with no
// figures (owner rule: no prices).

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_CHICAGO: ServiceGeoPage = {
  type: "service",
  slug: "chicago",
  path: "/services/shopify-development-agency/chicago",
  hub: "/services/shopify-development-agency",
  geo: { name: "Chicago", type: "metro", areaServed: "Chicago, Illinois" },

  targetKeyword: "shopify website design company chicago",
  secondaryKeywords: ["shopify experts chicago", "shopify web developers chicago"],
  faqKeywords: ["shopify design company chicago", "shopify website company chicago", "shopify expert chicago"],
  metaTitle: "Shopify Website Design Company Chicago | Design and Development",
  metaDescription:
    "The Shopify website design company Chicago brands hire for custom design, theme builds, Shopify Plus and migrations. Shopify experts, fixed price, live in ~6 weeks.",
  shortTitle: "Shopify Website Design Company Chicago",
  serviceType: "Shopify website design",

  hero: {
    badge: "Shopify Website Design for Chicago Brands",
    h1Lead: "",
    h1Gradient: "Shopify Website Design Company",
    h1Tail: "Chicago Brands Hire to Design, Build and Grow the Store",
    intro:
      "A good-looking store that doesn't sell is an expensive brochure. As the Shopify website design company Chicago brands hire to fix that, we design your store around how your customers actually buy, then build it, launch it and keep improving it, with [link:/services/shopify-theme-development|custom theme development], [link:/services/shopify-plus-development|Shopify Plus] and [link:/services/migration|platform migrations] covered. You get a fixed price and a launch date in writing before design starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-chicago-hero-v1.webp",
      alt: "Shopify store designs for Sneak Energy, Evie Lou and Henchman, with mobile conversion up 68% and online revenue up 58%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores designed and built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify website design company Chicago brands hire for custom store design, theme development, Shopify Plus and platform migrations. Design and development come from one in-house team that works only on Shopify, with a fixed price and launch date in writing before design starts. Most stores go live in about six weeks.",

  trust: {
    heading: "Stores We Designed and Built for Brands Like These",
    subheading: "Each one was designed, built and launched by our own team, from the first wireframe to go-live.",
  },

  pains: {
    heading: "Is Your Store Design Costing You Orders?",
    intro:
      "If any of these sound like your store, a fresh coat of paint won't fix it, and no Shopify website design company Chicago brands hire should sell you one. The fix starts with how the store is laid out, before anyone opens Figma.",
    items: [
      {
        icon: "grid",
        name: "A Homepage That Looks Great and Sells Nothing",
        desc: "Big lifestyle images, a slogan, and the products three scrolls down. Visitors who arrived ready to buy have to hunt for what they came for, and on a phone most of them stop looking.",
        cost: "Your ad spend lands on a page that delays the sale instead of starting it.",
      },
      {
        icon: "search",
        name: "Shoppers Can't Find the Right Product",
        desc: "Menus built around how your team thinks about the catalog, not how customers look for things. Filters that miss sizes or materials, and a search bar that returns nothing for a typo.",
        cost: "Every dead end is a shopper who leaves for another store selling the same thing.",
      },
      {
        icon: "alert",
        name: "Product Pages That Leave Questions Unanswered",
        desc: "No fit guidance, no delivery date, reviews hidden at the bottom, and one photo where the buyer needed five. Unanswered questions turn into abandoned carts, or into returns.",
        cost: "Returns and support emails eat the margin on the orders you do win.",
      },
      {
        icon: "code",
        name: "A Design Your Team Can't Change Without a Developer",
        desc: "A campaign banner should take minutes. When every change means a ticket and a wait, launches slip and the store goes stale between seasons.",
        cost: "You pay developer hours for edits your marketing team should make themselves.",
      },
    ],
  },

  services: {
    label: "Design and Development",
    heading: "Shopify Website Design and Development, Under One Roof",
    intro:
      "Chicago brands get design and code from one in-house team of Shopify designers and Shopify web developers, so nothing gets lost between the mockup and the live store. When you're ready for more traffic, we also handle [link:/services/shopify-seo-agency|Shopify SEO] and [link:/services/shopify-cro-agency|conversion rate optimization].",
    // Visual rows (owner, 2026-11-12): 8 services merged to 6, each with a
    // case study the page's own case-studies section doesn't use.
    items: [
      {
        title: "Custom Shopify Website Design",
        heading: "Pages planned around how your customers shop, then designed to match",
        body: "We map the path from first page to checkout before anyone opens Figma, then design every page for desktop and mobile for you to approve.",
        covers: ["Figma design", "Navigation", "Collection layout", "Product pages", "Mobile design"],
        caseSlug: "chlobo-shopify-plus-migration",
        imageAlt: "ChloBo jewelry storefront designed page by page in Figma",
        cta: { label: "Explore UX and UI design", href: "/services/shopify-ux-and-ui-design" },
      },
      {
        title: "Shopify Web Development",
        heading: "Your approved design, built as a theme your own team can run",
        body: "Our Shopify web developers turn the design into a custom theme with editable sections, product metafields and links to your reviews, subscriptions and loyalty apps.",
        covers: ["Custom theme", "Editable sections", "Metafields", "App connections", "ERP links"],
        caseSlug: "feetures-shopify-theme-development",
        imageAlt: "Feetures sock store built as a custom Shopify theme",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Redesign Without Starting Over",
        heading: "A fresh look that keeps the rankings, reviews and logins you already earned",
        body: "We redesign on top of the store you have, so URLs, customer accounts and search visibility carry straight through.",
        covers: ["URL retention", "Review history", "Customer accounts", "SEO checks", "Staged rollout"],
        caseSlug: "111skin-shopify-cro-redesign",
        imageAlt: "111SKIN Shopify storefront",
        cta: { label: "Explore store audits", href: "/services/shopify-store-audit" },
      },
      {
        title: "Shopify Plus and B2B Design",
        heading: "Trade buyers and retail shoppers, each with a store shaped for them",
        body: "Company accounts, trade pricing, payment terms and wholesale catalogs, designed so neither audience wades through the other's pages.",
        covers: ["Company accounts", "Trade pricing", "Payment terms", "Wholesale catalog", "Shopify Plus"],
        caseSlug: "mouldings-one-shopify-b2b-portal",
        imageAlt: "Mouldings One trade portal designed for designers and contractors",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        title: "Platform Migration",
        heading: "Off WooCommerce, Magento or Wix with every order and redirect intact",
        body: "Products, customers, orders and reviews move across, and each old URL points to its new page so Google follows you.",
        covers: ["WooCommerce", "Magento", "BigCommerce", "Wix", "301 redirects"],
        caseSlug: "john-hardy-shopify-plus-migration",
        imageAlt: "John Hardy jewelry store after its move to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        title: "Speed and Design Support",
        heading: "Light enough to load fast on a phone, looked after long after launch",
        body: "Compressed images, fewer app scripts and Core Web Vitals checked before go-live, then 60 days of support and an optional retainer for new landing pages.",
        covers: ["Core Web Vitals", "Image compression", "App cleanup", "Landing pages", "Monthly retainer"],
        caseSlug: "daring-headless-shopify-hydrogen",
        imageAlt: "Daring plant-based food store on a fast headless frontend",
        cta: { label: "Explore speed optimization", href: "/services/shopify-speed-optimization" },
      },
    ],
  },

  local: {
    label: "Selling from Chicago",
    heading: "What Selling from Chicago Means for Your Store",
    intro:
      "Three things should shape the work of any Shopify website design company Chicago brands choose: how fast you can ship, which sales tax applies, and who your buyers are.",
    items: [
      {
        icon: "truck",
        name: "Shipping from the Middle of the Country",
        desc: "Six of the seven Class I freight railroads converge on Chicago, and nearly a quarter of US rail shipments start, end or pass through it. If your stock sits near the city, a short delivery promise across the Midwest is often realistic. We design it into the product page, with delivery dates by ZIP code and local pickup where you offer it.",
      },
      {
        icon: "receipt",
        name: "Illinois Sales Tax, Set Up Right",
        desc: "Chicago's combined sales tax rate rose to 10.5% on August 1, 2026. Selling into Illinois from another state? Once your Illinois sales pass $100,000 a year you collect at the buyer's local rate, and the old 200-order test ended on January 1, 2026. We set up Shopify Tax so each order carries the right rate. Your accountant still handles registration and filing.",
      },
      {
        icon: "store",
        name: "Designing for Trade Buyers",
        desc: "Chicago's Merchandise Mart is the largest wholesale design center in the world, and the designers, buyers and stockists who shop it expect to order online too. If you sell to the trade, we design a separate path for them: trade logins, net pricing, sample requests and quick reorder, without cluttering the retail store.",
      },
    ],
  },

  caseStudies: {
    heading: "Shopify Redesigns With the Numbers to Show for It",
    intro: "Matched to the industries below: a food and drink brand, an industrial supplier and an apparel brand.",
    items: [
      {
        slug: "sneak-energy-shopify-redesign",
        tags: ["Food and Drink", "Mobile-First Redesign", "Bundle Builder"],
        description: "An energy drink powder brand with mostly mobile traffic got a mobile-first redesign and a custom bundle builder. Mobile conversion rate rose 68% and add-to-cart rate 52%.",
        video: "/images/Case%20studies/Sneak%20video.mp4",
      },
      {
        slug: "henchman-shopify-plus-b2b",
        tags: ["Industrial B2B", "Shopify Plus", "Magento Exit"],
        description: "A ladder and access equipment specialist left Magento for a Shopify Plus store with self-service wholesale ordering. Online revenue grew 58% and wholesale order processing time fell 70%.",
        video: "/images/Case%20studies/Henchman%20video.mp4",
      },
      {
        slug: "evie-lou-shopify-fashion-cro",
        tags: ["Apparel", "Store Redesign", "Product Discovery"],
        description: "A women's fashion brand rebuilt its store around mobile shopping and easier product discovery. Conversion rate rose 82% and average order value 31%.",
        video: "/images/Case%20studies/evie-lou%20video.mp4",
      },
    ],
  },

  process: {
    heading: "Design First, Then Build: How Your Project Runs",
    intro: "Five stages, each signed off by you before the next one starts: the order any Shopify website design company Chicago brands trust should work in. Most stores are live about six weeks after kickoff.",
    steps: [
      { title: "Discovery and Fixed Quote", desc: "We study your store, your analytics and your best customers, then agree the scope, a fixed price and a launch date in writing." },
      { title: "Structure and Wireframes", desc: "Navigation, page layouts and the path to checkout, laid out in plain wireframes first, so we agree how the store works before deciding how it looks." },
      { title: "Visual Design", desc: "Full designs in Figma for desktop and mobile, in your brand. You comment right on the screens, and we revise until you sign off." },
      { title: "Build and Test", desc: "We build the theme on a staging copy of your store, connect your apps and data, and test every page, device and checkout path, including tax and shipping rules." },
      { title: "Launch and Improve", desc: "Go-live with a rollback plan, then 60 days of support. We watch the numbers after launch and fix anything that slows shoppers down." },
    ],
  },

  compare: {
    heading: "Building Your Shopify Website Design Company Chicago Shortlist",
    intro: "You will usually weigh three options against a Shopify specialist. Each one suits a different kind of store.",
    options: [
      {
        name: "Freelance Shopify designer",
        goodFor: "Small changes, a single landing page, or a lean first launch.",
        watchFor: "One person covers design, code and support, so a holiday, an illness or a busy month all land on your launch date.",
      },
      {
        name: "General web design agency",
        goodFor: "A strong brand look across your whole website, not just the store.",
        watchFor: "Shopify may be a side platform for them. Ask to see stores they built, with results, not just screenshots.",
      },
      {
        name: "Large digital agency",
        goodFor: "Very large budgets that also cover media, brand and apps.",
        watchFor: "The senior people who pitch are not always the people who design and build. Ask who will actually work on your store.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores designed and built",
        "Design and development by the same in-house team",
        "Fixed price and launch date agreed before design starts",
        "Case studies with real numbers, not just screenshots",
        "You own the designs, the code and every account",
      ],
    },
  },

  industries: {
    heading: "Industries We Design Shopify Stores For",
    intro:
      "The Chicago region has the largest food and beverage manufacturing sector in the US and the largest wholesale design center in the world. Here is what a Shopify website design company Chicago brands hire should change in the design for each kind of store.",
    items: [
      { icon: "food", name: "Food and Beverage", desc: "Subscriptions, bundles and gift sets, ingredient and allergen details shoppers can find fast, and shipping rules for perishables." },
      { icon: "home", name: "Home and Furniture", desc: "Swatches and finishes shown properly, room-scene photography, freight delivery options, and trade accounts for designers." },
      { icon: "box", name: "Industrial and B2B Supply", desc: "Fast search by part number, bulk and quick reorder, price breaks by quantity, and account pricing for trade buyers. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
      { icon: "shirt", name: "Apparel and Accessories", desc: "Fit guidance that cuts returns, lookbooks that link straight to products, and collections that change with the season." },
      { icon: "star", name: "Health and Beauty", desc: "Shade and skin-type finders, routines that bundle products together, and subscriptions for the things customers reorder." },
      { icon: "flag", name: "Sports and Fan Gear", desc: "Team and player collections, drop pages for game days and new jerseys, and stock limits that hold when demand spikes." },
    ],
    footnote: "Selling something else? We design for every category, always on Shopify.",
  },

  faqHeading: "Shopify Website Design FAQs for Chicago Brands",
  faqs: [
    {
      question: "How much does a Shopify website designer cost?",
      answer:
        "It depends on how many pages need custom design, how big your catalog is and what has to be built, so we don't publish a price list. That's why a Shopify website design company Chicago quote should be one fixed price in writing, not an hourly estimate. Ours arrives within 48 hours of a short online call and doesn't change unless you add to the scope.",
      unique: false,
    },
    {
      question: "Can I pay someone to build my Shopify website?",
      answer:
        "Yes. You can hire a freelancer, a general web agency or a Shopify design company like us. We design and build the whole store, connect your apps, move your data and launch it, so your job is to approve the work rather than do it.",
      unique: true,
    },
    {
      question: "Does my Shopify designer need to be local to Chicago?",
      answer:
        "No. Design reviews happen on screen whoever you hire, so what matters is the work and how easy the team is to reach. We run projects through online calls, shared Figma files and a staging copy of your store, with written updates every week.",
      unique: true,
    },
    {
      question: "What is the difference between Shopify website design and development?",
      answer:
        "Design decides how the store looks and how shoppers move through it. Development turns those designs into working code: the theme, the features and the integrations. We do both in-house, so nothing is lost between the approved design and the live store.",
      unique: true,
    },
    {
      question: "Are you Shopify experts for Chicago brands, or general web designers?",
      answer:
        "Shopify experts. Every Shopify expert on your project works only on Shopify and Shopify Plus, and together we have designed and built 150+ stores on it. That focus lets us tell you what Shopify does out of the box and what needs custom work before you pay for any of it.",
      unique: true,
    },
    {
      question: "How long does a Shopify redesign take?",
      answer:
        "Most redesigns go live about six weeks after kickoff: one to two weeks of discovery and wireframes, about two weeks of visual design, then build and testing. Large catalogs and Shopify Plus B2B work take longer. You get the launch date in writing before we start.",
      unique: false,
    },
    {
      question: "Will a redesign hurt my Google rankings?",
      answer:
        "Not if it is planned. We keep your URLs where we can, redirect the ones that change, and carry over titles, descriptions and structured data. After launch we watch Search Console for 30 days and fix anything that drops.",
      unique: true,
    },
    {
      question: "Do you set up Illinois sales tax in Shopify?",
      answer:
        "Yes. We configure Shopify Tax so each order carries the right rate, including Chicago's 10.5% combined rate from August 1, 2026. If you sell into Illinois from another state, you collect at the buyer's local rate once your Illinois sales pass $100,000 a year. We handle the store setup; your accountant handles registration and filing.",
      unique: true,
    },
  ],

  book: {
    heading: "Book Your Free Shopify Design Call",
    sub: "Choose a time for an online call with a senior Shopify designer and developer. Show us your store and what you want it to do, and within 48 hours you get a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your store: design, structure, speed and what is holding it back",
      "Get a fixed price and a launch date within 48 hours",
      "Learn what Shopify does natively and what needs custom design or code",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "idor-nita-rate",
      claim: "NITA (formerly RTA) rate in Cook County up 0.25% to 1.25% from August 1, 2026; Chicago combined general merchandise rate 10.5% (6.25 state + 1.75 Cook + 1.25 city + 1.25 NITA)",
      url: "https://tax.illinois.gov/research/publications/bulletins/fy-2026-34.html",
      publisher: "Illinois Department of Revenue",
      captured: "2026-11-08",
      reviewAfterDays: 180,
    },
    {
      id: "idor-remote-threshold",
      claim: "Remote retailer threshold is $100,000 in Illinois gross receipts only; 200-transaction test eliminated January 1, 2026",
      url: "https://tax.illinois.gov/research/publications/bulletins/fy-2026-12.html",
      publisher: "Illinois Department of Revenue",
      captured: "2026-11-08",
      reviewAfterDays: 180,
    },
    {
      id: "idor-destination",
      claim: "Remote retailers collect destination-based tax at the purchaser's location rate (Public Act 103-983, from January 1, 2025)",
      url: "https://tax.illinois.gov/research/taxinformation/sales/destination-based-sales-tax-assistance.html",
      publisher: "Illinois Department of Revenue",
      captured: "2026-11-08",
      reviewAfterDays: 180,
    },
    {
      id: "fhwa-create",
      claim: "Six of the seven Class I freight railroads converge in Chicago; nearly a quarter of US rail shipments arrive or pass through",
      url: "https://www.fhwa.dot.gov/ipd/project_profiles/il_create.aspx",
      publisher: "Federal Highway Administration",
      captured: "2026-11-08",
      reviewAfterDays: 365,
    },
    {
      id: "wbc-food",
      claim: "Chicago's traditional food and beverage manufacturing sector is the largest in the US (World Business Chicago report)",
      url: "https://www.powderbulksolids.com/food-beverage/report-highlights-chicagos-food-innovation-ecosystem",
      publisher: "World Business Chicago, via Powder & Bulk Solids",
      captured: "2026-11-08",
      reviewAfterDays: 365,
    },
    {
      id: "britannica-mart",
      claim: "The Merchandise Mart is the largest wholesale design center in the world",
      url: "https://www.britannica.com/topic/Merchandise-Mart",
      publisher: "Encyclopaedia Britannica",
      captured: "2026-11-08",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
