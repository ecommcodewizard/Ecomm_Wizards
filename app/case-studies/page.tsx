import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/lib/case-studies";

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
              margin: "0 0 56px",
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
            {CASE_STUDIES.map((cs) => {
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
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : cs.slug === "evie-lou-shopify-fashion-cro" ? (
                      <video
                        src="/images/Case%20studies/evie-lou%20video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : (
                      <Image
                        src={cs.heroImage}
                        alt={cs.brandName}
                        fill
                        className="object-cover cs-landing-card-img"
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

          /* Stats row */
          .cs-landing-stats {
            display: flex;
            gap: 0;
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 16px;
            overflow: hidden;
            width: fit-content;
          }
          .cs-landing-stat-item {
            padding: 24px 40px;
            border-right: 1px solid rgba(255,255,255,0.1);
          }
          .cs-landing-stat-item:last-child { border-right: none; }
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
            .cs-landing-stat-item { padding: 20px 28px; }
            .cs-landing-stat-val { font-size: 28px; }
            .cs-landing-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
            .cs-landing-grid-h2 { font-size: 32px; }
            .cs-landing-cta-h2 { font-size: 44px; }
          }
          @media (max-width: 768px) {
            .cs-landing-h1 { font-size: 38px; }
            .cs-landing-sub { font-size: 16px; }
            .cs-landing-stats {
              flex-wrap: wrap;
              width: 100%;
              border-radius: 12px;
            }
            .cs-landing-stat-item {
              width: 50%;
              box-sizing: border-box;
              border-right: 1px solid rgba(255,255,255,0.1) !important;
              border-bottom: 1px solid rgba(255,255,255,0.1);
              padding: 18px 20px;
            }
            .cs-landing-stat-item:nth-child(2n) { border-right: none !important; }
            .cs-landing-stat-item:nth-last-child(-n+2) { border-bottom: none; }
            .cs-landing-stat-val { font-size: 24px; }
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
          }
        `,
      }} />
    </>
  );
}
