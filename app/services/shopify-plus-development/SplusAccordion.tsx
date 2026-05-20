"use client";
import { useState } from "react";

const SOLUTIONS = [
  {
    title: "Custom Shopify Plus Build",
    body: "We build Shopify Plus stores from the ground up: architecture, checkout flows, B2B configuration, integrations, and performance optimization. Every build is scoped to your specific catalog, customer base, and operational requirements. You get a store that works for your business from day one, not a template your team works around.",
  },
  {
    title: "Zero-Downtime Migration",
    body: "We migrate brands from Magento, WooCommerce, BigCommerce, and lower-tier Shopify to Shopify Plus with full data transfer, URL redirect mapping, SEO preservation, and integration rebuilds. Every migration includes a rollback plan. The cutover happens in a low-traffic window. The new store outperforms what you left behind from launch day.",
  },
  {
    title: "Checkout Extensibility",
    body: "We build native Checkout Extensions that add upsells, gift messages, custom input fields, loyalty reward redemption, and branded UI elements directly inside the Shopify Plus checkout. No third-party checkout replacements, no redirects. Everything runs inside the native checkout and increases average order value without adding friction at the moment customers are about to buy.",
  },
  {
    title: "Headless and Composable Commerce",
    body: "For brands that need complete front-end control, we build headless Shopify Plus stores using the Storefront API. Your buying experience is built exactly to your spec. The Shopify Plus backend handles commerce operations, inventory, checkout, and payments. Useful when performance requirements or brand guidelines go beyond what standard themes support.",
  },
  {
    title: "B2B and Wholesale Portal",
    body: "We configure Shopify Plus B2B properly: company profiles, customer-specific pricing by segment, net payment terms, draft orders, and self-service wholesale portals. Your trade buyers place orders without calling your sales team. B2B and DTC revenue run from the same platform, managed from one admin, without the overhead of separate systems.",
  },
  {
    title: "Custom App and API Development",
    body: "We build private Shopify apps, custom admin extensions, and API-driven features that the standard app store cannot provide. If your operational workflows, pricing logic, or customer experience requirements go beyond what existing apps can support, we build it into the platform directly using Shopify's APIs and Functions.",
  },
  {
    title: "ERP, CRM, and 3PL Integration",
    body: "We connect Shopify Plus to NetSuite, SAP, HubSpot, Salesforce, Brightpearl, and custom 3PL systems. Real bidirectional API integrations that sync inventory, orders, and customer data reliably at scale. Not off-the-shelf connectors that break under volume. Custom-built integrations that match how your business actually operates.",
  },
  {
    title: "Performance Optimization",
    body: "We audit, rebuild, and optimize Shopify Plus stores that have accumulated technical debt, app bloat, or performance problems. Load testing, Core Web Vitals remediation, CDN configuration, and image optimization. Target: 90+ Lighthouse scores. Faster stores rank higher and convert better. This is not optional at enterprise scale.",
  },
  {
    title: "Ongoing Retainer",
    body: "We offer monthly Shopify Plus development retainers covering platform updates, integration maintenance, new feature development, A/B testing, and checkout optimization. You get direct access to the developers who built your store, not a support ticket queue. Most clients continue on retainer after their initial project.",
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
              <span style={{ flex: 1, fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: "#000000", lineHeight: 1.4 }}>
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
