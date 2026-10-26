"use client";
import { useState } from "react";
import Link from "next/link";

// Simple AOV-lift estimator. Applies a 10 / 15 / 20% lift to the visitor's
// current average order value and orders, and shows the extra monthly and yearly
// revenue. Client-only, self-contained styles.

const SCENARIOS = [
  { pct: 0.1, label: "Conservative", sub: "+10% AOV" },
  { pct: 0.15, label: "Typical", sub: "+15% AOV" },
  { pct: 0.2, label: "Strong", sub: "+20% AOV" },
];

function money(n: number): string {
  if (!isFinite(n) || n <= 0) return "$0";
  return "$" + Math.round(n).toLocaleString("en-US");
}

function clampNum(raw: string): number {
  const n = Number(raw.replace(/[^0-9.]/g, ""));
  return isFinite(n) && n > 0 ? n : 0;
}

export default function AOVCalculator() {
  const [aov, setAov] = useState(60);
  const [orders, setOrders] = useState(1000);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid #dfe4ea",
    background: "#fff",
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
    color: "#0f172a",
    outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Poppins', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: "#334155",
    marginBottom: 8,
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: 24,
        background: "#fff",
        border: "1px solid #e8ecf1",
        borderRadius: 20,
        padding: 28,
        boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
        maxWidth: 960,
        margin: "0 auto",
      }}
      className="aov-calc"
    >
      {/* Inputs */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="aov-inputs">
        <div>
          <label style={labelStyle} htmlFor="aov-input">Your average order value</label>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "#64748b", fontSize: 16 }}>$</span>
            <input
              id="aov-input"
              inputMode="decimal"
              value={aov ? String(aov) : ""}
              onChange={(e) => setAov(clampNum(e.target.value))}
              style={{ ...inputStyle, paddingLeft: 26 }}
              aria-label="Your average order value in dollars"
            />
          </div>
        </div>
        <div>
          <label style={labelStyle} htmlFor="orders-input">Monthly orders</label>
          <input
            id="orders-input"
            inputMode="numeric"
            value={orders ? String(orders) : ""}
            onChange={(e) => setOrders(clampNum(e.target.value))}
            style={inputStyle}
            aria-label="Monthly orders"
          />
        </div>
      </div>

      {/* Results */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="aov-results">
        {SCENARIOS.map((s) => {
          const monthly = aov * orders * s.pct;
          const yearly = monthly * 12;
          const featured = s.label === "Typical";
          return (
            <div
              key={s.label}
              style={{
                borderRadius: 16,
                padding: "22px 18px",
                textAlign: "center",
                background: featured ? "rgba(61,199,122,0.08)" : "#fff",
                border: `1px solid ${featured ? "#2A9555" : "#e8ecf1"}`,
                boxShadow: featured ? "0 10px 40px rgba(42,149,85,0.08)" : "none",
              }}
            >
              <p style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 600, color: featured ? "#1F7A45" : "#64748b" }}>
                {s.label}
              </p>
              <p style={{ margin: "2px 0 14px", fontFamily: "'Poppins', sans-serif", fontSize: 12, color: "#64748b" }}>{s.sub}</p>
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: 28,
                  lineHeight: 1.1,
                  background: "linear-gradient(110deg, #3DC77A 0%, #2A9555 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {money(yearly)}
              </p>
              <p style={{ margin: "4px 0 0", fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#475569" }}>extra a year</p>
              <p style={{ margin: "6px 0 0", fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#64748b" }}>{money(monthly)} a month</p>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <p style={{ margin: 0, fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#64748b", maxWidth: 520, lineHeight: 1.5 }}>
          A rough estimate that applies the AOV lift to your current orders. Real results depend on your traffic, offer, and margins.
        </p>
        <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #3DC77A 50%, #2A9555 100%)", flexShrink: 0 }}>
          <Link
            href="/free-shopify-store-audit"
            className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[26px] py-[12px]"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600 }}
          >
            <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Get your cart audit</span>
          </Link>
        </span>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 560px){
          .aov-calc{padding:20px!important}
          .aov-inputs{grid-template-columns:1fr!important}
          .aov-results{grid-template-columns:1fr!important}
        }
      ` }} />
    </div>
  );
}
