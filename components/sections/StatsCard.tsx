"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "8+",     label: "Years of Experience" },
  { value: "$900M+", label: "Revenue Generated" },
  { value: "9+",     label: "Awards For Ecomm Wizards" },
  { value: "700+",   label: "Stores Built" },
];

// Decorative partner-logo marquee: meaningful alt on the Shopify mark, empty alt
// on the unnamed partner logos (correct for decorative imagery).
const logos = [
  { src: "/images/shopify_150_1024x1024.svg", alt: "Shopify Partner" },
  { src: "/images/partner_logo_2.svg",  alt: "" },
  { src: "/images/partner_logo_3.svg",  alt: "" },
  { src: "/images/partner_logo_4.svg",  alt: "" },
  { src: "/images/partner_logo_5.svg",  alt: "" },
  { src: "/images/partner_logo_6.svg",  alt: "" },
  { src: "/images/partner_logo_7.svg",  alt: "" },
  { src: "/images/partner_logo_8.svg",  alt: "" },
  { src: "/images/partner_logo_9.svg",  alt: "" },
  { src: "/images/partner_logo_10.svg", alt: "" },
  { src: "/images/partner_logo_11.svg", alt: "" },
  { src: "/images/partner_logo_12.svg", alt: "" },
  { src: "/images/partner_logo_13.svg", alt: "" },
  { src: "/images/partner_logo_14.svg", alt: "" },
];

const doubled = [...logos, ...logos];
const ANIM_MS = 420;

function StatContent({ stat }: { stat: typeof stats[0] }) {
  return (
    <>
      <div className="stat-gradient-text" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "56px", fontWeight: 700, lineHeight: "1" }}>
        {stat.value}
      </div>
      <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px", fontWeight: 500, color: "rgba(0,0,0,0.8)", marginTop: "6px" }}>
        {stat.label}
      </div>
    </>
  );
}

export default function StatsCard() {
  const [shownIdx, setShownIdx]       = useState(0);
  const [nextIdx,  setNextIdx]        = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentRef = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      const next = (currentRef.current + 1) % stats.length;

      // Mount the incoming slide (off-screen right), then animate both
      setNextIdx(next);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setIsAnimating(true))
      );

      // After animation finishes, swap and reset
      setTimeout(() => {
        currentRef.current = next;
        setShownIdx(next);
        setNextIdx(null);
        setIsAnimating(false);
      }, ANIM_MS + 60);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      position: "absolute",
      bottom: "30px",
      left: "30px",
      right: "30px",
      zIndex: 10,
      background: "#FFFFFF",
      borderRadius: "16px",
      padding: "30px",
      overflow: "hidden",
    }}>
      {/* Sliding stats — overflow hidden clips off-screen slides */}
      <div style={{ position: "relative", height: "82px", overflow: "hidden", marginBottom: "20px" }}>

        {/* Current stat — slides out to the left */}
        <div style={{
          position: "absolute",
          inset: 0,
          textAlign: "center",
          transform: isAnimating ? "translateX(-110%)" : "translateX(0)",
          transition: isAnimating ? `transform ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1)` : "none",
        }}>
          <StatContent stat={stats[shownIdx]} />
        </div>

        {/* Incoming stat — slides in from the right */}
        {nextIdx !== null && (
          <div style={{
            position: "absolute",
            inset: 0,
            textAlign: "center",
            transform: isAnimating ? "translateX(0)" : "translateX(110%)",
            transition: isAnimating ? `transform ${ANIM_MS}ms cubic-bezier(0.4,0,0.2,1)` : "none",
          }}>
            <StatContent stat={stats[nextIdx]} />
          </div>
        )}
      </div>

      {/* Divider */}
      <div style={{ padding: "15px 0" }}>
        <span style={{ display: "block", borderTop: "1px solid #334155", color: "#334155" }} />
      </div>

      {/* Logo marquee */}
      <div style={{ overflow: "hidden" }}>
        <div
          className="logo-strip"
          style={{ display: "flex", alignItems: "center", gap: "28px", width: "max-content" }}
        >
          {doubled.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={148}
              height={30}
              className="object-contain"
              style={{ opacity: 0.75, flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
