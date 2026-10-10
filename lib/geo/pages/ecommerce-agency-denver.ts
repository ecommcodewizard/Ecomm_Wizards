// Batch 1b, page 31: /services/ecommerce-agency/denver
// Inventory: Geo Inventory & Batch Plan v4.0, row #31.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce agency denver" (10/mo inventory, 140/mo SEMrush,
// KD 9%). Secondaries: ecommerce website development denver · ecommerce web
// design services denver · custom ecommerce web development denver · denver
// e-commerce platform setup.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// "ecommerce agency <city>": neither platform nor service picked, so the
// service menu comes early and nothing assumes what the store runs on.
// THE CLUSTER LEANS DEVELOPMENT, which is the opposite of Atlanta #30's design
// lean and the reason these two pages do not collide. Denver's assigned
// secondaries are website development, web design SERVICES, CUSTOM web
// development and PLATFORM SETUP. People search "custom" when the off-the-shelf
// route has run out of road.
//
// ── ONE IDEA (18 words) ─────────────────────────────────────────────────────
// Nobody chose how your store was built. It accumulated, one install at a time,
// and now it cannot move.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch with
// us" and resolves to #contact.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// ["E"]. Master §5.10 assigns Denver E, emerging-led, and the canonical angle
// is literally "why brands here outgrow their first agency" — the scaling break
// point. §5.9 gives Denver outdoor, cannabis-adjacent CPG and natural food,
// categories where a brand scales fast from a founder-built store and the shop
// gets extended in a hurry each time. E is the right archetype on the evidence,
// not just on the assignment.
//
// ── WHAT IS ALREADY TAKEN ON THIS HUB ───────────────────────────────────────
// Austin judging value, Atlanta product data behind the design, Boston the
// three answers before the cart, Chicago shipping weights, Dallas what sits
// behind the storefront, Los Angeles selling what is not on the shelf, New York
// the platform ceiling, San Diego subscription law, San Francisco in-house
// cost, Raleigh the category page and load order, Minneapolis photography.
// THREE LINES TO STAY CLEAR OF:
//   NEW YORK is "the platform ceiling": hitting a hard limit of the platform.
//   This is not a limit, it is an accumulation, and the copy never argues that
//   the platform ran out.
//   DALLAS says a new build takes time because of what sits behind it. That is
//   about BUILD EFFORT on something new. This is about what an EXISTING store
//   turned into while nobody was deciding.
//   RALEIGH #25 owns page speed and load order. This counts what accumulated,
//   never how long anything takes to load, and no timing is measured anywhere.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 5 October 2026 ────────────────────────────────────────────────────
// From the owner's SEMrush export. Volume 140, which is the highest primary in
// the programme and fourteen times the inventory estimate. KD 9% "very easy",
// commercial intent, CPC $0, competitive density 0.33, 149 results. Features:
// reviews and a local pack.
// WHO RANKS: three directories (Sermondo, DesignRush, Clutch), one scraped junk
// domain, two agency home pages (blkdg, facetedmedia), a couple of service
// pages, and AT POSITION THREE A BLOG POST about migrating from Magento to
// custom. A blog post ranking third on a commercial agency term means nobody
// has built a real page for this.
//
// ── SOURCED FACT ────────────────────────────────────────────────────────────
// Shopify's own documentation on extending a theme with apps, used because it
// states the MECHANISM in the platform's own words: app embeds "add code to
// your online store without being visible to your customers", and some apps
// "inject code directly into your theme's code".
// LIMIT RESPECTED: that page says nothing about leftover code when an app is
// removed, so the page never claims it.
//
// ── ORIGINAL OBSERVATION, 5 October 2026 ────────────────────────────────────
// 20 stores attempted, 19 read, in outdoor, natural food and CPG. Measured on a
// real product page from each store, in a desktop browser, counting the
// distinct outside hosts a script is requested from in the first six seconds.
//
//   Third-party script hosts   4 to 42, median 25
//   Script tags in the page    84 to 288, median 163
//
// One store contacts four outside companies when a customer opens a product.
// Another contacts forty-two. Same kind of business, tenfold apart, and the
// small one is neither newer nor smaller.
//
// MEASUREMENT NOTES, all of which cost something to learn:
//   STABILITY WAS TESTED BEFORE PUBLISHING. Three consecutive runs of three
//   stores returned identical counts, spread of zero. But one store read 12 in
//   the sweep and 21 in the stability run, so there IS run-to-run noise across
//   sessions. The page therefore publishes the RANGE and the MEDIAN, which
//   survive that noise, and claims no precision about any single store.
//   THE CAPTURE WINDOW IS PART OF THE METHOD and is stated, because a count
//   taken inside a time window is meaningless without it.
//
// TWO IDEAS DIED IN VALIDATION, recorded so they are not retried:
//   OLD LAYERS. The first hypothesis was that products added years ago would be
//   measurably thinner than recent ones, the leftovers of a build the brand
//   outgrew. FLATLY UNTRUE. Across 18 stores with both layers, newer products
//   were richer on images in only 6, on description in 9, and on product type
//   in 2. The median image gap was NEGATIVE. There is no old-layer rot.
//   COUNTING APP EMBEDS. One store read 44 embeds in the sweep and 6 on a
//   verification pass, and every one resolved to the same generic asset path,
//   so the parser was counting files rather than apps. Timing-dependent and
//   wrong. Dropped.
//   THE PATTERN HOLDS: counting is reliable, positions and timings are not.
//
// LIMITS, stated on the page: one product page per store; a six-second window;
// a desktop browser; counts move a little between sessions; and a store may
// load different things for a returning customer than for a first-time one.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// Picked against Denver's verticals and the rebuild story, avoiding the three
// the hub page itself uses:
//   Sneak Energy   a CPG drinks brand rebuilt, mobile conversion +68%
//   Wild           natural CPG on subscriptions, 80K+ subscribers
//   Feetures       performance socks, a theme built rather than bolted onto
//
// PRESENCE (Master §4): none claimed. REVIEW: 180 days.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_DENVER: GeoPage = {
  type: "geo",
  slug: "denver",
  path: "/services/ecommerce-agency/denver",
  hub: "/services/ecommerce-agency",

  geo: {
    name: "Denver",
    type: "metro",
    areaServed: "Denver",
  },
  archetype: ["E"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency denver",
  secondaryKeywords: [
    "ecommerce website development denver",
    "ecommerce web design services denver",
    "custom ecommerce web development denver",
    "denver e-commerce platform setup",
  ],
  faqKeywords: [
    "how many apps is too many on a shopify store",
    "should i build custom or use an app",
    "why is my store slow to change",
    "do i need to replatform or rebuild",
    "what does an ecommerce agency do",
    "do you work on woocommerce or magento",
  ],
  reviewedPhrases: ["in Denver"],

  metaTitle: "Ecommerce Agency Denver | Build the Store, Not Another App",
  metaDescription:
    "An ecommerce agency Denver brands hire when the store outgrew its first build. See what 19 stores showed about the code a customer loads without knowing.",
  shortTitle: "Ecommerce agency Denver",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Service-led with the differentiator at the end, the shape the owner picked
  // on #28 and #30. Has to differ from Chicago's "build, fix and grow the
  // store" and Atlanta's "design the store and fix the catalog", same hub.
  h1: "Ecommerce agency Denver brands hire when the store outgrew its first build",
  qualifier:
    "Design, build, migration and growth, on whatever your store runs on today. We will also tell you when the answer is to take something out rather than add.",

  // Both windows show things that were BUILT rather than installed, which is
  // the argument. Sneak's bundle builder is exactly the sort of feature a brand
  // normally rents an app for, sitting inside the store instead. Feetures is a
  // theme made for the range rather than a stock one bent to fit it.
  // Built by scratchpad/den31-hero.mjs. New filename each time, never an
  // overwrite: next/image caches per path.
  heroImage: {
    src: "/images/ecommerce-agency-denver-hero-v2.webp",
    alt: "A bundle builder we built into the store for Sneak Energy, where a customer chooses the flavors and the shaker step by step, and a product page we built for Feetures with its pack sizes, colors and sizes in one place, beside cards reading mobile conversion up 68% and add to cart up 32%",
    cutout: true,
  },

  heroGlow: true,
  heroCtaLabel: "Get in touch with us",
  relatedTone: "white",
  whatWeDoAboutItTone: "cream",
  gradientLayerTone: "white",
  assetBeforeServices: true,

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years building stores" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "{storesBuilt} stores built, and the ones we were asked to untangle.",
    subheading: "First builds, second builds, and the ones nobody wants to touch. Whichever ecommerce agency Denver brands you pick, ask what it would remove before it asks for your budget.",
  },

  assetCtaLabel: "See what 19 stores were loading",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Nobody sits down and decides how an online store is built. It accumulates.\n\nYou start on a theme. Then reviews need a tool, and subscriptions need a tool, and the popup needs a tool. Every new thing gets answered by installing one more, and each one puts code on every page your customer opens.\n\nSo we opened a product page on 19 stores and counted how many outside companies the page calls out to. The quietest contacted four. The busiest contacted forty-two. That gap is what an ecommerce agency Denver brands hire should be able to explain to you.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency Denver brands hire to design, build, move and grow online stores. We work on the platform you are on today. We start with what the store has accumulated, because that is usually what makes everything else slow to change.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // Archetype E, the scaling break point, which Master §5.10 assigns to Denver
  // outright and which the keyword cluster independently supports.
  placeLayerHeading: "The build that got you here was supposed to be temporary",
  placeLayer:
    "Denver brands tend to grow faster than the thing they sell on. Outdoor kit, drinks, food, supplements. A good year doubles you, and the store gets extended in a hurry rather than rebuilt.\n\nNone of those extensions was wrong at the time. Each one solved the thing in front of you that week, and it worked, and you moved on.\n\nThe trouble is that nobody is ever assigned to take one back out. Which is why custom ecommerce web development Denver brands ask about usually turns out to be a removal job first. It is the first thing an ecommerce agency Denver founders brief has to understand.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "An app does not sit beside your store. It sits inside it",
  gradientLayer:
    "**This is in the platform's own documentation, not our opinion.** An app embed is described there as something that adds code to your online store without being visible to your customers. Some apps go further and inject code directly into your theme.\n\n**So installing is an architectural decision.** It just does not feel like one. There is no plan to approve and nothing to review, and by the time there are twenty of them nobody can say which does what.\n\n**And that is what makes a store slow to change.** Not the platform, and not the size of the catalog. When an ecommerce agency Denver brands trust quotes a simple change and the number comes back high, this is usually why.",
  gradientFacts: [
    {
      id: "shopify-theme-apps-2026",
      claim:
        "Shopify Help Center, 'Extend your theme with apps' (help.shopify.com/en/manual/online-store/themes/theme-structure/extend/apps), read 5 October 2026. States verbatim that app embeds are 'app-provided elements that float or display as an overlay in your theme, or add code to your online store without being visible to your customers', and that 'some apps inject code directly into your theme's code to add functionality to your theme'. Supports the gradient block's claim that installing an app is an architectural change the merchant never reviews, and the FAQ on building custom versus using an app. LIMIT: this page says NOTHING about leftover or orphaned code when an app is removed, so the page does not claim that. It is one platform's documentation; the page argues only that every platform extends the same way, not that they are identical.",
      url: "https://help.shopify.com/en/manual/online-store/themes/theme-structure/extend/apps",
      publisher: "Shopify Help Center",
      captured: "2026-10-05",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-thirdparty-scan-2026",
      claim:
        "Original observation, 5 October 2026. 20 outdoor, natural food and CPG stores were attempted and 19 read. On one real product page per store, in a desktop browser at 1440px, we counted the distinct outside hosts from which a script was requested during the first six seconds after the document loaded, excluding the store's own domain and the platform's own infrastructure. Results: third-party script hosts ran from 4 to 42, median 25; script tags present in the document ran from 84 to 288, median 163. MEASUREMENT NOTES: stability was tested before publication, with three consecutive runs of three stores returning identical counts, a spread of zero; however one store read 12 in the main sweep and 21 in the stability run, so run-to-run variation across sessions does exist, and for that reason the page publishes the range and the median rather than any single store's figure. The six-second capture window is part of the method and is stated, because a count taken inside a window means nothing without it. LIMITS: one product page per store; a desktop browser; a first-time visitor, and a store may load different things for a returning one. TWO IDEAS WERE DISCARDED IN VALIDATION: that older products would be measurably thinner than newer ones, which was flatly untrue across 18 stores with both layers (newer products were richer on images in only 6, on description in 9, on product type in 2, and the median image gap was negative); and counting app embeds, where one store read 44 in the sweep and 6 on verification, with every value resolving to the same generic asset path, so the parser was counting files rather than apps.",
      url: "https://www.ecommwizards.com/services/ecommerce-agency/denver",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-10-05",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "What 19 stores were loading on one product page",
    intro:
      "Search ecommerce agency Denver and you get directories, a couple of home pages and a blog post, and nobody publishing a measurement. So here is ours. We opened one product page on each of 19 stores and counted what the page reaches out to.",
    renderer: "frequency",
    tone: "cream",
    method: {
      sampleSize: 19,
      window: "20 stores attempted, 19 read, 5 October 2026",
      captured: "2026-10-05",
      howGathered:
        "We opened one real product page on each store in a desktop browser and counted the separate outside companies the page asked for code from in its first six seconds. The store's own address and the platform's own were left out. The six seconds matter, so we say them. Four limits you should know. It is one page per store. It is a desktop browser. It is a first-time visitor, and a store may load different things for someone returning. And the count moves a little between sessions, which is why we give you the range rather than one number.",
    },
    columns: ["What we counted", "Across the 19 stores"],
    rows: [
      { label: "Stores we opened a product page on", cells: ["19"] },
      { label: "Outside companies the quietest page called", cells: ["4"] },
      { label: "Outside companies the busiest page called", cells: ["42"], note: "Same kind of business as the quietest one." },
      { label: "The middle store", cells: ["25"] },
      { label: "Script tags in the quietest page", cells: ["84"] },
      { label: "Script tags in the busiest page", cells: ["288"] },
      { label: "The middle store again", cells: ["163"] },
    ],
    derived:
      "The quietest store in the set is not the smallest, and it is not the newest. It sells a full range and it has been trading for years.\n\nIt is simply the one where somebody has been deciding. Everything on that page is there because a person chose it, and the things that stopped earning their place came back off.\n\nThe busiest store is not badly run either. It is the ordinary outcome of saying yes to a useful tool eleven times, which every growing brand does, because each individual yes was reasonable. Nobody ever books the meeting called take something out.\n\nCalling it is the job, and any ecommerce agency Denver brands shortlist can do it with you in an afternoon.",
    derivedList: {
      title: "Three things to check before you commission anything",
      items: [
        "Open your app list and count. Then say out loud what each one does. The ones you stall on are the ones to look at.",
        "Ask your developer what a small change costs now compared with two years ago. If the number went up and the store did not get bigger, that is this.",
        "Pick the last tool you installed and find out whether anyone uses what it produces. Plenty are still running for a campaign that ended.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Why nobody notices it happening",
        body:
          "**Each decision is small.** Nobody approves an architecture. Somebody approves a tool that solves a real problem this week, which is a different and much easier question. No ecommerce agency Denver companies hire is ever asked to review it.\n\n**Nothing ever reports it.** There is no screen that tells you the page now calls out to thirty companies, and no alert when it becomes thirty-one.\n\n**And removing feels riskier than adding.** Taking a tool out might break something nobody can name, so it stays. That is how ecommerce website development Denver brands end up paying for turns into untangling rather than building.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Block 6: Service menu (he has not picked a service) ────────────────
  // Per types.ts, a body line appears ONLY where an assigned secondary keyword
  // has to live, the owner's 2026-09-05 rule. Four secondaries on this page:
  // two live here, two live in the prose above.
  disciplines: {
    label: "What we do",
    heading: "Take one of these, or the lot",
    intro:
      "Every row links to the store it was done for, and none of it assumes you are starting again. Most brands arrive asking for the last one and need the second. Between them they are the range an ecommerce agency Denver teams retain has to cover.",
    items: [
      {
        label: "Design and build",
        // Was "so the next change is cheap". Dropped the word: for a premium
        // agency "cheap" reads as low quality rather than low cost, and it is
        // the one price-adjacent word here that buys nothing.
        heading: "We build the store so the next change is a small job",
        body: "Most ecommerce web design services Denver brands buy are priced on how the store looks, not on what it will cost to change next year.",
        covers: ["Storefront build", "Theme architecture", "Checkout", "Design systems", "Documentation"],
        imageAlt: "A storefront rebuild for the drinks brand Sneak Energy",
        caseSlug: "sneak-energy-shopify-redesign",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Ecommerce development",
        heading: "We write the thing properly instead of renting it monthly",
        body: "When an app almost does it, denver e-commerce platform setup work is usually worth owning rather than renting.",
        covers: ["Ecommerce development", "App replacement", "Integrations", "Subscriptions", "Support"],
        imageAlt: "A subscription build for the natural care brand Wild",
        caseSlug: "wild-shopify-plus-subscriptions",
        cta: { label: "Explore ecommerce development", href: "/services/shopify-store-development" },
      },
      {
        label: "Migration",
        heading: "We replatform without giving back the traffic",
        covers: ["Platform migration", "Redirect mapping", "Data migration", "Search equity"],
        imageAlt: "A replatforming project for the wellbeing brand This Works",
        caseSlug: "this-works-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Growth",
        heading: "We find the leak, fix it, and show you both numbers",
        covers: ["A/B testing", "Product pages", "Email and retention", "Paid landing pages"],
        imageAlt: "A theme built for the performance sock brand Feetures",
        caseSlug: "feetures-shopify-theme-development",
        cta: { label: "Explore growth work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "Four things that do not change",
    tone: "white",
    intro: "Whether you buy one job or all four. Worth putting the same list to every ecommerce agency Denver brands weigh up before you choose.",
    items: [
      {
        title: "We count before we quote",
        body: "We look at what the store is already carrying and tell you what we find. Sometimes the useful answer is that you need less, not more.",
      },
      {
        title: "You see the number both ways",
        body: "We take the measurement before anyone touches anything, and again when it is done. You get both numbers, not a summary of them.",
      },
      {
        title: "Nothing is tied to us",
        body: "The code, the accounts and the logins are yours from the first day. If you leave, nothing of yours stays behind with us.",
      },
      {
        title: "Scope is signed before work begins",
        body: "Nothing starts until you have agreed what it is. If it needs to change halfway, you see that first.",
      },
    ],
  },

  // ── Block 7: Where we would start ─────────────────────────────────────
  whatWeDoAboutItHeading: "What we would do in the first two weeks",
  whatWeDoAboutIt:
    "We run the same count on your store and put it next to your app bill and the list of what your team actually opens. Three lists, one afternoon.\n\nThe overlap is usually the surprise. Tools nobody has opened in a year are still loading on every page, and some of them are doing the same job as each other.\n\nThen you get a short list of what to remove, what to keep and what is worth owning instead of renting. An ecommerce agency Denver brands keep will hand you that before it proposes a build.",

  midCta: {
    text: "Want the same count run on your own store? Tell us the address and we will send what we find.",
    label: "Get in touch with us",
  },

  servicesCta: {
    text: "Not sure which of the four you need? Tell us about the store and we will name the one we would start on.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "The first conversation is about what the store is already carrying. It costs you nothing, including when the answer is that we would change very little.",
    label: "Get in touch with us",
  },

  // ── Block 8: Proof ────────────────────────────────────────────────────
  proofHeading: "Three rebuilds, and what came after",
  proof: [
    {
      slug: "sneak-energy-shopify-redesign",
      vertical: "Drinks and supplements",
      whatWasBuilt: "A storefront rebuilt around the phone, where most of the orders were already coming from",
      outcome: "Mobile conversion +68%, add to cart +52%",
      verified: true,
    },
    {
      slug: "wild-shopify-plus-subscriptions",
      vertical: "Natural personal care",
      whatWasBuilt: "A subscription system built into the store rather than bolted on beside it",
      outcome: "80K+ monthly subscribers at 12 months, subscription revenue +218%, churn down 34%",
      verified: true,
    },
    {
      slug: "feetures-shopify-theme-development",
      vertical: "Performance apparel",
      whatWasBuilt: "A theme built for the range rather than a stock one bent to fit it",
      outcome: "Add to cart +32%, AOV +19%, bounce rate down 24%",
      verified: true,
    },
  ],

  // ── Block 9: Objections ───────────────────────────────────────────────
  objectionsHeading: "Where people push back",
  objections: [
    {
      objection: "Our apps are all doing something useful.",
      answer:
        "Most of them probably are, and we would not touch those.\n\nIt is the other sort we are after. The one installed for a launch that finished, the one replaced by a newer tool but never switched off, the two that overlap. They are easier to find than you would think once somebody is actually looking.",
    },
    {
      objection: "Building custom costs more than an app.",
      answer:
        "Up front, usually yes. When an app does the job we will tell you to keep it.\n\nIt changes when you pay every month for something that almost fits, then pay again each time you need it to work a bit differently. That is the point where owning it starts to make more sense than renting it. An ecommerce agency Denver brands meet can draw that line for you in an hour.",
    },
    {
      objection: "Our store is not on Shopify.",
      answer:
        "That is fine, and it is not the first question we would ask. Every platform extends the same way, by letting outside code run on your pages, and every one of them accumulates.\n\nIf moving would help we will tell you, and if not we will tell you that too.",
    },
    {
      objection: "We are too small for this to matter.",
      answer:
        "Then it is a good time to look, because it is far easier now than it will be.\n\nThe stores that are hardest to untangle are the ones that grew fastest, and none of them noticed it happening. Half an hour with your app list is worth it either way, and any ecommerce agency Denver brands recommend will sit through it with you.",
    },
  ],

  // ── Block 10: FAQ ─────────────────────────────────────────────────────
  faqHeading: "What brands ask before they pick anyone",
  faqs: [
    {
      question: "How many apps is too many on a Shopify store?",
      answer:
        "There is no number, and anyone who gives you one is guessing. The useful test is whether you can say what each one does and who uses it. The ones you cannot answer for are the problem.",
      unique: true,
    },
    {
      question: "Should I build custom or use an app?",
      answer:
        "Use the app while it fits. Build when you pay every month for something that only almost works, or when each small change has to wait for somebody else's plans.",
      unique: true,
    },
    {
      question: "Why is my store slow to change?",
      answer:
        "Usually because of what has built up around it, not the platform underneath. Every tool you add is one more thing a developer has to avoid breaking, so small jobs stop being small.",
      unique: true,
    },
    {
      question: "Do I need to replatform or rebuild?",
      answer:
        "Most often neither, at least not first. Find out what the store is carrying before you move it, because moving the problem to a new platform is the expensive way to discover it was never the platform.",
      unique: true,
    },
    {
      question: "What does an ecommerce agency do?",
      answer:
        "Four things, broadly. Builds the store. Writes what a theme leaves out. Moves it when the platform stops fitting. And works out what is costing you orders.",
      unique: true,
    },
    {
      question: "Will you touch a WooCommerce or Magento store?",
      answer:
        "Yes. We work on whatever you are on now. Every platform lets outside code run on your pages, so the first job is counting how much of yours is doing that, not reading the logo on your admin.",
      unique: true,
    },
    {
      question: "Are you an ecommerce agency Denver brands can work with remotely?",
      answer:
        "Yes, and remote is how all of it runs. There is no office here for you to visit. None of the work changes because of where either of us happens to sit.",
      unique: true,
    },
    {
      question: "Will removing things break the store?",
      answer:
        "It can, which is why nobody does it casually. We take one out at a time, on a copy of the store first, and you see what changed before anything goes live.",
      unique: true,
    },
    {
      question: "Our developer is staying. Is that a problem?",
      answer:
        "Usually, and often it is the quickest route. We can hand them the list and check the result, or take the parts nobody on your team has time for.",
      unique: true,
    },
    {
      question: "How long does this take?",
      answer:
        "Counting what you have got is an afternoon. Removing safely is a few weeks, because each one comes out on its own and gets watched before the next.",
      unique: true,
    },
  ],

  // ── Block 11: Conversion ──────────────────────────────────────────────
  conversion: {
    heading: "Send us your store and we will count what it loads",
    whatYouGet:
      "We run the same count on your product page and send back what we find against the 19.",
    whatWeWillTellYouNotToDo:
      "If your store is already lean we will say so, not find you something to buy. One of the 19 was, and it was not the smallest.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition: "The same count from the table, run on your store.",
      offer: "Put your store address in the form, and you get back:",
      parts: [
        "How many outside companies your product page calls out to.",
        "Which of them are doing the same job as each other.",
        "What we would take out first, and what we would leave alone.",
      ],
      limit: "You get the findings and nothing else attached to them.",
      noObligation: "Free, and nobody chases you afterwards.",
    },
  },

  wordCountTarget: [2000, 2500],
  sources: [],
};
