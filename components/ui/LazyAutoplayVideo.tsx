"use client";

import { useEffect, useRef, useState } from "react";

// An autoplaying decorative video that does not download until it is near the
// viewport.
//
// WHY THIS EXISTS: `<video autoPlay preload="none">` does NOT defer the
// download. Autoplay needs the bytes, so the browser ignores preload="none"
// and fetches immediately. Several places on this site carried both attributes
// believing the second one was saving them the request; PageSpeed found 27 MB
// of video on a page where the reader had scrolled to none of it.
//
// The only reliable defer is to withhold `src` until the element is close to
// being seen, which is what this does.
//
// It also treats prefers-reduced-motion as "never fetch this at all". The
// poster is the entire experience for those visitors, so downloading a video
// they will never be shown is pure waste on top of being the wrong behaviour.

type Props = {
  src: string;
  poster: string;
  className?: string;
  style?: React.CSSProperties;
  /** Playback rate once it starts. Some clips read better slightly sped up. */
  rate?: number;
  /** How far ahead of the viewport to start fetching. */
  rootMargin?: string;
};

export default function LazyAutoplayVideo({
  src,
  poster,
  className,
  style,
  rate,
  rootMargin = "400px",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Motion is decoration here. If it is unwelcome, the file is never fetched.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old browsers): fall back to loading it,
    // which is the behaviour these elements had before.
    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  // Setting src late means the autoplay attribute has already been evaluated,
  // so ask for playback explicitly. A rejected promise is normal (a tab in the
  // background, a battery-saver policy) and is not an error worth surfacing.
  useEffect(() => {
    if (!shouldLoad) return;
    const el = ref.current;
    if (!el) return;
    if (rate) el.playbackRate = rate;
    void el.play().catch(() => {});
  }, [shouldLoad, rate]);

  return (
    <video
      ref={ref}
      src={shouldLoad ? src : undefined}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className={className}
      style={style}
    />
  );
}
