"use client";

import { useEffect, useState } from "react";

type Item = { id: string; title: string };

// Sticky "On this page" list on desktop; a collapsible bar under the header on
// mobile. Both show the current section and how much reading is left.
export default function ArticleNav({ items, readMins }: { items: Item[]; readMins: number }) {
  const [active, setActive] = useState(items[0]?.id);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const body = document.getElementById("article-body");
    const heads = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let current = heads[0]?.id;
      for (const h of heads) if (h.getBoundingClientRect().top <= line) current = h.id;
      setActive(current);
      if (body) {
        const r = body.getBoundingClientRect();
        setProgress(Math.min(1, Math.max(0, (line - r.top) / r.height)));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [items]);

  const left = Math.ceil(readMins * (1 - progress));
  const status = progress >= 0.98 ? "Finished" : progress <= 0 ? `${readMins} min read` : `${left} min left`;
  const current = items.find((i) => i.id === active)?.title;

  return (
    <nav className="an" aria-label="On this page">
      <button type="button" className="an-bar" aria-expanded={open} aria-controls="an-list" onClick={() => setOpen((o) => !o)}>
        <span className="an-bar-text">
          <span className="an-label">On this page</span>
          <span className="an-current">{current}</span>
        </span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
        <span className="an-bar-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      </button>

      <div className="an-panel" data-open={open}>
        <p className="an-head">
          <span className="an-label">On this page</span>
          <span className="an-left">{status}</span>
        </p>
        <span className="an-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </span>
        <ol id="an-list" className="an-list">
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} aria-current={i.id === active ? "location" : undefined} onClick={() => setOpen(false)}>
                {i.title}
              </a>
            </li>
          ))}
        </ol>
        <a href="#top" className="an-top" onClick={() => setOpen(false)}>
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </nav>
  );
}
