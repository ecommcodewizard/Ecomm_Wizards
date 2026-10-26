"use client";

import { useState } from "react";
import Link from "next/link";

type AppCard = {
  slug: string;
  name: string;
  category: string;
  tags: string[];
  stat: string;
  statLabel: string;
  description: string;
  /** Optional: falls back to the brand name when no logo asset exists. */
  logo?: string;
  bg: string;
  image?: string;
  video?: string;
  href: string;
};

const DEFAULT_APP_FILTERS = ["All", "Print-on-Demand", "Checkout & Delivery", "Custom App", "Gift Cards", "Bundles & Upsell", "Wishlist & Social"];

type Props = {
  cards: AppCard[];
  badge?: string;
  heading?: string;
  filters?: string[];
};

export default function ShopifyAppsSection({ cards, badge = "Shopify Apps", heading = "Powerful Shopify apps, across every use case.", filters = DEFAULT_APP_FILTERS }: Props) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? cards : cards.filter((c) => c.category === active);

  return (
    <>
      {/* ── Section header + filters ── */}
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
            {badge}
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
            {heading}
          </h2>

          {/* Filter pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {filters.map((label) => {
              const isActive = active === label;
              return (
                <button
                  key={label}
                  onClick={() => setActive(label)}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#ffffff" : "#000000",
                    background: isActive ? "#000000" : "transparent",
                    border: `1.5px solid ${isActive ? "#000000" : "rgba(0,0,0,0.18)"}`,
                    borderRadius: "9999px",
                    padding: "8px 20px",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── App Cards Grid ── */}
      <section style={{ background: "#ffffff", padding: "0 20px 80px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", paddingTop: "60px" }}>
          <div className="cs-landing-grid">
            {filtered.map((app) => (
              <Link
                key={app.slug}
                href={app.href}
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
                {/* Visual */}
                <div
                  style={{
                    position: "relative",
                    width: "calc(100% - 16px)",
                    margin: "8px 8px 0",
                    borderRadius: "14px",
                    overflow: "hidden",
                    flexShrink: 0,
                    aspectRatio: "16/10",
                    background: app.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {app.video ? (
                    <video
                      src={app.video}
                      autoPlay loop muted playsInline preload="metadata"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : app.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={app.image}
                      alt={app.name}
                      loading="lazy"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <>
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          inset: 0,
                          opacity: 0.05,
                          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                          backgroundSize: "28px 28px",
                        }}
                      />
                      {app.logo ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={app.logo}
                          alt={app.name}
                          loading="lazy"
                          style={{
                            height: "38px",
                            width: "auto",
                            maxWidth: "150px",
                            objectFit: "contain",
                            filter: "brightness(0) invert(1)",
                            position: "relative",
                            zIndex: 1,
                          }}
                        />
                      ) : (
                        /* No logo asset supplied: fall back to the brand name. */
                        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22px", fontWeight: 700, color: "#ffffff", letterSpacing: "0.02em", position: "relative", zIndex: 1 }}>
                          {app.name}
                        </span>
                      )}
                    </>
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
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#000000", display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 400, color: "#000000", whiteSpace: "nowrap" }}>{app.statLabel}</span>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", fontWeight: 700, color: "#000000", whiteSpace: "nowrap" }}>{app.stat}</span>
                  </div>

                  {/* Category pill */}
                  <div
                    className="cs-card-industry"
                    style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.65)", borderRadius: "9999px", padding: "4px 12px" }}
                  >
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 500, color: "#ffffff", whiteSpace: "nowrap" }}>{app.category}</span>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flexGrow: 1, gap: "12px" }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22px", fontWeight: 700, color: "#000000", margin: 0, lineHeight: 1.2 }}>
                    {app.name}
                  </p>
                  <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
                  <div className="cs-card-tags" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {app.tags.map((tag) => (
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
                  <p
                    className="cs-landing-desc"
                    style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: "rgba(0,0,0,0.55)", margin: 0, lineHeight: 1.6, flexGrow: 1 }}
                  >
                    {app.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
