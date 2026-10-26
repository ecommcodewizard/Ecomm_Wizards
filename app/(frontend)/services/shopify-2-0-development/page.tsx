import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import Image from "next/image";
import Link from "next/link";
import S20Accordion from "./S20Accordion";
import S20FaqAccordion from "./S20FaqAccordion";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import ServiceSchema from "@/components/seo/ServiceSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RelatedServices from "@/components/sections/RelatedServices";

const META_DESCRIPTION =
  "Shopify 2.0 development agency with 150+ Online Store 2.0 builds. Custom themes, 1.0 to 2.0 migrations, and native App Block integrations.";
const CANONICAL_URL = "https://ecommwizards.com/services/shopify-2-0-development";

export const metadata: Metadata = {
  title: { absolute: "Shopify 2.0 Development | Online Store 2.0 Experts" },
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "Shopify 2.0 Development | Online Store 2.0 Experts",
    description: META_DESCRIPTION,
    images: [{ url: ogImage("Shopify 2.0 Development"), width: 1200, height: 630, alt: "Shopify 2.0 Development — Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify 2.0 Development | Online Store 2.0 Experts",
    description: META_DESCRIPTION,
    images: [ogImage("Shopify 2.0 Development")],
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
    headline: (<>A high-performance <strong>Shopify 2.0</strong> store developed and scaled for <strong>BARK</strong></>),
    quote: (<>&ldquo;Their immense knowledge of Shopify and exceptional communication skills, accompanied by a <strong>can-do attitude</strong>, made Ecomm Wizards a fantastic partner.&rdquo;</>),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
  {
    key: "everlast",
    image: "/images/Case%20studies/Everlast-banner.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A <strong>Shopify 2.0</strong> rebuild that delivered <strong>+152% conversion rate</strong> for <strong>Everlast</strong></>),
    quote: (<>&ldquo;We needed a store that could handle serious athletes, casual fitness buyers, and trade accounts in one place. Ecomm Wizards built exactly that. The <strong>conversion numbers and trade portal revenue</strong> both exceeded what we projected.&rdquo;</>),
    avatar: "/images/Case%20studies/Daniel%20Summerson.jpg",
    name: "Daniel Summerson",
    role: "Managing Director, Everlast Gyms",
  },
];

/* ── Hero phone slider columns ── */
const PHONE_COL1 = [
  "/images/partner-images-1-1.webp",
  "/images/partner-images-1-2.webp",
  "/images/partner-images-1-3.webp",
  "/images/partner-images-1-4.webp",
];
const PHONE_COL2 = [
  "/images/partner-images-2-1.webp",
  "/images/partner-images-2-3.webp",
];
const PHONE_COL3 = [
  "/images/partner-images-3-1.webp",
  "/images/partner-images-3-2.webp",
];

/* ── Trust logos ── */
const TRUST_LOGOS = [
  { src: "/images/Case%20studies/logos/111skin%20logo.png",     alt: "111SKIN" },
  { src: "/images/Case%20studies/logos/Candy%20Kittens.webp",   alt: "Candy Kittens" },
  { src: "/images/Case%20studies/logos/NEOM%20Wellbeing.png",   alt: "NEOM Wellbeing" },
  { src: "/images/Case%20studies/logos/Ronaldo%20Jewelry.avif", alt: "Ronaldo Jewelry" },
  { src: "/images/Case%20studies/logos/Wild.svg",               alt: "Wild" },
  { src: "/images/Case%20studies/logos/Everlast.png",                           alt: "Everlast" },
  { src: "/images/Case%20studies/logos/Saddleback.svg",         alt: "Saddleback" },
  { src: "/images/Case%20studies/logos/Twillory.png",           alt: "Twillory" },
];

/* ── Shopify 2.0 Features ── */
const S20_FEATURES = [
  {
    name: "Sections on Every Page",
    desc: "Not just the homepage. Product, collection, blog, and custom pages all get drag-and-drop sections. Your team builds and updates page layouts without touching code.",
    roi: "Marketing teams cut campaign page setup time by 60% once sections work on every page.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="2" y="3" width="24" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 10h24" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M2 17h24" stroke="currentColor" strokeWidth="1.1" strokeDasharray="3 2"/>
        <path d="M14 10v12" stroke="currentColor" strokeWidth="1.1" strokeDasharray="3 2"/>
      </svg>
    ),
  },
  {
    name: "Metafields & Metaobjects",
    desc: "Store custom content at the product, collection, and page level. Size guides, badges, specs, and ingredients, structured in Shopify, surfaced anywhere, without theme hacks.",
    roi: "Clients eliminate an average of 3 third-party apps once metafields replace manual content workarounds.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="4" y="4" width="20" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="4" y="12" width="20" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="4" y="20" width="20" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 6.5h3M8 14.5h3M8 22.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "App Blocks, No Script Injections",
    desc: "Apps install cleanly as native App Blocks through the theme editor. No injected scripts, no broken layouts, no conflicts when themes or apps update.",
    roi: "Clean App Block installs reduce store load time by up to 40% vs legacy script injection methods.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="15" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Team-Controlled Page Layouts",
    desc: "Your marketing team updates content, swaps sections, and launches landing pages from the editor without calling a developer. That is the point of 2.0.",
    roi: "Teams go from needing developer support for every page change to launching campaigns in under an hour.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 25c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 14l2 2-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Cleaner Code, Faster Pages",
    desc: "2.0 themes run on JSON templates and structured Liquid sections. Less code, better architecture, faster rendering. The performance gap vs 1.0 is measurable from day one.",
    roi: "Clients see an average 34% improvement in Core Web Vitals scores after rebuilding on 2.0 architecture.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 14l-2-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M14 14l4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "JSON Templates",
    desc: "Every page type gets its own flexible, editor-driven template. Different product pages for different collections. Targeted landing pages. All managed from the Shopify editor.",
    roi: "Brands using JSON templates launch new page variants 5x faster than on fixed 1.0 theme templates.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M6 3h10l6 6v16H6V3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M16 3v6h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 15l-2 2 2 2M19 15l2 2-2 2M13 20l2-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

/* ── Case studies ── */
const CASE_STUDIES = [
  {
    brand: "Everlast",
    metric: "+152%",
    metricLabel: "Conversion Rate",
    tags: ["Shopify 2.0", "CRO", "Theme Redesign"],
    industry: "Sports & Fitness",
    image: "/images/Case studies/Everlast-banner.webp",
    video: "/images/Case%20studies/Everlast%20video.mp4",
    href: "/case-studies/everlast-shopify-plus-sports-redesign",
    description: "A Shopify 2.0 rebuild for Everlast: dual B2C and trade checkout architecture, product comparison tooling, and 152% conversion rate lift for the world's most iconic boxing brand.",
  },
  {
    brand: "Dryrobe",
    metric: "+89%",
    metricLabel: "Online Revenue",
    tags: ["Shopify 2.0", "Theme Development", "UX Design"],
    industry: "Fashion & Apparel",
    image: "/images/Case studies/Dryrobe hero section.webp",
    video: "/images/Case%20studies/dryrobe%20video%20test.mp4",
    href: "/case-studies/dryrobe-shopify-plus-redesign",
    description: "Three fragmented Shopify stores unified into one international Shopify 2.0 architecture, with a custom Size Finder that cut returns by 31% and grew online revenue 89%.",
  },
  {
    brand: "Wild",
    metric: "80K+",
    metricLabel: "Monthly Subscribers",
    tags: ["Shopify 2.0", "Subscriptions"],
    industry: "Cosmetics & Beauty",
    image: "/images/Case studies/WeareWild.webp",
    video: "/images/Case%20studies/WeareWild%20video.mp4",
    href: "/case-studies/wild-shopify-plus-subscriptions",
    description: "A subscription-first Shopify 2.0 store built from zero for Wild, scaling to 80,000+ active monthly subscribers within twelve months and expanding into Germany.",
  },
  {
    brand: "Henchman",
    metric: "+58%",
    metricLabel: "Online Revenue",
    tags: ["Shopify 2.0", "B2B", "ERP Integration"],
    industry: "B2B & Wholesale",
    image: "/images/Case studies/Henchman.webp",
    video: "/images/Case%20studies/Henchman%20video.mp4",
    href: "/case-studies/henchman-shopify-plus-b2b",
    description: "Henchman rebuilt on Shopify 2.0 with a self-service B2B wholesale portal and Brightpearl ERP integration, growing online revenue 58% while cutting platform costs by 45%.",
  },
];

/* ── Breadcrumb schema ── */
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Shopify 2.0 Development", item: "https://ecommwizards.com/services/shopify-2-0-development" },
  ],
};

/* ── FAQs ── */
const FAQS = [
  {
    q: "What is Shopify Online Store 2.0?",
    a: "Shopify Online Store 2.0 is Shopify's current theme framework, introduced in 2021. It brought sections on every page type, JSON templates, native App Blocks for cleaner integrations, and a structured metafields system. Stores built on 2.0 are faster, easier for marketing teams to manage, and built on architecture that Shopify actively develops and supports.",
  },
  {
    q: "Do I need to redesign my store to upgrade to Shopify 2.0?",
    a: "No. Many stores migrate from 1.0 to 2.0 keeping their existing design intact. We rebuild the theme architecture in the background, converting templates to JSON, setting up sections and blocks, and reconnecting apps. Your store looks the same to customers throughout the process. A redesign is optional, not required.",
  },
  {
    q: "Will upgrading to Shopify 2.0 affect my live store?",
    a: "No. All Shopify 2.0 development happens in a separate theme environment. Your live store runs normally throughout the entire process. We only publish the new theme once everything is tested, approved, and ready.",
  },
  {
    q: "How long does a Shopify 1.0 to 2.0 migration take?",
    a: "Most migrations take 2 to 4 weeks depending on theme complexity, number of templates, custom features, and app stack. A straightforward upgrade on a standard theme takes less time than a complex build with multiple custom page types and integrations. We give you a fixed timeline before we start.",
  },
  {
    q: "Will my existing apps still work after moving to Shopify 2.0?",
    a: "Most modern apps support Shopify 2.0 and can be reinstalled as native App Blocks. For apps that do not support App Blocks yet, we test compatibility and either find a 2.0-compatible alternative or ensure they install without legacy script conflicts that slow your store down.",
  },
  {
    q: "Does Shopify 2.0 improve store speed and SEO?",
    a: "Yes. Shopify 2.0 themes run on a cleaner codebase with lighter templates and more efficient rendering. Fewer script injections, better-structured assets, and App Blocks instead of injected code all contribute to faster load times and better Core Web Vitals, which directly supports search rankings.",
  },
  {
    q: "How much does Shopify 2.0 development cost?",
    a: "Cost depends on scope. A targeted Shopify 1.0 to 2.0 migration starts from £3,000. A full Shopify 2.0 store build with custom sections, metafield architecture, and App Block integrations starts from £8,000. We work on fixed-price quotes. Send us your requirements and we return a detailed estimate within 24 hours.",
  },
  {
    q: "What is the difference between Shopify 2.0 and Shopify Plus?",
    a: "Shopify 2.0 refers to the theme framework, the architecture your storefront is built on. Shopify Plus is a subscription tier that enables enterprise features like checkout customisation, Shopify Flow, B2B commerce, and higher API limits. You can run a Shopify 2.0 theme on any Shopify plan, including standard Shopify and Shopify Plus.",
  },
  {
    q: "Is Shopify 2.0 better than Shopify 1.0?",
    a: "Yes, in every meaningful way. Shopify 2.0 gives you sections on every page type, not just the homepage. JSON templates make page structures faster and more flexible. Metafields give direct control over product and page content without custom code. App Blocks replace legacy script injections that slowed 1.0 stores down. Shopify no longer develops or supports 1.0 architecture.",
  },
  {
    q: "What does Shopify 2.0 theme development involve?",
    a: "Shopify 2.0 theme development means building your storefront on Shopify's current Online Store 2.0 framework: JSON templates on every page type, drag-and-drop sections your marketing team controls, structured metafields for product content, and native App Blocks instead of legacy script injections. We handle new builds from scratch and migration rebuilds for stores moving off 1.0 themes.",
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
      <Breadcrumbs current="/services/shopify-2-0-development" />
      {/* ── 1. Hero ── */}
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Shopify 2.0 Development hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Certified Shopify 2.0 Development Agency</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Shopify 2.0 Development
              </span>
              {" "}for Stores Ready to Upgrade
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              Most stores are still running on Shopify 1.0 themes: no sections outside the homepage, no structured metafields, apps injecting scripts that slow everything down, and a marketing team that needs a developer for every page change. Shopify Online Store 2.0 fixes all of it. We are a certified Shopify 2.0 development agency. We handle custom Shopify 2.0 theme development, full Online Store 2.0 builds, and 1.0 to 2.0 migrations for brands that need the right foundation.
            </p>
            <div className="std-hero-stats">
              {[
                { number: "150+",   label: "Stores Built" },
                { number: "$400M+", label: "Revenue Generated" },
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

          {/* Phone slider */}
          <div className="s20-phones-wrap" aria-hidden="true">
            <div className="s20-phones">
              {/* Column 1 — 4 images, scrolls up */}
              <div className="s20-phones-col s20-phones-col--up1">
                {[...PHONE_COL1, ...PHONE_COL1].map((src, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <div key={i} className="s20-phone-frame">
                    <img src={src} alt="" width={130} height={274} loading={i < PHONE_COL1.length ? "eager" : "lazy"} />
                  </div>
                ))}
              </div>
              {/* Column 2 — 2 images, scrolls down */}
              <div className="s20-phones-col s20-phones-col--down">
                {[...PHONE_COL2, ...PHONE_COL2].map((src, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <div key={i} className="s20-phone-frame">
                    <img src={src} alt="" width={130} height={274} loading={i < PHONE_COL2.length ? "eager" : "lazy"} />
                  </div>
                ))}
              </div>
              {/* Column 3 — 2 images, scrolls up */}
              <div className="s20-phones-col s20-phones-col--up2">
                {[...PHONE_COL3, ...PHONE_COL3].map((src, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <div key={i} className="s20-phone-frame">
                    <img src={src} alt="" width={130} height={274} loading={i < PHONE_COL3.length ? "eager" : "lazy"} />
                  </div>
                ))}
              </div>
            </div>
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
            150+ Shopify 2.0 development projects completed. $400M+ in client revenue generated. From DTC challengers to global enterprise brands.
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

      {/* ── 3. What Shopify 2.0 Gives You ── */}
      <section className="s20-feat" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="What Shopify Online Store 2.0 gives you">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="s20-feat-heading">
            What Shopify Online Store 2.0 Actually Gives You
          </h2>
          <p className="s20-feat-desc">
            Most stores are still on 1.0 themes. Here is what the upgrade to Shopify Online Store 2.0 opens up and what it actually delivers.
          </p>

          <div className="s20-feat-grid">
            {S20_FEATURES.map((feat) => (
              <div key={feat.name} className="s20-feat-card">
                <span className="s20-feat-icon" aria-hidden="true">{feat.icon}</span>
                <h3 className="s20-feat-name">{feat.name}</h3>
                <p className="s20-feat-desc-text">{feat.desc}</p>
                <div className="s20-feat-roi">
                  <span className="s20-feat-roi-label">Real result:</span> {feat.roi}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .s20-feat-heading { color: #000; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 auto 16px; white-space: nowrap; }
          .s20-feat-desc { color: rgba(0,0,0,.75); font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; }
          .s20-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .s20-feat-card { background: #fff; border-radius: 16px; padding: 28px; border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 12px; }
          .s20-feat-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          .s20-feat-name { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 700; color: #000; margin: 0; line-height: 1.3; }
          .s20-feat-desc-text { font-family: 'Poppins', sans-serif; font-size: 14px; color: #334155; line-height: 1.7; margin: 0; flex-grow: 1; }
          .s20-feat-roi { font-family: 'Poppins', sans-serif; font-size: 13px; color: #2A9555; line-height: 1.5; background: rgba(61,199,122,0.08); border-radius: 8px; padding: 10px 14px; border-left: 3px solid #3DC77A; margin-top: auto; }
          .s20-feat-roi-label { font-weight: 700; }
          @media (max-width: 1024px) { .s20-feat-heading { font-size: 32px !important; white-space: normal !important; max-width: 600px !important; } .s20-feat-desc { font-size: 16px !important; margin-bottom: 24px !important; max-width: 560px !important; } .s20-feat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 768px) { .s20-feat-heading { font-size: 28px !important; } .s20-feat-desc { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .s20-feat { padding: 40px 16px !important; } .s20-feat-heading { font-size: 26px !important; } .s20-feat-desc { font-size: 15px !important; } .s20-feat-grid { grid-template-columns: 1fr !important; } .s20-feat-card { padding: 18px !important; } }
        ` }} />
      </section>

      {/* ── 4. Services Accordion ── */}
      <section className="std-solutions" style={{ background: C_WHITE }} aria-label="Shopify 2.0 development services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>Shopify 2.0 Development Services</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              Shopify 2.0 Development Services We Offer
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              From custom Shopify 2.0 theme development and 1.0 to 2.0 migrations to App Block integrations and structured metafields, we cover every Shopify 2.0 development service your store needs.
            </p>
            <Link href="/book-shopify-consultation" className="std-cta-sol mt-8">
              Book a Free Strategy Call
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <S20Accordion />
        </div>
      </section>

      {/* ── 5. Proven Results ── */}
      <section
        className="s20-results-section"
        style={{ background: C_CREAM, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "40px 20px" }}
      >
        <div className="s20-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="s20-results-heading">Shopify 2.0 Results Our Clients Actually Got</h2>
          <p className="s20-results-desc">
            Not benchmarks. Results from real Shopify 2.0 projects that improved performance, team control, and revenue for brands that needed the right foundation.
          </p>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .s20-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:1100px; }
          .s20-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          @media (max-width:1023px) { .s20-results-section { padding:44px 20px !important; } .s20-results-heading { font-size:30px !important;line-height:40px !important;margin-bottom:18px !important; } .s20-results-desc { font-size:16px !important;line-height:26px !important;margin-bottom:32px !important; } }
          @media (min-width:768px) and (max-width:1023px) { .s20-results-section { padding:30px 20px !important; } .s20-results-desc { margin-bottom:18px !important; } }
          @media (max-width:640px) { .s20-results-section { padding:20px 16px !important; } .s20-results-heading { font-size:26px !important;line-height:34px !important; } .s20-results-desc { font-size:15px !important;line-height:24px !important; } }
        ` }} />
      </section>

      {/* ── 6. Why Ecomm Wizards ── */}
      <section
        className="std-why s20-why-section"
        style={{ background: C_DARK, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Why brands choose Ecomm Wizards for Shopify 2.0 development"
      >
        <div className="s20-why-inner mx-auto" style={{ maxWidth: "1320px" }}>

          <h2 className="s20-why-heading">
            Why Brands Choose Ecomm Wizards as{" "}<br className="std-why-br-lg" />Their{" "}<br className="std-why-br-md" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shopify 2.0 Development Agency
            </span>
          </h2>

          <p className="s20-why-desc">
            We have built 150+ Shopify stores and helped clients generate over $400M in revenue. Here is what makes us<br className="std-why-desc-br" /> the right Shopify 2.0 development agency for brands that need the upgrade done right:
          </p>

          <div className="s20-why-grid">
            {[
              {
                title: "Certified Shopify Partner",
                desc: (<>Accredited Shopify Partner with direct platform access and early feature visibility. You work with a team that knows Shopify 2.0 from the inside, not one learning it on your project.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></svg>),
              },
              {
                title: "2.0-First Build Approach",
                desc: (<>Every project uses native Shopify 2.0 architecture from the first line of code. No retrofitting old themes, no half-migrated sections, and <span className="s20-why-hl">no technical debt built in from day one.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="24" height="16" rx="2"/><path d="M4 13h24M10 8v16M22 8v16"/></svg>),
              },
              {
                title: "Team Enablement as Standard",
                desc: (<>Every 2.0 project ends with a store your marketing team controls. Sections, blocks, and metafields configured so your team <span className="s20-why-hl">launches pages without calling a developer.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="4"/><circle cx="22" cy="10" r="4"/><path d="M4 28c0-4.418 3.582-8 8-8M14 22c1.293-.634 2.754-1 4.28-1C22.538 21 26 24.582 26 29"/></svg>),
              },
              {
                title: "Zero Live Store Impact",
                desc: (<>All development happens in a separate theme environment. Your live store runs without interruption until the new 2.0 theme is tested and ready. <span className="s20-why-hl">Your customers never see a half-built store.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4l10 4v8c0 6-4 10-10 12C10 26 6 22 6 16V8z"/><polyline points="11,16 14.5,20 21,12"/></svg>),
              },
              {
                title: "App Bloat Audit Included",
                desc: (<>Every project includes an <Link href="/services/shopify-app-setup-and-app-optimization" style={{ color: "#61ce70", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>audit of your current app stack</Link>. Legacy script injections are replaced with native App Blocks wherever possible. <span className="s20-why-hl">Fewer apps, cleaner code, faster store.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="13" r="8"/><path d="M19 19l7 7"/><path d="M10 13h6M13 10v6"/></svg>),
              },
              {
                title: "90-Day Post-Launch Window",
                desc: (<>Every project includes a <Link href="/services/shopify-maintenance-and-support" style={{ color: "#61ce70", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>90-day post-launch window</Link>. We monitor your store, fix anything that surfaces, and keep building as live traffic grows. <span className="s20-why-hl">You are not on your own after go-live.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="24" height="22" rx="3" /><line x1="4" y1="13" x2="28" y2="13" /><line x1="11" y1="3" x2="11" y2="9" /><line x1="21" y1="3" x2="21" y2="9" /><line x1="9" y1="19" x2="14" y2="19" /><line x1="9" y1="23" x2="20" y2="23" /></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="s20-why-card">
                <span className="s20-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="s20-why-card-title">{card.title}</h3>
                <p className="s20-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="s20-why-closing">
            Every Shopify 2.0 project passes full QA before a single customer sees it. Built to 2.0 standards, scoped for your team, and supported after go-live.
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
          .s20-why-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .std-why-br-lg { display: inline; } .std-why-br-md { display: none; } .std-why-desc-br { display: none; }
          .s20-why-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .s20-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .s20-why-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; font-family: 'Poppins', sans-serif; font-size: 16px; transition: border-color 0.25s ease, transform 0.25s ease; }
          .s20-why-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .s20-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .s20-why-icon svg { stroke: url(#s20WhyGradient); color: #C8F57A; }
          .s20-why-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .s20-why-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .s20-why-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .s20-why-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1202px; }
          @media (max-width: 1024px) { .std-why.s20-why-section { padding: 53px 20px !important; } .s20-why-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .std-why-br-lg { display: none !important; } .std-why-br-md { display: inline !important; } .std-why-desc-br { display: inline !important; } .s20-why-desc { font-size: 16px !important; line-height: 26px !important; margin-bottom: 16px !important; max-width: 100% !important; text-align: center !important; } .s20-why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .s20-why-card { padding: 24px !important; } .s20-why-icon { margin-bottom: 6px !important; } .s20-why-card-title { font-size: 19px !important; line-height: 26px !important; } .s20-why-card-desc { font-size: 14px !important; line-height: 22px !important; } .s20-why-closing { font-size: 16px !important; line-height: 26px !important; margin-bottom: 24px !important; } }
          @media (max-width: 768px) { .s20-why-grid { margin-bottom: 16px !important; } .s20-why-closing { margin-bottom: 16px !important; } .std-why-desc-br { display: none !important; } }
          @media (max-width: 640px) { .std-why.s20-why-section { padding: 20px 18px !important; } .s20-why-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .s20-why-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .s20-why-desc { font-size: 15px !important; line-height: 24px !important; margin-bottom: 10px !important; } .std-why-br-md { display: none !important; } .s20-why-card { padding: 22px 20px !important; } .s20-why-icon { width: 48px; height: 48px; margin-bottom: 10px !important; } .s20-why-card-title { margin-bottom: 10px !important; } .s20-why-closing { margin-bottom: 10px !important; } }
        ` }} />

        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="s20WhyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label="Our Shopify 2.0 development process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: C_CREAM, borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            How Our Shopify 2.0 Developers Handle Your Project
          </h2>

          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            A structured process from audit to launch and beyond.
            <br className="hidden sm:block lg:hidden" />{" "}
            You know exactly what is happening at every stage.
          </p>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {[
              { step: "01.", title: "Store Audit", desc: "We audit your current theme, templates, apps, and custom code. We define what migrates cleanly to 2.0 and what needs to be rebuilt from scratch." },
              { step: "02.", title: "Architecture & Scoping", desc: "We map every template, section, metafield structure, and App Block integration. You get a fixed timeline and fixed price before we write a line of code." },
              { step: "03.", title: "Shopify 2.0 Development", desc: "We build in a separate theme environment. Clean JSON templates, structured sections and blocks, native App Block integrations. Your live store is never touched." },
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[20px] max-sm:!max-w-full md:max-lg:mt-[16px] max-xl:!max-w-full"
            style={{ maxWidth: "calc(66.667% - 7px)", marginLeft: "auto", marginRight: "auto", width: "100%" }}
          >
            {[
              { step: "04.", title: "QA & Performance Testing", desc: "We test every template, section, and app integration across browsers, devices, and screen sizes. Core Web Vitals and all features validated before launch." },
              { step: "05.", title: "Launch & Scale Support", desc: "We publish the new theme in a planned cutover, then monitor, maintain, and keep building on your 2.0 store through the first 90 days." },
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
            <div className="s20-sign-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px 32px" }}>
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

      {/* ── 8. Our Work ── */}
      <section style={{ background: C_CREAM, padding: "40px 20px" }} aria-label="Our work: Shopify 2.0 case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Our Work
          </h2>

          <div className="s20-cs-grid">
            {CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`s20-cs-card${i === 3 ? " s20-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_WHITE, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} overrideSrc={cs.image} alt={`${cs.brand} Shopify 2.0 development case study`} fill className="s20-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
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
          .s20-cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .s20-cs-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
          .s20-cs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .s20-cs-card-img { transition: transform 0.4s ease; }
          .s20-cs-card:hover .s20-cs-card-img { transform: scale(1.03); }
          .s20-cs-card-4th { display: none !important; }
          @media (max-width: 768px) { .s20-cs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .s20-cs-card-4th { display: flex !important; } }
          @media (max-width: 540px) { .s20-cs-grid { grid-template-columns: 1fr; } .s20-cs-card-4th { display: none !important; } }
        ` }} />
      </section>

      {/* ── 9. FAQ ── */}
      <section
        className="s20-faq"
        style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }}
        aria-label="Frequently asked questions about Shopify 2.0 development"
      >
        <div className="s20-faq__inner mx-auto" style={{ maxWidth: "1100px" }}>
          <h2 className="s20-faq__title">Frequently Asked Questions</h2>

          <S20FaqAccordion faqs={FAQS} />
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
        <ServiceSchema url={CANONICAL_URL} name="Shopify 2.0 Development Agency" serviceType="Shopify 2.0 development" description={META_DESCRIPTION} />

        <style dangerouslySetInnerHTML={{ __html: `
          .s20-faq__inner { padding: 40px 15px; }
          .s20-faq__title { color: #000000; font-family: 'Poppins', sans-serif; font-size: 32px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 0 32px; }
          .s20-faq__list { list-style: none; margin: 0; padding: 0; border-top: 1px solid #E5E7EB; }
          .s20-faq__item { border-bottom: 1px solid #E5E7EB; }
          .s20-faq__q { color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; line-height: 1.4; flex: 1; }
          .s20-faq__chev { display: inline-flex; align-items: center; justify-content: center; color: #000000; flex-shrink: 0; }
          .s20-faq__a-text { margin: 0 0 22px; color: #334155; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 1.7; }
          @media (min-width: 1024px) { .s20-faq__inner { padding: 72px 20px; } .s20-faq__title { font-size: 44px; margin-bottom: 40px; } .s20-faq__q { font-size: 17px; } .s20-faq__a-text { font-size: 16px; } }
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

        .std-trust-track { display: flex; align-items: center; gap: 80px; width: max-content; animation: s20TrustScroll 32s linear infinite; }
        .std-trust-carousel:hover .std-trust-track { animation-play-state: paused; }
        .std-trust-slide { flex: 0 0 auto; display: flex; align-items: center; height: 80px; }
        .std-trust-logo { height: 56px; width: auto; max-width: 180px; object-fit: contain; opacity: .7; filter: grayscale(1); transition: opacity .25s ease, filter .25s ease; }
        .std-trust-slide:hover .std-trust-logo { opacity: 1; filter: grayscale(0); }
        @keyframes s20TrustScroll { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }

        .std-acc-item { border-top: 1px solid rgba(17,17,17,.14); }
        .std-acc-item:last-child { border-bottom: 1px solid rgba(17,17,17,.14); }
        .std-acc-icon { flex: 0 0 18px; color: #000000; transition: transform .3s ease; }
        .std-acc-icon--open { transform: rotate(180deg); }

        /* ── Hero phone slider ── */
        .s20-phones-wrap {
          position: relative;
          height: 520px;
          overflow: hidden;
          border-radius: 16px;
        }
        .s20-phones-wrap::before,
        .s20-phones-wrap::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 100px;
          z-index: 2;
          pointer-events: none;
        }
        .s20-phones-wrap::before {
          top: 0;
          background: linear-gradient(to bottom, #000000 0%, transparent 100%);
        }
        .s20-phones-wrap::after {
          bottom: 0;
          background: linear-gradient(to top, #000000 0%, transparent 100%);
        }
        .s20-phones {
          display: flex;
          gap: 10px;
          height: 100%;
          justify-content: center;
        }
        .s20-phones-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-shrink: 0;
        }
        .s20-phone-frame {
          width: 130px;
          height: 274px;
          border-radius: 22px;
          overflow: hidden;
          flex-shrink: 0;
          background: #111;
          border: 2px solid rgba(255,255,255,0.10);
          box-shadow: 0 4px 24px rgba(0,0,0,0.55);
        }
        .s20-phone-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        /* Col 1: 4 imgs — each item stride = 274+10=284px, 4×284=1136px to next duplicate */
        .s20-phones-col--up1 { animation: s20Up1 22s linear infinite; }
        /* Col 2: 2 imgs — stride = 568px; scroll down */
        .s20-phones-col--down { margin-top: -120px; animation: s20Down 16s linear infinite; }
        /* Col 3: 2 imgs — stride = 568px; scroll up, different speed */
        .s20-phones-col--up2 { margin-top: -60px; animation: s20Up2 19s linear infinite; }
        @keyframes s20Up1  { 0% { transform: translateY(0);      } 100% { transform: translateY(-1136px); } }
        @keyframes s20Down { 0% { transform: translateY(-568px); } 100% { transform: translateY(0);       } }
        @keyframes s20Up2  { 0% { transform: translateY(0);      } 100% { transform: translateY(-568px);  } }
        /* Tablet: 768px–1023px — smaller phones, full slider still visible */
        @media (max-width: 1023px) {
          .s20-phones-wrap { height: 380px; border-radius: 12px; }
          .s20-phone-frame { width: 115px; height: 242px; border-radius: 20px; }
          .s20-phones-col--down { margin-top: -106px; }
          .s20-phones-col--up2  { margin-top: -53px; }
          @keyframes s20Up1  { 0% { transform: translateY(0);      } 100% { transform: translateY(-1008px); } }
          @keyframes s20Down { 0% { transform: translateY(-504px); } 100% { transform: translateY(0);       } }
          @keyframes s20Up2  { 0% { transform: translateY(0);      } 100% { transform: translateY(-504px);  } }
        }
        /* Mobile: below 768px — compact phones, 2 visible columns */
        @media (max-width: 767px) {
          .s20-phones-wrap { height: 260px; border-radius: 10px; margin-top: 4px; }
          .s20-phones-wrap::before, .s20-phones-wrap::after { height: 70px; }
          .s20-phone-frame { width: 110px; height: 232px; border-radius: 18px; }
          .s20-phones-col--down { margin-top: -100px; }
          .s20-phones-col--up2  { display: none; }
          @keyframes s20Up1  { 0% { transform: translateY(0);      } 100% { transform: translateY(-968px); } }
          @keyframes s20Down { 0% { transform: translateY(-484px); } 100% { transform: translateY(0);      } }
        }
        @media (min-width: 1440px) {
          .s20-phones-wrap { height: 620px; }
          .s20-phone-frame { width: 160px; height: 337px; border-radius: 26px; }
          .s20-phones-col--down { margin-top: -148px; }
          .s20-phones-col--up2  { margin-top: -74px; }
          @keyframes s20Up1  { 0% { transform: translateY(0);       } 100% { transform: translateY(-1388px); } }
          @keyframes s20Down { 0% { transform: translateY(-694px);  } 100% { transform: translateY(0);       } }
          @keyframes s20Up2  { 0% { transform: translateY(0);       } 100% { transform: translateY(-694px);  } }
        }

        @media (max-width: 1024px) {
          .s20-sign-grid { grid-template-columns: repeat(2, 1fr) !important; }
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
          .s20-sign-grid { grid-template-columns: 1fr !important; }
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

      <RelatedServices current="/services/shopify-2-0-development" />
    </>
  );
}
