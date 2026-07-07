"use client";
import type { CSSProperties } from "react";
import AutoScrollRow from "@/components/ui/AutoScrollRow";

// An original, static example of a fully gamified Shopify cart drawer: a tiered
// reward progress bar, cart line items, an auto-scrolling "free rewards" row and
// "you may also like" row, a subtotal, and a Buy Now button. Illustrative only
// (nothing is clickable); generic placeholder names + thumbnails swap for real
// product content later. Kept compact so it fits one viewport on short screens.

const GRADIENT =
  "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";

const NAME = "Your product name here";

const MILESTONES = [
  { amount: "$70", label: "Free shipping" },
  { amount: "$90", label: "Free gift" },
  { amount: "$120", label: "10% off" },
];
const REACHED = 2; // free shipping + free gift unlocked; working toward 10% off
const FILL_PCT = 60; // progress line fill toward the third milestone

const LINE_ITEMS = [
  { price: "$57.00", was: "$72.00" },
  { price: "$39.00", was: "$52.00" },
];

const REWARDS = [{ was: "$18" }, { was: "$24" }, { was: "$15" }, { was: "$9" }, { was: "$12" }, { was: "$20" }];
const UPSELLS = [{ price: "$22" }, { price: "$26" }, { price: "$34" }, { price: "$19" }, { price: "$24" }, { price: "$16" }];

const clamp2: CSSProperties = { display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" };

// Placeholder product thumbnail (gray panel + simple landscape), swappable later.
function Thumb({ size = 44 }: { size?: number }) {
  return (
    <span aria-hidden style={{ display: "inline-flex", width: size, height: size, flexShrink: 0, borderRadius: 9, background: "#eef1f5", border: "1px solid #e6eaef", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
        <circle cx="8.5" cy="8" r="2.3" fill="#cbd5e1" />
        <path d="M3 19l5-5.5 3.2 3.6L15 12l6 7z" fill="#cbd5e1" />
      </svg>
    </span>
  );
}

function ThumbBox({ height }: { height: number }) {
  return (
    <span aria-hidden style={{ display: "flex", width: "100%", height, borderRadius: 9, background: "#eef1f5", border: "1px solid #e6eaef", alignItems: "center", justifyContent: "center" }}>
      <svg width={30} height={30} viewBox="0 0 24 24" fill="none">
        <circle cx="8.5" cy="8" r="2.3" fill="#cbd5e1" />
        <path d="M3 19l5-5.5 3.2 3.6L15 12l6 7z" fill="#cbd5e1" />
      </svg>
    </span>
  );
}

function QtyStepper() {
  return (
    <span aria-hidden style={{ display: "inline-flex", alignItems: "center", border: "1px solid #e6eaef", borderRadius: 8, overflow: "hidden", fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "#334155", flexShrink: 0 }}>
      <span style={{ padding: "5px 8px", color: "#94a3b8" }}>&minus;</span>
      <span style={{ padding: "5px 9px", borderLeft: "1px solid #eef1f5", borderRight: "1px solid #eef1f5" }}>1</span>
      <span style={{ padding: "5px 8px", color: "#1F7A45" }}>+</span>
    </span>
  );
}

function RewardCard({ was }: { was: string }) {
  return (
    <div style={{ width: 130, background: "#fff", border: "1px solid #eceff3", borderRadius: 11, padding: 7 }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
        <Thumb size={46} />
      </div>
      <p style={{ ...clamp2, margin: "0 0 4px", fontFamily: "'Poppins', sans-serif", fontSize: 11.5, fontWeight: 600, color: "#0f172a", lineHeight: 1.3, minHeight: 28 }}>{NAME}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 4 }}>
        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11.5 }}>
          <span style={{ color: "#1F7A45", fontWeight: 700 }}>Free</span>{" "}
          <span style={{ color: "#94a3b8", textDecoration: "line-through" }}>{was}</span>
        </span>
        <span aria-hidden style={{ fontFamily: "'Poppins', sans-serif", fontSize: 10.5, fontWeight: 700, letterSpacing: ".04em", color: "#1F7A45", textTransform: "uppercase" }}>Add</span>
      </div>
    </div>
  );
}

function UpsellCard({ price }: { price: string }) {
  return (
    <div style={{ width: 136, background: "#fff", border: "1px solid #eceff3", borderRadius: 11, padding: 7 }}>
      <div style={{ marginBottom: 6 }}>
        <ThumbBox height={44} />
      </div>
      <p style={{ ...clamp2, margin: "0 0 3px", fontFamily: "'Poppins', sans-serif", fontSize: 11.5, fontWeight: 600, color: "#0f172a", lineHeight: 1.3, minHeight: 28 }}>{NAME}</p>
      <p style={{ margin: "0 0 6px", fontFamily: "'Poppins', sans-serif", fontSize: 12.5, fontWeight: 700, color: "#0f172a" }}>{price}</p>
      <span aria-hidden style={{ display: "block", textAlign: "center", background: "#0A0A0A", color: "#fff", fontFamily: "'Poppins', sans-serif", fontSize: 10.5, fontWeight: 600, borderRadius: 8, padding: "5px 0" }}>Add to cart</span>
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p style={{ margin: "0 0 6px", fontFamily: "'Poppins', sans-serif", fontSize: 12.5, fontWeight: 700, color: "#0f172a" }}>{children}</p>;
}

export default function GamifiedCartDemo() {
  return (
    <div
      role="group"
      aria-label="Example of a gamified Shopify cart: a tiered rewards progress bar showing free shipping and a free gift unlocked, two cart items, a scrolling row of free rewards to claim, a scrolling row of suggested products, and a discounted subtotal."
      style={{ width: "100%", maxWidth: 460, margin: "0 auto", background: "#fff", border: "1px solid #e8ecf1", borderRadius: 20, boxShadow: "0 24px 60px rgba(15,23,42,0.10)", padding: 16, fontFamily: "'Poppins', sans-serif", boxSizing: "border-box" }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>Your cart</span>
        <span style={{ fontSize: 13, color: "#64748b" }}>2 items</span>
      </div>

      {/* Milestone progress bar */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", marginBottom: 4 }}>
        {MILESTONES.map((m, i) => (
          <div key={m.label} style={{ textAlign: i === 0 ? "left" : i === MILESTONES.length - 1 ? "right" : "center" }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: i < REACHED ? "#1F7A45" : "#0f172a" }}>{m.amount}</div>
            <div style={{ fontSize: 10.5, color: "#64748b", lineHeight: 1.3 }}>{m.label}</div>
          </div>
        ))}
      </div>
      <div style={{ position: "relative", height: 14, margin: "4px 0 0" }}>
        <span style={{ position: "absolute", left: 5, right: 5, top: "50%", transform: "translateY(-50%)", height: 3, borderRadius: 3, background: "#e6eaef" }} />
        <span style={{ position: "absolute", left: 5, top: "50%", transform: "translateY(-50%)", width: `calc(${FILL_PCT}% - 5px)`, height: 3, borderRadius: 3, background: GRADIENT }} />
        {MILESTONES.map((m, i) => {
          const left = i === 0 ? "5px" : i === MILESTONES.length - 1 ? "calc(100% - 5px)" : "50%";
          const done = i < REACHED;
          return (
            <span key={m.label} aria-hidden style={{ position: "absolute", left, top: "50%", transform: "translate(-50%, -50%)", width: 12, height: 12, borderRadius: "50%", background: done ? "#2A9555" : "#fff", border: `2px solid ${done ? "#2A9555" : "#cbd5e1"}`, boxShadow: done ? "0 0 0 3px rgba(42,149,85,0.15)" : "none" }} />
          );
        })}
      </div>
      <p style={{ margin: "8px 0 0", fontSize: 12.5, fontWeight: 600, color: "#1F7A45", lineHeight: 1.4 }}>🎉 You unlocked the free gift. Add $24 more for 10% off.</p>

      {/* Line items */}
      <div style={{ margin: "10px 0 0", borderTop: "1px solid #eef1f5" }}>
        {LINE_ITEMS.map((it, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: "1px solid #eef1f5" }}>
            <Thumb size={42} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: "0 0 2px", fontSize: 13.5, fontWeight: 600, color: "#0f172a", lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{NAME}</p>
              <span style={{ fontSize: 13.5, fontWeight: 700, color: "#0f172a" }}>{it.price}</span>{" "}
              <span style={{ fontSize: 12.5, color: "#94a3b8", textDecoration: "line-through" }}>{it.was}</span>
            </div>
            <QtyStepper />
          </div>
        ))}
      </div>

      {/* Claim your free rewards */}
      <div style={{ margin: "12px 0 0" }}>
        <SectionLabel>Claim your free rewards</SectionLabel>
        <AutoScrollRow items={REWARDS.map((r, i) => <RewardCard key={i} was={r.was} />)} direction="left" speedSec={26} gap={10} ariaLabel="Free rewards you can add to the cart" />
      </div>

      {/* You may also like */}
      <div style={{ margin: "12px 0 0" }}>
        <SectionLabel>You may also like</SectionLabel>
        <AutoScrollRow items={UPSELLS.map((u, i) => <UpsellCard key={i} price={u.price} />)} direction="right" speedSec={30} gap={10} ariaLabel="Suggested products" />
      </div>

      {/* Subtotal */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "12px 0 0", paddingTop: 10, borderTop: "1px solid #eef1f5" }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#0f172a" }}>Subtotal</span>
        <span>
          <span style={{ fontSize: 13.5, color: "#94a3b8", textDecoration: "line-through", marginRight: 8 }}>$124.00</span>
          <span style={{ fontSize: 20, fontWeight: 800, color: "#0f172a" }}>$96.00</span>
        </span>
      </div>

      {/* Buy Now (visual only) */}
      <div aria-hidden style={{ marginTop: 12, textAlign: "center", background: "#1C6B3C", color: "#fff", fontSize: 15, fontWeight: 700, borderRadius: 10, padding: "12px 0" }}>Buy Now</div>
    </div>
  );
}
