"use client";

import { useState } from "react";
import { ABOUT_FAQS, type FAQ } from "@/lib/about-faqs";

type Props = {
  title?: string;
  faqs?: FAQ[];
};

export default function FAQSection({
  title = "Frequently Asked Questions About Our Shopify Agency",
  faqs = ABOUT_FAQS,
}: Props = {}) {
  const FAQS = faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section" style={{ background: "#FFFFFF", padding: "0 20px" }}>
      <div
        className="faq-inner"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "60px 0",
          color: "#334155",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
        }}
      >
        <h2
          className="faq-title elementor-heading-title elementor-size-default"
          role="heading"
          aria-level={2}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "42px",
            fontWeight: 700,
            color: "#000000",
            lineHeight: "52px",
            width: "1055.99px",
            maxWidth: "100%",
            textAlign: "center",
            margin: "0 auto 40px",
            padding: 0,
          }}
        >
          {title}
        </h2>

        <div className="ekit-accordion" style={{ width: "100%", maxWidth: "1290px", margin: "0 auto" }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`ekit-accordion-item ${isOpen ? "is-open" : ""}`}
                style={{ borderTop: idx === 0 ? "1px solid #EAEAEA" : "none", borderBottom: "1px solid #EAEAEA" }}
              >
                <button
                  type="button"
                  className="ekit-accordion-header"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-trigger-${idx}`}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "22px 4px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <span
                    className="ekit-accordion-title"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000000",
                      lineHeight: "30px",
                      padding: "0 10px 0 0",
                      flex: "1 1 auto",
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="ekit-accordion-icon"
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    {isOpen ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M12 4L6 10M12 4L18 10" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${idx}`}
                  className="ekit-accordion-panel"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease, padding 0.3s ease",
                    padding: isOpen ? "0 4px 24px" : "0 4px",
                  }}
                >
                  <p
                    style={{
                      width: "1290px",
                      maxWidth: "100%",
                      margin: "0 0 0 36px",
                      color: "#000000CC",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .faq-section { padding: 0 15px !important; }
          .faq-section .faq-inner { padding: 40px 0 !important; }
          .faq-section .faq-title {
            font-size: 28px !important;
            line-height: 38px !important;
            width: 100% !important;
            margin: 0 auto 24px !important;
          }
          .faq-section .ekit-accordion-header {
            padding: 18px 4px !important;
          }
          .faq-section .ekit-accordion-title {
            font-size: 17px !important;
            line-height: 24px !important;
          }
          .faq-section .ekit-accordion-panel p {
            font-size: 14px !important;
            line-height: 22px !important;
            margin-left: 4px !important;
          }
        }
      ` }} />
    </section>
  );
}
