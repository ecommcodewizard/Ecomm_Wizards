"use client";

import { useEffect, useRef } from "react";

/**
 * cal.com inline embed for the Klaviyo Audit booking section.
 *
 * To go live, set CAL_LINK to your real cal.com event link (the part after
 * cal.com/), e.g. "ecomm-wizards/discovery-call". That is the only change
 * needed. CAL_NAMESPACE just has to be unique on the page; leave it as-is.
 */
const CAL_LINK = "ecomm-wizards/30min"; // TODO: replace with your real cal.com link
const CAL_NAMESPACE = "klaviyo-audit";
const CAL_BRAND = "#2A9555";

declare global {
  interface Window {
    Cal?: CalApi;
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
      elementOrSelector: "#kvcal-inline",
      config: { layout: "month_view", theme: "light" },
      calLink: CAL_LINK,
    });
    Cal.ns![CAL_NAMESPACE]("ui", {
      // Hide Cal's event-details panel (avatar, title, Meet icon, timezone).
      // Its avatar/icon images break inside the embedded iframe on some
      // browsers, and the page's own copy already carries this info.
      hideEventTypeDetails: true,
      layout: "month_view",
      cssVarsPerTheme: { light: { "cal-brand": CAL_BRAND } },
    });
  }, []);

  return (
    <div className="kvcal-wrap">
      <span className="kvcal-loading" aria-hidden>
        Loading calendar...
      </span>
      <div id="kvcal-inline" className="kvcal-inline" />
      <noscript>
        <a href={`https://cal.com/${CAL_LINK}`} target="_blank" rel="noopener noreferrer">
          Book your call on cal.com
        </a>
      </noscript>
    </div>
  );
}
