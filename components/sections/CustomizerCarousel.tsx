"use client";

import { useEffect, useState } from "react";

export type CustomizerSlide = {
  desktopSrc: string;
  mobileSrc: string;
  caption: string;
};

export default function CustomizerCarousel({
  slides,
  intervalMs = 5000,
}: {
  slides: CustomizerSlide[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(true);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  // Track = real slides + first slide cloned at the end (for seamless wrap).
  const trackSlides = [...slides, slides[0]];
  const cellPct = 100 / trackSlides.length;
  const trackWidthPct = trackSlides.length * 100;

  useEffect(() => {
    if (index < total) return;
    const t = window.setTimeout(() => {
      setAnimating(false);
      setIndex(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimating(true)));
    }, 600);
    return () => window.clearTimeout(t);
  }, [index, total]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => i + 1), intervalMs);
    return () => window.clearInterval(id);
  }, [paused, intervalMs]);

  const goNext = () => setIndex((i) => i + 1);
  const goPrev = () => {
    if (index === 0) {
      setAnimating(false);
      setIndex(total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimating(true);
          setIndex(total - 1);
        });
      });
    } else {
      setIndex((i) => i - 1);
    }
  };

  return (
    <div
      className="w2s-cust"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        className="w2s-cust-btn w2s-cust-btn--prev"
        aria-label="Previous customizer example"
        onClick={goPrev}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="w2s-cust-viewport">
        <div
          className="w2s-cust-track"
          style={{
            width: `${trackWidthPct}%`,
            transform: `translateX(-${index * cellPct}%)`,
            transition: animating ? "transform 600ms cubic-bezier(0.65, 0, 0.35, 1)" : "none",
          }}
        >
          {trackSlides.map((slide, i) => (
            <div key={i} className="w2s-cust-cell" style={{ width: `${cellPct}%` }}>
              <div className="w2s-cust-stage">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.desktopSrc} alt="" className="w2s-cust-desktop" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.mobileSrc} alt="" className="w2s-cust-mobile" loading="lazy" />
              </div>
              <p className="w2s-cust-caption">{slide.caption}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="w2s-cust-btn w2s-cust-btn--next"
        aria-label="Next customizer example"
        onClick={goNext}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
