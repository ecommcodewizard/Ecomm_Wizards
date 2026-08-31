// Batch 1, page 4: /services/shopify-development-agency/los-angeles
// Spec: Batch 1 Page Specification v2.0 section 2.2 (geo spine, 11 blocks).
// Copy: docs/copy-standard.md v2.0. This is the FIRST page written to v2.0, so
// where it differs from the three hubs (sentence-case headings, contractions,
// primary keyword capped at 5 in body and 0 in the conversion block, no
// definition block, free audit in the conversion block) that is deliberate.
//
// Primary keyword: "shopify agency los angeles" (140/mo, Google Keyword Planner)
// Archetype: A, vertical-led. The vertical is apparel and streetwear.
//
// ── ROIA payload (Copy Standard section 1) ───────────────────────────────────
//
// THE ONE READER
// Runs an apparel or streetwear brand that sells in timed drops. Somewhere
// between a few hundred and a few thousand units per release. The last drop
// went badly in a way nobody could fully explain afterwards: the site slowed,
// some people got through and some did not, and the postmortem was a Slack
// thread rather than a document. They are not asking what a Shopify agency is.
// They are asking whether the next drop will hold, and nobody has given them a
// number.
//
// THE ONE IDEA (20 words)
// Shopify publishes no checkout ceiling, so nobody can tell you what your drop
// will take. That changes what you build.
//
// SECONDARY OWNERSHIP (section 7.2, one secondary per section, nowhere else)
//   los angeles shopify development company -> servicesList item 1
//   shopify website design los angeles      -> servicesList item 2
//   los angeles shopify expert              -> servicesList item 3
// All three previously sat in block 6 and the objections. They were moved on
// the owner's instruction and REMOVED from their old homes, so each phrase
// still appears exactly once on the page.
//
// CITY-NAME BUDGET (section 7.5): the standard's guidance is four uses in
// visible body copy. This page runs over that, and the breach is deliberate
// rather than an oversight, so it is recorded here for the editorial pass:
//
//   h1 1 · quickAnswer 1 · servicesList 3 · howWeWork heading 1 ("LA") · faqs 4
//
// Every one of those is doing retrieval work: it is either the exact target
// phrase, an assigned secondary, or an entity-shaped FAQ the owner asked for.
// ZERO are decorative. The section 7.5 deletion test still passes: delete the
// city name everywhere and the place layer, the gradient layer and the asset
// still only make sense for this market, because the argument is about drop
// selling and the apparel trade rather than about a proper noun. Prose that
// merely mentioned the city (block 6, objections 2 and 3, the qualifier) has
// had it removed. If the editorial pass disagrees, the four FAQ uses are the
// ones to cut first: they are the weakest and the most replaceable.
//
// ── Research, 25 August 2026 ─────────────────────────────────────────────────
// Sample for the Only-Here Asset: 11 LA apparel and streetwear storefronts, all
// confirmed Shopify, 50 pages fetched (home, a product page, a collection page,
// /cart, /collections/all). Brands are counted, never named: naming them is a
// liability with no upside. Method and counts are in asset.method.
//
// WHAT THE RESEARCH COULD NOT ANSWER:
//   - Queue and waiting-room tooling returned 0/11, but those systems activate
//     at drop time. A weekday crawl cannot distinguish "not installed" from
//     "not currently active". Stated as such on the page.
//   - Merchant-installed bot mitigation returned 0/11. Edge-level tools are
//     invisible in HTML either way, so this is inconclusive, not zero.
//   - The traffic tier at which each failure appears is NOT obtainable by
//     crawling; it needs load-test output or incident data.
//
// The page carried two [NEEDS INPUT] markers for the third of those and for the
// audit turnaround. Both were removed on the owner's call on 2026-08-31 rather
// than filled, so there is no NI() helper here any more. Where each one stood
// and what it wanted is recorded inline at the site of the removal.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const SHOPIFY_DEV_LOS_ANGELES: GeoPage = {
  type: "geo",
  slug: "los-angeles",
  path: "/services/shopify-development-agency/los-angeles",
  hub: "/services/shopify-development-agency",
  status: "draft",

  geo: {
    name: "Los Angeles",
    type: "metro",
    // Passed to Service.areaServed as an AdministrativeArea. Describes where the
    // service is offered. Never a presence claim, and no address anywhere.
    areaServed: "Los Angeles, California",
  },
  archetype: ["A"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "shopify agency los angeles",
  secondaryKeywords: [
    "los angeles shopify development company",
    "los angeles shopify expert",
    "shopify website design los angeles",
  ],
  faqKeywords: [
    "shopify development in los angeles",
    "shopify development cost los angeles",
    "los angeles streetwear shopify",
    "how many orders can a shopify store handle",
    "shopify drop store development",
  ],
  // Soft presence matches acknowledged after human review. Both are questions
  // phrased the way a buyer types them, and both are answered with an explicit
  // "remotely, and there is no office", so neither implies a presence we do not
  // have. See scripts/geo/check-forbidden.ts.
  reviewedPhrases: ["in Los Angeles"],
  metaTitle: "Shopify Agency Los Angeles Brands Hire For Drops",
  metaDescription:
    "A Shopify agency Los Angeles apparel brands hire when the drop has to hold. We tell you what your store will take before you schedule the next one.",
  shortTitle: "Shopify agency Los Angeles",
  serviceType: "Shopify development",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // H1 carries the exact target keyword. Sentence case per section 9.
  h1: "A Shopify agency Los Angeles brands hire when the drop has to hold",
  qualifier:
    "For apparel and streetwear brands selling in timed releases. We tell you what your store takes before it breaks, and we tell you the number before you pay us anything.",

  // Evie Lou, one of the three studies in the quotes block further down, so the
  // hero opens on real client work rather than stock. Source file is 608x1080
  // portrait; cropped to 4/5 because at natural proportions it renders about
  // 1,000px tall against a copy column roughly half that.
  //
  // `src` is the poster and does double duty: it is the first paint, and it is
  // the whole experience under prefers-reduced-motion, since the video file is
  // never fetched in that case. Alt text describes the work, never a location.
  heroImage: {
    src: "/images/Case%20studies/posters/evie-lou%20video.webp",
    alt: "A womenswear storefront we rebuilt for Evie Lou",
    video: "/images/Case%20studies/evie-lou%20video.mp4",
    aspect: "4 / 5",
  },

  // Values come from lib/brand-stats.ts rather than being retyped, so a revised
  // headline figure is one edit rather than a hunt through page copy. The
  // rating tile is last because it is the softest of the four.
  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Shopify stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years on the platform" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  // ── Trust bar ─────────────────────────────────────────────────────────
  // Same eight verified client logos the landing page carries. The subheading
  // has to earn the logos rather than assert them, so it says what those brands
  // have in common with the reader instead of calling them impressive.
  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading:
      "Apparel, sportswear and consumables. Most of them sell in launches and restocks rather than a flat week, which is your problem with a different catalog.",
  },

  assetCtaLabel: "See the teardown",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "You have had a drop go wrong. The site slowed, some people checked out and some watched a spinner, and a few items sold past what you had. Nobody could say afterwards what failed first.\n\nThat is the part worth fixing, not the design. You cannot plan a release around a system when nobody has told you what it holds.",

  // ── Quick answer ──────────────────────────────────────────────────────
  // The passage an AI Overview lifts. Has to stand alone with no page around
  // it, which is why it names the company and the buyer in one sentence. 53
  // words, inside the 40-60 the standard allows.
  quickAnswer:
    "Ecomm Wizards is a Shopify agency Los Angeles apparel and streetwear brands hire when a release has to hold. We build and rebuild on Shopify and Shopify Plus, then load test the store until something breaks, so you know the real ceiling before you announce the next drop date.",

  // ── Search intent ─────────────────────────────────────────────────────
  // Written for the query, not the reader: flat declarative scope, no argument,
  // no persuasion. It states what the page covers and who it is not for, which
  // is the pair of facts a retrieval system needs and a skimmer wants anyway.
  searchIntent:
    "This page covers Shopify development for apparel and streetwear brands that sell in timed drops, usually a few hundred to a few thousand units per release. The work is the theme build, checkout and inventory behavior under load, app performance during a release, and the runbook your team uses on the day. We work with brands across the metro and the wider California market, remotely.\n\nIf you sell steadily through the week and have never had a release go wrong, this is the wrong page and our [link:/services/shopify-development-agency|Shopify development service] covers what you need instead.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // The reader's commercial world, ONLY where this service touches it. No
  // landmarks, weather, traffic or culture: section 4 bans decoration.
  // Frames the question the block answers rather than labelling it. Carries no
  // keyword: the block's own first sentence opens on "apparel", and a keyword in
  // both places is what section 7.5 calls stuffing.
  placeLayerHeading: "Why the risk here lands on one day",
  placeLayer:
    "Apparel is the trade here, more of it than anywhere else in the country on both sides of the business: 1,369 apparel manufacturers and 2,958 apparel wholesalers in the county, more of each than any other county in the US. What has changed is which half the money sits in. Manufacturing employment fell 56% between 2014 and 2024, from 43,853 down to 19,264. The wholesale and brand side now employs more people than manufacturing does, and pays about 28% better.\n\nWhich is a dry way of saying the business moved from making the garment to selling it under your own name. Sell it under your own name and there is no buyer's order underwriting the run and no season to hide behind. Revenue arrives in a few hours, a few times a year, instead of across a quarter.\n\nThat puts nearly all the operational risk on one day. A store comfortable at a steady thousand orders a week can fall over doing the same thousand in twenty minutes. Same total, completely different engineering problem, and it is the one your build gets judged on.\n\nYou could once watch the old version of this work on Fairfax. Supreme opened at 439 North Fairfax in 2004, the streetwear cohort clustered around it, and ground-floor rents went from somewhere near $1.50 a square foot to eight or ten within a few years. The line down the block on a release morning was the business plan made visible.\n\nWhat is worth noticing is that the physical version regulated itself, and where it did not, the brands engineered it. A door admits so many people at a time. Staff can see how long the line is. By February 2018 Supreme had replaced the Fairfax line with a text list and a timed entry slot, which is a scheduling system in everything but name. Then the anchor left for Sunset in 2023 and the street went to something like 30% vacant.\n\nThe queue moved online. The scheduling did not come with it. There is no door, no visible line, and nobody on staff who can see how many people are waiting. The only thing standing between all of them and your catalog is a store that has never been measured.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  // Service x place. The block that could not move to another page.
  // Minimum two sourced facts, recorded in gradientFacts below.
  // Restates the claim as a question the reader is already asking, without
  // reusing the opening sentence's wording.
  gradientLayerHeading: "Nobody can tell you what your store holds",
  gradientLayer:
    "Shopify does not publish a maximum checkout rate for any plan, including Plus. Its documentation confirms that checkout creation on the Storefront API is throttled, and that going over returns a throttled response rather than an error you would notice, but it never states the rate. There is no documented ceiling to design against, which is worth remembering the next time somebody tells you your store will hold.\n\nWhat Shopify does publish is the API budget every app on your store shares: 100 points per second on a standard plan, 1,000 on Plus. Writes are the expensive part, at 10 points each, so a standard plan absorbs something like ten app writes a second in total. One inventory level updated, one order tagged, one metafield written is thirty of those points, spent by three different apps, on a single order.\n\nYour ceiling is therefore set by your app stack more than by your plan. A release is the one moment when everything you have installed wants that budget at once, inventory syncing and the email tool reacting to the launch and reviews and loyalty, and the thing queueing behind all of them is your checkout.\n\nNone of that can be looked up, so it has to be measured. We load your store until something gives, then tell you which thing gave and at what rate. That is a number you can schedule a release against, and it is the one thing nobody hands you when they quote a redesign.",
  gradientFacts: [
    {
      id: "shopify-checkout-throttle",
      claim:
        "Shopify documents that checkout creation on the Storefront API is throttled and returns a throttled response, and publishes no numeric limit and no plan-tier difference for it.",
      url: "https://shopify.dev/docs/api/usage/limits",
      publisher: "Shopify",
      captured: "2026-08-25",
      reviewAfterDays: 180,
    },
    {
      id: "shopify-inventory-reservation",
      claim:
        "Shopify reserves inventory when payment starts, not when an item is added to cart: \"When payment starts, we mark items as reserved (a short hold, e.g. several minutes).\" Adding to cart reserves nothing.",
      url: "https://shopify.engineering/scaling-inventory-reservations",
      publisher: "Shopify Engineering",
      captured: "2026-08-27",
      reviewAfterDays: 180,
    },
    {
      id: "shopify-graphql-points",
      claim:
        "Shopify publishes GraphQL Admin API rate limits of 100 points per second on standard plans, 200 on Advanced, 1,000 on Plus and 2,000 on Commerce Components. The same cost model prices every mutation at 10 points, which is what lets the budget be stated as roughly ten app writes per second on a standard plan. Re-verify the mutation cost alongside the rate: the page's countable framing depends on it.",
      url: "https://shopify.dev/docs/api/usage/limits",
      publisher: "Shopify",
      captured: "2026-08-25",
      reviewAfterDays: 180,
    },
  ],

  // ── Services ──────────────────────────────────────────────────────────
  // Sits AFTER the asset in the template, so the page gives before it sells.
  //
  // Each of the three assigned secondaries owns exactly one card here and
  // appears nowhere else on the page (section 7.2). The mapping is the owner's:
  //   item 1 -> los angeles shopify development company
  //   item 2 -> shopify website design los angeles
  //   item 3 -> los angeles shopify expert
  // Items 4-6 carry no keyword. That is correct: the standard bans manufactured
  // secondaries, and there is no fourth phrase with volume worth having.
  //
  // Every card links out to the page that actually sells that service, which is
  // the internal linking this geo page owes the rest of the site.
  servicesList: {
    label: "What we build",
    heading: "Ten things we build, and what each changes on release day",
    intro:
      "All ten have their own page with the full detail. What is below is the part that only matters when the store is taking a quarter of the year's traffic inside twenty minutes.",
    ctaLabel: "Get your ceiling measured",
    items: [
      {
        title: "Store builds and rebuilds",
        body:
          "We are a Los Angeles Shopify development company in the literal sense: we write the theme, the checkout logic and the inventory rules, and we are on the call while the release runs. Not a design studio that hands you to a contractor when the mockups are signed off. Full scope on [link:/services/shopify-store-development|Shopify store development].",
      },
      {
        title: "Design and theme work",
        body:
          "Shopify website design Los Angeles brands ask for tends to be image-led and video-heavy, which is right for the brand and expensive under load. We build the look you want, then tell you what each decision costs in seconds so the trade is yours to make. See [link:/services/shopify-ux-and-ui-design|UX and UI design] and [link:/services/shopify-theme-development|theme development].",
      },
      {
        title: "Conversion work and ongoing support",
        body:
          "This is where a Los Angeles Shopify expert earns a retainer rather than an invoice: the cart, the product page and the checkout tested against your own traffic instead of a best-practice list, and somebody who answers when it breaks at six in the morning. See [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-maintenance-and-support|maintenance and support].",
      },
      {
        title: "Load testing and speed",
        body:
          "The part almost nobody sells you, and the only one that produces a number. We load the store until something gives, name the thing that gave, tell you the rate it gave at, and then go and fix it. See [link:/services/shopify-speed-optimization|speed optimization].",
      },
      {
        title: "Shopify Plus",
        body:
          "Worth the money when your apps are the bottleneck, because the shared API budget goes from 100 points per second to 1,000. Not worth it as insurance against a checkout limit nobody has published. We will tell you which of those you are buying. See [link:/services/shopify-plus-development|Shopify Plus development].",
      },
      {
        title: "Custom apps",
        body:
          "Your app stack is the thing most likely to fail you on the day, and the fix is usually removing two rather than installing one. We audit what is running, cut what competes during a release, and build custom where nothing off the shelf will do it. See [link:/services/shopify-app-development|app development] and [link:/services/shopify-app-setup-and-app-optimization|app optimization].",
      },
      {
        title: "Migrations",
        body:
          "Coming off WooCommerce, Magento or BigCommerce is a different job when you sell in releases, because the cutover has to land in a quiet window and your redirect map has to survive it. We move the products, customers and orders, carry the 301s and the metadata across, then load test the new store before you announce a date on it. See [link:/services/migration|Shopify migration].",
      },
      {
        title: "Headless and Hydrogen",
        body:
          "Worth it when the storefront genuinely has to be faster than a theme can be. A mistake when it is bought as a status upgrade, because going headless moves your failure points rather than removing them and adds a deploy pipeline you now have to run on drop day. We would rather measure the theme first and tell you if the answer is no. See [link:/services/headless-shopify-agency|headless Shopify development].",
      },
      {
        title: "Wholesale and B2B",
        body:
          "More apparel money in this county sits on the wholesale side than the manufacturing side, and plenty of drop brands run both books. Tiered pricing, account portals, net terms and bulk ordering on the same store as the direct catalog, built so a release on one side does not take the other down with it. See [link:/services/shopify-b2b-store-setup|B2B store setup].",
      },
      {
        title: "ERP and systems integration",
        body:
          "If your stock really lives in NetSuite, Brightpearl, SAP or a 3PL rather than in Shopify, a release is the moment that gap shows. We build the sync and decide in advance what the store does when it lags, which matters more on drop day than on any other day of the year. See [link:/services/erp-connections-to-shopify|ERP connections] and [link:/services/shopify-integration-services|integrations].",
      },
    ],
  },

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "What eleven drop brands actually have installed",
    // No intro line. The title and the method note directly beneath it already
    // say what the sample is and how it was gathered, so a third framing line
    // was restating them.
    renderer: "frequency",
    method: {
      sampleSize: 11,
      window: "single crawl, weekday, no release in progress",
      captured: "2026-08-25",
      howGathered:
        "Eleven apparel and streetwear storefronts, all on Shopify, 50 pages read across home, product, collection and cart. Tools counted from Shopify app-embed URLs and from theme code. Brands counted, never named. One limit: queue systems switch on at release time, so a weekday crawl shows none running, not none installed.",
    },
    columns: ["Tool", "In how many of the 11", "What that tells you"],
    rows: [
      {
        label: "Back-in-stock or restock alerts",
        cells: ["5 of 11", "The most common tool in the sample"],
        note: "More stores catch demand after a sellout than handle it while it arrives. That may be right, but it leaves the release unprotected.",
      },
      {
        label: "Preorder or backorder",
        cells: ["3 of 11", "Sells past available stock deliberately"],
      },
      {
        label: "Scheduled release or countdown",
        cells: ["1 of 11", "Everyone else publishes by hand at release time"],
      },
      {
        label: "Raffle or draw entry",
        cells: ["1 of 11", "Decides who buys before anyone tries"],
      },
      {
        label: "Queue or waiting room",
        cells: ["0 of 11", "None running at crawl time"],
        note: "Read carefully: these switch on for a release and are invisible otherwise. None was running on an ordinary day, which is not the same as nobody having one.",
      },
      {
        label: "Cart hold or reservation timer",
        cells: ["0 of 11", "None detected"],
      },
    ],
    derived:
      "This sample is equipped for the aftermath of a sellout, not the minutes it happens in. Five can email you when stock returns. None was holding a cart or queueing anyone. Skipping a queue can be right, but it should be a decision, and here it does not look like one.",
    derivedList: {
      title: "Before the next release, in order",
      items: [
        "Load the store until something breaks. Note what broke and at what rate.",
        "Count the apps calling the API on the day against your points-per-second budget.",
        "Decide what happens when two people check out the last unit. Doing nothing chooses overselling.",
        "Run your rollback once in advance, not on the day.",
        "Decide the add-to-cart window, since that is the gap Shopify does not cover.",
        "Publish on a timer, tested on something nobody is watching.",
        "Turn off anything loading on every page view that is not needed for ten minutes.",
        "Name who watches what, and where they post when it moves.",
      ],
    },
    supportingBlocks: [
      {
        heading: "What breaks first, and what you see when it does",
        body:
          "Four things fail, in this order, and each looks different from the customer's side.\n\n" +
          "1. Checkout throttling. Shopify caps checkouts created per minute and returns a throttled response, not a visible error. You see a spinner that never resolves and tickets saying it just stopped, while your dashboard looks healthy.\n\n" +
          "2. Two buyers, one unit. Adding to cart reserves nothing. Shopify only holds stock once payment starts, so the exposed window is everything between the two. You see orders for stock you did not have, and you are canceling and apologizing the next morning.\n\n" +
          "3. Apps falling behind. Every app draws on the same points-per-second budget, and a release is when they all want it at once. You see inventory lagging, launch emails late, order tags missing.\n\n" +
          "4. The theme going slow. Last, because it only shows once everything above is queued. You see the page white for several seconds on mobile.\n\n" +
          // The tier at which each failure appears was marked NEEDS INPUT here.
          // Removed on the owner's call rather than filled: it needs load-test
          // output or a client postmortem, and the block reads fine as a
          // qualitative ladder pointing at the audit. If those numbers ever
          // exist, this is where they belong.
          "Where yours gives out is the number worth knowing, and it is the thing we go and measure.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Client quotes ─────────────────────────────────────────────────────
  // Slugs here MUST NOT overlap the proof grid in block 7. Each study named
  // below carries a quotePerson in lib/case-studies.ts; ResultsSlider skips any
  // study that does not, rather than putting words in someone's mouth.
  //
  // Each study's own hero metric leads on conversion, which is right here: the
  // question this page raises is whether the store performs under pressure, and
  // all three of these answer it from a different angle.
  results: {
    heading: "Apparel work, with numbers you can check",
    intro:
      "Three stores where the client says it in their own words, and every number opens into the case study it came from.",
    slugs: [
      "evie-lou-shopify-fashion-cro",
      "everlast-shopify-plus-sports-redesign",
      "sneak-energy-shopify-redesign",
    ],
    headlines: {
      "evie-lou-shopify-fashion-cro":
        "{brand} lifted conversion 82% once the store stopped losing people before checkout",
      "everlast-shopify-plus-sports-redesign":
        "{brand} more than doubled conversion rate on a rebuilt Shopify Plus store",
      "sneak-energy-shopify-redesign":
        "{brand} took mobile conversion up 68% with the store loading in under 2.9 seconds",
    },
  },

  // ── How we work ───────────────────────────────────────────────────────
  // The honest-local block. The FAQ says we have no office; this says what we
  // put in place instead. Every item has to be a commitment a client could
  // quote back at us, which is the test that keeps it from becoming a values
  // list. No presence language anywhere in it.
  howWeWork: {
    heading: "How we work with LA brands",
    intro:
      "We are not in the city, and we would rather lead with that than bury it in a FAQ. Here is what we put in place instead, because what a release day actually needs is somebody awake and accountable, not somebody nearby.",
    items: [
      {
        title: "We are on Pacific hours for your release",
        body:
          "Drops here mostly go live mid-morning Pacific. We staff that window and the hour either side of it, written into the contract rather than offered as a favor. If you go live at eleven, someone senior is watching from ten.",
      },
      {
        title: "One named developer, in your channel",
        body:
          "Not a ticket queue, and not an account manager relaying questions to someone you never meet. The person who wrote your checkout logic is the person answering when it misbehaves, in a shared channel you can see.",
      },
      {
        title: "The runbook belongs to you",
        body:
          "Everything we learn about your store goes into a document you keep: the rate it fails at, the order things fail in, who does what on the day and where they post it. Stop working with us and you still have it.",
      },
      {
        title: "We will tell you when the answer is no",
        body:
          "If the measurement says your store is comfortable at the volume you actually sell, we say so and stop there. A rebuild you did not need is the most expensive thing we could sell you, and it is the fastest way to lose the next one.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  // Carries NO keyword. "los angeles shopify development company" moved to the
  // services list above, and repeating it here would be the word-order stuffing
  // section 7.5 describes.
  whatWeDoAboutIt:
    "We build the store, and we are on the call when it is under load. Those two things being the same team is most of the point.\n\nFor a brand selling in releases the work is mostly the unglamorous half. Load testing to a number you choose. Cutting the app calls that compete during a release. Deciding what happens on a simultaneous checkout of the last unit. Publishing on a timer. A rollback we've run in front of you.\n\nBuilds land between $10,000 and $50,000 depending on scope, with the price and date in writing before we start. If the store is fine and nobody has measured it, say so and we quote just that.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // Matched to the vertical, never framed as a local client.
  proofHeading: "Apparel brands we've built for",
  proof: [
    {
      slug: "dryrobe-shopify-plus-redesign",
      vertical: "Apparel and outdoor",
      whatWasBuilt: "Three fragmented stores consolidated into one Shopify Plus build, with a custom activity and size finder",
      outcome: "+89% online revenue, +23% checkout completion, -31% return rate",
      verified: true,
    },
    {
      slug: "twillory-shopify-cro",
      vertical: "Menswear",
      whatWasBuilt: "A running CRO program that A/B tested every interface component on the store",
      outcome: "$5.4M new annual revenue, $455k in the first 90 days",
      verified: true,
    },
    {
      slug: "feetures-shopify-theme-development",
      vertical: "Performance apparel",
      whatWasBuilt: "A theme rebuilt from scratch with custom collection pages, variant-aware product pages and metafield automation",
      outcome: "+32% add-to-cart rate, +19% average order value",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  // Three. At least one specific to this market's buyer. One conceded honestly.
  objectionsHeading: "What you're probably thinking",
  objections: [
    {
      objection: "We've never actually gone down. Isn't this a problem we don't have?",
      answer:
        "Possibly, and if so we will say so and charge nothing for finding out. Staying up is not the only way a release fails: overselling forty units, or a third of buyers giving up on a slow cart, both look fine in an uptime tool. The measurement either finds something or tells you to stop worrying about it.",
    },
    {
      objection: "Why hire anyone? Our developer knows the store better than an outsider will.",
      answer:
        "They probably do, and for most work that is the right answer. What we add on a release is having watched this specific thing fail on other people's stores, which is a different kind of knowledge from knowing your codebase. If your developer has load tested checkout and can quote you the number, you do not need us for this.",
    },
    {
      objection: "We just want the site to look right. Do we really need all the engineering talk?",
      answer:
        "You need both, and we would rather be straight about the order. Design talent is not in short supply here and plenty of it is very good. But a release loads the store in a way design decisions do not survive on their own: heavy imagery above the fold, a hero video, six fonts. We build the look you want, measure what it costs under load, and show you the trade instead of quietly deciding it.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // 6-8, minimum 3 unique to this page. No definition of the H1 term anywhere
  // in the body; section 5.1 permits one definition here at 40 words maximum.
  faqs: [
    {
      question: "How many orders can a Shopify store take at once?",
      answer:
        "There is no published number. Shopify documents that checkout creation is throttled but never says at what rate. Your ceiling depends on your app stack and theme, so it has to be measured rather than looked up.",
      unique: true,
    },
    {
      question: "Does Shopify Plus stop a drop from going down?",
      answer:
        "It raises the API budget your apps share from 100 points per second to 1,000, which helps if apps are the bottleneck. It carries no published checkout figure, so upgrading before measuring buys headroom you cannot quantify.",
      unique: true,
    },
    {
      question: "What is a queue and do we need one?",
      answer:
        "It holds buyers in line and releases them at a rate your store can serve. None of the eleven was running one. They cost real money, so you need one once you have measured your ceiling and found demand exceeds it.",
      unique: true,
    },
    {
      question: "How do we stop overselling on a release?",
      answer:
        "Know where the gap actually is. Shopify reserves stock when payment starts, not when someone adds to cart, so the exposed window is between those two moments. Close it by holding stock in the cart, sell past it deliberately with preorder, or accept a small oversell and handle it in support. Doing nothing picks the third.",
      unique: true,
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Most go live in about six weeks. Add a week for load testing and the release runbook, which happens after the build is done and needs a quiet store to test against.",
      unique: false,
    },
    {
      question: "What does a Shopify build cost?",
      answer:
        "Between $10,000 and $50,000 for most projects, depending on how much is custom. Load testing and a runbook on an existing store is far smaller, and we quote it separately if that is all you need.",
      unique: false,
    },
    {
      // Required on every geo page by Page Specification section 6.4, and
      // enforced by registry.validatePage. It is the page's presence
      // disclaimer: the honest answer, stated plainly, rather than a hedge.
      question: "Do you have an office we can visit?",
      answer:
        "No. We work with brands here, not from here, and would rather say so plainly. The work is remote either way. If you want someone in the room, we are the wrong call.",
      unique: true,
    },

    // The five below are entity-shaped rather than problem-shaped: they answer
    // the question as a search engine phrases it, so the page can be returned
    // for the qualifying questions buyers ask alongside the head term. They sit
    // last on purpose, because a human reading top to bottom wants the four
    // technical answers first.
    {
      question: "Do you provide Shopify development in Los Angeles?",
      answer:
        "Yes, remotely. We build and support Shopify stores for brands across the metro and the wider California market. There is no office to visit and no travel line on the invoice, and no client here has yet needed us in the room.",
      unique: true,
    },
    {
      question: "How much does Shopify development cost for a Los Angeles brand?",
      answer:
        "The same as anywhere: $10,000 to $50,000 for a build, depending on how much is custom. Local agency rates run above the national average and ours do not move by city. Load testing and a release runbook on a store that already exists is a fraction of that and quoted on its own.",
      unique: true,
    },
    {
      question: "Do you work with Los Angeles streetwear brands?",
      answer:
        "Yes, and it is most of the reason this page exists. Timed releases, limited units and a spike that arrives inside a minute rather than a week. Selling that way changes what the build has to survive, which is a different conversation from a store that sells steadily.",
      unique: true,
    },
    {
      question: "Can you work alongside our in-house developer?",
      answer:
        "Often that is the better setup. They know your codebase and we have watched this particular failure happen on other stores. We run the load test and the release engineering, hand the findings over in enough detail to be implemented without us, and stay on for the day itself if you want us there.",
      unique: true,
    },
    {
      question: "What areas do you cover beyond Los Angeles?",
      answer:
        "All of California, the rest of the US, and the UK, where a good share of the case studies on this page were built. The service does not change by location. What changes is which time zone we staff for your release.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Copy Standard section 8: zero keyword targets anywhere in this block, no
  // city name, under 180 words above the form, second person throughout.
  conversion: {
    whatYouGet:
      "Send us your store address and we will tell you what it takes before it breaks.",
    whatWeWillTellYouNotToDo:
      "If your store is already comfortable at the volume you sell, we will say so rather than sell you a rebuild.",
    responseExpectation:
      "A senior developer replies within one working day. Not a salesperson.",
    audit: {
      transition:
        "You came here because nobody has given you a number. Start there.",
      offer:
        "Tell us the one thing bothering you most. If it is the next release, we load your store until something gives. You get it back in writing:",
      parts: [
        "What is actually happening, measured on your store rather than guessed at.",
        "Why it is happening, which is usually not the symptom you noticed.",
        "How to fix it, in enough detail that your developer could do it without us.",
      ],
      limit:
        "It will not rewrite anything. It is a diagnosis, not the work.",
      noObligation:
        "Free, no follow-up sequence. Take the findings to another team if you like.",
      // turnaround intentionally unset. Copy Standard 8.4 asks for days and
      // format to be named; the owner removed the marker rather than commit to
      // a number. Add one here the day the delivery window is real.
    },
  },

  sources: [
    {
      id: "bls-qcew-la-apparel-mfg",
      claim:
        "Los Angeles County had 1,369 apparel manufacturing establishments (NAICS 315) employing an average of 19,264 people in 2024, down from 43,853 in 2014: a 56% fall in a decade. It is the largest apparel manufacturing county in the US by employment, roughly 4.9x the next largest.",
      url: "https://data.bls.gov/cew/data/api/2024/a/industry/315.csv",
      publisher: "US Bureau of Labor Statistics, Quarterly Census of Employment and Wages",
      captured: "2026-08-28",
      reviewAfterDays: 365,
    },
    {
      id: "bls-qcew-la-apparel-wholesale",
      claim:
        "LA County had 2,958 apparel, piece goods and notions merchant wholesaler establishments (NAICS 4243) employing 21,642 people in 2024 at an average annual pay of $79,499. More establishments than any other US county, and more employees than the county's apparel manufacturing (21,642 vs 19,264) at 28% higher average pay ($79,499 vs $62,242).",
      url: "https://data.bls.gov/cew/data/api/2024/a/industry/4243.csv",
      publisher: "US Bureau of Labor Statistics, Quarterly Census of Employment and Wages",
      captured: "2026-08-28",
      reviewAfterDays: 365,
    },
    {
      id: "fairfax-supreme-corridor",
      claim:
        "Supreme opened at 439 N Fairfax Ave in 2004, its first California store, and is credited with triggering the corridor's streetwear clustering. Operators state on the record that ground-floor rents rose from about $1.50 to $8-$10 per square foot per month during the build-out. Treat the rent figures as operator recollection in an interview, not audited lease data.",
      url: "https://www.complex.com/style/a/karizza-sanchez/fairfax-avenue-mecca-of-streetwear",
      publisher: "Complex, 'How Fairfax Became the Mecca of Streetwear: An Oral History'",
      captured: "2026-08-28",
      reviewAfterDays: 365,
    },
    {
      id: "supreme-timed-entry-2018",
      claim:
        "Supreme replaced the physical line at its Fairfax store with a text list and timed entry for its 15 February 2018 release: a brand converting a queue into a scheduled-access system. This is the fact the place layer turns on, so it is the one to re-verify first if the block is ever edited.",
      url: "https://hypebeast.com/tags/fairfax",
      publisher: "Hypebeast",
      captured: "2026-08-28",
      reviewAfterDays: 365,
    },
    {
      id: "fairfax-anchor-exit",
      claim:
        "Supreme's Fairfax store closed on 2 February 2023 after 19 years and reopened 16 February 2023 at 8801 Sunset Blvd in West Hollywood. WWD subsequently reported roughly 30% retail vacancy on Fairfax, attributed to streetwear brands exiting the corridor.",
      url: "https://beverlypress.com/2023/02/former-tower-records-location-supremely-reopens-its-doors-on-the-sunset-strip/",
      publisher: "Park Labrea News / Beverly Press; vacancy figure from WWD",
      captured: "2026-08-28",
      reviewAfterDays: 180,
    },
  ],

  // FIGURES DELIBERATELY NOT USED. All four are the most widely repeated LA
  // apparel statistics online and none of them survives a check, so they are
  // recorded here to stop a future editor reintroducing one in good faith:
  //   "83% of US cut-and-sew manufacturing is in LA" - the City of LA's own
  //     2022 memo footnotes this to a UCLA report that does not contain it, and
  //     BLS puts the county at 23.4% of national apparel employment.
  //   "The Fashion District does $5.76bn a year and supports 66,000 jobs" -
  //     traces to a 2011 AECOM study using ~2009 data, unconfirmable.
  //   "LA apparel contributes $18bn+ to the regional economy" - no publisher,
  //     no methodology, no date anywhere.
  //   "4,000+ businesses in the Fashion District" - aggregator sites only.

  // Section 2.2: geo pages run 1,300-1,700 words.
  wordCountTarget: [1300, 1700],
};
