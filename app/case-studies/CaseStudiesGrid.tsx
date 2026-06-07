"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SpeedVideo from "./SpeedVideo";
import type { CaseStudy } from "@/lib/case-studies";

const INITIAL_COUNT = 6;

function CardMedia({ cs, index }: { cs: CaseStudy; index: number }) {
  const videoStyle: React.CSSProperties = { width: "100%", height: "100%", objectFit: "cover", display: "block" };

  if (cs.slug === "111skin-shopify-cro-redesign")
    return <video src="/images/Case%20studies/111skin%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "evie-lou-shopify-fashion-cro")
    return <video src="/images/Case%20studies/evie-lou%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "happy-mammoth-shopify-subscriptions-cro")
    return <video src="/images/Case%20studies/happy-mammoth-video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "candy-kittens-shopify-food-beverage-cro")
    return <video src="/images/Case%20studies/Candy%20Kittens%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "everlast-shopify-plus-sports-redesign")
    return <video src="/images/Case%20studies/Everlast%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "ronaldo-jewelry-shopify-plus-redesign")
    return <SpeedVideo src="/images/Case%20studies/Ronaldo%20Jewelry-video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "mouldings-one-shopify-b2b-portal")
    return <SpeedVideo src="/images/Case%20studies/Mouldings%20One%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "wild-shopify-plus-subscriptions")
    return <video src="/images/Case%20studies/WeareWild%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "dryrobe-shopify-plus-redesign")
    return <video src="/images/Case%20studies/dryrobe%20video%20test.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "loop-earplugs-shopify-landing-page-cro")
    return <video src="/images/Case%20studies/Loop%20Earplugs%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "sneak-energy-shopify-redesign")
    return <video src="/images/Case%20studies/Sneak%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "capelli-sports-shopify-migration")
    return <video src="/images/Case%20studies/Capelli%20Sports%20test%20video-2.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "john-hardy-shopify-plus-migration")
    return <video src="/images/Case%20studies/John%20Hardy%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "saddleback-shopify-plus-b2b")
    return <video src="/images/Case%20studies/Saddleback%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "this-works-shopify-plus-migration")
    return <video src="/images/Case%20studies/This%20Works%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "twillory-shopify-cro")
    return <video src="/images/Case%20studies/Twillory%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "neom-wellbeing-shopify-upgrade")
    return <video src="/images/Case%20studies/NEOM%20Wellbeing%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "vithit-shopify-plus-d2c")
    return <video src="/images/Case%20studies/VITHIT%20video%202.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "feetures-shopify-theme-development")
    return <video src="/images/Case%20studies/Feetures%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "chlobo-shopify-plus-migration")
    return <video src="/images/Case%20studies/ChloBo%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;
  if (cs.slug === "henchman-shopify-plus-b2b")
    return <video src="/images/Case%20studies/Henchman%20video.mp4" autoPlay loop muted playsInline preload="metadata" style={videoStyle} />;

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

  const visible = studies.slice(0, visibleCount);
  const hasMore = visibleCount < studies.length;

  return (
    <>
      <div className="cs-landing-grid">
        {visible.map((cs, index) => {
          const tags = cs.serviceType.split("|").map((t) => t.trim());
          const stat = cs.stats[0];
          return (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="cs-landing-card"
              style={{
                display: "flex",
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
