import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import Image from "next/image";
import Link from "next/link";
import LpAccordion from "./LpAccordion";
import LpFaqAccordion from "./LpFaqAccordion";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import ServiceSchema from "@/components/seo/ServiceSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RelatedServices from "@/components/sections/RelatedServices";

const META_DESCRIPTION =
  "Shopify landing page design for paid ads, launches, and seasonal campaigns. 200+ pages built, 28.5% avg conversion lift. Fixed-price quotes in 24 hours.";
const CANONICAL_URL = "https://ecommwizards.com/services/shopify-landing-page-design";

export const metadata: Metadata = {
  title: { absolute: "Shopify Landing Page Design | High-Converting Pages" },
  description: META_DESCRIPTION,
  keywords: [
    "shopify landing page design",
    "shopify landing page agency",
    "custom shopify landing pages",
    "shopify paid ad landing page",
    "shopify product launch page",
    "shopify campaign page design",
    "shopify 2.0 landing page",
    "high converting shopify pages",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "Shopify Landing Page Design | High-Converting Pages",
    description: META_DESCRIPTION,
    images: [{ url: ogImage("Shopify Landing Page Design"), width: 1200, height: 630, alt: "Shopify Landing Page Design — Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Landing Page Design | High-Converting Pages",
    description: META_DESCRIPTION,
    images: [ogImage("Shopify Landing Page Design")],
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
  { src: "/images/Case%20studies/logos/111skin%20logo.png",     alt: "111SKIN" },
  { src: "/images/Case%20studies/logos/Candy%20Kittens.webp",    alt: "Candy Kittens" },
  { src: "/images/Case%20studies/logos/NEOM%20Wellbeing.png",    alt: "NEOM Wellbeing" },
  { src: "/images/Case%20studies/logos/Ronaldo%20Jewelry.avif",  alt: "Ronaldo Jewelry" },
  { src: "/images/Case%20studies/logos/Wild.svg",                alt: "Wild" },
  { src: "/images/everlast-icon.svg",                    alt: "Everlast" },
  { src: "/images/Case%20studies/logos/Saddleback.svg",          alt: "Saddleback" },
  { src: "/images/Case%20studies/logos/Twillory.png",            alt: "Twillory" },
];

/* ── Landing page types ── */
const LP_TYPES = [
  {
    name: "Product Launch Pages",
    desc: "Built for new product drops and pre-order campaigns. One page, one product, one goal. Captures demand before your homepage dilutes it.",
    roi: "Launch campaigns convert 3x higher on a dedicated page than on a product page.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 3L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 8L14 3L19 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 18h18v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 18v-5h12v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Paid Ad Landing Pages",
    desc: "Post-click pages matched to your Meta, Google, and TikTok ad creative. Same headline, same offer, same visual. The message match is what converts cold traffic.",
    roi: "Ad landing pages typically cut cost per acquisition by 30 to 50% versus homepage traffic.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="5" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 10h22" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M8 15h5M8 18h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M20 23v-2M8 23v-2M14 23v-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Seasonal and Sale Campaign Pages",
    desc: "Black Friday, BFCM, flash sales, and limited-time offers need their own space. A campaign page removes the friction of navigating your store during a high-intent moment.",
    roi: "Brands running dedicated BFCM pages see lower cart abandonment than brands sending sale traffic to a standard homepage.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4a10 10 0 1 0 0 20A10 10 0 0 0 14 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 4.5L5 2M19 4.5L23 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Email Campaign Pages",
    desc: "Pages matched to your email subject line and offer. Subscribers land somewhere that continues the conversation, not a homepage that ignores why they clicked.",
    roi: "Matched post-click pages consistently outperform homepage links in email revenue per send.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 10l11 7 11-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Lead Capture and Waitlists",
    desc: "Pre-launch waitlists, SMS capture pages, and email opt-in flows. Built to collect leads before a product exists, with Klaviyo and SMS integrations included.",
    roi: "Urgency-driven waitlist pages convert 40 to 60% of paid traffic to email subscribers before the product is even live.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4a5 5 0 1 0 0 10A5 5 0 0 0 14 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 24c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19 16l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Advertorial Pages",
    desc: "Long-form story pages that warm cold traffic before the offer. Built for brands running VSLs, native ads, or content-first funnels where the visitor needs educating before they buy.",
    roi: "Cold traffic needs context before it buys. Advertorial pages give it that. Conversion rates on cold paid traffic run higher with an advertorial in front of the offer.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="4" y="3" width="20" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 9h12M8 13h12M8 17h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="21" cy="21" r="5" fill="#FBF7ED" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M19 21l1.5 1.5L23 19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

/* ── Comparison: Shopify-native vs page builders ── */
const NATIVE_PROS = [
  "Runs natively inside your Shopify store. No app dependency.",
  "Sub-2.5s load times. No external rendering layer adding weight.",
  "Native Shopify checkout. No redirect, no broken conversion tracking.",
  "You own the code outright. No monthly page builder subscription.",
  "Editable Shopify 2.0 sections your team manages without a developer.",
  "Works inside your existing Shopify theme on your existing domain.",
];
const BUILDER_CONS = [
  { text: "App-dependent. Page goes down if the app has an outage.",           warn: false },
  { text: "Slower by default. Third-party rendering adds significant weight.",  warn: false },
  { text: "External checkout breaks native Shopify conversion tracking.",       warn: false },
  { text: "Monthly subscription for code you should already own.",             warn: false },
  { text: "Template lock-in. Going off-script breaks your layout.",            warn: true  },
  { text: "Requires separate tools for pixel and analytics setup.",            warn: true  },
];

/* ── Case studies ── */
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

/* ── BreadcrumbList schema ── */
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Shopify Landing Page Design", item: "https://ecommwizards.com/services/shopify-landing-page-design" },
  ],
};

/* ── FAQs ── */
const FAQS = [
  {
    q: "How long does a Shopify landing page take to build?",
    a: "Most Shopify landing pages launch in 2 to 3 weeks. A simple single-section page with a strong brief takes 7 to 10 days. Complex advertorial pages or multi-variant campaign pages with full pixel setup take 3 to 4 weeks. Every project starts with a fixed timeline you approve before we begin.",
  },
  {
    q: "How much does Shopify landing page design cost?",
    a: "Cost depends on scope: page length, number of variants, and whether you need pixel and analytics setup. A single Shopify landing page starts from £2,000. A full campaign landing page with A/B test variants and full tracking starts from £4,000. We work on fixed-price quotes, not hourly rates. Send us your requirements and we will return a detailed estimate within 24 hours.",
  },
  {
    q: "What is the difference between a landing page and a homepage?",
    a: "A homepage serves every visitor with different goals. A landing page serves one audience, one campaign, and one goal: convert. Homepages have navigation, multiple CTAs, and broad messaging. Landing pages remove distractions, focus the message, and direct the visitor to one action. Ad traffic sent to a homepage converts poorly. The same traffic sent to a matched landing page on Shopify converts significantly better.",
  },
  {
    q: "How do you create a landing page on Shopify?",
    a: "You create a Shopify landing page by building a custom Liquid template and assigning it to a page in your Shopify admin. The template controls the layout, sections, and content. We build every landing page as a standalone Shopify 2.0 template: editable sections, full pixel setup, and a direct-to-checkout path. It lives inside your store, uses your domain, and runs without any page builder app.",
  },
  {
    q: "Do I need Shopify Plus for a custom landing page?",
    a: "No. Custom Shopify landing pages work on all Shopify plans. You do not need Shopify Plus to build a high-converting landing page. Our builds run on Shopify 2.0 and work on standard Shopify, Shopify Advanced, and Shopify Plus.",
  },
  {
    q: "Can you build landing pages for paid ads on Meta, Google, and TikTok?",
    a: "Yes. Paid ad landing pages are our most common brief. We build pages matched to your ad creative: same headline, same offer, same visual language. We set up Meta Pixel, Google Ads, and TikTok Pixel conversion events so you track exactly which page drives purchases, add to carts, and checkout initiations.",
  },
  {
    q: "Do you use page builders like PageFly or Replo?",
    a: "No. We build every Shopify landing page as a native Liquid template directly on Shopify 2.0. No PageFly, no Replo, no Unbounce. Your page is part of your store, not dependent on a third-party app. When those apps have outages, your landing page stays live because it runs on Shopify, not on an app.",
  },
  {
    q: "Can my team edit the landing page after it is built?",
    a: "Yes. Every landing page with Shopify 2.0 sections is fully editable from the customizer. Your team can update headlines, swap images, change text, and adjust layout without touching code. We document every editable section before handover.",
  },
  {
    q: "Do you set up tracking and pixel integration?",
    a: "Yes. Every landing page build includes GA4 event tracking, Meta Pixel purchase and add-to-cart events, TikTok Pixel if you run TikTok ads, and Google Ads conversion tracking. You see exactly how the page performs in each ad channel before you scale spend.",
  },
  {
    q: "What results can I expect from a custom landing page?",
    a: "Results depend on your offer, traffic source, and product. As a baseline: our clients see an average 28.5% conversion lift when they switch from homepage traffic to a high-converting Shopify landing page matched to their ad. Paid ad campaigns typically see a 30 to 50% reduction in cost per acquisition. The improvement comes from eliminating the mismatch between the ad promise and the page experience.",
  },
];

/* ── Phone slider images ── */
const PHONE_COL1 = [
  "/images/partner-images-1-1.webp",
  "/images/partner-images-1-2.webp",
  "/images/partner-images-1-3.webp",
  "/images/partner-images-1-4.webp",
];
const PHONE_COL2 = ["/images/partner-images-2-1.webp", "/images/partner-images-2-3.webp"];
const PHONE_COL3 = ["/images/partner-images-3-1.webp", "/images/partner-images-3-2.webp"];

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
      <Breadcrumbs current="/services/shopify-landing-page-design" />
      {/* ── 1. Hero (DARK) ── */}
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Shopify landing page design hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Certified Shopify Landing Page Agency</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Shopify Landing Page Design That Turns{" "}
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Ad Traffic Into Revenue
              </span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              Ad spend is wasted on homepages. Homepages serve everyone. Landing pages serve one campaign, one audience, one goal. We build custom Shopify landing pages for product launches, paid social campaigns, seasonal promotions, and email traffic. Built on Shopify 2.0. No page builders. No templates.
            </p>
            <div className="std-hero-stats">
              {[
                { number: "200+",   label: "Landing Pages Built" },
                { number: "28.5%",  label: "Avg Conversion Lift" },
                { number: "30-50%", label: "CPA Reduction" },
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

          <div className="s20-phones-wrap" aria-hidden="true">
            <div className="s20-phones">
              <div className="s20-phones-col s20-phones-col--up1">
                {[...PHONE_COL1, ...PHONE_COL1].map((src, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <div key={i} className="s20-phone-frame">
                    <img src={src} alt="" width={130} height={274} loading={i < PHONE_COL1.length ? "eager" : "lazy"} />
                  </div>
                ))}
              </div>
              <div className="s20-phones-col s20-phones-col--down">
                {[...PHONE_COL2, ...PHONE_COL2].map((src, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <div key={i} className="s20-phone-frame">
                    <img src={src} alt="" width={130} height={274} loading={i < PHONE_COL2.length ? "eager" : "lazy"} />
                  </div>
                ))}
              </div>
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

      {/* ── 2. Trust Bar (WHITE) ── */}
      <section className="std-trust" style={{ background: C_WHITE }} aria-label="Brands that trust Ecomm Wizards">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: C_DARK, fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            200+ Shopify Landing Pages Built for the World&apos;s Best Brands
          </h2>
          <p className="text-center" style={{ color: C_TEXT, fontSize: 16, lineHeight: "26px", margin: "10px 0 0", textAlign: "center" }}>
            From DTC startups to global brands. Every page built on Shopify 2.0, no page builders.
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

      {/* ── 3. Landing Page Types (CREAM) ── */}
      <section className="slp-feat" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Types of Shopify landing pages we build">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div className="slp-feat-title-block">
            <h2 className="slp-feat-heading">
              Every Landing Page Built for One Goal: Conversion
            </h2>
            <p className="slp-feat-desc">
              We build six types of Shopify landing pages. Each one targets a specific traffic source and a single campaign goal.
            </p>
          </div>

          <div className="slp-feat-grid">
            {LP_TYPES.map((feat) => (
              <div key={feat.name} className="slp-feat-card">
                <span className="slp-feat-icon" aria-hidden="true">{feat.icon}</span>
                <h3 className="slp-feat-name">{feat.name}</h3>
                <p className="slp-feat-desc-text">{feat.desc}</p>
                <div className="slp-feat-roi">
                  <span className="slp-feat-roi-label">Real result:</span> {feat.roi}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .slp-feat-heading { color: #000; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 auto 16px; max-width: 800px; }
          .slp-feat-desc { color: rgba(0,0,0,.75); font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 760px; }
          .slp-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .slp-feat-card { background: #fff; border-radius: 16px; padding: 28px; border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 12px; }
          .slp-feat-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          .slp-feat-name { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 700; color: #000; margin: 0; line-height: 1.3; }
          .slp-feat-desc-text { font-family: 'Poppins', sans-serif; font-size: 14px; color: #334155; line-height: 1.7; margin: 0; flex-grow: 1; }
          .slp-feat-roi { font-family: 'Poppins', sans-serif; font-size: 13px; color: #2A9555; line-height: 1.5; background: rgba(61,199,122,0.08); border-radius: 8px; padding: 10px 14px; border-left: 3px solid #3DC77A; margin-top: auto; }
          .slp-feat-roi-label { font-weight: 700; }
          @media (min-width: 1024px) { .slp-feat-title-block { width: -moz-fit-content; width: fit-content; margin: 0 auto 8px; } .slp-feat-heading { max-width: none; white-space: nowrap; } .slp-feat-title-block .slp-feat-desc { max-width: 100%; margin-left: 0; margin-right: 0; } }
          @media (max-width: 1024px) { .slp-feat-heading { font-size: 32px !important; } .slp-feat-desc { font-size: 16px !important; margin-bottom: 24px !important; } .slp-feat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 768px) { .slp-feat-desc { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .slp-feat { padding: 40px 16px !important; } .slp-feat-heading { font-size: 26px !important; } .slp-feat-desc { font-size: 15px !important; } .slp-feat-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── 4. Why Shopify-Native (DARK) ── */}
      <section className="slp-compare" style={{ background: C_DARK, padding: "0 20px" }} aria-label="Shopify-native landing pages vs page builders">
        <div className="mx-auto" style={{ maxWidth: 1320, padding: "60px 0" }}>

          <h2 className="slp-compare-h2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 4.1vw, 42px)", fontWeight: 700, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Why Not Just Use{" "}
            <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              PageFly, Replo, or Unbounce?
            </span>
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Page builders add an app layer between your landing page and Shopify. That layer costs you speed, reliability, and money every month.
          </p>

          <div className="slp-compare-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 20, marginTop: 10 }}>

            <div className="slp-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="slp-compare-badge" style={{ display: "inline-block", background: "rgba(61,199,122,0.15)", color: "#3DC77A", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(61,199,122,0.3)" }}>
                ✓ Shopify-Native Landing Pages
              </span>
              <ul className="slp-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {NATIVE_PROS.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2, color: "#3DC77A" }}><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="slp-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="slp-compare-badge" style={{ display: "inline-block", background: "rgba(239,68,68,0.12)", color: "#f87171", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(239,68,68,0.25)" }}>
                ✕ Page Builder (PageFly / Replo)
              </span>
              <ul className="slp-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
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
          @media (max-width: 1024px) { .slp-compare-h2 { font-size: 38px !important; } }
          @media (max-width: 768px) { .slp-compare-grid { gap: 12px !important; } .slp-compare-card { padding: 20px !important; } .slp-compare-badge { font-size: 16px !important; padding: 5px 10px !important; white-space: nowrap; margin-bottom: 14px !important; } .slp-compare-list { gap: 10px !important; } .slp-compare-card li { font-size: 14px !important; } }
        ` }} />
      </section>

      {/* ── 5. Services Accordion (WHITE) ── */}
      <section className="std-solutions" style={{ background: C_WHITE }} aria-label="Shopify landing page design services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>What&apos;s Included</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              What&apos;s Included in Every Shopify Landing Page
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              Every Shopify landing page build covers design, development, <Link href="/services/shopify-speed-optimization" style={{ color: "#1F7A45", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>speed optimization</Link>, <Link href="/services/shopify-analytics-and-tracking-setup" style={{ color: "#1F7A45", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>tracking setup</Link>, and 30-day support. No add-ons, no surprises. Ready to run traffic on day one.
            </p>
            <Link href="/book-shopify-consultation" className="std-cta-sol mt-8">
              Book a Free Strategy Call
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <LpAccordion />
        </div>
      </section>

      {/* ── 6. Proven Results (CREAM) ── */}
      <section
        className="slp-results-section"
        style={{ background: C_CREAM, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "40px 20px" }}
      >
        <div className="slp-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="slp-results-heading">Shopify Landing Page Results Our Clients Actually Got</h2>
          <p className="slp-results-desc">
            Not projections. Real results from Shopify projects we built to convert: higher rates, lower acquisition costs, and more revenue per visitor.
          </p>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .slp-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:1100px; }
          .slp-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          @media (max-width:1023px) { .slp-results-section { padding:44px 20px !important; } .slp-results-heading { font-size:30px !important;line-height:40px !important;margin-bottom:18px !important; } .slp-results-desc { font-size:16px !important;line-height:26px !important;margin-bottom:32px !important; } }
          @media (min-width:768px) and (max-width:1023px) { .slp-results-section { padding:30px 20px !important; } .slp-results-desc { margin-bottom:18px !important; } }
          @media (max-width:640px) { .slp-results-section { padding:20px 16px !important; } .slp-results-heading { font-size:26px !important;line-height:34px !important; } .slp-results-desc { font-size:15px !important;line-height:24px !important; } }
        ` }} />
      </section>

      {/* ── 7. Why Ecomm Wizards (DARK) ── */}
      <section
        className="std-why slp-why-section"
        style={{ background: C_DARK, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Why brands choose Ecomm Wizards for Shopify landing page design"
      >
        <div className="slp-why-inner mx-auto" style={{ maxWidth: "1320px" }}>

          <h2 className="slp-why-heading">
            Why Brands Choose Ecomm Wizards for{" "}<br className="std-why-br-lg" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shopify Landing Page Design
            </span>
          </h2>

          <p className="slp-why-desc">
            We have built 200+ Shopify landing pages and helped clients generate over $900M in revenue. Here is what separates our Shopify landing page design services from every other agency:
          </p>

          <div className="slp-why-grid">
            {[
              {
                title: "Shopify-Only Focus",
                desc: (<>No WordPress, no Webflow, no Wix. Every page we build runs on Shopify 2.0. That focus means we know every constraint and every capability of the platform inside out.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></svg>),
              },
              {
                title: "No Page Builders",
                desc: (<>Pure Liquid and Shopify 2.0. No Replo, no PageFly, no Unbounce. Your landing page is part of your store, not dependent on an app that can go down, change pricing, or shut down.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="24" height="20" rx="3" /><path d="M4 12h24" /><path d="M10 19l3-3 3 3 5-5" /></svg>),
              },
              {
                title: "CRO Built In",
                desc: (<>Every design decision is a conversion decision. Above-fold hook, social proof placement, urgency mechanics, CTA copy. Our clients average a <span className="slp-why-hl">28.5% conversion lift</span> on their first landing page.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="27" x2="5" y2="22" /><line x1="11" y1="27" x2="11" y2="18" /><line x1="17" y1="27" x2="17" y2="14" /><line x1="23" y1="27" x2="23" y2="9" /><polyline points="5,20 11,15 17,10 23,5" /><polyline points="19,5 23,5 23,9" /></svg>),
              },
              {
                title: "Mobile-First Design",
                desc: (<>68% of ad traffic lands on mobile. We design on mobile first, then adapt to desktop. Every button, image, and headline is optimised for the screen your buyers actually use.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="14" height="28" rx="3" /><path d="M13 27h6" /><path d="M14 6h4" /></svg>),
              },
              {
                title: "You Own the Code",
                desc: (<>No subscriptions, no lock-in. The landing page is yours: the Liquid, the sections, the assets. You can edit it, move it, and run it for years with zero ongoing fees to us or any third party.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="12" width="20" height="16" rx="2" /><path d="M10 12V8a6 6 0 0 1 12 0v4" /><circle cx="16" cy="20" r="2" fill="currentColor" /></svg>),
              },
              {
                title: "Post-Launch Support",
                desc: (<>Every build includes a 30-day support window. We monitor the page on live traffic, fix anything that surfaces, and refine based on early performance data. <span className="slp-why-hl">We stay until it works.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18v-3a11 11 0 0 1 22 0v3" /><path d="M5 18h4v8H7a2 2 0 0 1-2-2v-6z" /><path d="M27 18h-4v8h2a2 2 0 0 0 2-2v-6z" /></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="slp-why-card">
                <span className="slp-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="slp-why-card-title">{card.title}</h3>
                <p className="slp-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="slp-why-closing">
            Every landing page passes full QA before we send live traffic to it. We build to Shopify 2.0 standards, wire tracking on day one, and stay on for 30 days after launch.
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
          .slp-why-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .std-why-br-lg { display: inline; } .std-why-br-md { display: none; } .std-why-desc-br { display: none; }
          .slp-why-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .slp-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .slp-why-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; font-family: 'Poppins', sans-serif; font-size: 16px; transition: border-color 0.25s ease, transform 0.25s ease; }
          .slp-why-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .slp-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .slp-why-icon svg { stroke: url(#slpWhyGradient); color: #C8F57A; }
          .slp-why-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .slp-why-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .slp-why-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .slp-why-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1202px; }
          @media (max-width: 1024px) { .std-why.slp-why-section { padding: 53px 20px !important; } .slp-why-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .std-why-br-lg { display: none !important; } .std-why-br-md { display: inline !important; } .std-why-desc-br { display: inline !important; } .slp-why-desc { font-size: 16px !important; line-height: 26px !important; margin-bottom: 16px !important; max-width: 100% !important; text-align: center !important; } .slp-why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .slp-why-card { padding: 24px !important; } .slp-why-icon { margin-bottom: 6px !important; } .slp-why-card-title { font-size: 19px !important; line-height: 26px !important; } .slp-why-card-desc { font-size: 14px !important; line-height: 22px !important; } .slp-why-closing { font-size: 16px !important; line-height: 26px !important; margin-bottom: 24px !important; } }
          @media (max-width: 768px) { .slp-why-grid { margin-bottom: 16px !important; } .slp-why-closing { margin-bottom: 16px !important; } .std-why-desc-br { display: none !important; } }
          @media (max-width: 640px) { .std-why.slp-why-section { padding: 20px 18px !important; } .slp-why-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .slp-why-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .slp-why-desc { font-size: 15px !important; line-height: 24px !important; margin-bottom: 10px !important; } .std-why-br-md { display: none !important; } .slp-why-card { padding: 22px 20px !important; } .slp-why-icon { width: 48px; height: 48px; margin-bottom: 10px !important; } .slp-why-card-title { margin-bottom: 10px !important; } .slp-why-closing { margin-bottom: 10px !important; } }
        ` }} />

        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="slpWhyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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

      {/* ── 8. Process (WHITE) ── */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label="Our Shopify landing page design process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: C_CREAM, borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            How We Build Your Shopify Landing Page
          </h2>

          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            A clear five-step process from brief to live traffic.
            <br className="hidden sm:block lg:hidden" />{" "}
            Most pages launch in 2 to 3 weeks.
          </p>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {[
              { step: "01.", title: "Brief & Strategy", desc: "We review your campaign goals, traffic source, and ad creative. We scope the custom Shopify landing page: structure, key message, and conversion mechanics. You sign off before design begins." },
              { step: "02.", title: "UX & Wireframe", desc: "We map the page flow: above-fold hook, social proof placement, CTA position, and urgency elements. You approve the structure before any design work starts." },
              { step: "03.", title: "Design", desc: "Mobile-first design matched to your brand and ad creative. We design for conversion first, aesthetics second. You approve before we write a line of code." },
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
              { step: "04.", title: "Development & QA", desc: "We build on Shopify 2.0, set up all tracking pixels, and QA across all devices. Every CTA, form, and conversion event is tested before launch." },
              { step: "05.", title: "Launch & Monitor", desc: "We go live on your Shopify store. We monitor performance for the first 30 days and fix anything that needs adjusting based on live traffic data." },
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

      {/* ── 9. Our Work (CREAM) ── */}
      <section style={{ background: C_CREAM, padding: "40px 20px" }} aria-label="Shopify landing page design case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Our Work
          </h2>

          <div className="slp-cs-grid">
            {CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`slp-cs-card${i === 3 ? " slp-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_WHITE, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} alt={`${cs.brand} Shopify landing page case study`} fill className="slp-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
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
          .slp-cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .slp-cs-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
          .slp-cs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .slp-cs-card-img { transition: transform 0.4s ease; }
          .slp-cs-card:hover .slp-cs-card-img { transform: scale(1.03); }
          .slp-cs-card-4th { display: none !important; }
          @media (max-width: 768px) { .slp-cs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .slp-cs-card-4th { display: flex !important; } }
          @media (max-width: 540px) { .slp-cs-grid { grid-template-columns: 1fr; } .slp-cs-card-4th { display: none !important; } }
        ` }} />
      </section>

      {/* ── 10. FAQ (WHITE) ── */}
      <section
        className="lp-faq"
        style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }}
        aria-label="Frequently asked questions about Shopify landing page design"
      >
        <div className="lp-faq__inner mx-auto" style={{ maxWidth: "1100px" }}>
          <h2 className="lp-faq__title">Shopify Landing Page Design FAQs</h2>

          <LpFaqAccordion faqs={FAQS} />
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
        <ServiceSchema url={CANONICAL_URL} name="Shopify Landing Page Design" serviceType="Shopify landing page design" description={META_DESCRIPTION} />

        <style dangerouslySetInnerHTML={{ __html: `
          .lp-faq__inner { padding: 40px 15px; }
          .lp-faq__title { color: #000000; font-family: 'Poppins', sans-serif; font-size: 32px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 0 32px; }
          .lp-faq__list { list-style: none; margin: 0; padding: 0; border-top: 1px solid #E5E7EB; }
          .lp-faq__item { border-bottom: 1px solid #E5E7EB; }
          .lp-faq__q { color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; line-height: 1.4; flex: 1; }
          .lp-faq__chev { display: inline-flex; align-items: center; justify-content: center; color: #000000; flex-shrink: 0; }
          .lp-faq__a-text { margin: 0 0 22px; color: #334155; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 1.7; }
          @media (min-width: 1024px) { .lp-faq__inner { padding: 72px 20px; } .lp-faq__title { font-size: 44px; margin-bottom: 40px; } .lp-faq__q { font-size: 17px; } .lp-faq__a-text { font-size: 16px; } }
        ` }} />
      </section>

      {/* ── Page CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Phone slider ── */
        .s20-phones-wrap { position: relative; height: 520px; overflow: hidden; border-radius: 16px; }
        .s20-phones-wrap::before, .s20-phones-wrap::after { content: ''; position: absolute; left: 0; right: 0; height: 100px; z-index: 2; pointer-events: none; }
        .s20-phones-wrap::before { top: 0; background: linear-gradient(to bottom, #000000 0%, transparent 100%); }
        .s20-phones-wrap::after  { bottom: 0; background: linear-gradient(to top, #000000 0%, transparent 100%); }
        .s20-phones { display: flex; gap: 10px; height: 100%; justify-content: center; }
        .s20-phones-col { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; }
        .s20-phone-frame { width: 130px; height: 274px; border-radius: 22px; overflow: hidden; flex-shrink: 0; background: #111; border: 2px solid rgba(255,255,255,0.10); box-shadow: 0 4px 24px rgba(0,0,0,0.55); }
        .s20-phone-frame img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .s20-phones-col--up1  { animation: s20Up1 22s linear infinite; }
        .s20-phones-col--down { margin-top: -120px; animation: s20Down 16s linear infinite; }
        .s20-phones-col--up2  { margin-top: -60px;  animation: s20Up2 19s linear infinite; }
        @keyframes s20Up1  { 0% { transform: translateY(0);      } 100% { transform: translateY(-1136px); } }
        @keyframes s20Down { 0% { transform: translateY(-568px); } 100% { transform: translateY(0);       } }
        @keyframes s20Up2  { 0% { transform: translateY(0);      } 100% { transform: translateY(-568px);  } }
        @media (max-width: 1023px) {
          .s20-phones-wrap { height: 380px; border-radius: 12px; }
          .s20-phone-frame { width: 115px; height: 242px; border-radius: 20px; }
          .s20-phones-col--down { margin-top: -106px; } .s20-phones-col--up2 { margin-top: -53px; }
          @keyframes s20Up1  { 0% { transform: translateY(0);      } 100% { transform: translateY(-1008px); } }
          @keyframes s20Down { 0% { transform: translateY(-504px); } 100% { transform: translateY(0);       } }
          @keyframes s20Up2  { 0% { transform: translateY(0);      } 100% { transform: translateY(-504px);  } }
        }
        @media (max-width: 767px) {
          .s20-phones-wrap { height: 260px; border-radius: 10px; margin-top: 4px; }
          .s20-phones-wrap::before, .s20-phones-wrap::after { height: 70px; }
          .s20-phone-frame { width: 110px; height: 232px; border-radius: 18px; }
          .s20-phones-col--down { margin-top: -100px; } .s20-phones-col--up2 { display: none; }
          @keyframes s20Up1  { 0% { transform: translateY(0);      } 100% { transform: translateY(-968px); } }
          @keyframes s20Down { 0% { transform: translateY(-484px); } 100% { transform: translateY(0);      } }
        }
        @media (min-width: 1440px) {
          .s20-phones-wrap { height: 620px; }
          .s20-phone-frame { width: 160px; height: 337px; border-radius: 26px; }
          .s20-phones-col--down { margin-top: -148px; } .s20-phones-col--up2 { margin-top: -74px; }
          @keyframes s20Up1  { 0% { transform: translateY(0);       } 100% { transform: translateY(-1388px); } }
          @keyframes s20Down { 0% { transform: translateY(-694px);  } 100% { transform: translateY(0);       } }
          @keyframes s20Up2  { 0% { transform: translateY(0);       } 100% { transform: translateY(-694px);  } }
        }

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

        .std-trust-track { display: flex; align-items: center; gap: 80px; width: max-content; animation: slpTrustScroll 32s linear infinite; }
        .std-trust-carousel:hover .std-trust-track { animation-play-state: paused; }
        .std-trust-slide { flex: 0 0 auto; display: flex; align-items: center; height: 80px; }
        .std-trust-logo { height: 56px; width: auto; max-width: 180px; object-fit: contain; opacity: .7; filter: grayscale(1); transition: opacity .25s ease, filter .25s ease; }
        .std-trust-slide:hover .std-trust-logo { opacity: 1; filter: grayscale(0); }
        @keyframes slpTrustScroll { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }

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

      <RelatedServices current="/services/shopify-landing-page-design" />
    </>
  );
}
