"use client";
import { useRef, useState, useMemo, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const yearData = [
  { year: 2022, label: "Historical",   count: "2,000",   current: false, projected: false },
  { year: 2023, label: "Historical",   count: "4,000",   current: false, projected: false },
  { year: 2024, label: "Historical",   count: "8,000",   current: false, projected: false },
  { year: 2025, label: "Historical",   count: "16,000",  current: false, projected: false },
  { year: 2026, label: "Current Year", count: "32,000",  current: true,  projected: false },
  { year: 2027, label: "Projected",    count: "64,000",  current: false, projected: true  },
  { year: 2028, label: "Projected",    count: "128,000", current: false, projected: true  },
  { year: 2029, label: "Projected",    count: "256,000", current: false, projected: true  },
  { year: 2030, label: "Projected",    count: "512,000", current: false, projected: true  },
];

const BAR_GRADIENT = "linear-gradient(to top, #2A9555 0%, #3DC77A 25%, #4FB872 50%, #5FDB7E 68%, #A8F0B4 85%, #C8F57A 100%)";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function GrowthChart() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const [breakpoint, setBreakpoint] = useState<"xs" | "sm" | "md" | "lg">("lg");
  useEffect(() => {
    function update() {
      if (window.innerWidth <= 640) setBreakpoint("xs");
      else if (window.innerWidth <= 768) setBreakpoint("sm");
      else if (window.innerWidth <= 1024) setBreakpoint("md");
      else setBreakpoint("lg");
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isXS = breakpoint === "xs";
  const containerHeight = isXS ? undefined : breakpoint === "sm" ? 403 : breakpoint === "md" ? 549 : 763;
  const chartHeight     = isXS ? 327 : breakpoint === "sm" ? 355 : breakpoint === "md" ? 514 : 704;
  const sidebarWidth    = isXS ? "100%" : `${breakpoint === "sm" ? 270 : breakpoint === "md" ? 270 : 270}px`;
  const sectionPadding  = isXS ? "30px 16px 30px" : breakpoint === "sm" ? "40px 16px 40px" : breakpoint === "md" ? "60px 20px 50px" : "80px 20px 60px";
  const chartPadding    = "0px 20px 6px";
  const annotationBottom = isXS ? "80px" : breakpoint === "sm" ? "120px" : breakpoint === "md" ? "220px" : "360px";

  const barsPerYear  = isXS ? 12 : breakpoint === "sm" ? 20 : breakpoint === "md" ? 20 : 35;
  const maxBarRange  = isXS ? 85 : 88; // 5 + range = max height %
  const totalBars    = yearData.length * barsPerYear;
  const bars = useMemo(() => Array.from({ length: totalBars }, (_, i) => {
    const yearIdx  = Math.floor(i / barsPerYear);
    const yearEntry = yearData[yearIdx];
    const heightPct = 5 + maxBarRange * Math.pow(i / (totalBars - 1), 2.2);
    return { year: yearEntry.year, heightPct, projected: yearEntry.projected };
  }), [barsPerYear, totalBars, maxBarRange]);

  const RAMP_START = Math.round(totalBars * 0.33);
  const RAMP_END   = Math.round(totalBars * 0.61);

  // Current date in US Eastern time — updates on each render/mount
  const { todayLabel, todayLeft } = useMemo(() => {
    const now = new Date();
    const eastern = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const label = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      month: "long",
      day: "2-digit",
      year: "numeric",
    }).format(now);

    const year = eastern.getFullYear();
    const yearIdx = yearData.findIndex((d) => d.year === year);
    if (yearIdx === -1) return { todayLabel: label, todayLeft: "calc(64px + 113 * (100% - 128px) / 234)" };

    const startOfYear = new Date(year, 0, 1).getTime();
    const startOfNextYear = new Date(year + 1, 0, 1).getTime();
    const fraction = (eastern.getTime() - startOfYear) / (startOfNextYear - startOfYear);

    const combined = yearIdx + fraction;
    const left = `calc(${40 + yearIdx * 6}px + ${combined.toFixed(5)} * (100% - 128px) / 9)`;
    return { todayLabel: label, todayLeft: left };
  }, []);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleYearSelect(year: number) {
    if (flashTimer.current) clearTimeout(flashTimer.current);
    setSelectedYear(year);
    const idx = yearData.findIndex((d) => d.year === year);
    cardRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    flashTimer.current = setTimeout(() => setSelectedYear(null), 700);
  }

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
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(63,185,110,0.22) 0%, rgba(0,0,0,0) 70%)", zIndex: 0, pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1320px", margin: "0 auto", padding: sectionPadding }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2 className="growth-chart-h2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "42px", fontWeight: 700, color: "#FFFFFF", lineHeight: "1.2", marginBottom: "16px" }}>
            8 Years of Compounding Impact As A <span className="stat-gradient-text">Shopify Plus Agency</span>
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.8)", maxWidth: "940px", margin: "0 auto" }}>
            From our first Shopify builds to $900M+ in client revenue and now entering in the era of AI-driven ecommerce personalization.
          </p>
        </div>

        {/* Chart + Sidebar */}
        <div style={{ display: "flex", flexDirection: isXS ? "column" : "row", alignItems: "stretch", borderRadius: "16px", overflow: "hidden", height: containerHeight ? `${containerHeight}px` : undefined, border: "1px solid transparent", background: "linear-gradient(#000000, #000000) padding-box, linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%) border-box" }}>

          {/* ── Bar chart ── */}
          <div style={{ flex: 1, padding: chartPadding, position: "relative", display: "flex", flexDirection: "column" }}>


            {/* Annotation: Today's date in US Eastern time — position recalculated on mount */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              style={{ position: "absolute", left: todayLeft, top: "44px", bottom: annotationBottom, zIndex: 2, pointerEvents: "none" }}
            >
              {/* Fading line */}
              <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "1px", background: "linear-gradient(to bottom, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.75) 55%, rgba(255,255,255,0) 100%)" }} />
              <div style={{ position: "absolute", top: "66px", left: "0px", display: "flex", alignItems: "center" }}>
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#FFFFFF", display: "block", marginLeft: "-5px", flexShrink: 0, boxShadow: "0 0 0 2px rgba(255,255,255,0.25)" }} />
                <span style={{ marginLeft: "8px", fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "#FFFFFF", whiteSpace: "nowrap" }}>{todayLabel}</span>
              </div>
            </motion.div>

            {/* Bars grouped by year */}
            <div style={{ height: `${chartHeight}px`, display: "flex", alignItems: "flex-end", gap: "8px" }}>
              {yearData.map((yearEntry, yi) => (
                <div
                  key={yearEntry.year}
                  onClick={() => handleYearSelect(yearEntry.year)}
                  style={{
                    flex: barsPerYear,
                    display: "flex",
                    alignItems: "flex-end",
                    alignSelf: "stretch",
                    gap: "1px",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  {/* Transparent full-column click target (behind bars) */}
                  <div style={{ position: "absolute", inset: 0, zIndex: 0 }} />
                  {Array.from({ length: barsPerYear }, (_, j) => {
                    const barIndex = yi * barsPerYear + j;
                    const bar = bars[barIndex];
                    const barOpacity = barIndex <= RAMP_START ? 0.45
                      : barIndex >= RAMP_END ? 1
                      : 0.45 + 0.55 * ((barIndex - RAMP_START) / (RAMP_END - RAMP_START));
                    return (
                      <motion.div
                        key={j}
                        initial={{ height: 0 }}
                        animate={inView ? { height: `${bar.heightPct}%` } : { height: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: barIndex * 0.008,
                          ease: EASE,
                        }}
                        style={{
                          flex: 1,
                          minHeight: 0,
                          background: BAR_GRADIENT,
                          borderRadius: "1px 1px 0 0",
                          position: "relative",
                          zIndex: 2,
                          opacity: barOpacity,
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Year labels */}
            <div style={{ display: "flex", marginTop: "8px" }}>
              {yearData.map((d) => (
                <div key={d.year} style={{ flex: barsPerYear, textAlign: "center", fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "#FFFFFF" }}>
                  {d.year}
                </div>
              ))}
            </div>

            {/* Bottom axis */}
            <div style={{ display: "flex", alignItems: "center", margin: "7px 0" }}>
              {/* Left bracket tick */}
              <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.6)", flexShrink: 0 }} />
              {/* Historical (5 years): line fades right → label → line fades left */}
              <div style={{ flex: 5, height: "1px", background: "linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,0))" }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "#FFFFFF", padding: "0 12px", flexShrink: 0 }}>Historical</span>
              <div style={{ flex: 5, height: "1px", background: "linear-gradient(to left, rgba(255,255,255,0.5), rgba(255,255,255,0))" }} />
              {/* Center tick */}
              <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.6)", flexShrink: 0 }} />
              {/* Projected (4 years): line fades right → label → line fades left */}
              <div style={{ flex: 4, height: "1px", background: "linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,0))" }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "#FFFFFF", padding: "0 12px", flexShrink: 0 }}>Projected</span>
              <div style={{ flex: 4, height: "1px", background: "linear-gradient(to left, rgba(255,255,255,0.5), rgba(255,255,255,0))" }} />
              {/* Right bracket tick */}
              <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.6)", flexShrink: 0 }} />
            </div>
          </div>

          {/* ── Right sidebar ── */}
          <div style={{ width: sidebarWidth, height: isXS ? "143px" : undefined, flexShrink: 0, position: "relative", borderLeft: isXS ? "none" : "1px solid rgba(255,255,255,0.12)", borderTop: isXS ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
          {/* Bottom fade overlay */}
          {!isXS && <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "130px", background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.96))", pointerEvents: "none", zIndex: 5 }} />}
          <div className="no-scrollbar" style={{ padding: isXS ? "14px 14px 14px" : "34px 0px 50px", display: "flex", flexDirection: isXS ? "row" : "column", flexWrap: "nowrap", overflowY: isXS ? "hidden" : "auto", overflowX: isXS ? "auto" : "hidden", height: "100%" }}>
            {yearData.map((d, i) => (
              <div
                key={d.year}
                ref={(el) => { cardRefs.current[i] = el; }}
                onClick={() => handleYearSelect(d.year)}
                style={{
                  borderBottom: isXS ? "none" : i < yearData.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  borderRight: isXS ? "1px solid rgba(255,255,255,0.1)" : "none",
                  flex: isXS ? "0 0 178px" : 1,
                  display: "flex",
                  flexDirection: isXS ? "column" : "row",
                  alignItems: isXS ? "stretch" : "center",
                  cursor: "pointer",
                  borderLeft: selectedYear === d.year ? "2px solid rgba(212,160,23,0.6)" : "2px solid transparent",
                  borderTop: isXS && selectedYear === d.year ? "2px solid rgba(212,160,23,0.6)" : undefined,
                  background: selectedYear === d.year ? "rgba(212,160,23,0.07)" : "transparent",
                  transition: "background 0.25s ease, border-left 0.25s ease",
                  boxSizing: "border-box",
                }}
              >
                <div style={{
                  display: "flex",
                  flexDirection: isXS ? "row" : "column",
                  justifyContent: "space-between",
                  alignSelf: "stretch",
                  paddingTop: isXS ? "8px" : "14px",
                  paddingBottom: isXS ? "0px" : "14px",
                  paddingLeft: isXS ? "8px" : "0px",
                  paddingRight: isXS ? "8px" : "0px",
                  flexShrink: 0,
                  alignItems: isXS ? "center" : "flex-start",
                }}>
                  <svg width={isXS ? 1 : 26} height={isXS ? 10 : 1} style={{ display: "block" }}>
                    {isXS
                      ? <line x1="0.5" y1="0" x2="0.5" y2="10" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
                      : <line x1="0" y1="0.5" x2="26" y2="0.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />}
                  </svg>
                  {Array.from({ length: 6 }, (_, j) => (
                    <svg key={j} width={isXS ? 1 : 9} height={isXS ? 6 : 1} style={{ display: "block" }}>
                      {isXS
                        ? <line x1="0.5" y1="0" x2="0.5" y2="6" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
                        : <line x1="0" y1="0.5" x2="9" y2="0.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />}
                    </svg>
                  ))}
                </div>
                <div style={{ flex: 1, padding: isXS ? "6px 8px 6px 6px" : "10px 16px 10px 10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" }}>
                    <span className="sidebar-year" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 600, color: "#FFFFFF" }}>{d.year}</span>
                    <span className="stat-gradient-text sidebar-label" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px" }}>{d.label}</span>
                  </div>
                  <div className="sidebar-desc" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "#FFFFFF", marginBottom: "2px" }}>
                    Shopify Tasks Completed
                  </div>
                  <div className="sidebar-count" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "28px", fontWeight: 700, color: "#FFFFFF", lineHeight: "1.1" }}>
                    {d.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
