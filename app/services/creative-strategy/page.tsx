import type { Metadata } from "next";
import Link from "next/link";
import { ogImage } from "@/lib/og";
import FAQSection from "@/components/FAQSection";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import ServiceSchema from "@/components/seo/ServiceSchema";
import CreativeAuditForm from "./CreativeAuditForm";

const META_DESCRIPTION =
  "Performance ad creative for Shopify brands. We concept, produce, and test scroll-stopping static, video, and UGC ads for Meta and Google that lower CPA and scale ROAS. Get a free creative audit.";
const CANONICAL_URL = "https://ecommwizards.com/services/creative-strategy";
const TITLE = "Shopify Ad Creative Agency | Performance Creative That Converts";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "shopify ad creative",
    "performance creative agency",
    "ecommerce ad creative",
    "meta ad creative agency",
    "ugc ad agency",
    "creative strategy agency",
    "shopify video ads",
    "facebook ad creative agency",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: TITLE,
    description: META_DESCRIPTION,
    images: [{ url: ogImage("Performance Ad Creative"), width: 1200, height: 630, alt: "Shopify Performance Creative Agency by Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: META_DESCRIPTION,
    images: [ogImage("Performance Ad Creative")],
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
const HERO_GLOW = "radial-gradient(60% 55% at 82% 22%, rgba(61,199,122,0.20) 0%, rgba(61,199,122,0.06) 45%, transparent 70%), #000000";

const HERO_STATS = [
  { value: "700+", label: "Stores Built" },
  { value: "$900M+", label: "Revenue Generated" },
  { value: "8+", label: "Years" },
  { value: "9+", label: "Awards" },
];

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

// Hero creative-board tiles (placeholder previews; swap in real ad creative later)
const BOARD_TILES = [
  { label: "Static ad", video: false },
  { label: "Video ad", video: true },
  { label: "UGC", video: false },
  { label: "Carousel", video: false },
];

const FUNNEL = [
  { step: "Awareness", title: "Stop the scroll", body: "Bold hooks, pattern interrupts, and thumb-stopping opens that win the first two seconds and earn the view." },
  { step: "Consideration", title: "Build desire", body: "Demos, UGC, social proof, and benefit-led angles that answer objections and move a browser toward the buy." },
  { step: "Conversion", title: "Drive the purchase", body: "Offer-led statics, urgency, and retargeting creative built to close the sale and lift return on ad spend." },
];

// "Show the creative" gallery (placeholder format previews; swap for real ads)
const GALLERY = [
  { label: "Static ad", tag: "Sample", video: false },
  { label: "Video ad", tag: "Sample", video: true },
  { label: "UGC", tag: "Sample", video: false },
  { label: "Carousel", tag: "Sample", video: false },
  { label: "Motion / GIF", tag: "Sample", video: true },
  { label: "Story / Reel", tag: "Sample", video: false },
];

function IconStatic() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><rect x="3" y="4" width="18" height="16" rx="2" stroke="#2A9555" strokeWidth="1.8" /><path d="M3 16l5-4 4 3 3-2 6 5" stroke="#2A9555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="8.5" cy="9" r="1.5" fill="#2A9555" /></svg>); }
function IconVideo() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2" stroke="#2A9555" strokeWidth="1.8" /><path d="M10 9l5 3-5 3V9z" fill="#2A9555" /></svg>); }
function IconUGC() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="8" r="3.4" stroke="#2A9555" strokeWidth="1.8" /><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" stroke="#2A9555" strokeWidth="1.8" strokeLinecap="round" /></svg>); }
function IconMotion() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 12c3-6 5-6 8 0s5 6 8 0" stroke="#2A9555" strokeWidth="1.8" strokeLinecap="round" /></svg>); }
function IconPost() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M4 8h10M4 16h6" stroke="#2A9555" strokeWidth="1.8" strokeLinecap="round" /><circle cx="17" cy="8" r="2.4" stroke="#2A9555" strokeWidth="1.8" /><circle cx="13" cy="16" r="2.4" stroke="#2A9555" strokeWidth="1.8" /></svg>); }
function IconTest() { return (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M20 12a8 8 0 1 1-2.3-5.6" stroke="#2A9555" strokeWidth="1.8" strokeLinecap="round" /><path d="M20 4v4h-4" stroke="#2A9555" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>); }

const FORMATS = [
  { icon: <IconStatic />, title: "Static Ads", body: "Scroll-stopping image ads and offer creative, built for every stage of the funnel." },
  { icon: <IconVideo />, title: "Video Ads", body: "Hook-led video for Meta and YouTube, from concept and script to final cut." },
  { icon: <IconUGC />, title: "UGC & Creator Content", body: "Authentic creator and user-style content that converts cold traffic." },
  { icon: <IconMotion />, title: "Motion & GIF", body: "Lightweight animation and motion graphics that lift attention and hold rate." },
  { icon: <IconPost />, title: "Post-Production", body: "Editing, captions, sound, and localization, tuned per platform and placement." },
  { icon: <IconTest />, title: "Creative Testing", body: "Structured testing on hook and hold rate, with constant refreshes before fatigue." },
];

const PROCESS = [
  { step: "01.", title: "Strategy", desc: "We learn your brand, offer, margins, and customer, study what is already winning in your account and your market, then define the angles worth testing." },
  { step: "02.", title: "Audit", desc: "We tear down your current ads and your competitors, find where creative is leaking spend, and map the fastest wins." },
  { step: "03.", title: "Concept", desc: "We write the hooks and scripts and storyboard each angle, mapped to the funnel stage and the metric it needs to move." },
  { step: "04.", title: "Produce", desc: "We build the static, video, UGC, and motion to platform specs, in house, with no templates and no outsourcing." },
  { step: "05.", title: "Test & Scale", desc: "We launch structured tests, read hook rate, hold rate, and CPA, kill the losers fast, then scale the winners before they fatigue." },
];

const BEST_FOR = [
  "You run paid social or search and want better returns on the spend you already have",
  "Your ads have plateaued, fatigued, or stopped scaling",
  "You are scaling spend and need more winning creative, faster",
  "You sell physical products on Shopify, DTC or B2B",
];
const NOT_FOR = [
  { k: "build", t: (<>You have no store or offer live yet (<Link href="/services/shopify-store-development">start with a store build</Link> first)</>) },
  { k: "brand", t: "You want a one-off logo or brand identity (this is ad creative, not branding)" },
  { k: "test", t: "You expect winning ads with no testing budget behind them" },
];

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

const FAQS = [
  { question: "What is performance creative?", answer: "Performance creative is ad creative built, tested, and optimized on real data to move a business number. Not creative that looks good in a deck, creative that lowers your cost per acquisition and scales your return on ad spend. Every concept is tied to a metric and mapped to a stage of the funnel." },
  { question: "Why does ad creative matter so much?", answer: "Targeting is mostly automated now, so the algorithm decides who sees your ads. The one input you still control, and the one that moves CPA and ROAS the most, is the creative. Industry estimates put creative at roughly half of paid ad performance, and when a campaign stops scaling it is almost always the creative that fatigued, not the audience." },
  { question: "What ad formats do you produce?", answer: "Static image ads, hook-led video, UGC and creator content, motion and GIF, and the post-production behind them, editing, captions, sound, and localization. We build to the spec of each platform and placement, and to the job each format needs to do in the funnel." },
  { question: "Do you make UGC and video ads?", answer: "Yes. UGC, creator-style content, and hook-led video are core to what we do. We handle concept, scripting, sourcing, and edit, and we cut multiple variations of each winner so you always have fresh angles to test." },
  { question: "How does creative testing work?", answer: "We launch each concept as a structured test, read hook rate, hold rate, click-through rate, and CPA, then kill the losers quickly and scale the winners. When a winner starts to fatigue, we refresh it before performance drops, so your account never runs dry." },
  { question: "Which platforms do you create for?", answer: "Meta (Facebook and Instagram) and Google are our primary focus, and we also produce for TikTok and YouTube. Creative is built and sized for each platform and placement rather than reused across all of them." },
  { question: "How fast do I get new creative?", answer: "New concepts typically land within days, not weeks, and iterations on a proven winner come faster. We set a cadence with you up front so there is always a steady flow of fresh creative feeding your tests." },
  { question: "Do you manage my ad accounts, or just the creative?", answer: "Our focus is the creative and the creative strategy, the part that moves performance most. We work alongside your media buyer or in-house team, and we read the same performance data they do so every concept is tied to a real result." },
  { question: "What do I need to provide?", answer: "Access to your ad account or its performance data, your product or brand assets, and a short brief on your offer and customer. From there we handle strategy, concept, production, and testing. The free creative audit shows you exactly where to start." },
  { question: "How do we start, and what does it cost?", answer: "Start with a free creative audit. A senior strategist reviews your ads and account by hand and sends a teardown with a prioritized action plan within 48 hours. Scope and pricing are set per engagement after that, based on your volume and goals." },
];

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Creative Strategy", item: CANONICAL_URL },
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
function Arrow() {
  return (<svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>);
}
function Play() {
  return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M8 6l11 6-11 6V6z" fill="#062012" /></svg>);
}

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <ServiceSchema url={CANONICAL_URL} name="Shopify Performance Creative Agency" serviceType="Performance ad creative and creative strategy for ecommerce" description={META_DESCRIPTION} />

      {/* 1. Hero (dark, 2-col) */}
      <section className="std-hero" style={{ background: HERO_GLOW }} aria-label="Shopify performance creative hero">
        <div className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center" style={{ maxWidth: "1320px", padding: "60px 20px" }}>
          <div>
            <span className="std-badge">Shopify Performance Creative Agency</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: "#fff", fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Shopify Ad Creative That Lowers CPA and{" "}
              <span style={GRADIENT_TEXT}>Scales ROAS</span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              Creative is roughly half of your ad performance, and it is the one lever the algorithm hasn&apos;t taken from you. We concept, produce, and test scroll-stopping static, video, and UGC ads for Meta and Google, then kill the losers and scale the winners so your spend keeps compounding.
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
              <a href="#creative-audit" className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}>
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Get my free creative audit</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </a>
            </span>
          </div>

          <div className="sat-hero-img-wrap">
            <div className="cs-board" aria-hidden>
              <div className="cs-board-head">
                <span className="cs-board-dot" />
                <span className="cs-board-dot" style={{ background: "#C8F57A" }} />
                <span className="cs-board-dot" style={{ background: "#4EB771" }} />
                <span className="cs-board-tag">Creative board</span>
              </div>
              <div className="cs-board-grid">
                {BOARD_TILES.map((t) => (
                  <div key={t.label} className="cs-board-tile">
                    {t.video && <span className="cs-tile-play"><Play /></span>}
                    <span className="cs-tile-label">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust strip - logo marquee */}
      <section className="std-trust" style={{ background: "#fff" }} aria-label="Brands that trust Ecomm Wizards">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: "#000", fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            700+ Shopify Stores Built. Trusted by Brands That Scale.
          </h2>
          <p className="text-center" style={{ color: "#334155", fontSize: 16, lineHeight: "26px", margin: "10px 0 0" }}>
            From DTC startups to global names. The same team that ships award-winning Shopify stores builds the creative that sells them.
          </p>
          <div className="std-trust-carousel" style={{ marginTop: 20, width: "100%", overflow: "hidden" }}>
            <div className="sat-trust-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
                <div key={i} className="std-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src} alt={i < TRUST_LOGOS.length ? l.alt : ""} className="std-trust-logo" width={200} height={80} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why creative is the lever */}
      <section className="ac-sec ac-cream">
        <div className="ac-wrap ac-two">
          <div>
            <span className="ac-eyebrow">The real lever</span>
            <h2 className="ac-h2">Creative Is the Biggest Lever You Still Control</h2>
            <p className="ac-p">Targeting is mostly automated now. The algorithm decides who sees your ads, and it is very good at it. The one input you still own, and the one that moves cost per acquisition and return the most, is the creative itself.</p>
            <p className="ac-p">When a winning campaign stops scaling, it is almost always the creative that fatigued, not the audience. Fresh, tested creative is how you break the plateau and keep spending profitably.</p>
          </div>
          <div className="ac-card-col">
            <div className="ac-card-box" style={{ textAlign: "center" }}>
              <span style={{ ...GRADIENT_TEXT, display: "block", fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 64, lineHeight: 1 }}>~50%</span>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: 15, color: "#475569", margin: "10px 0 0", lineHeight: 1.5 }}>of paid ad performance comes down to the creative.</p>
            </div>
            <div className="ac-card-box">
              <p className="ac-box-title">The metrics we move</p>
              <ul className="ac-checklist">
                <li><Check /><span>Thumb-stop and hook rate</span></li>
                <li><Check /><span>Click-through rate</span></li>
                <li><Check /><span>Cost per acquisition (CPA)</span></li>
                <li><Check /><span>Return on ad spend (ROAS and MER)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What is performance creative */}
      <section className="ac-sec ac-white">
        <div className="ac-wrap">
          <div className="ac-head ac-head-wide">
            <span className="ac-eyebrow">The definition</span>
            <h2 className="ac-h2">What Is Performance Creative?</h2>
            <p className="ac-lead">Performance creative is ad creative built, tested, and optimized on real data to move a business number. Not creative that looks good in a deck, creative that lowers your CPA and scales your ROAS. Every concept is tied to a metric and mapped to a stage of the funnel.</p>
          </div>
          <div className="cs-funnel">
            {FUNNEL.map((f) => (
              <div key={f.step} className="cs-funnel-card">
                <p className="cs-funnel-step">{f.step}</p>
                <h3 className="cs-funnel-h">{f.title}</h3>
                <p className="cs-funnel-p">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Show the creative (gallery, placeholders) */}
      <section className="ac-sec ac-cream">
        <div className="ac-wrap">
          <div className="ac-head ac-head-wide">
            <span className="ac-eyebrow">See the work</span>
            <h2 className="ac-h2">The Kind of Creative We Build</h2>
            <p className="ac-lead">Static, video, UGC, and motion, built for the platform and the funnel stage. No templates, no stock, produced by senior strategists.</p>
          </div>
          <div className="cs-gallery">
            {GALLERY.map((g) => (
              <div key={g.label} className="cs-gallery-tile">
                <span className="cs-gallery-tag">{g.tag}</span>
                {g.video && <span className="cs-gallery-play"><Play /></span>}
                <span className="cs-gallery-label">{g.label}</span>
              </div>
            ))}
          </div>
          <p className="cs-note">Sample formats. Your real winning creative lives here once we build it.</p>
        </div>
      </section>

      {/* 6. Before / after (dark) */}
      <section className="ac-sec ac-dark">
        <div className="ac-wrap">
          <div className="ac-head ac-head-wide">
            <span className="ac-eyebrow ac-eyebrow-dark">Proof of method</span>
            <h2 className="ac-h2 ac-h2-dark">What Performance Creative Does to the Numbers</h2>
            <p className="ac-lead ac-lead-dark">Same product, same budget. The difference is the creative and the testing behind it.</p>
          </div>
          <div className="cs-ba">
            <div className="cs-ba-panel">
              <span className="cs-ba-tag cs-ba-tag--before">Before: generic product shot</span>
              <div className="cs-ba-thumb" />
              <div className="cs-ba-metrics">
                <div className="cs-ba-metric"><span className="cs-ba-mlabel">CTR</span><span className="cs-ba-mval">0.8%</span></div>
                <div className="cs-ba-metric"><span className="cs-ba-mlabel">CPA</span><span className="cs-ba-mval">$42</span></div>
                <div className="cs-ba-metric"><span className="cs-ba-mlabel">ROAS</span><span className="cs-ba-mval">1.4x</span></div>
              </div>
            </div>
            <div className="cs-ba-arrow" aria-hidden><Arrow /></div>
            <div className="cs-ba-panel cs-ba-panel--after">
              <span className="cs-ba-tag cs-ba-tag--after">After: tested performance creative</span>
              <div className="cs-ba-thumb cs-ba-thumb--after" />
              <div className="cs-ba-metrics">
                <div className="cs-ba-metric"><span className="cs-ba-mlabel">CTR</span><span className="cs-ba-mval" style={GRADIENT_TEXT}>3.1%</span></div>
                <div className="cs-ba-metric"><span className="cs-ba-mlabel">CPA</span><span className="cs-ba-mval" style={GRADIENT_TEXT}>$19</span></div>
                <div className="cs-ba-metric"><span className="cs-ba-mlabel">ROAS</span><span className="cs-ba-mval" style={GRADIENT_TEXT}>3.6x</span></div>
              </div>
            </div>
          </div>
          <p className="cs-ba-note">Illustrative of the kind of shift structured creative testing drives.</p>
        </div>
      </section>

      {/* 7. Process */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: "#fff", padding: "53px 20px" }} aria-label="Our creative process">
        <div className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] md:max-lg:py-[20px] lg:max-xl:py-[30px] lg:max-xl:px-[40px]" style={{ maxWidth: "1320px", margin: "0 auto", background: "#FBF7ED", borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}>
          <h2 className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold" style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}>
            How Our Creative Process Works
          </h2>
          <p className="text-[16px] max-sm:text-[14px]" style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}>
            Five steps from a blank brief to winning ads you can scale.
            <br className="hidden sm:block lg:hidden" />{" "}
            New concepts land in days, not weeks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {PROCESS.slice(0, 3).map(({ step, title, desc }) => (
              <div key={step} className="p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]" style={{ background: "#FFFFFF", borderRadius: "16px", boxSizing: "border-box" }}>
                <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{step}</p>
                <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[20px] max-sm:!max-w-full md:max-lg:mt-[16px] md:max-lg:!max-w-[428px]" style={{ maxWidth: "calc(66.667% - 7px)", marginLeft: "auto", marginRight: "auto", width: "100%" }}>
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

      {/* 8. What's included / formats */}
      <section className="ac-sec ac-cream">
        <div className="ac-wrap">
          <div className="ac-head ac-head-wide">
            <span className="ac-eyebrow">What&apos;s included</span>
            <h2 className="ac-h2">Everything Your Ad Account Needs</h2>
            <p className="ac-lead">One team for concept, production, and testing across every format that performs.</p>
          </div>
          <div className="ac-grid-offer">
            {FORMATS.map((f) => (
              <div key={f.title} className="ac-offer">
                <span className="ac-offer-ic">{f.icon}</span>
                <h3 className="ac-offer-title">{f.title}</h3>
                <p className="ac-offer-body">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Is this right for you */}
      <section className="ac-sec ac-dark">
        <div className="ac-wrap">
          <div className="ac-head">
            <span className="ac-eyebrow ac-eyebrow-dark">Fit</span>
            <h2 className="ac-h2 ac-h2-dark">Is Performance Creative Right for You?</h2>
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
                {NOT_FOR.map((b) => (<li key={b.k}><Cross /><span>{b.t}</span></li>))}
              </ul>
            </div>
          </div>
          <div className="cs-trust-row">
            {["Senior strategists, no juniors", "Month to month, no lock-in", "Full account access and transparent reporting"].map((t) => (
              <div key={t} className="cs-trust-item"><Check /><span>{t}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Proven results */}
      <section className="ssd-results-section" style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif", padding: "60px 20px" }}>
        <div className="ssd-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="ssd-results-heading">A proven team behind the results</h2>
          <p className="ssd-results-desc">We have built <Link href="/case-studies">700+ Shopify stores</Link> and generated $900M+ in revenue across 8+ years and 9+ industry awards. The same team builds the creative that scales your paid channels.</p>
          <CaseStudySlider slides={AC_SLIDES} intervalMs={6000} showDots />
        </div>
      </section>

      {/* 11. FAQ */}
      <FAQSection title="Performance Creative FAQs" faqs={FAQS} />

      {/* 12. Final CTA + on-page free creative audit form */}
      <section id="creative-audit" className="cs-final" style={{ background: HERO_GLOW }} aria-label="Get a free creative audit">
        <div className="cs-final-grid mx-auto" style={{ maxWidth: "1200px", padding: "70px 20px" }}>
          <div>
            <span className="ac-eyebrow ac-eyebrow-dark">Free creative audit</span>
            <h2 className="ac-h2 ac-h2-dark" style={{ fontSize: "clamp(28px,3.6vw,40px)" }}>See exactly where your ad creative is leaking spend</h2>
            <p className="ac-lead ac-lead-dark" style={{ margin: "0 0 22px" }}>A senior strategist reviews your ads and account by hand, then sends a teardown and a prioritized action plan within 48 hours. No pitch, no obligation.</p>
            <ul className="cs-final-list">
              <li><Check /><span>A teardown of your current ads and top competitors</span></li>
              <li><Check /><span>The angles and formats worth testing next</span></li>
              <li><Check /><span>A prioritized action plan you can run with or without us</span></li>
            </ul>
            <div className="cs-final-chips">
              {["48-hour turnaround", "Reviewed by a human", "No obligation"].map((c) => (
                <span key={c} className="cs-chip">{c}</span>
              ))}
            </div>
            <p className="cs-final-alt">Prefer to talk? <Link href="/book-shopify-consultation">Book a call</Link>.</p>
          </div>
          <div>
            <CreativeAuditForm />
          </div>
        </div>
      </section>
    </>
  );
}

const CSS = `
.ac-wrap{max-width:1200px;margin:0 auto;padding:0 20px}
.ac-h2{font-family:'Poppins',sans-serif;font-weight:700;color:#0f172a;line-height:1.18;font-size:clamp(26px,3.4vw,38px);margin:0 0 14px}
.ac-h2-dark{color:#fff}
.ac-p{font-family:'Poppins',sans-serif;font-size:16px;line-height:1.7;color:#475569;margin:0 0 16px;max-width:620px}
.ac-eyebrow{display:inline-block;font-family:'Poppins',sans-serif;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#2A9555;margin-bottom:12px}
.ac-eyebrow-dark{color:#61ce70}
.ac-lead{font-family:'Poppins',sans-serif;font-size:17px;line-height:1.6;color:#64748b;margin:0;max-width:680px}
.ac-lead-dark{color:rgba(255,255,255,0.7)}
.ac-sec{padding:60px 0}
.ac-white{background:#fff}
.ac-cream{background:#FBF7ED}
.ac-dark{background:#000}
.ac-head{margin-bottom:40px;max-width:760px}
.ac-head.ac-head-wide{max-width:none}

/* Hero */
.std-badge{display:inline-block;padding:6px 16px;background:rgba(97,206,112,0.12);border:1px solid rgba(97,206,112,0.3);border-radius:999px;color:#61ce70;font-size:13px;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
.std-hero-stats{display:flex;flex-wrap:nowrap;gap:0;margin-top:32px;border-top:1px solid rgba(255,255,255,0.12);padding-top:24px}
.std-hero-stat-item{display:flex;flex-direction:column;gap:4px;padding:0 22px 0 0;margin-right:22px;border-right:1px solid rgba(255,255,255,0.12);white-space:nowrap}
.std-hero-stat-item:last-child{border-right:none;padding-right:0;margin-right:0}
.std-hero-stat-num{font-size:28px;font-weight:800;line-height:1;background:var(--brand-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.std-hero-stat-label{font-size:13px;font-weight:500;color:#fff;letter-spacing:.02em}
.sat-hero-img-wrap{display:flex;align-items:center;justify-content:center;position:relative}
@media (min-width:1025px) and (max-width:1307px){.std-hero-stats{flex-wrap:nowrap!important}.std-hero-stat-item{padding-right:18px!important;margin-right:18px!important}.std-hero-stat-num{font-size:24px!important}.std-hero-stat-label{font-size:12px!important}}
@media (max-width:1024px){.std-hero-h1{font-size:40px!important}.std-hero-inner{padding:60px 20px!important}.std-hero-p{margin-top:16px!important}.std-hero-stats{flex-wrap:nowrap!important;margin-top:16px!important;padding-top:16px!important}.std-hero-stat-item{padding-right:16px!important;margin-right:16px!important}.sat-hero-img-wrap{margin-top:8px}}
@media (max-width:640px){.std-hero-h1{font-size:28px!important;line-height:1.22!important}.std-hero-p{font-size:14px!important;line-height:24px!important}.std-hero-stats{display:grid!important;grid-template-columns:1fr 1fr;gap:18px 0!important;margin-top:24px;padding-top:18px}.std-hero-stat-item{width:auto!important;padding:0 16px 0 0!important;margin:0!important;border-right:1px solid rgba(255,255,255,0.12)}.std-hero-stat-item:nth-child(even){border-right:none;padding:0 0 0 16px!important}}

/* Hero creative board (placeholder visual) */
.cs-board{width:100%;max-width:440px;margin:0 auto;background:linear-gradient(160deg,#161616,#0a0a0a);border:1px solid rgba(255,255,255,0.1);border-radius:22px;padding:18px;box-shadow:0 24px 64px rgba(0,0,0,0.5)}
.cs-board-head{display:flex;align-items:center;gap:7px;margin-bottom:14px}
.cs-board-dot{width:9px;height:9px;border-radius:50%;background:#2A9555}
.cs-board-tag{font-family:'Poppins',sans-serif;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,0.5);margin-left:auto}
.cs-board-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.cs-board-tile{position:relative;aspect-ratio:1/1;border-radius:14px;background:linear-gradient(150deg,rgba(61,199,122,0.16),rgba(255,255,255,0.03));border:1px solid rgba(255,255,255,0.09);overflow:hidden}
.cs-tile-label{position:absolute;left:12px;bottom:11px;font-family:'Poppins',sans-serif;font-size:12px;font-weight:600;color:#fff;z-index:2}
.cs-tile-play{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);width:42px;height:42px;border-radius:50%;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;z-index:2}

/* Trust strip */
.std-trust-carousel{overflow:hidden;position:relative}
.sat-trust-track{display:flex;align-items:center;gap:80px;width:max-content;animation:satTrustScroll 32s linear infinite}
.std-trust-carousel:hover .sat-trust-track{animation-play-state:paused}
@keyframes satTrustScroll{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
.std-trust-slide{flex-shrink:0;display:flex;align-items:center;justify-content:center}
.std-trust-logo{height:46px;width:auto;max-width:170px;object-fit:contain;opacity:.85}
@media (max-width:640px){.sat-trust-track{gap:48px!important}.std-trust-logo{height:38px}.std-trust-h2{font-size:22px!important}}

/* Two-col + cards */
.ac-two{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
.ac-card-box{background:#fff;border:1px solid #e8ecf1;border-radius:18px;padding:28px;box-shadow:0 10px 40px rgba(0,0,0,0.05)}
.ac-box-title{font-family:'Poppins',sans-serif;font-weight:700;font-size:16px;color:#0f172a;margin:0 0 16px}
.ac-card-col{display:flex;flex-direction:column;gap:20px}
.ac-checklist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px}
.ac-checklist li{display:flex;gap:12px;align-items:flex-start;font-family:'Poppins',sans-serif;font-size:15px;color:#334155;line-height:1.5}

/* Funnel */
.cs-funnel{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.cs-funnel-card{background:#fff;border:1px solid #e8ecf1;border-radius:16px;padding:26px;box-shadow:0 10px 40px rgba(0,0,0,0.04)}
.cs-funnel-step{font-family:'Poppins',sans-serif;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#2A9555;margin:0 0 8px}
.cs-funnel-h{font-family:'Poppins',sans-serif;font-size:19px;font-weight:700;color:#0f172a;margin:0 0 10px}
.cs-funnel-p{font-family:'Poppins',sans-serif;font-size:14px;color:#475569;line-height:1.6;margin:0}

/* Gallery (placeholder ad previews) */
.cs-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.cs-gallery-tile{position:relative;aspect-ratio:4/5;border-radius:16px;background:linear-gradient(160deg,#1c1c1c,#0a0a0a);overflow:hidden;box-shadow:0 14px 44px rgba(0,0,0,0.14)}
.cs-gallery-tile::after{content:"";position:absolute;inset:0;background:radial-gradient(120% 90% at 78% 12%,rgba(61,199,122,0.24),transparent 55%);pointer-events:none}
.cs-gallery-label{position:absolute;left:15px;bottom:15px;z-index:2;font-family:'Poppins',sans-serif;font-size:14px;font-weight:600;color:#fff}
.cs-gallery-tag{position:absolute;right:12px;top:12px;z-index:2;font-family:'Poppins',sans-serif;font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,0.65);background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.14);padding:3px 8px;border-radius:999px}
.cs-gallery-play{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2;width:52px;height:52px;border-radius:50%;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center}
.cs-note{font-family:'Poppins',sans-serif;font-size:13px;color:#94a3b8;text-align:center;margin:26px 0 0}

/* Before / after */
.cs-ba{display:grid;grid-template-columns:1fr auto 1fr;gap:20px;align-items:center}
.cs-ba-panel{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:18px;padding:22px}
.cs-ba-panel--after{border-color:rgba(61,199,122,0.4);background:rgba(61,199,122,0.06)}
.cs-ba-tag{display:inline-block;font-family:'Poppins',sans-serif;font-size:12px;font-weight:600;color:rgba(255,255,255,0.7)}
.cs-ba-tag--after{color:#61ce70}
.cs-ba-thumb{aspect-ratio:16/10;border-radius:12px;background:linear-gradient(160deg,#2a2a2a,#0d0d0d);margin:12px 0;position:relative;overflow:hidden}
.cs-ba-thumb--after::after{content:"";position:absolute;inset:0;background:radial-gradient(120% 100% at 75% 15%,rgba(61,199,122,0.28),transparent 60%)}
.cs-ba-metrics{display:flex;gap:10px;flex-wrap:wrap}
.cs-ba-metric{display:flex;flex-direction:column;gap:3px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:9px 13px;min-width:64px}
.cs-ba-mlabel{font-family:'Poppins',sans-serif;font-size:11px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:rgba(255,255,255,0.5)}
.cs-ba-mval{font-family:'Poppins',sans-serif;font-size:19px;font-weight:800;color:#fff;line-height:1}
.cs-ba-arrow{width:44px;height:44px;border-radius:50%;background:var(--brand-gradient);color:#062012;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.cs-ba-note{font-family:'Poppins',sans-serif;font-size:13px;color:rgba(255,255,255,0.45);text-align:center;margin:22px 0 0}

/* Offer grid (formats) */
.ac-grid-offer{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.ac-offer{border:1px solid #e8ecf1;border-radius:14px;padding:24px;background:#fff;transition:border-color .18s ease,box-shadow .18s ease,transform .18s ease}
.ac-offer:hover{border-color:#2A9555;box-shadow:0 8px 28px rgba(0,0,0,0.07);transform:translateY(-3px)}
.ac-offer-ic{display:inline-flex;width:42px;height:42px;border-radius:11px;background:#E8F5EC;align-items:center;justify-content:center;margin-bottom:14px}
.ac-offer-title{font-family:'Poppins',sans-serif;font-size:16px;font-weight:600;color:#0f172a;margin:0 0 8px;line-height:1.3}
.ac-offer-body{font-family:'Poppins',sans-serif;font-size:14px;color:#64748b;line-height:1.55;margin:0}

/* Fit */
.ac-fit{border-radius:16px;padding:28px}
.ac-fit-yes{background:rgba(61,199,122,0.08);border:1px solid rgba(61,199,122,0.25)}
.ac-fit-no{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)}
.ac-fit-h{font-family:'Poppins',sans-serif;font-weight:700;font-size:17px;color:#fff;margin:0 0 18px}
.ac-fit-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px}
.ac-fit-list li{display:flex;gap:12px;align-items:flex-start;font-family:'Poppins',sans-serif;font-size:15px;color:rgba(255,255,255,0.82);line-height:1.5}
.cs-trust-row{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px}
.cs-trust-item{display:flex;gap:10px;align-items:center;font-family:'Poppins',sans-serif;font-size:14px;color:rgba(255,255,255,0.85);background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.09);border-radius:12px;padding:14px 16px}

/* Final CTA + form */
.cs-final{scroll-margin-top:100px}
.cs-final-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.cs-final-list{list-style:none;margin:0 0 20px;padding:0;display:flex;flex-direction:column;gap:12px}
.cs-final-list li{display:flex;gap:12px;align-items:flex-start;font-family:'Poppins',sans-serif;font-size:15px;color:rgba(255,255,255,0.85);line-height:1.5}
.cs-final-chips{display:flex;gap:10px;flex-wrap:wrap}
.cs-chip{font-family:'Poppins',sans-serif;font-size:12px;font-weight:600;color:#cde0d6;background:rgba(61,199,122,0.1);border:1px solid rgba(61,199,122,0.28);border-radius:999px;padding:6px 14px}
.cs-final-alt{font-family:'Poppins',sans-serif;font-size:14px;color:rgba(255,255,255,0.6);margin:20px 0 0}
.cs-final-alt a{color:#61ce70;text-decoration:underline}

/* Form */
.csf-card{background:#fff;border-radius:20px;padding:28px;box-shadow:0 24px 64px rgba(0,0,0,0.4)}
.csf-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.csf-field{display:flex;flex-direction:column;margin-bottom:14px}
.csf-label{font-family:'Poppins',sans-serif;font-size:13px;font-weight:600;color:#0f172a;margin-bottom:6px}
.csf-input{font-family:'Poppins',sans-serif;font-size:15px;color:#0f172a;background:#fff;border:1px solid #d7dee7;border-radius:10px;padding:12px 14px;outline:none;transition:border-color .15s ease,box-shadow .15s ease;width:100%}
.csf-input:focus{border-color:#2A9555;box-shadow:0 0 0 3px rgba(42,149,85,0.12)}
.csf-input--err{border-color:#ff6b6b}
.csf-err{font-family:'Poppins',sans-serif;font-size:12px;color:#e23b3b;margin-top:5px}
.csf-err--form{margin-bottom:12px}
.csf-submit{width:100%;cursor:pointer;font-family:'Poppins',sans-serif;font-size:16px;font-weight:600;border-radius:999px;padding:14px 24px;margin-top:6px;color:#fff;background:linear-gradient(#000,#000) padding-box, var(--brand-gradient) border-box;border:2px solid transparent;transition:background .25s ease,color .25s ease}
.csf-submit:hover:not(:disabled){background:var(--brand-gradient);color:#062012}
.csf-submit:disabled{opacity:.75;cursor:default}
.csf-submit-inner{display:inline-flex;align-items:center;justify-content:center;gap:8px}
.csf-spinner{width:16px;height:16px;border:2px solid rgba(255,255,255,0.35);border-top-color:#fff;border-radius:50%;animation:csfSpin .7s linear infinite}
@keyframes csfSpin{to{transform:rotate(360deg)}}
.csf-fineprint{text-align:center;font-family:'Poppins',sans-serif;font-size:12px;color:#64748b;margin:12px 0 0}
.csf-card--success{text-align:center}
.csf-success-check{width:56px;height:56px;border-radius:50%;background:rgba(97,206,112,0.15);display:inline-flex;align-items:center;justify-content:center;margin:0 auto 16px}
.csf-success-h{font-family:'Poppins',sans-serif;font-size:22px;font-weight:700;color:#000;margin:0 0 8px}
.csf-success-p{font-family:'Poppins',sans-serif;font-size:15px;color:#334155;line-height:1.6;margin:0 0 20px}
.csf-success-steps{text-align:left;border-top:1px solid rgba(0,0,0,0.08);padding-top:18px}
.csf-success-step{display:flex;gap:12px;align-items:flex-start;margin-bottom:12px}
.csf-success-step:last-child{margin-bottom:0}
.csf-success-step p{font-family:'Poppins',sans-serif;font-size:14px;color:#334155;line-height:1.5;margin:0}
.csf-success-num{flex-shrink:0;width:22px;height:22px;border-radius:50%;background:#000;color:#fff;font-family:'Poppins',sans-serif;font-size:12px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;margin-top:1px}

/* Responsive */
@media (max-width:1000px){.ac-grid-offer{grid-template-columns:repeat(2,1fr)}.cs-gallery{grid-template-columns:repeat(3,1fr)}}
@media (max-width:760px){
  .ac-two{grid-template-columns:1fr}
  .cs-funnel{grid-template-columns:1fr}
  .cs-gallery{grid-template-columns:repeat(2,1fr)}
  .cs-trust-row{grid-template-columns:1fr}
  .cs-final-grid{grid-template-columns:1fr;gap:32px}
  .ac-head{margin-bottom:30px}
  .cs-ba{grid-template-columns:1fr;gap:14px}
  .cs-ba-arrow{transform:rotate(90deg);margin:0 auto}
}
@media (max-width:540px){
  .ac-grid-offer{grid-template-columns:1fr}
  .cs-gallery{grid-template-columns:1fr 1fr}
  .csf-row{grid-template-columns:1fr}
}
/* responsive section padding: 60 -> 55 @1024 -> 50 @768 -> 45 <450 */
@media (max-width:1024px){.ac-sec{padding:55px 0}}
@media (max-width:768px){.ac-sec{padding:50px 0}}
@media (max-width:449px){.ac-sec{padding:45px 0}}
`;
