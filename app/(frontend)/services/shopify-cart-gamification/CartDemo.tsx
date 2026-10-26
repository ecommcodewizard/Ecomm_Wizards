"use client";
import { useEffect, useRef, useState } from "react";

// Animated demo of a gamified cart drawer for the hero. The cart total climbs on
// a loop; the progress bar fills and each reward tier lights up as its threshold
// is crossed. Self-contained styles so it renders regardless of page CSS.

type Tier = { at: number; label: string; icon: "ship" | "gift" | "tag" };

const TIERS: Tier[] = [
  { at: 70, label: "Free shipping", icon: "ship" },
  { at: 90, label: "Free gift", icon: "gift" },
  { at: 120, label: "10% off", icon: "tag" },
];
const MAX = TIERS[TIERS.length - 1].at;

const FILL_MS = 5200;
const HOLD_MS = 1400;

function TierIcon({ name }: { name: Tier["icon"] }) {
  if (name === "ship") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M1 5h11v9H1zM12 8h5l4 4v2h-9z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5.5" cy="16.5" r="1.8" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.5" cy="16.5" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (name === "gift") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 8h18v4H3zM4 12v9h16v-9M12 8v13M12 8S9.5 3.5 7.5 4.5 8.5 8 12 8zM12 8s2.5-4.5 4.5-3.5S15.5 8 12 8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M20 12l-8 8-9-9V3h8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

export default function CartDemo() {
  const [total, setTotal] = useState(0);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Only animate while the demo is on screen (saves renders/battery off-screen).
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => setInView(entries[0]?.isIntersecting ?? false),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTotal(MAX);
      return;
    }
    if (!inView) return;

    // Single self-cancelling loop. The cancelled flag + local frame id keep a
    // stale loop (StrictMode double-mount, inView toggling) from running in
    // parallel and fighting over `total`, which left the bar stuck or desynced
    // from the subtotal. Schedule the next frame from exactly one place.
    let cancelled = false;
    let frame = 0;
    let start: number | null = null;
    const loop = (t: number) => {
      if (cancelled) return;
      if (start === null) start = t;
      const elapsed = t - start;
      if (elapsed <= FILL_MS) {
        const p = elapsed / FILL_MS;
        const eased = 1 - Math.pow(1 - p, 2); // ease-out
        setTotal(Math.min(MAX, eased * MAX));
      } else if (elapsed <= FILL_MS + HOLD_MS) {
        setTotal(MAX);
      } else {
        start = t;
        setTotal(0);
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [inView]);

  const pct = Math.min(100, (total / MAX) * 100);
  const next = TIERS.find((tp) => tp.at > total + 0.5);
  const away = next ? Math.ceil(next.at - total) : 0;

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label="A gamified Shopify cart drawer. As the total rises, a progress bar fills and rewards for free shipping, a free gift, and a discount are earned in turn."
      style={{
        width: "100%",
        maxWidth: 360,
        background: "linear-gradient(160deg, #141414 0%, #0a0a0a 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 20,
        padding: "22px 20px 24px",
        boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <span style={{ color: "#fff", fontSize: 15, fontWeight: 600 }}>Your cart</span>
        <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>3 items</span>
      </div>

      {/* Caption */}
      <p style={{ margin: "0 0 10px", color: "#fff", fontSize: 15, lineHeight: 1.4, minHeight: 42 }}>
        {next ? (
          <>You&apos;re <span style={{ color: "#61ce70", fontWeight: 700 }}>${away}</span> away from {next.label.toLowerCase()}</>
        ) : (
          <span style={{ color: "#61ce70", fontWeight: 700 }}>Every reward earned</span>
        )}
      </p>

      {/* Progress bar */}
      <div style={{ position: "relative", height: 10, borderRadius: 999, background: "rgba(255,255,255,0.10)", overflow: "hidden", marginBottom: 18 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: `${pct}%`,
            borderRadius: 999,
            background: "linear-gradient(110deg, #A8F0B4 0%, #3DC77A 50%, #2A9555 100%)",
            transition: "none",
          }}
        />
      </div>

      {/* Tier chips */}
      <div style={{ display: "flex", gap: 8 }}>
        {TIERS.map((tp) => {
          const earned = total >= tp.at - 0.5;
          return (
            <div
              key={tp.label}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                padding: "12px 6px",
                borderRadius: 12,
                background: earned ? "rgba(61,199,122,0.14)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${earned ? "rgba(61,199,122,0.45)" : "rgba(255,255,255,0.08)"}`,
                transition: "background .2s ease, border-color .2s ease",
              }}
            >
              <span style={{ color: earned ? "#61ce70" : "rgba(255,255,255,0.45)", display: "flex" }}>
                <TierIcon name={tp.icon} />
              </span>
              <span style={{ color: earned ? "#fff" : "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, textAlign: "center", lineHeight: 1.25 }}>
                {tp.label}
              </span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10 }}>${tp.at}</span>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.10)" }}>
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>Subtotal</span>
        <span style={{ color: "#fff", fontSize: 22, fontWeight: 700 }}>${Math.round(total)}</span>
      </div>
    </div>
  );
}
