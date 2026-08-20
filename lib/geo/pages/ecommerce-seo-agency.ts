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
// states "Every store we work with runs on Shopify", and it satisfies the
// Inventory guardrail that this hub lead on migrations, platform comparison
// and honest advice about whether Shopify suits them.
//
// CANNIBALISATION: /services/shopify-seo-agency is the same service described
// for a different buyer. That page ranks people already on Shopify who want
// rankings. This one captures the replatform decision. check-shingles compares
// the two at a stricter 75% threshold than the geo set. Do not reuse its FAQ
// questions; they are listed in that file and deliberately not repeated here.
//
// Platform facts in the Only-Here Asset came from vendor documentation on
// 2026-08-19. Cells marked NI(...) are gaps nobody has verified; leave them as
// gaps rather than guessing.

import type { HubPage } from "../types";

const NI = (what: string) => `[NEEDS INPUT: ${what}]`;

export const ECOMMERCE_SEO_AGENCY: HubPage = {
  type: "hub",
  slug: "ecommerce-seo-agency",
  path: "/services/ecommerce-seo-agency",
  status: "draft",

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce seo agency",
  secondaryKeywords: [
    "ecommerce seo services",
    "ecommerce seo company",
    "seo agency for ecommerce",
    "ecommerce seo packages",
    "best ecommerce seo company",
  ],
  faqKeywords: [
    "how much does seo cost for ecommerce",
    "how to choose an ecommerce seo agency",
    "how to find a reliable ecommerce seo company",
    "how to choose an seo agency for e-commerce",
    "why ecommerce businesses need the best seo agency",
    "what is ecommerce seo services",
  ],
  metaTitle: "Ecommerce SEO Agency That Grows Your Sales",
  metaDescription:
    "An ecommerce SEO agency for stores that stopped growing in Google. We find what is broken on any platform, show you, and tell you what it costs to fix.",
  shortTitle: "Ecommerce SEO Agency",
  serviceType: "Ecommerce SEO",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "An Ecommerce SEO Agency That Fixes Your Store and Grows Your Sales",
  qualifier:
    "We find out why your store stopped showing up in Google, on whatever platform you are on today, and we tell you before you pay us anything. If you only have a handful of pages, we are the wrong people to call.",
  heroImage: {
    src: "/images/performance-1.webp",
    alt: "Ecommerce SEO agency going through a store's search traffic and rankings",
    // Source file is portrait; without this it stands taller than the copy.
    aspect: "3 / 2",
  },

  // Answer-first definition. This is the passage AI Overviews lift.
  quickAnswer:
    "Ecommerce SEO is the work of getting a shop full of products to show up in Google. It is a different job from normal SEO, because on a shop the problem is usually too many pages rather than too few. Filters and product options quietly create thousands of near-identical pages, and Google spends its time on those instead of the ones you sell. An ecommerce SEO agency finds them and clears them out.",

  // ── Trust bar ─────────────────────────────────────────────────────────
  trust: {
    heading: "We Have Built {storesBuilt} Stores. Here Are a Few.",
    subheading:
      "Platform moves that kept their Google traffic, shops rebuilt around how people search, and clean-ups on stores that were quietly leaking. Judge an ecommerce SEO agency on that.",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Your traffic did not fall off a cliff. It leaked away. You slipped a place here and a place there, month after month, while the shop kept working fine and the reports kept talking about blog posts.\n\nHere is what was usually happening. Google was crawling forty thousand filter pages to find your eight hundred real products, and giving up before it got to them. Nobody was watching that, so nobody caught it. It is the first thing an ecommerce SEO agency should look at.",

  // ── Block 3: What we actually do ──────────────────────────────────────
  whatWeDo: [
    "Most ecommerce SEO agency pitches open with a monthly fee. We open with what is wrong. We crawl your shop the way Google does, pull your Search Console data, and read your server logs if we can get them. You get it in writing whether you hire us or not.",
    "We can do that on any platform: Shopify, Adobe Commerce, WooCommerce, BigCommerce, or something built from scratch. The fixing is where we are choosy, because we build on Shopify. If your platform turns out to be what is holding you back, we will say so and price the [link:/services/migration|move], instead of billing you every month to work around it.",
    "After that it is monthly: working through what the crawl found, rebuilding your categories around how people search, linking your pages properly, and the code Google reads to understand your products. Already on Shopify? That version is [link:/services/shopify-seo-agency|Shopify SEO].",
  ].join("\n\n"),

  // ── The full service list ─────────────────────────────────────────────
  // Ordered the way a buyer meets them: the look first, then the plumbing that
  // usually turns out to be the problem, then the pages, then the things you
  // only need once the foundation holds.
  servicesList: {
    label: "Ecommerce SEO Services",
    heading: "Every Ecommerce SEO Service Your Store Needs",
    intro:
      "One team doing all of it, on Shopify. Most people hire an ecommerce SEO agency for one of these and find out they needed three. We start with the look, tell you what is actually wrong, and work down the list in the order that gets your money back fastest. Already on Shopify and want the platform version? That is [link:/services/shopify-seo-agency|Shopify SEO].",
    ctaLabel: "Get your store looked at",
    items: [
      {
        title: "Ecommerce SEO Audit",
        body:
          "We crawl your store the way Google does, pull your Search Console data, and read your server logs where we can get them. You get a ranked list of what is wrong, what each one is costing you, and what it takes to fix. In writing, priced on its own, and yours to take elsewhere if you want to. No ecommerce SEO agency should ask you for a retainer before this part.",
      },
      {
        title: "Technical SEO for Large Catalogs",
        body:
          "This is where the money usually is, and it is the half a generalist misses. Filter pages multiplying into the tens of thousands, your own site search showing up in Google, the same product sitting on six addresses, page two of a category pointing at nothing. We find them, block what should never have been crawlable, and hand Google back the pages you actually sell from.",
      },
      {
        title: "Category and Collection Page SEO",
        body:
          "Your category pages are the ones that rank, not your homepage and not your blog. We rebuild them around the words people really type, which is rarely the way your buying team names things internally. That means the right categories existing at all, real copy on them, and filters that make a page worth indexing instead of another near-duplicate.",
      },
      {
        title: "Product Page SEO at Scale",
        body:
          "Thousands of products, one team, and no time to write them one at a time. We build the templates and rules that make every product page work on its own: titles that match how people search, descriptions that are not the manufacturer's, options handled so they do not create duplicates, and out-of-stock products dealt with properly instead of quietly deleted.",
      },
      {
        title: "Site Speed and Core Web Vitals",
        body:
          "Slow stores lose people before Google gets involved. We cut the app scripts you are not using, fix your images, defer what does not need to load first, and get your Core Web Vitals into the green. On most stores the biggest single win an ecommerce SEO agency finds is an app somebody installed two years ago and forgot about.",
      },
      {
        title: "Structured Data and Rich Results",
        body:
          "The code Google reads to understand what you sell: products, prices, stock, reviews, breadcrumbs and FAQs. Done right you get stars and prices in the search result, which is a bigger click difference than moving up one place. Done wrong you get a manual penalty, which is why we do not bolt it on with a plugin and hope.",
      },
      {
        title: "Migration and Replatform SEO",
        body:
          "Moving platform is where most stores lose their rankings, and it is entirely avoidable. We build the redirect list from a crawl of what actually ranks rather than from your sitemap, because the pages Google holds are never the pages in your sitemap. We carried 95% of one store's search value through a move. Bring an ecommerce SEO agency in before the move, not after it, and this is the [link:/services/migration|part that gets planned first].",
      },
      {
        title: "Internal Linking and Site Structure",
        body:
          "Your strongest pages should be lifting the ones that sell, and on most stores they are not linked to each other at all. We map what you have, find the pages sitting on their own with nothing pointing at them, and link the store so authority flows toward the categories and products with real buying intent behind them.",
      },
      {
        title: "AI Search and AI Overviews",
        body:
          "People ask ChatGPT and Google's AI what to buy now, and those answers get built from pages written to be quoted. We structure your category and product content so it can be lifted cleanly, put real answers where the questions are asked, and track whether you are showing up. Most of what an ecommerce SEO agency does for AI search is the same work that has always been good SEO, done properly.",
      },
      {
        title: "Reporting Tied to Revenue",
        body:
          "Every month: where you rank, what search actually brought in, what Google crawled, and what we changed. If something did not work we say so and undo it. No slides about how many people in countries you do not ship to saw your name. This is the part most people have been burned on by their last ecommerce SEO company, so it is the part we are most stubborn about.",
      },
    ],
  },

  // ── Where SEO breaks, by platform ─────────────────────────────────────
  segments: {
    heading: "Where Does Ecommerce SEO Go Wrong?",
    intro:
      "The same handful of problems cost most shops most of their search traffic. Which ones hit you depends on what you are built on, and an ecommerce SEO agency that has only worked on one platform will not recognize half of them.",
    items: [
      {
        icon: "platform",
        name: "Shopify",
        what: "Your filter pages, the duplicate addresses your product options create, and the app scripts slowing the site down.",
        breaks: "Apps. Each one drops more code into a page you do not fully control, and the site gets heavier.",
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
  // The hero's second button jumps to the table below. The default label talks
  // about platform cost, which is hub 1's asset, not this one.
  assetCtaLabel: "See what your platform fixes for you",

  asset: {
    title: "What Actually Causes Ecommerce Index Bloat, by Platform",
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
      "Read the columns, not the rows. Shopify blocks the two biggest defects in its default robots.txt, which is why a Shopify store with an index problem usually has an app or a theme problem rather than a platform problem. Everywhere else you are on your own: one live BigCommerce store we checked had hand-written a separate robots.txt rule for every filter, twelve of them, because nothing blocks facets for you. Adobe Commerce and WooCommerce hand you the controls and expect you to know they exist, so the same store leaks for years while somebody sells the owner more content. Before you hire an ecommerce SEO agency, find out which of these six you have. Most cost nothing to fix beyond the labor.",
    derivedList: {
      title: "When we will tell you not to buy SEO",
      items: [
        "Nobody is searching for what you sell. We cannot create demand that is not there, and we would rather say so than bill you for a year proving it.",
        "You need the money this month. Search work builds up over months, so if the cash has to arrive now, put it into ads.",
        "You are moving platform in the next six months. Move first, or you will pay us to fix pages that are about to change address.",
        "Your rankings are fine and people are just not buying. That is a [link:/services/shopify-cro-agency|conversion] job, and more traffic only widens the leak.",
      ],
    },
    supportingBlocks: [
      {
        heading: "How to check your own store this week",
        body:
          "You can find most of these yourself in an afternoon. In Search Console, open the Pages report and search your indexed pages for your filter word: anything over a few hundred is your answer. Run a site: search against your search path to see if Google holds your search results. Crawl the store, sort by product title, and look for one product on several addresses. Then sort Crawl Stats by address and look for question marks you do not recognize.",
      },
      {
        heading: "We had this problem too",
        body:
          "This site carried roughly 1,890 pages in Google against 86 real ones, all from one setting nobody was watching. We killed the junk pattern outright rather than redirecting it, because a redirect keeps the address on Google's list forever. " +
          "By 12 August 2026 we were down to 1,818. That is the honest shape of it: clearing this out takes months, and anyone who tells you otherwise has not done it.",
      },
    ],
    reviewAfterDays: 180,
  },

  midCta: {
    text: "Not sure which of these six you have? Send us your store address and we will tell you. No charge, no pitch.",
    label: "Ask us",
  },

  // ── Block 5: How the engagement runs ──────────────────────────────────
  engagement: {
    heading: "What Working With Us Looks Like",
    intro: "We look first, and you keep what we find either way. No ecommerce SEO agency should want twelve months from you before anyone has opened your store.",
    steps: [
      {
        week: "Before you pay anything",
        title: "We Look At Your Store",
        what: "We crawl the store the way Google does, pull your Search Console data, and tell you which of the six you have and what each is costing. In writing, whether you hire us or not.",
      },
      {
        week: "Weeks 1 to 2",
        title: "The Full Check",
        what: "Everything Google sees: how much of your store it crawls, how many junk pages it holds, where your pages point, and how fast the site loads. Ranked by cost to you, not by what is quickest to fix.",
      },
      {
        week: "Weeks 3 to 6",
        title: "We Fix the Foundation",
        what: "We work down that list in order. Google's crawling usually shifts before the rankings do, and that is how you know it landed. You watch the same dashboards we do.",
      },
      {
        week: "Month 2 onward",
        title: "Categories and Content",
        what: "We rebuild your categories around the words people type, link your pages so the strong ones lift the ones that sell, and write only where somebody is searching.",
      },
      {
        week: "Every month",
        title: "A Report You Can Argue With",
        what: "Where you rank, what search brought in, what Google crawled, and what we changed. If something did not work we say so and undo it. No slides about people in countries you do not ship to.",
      },
    ],
  },

  // ── Block 6: What we don't do ─────────────────────────────────────────
  whatWeDontDo: [
    "We do not buy links for you. No link networks, no paid placements dressed up as PR, nothing an ecommerce SEO agency should leave you cleaning up after.",
    "We do not report on how many people saw you when nothing sold. If search revenue is flat, that is the first line of the report.",
    "We do not tie you into twelve months before we have looked. You can walk after the first read and keep what we found.",
    "We do not publish content just to publish something. If nobody searching for it buys, we will not write it.",
  ],

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // Two proof beats on this page, and they deliberately show SIX different
  // stores rather than the same three twice. These cards carry the stores with
  // the strongest search numbers; the slider below carries the three whose
  // clients went on record with a signed-off quote. A reader scrolling past
  // both should meet six brands, not three brands and an echo.
  proofHeading: "Work We Have Done",
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

  // Renders in the proof slot as the landing page's case-study slider. Slugs
  // only: the quote, the person, their role, the photo and the numbers are all
  // read from the case study itself, so nothing here can be invented.
  results: {
    heading: "Real Ecommerce SEO Work. Numbers You Can Check.",
    intro:
      "Not forecasts. Three stores where the work is documented, the client says so in their own words, and every number opens into the case study it came from.",
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
  objectionsHeading: "What You Are Probably Thinking",
  objections: [
    {
      objection: "We paid for SEO before and got a monthly report full of nothing.",
      answer:
        "Then you were sold blog posts when you had a plumbing problem. Ask any ecommerce SEO company two things: how much of your store Google crawls, and how many pages it holds against how many you really have. If they cannot answer both, they have been looking at your keywords, not your store.",
    },
    {
      objection: "How do I know this will not take a year to show anything?",
      answer:
        "Fixing the plumbing changes how Google crawls you within weeks, and that is the first number an ecommerce SEO agency should report against. Rankings and sales follow over months. If you need the money inside 90 days, we will tell you to spend it on ads.",
    },
    {
      objection: "You are a Shopify agency. Why would I hire you when I am on Magento?",
      answer:
        "For the diagnosis, which does not care what you are on. Any SEO agency for ecommerce worth hiring can read a crawl on any platform, even if it builds on one. If your platform is not the problem, you get a ranked fix list for your own developers. If it is, we price the move.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // The six tertiary keyphrases ARE the questions here. None of these repeats a
  // question from /services/shopify-seo-agency; that page's ten are listed in
  // its own file and were checked against this set.
  faqs: [
    {
      question: "What is included in ecommerce SEO services?",
      answer:
        "An ecommerce SEO agency fixes the plumbing of your store, rebuilds your categories around what people search for, links your pages properly, writes the code Google reads to understand your products, and publishes only where somebody is searching. The plumbing carries the result, because the problem is too many pages Google can reach, not too few to read.",
      unique: false,
    },
    {
      question: "How much does SEO cost for ecommerce?",
      answer:
        "We price it per store, because the work depends on what we find rather than on a menu. Three things move the number: how many junk pages Google holds against how many real ones you have, whether the fixes are settings or development, and whether you want us writing too. That is why we do not sell fixed ecommerce SEO packages. The first look is priced on its own, so you can buy that, read the fix list, and decide after.",
      unique: false,
    },
    {
      question: "How do you choose an ecommerce SEO agency?",
      answer:
        "Ask what they would look at first. Choosing an SEO agency for e-commerce comes down to that one question. If they answer with keywords, they are selling blog posts. If they answer with how much of your store Google crawls and how many pages it holds, they have done this on a real shop. Then ask them to name one client they told not to buy SEO.",
      unique: true,
    },
    {
      question: "How do you find a reliable ecommerce SEO company?",
      answer:
        "See whether they will show you what is wrong before you sign anything. Ignore anyone calling themselves the best ecommerce SEO company and ask for findings you could take elsewhere, because that is what proves they are worth keeping. Then ask who actually does the work. SEO is the easiest thing for an ecommerce SEO agency to quietly hand to somebody you never meet.",
      unique: true,
    },
    {
      question: "Why do ecommerce businesses need a specialist SEO agency?",
      answer:
        "Because a shop fails the opposite way round. A normal website fails by having too little on it. A shop fails by throwing out thousands of pages nobody meant to publish. A generalist tidies up the pages you know about. The best ecommerce SEO agency goes hunting for the ones you do not, because that is where your money went.",
      unique: false,
    },
    {
      question: "Will moving to a new platform destroy our rankings?",
      answer:
        "Not if every old address points at its new one, and not if that list came from a crawl of what actually ranks rather than from your sitemap. Most traffic lost in a move comes from addresses that were never in the sitemap. We carried 95% of one store's search value through one, and we treat that as the floor, not the trophy.",
      unique: true,
    },
    {
      question: "What should we do about our filters?",
      answer:
        "Keep the filter pages people search for and block the rest. Shopify blocks combined filters for you. WooCommerce, BigCommerce and Adobe Commerce leave it to you. Getting this wrong is the most common reason an ecommerce SEO agency finds forty thousand pages in Google on a store with eight hundred products.",
      unique: true,
    },
    {
      question: "When would you tell us not to buy SEO?",
      answer:
        "When nobody is searching for what you sell, when you need the money this month rather than this year, when you are already planning to move platform, or when your rankings are fine and people just are not buying. We raise all four on the first call.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  conversion: {
    whatYouGet:
      "Send us your store address. Before you pay an ecommerce SEO agency anything, we will write back and tell you which of the six you have and what each is costing you.",
    whatWeWillTellYouNotToDo:
      "If nobody is searching for what you sell, we will tell you not to spend a penny with an ecommerce SEO agency.",
    responseExpectation:
      "A senior SEO writes back within one working day. If we get on a call, your written scope and price follow within two days of it.",
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
