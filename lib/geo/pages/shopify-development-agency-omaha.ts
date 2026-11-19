// Geo v5 S5, Shopify dev Phase 2a, page 15 of 15: Omaha (metro), service
// format.
//
// Keywords (v5 plan 3.3; no measured volume):
//   primary    shopify agency omaha (KD 10)
//   secondary  shopify developer omaha
// SERP (2026-11-20): map pack and AI cards of local studios; Shero, Netlynx,
// Uncap (B2B), Solo Media (frozen food and gifting), Baclinc (meat boxes,
// sauces), Codieshub (headless), Elite Shop Experts. Those angles are
// avoided. The developer AI Overview's "What to Look For" checklist (Partner
// status, relevant portfolio, clear scope and post-launch support) drives
// the H1 and is answered in the summary and FAQs. H1 owner pick #1.
// Fortune 500 fact researched but left out: it doesn't change the store.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_OMAHA: ServiceGeoPage = {
  type: "service",
  slug: "omaha",
  path: "/services/shopify-development-agency/omaha",
  hub: "/services/shopify-development-agency",
  geo: { name: "Omaha", type: "metro", areaServed: "Omaha, Nebraska" },

  targetKeyword: "shopify agency omaha",
  secondaryKeywords: ["shopify developer omaha"],
  faqKeywords: [],
  metaTitle: "Shopify Agency Omaha | Redesigns, Custom Apps and Support",
  metaDescription:
    "The Shopify agency Omaha brands hire for redesigns, custom apps and real support after launch, with the scope and one fixed price agreed in writing upfront.",
  shortTitle: "Shopify Agency Omaha",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Omaha Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Omaha Brands Hire for Redesigns, Custom Apps and Support After Launch",
    intro:
      "Plenty of agencies can launch a store. Fewer are still answering the phone three months later. We're the Shopify agency Omaha brands hire to [link:/services/shopify-cro-agency|redesign] a store that isn't selling, build [link:/services/shopify-app-development|custom apps] where off-the-shelf ones fall short, and keep looking after the store once it's live. The scope and one fixed price are agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-omaha-hero-v1.webp",
      alt: "Shopify stores for Dryrobe, ChloBo and Loop Earplugs, with online revenue up 89% and conversion rate up 48%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  // Answers the AI Overview's checklist: Partner status, portfolio, clear
  // scope and post-launch support.
  summary:
    "Ecomm Wizards is a Shopify Plus Partner that redesigns stores, builds custom apps and supports them after launch for Omaha brands, Papillion, Bellevue and Council Bluffs included. Every project starts with a written scope and one fixed price, every change is tested on a staging copy, and 60 days of fixes come with every build.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "Redesigns, custom apps and long-term support, every project handled by our own Shopify developers.",
  },

  pains: {
    heading: "What Goes Wrong After Launch Day",
    intro:
      "Most of the stores we're asked to rescue had a decent launch and no plan after it. These four problems are what the Shopify agency Omaha brands hire should fix first; here's what each one costs.",
    items: [
      {
        icon: "user",
        name: "A Developer Who Moved On",
        desc: "Whoever built the store is busy, unreachable or gone, and nobody else understands how it was put together.",
        cost: "Small fixes that take weeks, or never happen.",
      },
      {
        icon: "chart",
        name: "A Design That Stopped Converting",
        desc: "The store looked right at launch, but your range, your customers and your traffic have changed since.",
        cost: "Visitors who browse and leave.",
      },
      {
        icon: "grid",
        name: "Apps Stacked on Apps",
        desc: "Each gap was patched with another subscription, and now they slow the store and conflict with each other.",
        cost: "Rising monthly fees and a store that breaks after updates.",
      },
      {
        icon: "alert",
        name: "No Idea What You Agreed To",
        desc: "Hourly billing with no written scope, so every request turns into a new invoice and a new argument.",
        cost: "Costs you can't predict and work you can't hold anyone to.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Omaha Brands",
    intro:
      "Our own developers design, build and support every store; nothing is handed to subcontractors. After launch, we can also take on [link:/services/shopify-seo-agency|Shopify SEO] and monthly growth work.",
    // Visual rows; the page's own case studies (Dryrobe, ChloBo, Loop
    // Earplugs) are not reused here.
    items: [
      {
        title: "Store Redesigns",
        heading: "Rebuild the pages that lose sales, in the order they lose them",
        body: "We look at where shoppers drop off, then redesign navigation, collection pages and product pages starting with the worst. Evie Lou's mobile-first redesign lifted conversion rate 82%.",
        covers: ["Drop-off analysis", "Navigation", "Collection pages", "Product pages", "Mobile design"],
        caseSlug: "evie-lou-shopify-fashion-cro",
        imageAlt: "Evie Lou fashion store redesigned on Shopify Plus",
        cta: { label: "Explore conversion optimization", href: "/services/shopify-cro-agency" },
      },
      {
        title: "Custom Apps",
        heading: "One purpose-built app instead of five that almost fit",
        body: "Private apps, checkout rules written as Shopify Functions and admin tools shaped around how your team works. For Saddleback we built a custom credit-approval app, and B2B sales grew 881% in the first month.",
        covers: ["Private apps", "Shopify Functions", "Admin tools", "Checkout rules", "App audits"],
        caseSlug: "saddleback-shopify-plus-b2b",
        imageAlt: "Saddleback store with a custom credit application",
        cta: { label: "Explore app development", href: "/services/shopify-app-development" },
      },
      {
        title: "Integrations",
        heading: "Inventory, accounting and shipping systems that stay in sync",
        body: "ERP, accounting and 3PL connections with alerts and retries, so a failed sync gets flagged instead of discovered at month-end. Mouldings One's ERP-linked portal cut order processing time 74%.",
        covers: ["ERP sync", "Accounting", "3PL routing", "Inventory", "Error alerts"],
        caseSlug: "mouldings-one-shopify-b2b-portal",
        imageAlt: "Mouldings One trade portal connected to its ERP",
        cta: { label: "Explore integrations", href: "/services/shopify-integration-services" },
      },
      {
        title: "Seasonal Drops and Launch Pages",
        heading: "Launch pages scheduled ahead, and stock that never oversells",
        body: "Campaign pages that go live on a timer, capped stock, waitlists and pre-orders for the weeks your traffic spikes. Candy Kittens' seasonal campaign setup lifted conversion rate 182%.",
        covers: ["Scheduled launches", "Stock caps", "Waitlists", "Pre-orders", "Campaign pages"],
        caseSlug: "candy-kittens-shopify-food-beverage-cro",
        imageAlt: "Candy Kittens store with seasonal campaign pages",
      },
      {
        title: "Speed and Maintenance",
        heading: "A store that stays fast as apps and products pile up",
        body: "Regular speed checks, app cleanup, theme updates and fixes handled on staging first. Sneak Energy's rebuild brought load time under three seconds and lifted mobile conversion rate 68%.",
        covers: ["Speed checks", "App cleanup", "Theme updates", "Staging fixes", "Monthly plan"],
        caseSlug: "sneak-energy-shopify-redesign",
        imageAlt: "Sneak Energy store rebuilt for speed",
        cta: { label: "Explore speed optimization", href: "/services/shopify-speed-optimization" },
      },
      {
        title: "Migrations",
        heading: "Off WordPress, Magento or WooCommerce with no downtime",
        body: "Products, customers, orders and reviews moved, redirects in place and rankings tracked after the switch. Capelli Sports moved to Shopify with zero downtime and kept 95% of its search traffic.",
        covers: ["WordPress", "Magento", "WooCommerce", "301 redirects", "Zero downtime"],
        caseSlug: "capelli-sports-shopify-migration",
        imageAlt: "Capelli Sports store migrated to Shopify",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
    ],
  },

  local: {
    label: "Selling from Omaha",
    heading: "What Omaha Means for Your Store",
    intro:
      "Two things about Omaha shape how a store here should be planned. A Shopify agency Omaha brands rely on should have both covered before they matter.",
    items: [
      {
        icon: "flag",
        name: "Every June, the College World Series",
        desc: "The College World Series brings hundreds of thousands of fans to Omaha each June, a record 392,946 across 16 games in 2023. If you sell apparel, gear or gifts, plan June like a launch: pages scheduled ahead, stock caps, waitlists, and an easy way for a visitor to order again once they're home.",
      },
      {
        icon: "user",
        name: "Nebraska's Privacy Law",
        desc: "The Nebraska Data Privacy Act took effect January 1, 2025, enforced by the Attorney General with fines of up to $7,500 per violation. Most small businesses are exempt from most of it, but none may sell sensitive data without consent. We audit which apps and pixels share customer data and set up your consent tools; your lawyer confirms what applies.",
      },
    ],
  },

  caseStudies: {
    heading: "Redesigns, Custom Tools and Support: Three Results",
    intro:
      "One project for each part of the job, and the portfolio to ask of any Shopify agency Omaha brands consider: real stores with measured results.",
    items: [
      {
        slug: "dryrobe-shopify-plus-redesign",
        tags: ["Redesign", "Shopify Plus", "Outdoor Apparel"],
        description: "An outdoor apparel brand merged three separate stores into one redesigned Shopify Plus store with a custom activity and size finder. Online revenue grew 89% and returns fell 31%.",
        video: "/images/Case%20studies/dryrobe%20video%20test.mp4",
      },
      {
        slug: "chlobo-shopify-plus-migration",
        tags: ["Custom Tool", "Engraving Preview", "Jewelry"],
        description: "A jewelry brand needed customers to see personalized engraving before ordering, so we built a custom preview tool into its new Shopify Plus store. Conversion rate rose 48%.",
        video: "/images/Case%20studies/ChloBo%20video.mp4",
      },
      {
        slug: "loop-earplugs-shopify-landing-page-cro",
        tags: ["After Launch", "Structured Testing", "Hearing Protection"],
        description: "An earplug brand selling in 100+ countries kept working with us after launch on a structured testing program. Rebuilt landing pages delivered a 6.4% revenue uplift and a quiz lifted new-visitor conversion 5.9%.",
        video: "/images/Case%20studies/Loop%20Earplugs%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How We Work, Before and After Launch",
    intro:
      "Each stage needs your sign-off before the next begins: the way the Shopify agency Omaha brands trust should run a project. Most redesigns go live about six weeks after the first call.",
    steps: [
      { title: "Write the Scope Down", desc: "What we'll build, what it costs and when it launches, agreed in writing before any work starts." },
      { title: "Design and App Spec", desc: "Page designs for phone and desktop and a written spec for any custom app. You approve both." },
      { title: "Build and Test on Staging", desc: "Every change happens on a staging copy and is tested there, never on your live store." },
      { title: "Launch at a Quiet Hour", desc: "We switch over, watch the first orders and fix anything that comes up, with 60 days of fixes included." },
      { title: "Stay On After Launch", desc: "A monthly plan if you want one: speed checks, app updates, fixes and testing, on the same written terms." },
    ],
  },

  compare: {
    heading: "Comparing Your Shopify Agency Omaha Options",
    intro: "Omaha owners usually compare three alternatives. One question tells each apart from us.",
    options: [
      {
        name: "Pay-per-task marketplace",
        goodFor: "One-off jobs paid when they're done.",
        watchFor: "Each task may go to a different person. Ask who knows your store well enough to support it next month.",
      },
      {
        name: "Local web and SEO studio",
        goodFor: "Brand sites, local SEO and social media.",
        watchFor: "Custom Shopify apps are a specialty. Ask to see apps they've built and still maintain.",
      },
      {
        name: "Hourly offshore team",
        goodFor: "Simple tasks at a low hourly rate.",
        watchFor: "Hours without a written scope add up. Ask what's fixed, what's tested and what happens after launch.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify Plus Partner, 150+ stores built",
        "Redesigns and custom apps by our own team",
        "Written scope and one fixed price",
        "60 days of fixes, then monthly support if you want it",
        "You own the code, the apps and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Every category needs a different mix of design, custom features and upkeep. These are what a Shopify agency Omaha brands work with should plan for.",
    items: [
      { icon: "shirt", name: "Apparel and Fan Gear", desc: "June drops, size guides and stock caps." },
      { icon: "home", name: "Home and Outdoor", desc: "Large option sets, freight delivery and configurators." },
      { icon: "star", name: "Health and Beauty", desc: "Product quizzes, subscriptions and consent-ready data handling." },
      { icon: "paw", name: "Pet Products", desc: "Recurring orders and reorder reminders." },
      { icon: "code", name: "Brands Needing Custom Features", desc: "Private apps, pricing rules and admin tools." },
      { icon: "store", name: "Retail With a Physical Shop", desc: "Shopify POS, shared stock and in-store email capture." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency Omaha FAQs",
  faqs: [
    {
      question: "What should I look for in a Shopify agency?",
      answer:
        "A Shopify Partner listing, stores like yours with measured results, and a clear written answer on scope, price, testing and support after launch. We're a Shopify Plus Partner, we quote one fixed price, we test on staging and every build includes 60 days of fixes.",
      unique: true,
    },
    {
      question: "What happens after my store launches?",
      answer:
        "We watch the first orders and fix anything that comes up for 60 days, at no extra cost. After that you can take a monthly plan for speed checks, app updates, fixes and testing, or simply call us when you need something.",
      unique: true,
    },
    {
      question: "Shopify developer or agency for an Omaha brand?",
      answer:
        "A Shopify developer Omaha task sites list may be fine for one change. A redesign with custom apps and ongoing support needs design, development, testing and someone accountable afterwards, which is an agency's job.",
      unique: true,
    },
    {
      question: "Fixed price or hourly?",
      answer:
        "Fixed. You get the scope and one price in writing before work starts, and that number holds unless you add work. Hourly billing without a scope is how small projects become expensive ones.",
      unique: true,
    },
    {
      question: "Can you take over a store someone else built?",
      answer:
        "Yes. We start with an audit of the theme, apps and integrations, document how it's put together, then fix the urgent problems first. You get a written list of what we found before any work begins.",
      unique: true,
    },
    {
      question: "Does Nebraska's privacy law affect my store?",
      answer:
        "Possibly, depending on your size and what data you hold. We check which apps and pixels share customer data and set up consent tools; your lawyer confirms what the law requires of you.",
      unique: true,
    },
    {
      question: "What will my project cost?",
      answer:
        "A redesign with custom apps costs more than a monthly support plan, so there's no rate card. After a short call you get one fixed price and a date in writing, usually within two working days.",
      unique: false,
    },
    {
      question: "How long does a redesign take?",
      answer:
        "Around six weeks for most redesigns, longer when custom apps are part of it. If June is your busiest month, start planning in the spring.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Book a video call with a senior Shopify specialist. Show us the store, the apps it runs and what's broken; a written scope, price and date follow within two working days.",
    bullets: [
      "Talk through your store, your apps and what's not working",
      "Find out whether you need a redesign, a custom app or support",
      "Get the scope and one fixed price in writing",
      "Keep the written scope either way",
    ],
  },

  sources: [
    {
      id: "cws-attendance",
      claim: "The College World Series in Omaha drew a record 392,946 fans across 16 games in 2023",
      url: "https://frontofficesports.com/college-world-series-still-riding-high-despite-just-missing-records",
      publisher: "Front Office Sports",
      captured: "2026-11-20",
      reviewAfterDays: 365,
    },
    {
      id: "ne-data-privacy-act",
      claim: "Nebraska Data Privacy Act effective January 1, 2025; enforced exclusively by the Attorney General with civil penalties up to $7,500 per violation; small businesses largely exempt but may not sell sensitive data without consent",
      url: "https://www.dwt.com/blogs/privacy--security-law-blog/2024/06/nebraska-data-privacy-act-signed-into-law",
      publisher: "Davis Wright Tremaine",
      captured: "2026-11-20",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
