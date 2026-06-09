import type { Metadata } from "next";
import Link from "next/link";
import AuditForm from "./AuditForm";
import AuditFaqAccordion from "./AuditFaqAccordion";

export const metadata: Metadata = {
  alternates: { canonical: "https://ecommwizards.com/free-shopify-store-audit" },
  title: "Free Shopify Store Audit | Find Revenue Leaks & Grow Sales",
  description:
    "Get a free Shopify audit to uncover CRO, SEO, speed, and UX issues. Find hidden revenue leaks and get actionable insights to grow your store fast.",
};

const C_DARK  = "#000000";
const C_TEXT  = "#334155";
const C_WHITE = "#FFFFFF";
const C_CREAM = "#FBF7ED";

const GRADIENT = "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";

/* ── What you get (form section strip) ── */
const WHAT_YOU_GET = [
  "Identify conversion rate optimization (CRO) opportunities",
  "Fix UX and checkout friction issues",
  "Improve Shopify SEO and site performance",
  "Uncover hidden revenue leaks across your funnel",
];

/* ── What we audit ── */
const AUDIT_AREAS = [
  { title: "Checkout Friction", desc: "We map every drop-off from cart to confirmation. Most stores lose the majority of buyers right here, so it is the fastest revenue to recover.", icon: (<svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden><path d="M4 6h2.5l3 12h12l2-8H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="22" r="1.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="20" cy="22" r="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>) },
  { title: "Product Pages", desc: "We audit your PDPs for missing trust signals, weak copy, and the friction stopping add-to-carts. This is where buying decisions are won or lost.", icon: (<svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden><path d="M4 7l10-4 10 4-10 4-10-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M4 7v10l10 4 10-4V7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>) },
  { title: "Homepage & CRO", desc: "Our Shopify CRO audit reviews your hero, navigation, and above-the-fold experience to stop leaking buyers on first contact.", icon: (<svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden><rect x="3" y="4" width="22" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9h22" stroke="currentColor" strokeWidth="1.5"/><path d="M7 14h8M7 18h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
  { title: "Mobile Experience", desc: "Most of your traffic is mobile and usually your weakest converter. We review tap targets, layout, and mobile-only friction.", icon: (<svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden><rect x="8" y="2" width="12" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M13 21h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
  { title: "Speed & Core Web Vitals", desc: "Our Shopify performance audit benchmarks your load times and finds what is slowing you down. Slow pages lose buyers before they see your product.", icon: (<svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden><circle cx="14" cy="16" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M14 16l5-5M14 6V3M11 3h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
  { title: "SEO & Discoverability", desc: "Our Shopify SEO audit checks your meta structure, crawlability, and on-page signals, the quick wins that earn you free traffic over time.", icon: (<svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M18 18l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
];

/* ── FAQs ── */
const AUD_FAQS = [
  { q: "Is the Shopify audit really free?", a: "Yes. The Shopify store audit is completely free, with no credit card and no catch. It is the same process we run for paying clients, and you keep the report whether or not we ever work together." },
  { q: "Do you audit Shopify Plus stores?", a: "Yes. We audit both standard Shopify and Shopify Plus stores, and we run ecommerce store audits for enterprise brands every day. If you are on Plus, we review the Plus-specific pieces too, like Checkout Extensibility and custom scripts." },
  { q: "What is included in a Shopify audit?", a: "This Shopify website audit covers conversion rate optimization, SEO, UX, site speed, and mobile experience, plus a scan for the revenue leaks across your funnel. You get a clear read on where your store stands in each area and what to fix first." },
  { q: "What exactly do I receive?", a: "A personalized video walkthrough of your store, usually 10 to 15 minutes, plus a written action plan that lists the specific fixes ranked by revenue impact. You get the what, the why, and the priority order." },
  { q: "How long does the audit take?", a: "You receive your personalized video walkthrough and written action plan within 48 hours of submitting the form. We confirm your request within a few hours so you know it is in hand." },
  { q: "Who actually does the audit?", a: "A real Shopify expert from our team reviews your store by hand. This is a manual Shopify store review, not an automated scan that spits out a generic checklist. We look at your actual store, your actual funnel, and your actual numbers." },
  { q: "Do you need access to my store?", a: "No. We work from your public storefront, so you do not hand over any passwords or admin access. Just your store URL and a few details about what you want to improve." },
  { q: "Will you try to sell me something?", a: "No hard sell. We deliver your audit and the action plan, and that is the job done. If you want help implementing the fixes, we can talk about it, but only if you ask. There is no obligation and no pressure." },
  { q: "What happens after the audit?", a: "You receive a prioritized set of recommendations you can act on with any team. Treat it as your Shopify growth audit, a roadmap of fixes ranked by revenue impact. If you want us to implement them, we can talk about it, but there is no obligation and no pressure either way." },
];

export default function FreeAuditPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AUD_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── §1 Hero (pitch, DARK) ── */}
      <section style={{ background: C_DARK }} aria-label="Free Shopify store audit">
        <div className="mx-auto aud-hero" style={{ maxWidth: "1040px", padding: "50px 20px 50px", textAlign: "center" }}>
          <span className="aud-badge">Free Shopify Store Audit</span>
          <h1 className="aud-h1" style={{ color: C_WHITE }}>
            Get a Free Shopify Store Audit and See<br className="aud-h1-br" />{" "}
            <span style={{ background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Exactly Where You&apos;re Losing Sales.
            </span>
          </h1>
          <p className="aud-hero-p" style={{ color: "rgba(255,255,255,0.82)" }}>
            Our free Shopify audit reviews your store for CRO, SEO, speed, and UX, then shows you exactly where revenue leaks out. You get a personalized video walkthrough and a prioritized action plan within 48 hours. No automated tools. No sales pitch.
          </p>
        </div>
      </section>

      {/* ── Ticker marquee (from home page) ── */}
      <div className="overflow-hidden border-y border-white/10 bg-[#0a0a0a]" style={{ height: "66.39px", fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}>
        <div className="ticker-strip flex whitespace-nowrap h-full items-center" style={{ willChange: "transform" }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 px-4 font-medium text-white" style={{ fontSize: "16px", fontFamily: "'Poppins', sans-serif" }}>
              <span>700+ Stores Built</span>
              <span className="shrink-0 rounded-full" style={{ width: "7px", height: "7px", display: "inline-block", background: GRADIENT }} />
              <span>$900M+ Revenue Generated</span>
              <span className="shrink-0 rounded-full" style={{ width: "7px", height: "7px", display: "inline-block", background: GRADIENT }} />
              <span>8+ Years of Experience</span>
              <span className="shrink-0 rounded-full" style={{ width: "7px", height: "7px", display: "inline-block", background: GRADIENT }} />
              <span>Full-Stack Ecommerce Partner</span>
              <span className="shrink-0 rounded-full" style={{ width: "7px", height: "7px", display: "inline-block", background: GRADIENT }} />
              <span>Shopify Plus Certified</span>
              <span className="shrink-0 rounded-full" style={{ width: "7px", height: "7px", display: "inline-block", background: GRADIENT }} />
              <span>28.5% Avg Conversion Lift</span>
              <span className="shrink-0 rounded-full" style={{ width: "7px", height: "7px", display: "inline-block", background: GRADIENT }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── §3 Form Section (dedicated, prominent, CREAM) ── */}
      <section id="audit-form" style={{ background: C_CREAM, padding: "60px 20px 64px", scrollMarginTop: "80px" }} aria-label="Request your free audit">
        <div className="mx-auto aud-form-grid" style={{ maxWidth: "1180px" }}>
          <div className="aud-form-copy">
            <h2 style={{ color: C_DARK, fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px,3.4vw,40px)", fontWeight: 700, lineHeight: 1.18, margin: "0 0 14px" }}>
              Get a Free Shopify Store Audit &amp; Conversion Review
            </h2>
            <p style={{ color: "rgba(0,0,0,0.7)", fontFamily: "'Poppins', sans-serif", fontSize: 16, lineHeight: "27px", margin: "0 0 24px", maxWidth: 500 }}>
              This free Shopify audit reviews your store for CRO, SEO, UX, and performance, then shows you exactly how to increase conversions and sales. It works as a Shopify conversion audit and SEO audit in one.
            </p>
            <div className="aud-wyg-list">
              {WHAT_YOU_GET.map((w) => (
                <div key={w} className="aud-wyg-row">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden><circle cx="9" cy="9" r="9" fill="rgba(97,206,112,0.18)" /><path d="M5 9l3 3 5-5" stroke="#2A9555" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>{w}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <AuditForm formId="audit" />
          </div>
        </div>
      </section>

      {/* ── §4 What We Audit (WHITE) ── */}
      <section style={{ background: C_WHITE, padding: "60px 20px" }} aria-label="What we audit">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="aud-h2" style={{ color: C_DARK }}>Everything Your Free Shopify Audit Covers</h2>
          <p className="aud-sub" style={{ color: "rgba(0,0,0,0.7)" }}>Six areas where Shopify stores quietly lose money. Our Shopify website audit reviews every one and tells you exactly where you stand.</p>
          <div className="aud-area-grid">
            {AUDIT_AREAS.map((a) => (
              <div key={a.title} className="aud-area-card">
                <span className="aud-area-icon" aria-hidden>{a.icon}</span>
                <h3 className="aud-area-name">{a.title}</h3>
                <p className="aud-area-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §6 FAQ (WHITE) ── */}
      <section style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }} aria-label="Free audit FAQs">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "60px 20px 80px" }}>
          <h2 style={{ color: C_DARK, fontSize: "clamp(26px,3.4vw,38px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", margin: "0 auto 36px", maxWidth: 760 }}>
            Free Shopify Audit FAQs
          </h2>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <AuditFaqAccordion faqs={AUD_FAQS} />
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="#audit-form" className="aud-cta-btn">Get My Free Audit
              <svg width="16" height="12" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sticky mobile CTA ── */}
      <Link href="#audit-form" className="aud-sticky">Get My Free Audit
        <svg width="16" height="12" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </Link>

      {/* ── Page-level CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .aud-badge { display: inline-block; padding: 6px 16px; background: rgba(97,206,112,0.12); border: 1px solid rgba(97,206,112,0.3); border-radius: 999px; color: #61ce70; font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; }
        .aud-h1 { font-family: 'Poppins', sans-serif; font-size: 40px; font-weight: 700; line-height: 1.18; margin: 20px auto 0; max-width: 1000px; }
        .aud-h1-br { display: block; }
        .aud-hero-p { font-family: 'Poppins', sans-serif; font-size: 16.5px; line-height: 28px; max-width: 640px; margin: 20px auto 0; }

        .aud-h2 { font-family: 'Poppins', sans-serif; font-size: clamp(28px,3.5vw,42px); font-weight: 700; line-height: 1.2; text-align: center; margin: 0 auto 12px; max-width: 920px; }
        .aud-sub { font-family: 'Poppins', sans-serif; font-size: 16px; line-height: 26px; text-align: center; margin: 0 auto 40px; max-width: 680px; }


        /* Form section */
        .aud-form-grid { display:grid; grid-template-columns:1fr 1.05fr; gap:48px; align-items:center; }
        .aud-wyg-list { display:flex; flex-direction:column; gap:13px; }
        .aud-wyg-row { display:flex; align-items:flex-start; gap:11px; font-family:'Poppins',sans-serif; font-size:15px; font-weight:500; color:#1f3d2b; line-height:1.5; }
        .aud-wyg-row svg { flex-shrink:0; margin-top:2px; }

        /* Form card */
        .aud-form-card { background:#fff; border-radius:20px; padding:36px; box-shadow:0 24px 70px rgba(0,0,0,.16); border:1px solid rgba(0,0,0,.06); box-sizing:border-box; }
        .aud-field { display:flex; flex-direction:column; margin-bottom:16px; }
        .aud-field-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        .aud-label { font-family:'Poppins',sans-serif; font-size:13px; font-weight:600; color:#334155; margin-bottom:6px; }
        .aud-opt { font-weight:400; color:#94a3b8; }
        .aud-input { width:100%; box-sizing:border-box; font-family:'Poppins',sans-serif; font-size:14px; color:#0f172a; background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:12px 14px; outline:none; transition:border-color .15s ease, box-shadow .15s ease; }
        .aud-input:focus { border-color:#3DC77A; box-shadow:0 0 0 3px rgba(61,199,122,.15); }
        .aud-input--err { border-color:#ef4444; }
        .aud-textarea { resize:vertical; }
        .aud-err { font-family:'Poppins',sans-serif; font-size:12px; color:#ef4444; margin-top:5px; }
        .aud-checks { display:flex; flex-direction:column; gap:9px; margin-top:3px; }
        .aud-check { display:flex; align-items:flex-start; gap:9px; font-family:'Poppins',sans-serif; font-size:13.5px; color:#334155; line-height:1.4; cursor:pointer; }
        .aud-check input { margin:2px 0 0; width:16px; height:16px; accent-color:#3DC77A; flex-shrink:0; cursor:pointer; }
        .aud-submit { position:relative; width:100%; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:#000; color:#fff; font-family:'Poppins',sans-serif; font-weight:600; font-size:16px; border:none; border-radius:12px; padding:17px 24px; cursor:pointer; transition:transform .2s ease, box-shadow .2s ease; }
        .aud-submit::before { content:''; position:absolute; inset:0; border-radius:12px; padding:2px; background:${GRADIENT}; -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite:destination-out; mask-composite:exclude; opacity:0; transition:opacity .2s ease; pointer-events:none; }
        .aud-submit:hover::before { opacity:1; }
        .aud-submit:hover { transform:translateY(-1px); box-shadow:0 12px 30px -10px rgba(0,0,0,.5); }
        .aud-submit:disabled { opacity:.7; cursor:not-allowed; transform:none; }
        .aud-spinner { width:16px; height:16px; border:2px solid rgba(255,255,255,.35); border-top-color:#fff; border-radius:50%; animation:audspin .7s linear infinite; display:inline-block; }
        @keyframes audspin { to { transform:rotate(360deg); } }

        /* Audit areas */
        .aud-area-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
        .aud-area-card { background:#FBF7ED; border-radius:16px; padding:26px; border:1px solid rgba(0,0,0,0.06); display:flex; flex-direction:column; gap:10px; }
        .aud-area-icon { display:inline-flex; align-items:center; justify-content:center; width:46px; height:46px; background:rgba(61,199,122,0.12); border-radius:12px; color:#2A9555; }
        .aud-area-name { font-family:'Poppins',sans-serif; font-size:17px; font-weight:700; color:#000; margin:0; line-height:1.3; }
        .aud-area-desc { font-family:'Poppins',sans-serif; font-size:13.5px; color:#334155; line-height:1.6; margin:0; }


        /* CTA button */
        .aud-cta-btn { position:relative; display:inline-flex; align-items:center; gap:10px; background:#000; color:#fff; font-family:'Poppins',sans-serif; font-weight:600; font-size:16px; border-radius:999px; padding:16px 36px; text-decoration:none; transition:transform .2s ease, box-shadow .2s ease; }
        .aud-cta-btn::before { content:''; position:absolute; inset:0; border-radius:999px; padding:2px; background:${GRADIENT}; -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite:destination-out; mask-composite:exclude; opacity:0; transition:opacity .2s ease; pointer-events:none; }
        .aud-cta-btn:hover::before { opacity:1; }
        .aud-cta-btn:hover { transform:translateY(-1px); box-shadow:0 12px 30px -10px rgba(0,0,0,.5); }
        .aud-cta-btn--light { background:${GRADIENT}; color:#08210f; }
        .aud-cta-btn--light::before { display:none; }
        .aud-cta-btn--light:hover { box-shadow:0 14px 34px -10px rgba(61,199,122,.6); }

        /* FAQ */
        .aud-faq__list { list-style:none; margin:0; padding:0; }
        .aud-faq__item { border-bottom:1px solid rgba(0,0,0,0.10); }
        .aud-faq__q { font-family:'Poppins',sans-serif; font-size:17px; font-weight:600; color:#000; line-height:1.4; flex:1; }
        .aud-faq__chev { color:#000; flex-shrink:0; }
        .aud-faq__a-text { font-family:'Poppins',sans-serif; font-size:15px; color:#334155; line-height:1.75; margin:0 0 20px; }

        /* Sticky mobile CTA */
        .aud-sticky { display:none; }

        @media (max-width:1024px){ .aud-h1 { font-size:38px; } .aud-area-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:900px){ .aud-form-grid { grid-template-columns:1fr; gap:30px; } }
        @media (max-width:640px){
          .aud-h1 { font-size:29px; line-height:1.2; }
          .aud-form-card { padding:24px; }
          .aud-field-row { grid-template-columns:1fr; }
          .aud-area-grid { grid-template-columns:1fr; }
          .aud-faq__q { font-size:15px; }
          .aud-faq__a-text { font-size:14px; }
          .aud-sticky { display:flex; position:fixed; left:12px; right:12px; bottom:12px; z-index:50; align-items:center; justify-content:center; gap:8px; background:#000; color:#fff; font-family:'Poppins',sans-serif; font-weight:600; font-size:15px; border-radius:999px; padding:15px 24px; text-decoration:none; box-shadow:0 10px 30px rgba(0,0,0,.35); border:1px solid rgba(97,206,112,0.4); }
        }
      `}} />
    </>
  );
}
