"use client";
import { useId, useState } from "react";
import { inline } from "./Prose";

// Accessible FAQ accordion for geo programme pages. Mirrors the behavior of
// app/services/shopify-development-agency/SdaFaqAccordion.tsx with a "gfaq-"
// class prefix, aria-expanded / aria-controls wiring, and answers rendered
// through inline() so [NEEDS INPUT] / [src:id] / [link:...] markers work.

export type GeoFaqItem = { q: string; a: string };

export default function GeoFaqAccordion({ faqs, idPrefix }: { faqs: GeoFaqItem[]; idPrefix?: string }) {
  const [openIndex, setOpenIndex] = useState(0);
  const autoId = useId();
  const prefix = idPrefix ?? `gfaq${autoId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <ul className="gfaq-list">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const panelId = `${prefix}-panel-${i}`;
        const buttonId = `${prefix}-button-${i}`;
        return (
          <li key={`${i}-${faq.q}`} className="gfaq-item">
            <h3 className="gfaq-h">
              <button
                type="button"
                id={buttonId}
                className="gfaq-btn"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="gfaq-q">{inline(faq.q)}</span>
                <span className="gfaq-chev" aria-hidden="true" data-open={isOpen ? "true" : "false"}>
                  <svg viewBox="0 0 32 32" width="14" height="14" focusable="false">
                    <path
                      d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="gfaq-panel" data-open={isOpen ? "true" : "false"}>
              <div className="gfaq-panel-inner">
                <p className="gfaq-a">{inline(faq.a)}</p>
              </div>
            </div>
          </li>
        );
      })}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gfaq-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid #E5E7EB; font-family: 'Poppins', sans-serif; }
          .gfaq-item { border-bottom: 1px solid #E5E7EB; }
          .gfaq-h { margin: 0; font-size: inherit; font-weight: inherit; }
          .gfaq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 0; background: none; border: none; cursor: pointer; text-align: left; color: #000000; font-family: inherit; border-radius: 6px; }
          .gfaq-btn:focus-visible { outline: 3px solid #3DC77A; outline-offset: 2px; }
          .gfaq-q { color: #000000; font-weight: 600; font-size: 16px; line-height: 1.4; flex: 1; }
          .gfaq-chev { display: inline-flex; align-items: center; justify-content: center; color: #000000; flex-shrink: 0; transition: transform .2s ease; }
          .gfaq-chev[data-open="true"] { transform: rotate(180deg); }
          .gfaq-panel { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows .28s ease, opacity .22s ease; }
          .gfaq-panel[data-open="true"] { grid-template-rows: 1fr; opacity: 1; }
          .gfaq-panel-inner { overflow: hidden; visibility: hidden; transition: visibility 0s linear .28s; }
          .gfaq-panel[data-open="true"] .gfaq-panel-inner { visibility: visible; transition-delay: 0s; }
          .gfaq-a { margin: 0 0 22px; color: #334155; font-size: 15px; line-height: 1.7; }
          .gfaq-a a { color: #2A9555; text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }
          @media (min-width: 1024px) { .gfaq-q { font-size: 17px; } .gfaq-a { font-size: 16px; } }
          @media (prefers-reduced-motion: reduce) { .gfaq-chev, .gfaq-panel { transition: none; } }
        `,
        }}
      />
    </ul>
  );
}
