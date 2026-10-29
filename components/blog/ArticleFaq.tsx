"use client";

import { useState, type ReactNode } from "react";

// The FAQ accordion at the end of an article.
//
// This replaced <details>/<summary>, which cannot animate: a native details
// element snaps open, and the answer appeared instantly. The service pages
// already solve this with a grid whose row track goes from 0fr to 1fr, which
// IS animatable where `height: auto` is not — so the same approach is used
// here rather than inventing a third one.
//
// Answers arrive already rendered from the server, so the rich-text converter
// stays server-side and only the open/closed state lives in the browser.

export type ArticleFaqItem = {
  question: string;
  answer: ReactNode;
};

export default function ArticleFaq({ items }: { items: ArticleFaqItem[] }) {
  // The first answer starts open, matching the service pages: an accordion
  // that is entirely closed reads as an empty section.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="ar-faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `ar-faq-panel-${i}`;
        const buttonId = `ar-faq-q-${i}`;
        return (
          <div key={i} className="ar-faq-item">
            <button
              type="button"
              id={buttonId}
              className="ar-faq-q"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span>{item.question}</span>
              {/* Two bars crossed; rotating 45 degrees turns the plus into a
                  close icon, which is the same trick the old CSS used. */}
              <span className="ar-faq-icon" data-open={isOpen} aria-hidden="true" />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="ar-faq-panel"
              data-open={isOpen}
              // Keeps a closed answer out of the tab order and away from
              // screen readers and in-page search, which a 0fr track alone
              // would not do.
              //
              // React 19 knows inert is a boolean attribute and writes it out
              // only when true. Spreading an empty string in, the way this had
              // to be done before, now logs a console error on every closed
              // answer and is read as FALSE — so the old workaround had quietly
              // stopped doing the one thing it was there for.
              inert={!isOpen}
            >
              <div className="ar-faq-panel-in">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
