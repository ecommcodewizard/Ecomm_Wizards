// Batch 1, page 10: /services/ecommerce-agency/san-francisco
// Spec: Batch 1 Page Specification v2.0 — gradient §3 row 10, asset §4.10,
// case studies §5 row 10, FAQ §6.3 row 10, conversion §7. Build Manual card 10.
// Copy: docs/ecomm-wizards-page-standard.md, which supersedes
// docs/copy-standard.md v2.0 wherever the two disagree.
//
// Primary keyword: "ecommerce agency san francisco" (10/mo, Google Keyword
// Planner — GKP is the figure of record).
// Inventory: Geo Inventory & Batch Plan v4.0, California row 7.
// PRIMARY ONLY. Inventory §6b lists it among the thirteen pages with no usable
// secondary, so all differentiation is payload.
// Hub: /services/ecommerce-agency (page 1).
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// `ecommerce agency <city>`: he wants an ecommerce agency, and the PLATFORM is
// open. Nothing here assumes he is on Shopify. We say we build on Shopify and
// move stores onto it, and a platform FAQ says where he is now doesn't matter.
//
// STEP 02 vs SPEC §3 ROW 10, and how the page reconciles them. The spec says
// the competitor here is an open headcount req. The Page Standard says the
// reader has ALREADY decided to hire an agency and must never be talked into
// one. So the page doesn't ask him to choose. It arms him for the question
// somebody on his team will ask — "why not just hire?" — with public numbers.
// That keeps the gradient without arguing him back to a decision he's made.
//
// ── ARCHETYPE C+A, from Build Manual card 10 and Master §5.10 ───────────────
// C is cost-led, "hire in-house or hire us", real salary data, dated. A is
// vertical-led: Master §5.9 gives San Francisco DTC hardware, premium food and
// subscription goods. The place layer ties the two together: brands that sell
// products, hiring from a pool priced by software companies.
//
// SHARES A HUB with pages 5 (LA), 7 (San Diego), New York, Austin and Dallas,
// so check-shingles compares them directly. No sentence frame is carried from
// any of them; the platform FAQ was rewritten after it came out close to page
// 7's.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 16 September 2026 ─────────────────────────────────────────────────
//   nopStation listicle  ~1,900 words, ranks five agencies on Clutch ratings,
//                        states $15,000 to $150,000+ for a build
//   MOKU Digital         ~2,100 words, claims to be San Francisco-based,
//                        Shopify and WooCommerce, no price, no FAQ, no data
//   MageCloud            ~1,300 words, Magento, Shopify, Woo, no price, no FAQ
//   Digital Agency Network, Sortlist: directories
// Programmatic geo pages from Solo Media, Netalico and Axis Web Art surface on
// adjacent queries.
//
// THE GAP: none of them mentions hiring in-house, salaries, employer cost or
// time to hire. In the metro Master §5.10 marks cost-led, the question the
// reader's team will actually ask goes unanswered on every ranking page.
//
// ── THE ASSET INPUTS (§4.10 asks for two independent salary sources per role,
//    one a public aggregator and one a live sample of 10+ postings, plus an
//    employer burden percentage with its basis) ─────────────────────────────
//
// SOURCE ONE: BLS Occupational Employment and Wage Statistics, May 2025,
// San Francisco-Oakland-Fremont, CA MSA. Rendered from data.bls.gov on 16
// September 2026 (bls.gov redirects non-browser clients to its index).
//   Web Developers (15-1254)                      25th $115,170  median $152,450  75th $179,950
//   Web and Digital Interface Designers (15-1255) 25th $110,100  median $163,810  75th $211,120
//   Marketing Managers (11-2021)                  25th $174,750  median $220,480  75th $309,110
// MAPPING CAVEATS, stated on the page: BLS has no "Shopify developer" code
// (web developers is the closest) and no "ecommerce manager" code (marketing
// managers is the closest and runs high).
//
// SOURCE TWO: live postings. California Labor Code §432.3(c)(3) requires an
// employer with 15 or more employees to include a pay scale in any job
// posting, defined in (m)(1) as a good-faith estimate of the range. LinkedIn's
// public job API, Bay Area, 30-day window, six phrasings per role, three
// result pages each; each posting then opened for its base pay range. Kept
// only postings with a stated annual range, a matching title and a Bay Area
// location, ONE PER EMPLOYER PER ROLE so no single employer's many listings
// set the median. Dated 18 August to 16 September 2026.
//   Shopify developer   20 employers, median of range midpoints $181,250
//   Ecommerce manager    4 employers, median $179,550
//   Ecommerce designer  20 employers, median $174,750
// 44 postings. ONE EXCLUSION, stated: OpenAI's "Head of Marketplace" matched
// the title filter on the word marketplace but isn't an ecommerce manager
// role. Hourly contract postings were also excluded.
// NO posting in the window was titled Shopify developer with a stated range,
// so that row is front-end engineer roles, and the page says so. 17 of the 20
// front-end employers sell software or services rather than a physical product
// (the three that don't: Walmart, Scout Motors, MrBeast). That count is the
// place-layer fact. So is the spread: 18 of the 44 postings name a city other
// than San Francisco (Mountain View 4, Sunnyvale 3, San Jose 2, San Mateo 2,
// one each elsewhere). Added 2026-09-16 after the owner's Semrush export showed
// ranking pages naming nearby cities; these are named because the data sits
// there, never as a presence claim, and the sentence avoids "in {City}".
//
// A consumer-product-only view was run as well (9 to 10 postings). It was
// dropped rather than used, because deciding which employers count takes a
// judgment call, and the full sample doesn't need one.
//
// EMPLOYER COST: BLS Employer Costs for Employee Compensation, June 2026,
// released 9 September 2026, Table 8, private industry, San Jose-San
// Francisco-Oakland CSA: total compensation $75.12 an hour, wages $50.83 =
// 67.7%, benefits $24.29 = 32.3%. Multiplier 75.12 / 50.83 = 1.4779, i.e.
// +47.8% on wages. A regional figure rather than a national one.
//
// LOADED COST, and the design choice that keeps the model honest: for each
// role we take the LOWER of the BLS median and the posting median, so
// in-house is as cheap as the evidence allows and the comparison can't be
// accused of flattering us.
//   developer  $152,450 (BLS)      x 1.4779 = $225,301  shown $225,300
//   manager    $179,550 (postings) x 1.4779 = $265,352  shown $265,400
//   designer   $163,810 (BLS)      x 1.4779 = $242,090  shown $242,100
//   total shown $732,800, the sum of the displayed figures (exact $732,743)
//
// TIME TO HIRE: SHRM, "The State of Recruiting 2025", 20 October 2025, 2,300+
// members: median time-to-fill, requisition to offer acceptance, is "roughly a
// month and a half" for executive and nonexecutive roles alike. Quoted in
// those words; no day count is invented from it.
//
// PLANNING FIGURES, labelled as ours on the page, never as measurements:
// recruiter fee 20% of first-year salary, and three months at about half
// output while a hire ramps. Both only appear in vendor blogs, not primary
// sources, so the page tells the reader to substitute their own. Same
// treatment page 8 gave its churn assumption.
//
// THE RETAINER: $3,000 to $15,000 a month is the band this site already
// publishes (page 6 for retainers; the CRO page publishes $3,000 to $8,000).
// Builds $5,000 to $50,000, as every ecommerce-agency geo page states. No new
// price is introduced here.
//
// ── TWO DEVIATIONS FROM SPEC §4.10, both deliberate ─────────────────────────
// 1. BREAK-EVEN BY WORKLOAD, NOT REVENUE. §4.10 asks for a break-even revenue
//    point. A revenue break-even needs a work-per-revenue ratio that no source
//    publishes, so it would have to be invented. What decides it — and what
//    the data supports — is how many weeks a year each seat is really busy.
//    §7's page-10 line ("above a stated revenue point, hire") becomes "if the
//    role would be busy every week of the year, hire" for the same reason.
// 2. NO TOOLING NUMBER. §4.10 lists tooling and licences. They're named as
//    real but small, with no figure, rather than sourced to one vendor's
//    pricing page and presented as a market cost.
//
// ── STEP 04 #1, NEVER ARGUE AGAINST WHAT WE SELL ────────────────────────────
// §4.10 requires "Hire in-house if…" and "the point where we lose the
// argument". Kept, narrow, and consistent with page 8's "When we say don't
// move": three specific conditions, and the conversion line tells a reader
// with every-week work to hire for that work and use us around it.
//
// ── ROIA (Step 03) ──────────────────────────────────────────────────────────
// ONE READER. Owns the store, 28 to 45, $10-50M, already decided on an agency,
// platform undecided.
// ONE IDEA (16 words): A salary pays for every week of the year. Most
// ecommerce work doesn't need every week.
// ONE OFFER, TWO DOORS, ONE ACTION: every button says "Get in touch with us"
// and points at #contact.
//
// ── KEYWORD PLACEMENT (Step 09) ─────────────────────────────────────────────
// Shapes varied: h1, "brands bring in" (quick answer), "retainer" (disciplines
// intro), "shortlist" (asset), "quote" (what it costs), "pitch" (objection),
// "brands hire" (price FAQ), plus the FAQ block's generated H2. ZERO keywords
// in the conversion block, and no city name in it.
//
// ── CASE STUDIES, spec §5 row 10 ────────────────────────────────────────────
// §5 asks for subscription commerce, DTC hardware and premium food or coffee.
//   hero image   Loop Earplugs
//   disciplines  Everlast, Dryrobe, Loop Earplugs, Wild
//   proof        Wild, Loop Earplugs, Candy Kittens
// Wild carries subscription and is on no other ecommerce-agency geo page.
// Loop Earplugs stands in for DTC hardware: a physical product sold direct,
// the nearest the corpus has, and never used in a proof block before. Candy
// Kittens carries premium food; every food study in the corpus is already on
// a same-hub page, and this one (Austin) was the least exposed. Outcomes use
// Loop's measured test results, not its "€1M+ growth opportunity" figure,
// which is a projection.
//
// PRESENCE (Master §4): no claim anywhere. REVIEW FLAG: 365 days, and Build
// Manual card 10 makes the annual refresh mandatory: a two-year-old salary
// table is worse than none. Re-run the BLS pulls and the posting sample by
// 16 September 2027.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_SAN_FRANCISCO: GeoPage = {
  type: "geo",
  slug: "san-francisco",
  path: "/services/ecommerce-agency/san-francisco",
  hub: "/services/ecommerce-agency",
  status: "published",

  geo: {
    name: "San Francisco",
    type: "metro",
    areaServed: "San Francisco, California",
  },
  archetype: ["C", "A"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency san francisco",
  // Primary-only. Inventory v4.0, California #7: "No usable secondary exists."
  secondaryKeywords: [],
  faqKeywords: [
    "who owns the store code",
    "documentation handed over",
    "what happens to the engagement when we hire in-house",
    "ecommerce agency cost san francisco",
  ],
  reviewedPhrases: ["in San Francisco"],

  metaTitle: "Ecommerce Agency San Francisco | Design, Build, Growth Team",
  metaDescription:
    "An ecommerce agency San Francisco brands bring in for design, build and growth. See what three in-house hires really cost before posting a single role.",
  shortTitle: "Ecommerce agency San Francisco",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Owner's pick, 2026-09-16, replacing "the design, build and growth team you
  // don't have to hire". That one assumed he was about to hire, and it was the
  // only H1 in the batch not in the "keyword, we…" shape. This names all three
  // services and gives the why-us (no added headcount) without presuming his
  // plans or his platform.
  h1: "Ecommerce agency San Francisco, we design, build and grow your store without adding headcount",
  qualifier:
    "Design, build, CRO and growth work, billed against your scope rather than a salary. Buy one kind of work or all four, with the price and start date agreed in writing first.",

  heroImage: {
    src: "/images/Case%20studies/posters/Loop%20Earplugs%20video.webp",
    alt: "A landing page we built and tested for Loop Earplugs",
    video: "/images/Case%20studies/Loop%20Earplugs%20video.mp4",
    aspect: "4 / 5",
  },

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years on the platform" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading:
      "Subscription brands, consumer products and premium food, among others.",
  },

  assetCtaLabel: "See the in-house cost model",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Bring in an agency and somebody on your team will ask the obvious question: why not just hire?\n\nIt's a fair one, because a hire is yours, learns the brand and never sends an invoice. But a salary runs every week of the year, and most store work comes in bursts.\n\nSo here are the numbers for that conversation, from public sources, with the parts people leave out put back in.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency San Francisco brands bring in for design, build, CRO and ongoing growth. We build on Shopify and move stores onto it. You pay for the work you use, not for a seat that runs all year.",

  // ── Block 3: Place layer. Archetype A, the vertical ───────────────────
  placeLayerHeading: "Brands here hire from the same pool as software companies",
  placeLayer:
    "Subscription goods, DTC hardware, premium food. Brands here sell things you can hold, but they hire in a software town.\n\nSo the developer you want is weighing your offer against a software company's. In our sample of Bay Area front-end postings from the last month, 17 of the 20 employers sold software or services, not products. Across all 44 postings we sampled, 18 were outside the city, from Mountain View, Sunnyvale and San Jose to San Mateo and Oakland.\n\nThat's who sets the price of the person you'd hire, and you'd pay it for work that often comes in waves.",

  // ── Block 4: Gradient layer. Archetype C, the cost ────────────────────
  gradientLayerHeading: "An open role costs about half as much again as the salary on it",
  gradientLayer:
    "**The middle half of web developers in the Bay Area earn $115,170 to $179,950.** That's the government's May 2025 wage survey for the metro. Web and interface designers run $110,100 to $211,120.\n\nThat's the figure on your offer letter, and it isn't your cost.\n\n**Across private employers in the region, wages are 67.7% of what a worker costs.** The Bureau of Labor Statistics measured that for June 2026. Benefits and required employer taxes make up the rest, so every $1 of salary costs about $1.48.\n\n**Then there's the wait.** SHRM's 2025 benchmark puts the usual time from opening a role to an accepted offer at roughly a month and a half. The start date comes after that, and so does the learning curve.\n\nNone of that makes a hire wrong, but it makes the real number bigger than the salary, and that's the one to compare.",
  gradientFacts: [
    {
      id: "bls-oews-sf-may-2025",
      claim:
        "U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2025, San Francisco-Oakland-Fremont, CA metropolitan area, cross-industry. Web Developers (15-1254): employment 1,420; annual 10th percentile $80,190, 25th $115,170, median $152,450, 75th $179,950, 90th $216,060; mean $151,450. Web and Digital Interface Designers (15-1255): employment 6,630; 10th $81,120, 25th $110,100, median $163,810, 75th $211,120, 90th $230,700; mean $161,710. Marketing Managers (11-2021): employment 11,170; 10th $133,990, 25th $174,750, median $220,480, 75th $309,110, 90th $333,430; mean $235,920. BLS has no Shopify developer or ecommerce manager occupation code; web developers and marketing managers are the nearest, and the page states both mappings. Rendered from data.bls.gov on 16 September 2026 because bls.gov redirects automated clients.",
      url: "https://data.bls.gov/oes/#/area/0041860/2025",
      publisher: "U.S. Bureau of Labor Statistics, OEWS May 2025",
      captured: "2026-09-16",
      reviewAfterDays: 365,
    },
    {
      id: "bls-ecec-june-2026-sf-csa",
      claim:
        "U.S. Bureau of Labor Statistics, Employer Costs for Employee Compensation, June 2026, released 9 September 2026 (USDL-26-1494), Table 8, private industry workers, San Jose-San Francisco-Oakland, CA CSA: total compensation $75.12 per hour worked, wages and salaries $50.83 (67.7% of total), total benefits $24.29 (32.3%). The page's multiplier is total compensation divided by wages, 75.12 / 50.83 = 1.4779, stated as about $1.48 per $1 of salary. For comparison, the national private-industry figure for management, professional and related occupations in Table 4 is wages 68.5% of total compensation.",
      url: "https://www.bls.gov/news.release/ecec.t08.htm",
      publisher: "U.S. Bureau of Labor Statistics, Employer Costs for Employee Compensation",
      captured: "2026-09-16",
      reviewAfterDays: 365,
    },
    {
      id: "shrm-state-of-recruiting-2025",
      claim:
        "SHRM, 'The State of Recruiting 2025: Insights to Maximize Recruitment from SHRM's New Benchmarking Report', published 20 October 2025, drawing on more than 2,300 SHRM members: median time-to-fill, defined as the period from job requisition to offer acceptance, 'is roughly a month and a half for both executive and nonexecutive positions'. The page quotes that wording and does not convert it to a day count.",
      url: "https://www.shrm.org/executive-network/insights/people-strategy/state-of-recruiting-2025-insights-to-maximize-recruitment",
      publisher: "SHRM, Recruiting Benchmarking 2025",
      captured: "2026-09-16",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-bay-area-postings-2026",
      claim:
        "Original observation, 16 September 2026. LinkedIn's public job search, San Francisco Bay Area, postings from the last 30 days, six phrasings per role and three result pages each; every posting then opened and its stated base pay range read. Kept only postings with a stated annual range, a title matching the role and a Bay Area location, one per employer per role. 44 postings dated 18 August to 16 September 2026. Shopify developer: 20 employers, median of range midpoints $181,250; no posting was titled Shopify developer with a stated range, so these are front-end engineer roles. Ecommerce manager: 4 employers (Kinder's, PBTeen, The Clorox Company, Kendo Brands/Fenty), median $179,550. Ecommerce designer: 20 employers, median $174,750. Exclusions: OpenAI's Head of Marketplace, which matched the title filter but is not an ecommerce manager role, and hourly contract postings. Of the 20 front-end employers, 17 sell software or services; the three selling physical products are Walmart, Scout Motors and MrBeast. Locations across the 44: San Francisco 24, Mountain View 4, Sunnyvale 3, San Jose 2, San Mateo 2, 'San Francisco Bay Area' with no city 2, and one each in Santa Clara, Fremont, Walnut Creek, Oakland, Menlo Park, Palo Alto and Emeryville, so 18 name a city other than San Francisco. California Labor Code §432.3(c)(3) requires employers with 15 or more employees to include a good-faith pay scale in job postings, which is why ranges are available.",
      url: "https://www.ecommwizards.com/services/ecommerce-agency/san-francisco",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-09-16",
      reviewAfterDays: 365,
    },
    {
      id: "ca-labor-code-432-3",
      claim:
        "California Labor Code §432.3(c)(3): 'An employer with 15 or more employees shall include the pay scale for a position in any job posting.' §432.3(m)(1) defines pay scale as 'a good faith estimate of the salary or hourly wage range that the employer reasonably expects to pay for the position upon hire.' Section as amended by Stats. 2025, Ch. 468 (SB 642), effective 1 January 2026.",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=432.3",
      publisher: "California Legislative Information, Labor Code §432.3",
      captured: "2026-09-16",
      reviewAfterDays: 365,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // Renderer `model` per card 10. Role table (§4.10 block A) as rows one to
  // three, the team total beneath with the retainer in its note, the left-out costs
  // (block B) and the arithmetic as supporting blocks, and the "Hire in-house
  // if" list (block C) as the derived list.
  asset: {
    title: "What the smallest in-house team costs, against a retainer",
    intro:
      "Two independent salary sources for each role, one employer-cost figure, and the sum. We used the lower salary every time, so the model doesn't flatter us.",
    renderer: "model",
    method: {
      sampleSize: 44,
      window: "Bay Area postings with a stated pay range, dated 18 August to 16 September 2026",
      captured: "2026-09-16",
      howGathered:
        "Salaries come from two sources that don't depend on each other. The first is the Bureau of Labor Statistics wage survey for May 2025, Bay Area metro. The second is 44 live Bay Area job postings with a stated pay range, one per employer per role. California requires employers with 15 or more staff to show you a good-faith range. Employer cost is the BLS figure for June 2026, wider Bay Area. BLS has no ecommerce manager code, so that row uses marketing managers. No posting was titled Shopify developer, so that row uses front-end roles. One posting was left out because it wasn't an ecommerce role.",
    },
    columns: ["Role", "BLS, middle half of earners", "Postings, median of ranges", "Loaded yearly cost"],
    rows: [
      {
        label: "Shopify developer",
        cells: ["$115,170 to $179,950", "$181,250, 20 employers", "$225,300"],
        note: "BLS files this as web developers, median $152,450. No posting was titled Shopify developer, so the posting figure is front-end roles.",
      },
      {
        label: "Ecommerce manager",
        cells: ["$174,750 to $309,110", "$179,550, 4 employers", "$265,400"],
        note: "BLS has no ecommerce manager code. Marketing managers runs high, so the loaded cost uses the lower posting figure.",
      },
      {
        label: "Ecommerce designer",
        cells: ["$110,100 to $211,120", "$174,750, 20 employers", "$242,100"],
        note: "Web and interface designers, median $163,810. Product designers at software companies pull the posting figure up.",
      },
      {
        label: "The three seats together",
        cells: ["$536,740 at the medians", "$535,550 at the medians", "$732,800 a year"],
        note: "Loaded on the lower median for each role, before a recruiter's fee or the wait. A retainer for the same work runs $36,000 to $180,000 a year.",
      },
    ],
    derived:
      "Set the bottom row against a retainer. Three salaried seats cost about $732,800 a year before anyone is recruited, and a retainer across the same work runs $36,000 to $180,000.\n\nThat isn't a like-for-like fight, and it isn't meant to be. A salary buys every week, while a retainer buys the weeks you use. So what decides it is how many weeks each seat would really be busy.\n\nAnyone on your ecommerce agency San Francisco shortlist should run this against your own roadmap before they quote.",
    derivedList: {
      title: "Hire in-house when these are true",
      items: [
        "The work would keep one person busy every week of the year, not in bursts.",
        "Your store is the product itself, and what they learn has to stay inside the company.",
        "You already have someone senior to manage them and review their work.",
      ],
    },
    supportingBlocks: [
      {
        heading: "The costs that aren't on the offer letter",
        body:
          "**The wait.** Roughly a month and a half from opening a role to an accepted offer, in SHRM's 2025 benchmark, and notice periods come after that.\n\n**A recruiter, if you use one.** We plan on 20% of first-year salary. That's our assumption, not a measurement, so ask yours what they charge. On the developer above it's $30,490.\n\n**The learning curve.** We plan on three months at about half output while a new hire learns your setup, and that's our figure too, so use your own.\n\n**Laptops, software seats and licenses.** Real, but small next to the rest.\n\n**The seat emptying again.** When someone leaves, the search starts over, and the work waits for it.",
      },
      {
        heading: "How the loaded number is worked out",
        body:
          "**Salary times 1.48.** BLS found wages are 67.7% of total employer cost in the region, so each $1 of salary sits inside about $1.48 of cost.\n\n**The lower of two medians.** Each role has a government figure and a posting figure. We took whichever was lower, every time, so in-house looks as cheap as the evidence allows.\n\n**Swap in your own.** If your offer is $140,000, the loaded cost is about $207,000, because the multiplier stays the same at any salary.",
      },
    ],
    reviewAfterDays: 365,
  },

  // ── Disciplines ───────────────────────────────────────────────────────
  disciplines: {
    label: "What we do",
    heading: "Four kinds of work, bought as a scope rather than a salary",
    intro:
      "Take one of these or all four. An ecommerce agency San Francisco retainer should flex with the work, and every row below is a store that was already selling.",
    items: [
      {
        label: "Design and build",
        heading: "We design and build the store in your accounts, so nothing leaves when we do",
        covers: ["Store design", "Theme development", "Custom development", "Design systems", "Integrations"],
        imageAlt: "Everlast's storefront, redesigned on Shopify Plus",
        caseSlug: "everlast-shopify-plus-sports-redesign",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Replatforming",
        heading: "We move you onto Shopify when the platform you're on is what's slowing you down",
        covers: ["Platform migration", "Store consolidation", "Redirect mapping", "Data migration"],
        imageAlt: "Dryrobe's separate stores, consolidated into one Shopify Plus build",
        caseSlug: "dryrobe-shopify-plus-redesign",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "CRO and testing",
        heading: "We find what's costing you orders and prove the fix with a test first",
        covers: ["A/B testing", "Landing pages", "Checkout", "Analytics"],
        imageAlt: "A landing page we built and tested for Loop Earplugs",
        caseSlug: "loop-earplugs-shopify-landing-page-cro",
        cta: { label: "Explore CRO", href: "/services/shopify-cro-agency" },
      },
      {
        label: "Subscriptions and retention",
        heading: "We set up repeat orders so they keep working as your customer list grows",
        covers: ["Subscriptions", "Retention flows", "Customer portal", "Churn reporting"],
        imageAlt: "Wild's subscription storefront on Shopify Plus",
        caseSlug: "wild-shopify-plus-subscriptions",
        cta: { label: "Explore retention work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "What you get that a hire doesn't, and what you give up",
    intro:
      "Nobody from our team sits in your office, and a hire would, so here's what you get in exchange.",
    items: [
      {
        title: "Everything we build lives in your accounts",
        body:
          "Your repository, store, design files and app logins. A hire leaves with what's in their head. We leave the documentation beside the code.",
      },
      {
        title: "Four disciplines on one invoice",
        body:
          "Design, development, testing and retention, used as your work needs them. Nobody is paid to wait for the next project.",
      },
      {
        title: "The scope shrinks when your team grows",
        body:
          "When you do hire, their work comes out of our scope. You're paying for work, not a headcount.",
      },
      {
        title: "What you give up is the desk next to yours",
        body:
          "Nobody drops by, but you message the person doing the work directly, in a shared channel.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  whatWeDoAboutItHeading: "What a retainer costs, and where it starts",
  whatWeDoAboutIt:
    "It starts with a plan, not a retainer. We go through your roadmap and sort it into work that needs someone every week and work that comes in bursts.\n\nThe weekly work is your case for a hire, and we'll say so, while the bursts become a scope with a number and a date.\n\nA retainer is $3,000 to $15,000 a month, and builds are quoted separately at $5,000 to $50,000. Any ecommerce agency San Francisco quote should keep those two apart.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  proofHeading: "Three brands from the categories that sell here",
  proof: [
    {
      slug: "wild-shopify-plus-subscriptions",
      vertical: "Subscription commerce",
      whatWasBuilt: "A first Shopify store with its subscription engine built in from launch",
      outcome: "80K+ monthly subscribers at 12 months, -34% subscription churn",
      verified: true,
    },
    {
      slug: "loop-earplugs-shopify-landing-page-cro",
      vertical: "Consumer products sold direct",
      whatWasBuilt: "Landing pages built and A/B tested against revenue, not clicks",
      outcome: "+6.4% revenue in one test, +5.9% new-customer conversion in another",
      verified: true,
    },
    {
      slug: "candy-kittens-shopify-food-beverage-cro",
      vertical: "Premium confectionery",
      whatWasBuilt: "Conversion and gifting work on a store that already had its traffic",
      outcome: "+182% conversion rate, +$8.1M annual revenue",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  objectionsHeading: "What you're probably thinking",
  objections: [
    {
      objection: "A hire would learn our brand. An agency won't.",
      answer:
        "A good hire will, over months, and that's worth something real.\n\nBut the brand knowledge a store runs on is either written down or it leaves with the person. We work from your guidelines, your data and your team, and we write down what we learn.\n\nIf what matters can't be written down, that's a case for a hire, and it's on the list above.",
    },
    {
      objection: "We'll need someone full-time eventually. Why not now?",
      answer:
        "You might, and the model shows when: the seat pays off once it's busy every week.\n\nUntil then you'd be paying $225,300 a year for a developer between projects. Bring us in for the bursts, and hire the day the weekly work is really there.",
    },
    {
      objection: "An agency costs more per hour than a salary works out to.",
      answer:
        "Per hour, an agency can look dearer, and every ecommerce agency San Francisco pitch should let you check that.\n\nBut a salary isn't paid per hour of work. It's paid for every hour of the year, busy or not, plus about 48% on top and the weeks the seat sat empty.\n\nCompare what each costs per finished piece of work, because that's the number that decides it.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // The first three unique questions are fixed by spec §6.3 row 10. The office
  // question is §6.4, required on all seven geo pages.
  faqs: [
    {
      question: "Who owns the code, and where does it live?",
      answer:
        "You do, and it lives in your accounts from day one: your repository, your store and your app logins. Nothing runs on a system of ours that keeps you paying.",
      unique: true,
    },
    {
      question: "What documentation do we get?",
      answer:
        "Enough for your next hire to pick it up without us: what was built, why, how it's set up, and what to watch. It's handed over beside the code, not left in someone's inbox.",
      unique: true,
    },
    {
      question: "What happens to the engagement when we do hire?",
      answer:
        "When your in-house hire starts, their work comes out of our scope and your retainer comes down with it. We hand over what they need to get started. You can keep us for the bursts after that.",
      unique: true,
    },
    {
      question: "How much does an ecommerce agency San Francisco brands hire usually charge?",
      answer:
        "Ongoing work is $3,000 to $15,000 a month, and a build is $5,000 to $50,000, with the number agreed before anything starts. Set that against $732,800 a year for three loaded salaries, and ask how much of the work you'd really use.",
      unique: true,
    },
    {
      question: "Do we need to be on Shopify already?",
      answer:
        "No. Shopify is what we build on, so moving your store onto it is part of the work. Where you are now just decides where the plan starts.",
      unique: true,
    },
    {
      question: "Do you have an office we can visit?",
      answer:
        "No, though a hire would give you a desk to visit. We work remotely for brands across the US, and bring the cost model above instead, run on your numbers.",
      unique: true,
    },

    // Entity-shaped rather than problem-shaped: it answers the question the way
    // a search engine phrases it. Last on purpose, because a human reading top
    // to bottom wants the real answers first. Worded apart from the Los Angeles
    // and Orange County versions so no sentence frame repeats.
    {
      question: "Do you provide ecommerce development in San Francisco?",
      answer:
        "Yes, remotely, for brands across the Bay Area. Most of your work is design, build and testing, and none of it needs us in the room.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Step 09: zero keywords here, and no city name either. §7's page-10 "not to
  // do" line is expressed by workload, not revenue; see the header.
  conversion: {
    heading: "Send us the job description",
    whatYouGet:
      "Send the job description you were about to post. We'll tell you what that seat costs loaded, and which part of it we'd cover.",
    whatWeWillTellYouNotToDo:
      "If your role would be busy every week of the year, don't give the work to us. Hire the person, and use us for whatever comes in bursts around them.",
    responseExpectation:
      "Someone who scopes these replies inside a working day.",
    audit: {
      transition:
        "You already know which role you've been meaning to post.",
      offer:
        "Send it over. We'll run it through the model and hand you the findings:",
      parts: [
        "What the role costs loaded, with recruiting and the wait included.",
        "How many weeks a year that work would really fill.",
        "Which part a retainer would cover, and which part is a hire.",
      ],
      limit:
        "It stops at the numbers, and any work is quoted separately, so you can decline.",
      noObligation:
        "No charge, and the numbers are yours if you hire instead.",
    },
  },

  sources: [],

  // Owner's instruction carried from pages 6 to 9: below 2,500. Card 10 says
  // 1,300-1,700, which describes a bare spine without the trust bar, quick
  // answer, four discipline rows and a four-row model with two supporting
  // blocks.
  wordCountTarget: [2000, 2500],
};
