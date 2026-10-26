"use client";
import { useState } from "react";

const SOLUTIONS = [
  {
    title: "Custom Shopify 2.0 Design",
    body: "We build every landing page as editable Shopify 2.0 sections, not locked templates. Your team can update headlines, swap images, and change layouts from the customizer without touching code.",
  },
  {
    title: "Mobile-First Build",
    body: "68% of ad traffic arrives on mobile. We design on mobile first, then adapt to desktop. Every button size, image crop, and text hierarchy is tested on the devices your buyers actually use.",
  },
  {
    title: "Conversion Architecture",
    body: "We structure every page around how buyers actually decide: a single above-fold hook, proof points placed at the right scroll depth, scarcity and urgency that is real not manufactured, and one clear path to checkout. No section exists without a conversion reason.",
  },
  {
    title: "Speed Optimisation",
    body: "Page speed is a conversion variable. We target sub-2.5s load times: compressed assets, no render-blocking scripts, and clean Liquid with no third-party builder overhead slowing down the page.",
  },
  {
    title: "Analytics and Pixel Setup",
    body: "Every build includes GA4 event tracking, Meta Pixel purchase and add-to-cart events, TikTok Pixel if you run TikTok ads, and Google Ads conversion tracking. You see exactly how each page performs before scaling spend.",
  },
  {
    title: "A/B Test Variants",
    body: "We structure pages so you can test headlines, offers, and layouts without a rebuild. Variant pages are built to the same standard as the original, with matching pixel setup so results are clean and comparable.",
  },
  {
    title: "Direct-to-Checkout Paths",
    body: "Buy buttons go straight to Shopify checkout, not to the cart. Removing the cart step reduces friction on high-intent ad traffic and improves checkout initiation rates. We configure this for every campaign page.",
  },
  {
    title: "Post-Launch Support",
    body: "Every build includes a 30-day support window. We QA the page on live traffic, fix anything that surfaces, and refine copy or layout based on early performance data.",
  },
];

export default function LpAccordion() {
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
