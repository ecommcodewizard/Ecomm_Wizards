// Client-side conversion tracking: where a visitor came from (first touch) and
// the dataLayer events GTM turns into GA4 / Google Ads conversions.
//
// Browser-only. Every storage and dataLayer access is wrapped so tracking can
// never break a form or a booking: a private window, blocked storage or a
// missing GTM just means less data, never an error for the visitor.

export type Attribution = {
  page?: string; // page the action happened on
  landing_page?: string; // first page of the first visit
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  first_seen?: string; // ISO timestamp of the first visit
};

const KEY = "ew_first_touch";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;
const MAX = 500;

const clip = (v: string | null | undefined) => (v ? v.slice(0, MAX) : undefined);

/**
 * Records the visitor's first touch once (first landing page, external
 * referrer, UTMs, gclid). Later visits keep the original, which is what
 * answers "which page/channel brought this person who later booked?".
 */
export function captureFirstTouch(): void {
  try {
    if (localStorage.getItem(KEY)) return;
    const params = new URLSearchParams(location.search);
    const ref = document.referrer && !document.referrer.startsWith(location.origin) ? document.referrer : "";
    const ft: Attribution = {
      landing_page: clip(location.pathname),
      ...(ref ? { referrer: clip(ref) } : {}),
      first_seen: new Date().toISOString(),
    };
    for (const k of UTM_KEYS) {
      const v = params.get(k);
      if (v) ft[k] = clip(v);
    }
    localStorage.setItem(KEY, JSON.stringify(ft));
  } catch {
    // storage blocked: nothing to record
  }
}

/** First-touch data plus the current page. Safe to call anywhere on the client. */
export function getAttribution(): Attribution {
  let ft: Attribution = {};
  try {
    ft = JSON.parse(localStorage.getItem(KEY) || "{}") as Attribution;
  } catch {
    ft = {};
  }
  let page: string | undefined;
  try {
    page = clip(location.pathname);
  } catch {
    page = undefined;
  }
  return { ...ft, ...(page ? { page } : {}) };
}

/** Pushes a dataLayer event for GTM. Never throws. */
export function track(event: string, params: Record<string, unknown> = {}): void {
  try {
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event, page_path: location.pathname, ...params });
  } catch {
    // no window/dataLayer: ignore
  }
}
