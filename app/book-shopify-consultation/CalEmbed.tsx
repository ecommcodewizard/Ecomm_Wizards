"use client";

import { useEffect, useRef } from "react";

/**
 * cal.com inline embed.
 *
 * To go live, set CAL_LINK to your real cal.com event link (the part after
 * cal.com/), e.g. "ecomm-wizards/discovery-call". That is the only change
 * needed. CAL_NAMESPACE just has to be unique on the page; leave it as-is.
 *
 * If you instead paste cal.com's own embed snippet, drop CAL_LINK / namespace
 * from it into the two constants below and keep the rest of this file.
 */
const CAL_LINK = "ecomm-wizards/30min"; // TODO: replace with your real cal.com link
const CAL_NAMESPACE = "book-shopify-consultation";
const CAL_BRAND = "#2A9555";

declare global {
  interface Window {
    Cal?: CalApi;
    dataLayer?: Record<string, unknown>[];
  }
}

type CalApi = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, (...args: unknown[]) => void>;
  q?: unknown[];
};

export default function CalEmbed() {
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    // Official cal.com bootstrap: queues calls until embed.js finishes loading.
    (function (C: Window, A: string, L: string) {
      const p = (a: { q?: unknown[] }, ar: unknown) => {
        (a.q = a.q || []).push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...ar: unknown[]) {
          const cal = C.Cal as CalApi;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function (...a: unknown[]) {
              p(api as unknown as { q?: unknown[] }, a);
            } as ((...a: unknown[]) => void) & { q?: unknown[] };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns![namespace] = cal.ns![namespace] || api;
              p(cal.ns![namespace] as unknown as { q?: unknown[] }, ar);
              p(cal as unknown as { q?: unknown[] }, ["initNamespace", namespace]);
            } else {
              p(cal as unknown as { q?: unknown[] }, ar);
            }
            return;
          }
          p(cal as unknown as { q?: unknown[] }, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = window.Cal as CalApi;
    Cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" });
    Cal.ns![CAL_NAMESPACE]("inline", {
      elementOrSelector: "#bkc-cal-inline",
      config: { layout: "month_view", theme: "light" },
      calLink: CAL_LINK,
    });
    Cal.ns![CAL_NAMESPACE]("ui", {
      // Hide Cal's event-details panel (avatar, title, Meet icon, timezone).
      // Its avatar/icon images break inside the embedded iframe on some
      // browsers, and the page's own left column already carries this info.
      hideEventTypeDetails: true,
      layout: "month_view",
      cssVarsPerTheme: { light: { "cal-brand": CAL_BRAND } },
    });

    // Capture successful bookings into our own DB. The free Cal.com plan has no
    // server API/webhooks, so we read the booking from the browser event and
    // fire-and-forget it to /api/bookings, which stores it for the admin
    // Call Bookings page.
    Cal.ns![CAL_NAMESPACE]("on", {
      action: "bookingSuccessfulV2",
      callback: (e: unknown) => {
        try {
          const data = (e as { detail?: { data?: unknown } })?.detail?.data ?? {};
          fetch("/api/bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            keepalive: true,
          }).catch(() => {});
        } catch {
          // never let capture break the booking experience
        }
      },
    });

    // Bridge the booking out of cal.com's iframe: when a booking succeeds, push a
    // dataLayer event so GTM can fire the Google Ads "Book a Call" conversion.
    // (A standard form-submit trigger can't see inside the cross-origin iframe.)
    Cal.ns![CAL_NAMESPACE]("on", {
      action: "bookingSuccessful",
      callback: () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "cal_booking_success" });
      },
    });
  }, []);

  return (
    <div className="bkc-cal-wrap">
      <span className="bkc-cal-loading" aria-hidden>
        Loading calendar...
      </span>
      <div id="bkc-cal-inline" className="bkc-cal-inline" />
      <noscript>
        <a href={`https://cal.com/${CAL_LINK}`} target="_blank" rel="noopener noreferrer">
          Book your call on cal.com
        </a>
      </noscript>
    </div>
  );
}
