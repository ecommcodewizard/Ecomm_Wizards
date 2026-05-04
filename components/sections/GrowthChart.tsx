"use client";
import { useEffect, useRef, useState } from "react";

const yearData = [
  { year: 2021, label: "Historical",   count: "1,000",   value: 1000,   current: false, projected: false },
  { year: 2022, label: "Historical",   count: "2,000",   value: 2000,   current: false, projected: false },
  { year: 2023, label: "Historical",   count: "4,000",   value: 4000,   current: false, projected: false },
  { year: 2024, label: "Historical",   count: "8,000",   value: 8000,   current: false, projected: false },
  { year: 2025, label: "Current Year", count: "16,000",  value: 16000,  current: true,  projected: false },
  { year: 2026, label: "Projected",    count: "32,000",  value: 32000,  current: false, projected: true  },
  { year: 2027, label: "Projected",    count: "64,000",  value: 64000,  current: false, projected: true  },
  { year: 2028, label: "Projected",    count: "128,000", value: 128000, current: false, projected: true  },
  { year: 2029, label: "Projected",    count: "256,000", value: 256000, current: false, projected: true  },
];

const MAX_VALUE = 256000;
const BARS_PER_YEAR = 7;
const CHART_HEIGHT = 620;

const bars = yearData.flatMap((d, i) => {
  const prevValue = i === 0 ? 0 : yearData[i - 1].value;
  return Array.from({ length: BARS_PER_YEAR }, (_, j) => {
    const progress = (j + 1) / BARS_PER_YEAR;
    const value = prevValue + (d.value - prevValue) * progress;
    const heightPct = Math.sqrt(value / MAX_VALUE) * 100;
    return { year: d.year, heightPct, projected: d.projected, current: d.current };
  });
});

export default function GrowthChart() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const totalBars = bars.length;

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundImage: "url('/images/background-ai-custom-2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.82)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1320px", margin: "0 auto", padding: "80px 20px 60px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "48px", fontWeight: 700, color: "#FFFFFF", lineHeight: "1.2", marginBottom: "16px" }}>
            A Decade of <span style={{ color: "#B18945" }}>Dominance</span>
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "20px", fontWeight: 600, color: "#FFFFFF", marginBottom: "16px" }}>
            EcommWizards is Revolutionizing Shopify Development Efficiency
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.8)", maxWidth: "940px", margin: "0 auto 0 auto" }}>
            Since integrating AI tools like ChatGPT in 2022, alongside n8n, Codex and Cursor AI, we&apos;ve doubled task completion
            annually, delivering faster, smarter solutions. This efficiency gives merchants a competitive edge through rapid, high-quality implementations.
          </p>
        </div>

        {/* Chart + Sidebar */}
        <div style={{ display: "flex", alignItems: "stretch", gap: "0", border: "1px solid #B18945", borderRadius: "16px", overflow: "hidden", background: "#000000", height: "763px" }}>

          {/* ── Bar chart ── */}
          <div style={{ flex: 1, padding: "0px 40px 6px", position: "relative", display: "flex", flexDirection: "column" }}>

            {/* Milestone: ChatGPT (year index 1 = 2022) */}
            <div style={{
              position: "absolute",
              left: `calc(40px + (100% - 80px) / ${totalBars} * ${1 * BARS_PER_YEAR})`,
              top: 0, bottom: "58px",
              borderLeft: "1px dashed rgba(255,255,255,0.45)",
              zIndex: 2,
              pointerEvents: "none",
            }}>
              <div style={{ position: "absolute", top: "28px", left: "8px", display: "flex", alignItems: "center", gap: "0" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#FFFFFF", display: "block", marginLeft: "-12px", flexShrink: 0 }} />
                <span style={{ marginLeft: "5px", fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "#FFFFFF", whiteSpace: "nowrap" }}>ChatGPT</span>
              </div>
            </div>

            {/* Milestone: Today (year index 4 = start of 2025) */}
            <div style={{
              position: "absolute",
              left: `calc(40px + (100% - 80px) / ${totalBars} * ${4 * BARS_PER_YEAR})`,
              top: 0, bottom: "58px",
              borderLeft: "1px dashed rgba(255,255,255,0.45)",
              zIndex: 2,
              pointerEvents: "none",
            }}>
              <div style={{ position: "absolute", top: "28px", left: "8px", display: "flex", alignItems: "center" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#FFFFFF", display: "block", marginLeft: "-12px", flexShrink: 0 }} />
                <span style={{ marginLeft: "5px", fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "#FFFFFF", whiteSpace: "nowrap" }}>May 04, 2026</span>
              </div>
            </div>

            {/* Bars */}
            <div style={{ height: `${CHART_HEIGHT}px`, display: "flex", alignItems: "flex-end", gap: "2px" }}>
              {bars.map((bar, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: animated ? `${bar.heightPct}%` : "0%",
                    minHeight: animated && bar.heightPct > 0 ? "2px" : "0",
                    background: bar.projected ? "rgba(177,137,69,0.45)" : "#B18945",
                    borderRadius: "2px 2px 0 0",
                    transition: `height 1.4s cubic-bezier(0.4,0,0.2,1) ${i * 10}ms`,
                  }}
                />
              ))}
            </div>

            {/* Year labels */}
            <div style={{ display: "flex", marginTop: "8px" }}>
              {yearData.map((d) => (
                <div key={d.year} style={{ flex: BARS_PER_YEAR, textAlign: "center", fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "#FFFFFF" }}>
                  {d.year}
                </div>
              ))}
            </div>

            {/* Historical / Projected timeline */}
            <div style={{ display: "flex", marginTop: "10px" }}>
              <div style={{ flex: 5 * BARS_PER_YEAR, borderTop: "1px solid rgba(255,255,255,0.4)", paddingTop: "6px", textAlign: "center", fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
                Historical
              </div>
              <div style={{ flex: 4 * BARS_PER_YEAR, borderTop: "1px solid rgba(255,255,255,0.4)", paddingTop: "6px", textAlign: "center", fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
                Projected
              </div>
            </div>
          </div>

          {/* ── Right sidebar ── */}
          <div className="no-scrollbar" style={{ width: "270px", flexShrink: 0, padding: "34px 0px 50px", display: "flex", flexDirection: "column", borderLeft: "1px solid rgba(255,255,255,0.12)", overflowY: "auto" }}>
            {yearData.map((d, i) => (
              <div
                key={d.year}
                style={{
                  borderBottom: i < yearData.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  opacity: d.projected ? 0.4 : 1,
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {/* Tick marks column */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignSelf: "stretch", paddingTop: "14px", paddingBottom: "14px", flexShrink: 0 }}>
                  {/* Long tick — aligned with year number */}
                  <svg width="26" height="1" style={{ display: "block" }}>
                    <line x1="0" y1="0.5" x2="26" y2="0.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                  </svg>
                  {/* 6 short sub-ticks */}
                  {Array.from({ length: 6 }, (_, j) => (
                    <svg key={j} width="9" height="1" style={{ display: "block" }}>
                      <line x1="0" y1="0.5" x2="9" y2="0.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
                    </svg>
                  ))}
                </div>

                {/* Card content */}
                <div style={{ flex: 1, padding: "10px 16px 10px 10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 600, color: "#FFFFFF" }}>{d.year}</span>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: d.current ? "#B18945" : "rgba(255,255,255,0.6)" }}>{d.label}</span>
                  </div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "2px" }}>
                    Shopify Tasks Completed
                  </div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "28px", fontWeight: 700, color: "#FFFFFF", lineHeight: "1.1" }}>
                    {d.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
