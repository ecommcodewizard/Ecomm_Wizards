// Batch 1b, page 10: /services/ecommerce-agency/dallas
// Spec: Batch 1 Page Specification v2.0 section 2.2 (geo spine).
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce development agency dallas" (10/mo, Keyword Planner)
// Inventory: Geo Inventory & Batch Plan v4.0, page #15, Texas metro.
// Hub: /services/ecommerce-agency (published, lists this path in `children`).
//
// ── READ THE KEYWORD FIRST (Page Standard step 01) ───────────────────────────
//
// "He typed this because he already decided ____ and still needs to work out ___."
//
//   He already decided: DEVELOPMENT. Not design in general, not marketing. He
//   wants somebody to build something.
//   Still open: THE PLATFORM. The keyword says "ecommerce", not Shopify.
//
// So this page sits between the two Austin pages. It is NARROWER than
// /services/ecommerce-agency/austin, where the reader has not picked a service,
// and it must NOT open with a six-service menu: the standard is explicit that a
// reader who has already narrowed reads a wide menu as "they didn't listen".
// The disciplines block here is six rows of DEVELOPMENT, not six departments.
//
// And it carries the same hard constraint as the Austin ecommerce page: never
// write as if he is already on Shopify. The SERP confirms the reader has not
// declared a platform (see the section scan below).
//
// ── ROIA (Page Standard step 03) ─────────────────────────────────────────────
//
// ONE READER. Runs an ecommerce business in the eight figures. Technical enough
// to know what he wants built, or at least what it has to do. The secondary
// keywords say a lot about him: "b2b ecommerce development services dallas" and
// "ecommerce app development company in dallas" are not the searches of someone
// who wants a prettier homepage. He has systems, and they have to talk to
// each other.
//
// ONE IDEA (17 words)
// The storefront is the quick part of a development project. What takes the
// time is everything behind it.
//
// ONE OFFER, TWO DOORS. Book a call, or leave details. Both end in the free audit.
// ONE ACTION. Every button says "Get in touch with us", resolving to #contact.
//
// ── WHY THIS ANGLE ───────────────────────────────────────────────────────────
//
// Taken, and unusable here:
//   - ecommerce-agency/new-york (#11): the platform ceiling and migration.
//   - shopify-development-agency/austin (#13): which kind of company you are
//     hiring, with the four-options table.
//   - ecommerce-agency/austin (#14): name the number before the quote, with the
//     migration scoping sheet as its asset.
//
// This page argues the thing that is specifically true of DEVELOPMENT buying:
// the visible build is a fraction of the work and of the price, which is why
// two quotes for nominally the same project can differ several times over. One
// priced a storefront. One priced the systems it has to sit inside.
//
// The asset is the build-versus-buy sheet, which is the most useful single
// thing you can hand a development buyer and which nothing else in the corpus
// does. NOTE on step 04 rule 1 (never argue against what you sell): three of
// its six rows still land on custom work, and the "when it has to be built"
// column is the detailed one. It reads as knowing where the line is, which is
// what a serious development partner is bought for. It does not talk anyone out
// of the project.
//
// ── ASSET RULES CARRIED FORWARD FROM THE OWNER'S CRITIQUE, 2026-09-10 ────────
//
// Both learned on page #14 and they apply to every page after it:
//   1. NEVER build a section that explains what a service category does. This
//      reader runs a brand. He knows what an integration is. Explanatory
//      sections insult him and he leaves.
//   2. NEVER assert what rival agencies get wrong. It cannot be proven and it
//      reads as trying too hard. Say what we do.
//
// ── COMPETITOR SECTION SCAN, 2026-09-10 ──────────────────────────────────────
//
// Page one for the primary: agencypartner.com, iovista.com (positioned
// outright as "B2B Ecommerce Development Agency - Dallas"), zfort.com,
// bitstudios.com, i95dev.com ("B2B & B2C eCommerce Development Experts",
// selling Magento, Shopify AND BigCommerce), dallaswebagency.us, plus DesignRush
// and SuperbCompanies directories.
//
// Two findings that shaped this page:
//   - B2B DOMINATES this SERP in a way it does not for the Austin terms. Two of
//     the top results lead with B2B in the title tag. That matches the assigned
//     secondary and it matches the market (see the place layer).
//   - IT IS PLATFORM-MIXED. i95Dev sells three platforms on one page. Further
//     evidence for the never-assume-Shopify rule above.
//
// ADOPTED: systems and integration depth, which every competitor leads with and
// which we genuinely sell. REJECTED: naming platforms we do not build on, which
// several competitors do and we will not; and partner-tier badging, unconfirmed.
//
// ── VERTICAL RULE ────────────────────────────────────────────────────────────
//
// EQUAL WEIGHT, B2B AND DTC (owner, 2026-09-10). The first draft said B2B was
// only a signal, then gave every worked example to B2B anyway: the place layer
// named an ERP and phone-ordering reps, the gradient priced a tiered price
// list, and the meta led on manufacturers. A DTC brand reading it saw nothing
// of itself.
//
// Fixed so the two run in parallel wherever an example appears. The place layer
// gives a distributor example AND a consumer-brand example at the same length.
// The gradient prices a B2B price list AND a DTC subscription. The hero lists
// subscriptions beside wholesale, and the meta names both.
//
// RULE FOR ANY FUTURE EDIT: if you add a B2B example to this page, add the DTC
// equivalent in the same breath, or take the B2B one out. DFW has both and this
// keyword is bought by both. See feedback-never-exclude-a-possible-buyer.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_DALLAS: GeoPage = {
  type: "geo",
  slug: "dallas",
  path: "/services/ecommerce-agency/dallas",
  hub: "/services/ecommerce-agency",
  status: "published",

  geo: {
    name: "Dallas",
    type: "metro",
    areaServed: "Dallas, Texas",
  },
  archetype: ["G"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce development agency dallas",
  secondaryKeywords: [
    "ecommerce development dallas",
    "dallas ecommerce web design",
    "b2b ecommerce development services dallas",
    "ecommerce app development company in dallas",
  ],
  faqKeywords: [
    "what does an ecommerce development agency do",
    "how much does ecommerce development cost",
    "custom ecommerce development vs apps",
    "b2b ecommerce development",
    "how long does an ecommerce build take",
  ],
  // "in Dallas" is the assigned secondary "ecommerce app development company
  // in dallas", which cannot be reached any other way. Cleared by the owner on
  // 2026-09-10 after review, on the same basis as "in New York" on pages #10,
  // #11 and #12: it appears ONCE, inside a question the READER is asking about
  // the market, and the answer never claims we are there. If anyone rewrites
  // that FAQ so the phrase modifies US rather than the reader's search, this
  // entry has to come out with it.
  reviewedPhrases: ["in Dallas"],

  metaTitle: "Ecommerce Development Agency Dallas | DTC & B2B Builds",
  metaDescription:
    "Custom front end, back end and the integrations between them. An ecommerce development agency Dallas brands trust with DTC and B2B builds. The code is yours.",
  shortTitle: "Ecommerce development Dallas",
  serviceType: "Ecommerce development agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Plain. Says what we build and for whom, and nothing else. No platform named.
  h1: "Ecommerce development agency Dallas brands hire to build and connect their store",
  qualifier:
    "Front end, back end, subscriptions and wholesale ordering, plus the integrations that tie your store to the systems you already run. One price and one date in writing before we start, and the code is yours.",

  // Henchman. `src` is the poster: first paint, and the whole experience under
  // prefers-reduced-motion, since the video is never fetched in that case.
  heroImage: {
    src: "/images/Case%20studies/posters/Henchman%20video.webp",
    alt: "The Henchman storefront and the ordering system we built behind it",
    video: "/images/Case%20studies/Henchman%20video.mp4",
    aspect: "4 / 5",
  },

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years doing this" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  // ── Trust bar ─────────────────────────────────────────────────────────
  // Our own work only. No instruction to go interrogate anyone else.
  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading:
      "Wholesale portals, subscription checkouts, made-to-order configurators. Every figure further down this page came out of a build we shipped.",
  },

  assetCtaLabel: "See where the line sits",

  proofCta: {
    text: "Tell us what it has to do and we'll tell you what it takes to build.",
    label: "Get in touch with us",
  },
  servicesCta: {
    text: "Send us the requirement. You'll get a scope and a price back, and no invoice for the scoping.",
    label: "Get in touch with us",
  },
  closingCta: {
    text: "That's how we run a build. Now tell us about yours.",
    label: "Get in touch with us",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  // He has already decided he wants development. The hook does not re-sell that
  // decision, and it does not guess what is broken.
  hook:
    "You know what you want built. What's hard to judge from outside is what it'll actually take, because most of a build never shows up in a demo.\n\nThat's where the quotes come apart. Two agencies can price the same brief and land several times away from each other, because one of them scoped the systems and one of them scoped the screens.",

  // ── Quick answer ──────────────────────────────────────────────────────
  // The passage an AI Overview lifts. Stands alone. 45 words. No platform.
  quickAnswer:
    "We're Ecomm Wizards, an ecommerce development agency Dallas brands hire for custom builds, B2B and wholesale, integrations and replatforming. We scope the systems before we quote, so the number you get covers the whole job. You own the code, the designs and the accounts from day one.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // DFW as a distribution corridor, which is the fact that makes this market's
  // ecommerce unusually systems-heavy. Names BOTH B2B and DTC, deliberately: a
  // DTC brand searching this term must not read itself out of the page.
  placeLayerHeading: "Dallas sells to businesses as much as it sells to people",
  placeLayer:
    "Dallas is a distribution town. A truck leaving here reaches most of the country in a day or two, so the metroplex filled up with manufacturers, wholesalers and distributors. There are plenty of consumer brands as well, and a lot of companies running both at once.\n\nThat changes what a build is here. The store is almost never the first system in the business.\n\nA distributor already has an ERP, price lists that took years to agree, and reps who've handled their accounts by phone for a decade. A consumer brand already has a 3PL, a subscription biller, a reviews platform and ad accounts, all of them waiting on the store to tell them what just happened.\n\nSo the job isn't building a website. It's getting all of that to work through a browser without breaking anything that already runs.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  // Service x place. Three short paragraphs. This reader does not read essays.
  gradientLayerHeading: "The storefront is the quick part. The systems behind it are the job.",
  gradientLayer:
    "On most builds we take, the pages people actually look at are a few weeks of the work. The rest is inventory, pricing rules, tax, shipping logic, and everything your other systems expect the store to hand back to them.\n\nThat half never appears in a portfolio. It's the reason two quotes for the same brief can land so far apart. A screen is easy to price. A price list with twelve customer tiers and a credit limit is not, and neither is a subscription people can pause, skip and swap without opening a support ticket.\n\nSo we scope the systems first and quote second. It takes us longer to come back with a number. The number holds.",
  gradientFacts: [
    {
      id: "dfw-distribution-corridor-2026",
      claim:
        "Dallas-Fort Worth is one of the largest US logistics and distribution markets, combining interstate highway access, rail, air cargo and parcel carrier density, with a delivery reach covering most of the continental United States within one to two days by truck. It hosts a large base of distributors, manufacturers and wholesalers alongside a growing DTC scene, and Dallas Market Center operates as a major wholesale marketplace. Underwrites the place layer's claim that ecommerce work in this market is unusually systems-heavy and B2B-weighted. Stated categorically in the copy: no company is named, and no figure is quoted, because the argument does not need one.",
      url: "https://www.dallasmarketcenter.com/home/",
      publisher: "Dallas Market Center; WareSpace DFW market guide",
      captured: "2026-09-10",
      reviewAfterDays: 365,
    },
    {
      id: "dallas-dev-serp-b2b-weight-2026",
      claim:
        "Page one for \"ecommerce development agency dallas\", captured 10 September 2026, is materially B2B-weighted: iovista.com positions as \"B2B Ecommerce Development Agency - Dallas\" and i95dev.com as \"B2B & B2C eCommerce Development Experts in Dallas\", with uncap.com and factoryjet.com also leading on B2B for the metro. It is also platform-mixed, with i95Dev selling Magento, Shopify and BigCommerce from one page. Two consequences for this page: B2B is a legitimate signal to carry, and the never-assume-Shopify rule holds. Not cited in the copy. It governs what the page may assume, not what it claims.",
      url: "https://www.i95dev.com/b2b-and-b2c-ecommerce-experts-in-dallas/",
      publisher: "Google SERP capture",
      captured: "2026-09-10",
      reviewAfterDays: 90,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // Build versus buy. Expert content, not explanatory content: it assumes the
  // reader knows what each requirement is and tells him where the line sits.
  // Nothing here walks him through what a subscription or an ERP is.
  asset: {
    title: "Where custom code earns its money, and where an app already does the job",
    intro:
      "This is the call we make on nearly every build. Three of these usually go to an app, three usually don't, and getting it wrong in either direction is expensive.",
    renderer: "matrix",
    method: {
      captured: "2026-09-10",
      window: "current build engagements, September 2026",
      howGathered:
        "This is how we scope requirements now, written out. Treat it as our judgment. The line keeps moving as the apps get better.\n\nWe go through it with you before quoting, because the answer changes what the project costs by an order of magnitude.",
    },
    columns: ["The requirement", "When an app covers it", "When it has to be built"],
    rows: [
      {
        label: "Subscriptions",
        cells: [
          "Standard intervals, one product, straightforward pause and cancel. The apps do this well and cheaply.",
          "Bundles that change per cycle, prepaid terms, or subscription pricing that has to agree with a wholesale price list.",
        ],
      },
      {
        label: "B2B pricing and terms",
        cells: [
          "A handful of customer groups with flat percentage discounts.",
          "**Nearly always custom.** Per-account price lists, credit limits, purchase orders and approval chains don't fit an app's data model.",
        ],
      },
      {
        label: "Product configurators",
        cells: [
          "A few fixed options with no interdependence and no price recalculation.",
          "**Made-to-order.** Once one choice rules out another, or changes the price and the lead time, an app can't hold the logic.",
        ],
      },
      {
        label: "ERP and inventory",
        cells: [
          "One-directional stock sync on a schedule, with a connector that already exists for your system.",
          "**Two-way, near real time.** Orders, returns, credits and stock moving both ways, especially with an older or in-house ERP.",
        ],
      },
      {
        label: "Loyalty and referrals",
        cells: [
          "Points, tiers and referrals. Genuinely solved. We'd talk you out of building this.",
          "Only where rewards have to clear through an external finance system.",
        ],
      },
      {
        label: "Search and filtering",
        cells: [
          "Most catalogs, most of the time. The hosted search products are strong and getting stronger.",
          "Very large or highly technical catalogs, where filters have to run on specifications instead of tags.",
        ],
      },
    ],
    derived:
      "The expensive mistakes go both ways. Building what an app does costs you the build and the maintenance forever. Forcing an app to do something it wasn't shaped for costs you more, and you find out about it in your second peak season.\n\nWe'll give you our read on each one before there's a quote, and we'll put it in writing.",
    reviewAfterDays: 180,
  },

  // ── Discipline deep-dives ─────────────────────────────────────────────
  // SIX ROWS OF DEVELOPMENT, not six departments. He has already narrowed to
  // building, and the standard says a wide service menu reads as not listening.
  disciplines: {
    label: "What we build",
    heading: "Six kinds of build, and what each one is for",
    intro: "Most projects are one or two of these. Send us the requirement and we'll tell you which.",
    items: [
      {
        label: "Front end and back end",
        heading: "We build both the front end and the back end of your store",
        body: "The dallas ecommerce web design and the code underneath it sit with one team, so nothing gets drawn that can't be built.",
        covers: ["Custom front end", "Back end and APIs", "Component systems", "Accessibility", "Page speed"],
        imageAlt: "The Feetures performance sock storefront we designed and built",
        caseSlug: "feetures-shopify-theme-development",
        cta: { label: "Explore development", href: "/services/shopify-development-agency" },
      },
      {
        label: "B2B and wholesale",
        heading: "We build the ordering your sales team stops doing by hand",
        body: "B2B ecommerce development services Dallas distributors need usually start with per-account pricing and end with the ERP.",
        covers: ["Account pricing", "Payment terms", "Purchase orders", "Reordering", "Sales rep tools"],
        imageAlt: "The Henchman wholesale ordering portal we built for trade accounts",
        caseSlug: "henchman-shopify-plus-b2b",
        cta: { label: "Explore B2B and wholesale", href: "/services/shopify-b2b-store-setup" },
      },
      {
        label: "Integrations",
        heading: "We connect the store to the systems you already run",
        body: "ERP, warehouse, accounting and shipping, built so a failure retries instead of quietly dropping an order.",
        covers: ["ERP", "3PL and warehouse", "Accounting", "PIM", "Shipping and tax"],
        imageAlt: "The Mouldings One trade portal and the systems we connected behind it",
        caseSlug: "mouldings-one-shopify-b2b-portal",
        cta: { label: "Explore integrations", href: "/services/shopify-integration-services" },
      },
      {
        label: "Custom features",
        heading: "We build the thing your business needs that nothing off the shelf does",
        body: "Custom ecommerce app development for Dallas brands: configurators, calculators and internal tools. We still run apps we wrote years ago.",
        covers: ["Configurators", "Custom apps", "Internal tooling", "Calculators", "APIs"],
        imageAlt: "The Ronaldo Jewelry made-to-order piece configurator we built",
        caseSlug: "ronaldo-jewelry-shopify-plus-redesign",
        cta: { label: "Explore app development", href: "/services/shopify-app-development" },
      },
      {
        label: "Replatforming",
        heading: "We move you onto a faster platform without losing your rankings",
        body: "Your orders, customers and search traffic come across, and every old link still lands where it should.",
        covers: ["Replatforming", "Data migration", "Redirect mapping", "Integrations", "Post-launch checks"],
        imageAlt: "The Capelli Sports catalog after its move onto a faster platform",
        caseSlug: "capelli-sports-shopify-migration",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        label: "Speed",
        heading: "We make the store fast on the phone people actually own",
        body: "We measure ecommerce development Dallas brands buy for speed on a mid-range handset, because that's what their customers hold.",
        covers: ["Core Web Vitals", "Image and video", "Third-party scripts", "Checkout speed", "Monitoring"],
        imageAlt: "The Sneak Energy storefront, rebuilt mobile-first for speed",
        caseSlug: "sneak-energy-shopify-redesign",
        cta: { label: "Explore speed optimization", href: "/services/shopify-speed-optimization" },
      },
    ],
  },

  // ── Categories ────────────────────────────────────────────────────────
  // Written fresh. B2B leads because the market and the SERP both justify it,
  // but five of six are not B2B, so no DTC reader is excluded.
  segments: {
    heading: "Categories we've shipped in",
    intro:
      "The build is never really about the category. It's about what your business already does that the store now has to handle too.",
    items: [
      {
        icon: "wholesale",
        name: "Distribution and wholesale",
        what: "Per-account price lists, credit limits, purchase orders, and reordering from a year of history.",
        breaks: "Adoption. Build it slower than a phone call to a rep and your buyers keep phoning the rep.",
      },
      {
        icon: "box",
        name: "Manufacturing and industrial",
        what: "Specification-level search, lead times that tell the truth, and quotes on parts that aren't priced online.",
        breaks: "The quote step. Send a buyer to a contact form and you've handed the order to whoever published a price.",
      },
      {
        icon: "consumable",
        name: "Food, drink and supplements",
        what: "Subscriptions people can change themselves, bundles that hold their margin, and shelf life the store respects.",
        breaks: "Skipped deliveries. If pausing is hard, people cancel instead, and you lose the whole customer.",
      },
      {
        icon: "apparel",
        name: "Apparel and footwear",
        what: "Fit guidance built from your own returns data, and launches that survive a spike in traffic.",
        breaks: "Peak traffic. A drop that goes down for ten minutes takes the day's revenue with it.",
      },
      {
        icon: "jewelry",
        name: "Jewelry and made-to-order",
        what: "Configurators where one choice rules out another, and pricing that recalculates as it goes.",
        breaks: "Impossible combinations. Let a customer order something you can't make and you refund and apologize.",
      },
      {
        icon: "platform",
        name: "Multi-brand and multi-region",
        what: "Several storefronts on shared inventory, with pricing, tax and content that differ by market.",
        breaks: "Duplication. Run them as separate builds and every change gets made three times, badly.",
      },
    ],
  },

  // ── Client quotes ─────────────────────────────────────────────────────
  results: {
    heading: "Three owners, three numbers, and where each came from",
    intro: "Every figure opens the case study behind it, so you can check it yourself.",
    slugs: [
      "everlast-shopify-plus-sports-redesign",
      "vithit-shopify-plus-d2c",
      "loop-earplugs-shopify-landing-page-cro",
    ],
    headlines: {
      "everlast-shopify-plus-sports-redesign": "{brand} more than doubled conversion after the store was rebuilt",
      "vithit-shopify-plus-d2c": "{brand} grew revenue 115% year on year after the rebuild",
      "loop-earplugs-shopify-landing-page-cro": "{brand} found a seven-figure growth opportunity in two tests",
    },
  },

  // ── How we work ───────────────────────────────────────────────────────
  // Four habits specific to running a BUILD, which is what this reader is
  // buying. Deliberately different from the Austin pages' four.
  howWeWork: {
    heading: "What we take pride in",
    intro: "Most of this you only find out about when a build is already in trouble. So here it is now.",
    items: [
      {
        title: "You get a staging site from week one",
        body:
          "Not a slide deck of progress. A working URL you can open whenever you want, that updates as we go, so nothing about launch day is a surprise to you.",
      },
      {
        title: "We write the tricky parts down before we build them",
        body:
          "Pricing rules, tax edge cases, what happens when the ERP is unreachable. Agreeing those in a document is dull and it's cheaper than discovering the disagreement in QA.",
      },
      {
        title: "A store that's down doesn't wait for Monday",
        body:
          "Regular work happens on working days. But if orders stop on a Saturday, you message the shared channel and a developer starts on it that day.",
      },
      {
        title: "You own all of it, and the reasons behind it",
        body:
          "The repository, the designs, the accounts. Plus the written record of why it was built this way, so the next developer can pick it up without calling us.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  // Price and process. Figures are the ones already approved and live on the
  // New York and Austin pages. No new commercial commitment invented here.
  whatWeDoAboutItHeading: "What it costs, and how we run a build",
  whatWeDoAboutIt:
    "Nothing gets quoted before it gets scoped. We go through the requirement, the systems it touches and the build-versus-buy calls above, and you keep that write-up either way.\n\nThen one price and one date, in writing, before any work starts. Change the brief later and we requote it in front of you.\n\nBuilds run $5,000 to $50,000 depending on how much is custom, and most take six to twelve weeks. Anything with a heavy ERP or a large catalog runs longer, and we'll say so before you sign, not once we're in it.\n\nOngoing work is a monthly retainer. What comes with it is ownership: we treat your store like we have money riding on it.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  proofHeading: "Builds we've shipped, and what changed",
  proof: [
    {
      slug: "saddleback-shopify-plus-b2b",
      vertical: "B2B and wholesale",
      whatWasBuilt:
        "A wholesale side rebuilt alongside the consumer store, with trade pricing and ordering that the sales team stopped handling by email",
      outcome: "+881% B2B sales, +704% traffic, 9.54% B2B conversion rate",
      verified: true,
    },
    {
      slug: "happy-mammoth-shopify-subscriptions-cro",
      vertical: "Health and supplements",
      whatWasBuilt:
        "A rebuilt subscription checkout where customers can pause and change deliveries without contacting support",
      outcome: "+134% subscription revenue, +61% conversion rate, +89% customer lifetime value",
      verified: true,
    },
    {
      slug: "john-hardy-shopify-plus-migration",
      vertical: "Luxury jewelry",
      whatWasBuilt:
        "A full replatform of a luxury catalog, scoped to land before Black Friday and delivered on the date we gave",
      outcome: "+71% conversion rate, replatformed in under three months, launched on time",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  // Three. The first concedes something we cannot prove in advance.
  objectionsHeading: "The things worth pushing back on",
  objections: [
    {
      objection: "Every agency says the estimate will hold. Ours never has.",
      answer:
        "We can't disprove that on our own website, and we'd be wary of anyone who claimed they could.\n\nWhat we can do is show you where the number came from. You get the scope, the systems list and the build-versus-buy calls before you pay anything. When something genuinely changes, we requote it in front of you instead of absorbing it and going quiet.",
    },
    {
      objection: "We have developers already.",
      answer:
        "Plenty of our clients do. Most of the ecommerce development Dallas brands buy from us sits alongside an in-house team.\n\nUsually we're taking the piece your team hasn't done before, or the one they can't stop everything else to do. A replatform is the common example. You do one every five years, and they do one never.",
    },
    {
      objection: "We're not on Shopify. Does that change things?",
      answer:
        "It changes the first conversation, not whether we can help.\n\nWe'll ask what the store has to do and what it has to connect to before anything else. Where moving platforms is part of the answer, we'll say so and price it separately, so you can judge that decision on its own.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // Nothing here assumes a platform.
  faqHeading: "Questions we get asked on the first call",
  faqs: [
    {
      question: "How much does an ecommerce development agency Dallas brands hire cost?",
      answer:
        "Ours runs $5,000 to $50,000 for a build, depending on how much is genuinely custom, with ongoing work as a monthly retainer.\n\nThe spread is wide because the brief usually is. A storefront on a well-understood platform and a two-way ERP integration are the same sentence in an email and a very different number.",
      unique: true,
    },
    {
      question: "How do we know whether we need custom development or an app?",
      answer:
        "That's the table above, and it's the first thing we go through with you.\n\nWe'd rather tell you an app covers it and lose the work than build something you'll pay to maintain for years.",
      unique: true,
    },
    {
      question: "Do you build B2B and wholesale as well as consumer stores?",
      answer:
        "Yes, and a good share of our work is exactly that: per-account pricing, payment terms, purchase orders and reordering, connected back to the ERP.\n\nPlenty of our clients run both sides from one system, which is usually the cheaper way to do it.",
      unique: true,
    },
    {
      question: "Can you build one piece of functionality on a store somebody else made?",
      answer:
        "Yes. Some of our work is a single piece of functionality bolted onto a store somebody else built, and we're happy to take that.\n\nWe'll tell you up front if the thing you want is fighting the store around it, because that changes what it costs to keep working.",
      unique: true,
    },
    {
      question: "Do we need an ecommerce app development company in Dallas?",
      answer:
        "Only if somebody has to be in the room, and for app work that is rare. The code gets written, reviewed and shipped the same way wherever the team sits.\n\nWhat is worth checking is whether they have built the thing before and whether they still run it. We still maintain apps we wrote years ago. That is the only real test of one.",
      unique: true,
    },
    {
      question: "What separates one ecommerce development agency Dallas quote from another?",
      answer:
        "Usually it comes down to what got scoped. One quote priced the screens. The other priced the systems underneath them. That is where most of the hours actually go.\n\nOurs covers both, because we go through the integrations, the data and the pricing rules before we put a number on anything.",
      unique: true,
    },
    {
      question: "Can an ecommerce development agency Dallas brands hire work in our own repo?",
      answer:
        "Yes. We work in your repository, your branching model and your review process where you have them, and we set those up where you do not.\n\nYou keep the history either way, so nothing about the build is locked to us.",
      unique: true,
    },
    {
      question: "How long does a build take?",
      answer:
        "Six to twelve weeks for most, depending on how much is custom and how quickly decisions come back from your side. Heavy integrations and large catalogs run longer. You get the date in writing before work starts.",
      unique: false,
    },
    {
      question: "What happens after launch?",
      answer:
        "Whatever you want to happen. Some clients take a retainer and keep building, some take a support arrangement, some take the code and run it themselves.\n\nAll three are fine, and none of them cost you anything to choose, because you already own everything.",
      unique: true,
    },
    {
      question: "Who actually writes the code?",
      answer:
        "The people you meet in scoping. We don't hand the build to a different team once the project is signed, and you can talk to the developer directly in a shared channel.",
      unique: true,
    },
    {
      question: "Do you work with businesses outside this market?",
      answer:
        "Yes, right across the United States and further out. Nothing about how we work depends on where you sit, and nobody pays a different rate by city.",
      unique: false,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Zero keyword targets: no primary, no secondary, no city, no platform.
  conversion: {
    heading: "Tell us what it has to do",
    whatYouGet:
      "Describe the thing you want built, in your own words. We'll come back with how we'd approach it, what it touches, and what it costs.",
    whatWeWillTellYouNotToDo:
      "If something you're asking for already exists off the shelf, we'll say so before you've paid us. Selling somebody a build they didn't need is how you win one project and lose the client.",
    responseExpectation:
      "Someone senior reads it and replies the same day or the next. It won't be a sales rep.",
    audit: {
      transition: "You already know what the thing has to do.",
      offer: "Tell us, and we'll go and look at what you've got. You get back:",
      parts: [
        "What it would take to build, broken into the parts that are straightforward and the parts that aren't.",
        "Which pieces already exist off the shelf, and what we'd use.",
        "What we'd do first, and which single piece earns the most soonest.",
      ],
      limit: "You're getting the scope. Building it is a separate number you're free to ignore.",
      noObligation:
        "No charge, no run of follow-up emails, and the write-up stays yours whichever way you go.",
      turnaround:
        "Book any thirty-minute slot. Three business days later the person who did the scoping walks you through it live, so you can interrupt and argue with it.",
      secondDoor: "Don't want a call? Leave your details and we'll send the write-up over.",
    },
  },

  // ── Sources ───────────────────────────────────────────────────────────
  // On-page citation markers are retired, so nothing here renders. Provenance
  // record for the editorial pass and the review windows.
  sources: [
    {
      id: "dfw-distribution-corridor-2026",
      claim:
        "DFW as a first-tier US logistics and distribution market, reaching most of the continental United States within one to two days by truck, with a large distributor, manufacturer and wholesaler base plus a growing DTC scene. Supports the place layer only, stated categorically with no company named and no figure quoted.",
      url: "https://www.dallasmarketcenter.com/home/",
      publisher: "Dallas Market Center; WareSpace DFW market guide",
      captured: "2026-09-10",
      reviewAfterDays: 365,
    },
    {
      id: "dallas-dev-serp-b2b-weight-2026",
      claim:
        "Page one for the primary keyword is B2B-weighted and platform-mixed on 10 September 2026. Not cited on the page. It justifies carrying a B2B signal and it confirms the never-assume-Shopify rule. Ninety-day window because a SERP moves.",
      url: "https://www.i95dev.com/b2b-and-b2c-ecommerce-experts-in-dallas/",
      publisher: "Google SERP capture",
      captured: "2026-09-10",
      reviewAfterDays: 90,
    },
  ],

  wordCountTarget: [1300, 4300],
};

// ── OPEN ITEMS BLOCKING PUBLISH (not blocking the build) ─────────────────────
//
// 1. EIGHT-CITY FOOTER still rendering site-wide (Master Strategy 8, issue 3).
// 2. INDEX REMEDIATION, last reading 1,818 against a ~200 gate.
// 3. PARTNER TIER unconfirmed, so no Plus or Partner framing anywhere here.
// 4. VELOCITY: 3 flips inside the rolling 7 days as of 2026-09-10, cap 5.
//    Pages #13, #14 and #15 cannot all publish in the same week.
