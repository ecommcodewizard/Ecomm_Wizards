"use client";

import { useEffect, useState } from "react";

export type RodeoSlide = { src: string; alt: string };

export default function RodeoCarousel({
  slides,
  intervalMs = 5000,
  visibleCount = 2,
}: {
  slides: RodeoSlide[];
  intervalMs?: number;
  visibleCount?: number;
}) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(true);
  const [paused, setPaused] = useState(false);
  const [effectiveVisible, setEffectiveVisible] = useState(visibleCount);
  const total = slides.length;

  // Show 1 slide on narrow screens so case studies stay readable at 430px.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 639px)");
    const apply = () => setEffectiveVisible(mq.matches ? 1 : visibleCount);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [visibleCount]);

  // Track = real slides + first `effectiveVisible` cloned at the end (for seamless wrap).
  const trackSlides = [...slides, ...slides.slice(0, effectiveVisible)];
  const cellPct = 100 / trackSlides.length;
  const trackWidthPct = (trackSlides.length * 100) / effectiveVisible;

  // When we land on the cloned tail (index >= total), snap back to 0 without animation.
  useEffect(() => {
    if (index < total) return;
    const t = window.setTimeout(() => {
      setAnimating(false);
      setIndex(0);
      // Re-enable animation after browser paints once
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
      // Jump to the cloned tail (no animation), then animate one step back to total-1
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
      className="w2s-rodeo"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        className="w2s-rodeo-btn w2s-rodeo-btn--prev"
        aria-label="Previous case studies"
        onClick={goPrev}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="w2s-rodeo-viewport">
        <div
          className="w2s-rodeo-track"
          style={{
            width: `${trackWidthPct}%`,
            transform: `translateX(-${index * cellPct}%)`,
            transition: animating ? "transform 600ms cubic-bezier(0.65, 0, 0.35, 1)" : "none",
          }}
        >
          {trackSlides.map((slide, i) => (
            <div key={i} className="w2s-rodeo-cell" style={{ width: `${cellPct}%` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                className="w2s-rodeo-slide"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="w2s-rodeo-btn w2s-rodeo-btn--next"
        aria-label="Next case studies"
        onClick={goNext}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
