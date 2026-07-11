import type { Metadata } from "next";
import Link from "next/link";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import CalEmbed from "./CalEmbed";
import ServiceSchema from "@/components/seo/ServiceSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RelatedServices from "@/components/sections/RelatedServices";

const META_DESCRIPTION =
  "Free Klaviyo audit for Shopify brands doing $50K+ per month. We find missed automation, underperforming flows, and revenue gaps in your email and SMS setup.";
const CANONICAL_URL = "https://ecommwizards.com/services/klaviyo-audit";

export const metadata: Metadata = {
  // `absolute` renders the title exactly; the root layout's "%s | Ecomm Wizards"
  // template would otherwise append the brand to this custom title.
  title: { absolute: "Klaviyo Audit for Shopify Brands | Free Email Revenue Review" },
  description: META_DESCRIPTION,
  keywords: [
    "klaviyo audit",
    "free klaviyo audit",
    "klaviyo email audit",
    "klaviyo audit for shopify",
    "klaviyo flow audit",
    "klaviyo deliverability audit",
    "shopify email marketing audit",
    "klaviyo account review",
    "klaviyo audit service",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "Klaviyo Audit for Shopify Brands | Free Email Revenue Review",
    description: META_DESCRIPTION,
    images: [
      {
        url: "/images/368b34d129434b1e37c56b68c6b45d6d-1-1024x486.webp",
        alt: "Klaviyo audit revenue results dashboard for a Shopify brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klaviyo Audit for Shopify Brands | Free Email Revenue Review",
    description: META_DESCRIPTION,
    images: ["/images/368b34d129434b1e37c56b68c6b45d6d-1-1024x486.webp"],
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["What is a Klaviyo audit?", "A Klaviyo audit is a structured review of your email and SMS setup that identifies revenue gaps, underperforming flows, deliverability issues, and missed automation opportunities affecting ecommerce growth."],
    ["Is a Klaviyo audit really free?", "Yes. Our Klaviyo audit is completely free with no contracts or credit card required. You receive actionable insights and a clear roadmap without any obligation to continue working with us."],
    ["Who should get a Klaviyo audit?", "A Klaviyo audit is best for Shopify brands generating $50,000 or more per month that want to improve email revenue, automation performance, and customer retention without increasing ad spend."],
    ["What does a Klaviyo audit include?", "The audit covers flows, campaigns, segmentation, deliverability, list health, design, and automation gaps. You also receive a prioritized action plan ranked by impact and implementation effort."],
    ["How long does a Klaviyo audit take?", "The audit review call takes about 30 minutes. Preparation happens in advance, so the call focuses on findings, missed revenue opportunities, and clear next steps you can implement immediately."],
    ["How much revenue can a Klaviyo audit recover?", "Results vary by traffic and execution, but many brands uncover several improvements worth thousands in monthly revenue by fixing broken flows, missed automations, and segmentation inefficiencies."],
    ["How to evaluate segment performance in Klaviyo?", "We evaluate segment performance in Klaviyo by reviewing engagement metrics, conversion rates, audience logic, overlap, and campaign results to identify weak targeting and missed personalization opportunities."],
    ["Do I need Shopify to get a Klaviyo audit?", "Yes. Our Klaviyo audits are built specifically for Shopify and Shopify Plus stores to align with ecommerce data, customer behavior, and revenue attribution."],
  ].map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Klaviyo Audit", item: CANONICAL_URL },
  ],
};

const AUDIT_URL = "/free-shopify-store-audit";

const GRADIENT_TEXT = {
  background: "var(--brand-gradient)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const HERO_FEATURES = ["100% Free Audit.", "Practical Insights.", "Clear Next Steps."];

const HERO_PHONES_COL_A = [
  "/images/image-12.png",
  "/images/Back-in-Stock-Email-1-1-2.png",
  "/images/image-12.png",
];
const HERO_PHONES_COL_B = [
  "/images/image-12-2.png",
  "/images/Back-in-Stock-Email-1-1.png",
  "/images/image-12-2.png",
];
const HERO_PHONES_COL_C = [
  "/images/image-11.png",
  "/images/image-10-1.png",
  "/images/image-11.png",
];

const GradDefs = () => (
  <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
    <defs>
      <linearGradient id="kv-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#C8F57A" />
        <stop offset="0.5" stopColor="#3DC77A" />
        <stop offset="1" stopColor="#2A9555" />
      </linearGradient>
    </defs>
  </svg>
);

const IconStat = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 17l5-5 4 4 7-7" />
    <path d="M14 9h5v5" />
    <path d="M3 21h18" />
  </svg>
);
const IconUsers = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M15 20c0-2 2-4 5-4" />
  </svg>
);
const IconBars = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 20V14" />
    <path d="M10 20V10" />
    <path d="M15 20V6" />
    <path d="M20 20V3" />
  </svg>
);
const IconLine = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 16l4-5 4 3 7-9" />
    <path d="M14 5h4v4" />
  </svg>
);
const IconCheck = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);
const IconTrendUp = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 17l5-5 4 3 7-8" />
    <path d="M15 7h5v5" />
  </svg>
);
const IconMonitor = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="4" width="18" height="13" rx="1.5" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 8l2 2" />
  </svg>
);
const IconLayers = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
    <path d="M3 17l9 5 9-5" />
  </svg>
);
const IconMail = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3v8" />
    <path d="M8 7l4-4 4 4" />
    <rect x="3" y="11" width="18" height="10" rx="1.5" />
    <path d="M3 12l9 6 9-6" />
  </svg>
);
const IconGift = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <rect x="4" y="12" width="16" height="9" rx="1" />
    <path d="M12 8v13" />
    <path d="M12 8c-2-3-6-3-6 0s4 0 6 0z" />
    <path d="M12 8c2-3 6-3 6 0s-4 0-6 0z" />
  </svg>
);
const IconClock = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const IconBolt = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);
const HeroCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#kv-grad)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 12l5 5L20 6" />
  </svg>
);
const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

const AUDIT_INCLUDES = [
  { icon: <IconLine />, title: "Flow Performance Review", body: "We analyze core flows to identify drop-offs, logic issues, and timing problems that reduce conversions and email revenue." },
  { icon: <IconCheck />, title: "List Health & Deliverability", body: "We evaluate list quality, inbox placement, engagement signals, and compliance to protect deliverability and long-term performance." },
  { icon: <IconTrendUp />, title: "Segmentation Strategy", body: "We assess segmentation logic and targeting rules to improve relevance, engagement, and conversion rates across campaigns and flows." },
  { icon: <IconMonitor />, title: "Automation Gaps", body: "We identify missing or underutilized automations that should already contribute to monthly revenue." },
  { icon: <IconLayers />, title: "Design & Conversion", body: "We perform an email campaign audit to review structure, copy hierarchy, CTAs, and mobile experience to improve engagement and conversions." },
  { icon: <IconMail />, title: "SMS Auditing", body: "We review your SMS setup for compliance, flow coverage, targeting accuracy, and revenue contribution alongside email." },
];

const CASE_RESULTS = [
  { brand: "Andrea Maack", category: "E-commerce Beauty", growth: "+238%", totalRevenue: "$833K", period: "Jul 2024", klaviyo: "$502K", image: "/images/368b34d129434b1e37c56b68c6b45d6d-1-1024x486.webp" },
  { brand: "REV GUM", category: "E-commerce Beauty", growth: "+101%", totalRevenue: "$142K", period: "Nov-Dec 2024", klaviyo: "$88K", image: "/images/b902f8762a2a38e70956f1bbb54529e3-1024x485.webp" },
  { brand: "Try Sparkl", category: "E-commerce Beauty", growth: "+183%", totalRevenue: "$135K", period: "Nov 2024", klaviyo: "$92K", image: "/images/5c0279228f5a99d7ff10e3330e5834df-1024x486.webp" },
  { brand: "Hero Sun Glasses", category: "E-commerce Beauty", growth: "+231%", totalRevenue: "$1.4M", period: "Nov 2024", klaviyo: "$460K", image: "/images/14371ea22ef7f330211068c97a5ba20f-1024x486-1.webp" },
];

const FOUNDER_CARDS = [
  { text: "We came in with a store that was painfully slow on mobile and desktop. Ecomm Wizards rebuilt our entire front end performance from the ground up. The difference was night and day.", logo: "/images/Frame_1000007615.webp", logoAlt: "EBY" },
  { text: "They did not just run a speed audit and send us a report. They got into our codebase, cleaned out years of accumulated bloat, and delivered a store that loads the way it should have from day one.", logo: "/images/cashmere-sale-logo.avif", logoAlt: "The Cashmere Sale" },
  { text: "What impressed us most was how deeply they understood Shopify Plus at a technical level. Their Shopify speed optimization service was methodical, transparent, and the results spoke for themselves.", logo: "/images/Frame_1000007615-2.avif", logoAlt: "BARK" },
];

const CASE_STUDY_SLIDES: CaseStudySlide[] = [
  {
    key: "harvard",
    image: "/images/harvard-2_b0d9924a-412f-449b-94c3-0806b1d672ba.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/gorgias.svg"],
    headline: (<>A sophisticated <strong>Shopify Store</strong> designed and built for a <strong>Harvard University</strong></>),
    quote: (<>&ldquo;Our experience with EW was excellent, characterized by an <strong>efficient workflow</strong> and <strong>professional execution</strong>; we couldn&apos;t be more delighted&rdquo;</>),
    avatar: "/images/harvardperson_medium.webp",
    name: "Daniyal S.",
    role: "Harvard University",
  },
  {
    key: "eby",
    image: "/images/Frame_1000004320.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/klaviyo.svg", "/images/yotpo.svg"],
    headline: (<>An elegant <strong>Shopify Store</strong> designed and built for <strong>EBY</strong> by <strong>Sofia Vergara</strong></>),
    quote: (<>&ldquo;Working with EW was a truly <strong>top-notch experience</strong>. From start to finish, they made sure everything ran smoothly and professionally. We couldn&apos;t be happier!&rdquo;</>),
    avatar: "/images/eby_dce31a54-eb36-409c-a8d7-e22fd8297de3_medium.webp",
    name: "EBY by Sofia Vergara",
    role: "Marketing Manager",
  },
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A dynamically personalized <strong>Shopify Store</strong> developed &amp; maintained for <strong>Bark</strong></>),
    quote: (<>&ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong> made Ecomm Wizards a fantastic partner.&rdquo;</>),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
];

const MARQUEE_ITEMS = [
  "Book in under 60 seconds",
  "No Credit Card Required",
  "Clear, practical recommendations",
];

const MID_CTA_FEATURES = [
  { icon: <IconGift />, title: "100% Free", body: "No obligation" },
  { icon: <IconClock />, title: "30 Minutes", body: "Focused review call" },
  { icon: <IconBolt />, title: "Instant Insights", body: "Immediate action items" },
];

const CHAT_BULLETS = [
  "Increase your Shopify conversion rate (CRO) and AOV",
  "Identify hidden revenue leaks across your funnel",
  "Improve Shopify speed, UX, and technical performance",
  "Reduce reliance on apps and developer bottlenecks",
  "Build a clear, prioritized roadmap for growth",
];

const FAQS = [
  { q: "What is a Klaviyo audit?", a: <>A <span style={GRADIENT_TEXT}>Klaviyo audit</span> is a structured review of your email and SMS setup that identifies revenue gaps, underperforming flows, deliverability issues, and missed automation opportunities affecting ecommerce growth.</> },
  { q: "Is a Klaviyo audit really free?", a: <>Yes. Our Klaviyo audit is completely free with no contracts or credit card required. You receive actionable insights and a clear roadmap without any obligation to continue working with us.</> },
  { q: "Who should get a Klaviyo audit?", a: <>A Klaviyo audit is best for Shopify brands generating $50,000 or more per month that want to improve email revenue, automation performance, and customer retention without increasing ad spend.</> },
  { q: "What does a Klaviyo audit include?", a: <>The audit covers flows, campaigns, segmentation, deliverability, list health, design, and automation gaps. You also receive a prioritized action plan ranked by impact and implementation effort.</> },
  { q: "How long does a Klaviyo audit take?", a: <>The audit review call takes about 30 minutes. Preparation happens in advance, so the call focuses on findings, missed revenue opportunities, and clear next steps you can implement immediately.</> },
  { q: "How much revenue can a Klaviyo audit recover?", a: <>Results vary by traffic and execution, but many brands uncover several improvements worth thousands in monthly revenue by fixing broken flows, missed automations, and segmentation inefficiencies.</> },
  { q: "How to evaluate segment performance in Klaviyo?", a: <>We evaluate segment performance in Klaviyo by reviewing engagement metrics, conversion rates, audience logic, overlap, and campaign results to identify weak targeting and missed personalization opportunities.</> },
  { q: "Do I need Shopify to get a Klaviyo audit?", a: <>Yes. Our Klaviyo audits are built specifically for Shopify and Shopify Plus stores to align with ecommerce data, customer behavior, and revenue attribution.</> },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <ServiceSchema url={CANONICAL_URL} name="Klaviyo Email Audit and Setup" serviceType="Klaviyo audit and setup" description={META_DESCRIPTION} />
      <Breadcrumbs current="/services/klaviyo-audit" />
      <GradDefs />

      {/* 1 — Hero */}
      <section className="kv-hero">
        <div className="kv-hero-inner">
          <div className="kv-hero-copy">
            <p className="kv-hero-eyebrow">Only for E-Commerce brands Doing Over $50,000 Per Month</p>
            <h1 className="kv-hero-h1">
              Uncover <span style={GRADIENT_TEXT}>$100,000+ Lost</span> Monthly Revenue with a{" "}
              <span style={GRADIENT_TEXT}>Klaviyo Audit</span>
            </h1>
            <p className="kv-hero-sub">
              Our Klaviyo audit is a revenue-focused email marketing audit designed for Shopify brands.
              We review your existing email and SMS setup to uncover missed automation, underperforming
              flows, and revenue gaps using the same framework that has driven over $54M in
              Klaviyo-attributed revenue for 7 to 9 figure brands in the past year.
            </p>
            <ul className="kv-hero-features">
              {HERO_FEATURES.map((f) => (
                <li key={f}><HeroCheck /><span>{f}</span></li>
              ))}
            </ul>
            <Link href={AUDIT_URL} className="kv-cta-outline">
              <span>Claim My Free Audit Now</span>
              <Arrow />
            </Link>
          </div>

          <div className="kv-hero-phones" aria-hidden>
            <div className="kv-hero-phone-mask">
              <div className="kv-hero-phone-col kv-hero-phone-col-a">
                {[...HERO_PHONES_COL_A, ...HERO_PHONES_COL_A].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt={i === 0 ? "Klaviyo email and SMS flow example for a Shopify store" : ""} loading="eager" />
                ))}
              </div>
              <div className="kv-hero-phone-col kv-hero-phone-col-b">
                {[...HERO_PHONES_COL_B, ...HERO_PHONES_COL_B].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt={i === 0 ? "Klaviyo email and SMS flow example for a Shopify store" : ""} loading="eager" />
                ))}
              </div>
              <div className="kv-hero-phone-col kv-hero-phone-col-c">
                {[...HERO_PHONES_COL_C, ...HERO_PHONES_COL_C].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt={i === 0 ? "Klaviyo email and SMS flow example for a Shopify store" : ""} loading="eager" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Metrics */}
      <section className="kv-metrics">
        <div className="kv-metrics-inner">
          <ul className="kv-metrics-grid">
            <li className="kv-metric">
              <IconStat />
              <span className="kv-metric-value">127%</span>
              <span className="kv-metric-label">Avg. Revenue Increase</span>
            </li>
            <li className="kv-metric">
              <IconUsers />
              <span className="kv-metric-value">900+</span>
              <span className="kv-metric-label">Brands Helped</span>
            </li>
            <li className="kv-metric">
              <IconBars />
              <span className="kv-metric-value">$48M+</span>
              <span className="kv-metric-label">Brands Helped</span>
            </li>
          </ul>
          <Link href={AUDIT_URL} className="kv-cta-solid">
            <span>Claim My Free Audit Now</span>
            <Arrow />
          </Link>
        </div>
      </section>

      {/* 3 — What You'll Get */}
      <section className="kv-includes">
        <div className="kv-includes-inner">
          <h2 className="kv-h2">What You&rsquo;ll Get in Your Free Audit</h2>
          <p className="kv-lede">
            Our 43-point Klaviyo audit checklist acts as a complete email audit of your account.
            It covers email campaigns, automations, segmentation, deliverability, and SMS auditing
            to surface missed revenue opportunities.
          </p>
          <ul className="kv-includes-grid">
            {AUDIT_INCLUDES.map((c) => (
              <li key={c.title} className="kv-include-card">
                <div className="kv-include-icon">{c.icon}</div>
                <h3 className="kv-include-title">{c.title}</h3>
                <p className="kv-include-body">{c.body}</p>
              </li>
            ))}
          </ul>
          <div className="kv-plus">
            <h3 className="kv-plus-title">Plus: Custom Action Plan</h3>
            <p className="kv-plus-body">
              You receive a personalized action plan with clear recommendations ranked by impact and
              effort. We also quantify, to the dollar, how much revenue your brand leaves on the
              table each month, so you know exactly what to implement first.
            </p>
            <p className="kv-plus-tag"><HeroCheck /><span>100% Built Around Your Business</span></p>
          </div>
        </div>
      </section>

      {/* 4 — Real Results */}
      <section className="kv-results">
        <div className="kv-results-inner">
          <h2 className="kv-h2">Real Results from Real Brands</h2>
          <p className="kv-lede">
            See verified Klaviyo performance data from ecommerce brands within the first 30 days
            of implementing our audit recommendations.
          </p>
          <ul className="kv-results-list">
            {CASE_RESULTS.map((c) => (
              <li key={c.brand} className="kv-result-row">
                <div className="kv-result-col kv-result-brand-col">
                  <h3 className="kv-result-brand">{c.brand}</h3>
                  <p className="kv-result-cat">{c.category}</p>
                  <div className="kv-result-stat">
                    <span className="kv-result-stat-label">Total Revenue</span>
                    <span className="kv-result-stat-value">{c.totalRevenue}</span>
                    <span className="kv-result-stat-sub">{c.period}</span>
                  </div>
                </div>
                <div className="kv-result-col kv-result-growth-col">
                  <span className="kv-result-growth-value" style={GRADIENT_TEXT}>{c.growth}</span>
                  <span className="kv-result-growth-sub">vs. previous period</span>
                  <div className="kv-result-stat">
                    <span className="kv-result-stat-label">Klaviyo Attributed</span>
                    <span className="kv-result-stat-value" style={GRADIENT_TEXT}>{c.klaviyo}</span>
                    <span className="kv-result-stat-sub">First 30 days</span>
                  </div>
                </div>
                <div className="kv-result-col kv-result-chart">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={`${c.brand} Klaviyo performance chart`} loading="lazy" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 — Average Klaviyo Audit Result */}
      <section className="kv-avg">
        <div className="kv-avg-inner">
          <h2 className="kv-avg-h2">Average Klaviyo Audit Result</h2>
          <p className="kv-avg-body">
            <span className="kv-red">161% average increase</span> in Klaviyo-attributed revenue within the first 30 days
          </p>
          <p className="kv-avg-note">*Results based on insights from 200+ Klaviyo audits</p>
        </div>
      </section>

      {/* 6 — What E-commerce Founders Are Saying + case study slider */}
      <section className="kv-founders">
        <div className="kv-founders-inner">
          <h2 className="kv-h2">What E-commerce Founders Are Saying</h2>
          <div className="kv-founders-cards">
            {FOUNDER_CARDS.map((c) => (
              <div key={c.logoAlt} className="kv-founder-card">
                <p className="kv-founder-quote">{c.text}</p>
                <div className="kv-founder-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.logo} alt={`${c.logoAlt} Klaviyo audit client`} loading="lazy" decoding="async" />
                </div>
              </div>
            ))}
          </div>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} />
        </div>
      </section>

      {/* 7 — Mid CTA */}
      <section className="kv-midcta">
        <div className="kv-midcta-inner">
          <h2 className="kv-h2">Ready to Recover Missed Revenue?</h2>
          <p className="kv-lede">
            Get a free Klaviyo audit and see where your current email and SMS setup leaves revenue
            on the table. Most brands uncover 3 to 5 immediate improvements that materially impact
            monthly revenue.
          </p>
          <ul className="kv-midcta-features">
            {MID_CTA_FEATURES.map((f) => (
              <li key={f.title}>
                <div className="kv-midcta-icon">{f.icon}</div>
                <strong>{f.title}</strong>
                <span>{f.body}</span>
              </li>
            ))}
          </ul>
          <Link href={AUDIT_URL} className="kv-cta-solid">
            <span>Claim My Free Audit Now</span>
            <Arrow />
          </Link>
        </div>
      </section>

      {/* 8 — Marquee + Limited Time */}
      <section className="kv-marquee-section">
        <div className="kv-marquee-wrap">
          <div className="kv-marquee">
            <div className="kv-marquee-track">
            {Array.from({ length: 6 }).flatMap((_, r) =>
              MARQUEE_ITEMS.map((m, i) => (
                <span key={`${r}-${i}`} className="kv-marquee-cell">
                  <span className="kv-marquee-item">&#10003; {m}</span>
                  <span className="kv-marquee-dot" aria-hidden>&bull;</span>
                </span>
              ))
            )}
            </div>
          </div>
        </div>
        <div className="kv-limited">
          <p className="kv-limited-line">
            <strong>Limited Time:</strong> We accept a limited number of audits each month to maintain quality.
          </p>
          <p className="kv-limited-spots">3 spots remaining this month.</p>
        </div>
      </section>

      {/* 9 — Let's Chat */}
      <section className="kv-chat">
        <div className="kv-chat-inner">
          <div className="kv-chat-left">
            <p className="kv-chat-eyebrow">Let&rsquo;s Chat</p>
            <h2 className="kv-chat-h2">Book a Free Shopify Consultation With Growth Experts</h2>
            <p className="kv-chat-body">
              In this 30-minute Shopify consultation, we analyze your store, identify growth
              bottlenecks, and give you a clear roadmap to increase conversions, AOV, and revenue.
            </p>
            <ul className="kv-chat-bullets">
              {CHAT_BULLETS.map((b) => (
                <li key={b}><HeroCheck /><span>{b}</span></li>
              ))}
            </ul>
            <figure className="kv-chat-testimonial">
              <blockquote>
                &ldquo;Ecomm Wizards has been instrumental in enhancing user experience, increasing
                conversion rates, and providing essential backend development support that has
                propelled our business growth.&rdquo;
              </blockquote>
              <figcaption>
                <strong>Jennifer Martinez</strong>
                <span>Marketing Director</span>
              </figcaption>
            </figure>
          </div>

          <div className="kv-chat-right">
            <CalEmbed />
          </div>
        </div>
      </section>

      {/* 10 — FAQ */}
      <section className="kv-faq">
        <div className="kv-faq-inner">
          <h2 className="kv-h2">Frequently Asked Questions</h2>
          <ul className="kv-faq-list">
            {FAQS.map((f, i) => (
              <li key={f.q} className="kv-faq-item">
                <details open={i === 0}>
                  <summary>
                    <span>{f.q}</span>
                    <span className="kv-faq-icon" aria-hidden />
                  </summary>
                  <div className="kv-faq-answer"><p>{f.a}</p></div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .kv-hero, .kv-metrics, .kv-includes, .kv-results, .kv-avg, .kv-founders, .kv-midcta, .kv-marquee-section, .kv-chat, .kv-faq { font-family: 'Poppins', sans-serif; }

        /* Shared */
        .kv-h2 { font-family: 'Poppins', sans-serif; color: #111111; font-size: 44px; font-weight: 700; line-height: 1.18; text-align: center; margin: 0 auto 18px; max-width: 920px; letter-spacing: -0.5px; }
        .kv-lede { color: #334155; font-size: 16px; line-height: 1.65; text-align: center; max-width: 980px; margin: 0 auto 56px; }
        .kv-red { color: #EF4444; }

        .kv-cta-outline { display: inline-flex; align-items: center; gap: 12px; padding: 18px 36px; border-radius: 999px; color: #FFFFFF; font-size: 16px; font-weight: 600; text-decoration: none; position: relative; border: 2px solid transparent; background-image: linear-gradient(#000, #000), var(--brand-gradient); background-origin: border-box; background-clip: padding-box, border-box; transition: background-image .25s ease, color .25s ease, transform .2s ease; }
        .kv-cta-outline:focus, .kv-cta-outline:visited, .kv-cta-outline:active { color: #FFFFFF; }
        .kv-cta-outline:hover { color: #111111; background-image: linear-gradient(#FFFFFF, #FFFFFF), var(--brand-gradient); transform: translateY(-1px); }

        .kv-cta-solid { display: inline-flex; align-items: center; gap: 12px; padding: 18px 40px; border-radius: 999px; color: #FFFFFF; font-size: 16px; font-weight: 600; text-decoration: none; border: 2px solid transparent; background-color: #111111; background-image: linear-gradient(#111111, #111111), linear-gradient(#111111, #111111); background-origin: border-box; background-clip: padding-box, border-box; transition: background-image .25s ease, transform .2s ease; }
        .kv-cta-solid:focus, .kv-cta-solid:visited, .kv-cta-solid:active, .kv-cta-solid:hover { color: #FFFFFF; }
        .kv-cta-solid:hover { background-image: linear-gradient(#111111, #111111), var(--brand-gradient); transform: translateY(-1px); }

        /* 1 — Hero */
        .kv-hero { background: #000000; padding: 90px 40px 110px; overflow: hidden; }
        .kv-hero-inner { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
        .kv-hero-eyebrow { color: #FFFFFF; font-size: 16px; font-weight: 600; margin: 0 0 28px; line-height: 1.4; }
        .kv-hero-h1 { color: #FFFFFF; font-size: 48px; font-weight: 700; line-height: 1.14; margin: 0 0 28px; letter-spacing: -0.8px; }
        .kv-hero-sub { color: #FFFFFF; font-size: 16px; line-height: 1.75; margin: 0 0 30px; max-width: 620px; }
        .kv-hero-features { list-style: none; padding: 0; margin: 0 0 40px; display: flex; flex-wrap: wrap; gap: 28px; }
        .kv-hero-features li { display: inline-flex; align-items: center; gap: 10px; color: #FFFFFF; font-size: 16px; font-weight: 500; }
        .kv-hero-phones { position: relative; height: 560px; perspective: 1200px; }
        .kv-hero-phone-mask { position: absolute; inset: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; padding: 0 20px; overflow: hidden; transform: rotate(12deg) scale(1.1); transform-origin: 50% 50%; mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%); }
        .kv-hero-phone-col { display: flex; flex-direction: column; gap: 18px; will-change: transform; }
        .kv-hero-phone-col img { width: 100%; height: auto; display: block; border-radius: 22px; box-shadow: 0 28px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05); background: #111; }
        .kv-hero-phone-col-a { animation: kv-phones-up 70s linear infinite; }
        .kv-hero-phone-col-b { animation: kv-phones-down 80s linear infinite; padding-top: 60px; }
        .kv-hero-phone-col-c { animation: kv-phones-up 90s linear infinite; padding-top: 120px; }
        @keyframes kv-phones-up { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes kv-phones-down { from { transform: translateY(-50%); } to { transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .kv-hero-phone-col-a, .kv-hero-phone-col-b, .kv-hero-phone-col-c { animation: none; } }

        /* 2 — Metrics */
        .kv-metrics { background: #FFFFFF; padding: 60px 20px; }
        .kv-metrics-inner { max-width: 1320px; margin: 0 auto; text-align: center; }
        .kv-metrics-grid { list-style: none; padding: 0; margin: 0 0 30px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .kv-metric { background: #F1F2F4; border-radius: 14px; padding: 50px 24px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
        .kv-metric-value { color: #111111; font-size: 56px; font-weight: 700; line-height: 1; margin-top: 4px; }
        .kv-metric-label { color: #334155; font-size: 16px; font-weight: 500; }

        /* 3 — What You'll Get */
        .kv-includes { background: #FBF7ED; padding: 60px 20px; }
        .kv-includes-inner { max-width: 1320px; margin: 0 auto; }
        .kv-includes-grid { list-style: none; padding: 0; margin: 0 0 40px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .kv-include-card { background: #FFFFFF; border-radius: 16px; padding: 38px 36px 40px; }
        .kv-include-icon { margin-bottom: 22px; line-height: 0; }
        .kv-include-title { color: #111111; font-size: 24px; font-weight: 700; line-height: 1.3; margin: 0 0 16px; }
        .kv-include-body { color: #334155; font-size: 15px; line-height: 1.7; margin: 0; }
        .kv-plus { background: #F9D9C9; border-radius: 14px; padding: 44px 40px; max-width: 700px; margin: 0 auto; text-align: center; }
        .kv-plus-title { color: #111111; font-size: 28px; font-weight: 700; margin: 0 0 14px; }
        .kv-plus-body { color: #334155; font-size: 16px; line-height: 1.7; margin: 0 0 18px; }
        .kv-plus-tag { display: inline-flex; align-items: center; gap: 10px; color: #111111; font-size: 15px; font-weight: 500; margin: 0; }

        /* 4 — Real Results */
        .kv-results { background: #FFFFFF; padding: 60px 20px; }
        .kv-results-inner { max-width: 1320px; margin: 0 auto; }
        .kv-results-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 24px; }
        .kv-result-row { background: #FBF1D8; border-radius: 18px; padding: 36px 44px; display: grid; grid-template-columns: 1fr 1fr 1.55fr; gap: 28px; align-items: center; }
        .kv-result-col { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .kv-result-brand { color: #111111; font-size: 30px; font-weight: 700; margin: 0 0 4px; text-align: center; }
        .kv-result-cat { color: #334155; font-size: 15px; margin: 0 0 22px; text-align: center; }
        .kv-result-growth-value { font-size: 50px; font-weight: 800; line-height: 1; display: block; }
        .kv-result-growth-sub { color: #334155; font-size: 15px; display: block; margin: 8px 0 22px; }
        .kv-result-stat { background: #FFFFFF; border-radius: 12px; padding: 20px 22px; display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; max-width: 280px; }
        .kv-result-stat-label { color: #334155; font-size: 14px; }
        .kv-result-stat-value { color: #111111; font-size: 24px; font-weight: 700; }
        .kv-result-stat-sub { color: #334155; font-size: 13px; }
        .kv-result-chart { width: 100%; }
        .kv-result-chart img { width: 100%; height: auto; display: block; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }

        /* 5 — Avg */
        .kv-avg { background: #FBF7ED; padding: 60px 20px 90px; }
        .kv-avg-inner { max-width: 1100px; margin: 0 auto; text-align: center; }
        .kv-avg-h2 { color: #111111; font-size: 50px; font-weight: 700; line-height: 1.2; margin: 0 0 32px; letter-spacing: -0.6px; }
        .kv-avg-body { color: #111111; font-size: 18px; line-height: 28px; margin: 0 0 24px; }
        .kv-avg-note { color: #334155; font-size: 15px; margin: 0; }

        /* 6 — Founders saying */
        .kv-founders { background: #FFFFFF; padding: 60px 20px; }
        .kv-founders-inner { max-width: 1320px; margin: 0 auto; }
        .kv-founders-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 48px; }
        .kv-founder-card { background: #FAF1DA; border-radius: 16px; padding: 36px 32px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 22px; min-height: 280px; }
        .kv-founder-quote { color: #111111; font-size: 16px; line-height: 1.7; margin: 0; }
        .kv-founder-logo { display: flex; align-items: center; justify-content: center; min-height: 60px; margin-top: auto; }
        .kv-founder-logo img { max-width: 150px; max-height: 60px; width: auto; height: auto; object-fit: contain; display: block; }

        /* 7 — Mid CTA */
        .kv-midcta { background: #FBF7ED; padding: 60px 20px; }
        .kv-midcta-inner { max-width: 1320px; margin: 0 auto; text-align: center; }
        .kv-midcta-features { list-style: none; padding: 0; margin: 0 0 44px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .kv-midcta-features li { background: #FFFFFF; border-radius: 16px; padding: 40px 32px; display: flex; flex-direction: column; align-items: center; gap: 14px; }
        .kv-midcta-icon { line-height: 0; margin-bottom: 6px; }
        .kv-midcta-features strong { color: #111111; font-size: 26px; font-weight: 700; }
        .kv-midcta-features span { color: #334155; font-size: 15px; }

        /* 8 — Marquee + Limited */
        .kv-marquee-section { background: #FFFFFF; padding: 0 20px 70px; }
        .kv-marquee-wrap { max-width: 1320px; margin: 0 auto; }
        .kv-marquee { background: #F1F2F4; overflow: hidden; padding: 18px 0; border-radius: 4px; }
        .kv-marquee-track { display: flex; align-items: center; width: max-content; animation: kv-marquee-scroll 40s linear infinite; }
        .kv-marquee:hover .kv-marquee-track { animation-play-state: paused; }
        .kv-marquee-cell { display: inline-flex; align-items: center; gap: 32px; padding: 0 16px; white-space: nowrap; }
        .kv-marquee-item { color: #334155; font-size: 15px; font-weight: 500; }
        .kv-marquee-dot { color: #334155; opacity: 0.5; font-size: 14px; }
        @keyframes kv-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .kv-limited { text-align: center; padding: 40px 20px 0; }
        .kv-limited-line { color: #334155; font-size: 15px; margin: 0 0 30px; }
        .kv-limited-line strong { color: #334155; font-weight: 600; }
        .kv-limited-spots { color: #EF4444; font-size: 16px; font-weight: 600; margin: 0; }

        /* 9 — Chat */
        .kv-chat { background: #FBF7ED; padding: 70px 20px 90px; }
        .kv-chat-inner { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.05fr; gap: 60px; align-items: start; }
        .kv-chat-eyebrow { color: #111111; font-size: 18px; font-weight: 500; margin: 0 0 14px; }
        .kv-chat-h2 { color: #111111; font-size: 44px; font-weight: 700; line-height: 1.18; margin: 0 0 22px; letter-spacing: -0.5px; }
        .kv-chat-body { color: #334155; font-size: 16px; line-height: 1.75; margin: 0 0 26px; }
        .kv-chat-bullets { list-style: none; padding: 0; margin: 0 0 36px; display: flex; flex-direction: column; gap: 14px; }
        .kv-chat-bullets li { display: inline-flex; align-items: center; gap: 12px; color: #334155; font-size: 16px; }
        .kv-chat-testimonial { background: #111111; color: #FFFFFF; border-radius: 6px; padding: 32px 36px; margin: 0; }
        .kv-chat-testimonial blockquote { font-size: 15px; line-height: 1.7; margin: 0 0 20px; font-style: normal; font-weight: 500; }
        .kv-chat-testimonial figcaption { display: flex; flex-direction: column; gap: 2px; }
        .kv-chat-testimonial figcaption strong { font-size: 15px; font-weight: 700; }
        .kv-chat-testimonial figcaption span { font-size: 12px; opacity: 0.7; }

        /* cal.com inline embed */
        .kvcal-wrap { position: relative; min-height: 600px; border-radius: 12px; overflow: hidden; background: #FFFFFF; }
        .kvcal-loading { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; color: #94a3b8; font-family: 'Poppins', sans-serif; font-size: 14px; }
        .kvcal-inline { position: relative; width: 100%; min-height: 600px; }
        .kvcal-inline iframe { width: 100% !important; }

        /* Calendar mock */
        .kv-cal { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 12px; padding: 20px 24px 24px; font-size: 14px; color: #111111; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
        .kv-cal-header { display: flex; align-items: center; justify-content: space-between; padding: 6px 0 14px; }
        .kv-cal-month { font-size: 18px; font-weight: 600; }
        .kv-cal-year { color: #94A3B8; font-weight: 500; }
        .kv-cal-nav { display: inline-flex; gap: 8px; }
        .kv-cal-nav button { width: 28px; height: 28px; border: none; background: transparent; color: #111111; font-size: 18px; cursor: pointer; border-radius: 6px; }
        .kv-cal-days { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; padding: 8px 0; color: #94A3B8; font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-align: center; }
        .kv-cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; }
        .kv-cal-cell { aspect-ratio: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 8px; color: #111111; font-size: 14px; font-weight: 500; background: transparent; position: relative; }
        .kv-cal-cell:empty { visibility: hidden; }
        .kv-cal-cell:not(:empty):not(.is-sel) { background: #F1F3F5; }
        .kv-cal-cell.is-sel { background: #111111; color: #FFFFFF; }
        .kv-cal-cell.is-sel::after { content: ""; position: absolute; bottom: 6px; width: 4px; height: 4px; background: #FFFFFF; border-radius: 50%; }
        .kv-cal-cell.is-muted { color: #CBD5E1; background: transparent; }
        .kv-cal-sub { font-size: 9px; color: #94A3B8; font-weight: 600; letter-spacing: 0.06em; }
        .kv-cal-foot { display: flex; align-items: center; justify-content: space-between; margin: 20px 0 12px; }
        .kv-cal-foot-day { font-size: 14px; font-weight: 600; }
        .kv-cal-foot-day span { color: #94A3B8; font-weight: 500; margin-left: 4px; }
        .kv-cal-foot-toggle { display: inline-flex; background: #F1F3F5; border-radius: 8px; padding: 3px; gap: 0; }
        .kv-cal-foot-toggle button { border: none; background: transparent; padding: 4px 10px; font-size: 12px; border-radius: 6px; cursor: pointer; color: #64748B; }
        .kv-cal-foot-toggle button.is-on { background: #FFFFFF; color: #111111; box-shadow: 0 1px 2px rgba(0,0,0,0.06); }
        .kv-cal-slots { display: flex; flex-direction: column; gap: 8px; }
        .kv-cal-slots button { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px; padding: 14px; text-align: center; font-size: 14px; cursor: pointer; color: #111111; }
        .kv-cal-slots button.is-sel { background: #F8FAFC; border-color: #CBD5E1; }

        /* 10 — FAQ */
        .kv-faq { background: #FFFFFF; padding: 60px 20px; }
        .kv-faq-inner { max-width: 1100px; margin: 0 auto; }
        .kv-faq-list { list-style: none; padding: 0; margin: 0; }
        .kv-faq-item { border-top: 1px solid #E5E7EB; }
        .kv-faq-item:last-child { border-bottom: 1px solid #E5E7EB; }
        .kv-faq-item summary { list-style: none; cursor: pointer; padding: 26px 8px; display: flex; align-items: center; justify-content: space-between; gap: 24px; color: #111111; font-size: 18px; font-weight: 700; }
        .kv-faq-item summary::-webkit-details-marker { display: none; }
        .kv-faq-icon { width: 12px; height: 12px; border-right: 2px solid #111111; border-bottom: 2px solid #111111; transform: rotate(45deg); transition: transform .25s ease; margin-right: 6px; margin-top: -6px; flex-shrink: 0; }
        .kv-faq-item details[open] .kv-faq-icon { transform: rotate(-135deg); margin-top: 4px; }
        .kv-faq-answer { padding: 0 8px 26px; }
        .kv-faq-answer p { color: #334155; font-size: 16px; line-height: 1.65; margin: 0; }

        /* ── Laptop (1024) ───────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .kv-hero-h1 { font-size: 44px; margin-bottom: 24px; }
          .kv-hero-eyebrow { font-size: 14px; white-space: nowrap; }
          .kv-hero-features { flex-wrap: nowrap; gap: 14px; }
          .kv-hero-features li { font-size: 14px; white-space: nowrap; }
          .kv-hero-sub { margin-bottom: 24px; }
        }

        /* ── Mobile + Tablet ─────────────────────────────────────────── */
        @media (max-width: 1023px) {
          .kv-h2 { font-size: 32px; line-height: 1.2; margin-bottom: 14px; }
          .kv-lede { font-size: 15px; line-height: 1.6; margin-bottom: 36px; }

          /* Hero */
          .kv-hero { padding: 60px 24px 80px; }
          .kv-hero-inner { grid-template-columns: 1fr; gap: 64px; }
          .kv-hero-eyebrow { font-size: 14px; margin-bottom: 18px; white-space: normal; }
          .kv-hero-h1 { font-size: 40px; line-height: 1.16; margin-bottom: 20px; letter-spacing: -0.4px; }
          .kv-hero-sub { font-size: 15px; line-height: 1.7; margin-bottom: 20px; }
          .kv-hero-features { gap: 18px; margin-bottom: 20px; flex-wrap: wrap; }
          .kv-hero-features li { font-size: 14px; }
          .kv-hero-phones { height: 410px; }
          .kv-hero-phone-mask { gap: 14px; padding: 0 8px; transform: rotate(12deg) scale(1.08); }
          .kv-hero-phone-col { gap: 14px; }
          .kv-hero-phone-col img { border-radius: 16px; }

          /* Metrics */
          .kv-metrics { padding: 60px 24px; }
          .kv-metrics-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 36px; }
          .kv-metric { padding: 36px 24px; }
          .kv-metric-value { font-size: 44px; }

          /* What You'll Get */
          .kv-includes { padding: 60px 24px; }
          .kv-includes-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 32px; }
          .kv-include-card { padding: 28px 24px 30px; }
          .kv-include-title { font-size: 20px; }
          .kv-include-body { font-size: 14px; }
          .kv-plus { padding: 32px 26px; max-width: 100%; }
          .kv-plus-title { font-size: 24px; }

          /* Real Results */
          .kv-results { padding: 60px 24px; }
          .kv-result-row { grid-template-columns: 1fr; padding: 28px 22px; gap: 22px; }
          .kv-result-cat { margin-bottom: 14px; }
          .kv-result-growth-sub { margin-bottom: 14px; }
          .kv-result-brand { font-size: 26px; }
          .kv-result-growth-value { font-size: 42px; }
          .kv-result-stat { max-width: none; padding: 16px; }

          /* Avg */
          .kv-avg { padding: 50px 24px 70px; }
          .kv-avg-h2 { font-size: 34px; margin-bottom: 22px; }
          .kv-avg-body { font-size: 16px; line-height: 1.6; }

          /* Founders */
          .kv-founders { padding: 60px 24px; }
          .kv-founders-cards { grid-template-columns: 1fr; gap: 16px; margin-bottom: 36px; }
          .kv-founder-card { min-height: 0; padding: 28px 24px; gap: 18px; }

          /* Mid CTA */
          .kv-midcta { padding: 60px 24px; }
          .kv-midcta-features { grid-template-columns: 1fr; gap: 16px; margin-bottom: 36px; }
          .kv-midcta-features li { padding: 30px 24px; }
          .kv-midcta-features strong { font-size: 22px; }

          /* Marquee + Limited */
          .kv-marquee-section { padding: 0 20px 50px; }
          .kv-marquee-cell { gap: 22px; padding: 0 12px; }
          .kv-marquee-item { font-size: 14px; }
          .kv-limited { padding: 30px 0 0; }
          .kv-limited-line { font-size: 14px; line-height: 1.55; margin-bottom: 22px; }

          /* Chat */
          .kv-chat { padding: 60px 24px; }
          .kv-chat-inner { grid-template-columns: 1fr; gap: 36px; }
          .kv-chat-h2 { font-size: 32px; }
          .kv-chat-body { font-size: 15px; line-height: 1.7; }
          .kv-chat-bullets li { font-size: 15px; }
          .kv-cal { padding: 16px 18px 20px; }
          .kv-cal-month { font-size: 16px; }

          /* FAQ */
          .kv-faq { padding: 60px 24px; }
          .kv-faq-item summary { padding: 22px 4px; font-size: 16px; gap: 16px; }
          .kv-faq-answer { padding: 0 4px 22px; }
          .kv-faq-answer p { font-size: 15px; }
        }

        @media (max-width: 639px) {
          .kv-h2 { font-size: 28px; }
          .kv-lede { font-size: 14px; margin-bottom: 30px; }
          .kv-metrics-grid { grid-template-columns: 1fr; }
          /* All content sections (not hero): 40px vertical padding */
          .kv-metrics, .kv-includes, .kv-results, .kv-avg, .kv-founders, .kv-midcta, .kv-chat, .kv-faq { padding: 40px 20px; }
          .kv-marquee-section { padding: 0 20px 40px; }

          /* Hero — phone */
          .kv-hero { padding: 50px 20px 70px; }
          .kv-hero-inner { gap: 56px; }
          .kv-hero-eyebrow { font-size: 13px; margin-bottom: 16px; }
          .kv-hero-h1 { font-size: 32px; margin-bottom: 16px; }
          .kv-hero-sub { font-size: 14px; margin-bottom: 16px; }
          .kv-hero-features { flex-direction: column; align-items: flex-start; gap: 12px; margin-bottom: 16px; }
          .kv-hero-phones { height: 420px; }
          .kv-hero-phone-mask { grid-template-columns: repeat(2, 1fr); transform: rotate(12deg) scale(1.05); mask-image: linear-gradient(to bottom, transparent 0%, #000 4%, #000 92%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 4%, #000 92%, transparent 100%); }
          .kv-hero-phone-col-c { display: none; }

          /* CTAs full-width */
          .kv-cta-outline, .kv-cta-solid { width: 100%; max-width: 360px; justify-content: center; padding: 16px 24px; }

          /* What You'll Get — single column */
          .kv-includes-grid { grid-template-columns: 1fr; }

          /* Real Results — bigger stat boxes */
          .kv-result-row { padding: 24px 20px; }
          .kv-result-brand { font-size: 24px; }
          .kv-result-growth-value { font-size: 38px; }

          /* Avg */
          .kv-avg-h2 { font-size: 28px; }
          .kv-avg-body { font-size: 15px; }

          /* Chat */
          .kv-chat-h2 { font-size: 26px; }

          /* Calendar — slim down */
          .kv-cal-cell { font-size: 12px; }
          .kv-cal-days { font-size: 10px; }
          .kv-cal-foot { margin-top: 16px; }
        }

        /* Tablet (640-1023): result chart on the right, shorter (text stacks on the left) */
        @media (min-width: 640px) and (max-width: 1023px) {
          .kv-result-row { grid-template-columns: 1fr 1fr; gap: 22px 28px; align-items: center; }
          .kv-result-brand-col { grid-column: 1; grid-row: 1; }
          .kv-result-growth-col { grid-column: 1; grid-row: 2; }
          .kv-result-chart { grid-column: 2; grid-row: 1 / span 2; }
        }
      ` }} />

      <RelatedServices current="/services/klaviyo-audit" />
    </>
  );
}
