// Batch 1b, page 35: /services/shopify-development-agency/maine
// Inventory: Geo Inventory & Batch Plan v4.0, row #35.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "shopify agency maine" (10/mo inventory from Google Keyword
// Planner, the figure of record; the owner's SEMrush export reads 40/mo).
// SECONDARIES, and this row HAS them where the last four did not:
//   "shopify expert maine" and "shopify developer maine".
// CONSEQUENCE FOR THE SERVICE MENU: types.ts says a discipline body line exists
// ONLY where an assigned secondary has to live, which the owner ruled on
// 2026-09-05. So exactly TWO items carry a body here, one per secondary, and the
// other two carry none.
//
// TWO THINGS NO PREVIOUS ROW HAD:
//   INTENT READS INFORMATIONAL. Every other row in the set is commercial. The
//   reader is further back than usual, so the page leads with something to learn
//   rather than something to buy.
//   KEYWORD DIFFICULTY IS n/a, not low. There is not enough data to compute one,
//   and only 131 results exist for the term at all.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// "shopify agency <state>": the platform IS declared, the service is NOT. So the
// menu comes early, Shopify is never argued for, and nothing assumes which job
// he wants. And a STATE search is wider than a city search, which on this row
// matters more than usual because the state has one real metro.
//
// ── ONE IDEA (16 words) ─────────────────────────────────────────────────────
// The page offering to build your Maine store is the same page it shows
// Vermont. Check first.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch with
// us" and resolves to #contact.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// ["E"], derived. Master §5.9 and §5.10 cover metros and do not reach Maine at
// all, so nothing is assigned. E is emerging-led, defined by "fast growth, THIN
// AGENCY SUPPLY", and thin supply is this row's defining condition: 131 results
// exist in total and one firm holds nine of the top twenty. Wisconsin #34 also
// derived E on the same reasoning, which is consistent rather than lazy: both
// are states where the supply, not the demand, is the distinguishing fact.
//
// ── WHAT IS ALREADY TAKEN ON THIS HUB ───────────────────────────────────────
// Austin four kinds of company share this job title, Boston facts hidden behind
// a click, California what your store fails before anyone sells you a design,
// Los Angeles the store judged before the product, Minneapolis clothing tax,
// New York half stop doing it well once the pipeline fills, Orange County the
// dealers came first, San Diego the subscription app you are stuck inside.
// THREE LINES TO STAY CLEAR OF:
//   AUSTIN, same hub, owns WHICH KIND OF COMPANY YOU ARE HIRING, with the four
//   options table. This row's secondaries are "expert" and "developer", which is
//   exactly that territory, so they are placed in the service menu as DESCRIPTIONS
//   OF WORK and the page never compares kinds of supplier.
//   WISCONSIN #34, shipped two days ago, owns the agency list being made of
//   one-town firms. That is about WHERE a firm sits. This is about whether the
//   page it wrote was written at all. Different finding, and this one is measured
//   against a control.
//   MINNEAPOLIS #27 owns photographs per product across 10,301 products, which is
//   why no image measurement was attempted here.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 8 October 2026, from the owner's SEMrush export ───────────────────
// ONE FIRM OWNS THE PAGE. firstpier.com holds positions 1, 12, 14, 15, 16, 17,
// 18 and 19, plus its own Instagram profile at 8, plus a local pack slot, plus
// two of the five AI Overview citations. Nine of the top twenty are one firm.
// AND THE REST OF THE PAGE IS THIN: an Instagram profile ranks eighth, a
// FACEBOOK GROUP POST ranks ninth, and position eleven is a page about
// MERRIMACK, which is in New Hampshire. Page Authority reads 0 on almost every
// ranking URL.
// AN AI OVERVIEW SITS ON TOP, citing five pages, three of which are the
// generated pages measured below.
//
// ── TEARDOWN, 17 URLs opened, 13 readable ───────────────────────────────────
//   Say the word "Maine" ZERO times        2 of 13
//   Name no Maine town at all              5 of 13
//   Name only Portland                     4 of 13
//   Name two or more towns                 4 of 13
//   Show a Maine address                   5 of 13
//   Word count                             151 to 3,399, median 980
// A MEASUREMENT BUG CAUGHT AND FIXED before any of this was used: the town
// detector counted "york" inside "New York", so three out-of-state agencies read
// as naming a Maine town. The counts above exclude it.
//
// ── ORIGINAL OBSERVATION, 8 October 2026 ────────────────────────────────────
// THE QUESTION: were the pages ranking for this written for Maine, or generated
// for every state with the name swapped in?
// HOW IT WAS JUDGED, with nothing taken on trust: the same URL path was fetched
// for Vermont, New Hampshire, Montana and Idaho, and the text compared on
// five-word runs after every state name was stripped out. A high score means the
// same page.
//   barrelny.com/markets/<state>                 100% identical, 5 of 5 live
//   solomediagroup.com/pages/shopify-partners/   94% identical, 5 of 5 live
//   codieshub.com/shopify-plus-agency/<state>    93% identical, 5 of 5 live
//   netalico.com/pages/shopify-partners/         EXCLUDED by the control
// THE CONTROL IS THE POINT: a nonsense state was fetched first on every site.
// Three returned 404 for it, so their state pages are real pages. One returned
// 200 for a state that does not exist, which means it would serve anything, so
// it is excluded rather than counted. That exclusion is why the number is
// trustworthy.
// The page ranking THIRD is the 100% one, and it is also one of the two that
// never says "Maine".
//
// LIMITS, stated on the page: four comparison states; text compared after the
// state names are removed, so a page that only swaps the name scores high by
// design and that is the finding rather than a flaw; one site excluded by its own
// control; and a generated page is not necessarily a bad agency, it is only a
// page that was not written for the reader.
//
// NOBODY IS NAMED on the page. Counted, never named.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// Picked for numbers an owner can weigh, which the owner asked for on #34:
//   Ronaldo Jewelry  total sales +250%, conversion +120%
//   John Hardy       conversion +71%, replatformed in under 3 months, on time
//   VITHIT           revenue +115%, conversion +170%
//
// PRESENCE (Master §4): none claimed. REVIEW: 180 days.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const SHOPIFY_DEV_MAINE: GeoPage = {
  type: "geo",
  slug: "maine",
  path: "/services/shopify-development-agency/maine",
  hub: "/services/shopify-development-agency",

  geo: {
    name: "Maine",
    type: "state",
    areaServed: "Maine",
  },
  archetype: ["E"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "shopify agency maine",
  secondaryKeywords: ["shopify expert maine", "shopify developer maine"],
  faqKeywords: [
    "how do i choose a shopify agency",
    "what does a shopify developer do",
    "what is a shopify expert",
    "how much does shopify development cost",
    "can you work on my existing shopify theme",
    "do i need a shopify plus agency",
  ],
  reviewedPhrases: ["in Maine"],

  metaTitle: "Shopify Agency Maine | Work You Can Check Before You Buy",
  metaDescription:
    "A Shopify agency Maine brands hire for storefront builds, custom work and migrations. We tested whether the pages ranking here were written for Maine at all.",
  shortTitle: "Shopify agency Maine",
  serviceType: "Shopify development agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Service-led, no problem named, differentiator at the end. Must differ from
  // every H1 on this hub and from Wisconsin's "design, build and look after the
  // store" on the neighboring hub.
  h1: "Shopify agency Maine brands hire to build, fix and extend the store",
  qualifier:
    "Design, build, custom work and migration, on the Shopify store you already run. Each change we propose comes with the reason for it, so you can judge it before you pay.",

  // Built by scratchpad/me35-hero.mjs. New filename each time, never an
  // overwrite: next/image caches per path. Cards sit BELOW the window with the
  // position derived from the window's real height, which is the fix #33 needed
  // twice and #34 inherited.
  heroImage: {
    src: "/images/shopify-development-agency-maine-hero-v1.webp",
    alt: "A Shopify Plus storefront we built for the jewelry brand Ronaldo, beside cards reading total sales up 250 percent and conversion up 120 percent",
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
    heading: "{storesBuilt} stores built, and a reason attached to every change.",
    subheading: "Food, outdoor, apparel, jewelry. Whichever Shopify agency Maine brands you call, ask them to show you the page they wrote about your state.",
  },

  assetCtaLabel: "See what the test showed",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  // PAIN FIRST. The owner's #34 note: a page that opens with information about
  // agencies gives a store owner nothing to recognise. This opens on something
  // he has lived through and it is not a guess about his store being broken.
  hook:
    "The person who built your store may well have moved on. It happens a lot. So when something needs changing you are starting again with somebody who has never seen it.\n\nThat is the hard part, and it is why we ran a test instead of writing another pitch. We took the pages ranking here and fetched the same page for four other states.\n\nOne was word for word identical across all five. Two more were over nine tenths the same. The page sitting third never uses the word Maine at all. Worth knowing which of them wrote that page for you, before you call any Shopify agency Maine brands recommend.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is a Shopify agency Maine brands hire to build, extend and move stores on Shopify and Shopify Plus. We take on your store as it stands. Every change we propose arrives with the reason and the number it is meant to move.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // Master does not reach Maine, so this is observed rather than cited. It
  // carries a pain an owner here recognises and it explains the thin supply the
  // archetype is derived from.
  placeLayerHeading: "One city, and everybody else a long way from it",
  placeLayer:
    "Maine has one real metro and then a very long state behind it. Most brands here are nowhere near Portland, and a good many were a workshop or a shop floor before they were a website.\n\nSo the store was usually built by whoever was nearest at the time. A freelancer, a cousin, a local studio that has since closed. It worked, and then it got left alone.\n\nWhen you need it changed, the person who knows how it was put together is often gone. That is the position a Shopify agency Maine founders brief is usually walking into, and it is worth saying out loud rather than pretending the handover was clean.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  // Sourced fact, kept on the STORE rather than on the agency market, which was
  // the owner's correction on #34. Shopify's own documentation that a theme can
  // be edited and version-controlled supports the argument that work done well
  // is work somebody else can pick up.
  gradientLayerHeading: "Work you cannot inspect is work you cannot move",
  gradientLayer:
    "**Your theme is a set of files.** The platform's own documentation describes a code editor where those files are opened and changed directly, and tells you to duplicate the theme first so the original survives. The work done on your store is readable by whoever you hire next.\n\n**So it can be handed over.** A change made in the theme can be found, explained and undone. A change buried somewhere nobody documented is the one that strands you when the person who made it stops answering.\n\n**That is the thing to ask about.** Not how long they have been going. Any Shopify agency Maine brands trust should be able to say where a change will live and who could pick it up after them.",
  gradientFacts: [
    {
      id: "shopify-theme-code-2026",
      claim:
        "Shopify Help Center, 'Edit theme code' (help.shopify.com/en/manual/online-store/themes/theme-structure/extend/edit-theme-code), read 8 October 2026. States that a merchant 'can edit your theme code to make detailed changes to your online store with the code editor', that 'Theme files also contain HTML, CSS, JSON, and JavaScript', that 'When you click a file in the directory, it opens in the code editor', and instructs 'Duplicate your theme to create a backup copy'. NOTE ON AN EARLIER DRAFT OF THIS CLAIM: it asserted the documentation covers keeping theme files in version control. It does not say that, and the sentence was removed from the page before publishing. Cited for the gradient block, where the argument is that work done in the theme is readable and transferable to whoever the merchant hires next. BOUNDS OF THE CITATION: a single vendor's manual, setting out what the platform permits rather than what has actually been done inside any particular store, and carrying no visible revision date. The page draws from it only that theme work is inspectable and transferable, which is not a claim that every store's history was kept that way.",
      url: "https://help.shopify.com/en/manual/online-store/themes/theme-structure/extend/edit-theme-code",
      publisher: "Shopify Help Center",
      captured: "2026-10-08",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-maine-template-test-2026",
      claim:
        "Original observation, 8 October 2026. Nineteen URLs rank in the top twenty for 'shopify agency maine'. Seventeen were loaded in a desktop browser at 1440px; thirteen rendered something readable and four returned 403. Of those 13: 2 never use the word 'Maine' anywhere on the page; 5 name no Maine town at all; 4 name only Portland; 4 name two or more towns; 5 show a Maine address; and length ran from 151 to 3,399 words, median 980. SEPARATELY AND AS THE MAIN TEST, the pages whose URLs suggested a per-state template were fetched again for Vermont, New Hampshire, Montana and Idaho, and their text compared on overlapping five-word runs after every state name had been stripped out: one site's pages were 100% identical across all five states, a second 94% identical, a third 93% identical. A CONTROL RAN FIRST on every site, fetching the same path for a state that does not exist: three returned 404, confirming their state pages are real pages rather than a catch-all, and a fourth returned 200 for the nonsense state and was therefore excluded from the result rather than counted. The 100% identical page ranks third for this term and is also one of the two that never says 'Maine'. A MEASUREMENT BUG WAS CAUGHT AND FIXED before publishing: the town detector matched 'york' inside 'New York', so three out-of-state firms read as naming a Maine town; the counts above exclude it. LIMITS: four comparison states; the comparison deliberately removes state names, so a page that only swaps the name scores high by design, which is the finding rather than a flaw in the method; one site is excluded by its own control; the readable set is 13 of 19 and the rest are excluded rather than assumed; and a generated page does not make a bad agency, it only makes a page that was not written for the reader. No firm is named.",
      url: "https://www.ecommwizards.com/services/shopify-development-agency/maine",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-10-08",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "We fetched the same pages for four other states",
    intro:
      "A page about your state is the cheapest promise an agency can make, so it is worth checking whether anybody kept it. We took the results ranking here and asked for the same page about Vermont, New Hampshire, Montana and Idaho. No firm is named below.",
    renderer: "frequency",
    tone: "cream",
    method: {
      sampleSize: 19,
      window: "19 ranking URLs, 13 readable, 8 October 2026",
      captured: "2026-10-08",
      howGathered:
        "We opened every result in the top twenty and recorded what it was, how long it ran and which towns it named. Then we picked the ones whose web address looked like a template. We asked each site for the same page about four other states and compared the words, with every state name taken out first. Before any of that we asked each site for a state that does not exist. Three said no, which is how we know their pages are real. One said yes, so we left it out of the result entirely. Four limits you should know. Four comparison states. Thirteen of nineteen pages would open. A page built to a pattern does not make a bad agency. And no firm is named here.",
    },
    columns: ["What we checked", "What came back"],
    rows: [
      { label: "Results we could open and read", cells: ["13 of 19"] },
      { label: "Pages that never say the word Maine", cells: ["2 of 13"], note: "One of them ranks third." },
      { label: "Pages naming no Maine town at all", cells: ["5 of 13"] },
      { label: "Pages naming only Portland", cells: ["4 of 13"] },
      { label: "Shortest page on the first screen", cells: ["151 words"], note: "The middle one runs 980." },
      { label: "Same page served for five different states", cells: ["100% identical"], note: "This is the one ranking third." },
      { label: "And the next two we tested", cells: ["94% and 93%"] },
      { label: "Sites excluded by our own control", cells: ["1"], note: "It answered to a state that does not exist." },
    ],
    derived:
      "The last row is the one that makes the rest trustworthy.\n\nBefore comparing anything we asked each site for a page about a state that is not real. Three correctly said no, so we knew their state pages were real pages. One cheerfully produced one, so we threw its result away rather than count it.\n\nWhat is left is plain. One site serves the same words to Maine, Vermont, New Hampshire, Montana and Idaho, and it is sitting third. Two more are within a tenth of that.\n\nNone of this means those firms do poor work. Plenty of good agencies publish pages like this, and a template is a reasonable way to cover fifty states cheaply.\n\nIt does mean the page told you nothing about whether they understand your store, which is the thing you were trying to find out. That is a test you can run yourself in about two minutes on any Shopify agency Maine search puts in front of you.",
    derivedList: {
      title: "The two-minute version you can run yourself",
      items: [
        "Take the web address of the page about your state and swap your state for another one. If the page still loads and reads the same, it was not written for you.",
        "Search their site for the name of your town. If it appears nowhere, ask them which brands near you they have worked with.",
        "Ask which single change they would make first, then ask why that one. A real answer names something only visible inside your theme.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Why a template is not the same as a bad agency",
        body:
          "**Covering fifty states by hand is expensive.** Generating them is the obvious answer, and plenty of firms doing excellent work have done exactly that.\n\n**So this is not a verdict on anybody.** It is a measurement of what the page in front of you can tell you, which turns out to be almost nothing.\n\n**It just moves the question.** You still have to find out whether they understand your store, and a Shopify agency Maine brands shortlist should expect to be asked.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Block 6: Service menu (he has not picked a service) ────────────────
  // TWO body lines only, one per assigned secondary, per the owner's 2026-09-05
  // ruling. "shopify expert maine" lives on the custom development row and
  // "shopify developer maine" on the build row. The other two carry no body.
  disciplines: {
    label: "What we do",
    heading: "Four jobs, and what each one actually involves",
    intro:
      "Each row below opens the store it was done for. Brands tend to arrive certain they need one of these and discover the real job is the one beside it. All four together are what a Shopify agency Maine teams keep on retainer gets asked to do.",
    items: [
      {
        label: "Design and build",
        heading: "We build the storefront and leave it readable",
        body: "Hiring a Shopify developer Maine brands can hand over to matters more than the build itself, so the theme stays documented and anybody competent can pick it up.",
        covers: ["Storefront build", "Product pages", "Checkout", "Account area", "Design systems"],
        imageAlt: "A Shopify Plus redesign for the jewelry brand Ronaldo",
        caseSlug: "ronaldo-jewelry-shopify-plus-redesign",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Custom development",
        heading: "We build what the theme and the apps cannot",
        body: "A Shopify expert Maine founders bring in for one awkward feature should be able to say where it will live and what happens to it later, before any of it is written.",
        covers: ["Custom features", "Shopify Plus", "Checkout extensions", "Integrations", "Support"],
        imageAlt: "Direct to consumer development for the drinks brand VITHIT",
        caseSlug: "vithit-shopify-plus-d2c",
        cta: { label: "Explore custom development", href: "/services/shopify-store-development" },
      },
      {
        label: "Migration",
        heading: "We replatform without giving back the traffic",
        covers: ["Platform migration", "Redirect mapping", "Data migration", "Search equity"],
        imageAlt: "A Shopify Plus replatform for the jewelry brand John Hardy",
        caseSlug: "john-hardy-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Growth",
        heading: "We change one thing at a time and measure it",
        covers: ["A/B testing", "Conversion work", "Speed", "Paid landing pages"],
        imageAlt: "Subscription and conversion work for the health brand Happy Mammoth",
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        cta: { label: "Explore growth work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "The part that never changes",
    tone: "white",
    intro: "These four hold no matter which job you buy. Ask every Shopify agency Maine brands weigh up for the same.",
    items: [
      {
        title: "You get the reason, not just the change",
        body: "Every item we propose comes with what it is meant to move and how we will know. If we cannot tell you that, we do not propose it.",
      },
      {
        title: "The work stays readable",
        body: "Changes live in the theme where they can be found, with a note on what was done. Whoever you hire after us can follow it.",
      },
      {
        title: "Your store stays yours",
        body: "Every account, every file and every customer record is in your name and stays there. End it whenever you like and nothing of yours leaves with us.",
      },
      {
        title: "You sign the work off first",
        body: "The scope gets written down and signed by you before any work begins. Should it need to move part way through, that conversation comes from us at the time.",
      },
    ],
  },

  // ── Block 7: Where we would start ─────────────────────────────────────
  whatWeDoAboutItHeading: "Where we would start on your store",
  whatWeDoAboutIt:
    "We open your theme and your store together and write down what has been done to it, including the parts nobody mentions. That usually takes an afternoon.\n\nThen you get the list: what is holding, what is fragile, and what somebody added once and never removed. Plenty of stores carry two or three of the last kind.\n\nYou can hand that list to anyone. A Shopify agency Maine brands keep ought to stand or fall on whether that reading was accurate, rather than on how many years are on the website.",

  midCta: {
    text: "Want the same reading of your own theme? Give us the address and it comes back inside the week.",
    label: "Get in touch with us",
  },

  servicesCta: {
    text: "Not sure which of the four you need? Tell us about the store and we will name the one we would start on.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "The opening call covers your theme and what has been done to it. There is no charge, and that holds even when our conclusion is to leave most of it alone.",
    label: "Get in touch with us",
  },

  // ── Block 8: Proof ────────────────────────────────────────────────────
  proofHeading: "Three builds, and the numbers that followed",
  proof: [
    {
      slug: "ronaldo-jewelry-shopify-plus-redesign",
      vertical: "Jewelry",
      whatWasBuilt: "A Shopify Plus rebuild around how people actually choose a piece",
      outcome: "+250% total sales, +120% conversion, +46% average order value",
      verified: true,
    },
    {
      slug: "john-hardy-shopify-plus-migration",
      vertical: "Jewelry and accessories",
      whatWasBuilt: "A replatform onto Shopify Plus delivered before the Black Friday window",
      outcome: "+71% conversion, replatformed in under 3 months, launched on time",
      verified: true,
    },
    {
      slug: "vithit-shopify-plus-d2c",
      vertical: "Drinks",
      whatWasBuilt: "A direct to consumer build with custom work the theme could not do",
      outcome: "+115% revenue, +170% conversion, +31% average order value",
      verified: true,
    },
  ],

  // ── Block 9: Objections ───────────────────────────────────────────────
  objectionsHeading: "Where people push back",
  objections: [
    {
      objection: "We would rather use somebody in the state.",
      answer:
        "Reasonable, and there are good firms here.\n\nAsk them the same questions either way. Where a change will live, who could pick it up afterwards, and what they would alter on your store first. The answers sort people faster than a postcode does, whichever Shopify agency Maine brands put on the list.",
    },
    {
      objection: "Our theme has been customized to death already.",
      answer:
        "That is the usual starting point, not a reason to avoid us.\n\nThe first job is finding out what is actually in there. Until somebody reads it, every estimate you get is a guess, including ours.",
    },
    {
      objection: "We are on basic Shopify, not Plus.",
      answer:
        "Most of what we do never needs Plus, and we will say so plainly if yours does not.\n\nIf a job genuinely requires it we will show you which part, and you can decide whether that part is worth it. A Shopify agency Maine founders trust should be willing to talk you out of an upgrade.",
    },
    {
      objection: "The last agency left us with a mess.",
      answer:
        "It happens often enough that we start every job assuming it.\n\nNothing we add goes somewhere only we can find, and you get a note on what changed and why. That is the part a Shopify agency Maine brands recommend should be willing to commit to in writing.",
    },
  ],

  // ── Block 10: FAQ ─────────────────────────────────────────────────────
  faqHeading: "What brands ask before they pick anyone",
  faqs: [
    {
      question: "How do I choose a Shopify agency?",
      answer:
        "Put the same question to each one: what would you change first here, and why that. The reasoning varies far more than the quotes do, and it shows who actually looked.",
      unique: true,
    },
    {
      question: "What does a Shopify developer do?",
      answer:
        "Writes the parts of your store a theme and its apps cannot. Checkout behavior, custom product logic, connections to whatever you run the business on.",
      unique: true,
    },
    {
      question: "What is a Shopify expert?",
      answer:
        "In practice it means somebody who has done the thing you need before. Ask which of your problems they have solved rather than how long they have been listed anywhere.",
      unique: true,
    },
    {
      question: "Can you work on our existing theme?",
      answer:
        "Yes, and that is most of what we do. We duplicate it first so your live store is never the thing being experimented on.",
      unique: true,
    },
    {
      question: "Do we need Shopify Plus?",
      answer:
        "Usually not. It earns its place for checkout changes, wholesale and heavy traffic, and we will tell you if your job sits outside those.",
      unique: true,
    },
    {
      question: "How long does a build take?",
      answer:
        "Reading what is already there takes an afternoon. A storefront build runs weeks rather than months, and the part that stretches is always your decisions rather than the code.",
      unique: true,
    },
    {
      question: "Are you a Shopify agency Maine brands can work with remotely?",
      answer:
        "Yes, and every job here runs that way. There are no offices of ours anywhere in the state, and nothing in your build turns on which desk it gets written at.",
      unique: true,
    },
    {
      question: "What happens if we stop working with you?",
      answer:
        "You keep everything, and what we changed is documented in the theme. The next person can read it without ringing us, which is the point.",
      unique: true,
    },
    {
      question: "Our developer is still with us. Does that work?",
      answer:
        "That is frequently the quickest route. Give them the reading and we will review what comes back, or we pick up whichever pieces your team has no room for.",
      unique: true,
    },
    {
      question: "Will you tell us if we do not need the work?",
      answer:
        "Yes, and it happens. If the store is in decent shape you get told that instead of a proposal.",
      unique: true,
    },
  ],

  // ── Block 11: Conversion ──────────────────────────────────────────────
  conversion: {
    heading: "Give us the store address and we will read the theme",
    whatYouGet:
      "We read your theme and your store, then send back what is holding, what is fragile and what to do first.",
    whatWeWillTellYouNotToDo:
      "Where the theme is in reasonable order we say exactly that, instead of writing up a job nobody needs.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition: "The same reading, done on your store instead of on somebody's marketing page.",
      offer: "Put your store address in the form, and you get back:",
      parts: [
        "What has been added to the theme over the years, including the parts nobody mentions.",
        "Which of it is holding, which is fragile, and which is doing nothing at all.",
        "The one change we would make first, and everything we would deliberately not touch.",
      ],
      limit: "You get the findings and nothing else attached to them.",
      noObligation: "Free, and nobody chases you afterwards.",
    },
  },

  wordCountTarget: [2000, 2500],
  sources: [],
};
