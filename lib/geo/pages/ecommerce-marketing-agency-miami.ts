// Inventory row #17: /services/ecommerce-marketing-agency/miami
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce marketing agency miami" (10/mo, inventory).
// Secondaries supplied by the owner 11 October 2026: "ecommerce marketing
// miami" and "miami ecommerce marketing company".
//
// ── STEP 01 ─────────────────────────────────────────────────────────────────
// "He typed this because he already decided he wants outside help selling more
// from an online store, and still needs to work out which channel, and who to
// trust with it." SERVICE IS OPEN (email, SMS, ads, creative, landing pages,
// conversion) and the PLATFORM IS OPEN, since channel work runs on any store.
// So the channel menu comes early, nothing assumes Shopify, and the migration
// door sits in the quick answer and one FAQ for the reader whose store is the
// real problem.
//
// ── ONE IDEA (19 words) ─────────────────────────────────────────────────────
// Your brand is in Miami. Your customers can be anywhere. Your marketing has
// to work wherever each one is.
//
// ── HOW EVERY SECTION SERVES IT ─────────────────────────────────────────────
//   hook        frames it: down the street or three time zones away, and
//               every channel answers for its orders
//   categories  WHAT they buy changes what they need to see
//   proof       brands we reached, one per channel
//   channels    HOW we reach them, one channel or all five
//   gradient    WHERE they are changes the clock and the texting rules
//   asset       the seven things that follow the customer, not the address
//   objections  three, the last doubts before handing over a channel
//
// ── OWNER'S CORRECTION, 12 OCTOBER 2026 ─────────────────────────────────────
// The first build framed the gradient and asset on Florida's texting law, and
// the owner rejected it twice over: the page is about Miami, not Florida, and
// a Miami brand whose customers are spread across the US would read it as "not
// for me". Rebuilt NATIONAL FIRST: federal rules cover every US number, the
// customer's own clock decides when a send lands, and Florida appears once, as
// one of ten states with rules of their own. The Miami tie is the brand's
// address, which is exactly what the section says does NOT set the rules.
// Objections cut from four to three on the same review; the one dropped
// ("our customers are all over the country") is now answered by the page.
//
// It never argues against SMS (Step 04 rule 1). Every mention lands on "set it
// up right and it is a good channel", and the proof for the channel is Andrea
// Maack, whose SMS we built from scratch with consent capture.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// ["C"], cost-led: the rules argument rests on what a text without consent
// costs ($500, trebled if willful). Master §5.10 wants two pages for one metro
// on different emphasis; ecommerce-agency/miami took D.
//
// ── SECONDARY OWNERSHIP (one section each) ──────────────────────────────────
//   ecommerce marketing miami          -> faqs[3]
//   miami ecommerce marketing company  -> whatWeDoAboutIt
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// Matched on the CHANNEL, so a reader who wants one channel finds a brand we
// ran it for. Miami's lifestyle and beauty lean is hinted by the hero (surf)
// and the categories block, never by narrowing the copy.
//   hero         Living in Sunshine (video)
//   disciplines  C&E Craft Co, Andrea Maack, Prose, Loop Earplugs, Twillory
//   proof        Living in Sunshine, Chilly's, Nurture Life
//   results      Happy Mammoth, Wild (quotes, disjoint from the proof grid)
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
// Read 11 and 12 October 2026: the federal regulation and statute on Cornell
// LII, the Supreme Court's text-is-a-call holding, and three Klaviyo pages.
// All in gradientFacts.
//
// NOT USED, AND WHY: any time-of-day LAW. The federal 8 a.m. to 9 p.m. rule in
// 47 CFR 64.1200(c)(1) applies to "telephone solicitations", and that term
// excludes messages sent with the person's permission, so whether it binds a
// consented SMS list is a legal question. The page makes the time-zone point
// as plain arithmetic and good practice instead, never as law.
//
// PRESENCE (Master §4): none claimed. No "in Miami" anywhere on the page.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_MARKETING_AGENCY_MIAMI: GeoPage = {
  type: "geo",
  slug: "miami",
  path: "/services/ecommerce-marketing-agency/miami",
  hub: "/services/ecommerce-marketing-agency",

  geo: {
    name: "Miami",
    type: "metro",
    areaServed: "Miami, Florida",
  },
  archetype: ["C"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce marketing agency miami",
  secondaryKeywords: ["ecommerce marketing miami", "miami ecommerce marketing company"],
  faqKeywords: [
    "do i need consent to send marketing texts",
    "what happens when a customer replies stop",
    "sending marketing to customers in different time zones",
    "ecommerce marketing agency cost miami",
    "which marketing channel should we start with",
  ],

  metaTitle: "Ecommerce Marketing Agency Miami | Email, SMS, Ads, CRO",
  metaDescription:
    "An ecommerce marketing agency Miami brands hire for email, SMS, ads and CRO. Every channel reported in orders, wherever in the US your customers live.",
  shortTitle: "Ecommerce marketing agency Miami",
  serviceType: "Ecommerce marketing agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "Ecommerce marketing agency Miami brands hire to get more orders from every channel",
  qualifier:
    "Email, SMS, paid social, ad creative, landing pages and conversion. Take one channel or hand us all of them. You get a scope, a price and a start date in writing first.",

  heroImage: {
    src: "/images/Case%20studies/posters/Living%20in%20Sunshine%20Klaviyo%20video.webp",
    alt: "Email flows and campaigns we rebuilt for the surf and outdoor brand Living in Sunshine",
    video: "/images/Case%20studies/Living%20in%20Sunshine%20Klaviyo%20video.mp4",
    aspect: "4 / 5",
  },

  // One action in the hero. The asset is a reading of a statute, and pointing
  // a second click at it reads as homework (the Maryland #38 reasoning).
  heroCtaLabel: "Get in touch with us",
  hideHeroSecondaryCta: true,
  segmentsReplacePlace: true,
  servicesBeforeGradient: true,
  // Keeps the lower bands alternating: the client quotes are white, and the
  // form above the related services is cream.
  whatWeDoAboutItTone: "cream",
  relatedTone: "white",

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years on the platform" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading: "Surf, fragrance, haircare, candles, kids' meals and menswear, among others.",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  // About every channel, and about what WE do. It never guesses which channel
  // is the reader's problem (Step 04 rule 4).
  hook:
    "You run your brand from Miami. Your customers might be down the street, or three time zones away.\n\nYour marketing has to work for both. That means an email that lands while they're awake, a text they agreed to get, and an ad for something they'd actually buy.\n\nAnd every channel has to answer one question: how many orders did it bring in? We tie each one back to real orders, then put your next dollar where it sells the most. Some brands hand us one channel, and some hand us all of them.",

  quickAnswer:
    "Ecomm Wizards is an ecommerce marketing agency Miami brands hire for email, SMS, paid social, ad creative and conversion. We report every channel in orders, not opens. Your store can be on any platform. If the store itself is what's holding sales back, we build on Shopify and move stores onto it too.",

  // ── Block 3: Categories, in the place slot ────────────────────────────
  // The vertical HINT (lifestyle, beauty, wellness, luxury), carried by a block
  // that names six categories, so no buyer reads it as "not for us".
  segments: {
    heading: "What sells a swimsuit won't sell a supplement. So we start with what you sell.",
    intro:
      "Plenty of the brands we market sell to the whole country. The channels stay the same for all of them. What changes is what a customer needs to see before they buy. An ecommerce marketing agency Miami brands hire should ask what you sell before it asks for a budget.",
    items: [
      {
        icon: "apparel",
        name: "Fashion and apparel",
        what: "Ads that show fit and fabric, and emails timed to drops and seasons.",
        breaks: "Returns. An ad that sells the wrong size wins the order and loses the margin.",
      },
      {
        icon: "beauty",
        name: "Beauty and fragrance",
        what: "Samples, routines and refills, so the second order has a reason to happen.",
        breaks: "The second bottle. If nothing asks for it, the customer buys it from someone else.",
      },
      {
        icon: "consumable",
        name: "Wellness and supplements",
        what: "Subscriptions and reminders built around how long one tub actually lasts.",
        breaks: "The reorder date. Miss it by a week and the routine moves on without you.",
      },
      {
        icon: "jewelry",
        name: "Jewelry and luxury",
        what: "Fewer, better sends, and creative that looks like what it costs.",
        breaks: "The discount. One percent-off email and your full price starts to look negotiable.",
      },
      {
        icon: "box",
        name: "Food, drink and gifting",
        what: "Bundles, gift sets and seasonal ranges, sold before the window closes.",
        breaks: "The cutoff. A gift email that lands after the last delivery date sells nothing.",
      },
      {
        icon: "outdoor",
        name: "Outdoor and lifestyle",
        what: "Content that shows the product in use, in the places it's meant for.",
        breaks: "The quiet months. A list that only hears from you in peak season forgets you.",
      },
    ],
  },

  // ── Block 7: Proof, one brand per channel ─────────────────────────────
  proofHeading: "Three brands, three channels, and the number each one moved",
  proof: [
    {
      slug: "living-in-sunshine-klaviyo-email",
      vertical: "Surf and outdoor lifestyle",
      whatWasBuilt: "Email flows rebuilt, a VIP flow added, and a peak-season campaign plan",
      outcome: "+461.2% attributed revenue, +219.8% from flows",
      verified: true,
    },
    {
      slug: "chillys-creative-strategy",
      vertical: "Drinkware and lifestyle",
      whatWasBuilt: "Paid social rebuilt around hook-led video, UGC and a repeatable series",
      outcome: "+33% revenue on 22% less ad spend, +60% ROAS",
      verified: true,
    },
    {
      slug: "nurture-life-creative-strategy",
      vertical: "Kids' meal delivery",
      whatWasBuilt: "Parent and kid UGC, produced and tested until the strongest angles won",
      outcome: "+232% conversion rate, -14% cost per acquisition",
      verified: true,
    },
  ],

  // ── Channel menu ──────────────────────────────────────────────────────
  // Early, because the reader has not picked a channel (Step 07).
  disciplines: {
    label: "What we do",
    heading: "Five channels. Take one, or hand us all five.",
    intro:
      "Every row below is a brand we ran that channel for. Start with one, and add the next once the first one is paying its way. Any ecommerce marketing agency Miami brands hire should let you buy that way.",
    items: [
      {
        label: "Email and retention",
        heading: "We build the flows before the campaigns, because flows go out when someone's ready to buy",
        covers: ["Klaviyo setup", "Welcome and cart flows", "Win-back", "Segmentation", "Campaign calendar"],
        imageAlt: "Email flows and seasonal campaigns we built for the candle brand C&E Craft Co",
        caseSlug: "cecraft-klaviyo-email",
        cta: { label: "Explore email marketing", href: "/services/klaviyo-audit" },
      },
      {
        label: "SMS",
        heading: "We set up SMS so every number on your list has said yes in writing",
        covers: ["Consent capture", "Signup forms", "Text flows", "Opt-out handling", "One email and SMS calendar"],
        imageAlt: "Email and SMS we built from scratch for the fragrance brand Andrea Maack",
        caseSlug: "andrea-maack-klaviyo-email",
        cta: { label: "Explore SMS work", href: "/services/klaviyo-audit" },
      },
      {
        label: "Paid social and creative",
        heading: "We make the ads in batches, test them against each other, and spend on the winners",
        covers: ["Creator video", "UGC", "Static ads", "Creative testing", "Paid social"],
        imageAlt: "Creator video we produced and tested for the haircare brand Prose",
        caseSlug: "prose-creative-strategy",
        cta: { label: "Explore creative strategy", href: "/services/creative-strategy" },
      },
      {
        label: "Landing pages",
        heading: "We build a page for each campaign, so the click lands on the promise the ad made",
        covers: ["Campaign pages", "Offer pages", "Mobile layouts", "Page speed"],
        imageAlt: "A campaign landing page we designed and tested for Loop Earplugs",
        caseSlug: "loop-earplugs-shopify-landing-page-cro",
        cta: { label: "Explore landing pages", href: "/services/shopify-landing-page-design" },
      },
      {
        label: "Conversion and testing",
        heading: "We test changes on your store and keep only the ones that win more orders",
        covers: ["A/B testing", "Product pages", "Checkout", "Analytics"],
        imageAlt: "A/B tests we ran on the menswear store Twillory",
        caseSlug: "twillory-shopify-cro",
        cta: { label: "Explore conversion work", href: "/services/shopify-cro-agency" },
      },
    ],
  },

  servicesCta: {
    text: "Not sure which channel to start with? Tell us what you sell, and we'll tell you which one we'd open first.",
    label: "Get in touch with us",
  },

  // ── Block 4: Gradient layer. Service x place ──────────────────────────
  // National first. The Miami tie is the brand's address, which is the thing
  // the section says does NOT set the rules. Florida appears only as one of
  // ten states with rules of their own.
  gradientLayerHeading: "You send from Miami. The rules come from wherever your customer is.",
  gradientLayer:
    "Your customers could be anywhere in the US. That's good for sales, and it changes a few things about how you reach them.\n\n**The clock is theirs, not yours.** A text sent at 9 a.m. Miami time lands at 6 a.m. California time. A good setup holds each message until it's a sensible hour where that customer lives.\n\n**The texting rules are national.** Federal law treats a marketing text as a call, on every US number. Sending them by machine needs the customer's written consent, and an electronic signature counts. Each text sent without it can cost $500, or up to three times that if a court finds it was willful.\n\n**And some states add their own.** At least ten have rules on top of the federal ones, Florida among them. So what applies to a text depends on where the customer's phone is, not where your brand sits.\n\nNone of that makes SMS a bad channel. It means the setup has to be right before the first send.",
  gradientFacts: [
    {
      id: "fcc-64-1200-consent-and-revocation",
      claim:
        "47 CFR 64.1200, read on Cornell LII (law.cornell.edu/cfr/text/47/64.1200) on 12 October 2026. (a)(2): autodialed or prerecorded telemarketing calls to wireless numbers require 'the prior express written consent of the called party'. (f)(9): prior express written consent is 'an agreement, in writing, bearing the signature of the person called' that authorizes the telemarketing messages and names the telephone number, with a clear disclosure that the person is not required to sign as a condition of purchase; 'signature' includes 'an electronic or digital form of signature, to the extent that such form of signature is recognized' under federal or state contract law. (a)(10): consent may be revoked 'by using any reasonable method', reply words such as 'stop' are reasonable per se, and revocation must be honored 'within a reasonable time not to exceed ten business days from receipt of such request'. Supports gradient paragraph three and asset rows three, four and five.",
      url: "https://www.law.cornell.edu/cfr/text/47/64.1200",
      publisher: "47 CFR 64.1200, via Cornell Legal Information Institute",
      captured: "2026-10-12",
      reviewAfterDays: 180,
    },
    {
      id: "tcpa-227-damages",
      claim:
        "47 U.S.C. 227(b)(3), read on Cornell LII on 12 October 2026: a person may 'receive $500 in damages for each such violation' or actual loss if greater, and if the violation was willful or knowing the court may increase the award 'to an amount equal to not more than 3 times' that amount. Supports the $500 and trebling figures in the gradient and asset row seven.",
      url: "https://www.law.cornell.edu/uscode/text/47/227",
      publisher: "47 U.S.C. 227, via Cornell Legal Information Institute",
      captured: "2026-10-12",
      reviewAfterDays: 365,
    },
    {
      id: "campbell-ewald-text-is-a-call",
      claim:
        "Campbell-Ewald Co. v. Gomez, 577 U.S. 153 (2016): the Supreme Court accepted that a text message to a cellular telephone 'qualifies as a call' within the TCPA's prohibition on autodialed calls without prior express consent. Read via the National Consumer Law Center summary on 12 October 2026. Supports 'federal law treats a marketing text as a call'.",
      url: "https://library.nclc.org/supreme-court-applies-tcpa-text-messages-affirms-fccs-vicarious-liability-principles",
      publisher: "U.S. Supreme Court, via National Consumer Law Center",
      captured: "2026-10-12",
      reviewAfterDays: 365,
    },
    {
      id: "klaviyo-mini-tcpa-states",
      claim:
        "Klaviyo glossary, 'What is a mini-TCPA?', read 12 October 2026: 'Mini-TCPAs are state-level laws modelled after the federal Telephone Consumer Protection Act' that 'often impose stricter regulations on telemarketing activities', including automated calls and text messages. Lists ten states: Arizona (HB 2498), Connecticut (SB 1058), Florida (SB 1120), Georgia (SB 73), Maryland (SB 90), New Jersey (SB 921), New York (Article 26), Oklahoma (HB 3168), West Virginia (HB 4886), Washington (HB 1497). The page says 'at least ten' because other trackers count more. No state's rules are summarized on the page beyond that, and the page carries no date of last revision.",
      url: "https://www.klaviyo.com/glossary/what-is-mini-tcpa",
      publisher: "Klaviyo",
      captured: "2026-10-12",
      reviewAfterDays: 180,
    },
    {
      id: "klaviyo-quiet-hours-and-stop",
      claim:
        "Klaviyo Help Center, read 11 and 12 October 2026. 'Quiet hours in campaigns': 'Quiet hours evaluates each recipient based on the location and time zone stored on their Klaviyo profile', and a text landing in quiet hours is delayed or skipped. 'How to configure your opt-out keyword settings' (article 29109965092251): 'Any time a US number includes the word stop in a text, Klaviyo automatically and immediately removes SMS consent.' Supports asset rows one and five and FAQ two. Klaviyo's behavior only; no other platform is claimed to work the same way. The 9 a.m. to 6 a.m. example is plain time-zone arithmetic (Eastern to Pacific is three hours), not a legal claim.",
      url: "https://help.klaviyo.com/hc/en-us/articles/quiet-hours-in-campaigns",
      publisher: "Klaviyo Help Center",
      captured: "2026-10-12",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // A reading of federal rules plus one platform's documentation, not a
  // measurement, and the method says so. Every row holds for a customer in
  // any state.
  asset: {
    title: "Seven things that follow your customer, not your address",
    intro:
      "Wherever your customer lives, these come with them. The last column is what each one means for how your texts and sends get set up.",
    renderer: "comparison",
    method: {
      captured: "2026-10-12",
      howGathered:
        "Read from the federal regulation (47 CFR 64.1200) and statute (47 U.S.C. 227) on 12 October 2026, plus Klaviyo's own documentation of how it handles time zones, STOP replies and state laws. The right-hand column is our reading of what that means for a signup form and a send schedule. It is not legal advice.",
    },
    columns: ["What follows them", "The rule", "What it means for your setup"],
    rows: [
      {
        label: "Their clock",
        cells: [
          "A 9 a.m. send from Miami lands at 6 a.m. California time.",
          "Texts wait for a sensible hour in each customer's own time zone.",
        ],
      },
      {
        label: "Federal law",
        cells: [
          "A marketing text counts as a call, on every US number.",
          "Treat every promotional text as covered, not just phone calls.",
        ],
      },
      {
        label: "Their consent",
        cells: [
          "Automated marketing texts need written consent. An electronic signature counts.",
          "A box beside the phone field that the customer ticks themselves.",
        ],
      },
      {
        label: "The wording",
        cells: [
          "It has to name the number, and say that agreeing isn't a condition of buying.",
          "Two short lines next to the box, in plain words.",
        ],
      },
      {
        label: "Their STOP reply",
        cells: [
          "It has to be honored within 10 business days.",
          "Same day. Klaviyo removes consent the moment STOP arrives on a US number.",
        ],
      },
      {
        label: "Their state",
        cells: [
          "At least ten states add rules of their own, Florida included.",
          "Write the form to the stricter rule, and have your lawyer sign it off.",
        ],
      },
      {
        label: "A mistake",
        cells: [
          "$500 a text, or up to three times that if willful.",
          "Text 1,000 numbers once without consent, and that's up to $500,000.",
        ],
      },
    ],
    disclaimer:
      "This is our plain-English reading of federal rules, not legal advice. State laws vary. Have your own lawyer approve the consent wording before it goes live.",
    derived:
      "Read down the right-hand column. Almost all of it gets settled once, at the signup form and in the send settings. After that it works for every customer, wherever they live.\n\nSo that's where we start an SMS setup. The box, the wording, the opt-out and the send times go in before the first campaign gets written.\n\nIt's a fair test of any ecommerce marketing agency Miami brands are comparing, too. Ask to see the consent wording they'd use.",
    derivedList: {
      title: "If you collect phone numbers, check these four today",
      items: [
        "Does the customer tick the box themselves, or is it ticked for them?",
        "Does the wording say they're agreeing to automated marketing texts?",
        "Does it say they don't have to agree in order to buy?",
        "Does a STOP reply take them off the list the same day?",
      ],
    },
    reviewAfterDays: 180,
  },

  midCta: {
    text: "Collecting phone numbers already? Send us your signup form and we'll check it against these seven.",
    label: "Get in touch with us",
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "Four things that hold, whichever channel you take",
    intro: "We work with every client remotely. These four hold whether you hand us one channel or five. Ask the same of any ecommerce marketing agency Miami brands are weighing up.",
    items: [
      {
        title: "Your accounts stay in your name",
        body: "Klaviyo, Meta, Google and your store. We work inside your logins, so nothing has to be handed back when we're done.",
      },
      {
        title: "One report, led by orders",
        body: "Each week you see what every channel we run sold. Opens and clicks are in there too, underneath.",
      },
      {
        title: "Scope, price and date first",
        body: "Nothing starts until you've signed off a scope with a number and a date on it. If it grows, you see the new price before the work.",
      },
      {
        title: "You talk to whoever does the work",
        body: "The person planning your sends or your ads is the one in your shared channel. No account manager passing messages along.",
      },
    ],
  },

  // ── Block 8: Objections ───────────────────────────────────────────────
  objectionsHeading: "What brand owners ask before they hand us a channel",
  objections: [
    {
      objection: "SMS sounds like a legal headache. Should we just skip it?",
      answer:
        "Only if your customers don't want texts. The risk sits in how the form is set up, not in the channel.\n\nGet the box, the wording and the opt-out right, and keep a record of who agreed. If your list is still small, start with email and add SMS once the form is ready.",
    },
    {
      objection: "We've had an agency before and couldn't tell what it did.",
      answer:
        "Then judge us on orders, by channel, every week. That's the first number we report. Ask for it from any ecommerce marketing agency Miami brands put on a shortlist.\n\nIf a channel we run isn't moving it after a fair test, you'll see that in the same report. We'll tell you what we'd change, or whether to stop.",
    },
    {
      objection: "We only want ads. We don't need email or SMS.",
      answer:
        "Then buy ads. Every channel here is priced on its own.\n\nWe'll still tell you where your ad traffic lands and what happens to the people who don't buy on the first visit. That part costs nothing.",
    },
  ],

  results: {
    heading: "What clients said once the numbers came in",
    intro: "Each quote opens the case study behind it, so you can check the figures yourself.",
    slugs: ["happy-mammoth-shopify-subscriptions-cro", "wild-shopify-plus-subscriptions"],
    headlines: {
      "happy-mammoth-shopify-subscriptions-cro": "{brand} lifted customer lifetime value by 89%",
      "wild-shopify-plus-subscriptions": "{brand} cut subscription churn by 34%",
    },
  },

  // ── Block 6: Price and the first month ────────────────────────────────
  whatWeDoAboutItHeading: "What it costs, and what happens first",
  whatWeDoAboutIt:
    "We start by reading, not sending. We tie your recent orders back to the channels that brought them in, then look at your forms, flows and ads.\n\nThen you get a plan with a price and a date on each line. Take one line, or all of them.\n\nRetainers run $3,000 to $15,000 a month, depending on how many channels we run and how much creative you need. A one-off build, like a set of flows or a landing page, is priced on its own. Any Miami ecommerce marketing company you talk to should quote those two apart.",

  processCta: {
    text: "The first call is about your store and what each channel sells now. It's free, and it can end with us saying you don't need us yet.",
    label: "Get in touch with us",
  },

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  faqHeading: "What brands ask before they pick a marketing agency",
  faqs: [
    {
      question: "Do I need written consent to send marketing texts?",
      answer:
        "If they're sent by machine, yes, on any US number. The agreement has to name the number and say that agreeing isn't a condition of buying. An electronic signature counts, so it can sit right on your signup form.",
      unique: true,
    },
    {
      question: "What happens if a customer replies STOP?",
      answer:
        "Take them off right away. Federal rules give you 10 business days at most, but there's no reason to wait. On US numbers, Klaviyo removes SMS consent the moment a reply includes the word stop.",
      unique: true,
    },
    {
      question: "Our customers are all over the US. Does that change anything?",
      answer:
        "A little. Sends should land in each customer's own time zone, and at least ten states have texting rules on top of the federal ones. Both get set up once, at the form and in the send settings, so they work wherever your customers are.",
      unique: true,
    },
    {
      question: "Is the ecommerce marketing Miami brands run any different from anywhere else?",
      answer:
        "The channels are the same, and so is the math. What changes the plan is what you sell and where your customers are, not where you sell from.",
      unique: true,
    },
    {
      question: "How much does an ecommerce marketing agency Miami brands use cost per month?",
      answer:
        "Ours runs $3,000 to $15,000 a month, set by how many channels we run and how much creative you need. One-off builds are priced separately. You get the number in writing before anything starts.",
      unique: true,
    },
    {
      question: "We're not on Shopify. Can you still run our marketing?",
      answer:
        "Yes. Email, SMS and ads run in their own platforms, so they work whatever your store is on. If the store itself is losing you sales, we'll say so. We build on Shopify, and we move stores onto it from WooCommerce, Magento and BigCommerce.",
      unique: true,
    },
    {
      question: "Which channel should we start with?",
      answer:
        "The one closest to an order. If you already have a list, that's usually email flows, because they go out when someone's already shopping. With no list yet, it's ads and the page they land on. We'll tell you which once we've seen your numbers.",
      unique: true,
    },
    {
      question: "Are you an ecommerce marketing agency Miami brands can work with remotely?",
      answer:
        "Yes, the same way we work with every client. You talk to the people doing the work on calls and in a shared channel, and every account stays in your name.",
      unique: true,
    },
    {
      question: "Can you work alongside our in-house marketer?",
      answer:
        "Yes. Often they keep the brand and the calendar, and we take the build: the flows, the forms or the ad creative. We write down what we set up, so your team can run it after.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion. Zero keywords, no city name ─────────────────
  conversion: {
    heading: "Tell us which channel you'd like looked at first",
    whatYouGet: "Pick one channel and we'll tell you what it sold, and what we'd change first.",
    whatWeWillTellYouNotToDo:
      "If your signup form isn't ready for texts, we'll tell you not to send a single SMS campaign until it is.",
    responseExpectation: "Someone who runs these channels replies within one working day.",
    audit: {
      transition: "You already know which channel you trust least.",
      offer: "Name it in the form, and we'll audit it and send you back:",
      parts: [
        "What it sold over the last few months, tied to real orders.",
        "Where it's losing sales, and why.",
        "What we'd fix first, and what we'd leave alone.",
      ],
      limit: "It stops at the findings. Any work after that is quoted separately, and you can say no.",
      noObligation: "There's no charge, and nobody follows up to chase you.",
    },
  },

  sources: [],

  // Minimal copy, more visuals (owner, 1 October 2026), in line with
  // ecommerce-agency/miami.
  wordCountTarget: [1800, 2500],
};
