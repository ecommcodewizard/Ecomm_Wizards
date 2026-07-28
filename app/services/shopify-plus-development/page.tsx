import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import Image from "next/image";
import Link from "next/link";
import SplusAccordion from "./SplusAccordion";
import SplusFaqAccordion from "./SplusFaqAccordion";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import ServiceSchema from "@/components/seo/ServiceSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RelatedServices from "@/components/sections/RelatedServices";

const META_DESCRIPTION =
  "Shopify Plus development agency with 200+ enterprise stores built. Custom checkout extensions, B2B portals, ERP integrations, zero-downtime migrations.";
const CANONICAL_URL = "https://ecommwizards.com/services/shopify-plus-development";

export const metadata: Metadata = {
  title: { absolute: "Shopify Plus Development Agency | Enterprise Builds" },
  description: META_DESCRIPTION,
  keywords: [
    "shopify plus development",
    "shopify plus development agency",
    "shopify plus developer",
    "shopify plus store development",
    "enterprise shopify development",
    "shopify plus checkout extensions",
    "shopify plus b2b development",
    "shopify plus migration",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "Shopify Plus Development Agency | Enterprise Builds",
    description: META_DESCRIPTION,
    images: [{ url: ogImage("Shopify Plus Development"), width: 1200, height: 630, alt: "Shopify Plus Development — Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Plus Development Agency | Enterprise Builds",
    description: META_DESCRIPTION,
    images: [ogImage("Shopify Plus Development")],
  },
};

const C_DARK  = "#000000";
const C_TEXT  = "#334155";
const C_WHITE = "#FFFFFF";
const C_CREAM = "#FBF7ED";

/* ── Case study slides ── */
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

/* ── Plus Features Explained ── */
const PLUS_FEATURES = [
  {
    name: "Checkout Extensibility",
    desc: "Add upsells, gift messages, loyalty redemption, custom fields, and branded elements directly inside the Shopify checkout via native Extensions. No redirects. No third-party replacements.",
    roi: "Clients see an average 18% higher AOV once checkout upsells run via native Extensions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="2" y="3" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 10h24" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7 7h2M11 7h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <rect x="4" y="14" width="9" height="7" rx="1" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M17 14h5M17 18h4M17 21h5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Shopify Flow Automation",
    desc: "Build automated workflows triggered by orders, customer actions, and inventory changes. Routing, tagging, alerts, and marketing triggers run without your team touching them.",
    roi: "Operations teams typically save 12+ hours per week once Flow replaces their manual workflows.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="5" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="23" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="23" cy="21" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 14h6M14 14v-4l3-3M14 14v4l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Native B2B Commerce",
    desc: "Company profiles, segment-specific pricing, net payment terms, and self-service wholesale portals built into the platform. B2B and DTC run from one admin with no separate tools needed.",
    roi: "Henchman's self-serve B2B portal cut their sales team's manual order workload by 40%.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="13" width="9" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="7" width="9" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 13V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M19 11h2M19 15h2M19 19h2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Shopify Functions",
    desc: "Write custom discount logic, cart rules, payment methods, and shipping rates at the platform level. Volume discounts, tiered pricing, and BOGO rules that no app can replicate.",
    roi: "A single custom Shopify Function typically replaces three to four expensive third-party discount apps.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M8 5L4 14l4 9M20 5l4 9-4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 18l6-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Shopify Markets",
    desc: "Sell in multiple countries, currencies, and languages from one storefront. Localized pricing, duty inclusion, domain routing, and language switching without separate stores.",
    roi: "Dryrobe expanded into Germany and added a second currency with zero additional store overhead.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 3c0 0-4 3-4 11s4 11 4 11M14 3c0 0 4 3 4 11s-4 11-4 11" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M3 14h22M5 9h18M5 19h18" stroke="currentColor" strokeWidth="1.1"/>
      </svg>
    ),
  },
  {
    name: "Enterprise API Access",
    desc: "10x higher API rate limits than standard Shopify. Large catalogs, real-time ERP syncs, high-volume orders, and multi-warehouse inventory run without rate limit failures.",
    roi: "Everlast syncs 150K+ SKUs with their ERP in real time without rate limit errors.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M4 20L10 14L14 18L20 10L24 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="4" cy="20" r="2" fill="currentColor"/>
        <circle cx="14" cy="18" r="2" fill="currentColor"/>
        <circle cx="24" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
  },
];


/* ── Case studies (Our Work — kept exactly as-is) ── */
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
    brand: "Henchman",
    metric: "+58%",
    metricLabel: "Online Revenue",
    tags: ["Shopify Plus", "B2B", "ERP Integration"],
    industry: "B2B & Wholesale",
    image: "/images/Case studies/Henchman.webp",
    video: "/images/Case%20studies/Henchman%20video.mp4",
    href: "/case-studies/henchman-shopify-plus-b2b",
    description: "Henchman exited Magento, built a Shopify Plus B2B store with self-service wholesale ordering and Brightpearl ERP integration, and grew online revenue 58% while cutting platform costs by 45%.",
  },
];

/* ── Breadcrumb schema ── */
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Shopify Plus Development", item: "https://ecommwizards.com/services/shopify-plus-development" },
  ],
};

/* ── FAQs ── */
const FAQS = [
  {
    q: "How much does Shopify Plus development cost?",
    a: "Cost depends on scope: what you need built, how many integrations are involved, and whether it is a full store build or targeted enhancements. A custom checkout extension or Flow automation build starts from £3,000. A full Shopify Plus store build or migration from Magento or WooCommerce starts from £15,000. We work on fixed-price quotes, not hourly rates. Send us your requirements and we will return a detailed estimate within 24 hours.",
  },
  {
    q: "How long does a Shopify Plus development project take?",
    a: "Targeted Plus work, such as a custom checkout extension or Flow automation build, takes 2 to 3 weeks. A full Shopify Plus store build takes 6 to 10 weeks. A migration from Magento, WooCommerce, or BigCommerce takes 8 to 14 weeks depending on catalog size, integration complexity, and B2B requirements. Every project starts with a fixed timeline you approve before we write a single line of code.",
  },
  {
    q: "Why hire a Shopify Plus development agency instead of a freelancer?",
    a: "A Shopify Plus project covers frontend development, React-based checkout extensions, API integrations, Shopify Flow automation, B2B configuration, and load testing. A freelancer typically covers one or two of those areas. When you hire a Shopify Plus development agency, you get all of them under one brief, one timeline, and one point of accountability. Our Shopify Plus developers have completed 200+ Plus projects. You are not our first.",
  },
  {
    q: "When should I upgrade to Shopify Plus?",
    a: "Shopify Plus makes sense when you are generating over $1M annually and hitting the limits of standard Shopify: a checkout you cannot customize, automations that require manual work, API rate limits causing sync failures, or B2B buyers you manage outside the platform. For most brands at that revenue level, the upgrade pays for itself through checkout conversion improvements and automation savings alone.",
  },
  {
    q: "Can you migrate from Magento to Shopify Plus with no downtime?",
    a: "Yes. We migrate brands from Magento, WooCommerce, BigCommerce, and standard Shopify to Shopify Plus with full data transfer, URL redirect mapping, SEO preservation, and integration rebuilds. Every migration has a rollback plan. The cutover is planned for a low-traffic window. The new store goes live with zero downtime and outperforms what you left behind from day one.",
  },
  {
    q: "What can you customize in Shopify Plus checkout?",
    a: "On Shopify Plus, the checkout is fully customizable through native Checkout Extensions. We build extensions that add upsells, cross-sells, gift messages, custom input fields, loyalty reward redemption, branded UI elements, and payment method logic directly inside the Shopify checkout. No third-party replacements, no redirects. Everything runs inside the native flow.",
  },
  {
    q: "Do you need Shopify Plus to run B2B commerce?",
    a: "Shopify Plus includes native B2B features that standard Shopify does not have: company profiles, customer-specific pricing by segment, net payment terms, draft orders, and self-service wholesale portals. You manage B2B and DTC from one admin without separate platforms or apps filling gaps. If your brand has trade buyers, wholesale accounts, or volume pricing requirements, Plus is the right platform.",
  },
  {
    q: "How do you protect SEO during a Shopify Plus migration?",
    a: "We carry over all metadata, canonical tags, URL structure, and redirect logic as part of every migration. For URL structure changes, we map every old URL to a new destination with 301 redirects before launch. We submit updated sitemaps immediately after go-live. The improved Core Web Vitals on the new Plus store typically push rankings up, not down, within 30 to 60 days.",
  },
  {
    q: "What does Shopify Plus cost per month?",
    a: "Shopify Plus costs $2,500 per month, or 0.25% of monthly revenue, whichever is higher, up to $20,000 per month on the variable-fee tier. This is the Shopify platform fee, separate from any development work. For most brands generating over $2M annually, Plus pays for itself through checkout conversion improvements, automation efficiency savings, and reduced third-party app costs.",
  },
  {
    q: "What is the difference between Shopify and Shopify Plus?",
    a: "Shopify Plus is the enterprise tier. It gives you full checkout customization through Checkout Extensions, Shopify Flow for complex automation, native B2B tools including company profiles and segment pricing, higher API rate limits, and access to Shopify Launchpad. Standard Shopify locks the checkout and limits automation. Plus removes those limits for brands that have outgrown the standard platform.",
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

export default function Page() {
  return (
    <>
      <Breadcrumbs current="/services/shopify-plus-development" />
      {/* ── 1. Hero ── */}
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Shopify Plus Development hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Certified Shopify Plus Partner Agency</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Shopify Plus Development
              </span>
              {" "}for Brands That Are Done Fighting Their Platform.
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              Most brands hit the wall between $2M and $5M: a checkout you cannot customize, automations that do not exist, API limits that cause sync failures, and B2B buyers you are managing manually. Shopify Plus is the platform built for what comes next. We are a certified Shopify Plus development agency. We build, migrate, and scale Plus stores for brands that need it done right the first time.
            </p>
            <div className="std-hero-stats">
              {[
                { number: "200+",   label: "Plus Stores Built" },
                { number: "$900M+", label: "Revenue Generated" },
                { number: "28.5%",  label: "Avg Conversion Lift" },
                { number: "4.9★",   label: "Client Rating" },
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

          <div className="std-hero-img">
            <Image
              src="/images/migration-shopify-right-image.webp"
              alt="Shopify Plus development: enterprise ecommerce store built for scale"
              width={700}
              height={500}
              priority
              className="block h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* ── 2. Trust Bar ── */}
      <section className="std-trust" style={{ background: C_WHITE }} aria-label="Brands that trust Ecomm Wizards">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: C_DARK, fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            The World&apos;s Fastest-Growing Brands Trust Ecomm Wizards
          </h2>
          <p className="text-center" style={{ color: C_TEXT, fontSize: 16, lineHeight: "26px", margin: "10px 0 0", textAlign: "center" }}>
            200+ Shopify Plus store development projects completed. $900M+ in client revenue generated. From DTC challengers to global enterprise brands.
          </p>

          <div className="std-trust-carousel" style={{ marginTop: 20, width: "100%", overflow: "hidden" }}>
            <div className="std-trust-track">
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

      {/* ── 3. Why Brands Choose Shopify Plus ── */}
      <section className="spd-feat" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Why brands choose Shopify Plus">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="spd-feat-heading">
            Why Brands Choose Shopify Plus
          </h2>
          <p className="spd-feat-desc">
            Standard Shopify locks you out of the features that drive growth past $2M. Here is what Shopify Plus opens up and what it actually delivers.
          </p>

          <div className="spd-feat-grid">
            {PLUS_FEATURES.map((feat) => (
              <div key={feat.name} className="spd-feat-card">
                <span className="spd-feat-icon" aria-hidden="true">{feat.icon}</span>
                <h3 className="spd-feat-name">{feat.name}</h3>
                <p className="spd-feat-desc-text">{feat.desc}</p>
                <div className="spd-feat-roi">
                  <span className="spd-feat-roi-label">Real result:</span> {feat.roi}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .spd-feat-heading { color: #000; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 auto 16px; max-width: 800px; }
          .spd-feat-desc { color: rgba(0,0,0,.75); font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 760px; }
          .spd-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .spd-feat-card { background: #fff; border-radius: 16px; padding: 28px; border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 12px; }
          .spd-feat-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          .spd-feat-name { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 700; color: #000; margin: 0; line-height: 1.3; }
          .spd-feat-desc-text { font-family: 'Poppins', sans-serif; font-size: 14px; color: #334155; line-height: 1.7; margin: 0; flex-grow: 1; }
          .spd-feat-roi { font-family: 'Poppins', sans-serif; font-size: 13px; color: #2A9555; line-height: 1.5; background: rgba(61,199,122,0.08); border-radius: 8px; padding: 10px 14px; border-left: 3px solid #3DC77A; margin-top: auto; }
          .spd-feat-roi-label { font-weight: 700; }
          @media (max-width: 1024px) { .spd-feat-heading { font-size: 32px !important; } .spd-feat-desc { font-size: 16px !important; margin-bottom: 24px !important; } .spd-feat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 768px) { .spd-feat-desc { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .spd-feat { padding: 40px 16px !important; } .spd-feat-heading { font-size: 26px !important; } .spd-feat-desc { font-size: 15px !important; } .spd-feat-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── 4. Services Accordion ── */}
      <section className="std-solutions" style={{ background: C_WHITE }} aria-label="Shopify Plus development services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>Shopify Plus Development Services</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              Shopify Plus Development Services We Offer
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              From custom Shopify Plus development and <Link href="/services/migration" style={{ color: "#1F7A45", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>zero-downtime migrations</Link> to checkout extensions, <Link href="/services/shopify-b2b-store-setup" style={{ color: "#1F7A45", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>B2B portals</Link>, Shopify Plus web development, and enterprise integrations, we cover every Shopify Plus development service your store needs at scale.
            </p>
            <Link href="/book-shopify-consultation" className="std-cta-sol mt-8">
              Book a Free Strategy Call
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <SplusAccordion />
        </div>
      </section>

      {/* ── 5. Proven Results ── */}
      <section
        className="spd-results-section"
        style={{ background: C_CREAM, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "40px 20px" }}
      >
        <div className="spd-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="spd-results-heading">Shopify Plus Results Our Clients Actually Got</h2>
          <p className="spd-results-desc">
            Not projections. Not benchmarks. Results from real Shopify Plus projects across B2C, B2B, and subscription brands that needed the platform to work at scale.
          </p>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .spd-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:1100px; }
          .spd-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          @media (max-width:1023px) { .spd-results-section { padding:44px 20px !important; } .spd-results-heading { font-size:30px !important;line-height:40px !important;margin-bottom:18px !important; } .spd-results-desc { font-size:16px !important;line-height:26px !important;margin-bottom:32px !important; } }
          @media (min-width:768px) and (max-width:1023px) { .spd-results-section { padding:30px 20px !important; } .spd-results-desc { margin-bottom:18px !important; } }
          @media (max-width:640px) { .spd-results-section { padding:20px 16px !important; } .spd-results-heading { font-size:26px !important;line-height:34px !important; } .spd-results-desc { font-size:15px !important;line-height:24px !important; } }
        ` }} />
      </section>

      {/* ── 6. Why Ecomm Wizards ── */}
      <section
        className="std-why spd-why-section"
        style={{ background: C_DARK, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Why brands choose Ecomm Wizards for Shopify Plus development"
      >
        <div className="spd-why-inner mx-auto" style={{ maxWidth: "1320px" }}>

          <h2 className="spd-why-heading">
            Why Brands Choose Ecomm Wizards as{" "}<br className="std-why-br-lg" />Their{" "}<br className="std-why-br-md" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shopify Plus Development Agency
            </span>
          </h2>

          <p className="spd-why-desc">
            We have built 200+ Shopify Plus stores and helped clients generate over $900M in revenue. Here is what makes us<br className="std-why-desc-br" /> the right Plus development agency for brands that cannot afford to get this wrong:
          </p>

          <div className="spd-why-grid">
            {[
              {
                title: "Certified Shopify Plus Partner",
                desc: (<>Accredited Shopify Plus partner with direct access to Plus support and early feature access. You get a team that knows the platform from the inside, not an agency learning on your project.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></svg>),
              },
              {
                title: "Checkout-First Methodology",
                desc: (<>Your Shopify Plus checkout is your highest-converting page. We define the checkout experience first, then build backwards. Clients see an average <span className="spd-why-hl">18% lift in AOV</span> from checkout work alone. That 18% lift assumes a human at checkout: with <Link href="/services/shopify-agentic-commerce" style={{ color: "#61ce70", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>agentic commerce</Link>, AI assistants like ChatGPT now find, compare, and buy for your customers too.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="24" height="20" rx="3" /><path d="M4 12h24" /><path d="M9 18h4M9 22h6" /><rect x="18" y="16" width="6" height="6" rx="1" /></svg>),
              },
              {
                title: "B2B Commerce Built Right",
                desc: (<>We set up Shopify Plus B2B properly: company accounts, segment pricing, payment terms, and wholesale portals. Your trade buyers self-serve. <span className="spd-why-hl">B2B and DTC run on one platform.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="14" width="10" height="14" rx="2" /><rect x="18" y="8" width="10" height="20" rx="2" /><path d="M7 14V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6" /></svg>),
              },
              {
                title: "Enterprise Integration Depth",
                desc: (<>We <Link href="/services/erp-connections-to-shopify" style={{ color: "#61ce70", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>connect Shopify Plus to NetSuite, SAP</Link>, HubSpot, Salesforce, and custom 3PL systems. Real API integrations that <span className="spd-why-hl">sync reliably at scale</span>, not off-the-shelf connectors that break under volume.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="3" /><circle cx="25" cy="7" r="3" /><circle cx="7" cy="25" r="3" /><circle cx="25" cy="25" r="3" /><circle cx="16" cy="16" r="3" /><path d="M10 7h12M7 10v12M25 10v12M10 25h12M10 10l6 6M22 10l-6 6M10 22l6-6M22 22l-6-6" /></svg>),
              },
              {
                title: "90-Day Post-Launch Window",
                desc: (<>Every project includes a 90-day post-launch window. We monitor your Plus store, fix anything that surfaces, and keep building as live traffic grows. <span className="spd-why-hl">You are not on your own after go-live.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="24" height="22" rx="3" /><line x1="4" y1="13" x2="28" y2="13" /><line x1="11" y1="3" x2="11" y2="9" /><line x1="21" y1="3" x2="21" y2="9" /><line x1="9" y1="19" x2="14" y2="19" /><line x1="9" y1="23" x2="20" y2="23" /></svg>),
              },
              {
                title: "Proven at Enterprise Scale",
                desc: (<>$900M+ in client revenue. Everlast, BARK, Dryrobe, Wild, and more. Real enterprise brands on Shopify Plus with <span className="spd-why-hl">results you can read</span> in their case studies, not claims you take on faith.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="27" x2="5" y2="22" /><line x1="11" y1="27" x2="11" y2="18" /><line x1="17" y1="27" x2="17" y2="14" /><line x1="23" y1="27" x2="23" y2="9" /><polyline points="5,20 11,15 17,10 23,5" /><polyline points="19,5 23,5 23,9" /></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="spd-why-card">
                <span className="spd-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="spd-why-card-title">{card.title}</h3>
                <p className="spd-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="spd-why-closing">
            Every Shopify Plus project passes full QA before a single customer sees it. Built to Plus standards, scoped for your growth, and supported after go-live.
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
          .spd-why-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .std-why-br-lg { display: inline; } .std-why-br-md { display: none; } .std-why-desc-br { display: none; }
          .spd-why-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .spd-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .spd-why-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; font-family: 'Poppins', sans-serif; font-size: 16px; transition: border-color 0.25s ease, transform 0.25s ease; }
          .spd-why-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .spd-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .spd-why-icon svg { stroke: url(#spdWhyGradient); color: #C8F57A; }
          .spd-why-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .spd-why-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .spd-why-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .spd-why-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1202px; }
          @media (max-width: 1024px) { .std-why.spd-why-section { padding: 53px 20px !important; } .spd-why-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .std-why-br-lg { display: none !important; } .std-why-br-md { display: inline !important; } .std-why-desc-br { display: inline !important; }.spd-why-desc { font-size: 16px !important; line-height: 26px !important; margin-bottom: 16px !important; max-width: 100% !important; text-align: center !important; } .spd-why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .spd-why-card { padding: 24px !important; } .spd-why-icon { margin-bottom: 6px !important; } .spd-why-card-title { font-size: 19px !important; line-height: 26px !important; } .spd-why-card-desc { font-size: 14px !important; line-height: 22px !important; } .spd-why-closing { font-size: 16px !important; line-height: 26px !important; margin-bottom: 24px !important; } }
          @media (max-width: 768px) { .spd-why-grid { margin-bottom: 16px !important; } .spd-why-closing { margin-bottom: 16px !important; } .std-why-desc-br { display: none !important; } }
          @media (max-width: 640px) { .std-why.spd-why-section { padding: 20px 18px !important; } .spd-why-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .spd-why-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .spd-why-desc { font-size: 15px !important; line-height: 24px !important; margin-bottom: 10px !important; } .std-why-br-md { display: none !important; } .spd-why-card { padding: 22px 20px !important; } .spd-why-icon { width: 48px; height: 48px; margin-bottom: 10px !important; } .spd-why-card-title { margin-bottom: 10px !important; } .spd-why-closing { margin-bottom: 10px !important; } }
        ` }} />

        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="spdWhyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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

      {/* ── 6. Process ── */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label="Our Shopify Plus development process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: C_CREAM, borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            How Our Shopify Plus Developers Handle Your Project
          </h2>

          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            A structured process from discovery to launch and beyond.
            <br className="hidden sm:block lg:hidden" />{" "}
            You know exactly what is happening at every stage.
          </p>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {[
              { step: "01.", title: "Discovery & Technical Audit", desc: "We audit your platform, integrations, and catalog. We define what Shopify Plus handles natively and what needs custom development." },
              { step: "02.", title: "Architecture & Scoping", desc: "We map your checkout flows, B2B structure, and integrations. You get a fixed timeline and fixed price before we write a line of code." },
              { step: "03.", title: "Shopify Plus Development", desc: "We build checkout extensions, Flow automations, Functions, and API integrations to Shopify Plus standards. Clean code built to scale." },
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
              { step: "04.", title: "QA & Load Testing", desc: "We test every feature across browsers, devices, and traffic loads. Checkout flows, B2B logic, and integrations are all validated before launch." },
              { step: "05.", title: "Launch & Scale Support", desc: "We go live with zero downtime, then monitor, maintain, and keep building on your Plus store as you grow." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]" style={{ background: "#FFFFFF", borderRadius: "16px", boxSizing: "border-box" }}>
                <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{step}</p>
                <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Day you sign block */}
          <div
            className="mt-[20px]"
            style={{ background: "#FFFFFF", borderRadius: "16px", padding: "24px 30px", border: "1px solid rgba(61,199,122,0.3)", boxSizing: "border-box" }}
          >
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, color: "#000", margin: "0 0 14px" }}>
              What happens the day you sign
            </p>
            <div className="spd-sign-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px 32px" }}>
              {[
                "Direct access to your project manager and lead developer.",
                "Kick-off questionnaire sent within 2 hours of signing.",
                "Discovery call booked within 24 hours of signing.",
                "Active development kicks off within 5 business days.",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "rgba(0,0,0,0.75)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. Our Work ── */}
      <section style={{ background: C_CREAM, padding: "40px 20px" }} aria-label="Our work: Shopify Plus case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Our Work
          </h2>

          <div className="spd-cs-grid">
            {CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`spd-cs-card${i === 3 ? " spd-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_WHITE, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} alt={`${cs.brand} Shopify Plus development case study`} fill className="spd-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
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
          .spd-cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .spd-cs-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
          .spd-cs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .spd-cs-card-img { transition: transform 0.4s ease; }
          .spd-cs-card:hover .spd-cs-card-img { transform: scale(1.03); }
          .spd-cs-card-4th { display: none !important; }
          @media (max-width: 768px) { .spd-cs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .spd-cs-card-4th { display: flex !important; } }
          @media (max-width: 540px) { .spd-cs-grid { grid-template-columns: 1fr; } .spd-cs-card-4th { display: none !important; } }
        ` }} />
      </section>

      {/* ── 12. FAQ ── */}
      <section
        className="spd-faq"
        style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }}
        aria-label="Frequently asked questions about Shopify Plus development"
      >
        <div className="spd-faq__inner mx-auto" style={{ maxWidth: "1100px" }}>
          <h2 className="spd-faq__title">Frequently Asked Questions</h2>

          <SplusFaqAccordion faqs={FAQS} />
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
        <ServiceSchema url={CANONICAL_URL} name="Shopify Plus Development Agency" serviceType="Shopify Plus development" description={META_DESCRIPTION} />

        <style dangerouslySetInnerHTML={{ __html: `
          .spd-faq__inner { padding: 40px 15px; }
          .spd-faq__title { color: #000000; font-family: 'Poppins', sans-serif; font-size: 32px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 0 32px; }
          .spd-faq__list { list-style: none; margin: 0; padding: 0; border-top: 1px solid #E5E7EB; }
          .spd-faq__item { border-bottom: 1px solid #E5E7EB; }
          .spd-faq__q { color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; line-height: 1.4; flex: 1; }
          .spd-faq__chev { display: inline-flex; align-items: center; justify-content: center; color: #000000; flex-shrink: 0; }
          .spd-faq__a-text { margin: 0 0 22px; color: #334155; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 1.7; }
          @media (min-width: 1024px) { .spd-faq__inner { padding: 72px 20px; } .spd-faq__title { font-size: 44px; margin-bottom: 40px; } .spd-faq__q { font-size: 17px; } .spd-faq__a-text { font-size: 16px; } }
        ` }} />
      </section>

      {/* ── Page CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
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

        .std-trust-track { display: flex; align-items: center; gap: 80px; width: max-content; animation: spdTrustScroll 32s linear infinite; }
        .std-trust-carousel:hover .std-trust-track { animation-play-state: paused; }
        .std-trust-slide { flex: 0 0 auto; display: flex; align-items: center; height: 80px; }
        .std-trust-logo { height: 56px; width: auto; max-width: 180px; object-fit: contain; opacity: .7; filter: grayscale(1); transition: opacity .25s ease, filter .25s ease; }
        .std-trust-slide:hover .std-trust-logo { opacity: 1; filter: grayscale(0); }
        @keyframes spdTrustScroll { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }

        .std-acc-item { border-top: 1px solid rgba(17,17,17,.14); }
        .std-acc-item:last-child { border-bottom: 1px solid rgba(17,17,17,.14); }
        .std-acc-icon { flex: 0 0 18px; color: #000000; transition: transform .3s ease; }
        .std-acc-icon--open { transform: rotate(180deg); }

        @media (max-width: 1024px) {
          .spd-sign-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .std-hero-h1 { font-size: 40px !important; }
          .std-solutions h2 { font-size: 38px !important; }
          .std-solutions-grid { grid-template-columns: 1fr 1.1fr !important; gap: 40px !important; }
          .std-hero-inner { padding: 60px 20px !important; }
          .std-hero-p { margin-top: 16px !important; }
          .std-hero-stats { flex-wrap: nowrap !important; margin-top: 16px !important; padding-top: 16px !important; }
          .std-trust > div { padding: 40px 20px !important; }
          .std-hero-stat-item { padding-right: 16px !important; margin-right: 16px !important; }
          .std-hero-stat-num { font-size: 22px !important; }
          .std-hero-stat-label { font-size: 12px !important; }
        }

        @media (max-width: 768px) {
          .std-solutions h2 { font-size: 36px !important; }
          .std-solutions-grid { gap: 24px !important; }
        }

        @media (max-width: 640px) {
          .spd-sign-grid { grid-template-columns: 1fr !important; }
          .std-hero > div { padding: 56px 18px !important; }
          .std-trust > div { padding: 32px 18px 38px !important; }
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

          .std-trust-h2 { font-size: 22px !important; }
          .std-trust-track { gap: 48px !important; }
          .std-trust-slide { height: 60px !important; }
          .std-trust-logo { height: 44px !important; max-width: 140px !important; }

          .std-solutions h2 { font-size: 26px !important; line-height: 1.28 !important; }
        }
      `}} />

      <RelatedServices current="/services/shopify-plus-development" />
    </>
  );
}
