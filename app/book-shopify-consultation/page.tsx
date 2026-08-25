import type { Metadata } from "next";
import { og } from "@/lib/og";
import Image from "next/image";
import Link from "next/link";
import CalEmbed from "./CalEmbed";
import BookFaqAccordion from "./BookFaqAccordion";

export const metadata: Metadata = {
  alternates: { canonical: "https://ecommwizards.com/book-shopify-consultation" },
  openGraph: og("/book-shopify-consultation", "Book a Free Consultation"),
  title: "Free Shopify Strategy Consultation",
  description:
    "Book a free Shopify consultation to improve CRO, SEO, UX, and performance. Get expert insights to increase conversions and grow your ecommerce revenue.",
};

const C_DARK  = "#000000";
const C_WHITE = "#FFFFFF";
const C_CREAM = "#FBF7ED";

const GRADIENT = "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";

/* ── What you'll get on the call ── */
const WHAT_YOU_GET = [
  "Increase your Shopify conversion rate (CRO) and AOV",
  "Identify hidden revenue leaks across your funnel",
  "Improve Shopify speed, UX, and technical performance",
  "Reduce reliance on apps and developer bottlenecks",
  "Build a scalable Shopify Plus growth roadmap",
];

/* ── Case studies (duplicated from the Shopify Development Agency page) ── */
const CASE_STUDIES = [
  {
    brand: "NEOM Wellbeing",
    metric: "+34%",
    metricLabel: "Checkout Conversion",
    tags: ["Shopify 2.0", "Custom Theme", "Shopify Plus"],
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
    tags: ["Custom Theme Dev", "Performance", "Automation"],
    industry: "Sports & Fitness",
    image: "/images/Case%20studies/Feetures.jpg",
    video: "/images/Case%20studies/Feetures%20video.mp4",
    href: "/case-studies/feetures-shopify-theme-development",
    description: "America's top-rated performance sock brand rebuilt their Shopify theme from scratch with custom PLPs, dynamic PDPs, and metafield-driven automation that eliminated recurring manual overhead and grew add-to-cart rate 32%.",
  },
  {
    brand: "Dryrobe",
    metric: "+89%",
    metricLabel: "Online Revenue",
    tags: ["Shopify Plus", "Custom Theme", "Internationalisation"],
    industry: "Outdoor & Sports",
    image: "/images/Case%20studies/Dryrobe%20hero%20section.webp",
    video: "/images/Case%20studies/dryrobe%20video.mp4",
    href: "/case-studies/dryrobe-shopify-plus-redesign",
    description: "The outdoor apparel brand consolidated three separate Shopify stores into a single Shopify Plus build with full internationalisation, a custom product finder, and brand storytelling woven into the store architecture. Online revenue grew 89% in the first year.",
  },
  {
    brand: "Capelli Sports",
    metric: "+24%",
    metricLabel: "Conversion Rate",
    tags: ["Platform Migration", "Custom Theme", "SEO"],
    industry: "Sports & Fitness",
    image: "/images/Case%20studies/Capelli%20Sports%20hero%20image.webp",
    video: "/images/Case%20studies/Capelli%20Sports%20video.mp4",
    href: "/case-studies/capelli-sports-shopify-migration",
    description: "A global sportswear brand migrated from WordPress to Shopify with zero downtime, a performance-first redesign, and a 10-app integration stack. Conversion rate grew 24%, site speed 38%, and 95% of SEO equity was preserved.",
  },
];

/* ── FAQs ── */
const BOOK_FAQS = [
  { q: "Is this Shopify consultation really free?", a: "Yes. We offer a free 30-minute Shopify strategy consultation for qualified ecommerce brands looking to scale." },
  { q: "Do you work with Shopify Plus brands?", a: "Yes. We specialize in Shopify Plus development, migration, CRO, and enterprise ecommerce growth strategies." },
  { q: "How should I prepare for the call?", a: "Please share your Shopify store URL, current revenue range, and primary growth challenges so we can provide actionable insights during the call." },
  { q: "Is this a sales call?", a: "No. This is a strategic Shopify consultation designed to provide value and determine if we're a strong long-term fit." },
];

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden><circle cx="9" cy="9" r="9" fill="rgba(97,206,112,0.18)" /><path d="M5 9l3 3 5-5" stroke="#2A9555" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const TickIcon = () => (
  <svg width="13" height="11" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7l5 5L17 1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const ArrowIcon = () => (
  <svg width="16" height="12" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function BookCallPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BOOK_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── §1 Hero (compact, DARK) ── */}
      <section style={{ background: C_DARK }} aria-label="Book a free Shopify consultation">
        <div className="mx-auto" style={{ maxWidth: "1040px", padding: "54px 20px 56px", textAlign: "center" }}>
          <span className="bkc-badge">Free Shopify Consultation</span>
          <h1 className="bkc-h1" style={{ color: C_WHITE }}>
            Talk to Senior Shopify Experts and<br className="bkc-h1-br" />{" "}
            <span style={{ background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Walk Away With a Clear Growth Plan.
            </span>
          </h1>
          <p className="bkc-hero-p" style={{ color: "rgba(255,255,255,0.82)" }}>
            In 30 minutes, we review your store and hand you a clear, prioritized plan to grow. Use it as a Shopify Plus consultation or a broader Shopify ecommerce consultation.
          </p>
        </div>
      </section>

      {/* ── §2 Booking (calendar, CREAM) ── */}
      <section id="book" style={{ background: C_CREAM, padding: "60px 20px 64px", scrollMarginTop: "100px" }} aria-label="Pick a time to book your call">
        <div className="mx-auto bkc-book-grid" style={{ maxWidth: "1220px" }}>
          <div className="bkc-book-copy">
            <p className="bkc-label">Free Shopify consultation call</p>
            <h2 className="bkc-h2" style={{ color: C_DARK }}>Book a Free Shopify Consultation With Growth Experts</h2>
            <p className="bkc-sub" style={{ color: "rgba(0,0,0,0.72)", maxWidth: 500 }}>
              In this 30-minute Shopify consultation, we analyze your store, identify growth bottlenecks, and give you a clear roadmap to increase conversions, AOV, and revenue.
            </p>
            <div className="bkc-wyg">
              {WHAT_YOU_GET.map((w) => (
                <div key={w} className="bkc-wyg-row"><CheckIcon /><span>{w}</span></div>
              ))}
            </div>
            <div className="bkc-who">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" /><path d="M4.5 20c0-3.6 3.4-6 7.5-6s7.5 2.4 7.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              <p>You talk to Shopify experts who have worked across 150+ stores, not a sales rep.</p>
            </div>
            <div className="bkc-book-chips">
              <span className="bkc-chip2"><TickIcon /> Free</span>
              <span className="bkc-chip2"><TickIcon /> No obligation</span>
              <span className="bkc-chip2"><TickIcon /> Reschedule anytime</span>
            </div>
          </div>
          <div className="bkc-cal-card">
            <CalEmbed />
          </div>
        </div>
      </section>

      {/* ── §3 Case Studies (WHITE) ── */}
      <section style={{ background: C_WHITE, padding: "60px 20px" }} aria-label="Shopify case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Shopify Projects We Have Delivered
          </h2>
          <div className="bkc-cs-grid">
            {CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`bkc-cs-card${i === 3 ? " bkc-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_CREAM, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} overrideSrc={cs.image} alt={`${cs.brand} Shopify case study`} fill className="bkc-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
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
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── §6 FAQ (WHITE) ── */}
      <section style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }} aria-label="Questions before you book">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "60px 20px 80px" }}>
          <h2 className="bkc-h2 bkc-h2--center" style={{ color: C_DARK, marginBottom: 36 }}>Shopify Consultation FAQs</h2>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <BookFaqAccordion faqs={BOOK_FAQS} />
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="#book" className="bkc-cta-btn">Book My Free Call <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* ── Sticky mobile CTA ── */}
      <Link href="#book" className="bkc-sticky">Book My Free Call <ArrowIcon /></Link>

      {/* ── Page-level CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .bkc-badge { display:inline-block; padding:6px 16px; background:rgba(97,206,112,0.12); border:1px solid rgba(97,206,112,0.3); border-radius:999px; color:#61ce70; font-family:'Poppins',sans-serif; font-size:13px; font-weight:600; letter-spacing:.04em; text-transform:uppercase; }
        .bkc-h1 { font-family:'Poppins',sans-serif; font-size:42px; font-weight:700; line-height:1.16; margin:20px auto 0; max-width:880px; }
        .bkc-h1-br { display:block; }
        .bkc-hero-p { font-family:'Poppins',sans-serif; font-size:16.5px; line-height:28px; max-width:660px; margin:18px auto 0; }

        .bkc-label { font-family:'Poppins',sans-serif; font-size:13px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:#2A9555; margin:0 0 12px; }
        .bkc-h2 { font-family:'Poppins',sans-serif; font-size:clamp(26px,3.2vw,38px); font-weight:700; line-height:1.2; margin:0; }
        .bkc-h2--center { text-align:center; margin-left:auto; margin-right:auto; max-width:820px; }
        .bkc-sub { font-family:'Poppins',sans-serif; font-size:16px; line-height:26px; margin:12px 0 0; }
        .bkc-sub--center { text-align:center; margin-left:auto; margin-right:auto; max-width:660px; }

        /* Booking section */
        .bkc-book-grid { display:grid; grid-template-columns:0.9fr 1.1fr; gap:44px; align-items:start; }
        .bkc-wyg { display:flex; flex-direction:column; gap:13px; margin:22px 0 0; }
        .bkc-wyg-row { display:flex; align-items:flex-start; gap:11px; font-family:'Poppins',sans-serif; font-size:15px; font-weight:500; color:#1f3d2b; line-height:1.5; }
        .bkc-wyg-row svg { flex-shrink:0; margin-top:2px; }
        .bkc-who { display:flex; gap:12px; align-items:flex-start; margin:24px 0 0; padding:16px 18px; background:#fff; border:1px solid rgba(0,0,0,0.07); border-radius:14px; }
        .bkc-who svg { flex-shrink:0; color:#2A9555; margin-top:1px; }
        .bkc-who p { font-family:'Poppins',sans-serif; font-size:13.5px; color:#334155; line-height:1.55; margin:0; }
        .bkc-book-chips { display:flex; flex-wrap:wrap; gap:8px; margin:22px 0 0; }
        .bkc-chip2 { display:inline-flex; align-items:center; gap:6px; font-family:'Poppins',sans-serif; font-size:12.5px; font-weight:500; color:#1f3d2b; background:#fff; border:1px solid rgba(61,199,122,0.30); border-radius:999px; padding:6px 12px; }
        .bkc-chip2 svg { color:#2A9555; flex-shrink:0; }

        /* Calendar */
        .bkc-cal-card { background:#fff; border-radius:20px; padding:14px; box-shadow:0 24px 70px rgba(0,0,0,.14); border:1px solid rgba(0,0,0,.06); }
        .bkc-cal-wrap { position:relative; min-height:600px; border-radius:12px; overflow:hidden; }
        .bkc-cal-loading { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:#94a3b8; font-family:'Poppins',sans-serif; font-size:14px; }
        .bkc-cal-inline { position:relative; width:100%; min-height:600px; }
        .bkc-cal-inline iframe { width:100% !important; }

        /* Case studies */
        .std-cta-dark { color:#FFFFFF; border:1px solid transparent; border-radius:999px; padding:15px 30px; font-family:'Poppins',sans-serif; font-size:15px; font-weight:600; background:linear-gradient(#000000,#000000) padding-box, #000000 border-box; transition:background .3s ease, transform .25s ease, box-shadow .25s ease; text-decoration:none; }
        .std-cta-dark:hover { color:#FFFFFF; background:linear-gradient(#000000,#000000) padding-box, var(--brand-gradient) border-box; transform:translateY(-1px); box-shadow:0 10px 28px -10px rgba(0,0,0,.45); }
        .std-cta-dark:visited, .std-cta-dark:focus, .std-cta-dark:active { color:#FFFFFF; text-decoration:none; }
        .bkc-cs-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .bkc-cs-card { box-shadow:0 6px 22px rgba(0,0,0,0.05); transition:transform 0.22s ease, box-shadow 0.22s ease; }
        .bkc-cs-card:hover { transform:translateY(-6px); box-shadow:0 16px 48px rgba(0,0,0,0.10); }
        .bkc-cs-card-img { transition:transform 0.4s ease; }
        .bkc-cs-card:hover .bkc-cs-card-img { transform:scale(1.03); }
        .bkc-cs-card-4th { display:none !important; }

        /* FAQ */
        .bkc-faq__list { list-style:none; margin:0; padding:0; }
        .bkc-faq__item { border-bottom:1px solid rgba(0,0,0,0.10); }
        .bkc-faq__q { font-family:'Poppins',sans-serif; font-size:17px; font-weight:600; color:#000; line-height:1.4; flex:1; }
        .bkc-faq__chev { color:#000; flex-shrink:0; }
        .bkc-faq__a-text { font-family:'Poppins',sans-serif; font-size:15px; color:#334155; line-height:1.75; margin:0 0 20px; }

        /* CTA button */
        .bkc-cta-btn { position:relative; display:inline-flex; align-items:center; gap:10px; background:#000; color:#fff; font-family:'Poppins',sans-serif; font-weight:600; font-size:16px; border-radius:999px; padding:16px 36px; text-decoration:none; transition:transform .2s ease, box-shadow .2s ease; }
        .bkc-cta-btn::before { content:''; position:absolute; inset:0; border-radius:999px; padding:2px; background:${GRADIENT}; -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite:destination-out; mask-composite:exclude; opacity:0; transition:opacity .2s ease; pointer-events:none; }
        .bkc-cta-btn:hover::before { opacity:1; }
        .bkc-cta-btn:hover { transform:translateY(-1px); box-shadow:0 12px 30px -10px rgba(0,0,0,.5); }

        /* Sticky mobile CTA */
        .bkc-sticky { display:none; }

        @media (max-width:1024px){ .bkc-h1 { font-size:38px; } }
        @media (max-width:900px){ .bkc-book-grid { grid-template-columns:1fr; gap:30px; } }
        @media (max-width:768px){ .bkc-cs-grid { grid-template-columns:repeat(2,1fr); gap:16px; } .bkc-cs-card-4th { display:flex !important; } }
        @media (max-width:640px){
          .bkc-h1 { font-size:30px; line-height:1.2; }
          .bkc-cal-card { padding:8px; }
          .bkc-faq__q { font-size:15px; }
          .bkc-faq__a-text { font-size:14px; }
          .bkc-sticky { display:flex; position:fixed; left:12px; right:12px; bottom:12px; z-index:50; align-items:center; justify-content:center; gap:8px; background:#000; color:#fff; font-family:'Poppins',sans-serif; font-weight:600; font-size:15px; border-radius:999px; padding:15px 24px; text-decoration:none; box-shadow:0 10px 30px rgba(0,0,0,.35); border:1px solid rgba(97,206,112,0.4); }
        }
        @media (max-width:540px){ .bkc-cs-grid { grid-template-columns:1fr; } .bkc-cs-card-4th { display:none !important; } }
      `}} />
    </>
  );
}
