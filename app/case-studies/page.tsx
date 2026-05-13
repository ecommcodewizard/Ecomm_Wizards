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
  { value: "7", label: "Published Case Studies" },
  { value: "700+", label: "Stores Built" },
  { value: "$900M+", label: "Client Revenue Generated" },
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

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          background: "#000000",
          padding: "0 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
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
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "100px 0 80px",
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
                  color: "#4a7c59",
                  background: "rgba(97,206,112,0.1)",
                  border: "1px solid rgba(97,206,112,0.25)",
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
                  fontWeight: 800,
                  color: "#ffffff",
                  margin: "0 0 24px",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                Real brands.{" "}
                <span style={GRADIENT_TEXT}>Real results.</span>
              </h1>

              <p
                className="cs-landing-sub"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  color: "rgba(255,255,255,0.65)",
                  margin: "0 0 48px",
                  lineHeight: 1.7,
                }}
              >
                Every case study here is built on a real client engagement — real challenges, real decisions, and real
                numbers. No stock results. No inflated claims. Just the work.
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
                        color: "rgba(255,255,255,0.55)",
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
            <div className="cs-hero-right">

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
                  <div>
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
                        fontWeight: 600,
                        color: "#61ce70",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7.5" stroke="#61ce70" />
                        <path d="M6.5 5.5L11 8L6.5 10.5V5.5Z" fill="#61ce70" />
                      </svg>
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
                <div style={{ overflow: "hidden", position: "relative" }}>
                  {/* fade edges */}
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "48px", background: "linear-gradient(to right, #000000, transparent)", zIndex: 2, pointerEvents: "none" }} />
                  <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "48px", background: "linear-gradient(to left, #000000, transparent)", zIndex: 2, pointerEvents: "none" }} />
                  <div className="cs-hero-marquee">
                    {[...HERO_LOGOS, ...HERO_LOGOS].map((src, i) => (
                      <Image
                        key={i}
                        src={src}
                        alt=""
                        width={90}
                        height={32}
                        style={{ objectFit: "contain", flexShrink: 0, filter: "brightness(0) invert(1)", opacity: 0.45, width: "90px", height: "32px" }}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section
        style={{
          background: "#f5f5f0",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "80px 0 100px",
          }}
        >
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "48px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <h2
                className="cs-landing-grid-h2"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  color: "#000000",
                  margin: "0 0 8px",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                }}
              >
                Case Studies
              </h2>
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "16px",
                  color: "rgba(0,0,0,0.5)",
                  margin: 0,
                }}
              >
                {CASE_STUDIES.length} published &nbsp;·&nbsp; Click any card to read the full story
              </p>
            </div>
            <Link
              href="/contact-shopify-agency"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#ffffff",
                background: "#000000",
                borderRadius: "9999px",
                padding: "12px 28px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Start Your Project
              <svg width="14" height="10" viewBox="0 0 15 10.55" fill="none">
                <path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Card grid */}
          <div className="cs-landing-grid">
            {CASE_STUDIES.map((cs, index) => {
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
                    ) : (
                      <Image
                        src={cs.heroImage}
                        alt={cs.brandName}
                        fill
                        className="object-cover cs-landing-card-img"
                        priority={index < 3}
                      />
                    )}

                    {/* Stat badge */}
                    <div
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
                      <span
                        className="cs-landing-arrow"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          background: "#000000",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <svg width="14" height="10" viewBox="0 0 15 10.55" fill="none">
                          <path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>

                    {/* Divider */}
                    <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />

                    {/* Service tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
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

                    {/* Read link */}
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#000000",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginTop: "4px",
                      }}
                      className="cs-landing-read"
                    >
                      Read Case Study
                      <svg width="13" height="9" viewBox="0 0 15 10.55" fill="none">
                        <path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
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
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "100px 0",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "4px 16px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: "#4a7c59",
              background: "rgba(97,206,112,0.1)",
              border: "1px solid rgba(97,206,112,0.25)",
              borderRadius: "9999px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Ready to Grow?
          </span>

          <h2
            className="cs-landing-cta-h2"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              color: "#ffffff",
              margin: "0 0 20px",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Your brand could be{" "}
            <span style={GRADIENT_TEXT}>next.</span>
          </h2>

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "18px",
              color: "rgba(255,255,255,0.6)",
              margin: "0 auto 40px",
              maxWidth: "560px",
              lineHeight: 1.7,
            }}
          >
            Book a free strategy call and we will show you exactly where your Shopify store is leaving money on the
            table.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "2px",
                borderRadius: "9999px",
                background: GRADIENT,
              }}
            >
              <Link
                href="/book-shopify-consultation"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#ffffff",
                  background: "#000000",
                  borderRadius: "9999px",
                  padding: "14px 36px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Book a Free Call
                <svg width="14" height="10" viewBox="0 0 15 10.55" fill="none">
                  <path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </span>

            <Link
              href="/free-shopify-store-audit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                color: "#ffffff",
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.25)",
                borderRadius: "9999px",
                padding: "14px 36px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Get a Free Audit
            </Link>
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
          }
          .cs-hero-right {
            display: flex;
            flex-direction: column;
            gap: 28px;
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
            gap: 36px;
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

          /* CTA heading */
          .cs-landing-cta-h2 { font-size: 56px; }

          /* ─── Responsive ─── */
          @media (max-width: 1024px) {
            .cs-landing-h1 { font-size: 48px; }
            .cs-hero-grid { grid-template-columns: 1fr; gap: 48px; }
            .cs-hero-right { max-width: 560px; }
            .cs-landing-stat-item { padding-right: 20px; margin-right: 20px; }
            .cs-landing-stat-val { font-size: 28px; }
            .cs-landing-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
            .cs-landing-grid-h2 { font-size: 32px; }
            .cs-landing-cta-h2 { font-size: 44px; }
          }
          @media (max-width: 768px) {
            .cs-landing-h1 { font-size: 38px; }
            .cs-landing-sub { font-size: 16px; }
            .cs-hero-grid { gap: 36px; }
            .cs-hero-right { max-width: 100%; }
            .cs-landing-stats { flex-wrap: wrap; gap: 16px; }
            .cs-landing-stat-item {
              border-right: none !important;
              padding-right: 0;
              margin-right: 0;
              width: calc(50% - 8px);
            }
            .cs-landing-stat-val { font-size: 26px; }
            .cs-landing-stat-label { font-size: 13px; }
            .cs-landing-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
            .cs-landing-desc { display: none; }
            .cs-landing-cta-h2 { font-size: 34px; }
          }
          @media (max-width: 540px) {
            .cs-landing-h1 { font-size: 32px; }
            .cs-landing-grid { grid-template-columns: 1fr; }
            .cs-landing-desc { display: block; }
            .cs-landing-cta-h2 { font-size: 28px; }
            .cs-landing-stat-item { width: 100%; }
          }
        `,
      }} />
    </>
  );
}
