import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";
import CTASection from "@/components/ui/CTASection";

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: `${cs.brandName} Case Study | ${cs.heroMetric} ${cs.heroSubMetric} | Ecomm Wizards`,
    description: cs.heroDescription,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <>
      <CaseStudyHero cs={cs} />
      <CaseStudyStats cs={cs} />
      <CaseStudyChallenge cs={cs} />
      <CaseStudyApproach cs={cs} />
      {cs.workImages.length > 0 && <CaseStudyWork cs={cs} />}
      <CaseStudyResults cs={cs} />
      {cs.techStack.length > 0 && <CaseStudyTechStack cs={cs} />}
      <CaseStudyQuote cs={cs} />
      <CaseStudyExploreMore current={cs.slug} />
    </>
  );
}

/* ─── Section components ─── */

function CaseStudyHero({ cs }: { cs: CaseStudy }) {
  return (
    <section
      className="cs-hero-section"
      style={{
        background: "#000000",
        padding: "0 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: "radial-gradient(circle, #61ce70 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="cs-hero-inner"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "80px 0 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left */}
        <div className="cs-hero-text">
          <div className="cs-hero-breadcrumb" style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link
              href="/case-studies"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Poppins',sans-serif", fontSize: "13px", textDecoration: "none" }}
            >
              Case Studies
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Poppins',sans-serif", fontSize: "13px" }}>
              {cs.brandName}
            </span>
          </div>

          <div className="cs-hero-badges" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", padding: "4px 14px", fontFamily: "'Poppins',sans-serif", fontSize: "12px", fontWeight: 600, color: "#61ce70", background: "rgba(97,206,112,0.12)", border: "1px solid rgba(97,206,112,0.25)", borderRadius: "9999px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              {cs.industry}
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", padding: "4px 14px", fontFamily: "'Poppins',sans-serif", fontSize: "12px", fontWeight: 600, color: "#ffffff", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "9999px", letterSpacing: "0.04em" }}>
              {cs.serviceType}
            </span>
          </div>

          <h1 style={{ fontFamily: "'Poppins',sans-serif", fontSize: "48px", fontWeight: 700, color: "#ffffff", lineHeight: "58px", margin: "0 0 16px" }}>
            {cs.brandName}
          </h1>

          <p className="cs-hero-desc" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "16px", color: "#ffffff", lineHeight: 1.7, margin: "0 0 32px", maxWidth: "480px" }}>
            {cs.heroDescription}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
            {/* Get Similar Results — green gradient border, black pill → white on hover */}
            <span className="cs-hero-btn-outer group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/contact-shopify-agency"
                className="cs-cta-btn inline-flex items-center gap-[10px] rounded-full bg-black group-hover:bg-white transition-all duration-300 text-white group-hover:text-black"
                style={{ fontFamily: "'Poppins',sans-serif", fontSize: "16px", fontWeight: 600, padding: "20px 45px", height: "60px", textDecoration: "none" }}
              >
                <span className="whitespace-nowrap transition-colors duration-300">Get Similar Results</span>
                <svg width="14" height="11" viewBox="0 0 16 12" fill="none">
                  <path d="M0 6h14M14 6L9 1M14 6L9 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </span>
            {/* All Case Studies — white pill, gradient text on hover (header nav style) */}
            <Link
              href="/case-studies"
              className="cs-cta-btn group inline-flex items-center justify-center rounded-full bg-white border-2 border-transparent hover:border-gold whitespace-nowrap transition-all duration-300"
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "16px", fontWeight: 600, padding: "20px 45px", height: "60px", textDecoration: "none" }}
            >
              <span className="text-black bg-clip-text group-hover:text-transparent transition-colors duration-300" style={{ backgroundImage: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>All Case Studies</span>
            </Link>
          </div>
        </div>

        {/* Right: screenshot */}
        <div className="cs-hero-img-wrap" style={{ position: "relative" }}>
          <div className="cs-hero-img-box" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 32px 80px rgba(0,0,0,0.6)", background: "#1a1a1a", position: "relative" }}>
            <Image src={cs.heroImage} alt={`${cs.brandName} Shopify store`} fill className="object-cover" priority />
          </div>
          {/* Site Metrics floating card — Cashmere banner style */}
          <div className="block_cashmere-banner-sale-box" style={{ position: "absolute", bottom: "-40px", left: "-20px", width: "220px", padding: "20px", background: "#FFFFFF", borderRadius: "16px", boxShadow: "0 16px 48px rgba(0,0,0,0.22)" }}>
            <h5 className="block_cashmere-banner-sale-heading" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "15px", fontWeight: 700, color: "#000000", margin: "0 0 7px" }}>
              Key Results
            </h5>
            {cs.stats.map((stat, i) => (
              <div key={stat.label} className="block_cashmere-banner-sale" style={{ padding: "14px 0", borderTop: i > 0 ? "1px solid rgba(0,0,0,0.07)" : "none", display: "flex", alignItems: "center", gap: "12px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M12 19V5M12 5L6 11M12 5L18 11" stroke="#4a7c59" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <span className="stat-value" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "24px", fontWeight: 600, lineHeight: 1.1, display: "block", color: "#4a7c59" }}>
                    {stat.value}
                  </span>
                  <span className="stat-label" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "12px", color: "#000000", display: "block", marginTop: "2px", whiteSpace: "nowrap" }}>
                    <span className="stat-label-full">{stat.label}</span>
                    <span className="stat-label-short">{stat.shortLabel ?? stat.label}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cs-hero-img-box { aspect-ratio: 16/10; }
        .stat-label-short { display: none; }
        @media (max-width: 1100px) {
          .block_cashmere-banner-sale-box { padding: 14px 16px !important; }
          .block_cashmere-banner-sale { padding: 4px 0 !important; }
          .cs-hero-inner { padding: 80px 0 80px !important; }
        }
        @media (max-width: 1023px) {
          .cs-hero-inner { grid-template-columns: 1fr !important; gap: 40px !important; padding: 80px 0 60px !important; }
          .cs-hero-text h1 { font-size: 36px !important; line-height: 46px !important; }
          .cs-hero-img-wrap { order: -1; }
        }
        @media (max-width: 768px) {
          .cs-hero-inner { padding: 30px 0 30px !important; }
          .cs-hero-breadcrumb { margin-bottom: 16px !important; }
          .cs-hero-badges { margin-bottom: 16px !important; }
          .cs-hero-desc { margin-bottom: 16px !important; }
          .cs-hero-img-wrap { order: 1 !important; display: flex !important; justify-content: center !important; }
          .cs-hero-img-box { aspect-ratio: 16/9 !important; max-height: 380px; width: 100%; }
          .block_cashmere-banner-sale-box { bottom: 12px !important; left: 12px !important; width: 200px !important; padding: 14px !important; }
          .stat-label { white-space: normal !important; }
          .block_cashmere-banner-sale-heading { font-size: 13px !important; margin-bottom: 4px !important; }
          .block_cashmere-banner-sale { padding: 6px 0 !important; }
          .stat-value { font-size: 20px !important; }
        }
        @media (max-width: 639px) {
          .cs-hero-section { padding: 0 15px !important; }
          .cs-hero-inner { padding: 30px 0 30px !important; }
          .cs-hero-text h1 { font-size: 32px !important; line-height: 42px !important; }
          .cs-hero-breadcrumb { margin-bottom: 12px !important; }
          .cs-hero-badges { margin-bottom: 12px !important; }
          .cs-hero-desc { margin-bottom: 12px !important; }
          .block_cashmere-banner-sale-box { width: 160px !important; padding: 10px 12px !important; bottom: 10px !important; left: 10px !important; }
          .block_cashmere-banner-sale-heading { font-size: 12px !important; margin-bottom: 3px !important; }
          .block_cashmere-banner-sale { padding: 4px 0 !important; gap: 8px !important; }
          .stat-value { font-size: 17px !important; }
          .stat-label { font-size: 11px !important; white-space: nowrap !important; }
          .stat-label-full { display: none !important; }
          .stat-label-short { display: inline !important; }
          .cs-hero-btn-outer { width: 100% !important; }
          .cs-cta-btn { padding: 14px 32px !important; height: 52px !important; font-size: 15px !important; width: 100% !important; justify-content: center !important; }
        }
      ` }} />
    </section>
  );
}

function CaseStudyStats({ cs }: { cs: CaseStudy }) {
  return (
    <section className="block_cashmere-review cs-stats-section" style={{ background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.08)", height: "100px", padding: "0 20px" }}>
      <div className="cs-stats-inner" style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", alignItems: "center", height: "100%", overflow: "hidden" }}>

        {/* Left: "Our customers say" + star image + "Excellent" */}
        <div className="cs-stats-left" style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: "14px", padding: "0 40px 0 0" }}>
          <h2 className="block_cashmere-review-heading" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "15px", fontWeight: 400, color: "#000000", margin: 0, whiteSpace: "nowrap" }}>
            Our customers say
          </h2>
          <svg width="100" height="17" viewBox="0 0 100 17" fill="none" aria-label="5 stars" style={{ display: "block", flexShrink: 0 }}>
            {[0,1,2,3,4].map((i) => (
              <polygon key={i} points="10,1 12.4,7.3 19,7.6 14,11.8 15.8,18.5 10,14.9 4.2,18.5 6,11.8 1,7.6 7.6,7.3" transform={`translate(${i * 20}, -1)`} fill="#00B67A" />
            ))}
          </svg>
          <strong style={{ fontFamily: "'Poppins',sans-serif", fontSize: "24px", fontWeight: 700, color: "#000000", whiteSpace: "nowrap" }}>
            Excellent
          </strong>
        </div>

        {/* Right: scrolling marquee */}
        <div className="cs-stats-marquee" style={{ flex: 1, overflow: "hidden", display: "flex", alignItems: "center" }}>
          <div className="cs-marquee-track" style={{ display: "flex", alignItems: "center", width: "max-content" }}>
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1 || undefined} style={{ display: "flex", alignItems: "center" }}>
                {(cs.sliderStats ?? cs.stats.map(s => `${s.label} ${s.value}`)).map((item, i) => (
                  <div key={i} className="block_cashmere-review-list-block" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0 40px 0 0", whiteSpace: "nowrap" }}>
                    <span className="block_cashmere-review-block" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "16px", fontWeight: 400, color: "#000000" }}>
                      {item}
                    </span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M9 14V4M9 4L4 9M9 4L14 9" stroke="#61ce70" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .cs-marquee-track { animation: cs-marquee 16s linear infinite; }
        .cs-marquee-track:hover { animation-play-state: paused; }
        @keyframes cs-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .cs-stats-section { height: auto !important; padding: 20px !important; }
          .cs-stats-inner { flex-direction: column !important; gap: 14px !important; height: auto !important; overflow: visible !important; }
          .cs-stats-left { padding: 0 !important; justify-content: center !important; }
          .cs-stats-marquee { width: 100% !important; flex: none !important; }
        }
        @media (max-width: 639px) {
          .cs-stats-section { padding: 25px 24px !important; }
          .block_cashmere-review-heading { font-size: 14px !important; }
          .cs-stats-left strong { font-size: 20px !important; }
          .block_cashmere-review-block { font-size: 14px !important; }
        }
      ` }} />
    </section>
  );
}

function CaseStudyChallenge({ cs }: { cs: CaseStudy }) {
  return (
    <section style={{ background: "#fbf7ed", padding: "0 20px" }}>
      <div
        className="cs-challenge-inner"
        style={{ maxWidth: "1320px", margin: "0 auto", padding: "30px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
      >
        <div>
          <span style={{ display: "inline-block", padding: "4px 16px", fontFamily: "'Poppins',sans-serif", fontSize: "12px", fontWeight: 600, color: "#4a7c59", background: "rgba(97,206,112,0.1)", border: "1px solid rgba(97,206,112,0.25)", borderRadius: "9999px", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "12px" }}>
            The Challenge
          </span>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: "32px", fontWeight: 700, color: "#000000", lineHeight: "42px", margin: "0 0 12px" }}>
            {cs.challengeTitle}
          </h2>
          {cs.challengeBody.split("\n\n").map((para, i, arr) => (
            <p key={i} style={{ fontFamily: "'Poppins',sans-serif", fontSize: "15px", color: "rgba(0,0,0,0.75)", lineHeight: 1.75, margin: i < arr.length - 1 ? "0 0 12px" : "0" }}>
              {para}
            </p>
          ))}
        </div>
        <div className="cs-challenge-media" style={{ borderRadius: "16px", overflow: "hidden", background: "#000", position: "relative" }}>
          <video
            src="/images/Case%20studies/111skin%20video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", willChange: "transform" }}
          />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .cs-challenge-media { aspect-ratio: 4/3; }
        @media (max-width: 1024px) {
          .cs-challenge-media { aspect-ratio: auto !important; height: 500px !important; }
          .cs-challenge-inner { gap: 40px !important; grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 1023px) {
          .cs-challenge-inner { grid-template-columns: 1fr !important; gap: 40px !important; padding: 30px 0 !important; }
          .cs-challenge-inner h2 { font-size: 32px !important; line-height: 42px !important; }
          .cs-challenge-inner p { font-size: 15px !important; }
          .cs-challenge-media { aspect-ratio: auto !important; height: 500px !important; }
        }
        @media (max-width: 768px) {
          .cs-challenge-inner { gap: 20px !important; }
        }
        @media (max-width: 639px) {
          .cs-challenge-inner { padding: 20px 0 !important; gap: 20px !important; }
          .cs-challenge-inner h2 { font-size: 24px !important; line-height: 34px !important; }
          .cs-challenge-inner p { font-size: 14px !important; }
        }
      ` }} />
    </section>
  );
}

function CaseStudyApproach({ cs }: { cs: CaseStudy }) {
  return (
    <section style={{ background: "#ffffff", padding: "0 20px" }}>
      <div className="cs-approach-outer" style={{ maxWidth: "1320px", margin: "0 auto", padding: "53px 0" }}>
        <div
          className="cs-approach-cream"
          style={{ background: "#FBF7ED", borderRadius: "28px", padding: "48px", boxSizing: "border-box" }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <span style={{ display: "inline-block", padding: "4px 16px", fontFamily: "'Poppins',sans-serif", fontSize: "12px", fontWeight: 600, color: "#4a7c59", background: "rgba(97,206,112,0.1)", border: "1px solid rgba(97,206,112,0.25)", borderRadius: "9999px", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>
              Our Approach
            </span>
            <h2 className="cs-approach-h2" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "42px", fontWeight: 700, color: "#000000", lineHeight: "52px", margin: 0 }}>
              {cs.approachTitle}
            </h2>
          </div>
          {/* Cards */}
          <div className="cs-approach-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "20px" }}>
            {cs.approachItems.map((item) => (
              <div key={item.step} style={{ background: "#ffffff", borderRadius: "16px", padding: "30px", boxSizing: "border-box" }}>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "50px", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>
                  {String(item.step).padStart(2, "0")}.
                </p>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontSize: "20px", fontWeight: 700, color: "#000000", lineHeight: "28px", margin: "0 0 10px" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "15px", color: "rgba(0,0,0,0.75)", lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        /* 1024px–1279px: lg:max-xl equivalent */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .cs-approach-cream { padding: 30px 40px !important; }
          .cs-approach-grid > div { padding: 20px !important; }
          .cs-approach-h2 { font-size: 36px !important; line-height: 46px !important; }
        }
        /* 640px–1023px: md:max-lg equivalent — single column + reduced sizes */
        @media (max-width: 1023px) {
          .cs-approach-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .cs-approach-cream { padding: 20px 30px !important; border-radius: 20px !important; }
          .cs-approach-grid { gap: 16px !important; }
          .cs-approach-grid > div { padding: 16px !important; }
          .cs-approach-grid > div > p:first-child { font-size: 40px !important; }
          .cs-approach-grid > div > h3 { font-size: 18px !important; }
          .cs-approach-grid > div > p:last-child { font-size: 14px !important; }
          .cs-approach-h2 { font-size: 32px !important; line-height: 40px !important; }
        }
        /* <640px: max-sm equivalent */
        @media (max-width: 639px) {
          .cs-approach-outer { padding: 40px 0 !important; }
          .cs-approach-cream { padding: 20px !important; border-radius: 16px !important; }
          .cs-approach-grid { gap: 16px !important; }
          .cs-approach-grid > div { padding: 15px !important; }
          .cs-approach-grid > div > p:first-child { font-size: 35px !important; }
          .cs-approach-grid > div > h3 { font-size: 18px !important; }
          .cs-approach-grid > div > p:last-child { font-size: 14px !important; }
          .cs-approach-h2 { font-size: 28px !important; line-height: 36px !important; font-weight: 600 !important; }
        }
      ` }} />
    </section>
  );
}

function CaseStudyWork({ cs }: { cs: CaseStudy }) {
  return (
    <section style={{ background: "#000000", padding: "0 20px", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ pointerEvents: "none", position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle, #61ce70 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "40px 0", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <span style={{ display: "inline-block", padding: "4px 16px", fontFamily: "'Poppins',sans-serif", fontSize: "12px", fontWeight: 600, color: "#61ce70", background: "rgba(97,206,112,0.12)", border: "1px solid rgba(97,206,112,0.2)", borderRadius: "9999px", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>
            The Work
          </span>
          <h2 className="cs-work-h2" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "42px", fontWeight: 700, color: "#ffffff", lineHeight: "52px", margin: 0 }}>
            {cs.workTitle ?? "What We Built"}
          </h2>
          {cs.workSubtitle && (
            <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "16px", color: "#ffffff", lineHeight: 1.65, margin: "12px 0 0" }}>
              {cs.workSubtitle}
            </p>
          )}
        </div>
        <div className="cs-work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }}>
          {cs.workImages.map((img, i) => (
            <div key={i} style={{ borderRadius: "12px", overflow: "hidden", background: "#111111", position: "relative", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="cs-work-img-box" style={{ position: "relative", aspectRatio: "16/10" }}>
                <Image src={img} alt={`${cs.brandName} design ${i + 1}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) { .cs-work-grid { gap: 12px !important; } }
        @media (max-width: 767px) {
          .cs-work-grid { grid-template-columns: 1fr !important; }
          .cs-work-h2 { font-size: 32px !important; line-height: 40px !important; }
        }
        @media (max-width: 639px) {
          .cs-work-h2 { font-size: 28px !important; line-height: 36px !important; }
        }
      ` }} />
    </section>
  );
}

function CaseStudyResults({ cs }: { cs: CaseStudy }) {
  return (
    <section style={{ background: "#000000", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ pointerEvents: "none", position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle, #61ce70 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Row 1: Big title left + description right */}
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "40px 20px 0", position: "relative", zIndex: 1 }}>
        <div className="cs-results-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", marginBottom: "40px" }}>
          <h2 className="cs-results-title" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "42px", fontWeight: 900, color: "#ffffff", lineHeight: 1.2, margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
            The Results
          </h2>
          {cs.resultsDescription && (
            <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "17px", color: "#ffffff", lineHeight: 1.8, margin: 0 }}>
              {cs.resultsDescription}
            </p>
          )}
        </div>

        {/* Row 2: 4 improvement stats */}
        <div className="cs-results-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {cs.results.map((result, i) => (
            <div key={result.label} className="cs-results-stat-cell" style={{ padding: "40px 24px", textAlign: "center", borderRight: i < cs.results.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <p className="cs-results-pct" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "56px", fontWeight: 800, color: "#61ce70", lineHeight: 1, margin: "0 0 10px", letterSpacing: "-0.02em" }}>
                {result.improvement}
              </p>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "12px", fontWeight: 600, color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px" }}>
                {result.label}
              </p>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "13px", color: "#ffffff", margin: 0 }}>
                {result.before} → {result.after}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3: Marquee ticker — full width */}
      {cs.sliderStats && cs.sliderStats.length > 0 && (
        <div className="cs-results-marquee-wrap" style={{ overflow: "hidden", padding: "40px 0 40px", position: "relative", zIndex: 1 }}>
          <div className="cs-results-marquee" style={{ display: "flex", gap: "12px", width: "max-content" }}>
            {[...cs.sliderStats, ...cs.sliderStats].map((stat, i) => (
              <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: "10px", padding: "12px 22px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "9999px", whiteSpace: "nowrap" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#61ce70", flexShrink: 0, display: "inline-block" }} />
                <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                  {stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes cs-results-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .cs-results-marquee { animation: cs-results-scroll 30s linear infinite; }
        .cs-results-marquee:hover { animation-play-state: paused; }
        @media (max-width: 1023px) {
          .cs-results-header { grid-template-columns: 1fr !important; gap: 30px !important; margin-bottom: 40px !important; }
          .cs-results-title { font-size: 36px !important; }
          .cs-results-stats { grid-template-columns: repeat(2,1fr) !important; }
          .cs-results-stat-cell:nth-child(2) { border-right: none !important; }
          .cs-results-stat-cell:nth-child(1),
          .cs-results-stat-cell:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,0.1) !important; }
        }
        @media (max-width: 768px) {
          .cs-results-title { text-align: center !important; }
          .cs-results-header { margin-bottom: 20px !important; }
        }
        @media (max-width: 639px) {
          .cs-results-title { font-size: 30px !important; text-align: center !important; }
          .cs-results-header { gap: 16px !important; margin-bottom: 20px !important; }
          .cs-results-stat-cell { padding: 28px 16px !important; }
          .cs-results-pct { font-size: 40px !important; }
          .cs-results-marquee-wrap { padding-top: 20px !important; }
        }
      ` }} />
    </section>
  );
}

function CaseStudyTechStack({ cs }: { cs: CaseStudy }) {
  return (
    <section style={{ background: "#ffffff", padding: "0 20px" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "40px 0", textAlign: "center" }}>
        <span style={{ display: "inline-block", padding: "4px 16px", fontFamily: "'Poppins',sans-serif", fontSize: "12px", fontWeight: 600, color: "#4a7c59", background: "rgba(97,206,112,0.1)", border: "1px solid rgba(97,206,112,0.25)", borderRadius: "9999px", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "20px" }}>
          Apps &amp; Tools Used
        </span>
        <div className="cs-tech-grid" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "12px" }}>
          {cs.techStack.map((tool) => (
            <div key={tool.name} className="cs-tech-card" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 36px", background: "#FBF7ED", border: "1px solid rgba(0,0,0,0.08)", borderRadius: "16px" }}>
              <div style={{ width: "110px", height: "44px", position: "relative", flexShrink: 0 }}>
                <Image src={tool.logo} alt={tool.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .cs-tech-card { width: calc(50% - 6px) !important; box-sizing: border-box !important; }
        }
        @media (max-width: 639px) {
          .cs-tech-card { width: calc(50% - 6px) !important; padding: 16px 20px !important; box-sizing: border-box !important; }
        }
      ` }} />
    </section>
  );
}

function CaseStudyQuote({ cs }: { cs: CaseStudy }) {
  return (
    <section style={{ background: "#FBF7ED", padding: "0 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 0", textAlign: "center" }}>
        <svg width="56" height="42" viewBox="0 0 56 42" fill="none" style={{ marginBottom: "24px" }}>
          <path d="M0 42V24.5C0 10.99 9.4 2.02 28.2 0L29.75 4.7C19.97 6.46 15.08 11.62 15.08 20.18H24.5V42H0ZM31.5 42V24.5C31.5 10.99 40.9 2.02 59.7 0L61.25 4.7C51.47 6.46 46.58 11.62 46.58 20.18H56V42H31.5Z" fill="#61ce70" />
        </svg>
        <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "22px", fontWeight: 400, color: "#000000", lineHeight: 1.65, margin: "0 0 40px", fontStyle: "italic" }}>
          &ldquo;{cs.quote}&rdquo;
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, position: "relative" }}>
            {cs.quoteAvatar ? (
              <Image src={cs.quoteAvatar} alt={cs.quotePerson} fill className="object-cover object-top" />
            ) : (
              <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#61ce70 0%,#4ab85a 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Poppins',sans-serif", fontSize: "20px", fontWeight: 700, color: "#fff" }}>
                {cs.quotePerson.charAt(0)}
              </div>
            )}
          </div>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "16px", fontWeight: 700, color: "#000000", margin: "0 0 2px" }}>
              {cs.quotePerson}
            </p>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "14px", color: "rgba(0,0,0,0.6)", margin: 0 }}>
              {cs.quoteRole}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyExploreMore({ current }: { current: string }) {
  const cards = CASE_STUDIES.filter((cs) => cs.slug !== current);
  const all = cards.length > 0 ? cards : CASE_STUDIES;
  return (
    <section style={{ background: "#f5f5f3", padding: "60px 0 0" }}>
      {/* Header row */}
      <div className="cs-explore-header" style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 40px 40px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
          <h2 className="cs-explore-h2" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "72px", fontWeight: 800, color: "#000000", textTransform: "uppercase", letterSpacing: "-0.03em", lineHeight: 1, margin: 0 }}>
            Explore More
          </h2>
          <span style={{ background: "#ffe342", color: "#000000", fontFamily: "'Poppins',sans-serif", fontSize: "13px", fontWeight: 700, borderRadius: "9999px", padding: "4px 10px", marginTop: "8px", flexShrink: 0 }}>
            {all.length}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0, paddingBottom: "6px" }}>
          <Link href="/contact-shopify-agency" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "14px", fontWeight: 600, color: "#ffffff", background: "#000000", borderRadius: "9999px", padding: "12px 24px", textDecoration: "none", whiteSpace: "nowrap" }}>
            Work With Us
          </Link>
          <Link href="/case-studies" style={{ fontFamily: "'Poppins',sans-serif", fontSize: "14px", fontWeight: 600, color: "#000000", background: "transparent", border: "1.5px solid #000000", borderRadius: "9999px", padding: "12px 24px", textDecoration: "none", whiteSpace: "nowrap" }}>
            View All Work
          </Link>
        </div>
      </div>

      {/* Scrollable cards */}
      <div className="cs-explore-scroll" style={{ overflowX: "auto", paddingBottom: "32px", cursor: "grab" }}>
        <div className="cs-explore-track" style={{ display: "flex", gap: "16px", paddingLeft: "40px", paddingRight: "40px", width: "max-content" }}>
          {all.map((cs) => {
            const tags = cs.serviceType.split("|").map((t) => t.trim());
            const stat = cs.stats[0];
            return (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="cs-explore-card" style={{ display: "block", width: "340px", flexShrink: 0, background: "#ffffff", borderRadius: "16px", overflow: "hidden", textDecoration: "none" }}>
                {/* Image */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: "#e8e8e8" }}>
                  <Image src={cs.heroImage} alt={cs.brandName} fill className="object-cover" />
                  {/* Stat badge */}
                  <div style={{ position: "absolute", top: "14px", left: "14px", background: "rgba(255,255,255,0.96)", borderRadius: "9999px", padding: "5px 12px", display: "flex", alignItems: "center", gap: "6px", backdropFilter: "blur(4px)" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#000000", display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: "12px", fontWeight: 600, color: "#000000", whiteSpace: "nowrap" }}>
                      {stat.shortLabel ?? stat.label} {stat.value}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: "20px" }}>
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "18px", fontWeight: 700, color: "#000000", margin: "0 0 12px", lineHeight: 1.3 }}>
                    {cs.brandName}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {tags.map((tag) => (
                      <span key={tag} style={{ fontFamily: "'Poppins',sans-serif", fontSize: "11px", fontWeight: 500, color: "#555555", background: "#f0f0f0", borderRadius: "9999px", padding: "3px 10px", whiteSpace: "nowrap" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cs-explore-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .cs-explore-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.10); }
        .cs-explore-scroll::-webkit-scrollbar { height: 3px; }
        .cs-explore-scroll::-webkit-scrollbar-track { background: rgba(0,0,0,0.08); }
        .cs-explore-scroll::-webkit-scrollbar-thumb { background: #000000; border-radius: 9999px; }
        @media (max-width: 768px) {
          .cs-explore-h2 { font-size: 44px !important; }
          .cs-explore-header { padding: 0 20px 32px !important; flex-direction: column; align-items: flex-start !important; }
          .cs-explore-track { padding-left: 20px !important; padding-right: 20px !important; }
        }
      ` }} />
    </section>
  );
}
