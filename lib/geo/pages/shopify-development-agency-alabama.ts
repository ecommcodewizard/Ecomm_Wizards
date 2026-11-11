// Geo v5 S2, page 16 of 18: Alabama (state), service format.
//
// Keywords (v5 plan 3.2; SEMrush/Ahrefs 2026-11-12):
//   primary    shopify agency alabama (~0/mo, KD 7): programme target state
//   secondary  shopify experts birmingham al (SEMrush 40, Ahrefs 50, KD 12):
//              SERP checked, Birmingham landing pages plus the Partner
//              Directory, hire intent. Owns the Birmingham block.
// The "al" keeps the secondary on Birmingham, Alabama, not the UK. Page 1
// for the primary is all agency landing pages; 100xelevate holds three
// (headless, app development, Montgomery), each ~29k words, 0 ref domains.
// H1 owner pick #2 ("stores that sell across the country"). Angle: Alabama
// brands selling nationwide. Tax: in-state sellers charge state + local by
// address; the flat 8% SSUT is only for sellers with no Alabama presence.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_ALABAMA: ServiceGeoPage = {
  type: "service",
  slug: "alabama",
  path: "/services/shopify-development-agency/alabama",
  hub: "/services/shopify-development-agency",
  geo: { name: "Alabama", type: "state", areaServed: "Alabama" },

  targetKeyword: "shopify agency alabama",
  secondaryKeywords: ["shopify experts birmingham al"],
  faqKeywords: ["alabama shopify agency"],
  metaTitle: "Shopify Agency Alabama | Stores That Sell Nationwide",
  metaDescription:
    "The Shopify agency Alabama brands hire for stores that sell across the country: custom themes, Shopify Plus, wholesale and migrations, at a fixed price agreed upfront.",
  shortTitle: "Shopify Agency Alabama",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Alabama Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Alabama Brands Hire for Stores That Sell Across the Country",
    intro:
      "Your best customers might live three states away. Your store should win them over the first time they land on it: fast, trustworthy and easy to buy from. We're the Shopify agency Alabama brands hire for that: [link:/services/shopify-theme-development|custom themes], [link:/services/shopify-plus-development|Shopify Plus], wholesale and [link:/services/migration|migrations], at a fixed price agreed before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-alabama-hero-v1.webp",
      alt: "Shopify stores for Ronaldo Jewelry, Twillory and Mouldings One, with total sales up 250% and B2B revenue up 50%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency Alabama brands hire for stores that sell across the country: custom themes, Shopify Plus, wholesale portals and migrations, with Birmingham, Huntsville, Montgomery and Mobile brands served online. The team works only on Shopify, has built 150+ stores, and agrees a fixed price and launch date in writing before work starts.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "Every store was designed, built and launched in-house by our own Shopify team.",
  },

  pains: {
    heading: "Why Out-of-State Shoppers Don't Buy",
    intro:
      "A shopper who has never heard of you decides in seconds whether to trust your store. These are the four problems a Shopify agency Alabama brands hire should fix first.",
    items: [
      {
        icon: "star",
        name: "A Store That Doesn't Look Trustworthy",
        desc: "Shoppers who know you locally forgive an old design. New customers from other states don't; dated pages and missing reviews read as risk.",
        cost: "They leave for a bigger name they already know.",
      },
      {
        icon: "clock",
        name: "Slow Pages on a Phone",
        desc: "Most new visitors arrive from an ad or a search on their phone. Heavy images and stacked apps make the first page crawl.",
        cost: "You pay for the click and lose the visit.",
      },
      {
        icon: "truck",
        name: "Shipping Costs Shown Too Late",
        desc: "Delivery prices and times that only appear at checkout surprise shoppers far from you.",
        cost: "Carts abandoned on the last step.",
      },
      {
        icon: "box",
        name: "Wholesale Run by Email and Phone",
        desc: "Retailers in other states want to reorder at night and on weekends, not wait for someone to answer the phone.",
        cost: "Slower reorders and more time spent on admin.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Alabama Brands",
    intro:
      "Our own Shopify team designs and builds every part of your store, nothing handed to subcontractors. After launch, we can also take on [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO].",
    items: [
      {
        title: "Custom Theme Development",
        body: "A fast custom theme with flexible sections and trust built in, so a first-time visitor sees reviews, guarantees and delivery times without hunting.",
      },
      {
        title: "Shopify Plus Builds",
        body: "When orders climb, Shopify Plus adds custom checkout steps, automated tagging and routing with Shopify Flow, and separate storefronts for new markets.",
      },
      {
        title: "Wholesale and B2B Portals",
        body: "Trade accounts with their own prices, terms and quick reorders, so retailers in any state buy from you without a phone call.",
      },
      {
        title: "Shipping and Delivery Setup",
        body: "Shipping rates, delivery dates and free-shipping thresholds shown on the product page, set up for customers near and far.",
      },
      {
        title: "Platform Migration",
        body: "Move from WooCommerce, Magento, Wix or Squarespace with products, customers, orders and reviews intact, and every old URL redirected.",
      },
      {
        title: "Product Configurators",
        body: "Builders for custom and made-to-order products, with live previews and prices, so shoppers can order exactly what they want online.",
      },
      {
        title: "Speed and Core Web Vitals",
        body: "We trim image weight, retire apps you've outgrown and tidy the code, so a visitor on rural mobile data still sees your page in a couple of seconds.",
      },
      {
        title: "Support After Launch",
        body: "Sixty days of fixes and questions come with every build. After that, keep us on a monthly plan or call us only when you need a new feature.",
      },
    ],
  },

  local: {
    label: "Selling from Alabama",
    heading: "What Selling from Alabama Means for Your Store",
    intro:
      "Three things change how an Alabama brand's store should be built: how Alabama taxes your in-state orders, the help Birmingham brands can call on, and customers spread across the country.",
    items: [
      {
        icon: "receipt",
        name: "Alabama Sales Tax Is Charged by Address",
        desc: "If you sell from an Alabama address, orders delivered in the state carry the 4% state rate plus the city and county rates where they arrive. The state's flat 8% simplified sellers use tax is only for sellers with no Alabama presence, so it isn't a shortcut for you. We set up Shopify Tax to charge every Alabama address correctly; your accountant handles registration and filing.",
      },
      {
        icon: "user",
        name: "Shopify Experts Birmingham, AL Brands Can Call On",
        desc: "Birmingham brands looking for Shopify help find solo developers, design studios and national partners. We work the same way for every client: online calls, a staging store you can test yourself, senior Shopify specialists on every build and one fixed price in writing.",
      },
      {
        icon: "truck",
        name: "Customers Across the Country",
        desc: "Sell to Georgia, Texas and California and each one eventually asks for its own sales tax once your orders there pass its limit. Shopify Tax watches those limits and warns you, while clear delivery dates on every product page give a shopper in Oregon the confidence to order from a brand they found yesterday.",
      },
    ],
  },

  caseStudies: {
    heading: "Stores That Grew Their Reach With Measured Results",
    intro:
      "Proof to ask of any Shopify agency Alabama brands consider: each store here sells well beyond its home market, and each result was measured.",
    items: [
      {
        slug: "ronaldo-jewelry-shopify-plus-redesign",
        tags: ["Handcrafted", "Product Configurator", "Shopify Plus"],
        description: "Shoppers can now design a handmade bracelet online, see it before they pay and check out with the guarantees a high-value order needs. Total sales rose 250% and conversion rate 120%.",
        video: "/images/Case%20studies/Ronaldo%20Jewelry-video.mp4",
      },
      {
        slug: "twillory-shopify-cro",
        tags: ["Apparel", "A/B Testing", "Theme Development"],
        description: "A direct-to-consumer shirt brand selling nationwide tested page after page against the original, keeping 70% of its tests as winners and adding $5.4M a year.",
        video: "/images/Case%20studies/Twillory%20video.mp4",
      },
      {
        slug: "mouldings-one-shopify-b2b-portal",
        tags: ["Building Supplies", "Trade Portal", "ERP Integration"],
        description: "Contractors and designers who used to phone in orders now log in, see live stock and reorder in minutes. B2B revenue grew 50% and the time to process each order fell 74%.",
        video: "/images/Case%20studies/Mouldings%20One%20video.mp4",
      },
    ],
  },

  process: {
    heading: "From Kickoff to a Store Ready for New Customers",
    intro:
      "You approve each of five stages before the next begins, which is how a Shopify agency Alabama brands trust should earn your sign-off. Expect a live store roughly six weeks from the first call.",
    steps: [
      { title: "Scope and Price in Writing", desc: "We review your store, your customers and your goals, then fix the scope, one price and a launch date in writing." },
      { title: "Design for First-Time Visitors", desc: "Figma designs for desktop and mobile, with trust, delivery and reviews planned into every page. You approve every screen." },
      { title: "Build on Staging", desc: "Theme, apps, wholesale and integrations built on a staging store you can click through at any time." },
      { title: "Test Every Order Path", desc: "Real test orders on every device, with tax, shipping to several states and discounts checked before launch." },
      { title: "Launch and Support", desc: "We switch the store on at a quiet hour, watch the first orders come through and hand you a short list of next improvements." },
    ],
  },

  compare: {
    heading: "What to Check on Your Shopify Agency Alabama Shortlist",
    intro: "Alabama owners usually weigh three kinds of help against us. Each has a place; these are the questions that separate them.",
    options: [
      {
        name: "Local design studio",
        goodFor: "Brand identity, photography and creative direction.",
        watchFor: "Great logos don't prove a store will sell. Ask what conversion did after their last Shopify launch.",
      },
      {
        name: "Freelance Shopify developer",
        goodFor: "Small fixes and single features.",
        watchFor: "A configurator, a wholesale portal and a migration at once is more than one person can carry, and holidays stop the work.",
      },
      {
        name: "Large national partner",
        goodFor: "Very large programs with big budgets.",
        watchFor: "Their minimums are often sized for national retailers, and a junior team may run your account.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Shopify Plus, B2B and configurators in-house",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Each category needs something different to sell beyond the state line. Here is what a Shopify agency Alabama brands hire should build in for each.",
    items: [
      { icon: "star", name: "Jewelry and Gifts", desc: "Configurators, engraving options, gift guides and trust for higher-value orders." },
      { icon: "shirt", name: "Apparel and Boutiques", desc: "Size guidance, new-arrival drops and fast collection pages on a phone." },
      { icon: "food", name: "Food and Sauces", desc: "Gift boxes, subscriptions and shipping rules for perishable orders." },
      { icon: "home", name: "Home and Outdoor Living", desc: "Large option sets, freight delivery and room-by-room collections." },
      { icon: "flag", name: "Hunting and Fishing Gear", desc: "Spec tables, comparisons and the age and shipping checks some products need." },
      { icon: "box", name: "Wholesale and Manufacturing", desc: "Account pricing, bulk ordering and reorders for trade buyers. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency FAQs for Alabama Brands",
  faqs: [
    {
      question: "What does an Alabama Shopify agency cost?",
      answer:
        "It depends on the scope, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours, and that number holds unless you add to the work.",
      unique: false,
    },
    {
      question: "Does my Shopify agency need to be local?",
      answer:
        "No. We run every project through online calls, a staging store you can test yourself and written weekly updates, with the scope, price and launch date agreed in writing first.",
      unique: false,
    },
    {
      question: "How do I find Shopify experts for a Birmingham, AL brand?",
      answer:
        "Look for live stores with measured results, ask who will work on your store day to day, and get the price and launch date in writing. Shopify's Partner Directory lists agencies and freelancers you can check the same way.",
      unique: true,
    },
    {
      question: "Can I use Alabama's flat 8% sales tax?",
      answer:
        "Only sellers with no physical presence in the state qualify. The simplified sellers use tax is meant for out-of-state sellers; an Alabama-based brand charges the state rate plus each city and county rate. We set up Shopify Tax for that; your accountant handles registration.",
      unique: true,
    },
    {
      question: "How do we win customers who've never heard of us?",
      answer:
        "Show reviews, delivery dates and returns before they ask, and make the first page fast on a phone. We build those into the theme rather than adding apps, then test what works with real visitors.",
      unique: true,
    },
    {
      question: "Can you build a configurator for custom products?",
      answer:
        "Yes. We build product builders with live previews and prices for engraving, made-to-order and custom pieces, so customers can order online instead of calling.",
      unique: true,
    },
    {
      question: "Can you move us off WooCommerce or Wix?",
      answer:
        "Yes. Your products, customer accounts, past orders and reviews come across, each old page points to its new address, and we track your search rankings for a month to catch anything that drops.",
      unique: false,
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Around six weeks for most stores. We count back from the date that matters to you, such as football season or the holidays, and write that date into the scope.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Choose a slot for a video call with a senior Shopify specialist. Tell us who buys from you now and which customers you want next; two working days later you'll have a written price and launch date.",
    bullets: [
      "Walk through your store, your customers and your goals",
      "Get a fixed price and a launch date within 48 hours",
      "Find out what Shopify handles natively and what needs custom work",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "al-ssut",
      claim: "Alabama's Simplified Sellers Use Tax is a flat 8% on all sales into Alabama regardless of the locality shipped to, relieving state and local sales/use tax; it is for eligible sellers without a physical presence in Alabama; the state measures a $250,000 sales threshold",
      url: "https://www.revenue.alabama.gov/sales-use/simplified-sellers-use-tax-ssut/",
      publisher: "Alabama Department of Revenue",
      captured: "2026-11-12",
      reviewAfterDays: 365,
    },
    {
      id: "al-state-rate",
      claim: "Alabama's general state sales tax rate is 4%; city and county rates are published separately",
      url: "https://www.revenue.alabama.gov/sales-use/state-sales-use-tax-rates/",
      publisher: "Alabama Department of Revenue",
      captured: "2026-11-12",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
