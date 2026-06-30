import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SmsAccordion from "./SmsAccordion";
import SmsFaqAccordion from "./SmsFaqAccordion";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import ServiceSchema from "@/components/seo/ServiceSchema";

const META_DESCRIPTION =
  "Shopify maintenance and support for 150+ stores. Monthly retainers covering audits, bug fixes, speed monitoring, and proactive care for your store.";
const CANONICAL_URL = "https://ecommwizards.com/services/shopify-maintenance-and-support";

export const metadata: Metadata = {
  title: { absolute: "Shopify Maintenance and Support | Ongoing Store Care" },
  description: META_DESCRIPTION,
  keywords: [
    "shopify maintenance and support",
    "shopify maintenance services",
    "shopify support and maintenance",
    "shopify website maintenance",
    "shopify store maintenance",
    "shopify maintenance packages",
    "monthly shopify retainer",
    "shopify bug fixes",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "Shopify Maintenance and Support | Ongoing Store Care",
    description: META_DESCRIPTION,
    images: [{ url: "/images/Store performance.webp", alt: "shopify maintenance and support by Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Maintenance and Support | Ongoing Store Care",
    description: META_DESCRIPTION,
    images: ["/images/Store performance.webp"],
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
    brand: "NEOM Wellbeing",
    metric: "+34%",
    metricLabel: "Checkout Conversion",
    tags: ["Shopify 2.0", "POS Integration", "Shopify Markets"],
    industry: "Health & Wellness",
    image: "/images/Case%20studies/NEOM%20Wellbeing-2.webp",
    video: "/images/Case%20studies/NEOM%20Wellbeing%20video.mp4",
    href: "/case-studies/neom-wellbeing-shopify-upgrade",
    description: "A multi-award-winning luxury wellbeing brand upgraded from a legacy Shopify setup to Shopify 2.0, unified physical retail under Shopify POS, expanded to three markets, and grew checkout conversion 34% and order volume 10%.",
  },
  {
    brand: "Feetures",
    metric: "+32%",
    metricLabel: "Add-to-Cart Rate",
    tags: ["Theme Development", "Performance", "Automation"],
    industry: "Sports & Fitness",
    image: "/images/Case%20studies/Feetures.jpg",
    video: "/images/Case%20studies/Feetures%20video.mp4",
    href: "/case-studies/feetures-shopify-theme-development",
    description: "America's top-rated performance sock brand rebuilt their Shopify theme from scratch with custom PLPs, dynamic PDPs, and metafield-driven automation that eliminated recurring manual overhead and grew add-to-cart rate 32%.",
  },
  {
    brand: "Capelli Sports",
    metric: "+24%",
    metricLabel: "Conversion Rate",
    tags: ["Shopify Migration", "Performance", "SEO"],
    industry: "Sports & Fitness",
    image: "/images/Case%20studies/Capelli%20Sports%20hero%20image.webp",
    video: "/images/Case%20studies/Capelli%20Sports%20video.mp4",
    href: "/case-studies/capelli-sports-shopify-migration",
    description: "A global sportswear brand migrated from WordPress to Shopify with zero downtime, a performance-first redesign, and a 10-app integration stack. Conversion rate grew 24%, site speed 38%, and 95% of SEO equity was preserved.",
  },
];

/* ── Trust logos ── */
const TRUST_LOGOS = [
  { src: "/images/schutz-logo.png-2.png",               alt: "Schutz" },
  { src: "/images/Calvin-Klein-logo.png-1.png",          alt: "Calvin Klein" },
  { src: "/images/Logo-AriZona.png-1.png",               alt: "AriZona" },
  { src: "/images/Logo-Khaite.png-1.png",                alt: "Khaite" },
  { src: "/images/Olaplex-logo-new.avif",                alt: "Olaplex" },
  { src: "/images/Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif", alt: "Lids" },
  { src: "/images/everlast-icon.svg",                    alt: "Everlast" },
  { src: "/images/P448-logo.png-1.png",                  alt: "P448" },
  { src: "/images/LVMH-logo.png-1.png",                  alt: "LVMH" },
  { src: "/images/modelez-logo.png-1-768x361-1.png",     alt: "Mondelez" },
];

/* ── Pain point cards ── */
const SMS_PAINS = [
  {
    name: "Your Store Gets Slower Every Month and Nobody Notices",
    desc: "Every app you install adds JavaScript to your storefront. Every theme edit adds more CSS. Six months in, your store loads in four seconds and no one knows why, because no one is measuring it.",
    cost: "A one-second delay reduces conversions by 7%. Unmonitored stores lose performance slowly until it shows in revenue.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="14" width="4" height="11" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="9" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="15" y="5" width="4" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="21" y="11" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 3l5 5M26 3l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "App Updates Break Your Checkout and You Find Out From a Customer",
    desc: "Shopify's app ecosystem updates constantly. An app that worked on Monday can conflict with your theme on Tuesday. Most stores only discover this when a customer reports it or cart abandonment spikes.",
    cost: "Every hour of a broken checkout during a paid traffic campaign is direct wasted ad spend and lost revenue.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
        <path d="M14 4V2M14 26v-2M4 14H2M26 14h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Shopify Platform Updates Conflict With Your Custom Code",
    desc: "Shopify releases platform updates regularly. If your store has custom Liquid or JavaScript, those updates break it. Without monitoring, you find out when a feature stops working.",
    cost: "Custom code that took weeks to build stops working overnight with no warning and no one watching.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M4 5h20l-2 8H6L4 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6 13l-1.5 6h19l-1.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 19v4M18 19v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Security Vulnerabilities Sit Undetected for Months",
    desc: "Outdated app versions and unpatched code create security gaps. Most stores never audit these unless something goes wrong. By then, customer data may already be at risk.",
    cost: "One security incident costs more to clean up than a full year of monthly maintenance. And it destroys customer trust.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="8" y="3" width="12" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 21v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M19 10l3-3M22 10l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Every Small Change Requires a Separate Developer Invoice",
    desc: "Without a retainer, every small task becomes its own project: scoping, quoting, waiting, paying. The overhead costs more than the work itself.",
    cost: "Ad-hoc development costs 3 to 5 times more per hour than a structured monthly retainer.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="11" r="1.5" fill="currentColor"/>
        <circle cx="17" cy="9" r="1.5" fill="currentColor"/>
        <circle cx="10" cy="17" r="1.5" fill="currentColor"/>
        <path d="M20 20l-4-4M20 16l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Tracking Breaks Silently After Every Theme Update",
    desc: "GA4 events, Meta pixels, and conversion tracking code live inside theme files. When you update your theme, tracking can break without any visible warning. Your data looks fine, but conversions stop registering correctly.",
    cost: "Broken tracking sends ad budget to channels that look like they're working but aren't. You scale what's losing you money.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4L2 24h24L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 12v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="20" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

/* ── Services accordion items ── */
const SMS_ITEMS = [
  {
    title: "Monthly Store Health Audit",
    body: "The foundation of our shopify maintenance service: a full monthly diagnostic covering page speed, broken links, app conflicts, JavaScript errors, checkout flow, and tracking accuracy. You get a written report of every issue found and every fix applied. We document everything.",
  },
  {
    title: "Bug Fixes and Troubleshooting",
    body: "When something breaks, a broken filter, a layout issue, a checkout error, an app conflict, we fix it within your monthly hours. No separate invoice, no scoping call, no waiting for a quote. We resolve most bugs within one business day.",
  },
  {
    title: "Speed and Performance Optimization",
    body: "We track Core Web Vitals monthly as part of our shopify website maintenance checks and fix what drags your scores down: unoptimized images, render-blocking scripts, unused app JavaScript, and lazy loading gaps. Faster stores convert better and rank higher. We measure and report every change.",
  },
  {
    title: "Theme Updates and Compatibility Management",
    body: "When Shopify releases platform updates or you need to update your theme version, we run it through a development environment first. We preserve your customizations, test everything, and push nothing live until we have confirmed it works.",
  },
  {
    title: "App Management and Conflict Resolution",
    body: "App management is part of every shopify store maintenance plan we run. We review every installed app's impact: unused apps adding page weight, conflicting scripts, apps with known vulnerabilities in older versions. We update, remove, or replace apps to keep your store clean and your load times fast.",
  },
  {
    title: "Security Monitoring and Hardening",
    body: "Monthly security reviews cover app permissions, installed third-party scripts, SSL configuration, and known Shopify vulnerability disclosures. We flag and fix issues before they become incidents and keep a record of every review.",
  },
  {
    title: "On-Demand Development Hours",
    body: "Each shopify maintenance services plan includes development hours for work that comes up during the month: new sections, conversion improvements, feature additions, or integrations. Your monthly report shows exactly where every hour went and what it produced.",
  },
  {
    title: "Monthly Reporting and Full Transparency",
    body: "Every month you receive a written report covering every task completed, hours used, issues found during the health audit, current performance benchmarks, and what is planned for the following month. You never have to ask what we did. It is already documented.",
  },
];

/* ── Compare section data ── */
const NATIVE_PROS = [
  "Monthly audits find issues before customers report them or revenue drops.",
  "Fixed monthly scope: no separate invoice for every small fix or update.",
  "Shopify-only team that knows where platform updates cause breaks.",
  "Guaranteed response time: no searching for available freelancers when things break.",
  "Full written record of every change made, every hour used, every issue found.",
  "We test platform updates in development before anything goes live on your store.",
];
const BUILDER_CONS = [
  { text: "Issues surface when a customer complains or sales data drops.", warn: true  },
  { text: "Every small change is a separate project: scoping, quoting, waiting, invoicing.", warn: true  },
  { text: "Generic developers who don't know Shopify's platform-specific limitations.", warn: true  },
  { text: "Hours or days to find available help when something breaks at the wrong moment.", warn: false },
  { text: "No documentation: the next developer starts from zero each time.", warn: false },
  { text: "Platform updates silently break custom code with no monitoring in place.", warn: false },
];

/* ── Breadcrumb schema ── */
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Maintenance and Support", item: "https://ecommwizards.com/services/shopify-maintenance-and-support" },
  ],
};

/* ── FAQs ── */
const FAQS = [
  {
    q: "What does your Shopify maintenance service include each month?",
    a: "Our shopify maintenance service covers a monthly store health audit, bug fixes and troubleshooting within your allocated hours, performance monitoring, security reviews, app management, and a written report of everything completed. Development hours in your plan can be used for any agreed task: fixes, small features, conversion tweaks, or content updates.",
  },
  {
    q: "How do your Shopify maintenance services differ from Shopify's own support?",
    a: "Shopify's support team handles billing questions and platform-level issues. They cannot help with custom theme code, third-party app conflicts, performance optimization, or development work. Our shopify maintenance services cover everything Shopify's support doesn't touch.",
  },
  {
    q: "What happens when there is a store emergency outside business hours?",
    a: "Checkout errors, broken payment flows, and site downtime get treated as emergencies regardless of when they happen. Clients on retainer get a direct contact line for urgent issues that cannot wait until the next business day.",
  },
  {
    q: "Can you work alongside our existing developer or agency?",
    a: "Yes. We work alongside in-house developers and other agencies regularly. We agree on scope and access boundaries upfront so there are no conflicts. Many clients use us specifically to handle the ongoing shopify support and maintenance their existing developer does not have capacity for.",
  },
  {
    q: "How do I get started with a Shopify maintenance and support service?",
    a: "Getting started with our shopify maintenance and support service takes one to two weeks of onboarding. We start with a full store audit covering speed, code quality, security, tracking, and your app stack. We deliver a written findings report before any work begins. You approve the priority plan before we touch your store.",
  },
  {
    q: "What is Shopify website maintenance and why does my store need it?",
    a: "Shopify website maintenance is the ongoing work that keeps your store running correctly after every app update, theme change, and platform release. It covers page speed, bug fixes, security reviews, tracking verification, and compatibility between your theme and apps. Most stores skip it until something breaks visibly. By then the cost in lost sales or emergency dev fees is always higher than what a structured shopify maintenance service costs monthly. Without regular care, Shopify stores degrade slowly: performance drops, app conflicts pile up, and security gaps sit undetected until they become incidents.",
  },
  {
    q: "How do you handle Shopify platform and theme updates?",
    a: "We track Shopify's platform changelog and test updates in a development environment before anything goes live. For theme updates, we compare the current and updated version, preserve your customizations including custom Liquid and JavaScript, and confirm nothing breaks before we push live. We document all custom code so the next developer on your store starts with context, not a blank slate.",
  },
  {
    q: "What does the monthly Shopify maintenance report include?",
    a: "The monthly report covers every task completed with hours logged, issues found during the health audit, current performance benchmarks including Core Web Vitals and page speed, a security review summary, and a plan for the following month. You never have to ask what we did. It is already documented.",
  },
  {
    q: "Can we cancel our Shopify maintenance service at any time?",
    a: "Yes. We operate on a rolling monthly basis with 30 days notice. No lock-in, no cancellation fees. We would rather earn the renewal every month than hold clients to a contract they no longer want.",
  },
  {
    q: "Do unused hours in your Shopify maintenance packages roll over to the next month?",
    a: "Unused hours do not roll over. Our shopify maintenance packages are priced to reflect the monitoring, audit, and reporting infrastructure we maintain regardless of task volume in any given month. If you consistently have hours left over, we will recommend adjusting your plan down to a better fit.",
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
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Shopify maintenance and support hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Shopify Maintenance Services &amp; Support</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Shopify Maintenance Services and Support{" "}
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                That Catch Problems Before Your Customers Do
              </span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              Every app update, theme change, and platform release can break your store without any visible warning. Our shopify maintenance services audit monthly, fix bugs on retainer, and monitor performance continuously so you hear about problems from us, not from a customer.
            </p>
            <div className="std-hero-stats">
              {[
                { number: "150+",  label: "Stores Maintained" },
                { number: "24hr",  label: "Avg Bug Fix" },
                { number: "18mo+", label: "Avg Retainer" },
                { number: "4.9★", label: "Client Rating" },
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
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Store Audit</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>

          <div className="sms-hero-img-wrap">
            <Image
              src="/images/Store performance.webp"
              alt="Shopify maintenance and support dashboard showing monthly store health monitoring"
              width={640}
              height={480}
              priority
              className="sms-hero-img"
              style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. Trust Bar (WHITE) ── */}
      <section className="std-trust" style={{ background: C_WHITE }} aria-label="Brands that trust Ecomm Wizards">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: C_DARK, fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            150+ Shopify Stores Maintained. Here&apos;s Who Trusts Us.
          </h2>
          <p className="text-center" style={{ color: C_TEXT, fontSize: 16, lineHeight: "26px", margin: "10px 0 0", textAlign: "center" }}>
            From DTC startups to global brands. Our shopify support and maintenance services run exclusively on Shopify. No WordPress, no WooCommerce.
          </p>

          <div className="std-trust-carousel" style={{ marginTop: 20, width: "100%", overflow: "hidden" }}>
            <div className="sms-trust-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
                <div key={i} className="std-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={i < TRUST_LOGOS.length ? l.alt : ""}
                    className="std-trust-logo"
                    width={200}
                    height={80}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Pain Points (CREAM) ── */}
      <section className="sms-feat" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Shopify maintenance problems">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div className="sms-feat-title-block">
            <h2 className="sms-feat-heading">
              6 Ways a Neglected Shopify Store Quietly Loses You Revenue
            </h2>
            <p className="sms-feat-desc">
              Most stores have no one checking whether things still work after each app update, theme change, or platform release. These are the problems we find on almost every store we audit.
            </p>
          </div>

          <div className="sms-feat-grid">
            {SMS_PAINS.map((pain) => (
              <div key={pain.name} className="sms-feat-card">
                <span className="sms-feat-icon" aria-hidden="true">{pain.icon}</span>
                <h3 className="sms-feat-name">{pain.name}</h3>
                <p className="sms-feat-desc-text">{pain.desc}</p>
                <div className="sms-feat-roi">
                  <span className="sms-feat-roi-label">What this costs you:</span> {pain.cost}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sms-feat-heading { color: #000; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 auto 16px; max-width: 1000px; }
          .sms-feat-desc { color: rgba(0,0,0,.75); font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 1000px; }
          .sms-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .sms-feat-card { background: #fff; border-radius: 16px; padding: 28px; border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 12px; }
          .sms-feat-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          .sms-feat-name { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 700; color: #000; margin: 0; line-height: 1.3; }
          .sms-feat-desc-text { font-family: 'Poppins', sans-serif; font-size: 14px; color: #334155; line-height: 1.7; margin: 0; flex-grow: 1; }
          .sms-feat-roi { font-family: 'Poppins', sans-serif; font-size: 13px; color: #2A9555; line-height: 1.5; background: rgba(61,199,122,0.08); border-radius: 8px; padding: 10px 14px; border-left: 3px solid #3DC77A; margin-top: auto; }
          .sms-feat-roi-label { font-weight: 700; }
          @media (max-width: 1024px) { .sms-feat-heading { font-size: 32px !important; } .sms-feat-desc { font-size: 16px !important; margin-bottom: 24px !important; } .sms-feat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 768px) { .sms-feat-desc { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .sms-feat { padding: 40px 16px !important; } .sms-feat-heading { font-size: 26px !important; } .sms-feat-desc { font-size: 15px !important; } .sms-feat-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── 4. Services Accordion (WHITE) ── */}
      <section className="std-solutions" style={{ background: C_WHITE }} aria-label="Shopify maintenance and support services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>What&apos;s Included</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              What&apos;s Included in Our Shopify Maintenance Services
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              Every shopify maintenance service includes a monthly store audit, bug fixes within your hours, performance monitoring, security reviews, and a written report of everything done. We never close a month without showing our work.
            </p>
            <Link href="/book-shopify-consultation" className="std-cta-sol mt-8">
              Book a Free Store Audit
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <SmsAccordion items={SMS_ITEMS} />
        </div>
      </section>

      {/* ── 5. Process (WHITE) ── */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label="Our Shopify maintenance and support process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: C_CREAM, borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            How Our Shopify Maintenance Service and Support Process Works
          </h2>

          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            Five steps from your first audit to a shopify maintenance service running on a fixed monthly cycle.
            <br className="hidden sm:block lg:hidden" />{" "}
            Most stores are fully onboarded within two weeks.
          </p>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {[
              { step: "01.", title: "Audit", desc: "We run a full diagnostic before touching anything: speed, security, tracking, code quality, and app stack. We document every issue in a written findings report." },
              { step: "02.", title: "Priority Plan", desc: "We present a prioritized list of what needs immediate fixing, what to optimize over time, and what to monitor ongoing. You approve the plan before work starts." },
              { step: "03.", title: "Onboarding", desc: "We fix the highest-priority issues in the first two weeks and set up monitoring for ongoing health checks." },
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
              { step: "04.", title: "Monthly Cycle", desc: "Every month: health audit, bug fixes, development work within your hours, and a written report of everything completed." },
              { step: "05.", title: "Ongoing Partnership", desc: "The longer we maintain your store, the better we know it. We catch most issues before they reach customers because we know exactly where Shopify breaks." },
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

      {/* ── 6. Compare (DARK) ── */}
      <section className="sms-compare" style={{ background: C_DARK, padding: "0 20px" }} aria-label="Managed monthly maintenance vs ad-hoc development">
        <div className="mx-auto" style={{ maxWidth: 1320, padding: "60px 0" }}>

          <h2 className="sms-compare-h2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 4.1vw, 42px)", fontWeight: 700, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Managed Monthly Maintenance vs.{" "}
            <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Calling a Developer When Things Break
            </span>
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Most stores run shopify website maintenance reactively. Something breaks, they find a developer, they wait, they pay. Here is what that costs.
          </p>

          <div className="sms-compare-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 20, marginTop: 10 }}>

            <div className="sms-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="sms-compare-badge" style={{ display: "inline-block", background: "rgba(61,199,122,0.15)", color: "#3DC77A", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(61,199,122,0.3)" }}>
                ✓ Managed Monthly Maintenance
              </span>
              <ul className="sms-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {NATIVE_PROS.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2, color: "#3DC77A" }}><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sms-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="sms-compare-badge" style={{ display: "inline-block", background: "rgba(239,68,68,0.12)", color: "#f87171", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(239,68,68,0.25)" }}>
                ✕ Calling a Developer When Things Break
              </span>
              <ul className="sms-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
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
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Store Audit</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1024px) { .sms-compare-h2 { font-size: 38px !important; } }
          @media (max-width: 768px) { .sms-compare-grid { gap: 12px !important; } .sms-compare-card { padding: 20px !important; } .sms-compare-badge { font-size: 16px !important; padding: 5px 10px !important; white-space: nowrap; margin-bottom: 14px !important; } .sms-compare-list { gap: 10px !important; } .sms-compare-card li { font-size: 14px !important; } }
        ` }} />
      </section>

      {/* ── 7. Results / Testimonial Slider (CREAM) ── */}
      <section
        className="sms-results-section"
        style={{ background: C_CREAM, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "40px 20px" }}
      >
        <div className="sms-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="sms-results-heading">Results From the Stores We Maintain</h2>
          <p className="sms-results-desc">
            Not projections. Real numbers from stores where consistent monthly maintenance and platform work produced measurable revenue growth.
          </p>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .sms-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:1100px; }
          .sms-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          @media (max-width:1023px) { .sms-results-section { padding:44px 20px !important; } .sms-results-heading { font-size:30px !important;line-height:40px !important;margin-bottom:18px !important; } .sms-results-desc { font-size:16px !important;line-height:26px !important;margin-bottom:32px !important; } }
          @media (min-width:768px) and (max-width:1023px) { .sms-results-section { padding:30px 20px !important; } .sms-results-desc { margin-bottom:18px !important; } }
          @media (max-width:640px) { .sms-results-section { padding:20px 16px !important; } .sms-results-heading { font-size:26px !important;line-height:34px !important; } .sms-results-desc { font-size:15px !important;line-height:24px !important; } }
        ` }} />
      </section>

      {/* ── 8. Why Us (DARK) ── */}
      <section
        className="std-why sms-why-section"
        style={{ background: C_DARK, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Why brands choose Ecomm Wizards for Shopify maintenance and support"
      >
        <div className="sms-why-inner mx-auto" style={{ maxWidth: "1320px" }}>

          <h2 className="sms-why-heading">
            Why Brands Choose Ecomm Wizards for{" "}<br className="sms-why-br-lg" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shopify Maintenance Services and Support
            </span>
          </h2>

          <p className="sms-why-desc">
            We have run shopify maintenance services for 150+ brands. Here is what separates a structured monthly retainer from calling a developer when something breaks:
          </p>

          <div className="sms-why-grid">
            {[
              {
                title: "Shopify-Only Focus",
                desc: (<>Every shopify maintenance service we run is for Shopify-only stores. We know where the platform breaks after updates, which apps conflict, and how Shopify&apos;s checkout handles edge cases that trip up developers who treat it like any other platform.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></svg>),
              },
              {
                title: "Proactive, Not Reactive",
                desc: (<>We catch most issues before your customers see them. Monthly audits, performance monitoring, and Shopify changelog reviews mean you hear about problems from us, not from a support ticket.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="12"/><path d="M10 16l4 4 8-8"/></svg>),
              },
              {
                title: "Full Transparency Every Month",
                desc: (<>Every task, every hour, every fix goes into your monthly report. You see exactly what we did, what it cost in hours, and what we found. Nothing is billed without a record.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="24" height="8" rx="2"/><rect x="4" y="18" width="24" height="8" rx="2"/><circle cx="8" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="8" cy="22" r="1" fill="currentColor" stroke="none"/></svg>),
              },
              {
                title: "Fast Response When It Matters",
                desc: (<>Routine work runs on a planned monthly cycle. Broken checkout, payment failures, and site downtime get our immediate attention. We do not leave you waiting when traffic is live and something is broken.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="3" width="18" height="24" rx="2"/><path d="M10 10h12M10 15h12M10 20h7"/></svg>),
              },
              {
                title: "You Own Everything",
                desc: (<>All code changes, configurations, and access credentials stay in your accounts. If you stop working with us, your store runs exactly as we left it. Nothing is locked to a proprietary system we manage.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4l-2 2-4-2-2 4-4 2 2 4-2 4 4 2 2 4 4-2 4 2 2-4 4-2-2-4 2-4-4-2z"/><circle cx="16" cy="16" r="3"/></svg>),
              },
              {
                title: "Long-Term Partnership",
                desc: (<>Most of our clients stay on retainer for 18 months or more. The longer we maintain your store, the better we know it. We learn your store&apos;s edge cases, your custom code, your history. <span className="sms-why-hl">We stay until it&apos;s right.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3L5 8v9c0 6.1 4.7 11.8 11 13 6.3-1.2 11-6.9 11-13V8L16 3z"/><path d="M11 16l3 3 7-7"/></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="sms-why-card">
                <span className="sms-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="sms-why-card-title">{card.title}</h3>
                <p className="sms-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="sms-why-closing">
            Every shopify maintenance service we run includes a monthly audit, documented fixes, and a written report. We know where Shopify breaks after updates. We catch problems before your customers do.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Store Audit</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sms-why-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .sms-why-br-lg { display: inline; } .sms-why-br-md { display: none; }
          .sms-why-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .sms-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .sms-why-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; font-family: 'Poppins', sans-serif; font-size: 16px; transition: border-color 0.25s ease, transform 0.25s ease; }
          .sms-why-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .sms-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .sms-why-icon svg { stroke: url(#smsWhyGradient); color: #C8F57A; }
          .sms-why-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .sms-why-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .sms-why-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .sms-why-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1202px; }
          @media (max-width: 1024px) { .std-why.sms-why-section { padding: 53px 20px !important; } .sms-why-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .sms-why-br-lg { display: none !important; } .sms-why-br-md { display: inline !important; } .sms-why-desc { font-size: 16px !important; line-height: 26px !important; margin-bottom: 16px !important; max-width: 100% !important; } .sms-why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .sms-why-card { padding: 24px !important; } .sms-why-icon { margin-bottom: 6px !important; } .sms-why-card-title { font-size: 19px !important; line-height: 26px !important; } .sms-why-card-desc { font-size: 14px !important; line-height: 22px !important; } .sms-why-closing { font-size: 16px !important; line-height: 26px !important; margin-bottom: 24px !important; } }
          @media (max-width: 768px) { .sms-why-grid { margin-bottom: 16px !important; } .sms-why-closing { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .std-why.sms-why-section { padding: 20px 18px !important; } .sms-why-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .sms-why-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .sms-why-desc { font-size: 15px !important; line-height: 24px !important; margin-bottom: 10px !important; } .sms-why-br-md { display: none !important; } .sms-why-card { padding: 22px 20px !important; } .sms-why-icon { width: 48px; height: 48px; margin-bottom: 10px !important; } .sms-why-card-title { margin-bottom: 10px !important; } .sms-why-closing { margin-bottom: 10px !important; } }
        ` }} />

        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="smsWhyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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

      {/* ── 9. Our Work (CREAM) ── */}
      <section style={{ background: C_CREAM, padding: "40px 20px" }} aria-label="Shopify maintenance case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Our Work
          </h2>

          <div className="sms-cs-grid">
            {CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`sms-cs-card${i === 3 ? " sms-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_WHITE, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} alt={`${cs.brand} Shopify maintenance case study`} fill className="sms-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
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
          .sms-cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .sms-cs-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
          .sms-cs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .sms-cs-card-img { transition: transform 0.4s ease; }
          .sms-cs-card:hover .sms-cs-card-img { transform: scale(1.03); }
          .sms-cs-card-4th { display: none !important; }
          @media (max-width: 768px) { .sms-cs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .sms-cs-card-4th { display: flex !important; } }
          @media (max-width: 540px) { .sms-cs-grid { grid-template-columns: 1fr; } .sms-cs-card-4th { display: none !important; } }
        ` }} />
      </section>

      {/* ── 10. FAQ (WHITE) ── */}
      <section
        className="sms-faq-section"
        style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }}
        aria-label="Frequently asked questions about Shopify maintenance and support"
      >
        <div className="sms-faq__inner mx-auto" style={{ maxWidth: "1100px" }}>
          <h2 className="sms-faq__title">Shopify Maintenance Services FAQs</h2>

          <SmsFaqAccordion faqs={FAQS} />
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
        <ServiceSchema url={CANONICAL_URL} name="Shopify Maintenance and Support" serviceType="Shopify maintenance and support" description={META_DESCRIPTION} />

        <style dangerouslySetInnerHTML={{ __html: `
          .sms-faq__inner { padding: 40px 15px; }
          .sms-faq__title { color: #000000; font-family: 'Poppins', sans-serif; font-size: 32px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 0 32px; }
          .sms-faq__list { list-style: none; margin: 0; padding: 0; border-top: 1px solid #E5E7EB; }
          .sms-faq__item { border-bottom: 1px solid #E5E7EB; }
          .sms-faq__q { color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; line-height: 1.4; flex: 1; }
          .sms-faq__chev { display: inline-flex; align-items: center; justify-content: center; color: #000000; flex-shrink: 0; }
          .sms-faq__a-text { margin: 0 0 22px; color: #334155; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 1.7; }
          @media (min-width: 1024px) { .sms-faq__inner { padding: 72px 20px; } .sms-faq__title { font-size: 44px; margin-bottom: 40px; } .sms-faq__q { font-size: 17px; } .sms-faq__a-text { font-size: 16px; } }
        ` }} />
      </section>

      {/* ── Page CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Hero image ── */
        .sms-hero-img-wrap { display: flex; align-items: center; justify-content: center; }
        .sms-hero-img { width: 100%; height: auto; border-radius: 16px; display: block; box-shadow: 0 24px 64px rgba(0,0,0,0.45); }
        @media (max-width: 1023px) { .sms-hero-img-wrap { margin-top: 8px; } }
        @media (max-width: 640px) { .sms-hero-img { border-radius: 10px; } }

        /* ── Trust bar animation (page-scoped) ── */
        .sms-trust-track { display: flex; align-items: center; gap: 80px; width: max-content; animation: smsTrustScroll 32s linear infinite; }
        .std-trust-carousel:hover .sms-trust-track { animation-play-state: paused; }
        @keyframes smsTrustScroll { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
        @media (max-width: 640px) { .sms-trust-track { gap: 48px !important; } }

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
