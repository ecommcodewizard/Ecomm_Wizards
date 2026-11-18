// Geo v5 S5, Shopify dev Phase 2a, page 9 of 15: Orlando (metro), service
// format.
//
// Keywords (v5 plan 3.3):
//   primary    shopify agency orlando (SEMrush 10, KD 1)
//   secondary  shopify developer orlando (Jobs tab present; Google rewrites to
//              "shopify development orlando", whose page 1 is agency pages)
// SERP (2026-11-18): AI Overview lists four local firms with addresses;
// tourism / park-goer / event-merch angles are taken (Netalico, Apex Softeck,
// aqsashahzad.com), so this page avoids them. AI Overviews ask: new store,
// redesign or migrate; standard or Plus; catalog size.
// Facts avoid everything on the Florida and Miami pages (hurricanes, Miami
// surtax, remote-seller threshold, Latin America, translation, TCPA).
// H1 owner pick: "New Stores, Redesigns and Faster Checkout" (owner dropped
// "Shopify Plus" from the H1 menu).

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_ORLANDO: ServiceGeoPage = {
  type: "service",
  slug: "orlando",
  path: "/services/shopify-development-agency/orlando",
  hub: "/services/shopify-development-agency",
  geo: { name: "Orlando", type: "metro", areaServed: "Orlando, Florida" },

  targetKeyword: "shopify agency orlando",
  secondaryKeywords: ["shopify developer orlando"],
  faqKeywords: [],
  metaTitle: "Shopify Agency Orlando | New Stores, Redesigns, Faster Checkout",
  metaDescription:
    "The Shopify agency Orlando brands hire for new stores, redesigns and a faster checkout on every phone, built at a fixed price agreed upfront.",
  shortTitle: "Shopify Agency Orlando",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Orlando Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Orlando Brands Hire for New Stores, Redesigns and Faster Checkout",
    intro:
      "Your customers shop on their phones, decide fast and leave if checkout drags. Whether you need a new store, a redesign of the one you have or a checkout that stops losing orders, we're the Shopify agency Orlando brands hire for it: [link:/services/shopify-theme-development|new stores], [link:/services/shopify-cro-agency|redesigns] and checkout work, at a fixed price agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-orlando-hero-v1.webp",
      alt: "Shopify stores for Candy Kittens, Wild and Dryrobe, with $8.1M in new annual revenue and checkout completion up 23%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency that builds new stores, redesigns underperforming ones and speeds up checkout for Orlando brands, Winter Park, Kissimmee and Sanford included. A new store suits brands not yet on Shopify; a redesign suits a store with traffic but few orders. Most start on standard Shopify. Every project has a fixed price and date in writing.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "New launches, redesigns and checkout rebuilds, each designed and developed in-house by our own Shopify team.",
  },

  pains: {
    heading: "Where Orders Slip Away",
    intro:
      "Most lost sales leak out of the same four places. Any Shopify agency Orlando brands work with should plug these first; here is what each leak costs you today.",
    items: [
      {
        icon: "cart",
        name: "A Checkout With Too Many Steps",
        desc: "Extra fields, account sign-up walls and no express payment options turn a quick phone purchase into a chore.",
        cost: "Full carts abandoned at the last step.",
      },
      {
        icon: "alert",
        name: "A Store That Looks Older Than the Brand",
        desc: "Shoppers who found you on social media land on dated pages that don't match what they saw.",
        cost: "They leave before they trust you enough to buy.",
      },
      {
        icon: "receipt",
        name: "Shipping and Tax Set Up Once",
        desc: "One tax rate for every Central Florida order, and shipping charges set up without thinking about how Florida taxes them.",
        cost: "Wrong totals at checkout and tax you end up covering yourself.",
      },
      {
        icon: "calendar",
        name: "No Reason to Come Back",
        desc: "No subscriptions, no reorder reminders, no account perks. A happy first-time buyer simply forgets you.",
        cost: "Repeat revenue left on the table.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Orlando Brands",
    intro:
      "Every project is designed and developed by our own Shopify team, never passed to subcontractors. Selling across the state? See our [link:/services/shopify-development-agency/florida|Florida page] for what changes statewide.",
    // Visual rows; the page's own case studies (Wild, Candy Kittens, Dryrobe)
    // are not reused here.
    items: [
      {
        title: "New Store Builds",
        heading: "A new store that launches on time and looks as good as your brand",
        body: "Custom theme, product pages, apps and integrations planned before any code, then built on a staging store you can try as it comes together. Daring's new storefront lifted conversion rate 38%.",
        covers: ["Custom theme", "Product pages", "App setup", "Integrations", "Launch plan"],
        caseSlug: "daring-headless-shopify-hydrogen",
        imageAlt: "Daring plant-based food storefront on Shopify",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Store Redesigns",
        heading: "Find what stops visitors buying, then redesign around it",
        body: "We study where shoppers drop off, then rebuild navigation, collection pages and product pages in that order. Evie Lou's redesign lifted conversion rate 82%.",
        covers: ["Drop-off analysis", "Navigation", "Collection pages", "Product pages", "Mobile design"],
        caseSlug: "evie-lou-shopify-fashion-cro",
        imageAlt: "Evie Lou fashion store redesigned on Shopify Plus",
        cta: { label: "Explore conversion optimization", href: "/services/shopify-cro-agency" },
      },
      {
        title: "Mobile Checkout and Speed",
        heading: "A checkout that takes seconds on a phone",
        body: "Shop Pay, Apple Pay and pay-in-installments options, fewer fields, address autocomplete and faster pages. Sneak Energy's mobile rebuild lifted mobile conversion rate 68%.",
        covers: ["Shop Pay", "Apple Pay", "Pay later", "Address autocomplete", "Page speed"],
        caseSlug: "sneak-energy-shopify-redesign",
        imageAlt: "Sneak Energy store rebuilt for mobile shoppers",
      },
      {
        title: "Shipping and Tax Setup",
        heading: "Shipping charges and county tax set up the way Florida expects",
        body: "Shipping shown as its own line with a local pickup option, Shopify Tax charging by delivery county, and a free-shipping progress bar that lifts order value. Feetures' progress bar and rebuilt theme lifted average order value 19%.",
        covers: ["Shopify Tax", "County surtax", "Shipping rules", "Local pickup", "Free-shipping bar"],
        caseSlug: "feetures-shopify-theme-development",
        imageAlt: "Feetures store with a free-shipping progress bar",
      },
      {
        title: "Subscriptions and Repeat Orders",
        heading: "Give first-time buyers a reason to order again",
        body: "Subscribe-and-save, reorder reminders and a customer portal to skip or swap. Happy Mammoth's subscription rebuild grew subscription revenue 134%.",
        covers: ["Subscriptions", "Reorder reminders", "Customer portal", "Loyalty", "Post-purchase emails"],
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        imageAlt: "Happy Mammoth subscription store on Shopify Plus",
      },
      {
        title: "Migrations and Support",
        heading: "Off WooCommerce or Wix, and looked after once you're live",
        body: "Products, customers, orders and reviews moved with every URL redirected, then 60 days of fixes and a monthly plan if you want one. Capelli Sports kept 95% of its search traffic through its move to Shopify.",
        covers: ["WooCommerce", "Wix", "301 redirects", "60-day support", "Monthly plan"],
        caseSlug: "capelli-sports-shopify-migration",
        imageAlt: "Capelli Sports store migrated to Shopify",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
    ],
  },

  local: {
    label: "Selling from Orlando",
    heading: "What Orlando Means for Your Store",
    intro:
      "Three things about selling from Central Florida shape how your store should be set up. A Shopify agency Orlando brands rely on should get each one right before launch.",
    items: [
      {
        icon: "receipt",
        name: "One Metro, Different County Rates",
        desc: "Orange County, which includes Orlando, adds a 0.5% surtax to Florida's 6%, for 6.5%. Neighboring Osceola County, home to Kissimmee, adds 1.5%, for 7.5%. An order going a few miles south carries a different rate, so your store has to charge by delivery county; your accountant handles registration and filing.",
      },
      {
        icon: "truck",
        name: "How Florida Taxes Shipping",
        desc: "Under Florida's rule on transportation charges, a shipping or handling fee escapes sales tax only when it's shown separately and the customer could avoid it, such as by choosing pickup. Fold shipping into the product price and it's taxed. We set up shipping and pickup options with that in mind; your accountant confirms the details for your products.",
      },
      {
        icon: "user",
        name: "A Young, Phone-First Audience",
        desc: "The University of Central Florida enrolled 70,674 students in fall 2025, the most of any university in the state. If your customers skew young, they'll find you on social media, shop on a phone and expect Shop Pay, Apple Pay and pay-later options at checkout.",
      },
    ],
  },

  caseStudies: {
    heading: "New Stores, Redesigns and Faster Checkout: Three Results",
    intro:
      "One project for each job, and the proof to ask of any Shopify agency Orlando brands consider: real stores with measured results.",
    items: [
      {
        slug: "wild-shopify-plus-subscriptions",
        tags: ["New Store", "Subscriptions", "Personal Care"],
        description: "A refillable personal care brand launched its first Shopify store with subscriptions built in, and grew to more than 80,000 active monthly subscribers within a year.",
        video: "/images/Case%20studies/WeareWild%20video.mp4",
      },
      {
        slug: "candy-kittens-shopify-food-beverage-cro",
        tags: ["Redesign", "Gifting", "Confectionery"],
        description: "A sweets brand redesigned its store around gifting, seasonal campaigns and a build-your-own box. Conversion rate rose 182% and new annual revenue reached $8.1M.",
        video: "/images/Case%20studies/Candy%20Kittens%20video.mp4",
      },
      {
        slug: "dryrobe-shopify-plus-redesign",
        tags: ["Faster Checkout", "Pay Later", "Outdoor Apparel"],
        description: "An outdoor apparel brand added Klarna pay-later and address validation to a rebuilt checkout. Checkout completion rose 23% and online revenue 89%.",
        video: "/images/Case%20studies/dryrobe%20video%20test.mp4",
      },
    ],
  },

  process: {
    heading: "How a New Store or Redesign Runs",
    intro:
      "You approve each of five stages before we move on, which is how a Shopify agency Orlando brands can count on should work. A typical store is live roughly six weeks after we first talk.",
    steps: [
      { title: "Review and Quote", desc: "We look at your store, your traffic and where checkout loses people, then fix the scope, one price and a date in writing." },
      { title: "Design for the Phone First", desc: "Page and checkout designs for phone and desktop. You approve every screen before we build." },
      { title: "Build on Staging", desc: "Theme, checkout options and integrations built on a staging store, so your current site keeps selling." },
      { title: "Test Real Checkouts", desc: "Test orders to Orange and Osceola addresses, pickup and shipping, Shop Pay and pay-later, all checked before launch." },
      { title: "Launch and Support", desc: "We go live at a quiet hour, watch the first orders and fix anything that comes up for 60 days." },
    ],
  },

  compare: {
    heading: "Shopify Agency Orlando Shortlist: Who to Compare",
    intro: "Most Orlando owners compare three kinds of help with us. Each fits someone; these questions show which fits you.",
    options: [
      {
        name: "Neighborhood web design shop",
        goodFor: "Brochure sites, WordPress builds and local SEO.",
        watchFor: "Shopify checkout, apps and subscriptions are a specialty. Ask how many Shopify stores they've grown, not just launched.",
      },
      {
        name: "Freelance developer",
        goodFor: "Theme edits and single features.",
        watchFor: "A full redesign plus checkout work is a lot for one person. Ask who tests it on real phones.",
      },
      {
        name: "Ranked listicle picks",
        goodFor: "A quick list of names to start from.",
        watchFor: "Rankings rarely show results. Ask each agency for measured numbers from stores like yours.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "New stores, redesigns and checkout work in-house",
        "One fixed price and date, in writing",
        "Real numbers from every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Shoppers in each category expect different things at checkout. These are the features a Shopify agency Orlando brands pick should plan for, category by category.",
    items: [
      { icon: "shirt", name: "Apparel and Swimwear", desc: "Size guides, new-season drops and a fast mobile checkout." },
      { icon: "star", name: "Beauty and Wellness", desc: "Product quizzes, subscriptions and pay-later at checkout." },
      { icon: "food", name: "Food and Specialty Goods", desc: "Gift boxes, local delivery zones and ship-day rules for Florida heat." },
      { icon: "home", name: "Home and Outdoor Living", desc: "Large option sets, freight delivery and showroom pickup." },
      { icon: "paw", name: "Pet Products", desc: "Recurring orders, pet profiles and reorder reminders." },
      { icon: "box", name: "Wholesale and Trade", desc: "Company accounts and price lists. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency Orlando FAQs",
  faqs: [
    {
      question: "Do I need a new store or a redesign?",
      answer:
        "If you're not on Shopify yet, or your platform has become hard to run, you need a new store. If you're on Shopify and getting visitors who don't buy, a redesign of the pages that matter usually does more. We'll tell you which on the first call.",
      unique: true,
    },
    {
      question: "How do you make checkout faster?",
      answer:
        "We cut fields, turn on Shop Pay and Apple Pay, add pay-later options and address autocomplete, and speed up the pages before checkout. Then we test on real phones before launch.",
      unique: true,
    },
    {
      question: "Shopify developer or agency: which should an Orlando brand hire?",
      answer:
        "A Shopify developer Orlando job boards list may suit one fix or a single feature. A new store or a redesign needs design, development, testing and support together, which is what an agency is for.",
      unique: true,
    },
    {
      question: "Does Florida tax the shipping I charge?",
      answer:
        "It depends on how the charge is set up. Florida generally doesn't tax a shipping charge that's shown separately and that the customer could avoid, such as by choosing pickup. We set up your checkout that way where it fits; your accountant confirms the details.",
      unique: true,
    },
    {
      question: "Is standard Shopify enough for a fast checkout?",
      answer:
        "For most brands, yes: Shop Pay, Apple Pay and pay-later all work on standard Shopify. Plus adds deeper checkout customization and wholesale features, worth it once volume justifies the fee.",
      unique: false,
    },
    {
      question: "Can we work together if you are not local?",
      answer:
        "Yes. Calls happen over video, you click through progress on a staging store whenever you like, and a written update lands every week. Scope, price and launch date are agreed on paper before anything starts.",
      unique: false,
    },
    {
      question: "What will it cost?",
      answer:
        "A checkout tune-up costs far less than a full new store, so there's no price list. Tell us what you need on a short call and you'll get one fixed price, in writing, within two working days.",
      unique: false,
    },
    {
      question: "How soon could we launch?",
      answer:
        "New stores and redesigns usually take about six weeks; checkout work on its own is quicker. Give us the date you're aiming for and we'll plan back from it.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Choose a time to talk on video with a senior Shopify specialist. Share your store and run through checkout with us; a written price and launch date follow within two working days.",
    bullets: [
      "Run through your checkout together on a phone",
      "Learn whether a new store or a redesign fits better",
      "Get one fixed price and a launch date on paper",
      "Keep the scope whatever you decide",
    ],
  },

  sources: [
    {
      id: "orlando-orange-rate",
      claim: "Orlando's sales tax rate is 6.5%: 6% Florida state plus 0.5% Orange County surtax",
      url: "https://www.salestaxhandbook.com/florida/rates/orlando",
      publisher: "Sales Tax Handbook",
      captured: "2026-11-18",
      reviewAfterDays: 180,
    },
    {
      id: "osceola-rate",
      claim: "Osceola County, Florida combined sales tax rate 7.5% in 2026 (6% state plus 1.5% county surtax)",
      url: "https://www.avalara.com/us/en/taxrates/state-rates/florida/counties/osceola.html",
      publisher: "Avalara",
      captured: "2026-11-18",
      reviewAfterDays: 180,
    },
    {
      id: "fl-transportation-charges",
      claim: "Florida Rule 12A-1.045: transportation charges (shipping, handling, delivery) are excluded from the taxable sales price only when separately stated and avoidable by the customer's own decision or action",
      url: "https://law.cornell.edu/regulations/florida/Fla-Admin-Code-Ann-R-12A-1-045",
      publisher: "Florida Administrative Code (via Cornell LII)",
      captured: "2026-11-18",
      reviewAfterDays: 365,
    },
    {
      id: "ucf-enrollment-2025",
      claim: "University of Central Florida fall 2025 enrollment: 70,674 students, the largest university in Florida",
      url: "https://www.ucf.edu/about-ucf/facts/",
      publisher: "University of Central Florida",
      captured: "2026-11-18",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
