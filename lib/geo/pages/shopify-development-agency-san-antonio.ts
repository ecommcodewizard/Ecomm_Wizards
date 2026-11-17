// Geo v5 S5, Shopify dev Phase 2a, page 2 of 15: San Antonio (metro), service
// format.
//
// Keywords (v5 plan 3.3; no measured volume in either tool, KD 7 / 5):
//   primary    shopify agency san antonio
//   secondary  shopify developer san antonio. The plan's exclusion list drops
//              "shopify developer [city]" as job-seeker intent, and the SERP
//              does show a Jobs pack at #2, but every organic result is an
//              agency page, so it stays as a light secondary (one heading).
// SERP (2026-11-17, location applied): MageCloud #1 on both; Forix (an Oregon
// agency) leads the AI Overview; Web Tonic and WeframeTech listicles;
// 100xelevate #3/#5. AI Overview asks: new store or redesign/scale; standard
// or Plus; apps, SEO or ads. Answered in the summary and FAQs (owner,
// 2026-11-17). H1 owner pick #1 ("one-time visitors into online regulars").
// Bilingual-store angle deliberately skipped: Dallas and Houston already use it.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_SAN_ANTONIO: ServiceGeoPage = {
  type: "service",
  slug: "san-antonio",
  path: "/services/shopify-development-agency/san-antonio",
  hub: "/services/shopify-development-agency",
  geo: { name: "San Antonio", type: "metro", areaServed: "San Antonio, Texas" },

  targetKeyword: "shopify agency san antonio",
  secondaryKeywords: ["shopify developer san antonio"],
  faqKeywords: [],
  metaTitle: "Shopify Agency San Antonio | Turn Visitors Into Regulars",
  metaDescription:
    "The Shopify agency San Antonio brands hire to turn one-time visitors into online regulars: new stores, redesigns, Shopify POS and subscriptions at a fixed price.",
  shortTitle: "Shopify Agency San Antonio",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for San Antonio Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "San Antonio Brands Hire to Turn One-Time Visitors Into Online Regulars",
    intro:
      "Someone finds your brand on a weekend trip, at a market stall or through a friend, buys once and goes home. Whether they ever order again depends on your online store. We're the Shopify agency San Antonio brands hire to win that second order: [link:/services/shopify-theme-development|custom themes], [link:/services/shopify-pos-setup|Shopify POS] that links your shop to your site, and repeat-order tools built in. One fixed price, agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-san-antonio-hero-v1.webp",
      alt: "Shopify stores for Wild, Ronaldo Jewelry and Candy Kittens, with 80,000+ monthly subscribers and $8.1M in new annual revenue",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  // Answers the AI Overview's three follow-up questions directly (owner,
  // 2026-11-17): new store or redesign; standard or Plus; apps, SEO or ads.
  summary:
    "Ecomm Wizards is a Shopify agency San Antonio brands hire to turn first-time buyers into repeat customers. A new store suits brands not yet selling online; a redesign suits a store with traffic but few orders. Most start on standard Shopify and move to Plus for checkout control, wholesale or extra storefronts. SEO, custom apps and ad creative are in-house, at a fixed price agreed upfront.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "Every store was designed, built and launched in-house by our own Shopify team.",
  },

  pains: {
    heading: "Why First-Time Buyers Don't Come Back",
    intro:
      "Winning the first sale is the hard part. Losing the second one usually comes down to four things a Shopify agency San Antonio brands hire should fix first.",
    items: [
      {
        icon: "store",
        name: "A Shop and a Website That Don't Talk",
        desc: "Someone buys from your shop or market stand, but their details never reach your online store. You have no way to invite them back.",
        cost: "Every in-person customer is a one-off sale.",
      },
      {
        icon: "clock",
        name: "A Store That's Hard to Find Again",
        desc: "A visitor remembers your name but not your URL, searches on their phone and lands on a slow, dated page that looks nothing like your shop.",
        cost: "They give up, or buy something similar from a bigger brand.",
      },
      {
        icon: "calendar",
        name: "No Reason to Reorder",
        desc: "No subscriptions, no reminders, no follow-up after delivery. The customer liked the product, then simply forgot about it.",
        cost: "Repeat revenue you've already paid to earn, left on the table.",
      },
      {
        icon: "alert",
        name: "Launches and Drops That Break",
        desc: "A limited release sells out in the shop but oversells online, or the launch page goes up late and the moment passes.",
        cost: "Refunds, apologies and customers who don't trust the next drop.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for San Antonio Brands",
    intro:
      "Every build is designed and developed by our own Shopify team, nothing passed to subcontractors. Selling across the state? See our [link:/services/shopify-development-agency/texas|Texas page] for what changes at state level.",
    // Visual rows, each with a video case study the page's own case-studies
    // section doesn't use (Wild, Candy Kittens, Ronaldo Jewelry kept for that).
    items: [
      {
        title: "Custom Theme Development",
        heading: "A store that looks and feels like the shop they remember",
        body: "A custom theme built around your products and your brand, quick on a phone and simple for your team to update. 111SKIN's rebuilt theme and skin quiz lifted conversion rate 46%.",
        covers: ["Custom theme", "Product pages", "Brand design", "Mobile speed", "Editable sections"],
        caseSlug: "111skin-shopify-cro-redesign",
        imageAlt: "111SKIN skincare store on a custom Shopify theme",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Shopify POS and Online in One",
        heading: "Your shop and your website sharing one set of customers and stock",
        body: "Shopify POS in your shop or at your market stand, with every sale, customer and stock count flowing into the same admin as your online store. NEOM brought four retail locations under Shopify POS and grew checkout conversion 34%.",
        covers: ["Shopify POS", "Shared inventory", "Customer profiles", "Email capture", "Buy in store, ship home"],
        caseSlug: "neom-wellbeing-shopify-upgrade",
        imageAlt: "NEOM Wellbeing retail and online store on Shopify",
        cta: { label: "Explore POS setup", href: "/services/shopify-pos-setup" },
      },
      {
        title: "Subscriptions and Repeat Orders",
        heading: "A reason to come back every month, built into the store",
        body: "Subscribe-and-save, reorder reminders and a customer portal for skipping or swapping. Happy Mammoth's subscription rebuild grew subscription revenue 134%.",
        covers: ["Subscriptions", "Reorder reminders", "Customer portal", "Loyalty", "Post-purchase emails"],
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        imageAlt: "Happy Mammoth subscription store on Shopify Plus",
      },
      {
        title: "Drops, Pre-Orders and Launch Pages",
        heading: "Limited releases that go live on time and never oversell",
        body: "Launch pages scheduled ahead, pre-orders with clear ship dates, and stock caps shared between your shop and your site. Loop Earplugs' rebuilt landing pages delivered a 6.4% revenue uplift.",
        covers: ["Launch pages", "Pre-orders", "Stock caps", "Waitlists", "Scheduled releases"],
        caseSlug: "loop-earplugs-shopify-landing-page-cro",
        imageAlt: "Loop Earplugs landing page built on Shopify",
      },
      {
        title: "Discounts and Checkout Rules",
        heading: "Verified discounts and checkout rules that work the way you sell",
        body: "Verified military and first-responder discounts, APO and FPO shipping, and checkout rules for trade or bulk buyers. Everlast's rebuilt checkout, with separate retail and trade paths, lifted conversion rate 152%.",
        covers: ["Verified discounts", "APO/FPO shipping", "Checkout rules", "Trade checkout", "Shopify Functions"],
        caseSlug: "everlast-shopify-plus-sports-redesign",
        imageAlt: "Everlast boxing store with retail and trade checkout",
      },
      {
        title: "Migration and Shopify Plus",
        heading: "Off your old platform, and onto Plus when you need it",
        body: "Products, customers, orders and reviews moved with every URL redirected, then Shopify Plus when you need checkout control or more storefronts. John Hardy moved to Shopify Plus in under three months and grew conversion rate 71%.",
        covers: ["WooCommerce", "Wix", "Squarespace", "Shopify Plus", "301 redirects"],
        caseSlug: "john-hardy-shopify-plus-migration",
        imageAlt: "John Hardy jewelry store migrated to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
    ],
  },

  local: {
    label: "Selling from San Antonio",
    heading: "What San Antonio Means for Your Store",
    intro:
      "Three things about San Antonio shape who buys from you and when. A Shopify agency San Antonio brands rely on should build each one into the store.",
    items: [
      {
        icon: "flag",
        name: "Military City Customers",
        desc: "Joint Base San Antonio is the largest joint base in the Department of Defense, with more than 80,000 full-time personnel and a community of over 250,000 military retirees. If you offer a military discount, verify it at checkout rather than with a code anyone can share, and make sure APO and FPO addresses ship for customers posted overseas.",
      },
      {
        icon: "calendar",
        name: "Eleven Days of Fiesta",
        desc: "Fiesta San Antonio 2027 runs April 15 to 25, and its medal-collecting culture rewards limited, dated releases. Schedule the launch page ahead, cap stock across your shop and your site so a sell-out in one doesn't oversell the other, and offer pre-orders with a clear ship date.",
      },
      {
        icon: "user",
        name: "Millions of Visitors Who Go Home",
        desc: "Visit San Antonio counted about 39 million visitors in its latest annual report. Some of them find your brand on the trip. Capture their email when they buy in person, follow up after they get home, and make reordering online the easiest thing they do all week.",
      },
    ],
  },

  caseStudies: {
    heading: "Stores Built to Keep Customers Coming Back",
    intro:
      "Proof to ask of any Shopify agency San Antonio brands consider: each store here turned first orders into repeat ones, and each result was measured.",
    items: [
      {
        slug: "wild-shopify-plus-subscriptions",
        tags: ["Subscriptions", "New Store", "Personal Care"],
        description: "A refillable personal care brand launched its first Shopify store with subscriptions built in from day one, and grew to more than 80,000 active monthly subscribers within a year.",
        video: "/images/Case%20studies/WeareWild%20video.mp4",
      },
      {
        slug: "candy-kittens-shopify-food-beverage-cro",
        tags: ["Gifting", "Seasonal Campaigns", "Confectionery"],
        description: "A sweets brand rebuilt its store around gifting and seasonal campaigns, with a gift finder and a build-your-own box. Conversion rate rose 182% and new annual revenue reached $8.1M.",
        video: "/images/Case%20studies/Candy%20Kittens%20video.mp4",
      },
      {
        slug: "ronaldo-jewelry-shopify-plus-redesign",
        tags: ["Handcrafted", "Product Configurator", "Shopify Plus"],
        description: "A handmade jewelry brand gave shoppers a configurator to design their own piece and see it before paying. Total sales rose 250% and conversion rate 120%.",
        video: "/images/Case%20studies/Ronaldo%20Jewelry-video.mp4",
      },
    ],
  },

  process: {
    heading: "From First Call to a Store That Sells Again",
    intro:
      "Five stages, each approved by you before the next starts: how a Shopify agency San Antonio brands trust should run a new build or a redesign. Most stores go live about six weeks after the first call.",
    steps: [
      { title: "Scope, Price and Date in Writing", desc: "We review your shop, your store and how customers find you, then fix the scope, one price and a launch date in writing." },
      { title: "Design You Sign Off", desc: "Figma designs for phone and desktop, with your in-store look carried online. You approve every screen before building starts." },
      { title: "Build and Connect", desc: "Theme, POS, subscriptions and launch tools built on a staging store you can try whenever you like." },
      { title: "Test In-Store and Online", desc: "Test sales on the POS and online, a mock drop with capped stock, discounts and APO addresses, all checked before launch." },
      { title: "Launch and 60 Days of Support", desc: "We go live at a quiet hour, watch the first orders and fix anything that comes up for 60 days." },
    ],
  },

  compare: {
    heading: "Choosing a Shopify Agency San Antonio Brands Can Rely On",
    intro: "San Antonio brands usually compare three kinds of help with us. Each fits someone; these questions show which fits you.",
    options: [
      {
        name: "Local design studio",
        goodFor: "Logos, photography, signage and brand identity.",
        watchFor: "A good-looking site isn't the same as one that brings customers back. Ask what repeat purchase rate did after their last Shopify launch.",
      },
      {
        name: "Freelance developer",
        goodFor: "A single fix or one new feature.",
        watchFor: "POS, subscriptions and a redesign at once is a lot for one person. Ask who covers the work during their busy season.",
      },
      {
        name: "Listicle top picks",
        goodFor: "A quick shortlist of names to start from.",
        watchFor: "Rankings rarely show results. Ask each agency on the list for measured numbers from stores like yours.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "POS, subscriptions and drops built in-house",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Each category brings customers back for a different reason. Here is what a Shopify agency San Antonio brands hire should build in for each.",
    items: [
      { icon: "food", name: "Salsas, Sauces and Specialty Food", desc: "Gift boxes, subscribe-and-save and ship-day rules so nothing sits in a hot truck over a weekend." },
      { icon: "star", name: "Jewelry, Art and Handmade Goods", desc: "Configurators, made-to-order lead times and the trust a higher-value order needs." },
      { icon: "shirt", name: "Apparel and Western Wear", desc: "Size guides, limited drops and stock shared between your shop and your site." },
      { icon: "flag", name: "Fiesta Medals and Collectibles", desc: "Dated releases, pre-orders and per-customer limits that keep a drop fair." },
      { icon: "home", name: "Home Decor and Gifts", desc: "Gift guides, gift messages and bundles for visitors buying something to take home." },
      { icon: "box", name: "Wholesale and Trade", desc: "Account pricing and quick reorders for the shops that stock you. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency San Antonio FAQs",
  faqs: [
    {
      question: "Do I need a new store or a redesign?",
      answer:
        "A new store suits a brand that isn't selling online yet or is on a platform it has outgrown. A redesign suits a Shopify store that gets visitors but not enough orders. We look at your traffic and sales on the first call and tell you which one you need, in writing.",
      unique: true,
    },
    {
      question: "Should I use standard Shopify or Shopify Plus?",
      answer:
        "Most brands start on standard Shopify. Plus is worth it when you need checkout customization, wholesale and retail in one store at volume, or more than one storefront. We'll recommend one and explain why before you commit.",
      unique: true,
    },
    {
      question: "Shopify developer or agency for a San Antonio brand?",
      answer:
        "A Shopify developer San Antonio job boards list may suit one fix or a single feature. A new store, POS setup or redesign needs design, development, testing and support together, which is what an agency is for. Ask anyone you consider who handles each part.",
      unique: true,
    },
    {
      question: "Can you connect my shop to my online store?",
      answer:
        "Yes. We set up Shopify POS so in-person sales, customers and stock sit in the same admin as your online store, with email capture at the till so you can invite customers back after they leave.",
      unique: true,
    },
    {
      question: "Can my store offer a verified military discount?",
      answer:
        "Yes. We add verification at checkout so the discount reaches service members, veterans and their families rather than anyone with a shared code, and set up shipping to APO and FPO addresses.",
      unique: true,
    },
    {
      question: "Do you also do SEO, apps or ads?",
      answer:
        "Yes. We handle Shopify SEO, custom apps, conversion optimization and ad creative in-house, plus the landing pages and tracking your ads point to.",
      unique: true,
    },
    {
      question: "How much does a Shopify agency cost?",
      answer:
        "It depends on scope, so we price by project, not by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours, and that number holds unless you add work.",
      unique: false,
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Around six weeks for most stores. If you're launching for Fiesta or the holidays, we count back from that date and write it into the scope.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a slot for a video call with a senior Shopify specialist. Tell us where your customers find you and what you want them to buy next; two working days later you'll have a written price and launch date.",
    bullets: [
      "Walk through your shop, your store and your customers",
      "Get a fixed price and a launch date within 48 hours",
      "Find out whether you need a new store or a redesign",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "jbsa-largest-joint-base",
      claim: "Joint Base San Antonio is the largest joint base in the DoD, with 266 mission partners, more than 80,000 full-time personnel and a local community of more than 250,000 retirees",
      url: "https://www.jbsa.mil/News/News/Article/1055446/502d-air-base-wing-supports-myriad-jbsa-services-missions/",
      publisher: "Joint Base San Antonio",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
    {
      id: "fiesta-2027-dates",
      claim: "Fiesta San Antonio 2027 runs April 15 to 25 (11 days)",
      url: "https://fiestasanantonio.org/2026/08/31/fiesta-san-antonio-commission-2026-27-leadership/",
      publisher: "Fiesta San Antonio Commission",
      captured: "2026-11-17",
      reviewAfterDays: 180,
    },
    {
      id: "fiesta-medal-collecting",
      claim: "Fiesta medal collecting and trading is a long-running San Antonio tradition",
      url: "https://www.ksat.com/news/local/2026/04/16/for-san-antonio-medal-collectors-during-fiesta-the-chase-is-part-of-the-fun/",
      publisher: "KSAT",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
    {
      id: "vsa-visitors",
      claim: "Visit San Antonio's executive annual report: 39.2 million visitors and $23.4 billion economic impact (2024)",
      url: "https://assets.simpleviewinc.com/sv-sanantonio/image/upload/v1/clients/sanantoniotx/VSA25_Executive_Annual_Report_FINAL_121025_f2ce5e46-9b80-4fdc-a2fb-4fc20eed0c59.pdf",
      publisher: "Visit San Antonio",
      captured: "2026-11-17",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
