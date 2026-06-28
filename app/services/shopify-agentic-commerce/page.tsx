import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ogImage } from "@/lib/og";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/ui/CTASection";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";

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
  { n: "01", title: "Audit", body: "We benchmark how your products show up across AI assistants today and pinpoint the gaps." },
  { n: "02", title: "Optimize", body: "We enrich your product data, schema, and feeds for Generative Engine Optimization." },
  { n: "03", title: "Enable", body: "We configure Agentic Storefronts and channel settings across ChatGPT, Gemini, Copilot, Perplexity, and Shop." },
  { n: "04", title: "Monitor & grow", body: "We track attribution and AI visibility and keep optimizing as the protocols evolve." },
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

      {/* 1. Hero (dark, 2-col) — ported from the analytics & tracking page */}
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
            <Image
              src="/images/migration-shopify-right-image.webp"
              alt="Shopify products surfacing inside AI assistants like ChatGPT and Gemini"
              width={640}
              height={480}
              priority
              className="sat-hero-img"
              style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Trust strip — logo marquee (ported from the analytics page) */}
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

      {/* 2. Proven results (reused CaseStudySlider) */}
      <section className="ssd-results-section" style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif", padding: "60px 20px" }}>
        <div className="ssd-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="ssd-results-heading">A proven team behind the results</h2>
          <p className="ssd-results-desc">We have built 700+ Shopify stores and generated $900M+ in revenue across 8+ years and 9+ industry awards. The same team gets your products agent-ready for the AI shopping era.</p>
          <CaseStudySlider slides={AC_SLIDES} intervalMs={6000} showDots />
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

      {/* 8. What we do */}
      <section className="ac-sec ac-white">
        <div className="ac-wrap">
          <div className="ac-head">
            <span className="ac-eyebrow">What we do</span>
            <h2 className="ac-h2">How we make your store agent-ready</h2>
            <p className="ac-lead">End to end, from audit to ongoing optimization, so AI agents find, trust, and recommend you.</p>
          </div>
          <div className="ac-grid-offer">
            {OFFERINGS.map((o) => (
              <div key={o.title} className="ac-offer">
                <span className="ac-offer-ic"><Spark /></span>
                <h3 className="ac-offer-title">{o.title}</h3>
                <p className="ac-offer-body">{o.body}</p>
              </div>
            ))}
          </div>
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
          <div className="ac-grid-3">
            {["ChatGPT result", "Gemini AI Mode", "Copilot Checkout"].map((cap) => (
              <div key={cap} className="ac-shot">
                <div className="ac-shot-ph"><Spark /><span>Screenshot coming soon</span></div>
                <p className="ac-shot-cap">{cap}</p>
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

      {/* 11. Process */}
      <section className="ac-sec ac-white">
        <div className="ac-wrap">
          <div className="ac-head">
            <span className="ac-eyebrow">How it works</span>
            <h2 className="ac-h2">Our agent-readiness process</h2>
          </div>
          <div className="ac-grid-4">
            {PROCESS.map((p) => (
              <div key={p.n} className="ac-step">
                <span className="ac-step-n" style={GRADIENT_TEXT}>{p.n}</span>
                <h3 className="ac-step-title">{p.title}</h3>
                <p className="ac-step-body">{p.body}</p>
              </div>
            ))}
          </div>
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
.sat-hero-img-wrap{display:flex;align-items:center;justify-content:center}
.sat-hero-img{width:100%;height:auto;border-radius:16px;display:block;box-shadow:0 24px 64px rgba(0,0,0,0.45)}
@media (min-width:1025px) and (max-width:1307px){.std-hero-stats{flex-wrap:nowrap!important}.std-hero-stat-item{padding-right:18px!important;margin-right:18px!important}.std-hero-stat-num{font-size:24px!important}.std-hero-stat-label{font-size:12px!important}}
@media (max-width:1024px){.std-hero-h1{font-size:40px!important}.std-hero-inner{padding:60px 20px!important}.std-hero-p{margin-top:16px!important}.std-hero-stats{flex-wrap:nowrap!important;margin-top:16px!important;padding-top:16px!important}.std-hero-stat-item{padding-right:16px!important;margin-right:16px!important}.sat-hero-img-wrap{margin-top:8px}}
@media (max-width:640px){.std-hero-h1{font-size:28px!important;line-height:1.22!important}.std-hero-p{font-size:14px!important;line-height:24px!important}.std-hero-stats{gap:8px 0;margin-top:24px;padding-top:18px;flex-wrap:wrap!important}.std-hero-stat-item{width:50%;padding-right:16px;margin-right:0}.sat-hero-img{border-radius:10px}}

/* Trust strip — logo marquee (ported from analytics page) */
.std-trust-carousel{overflow:hidden;position:relative}
.sat-trust-track{display:flex;align-items:center;gap:80px;width:max-content;animation:satTrustScroll 32s linear infinite}
.std-trust-carousel:hover .sat-trust-track{animation-play-state:paused}
@keyframes satTrustScroll{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
.std-trust-slide{flex-shrink:0;display:flex;align-items:center;justify-content:center}
.std-trust-logo{height:46px;width:auto;max-width:170px;object-fit:contain;opacity:.85}
@media (max-width:640px){.sat-trust-track{gap:48px!important}.std-trust-logo{height:38px}.std-trust-h2{font-size:22px!important}}

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
.ac-shot{background:#fff;border:1px solid #ece3d0;border-radius:16px;overflow:hidden}
.ac-shot-ph{aspect-ratio:16/11;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:linear-gradient(135deg,#f4f7f5,#eef5ef);color:#94a3b8;font-family:'Poppins',sans-serif;font-size:13px}
.ac-shot-cap{font-family:'Poppins',sans-serif;font-size:14px;font-weight:600;color:#0f172a;text-align:center;padding:14px;margin:0}

/* Fit */
.ac-fit{border-radius:16px;padding:28px}
.ac-fit-yes{background:rgba(61,199,122,0.08);border:1px solid rgba(61,199,122,0.25)}
.ac-fit-no{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)}
.ac-fit-h{font-family:'Poppins',sans-serif;font-weight:700;font-size:17px;color:#fff;margin:0 0 18px}
.ac-fit-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px}
.ac-fit-list li{display:flex;gap:12px;align-items:flex-start;font-family:'Poppins',sans-serif;font-size:15px;color:rgba(255,255,255,0.82);line-height:1.5}

/* Process */
.ac-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.ac-step{border-top:2px solid #e8ecf1;padding-top:20px}
.ac-step-n{font-family:'Poppins',sans-serif;font-weight:800;font-size:30px;line-height:1;display:block;margin-bottom:12px}
.ac-step-title{font-family:'Poppins',sans-serif;font-size:18px;font-weight:600;color:#0f172a;margin:0 0 8px}
.ac-step-body{font-family:'Poppins',sans-serif;font-size:14px;color:#64748b;line-height:1.55;margin:0}

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
