// Page 2 of Batch 1: /services/ecommerce-seo-agency (national hub, H2).
// Spec: Batch 1 Page Specification v2.0, Card 2. Keywords: Inventory v4.0 H2.
//
// Primary keyword: "ecommerce seo agency" (1,000/mo, Google Keyword Planner).
//
// POSITIONING, decided by the owner 2026-08-19: Shopify-delivered but
// platform-aware. This page owns the merchant whose SEO is breaking on
// Magento, WooCommerce or BigCommerce and who is deciding whether the platform
// is the problem. Diagnosis is platform-agnostic; delivery is Shopify. That
// keeps it true against the live /services/shopify-seo-agency page, which
// states "Every store we work with runs on Shopify".
//
// CANNIBALISATION: /services/shopify-seo-agency is the same service described
// for a different buyer. That page ranks people already on Shopify who want
// rankings. This one captures the replatform decision. check-shingles compares
// the two at a stricter 75% threshold than the geo set. Do not reuse its FAQ
// questions; they are listed in that file and deliberately not repeated here.
//
// COPY STANDARD v2.0 governs every word. What it forced here:
//
//  ROIA (s1). One reader: runs a store doing real revenue whose search traffic
//  has been sliding for a year, has already bought SEO once and got a monthly
//  report instead of revenue, and is not sure whether the platform is the
//  problem. One idea: "your search problem is too many pages, not too few, and
//  you can see that for yourself before you pay anyone." One offer, two doors.
//
//  Voice (s2, s3). Contractions, plain English, one person talking to another.
//  The previous revision was correct and lifeless; formal register reads as a
//  brochure.
//
//  Keywords (s7). The previous revision used the primary 22 times in body copy
//  against a cap of 5, including twice in the conversion block where the cap is
//  zero. It now appears 3 times: h1, hook, and one FAQ question. Each secondary
//  owns ONE section (s7.2):
//    ecommerce seo services      -> servicesList
//    seo agency for ecommerce    -> segments intro
//    ecommerce seo packages      -> engagement intro
//    ecommerce seo company       -> objections[0]
//    best ecommerce seo company  -> faqs[3]
//  Note "best ecommerce seo company" contains "ecommerce seo company", so the
//  keyword report counts the shorter phrase twice. That is the containment, not
//  a third placement. Do not add more.
//
//  s4 bans unearned superlatives, which is why "best ecommerce seo company" only
//  ever appears inside a question the READER asks. We never claim it.
//
// Platform facts in the Only-Here Asset came from vendor documentation on
// 2026-08-19. The rewrite did not touch a cell, column or figure.

import type { HubPage } from "../types";

export const ECOMMERCE_SEO_AGENCY: HubPage = {
  type: "hub",
  slug: "ecommerce-seo-agency",
  path: "/services/ecommerce-seo-agency",
  status: "published",

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce seo agency",
  secondaryKeywords: [
    "ecommerce seo services",
    "ecommerce seo company",
    "seo agency for ecommerce",
    "ecommerce seo packages",
    "best ecommerce seo company",
  ],
  // Asked the way a buyer asks them, in the first person, per the owner's review.
  faqKeywords: [
    "how much does seo cost for ecommerce",
    "how to choose an ecommerce seo agency",
    "how to find a reliable ecommerce seo company",
    "how to choose an seo agency for e-commerce",
    "why ecommerce businesses need the best seo agency",
    "what is ecommerce seo services",
  ],
  metaTitle: "Ecommerce SEO agency that makes Google like your product",
  metaDescription:
    "An ecommerce SEO agency for stores that stopped growing in Google. We show you what's broken on any platform, and what it costs to fix, before you pay us.",
  shortTitle: "Ecommerce SEO Agency",
  serviceType: "Ecommerce SEO",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Owner's line, and it earns its place by saying the outcome in words a
  // merchant already uses. Everything this page argues underneath is Google
  // wasting its crawl on junk instead of the pages you sell from, which is
  // exactly "Google doesn't like your products yet" said technically.
  //
  // Rejected drafts, so nobody re-lands on them: "built on evidence, not
  // promises" (identical frame to hub 1's "built on reliability and
  // excellence", so the two pages read as one template with the nouns swapped)
  // and "shows you the problem first" (accurate, but it describes our process
  // rather than his outcome).
  //
  // Keep metaTitle in step with this line; the two were deliberately matched.
  // GeoPageHero gradients the last two words, so keep them a real phrase.
  h1: "An ecommerce SEO agency that makes Google like your product",
  qualifier:
    "You've probably paid for SEO before and got a monthly report full of charts that never turned into sales.\n\nWe do it the other way round. Before you pay us anything, we crawl your store and show you what's broken and what it's costing you. If there isn't enough there to be worth fixing, we'll tell you that instead.",

  heroImage: {
    src: "/images/performance-1.webp",
    alt: "Ecommerce SEO agency going through a store's search traffic and rankings",
    // Source file is portrait; without this it stands taller than the copy.
    aspect: "3 / 2",
  },

  // Hero secondary button. Points at the case studies rather than the table,
  // matching hub 1. ProofBlock renders with id="proof".
  heroSecondaryCta: { label: "See our work", href: "#proof" },

  // Answer-first block, and the passage AI Overviews lift. Copy standard s5.1
  // bans defining your own H1 term in a body section, so this no longer opens
  // "ecommerce SEO is the work of...". It leads on the mechanism instead, which
  // is the part a reader cannot guess and the part worth quoting.
  quickAnswer:
    "On a shop, the search problem is usually too many pages rather than too few. Filters and product options quietly create thousands of near-identical pages, and Google spends its time on those instead of the ones you sell from. We find them, clear them out, and rebuild your categories around what people actually type.",

  // ── Trust bar ─────────────────────────────────────────────────────────
  trust: {
    heading: "We have built {storesBuilt} stores. Here are a few.",
    subheading:
      "Platform moves that kept their Google traffic, shops rebuilt around how people search, and clean-ups on stores that were quietly leaking.",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  // Rewritten for reading level (copy standard s3: grade 7 to 8, one idea per
  // sentence, average under 20 words). The previous version stacked three ideas
  // into its opening sentence and buried the mechanism in a subordinate clause.
  // The mechanism is the whole point of this page, so it now gets four short
  // sentences of its own and a reader can follow it on one pass.
  // No catalog size in here. An earlier draft said "you sell eight hundred
  // products", which reads as a page written for somebody else the moment a
  // fifteen-product brand lands on it. "More pages than you have products"
  // makes the same point and stays true at any size.
  hook:
    "Your traffic didn't crash. It slipped, a little at a time, for months.\n\nHere's what's usually behind that. Your filters and product options quietly create far more pages than you have products. Google spends its time crawling those and never gets to the ones you actually sell.\n\nNobody was watching that number, so nobody caught it. It's the first thing an ecommerce SEO agency should check, and most of them never do.",

  // ── Block 3: What we actually do ──────────────────────────────────────
  // NO REPLATFORM SELL IN THIS SECTION. An earlier draft ended it on "we'll
  // price the move rather than charge you every month to work around it", which
  // reads as a second service being pushed on a reader who never asked to leave
  // his platform. This is the ecommerce SEO page, not the Shopify one. The
  // honest version of that advice already sits in the asset's derivedList,
  // where it is framed as a reason NOT to buy from us. Leave it there.
  //
  // Also gone: "most SEO pitches start with a price". Nobody opens a pitch with
  // a price, so the line invented a straw man and cost the section its
  // credibility in its first six words.
  whatWeDo: [
    "Before we quote you anything, we go through your store the way Google does. We pull your Search Console numbers, crawl the site, and read your server logs if you can get us access.",
    "Then you get a list. What's broken, what each thing is costing you, and what it would take to fix. It's yours to keep and yours to hand to anybody else, whether you hire us or not.",
    "We do that on any platform. Shopify, Adobe Commerce, WooCommerce, BigCommerce, something your last developer built from scratch: it makes no difference to finding the problem. Most of what we find is fixable exactly where you are.",
    "After that it's monthly work. Clearing out what the crawl found, rebuilding your categories around the words people actually type, and linking your pages so the strong ones lift the ones that sell.",
  ].join("\n\n"),

  // ── The full service list ─────────────────────────────────────────────
  // Owns the secondary "ecommerce seo services", in the label and heading.
  // Ordered the way a buyer meets them: the look first, then the plumbing that
  // usually turns out to be the problem, then the pages, then the things you
  // only need once the foundation holds.
  servicesList: {
    label: "Ecommerce SEO services",
    heading: "Every ecommerce SEO service your store needs",
    intro:
      "One team doing all of it, on Shopify. Most people buy one of these and find out they needed three. We start with the look, tell you what's actually wrong, and work down the list in the order that gets your money back fastest. Already on Shopify and want the platform version? That's [link:/services/shopify-seo-agency|Shopify SEO].",
    ctaLabel: "Get your store looked at",
    items: [
      {
        title: "Ecommerce SEO audit",
        body:
          "We crawl your store the way Google does, pull your Search Console data, and read your server logs where we can get them. You get a ranked list of what's wrong, what each one is costing you, and what it takes to fix. In writing, priced on its own, and yours to take elsewhere if you want to. Nobody should ask you for a retainer before this part.",
      },
      {
        title: "Technical SEO for large catalogs",
        body:
          "This is where the money usually is, and it's the half a generalist misses. Filter pages multiplying into the tens of thousands, your own site search showing up in Google, the same product sitting on six addresses, page two of a category pointing at nothing. We find them, block what should never have been crawlable, and hand Google back the pages you actually sell from.",
      },
      {
        title: "Category and collection page SEO",
        body:
          "Your category pages are the ones that rank, not your homepage and not your blog. We rebuild them around the words people really type, which is rarely how your buying team names things internally. That means the right categories existing at all, real copy on them, and filters that make a page worth indexing instead of another near-duplicate.",
      },
      {
        title: "Product page SEO at scale",
        body:
          "Thousands of products, one team, and no time to write them one at a time. We build the templates and rules that make every product page work on its own: titles that match how people search, descriptions that aren't the manufacturer's, options handled so they don't create duplicates, and out-of-stock products dealt with properly instead of quietly deleted.",
      },
      {
        title: "Site speed and Core Web Vitals",
        body:
          "Slow stores lose people before Google gets involved. We cut the app scripts you aren't using, fix your images, defer what doesn't need to load first, and get your Core Web Vitals into the green. On most stores the biggest single win is an app somebody installed two years ago and forgot about.",
      },
      {
        title: "Structured data and rich results",
        body:
          "The code Google reads to understand what you sell: products, prices, stock, reviews, breadcrumbs and FAQs. Done right you get stars and prices in the search result, which is a bigger click difference than moving up one place. Done wrong you get a manual penalty, which is why we don't bolt it on with a plugin and hope.",
      },
      {
        title: "Migration and replatform SEO",
        body:
          "Moving platform is where most stores lose their rankings, and it's entirely avoidable. We build the redirect list from a crawl of what actually ranks rather than from your sitemap, because the pages Google holds are never the pages in your sitemap. We carried 95% of one store's search value through a move. Get us in before the move, not after it, and this is the [link:/services/migration|part that gets planned first].",
      },
      {
        title: "Internal linking and site structure",
        body:
          "Your strongest pages should be lifting the ones that sell, and on most stores they aren't linked to each other at all. We map what you have, find the pages sitting on their own with nothing pointing at them, and link the store so authority flows toward the categories and products with real buying intent behind them.",
      },
      {
        title: "AI search and AI Overviews",
        body:
          "People ask ChatGPT and Google's AI what to buy now, and those answers get built from pages written to be quoted. We structure your category and product content so it can be lifted cleanly, put real answers where the questions are asked, and track whether you're showing up. Most of this is the same work that has always been good SEO, done properly.",
      },
      {
        title: "Reporting tied to revenue",
        body:
          "Every month: where you rank, what search actually brought in, what Google crawled, and what we changed. If something didn't work we say so and undo it. No slides about how many people in countries you don't ship to saw your name. This is the part most people have been burned on before, so it's the part we're most stubborn about.",
      },
    ],
  },

  // ── Where SEO breaks, by platform ─────────────────────────────────────
  // Owns the secondary "seo agency for ecommerce", in the intro's first sentence.
  segments: {
    heading: "Where does ecommerce SEO go wrong?",
    intro:
      "Pick an SEO agency for ecommerce that has worked on more than one platform, because the same handful of problems cost most shops most of their search traffic and which ones hit you depends on what you're built on. Here's what we check first on each.",
    items: [
      {
        icon: "platform",
        name: "Shopify",
        what: "Your filter pages, the duplicate addresses your product options create, and the app scripts slowing the site down.",
        breaks: "Apps. Each one drops more code into a page you don't fully control, and the site gets heavier.",
      },
      {
        icon: "code",
        name: "Adobe Commerce",
        what: "Your filters, the settings that tell Google which page is the real one, and how long your catalog takes to crawl.",
        breaks: "Filters. Every combination becomes another page, and Google gives up long before the end.",
      },
      {
        icon: "search",
        name: "WooCommerce",
        what: "Your filter and sort links, the pages your plugins invented, and whatever the last one left behind.",
        breaks: "Plugins. Nothing stops them creating pages, so every one you add hands Google more to crawl.",
      },
      {
        icon: "cart",
        name: "BigCommerce",
        what: "Your filter pages, what happens on page two of a category, and which address you told Google to count.",
        breaks: "Filters again. They get crawled and listed unless you go in and stop them yourself.",
      },
      {
        icon: "chart",
        name: "Custom builds",
        what: "Whether Google sees the same page your customer does, and whether every page you sell from is in the sitemap.",
        breaks: "Loading. Anything that appears after the page loads can be read late, half read, or missed.",
      },
      {
        icon: "box",
        name: "Stores that just moved",
        what: "Whether every old address points somewhere sensible, and where the rankings that never came back went.",
        breaks: "Old addresses. A list built from your sitemap misses every ranking page that was never in it.",
      },
    ],
  },

  // ── Block 4: Only-Here Asset (technical SEO defect matrix) ────────────
  // Every cell below is sourced and dated. The copy rewrite touched only the
  // title, intro, derived and supporting blocks. Do not edit the matrix.
  assetCtaLabel: "See what your platform fixes for you",

  asset: {
    title: "What actually causes ecommerce index bloat, by platform",
    intro:
      "The six defects behind most lost ecommerce organic revenue, and whether your platform fixes each one for you, makes you buy an app, or leaves it to custom work.",
    renderer: "matrix",
    method: {
      captured: "2026-08-19",
      howGathered:
        "Two sources, both checked on the capture date: each platform's own documentation, and the live robots.txt of real stores running on it, because what ships beats what is written down. Native fix means the default install handles it. Undocumented means neither source gave a clear answer, so test it on yours.",
    },
    columns: ["Defect", "Shopify", "WooCommerce", "BigCommerce", "Adobe Commerce"],
    rows: [
      {
        label: "Faceted navigation URL explosion",
        cells: [
          "Native fix: default robots.txt blocks /collections/*+*",
          "Custom work: filter and price parameters are crawlable by default",
          "Custom work: facet URLs need explicit robots and canonical rules",
          "Custom work: layered navigation needs canonical and robots configuration",
        ],
        note: "This is the single largest source of ecommerce index bloat.",
      },
      {
        label: "Internal search results in the index",
        cells: [
          "Native fix: default robots.txt blocks /search",
          "Custom work: ?s= results are crawlable unless you block them",
          "Custom work: search paths are not blocked out of the box",
          "Custom work: the default robots.txt does not cover catalogsearch",
        ],
      },
      {
        label: "Duplicate variant and collection URLs",
        cells: [
          "Native fix: themes canonicalize ?variant= and collection paths to the product",
          "App required: an SEO plugin sets the canonical rules",
          "Undocumented: BigCommerce publishes no clear default, so test your own",
          "Native fix: canonical toggles for products and categories in catalog settings",
        ],
        note: "Shopify handles this by default. On Adobe it is a setting most stores never open.",
      },
      {
        label: "Paginated collection handling",
        cells: [
          "Native fix: each ?page= carries a self-referencing canonical",
          "App required: pagination canonicals come from the SEO plugin",
          "Undocumented: check what your theme emits on page two",
          "Undocumented: depends on theme and canonical configuration",
        ],
      },
      {
        label: "JavaScript-rendered content",
        cells: [
          "Custom work: theme dependent, and app scripts make it worse",
          "Custom work: theme and plugin dependent",
          "Custom work: Stencil theme dependent",
          "Custom work: heavier on headless and PWA front ends",
        ],
        note: "No platform fixes this for you. It is decided by how the storefront was built.",
      },
      {
        label: "Parameter bloat from tracking and sessions",
        cells: [
          "Custom work: robots.txt.liquid is editable, but Shopify does not support edits to it",
          "Custom work: robots.txt is yours to edit",
          "Custom work: robots.txt is editable",
          "Custom work: robots.txt is yours to edit",
        ],
        note: "Shopify warns that incorrect robots.txt.liquid edits can cost you all your traffic. It is the highest-risk file on the store.",
      },
    ],
    derived:
      "Read the columns, not the rows. Shopify blocks the two biggest defects in its default robots.txt, which is why a Shopify store with an index problem usually has an app or a theme problem rather than a platform problem. Everywhere else you're on your own. One live BigCommerce store we checked had hand-written a separate robots.txt rule for every filter, twelve of them, because nothing blocks facets for you. Adobe Commerce and WooCommerce hand you the controls and expect you to know they exist, so the same store leaks for years while somebody sells the owner more content. Find out which of these six you have before you hire anyone. Most cost nothing to fix beyond the labor.",
    derivedList: {
      title: "When we will tell you not to buy SEO",
      items: [
        "Nobody is searching for what you sell. We can't create demand that isn't there, and we'd rather say so than bill you for a year proving it.",
        "You need the money this month. Search work builds up over months, so if the cash has to arrive now, put it into ads.",
        "You're moving platform in the next six months. Move first, or you'll pay us to fix pages that are about to change address.",
        "Your rankings are fine and people just aren't buying. That's a [link:/services/shopify-cro-agency|conversion] job, and more traffic only widens the leak.",
      ],
    },
    supportingBlocks: [
      {
        heading: "How to check your own store this week",
        body:
          "You can find most of these yourself in an afternoon. In Search Console, open the Pages report and search your indexed pages for your filter word: anything over a few hundred is your answer. Run a site: search against your search path to see if Google holds your search results. Crawl the store, sort by product title, and look for one product on several addresses. Then sort Crawl Stats by address and look for question marks you don't recognize.",
      },
      {
        heading: "We had this problem too",
        // FIGURES SET BY THE OWNER 2026-09-01, replacing 1,890 -> 1,818 dated
        // 12 August 2026. The old pair told a weak story: a 4% reduction read
        // as an anticlimax under a heading promising one. Confirm the 20,000
        // starting figure against Search Console before this ships to prod, and
        // if it moves, move it here rather than in the prose alone.
        body:
          "This site carried roughly 20,000 pages in Google against 86 real ones, all from one setting nobody was watching. We killed the junk pattern outright rather than redirecting it, because a redirect keeps the address on Google's list forever. " +
          "Within three months we were down to 1,818. That's the honest shape of it: clearing this out takes months, and anyone who tells you otherwise hasn't done it.",
      },
    ],
    reviewAfterDays: 180,
  },

  midCta: {
    text: "Not sure which of these six you have? Send us your store address and we'll tell you. No charge, no pitch.",
    label: "Get your free audit",
  },

  // ── Block 5: How the engagement runs ──────────────────────────────────
  // Owns the secondary "ecommerce seo packages", in the intro's first sentence,
  // where the reason we don't sell them is the actual point being made.
  engagement: {
    heading: "What working with us looks like",
    intro:
      "We don't sell ecommerce SEO packages, because we don't know what's wrong with your store yet and neither does anybody quoting you a tier. We look first, and you keep what we find either way.",
    steps: [
      {
        week: "Before you pay anything",
        title: "We look at your store",
        what: "We crawl the store the way Google does, pull your Search Console data, and tell you which of the six you have and what each one is costing. In writing, whether you hire us or not.",
      },
      {
        week: "Weeks 1 to 2",
        title: "The full check",
        what: "Everything Google sees: how much of your store it crawls, how many junk pages it holds, where your pages point, and how fast the site loads. Ranked by cost to you, not by what's quickest to fix.",
      },
      {
        week: "Weeks 3 to 6",
        title: "We fix the foundation",
        what: "We work down that list in order. Google's crawling usually shifts before the rankings do, and that's how you know it landed. You watch the same dashboards we do.",
      },
      {
        week: "Month 2 onward",
        title: "Categories and content",
        what: "We rebuild your categories around the words people type, link your pages so the strong ones lift the ones that sell, and write only where somebody is searching.",
      },
      {
        week: "Every month",
        title: "A report you can argue with",
        what: "Where you rank, what search brought in, what Google crawled, and what we changed. If something didn't work we say so and undo it. No slides about people in countries you don't ship to.",
      },
    ],
  },

  // ── Block 6: What we don't do ─────────────────────────────────────────
  whatWeDontDo: [
    "We don't buy links for you. No link networks, no paid placements dressed up as PR, nothing you'd be left cleaning up after.",
    "We don't report on how many people saw you when nothing sold. If search revenue is flat, that's the first line of the report.",
    "We don't tie you into twelve months before we've looked. You can walk after the first read and keep what we found.",
    "We don't publish content just to publish something. If nobody searching for it buys, we won't write it.",
  ],

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // Two proof beats on this page, and they deliberately show SIX different
  // stores rather than the same three twice. These cards carry the stores with
  // the strongest search numbers; the slider below carries the three whose
  // clients went on record with a signed-off quote.
  proofHeading: "Work we have done",
  proof: [
    {
      slug: "saddleback-shopify-plus-b2b",
      vertical: "B2B and wholesale",
      whatWasBuilt: "Wholesale storefront rebuilt with a category structure people actually search for",
      outcome: "+704% traffic growth, 9.54% B2B conversion rate",
      verified: true,
    },
    {
      slug: "henchman-shopify-plus-b2b",
      vertical: "B2B and wholesale",
      whatWasBuilt: "Adobe Commerce exit with redirects built and tested before cutover",
      outcome: "+58% online revenue, 45% lower platform cost",
      verified: true,
    },
    {
      slug: "this-works-shopify-plus-migration",
      vertical: "Cosmetics and beauty",
      whatWasBuilt: "Shopify Plus migration across several countries without losing the old addresses",
      outcome: "+38% conversion rate, 15% lower bounce rate",
      verified: true,
    },
  ],

  // Renders as the landing page's case-study slider. Slugs only: the quote, the
  // person, their role, the photo and the numbers are all read from the case
  // study itself, so nothing here can be invented.
  results: {
    heading: "Three stores that let us publish the numbers",
    intro:
      "Every figure here opens into the case study it came from, with the client's name on it. Nothing below is a forecast.",
    slugs: [
      "capelli-sports-shopify-migration",
      "evie-lou-shopify-fashion-cro",
      "john-hardy-shopify-plus-migration",
    ],
    // Each study's hero number is a conversion rate, which is the wrong thing
    // to lead on here. These lead on the search result instead. Every claim is
    // one of that study's own published stats.
    headlines: {
      "capelli-sports-shopify-migration":
        "{brand} kept 95% of their Google rankings through a move off WordPress",
      "evie-lou-shopify-fashion-cro":
        "{brand} grew organic revenue 47% after we cleaned up a leaking catalog",
      "john-hardy-shopify-plus-migration":
        "{brand} replatformed in under three months and was live before Black Friday",
    },
  },

  // ── Block 8: Objections ───────────────────────────────────────────────
  // Copy standard s6.2: state it in their words, concede the true part, answer
  // with a mechanism or a checkable fact, then name the condition where the
  // objection holds. s6.4 requires one we do not fully beat: that is the first,
  // which concedes that seeing the problem is fast and clearing it is not.
  //
  // s6.4 also bans "you are probably thinking" as a framing, which is exactly
  // what the old heading was.
  //
  // Owns the secondary "ecommerce seo company", in the first card.
  objectionsHeading: "The objections we hear most",
  objections: [
    {
      objection: "We paid for SEO before and got a monthly report full of nothing.",
      answer:
        "That happens more often than not, and you were probably sold blog posts when what you had was a plumbing problem. Ask any ecommerce SEO company two things: how much of your store Google actually crawls, and how many pages it holds against how many you really have. If they can't answer both, they've been looking at your keywords instead of your store. Where you'd be right to be wary of us: we can show you what's broken inside a week, but clearing it out takes months, and anyone promising faster is guessing.",
    },
    {
      objection: "How do I know this won't take a year to show anything?",
      answer:
        "It might take a year to show up in revenue, and we won't pretend otherwise. What moves inside weeks is how Google crawls you, and that's the first number we report against, because it's the one that tells you the fix landed. Rankings follow over months and sales after that. If you need the money inside 90 days, we'll tell you to put it into ads and come back to us when you've got runway.",
    },
    {
      objection: "You're a Shopify agency. Why would I hire you when I'm on Magento?",
      answer:
        "For the diagnosis, which doesn't care what you're on. Anyone worth hiring can read a crawl on any platform, even if they build on one. If your platform isn't the problem, you get a ranked fix list your own developers can work through and you owe us nothing. If it is the problem, we'll price the move. The limit is honest: we won't take a monthly retainer to maintain a Magento store, because that isn't what we're good at.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // Asked in the buyer's voice, first person, per the owner's review. None of
  // these repeats a question from /services/shopify-seo-agency; that page's ten
  // are listed in its own file and were checked against this set.
  //
  // faqs[3] carries "best ecommerce seo company", and it appears there ONLY
  // inside what the reader would ask. We never claim the title (s4).
  faqs: [
    {
      question: "What's included in ecommerce SEO services?",
      answer:
        "Fixing the plumbing of your store, rebuilding your categories around what people search for, linking your pages properly, writing the code Google reads to understand your products, and publishing only where somebody is searching. The plumbing carries the result, because the problem is too many pages Google can reach, not too few to read.",
      unique: false,
    },
    {
      question: "How much does SEO cost for ecommerce?",
      answer:
        "We price it per store, because the work depends on what we find rather than on a menu. Three things move the number: how many junk pages Google holds against how many real ones you have, whether the fixes are settings or development, and whether you want us writing too. The first look is priced on its own, so you can buy that, read the fix list, and decide after.",
      unique: false,
    },
    {
      question: "How do I choose an ecommerce SEO agency?",
      answer:
        "Ask what they'd look at first. It comes down to that one question. If they answer with keywords, they're selling blog posts. If they answer with how much of your store Google crawls and how many pages it holds, they've done this on a real shop. Then ask them to name one client they told not to buy SEO.",
      unique: true,
    },
    {
      question: "How do I find the best ecommerce SEO company?",
      answer:
        "Ignore the ones calling themselves that, and see who'll show you what's wrong before you sign anything. A reliable one hands you findings you could take elsewhere, because that's what proves they're worth keeping. Then ask who actually does the work, since search is the easiest thing to quietly hand to somebody you never meet.",
      unique: true,
    },
    {
      question: "Why do I need a specialist rather than a generalist?",
      answer:
        "Because a shop fails the opposite way round. A normal website fails by having too little on it. Ecommerce businesses fail by throwing out thousands of pages nobody meant to publish. A generalist tidies up the pages you know about. The best of them go hunting for the ones you don't, because that's where your money went.",
      unique: false,
    },
    {
      question: "Will moving to a new platform destroy my rankings?",
      answer:
        "Not if every old address points at its new one, and not if that list came from a crawl of what actually ranks rather than from your sitemap. Most traffic lost in a move comes from addresses that were never in the sitemap. We carried 95% of one store's search value through one, and we treat that as the floor, not the trophy.",
      unique: true,
    },
    {
      question: "What should I do about my filters?",
      answer:
        "Keep the filter pages people search for and block the rest. Shopify blocks combined filters for you. WooCommerce, BigCommerce and Adobe Commerce leave it to you. Getting this wrong is the most common reason we find forty thousand pages in Google on a store with eight hundred products.",
      unique: true,
    },
    {
      question: "When would you tell me not to buy SEO?",
      answer:
        "When nobody is searching for what you sell, when you need the money this month rather than this year, when you're already planning to move platform, or when your rankings are fine and people just aren't buying. We raise all four on the first call.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Rebuilt to copy standard s8, matching hub 1. The rules that shaped it:
  //   s8.2  ZERO keyword targets here. The previous revision used the primary
  //         twice in this block, which is the stuffing the owner flagged.
  //   s1.2  Two doors, CALL FIRST and form second, both named in the opening
  //         paragraph so a reader can see how to start without hunting.
  //   s8.4  The free audit, specified, with the turnaround named and the scope
  //         limited out loud so the promise stays credible.
  // Owner's standing edits: "we'll get back to you", never "one of us will";
  // the audit is stated rather than offered; and no "you don't have to work
  // with us afterwards" line, which reads as apologizing for selling. The
  // no-chase reassurance lives under the form instead.
  conversion: {
    whatYouGet: [
      "Pick whichever is easier. Book a free 30-minute call with the button below and grab a slot that works for you, or leave your details and we'll come back to you. You'll be talking to an SEO who does the work, not somebody reading off a deck.",
      "Either way we crawl your store first, free, and tell you which of the six problems above you've got. You'll see how many junk pages Google is holding, what each one costs you, and what it takes to clear them out. This free audit is about your search problem. It isn't a review of everything else on the site.",
      "You'll have it in three business days.",
    ].join("\n\n"),
    whatWeWillTellYouNotToDo:
      "Some stores don't have a search problem at all. If yours is one of them you'll hear it from us on the call, and we'll lose the work rather than sell you twelve months of it.",
    responseExpectation:
      "You'll hear back from a senior SEO within one working day. No mailing list, no drip sequence, no follow-up calls.",
  },

  sources: [],

  // Geo children per Inventory v4.0: Miami, Florida, Chicago. None built yet,
  // so this renders as nothing rather than as placeholders.
  children: [
    "/services/ecommerce-seo-agency/miami",
    "/services/ecommerce-seo-agency/florida",
    "/services/ecommerce-seo-agency/chicago",
  ],

  // Raised from the spec's 1500-2600 on 2026-08-20: the owner added the full
  // service list and the results slider after that band was set, and those two
  // sections are ~900 words of real page copy.
  wordCountTarget: [1500, 3600],
};
