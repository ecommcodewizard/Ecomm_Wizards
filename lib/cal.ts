// Shared cal.com settings and booking tracking for every calendar on the site
// (/book-shopify-consultation, the geo/service conversion blocks, and the two
// Klaviyo pages). One place to change the event link, and the same tracking on
// every embed: previously the Klaviyo calendars recorded no conversion and saved
// no booking at all.

import { getAttribution, track } from "./tracking";

/** The cal.com event link (the part after cal.com/). Owner to confirm it is the live event. */
export const CAL_LINK = "ecomm-wizards/30min";
export const CAL_BRAND = "#2A9555";

type NsApi = (...args: unknown[]) => void;

/**
 * Wires booking capture and conversion events onto one cal.com namespace.
 *
 *  - linkReady            → `cal_view`  (the calendar actually rendered for the visitor)
 *  - bookingSuccessfulV2  → POST /api/bookings with the booking + where the visitor came from
 *  - bookingSuccessful    → `cal_booking_success` (the GTM / Google Ads "Book a Call" conversion)
 *
 * The free cal.com plan has no webhooks, so the browser event is the only signal;
 * attribution rides inside the payload and is stored in the booking's `raw` JSON.
 */
export function attachCalTracking(ns: NsApi, namespace: string): void {
  ns("on", { action: "linkReady", callback: () => track("cal_view", { cal_namespace: namespace }) });

  ns("on", {
    action: "bookingSuccessfulV2",
    callback: (e: unknown) => {
      try {
        const data = (e as { detail?: { data?: unknown } })?.detail?.data ?? {};
        const payload =
          data && typeof data === "object" && !Array.isArray(data)
            ? { ...(data as Record<string, unknown>) }
            : { data };
        fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, _attribution: { ...getAttribution(), cal_namespace: namespace } }),
          keepalive: true,
        }).catch(() => {});
      } catch {
        // never let capture break the booking experience
      }
    },
  });

  ns("on", {
    action: "bookingSuccessful",
    callback: () => track("cal_booking_success", { cal_namespace: namespace }),
  });
}
