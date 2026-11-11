// Geo v5 S2, page 14 of 18: Seattle (Washington), service format.
//
// Keywords (v5 plan 3.2; SEMrush 2026-11-12: 50/mo, KD 8%, Informational;
// Ahrefs: every ranking page 0-1 referring domains):
//   primary    seattle shopify agencies (50-60): plural, comparison intent
//   secondary  shopify expert seattle (30): SERP checked 2026-11-12, mix of
//              directories and agency pages, not jobs, so usable
//   reserve    shopify agency seattle (0): not used
// "shopify developer seattle" excluded (plan: Jobs SERP). Page 1 is half
// "best agencies in Seattle" listicles, half agency landing pages, with a
// local pack. H1 owner pick #21. Angle: the reader is comparing agencies,
// so the page leads with proof and what to check; local section leads with
// Washington's B&O tax and quarterly rates (outdoor already leads Portland).

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_SEATTLE: ServiceGeoPage = {
  type: "service",
  slug: "seattle",
  path: "/services/shopify-development-agency/seattle",
  hub: "/services/shopify-development-agency",
  geo: { name: "Seattle", type: "metro", areaServed: "Seattle, Washington" },

  targetKeyword: "seattle shopify agencies",
  secondaryKeywords: ["shopify expert seattle"],
  faqKeywords: ["shopify agency seattle"],
  metaTitle: "Seattle Shopify Agencies Compared | The Team Brands Hire",
  metaDescription:
    "Comparing Seattle Shopify agencies? See measured results, a fixed price and launch date in writing, and a Shopify-only team that has built 150+ stores.",
  shortTitle: "Seattle Shopify Agencies",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Seattle Brands",
    h1Lead: "Comparing",
    h1Gradient: "Seattle Shopify Agencies?",
    h1Tail: "Meet the Team Brands Hire to Grow Sales",
    intro:
      "You're comparing Seattle Shopify agencies, so judge us the way you'd judge any of them: by the stores we've grown. We build [link:/services/shopify-theme-development|custom themes], subscriptions, [link:/services/shopify-plus-development|Shopify Plus] and wholesale, and handle [link:/services/migration|migrations] with every URL redirected. You get one fixed price and a launch date in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-seattle-hero-v1.webp",
      alt: "Shopify stores for Chilly's, Happy Mammoth and Saddleback, with conversion up 61% and B2B sales up 881%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify-only team that brands weigh against Seattle Shopify agencies: custom themes, subscriptions, Shopify Plus, wholesale and migrations, with measured results in every case study. The team has built 150+ stores and agrees a fixed price and launch date in writing before work starts. Washington stores also get sales tax set up by delivery address.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "Every store was designed, built and launched in-house by our own Shopify team.",
  },

  pains: {
    heading: "Where Shopify Projects Go Wrong",
    intro:
      "Most Seattle Shopify agencies show a strong portfolio. The trouble starts after you sign. These are the four problems to rule out before you hire anyone, us included.",
    items: [
      {
        icon: "receipt",
        name: "A Quote That Keeps Growing",
        desc: "An hourly estimate looks small at the start, then grows with every change request and every week the build runs over.",
        cost: "Your budget is spent before the store is finished.",
      },
      {
        icon: "chart",
        name: "A Portfolio With No Numbers",
        desc: "Screenshots show what a store looks like, not whether it sold more after launch. Pretty and profitable aren't the same thing.",
        cost: "You pay for a redesign that changes nothing in your reports.",
      },
      {
        icon: "calendar",
        name: "A Launch Date That Slips",
        desc: "Without a date in writing, the build drifts past your season, your sale or your product launch.",
        cost: "You miss the weeks you planned the year around.",
      },
      {
        icon: "code",
        name: "A Store You Don't Fully Own",
        desc: "Some builds leave the theme, the apps or the accounts in the agency's name, so leaving them means starting again.",
        cost: "You're tied to one supplier whether they deliver or not.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Seattle Brands",
    intro:
      "Everything is built in-house by people who work only on Shopify. Once the store is live, we can also run [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO].",
    items: [
      {
        title: "Custom Theme Development",
        body: "A fast custom theme with flexible sections, so your team can launch products and campaigns without calling a developer.",
      },
      {
        title: "Subscriptions and Product Quizzes",
        body: "Recurring orders, subscribe-and-save options and quizzes that recommend the right product, so one order turns into many.",
      },
      {
        title: "Shopify Plus Builds",
        body: "Shopify Plus for brands at volume: checkout extensions, automation with Shopify Flow and stores for more than one country.",
      },
      {
        title: "Wholesale and B2B",
        body: "Trade accounts with their own prices, terms and bulk ordering, run from the same catalog as your direct store.",
      },
      {
        title: "Platform Migration",
        body: "Move from Magento, WooCommerce or BigCommerce with products, customers, orders and reviews intact, and every old URL redirected.",
      },
      {
        title: "Tax Set Up by Address",
        body: "Shopify Tax configured so each order is charged the rate where it's delivered, with Washington's quarterly rate changes kept current.",
      },
      {
        title: "Speed and Core Web Vitals",
        body: "Lighter images, fewer apps and clean code, so pages load fast on a phone and pass Google's speed checks.",
      },
      {
        title: "Support After Launch",
        body: "Every build includes 60 days of post-launch support, then an optional monthly retainer for new features and fixes.",
      },
    ],
  },

  local: {
    label: "Selling from Seattle",
    heading: "What Selling from Seattle Means for Your Store",
    intro:
      "Three things about Washington change how your store should be built: two taxes that kick in at the same line, rates that follow the delivery address, and a state that spends heavily on the outdoors.",
    items: [
      {
        icon: "receipt",
        name: "Two Washington Taxes Kick In Past $100,000",
        desc: "Once your sales into Washington pass $100,000 in the current or prior year, you collect Washington sales tax and also report its business and occupation (B&O) tax, a tax on gross receipts that most states don't have. We set up Shopify Tax for the sales tax side; your accountant handles B&O and registration.",
      },
      {
        icon: "truck",
        name: "Rates That Follow the Delivery Address",
        desc: "Washington charges sales tax at the rate where the customer receives the order, and the state updates its local rates every quarter. A single rate typed into your store goes out of date; Shopify Tax keeps every address current.",
      },
      {
        icon: "flag",
        name: "A State That Spends on the Outdoors",
        desc: "Washington's recreation office reports that outdoor recreation spending supports $40.3 billion of economic activity and 264,000 jobs, about 6% of all jobs in the state. If you sell gear, apparel or drinkware, build every page for shoppers comparing specs, sizes and stock.",
      },
    ],
  },

  caseStudies: {
    heading: "Stores With Measured Results",
    intro:
      "The proof to ask of all Seattle Shopify agencies: what happened to sales after launch. Each result below was measured on the live store.",
    items: [
      {
        slug: "happy-mammoth-shopify-subscriptions-cro",
        tags: ["Wellness", "Subscriptions", "Product Quiz"],
        description: "A supplement brand rebuilt its product quiz and launched recurring orders. Subscription revenue rose 134% and conversion rate 61%.",
        video: "/images/Case%20studies/happy-mammoth-video.mp4",
      },
      {
        slug: "chillys-headless-commerce-layer",
        tags: ["Drinkware", "Headless", "Speed"],
        description: "A reusable bottle brand rebuilt its store headless in ten weeks. Pages load 42% faster, conversion rate rose 28% and order value 19%.",
        video: "/images/Case%20studies/Chillys%20Headless%20video.mp4",
      },
      {
        slug: "saddleback-shopify-plus-b2b",
        tags: ["Cycling", "Shopify Plus B2B", "Bulk Ordering"],
        description: "A cycling distributor replaced a slow wholesale portal with Shopify Plus B2B, tiered pricing and CSV bulk ordering. B2B sales grew 881%.",
        video: "/images/Case%20studies/Saddleback%20video.mp4",
      },
    ],
  },

  process: {
    heading: "From First Call to a Store That Sells",
    intro:
      "Five stages with your sign-off at each one, so you can hold us to the same standard you'd hold any of the Seattle Shopify agencies on your list. Most stores are live about six weeks after kickoff.",
    steps: [
      { title: "Fix the Scope and Price", desc: "We review your store, your goals and your deadlines, then put the scope, one price and a launch date in writing." },
      { title: "Design for Sales", desc: "Figma designs for desktop and mobile, planned around how your customers buy. You approve every screen." },
      { title: "Build on Staging", desc: "Theme, apps, subscriptions and integrations built on a staging store you can click through at any time." },
      { title: "Test Every Order Path", desc: "Real test orders on every device, with tax, shipping, discounts and subscriptions checked before launch." },
      { title: "Launch and Measure", desc: "A planned go-live, 60 days of support, and a report on conversion and revenue against your old store." },
    ],
  },

  compare: {
    heading: "How to Compare Seattle Shopify Agencies",
    intro: "Search results mix local studios, national partners, directories and freelancers. Here is what each one suits, and what to ask before you sign.",
    options: [
      {
        name: "Local design studio",
        goodFor: "Brand identity, photography and creative direction.",
        watchFor: "Ask for live Shopify builds with measured results, not just design work.",
      },
      {
        name: "Freelancer from a directory",
        goodFor: "Small fixes and single features.",
        watchFor: "Migrations, subscriptions and wholesale need several skills at once, and timelines slip when one person is busy.",
      },
      {
        name: "Large national partner",
        goodFor: "Very large programs with big budgets.",
        watchFor: "Check their minimum project size and who works on your store day to day.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Measured results in every case study",
        "Fixed price and launch date in writing",
        "Subscriptions, Shopify Plus and B2B in-house",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Each category needs something different built in. Here is what to expect from any of the Seattle Shopify agencies you shortlist, and what we build for each.",
    items: [
      { icon: "flag", name: "Outdoor Gear", desc: "Spec tables, comparisons and preorders for the items that sell out each season." },
      { icon: "food", name: "Coffee and Specialty Food", desc: "Subscriptions, grind and size options, and gift boxes that ship well." },
      { icon: "star", name: "Wellness and Supplements", desc: "Product quizzes, subscribe-and-save and clear ingredient pages." },
      { icon: "shirt", name: "Apparel and Footwear", desc: "Size guidance, colorway swatches and launch pages for new drops." },
      { icon: "home", name: "Home and Drinkware", desc: "Personalization, bundles and fast pages for image-heavy collections." },
      { icon: "box", name: "Wholesale to Retailers", desc: "Account pricing and reorders for the shops that stock you. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Questions Brands Ask When Comparing Agencies",
  faqs: [
    {
      question: "Is it worth hiring a Shopify expert?",
      answer:
        "A Shopify expert is worth it when the work touches sales: a redesign, a migration, subscriptions or wholesale. Small text and image changes you can make yourself. We tell you on the first call which parts need us and which don't.",
      unique: true,
    },
    {
      question: "How much does a Shopify agency Seattle brands hire cost?",
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
      question: "Can I hire someone to set up my whole Shopify store?",
      answer:
        "Yes. We handle the full build: design, theme, products, payments, shipping, tax and apps, then train your team to run it. You own every account from day one.",
      unique: true,
    },
    {
      question: "Do I need to charge Washington sales tax?",
      answer:
        "On orders delivered in Washington, usually yes once you're registered, at the rate for the delivery address. Remote sellers must collect once Washington sales pass $100,000 in the current or prior year. We set up Shopify Tax; your accountant decides where you register.",
      unique: true,
    },
    {
      question: "Can you add subscriptions to our store?",
      answer:
        "Yes. We set up recurring orders, subscribe-and-save pricing and a customer portal for skipping or swapping, built into your product pages rather than bolted on.",
      unique: false,
    },
    {
      question: "Can one store sell direct and to retailers?",
      answer:
        "Yes. Shopify Plus B2B lets retailers log in to their own prices, terms and minimums, while consumers see your normal store, from one catalog and one inventory.",
      unique: false,
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Most stores go live about six weeks after kickoff. We set the launch date in writing at the start, working back from your next season or launch.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a time for an online call with a senior Shopify specialist. Tell us what you want the store to do, and within 48 hours you'll have a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your store, your goals and your deadlines",
      "Get a fixed price and a launch date within 48 hours",
      "Find out what Shopify handles natively and what needs custom work",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "wa-remote-seller-threshold",
      claim: "Remote sellers must register for Washington B&O tax and collect sales tax once combined gross receipts sourced to Washington exceed $100,000 in the current or prior year; retail sales are reported under the retailing B&O classification; the rate is based on where the sale is delivered",
      url: "https://dor.wa.gov/taxes-rates/retail-sales-tax/marketplace-fairness-leveling-playing-field/remote-sellers",
      publisher: "Washington State Department of Revenue",
      captured: "2026-11-12",
      reviewAfterDays: 365,
    },
    {
      id: "wa-destination-quarterly",
      claim: "Washington sales tax is destination-based (location where the customer receives the goods) and rates are updated quarterly",
      url: "https://dor.wa.gov/taxes-rates/sales-use-tax-rates",
      publisher: "Washington State Department of Revenue",
      captured: "2026-11-12",
      reviewAfterDays: 180,
    },
    {
      id: "wa-outdoor-rec",
      claim: "Outdoor recreation spending supports $40.3 billion in total economic activity and 264,000 jobs, or 6 percent of all jobs in Washington (2019 figures)",
      url: "https://rco.wa.gov/?p=8554",
      publisher: "Washington Recreation and Conservation Office",
      captured: "2026-11-12",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
