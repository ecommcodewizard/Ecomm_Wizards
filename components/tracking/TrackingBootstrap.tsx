"use client";

import { useEffect } from "react";
import { captureFirstTouch, track } from "@/lib/tracking";

/**
 * Site-wide conversion tracking, mounted once in the frontend layout.
 *
 *  1. Records the visitor's first touch (landing page, referrer, UTMs), so a
 *     booking made days later can still be credited to the page that brought
 *     them in.
 *  2. One delegated click listener instead of edits to dozens of CTA
 *     components. It pushes:
 *       - `cta_click`     for links/buttons that lead to booking or the free audit
 *       - `contact_click` for tel:, mailto: and WhatsApp links
 *     with the CTA text, target and where on the page it sat (header, footer,
 *     or the nearest section id).
 *
 * Renders nothing. A failure here can never block a click: the listener runs
 * passively and every branch is wrapped.
 */
const BOOKING_HREF = /book-shopify-consultation|#book-a-call|free-shopify-store-audit|cal\.com\//i;
const BOOKING_TEXT = /\b(book|schedule|free (call|audit|strategy|quote)|get (a|my|your) free)\b/i;

function locationOf(el: Element): string {
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  if (el.closest("[data-cta-location]")) return el.closest("[data-cta-location]")!.getAttribute("data-cta-location") || "section";
  const section = el.closest("section[id], div[id]");
  return section?.id ? `section:${section.id}` : "body";
}

export default function TrackingBootstrap() {
  useEffect(() => {
    captureFirstTouch();

    const onClick = (e: MouseEvent) => {
      try {
        const target = e.target as Element | null;
        const el = target?.closest?.("a, button");
        if (!el) return;
        const href = el.getAttribute("href") || "";
        const text = (el.textContent || el.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim().slice(0, 80);

        if (/^(tel:|mailto:)|wa\.me\/|api\.whatsapp\.com/i.test(href)) {
          const channel = href.startsWith("tel:") ? "phone" : href.startsWith("mailto:") ? "email" : "whatsapp";
          track("contact_click", { contact_channel: channel, cta_location: locationOf(el) });
          return;
        }
        if (BOOKING_HREF.test(href) || (!href && BOOKING_TEXT.test(text)) || (href.startsWith("#") && BOOKING_TEXT.test(text))) {
          track("cta_click", {
            cta_text: text,
            cta_href: href.slice(0, 200),
            cta_type: /audit/i.test(href + " " + text) ? "audit" : "booking",
            cta_location: locationOf(el),
          });
        }
      } catch {
        // tracking must never interfere with navigation
      }
    };

    document.addEventListener("click", onClick, { capture: true, passive: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
