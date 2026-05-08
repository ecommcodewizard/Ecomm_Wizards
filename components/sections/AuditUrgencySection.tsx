"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const OLIVE = "#4FB872";

type Countdown = { end: Date | null; days: number; hours: number; minutes: number; seconds: number };

/**
 * Window: every Monday 00:00 local time → +72h. After expiry the timer
 * sits at 0 until the next Monday rolls over and the cycle restarts.
 */
function getCountdown(): Countdown {
  const now = new Date();
  const daysSinceMonday = (now.getDay() + 6) % 7; // Mon=0 ... Sun=6
  const monday = new Date(now);
  monday.setDate(now.getDate() - daysSinceMonday);
  monday.setHours(0, 0, 0, 0);
  const end = new Date(monday.getTime() + 72 * 3600 * 1000);
  const total = Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
  return {
    end,
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

const Star = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={OLIVE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function AuditUrgencySection() {
  // Initialize zeros so SSR + first client render match; effect ticks live values.
  const [c, setC] = useState<Countdown>({ end: null, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => setC(getCountdown());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const deadline = c.end
    ? c.end.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : "";

  const includes = [
    "Deep-dive analysis of your chosen page (Homepage, Product, Collection, Cart – you decide).",
    "3-5 high-impact fixes rooted in real customer behavior data and heatmap analysis.",
    "Interactive Figma prototype of the top revenue-boosting redesign.",
    "30-minute strategy session with one of our Shopify experts.",
    "Zero obligation, zero risk. No credit card, no strings attached.",
  ];
  const features = [
    "Takes less than 2 minutes",
    "Only 2 spots left this week",
    "No credit card required",
  ];

  return (
    <section className="w-full" style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}>
      <div
        className="mx-auto px-[20px] py-[40px] sm:py-[50px] lg:py-[60px] grid items-center gap-[30px] lg:grid-cols-2"
        style={{ maxWidth: "1320px" }}
      >
        {/* Left: copy */}
        <div>
          <h2
            className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.2] text-center lg:text-left"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#FFFFFF" }}
          >
            Claim Your Free $1,950 Shopify Store Audit (This Week Only)
          </h2>

          <p
            className="mt-3 text-[15px] sm:text-[17px] text-center lg:text-left"
            style={{ color: OLIVE, fontWeight: 600 }}
            suppressHydrationWarning
          >
            Deadline: Offer Expires {deadline || "—"}
          </p>

          <p
            className="mt-5 text-[14px] sm:text-[15px] leading-[1.7] text-center lg:text-left"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            We&rsquo;re giving away{" "}
            <strong style={{ color: "#FFFFFF" }}>4 complimentary professional Shopify audits</strong>{" "}
            this week to DTC brands ready to fix their conversion leaks. We&rsquo;ll personally audit
            any critical page in your store, uncover the hidden revenue gaps, and deliver a Figma
            prototype showing exactly how to turn more visitors into buyers &ndash; completely FREE.
          </p>

          <h3
            className="mt-6 text-[16px] sm:text-[18px] text-center lg:text-left"
            style={{ color: OLIVE, fontWeight: 600 }}
          >
            Your Free Shopify Conversion Audit Includes:
          </h3>
          <ul className="mt-3 space-y-2">
            {includes.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[14px] sm:text-[15px] leading-[1.6]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                <span className="mt-0.5 flex-shrink-0">{Star}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p
            className="mt-6 text-[14px] sm:text-[15px] text-center lg:text-left"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Trusted by 700+ brands, including Andrea Maack, RevGum, and Sunshine
          </p>
        </div>

        {/* Right: timer card */}
        <div
          className="rounded-[20px] p-5 sm:p-6 lg:p-7"
          style={{ background: "#0F0F0F", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Timer panel */}
          <div
            className="rounded-[14px] p-6 sm:p-8 text-center"
            style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.04)" }}
          >
            <h3 className="text-[22px] sm:text-[26px]" style={{ color: "#FFFFFF", fontWeight: 700 }}>
              This limited-time offer
            </h3>
            <p
              className="mt-2 text-[14px] sm:text-[15px]"
              style={{ color: OLIVE, fontWeight: 500, letterSpacing: "0.08em" }}
            >
              DISAPPEARS IN :
            </p>

            <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { v: c.days, l: "Days" },
                { v: c.hours, l: "Hours" },
                { v: c.minutes, l: "Minutes" },
                { v: c.seconds, l: "Seconds" },
              ].map((b) => (
                <div
                  key={b.l}
                  className="rounded-[10px] py-3 sm:py-4"
                  style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                >
                  <div
                    className="text-[26px] sm:text-[32px] lg:text-[34px] leading-[1] tabular-nums"
                    style={{ color: OLIVE, fontWeight: 600 }}
                    suppressHydrationWarning
                  >
                    {b.v}
                  </div>
                  <div className="mt-1 text-[12px] sm:text-[13px]" style={{ color: "#FFFFFF" }}>
                    {b.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p
            className="mt-5 text-center text-[13px] sm:text-[14px] leading-[1.6]"
            style={{ color: "rgba(255,255,255,0.85)" }}
            suppressHydrationWarning
          >
            We&rsquo;re offering 4 free Shopify growth audits this week. Only 2 spots remain. When
            the timer hits zero{deadline ? ` on ${deadline}` : ""}, this offer disappears and the
            page reverts to the standard $1,950 price.
          </p>

          <div className="mt-5 flex justify-center">
            <Link
              href="/free-shopify-store-audit"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 sm:px-8 py-3.5 sm:py-4 text-[14px] sm:text-[15px] transition-colors duration-300 hover:bg-[rgba(79,184,114,0.12)]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: "#FFFFFF",
                border: `1.5px solid ${OLIVE}`,
                background: "transparent",
              }}
            >
              <span className="whitespace-nowrap">Apply Now to Get Free Audit</span>
              <svg width="16" height="12" viewBox="0 0 15 10.55" fill="none" aria-hidden>
                <path
                  d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center justify-center gap-2 text-[13px] sm:text-[14px]"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                <span className="flex-shrink-0">{Star}</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
