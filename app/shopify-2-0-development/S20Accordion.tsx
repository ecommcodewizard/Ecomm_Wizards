"use client";
import { useState } from "react";

const SOLUTIONS = [
  {
    title: "Full Shopify 2.0 Store Build",
    body: "We build Shopify 2.0 stores from scratch: clean JSON templates, reusable sections and blocks, structured metafields, and App Block integrations across every page type. Every build is scoped to your catalog, team structure, and operational requirements. You get a store your team can manage and your customers can convert on from day one.",
  },
  {
    title: "Shopify 1.0 to 2.0 Theme Migration",
    body: "We migrate your store from a legacy 1.0 theme to Shopify 2.0 without touching your live store. We rebuild sections, move content into metafields, reconnect apps as native App Blocks, and go live in a single planned cutover. Your products, orders, and customer data are never affected.",
  },
  {
    title: "Custom Sections & Block Components",
    body: "We build reusable Shopify 2.0 sections and blocks your team drags, drops, and configures across any page. Product callouts, testimonial grids, campaign banners, and image-text pairs, all built to your design spec and editable from the theme editor without developer involvement.",
  },
  {
    title: "Metafields & Metaobjects Setup",
    body: "We design and implement a structured metafield architecture across your products, collections, and pages. Size guides, ingredient lists, technical specs, and custom badges are stored properly in Shopify and surfaced cleanly on the front end, without relying on third-party apps or theme hacks.",
  },
  {
    title: "Modular Landing Page Systems",
    body: "We build a library of Shopify 2.0 sections your marketing team uses to build landing pages on demand. New collection launches, seasonal campaigns, and promotional pages built in hours, not weeks. No developer required for each new campaign your team runs.",
  },
  {
    title: "App Block Integration & Cleanup",
    body: "We audit your current app stack, remove legacy script injections, and reinstall apps as native 2.0 App Blocks where supported. The result is a faster, more stable store that does not break every time an app updates or a theme file is edited.",
  },
  {
    title: "Conversion-Focused Page Templates",
    body: "We build distinct templates for your highest-traffic pages: product pages, collection pages, and campaign landing pages, each structured around how your buyers actually behave. Different product types get different layouts. Every template is tested for conversion before it goes live.",
  },
  {
    title: "Speed & Performance Optimisation",
    body: "We audit your current theme for bloat, unused scripts, render-blocking assets, and unoptimised media. On Shopify 2.0, the foundation is already faster. We take it further, targeting 90+ Lighthouse scores and strong Core Web Vitals across every device and connection speed.",
  },
  {
    title: "Ongoing 2.0 Retainer",
    body: "We offer monthly Shopify 2.0 retainers covering new section builds, app updates, metafield extensions, and performance monitoring. You get direct access to the developers who built your store, not a support queue. Most clients continue on retainer after their initial 2.0 project.",
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
