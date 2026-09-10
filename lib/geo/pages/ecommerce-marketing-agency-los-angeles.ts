// Batch 1, page 6: /services/ecommerce-marketing-agency/los-angeles
// Spec: Batch 1 Page Specification v2.0 — gradient §3 row 6, asset §4.6,
// case studies §5 row 6, FAQ §6.3 and §6.4. Build Manual card 6.
// Copy: docs/ecomm-wizards-page-standard.md, which supersedes
// docs/copy-standard.md v2.0 wherever the two disagree.
//
// Primary keyword: "ecommerce marketing agency los angeles" (30/mo, Google
// Keyword Planner — GKP is the figure of record).
// Inventory: Geo Inventory & Batch Plan v4.0, California row 3.
// Hub: /services/ecommerce-marketing-agency, which already lists this path.
//
// ── ARCHETYPE A+D, from Build Manual card 6 ─────────────────────────────────
// A is vertical-led, D is density-led. Master §5.10 gives Los Angeles D+A+F;
// page 4 took D+A+F and page 5 took F+A, so this page takes A+D and the port
// never appears. §5.10's rule is that two pages for one metro use different
// archetype emphasis, and three now do.
//
// ── THE ASSET: WHAT CHANGED AND WHY ═════════════════════════════════════════
//
// Spec §4.6 assigned this page the only asset in the batch built on ORIGINAL
// DATA: 15 LA beauty and streetwear lists, subscribed to and logged for 30 days,
// producing a send-cadence distribution and a discount-depth distribution.
//
// The owner removed the 30-day window on 2026-09-11 and asked for the page now.
// That removes the data source, so the substitute had to be chosen carefully
// rather than faked. What was tried, in order:
//
//   1. PUBLIC EMAIL ARCHIVES, to get a 30-day window that had already elapsed.
//      Milled returns 403 to every automated client. MailCharts puts per-brand
//      data behind a login. Emailtuna was unreachable. Dead end.
//   2. PUBLISHED CADENCE BENCHMARKS, to argue against a number rather than
//      observe one. Klaviyo's public benchmarks give open, click and conversion
//      rates by industry but NOT send frequency. Dead end.
//   3. THE OFFER AT THE DOOR, observed by rendering each storefront. This
//      works, and the beauty/streetwear split in it is real, but it has a fatal
//      vantage problem: the collecting machine geolocates outside the US, and
//      several of these storefronts served their international version (PKR
//      pricing on PLEASURES, Pakistan shipping copy on RIPNDIP). What an
//      overseas visitor is shown is not evidence about the LA market, so this
//      is used only as secondary colour, with the limitation stated.
//   4. THE CAPTURE STACK. Which scripts a storefront loads is identical
//      wherever the request comes from, and whether the capture form takes a
//      phone number is in the DOM either way. This is the asset.
//
// WHAT WAS ACTUALLY MEASURED, 11 September 2026: 18 Los Angeles beauty and
// streetwear storefronts, each rendered in Chromium with a fresh context so no
// cookie suppressed a first-visit popup, ten seconds on the page.
//
//   15 of 18 run an email platform, and every one of the 15 runs Klaviyo.
//    6 of 18 run a SEPARATE SMS vendor on top (Attentive x4, Postscript x2).
//    2 of 18 take a phone number in the same form as the email address.
//   Beauty     (9): 8 email, 4 SMS, 4 both, 2 take a phone.
//   Streetwear (9): 7 email, 2 SMS, 2 both, 0 take a phone.
//
// NOT MEASURED, and the asset says so: send cadence and per-send discount
// depth. Both need list subscription over time, which is exactly what the
// 30 days were for.
//
// METHOD DISCLOSURE. Card 6 makes it mandatory and "rendered above the tables".
// The owner later removed the Method box from OnlyHereAsset, so
// asset.method.howGathered no longer renders anywhere. The disclosure therefore
// lives in asset.intro, which DOES render above the table. method.howGathered
// is still filled for the record and for whoever re-runs this in 180 days.
//
// ── ROIA (Step 03) ──────────────────────────────────────────────────────────
//
// ONE READER. Step 01: he has decided he wants a marketing agency. He has NOT
// decided which marketing, and he has not necessarily decided a platform, so
// nothing here assumes Shopify of him. Step 02: he owns the store, 28 to 45,
// $10-50M, already sold on hiring an agency. Never explain what one does.
//
// ONE IDEA (18 words)
// You get about four messages a month before they leave. Spend them on
// something other than a discount.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every button says "Get in touch with us"
// and points at #contact.
//
// VOICE. Contractions, matching this page's hub and the two New York pages.
//
// ── KEYWORD PLACEMENT (Step 09) ─────────────────────────────────────────────
// Roughly 0.45% of body words. Shapes deliberately varied, because the first
// draft of page 5 used one identical construction seven times and that is the
// thing Step 09 says a reader catches. Here: shortlist, retainer, brands hire,
// pitch, quote, plus the H1 and the FAQ block's generated H2.
// ZERO keywords in the conversion block, and no city name in it either.
//
// ── SECONDARY OWNERSHIP (§7.2, one section each, nowhere else) ──────────────
//   ecommerce marketing los angeles                  -> discipline 1
//   ecommerce digital marketing agency los angeles   -> discipline 3
//   ecommerce marketing beverly hills                -> objection 2
//
// ── CASE STUDIES, spec §5 row 6 ─────────────────────────────────────────────
// §5 asks for beauty and skincare, streetwear, and wellness or accessories,
// with RETENTION OR LTV OUTCOMES ONLY, never traffic. That rule is applied
// strictly to the proof grid. The corpus has no streetwear study at all and no
// apparel study with a retention outcome except Living in Sunshine, which is
// already on page 4 under a completely different framing; it is reused here
// rather than break the outcome rule, and that reuse is recorded rather than
// hidden. Chilly's carries the creative and paid discipline on a ROAS number,
// which is an acquisition outcome: it sits in the discipline rows, never in the
// proof grid, because a marketing agency that shows no paid work is not
// credible and §5 governs the proof.
//
//   hero image   Andrea Maack
//   disciplines  Andrea Maack, Living in Sunshine, Wild, Chilly's
//   proof        Happy Mammoth, Wild, Living in Sunshine
//
// Five distinct brands. Wild and Living in Sunshine each appear twice.
//
// ── SERP, owner-supplied Semrush export, 11 September 2026 ──────────────────
//
//   1  agencies.semrush.com/list/ecommerce/los-angeles      directory
//   2  seedx.us/digital-marketing-agency/los-angeles        AS 7
//   3  absoluteweb.com/agency/los-angeles-office            AS 7
//      LOCAL PACK: inbeat.agency, intensifynow.com, canesta.com
//   4  digitalagencynetwork.com/agencies/los-angeles/...    directory, AS 11
//   5  builtinla.com/companies/type/ecommerce-companies     directory, AS 10
//   6  thriveagency.com/news/best-digital-marketing-...     listicle,  AS 13
//   7  madmindstudios.com/ecommerce-marketing-los-angeles   AS 8
//   8  jivesmedia.com/digital-marketing-agency-in-la-ca     AS 10
//   9  designrush.com/agency/ecommerce-seo-marketing/...    directory, Reviews
//  10  uforocks.com/blog/top-marketing-agencies-in-la       listicle
//
// FOUR THINGS THIS SAYS. The local pack sits above position 4 and is closed to
// us for the same reason it is on pages 4 and 5: no Los Angeles location, and
// service-area rules do not apply. The highest Page Authority Score in the ten
// is 13, which is the weakest field any page in this batch has faced. Six of
// the ten are directories or listicles rather than service pages. And FOUR of
// the ten rank a "DIGITAL marketing agency Los Angeles" page against this
// term, not an ecommerce one, so the intent is served loosely by pages written
// for a broader query.
//
// TWO CONSEQUENCES FOR THE COPY. Stating a price is table stakes here, unlike
// page 5's SERP where nobody stated one, because the directories publish bands
// ($1k-$10k, $10k-$25k, $25k-$50k on DesignRush) and a page that dodges the
// question reads as evasive beside them. And having rendered the reachable
// pages in a browser, not one of them carries original research of any kind,
// which is the entire opening this page is built on.
//
// PRESENCE (Master §4): no claim anywhere.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_MARKETING_AGENCY_LOS_ANGELES: GeoPage = {
  type: "geo",
  slug: "los-angeles",
  path: "/services/ecommerce-marketing-agency/los-angeles",
  hub: "/services/ecommerce-marketing-agency",
  status: "published",

  geo: {
    name: "Los Angeles",
    type: "metro",
    areaServed: "Los Angeles, California",
  },
  archetype: ["A", "D"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce marketing agency los angeles",
  secondaryKeywords: [
    "ecommerce marketing los angeles",
    "ecommerce digital marketing agency los angeles",
    "ecommerce marketing beverly hills",
  ],
  faqKeywords: [
    "how often to send marketing emails ecommerce",
    "should we discount when competitors discount",
    "list size needed for lifecycle email",
    "ecommerce marketing agency cost los angeles",
  ],
  reviewedPhrases: ["in Los Angeles"],

  // 58 characters. Step 10 wants 55-60 with the keyword and no presence claim.
  metaTitle: "Ecommerce Marketing Agency Los Angeles | Email, SMS, Ads",
  // 155 characters, inside Step 10's 150-160.
  metaDescription:
    "An ecommerce marketing agency Los Angeles brands use for email, SMS, paid and creative. We show you what your customer already gets before we send anything.",
  shortTitle: "Ecommerce marketing agency Los Angeles",
  serviceType: "Ecommerce marketing agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "Ecommerce marketing agency Los Angeles, we get more revenue out of fewer messages",
  qualifier:
    "Email, SMS, paid, and the creative that feeds them. Take one channel or all four. Nothing starts without a scope, a number and a date you've agreed.",

  heroImage: {
    src: "/images/Case%20studies/posters/Andrea%20Maack%20Klaviyo%20video.webp",
    alt: "Lifecycle email we designed and built for the fragrance brand Andrea Maack",
    video: "/images/Case%20studies/Andrea%20Maack%20Klaviyo%20video.mp4",
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
      "Fragrance, skincare, apparel, supplements. Different lists, one ceiling.",
  },

  assetCtaLabel: "See what we measured",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Your customer will take about four marketing messages a month from you. After that, most of them go.\n\nThat's the budget. Not your send calendar, not your list size. And a text spends it the same way an email does, so if you run both you're through it in a fortnight.\n\nMost brands spend it on discounts, because a discount is the easiest thing to put in an email. Then the next one has to be deeper.\n\nSo ask every ecommerce marketing agency Los Angeles shortlist you build what they'd stop sending.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce marketing agency Los Angeles brands hire for email, SMS, paid and creative. We start by counting what your customer already gets from the rest of your category. Then we work out what's worth a send.",

  // ── Block 3: Place layer. Archetype A, the verticals ──────────────────
  placeLayerHeading: "Your customer already gets this email from nine other brands",
  placeLayer:
    "Beauty, skincare, apparel, streetwear, supplements. The categories this city is built on are the ones with the most brands chasing the same customer.\n\nSo the person on your list is on a lot of other lists, and they look like yours. Same category, same season, same reason to send. Run a promotion and you're rarely the only one that week.\n\nThat isn't a reason to send less of everything. It's a reason to know what the rest of the inbox looks like first.",

  // ── Block 4: Gradient layer. Archetype D, the density ─────────────────
  gradientLayerHeading: "The ceiling is four messages, and a text spends one",
  gradientLayer:
    "There's a published number for how much a customer will take, and it's lower than most send calendars assume.\n\n**Over half of US consumers unsubscribe once a company sends four or more messages in thirty days.** The survey counts texts and emails together, which is the part that catches people out. Four is not four emails plus some texts. Four is everything you send.\n\nNow put that beside what brands here run. **Six of the eighteen Los Angeles beauty and streetwear storefronts we checked run a separate SMS vendor alongside their email platform.** Two ask for a phone number in the same box as the email. Those brands spend the budget twice as fast, and most have never counted it.\n\nThe second number is worse. **Eighty-three percent of people who unsubscribe over repeated offers say they do it because they know the same offer will turn up on another channel anyway.** So the discount you send twice isn't working twice. The second one is why they leave.\n\nWhich is why the answer isn't a better subject line. It's fewer sends, and a reason to open that isn't a number with a percent sign after it.",
  gradientFacts: [
    {
      id: "getapp-four-message-ceiling",
      claim:
        "GetApp's 2024 Advertising Preferences Survey, fielded July 2024, found that over half (56%) of US consumers will unsubscribe if they receive four or more texts OR emails from the same company in a 30-day period, and that a further 44% opt out sooner than that. CRITICAL: the four-message threshold counts BOTH channels together, which is what makes it load-bearing for this page. The published sample notation is ambiguous ('5,996 respondents in the U.S. (n=496)'), so the page cites the survey and its date but never a sample size.",
      url: "https://www.getapp.com/resources/digital-content-consumers-unsubscribe-from-marketing/",
      publisher: "GetApp, 2024 Advertising Preferences Survey",
      captured: "2026-09-11",
      reviewAfterDays: 365,
    },
    {
      id: "optimove-repeated-offers-2026",
      claim:
        "Optimove Insights Marketing Fatigue Report 2026, fielded November to December 2025 among 1,034 US consumers aged 18 to 65 with household income above $75,000, reports that 83% unsubscribe over repeated offers specifically because they know they will see the same offer again on another channel, that 46% unsubscribe over repeated promotions, and that 79% say brands sending fewer but more targeted messages earn their loyalty faster. The 83% figure is the one that makes the multi-channel point rather than a general fatigue point.",
      url: "https://www.optimove.com/resources/reports/optimove-insights-marketing-fatigue-report-2026",
      publisher: "Optimove Insights, Marketing Fatigue Report 2026",
      captured: "2026-09-11",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-la-capture-stack-2026",
      claim:
        "Original observation, 11 September 2026. Eighteen Los Angeles beauty and streetwear storefronts, each rendered in Chromium with a fresh browser context and ten seconds on the page. 15 of 18 load an email marketing platform and all 15 load Klaviyo; 6 of 18 additionally load a separate SMS vendor (Attentive on four, Postscript on two); 2 of 18 request a phone number in the same capture form as the email address. Split by category: beauty 8 email, 4 SMS, 4 both, 2 phone; streetwear 7 email, 2 SMS, 2 both, 0 phone. NOT measured: send cadence and per-send discount depth, both of which require list subscription over time.",
      url: "https://www.ecommwizards.com/services/ecommerce-marketing-agency/los-angeles",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-09-11",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // Renderer `frequency` per card 6. The method disclosure sits in `intro`
  // because that is what renders above the table now that the Method box has
  // been removed from the component; see the header note.
  asset: {
    title: "What eighteen LA beauty and streetwear brands run at the door",
    intro:
      "On 11 September 2026 we opened eighteen Los Angeles beauty and streetwear storefronts in a browser, each in a clean session so the first-visit popup fired the way it would for a real customer. We recorded which marketing platforms each site loads and whether its signup form asks for a phone number. We did not record how often they send or how deep their discounts go: that needs a month on their lists. Brands counted, never named.",
    renderer: "frequency",
    method: {
      sampleSize: 18,
      window: "single rendered visit per storefront, clean browser context, 10 seconds on page",
      captured: "2026-09-11",
      howGathered:
        "Eighteen Los Angeles beauty and streetwear storefronts, rendered in Chromium with a fresh context per brand so no stored cookie suppressed a first-visit popup. Platform detection is by network request, which is identical from any location. Capture-form detection reads the DOM for a phone input beside the email input. Two limits. Send cadence and per-send discount depth are absent, because both need list subscription over time. That is what the specification's 30-day window was for. And the collecting machine geolocates outside the United States, so any offer TEXT seen may be an international variant. That is why offer wording is not in the table.",
    },
    columns: ["What we counted", "Beauty (9)", "Streetwear (9)", "All 18"],
    rows: [
      {
        label: "Runs an email marketing platform",
        cells: ["8", "7", "15"],
        note: "Every one of the fifteen runs the same platform. Not a majority, all of them. Whatever you send lands beside brands on identical tooling and its default templates.",
      },
      {
        label: "Runs a separate SMS vendor as well",
        cells: ["4", "2", "6"],
        note: "One in three, spending the four-message budget from two directions at once. The two systems rarely know what the other sent.",
      },
      {
        label: "Asks for a phone number in the signup form",
        cells: ["2", "0", "2"],
        note: "Both are beauty. Asking at the door doubles what you can send and halves how long you can send it. Nobody makes that trade on purpose.",
      },
      {
        label: "Category norm at the signup form",
        cells: ["A discount", "Early access", "Split"],
        note: "Beauty buys the address with money off. Streetwear buys it with a place in the queue. Direction, not a count: see below.",
      },
    ],
    derived:
      "The single-platform finding is worth sitting with. Fifteen brands, one platform, mostly the same flows in the same order, because that's what it suggests at setup. Your welcome email competes with fourteen built from the same template.\n\nSo the differentiator was never tooling, and it isn't cadence either. It's whether the thing you send is worth the message it costs. Anyone on your ecommerce marketing agency Los Angeles shortlist should tell you what your customer already gets before telling you what to send.",
    derivedList: {
      title: "What to work out before your next campaign",
      items: [
        "How many messages one subscriber got last month, counting texts. Most brands never add the two together.",
        "What your signup form promises, and whether the last four sends kept it.",
        "Which of your sends would be missed if it stopped. If the answer is none, that's the cadence problem.",
      ],
    },
    supportingBlocks: [
      {
        heading: "The arithmetic, so you can check it",
        body:
          "**Four messages in thirty days** is the published ceiling before most people leave. Texts and emails count together.\n\n**Two campaign emails a week** is three times that on its own. Add an abandoned-cart flow and a back-in-stock alert and one subscriber clears it inside ten days.\n\n**So spend the budget on flows before campaigns.** A flow fires because the customer did something, so it arrives while they're already paying attention. A campaign fires because it's Thursday.\n\nThat's the trade. Not less for its own sake, but no ceiling spent on sends nobody asked for.",
      },
      {
        heading: "What the two categories do differently",
        body:
          "**Beauty pays at the door.** Money off the first order, then a list that expects money off. The cost lands later, when full price reads as the exception.\n\n**Streetwear sells the queue.** Early access to a drop, no discount near the signup. That list opens because being late means missing the thing, and that reason survives repeating.\n\n**Neither transfers whole.** A skincare brand can't manufacture scarcity. But the streetwear question is the useful one for everybody: what do we have that gets worse if you hear about it late?",
      },
      {
        heading: "What we couldn't measure, and why it matters",
        body:
          "**Send cadence.** Nobody publishes it and no archive we could reach exposes it. Getting it honestly means a month on the lists, and this is a snapshot.\n\n**Discount depth per send.** Same reason.\n\n**The offer wording.** We saw it, but the machine doing the looking sits outside the United States and several storefronts served an international version. So the offers are described as a direction, not counted.\n\nThe stack figures don't have that problem, which is why they're in the table. A site loads the same scripts wherever you open it from.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Disciplines ───────────────────────────────────────────────────────
  disciplines: {
    label: "What we do",
    heading: "Four channels, and you can take one or all four",
    intro:
      "Buy one channel or the set: an ecommerce marketing agency Los Angeles retainer should let you. Every row below is a brand we ran it for.",
    items: [
      {
        label: "Email and retention",
        heading: "We build the flows first, because they arrive when somebody's already paying attention",
        body:
          "Ecommerce marketing Los Angeles brands ask us for usually starts at the campaign calendar. We start at the flows, which is where the revenue per send is.",
        covers: ["Klaviyo build", "Welcome and browse flows", "Abandoned cart", "Win-back", "List segmentation"],
        imageAlt: "Lifecycle email we designed and built for the fragrance brand Andrea Maack",
        caseSlug: "andrea-maack-klaviyo-email",
        cta: { label: "Explore email and retention", href: "/services/klaviyo-audit" },
      },
      {
        label: "Campaigns and peak season",
        heading: "We plan the sends you'd miss, and cut the ones you wouldn't",
        covers: ["Campaign calendar", "BFCM planning", "Segmentation", "A/B testing", "Reporting"],
        imageAlt: "Peak season email campaigns we ran for Living in Sunshine",
        caseSlug: "living-in-sunshine-klaviyo-email",
        cta: { label: "Explore campaign work", href: "/services/klaviyo-audit" },
      },
      {
        label: "Subscriptions and LTV",
        heading: "We work on the second order, which is where the margin actually is",
        body:
          "The ecommerce digital marketing agency Los Angeles brands usually hire is measured on the first sale. We'd rather be measured on whether the customer comes back.",
        covers: ["Subscription setup", "Churn reduction", "Replenishment flows", "LTV reporting", "Retention offers"],
        imageAlt: "Subscription and retention work we ran for Wild",
        caseSlug: "wild-shopify-plus-subscriptions",
        cta: { label: "Explore retention work", href: "/services/shopify-cro-agency" },
      },
      {
        label: "Paid and creative",
        heading: "We make the ads and the emails look like the same brand, because they get seen together",
        covers: ["Paid social", "Creative strategy", "UGC and static", "Landing pages", "Media buying"],
        imageAlt: "Creative strategy work we ran for Chilly's",
        caseSlug: "chillys-creative-strategy",
        cta: { label: "Explore creative strategy", href: "/services/creative-strategy" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "What you're actually signing up for",
    intro:
      "Nobody here is down the road from you, and for channel work that changes nothing. It comes down to access and ownership, and both go into the engagement in writing.",
    items: [
      {
        title: "You own the account and everything in it",
        body:
          "Your Klaviyo, your ad accounts, your creative files. We work inside your logins, so nothing has to be handed back.",
      },
      {
        title: "The strategist who plans your sends is the one you message",
        body:
          "No ticket queue in front of them. If a campaign needs pulling an hour before it goes, you're talking to whoever can pull it.",
      },
      {
        title: "Sends get scheduled in your working day",
        body:
          "Campaigns go out on Pacific hours rather than ours, so somebody your side is awake if a send needs pulling.",
      },
      {
        title: "Reporting is revenue per send, not opens",
        body:
          "You get one number that says whether a send was worth making. Open rates go in the appendix, where they belong.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  whatWeDoAboutItHeading: "What it costs and how it runs",
  whatWeDoAboutIt:
    "The first fortnight is counting rather than sending. What one subscriber got from you last month, across every channel. Which of those sends earned their place. What the rest of your category put in the same inbox.\n\nThe plan comes out of that count, priced and dated.\n\nThen it's the flows, whatever survives of the campaign calendar, the creative, and a weekly number for revenue per send.\n\nRetainers run $3,000 to $15,000 a month on channels and volume; a one-off flow build is priced on its own. Any ecommerce marketing agency Los Angeles quote should separate those two, because they buy different things.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // §5 row 6: retention and LTV outcomes only. No traffic number appears here.
  proofHeading: "Three brands, and what changed after the first order",
  proof: [
    {
      slug: "happy-mammoth-shopify-subscriptions-cro",
      vertical: "Health and wellness",
      whatWasBuilt: "A rebuilt subscription experience with replenishment logic and a reworked post-purchase path",
      outcome: "+89% customer lifetime value, +134% subscription revenue",
      verified: true,
    },
    {
      slug: "wild-shopify-plus-subscriptions",
      vertical: "Beauty and personal care",
      whatWasBuilt: "A Shopify Plus subscription program built for refills, with churn-reduction flows",
      outcome: "-34% subscription churn, 80K+ monthly subscribers at 12 months",
      verified: true,
    },
    {
      slug: "living-in-sunshine-klaviyo-email",
      vertical: "Apparel and outdoor lifestyle",
      whatWasBuilt: "A Klaviyo flow rebuild and a peak-season campaign plan",
      outcome: "+219.8% flows revenue, +461.2% attributed revenue",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  objectionsHeading: "What you're probably thinking",
  objections: [
    {
      objection: "Our competitors send daily. Won't sending less just lose us the revenue?",
      answer:
        "It moves it rather than loses it, and that's worth testing before you believe any ecommerce marketing agency Los Angeles pitch, ours included.\n\nRevenue per send is the number that tells you. If it's falling while your send count climbs, the extra sends borrow from next quarter's list. Cut the weakest for six weeks and watch total revenue. If it drops and stays down, we're wrong.",
    },
    {
      objection: "We're a Beverly Hills brand. Does a remote agency understand this market?",
      answer:
        "Honestly, the ecommerce marketing Beverly Hills brands need isn't different from what a brand three miles away needs. The market is the inbox, and it's the same inbox.\n\nWhat is local is who your customer buys from besides you, and that's countable from anywhere. The table above is us counting it.",
    },
    {
      objection: "We've already got someone doing email in-house.",
      answer:
        "Then the question is what they're short of, and it's usually hands or a plan.\n\nIf it's hands, we take the build and hand it back running. If it's the plan, that's smaller work and we'd scope it that way.\n\nWhat we wouldn't do is run a channel in parallel with your own person. Two people sending to one list is how the ceiling gets blown.",
    },
    {
      objection: "How do we know you won't just run the same playbook you run for everyone?",
      answer:
        "Because the first fortnight produces a count, and counts differ. Two skincare brands with the same list size get different answers if one is also texting.\n\nEvery number here names its source and date, including one saying what our own method couldn't see. Ask for that on the work itself and you'll know whether the plan was built or reheated.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // The first three unique questions are fixed by spec §6.3 for this page.
  // The office question is §6.4, required on all seven geo pages.
  faqs: [
    {
      question: "How often should we send when every competitor sends daily?",
      answer:
        "Fewer times than they do, and published numbers back that rather than taste. Over half of US consumers unsubscribe once a company sends four or more messages in thirty days, counting texts and emails together. Daily senders buy this quarter with next year's list.",
      unique: true,
    },
    {
      question: "Should we discount when everyone in our category is discounting?",
      answer:
        "Not with the same discount, because that's the one they've already seen. Of people who unsubscribe over repeated offers, 83% say it's because the same offer turns up on another channel anyway. If you have to move stock, move it on something other than depth: a bundle, a window, early access.",
      unique: true,
    },
    {
      question: "What list size makes lifecycle work worth paying for?",
      answer:
        "Roughly five thousand engaged subscribers, though orders measure it better than addresses. Below that, flows still pay for themselves but a retainer won't, and a one-off build you run yourself is the better buy.",
      unique: true,
    },
    {
      question: "Do we need to be on Shopify for you to run this?",
      answer:
        "No. The work sits in your email and ad platforms, not in your store, so it runs whatever you're on. Shopify makes reporting easier because the revenue data is cleaner. It isn't a condition.",
      unique: true,
    },
    {
      question: "Do you run SMS as well, or just email?",
      answer:
        "Both, though we'd rather plan them as one budget than two channels. That's what the table above is about. Six of the eighteen brands we checked run a separate SMS vendor beside their email, and the two rarely talk.",
      unique: true,
    },
    {
      question: "What does an ecommerce marketing agency Los Angeles brands hire usually charge?",
      answer:
        "Ours is $3,000 to $15,000 a month on channels and creative volume, agreed before we start. A one-off flow build with no retainer is priced on its own. Rates here run above the national average and ours don't change by city.",
      unique: true,
    },
    {
      question: "How long before we see anything move?",
      answer:
        "Flows usually show inside a month, because they fire on traffic you already have. Campaign and creative changes take a quarter to read: you need enough sends to tell a real change from a good week.",
      unique: false,
    },
    {
      question: "Do you have an office we can visit?",
      answer:
        "No, we're remote, and we'd sooner say so now than have you find out in week three. The table above is the version of local that helps: what your category puts in the same inbox you're writing to.",
      unique: true,
    },
    {
      question: "Do you build stores as well, or only run marketing?",
      answer:
        "We build too, though that's not this page. If the problem is the store rather than what you're sending, that belongs on our ecommerce agency page.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Step 09: zero keywords here, and no city name either.
  conversion: {
    heading: "Tell us what you sent last month",
    whatYouGet:
      "Send us a month of your campaigns and we'll tell you what your customer actually got, and which of it earned the send.",
    whatWeWillTellYouNotToDo:
      "We'll tell you not to buy an SMS platform before the email budget is counted. Bought first, it doubles your send volume against a ceiling nobody has measured.",
    responseExpectation:
      "Someone who runs these programs answers, inside one working day.",
    audit: {
      transition:
        "You already know which send did nothing last month.",
      offer:
        "Show us that one and the month around it. We'll audit it and hand you the findings, not a summary:",
      parts: [
        "How many messages one subscriber got, counting every channel together.",
        "Which sends earned their place on revenue per send, and which are borrowing from your list.",
        "What to cut first, and what to put in the space it leaves.",
      ],
      limit:
        "It stops at the read-out. Doing the work is priced on its own and you're under no pressure to take it.",
      noObligation:
        "It costs nothing, and the count is yours whether we work together or not.",
    },
  },

  sources: [],

  // Owner's instruction, 2026-09-11: 2,500 to 2,700 words. Replaces card 6's
  // 1,300-1,700, which describes a bare spine without the trust bar, quick
  // answer, four discipline rows, four-block asset and nine FAQs this page runs.
  wordCountTarget: [2500, 2700],
};
