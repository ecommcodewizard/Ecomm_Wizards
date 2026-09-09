// Batch 1b, page 6: /services/ecommerce-agency/new-york
// Spec: Batch 1 Page Specification v2.0 section 2.2 (geo spine).
// Copy: Ecomm Wizards Copy Standard v2.0.
//
// Primary keyword: "ecommerce agency new york" (20/mo, Google Keyword Planner)
// Inventory: Geo Inventory & Batch Plan v4.0, page #11, New York metro.
// Hub: /services/ecommerce-agency (published, lists this path in `children`).
//
// ══ REBUILT 2026-09-05 TO THE STANDARD SET ON PAGE #10 ═══════════════════════
//
// The previous version argued that this city has 551 agencies charging $20 to
// $199 an hour, so price tells you nothing. That argument is retired. It framed
// the whole page around cost, which is the mistake that got page #10 rewritten:
// a brand doing $10-50M is not choosing on price, and a page organised around
// price reads as the cheap option whichever way the argument runs.
//
// Also removed from that version, each against a rule the owner has since set:
//   - "If you've already got a team and just need extra hands, we're the wrong
//     call"           -> excluded a buyer who could buy
//   - "Nobody buys all six. Most brands need two"
//                     -> presupposed a number
//   - "Name the people. Not roles, names, with your sign-off required"
//                     -> a commitment we do not make and never authorised
//   - "Break something on a Sunday ... work starts that day"
//                     -> we do not work weekends outside an emergency
//   - a hook built on "six tabs open and they're the same tab"
//                     -> the construction the owner called out as machine copy
//
// ── ONE READER (Copy Standard 1.1, which writes this one almost verbatim) ────
//
// "Has an ecommerce business and has not committed to Shopify, or is on
// something else and unhappy. Wants to know the right platform before they want
// an agency."
//
// Same commercial profile as page #10 otherwise: founder or owner, 28 to 45,
// doing real revenue, not price sensitive, wants somebody reliable who is
// obsessed with winning. The difference is where they are in the decision. Page
// #10's reader has chosen Shopify and is choosing a supplier. This one is still
// asking whether the thing they are unhappy about is even the platform.
//
// AWARENESS. High. They know what an agency does and what replatforming is.
// Nothing here explains either.
//
// ── ONE IDEA (18 words) ──────────────────────────────────────────────────────
// Every platform has a ceiling, and growing is how you find it. Moving pays
// off; whether yours does is decided by who handles the data.
//
// ── THE ARGUMENT, AND WHY IT IS NOT PAGE #10's ──────────────────────────────
//
// #10 sells on delivery: agencies lose clients on the work, not the pitch.
// #12 sells on search: a ranking is worth less than it was.
// #11 sells on the platform decision specifically: every platform runs out at
// some point, the move itself reliably pays off, and execution on the data is
// the only variable that decides whether yours goes well.
//
// RETIRED 2026-09-09, on the owner's instruction: the previous version argued
// that "the platform is rarely what's broken". It read as an argument against
// migration, which is a service we sell, to an audience that arrived wanting
// it. Do not reinstate it. The same argument was removed from the hook and the
// place layer at the same time, for the same reason.
//
// Two published figures carry it, and the tension between them is the section:
//   90% of recent migrators saw sales and revenue improve  (commercetools)
//   83% of data migration projects fail or exceed budget   (Swell)
// So the move usually pays. The data usually hurts.
//
// DELIBERATELY NOT ON THE PAGE: the median mid-market replatform costs
// $150,000-$300,000 (Elogic Cost Index, updated 3 September 2026). It is a real
// figure and it is in `sources` below, but printing it next to our $5,000 to
// $50,000 build range would make us read as the cheap option, which is the one
// thing this page must not do. Use it on a call, not in copy.
//
// ── VOICE ────────────────────────────────────────────────────────────────────
// One human to another, seventh-grade English, contractions throughout. Every
// heading has to stop a skimmer AND say what the section holds. No heading
// restates the section above it. Local register light: "NYC", never landmarks.
//
// ── EXCLUSION CHECK (the rule broken most often) ─────────────────────────────
// Nothing on this page rules out: a first store, an established store, a brand
// happy on Shopify, a brand on Magento or Woo, a brand wanting one service, or
// a brand wanting all six. Checked line by line. The qualifier names both ends
// deliberately.
//
// ── CASE STUDIES: THIRTEEN, NO REPEATS, NONE SHARED WITH #10 ────────────────
// Vertical matching stays WAIVED (owner, 2026-09-04).
//   hero        This Works
//   disciplines Henchman, Sneak Energy, Mouldings One, Nurture Life,
//               NEOM Wellbeing, Living in Sunshine
//   proof       Feetures, Saddleback, Prose
//   results     Capelli Sports, Andrea Maack, C&E Craft Co
//
// Hero is This Works on two counts: the wordmark is legible on the pack, which
// is the owner's bar for a hero, and it is a Magento store that outgrew its
// platform, which is this page's argument in one brand.
//
// SECONDARY OWNERSHIP (7.2, one per section, nowhere else)
//   ecommerce web design new york           -> discipline 2
//   ecommerce development new york          -> discipline 3
//   branding company for ecommerce new york -> discipline 4
//   ecommerce partners nyc                  -> discipline 5
// Disciplines 1 and 6 carry no keyword: 7.3 bans manufactured secondaries.
//
// PRESENCE (Master Strategy 4): no claim anywhere. "in New York" appears only
// where it modifies the CLIENT, never us, and is acknowledged in reviewedPhrases.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_NEW_YORK: GeoPage = {
  type: "geo",
  slug: "new-york",
  path: "/services/ecommerce-agency/new-york",
  hub: "/services/ecommerce-agency",
  status: "published",

  geo: {
    name: "New York",
    type: "metro",
    areaServed: "New York, New York",
  },
  // D nominally, same caveat as page #10: the argument is diagnosis of a
  // platform decision, which is not any of Master Strategy 5.10's A to G. The
  // letter keeps the field valid; check-shingles enforces the real separation.
  archetype: ["D"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency new york",
  secondaryKeywords: [
    "ecommerce web design new york",
    "ecommerce development new york",
    "branding company for ecommerce new york",
    "ecommerce partners nyc",
  ],
  faqKeywords: [
    "should we replatform to shopify",
    "how much does an ecommerce agency cost",
    "magento to shopify migration",
    "how to choose an ecommerce agency",
    "how long does a replatform take",
  ],
  reviewedPhrases: ["in New York"],

  metaTitle: "Ecommerce Agency New York Brands Hire | Design, Build, Grow",
  metaDescription:
    "An ecommerce agency New York brands hire to dominate their market. Design, build, branding, SEO and retention, with one price and one date before we start.",
  shortTitle: "Ecommerce agency New York",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "Ecommerce agency New York brands hire to dominate their market",
  qualifier:
    "Design, build, branding, SEO and retention. Take one or take all six. You get a fixed price and a start date before we begin.",

  // This Works. `src` is the poster, which is the first paint and the whole
  // experience under prefers-reduced-motion. `alt` reaches the video as an
  // aria-label, since a video element has no alt attribute.
  heroImage: {
    src: "/images/Case%20studies/posters/This%20Works%20video.webp",
    alt: "The This Works storefront after its move off Magento, built by Ecomm Wizards, ecommerce agency New York",
    video: "/images/Case%20studies/This%20Works%20video.mp4",
    aspect: "4 / 5",
  },

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years doing this" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  // ── Trust bar ─────────────────────────────────────────────────────────
  // Assumes nothing about what is wrong with the reader's store, and says
  // nothing about other agencies.
  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading:
      "Apparel, wellness, food and drink, B2B. All real stores you can go and open, and every number on this page came out of one of them.",
  },

  assetCtaLabel: "See where each platform runs out",

  proofCta: {
    text: "Show us where you're running now and we'll tell you if it's the problem.",
    label: "Get in touch with us",
  },
  servicesCta: {
    text: "Point at one and we'll tell you honestly if it's the right one.",
    label: "Get in touch with us",
  },
  closingCta: {
    text: "That's the way we run it. Tell us where your store is now.",
    label: "Get in touch with us",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Most brands who reach this page have already decided the store needs work. What they haven't settled is which part to start with, or who should do it. That's the first thing your ecommerce agency New York shortlist should be able to settle.\n\nSo tell us where it hurts. We'll tell you what we'd fix first, what it costs, and how long it takes.",

  // ── Quick answer ──────────────────────────────────────────────────────
  // The passage an AI Overview lifts, written to stand alone. 47 words.
  quickAnswer:
    "We're Ecomm Wizards, an ecommerce agency New York brands hire for design, development, branding, SEO and retention. We build on Shopify, and we'll tell you when it isn't the right fit for your store. Take one service or take all of them. Fixed price and a date before anything starts.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // The reader's commercial world where this service touches it. No landmarks,
  // no decoration, no statistic: the agency-density number belonged to the
  // retired version of this page and is not coming back.
  placeLayerHeading: "Your store didn't get worse. You outgrew it.",
  placeLayer:
    "Wholesale turns up. Then a second market. Then a product line that behaves nothing like the rest of them. The store that was fine at two million starts fighting you at ten.\n\nThat isn't something you did wrong. It's what growth does to a setup built for a smaller version of your business. We've seen it enough times to know the shape of it, and to know which part is actually costing you money.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  // Service x place. Two sourced facts, held in tension. Non-technical: this is
  // about risk and money-you-might-waste, never about what we charge.
  gradientLayerHeading: "Every platform has a ceiling. You find it by growing.",
  gradientLayer:
    "Nobody picks the wrong platform on day one. You pick the right one for the business you had. Then the business changes.\n\n**90% of brands that switch platforms see revenue go up.** So moving works. The only real question is who does it.\n\n**83% of data migrations go over budget or fail.** Almost never because of the platform. What breaks is your order history, your customer accounts, and years of URLs that already rank. Most teams leave those to the end.\n\nWe start with them. That's the difference between those two numbers.",
  gradientFacts: [
    {
      id: "commercetools-migration-revenue",
      claim:
        "90% of recent migrators experienced sales and revenue improvements after switching ecommerce platforms. commercetools research, cited in Swell's replatforming statistics roundup. Used as the FIRST half of the gradient's tension: migration usually works, which is why the copy does not argue against moving.",
      url: "https://www.swell.is/content/ecommerce-replatforming-statistics",
      publisher: "commercetools, via Swell",
      captured: "2026-09-05",
      reviewAfterDays: 365,
    },
    {
      id: "swell-data-migration-failure",
      claim:
        "83% of data migration projects fail or exceed budgets. Swell, ecommerce replatforming statistics. The load-bearing figure on this page: it is what turns 'should we move' into 'has anyone looked at your data'. Corroborated by the Elogic Cost Index below, which puts data migrations at 64% over budget and 54% over timeline, averaging 30% and 41% respectively.",
      url: "https://www.swell.is/content/ecommerce-replatforming-statistics",
      publisher: "Swell",
      captured: "2026-09-05",
      reviewAfterDays: 365,
    },
    {
      id: "elogic-replatform-cost-index",
      claim:
        "Elogic Ecommerce Replatforming Cost Index 2026, published 16 June 2026 and updated 3 September 2026: data migrations exceed budget 64% of the time and timeline 54% of the time, averaging 30% cost overrun and 41% time overrun (sourced there to Forbes 2021 and the Bloor Group). Median mid-market replatform runs $150,000-$300,000 all-in over 5-10 months, with the platform licence only 20-40% of the total. THE COST FIGURES ARE DELIBERATELY NOT ON THE PAGE: quoting a $150k-$300k industry median next to our $5,000-$50,000 range would position us as the cheap option. Overrun percentages are used; cost medians are not.",
      url: "https://elogic.co/blog/replatforming-cost-index/",
      publisher: "Elogic Commerce",
      captured: "2026-09-05",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "Where each platform runs out",
    intro:
      "Every platform here runs big businesses well. They just stop being the right one at different points, and knowing which one you're near is worth more than any demo.",
    renderer: "comparison",
    method: {
      captured: "2026-09-09",
      window: "our own builds and migrations",
      howGathered:
        "This is our own experience across the stores we have built and moved, not a survey and not a scorecard. Every platform in this table is a good one, and all of them are running businesses larger than yours right now.\n\nWhat changes as you grow is what each one costs you in developer time and in workarounds. Yours might sit differently. The point is to show you roughly where the ceilings are, so you can work out which one you are near.",
    },
    columns: ["Platform", "What it is good at", "Where it runs out"],
    rows: [
      {
        label: "WooCommerce",
        cells: ["The cheapest way to start, and you control every part of it.", "You also own the hosting, the security and the checkout. Once traffic is real that is a developer's salary, and the checkout is what gives out on your biggest day."],
      },
      {
        label: "Magento / Adobe Commerce",
        cells: ["Genuinely powerful for complicated catalogs and B2B pricing rules.", "License plus a specialist team to keep it upright. Most brands we move off it were paying enterprise costs for features they had stopped using two years earlier."],
      },
      {
        label: "BigCommerce",
        cells: ["Strong APIs, no transaction fees, and a sensible headless option.", "A smaller app and agency pool, so more of what you want gets custom built, and then custom maintained by you."],
      },
      {
        label: "Shopify",
        cells: ["Fast to launch, cheap to run, and whatever you need, the app already exists.", "Checkout stays largely Shopify's until you move to Plus, and deep B2B pricing rules take real work."],
      },
      {
        label: "Shopify Plus",
        cells: ["**Checkout you can change, and it holds on your biggest day of the year.**", "A ceiling most brands never get near. If you are hitting it, it is almost always the ERP rather than the store."],
      },
    ],
    derived:
      "None of this is really about features. Every platform in the table can run a store your size today. What separates them is what they cost you to keep running once you are past the easy stage, and how much of your team's week disappears into working around them. That is the number worth comparing, and it is the one nobody puts on a pricing page. Anyone on your ecommerce agency New York shortlist should be able to say where you sit on this table before they quote you.",
    reviewAfterDays: 365,
  },

  // ── Discipline deep-dives ─────────────────────────────────────────────
  // No paragraphs. Big heading carries the argument, one line only where an
  // assigned secondary has to live, chips for scope, autoplaying case study.
  disciplines: {
    label: "What we do",
    heading: "Where would you want us to start?",
    intro: "Some brands take one of these. Some take the lot. We'll tell you which one moves your number this year, and we'd start there.",
    items: [
      {
        label: "Platform and migration",
        heading: "We move you to Shopify and your rankings come with you",
        body: "Most ecommerce agency New York migration quotes are priced on the catalog. The catalog is the easy part.",
        covers: ["Magento migration", "WooCommerce migration", "BigCommerce migration", "Redirect mapping", "Order history", "ERP integration"],
        imageAlt: "Henchman trade storefront, a Magento replatform and ERP integration we delivered",
        caseSlug: "henchman-shopify-plus-b2b",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        label: "Design and UX",
        heading: "We design from how people actually shop your store, not from a mockup",
        body: "Ecommerce web design New York brands are shown is usually a desktop mockup. That's not where your traffic is.",
        covers: ["UX and UI design", "Art direction", "Product page design", "Landing pages", "Design systems"],
        imageAlt: "Sneak Energy storefront, the ecommerce web design New York brands buy",
        caseSlug: "sneak-energy-shopify-redesign",
        cta: { label: "Explore design and UX", href: "/services/shopify-ux-and-ui-design" },
      },
      {
        label: "Build and development",
        heading: "We build the custom work, and the number we gave you doesn't move",
        body: "Ecommerce development New York brands buy gets priced on the visible half, then re-quoted when the rest turns up.",
        covers: ["Custom development", "Shopify Plus", "App development", "Integrations", "B2B and wholesale", "Speed"],
        imageAlt: "Mouldings One trade portal, the ecommerce development New York brands buy",
        caseSlug: "mouldings-one-shopify-b2b-portal",
        cta: { label: "Explore development", href: "/services/shopify-development-agency" },
      },
      {
        label: "Brand and creative",
        heading: "We build the brand, then make the ads that sell it",
        body: "A branding company for ecommerce New York brands hire hands over an identity. We take it through to the ads and the page they land on.",
        covers: ["Brand identity", "Ad creative", "Paid social", "User-generated content", "Creative testing"],
        imageAlt: "Nurture Life creative, from the branding company for ecommerce New York brands hire",
        caseSlug: "nurture-life-creative-strategy",
        cta: { label: "Explore creative strategy", href: "/services/creative-strategy" },
      },
      {
        label: "Ongoing partnership",
        heading: "We stay on after launch and keep making the store better",
        body: "Ecommerce partners NYC brands keep on retainer should be testing against your real traffic, not working a checklist.",
        covers: ["Conversion rate optimization", "A/B testing", "Maintenance and support", "Speed", "Analytics"],
        imageAlt: "NEOM Wellbeing storefront, ongoing work from the ecommerce partners NYC brands retain",
        caseSlug: "neom-wellbeing-shopify-upgrade",
        cta: { label: "Explore CRO and support", href: "/services/shopify-cro-agency" },
      },
      {
        label: "Email and growth",
        heading: "Your best customer already bought once",
        body: "Your flows bring the steady revenue, your campaigns bring the spikes, and the segmentation underneath keeps both off the wrong inbox.",
        covers: ["Klaviyo email and SMS", "Flow strategy", "Segmentation", "Subscriptions", "Ecommerce SEO"],
        imageAlt: "Living in Sunshine campaign work, the email flows and segmentation we built",
        caseSlug: "living-in-sunshine-klaviyo-email",
        cta: { label: "Explore marketing and retention", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── Client quotes ─────────────────────────────────────────────────────
  // Disjoint from the proof grid and the disciplines.
  results: {
    heading: "Three owners, three numbers, and where they came from",
    intro: "Every number opens into the case study it came from, so you can check it.",
    slugs: ["capelli-sports-shopify-migration", "andrea-maack-klaviyo-email", "cecraft-klaviyo-email"],
    headlines: {
      "capelli-sports-shopify-migration": "{brand} kept 95% of its search equity through a full replatform",
      "andrea-maack-klaviyo-email": "{brand} grew flow revenue 144% without spending more on acquisition",
      "cecraft-klaviyo-email": "{brand} added 196% attributed revenue from email alone",
    },
  },

  // ── How we work ───────────────────────────────────────────────────────
  // Four commitments, all things we actually do and all distinct from page
  // #10's four. Nothing here is invented and nothing claims weekend working.
  howWeWork: {
    heading: "Four things we won't budge on",
    intro: "Each one is here because the opposite is easy to get away with, and you wouldn't spot it for a quarter.",
    items: [
      {
        title: "First week, we look before we pitch",
        body:
          "We go through what you already have before we tell you what we'd do. You keep that write-up either way. If you walk, you've had a free second opinion out of it.",
      },
      {
        title: "If we say move, we'll also tell you why not to",
        body:
          "Every recommendation comes with the argument against it. Be suspicious of anyone who only hands you one side of it, us included.",
      },
      {
        title: "One price and one date, before we start",
        body:
          "Not a day rate and a guess that creeps. If you change what you want, we requote there and then, instead of quietly swallowing it and getting funny about it three months later.",
      },
      {
        title: "Everything's in your name from day one",
        body:
          "The repo, the theme, the design files, the email templates, every account. If you ever leave, it costs you a bit of time and nothing else.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  whatWeDoAboutItHeading: "How we do it, and what an ecommerce agency New York quote should cover",
  whatWeDoAboutIt:
    "Nothing gets quoted before it gets looked at. The first week is measurement: where you're running now, what it's costing you in developer time and workarounds, and which ceiling you're closest to.\n\nThen one number and one date, in writing. Builds run $5,000 to $50,000 depending on how much is custom, and a migration is scoped on your data and your integrations rather than on your product count. That is what an ecommerce agency New York quote should show you: one number, one date, and the scope behind both.\n\nOngoing work is a retainer sized to work that exists. We're rarely the cheapest ecommerce agency New York brands quote, and we don't try to be.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // Heading has to be true of all three, and one of them is creative work
  // rather than a build.
  proofHeading: "Work we've done, and what it moved",
  proof: [
    {
      slug: "feetures-shopify-theme-development",
      vertical: "Performance apparel",
      whatWasBuilt:
        "A theme rebuilt from scratch, with custom product pages and cart engineering behind it",
      outcome: "+32% add-to-cart rate, +19% average order value",
      verified: true,
    },
    {
      slug: "saddleback-shopify-plus-b2b",
      vertical: "Wholesale and B2B",
      whatWasBuilt:
        "A trade portal with net terms, price lists and bulk ordering, running alongside the direct store",
      outcome: "+881% B2B sales in month one, 9.54% conversion rate",
      verified: true,
    },
    {
      slug: "prose-creative-strategy",
      vertical: "Custom haircare",
      whatWasBuilt:
        "A creative program for paid social, built on user-generated angles and tested properly rather than swapped out",
      outcome: "+53% return on ad spend",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  // Three. Section 6.4 wants one we don't fully beat: objection 3 concedes we
  // can't prove it in advance.
  objectionsHeading: "Questions worth asking any ecommerce agency New York brands hire",
  objections: [
    {
      objection: "You build on Shopify. Of course you'll say we should move.",
      answer:
        "Fair, and it's the right suspicion. Every ecommerce agency New York brands speak to has an interest in the answer, us included.\n\nSo here's the honest shape of it. Shopify fits most brands at your revenue and stops being the constraint earliest. It's a poor fit for heavily configured B2B pricing, deep ERP dependency, or a catalog that behaves more like a database than a shop. We've told brands to stay where they were and walked away from the work. Make us argue for it on the call.",
    },
    {
      objection: "We only want one of these things.",
      answer:
        "Then buy one. We quote them separately and plenty of clients only ever take a single one.\n\nAll we'd ask is to check the diagnosis first, because the most common thing we find is a brand about to spend on the wrong one. If you're right, you're right, and we'll scope exactly what you asked for.",
    },
    {
      objection: "We've been burned by an agency before.",
      answer:
        "Probably by one that scoped loosely, went quiet, then came back with an invoice and something nobody had seen. No ecommerce agency New York brands hire can disprove that pattern in a paragraph on its own website, us included.\n\nWhat we can do is make finding out cheap. The first look costs nothing and leaves you with something you can hold, everything we make is yours from day one, and there's no long notice period to escape. None of that is a guarantee. If you've been burned once, do a small piece of work first, with us or with whoever else is on your list.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // No definition of the H1 term anywhere: this reader knows what an agency is.
  faqHeading: "What NYC brands ask before they decide",
  faqs: [
    {
      question: "Should we replatform at all?",
      answer:
        "Often not, and an ecommerce agency New York brands hire should be willing to say so. If the store works and your costs are predictable, staying put is usually right. It's worth moving when you're paying a developer to keep it upright, or when a change that should take a day takes a fortnight. We'll tell you which one you're in before you spend anything.",
      unique: true,
    },
    {
      question: "What's the riskiest part of a migration?",
      answer:
        "Your data, not the build. Products move cleanly. It's your URLs, order history, customer accounts and integrations where the overruns come from, which is why 83% of data migration projects fail or run over budget.",
      unique: true,
    },
    {
      question: "How much does an ecommerce agency New York brands hire actually cost?",
      answer:
        "Ours is $5,000 to $50,000 for a build, depending on how much you need custom, with ongoing work as a monthly retainer. Migrations are scoped on data complexity rather than product count. We're rarely the cheapest quote and we don't try to be.",
      unique: true,
    },
    {
      question: "Will we lose our Google rankings if we move?",
      answer:
        "You can, and it almost always comes down to the redirect map. Every old URL needs a home, the metadata has to travel, and somebody has to watch the index daily for the first month. Done properly you keep most of it: Capelli Sports retained 95% through a full move.",
      unique: true,
    },
    {
      question: "How do we choose between agencies that all look the same?",
      answer:
        "Ask everyone on your ecommerce agency New York shortlist what they'd talk you out of. Ask who'll actually be on the work and how long they've been there. Then ask for both answers in writing. That separates a shortlist faster than any portfolio.",
      unique: true,
    },
    {
      question: "What happens in the first two weeks?",
      answer:
        "Week one is the look: your setup, your traffic, and where the money goes missing. That write-up is yours either way. Week two we scope it properly and hand you one price and one date. Nothing begins until both are agreed, and you should get that in writing from any ecommerce agency New York brands hire.",
      unique: false,
    },
    {
      question: "How long does a replatform take?",
      answer:
        "Eight to twelve weeks for most stores. A big catalog with ERP integration runs longer, and anyone quoting you four weeks for that hasn't opened the integrations yet. You get the date before we start.",
      unique: true,
    },
    {
      question: "Do you provide ecommerce development in New York?",
      answer:
        "Yes, along with design, branding, creative and retention. We work with brands across the metro and the whole team works remotely, so there's no office to visit and we don't claim one. You get a named contact in a shared channel and cover through Eastern business hours.",
      unique: false,
    },
    {
      question: "Do you work with brands outside New York?",
      answer:
        "Yes, across the United States and further afield. Nothing about how we work depends on where you sit, and you won't pay a different rate by city.",
      unique: false,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Section 8.2: zero keyword targets. No primary, no secondary, no city name,
  // no platform name. Under 180 words above the form.
  conversion: {
    heading: "Point us at the part you'd fix first",
    whatYouGet:
      "Tell us the one thing bothering you most. We'll dig into it, free, and walk you through what turns up.",
    whatWeWillTellYouNotToDo:
      "If the setup you've got is fine and the problem is somewhere we don't work, we'll say so and quote you nothing. That happens more than you'd expect.",
    responseExpectation:
      "Someone senior reads it and replies the same day or the next. It won't be a sales rep.",
    audit: {
      transition: "You came here with one thing on your mind. Start there.",
      offer: "Tell us what it is. We'll open the store up and come back with three things:",
      parts: [
        "What's really going on, measured on your own store rather than a benchmark.",
        "Whether the setup you're on is causing it or just carrying the blame.",
        "The order we'd fix it in, and the one change that earns the most.",
      ],
      limit: "This is the diagnosis. The work itself is quoted separately and you can walk away from it.",
      noObligation:
        "It's free, nobody chases you afterwards, and what we find is yours to take elsewhere.",
      turnaround:
        "Pick any thirty-minute slot. Three business days later the person who looked at your store talks you through it live, so you can push back while they're still on the call. You can't argue with a PDF.",
      secondDoor: "Rather not book a call? Leave your details and the findings come to you.",
    },
  },

  // ── Sources ───────────────────────────────────────────────────────────
  sources: [
    {
      id: "commercetools-migration-revenue",
      claim:
        "90% of recent migrators saw sales and revenue improvements after replatforming. commercetools, via Swell's roundup. First half of the gradient's tension.",
      url: "https://www.swell.is/content/ecommerce-replatforming-statistics",
      publisher: "commercetools, via Swell",
      captured: "2026-09-05",
      reviewAfterDays: 365,
    },
    {
      id: "swell-data-migration-failure",
      claim:
        "83% of data migration projects fail or exceed budgets. Swell. Quoted on the page twice, in the gradient and in FAQ 2, and it is the figure the whole argument turns on. Re-verify first.",
      url: "https://www.swell.is/content/ecommerce-replatforming-statistics",
      publisher: "Swell",
      captured: "2026-09-05",
      reviewAfterDays: 365,
    },
    {
      id: "elogic-replatform-cost-index",
      claim:
        "Data migrations exceed budget 64% of the time and timeline 54%, averaging 30% and 41% overrun (Forbes 2021 / Bloor Group). Median mid-market replatform $150,000-$300,000 over 5-10 months, licence only 20-40% of total. Corroborates the Swell figure. THE COST MEDIANS ARE DELIBERATELY UNUSED ON PAGE: see the note in the file header.",
      url: "https://elogic.co/blog/replatforming-cost-index/",
      publisher: "Elogic Commerce",
      captured: "2026-09-05",
      reviewAfterDays: 180,
    },
    {
      id: "capelli-seo-equity",
      claim:
        "Capelli Sports retained 95% of SEO equity through a full replatform. Read from that study's own results table in lib/case-studies.ts, so it cannot drift from the case study page. Cited in FAQ 4 and the results slider headline.",
      url: "https://ecommwizards.com/case-studies/capelli-sports-shopify-migration",
      publisher: "Ecomm Wizards case study",
      captured: "2026-09-05",
      reviewAfterDays: 365,
    },
  ],

  wordCountTarget: [1300, 4100],
};

// ── OPEN ITEMS BLOCKING PUBLISH (not blocking the build) ─────────────────────
//
// Same four site-level items as pages #10 and #12: the eight-city footer, index
// remediation against the ~200 gate, the unconfirmed partner tier, and
// RelatedServices rendering after the form against Copy Standard 1.4.
