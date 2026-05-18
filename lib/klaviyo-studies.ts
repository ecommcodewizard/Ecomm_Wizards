import type { CaseStudy } from "./case-studies";

export interface KlaviyoStudyOverview {
  clientType: string;
  industry: string;
  goal: string;
  timeline: string;
}

export interface KlaviyoFlowItem {
  name: string;
  icon: string;
  description: string;
}

export interface KlaviyoBenchmark {
  metric: string;
  value: string;
  percentile: string;
  rating: "Excellent" | "Good" | "Average";
}

export interface KlaviyoSegmentGrowth {
  segment: string;
  growth: string;
  note?: string;
}

export interface KlaviyoCaseStudy extends CaseStudy {
  type: "klaviyo";
  klaviyoLogo: string;
  klaviyoBg: string;
  klaviyoCategory: string;
  overview: KlaviyoStudyOverview;
  flowsBuilt?: KlaviyoFlowItem[];
  benchmarks?: KlaviyoBenchmark[];
  segmentGrowth?: KlaviyoSegmentGrowth[];
}

export const KLAVIYO_CASE_STUDIES: KlaviyoCaseStudy[] = [
  {
    slug: "andrea-maack-klaviyo-email",
    type: "klaviyo",
    brandName: "Andrea Maack",
    klaviyoLogo: "/images/andrea-maack-logo.png",
    klaviyoBg: "#1A0F1E",
    klaviyoCategory: "Email Flows",
    industry: "Luxury Fragrance",
    serviceType: "Klaviyo Email | Flow Strategy",
    heroMetric: "+144.3%",
    heroSubMetric: "Flows Revenue Growth",
    heroImage: "/images/Case%20studies/Andrea%20Maack%20Klaviyo%20hero.webp",
    heroDescription:
      "Andrea Maack is an Icelandic luxury fragrance house. We rebuilt their entire Klaviyo setup: 5 core flows, a full seasonal campaign calendar, and SMS from scratch. 279,832 recipients reached. Flows revenue up 144.3%. Open rate at 40.1%.",
    stats: [
      { label: "Flows Revenue Growth", value: "+144.3%", shortLabel: "Flows Revenue" },
      { label: "Total Recipients Growth", value: "+165.7%", shortLabel: "Recipients" },
      { label: "Open Rate", value: "40.1%", shortLabel: "Open Rate" },
    ],
    overview: {
      clientType: "Andrea Maack",
      industry: "Luxury Fragrance",
      goal: "Full Klaviyo retention engine rebuild",
      timeline: "Ongoing partnership",
    },
    challengeTitle: "The brand had the product. The flows weren't keeping up.",
    challengeBody:
      "Andrea Maack makes luxury fragrance. The kind of brand where a single bottle carries a story, and the customer who finds it usually stays. The problem wasn't the product. It was what happened after the sale.\n\nThe Klaviyo setup was incomplete. A welcome series existed but it wasn't telling the brand story. There was no post-purchase flow, no win-back sequence, no browse abandonment. Customers who showed interest and left were getting nothing. Customers who bought once weren't being brought back.\n\nCampaigns were going out without a calendar behind them. No Valentine's Day, no Mother's Day, no Earth Day tied to the brand's Icelandic, nature-connected identity. The list was also showing deliverability issues. Bounce rate was sitting above where a brand like this should be.",
    approachTitle: "Built the full stack. Flows, campaigns, and a calendar.",
    approachItems: [
      {
        step: 1,
        title: "5 Core Flows",
        desc: "Built the welcome series, abandoned checkout, browse abandonment, post-purchase thank you, and win-back from scratch. Each one was written and designed to sound like Andrea Maack, not a generic automation template.",
      },
      {
        step: 2,
        title: "Seasonal Campaign Calendar",
        desc: "Built a monthly campaign calendar around the brand's identity and the moments that matter to their customer. Valentine's Day, Women's Day, Earth Day, and Mother's Day each got a dedicated send built around the fragrance story, not a discount.",
      },
      {
        step: 3,
        title: "SMS from Scratch",
        desc: "Built SMS consent capture into flow entry points and set up SMS as a companion channel. Transactional for order and shipping updates, promotional for launch moments where immediacy matters.",
      },
      {
        step: 4,
        title: "List Health and Segmentation",
        desc: "Cleaned the inactive list to protect sender reputation and rebuilt segments around VIP customers and early churn signals. Bounce rate dropped 27.1%. Open rate stabilised at 40.1% across 279,832 recipients.",
      },
    ],
    flowsBuilt: [
      {
        name: "Welcome Series",
        icon: "✉️",
        description: "Brand introduction timed to the first discovery moment. Who Andrea Maack is, what the brand stands for. Fragrance storytelling first, conversion second.",
      },
      {
        name: "Abandoned Checkout",
        icon: "🛒",
        description: "Recovery for high-intent shoppers who left before completing. Balances urgency with the brand tone so it feels like service, not a chase.",
      },
      {
        name: "Browse Abandonment",
        icon: "👁",
        description: "Triggered 2 days after a product page view without purchase. Intercepts fading interest before the customer moves on.",
      },
      {
        name: "Customer Thank You",
        icon: "📦",
        description: "Post-purchase sequence that follows up after the sale. Sets expectations, introduces the wider collection, and opens the door for a second purchase.",
      },
      {
        name: "Win-Back",
        icon: "💌",
        description: "Re-engagement sequence for customers who have gone quiet. Brings them back with the brand story before the relationship is lost.",
      },
      {
        name: "Other Flows",
        icon: "📅",
        description: "Valentine's Day, Women's Day, International Earth Day, and Mother's Day. Each send was built around a moment in the brand's world, not a generic seasonal template.",
      },
    ],
    workImages: [
      "/images/Case%20studies/Andrea%20Maack%20Klaviyo.png",
      "/images/Case%20studies/Andrea%20Maack%20Klaviyo-1.png",
      "/images/Case%20studies/Andrea%20Maack%20Klaviyo-2.png",
      "/images/Case%20studies/Andrea%20Maack%20Klaviyo-3.png",
    ],
    benchmarks: [
      { metric: "Bounce Rate", value: "-27.1%", percentile: "78th percentile", rating: "Excellent" },
      { metric: "Open Rate", value: "40.1%", percentile: "50th+", rating: "Good" },
      { metric: "Spam Complaint Rate", value: "-32.1%", percentile: "Top tier", rating: "Excellent" },
      { metric: "Unsubscribe Rate", value: "-11.5%", percentile: "53rd", rating: "Good" },
    ],
    segmentGrowth: [
      { segment: "Newsletter Subscribers", growth: "+26.8%", note: "4,670 active" },
      { segment: "Discovery Set Purchasers", growth: "+89.8%" },
    ],
    results: [
      { label: "Flows Revenue Growth", before: "Baseline", after: "+144.3%", improvement: "+144.3%" },
      { label: "Total Recipients", before: "Baseline", after: "+165.7%", improvement: "+165.7%" },
      { label: "Overall Klaviyo Performance", before: "Baseline", after: "+83.3%", improvement: "+83.3%" },
      { label: "Discovery Set Purchasers", before: "Baseline", after: "+89.8%", improvement: "+89.8%" },
    ],
    resultsDescription:
      "279,832 recipients reached. Flows revenue up 144.3%. Open rate at 40.1%. Discovery Set purchasers grew 89.8%. Andrea Maack now has a Klaviyo setup that works as hard as the brand.",
    sliderStats: [
      "+144.3% Flows Revenue Growth",
      "+165.7% Total Recipients",
      "$69,746 Attributed Revenue",
      "+83.3% Overall Klaviyo Performance",
      "40.1% Open Rate",
      "-27.1% Bounce Rate",
      "+26.8% Newsletter Subscribers",
      "+89.8% Discovery Set Purchasers",
      "-32.1% Spam Complaint Rate",
    ],
    techStack: [
      { name: "Klaviyo", logo: "/images/klaviyo-logo.svg" },
      { name: "Shopify", logo: "/images/shopify.svg" },
      { name: "Andrea Maack", logo: "/images/andrea-maack-logo.png", noFilter: true, multiplyBlend: true },
    ],
    quote:
      "The brand has always been about the art of fragrance. What we needed was a way to bring that experience into email and SMS without it feeling like a newsletter. The flows now feel like they belong to the brand.",
    quotePerson: "Andrea Maack",
    quoteRole: "Founder, Andrea Maack",
    quoteAvatar: "/images/Case%20studies/Andrea%20Maack.jfif",
  },
];

export function getKlaviyoCaseStudyBySlug(slug: string): KlaviyoCaseStudy | undefined {
  return KLAVIYO_CASE_STUDIES.find((s) => s.slug === slug);
}
