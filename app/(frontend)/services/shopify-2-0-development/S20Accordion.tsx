"use client";
import { useState } from "react";

const SOLUTIONS = [
  {
    title: "Full Shopify 2.0 Store Build",
    body: "We build Shopify 2.0 stores from scratch with clean JSON templates, reusable sections, structured metafields, and native App Blocks. Scoped to your catalog and team so you can manage it from day one.",
  },
  {
    title: "Shopify 1.0 to 2.0 Theme Migration",
    body: "We migrate your store from a legacy 1.0 theme to Shopify 2.0 without touching your live store. Sections rebuilt, content moved to metafields, apps reconnected as App Blocks, go-live in a single planned cutover.",
  },
  {
    title: "Custom Sections & Block Components",
    body: "We build reusable sections and blocks your team configures across any page from the theme editor. Product callouts, testimonial grids, campaign banners — built to spec, no developer needed to update them.",
  },
  {
    title: "Metafields & Metaobjects Setup",
    body: "We design and implement structured metafields across products, collections, and pages. Size guides, specs, badges, and ingredients stored properly in Shopify and surfaced on the front end, no third-party apps required.",
  },
  {
    title: "Modular Landing Page Systems",
    body: "We build a section library your marketing team uses to launch landing pages on demand. New campaigns built in hours, not weeks. No developer required for every promotion your team runs.",
  },
  {
    title: "App Block Integration & Cleanup",
    body: "We audit your app stack, remove legacy script injections, and reinstall apps as native App Blocks. Faster store, cleaner code, no breakages when apps or theme files update.",
  },
  {
    title: "Conversion-Focused Page Templates",
    body: "We build distinct templates for your highest-traffic pages: product, collection, and campaign landing pages, each structured around how your buyers actually behave. Tested for conversion before go-live.",
  },
  {
    title: "Speed & Performance Optimisation",
    body: "We audit your theme for bloat, unused scripts, and render-blocking assets. We target 90+ Lighthouse scores and strong Core Web Vitals across every device and connection speed.",
  },
  {
    title: "Ongoing 2.0 Retainer",
    body: "Monthly retainers covering new section builds, app updates, metafield extensions, and performance monitoring. Direct access to the developers who built your store, not a support queue.",
  },
];

export default function S20Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="std-acc">
      {SOLUTIONS.map((s, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={s.title}
            className="std-acc-item"
            style={{ borderTop: i === 0 ? "1px solid rgba(17,17,17,.14)" : undefined }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ flex: 1, fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 600, color: "#000000", lineHeight: 1.4 }}>
                {s.title}
              </span>
              <span className={`std-acc-icon${isOpen ? " std-acc-icon--open" : ""}`} style={{ flexShrink: 0, color: "#000000", transition: "transform .3s ease", display: "block" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <path d="M4 6L9 12L14 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
                transition: "grid-template-rows 0.28s ease, opacity 0.22s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p style={{ margin: "0 0 20px", fontFamily: "'Poppins', sans-serif", fontSize: 16, color: "#334155", lineHeight: "28px" }}>
                  {s.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
