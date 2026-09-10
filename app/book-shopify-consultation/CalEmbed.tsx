"use client";

import { useEffect, useRef, useState } from "react";

/**
 * cal.com inline embed.
 *
 * To go live, set CAL_LINK to your real cal.com event link (the part after
 * cal.com/), e.g. "ecomm-wizards/discovery-call". That is the only change
 * needed.
 *
 * If you instead paste cal.com's own embed snippet, drop the calLink and
 * namespace out of it into the constants below and keep the rest of this file.
 *
 * Every prop is optional and defaults to exactly what /book-shopify-consultation
 * used before the props existed, so that page is unchanged by them. They exist
 * because the conversion block on the geo pages mounts this component too, and
 * cal.com keys its instances by namespace while the embed writes into a fixed
 * DOM id. Two instances sharing either one fight over the same iframe.
 *
 * IMPORTANT: mounting this boots cal.com's embed.js, a third-party script plus
 * a cross-origin iframe. Mount it only once the reader has actually asked for a
 * calendar. Rendering it eagerly on a page that merely offers booking makes
 * every visitor pay for a widget almost none of them will open.
 */
const CAL_LINK = "ecomm-wizards/30min"; // TODO: replace with your real cal.com link
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

export interface CalEmbedProps {
  /** Unique per mounted instance. Two embeds sharing one namespace collide. */
  namespace?: string;
  /** DOM id the calendar renders into. Unique per instance, as above. */
  elementId?: string;
  /** cal.com event link: the part after cal.com/. */
  calLink?: string;
}

export default function CalEmbed({
  namespace = "book-shopify-consultation",
  elementId = "bkc-cal-inline",
  calLink = CAL_LINK,
}: CalEmbedProps = {}) {
  const started = useRef(false);
  // "loading" until cal.com says the embed is up. Previously the placeholder was
  // never removed at all: /book-shopify-consultation only stacked the iframe on
  // top of it with position:absolute, so the text was still in the DOM and still
  // visible anywhere that CSS did not apply. Hiding it on the embed's own ready
  // event is what the stacking trick was standing in for.
  const [state, setState] = useState<"loading" | "ready" | "failed">("loading");

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
            const ns = ar[1];
            api.q = api.q || [];
            if (typeof ns === "string") {
              cal.ns![ns] = cal.ns![ns] || api;
              p(cal.ns![ns] as unknown as { q?: unknown[] }, ar);
              p(cal as unknown as { q?: unknown[] }, ["initNamespace", ns]);
            } else {
              p(cal as unknown as { q?: unknown[] }, ar);
            }
            return;
          }
          p(cal as unknown as { q?: unknown[] }, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = window.Cal as CalApi;
    Cal("init", namespace, { origin: "https://app.cal.com" });
    Cal.ns![namespace]("inline", {
      elementOrSelector: "#" + elementId,
      config: { layout: "month_view", theme: "light" },
      calLink,
    });
    Cal.ns![namespace]("ui", {
      // Hide Cal's event-details panel (avatar, title, Meet icon, timezone).
      // Its avatar/icon images break inside the embedded iframe on some
      // browsers, and the page's own left column already carries this info.
      hideEventTypeDetails: true,
      layout: "month_view",
      cssVarsPerTheme: { light: { "cal-brand": CAL_BRAND } },
    });

    // Clear the placeholder once the embed is actually up, and swap it for a
    // direct link if cal.com cannot load. A permanent "Loading calendar..." is
    // worse than either: it tells a reader the page is broken and gives them
    // nowhere to go.
    Cal.ns![namespace]("on", { action: "linkReady", callback: () => setState("ready") });
    Cal.ns![namespace]("on", { action: "linkFailed", callback: () => setState("failed") });

    // Capture successful bookings into our own DB. The free Cal.com plan has no
    // server API/webhooks, so we read the booking from the browser event and
    // fire-and-forget it to /api/bookings, which stores it for the admin
    // Call Bookings page.
    Cal.ns![namespace]("on", {
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
    Cal.ns![namespace]("on", {
      action: "bookingSuccessful",
      callback: () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "cal_booking_success" });
      },
    });
  }, [namespace, elementId, calLink]);

  return (
    <div className="bkc-cal-wrap" data-cal-state={state}>
      {state === "loading" ? (
        <span className="bkc-cal-loading" role="status">
          Loading calendar...
        </span>
      ) : null}
      {state === "failed" ? (
        <p className="bkc-cal-failed">
          The calendar did not load.{" "}
          <a href={`https://cal.com/${calLink}`} target="_blank" rel="noopener noreferrer">
            Book your call on cal.com
          </a>{" "}
          instead, or leave your details and we will come back to you.
        </p>
      ) : null}
      <div id={elementId} className="bkc-cal-inline" />
      <noscript>
        <a href={`https://cal.com/${calLink}`} target="_blank" rel="noopener noreferrer">
          Book your call on cal.com
        </a>
      </noscript>
    </div>
  );
}
