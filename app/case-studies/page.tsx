import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/lib/case-studies";
import SpeedVideo from "./SpeedVideo";

export const metadata: Metadata = {
  title: "Case Studies | Real Results for Real Brands | Ecomm Wizards",
  description:
    "See how Ecomm Wizards has helped Shopify brands across fashion, beauty, health, food, sports, jewellery, and B2B grow revenue, increase conversion rates, and scale their stores.",
  alternates: { canonical: "https://ecommwizards.com/case-studies" },
};

const GRADIENT =
  "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";
const GRADIENT_TEXT = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const PAGE_STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "700+", label: "Stores Built" },
  { value: "$900M+", label: "Revenue Generated" },
  { value: "28.5%", label: "Avg Conversion Lift" },
];

const HERO_LOGOS = [
  "/images/trust_logo_hover_1.svg",
  "/images/trust_logo_hover_2.svg",
  "/images/trust_logo_hover_10.svg",
  "/images/trust_logo_hover_11.svg",
  "/images/trust_logo_hover_12.svg",
  "/images/trust_logo_hover_13.svg",
  "/images/trust_logo_hover_14.svg",
  "/images/trust_logo_2.svg",
  "/images/trust_logo_6.svg",
  "/images/trust_logo_7.svg",
  "/images/trust_logo_20.svg",
  "/images/trust_logo_26.svg",
  "/images/trust_logo_27.svg",
  "/images/trust_logo_31.svg",
  "/images/trust_logo_32.svg",
  "/images/ipsy-logo.svg",
  "/images/everlast-icon.svg",
];

const INDUSTRY_FILTERS = [
  { label: "All", value: "all" },
  { label: "Fashion", value: "Fashion & Apparel" },
  { label: "Beauty", value: "Cosmetics & Beauty" },
  { label: "Health & Wellness", value: "Health, Wellness & Fitness" },
  { label: "Food & Drink", value: "Food & Beverages" },
  { label: "Sports", value: "Sports & Fitness" },
  { label: "Jewellery", value: "Jewelry & Accessories" },
  { label: "B2B", value: "B2B & Wholesale" },
];

const FEATURED_CASE_STUDIES = [
  {
    slug: "candy-kittens-shopify-food-beverage-cro",
    brandName: "Candy Kittens",
    heroMetric: "+182%",
    heroSubMetric: "Conversion Rate",
    serviceType: "Shopify CRO · Theme Development",
    video: "/images/Case%20studies/Candy%20Kittens%20video.mp4",
  },
  {
    slug: "everlast-shopify-plus-sports-redesign",
    brandName: "Everlast",
    heroMetric: "+152%",
    heroSubMetric: "Conversion Rate",
    serviceType: "Shopify Plus · Redesign",
    video: "/images/Case%20studies/Everlast%20video.mp4",
  },
  {
    slug: "111skin-shopify-cro-redesign",
    brandName: "111SKIN",
    heroMetric: "+46%",
    heroSubMetric: "Conversion Rate",
    serviceType: "Shopify CRO · Theme Development",
    video: "/images/Case%20studies/111skin%20video.mp4",
  },
];

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: Promise<{ industry?: string }>;
}) {
  const { industry: activeIndustry = "all" } = await searchParams;
  const filteredStudies =
    activeIndustry === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.industry === activeIndustry);

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="cs-hero-section"
        style={{
          background: "#000000",
          padding: "0 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Green glow */}
        <div
          aria-hidden="true"
          className="cs-hero-glow"
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 55% 45% at 70% 40%, rgba(61,199,122,0.35) 0%, rgba(61,199,122,0.15) 40%, rgba(61,199,122,0.05) 65%, transparent 80%)",
          }}
        />
        {/* Dot pattern */}
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
            padding: "60px 0 60px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="cs-hero-grid">

            {/* ── Left column ── */}
            <div className="cs-hero-left">
              {/* Badge */}
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 16px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#61ce70",
                  background: "rgba(97,206,112,0.18)",
                  border: "1px solid rgba(97,206,112,0.5)",
                  borderRadius: "9999px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                Our Work
              </span>

              <h1
                className="cs-landing-h1"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  color: "#ffffff",
                  margin: "0 0 24px",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                Shopify Growth for Brands{" "}
                <span style={{ color: "#ffffff" }}>That Mean </span>
                <span style={GRADIENT_TEXT}>Business.</span>
              </h1>

              <p
                className="cs-landing-sub"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "#ffffff",
                  margin: "0 0 48px",
                  lineHeight: 1.7,
                }}
              >
                We design, build, and optimise Shopify stores around one goal: more revenue. Browse the work below and see exactly what that looks like.
              </p>

              {/* Stats row */}
              <div className="cs-landing-stats">
                {PAGE_STATS.map((s) => (
                  <div key={s.label} className="cs-landing-stat-item">
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                        ...GRADIENT_TEXT,
                        display: "block",
                        lineHeight: 1,
                        marginBottom: "6px",
                      }}
                      className="cs-landing-stat-val"
                    >
                      {s.value}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        color: "#ffffff",
                        display: "block",
                        lineHeight: 1.4,
                      }}
                      className="cs-landing-stat-label"
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right column ── */}
            <div className="cs-hero-right" style={{ minWidth: 0, overflow: "hidden" }}>

              {/* Testimonial card */}
              <Link
                href="/case-studies/evie-lou-shopify-fashion-cro"
                style={{
                  display: "block",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  padding: "24px",
                  textDecoration: "none",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                }}
                className="cs-hero-testimonial"
              >
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <Image
                    src="/images/Case%20studies/Kim%20Crow.jpg"
                    alt="Kim Crow"
                    width={52}
                    height={52}
                    style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0, width: "52px", height: "52px" }}
                  />
                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: "15px",
                        color: "rgba(255,255,255,0.9)",
                        margin: "0 0 14px",
                        lineHeight: 1.65,
                      }}
                    >
                      &ldquo;We always knew the brand looked great. We just could not figure out why the store was not converting. Ecomm Wizards found the problem fast and fixed it properly.&rdquo;
                    </p>
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      Kim Crow &nbsp;·&nbsp; Owner, Evie Lou
                    </span>
                  </div>
                </div>
              </Link>

              {/* Trusted by + logo marquee */}
              <div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    margin: "0 0 16px",
                  }}
                >
                  Trusted by world-class ecommerce brands
                </p>

                {/* Marquee */}
                <div style={{ overflow: "hidden", position: "relative", background: "#000000" }}>
                  {/* fade edges */}
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "48px", background: "linear-gradient(to right, #000000, transparent)", zIndex: 2, pointerEvents: "none" }} />
                  <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "48px", background: "linear-gradient(to left, #000000, transparent)", zIndex: 2, pointerEvents: "none" }} />
                  <div className="cs-hero-marquee">
                    {[...HERO_LOGOS, ...HERO_LOGOS].map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        src={src}
                        alt=""
                        style={{ objectFit: "contain", flexShrink: 0, filter: "invert(1)", mixBlendMode: "screen", opacity: 1, width: "180px", height: "72px", display: "block" }}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Case Studies ── */}
      <section className="cs-featured-section" style={{ background: "#000000", padding: "0 20px 60px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div className="cs-featured-grid">
            {FEATURED_CASE_STUDIES.map((item) => (
              <Link
                key={item.slug}
                href={`/case-studies/${item.slug}`}
                className="cs-featured-card"
                style={{
                  position: "relative",
                  display: "block",
                  borderRadius: "20px",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >
                {/* Video */}
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 35%, rgba(0,0,0,0.72) 100%)",
                    zIndex: 1,
                  }}
                />

                {/* Stat badge — top left */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    zIndex: 2,
                    background: "rgba(255,255,255,0.95)",
                    borderRadius: "9999px",
                    padding: "5px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#000000", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", fontWeight: 700, color: "#000000", whiteSpace: "nowrap" }}>
                    {item.heroMetric} {item.heroSubMetric}
                  </span>
                </div>

                {/* Bottom info */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px 20px 24px",
                    zIndex: 2,
                  }}
                >
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "21px", fontWeight: 700, color: "#ffffff", margin: "0 0 4px", lineHeight: 1.2 }}>
                    {item.brandName}
                  </p>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.65)", margin: 0 }}>
                    {item.serviceType}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Filter ── */}
      <section style={{ background: "#FBF7ED", padding: "0 20px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "40px 0 40px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "4px 16px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              color: "#000000",
              background: "transparent",
              border: "1.5px solid rgba(0,0,0,0.2)",
              borderRadius: "9999px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Explore by industry
          </span>
          <h2
            className="cs-industry-h2"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: "#000000",
              margin: "0 0 36px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Diverse Shopify experience,{" "}
            <span style={{ color: "#000000" }}>across every industry.</span>
          </h2>

          {/* Filter pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {INDUSTRY_FILTERS.map((f) => {
              const isActive = activeIndustry === f.value;
              return (
                <Link
                  key={f.value}
                  href={f.value === "all" ? "/case-studies" : `/case-studies?industry=${encodeURIComponent(f.value)}`}
                  scroll={false}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#ffffff" : "#000000",
                    background: isActive ? "#000000" : "transparent",
                    border: `1.5px solid ${isActive ? "#000000" : "rgba(0,0,0,0.18)"}`,
                    borderRadius: "9999px",
                    padding: "8px 20px",
                    textDecoration: "none",
                    transition: "all 0.18s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {f.label}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section
        style={{
          background: "#ffffff",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "60px 0 60px",
          }}
        >
          {/* Card grid */}
          <div className="cs-landing-grid">
            {filteredStudies.map((cs, index) => {
              const tags = cs.serviceType.split("|").map((t) => t.trim());
              const stat = cs.stats[0];
              return (
                <Link
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}`}
                  className="cs-landing-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#FBF7ED",
                    borderRadius: "20px",
                    overflow: "hidden",
                    textDecoration: "none",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      width: "calc(100% - 16px)",
                      margin: "8px 8px 0",
                      borderRadius: "14px",
                      overflow: "hidden",
                      flexShrink: 0,
                      aspectRatio: "16/10",
                      background: "#e0ddd5",
                    }}
                  >
                    {cs.slug === "111skin-shopify-cro-redesign" ? (
                      <video
                        src="/images/Case%20studies/111skin%20video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : cs.slug === "evie-lou-shopify-fashion-cro" ? (
                      <video
                        src="/images/Case%20studies/evie-lou%20video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : cs.slug === "happy-mammoth-shopify-subscriptions-cro" ? (
                      <video
                        src="/images/Case%20studies/happy-mammoth-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : cs.slug === "candy-kittens-shopify-food-beverage-cro" ? (
                      <video
                        src="/images/Case%20studies/Candy%20Kittens%20video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : cs.slug === "everlast-shopify-plus-sports-redesign" ? (
                      <video
                        src="/images/Case%20studies/Everlast%20video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : cs.slug === "ronaldo-jewelry-shopify-plus-redesign" ? (
                      <SpeedVideo
                        src="/images/Case%20studies/Ronaldo%20Jewelry-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : cs.slug === "mouldings-one-shopify-b2b-portal" ? (
                      <SpeedVideo
                        src="/images/Case%20studies/Mouldings%20One%20video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : cs.slug === "wild-shopify-plus-subscriptions" ? (
                      <video
                        src="/images/Case%20studies/WeareWild%20video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : cs.slug === "dryrobe-shopify-plus-redesign" ? (
                      <video
                        src="/images/Case%20studies/dryrobe%20video%20test.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : (
                      <Image
                        src={cs.heroImage}
                        alt={cs.brandName}
                        fill
                        className="object-cover cs-landing-card-img"
                        priority={index < 3}
                        loading={index < 3 ? undefined : "lazy"}
                        sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    )}

                    {/* Stat badge */}
                    <div
                      className="cs-card-stat"
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "rgba(255,255,255,0.97)",
                        borderRadius: "9999px",
                        padding: "5px 14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#000000",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "12px",
                          fontWeight: 400,
                          color: "#000000",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {stat.shortLabel ?? stat.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "13px",
                          fontWeight: 700,
                          color: "#000000",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {stat.value}
                      </span>
                    </div>

                    {/* Industry pill — top right */}
                    <div
                      className="cs-card-industry"
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "rgba(0,0,0,0.72)",
                        borderRadius: "9999px",
                        padding: "4px 12px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "11px",
                          fontWeight: 500,
                          color: "#ffffff",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {cs.industry}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div
                    style={{
                      padding: "20px 20px 24px",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      gap: "12px",
                    }}
                  >
                    {/* Brand + arrow */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "12px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "22px",
                          fontWeight: 700,
                          color: "#000000",
                          margin: 0,
                          lineHeight: 1.2,
                        }}
                      >
                        {cs.brandName}
                      </p>
                    </div>

                    {/* Divider */}
                    <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />

                    {/* Service tags */}
                    <div className="cs-card-tags" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "11px",
                            fontWeight: 500,
                            color: "#444444",
                            background: "transparent",
                            border: "1px solid rgba(0,0,0,0.22)",
                            borderRadius: "9999px",
                            padding: "3px 10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hero description preview */}
                    <p
                      className="cs-landing-desc"
                      style={{
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: "14px",
                        color: "rgba(0,0,0,0.55)",
                        margin: 0,
                        lineHeight: 1.6,
                        flexGrow: 1,
                      }}
                    >
                      {cs.heroDescription.length > 120
                        ? cs.heroDescription.slice(0, 120).trimEnd() + "…"
                        : cs.heroDescription}
                    </p>

                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      <style dangerouslySetInnerHTML={{
        __html: `
          /* Hero heading */
          .cs-landing-h1 { font-size: 64px; }
          .cs-landing-sub { font-size: 18px; max-width: 620px; }

          /* Hero 2-col grid */
          .cs-hero-grid {
            display: grid;
            grid-template-columns: 55fr 45fr;
            gap: 64px;
            align-items: center;
            overflow: hidden;
          }
          .cs-hero-left  { min-width: 0; }
          .cs-hero-right {
            display: flex;
            flex-direction: column;
            gap: 28px;
            min-width: 0;
            overflow: hidden;
            width: 100%;
          }
          .cs-hero-testimonial:hover {
            background: rgba(255,255,255,0.08) !important;
            border-color: rgba(255,255,255,0.18) !important;
          }

          /* Marquee */
          @keyframes cs-marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .cs-hero-marquee {
            display: flex;
            gap: 0;
            align-items: center;
            width: max-content;
            animation: cs-marquee 22s linear infinite;
          }
          .cs-hero-marquee:hover { animation-play-state: paused; }

          /* Stats row — inline, no box */
          .cs-landing-stats {
            display: flex;
            gap: 0;
          }
          .cs-landing-stat-item {
            padding-right: 28px;
            margin-right: 28px;
            border-right: 1px solid rgba(255,255,255,0.15);
          }
          .cs-landing-stat-item:last-child {
            border-right: none;
            padding-right: 0;
            margin-right: 0;
          }
          .cs-landing-stat-val { font-size: 36px; }
          .cs-landing-stat-label { font-size: 14px; }

          /* Featured cards — portrait on large screens */
          @media (min-width: 1440px) {
            .cs-featured-card { aspect-ratio: 3 / 4 !important; }
          }

          /* Featured case studies grid */
          .cs-featured-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .cs-featured-card {
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          .cs-featured-card:hover {
            transform: scale(1.02);
            box-shadow: 0 24px 60px rgba(0,0,0,0.5);
          }

          /* Industry filter heading */
          .cs-industry-h2 { font-size: 48px; }

          /* Section heading */
          .cs-landing-grid-h2 { font-size: 40px; }

          /* Card grid */
          .cs-landing-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          /* Card hover */
          .cs-landing-card {
            transition: transform 0.22s ease, box-shadow 0.22s ease;
          }
          .cs-landing-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 48px rgba(0,0,0,0.10);
          }
          .cs-landing-card:hover .cs-landing-arrow {
            background: #3DC77A !important;
          }
          .cs-landing-card:hover .cs-landing-card-img {
            transform: scale(1.03);
            transition: transform 0.4s ease;
          }
          .cs-landing-card-img {
            transition: transform 0.4s ease;
          }


          /* ─── Responsive ─── */
          @media (max-width: 1024px) {
            .cs-hero-glow { opacity: 0.4; }
            .cs-card-industry { display: none; }
            .cs-hero-section { padding: 0 40px !important; }
            .cs-hero-inner { padding: 40px 0 !important; }
            .cs-landing-sub { margin-bottom: 20px !important; max-width: 100% !important; }
            .cs-featured-grid { grid-template-columns: repeat(3, 1fr); }
            .cs-featured-card { aspect-ratio: unset !important; height: 380px; }
            .cs-landing-h1 { font-size: 48px; }
            .cs-hero-grid { grid-template-columns: 1fr; gap: 48px; }
            .cs-hero-right { display: none; }
            .cs-landing-stat-item { padding-right: 20px; margin-right: 20px; }
            .cs-landing-stat-val { font-size: 48px; }
            .cs-landing-stat-label { font-size: 14px; margin-top: 8px; }
            .cs-landing-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
            .cs-landing-desc { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
            .cs-card-tags { flex-wrap: nowrap !important; overflow: hidden; }
            .cs-industry-h2 { font-size: 36px; }
            .cs-landing-grid-h2 { font-size: 32px; }
          }
          @media (max-width: 768px) {
            .cs-industry-h2 { font-size: 38px; margin-bottom: 24px !important; }
            .cs-landing-h1 { font-size: 38px; }
            .cs-landing-sub { font-size: 18px; }
            .cs-landing-stat-val { font-size: 40px; }
            .cs-landing-stat-label { font-size: 14px; margin-top: 8px; }
            .cs-hero-grid { gap: 36px; }
            .cs-hero-right { max-width: 100%; }
            .cs-landing-stats { flex-wrap: nowrap; gap: 0; }
            .cs-landing-stat-item {
              flex: 1;
              padding: 0 16px;
              margin: 0;
              border-right: 1px solid rgba(255,255,255,0.15);
              text-align: center;
            }
            .cs-landing-stat-item:first-child { padding-left: 0; text-align: left; }
            .cs-landing-stat-item:last-child { border-right: none; padding-right: 0; text-align: right; }
            .cs-landing-stat-val { font-size: 32px; }
            .cs-landing-stat-label { font-size: 14px; margin-top: 6px; }
            .cs-landing-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
            .cs-landing-desc { display: none; }
          }
          @media (max-width: 639px) {
            .cs-hero-section { padding: 0 20px !important; }
            .cs-featured-section { padding: 0 30px 60px !important; }
            .cs-hero-inner { padding: 20px 0 !important; }
            .cs-landing-h1 { margin-bottom: 16px !important; }
            .cs-industry-h2 { font-size: 34px !important; margin-bottom: 16px !important; }
            .cs-landing-grid { grid-template-columns: 1fr !important; gap: 16px; }
            .cs-featured-grid {
              display: flex !important;
              grid-template-columns: unset !important;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              gap: 14px;
              padding-bottom: 8px;
              scrollbar-width: none;
            }
            .cs-featured-grid::-webkit-scrollbar { display: none; }
            .cs-featured-card {
              flex-shrink: 0 !important;
              width: 68vw !important;
              height: 320px !important;
              aspect-ratio: unset !important;
              scroll-snap-align: start;
            }
            .cs-landing-stats { flex-wrap: wrap; gap: 0; }
            .cs-landing-stat-item {
              flex: none !important;
              width: 50% !important;
              padding: 16px 20px !important;
              margin: 0 !important;
              border-right: 1px solid rgba(255,255,255,0.1) !important;
              border-bottom: 1px solid rgba(255,255,255,0.1);
              text-align: left !important;
              box-sizing: border-box;
            }
            .cs-landing-stat-item:nth-child(even) { border-right: none !important; }
            .cs-landing-stat-item:nth-last-child(-n+2) { border-bottom: none; }
            .cs-landing-stat-val { font-size: 32px; }
            .cs-landing-stat-label { font-size: 13px; margin-top: 4px; }
          }
          @media (max-width: 540px) {
            .cs-landing-h1 { font-size: 32px; }
            .cs-landing-grid { grid-template-columns: 1fr; }
            .cs-landing-desc { display: block; }
          }
        `,
      }} />
    </>
  );
}
