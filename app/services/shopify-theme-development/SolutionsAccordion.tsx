"use client";
import { useState } from "react";

const SOLUTIONS = [
  {
    title: "Purpose-Built for Your Brand",
    body: "A theme shaped around your products and customers, giving your store a clearer path from browsing to purchase.",
  },
  {
    title: "Theme Redesign and Upgrades",
    body: "We rebuild outdated layouts into modern, faster, and cleaner structures. Your store becomes easier to navigate and performs better across all devices.",
  },
  {
    title: "UX and UI Improvements",
    body: "We refine page layouts, information order, and interactive elements so customers move through the store with less friction and more confidence.",
  },
  {
    title: "Performance and Speed Optimization",
    body: "We streamline code, reduce bloat, optimize media, and improve load times to support stronger engagement and higher conversion.",
  },
  {
    title: "Conversion-Focused Page Structures",
    body: "We organize home, collection, and product pages around buyer behavior, helping visitors discover products quickly and complete purchases with fewer barriers.",
  },
  {
    title: "Flexible Sections and Components",
    body: "We create modular sections and reusable blocks, allowing your team to update content easily while keeping the store consistent.",
  },
  {
    title: "App-Free Feature Development",
    body: "We replace unnecessary apps with native theme features when possible, improving speed, stability, and long-term maintainability.",
  },
  {
    title: "Shopify Plus Enhancements",
    body: "For high-volume brands, we prepare themes to support advanced features, scalable merchandising, and a smoother enterprise-level experience.",
  },
];

export default function SolutionsAccordion() {
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
