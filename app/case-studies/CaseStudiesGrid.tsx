"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SpeedVideo from "./SpeedVideo";
import { CASE_STUDY_VIDEOS, SPEED_VIDEO_SLUGS, posterFor } from "@/lib/case-study-videos";
import type { CaseStudy } from "@/lib/case-studies";

const INITIAL_COUNT = 6;

function CardMedia({ cs, index }: { cs: CaseStudy; index: number }) {
  const videoStyle: React.CSSProperties = { width: "100%", height: "100%", objectFit: "cover", display: "block" };

  const videoSrc = CASE_STUDY_VIDEOS[cs.slug];
  if (videoSrc) {
    const videoProps = {
      src: videoSrc,
      poster: posterFor(videoSrc),
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
      preload: "none" as const,
      style: videoStyle,
    };
    return SPEED_VIDEO_SLUGS.has(cs.slug) ? <SpeedVideo {...videoProps} /> : <video {...videoProps} />;
  }

  return (
    <Image
      src={cs.heroImage}
      alt={cs.brandName}
      fill
      className="object-cover cs-landing-card-img"
      priority={index < 3}
      loading={index < 3 ? undefined : "lazy"}
      sizes="(max-width: 540px) 100vw, (max-width: 768px) 50vw, 33vw"
    />
  );
}

export default function CaseStudiesGrid({ studies }: { studies: CaseStudy[] }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [studies.length]);

  const hasMore = visibleCount < studies.length;

  return (
    <>
      {/* Render every study as a crawlable <a href> in the SSR DOM. Cards beyond
          `visibleCount` are CSS-hidden (display:none) rather than sliced out, so
          Googlebot discovers all 21 store studies while the "Show more" UX is
          unchanged. Initial visibleCount is deterministic (INITIAL_COUNT on both
          server and first client render) so there is no hydration mismatch and no
          flash of all cards; hidden lazy images/videos don't load until revealed. */}
      <div className="cs-landing-grid">
        {studies.map((cs, index) => {
          const tags = cs.serviceType.split("|").map((t) => t.trim());
          const stat = cs.stats[0];
          const hidden = index >= visibleCount;
          return (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="cs-landing-card"
              style={{
                display: hidden ? "none" : "flex",
                flexDirection: "column",
                background: "#FBF7ED",
                borderRadius: "20px",
                overflow: "hidden",
                textDecoration: "none",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Image / Video */}
              <div
                style={{
                  position: "relative",
                  width: "calc(100% - 16px)",
                  margin: "8px 8px 0",
                  borderRadius: "14px",
                  overflow: "hidden",
                  flexShrink: 0,
                  aspectRatio: "16/10",
                  background: "#e0ddd5",
                }}
              >
                <CardMedia cs={cs} index={index} />

                {/* Stat badge */}
                <div
                  className="cs-card-stat"
                  style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(255,255,255,0.97)", borderRadius: "9999px", padding: "5px 14px", display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#000000", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 400, color: "#000000", whiteSpace: "nowrap" }}>{stat.shortLabel ?? stat.label}</span>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", fontWeight: 700, color: "#000000", whiteSpace: "nowrap" }}>{stat.value}</span>
                </div>

                {/* Industry pill */}
                <div
                  className="cs-card-industry"
                  style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.72)", borderRadius: "9999px", padding: "4px 12px" }}
                >
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 500, color: "#ffffff", whiteSpace: "nowrap" }}>{cs.industry}</span>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flexGrow: 1, gap: "12px" }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22px", fontWeight: 700, color: "#000000", margin: 0, lineHeight: 1.2 }}>{cs.brandName}</p>
                <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
                <div className="cs-card-tags" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 500, color: "#444444", background: "transparent", border: "1px solid rgba(0,0,0,0.22)", borderRadius: "9999px", padding: "3px 10px", whiteSpace: "nowrap" }}>{tag}</span>
                  ))}
                </div>
                <p className="cs-landing-desc" style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: "rgba(0,0,0,0.55)", margin: 0, lineHeight: 1.6, flexGrow: 1 }}>
                  {cs.heroDescription.length > 120 ? cs.heroDescription.slice(0, 120).trimEnd() + "…" : cs.heroDescription}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {hasMore && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
          <button
            onClick={() => setVisibleCount((c) => Math.min(c + INITIAL_COUNT, studies.length))}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              color: "#ffffff",
              background: "#000000",
              border: "1.5px solid #000000",
              borderRadius: "9999px",
              padding: "14px 40px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#222222";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#000000";
            }}
          >
            Show more
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: "transform 0.2s ease" }}>
              <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
