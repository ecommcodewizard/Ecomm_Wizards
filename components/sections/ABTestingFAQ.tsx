"use client";

import { useState } from "react";
import Link from "next/link";

type FAQ = { question: string; answer: string };

export default function ABTestingFAQ({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}>
      <div className="mx-auto grid gap-10 px-5 lg:grid-cols-[1.1fr_1fr] lg:gap-14" style={{ maxWidth: "var(--container-max)" }}>
        {/* Left — FAQ accordion */}
        <div>
          <h2 className="font-bold text-white text-[28px] leading-[36px] sm:text-[36px] sm:leading-[46px] lg:text-[42px] lg:leading-[52px]">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.question} className="border-t" style={{ borderColor: idx === 0 ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.1)" }}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`ab-faq-panel-${idx}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    style={{ background: "transparent", border: "none", cursor: "pointer" }}
                  >
                    <span className="text-[16px] font-semibold leading-snug text-white sm:text-[17px]">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 transition-transform"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        {isOpen ? (
                          <path d="M12 4V20M12 4L6 10M12 4L18 10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        ) : (
                          <path d="M6 9L12 15L18 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        )}
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`ab-faq-panel-${idx}`}
                    role="region"
                    style={{
                      maxHeight: isOpen ? "500px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.3s ease, padding 0.3s ease",
                      paddingBottom: isOpen ? "20px" : "0px",
                    }}
                  >
                    <p className="text-[14.5px] leading-[24px] text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
          </div>
        </div>

        {/* Right — Dark CTA card (slightly lighter than section bg for visual separation) */}
        <div className="flex items-center">
          <div className="w-full rounded-[18px] p-8 text-center sm:p-12" style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)" }}>
            <h2 className="font-bold text-white text-[24px] leading-[32px] sm:text-[30px] sm:leading-[40px] lg:text-[34px] lg:leading-[44px]">
              Ready to Run Your First Winning Test?
            </h2>
            <p className="mt-5 text-[13.5px] leading-[22px] text-white/65 sm:text-[14px]">
              Results vary by traffic and audience. All uplift figures come from real case studies and Shoplift reporting. Benchmarks are directional, not guarantees. But when the best A/B testing tools for ecommerce personalization meet a team that knows how to use them, the wins speak for themselves.
            </p>
            <Link
              href="/book-shopify-consultation"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white transition-all"
              style={{
                border: "1.5px solid transparent",
                borderRadius: "var(--radius-full)",
                background:
                  "linear-gradient(#1a1a1a,#1a1a1a) padding-box, var(--brand-gradient) border-box",
              }}
            >
              Start the A/B Test Drive
              <svg width="16" height="12" viewBox="0 0 15 10.55" fill="none">
                <path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
