// Batch 1b, page 7: /services/shopify-seo-agency/new-york
// Spec: Batch 1 Page Specification v2.0 section 2.2 (geo spine).
// Copy: Ecomm Wizards Copy Standard v2.0.
//
// Primary keyword: "shopify seo agency new york" (10/mo, Google Keyword Planner)
// Inventory: Geo Inventory & Batch Plan v4.0, page #12, New York metro.
// Hub: /services/shopify-seo-agency (pre-existing, hand-built).
//
// ── ROIA (Copy Standard section 1) ───────────────────────────────────────────
//
// ONE READER. Copy Standard 1.1 writes this one too, and almost word for word:
// "Has a Shopify store that ranks for its brand name and nothing else. Has
// bought SEO before and received a report instead of revenue."
//
// That second sentence is the whole page. This reader is not sceptical about
// SEO in the abstract, they are sceptical about SEO agencies, because they have
// already paid one. Every section here is written to somebody holding a
// twelve-month contract that produced a monthly PDF of green arrows and no
// extra orders.
//
// AWARENESS, AND WHAT IT RULES OUT. They know what SEO is. They know what an
// SEO agency does. Every page ranking for this term opens by explaining it
// anyway: the strongest competitor leads with "What Is Shopify SEO and Why Is
// It Important?". We do not, and section 5.1 bans it regardless.
//
// ONE IDEA (18 words)
// Rankings are worth less every quarter. You are buying clicks and orders, and
// a ranking report measures neither.
//
// ONE OFFER, TWO DOORS. Book a call, or leave details and we call you. Both end
// in the free audit.
//
// ONE ACTION. Every button says "Get in touch with us", resolving to #contact.
//
// VOICE. One human to another. Contractions throughout, per section 2.2.
//
// ── ARCHETYPE ────────────────────────────────────────────────────────────────
//
// D, density-led, scoped to SEARCH competition. Master Strategy 5.2 works this
// exact gradient as its illustration of the layer: "why NYC brands lose to
// national aggregators on their own product terms; how local-intent and
// national-intent search split for a NYC-based DTC brand."
//
// Page #11 also carries D, scoped to the supply of AGENCIES. The letters
// collide because New York has three pages and two assigned archetypes; the
// note in ecommerce-agency-new-york.ts records that in full. What separates
// them is the gradient content, which is what section 5.7 actually tests, and
// check-shingles enforces it.
//
// ── CANNIBALISATION GUARDRAIL (Inventory v4.0, section 6c) ───────────────────
//
// /services/shopify-seo-agency and /services/ecommerce-seo-agency are the
// highest-risk pair in the whole programme: one service, two national pages.
// The rule from v4.0 Stage 1: "Ecommerce SEO leads platform-agnostic. Shopify
// SEO leads platform-specific: Liquid, collection architecture, Shopify's
// technical constraints."
//
// So this page, sitting under the SHOPIFY SEO hub, leads platform-specific.
// Collection and tag architecture, Shopify's URL behaviour, apps that quietly
// slow the store. It never argues platform choice; that argument belongs to
// page #11 and to the ecommerce SEO hub.
//
// ── STRUCTURE: MODELED ON WHAT RANKS FOR THIS TERM ───────────────────────────
//
// SERP read 2026-09-04. The field here is markedly weaker than for the other
// two New York terms: no Roswell, no DD.NYC, no Charle. What ranks is small
// specialist SEO shops (JH SEO Agency, LoudGrowth, Robert Gerov Media, Digital
// Drew SEM, Web Cures Digital) plus a Semrush directory listing 31 agencies.
//
// robertgerov.com/shopify-seo-services read in full, as the strongest of them:
// ~1,800-2,000 words, H1 stuffed with a pipe, a "What Is Shopify SEO" opener, a
// SEVEN-STEP NUMBERED PROCESS with visual progression, 6 FAQs, a free Shopify
// SEO audit with no stated turnaround, two New York addresses and a phone
// number, no pricing, and zero case studies detailed on the page.
//
// THE NUMBERED PROCESS IS THE PATTERN WORTH TAKING. Every page in this SERP
// walks the buyer through a method, and for this reader that is exactly right:
// somebody who has been sold SEO once wants the sequence in advance, not a
// promise. GeoPageTemplate could not render one, so `engagement` was added to
// GeoPageSchema for this page. It is the third distinct structure across the
// three New York pages, which is deliberate:
//   #10 disciplines (broad keyword, reader has not chosen a service)
//   #11 disciplines + sub-service chips (broad keyword, shortlist stage)
//   #12 services accordion + numbered process (keyword NAMES the service, so
//       the reader has chosen and wants scope and sequence)
//
// Where we beat the field: nobody states a price, nobody shows a case study
// with a number on it, nobody names an audit turnaround, and everybody opens by
// explaining SEO to somebody who already knows.
//
// ── CASE STUDIES ─────────────────────────────────────────────────────────────
//
// Seven studies, no repeats within the page. Cross-page reuse is unavoidable
// now: pages #10 and #11 took 26 distinct brands and the corpus is 34, so a
// third page of thirteen fresh ones does not exist. That is fine, the no-repeat
// rule is per page.
//
//   hero    Loop Earplugs
//   proof   Evie Lou, Capelli Sports, Twillory
//   results John Hardy, Wild, Mouldings One
//
// Proof is picked for SEO evidence specifically, not for looks: Evie Lou is
// +47% organic revenue year on year, Capelli Sports retained 95% of SEO equity
// through a replatform, and Twillory is $5.4M of new annual revenue, which is
// the "revenue not rankings" argument in one number.
//
// LOOP EARPLUGS IS HERO-ONLY, DELIBERATELY. Its headline metric is denominated
// in euros, and the proof, discipline and results components all render a
// study's own hero metric. The hero renders the poster and nothing else, so
// using it there and nowhere else keeps a euro figure off a US page (section 9)
// while still getting a brand-legible opening frame.
//
// SECONDARY OWNERSHIP (section 7.2, one secondary per section, nowhere else)
//   shopify seo company nyc  -> servicesList item 1
//   shopify seo nyc          -> servicesList item 2
//   shopify seo experts nyc  -> servicesList item 3
// Items 4-6 carry no keyword: 7.3 bans manufactured secondaries.
//
// PRESENCE (Master Strategy section 4): no claim anywhere.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const SHOPIFY_SEO_NEW_YORK: GeoPage = {
  type: "geo",
  slug: "new-york",
  path: "/services/shopify-seo-agency/new-york",
  hub: "/services/shopify-seo-agency",
  status: "draft",

  geo: {
    name: "New York",
    type: "metro",
    areaServed: "New York, New York",
  },
  archetype: ["D"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "shopify seo agency new york",
  secondaryKeywords: ["shopify seo company nyc", "shopify seo nyc", "shopify seo experts nyc"],
  faqKeywords: [
    "how long does shopify seo take",
    "how much does shopify seo cost",
    "is shopify good for seo",
    "why does my store only rank for my brand name",
    "shopify collection page seo",
  ],
  reviewedPhrases: ["in New York"],

  metaTitle: "Shopify SEO Agency New York Brands Hire After The Last One",
  metaDescription:
    "A Shopify SEO agency New York brands hire when the last one sent reports instead of orders. Organic click share fell to 40% this year. Rankings aren't the product.",
  shortTitle: "Shopify SEO agency New York",
  serviceType: "Shopify SEO",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "A Shopify SEO agency New York brands hire after the last one sent reports",
  qualifier:
    "For stores that rank for their own name and nothing else. We'll tell you what the traffic is actually worth before you commit to anything, and if organic isn't where your next dollar is, we'll say that too.",

  // Loop Earplugs. `src` is the poster: first paint, and the whole experience
  // under prefers-reduced-motion since the video is never fetched then.
  //
  // Picked against the rule set on the first two pages: composed frame AND a
  // legible brand, or the hero is decoration. The product fills the frame with
  // the wordmark on it. Rejected on the way here: Capelli Sports (a near-black
  // frame, same defect class as the Ronaldo poster that started all this),
  // Twillory (a floating jacket, no brand anywhere), NEOM (a tap).
  //
  // Used ONLY here on purpose. See the note at the top of the file: its hero
  // metric is in euros and every other component renders that figure.
  heroImage: {
    src: "/images/Case%20studies/posters/Loop%20Earplugs%20video.webp",
    alt: "The Loop Earplugs landing pages we rebuilt for paid and organic traffic",
    video: "/images/Case%20studies/Loop%20Earplugs%20video.mp4",
    aspect: "4 / 5",
  },

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years on the platform" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  // ── Trust bar ─────────────────────────────────────────────────────────
  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading:
      "We build stores as well as rank them. That matters more than it sounds, because most of what holds your store back in search is how it was built.",
  },

  assetCtaLabel: "See what changed this year",

  // ── Approach ──────────────────────────────────────────────────────────
  approach: {
    heading: "We report on orders, because that's what you're buying",
    body:
      "You've had the deck before. Twelve keywords in green, a domain authority score that went up two points, an average position chart with no money on it anywhere.\n\nNone of that is dishonest exactly. It's just measuring the wrong end. Position five to position three is only worth something if position three still gets clicked, and this year it gets clicked a lot less than it used to.\n\nSo we report on sessions from search, orders from those sessions, and revenue. Rankings show up as a diagnostic, not as the result. If organic sessions climb and orders don't, that's a conversion problem and we'll say so rather than showing you a nicer chart.",
  },

  proofCta: {
    text: "Three stores, three numbers, none of them a ranking.",
    label: "Get in touch with us",
  },
  midCta: {
    text: "Want to know what your current rankings are actually earning?",
    label: "Get in touch with us",
  },
  closingCta: {
    text: "Send us the last report you got and we'll tell you what it left out.",
    label: "Get in touch with us",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Search your best-selling product by name, without your brand attached. Count how many results load before you show up.\n\nThat's the whole problem, and you've probably paid somebody to fix it already. What came back was a monthly report, some green arrows, and roughly the same number of orders.\n\nSo the useful thing we can do here isn't to promise you rankings. It's to show you what a ranking is currently worth, because that number moved a lot this year and almost nobody selling you SEO has mentioned it.",

  // ── Quick answer ──────────────────────────────────────────────────────
  // The passage an AI Overview lifts. 45 words.
  quickAnswer:
    "Ecomm Wizards is a Shopify SEO agency New York brands hire to turn search traffic into orders. We fix the collection and product structure, the technical debt holding your store back, and pages that rank but don't sell. You get reported on revenue, not on positions.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // The reader's commercial world, only where this service touches it. No
  // landmarks or decoration. The NY-specific point: your buyers are national,
  // so the SERP you compete in is the national one.
  placeLayerHeading: "You're not competing locally, whatever the search looks like",
  placeLayer:
    "A restaurant here competes with the restaurants around it. Your store doesn't. Whoever buys from you could be anywhere, which means the search results you're fighting over aren't local ones.\n\nThat catches a lot of brands out. There's an instinct that being a New York brand should count for something in search, and for a plumber it does. For a store shipping nationwide it counts for almost nothing, because the query your customer types has no geography in it at all.\n\nOn those queries you're up against Amazon, a couple of department stores, and three affiliate roundups titled \"best of\". Increasingly there's an AI summary too, answering the question before any of you get a click.\n\nAnd the categories this market is thickest in, apparel and jewelry and beauty, are precisely the ones where those aggregators are strongest. Which is why so many stores here rank beautifully for their own brand name and nowhere at all for the thing they sell.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  // Service x place. Minimum two sourced facts, recorded in gradientFacts.
  // Non-technical by instruction: this is about clicks and money, not crawling.
  gradientLayerHeading: "A ranking is worth less than it was in March",
  gradientLayer:
    "Here's the part that should change how you buy this. Across US search, the share of clicks going to organic results fell from 44.9% in March to 40% in June this year. Over the same stretch, the share of clicks Google kept inside its own properties went from 14.8% to 17.1%.\n\nWhen an AI summary appears on a search, 8% of those searches end in a click. Without one, it's 15%. Roughly half the traffic, gone, on a result you might still be ranking first for.\n\nSo two agencies can both move you from position five to position two, and one of them delivers orders while the other delivers a chart. The difference is whether they picked terms that still send people anywhere, and whether the page they land on was built to sell.\n\nThat's the work. Choosing the searches worth winning, then making sure the click turns into an order. Position is the input. Nobody spends it.",
  gradientFacts: [
    {
      id: "emarketer-organic-click-share-2026",
      claim:
        "eMarketer, 27 July 2026, reporting Datos and SparkToro data: US organic click share fell to 40% in June 2026 from 44.9% in March 2026, while clicks to Google-owned properties rose from 14.8% in March to as high as 17.1% in Q2 2026. Same article: traditional search accounted for 10.52% of quarterly desktop webpage visits in Q2 2026 against 1.83% for AI tool domains, which is the figure to reach for if anyone argues the shift is bigger than it is.",
      url: "https://www.emarketer.com/content/google-keeping-more-search-traffic-its-own-ecosystem",
      publisher: "eMarketer, reporting Datos and SparkToro",
      captured: "2026-09-04",
      reviewAfterDays: 90,
    },
    {
      id: "pew-ai-summary-clicks-2026",
      claim:
        "Pew Research, cited in the same eMarketer piece: 8% of searches that show an AI summary result in a click, against 15% of searches without one. This is the single most load-bearing number on the page and the one to re-verify first. Also cited there: Ahrefs measuring SERP click-through down as much as 58% on top-ranking results where AI Overviews appear, and Digital Content Next putting publisher referral traffic down as much as 25% across 2025.",
      url: "https://www.emarketer.com/content/google-keeping-more-search-traffic-its-own-ecosystem",
      publisher: "Pew Research, via eMarketer",
      captured: "2026-09-04",
      reviewAfterDays: 90,
    },
    {
      id: "semrush-ny-shopify-seo-agencies-2026",
      claim:
        "Semrush Agency Partners listed 31 Shopify SEO agencies for New York City as of 4 September 2026, with per-project budgets banded from $0-$5,000 up to $10,000-$25,000 and entries starting from $1,000, $2,500 or $5,000. Recorded as market context for the objections and the FAQ price answer. NOT used in the gradient: the supply-of-agencies argument belongs to page #11 and repeating it here would collapse the two pages into one.",
      url: "https://agencies.semrush.com/list/shopify-seo/new-york-city/",
      publisher: "Semrush Agency Partners",
      captured: "2026-09-04",
      reviewAfterDays: 90,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // What changed in search this year, with what each shift means for a store.
  // Every row sourced and dated. Nobody in this SERP has anything like it, and
  // it is the evidence base for the whole "rankings aren't the product" case.
  asset: {
    title: "What changed in search this year, and what it costs you",
    intro:
      "Five measured shifts from the last six months. If your SEO agency hasn't raised any of these with you, that's worth a conversation.",
    renderer: "model",
    method: {
      captured: "2026-09-04",
      window: "measurements published March to July 2026",
      howGathered:
        "Every figure here is somebody else's measurement, not ours. We pulled them from published research and named the provider on each row so you can check any of them in a minute.\n\nTwo honest limits. These are US-wide numbers across all search, not ecommerce alone, so your own category could be better or worse than the average. And they measure clicks, not orders. So the last column says what each one tends to mean for a store, rather than pretending to turn it into a figure for you.",
    },
    columns: ["What was measured", "The change", "What it means for your store"],
    rows: [
      {
        label: "Share of clicks going to organic results",
        cells: ["44.9% to 40%", "The same position sends fewer people"],
        note: "March to June 2026, Datos and SparkToro. A five-point drop in a quarter. If your traffic is flat this year, that may be you standing still rather than slipping.",
      },
      {
        label: "Clicks Google kept in its own properties",
        cells: ["14.8% to 17.1%", "Fewer clicks leave the results page at all"],
        note: "March to Q2 2026. Shopping tabs, maps, AI answers. That traffic isn't going to a competitor, it isn't going anywhere.",
      },
      {
        label: "Clicks when an AI summary is shown",
        cells: ["8% vs 15%", "Roughly half, on searches that trigger one"],
        note: "Pew Research. This is the one that matters most for informational terms, which is exactly where most agencies aim your blog budget.",
      },
      {
        label: "Click-through on top-ranking results with AI Overviews",
        cells: ["down to 58%", "Position one isn't what it was"],
        note: "Ahrefs. Worth holding next to any proposal that promises you a number one spot as though the spot is the outcome.",
      },
      {
        label: "Publisher referral traffic across 2025",
        cells: ["down to 25%", "The trend didn't start this year"],
        note: "Digital Content Next. Publishers felt it first because they live on informational search. Stores are further down the same road.",
      },
    ],
    derived:
      "None of this means organic is finished. It means the terms worth winning have narrowed, and they've narrowed toward the ones where somebody is actually trying to buy something. Broad informational content is where most of your SEO budget probably goes, and it's where the click loss is worst. Product and category terms, comparison searches, the things people type with their card already out. Those still convert. They're also harder to write a report about, because there are fewer of them.",
    derivedList: {
      title: "Ask your current agency these three things",
      items: [
        "Of the terms you've moved us up on this year, how many sent us an order last month? Not sessions. Orders.",
        "Which of our target terms now show an AI summary, and what did you change when they started to?",
        "If our rankings stayed exactly where they are for the next six months, what would happen to revenue, and why?",
      ],
    },
    reviewAfterDays: 90,
  },

  // ── Services ──────────────────────────────────────────────────────────
  // The accordion rather than the discipline rows, because this keyword names
  // the service: the reader has chosen and wants scope. All three assigned
  // secondaries live here, one per item. Platform-specific throughout, per the
  // cannibalisation guardrail at the top of this file.
  servicesList: {
    label: "What the work is",
    heading: "Six things we actually do, and what each one is for",
    intro:
      "You've probably been sold content before. Most of what caps a Shopify store is structural, and we'd rather fix that than write around it.",
    ctaLabel: "Get in touch with us",
    items: [
      {
        title: "What a Shopify SEO company NYC brands hire should look at first",
        body:
          "Your collections. On Shopify they've got the best chance of ranking for what people actually search. On most stores they're an afterthought. No copy, thin titles, and tag pages quietly generating dozens of near-identical URLs that compete with each other. A Shopify SEO company NYC founders keep should be showing you that map in week one, before anyone writes a blog post. See [link:/services/shopify-seo-agency|Shopify SEO].",
      },
      {
        title: "Shopify SEO NYC stores need on the product page",
        body:
          "Product pages are where the money is. They're also where the thinnest copy sits, because it came from the manufacturer and so did everyone else's. We rewrite for what buyers type, fix how your variants generate URLs, and get the structured data right so your listings show reviews and price. Shopify SEO NYC brands buy is too often blog-first. This is the part that pays.",
      },
      {
        title: "Where Shopify SEO experts NYC brands trust spend the technical time",
        body:
          "Speed, crawl waste and the app stack, in that order. Every app you install adds weight to pages nobody asked it to touch, and Shopify's theme system makes that easy to miss. Shopify SEO experts NYC stores rely on should be able to name the three apps costing you the most and show you the measurement. See [link:/services/shopify-speed-optimization|speed optimization].",
      },
      {
        title: "Content that's aimed at buyers, not at volume",
        body:
          "Less of it than you've been sold, and different. Comparison pages, buying guides for your own categories, and the questions people ask right before they order. We'd rather write six pages that catch somebody with their card out than sixty that catch somebody reading.",
      },
      {
        title: "Migrations without losing what you've built",
        body:
          "Replatforming is where hard-won rankings die. Usually it's a redirect map somebody rushed. We map every one of your URLs, carry the metadata across, and watch the index daily for the first month. Capelli Sports kept 95% of its SEO equity through a full move. See [link:/services/migration|Shopify migration].",
      },
      {
        title: "AI search, honestly",
        body:
          "Being cited in AI answers is real, and you'd want it. Nobody can reliably sell it as a deliverable yet. What helps is what always helped. Clear answers to specific questions, structured data, and being the source other people cite. Anyone quoting you a fixed price to rank in AI overviews is guessing. That includes us, if we ever do.",
      },
    ],
  },

  // ── Numbered process ──────────────────────────────────────────────────
  // Borrowed from the SERP: every page ranking for this term walks the buyer
  // through a method. For a reader who has bought SEO once and got a report,
  // the sequence in advance is the reassurance that matters.
  engagement: {
    heading: "What actually happens, month by month",
    intro:
      "No twelve-month lock-in and no reporting until there's something to report. If month three looks wrong to you, leave.",
    steps: [
      {
        week: "Weeks 1 to 2",
        title: "Find out what the traffic is worth",
        what:
          "We map what you rank for now, what it earns, and which of your terms have AI summaries sitting on them. You get that whether or not you carry on. Plenty of stores find out here that their problem is conversion, not traffic.",
      },
      {
        week: "Weeks 3 to 6",
        title: "Fix the store, not the reporting",
        what:
          "Collection and tag architecture, duplicate URLs, product page structure, and whatever the app stack is costing in speed. This is the unglamorous stretch and it's where most of the eventual gain is decided.",
      },
      {
        week: "Weeks 7 to 12",
        title: "Go after terms that still send people",
        what:
          "Category and comparison pages aimed at buyers rather than readers. We write fewer pages than you're used to being sold, and we tell you which ones we expect to do nothing.",
      },
      {
        week: "Month 4 onward",
        title: "Report on orders",
        what:
          "Sessions from search, orders from those sessions, revenue. Rankings appear as a diagnostic. If organic sessions rise and orders don't, we say so on the call rather than putting a nicer chart in the deck.",
      },
    ],
  },

  // ── Client quotes ─────────────────────────────────────────────────────
  // Disjoint from the proof grid: GeoPageTemplate renders both.
  results: {
    heading: "Three owners, three numbers, and where they came from",
    intro:
      "Every number opens into the case study it came from, so you can check it.",
    slugs: ["john-hardy-shopify-plus-migration", "wild-shopify-plus-subscriptions", "mouldings-one-shopify-b2b-portal"],
    headlines: {
      "john-hardy-shopify-plus-migration":
        "{brand} lifted conversion 71% after the catalog was rebuilt around how people browse it",
      "wild-shopify-plus-subscriptions": "{brand} passed 80,000 monthly subscribers on a rebuilt subscription flow",
      "mouldings-one-shopify-b2b-portal": "{brand} grew B2B revenue 50% on a trade portal built alongside the direct store",
    },
  },

  // ── How we work ───────────────────────────────────────────────────────
  // Rewritten again rather than carried across from #10 and #11: same four
  // commitments, different sentences, because check-shingles reads all three
  // New York pages against each other and section 5.7 deletes anything that
  // could move between them.
  howWeWork: {
    heading: "What we hold ourselves to",
    intro: "Where an agency sits matters less than whether you can get hold of them.",
    items: [
      {
        title: "No twelve-month lock-in",
        body:
          "SEO contracts are long because agencies know results are slow, which quietly removes their reason to hurry. Ours run month to month after the first quarter. If we're not earning it, you should be able to leave without a lawyer.",
      },
      {
        title: "You keep the account access",
        body:
          "Search Console, analytics, the tracking setup, all of it in your name from the start. We've picked up too many stores where the last agency owned the data and the handover was a spreadsheet. Nothing here depends on us being the only ones who can see it.",
      },
      {
        title: "The person doing the work is on the call",
        body:
          "Not an account manager reading out someone else's findings. Whoever went through your collections explains what they found and can answer why, in a channel you can scroll back through.",
      },
      {
        title: "We'll tell you when it isn't the answer",
        body:
          "If your store converts badly, more traffic makes the problem worse and more expensive. Plenty of the audits we run end with us recommending conversion work we'd charge less for, or nothing at all.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  whatWeDoAboutIt:
    "Pricing first, since nobody else on this search will tell you. Ongoing work is a monthly retainer sized to your store and your catalog, and a one-off technical fix is quoted on its own if that's genuinely all you need.\n\nThe first month is diagnosis and it's fixed and small. You get the map of what you rank for, what it earns, and what's structurally in the way, and you keep that document whichever way you go.\n\nAfter that, month to month. We'd rather earn the next month than hold you to a year. And if your money is better spent on conversion or on ads this quarter, we'll say so and quote you nothing.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // Picked for SEO evidence specifically. No study here appears elsewhere on
  // this page.
  proofHeading: "Stores we've worked on, and what moved",
  proof: [
    {
      slug: "evie-lou-shopify-fashion-cro",
      vertical: "Womenswear",
      whatWasBuilt:
        "A mobile-first rebuild with product discovery reworked, and a retention program behind it",
      outcome: "+47% organic revenue year on year, +82% conversion rate",
      verified: true,
    },
    {
      slug: "capelli-sports-shopify-migration",
      vertical: "Sportswear",
      whatWasBuilt:
        "A full replatform onto Shopify with every URL mapped and the index watched daily through the cutover",
      outcome: "95% of SEO equity retained, +24% conversion rate, +38% site speed",
      verified: true,
    },
    {
      slug: "twillory-shopify-cro",
      vertical: "Menswear",
      whatWasBuilt:
        "A running test program across every interface component on the store, so the traffic already arriving converted harder",
      outcome: "$5.4M new annual revenue, $455k in the first 90 days",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  // Four. Section 6.4 wants one we don't fully beat: objection 1 concedes that
  // SEO may be the wrong spend entirely, objection 4 concedes our own record.
  objectionsHeading: "Questions worth asking before you sign anyone",
  objections: [
    {
      objection: "We tried SEO for a year and got nothing out of it.",
      answer:
        "That's the most common way brands arrive here, and sometimes SEO just wasn't the right spend for you.\n\nIf your store converts at half what it should, more traffic just costs more. If your category is owned end to end by marketplaces, the winnable terms may not be worth the retainer. We'd rather find that in the first month and tell you than take twelve months of fees to arrive at the same place. Some of the audits we run end with us recommending nothing.",
    },
    {
      objection: "Isn't Shopify supposed to be good at SEO out of the box?",
      answer:
        "It's fine out of the box, which isn't the same thing. The defaults are sensible and the platform won't hold you back on its own.\n\nWhat catches stores is what gets added. Tag pages generating dozens of near-duplicate URLs. Collections with no copy. Products carrying the manufacturer's description, same as every competitor. Apps loading on pages that don't need them. None of that is Shopify's fault and all of it is why your store ranks for your name and little else.",
    },
    {
      objection: "How do we know you won't just send us reports too?",
      answer:
        "You don't yet, which is why what we report on is written down here rather than described on a call. Sessions from search, orders from those sessions, revenue. Rankings as a diagnostic.\n\nThe structural version: no twelve-month lock-in, month to month after the first quarter, and every account stays in your name. If we start sending you charts instead of orders, leaving costs you a month. That's a weaker promise than a guarantee and it's the one we can actually keep.",
    },
    {
      objection: "A specialist SEO agency would go deeper than a full-service one.",
      answer:
        "On the SEO itself, quite possibly, and we're not going to pretend otherwise.\n\nHere's where it usually costs you. Most of what caps a store's search performance is how the store was built, and a specialist can only write recommendations about that. They hand you a document, you hand it to your developer, and it sits in a queue for a quarter. We build stores as well, so the fix happens instead of being described. If you've got a developer with capacity who acts fast, a specialist is a good answer.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // Nine, and no definition of the H1 term. Every page ranking for this keyword
  // opens by explaining what Shopify SEO is; this reader knows.
  faqHeading: "What brands ask before they decide",
  faqs: [
    {
      question: "How long before we see anything?",
      answer:
        "Technical fixes can move things in weeks. Anything competitive takes three to six months. Category terms in apparel or beauty can take longer. Anyone promising faster is either lucky or telling you what you want to hear.",
      unique: true,
    },
    {
      question: "How much does Shopify SEO cost?",
      answer:
        "A monthly retainer, sized to your store and your catalog. The first month is diagnosis, priced on its own and kept small. Across the directories covering this city, listed projects start anywhere from $1,000 to $5,000. So ask what's actually included before you compare two numbers.",
      unique: true,
    },
    {
      question: "Why does our store only rank for our own brand name?",
      answer:
        "It's almost always structure. Your collections have no copy on them. Your product pages carry the same description the maker handed everyone else. And your tag pages split authority across a dozen near-identical URLs. Your own name ranks because nobody else competes for it, so it's the one term your SEO never had to win.",
      unique: true,
    },
    {
      question: "Do we need blog content?",
      answer:
        "Less than you've been sold. Informational searches are where AI summaries have taken the most clicks, so a blog aimed at traffic volume is the worst-hit thing you could invest in right now. Comparison and buying-guide pages aimed at people about to purchase still work.",
      unique: true,
    },
    {
      question: "Will replatforming destroy our rankings?",
      answer:
        "It can, and it usually comes down to the redirect map. Every old URL needs a home, metadata has to travel, and somebody has to watch the index daily for the first month. Done properly you keep most of it: Capelli Sports retained 95% through a full move.",
      unique: true,
    },
    {
      question: "Can you do the SEO and the development?",
      answer:
        "Yes, and it's the arrangement we'd argue for. Most of what caps your search performance is how the store was built, so recommendations that need a developer sit in your queue. When the same team does both, the fix ships instead of being written up for you.",
      unique: false,
    },
    {
      question: "What happens in the first two weeks?",
      answer:
        "We map what you rank for, what it earns, and what's structurally in the way. You get that document either way. Plenty of stores discover here that the problem is conversion rather than traffic, which is a cheaper thing to fix.",
      unique: false,
    },
    {
      question: "Do you provide Shopify SEO in New York?",
      answer:
        "Yes, and we work remotely, which is how the whole team works. There's no office to visit and we don't claim one. You get a named person in a shared channel and cover through Eastern business hours.",
      unique: false,
    },
    {
      question: "Do you work with brands outside New York?",
      answer:
        "Yes, across the United States and further afield. Search doesn't care where you sit and neither do our rates. This page exists because stores here compete on national terms against national aggregators, not because we price by city.",
      unique: false,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Section 8.2: zero keyword targets. No primary, no secondary, no city name,
  // no platform name. Under 180 words above the form.
  conversion: {
    heading: "Send us the last report you were given",
    whatYouGet:
      "Tell us what you're ranking for and what it's earning. We'll look properly, free, and walk you through it.",
    whatWeWillTellYouNotToDo:
      "If your store converts badly, we'll tell you to fix that before you spend anything on traffic. More visitors to a leaky store is the most expensive advice in this industry.",
    responseExpectation:
      "Someone senior reads it and replies the same day or the next. It won't be a sales rep.",
    audit: {
      transition: "You already know which searches you should be winning and aren't.",
      offer: "Tell us which ones. We'll go and look, and you get back what we found:",
      parts: [
        "What you rank for now and what those positions are actually earning you.",
        "Why the terms that matter are going elsewhere, which is usually structural.",
        "What we'd fix first, and what we'd leave alone this year.",
      ],
      limit: "It's the diagnosis, not the work. Doing it is a separate number you can ignore.",
      noObligation:
        "No charge, no follow-up sequence, and the findings are yours whichever way you go.",
      turnaround:
        "Book any thirty-minute slot. Three business days later, whoever went through your store walks you through it live, so you can interrupt and push back. A document can't be argued with.",
      secondDoor: "Don't want the call? Leave your details and we'll send the same findings over.",
    },
  },

  // ── Sources ───────────────────────────────────────────────────────────
  // On-page citation markers are retired; nothing here renders. Provenance
  // record for the editorial pass and the review windows.
  //
  // ALL THREE ARE 90-DAY WINDOWS. This page's entire argument rests on figures
  // that are moving quarter to quarter. If they go stale the asset is wrong,
  // not merely dated, so re-pull before this ever publishes.
  sources: [
    {
      id: "emarketer-organic-click-share-2026",
      claim:
        "US organic click share 44.9% (March 2026) to 40% (June 2026); Google-owned property clicks 14.8% to 17.1% over the same period. Datos and SparkToro data, published by eMarketer 27 July 2026. Source of rows 1 and 2 of the asset and the opening of the gradient layer.",
      url: "https://www.emarketer.com/content/google-keeping-more-search-traffic-its-own-ecosystem",
      publisher: "eMarketer, reporting Datos and SparkToro",
      captured: "2026-09-04",
      reviewAfterDays: 90,
    },
    {
      id: "pew-ai-summary-clicks-2026",
      claim:
        "8% of searches showing an AI summary end in a click, against 15% without. Pew Research via eMarketer. Also from that article: Ahrefs on top-ranking CTR down as much as 58% with AI Overviews present, and Digital Content Next on publisher referral traffic down as much as 25% across 2025. Rows 3, 4 and 5 of the asset.",
      url: "https://www.emarketer.com/content/google-keeping-more-search-traffic-its-own-ecosystem",
      publisher: "Pew Research, via eMarketer",
      captured: "2026-09-04",
      reviewAfterDays: 90,
    },
    {
      id: "semrush-ny-shopify-seo-agencies-2026",
      claim:
        "31 Shopify SEO agencies listed for New York City, per-project budgets from $1,000 to $25,000+. Supports the price answer in FAQ 2 only.",
      url: "https://agencies.semrush.com/list/shopify-seo/new-york-city/",
      publisher: "Semrush Agency Partners",
      captured: "2026-09-04",
      reviewAfterDays: 90,
    },
    {
      id: "capelli-seo-equity",
      claim:
        "Capelli Sports retained 95% of SEO equity through a full Shopify replatform, alongside +24% conversion rate and +38% site speed. Read from that study's own results table in lib/case-studies.ts rather than restated, so it cannot drift from the case study page. Cited in the migrations service item, FAQ 5 and the proof grid.",
      url: "https://ecommwizards.com/case-studies/capelli-sports-shopify-migration",
      publisher: "Ecomm Wizards case study",
      captured: "2026-09-04",
      reviewAfterDays: 365,
    },
  ],

  wordCountTarget: [1300, 4100],
};

// ── OPEN ITEMS BLOCKING PUBLISH (not blocking the build) ─────────────────────
//
// Same four site-level items as pages #10 and #11: the eight-city footer, index
// remediation against the ~200 gate, the unconfirmed partner tier, and
// RelatedServices rendering after the form against Copy Standard 1.4.
//
// Page-specific:
//   - Every gradient fact carries a 90-day window and the argument depends on
//     them. Re-pull before publishing.
//   - Cannibalisation: Inventory v4.0 section 6c names
//     /services/shopify-seo-agency vs /services/ecommerce-seo-agency as the
//     highest-risk pair in the programme. This page sits under the first. The
//     monthly Search Console check should watch it from month one.
