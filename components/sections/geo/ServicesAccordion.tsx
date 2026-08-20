"use client";

import Link from "next/link";
import { useState } from "react";
import { inline } from "./Prose";
import type { ServicesList } from "@/lib/geo/types";

// Section 5 of the Shopify development landing page: a sticky intro column on
// the left, an accordion of services on the right. The first item opens on
// load, so the section never reads as a wall of closed rows.
//
// Every item's body is in the DOM whether the row is open or not (the closed
// state is a 0fr grid row, not `display: none`), so crawlers and AI answer
// engines read the whole list even though a human sees one at a time.

export default function ServicesAccordion({ data }: { data: ServicesList }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="gpsa" aria-label={data.heading}>
      <div className="gpsa-grid">
        <div className="gpsa-left">
          <span className="gpsa-label">{data.label}</span>
          <h2 className="gpsa-h2">{inline(data.heading)}</h2>
          <p className="gpsa-intro">{inline(data.intro)}</p>
          <Link href="#contact" className="gpsa-cta">
            {data.ctaLabel}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="gpsa-acc">
          {data.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.title} className={`gpsa-item${i === 0 ? " gpsa-item--first" : ""}`}>
                <button
                  type="button"
                  className="gpsa-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="gpsa-q-text">{item.title}</span>
                  <span className={`gpsa-chev${isOpen ? " gpsa-chev--open" : ""}`} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 6L9 12L14 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div className="gpsa-a" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}>
                  <div style={{ overflow: "hidden" }}>
                    <p className="gpsa-a-text">{inline(item.body)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Dark band. It sits between the white "what we do" section and the
           cream segments section, and it marks the point where the page stops
           talking about us and starts listing what you get. */
        .gpsa { background: #000000; font-family: 'Poppins', sans-serif; padding: 60px 20px; }
        .gpsa-grid { max-width: 1320px; margin: 0 auto; display: grid; gap: 56px; }
        @media (min-width: 1024px) { .gpsa-grid { grid-template-columns: 1.2fr 1fr; align-items: start; } .gpsa-left { position: sticky; top: 120px; align-self: start; } }

        .gpsa-label { font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #61ce70; }
        .gpsa-h2 { color: #ffffff; font-size: 42px; font-weight: 700; line-height: 1.2; margin: 12px 0 0; text-wrap: balance; }
        .gpsa-intro { color: rgba(255,255,255,0.78); font-size: 16px; line-height: 28px; margin: 20px 0 0; max-width: 620px; }
        .gpsa-intro a { color: #61ce70; text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }
        .gpsa-cta { display: inline-flex; align-items: center; gap: 10px; margin-top: 28px; padding: 14px 26px; border-radius: 9999px; background: #ffffff; color: #000000; font-size: 15px; font-weight: 600; text-decoration: none; transition: background .2s ease, color .2s ease, gap .2s ease; }
        .gpsa-cta:hover { background: #61ce70; color: #06210f; gap: 14px; }
        .gpsa-cta:focus-visible { outline: 3px solid #3DC77A; outline-offset: 3px; }

        .gpsa-acc { border-bottom: 1px solid rgba(255,255,255,.16); }
        .gpsa-item { border-top: 1px solid rgba(255,255,255,.16); }
        .gpsa-q { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 20px 0; background: none; border: none; cursor: pointer; text-align: left; }
        .gpsa-q:focus-visible { outline: 3px solid #3DC77A; outline-offset: 2px; border-radius: 4px; }
        .gpsa-q-text { flex: 1; font-size: 18px; font-weight: 600; color: #ffffff; line-height: 1.4; }
        .gpsa-chev { flex-shrink: 0; color: #61ce70; display: block; transition: transform .3s ease; }
        .gpsa-chev--open { transform: rotate(180deg); }
        .gpsa-a { display: grid; transition: grid-template-rows .28s ease, opacity .22s ease; }
        .gpsa-a-text { margin: 0 0 20px; color: rgba(255,255,255,0.72); font-size: 16px; line-height: 28px; }
        .gpsa-a-text a { color: #61ce70; text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }

        @media (max-width: 1023px) {
          .gpsa { padding: 44px 20px; }
          .gpsa-grid { gap: 32px; }
          .gpsa-h2 { font-size: 30px; }
        }
        @media (max-width: 640px) {
          .gpsa { padding: 40px 16px; }
          .gpsa-h2 { font-size: 26px; }
          .gpsa-intro { font-size: 15px; line-height: 26px; }
          .gpsa-q-text { font-size: 16px; }
          .gpsa-a-text { font-size: 15px; line-height: 26px; }
        }
      `,
        }}
      />
    </section>
  );
}
