// Batch 1b, page 9: /services/ecommerce-agency/austin
// Spec: Batch 1 Page Specification v2.0 section 2.2 (geo spine).
// Copy: docs/ecomm-wizards-page-standard.md, which is the governing copy
// document and beats older voice guidance.
//
// Primary keyword: "ecommerce agency austin" (10/mo, Google Keyword Planner)
// Inventory: Geo Inventory & Batch Plan v4.0, page #14, Texas metro.
// Hub: /services/ecommerce-agency (published, lists this path in `children`).
//
// ── THE HARD CONSTRAINT ON THIS PAGE ─────────────────────────────────────────
//
// The Page Standard's keyword table, step 01, governs this term and is worth
// quoting because it is the single easiest thing to get wrong here:
//
//   ecommerce agency [city] -> "He wants an ecommerce agency. What is still
//   open: THE PLATFORM. He may be on Shopify. He may be on something else. He
//   may have nothing yet. Never write as if he is already on Shopify."
//
// So: no line on this page may assume the reader is on Shopify. Not the hook,
// not the headings, not the FAQ. That is the difference between this page and
// page #13 at /services/shopify-development-agency/austin, where the reader has
// already told us the platform.
//
// The honest counterweight: we build on Shopify, and page #10's asset says so
// outright. This page resolves that by talking about the STORE and the NUMBER
// rather than the platform, and by never claiming we work on platforms we do
// not. It does not promise Magento or BigCommerce development anywhere.
//
// ── ROIA (Page Standard step 03) ─────────────────────────────────────────────
//
// ONE READER. Runs an ecommerce business doing eight figures, in America, and
// has decided to hire an agency. He KNOWS which part he wants help with. The
// owner was explicit about this on 2026-09-10, from ten years of client work:
// clients always know whether they are here about the store, the funnel, the
// email or the design. They may not know the mechanics. They are not confused
// about their own business, and a page that implies otherwise loses them.
//
// ONE IDEA (16 words)
// Ecommerce work is easy to buy and hard to judge, so every job gets tied
// to a number first.
//
// ONE OFFER, TWO DOORS. Book a call, or leave details. Both end in the free audit.
// ONE ACTION. Every button says "Get in touch with us", resolving to #contact.
//
// ── WHY THIS ANGLE, AND WHAT IT AVOIDS ───────────────────────────────────────
//
// Two arguments were already taken and could not be reused:
//   - /services/ecommerce-agency/new-york (page #11) owns the platform ceiling.
//     Its place layer is "Your store didn't get worse. You outgrew it", its
//     gradient is "Every platform has a ceiling", and its asset is "Where each
//     platform runs out". Austin must not re-argue migration.
//   - /services/shopify-development-agency/austin (page #13) owns "which kind
//     of company are you actually hiring", with the four-options table. Master
//     Strategy requires two pages in one metro to differ in emphasis, so this
//     one cannot repeat it.
//
// What is left, and what the secondary keywords actually point at
// (ecommerce website optimization austin, ecommerce strategies austin), is a
// reader buying an OUTCOME rather than a deliverable. Hence the argument:
// name the number before the quote.
//
// ── ASSET REBUILT 2026-09-10 ON THE OWNER'S CRITIQUE. READ BEFORE EDITING. ───
//
// The first version was a six-row table explaining what design, development,
// optimization, SEO, ads and retention each do. The owner cut it outright, and
// the reasoning is the most important note in this file:
//
//   This reader runs a brand. He knows what retention does. He knows what ad
//   creative is. A section that walks him through the service categories reads
//   as an insult to his intelligence, and it loses him.
//
// Its `derived` line was worse: "almost every disappointing agency project
// we've been asked to take over was a good piece of work aimed at the wrong
// number." That asserts rival agencies don't know what to fix, which we cannot
// prove and which reads as trying too hard. NEVER write a line like it again.
//
// The replacement is the migration scoping sheet, which is expert content
// rather than explanatory content: what actually has to move when you change
// platforms, and where each piece gets difficult. It assumes the reader is
// competent and tells him something he genuinely may not have costed for.
//
// ── MIGRATION PIVOT (owner, 2026-09-10) ──────────────────────────────────────
//
// Commercially, replatforming customers are the ones we most want off this
// keyword, because we are primarily a Shopify agency and a migration brings a
// brand onto Shopify. So migration replaced development as a disciplines row,
// it carries the asset, and it is named in the H1, the meta and the hero.
//
// BUT the owner was equally explicit about the limit: do NOT turn this into a
// migration landing page. The search intent behind "ecommerce agency austin" is
// broad, and a page narrowed to replatforming will not rank for it. Every other
// service stays, at full strength, and a reader who wants only SEO or only
// email must still find himself here. Weight it, don't narrow it.
//
// ── COMPETITOR SECTION SCAN, 2026-09-10 ──────────────────────────────────────
//
// Page one for the primary is far more platform-mixed than the Shopify term:
// clickpost.ai, magecloud.agency (Magento heritage), webecommercepros.com,
// sermondo.com, plus the Semrush and Barrel/Netalico listings. That mix is
// itself evidence for the hard constraint above.
//
// ADOPTED: back-office and systems integration, which every competitor names
// and we genuinely do (see /services/shopify-integration-services). It is a
// disciplines row here rather than an afterthought.
// REJECTED: "headless" as a headline capability, which is a spec word this
// reader did not ask for; partner-tier badging, still unconfirmed; and the
// competitor-research framing, which we do not sell as a line item.
//
// ── VERTICAL RULE ────────────────────────────────────────────────────────────
//
// Austin CPG signal stays MODERATE, per the owner. It lives in the hero image
// and case-study mix only. Consumables are one of six categories. The copy
// never narrows to CPG, because a B2B distributor and a jewelry brand both
// search this term and both can buy.
//
// ── CASE STUDIES ─────────────────────────────────────────────────────────────
//
// Disjoint from page #13's set apart from none: #13 uses 111skin, saddleback,
// this-works, nurture-life, happy-mammoth, loop-earplugs, sneak-energy,
// ronaldo-jewelry, dryrobe, everlast, capelli-sports and wild. This page uses a
// different twelve where the pool allows.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_AUSTIN: GeoPage = {
  type: "geo",
  slug: "austin",
  path: "/services/ecommerce-agency/austin",
  hub: "/services/ecommerce-agency",
  status: "draft",

  geo: {
    name: "Austin",
    type: "metro",
    areaServed: "Austin, Texas",
  },
  archetype: ["G"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency austin",
  secondaryKeywords: [
    "ecommerce development austin",
    "ecommerce web design austin",
    "ecommerce website optimization austin",
    "ecommerce strategies austin",
  ],
  faqKeywords: [
    "what does an ecommerce agency do",
    "how much does an ecommerce agency cost",
    "how to choose an ecommerce agency",
    "ecommerce agency vs in-house team",
    "how long does an ecommerce project take",
  ],
  // Empty on purpose and check-forbidden confirms it: zero soft presence
  // matches. Place references are all "Austin brands" or "this market". An
  // entry here means a human read that exact phrase and cleared it.
  reviewedPhrases: [],

  metaTitle: "Ecommerce Agency Austin | Move, Build & Grow Your Store",
  // Rewritten 2026-09-10: the previous version was the formula version of a
  // description, a verb triad plus a service list plus a differentiator clause
  // ("replatform, build and grow. Migration, design, SEO, ads and email,
  // with..."). It read as machine-written. This one is two plain sentences.
  metaDescription:
    "Ecommerce agency Austin brands call when they're moving platforms or want more out of the store they've got. Price and date agreed before anyone starts.",
  shortTitle: "Ecommerce agency Austin",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Plain, not flashy, per the owner's correction on page #13. Says what we
  // are and what it is for. No platform named anywhere in the hero.
  h1: "Ecommerce agency Austin brands hire to build, move and run their store",
  qualifier:
    "Whether you're replatforming, starting from scratch or improving what you already have. Migration, design, SEO, ads and email. One price and one date in writing before we start, and everything we make is yours.",

  // Candy Kittens. `src` is the poster: first paint, and the whole experience
  // under prefers-reduced-motion, since the video is never fetched in that case.
  heroImage: {
    src: "/images/Case%20studies/posters/Candy%20Kittens%20video.webp",
    alt: "The Candy Kittens storefront, rebuilt around gifting and seasonal campaigns",
    video: "/images/Case%20studies/Candy%20Kittens%20video.mp4",
    aspect: "4 / 5",
  },

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years doing this" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  // ── Trust bar ─────────────────────────────────────────────────────────
  // Talks about our own work only. No instruction to go interrogate anyone
  // else, per the owner's note that you don't point at rivals from an elite
  // list.
  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading:
      "Sweets, jewelry, sportswear, drinks, wholesale. Real businesses you can open in a new tab and look through. Every figure further down this page came out of one of them.",
  },

  assetCtaLabel: "See what a replatform actually involves",

  proofCta: {
    text: "Tell us what you are working with and we will tell you what we would do about it.",
    label: "Get in touch with us",
  },
  servicesCta: {
    text: "Tell us what you're working on and we'll come back with a plan and a price.",
    label: "Get in touch with us",
  },
  closingCta: {
    text: "That's how we run it. Now tell us about your business.",
    label: "Get in touch with us",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  // Does NOT guess what is broken and does NOT suggest he is confused about
  // his own business. Opens on the thing he genuinely cannot see from outside.
  hook:
    "You already know which part of the business you want help with. What's harder is telling, from the outside, whether an agency will actually move it.\n\nSo we start by naming the number. Before there's a quote, we agree what this work is supposed to change and where you'll see it.",

  // ── Quick answer ──────────────────────────────────────────────────────
  // The passage an AI Overview lifts. Stands alone. 46 words. No platform.
  quickAnswer:
    "We're Ecomm Wizards, an ecommerce agency Austin brands hire for design, development, SEO, ads and email. Take one of those or take all of them. Every job is tied to a number we agree before quoting, and you get one price and one date in writing before work starts.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // Deliberately NOT page #13's growth-and-competition angle. This one is
  // about who Austin brands sell to, which is the fact that makes the store
  // the whole business. No brand names: naming local companies we have not
  // worked with risks implying we have.
  placeLayerHeading: "Austin builds national brands, and the store does the selling",
  placeLayer:
    "This market has turned out a long run of consumer brands that sell right across the country. Food and drink, western wear, outdoor gear, jewelry, supplements.\n\nWhat they have in common is that most of their customers will never set foot in Texas. So the store isn't a shop window. It's the whole shop. Everything a good salesperson would do in a room has to be done instead by a product page, an email and an ad.\n\nThat's the work we do. It carries your revenue every day of the year, so it never really has a finish date.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  // Service x place, and the page's reason to exist. Short: three tight
  // paragraphs, per the owner's instruction that this reader does not read
  // essays. Sourced facts below.
  gradientLayerHeading: "Every job we take is tied to a number, and we agree it before we quote",
  gradientLayer:
    "Ecommerce work is easy to buy and hard to judge. A redesign, a report, a set of campaigns. All of it real work, and none of it tells you on its own whether the business is better off.\n\nSo we don't start from the deliverable. We start from the number, whether that's conversion rate, non-brand traffic, cost per order or repeat rate.\n\nWe agree which one, we tell you where you'll see it move, and we say up front what this work won't fix. That last part saves you money and saves us time.",
  gradientFacts: [
    {
      id: "austin-consumer-brand-cluster-2026",
      claim:
        "Austin is an established cluster for national consumer brands across food and beverage, western apparel, outdoor gear and jewelry, evidenced by Built In Austin's ecommerce company listing and by TexasCPG, a statewide nonprofit launched to support the Texas consumer packaged goods ecosystem, whose board includes Austin members. Underwrites the place layer's claim that brands here sell nationally rather than locally. NO COMPANY IS NAMED IN THE COPY, deliberately: naming local brands we have not worked with risks a reader inferring a client relationship. Keep it categorical.",
      url: "https://www.builtinaustin.com/articles/austin-ecommerce-startups-you-should-know",
      publisher: "Built In Austin; TexasCPG",
      captured: "2026-09-10",
      reviewAfterDays: 365,
    },
    {
      id: "austin-ecommerce-serp-platform-mix-2026",
      claim:
        "Page one for \"ecommerce agency austin\", captured 10 September 2026, is materially more platform-mixed than the equivalent Shopify term: it returns Magento-heritage shops (magecloud.agency), general ecommerce firms (webecommercepros.com), performance marketing agencies (Intellibright via sermondo.com) and directories, alongside the Shopify-specific results. Evidence for the Page Standard's rule that this keyword's reader has NOT declared a platform. Not cited on the page; it governs what the page is allowed to assume.",
      url: "https://agencies.semrush.com/list/ecommerce/austin/",
      publisher: "Google SERP capture; Semrush Agency Partners",
      captured: "2026-09-10",
      reviewAfterDays: 90,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // The gradient made checkable, and the page's most useful section. Column 4
  // is the honest one: what each service will NOT do. It scopes rather than
  // excludes, so no reader is told to leave, and it is the visible version of
  // the promise the conversion block makes about telling you what to skip.
  asset: {
    title: "What actually has to move when you change platforms",
    intro:
      "The storefront is the easy half and it's the half that gets demoed. This is the other half, and it's where a replatform is won or lost.",
    renderer: "matrix",
    method: {
      captured: "2026-09-10",
      window: "current replatform engagements, September 2026",
      howGathered:
        "This is our own scoping sheet for a migration, written out. We quote every row separately from the storefront. Launch week goes badly or quietly depending on these.",
    },
    columns: ["What's moving", "Where it gets difficult", "How we handle it"],
    rows: [
      {
        label: "Order history",
        cells: [
          "Refunds, exchanges and partial fulfillments lose their link to the original order, so the records import as flat rows.",
          "We map the order states before anything moves, then reconcile counts and totals against the old system.",
        ],
      },
      {
        label: "Customer accounts",
        cells: [
          "Passwords can't move between platforms. Everyone needs a reset, and plenty of people never open that email.",
          "We run the reset as a planned campaign with a reason attached, and we warn people it's coming.",
        ],
      },
      {
        label: "URLs and rankings",
        cells: [
          "**Collection and product URL structures rarely match.** Redirects get written for the pages people remember, and the long tail goes missing.",
          "We pull every indexed URL first, map them one to one, and keep the 404 log open for weeks afterward.",
        ],
      },
      {
        label: "Reviews and photos",
        cells: [
          "Reviews are tied to product IDs that change in the move, so they land on the wrong products or on none.",
          "We match on SKU instead of ID, then check counts per product against the backup before go-live.",
        ],
      },
      {
        label: "Subscriptions",
        cells: [
          "**Live billing dates are the hardest thing to carry across.** Get it wrong and you either double-charge people or skip a cycle.",
          "We move these separately from the catalog, with a small test group billed first.",
        ],
      },
      {
        label: "Back office",
        cells: [
          "ERP, 3PL and accounting connections have to be rebuilt from scratch, and that work has a habit of landing after launch.",
          "We inventory every connection at the start and scope it into the build, not after it.",
        ],
      },
    ],
    derived:
      "None of it is exotic. It's just the work underneath a replatform, and it's why we quote it separately from the storefront instead of folding it into a single number.",
    reviewAfterDays: 365,
  },

  // ── Discipline deep-dives ─────────────────────────────────────────────
  // Headings say what the service is AND why us, per Page Standard step 06.
  // No paragraphs: by this point the reader has done all the reading he is
  // going to do. Nothing here names a platform.
  disciplines: {
    label: "What we do",
    heading: "Seven things we do, and what each one is for",
    intro: "Pick the one you came for. If a different one would do more for you, we'll say so.",
    items: [
      {
        label: "Design and UX",
        heading: "We redesign the pages where people decide whether to buy",
        body: "The ecommerce web design Austin brands buy should be built from how their customers actually shop, not from a mood board.",
        covers: ["UX and UI design", "Product page design", "Landing pages", "Art direction", "Design systems"],
        imageAlt: "The Evie Lou womenswear storefront, redesigned around how customers shop it",
        caseSlug: "evie-lou-shopify-fashion-cro",
        cta: { label: "Explore design and UX", href: "/services/shopify-ux-and-ui-design" },
      },
      {
        label: "Moving platforms",
        heading: "We move you to Shopify and your orders, customers and rankings come too",
        body: "The ecommerce development Austin brands need for a replatform is mostly the parts nobody demos: the data, the redirects and the systems behind them.",
        covers: ["Replatforming", "Data migration", "URL and redirect mapping", "Custom development", "Integrations"],
        imageAlt: "The This Works storefront after its move onto a faster platform",
        caseSlug: "this-works-shopify-plus-migration",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        // Added back 2026-09-10 on the owner's instruction. Migration replaced
        // this row in the previous revision, which was wrong: plenty of readers
        // on this keyword are ALREADY on Shopify and want build work, and
        // dropping development told them the page wasn't for them.
        label: "Development",
        heading: "We build the custom parts your business runs on",
        covers: ["Custom development", "B2B and wholesale", "Subscriptions", "Integrations", "Speed"],
        body: "Usually it's the ordering, the pricing rules and the systems behind them, none of which show up in a design review.",
        imageAlt: "The Mouldings One wholesale ordering portal we designed and built",
        caseSlug: "mouldings-one-shopify-b2b-portal",
        cta: { label: "Explore development", href: "/services/shopify-development-agency" },
      },
      {
        label: "Optimization",
        heading: "We test changes on your store instead of guessing at them",
        body: "Ecommerce website optimization Austin brands pay for should come back with the failed tests as well as the wins.",
        covers: ["Conversion rate optimization", "A/B testing", "Checkout", "Analytics", "Speed"],
        imageAlt: "The Twillory menswear storefront and the checkout tests we ran on it",
        caseSlug: "twillory-shopify-cro",
        cta: { label: "Explore optimization", href: "/services/shopify-cro-agency" },
      },
      {
        label: "Ecommerce SEO",
        heading: "We bring in people searching for what you sell, not for you",
        body: "Ranking for your own name is already yours. The growth is in everything else people type.",
        covers: ["Technical SEO", "Collection architecture", "Product page SEO", "Content", "AI search"],
        imageAlt: "The John Hardy luxury jewelry storefront and its rebuilt collection structure",
        caseSlug: "john-hardy-shopify-plus-migration",
        cta: { label: "Explore ecommerce SEO", href: "/services/ecommerce-seo-agency" },
      },
      {
        label: "Ads and creative",
        heading: "We make the ads, and we show you which ones paid for themselves",
        body: "Ecommerce strategies Austin brands can act on come from what the testing found, not from a quarterly deck.",
        covers: ["Ad creative", "Paid social", "Creator content", "Creative testing", "Brand identity"],
        imageAlt: "Chilly's reusable drinkware in ad creative we produced and tested",
        caseSlug: "chillys-creative-strategy",
        cta: { label: "Explore creative strategy", href: "/services/creative-strategy" },
      },
      {
        label: "Email and retention",
        heading: "We build the emails that bring people back without a discount",
        body: "Automated flows, segmented campaigns and subscriptions, set up so the messages reach the inbox.",
        covers: ["Klaviyo email and SMS", "Flow strategy", "Segmentation", "Subscriptions", "Loyalty"],
        imageAlt: "The VITHIT drinks storefront with the Klaviyo flows and segments we built",
        caseSlug: "vithit-shopify-plus-d2c",
        cta: { label: "Explore marketing and retention", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── Categories ────────────────────────────────────────────────────────
  // Written fresh rather than carried from page #13, which uses the same
  // block. Each entry names the thing that actually breaks in that category.
  // Consumables are one of six: the Austin CPG signal stays moderate.
  segments: {
    heading: "Categories we've shipped in",
    intro:
      "The mechanics are the same everywhere. What differs is what starts breaking as you scale, so here's what we watch in each.",
    items: [
      {
        icon: "consumable",
        name: "Food, drink and supplements",
        what: "Repeat purchase built into the product page, bundles that keep their margin, and delivery windows the store is honest about.",
        breaks: "Timing. Send the reorder prompt a week late and they've already bought somebody else's.",
      },
      {
        icon: "apparel",
        name: "Apparel and footwear",
        what: "Fit guidance from your own return data, launches that survive a traffic spike, and exchanges that keep the sale.",
        breaks: "Sizing. A return that could have been an exchange costs you the margin and the customer.",
      },
      {
        icon: "jewelry",
        name: "Jewelry and accessories",
        what: "Photography you can zoom into, made-to-order options handled properly, and reassurance sized to the price.",
        breaks: "Hesitation. Past a certain price, an unanswered question closes the tab. Nobody opens a chat to ask.",
      },
      {
        icon: "beauty",
        name: "Beauty and skincare",
        what: "Whole routines built out from single products, ingredient detail that scales, and refills that arrive on time.",
        breaks: "Reorder timing. Miss the window and the habit forms somewhere else.",
      },
      {
        icon: "outdoor",
        name: "Outdoor and gear",
        what: "Specification detail buyers compare line by line, and honest shipping math on heavy items.",
        breaks: "Freight. A real shipping cost revealed at checkout empties more carts than any price on a product page.",
      },
      {
        icon: "wholesale",
        name: "B2B and wholesale",
        what: "Account pricing, payment terms, reordering from history, and a portal that's faster than emailing a rep.",
        breaks: "Adoption. If it's slower than a phone call your buyers go back to the phone, and you lose the data.",
      },
    ],
  },

  // ── Client quotes ─────────────────────────────────────────────────────
  results: {
    heading: "Three owners, three numbers, and where each came from",
    intro: "Every figure opens the case study behind it, so you can check it yourself.",
    slugs: [
      "111skin-shopify-cro-redesign",
      "everlast-shopify-plus-sports-redesign",
      "wild-shopify-plus-subscriptions",
    ],
    headlines: {
      "111skin-shopify-cro-redesign": "{brand} lifted conversion 46% without changing the product range",
      "everlast-shopify-plus-sports-redesign": "{brand} more than doubled conversion after the store was rebuilt",
      "wild-shopify-plus-subscriptions": "{brand} grew a refill product into a subscription people keep",
    },
  },

  // ── How we work ───────────────────────────────────────────────────────
  // Deliberately different habits from page #13's four, and all four here are
  // about measurement and candour, which is what this page's argument needs.
  howWeWork: {
    heading: "What we take pride in",
    intro: "None of this is clever. It's what you'll judge us on a year from now.",
    items: [
      {
        title: "We report the same numbers every month",
        body:
          "Whatever we agreed at the start, measured the same way each time. If one went the wrong way, you'll see it in there.",
      },
      {
        title: "We tell you when something didn't work",
        body:
          "Roughly half of what we test doesn't win. You hear about those too, and what we changed because of them. An agency that only reports wins isn't testing much.",
      },
      {
        title: "A store that's down doesn't wait for Monday",
        body:
          "Regular work happens on working days. But if orders stop on a Saturday, you message the shared channel and a developer starts on it that day. No ticket number, no auto-reply.",
      },
      {
        title: "You own all of it, and the reasons behind it",
        body:
          "Code, designs, accounts and campaign templates are yours from day one. So is the written record of why things were built the way they were, so anyone can pick it up after us.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  // Price stated plainly. Figures are the ones already approved and live on
  // pages #10 and #13. No new commercial commitment is invented here.
  whatWeDoAboutItHeading: "What an ecommerce agency Austin brands hire costs, and how we run it",
  whatWeDoAboutIt:
    "Nothing gets quoted before it gets looked at. Week one we measure, and tell you which piece of work would move your number most. That write-up is yours either way.\n\nThen one price and one date, in writing, before any work starts. Change the brief later and we requote it in front of you.\n\nBuilds run $5,000 to $50,000 depending on how much is custom, and most take six to twelve weeks. Ongoing work is a monthly retainer.\n\nWhat comes with that price is ownership. We treat your store like we have money riding on it.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  proofHeading: "Stores we've built, and what changed",
  proof: [
    {
      slug: "candy-kittens-shopify-food-beverage-cro",
      vertical: "Premium food",
      whatWasBuilt:
        "A gifting-first storefront with an editorial homepage and seasonal campaign tooling the team can run themselves",
      outcome: "+182% conversion rate, $8.1M new annual revenue, +34% average order value",
      verified: true,
    },
    {
      slug: "chlobo-shopify-plus-migration",
      vertical: "Jewelry",
      whatWasBuilt:
        "A full replatform for a jewelry catalog, rebuilt around mobile browsing and with the running costs cut at the same time",
      outcome: "+48% conversion rate, +39% mobile revenue, -52% platform cost",
      verified: true,
    },
    {
      slug: "capelli-sports-shopify-migration",
      vertical: "Sportswear",
      whatWasBuilt:
        "A move onto a faster stack for a large sportswear catalog, with the search rankings protected through the switch",
      outcome: "+24% conversion rate, +38% site speed, 95% of SEO equity retained",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  // Three, per the owner's instruction on page #13. Objection 1 concedes
  // something we cannot prove in advance.
  objectionsHeading: "The things worth pushing back on",
  objections: [
    {
      objection: "Every agency says it works to a number. Then the number moves.",
      answer:
        "It does, and we can't prove otherwise on our own website.\n\nWhat we can do is write it down before you pay. Which measure, where you'll read it, and what we've said it won't fix. All three go in the scope, so there's something to hold us to later.",
    },
    {
      objection: "We have an in-house team already.",
      answer:
        "Good. Most of what an ecommerce agency Austin brands bring in sits alongside an internal team. We're rarely there to replace one.\n\nUsually we're taking the piece nobody has time for, or the one nobody has done before. A replatform is the common example: you do it once, and your team does it never. If yours already covers what you came here for, you don't need us and we'll say so on the call.",
    },
    {
      objection: "We only want one of these seven things.",
      answer:
        "Then buy one. We quote them separately and plenty of clients only ever take a single one.\n\nAll we'd ask is that we agree the number first. That's a short conversation and it's free.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // Nothing here assumes a platform. Q4 exists because it is the question
  // this reader has that page #13's reader does not.
  faqHeading: "Questions we get asked on the first call",
  faqs: [
    {
      question: "What does an ecommerce agency actually do?",
      answer:
        "Ours covers seven: migration, development, design, optimization, search, paid media and retention. Some agencies do one of those deeply, some cover the set. What matters more than the list is whether they'll name the number the work is meant to move before they quote it.",
      unique: true,
    },
    {
      question: "How much does an ecommerce agency Austin brands hire usually cost?",
      answer:
        "Ours run $5,000 to $50,000 for a build, depending on how much is custom, with ongoing work as a monthly retainer.\n\nQuotes for what sounds like the same job can differ by ten times. That's normally because it isn't the same job, so ask what's in and what's out before you compare numbers.",
      unique: true,
    },
    {
      question: "How do we know the work is doing anything?",
      answer:
        "Because we agree the measure before we quote, and report it the same way every month. You read it in your own analytics, so you can check up on us any time without asking.",
      unique: true,
    },
    {
      question: "We're not on Shopify. Does that rule us out?",
      answer:
        "No. Plenty of the businesses we work with came from somewhere else, and the first conversation is about what you're trying to achieve. What you're running now comes second.\n\nWe'll be straight with you about what that means for scope and cost before anything is agreed.",
      unique: true,
    },
    {
      question: "We haven't built the store yet. Is that too early?",
      answer:
        "No, and it's usually cheaper than fixing it later. Getting the structure right at the start saves unpicking it at version three.\n\nWe'll say plainly if the sensible first step is smaller than what you asked about.",
      unique: true,
    },
    {
      question: "How long does a project take?",
      answer:
        "Six to twelve weeks for most builds, depending on how much is custom and how fast decisions come back from your side. A large catalog runs longer. You get the date in writing before work starts.",
      unique: false,
    },
    {
      question: "Can you handle the ads and email as well as the site?",
      answer:
        "Yes, and it's the arrangement we'd argue for. The ad, the email and the page they lead to are one system. When different companies own each piece, the gaps between them belong to nobody.",
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
  // Zero keyword targets, per Page Standard step 09. No primary, no
  // secondary, no city name, no platform name.
  conversion: {
    heading: "Tell us which number you want moved",
    whatYouGet:
      "Name the one you'd pick if you could only have one. We'll go and look at it properly, free, and come back with what we found.",
    whatWeWillTellYouNotToDo:
      "If the work you're asking about wouldn't move that number, we'll say so before you've paid us, not six weeks in. Selling someone the wrong project is how you win one job and lose the client.",
    responseExpectation:
      "Someone senior reads it and replies the same day or the next. It won't be a sales rep.",
    audit: {
      transition: "You already know which number you'd want moved first.",
      offer: "Name it. We'll dig into it properly and you get back what we found:",
      parts: [
        "Where that number actually stands, measured on your own store instead of some industry benchmark.",
        "What's holding it down, which is usually a layer under the thing you noticed.",
        "What we'd do about it, in order, and which single change earns the most.",
      ],
      limit: "You're getting the diagnosis. Doing the work is a separate number you're free to ignore.",
      noObligation:
        "No charge, no run of follow-up emails, and the findings stay yours whichever way you go.",
      turnaround:
        "Book any thirty-minute slot. Three business days later the person who did the digging walks you through it live, so you can interrupt and argue with it.",
      secondDoor: "Don't want a call? Leave your details and we'll send the findings over.",
    },
  },

  // ── Sources ───────────────────────────────────────────────────────────
  // On-page citation markers are retired, so nothing here renders. Provenance
  // record for the editorial pass and the review windows.
  sources: [
    {
      id: "austin-consumer-brand-cluster-2026",
      claim:
        "Austin as a cluster for nationally-selling consumer brands across food and beverage, western apparel, outdoor and jewelry. Supports the place layer only, and is stated categorically: no company is named on the page, to avoid a reader inferring a client relationship we do not have.",
      url: "https://www.builtinaustin.com/articles/austin-ecommerce-startups-you-should-know",
      publisher: "Built In Austin; TexasCPG",
      captured: "2026-09-10",
      reviewAfterDays: 365,
    },
    {
      id: "austin-ecommerce-serp-platform-mix-2026",
      claim:
        "Page one for the primary keyword is materially more platform-mixed than the Shopify-named equivalent. Not cited on the page. It is the evidence for the hard constraint at the top of this file: this reader has not declared a platform, so no line may assume one. Ninety-day window because a SERP moves.",
      url: "https://agencies.semrush.com/list/ecommerce/austin/",
      publisher: "Google SERP capture; Semrush Agency Partners",
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
// 4. VELOCITY: 3 publish flips inside the rolling 7 days as of 2026-09-10,
//    against a cap of 5. Pages #13 and #14 would take that to 5.
