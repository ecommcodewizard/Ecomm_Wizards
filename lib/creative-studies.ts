import type { CaseStudy } from "./case-studies";

// Creative Strategy case studies (paid social / performance creative work).
// Kept in their own array so they stay out of the Shopify store grid and the
// store Explore More rail, while still rendering through the shared case-study
// template. `studyKind` overrides the default "Shopify" label so the page reads
// "<Brand> Creative Strategy Case Study" in the H1, title, OG, and JSON-LD.
//
// Every figure below is client-reported. Do not add a metric, a before/after
// figure, or a testimonial that has not been supplied and signed off.

const MEDIA = "/images/Creative%20strategy%20services/Case%20studies";

export const CREATIVE_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "chillys-creative-strategy",
    studyKind: "Creative Strategy",
    brandName: "Chilly's",
    industry: "Drinkware & Lifestyle",
    serviceType: "Creative Strategy | Paid Social | UGC",
    heroMetric: "+60%",
    heroSubMetric: "Return on Ad Spend",
    heroImage: `${MEDIA}/chillys-hero.webp`,
    heroDescription:
      "Chilly's needed paid social to produce more revenue without more budget. We rebuilt the creative around hook-led video, UGC, and a repeatable series format, then tested it on hook and hold rate. Revenue grew 33% while ad spend came down 22%.",
    metaDescription: "Ecomm Wizards rebuilt Chilly's paid social around hook-led video and UGC in a repeatable series format, growing revenue 33% while ad spend fell 22%.",
    stats: [
      { label: "Increase in Revenue", value: "+33%", shortLabel: "Revenue" },
      { label: "Increase in ROAS", value: "+60%", shortLabel: "ROAS" },
      { label: "Reduction in Ad Spend", value: "-22%", shortLabel: "Ad Spend" },
    ],
    challengeTitle: "Grow Revenue Without Growing the Budget",
    challengeBody:
      "Chilly's is a design-led drinkware brand with a strong product and real recognition. The brief for paid social was the hard version of the job: grow revenue without putting more money behind it.\n\nThat makes creative the only lever left. When you cannot buy more impressions, the work has to earn more from the ones you already pay for. It needs sharper hooks, angles that answer real objections, and a testing rhythm that replaces ads before they fatigue rather than after the numbers slip.",
    approachTitle: "How We Rebuilt the Creative",
    approachItems: [
      {
        step: 1,
        title: "Audit",
        desc: "We tore down the running ads and the competitive set, found where creative was leaking spend, and mapped the angles worth backing first.",
      },
      {
        step: 2,
        title: "Concept",
        desc: "We wrote the hooks and scripts and storyboarded each angle against a funnel stage and the specific metric it needed to move.",
      },
      {
        step: 3,
        title: "Produce",
        desc: "We built the work in house: hook-led video, UGC and creator-style content, and a repeatable series format, all cut to platform specs.",
      },
      {
        step: 4,
        title: "Test and Scale",
        desc: "We ran structured tests, read hook rate, hold rate, and cost per acquisition, cut the losers quickly, and scaled the winners before they fatigued.",
      },
    ],
    workTitle: "The Creative",
    workSubtitle: "A look at the work we produced and tested for Chilly's.",
    // Fourth slot is a video: the gallery renders .mp4/.webm entries as video.
    workImages: [
      `${MEDIA}/chillys-lifestyle.webp`,
      `${MEDIA}/chillys-2.jpg`,
      `${MEDIA}/chillys-3.avif`,
      `${MEDIA}/chillys-ugc.mp4`,
    ],
    results: [
      { label: "Revenue", improvement: "+33%" },
      { label: "Return on Ad Spend", improvement: "+60%" },
      { label: "Ad Spend", improvement: "-22%" },
    ],
    resultsDescription:
      "Revenue grew while the budget came down. Same brand, same audiences, better creative and a testing loop that kept the winners fresh.",
    techStack: [],
    sliderStats: [
      "Revenue up 33%",
      "Return on ad spend up 60%",
      "Ad spend down 22%",
      "Hook-led video, UGC, and series creative",
      "Produced in house, cut to platform specs",
      "Structured testing on hook and hold rate",
    ],
    // quote / quotePerson / quoteRole intentionally omitted until the client
    // testimonial is supplied and approved. The quote section stays hidden.
  },
  {
    slug: "prose-creative-strategy",
    studyKind: "Creative Strategy",
    brandName: "Prose",
    industry: "Custom Haircare & Skincare",
    serviceType: "Creative Strategy | Paid Social | Influencer UGC",
    heroMetric: "+53%",
    heroSubMetric: "Return on Ad Spend",
    heroImage: `${MEDIA}/prose-hero.jpg`,
    heroDescription:
      "Prose sells personalized haircare and skincare, so every customer buys a different formula. To scale paid social profitably, we built a micro-influencer creative engine: a steady supply of creator video, produced, tested, and refreshed on a schedule. Return on ad spend rose 53% while cost to acquire a customer came down 28%.",
    metaDescription: "Ecomm Wizards built Prose a micro-influencer creative engine of creator video, produced and tested on a schedule, raising return on ad spend 53%.",
    stats: [
      { label: "Increase in ROAS", value: "+53%", shortLabel: "ROAS" },
      { label: "Reduction in CAC", value: "-28%", shortLabel: "CAC" },
    ],
    challengeTitle: "Scale Paid Social Without Raising CAC",
    challengeBody:
      "Prose is built on personalization. Every customer answers a quiz and receives a formula made for their hair and skin, so the proof of the product lives in real people showing real routines and results, not in a single polished hero ad. Paid social also burns through creative quickly, and refreshing it by hand does not scale.\n\nThat makes creator content the right raw material and the bottleneck at the same time. One-off influencer posts look authentic but do not compound. To move return on ad spend and cost per acquisition together, the creative had to run as a system: a clear brief, a steady roster of micro-influencers, and a testing loop that turned the strongest creator angles into ads we could put real budget behind.",
    approachTitle: "How We Built the Creative Engine",
    approachItems: [
      {
        step: 1,
        title: "Source",
        desc: "We briefed and sourced micro-influencers who matched Prose's audience, and gave each one a clear angle to shoot against instead of a loose ask.",
      },
      {
        step: 2,
        title: "Produce",
        desc: "We turned creator footage into paid-ready ads: sharp hooks, captions, and edits cut to each platform, in a repeatable format the roster could feed on a schedule.",
      },
      {
        step: 3,
        title: "Test",
        desc: "We ran structured tests on hook rate, hold rate, and cost per acquisition, so spend decided the winners, not opinion.",
      },
      {
        step: 4,
        title: "Scale",
        desc: "We put budget behind the proven angles, refreshed them before they fatigued, and fed every result back into the next brief.",
      },
    ],
    workTitle: "The Creative",
    workSubtitle: "A look at the creator content and product work we produced and tested for Prose.",
    // Slots 1, 2, and 4 are video: the gallery renders .mp4/.webm entries as video.
    workImages: [
      `${MEDIA}/prose-creators.mp4`,
      `${MEDIA}/prose-ugc-1.mp4`,
      `${MEDIA}/prose-formulation.jpg`,
      `${MEDIA}/prose-ugc-2.mp4`,
    ],
    results: [
      { label: "Return on Ad Spend", improvement: "+53%" },
      { label: "Cost per Acquisition", improvement: "-28%" },
    ],
    resultsDescription:
      "The creative carried the result. A steady supply of tested creator content lifted return on ad spend 53% and brought cost to acquire a customer down 28%, without a bigger budget behind it.",
    techStack: [],
    sliderStats: [
      "Return on ad spend up 53%",
      "Cost per acquisition down 28%",
      "A scalable micro-influencer creative engine",
      "Creator video produced and tested on a schedule",
      "Winning angles scaled and refreshed before fatigue",
      "Hook rate, hold rate, and CAC as the test metrics",
    ],
    // quote / quotePerson / quoteRole intentionally omitted until the client
    // testimonial is supplied and approved. The quote section stays hidden.
  },
  {
    slug: "nurture-life-creative-strategy",
    studyKind: "Creative Strategy",
    brandName: "Nurture Life",
    industry: "Kids & Baby Meal Delivery",
    serviceType: "Creative Strategy | Paid Social | UGC",
    heroMetric: "+232%",
    heroSubMetric: "Increase in Conversion Rate",
    heroImage: `${MEDIA}/nurture-hero.jpg`,
    heroDescription:
      "Nurture Life delivers fresh, ready-to-eat meals for babies, toddlers, and kids, so the buyer is a parent making a careful decision about food. We built the paid social creative around real parents and real mealtimes, then tested it hard. Conversions rose 130% and conversion rate rose 232%, while cost to acquire a customer came down 14%.",
    metaDescription: "Ecomm Wizards built Nurture Life's paid social creative around real parents and real mealtimes, lifting conversions 130% and conversion rate 232%.",
    stats: [
      { label: "Increase in Conversions", value: "+130%", shortLabel: "Conversions" },
      { label: "Increase in Conversion Rate", value: "+232%", shortLabel: "Conv. Rate" },
      { label: "Decrease in Cost per Acquisition", value: "-14%", shortLabel: "CAC" },
    ],
    challengeTitle: "Earn a Parent's Trust in the Feed",
    challengeBody:
      "Nurture Life sells fresh meals for babies, toddlers, and kids, so the buyer is a parent making a careful decision about what their child eats. That is a high-trust purchase, and a polished studio ad does not carry it. Parents want to see other parents, real kitchens, and real kids actually eating the food.\n\nPaid social also rewards fresh creative and punishes repetition, so the account needed a steady stream of new angles, not one hero video. To grow conversions while holding cost per acquisition down, the creative had to look like the feed it ran in: honest, specific, and made by parents, then tested until the strongest angles rose to the top.",
    approachTitle: "How We Built the Creative",
    approachItems: [
      {
        step: 1,
        title: "Source",
        desc: "We sourced parent creators who actually feed their kids this way and briefed each on a specific angle: picky eaters, busy weeknights, or the first-bite reaction.",
      },
      {
        step: 2,
        title: "Produce",
        desc: "We turned their mealtime footage into paid-ready ads: hooks that name the parent's problem, captions, and edits cut to each platform.",
      },
      {
        step: 3,
        title: "Test",
        desc: "We ran structured tests on hook rate, hold rate, and cost per acquisition, so the numbers picked the winners, not taste.",
      },
      {
        step: 4,
        title: "Scale",
        desc: "We put budget behind the angles that converted, refreshed them before they wore out, and fed what we learned into the next round of briefs.",
      },
    ],
    workTitle: "The Creative",
    workSubtitle: "A look at the parent and kid UGC we produced and tested for Nurture Life.",
    // Every slot here is video: the gallery renders .mp4/.webm entries as video.
    // Six clips lay out as a 3x2 grid in the two-column work section.
    workImages: [
      `${MEDIA}/nurture-ugc-a.mp4`,
      `${MEDIA}/nurture-ugc-b.mp4`,
      `${MEDIA}/nurture-ugc-c.mp4`,
      `${MEDIA}/nurture-ugc-g.mp4`,
      `${MEDIA}/nurture-ugc-e.mp4`,
      `${MEDIA}/nurture-ugc-h.mp4`,
    ],
    results: [
      { label: "Conversions", improvement: "+130%" },
      { label: "Conversion Rate", improvement: "+232%" },
      { label: "Cost per Acquisition", improvement: "-14%" },
    ],
    resultsDescription:
      "The creative did the convincing. A steady run of honest parent UGC lifted conversions 130% and conversion rate 232%, while cost to acquire a customer came down 14%.",
    techStack: [],
    sliderStats: [
      "Conversions up 130%",
      "Conversion rate up 232%",
      "Cost per acquisition down 14%",
      "Parent and kid UGC produced at volume",
      "Real mealtimes, real reactions, cut for paid social",
      "Structured testing on hook and hold rate",
    ],
    // quote / quotePerson / quoteRole intentionally omitted until the client
    // testimonial is supplied and approved. The quote section stays hidden.
  },
];

export function getCreativeCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CREATIVE_CASE_STUDIES.find((cs) => cs.slug === slug);
}
