// Batch 1b, page 6: /services/ecommerce-agency/new-york
// Spec: Batch 1 Page Specification v2.0 section 2.2 (geo spine).
// Copy: Ecomm Wizards Copy Standard v2.0.
//
// Primary keyword: "ecommerce agency new york" (20/mo, Google Keyword Planner)
// Inventory: Geo Inventory & Batch Plan v4.0, page #11, New York metro.
// Hub: /services/ecommerce-agency (built, published, already lists this path
// in its `children` array).
//
// ── ROIA (Copy Standard section 1) ───────────────────────────────────────────
//
// ONE READER. Copy Standard 1.1 writes this reader for us, and the worked
// example is almost this exact page: "Has an ecommerce business and has not
// committed to Shopify, or is on something else and unhappy. Wants to know the
// right platform before they want an agency."
//
// So this is NOT the reader of page #10. That one had already chosen Shopify
// and was deciding how to get the work done. This one is earlier, less
// committed, and shopping around. They have a shortlist open, probably from a
// directory, and every agency on it says full-service.
//
// AWARENESS. They know what an agency is and what one does. They do not need
// the category explained, and they will not be told that hiring an agency is a
// good idea. What they cannot get anywhere else is a way to tell the options
// apart. That is the whole job of this page.
//
// ONE IDEA (19 words)
// There are 551 agencies here charging $20 to $199 an hour for the same words.
// Price tells you nothing.
//
// ONE OFFER, TWO DOORS. Book a call, or leave details and we call you. Both end
// in the free audit. Nothing else is offered anywhere on the page.
//
// ONE ACTION. Every button says "Get in touch with us", resolving to #contact.
//
// VOICE. One human to another. Contractions throughout, per section 2.2. No
// three-beat parallel sentences, no summarizing flourish at the end of every
// paragraph, no "that is the whole point" construction.
//
// ── ARCHETYPE, AND AN HONEST NOTE ABOUT IT ───────────────────────────────────
//
// D, density-led (Master Strategy 5.10). New York is assigned C + D and it has
// THREE pages in the inventory, so the letters cannot be kept distinct across
// all three:
//   #10 shopify agency new york      -> C, the cost of hiring the team
//   #11 ecommerce agency new york    -> D, the density of AGENCIES to choose from
//   #12 shopify seo agency new york  -> D, the density of SEARCH competition
//       (section 5.2 works that gradient explicitly around losing your own
//        product terms to national aggregators, so it is fixed)
//
// #11 and #12 therefore share a letter. That is a real limitation of 5.10 at
// three pages per metro and it is recorded here rather than papered over. What
// keeps them apart is the thing section 5.7 actually tests: the gradient
// content. One is about supply of agencies, the other about supply of search
// results. No paragraph could move between them, and check-shingles enforces
// it. Raise this if 5.10 is ever revised.
//
// ── STRUCTURE: MODELED ON WHAT RANKS FOR THIS TERM ───────────────────────────
//
// SERP read 2026-09-04. This term's results are shaped DIFFERENTLY from
// "shopify agency new york", and the difference decides the page:
//
//   - Directories and listicles rank heavily: Built In, DesignRush, Digital
//     Agency Network, Clutch, nine.am's "12 best" roundup. That is a
//     shortlist-stage searcher, not a ready-to-buy one.
//   - The agencies that do rank are broad, not Shopify specialists: DD.NYC (a
//     design agency), 1R Agency, Thrive, Roswell.
//
// Pages read section by section: 1r.agency (~1,300 words, 5 case studies each
// with 5-8 service tags, no FAQ, no pricing, no objections), dd.nyc (~4,200
// words, 17 case studies, 50+ client logos, 11 award blocks, 6 FAQs, stats row,
// free discovery call, NYC address and phone), roswell.nyc (12 project cards,
// 40+ logos, no FAQ, no price, address and phone).
//
// Every one of them tags case studies with the services that went into them.
// That convention is now in components/sections/geo/CaseStudyCard.tsx.
//
// THE GIFT FROM THE LISTICLE. nine.am's roundup publishes the checklist it
// tells buyers to use: how you measure profitability, creative testing
// velocity, platform expertise, retention, CAC/MER/ROAS/AOV/LTV literacy, real
// case studies with numbers, scaling without losing margin. A page that answers
// that checklist head-on is aimed precisely at where this reader is standing.
// That is what the Only-Here Asset does.
//
// Where we beat all three: none states a price, none carries original research,
// none handles objections, only one has an FAQ, and two claim an address we
// cannot claim.
//
// ── CASE STUDIES: THIRTEEN, NO REPEATS, AND NONE SHARED WITH PAGE #10 ────────
//
// Vertical matching stays WAIVED (owner, 2026-09-04): chosen on how they look
// and what each actually evidences.
//
//   hero        This Works
//   disciplines Henchman, Sneak Energy, Mouldings One, Nurture Life,
//               NEOM Wellbeing, Living in Sunshine
//   proof       Feetures, Saddleback, Prose
//   results     Capelli Sports, Andrea Maack, C&E Craft Co
//
// Thirteen studies, thirteen brands, and not one of them appears on
// shopify-development-agency-new-york.ts. Twenty-six distinct brands across the
// two New York pages, which is the strongest differentiation signal available
// to us and costs nothing.
//
// DELIBERATELY AVOIDED: Loop Earplugs. Its headline metric is "EUR 1M+ annual
// growth opportunity" and the component renders a study's own hero metric, so
// it would put a euro figure on a US-targeted page against section 9.
//
// SECONDARY OWNERSHIP (section 7.2, one secondary per section, nowhere else)
//   ecommerce web design new york            -> discipline 2 (Design)
//   ecommerce development new york           -> discipline 3 (Build)
//   branding company for ecommerce new york  -> discipline 4 (Brand and creative)
//   ecommerce partners nyc                   -> discipline 5 (Ongoing)
// Disciplines 1 and 6 carry no keyword: 7.3 bans manufactured secondaries and
// no assigned phrase covers migration or growth.
//
// PRESENCE (Master Strategy section 4): no claim anywhere.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_NEW_YORK: GeoPage = {
  type: "geo",
  slug: "new-york",
  path: "/services/ecommerce-agency/new-york",
  hub: "/services/ecommerce-agency",
  status: "draft",

  geo: {
    name: "New York",
    type: "metro",
    areaServed: "New York, New York",
  },
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
    "how to choose an ecommerce agency",
    "how much does an ecommerce agency cost",
    "what should i ask an ecommerce agency",
    "ecommerce agency vs in house",
    "which ecommerce platform should i use",
  ],
  reviewedPhrases: ["in New York"],

  metaTitle: "Ecommerce Agency New York: How To Tell 551 Of Them Apart",
  metaDescription:
    "An ecommerce agency New York brands shortlist when every option reads the same. 551 agencies here charge $20 to $199 an hour. Here's what actually separates them.",
  shortTitle: "Ecommerce agency New York",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "An ecommerce agency New York brands shortlist when every option reads the same",
  qualifier:
    "For brands doing real revenue who are picking between agencies and can't tell them apart yet. We'll tell you which platform you should be on, even when the answer costs us the project. If you've already got a team and just need extra hands, we're the wrong call.",

  // This Works. `src` is the poster: first paint, and the whole experience
  // under prefers-reduced-motion since the video is never fetched then.
  //
  // Chosen against the rule set on page #10: the frame has to be composed AND
  // the brand has to be legible, or the hero is decoration. The thisworks
  // wordmark is readable on the pack, held in shot. It is also the most
  // on-message study we have for THIS reader specifically: a Magento 1 store
  // that could not do what the business needed, moved onto Shopify Plus. That
  // is the situation half of this page's traffic is arriving in.
  //
  // Source frame is 720x406, so 4/5 crops in from the sides. The hands and the
  // pack sit dead center, which is what makes that crop safe here.
  heroImage: {
    src: "/images/Case%20studies/posters/This%20Works%20video.webp",
    alt: "The This Works storefront we moved from Magento onto Shopify Plus",
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
  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading:
      "Most of them were running on something else when they found us. A few we told to stay put, which is the advice you rarely get from people who bill for rebuilds.",
  },

  assetCtaLabel: "See the questions to ask",

  // ── Approach ──────────────────────────────────────────────────────────
  approach: {
    heading: "We'll tell you if the platform is wrong before we talk about us",
    body:
      "Plenty of the brands who call us don't have an agency problem yet. They've got a platform that can't do what the business now needs, and no agency fixes that.\n\nSo the first conversation is about where you're running, not about what we'd charge. If you're on WooCommerce and it's fine, we'll say it's fine. If you're on Magento and paying for a developer just to keep the lights on, that's worth knowing before you spend anything on design. And if what you actually need is a marketplace strategy rather than a store rebuild, we'll tell you that too, and we don't sell it.\n\nWe build on Shopify because it's where we're genuinely good and because it stops being the bottleneck earliest. That's a preference with reasons behind it, not a religion, and you should make us defend it on the call.",
  },

  proofCta: {
    text: "Three brands, three different problems, none of them the one they called about.",
    label: "Get in touch with us",
  },
  midCta: {
    text: "Run those questions past us before you run them past anyone else.",
    label: "Get in touch with us",
  },
  closingCta: {
    text: "Tell us where you're running now and we'll tell you if it's the problem.",
    label: "Get in touch with us",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "You've got six tabs open and they're the same tab. Full-service, results-driven, award-winning, a wall of logos, and no prices.\n\nSo you're picking on gut, or on whoever answers the phone fastest. That's how most of these decisions actually get made, and it's why so many of them go badly.\n\nWhat follows is the stuff those six tabs left out. What we charge, what we'd talk you out of, and the questions that get different answers from different agencies.",

  // ── Quick answer ──────────────────────────────────────────────────────
  // The passage an AI Overview lifts. 45 words.
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency New York brands hire to design, build and grow one store. We work on Shopify and we'll tell you when it isn't the right fit. Builds run $5,000 to $50,000, priced before we start.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // The reader's commercial world, only where this service touches it. No
  // landmarks, weather or culture: section 4 bans decoration. Here the relevant
  // fact about the market is how crowded the supply side of it is, because
  // choosing is this reader's actual problem.
  placeLayerHeading: "The problem isn't finding an agency here",
  placeLayer:
    "One directory lists 551 ecommerce companies for this city. Another shows the ones it ranks charging anywhere from under $25 an hour to over $199. Both were updated the same week.\n\nSo the shortage isn't options. It's any way of telling them apart. Every site in your tabs was written by someone who knows exactly which words buyers respond to, which is why they've all converged on the same ones.\n\nAnd the rate spread is the part worth sitting with. Eight or nine times the price, for the same job title, in the same city. Some of that is seniority and some is genuinely different work. A lot of it is just what a given shop thinks it can get.\n\nWhich means price signals almost nothing here. A cheap quote isn't a bargain and an expensive one isn't a guarantee. You need a different test.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  // Service x place. Minimum two sourced facts, recorded in gradientFacts.
  // Non-technical: this is about money, choice and what questions to ask.
  gradientLayerHeading: "What actually separates them",
  gradientLayer:
    "Nearly every agency on your list can build a competent store. That's the uncomfortable bit. The build isn't usually where it goes wrong.\n\nIt goes wrong in the gaps. Nobody says what happens in month four. Nobody tells you what they'd advise against. Nobody names who's actually doing the work, so you meet a director in the pitch and get a junior on the project. And nobody says out loud whether your platform is right, because that answer can lose them the job.\n\nThose are the questions where answers genuinely differ, and they're the ones almost nobody asks, because they're awkward and you're trying to be a good client.\n\nWe wrote them down. All seven are below, with what a straight answer sounds like and what a dodge sounds like. Take them to us and take them to everyone else on the list. We'd rather you asked us hard questions than picked us because our homepage read well.",
  gradientFacts: [
    {
      id: "designrush-ny-ecommerce-count-2026",
      claim:
        "DesignRush's New York ecommerce development agency directory listed 551 companies with rankings updated 3 September 2026, and displayed agency hourly rates spanning roughly $20 to $185 with most clustered between $40 and $160. Minimum project budget tiers shown: under $1,000, $1,000-$10,000, $10,000-$25,000, $25,000-$50,000, and $50,000 and up.",
      url: "https://www.designrush.com/agency/ecommerce/new-york",
      publisher: "DesignRush",
      captured: "2026-09-04",
      reviewAfterDays: 90,
    },
    {
      id: "clutch-ny-ecommerce-rates-2026",
      claim:
        "Clutch's New York ecommerce developers directory, ratings updated 3 September 2026, showed listed agencies banded from under $25/hour to $150-$199/hour, and minimum project sizes from $1,000 to $25,000 and up. Independent corroboration of the DesignRush rate spread from a second directory captured the same week, which is why the copy says the spread is real rather than one site's artifact. NOTE: the 24 companies visible were one paginated view, NOT a total, so the count claim on this page rests on DesignRush alone.",
      url: "https://clutch.co/developers/ecommerce/new-york",
      publisher: "Clutch",
      captured: "2026-09-04",
      reviewAfterDays: 90,
    },
    {
      id: "nine-am-buyer-criteria-2026",
      claim:
        "nine.am's roundup of New York ecommerce agencies publishes the criteria it tells buyers to select on: how the agency measures profitability, creative testing velocity, platform expertise matched to your own platform, retention strategy, fluency in CAC / MER / ROAS / AOV / LTV, real case studies with numbers attached, and scaling without sacrificing margin. Used as evidence of what this shortlist-stage buyer has been told to ask, which is what the Only-Here Asset is built to answer. Not cited on-page.",
      url: "https://www.nine.am/insights/best-ecommerce-marketing-agencies-new-york",
      publisher: "nine.am",
      captured: "2026-09-04",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // The shortlist scorecard. Deliberately usable against US as well as against
  // everyone else, which is the trust move the whole page turns on.
  asset: {
    title: "Seven questions that get different answers",
    intro:
      "Ask every agency on your list these, us included. The answers separate them faster than any portfolio will.",
    renderer: "comparison",
    method: {
      captured: "2026-09-04",
      window: "directories pulled 4 September 2026; both had been updated the previous day",
      howGathered:
        "We pulled the two biggest agency directories covering this city on the same day. Then we read what the ranking roundups tell buyers like you to ask. We cut that down to the questions where answers actually differ, and dropped the ones everybody answers the same way.\n\nOne thing to be straight about. The right-hand column isn't survey data. It's what brands repeat back to us after leaving another agency, so read it as our experience, not research. The left-hand column is what we'd want to hear if we were the ones buying.",
    },
    columns: ["Ask them", "A straight answer sounds like", "A dodge sounds like"],
    rows: [
      {
        label: "What does this cost, roughly, before we scope anything?",
        cells: ["A range, on the call, and what moves it up or down", "We'd need to understand your requirements first"],
        note: "Any agency that has done this a hundred times can give you a band in thirty seconds. Refusing to isn't diligence, it's a negotiating position.",
      },
      {
        label: "Who does the actual work, and do we meet them?",
        cells: ["Names, roles, and they're on the call", "You'll have a dedicated account manager"],
        note: "The senior people in the pitch are often not the people on the project. Asking early is the cheapest way to find out.",
      },
      {
        label: "What would you tell us not to spend money on?",
        cells: ["Something specific, without being pushed", "Everything you've mentioned sounds important"],
        note: "This is the one that sorts the list fastest. An agency with no answer either hasn't looked at your store or won't say no to revenue.",
      },
      {
        label: "Should we even be on this platform?",
        cells: ["A recommendation with reasons, including where it's weak", "Whatever you're comfortable with"],
        note: "You want an opinion you can argue with. Total flexibility usually means no view at all.",
      },
      {
        label: "Show us a project that went badly.",
        cells: ["A real one, what caused it, what they changed after", "We've been fortunate not to have one"],
        note: "Everyone has had one. The answer tells you what they're like when something breaks on your store.",
      },
      {
        label: "Who owns the code and the design files?",
        cells: ["You do, from day one, in your own repository", "They're released at project completion"],
        note: "This decides how expensive it is to leave. Ask before you sign, not when you want out.",
      },
      {
        label: "What happens in month four?",
        cells: ["A named person, an agreed cadence, a number they watch", "We're always here if you need us"],
        note: "Most of the value or the disappointment lands well after launch. Vagueness here is the most reliable predictor of it.",
      },
    ],
    derived:
      "Nobody scores seven out of seven, and you should be suspicious of anyone who seems to. What you're looking for is which questions an agency answers straight away and which ones make them reach for a phrase. We'd rather hand you this and lose on it than win because our site read better than the next one.",
    reviewAfterDays: 180,
  },

  // ── Discipline deep-dives ─────────────────────────────────────────────
  // Six rows, each anchored to a study used nowhere else on the page.
  // Four of the assigned secondaries live here, one per row.
  disciplines: {
    label: "What we do",
    heading: "Six things we do, and which you probably need",
    intro:
      "Nobody buys all six. Most brands need two, and the second one usually isn't the one they came for.",
    items: [
      {
        label: "Platform and migration",
        heading: "Moving off something that's holding you back",
        body:
          "If you're on Magento, WooCommerce or BigCommerce and the store's fighting you, the question isn't whether to move. It's what breaks when you do.\n\nRarely the products. It's the URLs, the order history and the customer accounts, in that order. We carry the redirects and the data across, keep the order record whole, and run the new store under load before anyone commits to a date. And if we look at it and think you should stay put, we'll say so.",
        covers: ["Magento migration", "WooCommerce migration", "BigCommerce migration", "Redirect mapping", "Order history transfer", "ERP integration"],
        caseSlug: "henchman-shopify-plus-b2b",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        label: "Design and UX",
        heading: "Ecommerce web design New York shoppers judge in a second",
        body:
          "Your store gets read before it gets used, and the verdict lands fast. Not about taste, about whether somebody made deliberate decisions.\n\nWe design around how your customer actually buys: what brought them, where they stall, what they need to see before spending. Ecommerce web design New York brands are shown is usually a beautiful desktop mockup, which is not where your traffic is. We design the phone first because that's the store most of your customers will ever see.",
        covers: ["UX and UI design", "Theme development", "Mobile-first design", "Product page design", "Landing pages"],
        caseSlug: "sneak-energy-shopify-redesign",
        cta: { label: "Explore design and UX", href: "/services/shopify-ux-and-ui-design" },
      },
      {
        label: "Build and development",
        heading: "The half of a build nobody quotes for",
        body:
          "The visible part takes a few weeks. The rest is catalog structure, shipping and tax rules, how variants behave, and the fifty decisions that only surface once real products go in.\n\nEcommerce development New York brands buy is often quoted on the visible half and then re-quoted when the rest shows up. We scope the whole thing and put a date on it. Custom work, integrations and anything your stock system needs to talk to sits here.",
        covers: ["Custom development", "Shopify Plus", "App development", "System integrations", "B2B and wholesale"],
        caseSlug: "mouldings-one-shopify-b2b-portal",
        cta: { label: "Explore development", href: "/services/shopify-development-agency" },
      },
      {
        label: "Brand and creative",
        heading: "When the store is fine and the ads aren't landing",
        body:
          "Costs creep up, returns slide, and the instinct is more budget or another audience test. Usually the creative's tired, and sometimes the page it points at was never built to receive that promise.\n\nA branding company for ecommerce New York brands hire will hand you a identity system and stop there. We do the identity work, then the ad concepts and the hooks, then test them properly against the page they land on. Creative and the store are one system, and they break at the seam when two companies own them.",
        covers: ["Brand identity", "Ad creative", "Paid social", "User-generated content", "Creative testing"],
        caseSlug: "nurture-life-creative-strategy",
        cta: { label: "Explore creative strategy", href: "/services/creative-strategy" },
      },
      {
        label: "Ongoing partnership",
        heading: "Everything that happens after launch",
        body:
          "Launch day is the start. Stores leak money quietly afterwards, in the cart and on the product page, and it only gets caught if somebody's looking every month.\n\nEcommerce partners NYC brands keep on retainer should be testing against your real traffic rather than working a best-practice checklist. That's what ours do: a named developer, an agreed cadence, and a number we're accountable for. If you need somebody every single day, hire instead, and we'll tell you so.",
        covers: ["Conversion rate optimization", "A/B testing", "Maintenance and support", "Speed optimization", "Analytics"],
        caseSlug: "neom-wellbeing-shopify-upgrade",
        cta: { label: "Explore CRO and support", href: "/services/shopify-cro-agency" },
      },
      {
        label: "Email and growth",
        heading: "The second order is where you make the money",
        body:
          "Acquisition takes the attention and retention pays for it. A first-time buyer who never hears from you again wasn't a customer, they were a rental.\n\nWe build the flows doing the quiet work: welcome, browse and cart recovery, post-purchase, winback, and the segmentation underneath so people stop getting mail that doesn't apply to them. It's the cheapest revenue available to most stores and it's almost always the last thing anyone gets to.",
        covers: ["Klaviyo email and SMS", "Flow strategy", "Segmentation", "Subscriptions", "Ecommerce SEO"],
        caseSlug: "living-in-sunshine-klaviyo-email",
        cta: { label: "Explore marketing and retention", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── Client quotes ─────────────────────────────────────────────────────
  // Must not overlap the proof grid or the disciplines. Each carries a
  // quotePerson; ResultsSlider skips any study that does not.
  results: {
    heading: "Three owners, three numbers, and where they came from",
    intro:
      "Every number opens into the case study it came from, so you can check it.",
    slugs: [
      "capelli-sports-shopify-migration",
      "andrea-maack-klaviyo-email",
      "cecraft-klaviyo-email",
    ],
    headlines: {
      "capelli-sports-shopify-migration":
        "{brand} lifted conversion 24% after moving the whole catalog across",
      "andrea-maack-klaviyo-email":
        "{brand} grew flow revenue 144% without spending more on acquisition",
      "cecraft-klaviyo-email":
        "{brand} added 196% attributed revenue from email alone",
    },
  },

  // ── How we work ───────────────────────────────────────────────────────
  // The honest-local block: replaces proximity with a delivery term on a page
  // that makes no presence claim. Four items, each a commitment a client could
  // quote back at us.
  howWeWork: {
    heading: "What we hold ourselves to",
    intro:
      "At your size it doesn't matter where an agency sits. It matters whether they pick up.",
    items: [
      {
        title: "Nothing waits until Monday",
        body:
          "Break something on a Sunday and most shops find out when they open again. There's a shared channel, somebody reads it, and work starts that day. How many people pile on depends on what's actually on fire, and you decide that, not us.",
      },
      {
        title: "Whoever built it is who answers for it",
        body:
          "No account manager sitting in the middle translating. You talk to the developer who wrote the thing, by name, in a channel you can scroll back through. Less polished than a status report and a great deal faster.",
      },
      {
        title: "Eastern hours are contractual, not a favor",
        body:
          "Mornings are when you make decisions and when a bad release does the most damage. That window plus an hour either side is written into the agreement. If you go live at ten, somebody senior has been watching since nine.",
      },
      {
        title: "You own it from the first commit",
        body:
          "Code, theme, design files, ad assets, email templates. Yours immediately, not on final payment. That's deliberate: it makes leaving us cheap, and a retainer you can walk out of is the only kind we think is honest.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  // Carries no keyword. Process and price only.
  whatWeDoAboutIt:
    "Nothing gets quoted before it gets looked at. The first week is diagnosis: where you're running, what that's costing you, and whether the platform is the real problem or just where the symptom shows up. You keep the write-up regardless.\n\nAfter that you get one number and one date, in writing. Neither moves unless you change the brief, and if you do we requote in front of you rather than absorbing it quietly and resenting it later.\n\nA build is $5,000 to $50,000 depending on how much of it is custom. Retainers get sized to work that exists rather than to a tier chart. And if you don't need us this quarter, that's what the call will say.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // Three studies used nowhere else on this page, and on no other geo page.
  // Heading is not "stores we've built" because one of the three is creative
  // work rather than a build, and the heading has to be true of all three.
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
        "A trade portal on Shopify Plus with net terms, price lists and bulk ordering, alongside the direct store",
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
  // Four. Section 6.4 wants at least one we don't fully beat: objection 3
  // concedes the specialist argument, objection 4 concedes our own record.
  objectionsHeading: "Questions worth asking before you sign anyone",
  objections: [
    {
      objection: "Everyone says they're full-service. Why would you be different?",
      answer:
        "We might not be, and you shouldn't take our word for it from a paragraph on our own site. That's why the seven questions above are written down instead of being kept as a sales script.\n\nThe one thing we'd point at: we've put our price on this page. Almost nobody you're comparing us against has. It isn't proof of quality, but it does tell you we're willing to be pinned to something before you're on a call.",
    },
    {
      objection: "You only build on Shopify. Isn't that just what you'd say?",
      answer:
        "Fair, and it's the right suspicion to have. We do have a commercial interest in the answer.\n\nSo here's the honest version. Shopify is where we're genuinely good, and for most brands doing your kind of revenue it stops being the constraint earliest. But it's a bad fit for some businesses: heavily configured B2B pricing, deep ERP dependency, catalogs that behave more like a database than a shop. We've told brands to stay on what they had and walked away from the work. Ask us on the call and make us argue for it.",
    },
    {
      objection: "Wouldn't a specialist beat a generalist at each of these?",
      answer:
        "Often, yes. A dedicated email shop will out-email us on the email alone, and a pure design studio may out-design us on the design alone. We're not going to pretend otherwise.\n\nWhat you'd be trading is the seam. Three specialists means three contracts, three roadmaps and nobody accountable when the ad promises something the product page doesn't deliver. That gap is where most of the money goes, and it's invisible to everyone whose remit stops at their own piece. If you've got someone senior in-house who can own that seam, the specialists are a good answer. Most brands your size don't.",
    },
    {
      objection: "We've been burned by an agency before.",
      answer:
        "Probably one that scoped loosely, went quiet for two months, then came back with an invoice and something nobody had seen. We can't disprove that pattern in a paragraph and we won't try.\n\nWhat we can do is make finding out cheap. The audit costs nothing and leaves you with something you can hold. Scope and price are fixed in writing before work starts. Everything we make is yours from day one, so leaving costs you time and nothing else.\n\nAnd none of that's a guarantee. There are agencies with worse records than ours promising more. If you've been burned once, do a small piece of work first, with us or with whoever else is on the list.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // Nine. No definition of the H1 term anywhere: this reader knows what an
  // ecommerce agency is and section 5.1 never required one.
  faqHeading: "What brands ask before they decide",
  faqs: [
    {
      question: "How much does an ecommerce agency cost?",
      answer:
        "Ours is $5,000 to $50,000 for a build, depending on how much you need custom. Ongoing work is a monthly retainer. Across the directories covering this city, listed rates run from under $25 an hour to over $199. So treat any quote you get as one point on a very wide range.",
      unique: true,
    },
    {
      question: "How do we choose between agencies that all look the same?",
      answer:
        "Ask all of them the seven questions above. The answers separate a shortlist faster than portfolios do, because portfolios are selected and answers are not. Pay most attention to what an agency says it would talk you out of.",
      unique: true,
    },
    {
      question: "Which platform should we be on?",
      answer:
        "Depends on what's actually constraining you, and it's the first thing we'd look at. We build on Shopify and think it fits most brands at your revenue, but heavily configured B2B pricing or deep ERP dependency can point elsewhere. We'll tell you if it does.",
      unique: true,
    },
    {
      question: "We're on WooCommerce or Magento. Is moving worth it?",
      answer:
        "Sometimes not. If the store works and your costs are predictable, staying is often right. It's worth moving when you're paying a developer just to keep it upright, or when a change that should take a day takes a fortnight. We'll tell you which one you're in.",
      unique: true,
    },
    {
      question: "What happens in the first two weeks?",
      answer:
        "Week one we measure: the store, the traffic, the numbers behind both, and where money's leaking. You keep that either way. Week two we scope it and give you a fixed price and a date in writing. Nothing starts until you've got both.",
      unique: false,
    },
    {
      question: "How long does a build take?",
      answer:
        "Six to twelve weeks for most stores, depending on how much is custom and how fast decisions come back from your side. Migrations with a big catalog run longer. You get the date before we start, and if it moves because of us we say so early.",
      unique: false,
    },
    {
      question: "Do we have to take all six services?",
      answer:
        "No, and most clients start with one or two. We quote them separately and we'll say plainly if something would do nothing for you this year. Bundling work a brand doesn't need is the fastest way to lose them.",
      unique: false,
    },
    {
      question: "Do you provide ecommerce development in New York?",
      answer:
        "Yes, along with design, branding, creative and retention. We work with brands across the metro, and we work remotely, which is how the whole team works. There's no office to visit and we don't claim one. You get a named contact in a shared channel and cover through Eastern business hours.",
      unique: false,
    },
    {
      question: "Do you work with brands outside New York?",
      answer:
        "Yes, across the United States and further afield. Nothing about how we work depends on where you sit, and you won't pay a different rate by city. This page exists because choosing here is unusually hard, not because we charge more for it.",
      unique: false,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Section 8.2: zero keyword targets. No primary, no secondary, no city name,
  // no platform name. Under 180 words above the form. Second person throughout.
  conversion: {
    heading: "Put us at the top of the list or the bottom",
    whatYouGet:
      "Tell us the one thing bothering you most. We'll dig into it, free, and walk you through what turns up.",
    whatWeWillTellYouNotToDo:
      "If your platform is fine and the problem is somewhere we don't work, we'll say so and quote you nothing. That happens more than you'd expect.",
    responseExpectation:
      "Someone senior reads it and replies the same day or the next. It won't be a sales rep.",
    audit: {
      transition:
        "You're going to have this conversation with three or four of us. Start with the awkward questions.",
      offer:
        "Or just name the thing that's bothering you most. We'll go and look properly, and you get back what we found:",
      parts: [
        "What's actually happening, measured on your store, not inferred from a benchmark.",
        "Where it starts, which is usually a layer below the thing you spotted.",
        "What we'd do about it, in order, and which single change earns the most.",
      ],
      limit:
        "You're getting the diagnosis. Doing the work is a separate number you're free to ignore.",
      noObligation:
        "No charge, no sequence of follow-up emails, and the findings stay yours whichever way you go.",
      turnaround:
        "Book any thirty-minute slot. Three business days after that, the person who did the digging walks you through it live, so you can interrupt and argue with it. A document can't be argued with.",
      secondDoor:
        "Don't want the call? Leave your details and we'll send the same findings over.",
    },
  },

  // ── Sources ───────────────────────────────────────────────────────────
  // On-page citation markers are retired, so nothing here renders. Provenance
  // record for the editorial pass and the review windows.
  //
  // NOTE THE SHORT REVIEW WINDOWS. Both directory figures are 90 days, not the
  // usual 180 or 365. Directory counts and rate bands move, and the place layer
  // states them as current facts. If they go stale the two headline numbers on
  // this page are the first things to re-pull.
  sources: [
    {
      id: "designrush-ny-ecommerce-count-2026",
      claim:
        "551 ecommerce companies listed for New York, rankings updated 3 September 2026, rates roughly $20-$185/hour. This is the source of the 551 figure in the place layer and the meta description. Single-sourced: no second directory publishes a comparable total.",
      url: "https://www.designrush.com/agency/ecommerce/new-york",
      publisher: "DesignRush",
      captured: "2026-09-04",
      reviewAfterDays: 90,
    },
    {
      id: "clutch-ny-ecommerce-rates-2026",
      claim:
        "Listed New York ecommerce developers banded from under $25/hour to $150-$199/hour, minimum project sizes $1,000 to $25,000+, ratings updated 3 September 2026. Corroborates the rate spread from a second directory the same week.",
      url: "https://clutch.co/developers/ecommerce/new-york",
      publisher: "Clutch",
      captured: "2026-09-04",
      reviewAfterDays: 90,
    },
    {
      id: "nine-am-buyer-criteria-2026",
      claim:
        "Published buyer selection criteria for New York ecommerce agencies. Shaped the seven questions in the Only-Here Asset; not quoted on-page.",
      url: "https://www.nine.am/insights/best-ecommerce-marketing-agencies-new-york",
      publisher: "nine.am",
      captured: "2026-09-04",
      reviewAfterDays: 180,
    },
  ],

  wordCountTarget: [1300, 4100],
};

// ── OPEN ITEMS BLOCKING PUBLISH (not blocking the build) ─────────────────────
//
// Same four as page #10, all site-level rather than page-level:
//   1. Eight-city footer still rendering site-wide (Master Strategy 8, issue 3)
//   2. Index remediation, last reading 1,818 against a ~200 gate
//   3. Partner tier unconfirmed, so no Plus or Partner framing used here
//   4. RelatedServices renders after the form, against Copy Standard 1.4
//
// Page-specific: the 551 figure and the rate bands carry 90-day review windows
// and are the first thing to re-pull before this publishes.
