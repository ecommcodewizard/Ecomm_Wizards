"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The site's infinite marquee/ticker tracks animate continuously regardless of
// viewport. They're transform-only (compositor thread), so the INP impact is
// low, but they keep ~11 layers promoted off-screen. This pauses each track
// while it's out of view to save GPU/battery, and resumes it just before it
// scrolls in. Reduced-motion users are skipped (CSS already disables them).
const SELECTOR =
  ".mobile-col-1, .mobile-col-2, .mobile-col-3, .why-partner-logo-track, .logo-col-up, .logo-col-down, .ticker-strip, .logo-strip";

export default function PauseOffscreenAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let observer: IntersectionObserver | undefined;
    // Wait one frame so the (possibly just-navigated) DOM is painted before we query.
    const raf = requestAnimationFrame(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
      if (els.length === 0) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            (entry.target as HTMLElement).style.animationPlayState = entry.isIntersecting
              ? "running"
              : "paused";
          }
        },
        { rootMargin: "200px" },
      );
      els.forEach((el) => observer!.observe(el));
    });

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
