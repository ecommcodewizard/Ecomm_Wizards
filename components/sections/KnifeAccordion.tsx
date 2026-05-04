"use client";
import { useState } from "react";

const items = [
  { title: "One Team, Zero Gaps",                          body: "Shopify Design, dev, and marketing working together — not in silos." },
  { title: "Ecommerce Strategy First, Always",             body: "Every Shopify project gets a dedicated strategist, not a task manager." },
  { title: "Launch Fast, Scale Faster with Shopify Plus",  body: "We start in days, not weeks. Speed without cutting corners." },
  { title: "Built to Convert using Shopify Best Practices",body: "Pretty stores don't pay bills. Ours are designed to sell." },
  { title: "Traffic That Actually Buys",                   body: "Media buying, funnels, and retention built around your margins." },
];

export default function KnifeAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.title} style={{ borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 600, color: "#000000", paddingRight: "10px" }}>
                {item.title}
              </span>
              <span style={{ flexShrink: 0 }}>
                {isOpen ? (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 16V3M9 3L5 8M9 3L13 8" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 6L9 12L14 6" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
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
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "rgba(0,0,0,0.8)", paddingBottom: "16px", lineHeight: "1.6", margin: 0 }}>
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
