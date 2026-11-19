// Geo v5 S5, Shopify dev Phase 2a, page 14 of 15: Cleveland (metro), service
// format.
//
// Keywords (v5 plan 3.3; no measured volume):
//   primary    shopify agency cleveland (KD 10)
//   secondary  shopify developer cleveland (KD 7; Google rewrites to
//              "development")
// SERP (2026-11-20): the most crowded of the batch. Map pack and AI cards
// (121eCommerce, Gapstow, Shopified Labs, NgageContent), Netalico and
// 100xelevate at the top. Owned angles avoided: B2B/manufacturing (Shero,
// Uncap, NgageContent), boutiques (Shopified Labs), headless (VividFront).
// AI asks: new build, migration, custom theme/app or ongoing growth and SEO.
// The Ohio page is statewide and left Cleveland terms for this page.
// H1 owner pick #1. County-tax item dropped (same idea used on Tulsa,
// Orlando and Sacramento); two local items.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_CLEVELAND: ServiceGeoPage = {
  type: "service",
  slug: "cleveland",
  path: "/services/shopify-development-agency/cleveland",
  hub: "/services/shopify-development-agency",
  geo: { name: "Cleveland", type: "metro", areaServed: "Cleveland, Ohio" },

  targetKeyword: "shopify agency cleveland",
  secondaryKeywords: ["shopify developer cleveland"],
  faqKeywords: [],
  metaTitle: "Shopify Agency Cleveland | Store Builds, Custom Apps, Growth",
  metaDescription:
    "The Shopify agency Cleveland brands hire for store builds, custom apps and the ongoing growth work that follows launch, all at a fixed price agreed upfront.",
  shortTitle: "Shopify Agency Cleveland",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Cleveland Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Cleveland Brands Hire for Store Builds, Custom Apps and Ongoing Growth",
    intro:
      "Launching is the start, not the finish. Your store has to be built well, do the things off-the-shelf apps can't, and keep getting better once customers arrive. We're the Shopify agency Cleveland brands hire for all three: [link:/services/shopify-theme-development|store builds], [link:/services/shopify-app-development|custom apps] and [link:/services/shopify-cro-agency|growth work after launch], at a fixed price agreed in writing before any work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-cleveland-hero-v1.webp",
      alt: "Shopify stores for Twillory, Daring and Saddleback, with $5.4M in new annual revenue and B2B sales up 881%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency that builds stores, writes custom apps and runs ongoing growth work, testing and SEO included, for Cleveland and Northeast Ohio brands from Lakewood to Akron. A build suits a brand launching or rebuilding; growth work suits a live store that should sell more. Every project has a fixed price and date in writing.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "New builds, custom apps and long-running growth programs, all handled by our own Shopify team.",
  },

  pains: {
    heading: "Where Stores Stall After Launch",
    intro:
      "Plenty of stores launch well and then flatline. The Shopify agency Cleveland brands hire should look at these four problems first; here is what each one is costing you now.",
    items: [
      {
        icon: "grid",
        name: "Apps Doing Half the Job",
        desc: "A stack of subscriptions that almost does what you need, each adding a fee and a script to every page.",
        cost: "Monthly costs that climb while the store gets slower.",
      },
      {
        icon: "chart",
        name: "A Launch Nobody Followed Up",
        desc: "The store went live and nobody has tested a page, tracked a funnel or improved anything since.",
        cost: "Conversion rate that hasn't moved in a year.",
      },
      {
        icon: "search",
        name: "Search Traffic That Never Arrived",
        desc: "Product and collection pages with thin copy, missing structured data and slow load times.",
        cost: "Paying for every visitor instead of earning some for free.",
      },
      {
        icon: "calendar",
        name: "Holiday Orders That Miss the Date",
        desc: "Cutoffs set for an average week, not for the weeks when snow and holiday volume slow every carrier at once.",
        cost: "Late gifts, refunds and one-star reviews.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Cleveland Brands",
    intro:
      "Our own Shopify team designs, codes and tests every project; nothing goes to subcontractors. Selling across the state? See our [link:/services/shopify-development-agency/ohio|Ohio page] for what changes statewide.",
    // Visual rows; the page's own case studies (Daring, Saddleback, Twillory)
    // are not reused here.
    items: [
      {
        title: "Store Builds",
        heading: "A store designed around your range, ready for its first day of traffic",
        body: "A custom theme with product pages, collections and quizzes built for your products, fast on a phone and simple to edit. 111SKIN's custom theme and skin quiz lifted conversion rate 46%.",
        covers: ["Custom theme", "Product pages", "Collections", "Product quiz", "Mobile design"],
        caseSlug: "111skin-shopify-cro-redesign",
        imageAlt: "111SKIN skincare store on a custom Shopify theme",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Custom Apps and Configurators",
        heading: "The feature no app store listing offers, built for your store alone",
        body: "Private apps, product builders with live previews, custom pricing logic and admin tools your team uses every day. Ronaldo Jewelry's custom configurator lifted total sales 250%.",
        covers: ["Private apps", "Configurators", "Pricing logic", "Admin tools", "Shopify Functions"],
        caseSlug: "ronaldo-jewelry-shopify-plus-redesign",
        imageAlt: "Ronaldo Jewelry store with a custom bracelet configurator",
        cta: { label: "Explore app development", href: "/services/shopify-app-development" },
      },
      {
        title: "SEO and Site Speed",
        heading: "Pages that load fast and give search engines something to rank",
        body: "Structured data, cleaner collection pages, faster templates and redirects handled properly whenever anything moves. Capelli Sports kept 95% of its search traffic through a platform move and sped its site up 38%.",
        covers: ["Structured data", "Collection SEO", "Core Web Vitals", "Redirects", "Image work"],
        caseSlug: "capelli-sports-shopify-migration",
        imageAlt: "Capelli Sports store on Shopify",
        cta: { label: "Explore Shopify SEO", href: "/services/shopify-seo-agency" },
      },
      {
        title: "Holiday and Gifting Setup",
        heading: "Gift sets, cutoffs and messaging planned before the busiest weeks",
        body: "Gift sets and bundles, gift messages, holiday shipping cutoffs and a delay banner you can switch on in bad weather. Candy Kittens' gifting rebuild added $8.1M in new annual revenue.",
        covers: ["Gift sets", "Holiday cutoffs", "Gift messages", "Delay notices", "Local pickup"],
        caseSlug: "candy-kittens-shopify-food-beverage-cro",
        imageAlt: "Candy Kittens confectionery store built around gifting",
      },
      {
        title: "Subscriptions and Retention",
        heading: "Turn first orders into customers who come back on their own",
        body: "Subscribe-and-save, a customer portal for skipping or swapping, and win-back emails for customers who drift. Happy Mammoth's rebuild grew customer lifetime value 89%.",
        covers: ["Subscriptions", "Customer portal", "Win-back flows", "Loyalty", "Reorder reminders"],
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        imageAlt: "Happy Mammoth subscription store on Shopify Plus",
      },
      {
        title: "Migrations",
        heading: "Onto Shopify Plus on a date you can plan around",
        body: "Products, customers, orders and integrations moved, every URL redirected, and rankings watched after launch. John Hardy moved from Salesforce Commerce Cloud to Shopify Plus in under three months, in time for Black Friday.",
        covers: ["Salesforce", "Magento", "WooCommerce", "301 redirects", "Rank tracking"],
        caseSlug: "john-hardy-shopify-plus-migration",
        imageAlt: "John Hardy jewelry store migrated to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
    ],
  },

  local: {
    label: "Selling from Cleveland",
    heading: "What Cleveland Means for Your Store",
    intro:
      "Two things about Cleveland change how a store here should be planned. A Shopify agency Cleveland brands rely on should build both in before the busy season.",
    items: [
      {
        icon: "calendar",
        name: "Lake-Effect Winters Meet the Holiday Rush",
        desc: "Cleveland averages close to 60 inches of snow a year, and the snowbelt east of the city gets around 80. The heaviest weeks overlap holiday shipping. Set earlier cutoffs for December, keep a delay banner ready to switch on, and offer local pickup so a storm doesn't cost you a sale.",
      },
      {
        icon: "flag",
        name: "Visitors Who Take Your Brand Home",
        desc: "The Rock & Roll Hall of Fame draws more than half a million visitors a year, and its induction ceremony returns to Northeast Ohio in 2026. Visitors who buy from you in person go home afterwards; capture their email at the till and make reordering online the obvious next step.",
      },
    ],
  },

  caseStudies: {
    heading: "Store Builds, Custom Apps and Growth: Three Results",
    intro:
      "One project for each kind of work, and the proof to ask of any Shopify agency Cleveland brands consider: real stores with measured results.",
    items: [
      {
        slug: "daring-headless-shopify-hydrogen",
        tags: ["Store Build", "Shopify Plus", "Plant-Based Food"],
        description: "A plant-based food brand launched a new storefront bringing recipes, product discovery and checkout together. Conversion rate rose 38% and average order value 27%.",
        video: "/images/Case%20studies/Daring%20video.mp4",
      },
      {
        slug: "saddleback-shopify-plus-b2b",
        tags: ["Custom App", "Credit Application", "Cycling"],
        description: "A cycling distributor needed trade credit approvals the off-the-shelf apps couldn't handle, so we built a custom credit app alongside bulk CSV ordering. B2B sales grew 881% in the first month.",
        video: "/images/Case%20studies/Saddleback%20video.mp4",
      },
      {
        slug: "twillory-shopify-cro",
        tags: ["Ongoing Growth", "A/B Testing", "Apparel"],
        description: "A shirt brand ran a continuous testing program across product pages, navigation and checkout. 70% of tests won, adding $5.4M in new annual revenue.",
        video: "/images/Case%20studies/Twillory%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How a Build Turns Into Growth",
    intro:
      "You sign off each stage before we move on: how the Shopify agency Cleveland brands choose should run a project. Most builds go live about six weeks after the first call, and growth work carries on from there.",
    steps: [
      { title: "Scope It in Writing", desc: "We review the store, the apps you pay for and your numbers, then fix the scope, one price and a launch date." },
      { title: "Design and Spec the Apps", desc: "Page designs for phone and desktop, plus a written spec for any custom app. You approve both before building starts." },
      { title: "Build on Staging", desc: "Theme and custom apps built on a staging copy, so your live store keeps selling." },
      { title: "Test and Launch", desc: "Test orders, app behavior, speed and SEO checks, then a quiet-hour launch with 60 days of fixes included." },
      { title: "Keep Improving", desc: "If you want growth work, we test changes against the original each month and report what moved revenue." },
    ],
  },

  compare: {
    heading: "Comparing Your Shopify Agency Cleveland Options",
    intro: "Cleveland owners usually weigh three alternatives. One question tells each apart from us.",
    options: [
      {
        name: "Fixed-package builder",
        goodFor: "A small catalog on a set price per product count.",
        watchFor: "Packages rarely include custom apps or anything after launch. Ask what happens in month two.",
      },
      {
        name: "Full-service marketing agency",
        goodFor: "Ads, PR and brand campaigns across many channels.",
        watchFor: "Shopify development may be one of many services. Ask who writes the code and how many Shopify apps they've built.",
      },
      {
        name: "Freelance developer",
        goodFor: "Small fixes between bigger projects.",
        watchFor: "A build plus a custom app plus growth work is more than one person can carry. Ask who covers when they're busy.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, 150+ stores built",
        "Builds, custom apps and growth work in-house",
        "One fixed price and date, in writing",
        "Measured results in every case study",
        "You own the code, the apps and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Each category needs its own mix of build, apps and growth work. These are what a Shopify agency Cleveland brands work with should plan for.",
    items: [
      { icon: "star", name: "Gifts and Merchandise", desc: "Gift sets, holiday cutoffs and visitor reorders." },
      { icon: "food", name: "Food and Specialty Goods", desc: "Bundles, subscriptions and winter shipping rules." },
      { icon: "shirt", name: "Apparel and Fan Gear", desc: "Size guides, drops and fast collection pages." },
      { icon: "home", name: "Home and Garden", desc: "Large option sets, configurators and freight delivery." },
      { icon: "paw", name: "Pet Products", desc: "Recurring orders and reorder reminders." },
      { icon: "code", name: "Brands Needing Custom Features", desc: "Private apps, pricing logic and admin tools built to order." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency Cleveland FAQs",
  faqs: [
    {
      question: "Can I hire someone to set up my Shopify store?",
      answer:
        "Yes. We take care of everything from theme and products to payments, shipping, apps and integrations, launch on the agreed date and stay on for 60 days of fixes.",
      unique: false,
    },
    {
      question: "Does Shopify build stores itself?",
      answer:
        "No. Shopify lists independent partners in its Partner Directory for that work. We're a Shopify Plus Partner whose own team designs, codes and tests every store.",
      unique: true,
    },
    {
      question: "Shopify developer or agency for a Cleveland brand?",
      answer:
        "A Shopify developer Cleveland freelance sites list can handle a quick fix. A build with custom apps and ongoing growth work needs design, development, testing and analysis together, which is an agency's job.",
      unique: true,
    },
    {
      question: "When is a custom app better than an App Store app?",
      answer:
        "When several apps are patching gaps between each other, when monthly fees keep rising with your orders, or when the job is specific to how you sell. We compare the costs in writing before you decide.",
      unique: true,
    },
    {
      question: "What does ongoing growth work include?",
      answer:
        "Monthly testing of product pages, navigation and checkout, SEO fixes, speed work and a short report on what changed revenue. You can stop at any time; there's no long contract.",
      unique: true,
    },
    {
      question: "Can you make 10K a month on Shopify?",
      answer:
        "Many stores do, but it depends on your margins, traffic and repeat customers rather than the platform. We won't promise a number; we'll show you where your store is losing sales and fix those first.",
      unique: true,
    },
    {
      question: "What will my project cost?",
      answer:
        "A build with custom apps costs more than growth work on a live store, so there's no rate card. After a short call you get one fixed price and a date in writing, usually within two working days.",
      unique: false,
    },
    {
      question: "How quickly can we start?",
      answer:
        "Most builds go live about six weeks after the first call. If the holidays are your deadline, start planning by late summer so cutoffs and gifting are in place before the snow.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Arrange a video call with a senior Shopify specialist. Show us the store and the apps you pay for; a written price and date follow within two working days.",
    bullets: [
      "Go through your store, your apps and your numbers",
      "Find out whether you need a build, a custom app or growth work",
      "Get one fixed price and a date in writing",
      "Keep the written scope either way",
    ],
  },

  sources: [
    {
      id: "cle-snowfall",
      claim: "Cleveland averages about 59 inches of snow a year (NOAA historical data); the snowbelt around Ashtabula averages about 80 inches",
      url: "https://wkyc.com/article/weather/weather-blog/this-years-lake-effect-snow-event-compare-past-northeast-ohio/95-87342e4a-6441-4e4e-ab79-ad168ff7f6ec",
      publisher: "WKYC (National Weather Service data)",
      captured: "2026-11-20",
      reviewAfterDays: 365,
    },
    {
      id: "rock-hall-visitors",
      claim: "The Rock & Roll Hall of Fame draws more than half a million visitors to its Cleveland museum each year",
      url: "https://www.rockhall.com/wp-content/uploads/2024/04/Annual-Report-2023.pdf",
      publisher: "Rock & Roll Hall of Fame",
      captured: "2026-11-20",
      reviewAfterDays: 365,
    },
    {
      id: "rock-hall-2026",
      claim: "The Rock Hall induction ceremony returns to Northeast Ohio in 2026, alongside the museum's expansion",
      url: "https://www.axios.com/local/cleveland/2025/11/10/rock-hall-2025-inductions-los-angeles-expansion",
      publisher: "Axios Cleveland",
      captured: "2026-11-20",
      reviewAfterDays: 180,
    },
  ],
  wordCountTarget: [1600, 2800],
};
