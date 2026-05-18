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
  {
    slug: "living-in-sunshine-klaviyo-email",
    type: "klaviyo",
    brandName: "Living in Sunshine",
    klaviyoLogo: "/images/living-in-sunshine-logo.png",
    klaviyoBg: "#0B2D3E",
    klaviyoCategory: "Email Flows & BFCM",
    industry: "Surf & Outdoor Lifestyle",
    serviceType: "Klaviyo Email | Flow Strategy | BFCM",
    heroMetric: "+219.8%",
    heroSubMetric: "Flows Revenue Growth",
    heroImage: "/images/Case%20studies/Living%20in%20Sunshine%20Klaviyo%20hero.webp",
    heroDescription:
      "Living in Sunshine makes patented surf storage for a 50,000+ customer community. We built the full Klaviyo infrastructure from scratch: 9 flows, a BFCM campaign stack, and seasonal sends. Flows revenue up 219.8%. Attributed revenue up 461.2%. 112,705 recipients reached.",
    stats: [
      { label: "Flows Revenue Growth", value: "+219.8%", shortLabel: "Flows Revenue" },
      { label: "Attributed Revenue Growth", value: "+461.2%", shortLabel: "Revenue" },
      { label: "Open Rate", value: "35.5%", shortLabel: "Open Rate" },
    ],
    overview: {
      clientType: "Living in Sunshine",
      industry: "Surf & Outdoor Lifestyle",
      goal: "Full Klaviyo flow build and BFCM strategy",
      timeline: "Ongoing partnership",
    },
    challengeTitle: "Good product, loyal customers, no retention system.",
    challengeBody:
      "Living in Sunshine makes surf storage that people actually recommend. Patented board racks, eco-friendly hammocks, wetsuit dryers — the kind of product that sells on word of mouth. The brand had 50,000 customers and a genuine community behind it. Klaviyo wasn't doing anything with any of that.\n\nThere were no lifecycle flows. Customers who bought came back only if they remembered to. Browsers who visited and left got nothing. The welcome series wasn't built. BFCM, early holiday, high-spend periods — none of it was being captured through email.\n\nThe list existed. The audience was there. The infrastructure just wasn't built.",
    approachTitle: "Built every flow, then built the seasonal stack on top.",
    approachItems: [
      {
        step: 1,
        title: "Core Flow Build",
        desc: "Built the welcome series, checkout abandonment, abandoned cart, and browse abandonment from scratch. Copy written around the surf lifestyle, not generic e-commerce language. Each flow reflects who the Living in Sunshine customer actually is.",
      },
      {
        step: 2,
        title: "VIP and High-Spender Flow",
        desc: "Identified the customers driving the most revenue and built a dedicated flow for them. A personalised experience for the people most likely to buy again and refer others.",
      },
      {
        step: 3,
        title: "BFCM and Seasonal Campaign Stack",
        desc: "Built dedicated flows and campaigns for Early Holiday Season, BFCM Early Access, and Black Friday and Cyber Monday. The highest-value window of the year for a lifestyle brand. Each period had its own strategy, not a repurposed template.",
      },
      {
        step: 4,
        title: "Deliverability and List Health",
        desc: "Cleaned the list and rebuilt segmentation from the ground up. Spam complaint rate fell 56.6%. 112,705 total recipients reached with a 35.5% open rate and click rate up 74.8%.",
      },
    ],
    flowsBuilt: [
      {
        name: "Welcome Series",
        icon: "✉️",
        description: "Brand introduction built around the surf lifestyle. Sets the tone for who Living in Sunshine is and why the products exist, before asking for the next purchase.",
      },
      {
        name: "Checkout Abandonment",
        icon: "🛒",
        description: "Recovery for customers who made it to checkout and left. High intent, short window. Built to bring them back without feeling like a chase.",
      },
      {
        name: "Abandoned Cart",
        icon: "🏄",
        description: "Triggered when items are left in the cart. Reconnects the customer with the product they were already interested in.",
      },
      {
        name: "Browse Abandonment",
        icon: "👁",
        description: "Triggered after product page views without a cart add. Catches fading interest early before the customer moves on.",
      },
      {
        name: "VIP / High-Spender",
        icon: "⭐",
        description: "Dedicated flow for the brand's highest-value customers. Personalised experience for the people most likely to buy again and refer others.",
      },
      {
        name: "Other Flows",
        icon: "📅",
        description: "Shipment Confirmed, Early Holiday Season, BFCM Early Access, and Black Friday and Cyber Monday. Each one built for its specific moment, not repurposed from a template.",
      },
    ],
    workImages: [
      "/images/Case%20studies/Living%20in%20Sunshine%20Klaviyo.png",
      "/images/Case%20studies/Living%20in%20Sunshine%20Klaviyo-1.png",
      "/images/Case%20studies/Living%20in%20Sunshine%20Klaviyo-2.png",
    ],
    benchmarks: [
      { metric: "Open Rate", value: "35.5%", percentile: "Top tier", rating: "Excellent" },
      { metric: "Spam Complaint Rate", value: "-56.6%", percentile: "Top tier", rating: "Excellent" },
      { metric: "Click Rate Growth", value: "+74.8%", percentile: "Above average", rating: "Good" },
      { metric: "Unsubscribe Rate", value: "-1%", percentile: "Stable", rating: "Good" },
    ],
    segmentGrowth: [
      { segment: "Total Recipients", growth: "+999%+" },
      { segment: "Campaign Conversions", growth: "+999%+" },
      { segment: "Campaign Recipients", growth: "96.8K" },
    ],
    results: [
      { label: "Flows Revenue Growth", before: "Baseline", after: "+219.8%", improvement: "+219.8%" },
      { label: "Attributed Revenue Growth", before: "Baseline", after: "+461.2%", improvement: "+461.2%" },
      { label: "Total Recipients", before: "Baseline", after: "112,705", improvement: "+999%+" },
      { label: "Spam Complaint Rate", before: "Baseline", after: "-56.6%", improvement: "-56.6%" },
    ],
    resultsDescription:
      "Flows revenue up 219.8%. Attributed revenue up 461.2%. 112,705 recipients reached with a 35.5% open rate. Spam complaints down 56.6%. Living in Sunshine now has a Klaviyo setup that captures the value their community was already there to give.",
    sliderStats: [
      "+219.8% Flows Revenue Growth",
      "+461.2% Attributed Revenue",
      "$15,383 Revenue Generated",
      "35.5% Open Rate",
      "+74.8% Click Rate Growth",
      "-56.6% Spam Complaint Rate",
      "112,705 Total Recipients",
      "+999%+ Campaign Conversions",
      "96.8K Campaign Recipients",
    ],
    techStack: [
      { name: "Klaviyo", logo: "/images/klaviyo-logo.svg" },
      { name: "Shopify", logo: "/images/shopify.svg" },
      { name: "Living in Sunshine", logo: "/images/living-in-sunshine-logo.png", noFilter: true },
    ],
    quote:
      "We had the customers but we weren't staying in touch with them. Now every flow feels like it was written for a surfer, not a generic email list. The BFCM results alone made the whole thing worth it.",
    quotePerson: "Living in Sunshine",
    quoteRole: "Founder, Living in Sunshine",
    quoteAvatar: "/images/Case%20studies/Living%20in%20Sunshine.jfif",
  },
];

export function getKlaviyoCaseStudyBySlug(slug: string): KlaviyoCaseStudy | undefined {
  return KLAVIYO_CASE_STUDIES.find((s) => s.slug === slug);
}
