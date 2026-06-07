"use client";

import { useState, type ReactNode } from "react";

export type HydrogenWhyItem = { title: string; body: ReactNode };

export default function HydrogenWhyAccordion({ items }: { items: HydrogenWhyItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <ul className="shy-why-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <li key={i} className={`shy-why-item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="shy-why-toggle"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
            >
              <span className="shy-why-title">{item.title}</span>
              <span className="shy-why-icon" aria-hidden="true">
                {isOpen ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </span>
            </button>
            {isOpen && <div className="shy-why-body">{item.body}</div>}
          </li>
        );
      })}
    </ul>
  );
}
