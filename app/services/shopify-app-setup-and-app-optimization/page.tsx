import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SaoAccordion from "./SaoAccordion";
import SaoFaqAccordion from "./SaoFaqAccordion";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";

const META_DESCRIPTION =
  "Shopify app setup and optimization for 150+ stores. We audit your full app stack, remove dead weight, and configure everything for faster pages, accurate tracking, and better conversions.";
const CANONICAL_URL = "https://ecommwizards.com/services/shopify-app-setup-and-app-optimization";

export const metadata: Metadata = {
  title: { absolute: "Shopify App Setup and Optimization | App Stack Experts" },
  description: META_DESCRIPTION,
  keywords: [
    "shopify app setup and optimization",
    "shopify app stack audit",
    "shopify app configuration",
    "shopify app performance",
    "shopify app speed optimization",
    "shopify tracking setup",
    "shopify app management",
    "shopify app installation service",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "Shopify App Setup and Optimization | App Stack Experts",
    description: META_DESCRIPTION,
    images: [{ url: "/images/Store%20performance.webp", alt: "shopify app setup and optimization by Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify App Setup and Optimization | App Stack Experts",
    description: META_DESCRIPTION,
    images: ["/images/Store%20performance.webp"],
  },
};

const C_DARK  = "#000000";
const C_TEXT  = "#334155";
const C_WHITE = "#FFFFFF";
const C_CREAM = "#FBF7ED";

/* ── Case study slides (testimonial slider) ── */
const CASE_STUDY_SLIDES: CaseStudySlide[] = [
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A high-performance <strong>Shopify Plus</strong> store developed and scaled for <strong>BARK</strong></>),
    quote: (<>&ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong>, made Ecomm Wizards a fantastic partner.&rdquo;</>),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
  {
    key: "everlast",
    image: "/images/Case%20studies/Everlast-banner.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A <strong>Shopify Plus</strong> rebuild that delivered <strong>+152% conversion rate</strong> for <strong>Everlast</strong></>),
    quote: (<>&ldquo;We needed a store that could handle serious athletes, casual fitness buyers, and trade accounts in one place. Ecomm Wizards built exactly that. The <strong>conversion numbers and trade portal revenue</strong> both exceeded what we projected.&rdquo;</>),
    avatar: "/images/Case%20studies/Daniel%20Summerson.jpg",
    name: "Daniel Summerson",
    role: "Managing Director, Everlast Gyms",
  },
  {
    key: "dryrobe",
    image: "/images/Case%20studies/Dryrobe%20hero%20section.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg"],
    headline: (<>A <strong>Shopify Plus</strong> redesign that delivered <strong>+89% online revenue</strong> for <strong>Dryrobe</strong></>),
    quote: (<>&ldquo;The new store finally communicates who we are. The Size Finder fixed the returns problem we had been struggling with for years. <strong>Revenue growth followed</strong> from getting those fundamentals right.&rdquo;</>),
    avatar: "/images/Case%20studies/gideon%20bright.jfif",
    name: "Gideon Bright",
    role: "Head of Ecommerce, Dryrobe",
  },
];

/* ── Case study cards (Our Work grid) ── */
const CASE_STUDIES = [
  {
    brand: "Everlast",
    metric: "+152%",
    metricLabel: "Conversion Rate",
    tags: ["Shopify Plus", "CRO", "Theme Redesign"],
    industry: "Sports & Fitness",
    image: "/images/Case studies/Everlast-banner.webp",
    video: "/images/Case%20studies/Everlast%20video.mp4",
    href: "/case-studies/everlast-shopify-plus-sports-redesign",
    description: "A Shopify Plus rebuild for Everlast: dual B2C and trade checkout architecture, product comparison tooling, and 152% conversion rate lift for the world's most iconic boxing brand.",
  },
  {
    brand: "Dryrobe",
    metric: "+89%",
    metricLabel: "Online Revenue",
    tags: ["Shopify Plus", "Theme Development", "UX Design"],
    industry: "Fashion & Apparel",
    image: "/images/Case studies/Dryrobe hero section.webp",
    video: "/images/Case%20studies/dryrobe%20video%20test.mp4",
    href: "/case-studies/dryrobe-shopify-plus-redesign",
    description: "Three fragmented Shopify stores unified into one international Shopify Plus architecture, with a custom Size Finder that cut returns by 31% and grew online revenue 89%.",
  },
  {
    brand: "Wild",
    metric: "80K+",
    metricLabel: "Monthly Subscribers",
    tags: ["Shopify Plus", "Subscriptions"],
    industry: "Cosmetics & Beauty",
    image: "/images/Case studies/WeareWild.webp",
    video: "/images/Case%20studies/WeareWild%20video.mp4",
    href: "/case-studies/wild-shopify-plus-subscriptions",
    description: "A subscription-first Shopify Plus store built from zero for Wild, scaling to 80,000+ active monthly subscribers within twelve months and expanding into Germany.",
  },
  {
    brand: "Candy Kittens",
    metric: "+182%",
    metricLabel: "Conversion Rate",
    tags: ["Theme Development", "Shopify CRO"],
    industry: "Food & Beverages",
    image: "/images/Case studies/Candy Kittens hero section.webp",
    video: "/images/Case%20studies/Candy%20Kittens%20video.mp4",
    href: "/case-studies/candy-kittens-shopify-food-beverage-cro",
    description: "A full Shopify theme redesign for Candy Kittens, the UK's leading better-for-you confectionery brand.",
  },
];


/* ── Pain point cards ── */
const APP_PAINS = [
  {
    name: "Every App Adds Load Time",
    desc: "Each app injects scripts into your storefront. At 3 apps you barely notice. At 20, your Lighthouse score collapses and ad spend gets wasted on visitors who bounce before the page loads.",
    cost: "A 1-second delay in load time reduces conversions by 7%. Most over-app'd stores lose 3–5 seconds.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M16 3L7 16h7l-2 9 12-13H16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Duplicate Apps, Double the Cost",
    desc: "Reviews app plus another reviews app. Upsell widget plus a pop-up doing the same job. You're paying for two tools that cancel each other out and confuse your customers in the process.",
    cost: "The average Shopify store wastes $200–$600/month on apps with overlapping functionality.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="9" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Theme Conflicts Break Silently",
    desc: "An app update on Tuesday may have broken your add-to-cart on mobile. You won't know until a customer tells you, or until you check your conversion rate on Wednesday morning.",
    cost: "Silent conflicts can cut mobile conversion rate by 15–40% before anyone notices.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4L2 24h24L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 12v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="20" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Broken Tracking, Bad Decisions",
    desc: "If your Pixel fires twice per purchase, your ROAS looks better than it is. You scale spend into a lie and wonder why profitable-looking campaigns don't deliver profitable results.",
    cost: "Inflated ROAS from misconfigured tracking routinely leads to 20–35% ad budget waste.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M4 22l5-6 5 3 4-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 10l4-4M24 10l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Dead Apps Still Run",
    desc: "Apps you uninstalled two years ago often leave tracking scripts behind. They run on every page, slow every load, and collect data for a service you no longer use.",
    cost: "Orphaned scripts from removed apps add 0.5–2 seconds of unnecessary load time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="12" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 22l2-2M22 22l-2-2M14 19v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Bad Updates Break Stores",
    desc: "App developers push updates without warning. A misconfigured update to a cart app can kill revenue for 48 hours before you notice, especially if it drops on a Friday night.",
    cost: "An unmonitored app update breaking cart functionality can cost thousands in lost revenue per hour.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M8 22H7a5 5 0 0 1-.88-9.91A8 8 0 0 1 22 12a5 5 0 0 1 .44 10H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 17v5M14 24v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

/* ── Services accordion items ── */
const SAO_ITEMS = [
  {
    title: "App Stack Audit",
    body: "We review every app installed on your store, score its performance cost against the value it delivers, and give you a clear list of what to cut, what to keep, and what to add. You get the full picture before we touch anything.",
  },
  {
    title: "App Installation & Configuration",
    body: "We install and configure apps correctly for your products, audience, and theme. No default settings that half-work. Every app goes live tested and documented.",
  },
  {
    title: "Performance Optimization",
    body: "We identify which apps drag your Lighthouse score and fix the root cause, whether that means reconfiguring, replacing, or removing them. Target: 85+ on mobile.",
  },
  {
    title: "Shopify 2.0 Integration",
    body: "We configure your apps to work with sections and blocks, not against them. No hard-coded theme edits that break on the next theme update.",
  },
  {
    title: "Conversion App Setup",
    body: "Reviews, upsells, urgency timers, social proof widgets, configured for maximum lift without the noise that hurts trust or slows your pages.",
  },
  {
    title: "Analytics & Tracking",
    body: "GA4, Meta Pixel, TikTok Pixel, Klaviyo events, configured to fire correctly. Accurate attribution means you make decisions on real data, not inflated numbers.",
  },
  {
    title: "App Migration",
    body: "Moving from one reviews platform to another, or switching email providers? We handle the migration without data loss, downtime, or broken integrations.",
  },
  {
    title: "Ongoing App Management",
    body: "Monthly monitoring for conflicts, update testing before they hit your live store, and a documented rollback plan if something breaks. You focus on the business, we watch the apps.",
  },
];

/* ── Compare section data ── */
const NATIVE_PROS = [
  "Speed impact tested before any app is installed or goes live.",
  "Configured for your catalogue and audience, not generic defaults.",
  "Full conflict audit across every installed app before and after.",
  "Third-party performance testing via Lighthouse and WebPageTest.",
  "Proactive monitoring with a rollback plan documented per app.",
  "Zero-downtime app migrations with complete data verification.",
];
const BUILDER_CONS = [
  { text: "Install apps without checking their speed impact on your store.",  warn: false },
  { text: "Use default settings built for the average store, not yours.",      warn: false },
  { text: "No conflict testing across apps before pushing changes live.",      warn: false },
  { text: "Rely on the app's own analytics to tell you if it's working.",     warn: false },
  { text: "Fix problems only after customers have already reported them.",     warn: true  },
  { text: "Lose data during migrations with no rollback plan in place.",       warn: true  },
];

/* ── BreadcrumbList schema ── */
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "App Setup and Optimization", item: "https://ecommwizards.com/services/shopify-app-setup-and-app-optimization" },
  ],
};

/* ── FAQs ── */
const FAQS = [
  {
    q: "How many apps should a Shopify store have?",
    a: "Most stores perform best with 10–18 apps. Beyond that, cumulative script load starts hurting page speed and the conversion gains from additional apps rarely offset the cost. The right number depends on your revenue stage and catalogue complexity. We give you a specific recommendation after the audit.",
  },
  {
    q: "Which apps are actually worth paying for?",
    a: "It depends on your store's biggest constraint. If email revenue is low, a proper Klaviyo setup beats any new app. If cart abandonment is high, a well-configured upsell is worth more than a new review widget. We match app recommendations to your specific gaps, not a generic stack.",
  },
  {
    q: "Can Shopify apps really slow down my store that much?",
    a: "Yes. A single poorly configured app can add 1–3 seconds to your Time to Interactive. Run Google PageSpeed Insights on your current store and check the Eliminate render-blocking resources warning, and you will likely see app scripts listed. Speed is directly tied to conversion rate: a 1-second improvement typically lifts conversions 7–12%.",
  },
  {
    q: "What does your Shopify app setup audit cover?",
    a: "We review your full app list, measure each app's JavaScript payload and render-blocking impact, check for duplicate functionality across apps, flag any apps leaving orphaned scripts after uninstallation, and test for theme conflicts on your three most important page types.",
  },
  {
    q: "Do you work with specific apps or are you app-agnostic?",
    a: "App-agnostic. We have worked with virtually every major Shopify app category, including reviews, email, upsells, subscriptions, loyalty, and analytics. We recommend based on what performs, not what we are affiliated with. For reference: for email we typically recommend Klaviyo for stores doing $50K+/month, or Omnisend for earlier-stage stores. For reviews: Judge.me or Okendo. For upsells: ReConvert or Rebuy.",
  },
  {
    q: "How long does a Shopify app setup project take?",
    a: "An audit and cleanup typically takes 3–5 business days. A full Shopify app setup including new app configuration, migration, and documentation runs 7–14 days depending on complexity. We give you a specific timeline after the discovery call.",
  },
  {
    q: "What happens if an app conflicts with my theme?",
    a: "We catch conflicts in our test environment before they reach your live store. If a conflict surfaces post-launch, it is covered under our 30-day support window at no additional cost.",
  },
  {
    q: "Do I need to uninstall apps before you start?",
    a: "No. The audit is more useful with everything installed. We document the full picture first, then give you a prioritized recommendation. You approve the cut list before we remove anything.",
  },
  {
    q: "What apps do you recommend for email, reviews, and upsells?",
    a: "For email: Klaviyo for stores doing $50K+/month in revenue, Omnisend for earlier-stage stores. For reviews: Judge.me for most stores, Okendo if you need UGC and advanced filtering. For upsells: ReConvert or Rebuy depending on AOV goals. These are starting points. We give a specific recommendation after reviewing your current stack.",
  },
  {
    q: "Do you offer ongoing monitoring after the initial setup?",
    a: "Yes. Our ongoing app management covers monthly conflict checks, update testing before apps deploy to your live store, and performance regression alerts. Most clients on retainer avoid emergency fixes entirely because we catch issues before they affect customers.",
  },
];

/* ── Shared SVGs ── */
const Arrow = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
    <path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <circle cx="9" cy="9" r="9" fill="rgba(97,206,112,0.15)" />
    <path d="M5 9l3 3 5-5" stroke="#61ce70" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <circle cx="9" cy="9" r="9" fill="rgba(239,68,68,0.12)" />
    <path d="M6 6l6 6M12 6l-6 6" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const WarnIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <circle cx="9" cy="9" r="9" fill="rgba(245,158,11,0.12)" />
    <path d="M9 6v4M9 12v.5" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function Page() {
  return (
    <>
      {/* ── 1. Hero (DARK) ── */}
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Shopify app setup and optimization hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Shopify App Setup &amp; Optimization Agency</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Shopify App Setup and Optimization{" "}
              That{" "}
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Keeps Your Store Fast
              </span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              We audit your full Shopify app stack, remove what&apos;s dead weight, and configure the rest so your pages load fast, your tracking fires correctly, and your store converts.
            </p>
            <div className="std-hero-stats">
              {[
                { number: "150+",  label: "Stores Optimized" },
                { number: "40%",   label: "Avg Speed Improvement" },
                { number: "22%",   label: "Avg Revenue Lift" },
                { number: "4.9★",  label: "Client Rating" },
              ].map((s) => (
                <div key={s.label} className="std-hero-stat-item">
                  <span className="std-hero-stat-num">{s.number}</span>
                  <span className="std-hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <span className="group inline-flex p-[2px] rounded-full mt-8" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Strategy Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>

          <div className="sao-hero-img-wrap">
            <Image
              src="/images/Store%20performance.webp"
              alt="Shopify store performance dashboard showing app optimization results"
              width={640}
              height={480}
              priority
              className="sao-hero-img"
              style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. Pain Points (CREAM) ── */}
      <section className="sao-feat" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="App setup pain points">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div className="sao-feat-title-block">
            <h2 className="sao-feat-heading">
              6 Ways Your Shopify Apps Are Costing You Money Right Now
            </h2>
            <p className="sao-feat-desc">
              Most stores run 15–30 apps. A third are duplicates. Another third slow every page load. Here&apos;s what that actually costs.
            </p>
          </div>

          <div className="sao-feat-grid">
            {APP_PAINS.map((pain) => (
              <div key={pain.name} className="sao-feat-card">
                <span className="sao-feat-icon" aria-hidden="true">{pain.icon}</span>
                <h3 className="sao-feat-name">{pain.name}</h3>
                <p className="sao-feat-desc-text">{pain.desc}</p>
                <div className="sao-feat-roi">
                  <span className="sao-feat-roi-label">What this costs you:</span> {pain.cost}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sao-feat-heading { color: #000; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 auto 16px; max-width: 800px; }
          .sao-feat-desc { color: rgba(0,0,0,.75); font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 760px; }
          .sao-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .sao-feat-card { background: #fff; border-radius: 16px; padding: 28px; border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 12px; }
          .sao-feat-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          .sao-feat-name { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 700; color: #000; margin: 0; line-height: 1.3; }
          .sao-feat-desc-text { font-family: 'Poppins', sans-serif; font-size: 14px; color: #334155; line-height: 1.7; margin: 0; flex-grow: 1; }
          .sao-feat-roi { font-family: 'Poppins', sans-serif; font-size: 13px; color: #2A9555; line-height: 1.5; background: rgba(61,199,122,0.08); border-radius: 8px; padding: 10px 14px; border-left: 3px solid #3DC77A; margin-top: auto; }
          .sao-feat-roi-label { font-weight: 700; }
          @media (min-width: 1024px) { .sao-feat-title-block { width: -moz-fit-content; width: fit-content; margin: 0 auto 8px; } .sao-feat-title-block .sao-feat-desc { max-width: 100%; margin-left: 0; margin-right: 0; } }
          @media (min-width: 1024px) and (max-width: 1349px) { .sao-feat-title-block { width: 100% !important; } .sao-feat-heading { max-width: 100% !important; } }
          @media (min-width: 1350px) { .sao-feat-heading { max-width: none; white-space: nowrap; } }
          @media (max-width: 1024px) { .sao-feat-heading { font-size: 32px !important; } .sao-feat-desc { font-size: 16px !important; margin-bottom: 24px !important; } .sao-feat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 768px) { .sao-feat-desc { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .sao-feat { padding: 40px 16px !important; } .sao-feat-heading { font-size: 26px !important; } .sao-feat-desc { font-size: 15px !important; } .sao-feat-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── 3. Services Accordion (WHITE) ── */}
      <section className="std-solutions" style={{ background: C_WHITE }} aria-label="Shopify app setup and optimization services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>What&apos;s Included</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              What&apos;s Included in Every Shopify App Setup &amp; Optimization Project
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              Every engagement covers an audit, configuration, speed testing, tracking setup, and 30 days of monitoring. No add-ons, no surprises.
            </p>
            <Link href="/book-shopify-consultation" className="std-cta-sol mt-8">
              Book a Free Strategy Call
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <SaoAccordion items={SAO_ITEMS} />
        </div>
      </section>

      {/* ── 4. Process (WHITE) ── */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label="Our Shopify app setup and optimization process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: C_CREAM, borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            How Our Shopify App Setup Process Works
          </h2>

          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            Five steps from audit to a fully configured Shopify app stack.
            <br className="hidden sm:block lg:hidden" />{" "}
            Most projects complete in 7 to 14 days.
          </p>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {[
              { step: "01.", title: "Audit", desc: "We pull your full app list, measure each app's performance impact, and flag conflicts, duplicates, and orphaned scripts from previously removed apps." },
              { step: "02.", title: "Strategy", desc: "You get a prioritized action list: kill these, reconfigure these, replace these. We explain why, not just what. You approve before we touch anything." },
              { step: "03.", title: "Configuration", desc: "We configure every app correctly, test against your live theme, and document the setup so your team can manage it going forward." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]" style={{ background: "#FFFFFF", borderRadius: "16px", boxSizing: "border-box" }}>
                <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{step}</p>
                <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — 2 cards centred */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[20px] max-sm:!max-w-full md:max-lg:mt-[16px] md:max-lg:!max-w-[428px]"
            style={{ maxWidth: "calc(66.667% - 7px)", marginLeft: "auto", marginRight: "auto", width: "100%" }}
          >
            {[
              { step: "04.", title: "QA & Testing", desc: "We test across all major devices and browsers. Every conversion event, pixel, and tracking integration is verified before we hand over." },
              { step: "05.", title: "Monitor", desc: "We monitor performance for 30 days after setup. We watch for update conflicts, speed regressions, and tracking issues, and fix them before they affect revenue." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]" style={{ background: "#FFFFFF", borderRadius: "16px", boxSizing: "border-box" }}>
                <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{step}</p>
                <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Compare (DARK) ── */}
      <section className="sao-compare" style={{ background: C_DARK, padding: "0 20px" }} aria-label="Professional app setup vs DIY">
        <div className="mx-auto" style={{ maxWidth: 1320, padding: "60px 0" }}>

          <h2 className="sao-compare-h2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 4.1vw, 42px)", fontWeight: 700, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Professional Shopify App Setup vs.{" "}
            <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Doing It Yourself
            </span>
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            DIY Shopify app management looks free until a conflict breaks your cart on a Friday night. Here&apos;s what professional app setup actually prevents.
          </p>

          <div className="sao-compare-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 20, marginTop: 10 }}>

            <div className="sao-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="sao-compare-badge" style={{ display: "inline-block", background: "rgba(61,199,122,0.15)", color: "#3DC77A", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(61,199,122,0.3)" }}>
                ✓ Professional App Setup
              </span>
              <ul className="sao-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {NATIVE_PROS.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2, color: "#3DC77A" }}><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sao-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="sao-compare-badge" style={{ display: "inline-block", background: "rgba(239,68,68,0.12)", color: "#f87171", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(239,68,68,0.25)" }}>
                ✕ DIY App Management
              </span>
              <ul className="sao-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {BUILDER_CONS.map((item) => (
                  <li key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2, color: item.warn ? "#fbbf24" : "#f87171" }}>
                      {item.warn ? <WarnIcon /> : <CrossIcon />}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Strategy Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1024px) { .sao-compare-h2 { font-size: 38px !important; } }
          @media (max-width: 768px) { .sao-compare-grid { gap: 12px !important; } .sao-compare-card { padding: 20px !important; } .sao-compare-badge { font-size: 16px !important; padding: 5px 10px !important; white-space: nowrap; margin-bottom: 14px !important; } .sao-compare-list { gap: 10px !important; } .sao-compare-card li { font-size: 14px !important; } }
        ` }} />
      </section>

      {/* ── 6. Results / Testimonial Slider (CREAM) ── */}
      <section
        className="sao-results-section"
        style={{ background: C_CREAM, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "40px 20px" }}
      >
        <div className="sao-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="sao-results-heading">Results Our Clients Actually Got</h2>
          <p className="sao-results-desc">
            Not projections. Real outcomes from Shopify stores we&apos;ve audited, rebuilt, and optimized: faster stores, better tracking, and more revenue.
          </p>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .sao-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:1100px; }
          .sao-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          @media (max-width:1023px) { .sao-results-section { padding:44px 20px !important; } .sao-results-heading { font-size:30px !important;line-height:40px !important;margin-bottom:18px !important; } .sao-results-desc { font-size:16px !important;line-height:26px !important;margin-bottom:32px !important; } }
          @media (min-width:768px) and (max-width:1023px) { .sao-results-section { padding:30px 20px !important; } .sao-results-desc { margin-bottom:18px !important; } }
          @media (max-width:640px) { .sao-results-section { padding:20px 16px !important; } .sao-results-heading { font-size:26px !important;line-height:34px !important; } .sao-results-desc { font-size:15px !important;line-height:24px !important; } }
        ` }} />
      </section>

      {/* ── 7. Why Us (DARK) ── */}
      <section
        className="std-why sao-why-section"
        style={{ background: C_DARK, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Why brands choose Ecomm Wizards for Shopify app setup and optimization"
      >
        <div className="sao-why-inner mx-auto" style={{ maxWidth: "1320px" }}>

          <h2 className="sao-why-heading">
            Why Brands Choose Ecomm Wizards for{" "}<br className="sao-why-br-lg" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shopify App Setup and Optimization
            </span>
          </h2>

          <p className="sao-why-desc">
            We have completed Shopify app setup and optimization for 150+ stores. Here is what separates our service from every other agency:
          </p>

          <div className="sao-why-grid">
            {[
              {
                title: "App-Agnostic Advice",
                desc: (<>We are not affiliated with any app platform and we don&apos;t receive referral commissions. Our recommendations come from data across 150+ store audits, not from what pays us.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4v24"/><path d="M8 7l-5 9h10z"/><path d="M24 7l-5 9h10z"/><path d="M10 28h12"/></svg>),
              },
              {
                title: "Performance-First Setup",
                desc: (<>Every app we configure gets tested against your Lighthouse score before it goes live. If it hurts performance, we find a better way to implement it.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22a12 12 0 1 1 20 0"/><path d="M16 16l-5-5"/><circle cx="16" cy="16" r="2" fill="currentColor"/></svg>),
              },
              {
                title: "No-Bloat Philosophy",
                desc: (<>We recommend the minimum number of apps that achieve the result. If one app can do the job of three, we use one. Fewer apps means fewer conflicts, lower costs, and faster pages.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8h20M10 15h12M14 22h4"/></svg>),
              },
              {
                title: "Shopify-Only Focus",
                desc: (<>No WordPress, no Webflow, no Wix. Every store we work on runs on Shopify. That focus means we know every app compatibility constraint and every Shopify platform quirk inside out.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></svg>),
              },
              {
                title: "You Own the Documentation",
                desc: (<>Every setup comes with documentation your team can follow. If we ever stop working together, you&apos;re not left guessing what we configured or why.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="3" width="18" height="24" rx="2"/><path d="M10 10h12M10 15h12M10 20h7"/><circle cx="22" cy="25" r="5" fill="#0a0a0a" strokeWidth="1.3"/><path d="M20 25l1.5 1.5L24 23" strokeWidth="1.3"/></svg>),
              },
              {
                title: "Post-Setup Support",
                desc: (<>Every project includes a 30-day monitoring window. We watch for bad updates, new conflicts, and performance regressions. <span className="sao-why-hl">We stay until it&apos;s stable.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18v-3a11 11 0 0 1 22 0v3" /><path d="M5 18h4v8H7a2 2 0 0 1-2-2v-6z" /><path d="M27 18h-4v8h2a2 2 0 0 0 2-2v-6z" /></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="sao-why-card">
                <span className="sao-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="sao-why-card-title">{card.title}</h3>
                <p className="sao-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="sao-why-closing">
            Every app setup passes full QA before we call it done. We test on real devices, wire tracking on day one, and monitor for 30 days after handover.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Strategy Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sao-why-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .sao-why-br-lg { display: inline; } .sao-why-br-md { display: none; }
          .sao-why-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .sao-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .sao-why-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; font-family: 'Poppins', sans-serif; font-size: 16px; transition: border-color 0.25s ease, transform 0.25s ease; }
          .sao-why-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .sao-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .sao-why-icon svg { stroke: url(#saoWhyGradient); color: #C8F57A; }
          .sao-why-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .sao-why-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .sao-why-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .sao-why-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1202px; }
          @media (max-width: 1024px) { .std-why.sao-why-section { padding: 53px 20px !important; } .sao-why-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .sao-why-br-lg { display: none !important; } .sao-why-br-md { display: inline !important; } .sao-why-desc { font-size: 16px !important; line-height: 26px !important; margin-bottom: 16px !important; max-width: 100% !important; } .sao-why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .sao-why-card { padding: 24px !important; } .sao-why-icon { margin-bottom: 6px !important; } .sao-why-card-title { font-size: 19px !important; line-height: 26px !important; } .sao-why-card-desc { font-size: 14px !important; line-height: 22px !important; } .sao-why-closing { font-size: 16px !important; line-height: 26px !important; margin-bottom: 24px !important; } }
          @media (max-width: 768px) { .sao-why-grid { margin-bottom: 16px !important; } .sao-why-closing { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .std-why.sao-why-section { padding: 20px 18px !important; } .sao-why-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .sao-why-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .sao-why-desc { font-size: 15px !important; line-height: 24px !important; margin-bottom: 10px !important; } .sao-why-br-md { display: none !important; } .sao-why-card { padding: 22px 20px !important; } .sao-why-icon { width: 48px; height: 48px; margin-bottom: 10px !important; } .sao-why-card-title { margin-bottom: 10px !important; } .sao-why-closing { margin-bottom: 10px !important; } }
        ` }} />

        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="saoWhyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"     stopColor="#A8F0B4" />
              <stop offset="16.83%" stopColor="#C8F57A" />
              <stop offset="29.33%" stopColor="#3DC77A" />
              <stop offset="41.83%" stopColor="#5FDB7E" />
              <stop offset="52.4%"  stopColor="#A8F0B4" />
              <stop offset="66.83%" stopColor="#2A9555" />
              <stop offset="83.41%" stopColor="#4FB872" />
              <stop offset="100%"   stopColor="#4EB771" />
            </linearGradient>
          </defs>
        </svg>
      </section>

      {/* ── 8. Our Work (CREAM) ── */}
      <section style={{ background: C_CREAM, padding: "40px 20px" }} aria-label="Shopify app setup and optimization case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Our Work
          </h2>

          <div className="sao-cs-grid">
            {CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`sao-cs-card${i === 3 ? " sao-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_WHITE, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} alt={`${cs.brand} Shopify app setup case study`} fill className="sao-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
                  )}
                  <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(255,255,255,0.97)", borderRadius: "9999px", padding: "5px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#000", display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 400, color: "#000", whiteSpace: "nowrap" }}>{cs.metricLabel}</span>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", fontWeight: 700, color: "#000", whiteSpace: "nowrap" }}>{cs.metric}</span>
                  </div>
                  <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.72)", borderRadius: "9999px", padding: "4px 12px" }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 500, color: "#fff", whiteSpace: "nowrap" }}>{cs.industry}</span>
                  </div>
                </div>
                <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flexGrow: 1, gap: "12px" }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22px", fontWeight: 700, color: "#000", margin: 0, lineHeight: 1.2 }}>{cs.brand}</p>
                  <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {cs.tags.map((tag) => (
                      <span key={tag} style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 500, color: "#444", border: "1px solid rgba(0,0,0,0.22)", borderRadius: "9999px", padding: "3px 10px", whiteSpace: "nowrap" }}>{tag}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: "rgba(0,0,0,0.55)", margin: 0, lineHeight: 1.6, flexGrow: 1 }}>{cs.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 24 }}>
            <Link href="/case-studies" className="std-cta-dark inline-flex items-center gap-3">
              <span>See All Case Studies</span>
              <Arrow />
            </Link>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .sao-cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .sao-cs-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
          .sao-cs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .sao-cs-card-img { transition: transform 0.4s ease; }
          .sao-cs-card:hover .sao-cs-card-img { transform: scale(1.03); }
          .sao-cs-card-4th { display: none !important; }
          @media (max-width: 768px) { .sao-cs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .sao-cs-card-4th { display: flex !important; } }
          @media (max-width: 540px) { .sao-cs-grid { grid-template-columns: 1fr; } .sao-cs-card-4th { display: none !important; } }
        ` }} />
      </section>

      {/* ── 9. FAQ (WHITE) ── */}
      <section
        className="sao-faq-section"
        style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }}
        aria-label="Frequently asked questions about Shopify app setup and optimization"
      >
        <div className="sao-faq__inner mx-auto" style={{ maxWidth: "1100px" }}>
          <h2 className="sao-faq__title">Shopify App Setup &amp; Optimization FAQs</h2>

          <SaoFaqAccordion faqs={FAQS} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
        />

        <style dangerouslySetInnerHTML={{ __html: `
          .sao-faq__inner { padding: 40px 15px; }
          .sao-faq__title { color: #000000; font-family: 'Poppins', sans-serif; font-size: 32px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 0 32px; }
          .sao-faq__list { list-style: none; margin: 0; padding: 0; border-top: 1px solid #E5E7EB; }
          .sao-faq__item { border-bottom: 1px solid #E5E7EB; }
          .sao-faq__q { color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; line-height: 1.4; flex: 1; }
          .sao-faq__chev { display: inline-flex; align-items: center; justify-content: center; color: #000000; flex-shrink: 0; }
          .sao-faq__a-text { margin: 0 0 22px; color: #334155; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 1.7; }
          @media (min-width: 1024px) { .sao-faq__inner { padding: 72px 20px; } .sao-faq__title { font-size: 44px; margin-bottom: 40px; } .sao-faq__q { font-size: 17px; } .sao-faq__a-text { font-size: 16px; } }
        ` }} />
      </section>

      {/* ── Page CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Hero image ── */
        .sao-hero-img-wrap { display: flex; align-items: center; justify-content: center; }
        .sao-hero-img { width: 100%; height: auto; border-radius: 16px; display: block; box-shadow: 0 24px 64px rgba(0,0,0,0.45); }
        @media (max-width: 1023px) { .sao-hero-img-wrap { margin-top: 8px; } }
        @media (max-width: 640px) { .sao-hero-img { border-radius: 10px; } }

        .std-badge {
          display: inline-block; padding: 6px 16px;
          background: rgba(97,206,112,0.12); border: 1px solid rgba(97,206,112,0.3);
          border-radius: 999px; color: #61ce70;
          font-size: 13px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase;
        }
        .std-label { font-size: 13px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #334155; }

        .std-hero-stats { display: flex; flex-wrap: wrap; gap: 0; margin-top: 32px; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 24px; }
        .std-hero-stat-item { display: flex; flex-direction: column; gap: 4px; padding: 0 28px 0 0; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.12); }
        .std-hero-stat-item:last-child { border-right: none; padding-right: 0; margin-right: 0; }
        .std-hero-stat-num { font-size: 28px; font-weight: 800; line-height: 1; background: var(--brand-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .std-hero-stat-label { font-size: 13px; font-weight: 500; color: #ffffff; letter-spacing: .02em; }

        @media (min-width: 1025px) and (max-width: 1307px) {
          .std-hero-stats { flex-wrap: nowrap !important; }
          .std-hero-stat-item { padding-right: 18px !important; margin-right: 18px !important; }
          .std-hero-stat-num { font-size: 24px !important; }
          .std-hero-stat-label { font-size: 12px !important; }
        }

        .std-cta-sol { position: relative; display: inline-flex; align-items: center; gap: 12px; background: #000000; color: #ffffff; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; border-radius: 50px; padding: 20px 45px; text-decoration: none; line-height: 1; transition: color .25s ease; }
        .std-cta-sol::before { content: ''; position: absolute; inset: 0; border-radius: 50px; padding: 2px; background: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude; opacity: 0; transition: opacity .25s ease; pointer-events: none; }
        .std-cta-sol:hover::before { opacity: 1; }
        .std-cta-sol:visited, .std-cta-sol:focus, .std-cta-sol:active { color: #ffffff; text-decoration: none; }

        .std-cta-dark { color: #FFFFFF; border: 1px solid transparent; border-radius: 999px; padding: 15px 30px; font-size: 15px; font-weight: 600; background: linear-gradient(#000000, #000000) padding-box, #000000 border-box; transition: background .3s ease, transform .25s ease, box-shadow .25s ease; text-decoration: none; }
        .std-cta-dark:hover { color: #FFFFFF; background: linear-gradient(#000000, #000000) padding-box, var(--brand-gradient) border-box; transform: translateY(-1px); box-shadow: 0 10px 28px -10px rgba(0,0,0,.45); }
        .std-cta-dark:visited, .std-cta-dark:focus, .std-cta-dark:active { color: #FFFFFF; text-decoration: none; }

        .std-acc-item { border-top: 1px solid rgba(17,17,17,.14); }
        .std-acc-item:last-child { border-bottom: 1px solid rgba(17,17,17,.14); }
        .std-acc-icon { flex: 0 0 18px; color: #000000; transition: transform .3s ease; }
        .std-acc-icon--open { transform: rotate(180deg); }

        @media (max-width: 1024px) {
          .std-hero-h1 { font-size: 40px !important; }
          .std-solutions h2 { font-size: 38px !important; }
          .std-solutions-grid { grid-template-columns: 1fr 1.1fr !important; gap: 40px !important; }
          .std-hero-inner { padding: 60px 20px !important; }
          .std-hero-p { margin-top: 16px !important; }
          .std-hero-stats { flex-wrap: nowrap !important; margin-top: 16px !important; padding-top: 16px !important; }
          .std-hero-stat-item { padding-right: 16px !important; margin-right: 16px !important; }
          .std-hero-stat-num { font-size: 22px !important; }
          .std-hero-stat-label { font-size: 12px !important; }
        }

        @media (max-width: 768px) {
          .std-solutions h2 { font-size: 36px !important; }
          .std-solutions-grid { gap: 24px !important; }
        }

        @media (max-width: 640px) {
          .std-hero > div { padding: 56px 18px !important; }
          .std-solutions > div { padding: 40px 18px !important; gap: 36px !important; }
          .std-solutions-grid { grid-template-columns: 1fr !important; }
          .std-solutions-left { position: static !important; }
          .std-solutions h2 { font-size: 32px !important; }
          .std-cta-sol { margin-top: 16px !important; }

          .std-hero-h1 { font-size: 28px !important; line-height: 1.22 !important; }
          .std-hero-p { font-size: 14px !important; line-height: 24px !important; }
          .std-hero-stats { gap: 0; margin-top: 24px; padding-top: 18px; }
          .std-hero-stat-item { padding-right: 16px; margin-right: 16px; }
          .std-hero-stat-num { font-size: 22px !important; }
          .std-hero-stat-label { font-size: 11px !important; }

          .std-solutions h2 { font-size: 26px !important; line-height: 1.28 !important; }
        }
      `}} />
    </>
  );
}
