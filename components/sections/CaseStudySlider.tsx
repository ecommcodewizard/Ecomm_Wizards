"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type CaseStudySlide = {
  key: string;
  image: string;
  apps: string[];
  headline: ReactNode;
  quote: ReactNode;
  avatar: string;
  name: string;
  role: string;
};

type Props = {
  slides: CaseStudySlide[];
  /** Auto-advance interval in ms. Set to 0 to disable auto-rotation. */
  intervalMs?: number;
};

export default function CaseStudySlider({ slides, intervalMs = 6000 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;
  const trackRef = useRef<HTMLDivElement | null>(null);

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  // Auto-rotate
  useEffect(() => {
    if (!intervalMs || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, paused, total]);

  return (
    <div
      className="ssd-results-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="ssd-results-slider-track"
        style={{
          width: `${total * 100}%`,
          transform: `translateX(-${index * (100 / total)}%)`,
          transition: "transform 0.6s ease",
        }}
      >
        {slides.map((s) => (
          <article key={s.key} className="ssd-results-slide" style={{ flex: `0 0 ${100 / total}%` }}>
            {/* Left: image */}
            <div className="ssd-results-slide-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt="" />
            </div>

            {/* Right: content */}
            <div className="ssd-results-slide-text">
              <div className="ssd-results-apps">
                <span className="ssd-results-apps-label">Apps we used:</span>
                <span className="ssd-results-apps-icons">
                  {s.apps.map((src, i) => (
                    <span key={i} className="ssd-results-app-chip">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="" />
                    </span>
                  ))}
                </span>
              </div>

              <h3 className="ssd-results-slide-headline">{s.headline}</h3>

              <a href="/reviews" className="ssd-results-slide-link">
                <span>View Case Study</span>
                <svg width="18" height="13" viewBox="0 0 15 10.55" fill="none" aria-hidden="true">
                  <path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <div className="ssd-results-quote-card">
                <p className="ssd-results-quote-text">{s.quote}</p>
                <div className="ssd-results-quote-person">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.avatar} alt={s.name} className="ssd-results-quote-avatar" />
                  <div>
                    <div className="ssd-results-quote-name">{s.name}</div>
                    <div className="ssd-results-quote-role">{s.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Prev / Next controls */}
      <button
        type="button"
        className="ssd-results-arrow ssd-results-arrow-prev"
        aria-label="Previous case study"
        onClick={goPrev}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        className="ssd-results-arrow ssd-results-arrow-next"
        aria-label="Next case study"
        onClick={goNext}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="ssd-results-dots" aria-hidden="true">
        {slides.map((s, i) => (
          <button
            key={s.key}
            type="button"
            className={`ssd-results-dot${i === index ? " is-active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
