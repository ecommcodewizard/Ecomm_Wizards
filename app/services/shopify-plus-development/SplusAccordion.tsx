"use client";
import { useState } from "react";

const SOLUTIONS = [
  {
    title: "Custom Shopify Plus Build",
    body: "We build Shopify Plus stores from scratch: architecture, checkout flows, B2B configuration, and integrations scoped to your catalog and operations. You get a store that works for your business from day one.",
  },
  {
    title: "Zero-Downtime Migration",
    body: "We migrate from Magento, WooCommerce, BigCommerce, and standard Shopify to Plus with full data transfer, redirect mapping, SEO preservation, and a rollback plan. Cutover happens in a low-traffic window.",
  },
  {
    title: "Checkout Extensibility",
    body: "We build native Checkout Extensions: upsells, gift messages, loyalty redemption, and branded UI inside the Shopify Plus checkout. No redirects, no third-party replacements. Higher AOV without added friction.",
  },
  {
    title: "Headless and Composable Commerce",
    body: "We build headless Shopify Plus stores via the Storefront API when performance or brand requirements go beyond standard themes. Shopify handles commerce; your front end is built exactly to spec.",
  },
  {
    title: "B2B and Wholesale Portal",
    body: "We configure Shopify Plus B2B: company profiles, segment pricing, net terms, and self-service wholesale portals. Trade buyers order without calling your team. B2B and DTC run from one admin.",
  },
  {
    title: "Custom App and API Development",
    body: "We build private Shopify apps, admin extensions, and API-driven features when the app store falls short. Custom pricing logic, operational workflows, and buyer experiences built directly into the platform.",
  },
  {
    title: "ERP, CRM, and 3PL Integration",
    body: "We connect Shopify Plus to NetSuite, SAP, HubSpot, Salesforce, Brightpearl, and custom 3PL systems. Real bidirectional integrations that sync inventory, orders, and customer data at scale.",
  },
  {
    title: "Performance Optimization",
    body: "We audit and rebuild Shopify Plus stores with app bloat or Core Web Vitals problems. Target: 90+ Lighthouse scores. Faster stores rank higher and convert better.",
  },
  {
    title: "Ongoing Retainer",
    body: "Monthly retainers covering platform updates, integration maintenance, new features, and checkout optimisation. Direct access to the developers who built your store, not a support queue.",
  },
];

export default function SplusAccordion() {
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
