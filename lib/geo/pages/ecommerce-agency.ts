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
// pricing page or developer documentation on 2026-08-19 and carries an inline
// [src:id] marker resolving to the sources array at the foot of this file.
// Cells still marked [NEEDS INPUT] are gaps nobody has verified yet. Leave them
// as gaps. A wrong number on this table costs more than a missing one.
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
  status: "draft",

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

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "You have done this before. An ecommerce agency pitched a redesign, quoted a range, and billed past it. The launch slipped twice. Six months later conversion sits where it started, and nobody can tell you which change was responsible.\n\nThe design was rarely the problem. The problem was that nobody agreed what finished meant, or what it cost, before anyone wrote code.",

  // ── Block 3: What we actually do ──────────────────────────────────────
  whatWeDo: [
    "We do three things. We build new stores, we move existing ones off platforms that stopped fitting, and we take over builds someone else got wrong. The developers who scope your project build it, and you talk to them directly. Nothing goes to a subcontractor you never met.",
    "Most ecommerce agency projects run in one of three shapes. A new store on Shopify takes four to six weeks. A [link:/services/migration|platform migration] carrying full product, customer, and order history takes six to eight. A rescue starts with an audit, fixes what is costing you revenue now, and rebuilds only the parts that earn it. [link:/services/shopify-development-agency|Custom Shopify development] runs alongside all three.",
    "Custom theme builds run $10,000 to $20,000. Shopify Plus builds carrying B2B, custom features, or complex integrations run $20,000 to $50,000. Migrations start at $15,000. You get the fixed number and the go-live date in writing before development starts, and scope changes get requoted before we build them, not invoiced after.",
  ].join("\n\n"),

  // ── Block 4: Only-Here Asset (platform decision table) ────────────────
  asset: {
    title: "What each ecommerce platform actually costs",
    intro:
      "List prices, processor penalties, and the ceilings you hit first. Taken from vendor pricing pages and developer documentation, not comparison blogs.",
    renderer: "comparison",
    method: {
      captured: "2026-08-19",
      howGathered:
        "Figures come from each vendor's own pricing page and developer documentation on the capture date. We excluded comparison articles and affiliate roundups because their numbers are sold, not reported. License figures are annual-billing list prices in USD. App and hosting costs sit outside the table because no vendor publishes a representative number. Blank cells are unverified gaps, not estimates.",
    },
    columns: ["Criterion", "Shopify", "Shopify Plus", "BigCommerce", "WooCommerce", "Adobe Commerce"],
    rows: [
      {
        label: "Published license cost at $1M GMV",
        cells: [
          "Advanced at $299/mo billed annually, so $3,588/yr [src:shopify-pricing]",
          "From $2,300/mo, so $27,600/yr [src:shopify-pricing]",
          "Scale at $299/mo, plus 0.9% of GMV above $33,333/mo [src:bigcommerce-pricing]",
          "$0 license. Hosting and extensions are the real cost",
          "No published price. Quote only [src:adobe-pricing]",
        ],
        note: "Apps, hosting, and card processing excluded.",
      },
      {
        label: "Published license cost at $10M GMV",
        cells: [
          "Still $299/mo, though most stores this size move to Plus",
          "Published entry stays $2,300/mo [src:shopify-pricing]",
          "Past $2M GMV you move to the enterprise tier, from $1,499/mo [src:bigcommerce-pricing]",
          "$0 license. Infrastructure becomes the line item that matters",
          "Quote only [src:adobe-pricing]",
        ],
      },
      {
        label: "Published license cost at $50M GMV",
        cells: [
          "Not the tier for this volume",
          "Negotiated. No public number applies here",
          "Negotiated. No public number applies here",
          "$0 license. Engineering and hosting are the whole cost",
          "Quote only [src:adobe-pricing]",
        ],
        note: "Three of five platforms stop publishing a price before this row.",
      },
      {
        label: "Penalty for not using the native processor",
        cells: [
          "2% on Basic, 1% on Grow, 0.6% on Advanced [src:shopify-pricing]",
          "0.2% [src:shopify-pricing]",
          "2% on Core, 1% on Growth, 0.6% on Scale, 0% on contract [src:bigcommerce-pricing]",
          "None. WooPayments charges 2.9% plus $0.30 [src:woo-fees]",
          "None. Adobe does not process payments",
        ],
        note: "At $10M GMV, 0.6% is $60,000 a year. The license is the smaller number.",
      },
      {
        label: "Variant and option ceiling",
        cells: [
          "2,048 variants and 3 options per product [src:shopify-variants]",
          "2,048 variants and 3 options per product [src:shopify-variants]",
          NI("confirm the current per-product variant cap from support.bigcommerce.com; their support forum repeatedly cites 600 but the docs page would not load on 2026-08-19"),
          "No hard cap. Dropdowns go static past 30 variations by default [src:woo-variations]",
          "No published ceiling. Catalog size is an infrastructure question",
        ],
      },
      {
        label: "Checkout customization",
        cells: [
          "Extensions only. checkout.liquid was never available on this tier [src:checkout-liquid]",
          "Shopify retired checkout.liquid. Extensions and Functions now [src:checkout-liquid]",
          NI("confirm which checkout customization options are plan-gated from developer.bigcommerce.com"),
          "Fully open. The checkout is your own PHP",
          "Fully open source. Anything is buildable, and everything is billable",
        ],
      },
      {
        label: "Getting your data out",
        cells: [
          NI("confirm from help.shopify.com exactly which objects export natively and what does not, especially stored payment tokens and order history depth"),
          NI("same as Shopify, plus confirm whether Plus-only objects carry any different export path"),
          NI("confirm the documented export path and its limits from support.bigcommerce.com"),
          NI("confirm the documented export tooling from woocommerce.com, including whether subscription tokens move"),
          NI("confirm the documented export path from the Adobe Commerce user guide"),
        ],
        note: "Stored card tokens are the row that decides most migrations. Verify per platform before quoting one.",
      },
    ],
    derived:
      "Two things fall out of this table. Published pricing runs out around $2M in GMV, and above it three of these five quote privately, so your position at the table beats any list price. And the license is rarely the deciding cost: the processor penalty and the ceiling you hit first each cost more than the monthly fee. Shopify wins most of these comparisons under $50M. It does not win all of them, and an ecommerce agency worth hiring tells you which one you are.",
    derivedList: {
      title: "When we tell brands not to move to Shopify",
      items: [
        "Your catalog needs more than three option dimensions on a single product. Shopify caps options at three, and the workarounds get expensive quickly [src:shopify-variants].",
        "You cannot express your checkout rules as an extension. Shopify retired checkout.liquid, so checkout changes run through extensions now, and some logic will not fit [src:checkout-liquid].",
        "You sell in a category that most payment processors restrict. The platform stops mattering when you cannot take money.",
        "Your B2B model needs quote-to-order workflows beyond what native B2B covers, and rebuilding them costs more than the platform ever saves.",
        "You run an ERP integration that works, and the rebuild costs more than the license saving returns. Keeping a system nobody enjoys is sometimes the correct call.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Where headless fits",
        body:
          "Headless is not a sixth column, because it is not a platform. It is a decision to run the storefront separately from the backend, and it works on any of these five. It buys rendering control, and it costs you the theme editor, most of the app ecosystem, and a permanent front-end developer. Below roughly $20M it removes more than it adds.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Block 5: How the engagement runs ──────────────────────────────────
  howEngagementRuns: [
    {
      week: "Before you pay anything",
      what: "We audit your store: analytics, funnel drop-off, theme performance, app load. You get the findings whether or not you hire us.",
    },
    {
      week: "Week 1",
      what: "Scope and design direction. We agree what gets built, what does not, and the go-live date. We fix the price at the end of this week.",
    },
    {
      week: "Weeks 2 to 4",
      what: "Build. Templates, components, and integrations go into a staging store you can open whenever you want. You see progress weekly instead of one reveal at the end.",
    },
    {
      week: "Week 5",
      what: "Data, redirects, and QA. Products, customers, and order history move across. Every existing URL gets mapped to its replacement and tested before launch.",
    },
    {
      week: "Week 6, then 60 days",
      what: "Launch, then 60 days of support included. We watch Search Console and checkout for the first month and fix what surfaces.",
    },
  ],

  // ── Block 6: What we don't do ─────────────────────────────────────────
  whatWeDontDo: [
    "We do not sell apps. No affiliate deals with app vendors, so when we say you need one, that is the only reason.",
    "We are a Shopify-only ecommerce agency. We do not build on WooCommerce or Adobe Commerce. If your business belongs on either, we will say so and point you somewhere useful.",
    "We do not take equity, revenue share, or performance deals. You pay a fixed fee and keep everything the work produces.",
    "We do not quote in a meeting. Every number goes in writing after we have been inside the store.",
  ],

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
        "Then the rebuild answered the wrong question. Before we quote, we find where your funnel loses people: traffic quality, product page, cart, or checkout. If the loss is not in the build, we say so and you keep the money. Any digital commerce agency that quotes a rebuild without opening your analytics is selling you a template.",
    },
    {
      objection: "How do I know the price will not move?",
      answer:
        "We fix the number before development starts, and any scope change gets requoted before we build it. Overruns start when an ecommerce agency quotes a range against a vague brief. We write the scope in detail first, which is why a quote takes 48 hours instead of an afternoon.",
    },
    {
      objection: "What happens if you disappear after launch?",
      answer:
        "You own the code and documentation from the first commit, so leaving costs you nothing. Every project carries 60 days of support after go-live. After that you can retain us, hire in-house, or hand the codebase to anyone else.",
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
        "Weigh the fixed number against the written scope, never the day rate. For reference: custom theme builds run $10,000 to $20,000, Shopify Plus builds carrying B2B or complex integrations run $20,000 to $50,000, and migrations start at $15,000. Ours is fixed before development starts, so if we underestimate the work that cost is ours. If an e-commerce agency hands you a range instead of a number, ask what closes the gap.",
      unique: false,
    },
    {
      // shared set: timeline, and what we need from you
      question: "How long does an ecommerce build take?",
      answer:
        "Most stores go live within six weeks of kickoff, four to six for a new build and six to eight for a migration carrying full product, customer, and order history. From you we need admin access, brand assets, and one person who can decide without a committee. Budget two hours a week. An ecommerce agency that will not commit to a date has not finished scoping.",
      unique: false,
    },
    {
      // tertiary: what to look for in an ecommerce development partner
      // shared set: who does the work, who do I talk to
      question: "What should you look for in an ecommerce development partner?",
      answer:
        "Ask who writes the code and whether you get to talk to them. Here the developers who scope your project build it, with no account manager relaying messages and no part going to a subcontractor you never met. Get the fixed price and go-live date in writing before you sign. That is the difference between a full service ecommerce agency and a reseller with a slide deck.",
      unique: false,
    },
    {
      // tertiary: how to choose an ecommerce agency for brand growth
      // unique: what an agency does that a freelancer cannot
      question: "How do you choose an ecommerce agency for brand growth?",
      answer:
        "Compare agencies on outcomes, not output. Ask what happened to revenue after launch rather than how many stores they have shipped. A freelancer is the better hire for one well-defined task, like a theme tweak or a single integration. An agency earns the difference when design, development, data migration, and SEO move at once and somebody has to answer when one breaks another.",
      unique: true,
    },
    {
      // tertiary: how to choose an ecommerce development agency for my industry
      question: "How do you choose an ecommerce development agency for your industry?",
      answer:
        "Ask for the two builds closest to your category and what changed after launch. Plenty carries across every industry: checkout, speed, data structure. Plenty does not. Subscription billing, wholesale pricing, configurable products, and regulated categories each fail in ways you only learn by shipping them. If nobody has shipped yours, you are funding their education.",
      unique: true,
    },
    {
      // tertiary: when to hire ecommerce agency
      // unique: the two situations where we say no
      question: "When should you hire an ecommerce agency, and when should you not?",
      answer:
        "Hire one when the work spans more roles than you employ, or when a deadline makes getting it wrong cost more than the fee. Do not hire one when your conversion problem sits in the product or the pricing, because a rebuild moves that problem rather than solving it, and an honest ecommerce strategy agency says so before quoting. Under roughly $250,000 in revenue, the same money returns more in acquisition.",
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
      "Send us the store URL. Before you pay anything, you get a written read on where the funnel loses people and whether an ecommerce agency is even the right spend.",
    whatWeWillTellYouNotToDo:
      "If your conversion problem is priced into the product rather than built into the store, we will tell you not to spend a dollar on a rebuild.",
    responseExpectation:
      "A senior developer replies within one business day, and the scope with its fixed price follows within 48 hours of the call.",
  },

  // ── Block 11: Sources ─────────────────────────────────────────────────
  sources: [
    {
      id: "shopify-pricing",
      claim: "Shopify plan prices and the additional fee charged when a merchant does not use Shopify Payments.",
      url: "https://www.shopify.com/pricing",
      publisher: "Shopify",
      captured: "2026-08-19",
      reviewAfterDays: 180,
    },
    {
      id: "shopify-variants",
      claim: "Shopify allows up to 2,048 variants and 3 options per product.",
      url: "https://shopify.dev/changelog/the-product-variant-limit-is-now-2048-for-all-merchants",
      publisher: "Shopify Developer Changelog",
      captured: "2026-08-19",
      reviewAfterDays: 365,
    },
    {
      id: "checkout-liquid",
      claim: "checkout.liquid was a Shopify Plus feature and is retired, with checkout customization now handled through checkout extensions.",
      url: "https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid",
      publisher: "Shopify Developer Documentation",
      captured: "2026-08-19",
      reviewAfterDays: 180,
    },
    {
      id: "bigcommerce-pricing",
      claim: "BigCommerce plan prices, the GMV thresholds that force a plan upgrade, and the fees charged on open payment providers.",
      url: "https://www.bigcommerce.com/essentials/pricing/",
      publisher: "BigCommerce",
      captured: "2026-08-19",
      reviewAfterDays: 180,
    },
    {
      id: "woo-fees",
      claim: "WooPayments charges 2.9% plus $0.30 on domestic US card payments.",
      url: "https://woocommerce.com/document/woopayments/fees-and-debits/fees/",
      publisher: "WooCommerce",
      captured: "2026-08-19",
      reviewAfterDays: 180,
    },
    {
      id: "woo-variations",
      claim: "WooCommerce switches variable product dropdowns from dynamic to static past 30 variations by default, controlled by the woocommerce_ajax_variation_threshold filter.",
      url: "https://woocommerce.com/document/change-limit-on-number-of-variations-for-dynamic-variable-product-dropdowns/",
      publisher: "WooCommerce",
      captured: "2026-08-19",
      reviewAfterDays: 365,
    },
    {
      id: "adobe-pricing",
      claim: "Adobe publishes no price list for Adobe Commerce; pricing is quoted through sales.",
      url: "https://business.adobe.com/products/commerce/pricing.html",
      publisher: "Adobe",
      captured: "2026-08-19",
      reviewAfterDays: 180,
    },
  ],

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

  wordCountTarget: [1500, 2000],
};
