// Batch 1b, page 5: /services/shopify-development-agency/new-york
// Spec: Batch 1 Page Specification v2.0 section 2.2 (geo spine).
// Copy: Ecomm Wizards Copy Standard v2.0.
//
// Primary keyword: "shopify agency new york" (30/mo, Google Keyword Planner)
// Inventory: Geo Inventory & Batch Plan v4.0, page #10, New York metro.
// Hub: /services/shopify-development-agency (pre-existing, hand-built).
//
// ── ROIA (Copy Standard section 1) ───────────────────────────────────────────
//
// ONE READER. A Shopify brand owner in this market, already doing real revenue.
// They are shopping for an agency right now and have a shortlist open. What
// they have not settled is which service they are buying: some of them want the
// store redesigned, some want it built or rebuilt, some want the ads and the
// creative fixed. They are not researching the category.
//
// AWARENESS LEVEL, AND THE RULE THAT FALLS OUT OF IT (owner, 2026-09-04).
// Somebody typing this phrase already knows what a Shopify agency is and what
// one does. Explaining it insults them and loses them. So this page defines
// nothing, justifies nothing, and never argues that hiring an agency is a
// sensible idea. It assumes the decision to hire is made and helps them make
// the next one. Anything on this page that reads like education has to go.
// Removed under this rule: the "What is a Shopify agency?" FAQ, and a gradient
// opening that spent its first two sentences explaining what an agency is.
//
// ONE IDEA (18 words)
// Hiring the three people an agency already has costs $599,063 a year here,
// before anyone builds anything.
//
// ONE OFFER, TWO DOORS. Book a call, or leave details and we call you. Both end
// in the free audit. Nothing else is offered anywhere on the page.
//
// ONE ACTION. Every button says "Get in touch with us" and every one resolves
// to #contact. Section 1.4 wants one CTA verb used consistently.
//
// VOICE (owner, 2026-09-04). One human talking to another. Contractions
// throughout, per section 2.2, which the previous draft ignored almost
// completely and which was the single biggest reason it read as machine copy.
// Also stripped: the three-beat parallel sentence ("Some days X. Some days Y.
// Some days Z."), the "That is the whole point" construction, and the habit of
// closing every paragraph on a summarizing flourish. Humans do not talk in
// matched sets of three.
//
// ── STRUCTURE: MODELED ON THE RANKING PAGE ───────────────────────────────────
//
// Reference (owner-supplied): https://www.charleagency.com/shopify-agency-new-york/
// Read section by section 2026-09-04. What it does that matters: hero, client
// logos, case grid high up, then FIVE service deep-dives as alternating image +
// text rows each anchored by a named client project, then team, partners, FAQ,
// closing CTA. Roughly 3,500-4,000 words.
//
// Those deep-dives are the structural signal that says agency rather than
// service page, which is why components/sections/geo/DisciplineBlocks.tsx
// exists. Our version runs six rows, not five: creative strategy was missing
// and it is one of the three things this reader actually shops for.
//
// Where we beat it: it states no price, carries no original research, handles
// no objections, offers only "get in touch", and claims a New York phone number
// and address. We state the price, carry the hiring table, answer four
// objections, offer an audit with a named turnaround, and claim no presence.
//
// ── CASE STUDIES: THIRTEEN, NO REPEATS (owner, 2026-09-04) ───────────────────
//
// The vertical-matching rule in Master Strategy 5.8-5.9 is WAIVED for this page
// on the owner's instruction. Studies are chosen for how good they look and for
// what each one actually evidences, not for whether the client's category
// matches this metro. Recorded here so nobody "fixes" it back later.
//
// The binding rule instead: no study appears twice anywhere on the page.
//   hero        Everlast
//   disciplines ChloBo, Dryrobe, Evie Lou, Chilly's, VITHIT, Twillory
//   proof       Ronaldo Jewelry, Candy Kittens, John Hardy
//   results     111SKIN, Wild, Happy Mammoth
// Thirteen studies, thirteen brands. Check this list before changing any slug.
//
// SECONDARY OWNERSHIP (section 7.2, one secondary per section, nowhere else)
//   shopify design and development new york -> discipline 1 (Design and UX)
//   shopify website developers new york     -> discipline 2 (Build)
//   shopify experts new york                -> discipline 3 (SEO)
//   ongoing shopify maintenance new york    -> discipline 6 (CRO and support)
//   shopify agency vs freelancer new york   -> objection 2
// Disciplines 4 and 5 carry no keyword, correctly: 7.3 bans manufactured
// secondaries and no assigned phrase covers creative or retention.
//
// PRESENCE (Master Strategy section 4): no claim anywhere. The soft pattern in
// lib/geo/forbidden.ts matches "New York experts/developers/agency" with the
// city FIRST. Every assigned secondary puts the city last, so they pass, but
// the prose must never invert them.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const SHOPIFY_DEV_NEW_YORK: GeoPage = {
  type: "geo",
  slug: "new-york",
  path: "/services/shopify-development-agency/new-york",
  hub: "/services/shopify-development-agency",
  status: "draft",

  geo: {
    name: "New York",
    type: "metro",
    areaServed: "New York, New York",
  },
  // C, cost-led (Master Strategy 5.10). New York is C + D; D is reserved for
  // page #12, shopify seo agency new york, per section 5.2. Recorded so page
  // #11 takes neither.
  archetype: ["C"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "shopify agency new york",
  secondaryKeywords: [
    "shopify design and development new york",
    "shopify website developers new york",
    "shopify experts new york",
    "ongoing shopify maintenance new york",
    "shopify agency vs freelancer new york",
  ],
  faqKeywords: [
    "how much does a shopify agency cost",
    "shopify agency vs in house team",
    "how to choose a shopify agency",
    "shopify development in new york",
    "how long does a shopify build take",
  ],
  reviewedPhrases: ["in New York"],

  metaTitle: "Shopify Agency New York Brands Hire For Design, Build And Ads",
  metaDescription:
    "A Shopify agency New York brands hire to design, build and market the store. Hiring that team yourself runs $599,063 a year. Our builds are $5,000 to $50,000.",
  shortTitle: "Shopify agency New York",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // H1 carries the exact assigned primary as a string (7.1), sentence case (9),
  // and names three jobs rather than one because this reader has not chosen.
  h1: "A Shopify agency New York brands hire to design it, build it and sell it",
  qualifier:
    "For brands already doing real revenue who'd rather hand the whole thing to one team than keep hiring for it. Design, build, creative, email, SEO. If you just need a theme installed and lightly styled this week, we're the wrong call.",

  // Everlast. `src` is the poster: first paint, and the whole experience under
  // prefers-reduced-motion since the video is never fetched in that case.
  //
  // CHANGED TWICE, and the reason matters (owner, 2026-09-04):
  //
  // 1. It was Ronaldo Jewelry, whose poster is the video's opening logo
  //    animation. Flat pale ground, faint monogram. It read as a broken or
  //    still-loading page. File size makes that objective rather than a matter
  //    of taste: 0.9 KB at 720x406, against 10-48 KB for every other poster.
  //
  // 2. Then ChloBo, which fixed the flat frame but showed a model on a beach
  //    with no brand anywhere in shot. A handsome stock-looking clip proves
  //    nothing. The hero has to say "this is a real brand we worked for" in the
  //    first second or it is decoration.
  //
  // Everlast does that: the wordmark fills the frame and repeats, the file is
  // natively 720x1280 so the 4/5 crop takes it without cutting through
  // anything, and it is a brand a reader will recognize. Alt text describes the
  // work, never a location, and the copy makes no claim about where Everlast is
  // or where we are.
  heroImage: {
    src: "/images/Case%20studies/posters/Everlast%20video.webp",
    alt: "The Everlast storefront we rebuilt on Shopify Plus",
    video: "/images/Case%20studies/Everlast%20video.mp4",
    aspect: "4 / 5",
  },

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Shopify stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years on the platform" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  // ── Trust bar ─────────────────────────────────────────────────────────
  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading:
      "A rebuild for some, the ads for others. Most arrived the way you probably did: nothing obviously broken, and the numbers stuck.",
  },

  assetCtaLabel: "See what the team costs",

  // ── Approach ──────────────────────────────────────────────────────────
  approach: {
    heading: "We'd rather find your problem than sell you ours",
    body:
      "Most brands arrive sure of the diagnosis. The store looks dated, so it needs a redesign. Nobody's finding us, so it needs SEO. The ads stopped working, so it needs new creative.\n\nSometimes that's right. Often the thing you noticed is downstream of something else. A store can look great and convert badly because the product page answers none of the questions a buyer actually has. Ads can stop working because the landing page never changed, not because the creative went stale.\n\nSo we measure first and tell you what we found, even when it's smaller than what you asked for. A design studio will find you a design problem. An ad agency will find you a creative problem. We don't have a service to protect, which is the practical reason to talk to one team instead of three.",
  },

  proofCta: {
    text: "None of these brands had this team in-house when they came to us.",
    label: "Get in touch with us",
  },
  midCta: {
    text: "Want to know which of these your store actually needs?",
    label: "Get in touch with us",
  },
  closingCta: {
    text: "Tell us what's worrying you and we'll go and measure it.",
    label: "Get in touch with us",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  // Assumes the reader has already decided to hire. No explaining, no case for
  // agencies, straight into the thing they cannot get from the other tabs.
  hook:
    "You've got the shortlist open. Everyone says full-service, everyone's work looks good, and the pricing page is missing from all of them.\n\nSo here's ours, and the number you're really weighing it against. Because before anybody signs an agency, they price doing it in-house, and that comparison is where most of these decisions actually get made.\n\nOne thing first: if you're after more traffic and better retention rather than a store built, that's our [link:/services/ecommerce-marketing-agency|ecommerce marketing] side and a different conversation.",

  // ── Quick answer ──────────────────────────────────────────────────────
  // The passage an AI Overview lifts. Stands alone with no page around it.
  // 46 words, inside the 40-60 the standard allows.
  quickAnswer:
    "Ecomm Wizards is a Shopify agency New York brands hire to design, build and market one store on one contract. Design and UX, development, ecommerce SEO, ad creative, email and retention, and conversion work. Fixed price before we start. Everything we make is yours.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // The reader's commercial world, only where this service touches it. No
  // landmarks, weather, traffic or culture: section 4 bans decoration.
  placeLayerHeading: "Why the hire is harder here than it looks",
  placeLayer:
    "This metro employs more tech workers than anywhere else in the country now. 394,300 of them, past the San Francisco Bay Area at 375,730, and it's the first time that's happened in the thirteen years CBRE has counted.\n\nGood news for hiring, you'd think. It's the opposite. The same report has this metro adding 30,640 tech workers since 2022 while the Bay Area lost 23,900, and the money pulling them in is artificial intelligence and finance.\n\nWhich means the designer or developer you want isn't choosing between you and another brand. They're choosing between you and firms that don't have to think twice about the offer. You're in an auction you didn't enter.\n\nNone of that shows up while you're writing the job description. It shows up in the offer you end up making, and in how long the desk sits empty first.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  // Service x place. The block that could not move to another page. Minimum two
  // sourced facts, recorded in gradientFacts below.
  //
  // NON-TECHNICAL BY INSTRUCTION (owner). People, money and time only. No Core
  // Web Vitals, no API limits, no page-weight budgets. The technical argument
  // belongs on the development page.
  //
  // It also does NOT explain what an agency is. An earlier draft opened on "an
  // agency is not one skill", which is the category education this reader does
  // not need. It now opens where they already are: pricing the alternative.
  gradientLayerHeading: "The number you're comparing us against",
  gradientLayer:
    "You've probably already priced the other route, so here's what it looks like when clients show us the spreadsheet.\n\nA senior web designer here runs $157,579. A Shopify developer, $128,440. Someone to market the thing once it's live, $132,726. That's $418,745 in salaries, and salaries aren't the bill. Add what employing people costs on top of pay, another 30.1% across private industry, and you're at $599,063 a year.\n\nOur builds are $5,000 to $50,000. The biggest one runs about four and a half weeks of that team, and you'd carry them the other forty-seven whether there's work for all three or not. There usually isn't.\n\nThe money's the easy part to see. The harder part is that those three have never worked together, and you'd be paying them to learn your business before any of it starts paying you back.",
  gradientFacts: [
    {
      id: "salary-com-senior-web-designer-nyc",
      claim:
        "Salary.com, as of 1 September 2026, puts Senior Web Designer in New York, NY at a $157,579 median ($76/hour). Percentiles: 10th $136,040, 25th $146,305, 75th $166,494, 90th $174,611.",
      url: "https://www.salary.com/research/salary/listing/senior-web-designer-salary/new-york-ny",
      publisher: "Salary.com",
      captured: "2026-09-04",
      reviewAfterDays: 180,
    },
    {
      id: "salary-com-shopify-dev-nyc",
      claim:
        "Salary.com, as of 1 September 2026, puts Shopify Developer in New York, NY at a $128,440 median ($62/hour). Percentiles: 10th $111,744, 25th $119,701, 75th $140,124, 90th $150,762. NOTE for re-verification: aggregators disagree materially here. ZipRecruiter showed roughly $120,240 and Glassdoor roughly $117,826 on the same date. Salary.com is used for ALL THREE roles so the comparison is one methodology rather than three, and the copy says median rather than price for that reason.",
      url: "https://www.salary.com/research/salary/position/shopify-developer-salary/new-york-ny",
      publisher: "Salary.com",
      captured: "2026-09-03",
      reviewAfterDays: 180,
    },
    {
      id: "salary-com-digital-marketing-manager-nyc",
      claim:
        "Salary.com, as of 1 September 2026, puts Digital Marketing Manager in New York, NY at a $132,726 median ($64/hour). Percentiles: 10th $113,552, 25th $122,690, 75th $147,716, 90th $161,364.",
      url: "https://www.salary.com/research/salary/benchmark/digital-marketing-manager-salary/new-york-ny",
      publisher: "Salary.com",
      captured: "2026-09-04",
      reviewAfterDays: 180,
    },
    {
      id: "bls-ecec-march-2026",
      claim:
        "US Bureau of Labor Statistics, Employer Costs for Employee Compensation, reference period March 2026, released 12 June 2026. Private industry workers: total compensation $46.60 per hour worked, of which wages and salaries are $32.60 (69.9%) and benefits $14.01 (30.1%). This is the divisor behind every loaded figure: salary / 0.699. Limit: all-industry average, not tech-specific, so an employer offering equity or richer health cover pays above it, not below.",
      url: "https://www.bls.gov/news.release/ecec.nr0.htm",
      publisher: "US Bureau of Labor Statistics",
      captured: "2026-09-03",
      reviewAfterDays: 180,
    },
    {
      id: "cbre-tech-talent-2026",
      claim:
        "CBRE Scoring Tech Talent, 13th annual edition, reported 21 August 2026: New York metro reached 394,300 tech talent jobs against the San Francisco Bay Area's 375,730, the first time New York has led in the report's history. New York added 30,640 tech workers 2022-2025 while the Bay Area lost 23,900. Recorded because the copy does NOT claim New York is the better tech market overall: CBRE's weighted index still puts San Francisco first, 81.98 to 70.38. The claim here is headcount and competition for hires only.",
      url: "https://www.cnbc.com/2026/08/21/new-york-san-francisco-tech-talent-cbre.html",
      publisher: "CNBC, reporting CBRE Scoring Tech Talent",
      captured: "2026-09-03",
      reviewAfterDays: 365,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "What the three hires cost, before anyone builds anything",
    intro:
      "Three roles an agency covers as standard, priced where you'd be hiring them. One salary source for all three so it's a fair comparison, plus the federal survey of what employers pay on top.",
    renderer: "model",
    method: {
      captured: "2026-09-04",
      window: "salary medians as published 1 September 2026; federal employer cost survey reference period March 2026",
      howGathered:
        "We took the published median salary for each role in this metro. All three come from one source, so they're measured the same way. Then we added what the federal survey says employers pay on top of wages. The loaded figure is the salary divided by 0.699, because wages are 69.9% of total pay across private industry and benefits are the rest.\n\nThree things to know before you use these numbers. Salary sites disagree with each other by ten or fifteen thousand dollars on roles like these, so treat every figure as the middle of a range. The benefit rate is an average across all industries, not a tech one, so an employer offering equity pays more than this. And we count three people because that's what the six disciplines below need. A smaller brand might get by with two.",
    },
    columns: ["The role", "Median salary", "What it costs you loaded"],
    rows: [
      {
        label: "Senior web designer",
        cells: ["$157,579", "$225,435"],
        note: "Decides what the store looks like and how somebody moves through it. The 25th percentile is $146,305 and the 90th is $174,611, so a strong hire costs more than the middle.",
      },
      {
        label: "Shopify developer",
        cells: ["$128,440", "$183,748"],
        note: "Builds it and keeps it working. Range here runs $111,744 at the 10th percentile to $150,762 at the 90th.",
      },
      {
        label: "Digital marketing manager",
        cells: ["$132,726", "$189,880"],
        note: "Responsible for anyone arriving at all, and for coming back. Range $113,552 to $161,364.",
      },
      {
        label: "All three, one year",
        cells: ["$418,745", "$599,063"],
        note: "The loaded column is what actually leaves the business. Budget on salary alone and you're understating these three by roughly $180,000 a year between them.",
      },
      {
        label: "A full build with us",
        cells: ["$5,000 to $50,000", "One time, fixed before we start"],
      },
      {
        label: "Our largest build, in that team's time",
        cells: ["4.5 weeks", "The other 47 weeks stay on payroll"],
      },
    ],
    derived:
      "The gap's big enough that it stops being the interesting bit. Money you can plan around. What you can't plan around is three people who've never worked together spending their first quarter learning your business, then leaving one at a time. You'd be buying the same three skills either way. The difference is whether the working relationship already exists and who paid for the learning. Where hiring genuinely wins is later, once the store's settled and the work is continuous rather than a project. Most brands get there eventually. Very few are there when they start looking.",
    derivedList: {
      title: "Worth working out before you brief anyone",
      items: [
        "Take any salary you're considering and divide it by 0.699. That's the real cost, and it's the number to hold a quote against.",
        "Write down what each person does in month four, once the store's live. If you can't fill the month, it's project work wearing a job title.",
        "Decide honestly which of the six things below you need this year. Most brands need two and pay for one they don't.",
        "Ask every agency on your list what they'd tell you not to spend money on. No answer means they're selling a service, not a decision.",
        "Price the months a desk sits empty while you hire, next to the salary. It's usually the bigger number.",
      ],
    },
    reviewAfterDays: 180,
  },

  // ── Discipline deep-dives ─────────────────────────────────────────────
  // Six rows. Creative strategy added 2026-09-04 on the owner's instruction: it
  // is one of the three services this reader shops for and the page did not
  // name it at all. Four of the five assigned secondaries live here.
  // Every caseSlug is unique across the whole page.
  disciplines: {
    label: "What we do",
    heading: "Six things we do, and how to tell which you need",
    intro:
      "Most brands come for one of these and end up needing two. You're not signing up for all six by talking to us, and we'll say which ones you can leave alone this year.",
    items: [
      {
        label: "Design and UX",
        heading: "Shopify design and development New York brands can tell apart",
        body:
          "Your store gets judged before anyone reads a word. Not on taste, on whether it looks like somebody made deliberate decisions.\n\nWe design around how your customer buys: what brought them, what makes them stall, what they need to see before they'll spend. Then the same people build it. That last part matters more than it sounds. Shopify design and development New York brands buy usually splits between a studio and a contractor, and every trade between how it looks and how it works gets made badly by people in different rooms.",
        caseSlug: "chlobo-shopify-plus-migration",
        cta: { label: "Explore design and UX", href: "/services/shopify-ux-and-ui-design" },
      },
      {
        label: "Build and development",
        heading: "The half of a build nobody quotes for",
        body:
          "The visible part takes a few weeks. The rest is catalog structure, shipping and tax rules, how variants behave, and the fifty small decisions that only turn up once real products go in.\n\nThat's where Shopify website developers New York brands hire spend their first quarter, so bear that in mind before you turn it into a permanent job. We do it as fixed work with a date on it. Migrations off Magento, WooCommerce or BigCommerce sit here too, along with anything custom that no app does properly.",
        caseSlug: "dryrobe-shopify-plus-redesign",
        cta: { label: "Explore development", href: "/services/shopify-development-agency" },
      },
      {
        label: "Ecommerce SEO",
        heading: "Getting found for what you sell, not just who you are",
        body:
          "Plenty of stores rank for their own name and almost nothing else. Looks like visibility until you notice every one of those visitors already knew you existed.\n\nThe work isn't glamorous. Collection and product structure a search engine can read, pages that answer what people actually type, and clearing the technical debt capping everything else. Shopify experts New York brands bring in for this should be showing you which searches you're losing and to whom before they sell you anything. Evie Lou's organic revenue grew 47% year on year on exactly that.",
        caseSlug: "evie-lou-shopify-fashion-cro",
        cta: { label: "Explore ecommerce SEO", href: "/services/ecommerce-seo-agency" },
      },
      {
        label: "Creative strategy",
        heading: "When the ads stop working and nobody can say why",
        body:
          "Costs climb, returns slide, and the fix everyone reaches for is more budget or another audience test. Usually it's the creative that's tired, and sometimes it's the page the creative sends people to.\n\nWe build the ad concepts, the hooks and the user-generated angles, then test them properly instead of swapping thumbnails. It sits next to the store work on purpose: creative that promises one thing and a product page that delivers another is the most expensive gap in ecommerce, and it's invisible if the two are handled by different companies.",
        caseSlug: "chillys-creative-strategy",
        cta: { label: "Explore creative strategy", href: "/services/creative-strategy" },
      },
      {
        label: "Email and retention",
        heading: "The second order is where you make the money",
        body:
          "Acquisition takes the attention and retention pays for it. If a first-time buyer never hears from you again, you didn't buy a customer, you rented one.\n\nWe build the flows doing the quiet work. Welcome, browse and cart recovery, post-purchase, winback, and the segmentation underneath so people stop getting mail that doesn't apply to them. It's the cheapest revenue on the list and it's almost always the last thing anyone gets to.",
        caseSlug: "vithit-shopify-plus-d2c",
        cta: { label: "Explore marketing and retention", href: "/services/ecommerce-marketing-agency" },
      },
      {
        label: "CRO and support",
        heading: "What happens after launch, for years",
        body:
          "Launch day is the start. Stores leak money slowly afterwards, in the cart and on the product page, and you only catch it if somebody's looking every month.\n\nSo we keep testing against your real traffic instead of a best-practice checklist and fix whatever the numbers point at. Ongoing Shopify maintenance New York brands buy from us is a named developer on a retainer, a fraction of a salary for a fraction of the hours. If you need somebody every single day, hire instead. We'll tell you so.",
        caseSlug: "twillory-shopify-cro",
        cta: { label: "Explore CRO and support", href: "/services/shopify-cro-agency" },
      },
    ],
  },

  // ── Client quotes ─────────────────────────────────────────────────────
  // Must not overlap the proof grid or the disciplines: GeoPageTemplate renders
  // all three. Each carries a quotePerson in lib/case-studies.ts; ResultsSlider
  // skips any study that does not, rather than putting words in someone's mouth.
  results: {
    heading: "Three owners, three numbers, and where they came from",
    intro:
      "Every number opens into the case study it came from, so you can check it.",
    slugs: [
      "111skin-shopify-cro-redesign",
      "wild-shopify-plus-subscriptions",
      "happy-mammoth-shopify-subscriptions-cro",
    ],
    headlines: {
      "111skin-shopify-cro-redesign":
        "{brand} took conversion up 46% without touching the product range",
      "wild-shopify-plus-subscriptions":
        "{brand} passed 80,000 monthly subscribers on a rebuilt subscription flow",
      "happy-mammoth-shopify-subscriptions-cro":
        "{brand} grew subscription revenue 134% after the checkout was rebuilt",
    },
  },

  // ── How we work ───────────────────────────────────────────────────────
  // The honest-local block. Answers "can we actually work together" on a page
  // that makes no presence claim, by replacing proximity with a delivery term.
  // Every item is a commitment a client could quote back at us. Trimmed from
  // five items to four: the fifth repeated the "we'll tell you no" promise that
  // already appears in `approach` and in the conversion block.
  howWeWork: {
    heading: "What we hold ourselves to",
    intro:
      "At your size it doesn't matter where an agency sits. It matters whether they pick up.",
    items: [
      {
        title: "Weekends aren't a window we close",
        body:
          "Something breaks on a Sunday and most agencies find out Monday. Message the shared channel and a person answers, then starts working. You set the scale: one developer for something small, everyone if the checkout has stopped taking money.",
      },
      {
        title: "You get a person, not a ticket number",
        body:
          "Nobody's relaying questions between you and someone you never meet. Whoever wrote the code answers for it, in a channel you can read, and you'll know their name in the first week.",
      },
      {
        title: "We staff Eastern hours, and it's in the contract",
        body:
          "Your morning is when decisions get made and when a bad release hurts most. We cover that window and the hour either side, written in rather than offered as a favor. Go live at ten and someone senior has been watching since nine.",
      },
      {
        title: "Everything we make is yours the day we make it",
        body:
          "Repository, theme, design files, ad creative, campaign templates. Not released once the last invoice clears. Walk away and you take all of it, and somebody who's never spoken to us can pick up where we stopped.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  // Carries no keyword: all five assigned secondaries live elsewhere. Process
  // and price only.
  whatWeDoAboutIt:
    "We scope before we quote. First week is measurement: what you've got, what's costing you orders, and which of the six would move your number most. You keep that whether or not you carry on with us.\n\nThen a fixed price and a date, both written down, before anything starts. Not a rate card and an estimate that drifts. If the scope changes because you changed your mind, we requote in the open and you decide.\n\nBuilds land between $5,000 and $50,000 depending on how much is custom. Ongoing work is a monthly retainer sized to what you need rather than a package with things in it you'll never use.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // Vertical matching WAIVED on the owner's instruction; chosen on how the work
  // looks and what it proves. No study here appears anywhere else on the page.
  proofHeading: "Stores we've built, and what changed",
  proof: [
    {
      slug: "ronaldo-jewelry-shopify-plus-redesign",
      vertical: "Jewelry",
      whatWasBuilt:
        "A Shopify Plus rebuild with high-resolution product visualization, a custom piece configurator and a trust framework built for high-value orders",
      outcome: "+250% total sales, +120% conversion rate, +46% average order value",
      verified: true,
    },
    {
      slug: "candy-kittens-shopify-food-beverage-cro",
      vertical: "Premium food",
      whatWasBuilt:
        "A gifting-first storefront with an editorial homepage and seasonal campaign tooling the team can run without a developer",
      outcome: "+182% conversion rate, $8.1M new annual revenue, +34% average order value",
      verified: true,
    },
    {
      slug: "john-hardy-shopify-plus-migration",
      vertical: "Luxury jewelry",
      whatWasBuilt:
        "A full migration onto Shopify Plus for a luxury catalog, with the theme rebuilt around how high-value pieces are actually browsed",
      outcome: "+71% conversion rate",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  // Four. Section 6.4 wants at least one we don't fully beat: objection 1
  // concedes hiring wins once the work is continuous, objection 4 concedes the
  // agency track record honestly. Objection 2 owns the assigned secondary.
  objectionsHeading: "Questions worth asking before you sign anyone",
  objections: [
    {
      objection: "Why not build the team in-house? At least then it's ours.",
      answer:
        "Eventually you probably should, and the table above isn't an argument against it. In-house wins the moment the work is continuous: a real roadmap, changes every week, people who know your catalog without being briefed.\n\nIt goes wrong when hires are used to get through a project. A rebuild plus a growth push is three skills for a few months. Three salaries is three skills forever, and forever starts before any of them has learned your business. If the work's genuinely continuous today, hire. We'll say so on the call rather than after the invoice.",
    },
    {
      objection: "A freelancer quoted me a third of your price.",
      answer:
        "They might be right for it, and the gap's real rather than a markup we're hiding. Search shopify agency vs freelancer New York and you'll find the price difference everywhere and the reason for it nowhere, so here it is. A freelancer is one person's availability and one person's blind spots. Nobody reviews the work, and if they take another client mid-project you've no second option.\n\nFor a tight brief with a clear spec, a good freelancer is excellent value and we won't talk you out of one. For work spanning design, build and ads, all three have to argue with each other. And somebody has to still be there in month six. The cheaper quote usually isn't.",
    },
    {
      objection: "We only want one of these things. Why sign up for an agency?",
      answer:
        "Then buy one. We quote the disciplines separately and plenty of clients only ever take a single one.\n\nWhat we'd ask is that you let us check the diagnosis first. The most common thing we find is a brand about to spend on the wrong one. Paying for traffic into a store that doesn't convert is the expensive version of that, and it happens constantly. If you're right, you're right, and we'll scope exactly what you asked for.",
    },
    {
      objection: "We've been burned by an agency before.",
      answer:
        "Probably one that scoped loosely, went quiet for two months, then came back with an invoice and something nobody had seen. We can't prove we're different in a paragraph on our own website and we won't pretend otherwise.\n\nWhat we can do is make finding out cheap. The audit costs nothing and leaves you with something you can hold. Scope and price are fixed in writing before work starts. Everything we make is yours from day one, so leaving costs you time and nothing else.\n\nAnd none of that is a guarantee. There are agencies with worse records than ours promising more. If you've been burned once, do a small piece of work first. Ask us for one.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // Nine. "What is a Shopify agency?" was REMOVED on the owner's instruction:
  // somebody searching this term knows the answer, and section 5.1 only ever
  // permitted a definition rather than requiring one.
  faqHeading: "What brands ask before they decide",
  faqs: [
    {
      question: "How much does a Shopify agency cost?",
      answer:
        "Our builds run $5,000 to $50,000 depending on how much is custom, and ongoing work is a monthly retainer sized to what you need. For comparison: the designer, developer and marketer an agency covers cost about $599,063 a year to employ here. That figure includes employer costs.",
      unique: true,
    },
    {
      question: "We can't tell whether we need design, SEO or new creative. Can you?",
      answer:
        "That's the audit, and it's free. Name whatever's bothering you most, we measure, and we come back with which of the six would move your number and which wouldn't. Plenty of brands find it isn't the one they arrived with.",
      unique: true,
    },
    {
      question: "Do we have to take all six services?",
      answer:
        "No, and most clients start with one or two. We quote them separately and we'll say plainly if we think something would do nothing for you this year. Bundling work a brand doesn't need is the fastest way to lose them.",
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
        "Six to twelve weeks for most stores, depending on how much is custom and how fast decisions come back from your side. Migrations with a big catalog run longer. You get the date before we start, and if it moves because of us we say so early rather than on the deadline.",
      unique: false,
    },
    {
      question: "Can you do the ads as well as the store?",
      answer:
        "Yes, and it's the arrangement we'd argue for. Creative and the page it lands on are one system. When separate companies own them, the ad promises something the product page doesn't deliver. Nobody owns that gap, and you pay for it twice.",
      unique: true,
    },
    {
      question: "What if we want to hire in-house later?",
      answer:
        "Then you do, and nothing about working with us makes it harder. You own the repository, the theme, the design files and the campaign templates from day one. We hand over the documentation too, instead of making ourselves necessary.",
      unique: true,
    },
    {
      question: "Do you provide Shopify development in New York?",
      answer:
        "Yes, along with design, SEO, creative and retention. We work with brands across the metro, and we work remotely, which is how the whole team works. There's no office to visit and we don't claim one. You get a named contact in a shared channel and cover through Eastern business hours.",
      unique: false,
    },
    {
      question: "Do you work with brands outside New York?",
      answer:
        "Yes, across the United States and internationally. Nothing about how we work depends on where you are and our rates don't change by city. This page exists because the hiring math in this market is unusual, not because we price it differently.",
      unique: false,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Section 8.2: zero keyword targets. No primary, no secondary, no city name,
  // no platform name. Under 180 words above the form. Second person throughout.
  conversion: {
    heading: "Point us at the part you'd fix first",
    whatYouGet:
      "Name the thing costing you most. We'll audit that one thing, free, and talk you through it.",
    whatWeWillTellYouNotToDo:
      "If it turns out you need fewer services than you came for, or a hire instead of us, we'll say so. We'd rather lose the project than sell you the wrong shape of help.",
    responseExpectation:
      "You'll hear back from a senior developer inside one working day. Nobody from sales.",
    audit: {
      transition:
        "You already know which part of your store you'd fix first.",
      offer:
        "Name it. We'll go and look properly, and you get back what we actually found:",
      parts: [
        "What's going on, measured on your store rather than assumed from a benchmark.",
        "The cause underneath it, which is rarely the thing you noticed.",
        "What to do about it, in what order, and which change is worth the most.",
      ],
      limit:
        "It's the diagnosis, not the treatment. The work itself is a separate quote you can walk away from.",
      noObligation:
        "It costs nothing, there's no follow-up sequence, and what we find is yours to keep either way.",
      // Turnaround and format set on the owner's instruction, 2026-09-03,
      // closing Copy Standard 8.4 and pre-publish checklist item 17. A live call
      // rather than a document, deliberately: the reader can question it and
      // disagree on the spot, which is what makes the half hour worth their time.
      turnaround:
        "Pick a thirty-minute slot that suits you. Three business days later whoever ran the audit takes you through it live. Push back, ask why, disagree, and get an answer there and then. No written report does that.",
      secondDoor:
        "Rather we came to you? Leave your details and the same findings arrive from us.",
    },
  },

  // ── Sources ───────────────────────────────────────────────────────────
  // On-page citation markers are retired, so nothing here renders. Provenance
  // record for the editorial pass and the review windows.
  sources: [
    {
      id: "salary-com-three-roles-nyc",
      claim:
        "All three salary medians come from Salary.com, all dated 1 September 2026, so the comparison is one methodology: Senior Web Designer $157,579, Shopify Developer $128,440, Digital Marketing Manager $132,726. Sum $418,745. If one is re-verified, re-verify all three or the table stops being like-for-like.",
      url: "https://www.salary.com/research/salary/listing/senior-web-designer-salary/new-york-ny",
      publisher: "Salary.com",
      captured: "2026-09-04",
      reviewAfterDays: 180,
    },
    {
      id: "bls-ecec-march-2026",
      claim:
        "Private industry benefits are 30.1% of total compensation, wages 69.9%, reference period March 2026. Every loaded figure is salary / 0.699, including the $599,063 headline. If the rate is restated in a later release, every dollar figure in the asset changes with it.",
      url: "https://www.bls.gov/news.release/ecec.nr0.htm",
      publisher: "US Bureau of Labor Statistics, Employer Costs for Employee Compensation",
      captured: "2026-09-03",
      reviewAfterDays: 180,
    },
    {
      id: "cbre-tech-talent-2026",
      claim:
        "New York metro 394,300 tech talent jobs against the Bay Area's 375,730, first time in thirteen editions; +30,640 New York and -23,900 Bay Area over 2022-2025. Supports the place layer only.",
      url: "https://www.cnbc.com/2026/08/21/new-york-san-francisco-tech-talent-cbre.html",
      publisher: "CNBC, reporting CBRE Scoring Tech Talent",
      captured: "2026-09-03",
      reviewAfterDays: 365,
    },
    {
      id: "evie-lou-organic-revenue",
      claim:
        "Evie Lou organic revenue +47% year on year, cited in the ecommerce SEO discipline. Read from that study's own results table in lib/case-studies.ts rather than restated independently, so it cannot drift from the case study page.",
      url: "https://ecommwizards.com/case-studies/evie-lou-shopify-fashion-cro",
      publisher: "Ecomm Wizards case study",
      captured: "2026-09-04",
      reviewAfterDays: 365,
    },
  ],

  wordCountTarget: [1300, 4100],
};

// ── OPEN ITEMS BLOCKING PUBLISH (not blocking the build) ─────────────────────
//
// 1. EIGHT-CITY FOOTER. components/layout/Footer.tsx line 11 still renders
//    "Los Angeles, New York, Chicago, Seattle, Toronto, Boston, London,
//    Washington DC" on every page. Master Strategy v3.1 section 8 issue 3 has
//    it Open, and Geo Inventory v4.0 section 5 makes removing it a gate BEFORE
//    Batch 1 publishes. Site-wide, so outside this page's scope.
//
// 2. INDEX REMEDIATION. Indexed URL count must be under ~200 before any Batch 1
//    page publishes; last recorded reading was 1,818.
//
// 3. PARTNER TIER. Unconfirmed, so no Plus or Partner framing is used anywhere
//    on this page. Blocks the reserve term "shopify plus developer nyc".
//
// 4. RELATEDSERVICES AFTER THE FORM. GeoPageTemplate renders it below the
//    conversion block, against Copy Standard 1.4 ("the page ends at the form").
//    Flagged in the section audit, not yet actioned: it affects Los Angeles too.
//
// 5. INLINE CTA WORDING. The three inline prompts still carry the Los Angeles
//    labels. The owner has flagged this and deferred it.
//
// 6. VELOCITY. Max 5 status flips per rolling 7 days; currently 1 in window.
