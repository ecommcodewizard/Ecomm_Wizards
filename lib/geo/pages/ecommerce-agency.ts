// Page 1 of Batch 1: /services/ecommerce-agency (national hub, H1).
// Spec: Batch 1 Page Specification v2.0 (hub spine, section 4.1 asset, section
// 5 proof, section 6 FAQ, section 7 conversion). Keywords: Inventory v4.0 H1.
//
// Primary keyword: "ecommerce agency" (2,400/mo, Google Keyword Planner).
// Secondaries placed once each: "e-commerce agency", "full service ecommerce
// agency", "digital commerce agency", "ecommerce management agency",
// "ecommerce strategy agency".
//
// Every platform figure in the Only-Here Asset came from the vendor's own
// pricing page or developer documentation on 2026-08-19. Per the owner's call,
// the page carries no visible citations and no Sources section; the capture
// date and method stay disclosed in asset.method.
// Every cell is filled and verified as of that date. If a future edit adds a
// figure nobody has checked, mark it NI(...) rather than guessing: an honest
// gap costs less than a wrong number on a table this page is built around.
//
// Copy rules: US spelling, no em dashes, no filler words (lib/geo/forbidden.ts),
// active voice, concrete numbers over adjectives. Agency price bands must stay
// consistent with app/services/shopify-development-agency/page.tsx.

import type { HubPage } from "../types";

const NI = (what: string) => `[NEEDS INPUT: ${what}]`;

export const ECOMMERCE_AGENCY: HubPage = {
  type: "hub",
  slug: "ecommerce-agency",
  path: "/services/ecommerce-agency",
  status: "published",

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency",
  secondaryKeywords: [
    "e-commerce agency",
    "full service ecommerce agency",
    "digital commerce agency",
    "ecommerce management agency",
    "ecommerce strategy agency",
  ],
  // Tertiary / FAQ keyphrases assigned to H1 in the keyword plan. Question
  // forms: they belong in the FAQ block and in answer-shaped passages.
  faqKeywords: [
    "how to choose an ecommerce agency for brand growth",
    "when to hire ecommerce agency",
    "what to look for in an ecommerce development partner",
    "how to choose an ecommerce development agency for my industry",
    "how to value an ecommerce platform design and development agency",
    "what is ecommerce development",
  ],
  metaTitle: "Ecommerce Agency for $1M to $50M Brands",
  metaDescription:
    "An ecommerce agency for brands doing $1M or more. Fixed price before we start, six week builds, code you own. See what each platform actually costs first.",
  shortTitle: "Ecommerce Agency",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "Ecommerce Agency for Brands That Outgrew Their Platform",
  qualifier:
    "An ecommerce agency for brands doing $1M to $50M a year: new builds, replatforms, and the work that follows launch. Under $250,000 in revenue we are the wrong call, and we will say so on the first one.",

  // Same hero image the Shopify development landing page uses.
  heroImage: {
    src: "/images/Group_1000003974_d0eba414-7aec-4930-b534-a4dcc91d004e_1024x1024.png",
    alt: "Ecommerce agency team building a custom Shopify storefront",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "You have done this before. An ecommerce agency pitched a redesign, quoted a range, and billed past it. The launch slipped twice. Six months later conversion sits where it started, and nobody can tell you which change was responsible.\n\nThe design was rarely the problem. The problem was that nobody agreed what finished meant, or what it cost, before anyone wrote code.",

  // Answer-first definition block. This is the passage an AI Overview or an LLM
  // lifts, so it defines the entity, states the band it serves, and names the
  // deliverable, all without depending on the rest of the page.
  quickAnswer:
    "An ecommerce agency builds and runs the store itself: design, development, data, and the integrations behind it. We do that for brands turning over $1M to $50M a year, on Shopify, at a fixed price agreed before development starts. Most stores go live within six weeks, and you own the code.",

  // ── Trust bar (under the hero) ────────────────────────────────────────
  // {storesBuilt} resolves from lib/brand-stats.ts at render time so the
  // headline figure cannot drift from the canonical number.
  trust: {
    heading: "{storesBuilt} Stores Built. Here's Who Trusts Us.",
    subheading:
      "Builds, replatforms, and rescues for brands doing real revenue. Every project scoped, built, and launched in-house by the developers you talk to, not the ecommerce agency model where sales writes the scope and somebody else inherits it.",
  },

  // ── Block 3: What we actually do ──────────────────────────────────────
  whatWeDo: [
    "We do three things. We build new stores, we move existing ones off platforms that stopped fitting, and we take over builds someone else got wrong. The developers who scope your project build it, and you talk to them directly.",
    "Most ecommerce agency projects run in one of three shapes. A new store on Shopify takes four to six weeks. A [link:/services/migration|platform migration] carrying full product, customer, and order history takes six to eight. A rescue starts with an audit, fixes what is costing you revenue now, and rebuilds only the parts that earn it. [link:/services/shopify-development-agency|Custom Shopify development] runs alongside all three.",
    "Custom theme builds run $10,000 to $20,000. Shopify Plus builds with B2B, custom features, or complex integrations run $20,000 to $50,000. Migrations start at $15,000. You get the fixed number and the go-live date in writing before development starts, and scope changes get requoted before we build them, not invoiced after.",
  ].join("\n\n"),

  // ── Who we work with ──────────────────────────────────────────────────
  // Six categories, every one of them backed by studies in lib/case-studies.ts
  // (apparel, beauty, food and drink, jewelry, sports, B2B). Do not add a
  // category here that the corpus cannot evidence.
  segments: {
    heading: "What Kind of Brands Does an Ecommerce Agency Work With?",
    intro:
      "Checkout, speed, and data structure work the same in every category. Merchandising, the product data model, and the way a store fails under load do not. Category experience is what stops you paying an ecommerce agency to learn on your store.",
    items: [
      {
        icon: "apparel",
        name: "Fashion and Apparel",
        what: "Size and fit data, returns that do not eat the margin, and drop mechanics that hold when traffic spikes.",
        breaks: "Returns. When size data does not match what arrives, one sale becomes two shipping legs, a restock, and a refund.",
      },
      {
        icon: "beauty",
        name: "Beauty and Skincare",
        what: "Routine merchandising, ingredient detail at scale, and subscription flows a customer can cancel without emailing you.",
        breaks: "Cancellation. A flow that hides the exit turns a churned subscriber into a chargeback and a public review.",
      },
      {
        icon: "consumable",
        name: "Food, Drink and Supplements",
        what: "Subscription billing, batch and expiry handling, and the disclosure rules that follow anything ingestible.",
        breaks: "Lot and expiry. Shopify counts a SKU, not a batch, so short-dated stock and recalls need a system built on top.",
      },
      {
        icon: "jewelry",
        name: "Jewelry and Accessories",
        what: "High-consideration product pages, made-to-order and engraving options, and heavy imagery that still loads fast.",
        breaks: "Page weight. Full-quality imagery at this price point pushes LCP past the point where mobile buyers leave.",
      },
      {
        icon: "outdoor",
        name: "Sports and Outdoors",
        what: "Spec tables buyers compare line by line, wide variant matrices, and stock that moves with the season.",
        breaks: "The option ceiling. Shopify allows three, so size by width by color leaves nothing for length, fit, or gender.",
      },
      {
        icon: "wholesale",
        name: "B2B and Wholesale",
        what: "Company accounts, a price list per customer, net terms, and quote-to-order without running a second store.",
        breaks: "Price leakage. Trade pricing that renders for logged-out visitors ends up indexed in Google.",
      },
    ],
  },

  // ── Block 4: Only-Here Asset (platform decision table) ────────────────
  asset: {
    title: "What Does Each Ecommerce Platform Actually Cost?",
    intro:
      "List prices, processor penalties, and the ceilings you hit first. From vendor pricing pages and developer docs, not comparison blogs.",
    renderer: "comparison",
    method: {
      captured: "2026-08-19",
      howGathered:
        "Figures come from each vendor's own pricing page and developer documentation on the capture date. We excluded comparison articles and affiliate roundups because their numbers are sold, not reported. License figures are annual-billing list prices in USD. App and hosting costs sit outside the table because no vendor publishes a representative number.",
    },
    columns: ["Criterion", "Shopify", "Shopify Plus", "BigCommerce", "WooCommerce", "Adobe Commerce"],
    rows: [
      {
        label: "License cost at $1M GMV",
        cells: [
          "Advanced at $299/mo billed annually, so $3,588/yr",
          "From $2,300/mo, so $27,600/yr",
          "Scale at $299/mo, plus 0.9% of GMV above $33,333/mo",
          "$0 license. Hosting and extensions are the real cost",
          "No published price. Quote only",
        ],
        note: "Apps, hosting, and processing excluded.",
      },
      {
        label: "License cost at $10M GMV",
        cells: [
          "Still $299/mo, though most stores this size move to Plus",
          "Published entry stays $2,300/mo",
          "Past $2M GMV you move to the enterprise tier, from $1,499/mo",
          "$0 license. Infrastructure becomes the line item that matters",
          "Quote only",
        ],
      },
      {
        label: "License cost at $50M GMV",
        cells: [
          "Not this tier",
          "Negotiated. No public number",
          "Negotiated. No public number",
          "$0 license. Engineering and hosting are the whole cost",
          "Quote only",
        ],
        note: "Three of five stop publishing a price before this row.",
      },
      {
        label: "Penalty for not using native payments",
        cells: [
          "2% on Basic, 1% on Grow, 0.6% on Advanced",
          "0.2%",
          "2% on Core, 1% on Growth, 0.6% on Scale, 0% on contract",
          "None. WooPayments charges 2.9% plus $0.30",
          "None. Adobe does not process payments",
        ],
        note: "At $10M GMV, 0.6% is $60,000 a year. The license is the smaller number.",
      },
      {
        label: "Variant and option ceiling",
        cells: [
          "2,048 variants and 3 options per product",
          "2,048 variants and 3 options per product",
          "600 variants per product. No documented cap on options",
          "No hard cap. Dropdowns go static past 30 variations by default",
          "No published ceiling. Catalog size is an infrastructure question",
        ],
      },
      {
        label: "Checkout customization",
        cells: [
          "Extensions only. checkout.liquid was never available on this tier",
          "Shopify retired checkout.liquid. Extensions and Functions now",
          "Open Checkout is open source React. No plan gate documented",
          "Fully open. The checkout is your own PHP",
          "Fully open source. Anything is buildable, and everything is billable",
        ],
      },
      {
        label: "Getting your data out",
        cells: [
          "CSV for products, customers, orders. Card tokens need a vault migration",
          "Same, plus PAN migration, which is Plus and Enterprise only",
          "CSV or XML by template. Anything past that is the API",
          "Native CSV covers products only. The database is yours",
          "Admin export has no Orders entity. Products and customers only",
        ],
        note: "Card tokens never move in a CSV. Moving them takes a vault-to-vault transfer both processors agree to, and that step is what turns a migration into a re-acquisition campaign.",
      },
    ],
    derived:
      "Two things fall out of this table. Published pricing runs out around $2M in GMV, and above it three of these five quote privately, so your position at the table beats any list price. And the license is rarely the deciding cost: the processor penalty and the ceiling you hit first each cost more. Shopify wins most of these comparisons under $50M, not all of them, and an ecommerce agency worth hiring tells you which one you are.",
    derivedList: {
      title: "When we tell brands not to move to Shopify",
      items: [
        "Your catalog needs more than three option dimensions on one product. Shopify caps options at three and the workarounds get expensive.",
        "You cannot express your checkout rules as an extension. Shopify retired checkout.liquid, so some logic simply will not fit.",
        "You sell in a category that most payment processors restrict. The platform stops mattering when you cannot take money.",
        "Your B2B model needs quote-to-order workflows beyond what native B2B covers, and rebuilding them costs more than the platform ever saves.",
        "You run an ERP integration that works and costs more to rebuild than the license saving returns. Keeping a system nobody enjoys is sometimes correct.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Where headless fits",
        body:
          "Headless is not a sixth column, because it is not a platform. It is a decision to run the storefront separately from the backend, and it works on any of these five. It buys rendering control and costs you the theme editor, most of the app ecosystem, and a permanent front-end developer. Below roughly $20M it removes more than it adds.",
      },
    ],
    reviewAfterDays: 180,
  },

  // Mid-page conversion prompt, placed where the reader has just finished the
  // platform table and intent is highest.
  midCta: {
    text: "Not sure which column your store belongs in? Send us the URL and we will tell you, before you pay anything.",
    label: "Get a straight answer",
  },

  // ── Block 5: How the engagement runs ──────────────────────────────────
  // Rendered as the numbered phase cards used on the Shopify development
  // landing page. Card numbers come from array order, so this order is the
  // sequence a client actually moves through.
  engagement: {
    heading: "How Long Does an Ecommerce Build Take?",
    intro: "Five phases, one fixed price, and a go-live date you hold before anyone writes code. Most ecommerce agency timelines slip because nobody agreed the scope first.",
    steps: [
      {
        week: "Before you pay anything",
        title: "Store Audit",
        what: "We go through the store you have now: analytics, funnel drop-off, theme performance, and app load. You get the findings in writing whether or not you hire us. Most brands see where they are losing money before they have spent a dollar with any ecommerce agency.",
      },
      {
        week: "Week 1",
        title: "Scope & Fixed Price",
        what: "We agree what gets built, what does not, and the date it goes live. You get a written scope and a fixed number by the end of the week. Nothing starts until you hold both. No hourly billing and no scope creep later.",
      },
      {
        week: "Weeks 2 to 4",
        title: "Design & Build",
        what: "Templates, components, and integrations go into a staging store you can open any time. You see progress every week instead of one reveal at the end, and you sign off each milestone before we move to the next one.",
      },
      {
        week: "Week 5",
        title: "Data, Redirects & QA",
        what: "Products, customers, and order history move across. Every existing URL gets mapped to its replacement and tested before launch. We test across devices and browsers and against Core Web Vitals, because a fast store that loses rankings is still a failure.",
      },
      {
        week: "Week 6, then 60 days",
        title: "Launch & Handover",
        what: "Controlled go-live with a rollback plan ready. You get the code, the repository, and documentation for every custom component. Then 60 days of support included, with Search Console and checkout watched closely through the first month.",
      },
    ],
  },

  // ── Block 6: What we don't do ─────────────────────────────────────────
  whatWeDontDo: [
    "We do not sell apps. No affiliate deals with app vendors, so when we say you need one, that is the only reason.",
    "We do not edit a live store directly. Every change goes through a staging copy with a rollback plan behind it, down to a one-line fix.",
    "We do not take equity, revenue share, or performance deals. You pay a fixed fee and keep what the work produces.",
    "We do not quote in a meeting. Every number goes in writing after we have been inside the store.",
  ],

  proofHeading: "What Does an Ecommerce Agency Actually Deliver?",
  objectionsHeading: "What You Are Probably Thinking",

  // ── Block 7: Proof (build type, per Page Spec section 5) ──────────────
  // Figures below are the published heroMetric values in lib/case-studies.ts.
  // No client location appears anywhere, by design.
  proof: [
    {
      slug: "john-hardy-shopify-plus-migration",
      vertical: "Jewelry and accessories",
      whatWasBuilt: "Replatform from Salesforce Commerce Cloud to Shopify Plus",
      outcome: "+71% conversion rate",
      verified: true,
    },
    {
      slug: "capelli-sports-shopify-migration",
      vertical: "Sports and fitness",
      whatWasBuilt: "Migration off WordPress with full redirect mapping",
      outcome: "+24% conversion rate, 95% of SEO equity retained",
      verified: true,
    },
    {
      slug: "wild-shopify-plus-subscriptions",
      vertical: "Cosmetics and beauty",
      whatWasBuilt: "Ground-up Shopify Plus build with a subscription program",
      outcome: "80,000+ monthly subscribers",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  objections: [
    {
      objection: "We paid an agency for a rebuild last year and conversion did not move.",
      answer:
        "Then the rebuild answered the wrong question. Before we quote, we find where your funnel loses people: traffic, product page, cart, or checkout. If the loss is not in the build, we say so and you keep the money. Any digital commerce agency that quotes a rebuild without opening your analytics is selling a template.",
    },
    {
      objection: "How do I know the price will not move?",
      answer:
        "We fix the number before development starts, and any scope change gets requoted before we build it. Overruns start when an ecommerce agency quotes a range against a vague brief. We write the scope in detail first, which is why a quote takes 48 hours instead of an afternoon.",
    },
    {
      objection: "What happens if you disappear after launch?",
      answer:
        "You own the code and documentation from the first commit, so leaving costs nothing. Every project carries 60 days of support after go-live. After that you can retain us, hire in-house, or hand the codebase to anyone else.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // The six tertiary keyphrases assigned to this page in the keyword plan are
  // question forms, so they ARE the questions here rather than phrases buried in
  // answer prose. Each still carries one of the shared-set topics required by
  // Page Spec section 6.2 (cost, timeline, who does the work, what we need from
  // you, what happens if it goes wrong) and the three unique topics from 6.3
  // (freelancer vs agency, who owns the code, when we say no), folded into the
  // answers. Every answer opens with a complete answer to its own question, so
  // a model can quote one line without the surrounding page.
  faqs: [
    {
      // tertiary: what is ecommerce development
      question: "What is ecommerce development?",
      answer:
        "Ecommerce development is the work of building and running the store itself: templates, checkout, integrations, and the product and customer data underneath. Design decides what the store looks like. Development decides whether it loads, converts, and survives your biggest trading day.",
      unique: false,
    },
    {
      // tertiary: how to value an ecommerce platform design and development agency
      // shared set: cost, and what happens if it goes wrong
      question: "How do you value an ecommerce platform design and development agency?",
      answer:
        "Weigh the fixed number against the written scope, never the day rate. Custom theme builds run $10,000 to $20,000, Shopify Plus builds with B2B or complex integrations run $20,000 to $50,000, migrations start at $15,000. Ours is fixed before development starts, so if we underestimate, that cost is ours. If an e-commerce agency hands you a range instead of a number, ask what closes the gap.",
      unique: false,
    },
    {
      // shared set: timeline, and what we need from you
      question: "How long does an ecommerce build take?",
      answer:
        "Most stores go live within six weeks of kickoff: four to six for a new build, six to eight for a migration carrying full product, customer, and order history. From you we need admin access, brand assets, and one person who can decide without a committee. Budget two hours a week. An ecommerce agency that will not commit to a date has not finished scoping.",
      unique: false,
    },
    {
      // tertiary: what to look for in an ecommerce development partner
      // shared set: who does the work, who do I talk to
      question: "What should you look for in an ecommerce development partner?",
      answer:
        "Ask who writes the code and whether you get to talk to them. Here the developers who scope your project build it, with no account manager relaying messages and no part going to a subcontractor you never met. Get the fixed price and go-live date in writing before you sign. That is the difference between a full service ecommerce agency and a reseller.",
      unique: false,
    },
    {
      // tertiary: how to choose an ecommerce agency for brand growth
      // unique: what an agency does that a freelancer cannot
      question: "How do you choose an ecommerce agency for brand growth?",
      answer:
        "Compare agencies on outcomes, not output. Ask what happened to revenue after launch, not how many stores they shipped. A freelancer is the better hire for one well-defined task, like a theme tweak or a single integration. An agency earns the difference when design, development, data migration, and SEO move at once and somebody has to answer when one breaks another.",
      unique: true,
    },
    {
      // tertiary: how to choose an ecommerce development agency for my industry
      question: "How do you choose an ecommerce development agency for your industry?",
      answer:
        "Ask for the two builds closest to your category and what changed after launch. Plenty carries across every industry: checkout, speed, data structure. Plenty does not. Subscription billing, wholesale pricing, configurable products, and regulated categories each fail in ways you only learn by shipping them. If nobody has shipped yours, you fund their education.",
      unique: true,
    },
    {
      // tertiary: when to hire ecommerce agency
      // unique: the two situations where we say no
      question: "When should you hire an ecommerce agency, and when should you not?",
      answer:
        "Hire one when the work spans more roles than you employ, or when a deadline makes getting it wrong cost more than the fee. Do not hire one when your conversion problem sits in the product or the pricing: a rebuild moves that problem rather than solving it, and an honest ecommerce strategy agency says so before quoting. Under $250,000 in revenue, the same money returns more in acquisition.",
      unique: true,
    },
    {
      // unique: who owns the code
      question: "Who owns the code when the project ends?",
      answer:
        "You do. Every line of code, every Liquid template, every metafield definition, and the documentation alongside it. Nothing runs on a proprietary system that keeps you paying us. Any developer or ecommerce management agency can pick the codebase up and carry on.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  conversion: {
    whatYouGet:
      "Send us the store URL. Before you pay anything you get a written read on where the funnel loses people, and whether an ecommerce agency is even the right spend.",
    whatWeWillTellYouNotToDo:
      "If your conversion problem is priced into the product rather than built into the store, we will tell you not to spend a dollar on a rebuild.",
    responseExpectation:
      "A senior developer replies within one business day. The scope and fixed price follow within 48 hours of the call.",
  },

  // ── Block 11: Sources ─────────────────────────────────────────────────
  // Empty by owner decision (2026-08-19): no visible Sources section and no
  // inline citation markers on the page. The vendor URLs behind the platform
  // table are recorded in the commit message and in asset.method.howGathered,
  // which still states where the figures came from and when they were captured.
  sources: [],

  children: [
    "/services/ecommerce-agency/los-angeles",
    "/services/ecommerce-agency/san-diego",
    "/services/ecommerce-agency/san-francisco",
    "/services/ecommerce-agency/new-york",
    "/services/ecommerce-agency/austin",
    "/services/ecommerce-agency/dallas",
    "/services/ecommerce-agency/miami",
    "/services/ecommerce-agency/florida",
    "/services/ecommerce-agency/boston",
    "/services/ecommerce-agency/raleigh",
    "/services/ecommerce-agency/minneapolis",
    "/services/ecommerce-agency/chicago",
    "/services/ecommerce-agency/atlanta",
    "/services/ecommerce-agency/denver",
    "/services/ecommerce-agency/philadelphia",
    "/services/ecommerce-agency/milwaukee",
    "/services/ecommerce-agency/wisconsin",
    "/services/ecommerce-agency/maine",
    "/services/ecommerce-agency/arizona",
    "/services/ecommerce-agency/maryland",
    "/services/ecommerce-agency/new-jersey",
  ],

  // Wider than the spec's 1,500-2,000 hub range, by the owner's call. This hub
  // carries a 6-column x 7-row comparison table whose 35 cells and 4 notes all
  // count as body words, so the prose budget and the table budget were fighting
  // each other. The table is the reason the page exists, so the range moved
  // rather than the table.
  wordCountTarget: [1500, 2600],
};
