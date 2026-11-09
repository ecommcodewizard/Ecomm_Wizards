// Geo v5 S2, page 7 of 18: Atlanta, service format.
//
// Keywords (v5 plan 3.2; SERP checked 2026-11-10: SEMrush KD 14% on the
// experts term, Atlanta pages have 0-1 referring domains; map pack + AI
// Overview list agencies with Atlanta addresses):
//   primary    shopify agency atlanta (20)
//   secondary  atlanta shopify experts (40-50): title, meta, FAQ heading.
//              SERP check passed (Shopify directory #9, rest agencies/lists)
//              atlanta shopify developer (50, Ahrefs only): FAQ heading;
//              SERP not separately checked, so no section is built on it
//   variants   shopify experts atlanta, shopify expert atlanta
// H1 (owner pick #3): "professional store", echoing the PAA "How to make a
// professional Shopify store?". Body leans to beauty, wellness and personal
// care (Atlanta's beauty-entrepreneur scene). Kept clear of
// /services/ecommerce-agency/atlanta ("ecommerce agency atlanta").

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_ATLANTA: ServiceGeoPage = {
  type: "service",
  slug: "atlanta",
  path: "/services/shopify-development-agency/atlanta",
  hub: "/services/shopify-development-agency",
  geo: { name: "Atlanta", type: "metro", areaServed: "Atlanta, Georgia" },

  targetKeyword: "shopify agency atlanta",
  secondaryKeywords: ["atlanta shopify experts", "atlanta shopify developer"],
  faqKeywords: ["shopify experts atlanta", "shopify expert atlanta"],
  metaTitle: "Shopify Agency Atlanta | Shopify Experts for Professional Stores",
  metaDescription:
    "The Shopify agency Atlanta brands hire for a professional store that sells: custom design, subscriptions, quizzes and Shopify Plus, by Shopify experts at a fixed price.",
  shortTitle: "Shopify Agency Atlanta",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Atlanta Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Atlanta Brands Hire for a Professional Store That Sells",
    intro:
      "Shoppers decide in seconds whether your store looks like a brand they can trust. We're the Shopify agency Atlanta brands hire to make that first impression and turn it into repeat orders: [link:/services/shopify-theme-development|custom design], subscriptions, product quizzes, [link:/services/shopify-plus-development|Shopify Plus] and [link:/services/migration|platform migrations], at a fixed price agreed before any work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-atlanta-hero-v1.webp",
      alt: "Beauty and wellness Shopify stores for NEOM Wellbeing, Wild and Happy Mammoth, with subscription revenue up 218% and conversion up 61%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency Atlanta brands hire for a professional store that sells: custom design and themes, subscriptions, product quizzes, Shopify Plus and platform migrations, with a focus on beauty, wellness and personal care. The team works only on Shopify, has built 150+ stores, and agrees a fixed price and launch date in writing before work starts.",

  trust: {
    heading: "Brands That Trust Us With a Store Customers Come Back To",
    subheading: "Beauty, wellness and personal care brands among them, every store designed and built in-house by our own Shopify team.",
  },

  pains: {
    heading: "Why a Store Can Look Fine and Still Not Sell",
    intro:
      "A clean theme isn't the same as a professional store. These are the four gaps any Shopify agency Atlanta brands hire should close first, and the ones we see most in beauty and wellness.",
    items: [
      {
        icon: "grid",
        name: "A Template Shoppers Have Seen Before",
        desc: "The same theme, the same layout and the same stock icons as a hundred other brands. Nothing on the page tells a first-time visitor why your products are different.",
        cost: "Shoppers compare you on price, because the store gives them nothing else to compare.",
      },
      {
        icon: "search",
        name: "Customers Can't Tell Which Product Is for Them",
        desc: "Shade, skin type, hair type, routine: when the store can't help someone choose, they guess, buy the wrong thing or leave without buying.",
        cost: "Lost first orders and returns from customers who picked the wrong product.",
      },
      {
        icon: "clock",
        name: "No Easy Way to Reorder",
        desc: "Your best customers run out every month, but there's no subscription, no reorder reminder and no saved routine. They have to remember to come back.",
        cost: "Repeat revenue goes to whichever brand reminds them first.",
      },
      {
        icon: "star",
        name: "Reviews and Proof Buried Below the Fold",
        desc: "Ratings, before-and-after photos and ingredient details sit at the bottom of the page, if they're there at all, so shoppers have to scroll for the reasons to trust you.",
        cost: "Hesitant shoppers leave before they see the reasons to buy.",
      },
    ],
  },

  services: {
    label: "Shopify Services",
    heading: "What Makes a Shopify Store Look and Sell Like a Brand",
    intro:
      "Design, development and launch are handled in-house by people who work only on Shopify. When the store is live, we can also run [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO].",
    items: [
      {
        title: "Custom Shopify Design",
        body: "A store designed around your brand and your products in Figma, desktop and mobile, so it looks like you from the first screen. You approve every page before we build it.",
      },
      {
        title: "Subscriptions and Reorders",
        body: "Subscribe-and-save, flexible delivery schedules and one-click reorders, set up so customers can skip, swap or pause without emailing you.",
      },
      {
        title: "Product Quizzes and Finders",
        body: "Shade, skin-type, hair-type and routine finders that recommend the right products and remember the answers for next time.",
      },
      {
        title: "Bundles and Routines",
        body: "Build-your-own kits, routine bundles and gift sets that raise order value without a pile of discount codes.",
      },
      {
        title: "Custom Theme Development",
        body: "Fast, flexible sections your team can edit to launch new products and campaigns without calling a developer.",
      },
      {
        title: "Shopify Plus Builds",
        body: "Checkout extensions, Shopify Functions, expansion stores and automation for brands whose volume justifies Plus. We'll tell you if yours doesn't yet.",
      },
      {
        title: "Platform Migration",
        body: "Move from WooCommerce, Wix, Squarespace or Magento with products, customers, subscriptions and reviews intact, and every old URL redirected.",
      },
      {
        title: "Ongoing Support",
        body: "Every build includes 60 days of post-launch support, then an optional monthly retainer for new pages, launches and fixes.",
      },
    ],
  },

  local: {
    label: "Selling from Atlanta",
    heading: "What Selling from Atlanta Means for Your Store",
    intro:
      "Three things about Atlanta change how your store should be built: the brands you're competing with, how far you can ship in two days, and Georgia's sales tax rules.",
    items: [
      {
        icon: "star",
        name: "A Hub for Beauty Brands",
        desc: "Atlanta has been a center of the hair and beauty industry since Bronner Bros. started there in the 1940s, and Beauty Independent calls it a hotbed for beauty entrepreneurs today. If you compete in that crowd, the store has to look as considered as the product.",
      },
      {
        icon: "truck",
        name: "Two Days to Most of the Market",
        desc: "The Atlanta Regional Commission says more than 80% of US commercial and consumer markets can be reached from the region within two days. If you ship from Atlanta, we put that promise on the product page, with delivery dates by ZIP code.",
      },
      {
        icon: "receipt",
        name: "Georgia Sales Tax, Set Up Right",
        desc: "Atlanta's combined sales tax rate is 8.9%. Selling into Georgia from another state? You must collect once you pass $100,000 in Georgia sales or 200 Georgia orders in a year, so a store selling small-ticket products can cross the line on order count alone. We set up Shopify Tax for whichever applies, and your accountant handles registration and filing.",
      },
    ],
  },

  caseStudies: {
    heading: "Beauty and Wellness Stores With Results",
    intro:
      "Proof to ask of any Shopify agency Atlanta brands consider: each project here made customers buy again, and each result was measured.",
    items: [
      {
        slug: "wild-shopify-plus-subscriptions",
        tags: ["Personal Care", "Subscriptions", "Shopify Plus"],
        description: "A sustainable personal care brand launched its first Shopify store and a subscription engine from zero, reaching 80,000+ active monthly subscribers and +218% subscription revenue.",
        video: "/images/Case%20studies/WeareWild%20video.mp4",
      },
      {
        slug: "happy-mammoth-shopify-subscriptions-cro",
        tags: ["Wellness", "Product Quiz", "Subscriptions"],
        description: "A supplement brand rebuilt its product quiz and launched recurring orders. Subscription revenue rose 134% and conversion rate 61%.",
        video: "/images/Case%20studies/happy-mammoth-video.mp4",
      },
      {
        slug: "neom-wellbeing-shopify-upgrade",
        tags: ["Wellbeing", "Shopify 2.0", "Shopify POS"],
        description: "A luxury wellbeing brand moved to Shopify 2.0, joined its retail stores to Shopify POS and expanded to three markets. Checkout conversion rose 34%.",
        video: "/images/Case%20studies/NEOM%20Wellbeing%20video.mp4",
      },
    ],
  },

  process: {
    heading: "From First Call to a Store You're Proud to Share",
    intro:
      "Five stages with your sign-off at each one, the way any Shopify agency Atlanta brands trust should run a build. Most stores are live about six weeks after kickoff.",
    steps: [
      { title: "Brand and Scope", desc: "We look at your brand, your products and how customers buy and reorder, then fix the scope, the price and the launch date in writing." },
      { title: "Design the Store", desc: "Figma designs for desktop and mobile, built around your photography, reviews and product details. You approve every screen." },
      { title: "Build and Connect", desc: "Theme, quiz, subscriptions and apps built on a staging store, with your products, reviews and customer data brought across." },
      { title: "Test Every Path", desc: "First orders, subscriptions, quiz results, discounts and tax rules tested on every device before launch." },
      { title: "Launch and Grow", desc: "A planned go-live, 60 days of support, and a list of the first tests to run once traffic arrives." },
    ],
  },

  compare: {
    heading: "What to Check on Your Shopify Agency Atlanta Shortlist",
    intro: "Your search will show local studios, freelancers and directory listings. Each one suits a different stage of a brand.",
    options: [
      {
        name: "Local web design studio",
        goodFor: "A strong visual identity and the option to meet in person.",
        watchFor: "Ask to see subscription and quiz builds that are live, not just homepage mockups.",
      },
      {
        name: "Freelance Shopify developer",
        goodFor: "Small changes and single features.",
        watchFor: "Design, subscriptions, apps and migration rarely sit with one person, and launches slip when they're busy.",
      },
      {
        name: "Shopify Partner Directory listings",
        goodFor: "A long list of options to start from.",
        watchFor: "A listing shows services offered, not results delivered. Ask for measured outcomes from brands like yours.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Design, subscriptions and quizzes built in-house",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Beauty and wellness lead the way, but the same craft applies across categories. Here is what a Shopify agency Atlanta brands hire should change in the build for each.",
    items: [
      { icon: "star", name: "Beauty and Cosmetics", desc: "Shade finders, swatches that match the product, before-and-after galleries and regimen bundles." },
      { icon: "user", name: "Hair Care", desc: "Hair-type quizzes, routine kits, subscriptions for the products customers reorder, and salon pricing for professionals." },
      { icon: "food", name: "Wellness and Supplements", desc: "Subscriptions, quizzes, ingredient detail that answers questions, and flexible delivery schedules." },
      { icon: "shirt", name: "Fashion and Accessories", desc: "Size guidance, lookbooks that link to products, and drops timed to campaigns." },
      { icon: "home", name: "Home and Fragrance", desc: "Scent finders, gift sets, seasonal collections and bundles for gifting." },
      { icon: "box", name: "Salon and Wholesale", desc: "Professional and stockist pricing alongside retail. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency FAQs for Atlanta Brands",
  faqs: [
    {
      question: "Are you Atlanta Shopify experts or a general web agency?",
      answer:
        "Shopify experts. We work only on Shopify and Shopify Plus and have built 150+ stores, so every Shopify expert on your project knows the platform in depth, from theme code to subscriptions and checkout.",
      unique: true,
    },
    {
      question: "How do I hire an Atlanta Shopify developer or a Shopify Partner?",
      answer:
        "Start with stores they have built and the results those stores got, then ask for a written scope with a fixed price and launch date. Shopify's Partner Directory lists agencies; we're a Shopify Plus Partner, and you can book a call with us directly from this page.",
      unique: true,
    },
    {
      question: "How do you make a professional Shopify store?",
      answer:
        "Start with design built around your products and customers rather than a stock theme, then add what makes people trust and return: clear product detail, visible reviews, fast mobile pages, and easy reordering. We design, build and test all of it before launch.",
      unique: true,
    },
    {
      question: "How much does Shopify take from each sale?",
      answer:
        "It depends on your plan and how customers pay. Shopify charges a monthly plan fee plus payment processing on each order, and an extra transaction fee if you use a third-party payment provider instead of Shopify Payments. Check Shopify's pricing page for current rates.",
      unique: true,
    },
    {
      question: "How much does an Atlanta Shopify agency charge?",
      answer:
        "It depends on the scope, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours.",
      unique: false,
    },
    {
      question: "Can you set up subscriptions on Shopify?",
      answer:
        "Yes. We set up subscribe-and-save, flexible schedules and a customer portal for skipping, swapping and pausing, using the subscription app that fits your products, and test every renewal path before launch.",
      unique: false,
    },
    {
      question: "Can you build a product quiz for our store?",
      answer:
        "Yes. We build quizzes that match customers to the right product or routine, save their answers to their account, and feed the results into your email marketing.",
      unique: true,
    },
    {
      question: "Do you set up Georgia sales tax in Shopify?",
      answer:
        "Yes. We configure Shopify Tax so each order carries the right Georgia rate, including Atlanta's 8.9% combined rate. Out-of-state sellers must collect once they pass $100,000 in Georgia sales or 200 Georgia orders a year. We set up the store side; your accountant handles registration and filing.",
      unique: true,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a time for an online call with a senior Shopify specialist. Show us your store and your plans, and within 48 hours you'll have a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your store, your products and what is holding sales back",
      "Get a fixed price and a launch date within 48 hours",
      "Find out what Shopify does natively and what needs custom work",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "atl-beauty",
      claim: "Atlanta is emerging as a hotbed for beauty entrepreneurs; its Black hair and beauty legacy traces to Bronner Bros. (1940s)",
      url: "https://www.beautyindependent.com/why-atlanta-is-emerging-as-a-hotbed-for-beauty-entrepreneurs/",
      publisher: "Beauty Independent",
      captured: "2026-11-10",
      reviewAfterDays: 365,
    },
    {
      id: "arc-freight",
      claim: "More than 80% of US commercial and consumer markets can be reached from the Atlanta region within 2 days",
      url: "https://atlantaregional.org/what-we-do/transportation-planning/freight-transportation/",
      publisher: "Atlanta Regional Commission",
      captured: "2026-11-10",
      reviewAfterDays: 365,
    },
    {
      id: "atl-rate",
      claim: "Atlanta combined sales tax rate 8.9% (4% state, 3% county, 1.5% city, 0.4% special district)",
      url: "https://trykintsugi.com/sales-tax-guides/usa/georgia/atlanta",
      publisher: "Kintsugi (Georgia DOR rates)",
      captured: "2026-11-10",
      reviewAfterDays: 180,
    },
    {
      id: "ga-nexus",
      claim: "Georgia remote sellers must collect once sales exceed $100,000 or 200 transactions",
      url: "https://quaderno.io/guides/georgia/sales-tax/",
      publisher: "Quaderno (Georgia DOR)",
      captured: "2026-11-10",
      reviewAfterDays: 180,
    },
  ],
  wordCountTarget: [1600, 2800],
};
