import type { Metadata } from "next";
import Link from "next/link";
import { ogImage } from "@/lib/og";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/ui/CTASection";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import AgenticAccordion from "./AgenticAccordion";

const META_DESCRIPTION =
  "Shopify agentic commerce agency. We make your store agent-ready so AI assistants like ChatGPT, Gemini, Copilot, and Perplexity discover and buy your products. GEO + Agentic Storefronts.";
const CANONICAL_URL = "https://ecommwizards.com/services/shopify-agentic-commerce";
const TITLE = "Shopify Agentic Commerce Agency: Get Found & Bought by AI | Ecomm Wizards";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "shopify agentic commerce",
    "agentic commerce agency",
    "agentic commerce services",
    "agentic storefronts setup",
    "generative engine optimization",
    "geo agency shopify",
    "sell on chatgpt shopify",
    "shopify agent-ready",
    "universal commerce protocol",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: TITLE,
    description: META_DESCRIPTION,
    images: [{ url: ogImage("Shopify Agentic Commerce"), width: 1200, height: 630, alt: "Shopify Agentic Commerce Agency by Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: META_DESCRIPTION,
    images: [ogImage("Shopify Agentic Commerce")],
  },
};

const GRADIENT =
  "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";
const GRADIENT_TEXT = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const HERO_STATS = [
  { value: "$3–5T", label: "Market by 2030" },
  { value: "64%", label: "Shoppers use AI" },
  { value: "15×", label: "AI order growth" },
  { value: "5", label: "AI channels" },
];

// Brand logos for the trust strip (same set as the analytics & tracking page)
const TRUST_LOGOS = [
  { src: "/images/schutz-logo.png-2.png", alt: "Schutz" },
  { src: "/images/Calvin-Klein-logo.png-1.png", alt: "Calvin Klein" },
  { src: "/images/Logo-AriZona.png-1.png", alt: "AriZona" },
  { src: "/images/Logo-Khaite.png-1.png", alt: "Khaite" },
  { src: "/images/Olaplex-logo-new.avif", alt: "Olaplex" },
  { src: "/images/Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif", alt: "Lids" },
  { src: "/images/everlast-icon.svg", alt: "Everlast" },
  { src: "/images/P448-logo.png-1.png", alt: "P448" },
  { src: "/images/LVMH-logo.png-1.png", alt: "LVMH" },
  { src: "/images/modelez-logo.png-1-768x361-1.png", alt: "Mondelez" },
];

// Reused case-study slides (agency credibility), same set used on other service pages
const AC_SLIDES: CaseStudySlide[] = [
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A Shopify Plus store <strong>built for scale</strong> for <strong>BARK</strong></>),
    quote: (<>&ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong>, made Ecomm Wizards a fantastic partner.&rdquo;</>),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
  {
    key: "everlast",
    image: "/images/Case%20studies/Everlast-banner.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A Shopify Plus rebuild that delivered <strong>+152% conversion rate</strong> for <strong>Everlast</strong></>),
    quote: (<>&ldquo;We needed a store that could handle serious athletes, casual fitness buyers, and trade accounts in one place. Ecomm Wizards built exactly that. The <strong>conversion numbers and trade portal revenue</strong> both exceeded what we projected.&rdquo;</>),
    avatar: "/images/Case%20studies/Daniel%20Summerson.jpg",
    name: "Daniel Summerson",
    role: "Managing Director, Everlast Gyms",
  },
  {
    key: "dryrobe",
    image: "/images/Case%20studies/Dryrobe%20hero%20section.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg"],
    headline: (<>A redesign that delivered <strong>+89% online revenue</strong> for <strong>Dryrobe</strong></>),
    quote: (<>&ldquo;The new store finally communicates who we are. <strong>Revenue growth followed</strong> from getting those fundamentals right.&rdquo;</>),
    avatar: "/images/Case%20studies/gideon%20bright.jfif",
    name: "Gideon Bright",
    role: "Head of Ecommerce, Dryrobe",
  },
];

const CHANNELS = [
  { name: "ChatGPT", note: "Product discovery + Instant Checkout via the Agentic Commerce Protocol." },
  { name: "Google Gemini & AI Mode", note: "Native checkout in Google Search AI Mode and the Gemini app via UCP." },
  { name: "Microsoft Copilot", note: "Copilot Checkout, where shoppers are far more likely to complete a purchase." },
  { name: "Perplexity", note: "AI answer engine with shopping built in, surfacing products in responses." },
  { name: "Shop app", note: "Shopify's own AI-assisted shopping surface for millions of buyers." },
];

const OFFERINGS = [
  { title: "Agent-Readiness Audit", body: "We assess how your products show up across AI assistants today, benchmark against competitors, and map the gaps holding you back." },
  { title: "Generative Engine Optimization (GEO)", body: "We enrich your product titles, descriptions, and attributes with the factual detail AI agents need to read, trust, and recommend you." },
  { title: "Structured Data & Schema", body: "Product, offer, and review schema with GTIN and MPN identifiers so AI agents verify price, availability, and specs with certainty." },
  { title: "Product Feeds & Catalog Hygiene", body: "Clean, complete Google Merchant Center and Shopify Catalog feeds so nothing keeps your products out of the surfaces AI shopping pulls from." },
  { title: "Agentic Storefronts Setup", body: "We configure Agentic Storefronts and your per-channel settings so you appear where you want across ChatGPT, Gemini, Copilot, Perplexity, and Shop." },
  { title: "Knowledge Base & Brand Control", body: "We set up Shopify's Knowledge Base and Catalog Mapping so AI assistants describe your brand, policies, and FAQs the way you intend." },
  { title: "UCP & ACP Coverage", body: "We make sure you are ready for both the Universal Commerce Protocol and the Agentic Commerce Protocol, so you never lose a channel's traffic." },
  { title: "Monitoring & Optimization", body: "We track channel attribution and AI visibility, then keep refining your data so AI agents keep choosing you as the landscape shifts." },
];

const PROCESS = [
  { step: "01.", title: "Audit", desc: "We benchmark how your products show up across AI assistants today, how competitors appear, and exactly where your data is letting you down. You get a written agent-readiness report before any work starts." },
  { step: "02.", title: "Plan", desc: "We map the structured data, schema, feeds, and content changes your catalog needs, prioritized by impact. You sign off before work begins." },
  { step: "03.", title: "Optimize", desc: "We enrich your product data and add product, offer, and review schema with GTIN identifiers, then clean your feeds so AI agents can read and trust every listing." },
  { step: "04.", title: "Enable", desc: "We configure Agentic Storefronts and your per-channel settings across ChatGPT, Gemini, Copilot, Perplexity, and Shop, ready for both UCP and ACP." },
  { step: "05.", title: "Monitor & Grow", desc: "We track channel attribution and your AI visibility, then keep refining your data so AI agents keep choosing you as the landscape shifts." },
];

const BEST_FOR = [
  "You sell physical products on Shopify, or want to via the Agentic Plan",
  "You want to be discoverable as AI shopping grows",
  "Your product data is thin, inconsistent, or incomplete",
  "You take SEO and organic growth seriously",
];
const NOT_FOR = [
  "You have no products live yet (start with a store build first)",
  "You are not selling to US shoppers (the agentic rollout is US-first for now)",
  "You want guaranteed AI checkout volume today (discovery is the near-term win)",
];

const FAQS = [
  { question: "What is Shopify agentic commerce?", answer: "Agentic commerce is when AI assistants like ChatGPT, Google Gemini, Microsoft Copilot, and Perplexity discover, compare, and buy products for shoppers inside the conversation. Shopify's Agentic Storefronts connect your products to those AI platforms so customers can find and buy from you without visiting your site." },
  { question: "Is my Shopify store already in ChatGPT?", answer: "Probably yes. Shopify turned on Agentic Storefronts by default for eligible stores, so your products may already be discoverable in ChatGPT and other AI channels. But being listed is not the same as being chosen. Most stores have product data that AI agents struggle to read, so they get passed over. That gap is what we close." },
  { question: "What is GEO and how is it different from SEO?", answer: "GEO, or Generative Engine Optimization, is the practice of optimizing your product data so AI agents pick your products. Traditional SEO optimizes pages to rank in Google's links. GEO optimizes structured data, schema, and feeds so AI assistants can read, trust, and recommend you. With AI shopping, your data is the product." },
  { question: "Which AI channels can my products appear in?", answer: "Through Shopify's Agentic Storefronts and Catalog, your products can surface in ChatGPT, Google Gemini and AI Mode, Microsoft Copilot, Perplexity, and the Shop app, all managed from one place in your Shopify admin." },
  { question: "What is the difference between UCP and ACP?", answer: "They are the two open standards for AI shopping. UCP (Universal Commerce Protocol) was built by Google, Shopify, and Walmart and covers the full journey. ACP (Agentic Commerce Protocol) was built by OpenAI and Stripe and powers ChatGPT. You want to be ready for both, because supporting only one means losing the other's traffic." },
  { question: "Do I need Shopify Plus for agentic commerce?", answer: "No. Agentic Storefronts work across Shopify plans for eligible stores. If you sell on another platform, Shopify's Agentic Plan lets you list in the Shopify Catalog and sell through AI channels without a full Shopify store." },
  { question: "What does agentic commerce cost?", answer: "Getting discovered through Agentic Storefronts has no added Shopify fee beyond standard payment processing. AI checkout fees vary by channel. Our work is the optimization that makes AI agents choose you, scoped per project after an audit." },
  { question: "How long does it take to get agent-ready?", answer: "Most stores see a meaningful data and catalog cleanup in two to four weeks, with ongoing optimization after that. We start with an agent-readiness audit so you know exactly where you stand before any work begins." },
  { question: "How do I measure results?", answer: "Shopify reports channel attribution, showing which AI platform drove each sale, and you can search for your own products across the AI assistants to see how you show up. We set up tracking and monitor your visibility and AI-driven orders over time." },
];

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Shopify Agentic Commerce", item: CANONICAL_URL },
  ],
};
const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
};

function Check() {
  return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="11" fill="rgba(61,199,122,0.15)" /><path d="M7 12.5l3.2 3.2L17 9" stroke="#2A9555" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
}
function Cross() {
  return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.08)" /><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="rgba(255,255,255,0.55)" strokeWidth="2.2" strokeLinecap="round" /></svg>);
}
function Spark() {
  return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" stroke="#2A9555" strokeWidth="1.6" strokeLinejoin="round" /></svg>);
}
function Arrow() {
  return (<svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>);
}

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />

      {/* 1. Hero (dark, 2-col) - ported from the analytics & tracking page */}
      <section className="std-hero" style={{ background: "#000000" }} aria-label="Shopify agentic commerce hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Shopify Agentic Commerce Agency</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: "#fff", fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Get Your Products Found and{" "}
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Bought by AI
              </span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              AI assistants like ChatGPT, Gemini, and Copilot now discover, compare, and buy products for shoppers. Most Shopify stores are already in the catalog, but almost none are optimized to win. We make yours agent-ready so AI agents find, trust, and recommend you.
            </p>
            <div className="std-hero-stats">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="std-hero-stat-item">
                  <span className="std-hero-stat-num">{s.value}</span>
                  <span className="std-hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <span className="group inline-flex p-[2px] rounded-full mt-8" style={{ background: GRADIENT }}>
              <Link
                href="/free-shopify-store-audit"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Get an Agent-Readiness Audit</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>

          <div className="sat-hero-img-wrap">
            <video
              src="/images/Shopify%20Agentic%20Commerce.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Shopify products surfacing inside AI assistants like ChatGPT and Gemini"
              className="sat-hero-img"
              style={{ width: "auto", height: "auto", maxHeight: "480px", maxWidth: "100%", borderRadius: "16px", display: "block", margin: "0 auto" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/shopify-iccon-black.webp"
              alt="Shopify"
              className="ac-hero-shopify-icon"
              style={{ position: "absolute", right: "3%", top: "56%", width: "98px", height: "98px", objectFit: "contain", filter: "drop-shadow(0 0 10px rgba(255,255,255,0.12))" }}
            />
          </div>
        </div>
      </section>

      {/* Trust strip - logo marquee (ported from the analytics page) */}
      <section className="std-trust" style={{ background: "#fff" }} aria-label="Brands that trust Ecomm Wizards">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: "#000", fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            700+ Shopify Stores Built. Here&apos;s Who Trusts Us.
          </h2>
          <p className="text-center" style={{ color: "#334155", fontSize: 16, lineHeight: "26px", margin: "10px 0 0" }}>
            From DTC startups to global brands. The same team that ships award-winning Shopify stores gets your products ready to win in AI search.
          </p>
          <div className="std-trust-carousel" style={{ marginTop: 20, width: "100%", overflow: "hidden" }}>
            <div className="sat-trust-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
                <div key={i} className="std-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src} alt={i < TRUST_LOGOS.length ? l.alt : ""} className="std-trust-logo" width={200} height={80} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. What is agentic commerce */}
      <section className="ac-sec ac-white">
        <div className="ac-wrap ac-two">
          <div>
            <span className="ac-eyebrow">What it is</span>
            <h2 className="ac-h2">What is agentic commerce?</h2>
            <p className="ac-p">Agentic commerce is a new way to shop where AI agents handle the whole journey, from discovery to checkout, inside a conversation. A chatbot that recommends a moisturizer is conversational commerce. An AI that queries multiple brands, compares ingredients and prices, and buys the best option for you is agentic commerce.</p>
            <p className="ac-p">The shopper asks an AI assistant, the agent searches connected product catalogs, presents a short list, and the shopper buys right there in the chat. The order flows into your Shopify admin with attribution showing which AI channel drove the sale. Your storefront is no longer the front door, your product data is.</p>
          </div>
          <div className="ac-card-box">
            <p className="ac-box-title">The shift in one line</p>
            <ul className="ac-checklist">
              <li><Check /><span>Shoppers describe what they want in plain language</span></li>
              <li><Check /><span>AI agents compare products across many stores</span></li>
              <li><Check /><span>The agent picks and buys, often without a site visit</span></li>
              <li><Check /><span>You win only if the AI can read and trust your data</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Where your products show up */}
      <section className="ac-sec ac-cream">
        <div className="ac-wrap">
          <div className="ac-head">
            <span className="ac-eyebrow">Reach</span>
            <h2 className="ac-h2">Where your products show up</h2>
            <p className="ac-lead">One setup in Shopify, syndicated to every major AI shopping surface.</p>
          </div>
          <div className="ac-grid-5">
            {CHANNELS.map((c) => (
              <div key={c.name} className="ac-channel">
                <span className="ac-channel-ic"><Spark /></span>
                <h3 className="ac-channel-name">{c.name}</h3>
                <p className="ac-channel-note">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why now / opportunity */}
      <section className="ac-sec ac-dark">
        <div className="ac-wrap">
          <div className="ac-head">
            <span className="ac-eyebrow ac-eyebrow-dark">Why now</span>
            <h2 className="ac-h2 ac-h2-dark">The window is open, and most stores are unprepared</h2>
            <p className="ac-lead ac-lead-dark">Agentic Storefronts are on by default, so your products are likely already discoverable. The brands that optimize their data first will win the recommendation before the rest catch up.</p>
          </div>
          <div className="ac-grid-3">
            {[
              { v: "$3–5T", l: "Global agentic commerce by 2030 (McKinsey)" },
              { v: "64%", l: "Of shoppers likely to buy with AI (84% of 18–24s)" },
              { v: "15×", l: "Growth in AI-driven orders during 2025" },
            ].map((s) => (
              <div key={s.l} className="ac-stat-card">
                <span className="ac-stat-card-val" style={GRADIENT_TEXT}>{s.v}</span>
                <span className="ac-stat-card-label">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SEO vs GEO */}
      <section className="ac-sec ac-white">
        <div className="ac-wrap">
          <div className="ac-head">
            <span className="ac-eyebrow">The new playbook</span>
            <h2 className="ac-h2">SEO vs GEO</h2>
            <p className="ac-lead">Traditional SEO gets you the click. Generative Engine Optimization gets the AI to pick you.</p>
          </div>
          <div className="ac-two ac-compare">
            <div className="ac-compare-col">
              <p className="ac-compare-h">Traditional SEO</p>
              <ul className="ac-compare-list">
                <li>Optimizes pages to rank in Google's links</li>
                <li>Goal: earn the click to your site</li>
                <li>Keywords, backlinks, content</li>
                <li>The shopper browses and decides on your store</li>
              </ul>
            </div>
            <div className="ac-compare-col ac-compare-col-geo">
              <p className="ac-compare-h ac-compare-h-geo">Generative Engine Optimization</p>
              <ul className="ac-compare-list">
                <li>Optimizes product data for AI agents</li>
                <li>Goal: get the AI to pick and buy your product</li>
                <li>Structured data, schema, feeds, factual specs</li>
                <li>The AI reads your data and decides, often with no site visit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. What good looks like */}
      <section className="ac-sec ac-cream">
        <div className="ac-wrap">
          <div className="ac-head">
            <span className="ac-eyebrow">The difference</span>
            <h2 className="ac-h2">What good looks like</h2>
            <p className="ac-lead">Same product, two listings. AI agents skip the first and recommend the second.</p>
          </div>
          <div className="ac-two">
            <div className="ac-list-bad">
              <p className="ac-list-tag ac-tag-bad">Invisible to AI</p>
              <p className="ac-list-title">&ldquo;Blue Shirt M/L&rdquo;</p>
              <ul className="ac-mini">
                <li>No material, fit, or use case</li>
                <li>No schema or product identifiers</li>
                <li>Thin, vague description</li>
                <li>No reviews or Q&amp;A</li>
              </ul>
            </div>
            <div className="ac-list-good">
              <p className="ac-list-tag ac-tag-good">Agent-ready</p>
              <p className="ac-list-title">&ldquo;Men's Organic Cotton Crew T-Shirt, Regular Fit, Navy&rdquo;</p>
              <ul className="ac-mini">
                <li>Material, fit, care, sizing, and use case</li>
                <li>Product, offer, and review schema with GTIN</li>
                <li>Clear, factual, complete description</li>
                <li>Verified reviews and answered questions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. What we do (services accordion ported from the analytics page) */}
      <section className="std-solutions" style={{ background: "#fff" }} aria-label="Shopify agentic commerce services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label">What&apos;s Included</span>
            <h2 style={{ color: "#000", fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              Everything We Do to Make You Agent-Ready
            </h2>
            <p className="mt-5" style={{ color: "#334155", fontSize: 16, lineHeight: "28px" }}>
              Every engagement covers an agent-readiness audit, structured data and schema, feed and catalog cleanup, channel setup, and ongoing monitoring. We do not hand over work we haven&apos;t validated against the AI assistants.
            </p>
            <Link href="/free-shopify-store-audit" className="std-cta-sol mt-8">
              Get an Agent-Readiness Audit
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <AgenticAccordion items={OFFERINGS} />
        </div>
      </section>

      {/* 9. Proof / See it in action */}
      <section className="ac-sec ac-cream">
        <div className="ac-wrap">
          <div className="ac-head">
            <span className="ac-eyebrow">See it in action</span>
            <h2 className="ac-h2">Products winning inside AI assistants</h2>
            <p className="ac-lead">Real examples of optimized products surfacing and selling across AI shopping channels.</p>
          </div>
          <div className="ac-shots">
            {["/images/results%20image%201.png", "/images/results%20image%202.png"].map((src, i) => (
              <div key={src} className="ac-shot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Shopify product result inside an AI assistant, example ${i + 1}`} className="ac-shot-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Is this right for you */}
      <section className="ac-sec ac-dark">
        <div className="ac-wrap">
          <div className="ac-head">
            <span className="ac-eyebrow ac-eyebrow-dark">Fit</span>
            <h2 className="ac-h2 ac-h2-dark">Is agentic commerce right for you?</h2>
          </div>
          <div className="ac-two">
            <div className="ac-fit ac-fit-yes">
              <p className="ac-fit-h">A strong fit if</p>
              <ul className="ac-fit-list">
                {BEST_FOR.map((b) => (<li key={b}><Check /><span>{b}</span></li>))}
              </ul>
            </div>
            <div className="ac-fit ac-fit-no">
              <p className="ac-fit-h">Not yet if</p>
              <ul className="ac-fit-list">
                {NOT_FOR.map((b) => (<li key={b}><Cross /><span>{b}</span></li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Process (ported from the analytics page, 5 steps) */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: "#fff", padding: "53px 20px" }} aria-label="Our Shopify agentic commerce process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] md:max-lg:py-[20px] lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: "#FBF7ED", borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            How Our Shopify Agentic Commerce Process Works
          </h2>
          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            Five steps from invisible to AI to winning the recommendation.
            <br className="hidden sm:block lg:hidden" />{" "}
            Most projects complete in 2 to 4 weeks.
          </p>

          {/* Row 1 - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {PROCESS.slice(0, 3).map(({ step, title, desc }) => (
              <div key={step} className="p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]" style={{ background: "#FFFFFF", borderRadius: "16px", boxSizing: "border-box" }}>
                <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{step}</p>
                <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2 - 2 cards centred */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[20px] max-sm:!max-w-full md:max-lg:mt-[16px] md:max-lg:!max-w-[428px]"
            style={{ maxWidth: "calc(66.667% - 7px)", marginLeft: "auto", marginRight: "auto", width: "100%" }}
          >
            {PROCESS.slice(3).map(({ step, title, desc }) => (
              <div key={step} className="p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]" style={{ background: "#FFFFFF", borderRadius: "16px", boxSizing: "border-box" }}>
                <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{step}</p>
                <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven results (CaseStudySlider), moved below the process section */}
      <section className="ssd-results-section" style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif", padding: "60px 20px" }}>
        <div className="ssd-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="ssd-results-heading">A proven team behind the results</h2>
          <p className="ssd-results-desc">We have built 700+ Shopify stores and generated $900M+ in revenue across 8+ years and 9+ industry awards. The same team gets your products agent-ready for the AI shopping era.</p>
          <CaseStudySlider slides={AC_SLIDES} intervalMs={6000} showDots />
        </div>
      </section>

      {/* 12. FAQ */}
      <FAQSection title="Shopify Agentic Commerce FAQs" faqs={FAQS} />

      {/* 13. CTA */}
      <CTASection
        heading="Win the AI shopping shift before your competitors do"
        subheading="Get an agent-readiness audit and see exactly where your products stand across AI assistants today."
        background="#000"
        primaryWhite
        secondaryGradient
      />
    </>
  );
}

const CSS = `
.ac-wrap{max-width:1200px;margin:0 auto;padding:0 20px}
.ac-h1{font-family:'Poppins',sans-serif;font-weight:700;color:#fff;line-height:1.1;letter-spacing:-0.02em;font-size:clamp(34px,5vw,56px);margin:0 0 20px}
.ac-h2{font-family:'Poppins',sans-serif;font-weight:700;color:#0f172a;line-height:1.18;font-size:clamp(26px,3.4vw,38px);margin:0 0 14px}
.ac-h2-dark{color:#fff}
.ac-p{font-family:'Poppins',sans-serif;font-size:16px;line-height:1.7;color:#475569;margin:0 0 16px;max-width:620px}
.ac-eyebrow{display:inline-block;font-family:'Poppins',sans-serif;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#2A9555;margin-bottom:12px}
.ac-eyebrow-dark{color:#61ce70}
.ac-lead{font-family:'Poppins',sans-serif;font-size:17px;line-height:1.6;color:#64748b;margin:0;max-width:680px}
.ac-lead-dark{color:rgba(255,255,255,0.7)}
.ac-sec{padding:72px 0}
.ac-white{background:#fff}
.ac-cream{background:#FBF7ED}
.ac-dark{background:#000}
.ac-head{margin-bottom:40px;max-width:760px}

/* Hero (ported from the analytics & tracking page) */
.std-badge{display:inline-block;padding:6px 16px;background:rgba(97,206,112,0.12);border:1px solid rgba(97,206,112,0.3);border-radius:999px;color:#61ce70;font-size:13px;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
.std-hero-stats{display:flex;flex-wrap:nowrap;gap:0;margin-top:32px;border-top:1px solid rgba(255,255,255,0.12);padding-top:24px}
.std-hero-stat-item{display:flex;flex-direction:column;gap:4px;padding:0 22px 0 0;margin-right:22px;border-right:1px solid rgba(255,255,255,0.12);white-space:nowrap}
.std-hero-stat-item:last-child{border-right:none;padding-right:0;margin-right:0}
.std-hero-stat-num{font-size:28px;font-weight:800;line-height:1;background:var(--brand-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.std-hero-stat-label{font-size:13px;font-weight:500;color:#fff;letter-spacing:.02em}
.sat-hero-img-wrap{display:flex;align-items:center;justify-content:center;position:relative}
.sat-hero-img{width:100%;height:auto;border-radius:16px;display:block;box-shadow:0 24px 64px rgba(0,0,0,0.45)}
@media (min-width:1025px) and (max-width:1307px){.std-hero-stats{flex-wrap:nowrap!important}.std-hero-stat-item{padding-right:18px!important;margin-right:18px!important}.std-hero-stat-num{font-size:24px!important}.std-hero-stat-label{font-size:12px!important}}
@media (max-width:1024px){.std-hero-h1{font-size:40px!important}.std-hero-inner{padding:60px 20px!important}.std-hero-p{margin-top:16px!important}.std-hero-stats{flex-wrap:nowrap!important;margin-top:16px!important;padding-top:16px!important}.std-hero-stat-item{padding-right:16px!important;margin-right:16px!important}.sat-hero-img-wrap{margin-top:8px}}
@media (max-width:640px){.std-hero-h1{font-size:28px!important;line-height:1.22!important}.std-hero-p{font-size:14px!important;line-height:24px!important}.std-hero-stats{gap:8px 0;margin-top:24px;padding-top:18px;flex-wrap:wrap!important}.std-hero-stat-item{width:50%;padding-right:16px;margin-right:0}.sat-hero-img{border-radius:10px}}

/* Trust strip - logo marquee (ported from analytics page) */
.std-trust-carousel{overflow:hidden;position:relative}
.sat-trust-track{display:flex;align-items:center;gap:80px;width:max-content;animation:satTrustScroll 32s linear infinite}
.std-trust-carousel:hover .sat-trust-track{animation-play-state:paused}
@keyframes satTrustScroll{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
.std-trust-slide{flex-shrink:0;display:flex;align-items:center;justify-content:center}
.std-trust-logo{height:46px;width:auto;max-width:170px;object-fit:contain;opacity:.85}
@media (max-width:640px){.sat-trust-track{gap:48px!important}.std-trust-logo{height:38px}.std-trust-h2{font-size:22px!important}}

/* Services / solutions section (ported from analytics page) */
.std-label{font-size:13px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#334155}
.std-cta-sol{position:relative;display:inline-flex;align-items:center;gap:12px;background:#000;color:#fff;font-family:'Poppins',sans-serif;font-weight:600;font-size:16px;border-radius:50px;padding:20px 45px;text-decoration:none;line-height:1;transition:color .25s ease}
.std-cta-sol::before{content:'';position:absolute;inset:0;border-radius:50px;padding:2px;background:linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%);-webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);-webkit-mask-composite:destination-out;mask-composite:exclude;opacity:0;transition:opacity .25s ease;pointer-events:none}
.std-cta-sol:hover::before{opacity:1}
.std-cta-sol:visited,.std-cta-sol:focus,.std-cta-sol:active{color:#fff;text-decoration:none}
.std-acc-item{border-top:1px solid rgba(17,17,17,.14)}
.std-acc-item:last-child{border-bottom:1px solid rgba(17,17,17,.14)}
.std-acc-icon{flex:0 0 18px;color:#000;transition:transform .3s ease}
.std-acc-icon--open{transform:rotate(180deg)}
@media (max-width:1024px){.std-solutions h2{font-size:38px!important}.std-solutions-grid{grid-template-columns:1fr 1.1fr!important;gap:40px!important}}
@media (max-width:768px){.std-solutions h2{font-size:36px!important}.std-solutions-grid{gap:24px!important}}
@media (max-width:640px){.std-solutions>div{padding:40px 18px!important}.std-solutions-grid{grid-template-columns:1fr!important}.std-solutions-left{position:static!important}.std-solutions h2{font-size:26px!important;line-height:1.28!important}.std-cta-sol{margin-top:16px!important}}

/* Two-col */
.ac-two{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
.ac-card-box{background:#fff;border:1px solid #e8ecf1;border-radius:18px;padding:28px;box-shadow:0 10px 40px rgba(0,0,0,0.05)}
.ac-box-title{font-family:'Poppins',sans-serif;font-weight:700;font-size:16px;color:#0f172a;margin:0 0 16px}
.ac-checklist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px}
.ac-checklist li{display:flex;gap:12px;align-items:flex-start;font-family:'Poppins',sans-serif;font-size:15px;color:#334155;line-height:1.5}

/* Channels */
.ac-grid-5{display:grid;grid-template-columns:repeat(5,1fr);gap:16px}
.ac-channel{background:#fff;border:1px solid #ece3d0;border-radius:14px;padding:22px}
.ac-channel-ic{display:inline-flex;width:42px;height:42px;border-radius:11px;background:#E8F5EC;align-items:center;justify-content:center;margin-bottom:14px}
.ac-channel-name{font-family:'Poppins',sans-serif;font-size:16px;font-weight:600;color:#0f172a;margin:0 0 8px;line-height:1.3}
.ac-channel-note{font-family:'Poppins',sans-serif;font-size:13px;color:#64748b;line-height:1.55;margin:0}

/* Stat cards */
.ac-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.ac-stat-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:30px 26px;text-align:center}
.ac-stat-card-val{display:block;font-family:'Poppins',sans-serif;font-weight:800;font-size:44px;line-height:1;margin-bottom:12px}
.ac-stat-card-label{font-family:'Poppins',sans-serif;font-size:14px;color:rgba(255,255,255,0.7);line-height:1.5}

/* Compare */
.ac-compare-col{border:1px solid #e8ecf1;border-radius:16px;padding:28px;background:#fff}
.ac-compare-col-geo{border-color:#2A9555;box-shadow:0 10px 40px rgba(42,149,85,0.08)}
.ac-compare-h{font-family:'Poppins',sans-serif;font-weight:700;font-size:18px;color:#0f172a;margin:0 0 16px}
.ac-compare-h-geo{color:#2A9555}
.ac-compare-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px}
.ac-compare-list li{font-family:'Poppins',sans-serif;font-size:15px;color:#475569;line-height:1.55;padding-left:18px;position:relative}
.ac-compare-list li:before{content:"";position:absolute;left:0;top:9px;width:7px;height:7px;border-radius:50%;background:#cbd5e1}
.ac-compare-col-geo .ac-compare-list li:before{background:#2A9555}

/* What good looks like */
.ac-list-bad,.ac-list-good{border-radius:16px;padding:26px}
.ac-list-bad{background:#fff;border:1px solid #eadfce}
.ac-list-good{background:#fff;border:1px solid #2A9555;box-shadow:0 10px 40px rgba(42,149,85,0.08)}
.ac-list-tag{display:inline-block;font-family:'Poppins',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;padding:4px 12px;border-radius:9999px;margin-bottom:14px}
.ac-tag-bad{background:#f1f0ec;color:#94a3b8}
.ac-tag-good{background:#E8F5EC;color:#2A9555}
.ac-list-title{font-family:'Poppins',sans-serif;font-weight:700;font-size:18px;color:#0f172a;margin:0 0 16px;line-height:1.35}
.ac-mini{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}
.ac-mini li{font-family:'Poppins',sans-serif;font-size:14px;color:#475569;line-height:1.5}

/* Offerings */
.ac-grid-offer{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.ac-offer{border:1px solid #e8ecf1;border-radius:14px;padding:24px;background:#fff;transition:border-color .18s ease,box-shadow .18s ease,transform .18s ease}
.ac-offer:hover{border-color:#2A9555;box-shadow:0 8px 28px rgba(0,0,0,0.07);transform:translateY(-3px)}
.ac-offer-ic{display:inline-flex;width:42px;height:42px;border-radius:11px;background:#E8F5EC;align-items:center;justify-content:center;margin-bottom:14px}
.ac-offer-title{font-family:'Poppins',sans-serif;font-size:16px;font-weight:600;color:#0f172a;margin:0 0 8px;line-height:1.3}
.ac-offer-body{font-family:'Poppins',sans-serif;font-size:14px;color:#64748b;line-height:1.55;margin:0}

/* Proof */
.ac-shots{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;max-width:1000px;margin:0 auto}
.ac-shot{background:#fff;border:1px solid #ece3d0;border-radius:16px;overflow:hidden;box-shadow:0 16px 48px rgba(0,0,0,0.08)}
.ac-shot-img{width:100%;height:auto;display:block}
@media (max-width:760px){.ac-shots{grid-template-columns:1fr}}

/* Fit */
.ac-fit{border-radius:16px;padding:28px}
.ac-fit-yes{background:rgba(61,199,122,0.08);border:1px solid rgba(61,199,122,0.25)}
.ac-fit-no{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)}
.ac-fit-h{font-family:'Poppins',sans-serif;font-weight:700;font-size:17px;color:#fff;margin:0 0 18px}
.ac-fit-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px}
.ac-fit-list li{display:flex;gap:12px;align-items:flex-start;font-family:'Poppins',sans-serif;font-size:15px;color:rgba(255,255,255,0.82);line-height:1.5}

/* (process section now uses analytics-style cards: Tailwind + inline) */

@media (max-width:1000px){
  .ac-grid-5{grid-template-columns:repeat(2,1fr)}
  .ac-grid-offer{grid-template-columns:repeat(2,1fr)}
  .ac-grid-4{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:760px){
  .ac-two{grid-template-columns:1fr}
  .ac-grid-3{grid-template-columns:1fr}
  .ac-sec{padding:52px 0}
  .ac-head{margin-bottom:30px}
}
@media (max-width:540px){
  .ac-grid-5{grid-template-columns:1fr}
  .ac-grid-offer{grid-template-columns:1fr}
  .ac-grid-4{grid-template-columns:1fr}
  .ac-hero-stat-label{max-width:130px}
}
`;
