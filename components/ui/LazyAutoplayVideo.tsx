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
  /**
   * For a video that is ALREADY on screen at first paint, i.e. a hero.
   *
   * The observer below is useless there: the element is in the viewport
   * immediately, so it fires on the first tick and the video competes with the
   * LCP image and with hydration for bandwidth. The poster is what the visitor
   * actually sees first, so it should win that race every time.
   *
   * With this set, intersection only marks the video as wanted; the fetch waits
   * for the browser to go idle. Below the fold this is unnecessary and slightly
   * harmful, since it can delay a fetch the reader is scrolling toward.
   */
  deferUntilIdle?: boolean;
};

type IdleWindow = Window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function LazyAutoplayVideo({
  src,
  poster,
  className,
  style,
  rate,
  rootMargin = "400px",
  deferUntilIdle = false,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Motion is decoration here. If it is unwelcome, the file is never fetched.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let idleHandle: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const w = window as IdleWindow;

    // Hand off to the browser's idle time rather than loading straight away.
    // The timeout is a ceiling, not a target: a page that never goes idle still
    // gets its video, just last. Safari has no requestIdleCallback, hence the
    // setTimeout path.
    const start = () => {
      if (!deferUntilIdle) return setShouldLoad(true);
      if (typeof w.requestIdleCallback === "function") {
        idleHandle = w.requestIdleCallback(() => setShouldLoad(true), { timeout: 2500 });
      } else {
        timer = setTimeout(() => setShouldLoad(true), 1200);
      }
    };

    const cleanup = () => {
      if (idleHandle !== undefined) w.cancelIdleCallback?.(idleHandle);
      if (timer !== undefined) clearTimeout(timer);
    };

    // No IntersectionObserver (very old browsers): fall back to loading it,
    // which is the behaviour these elements had before.
    if (!("IntersectionObserver" in window)) {
      start();
      return cleanup;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          start();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cleanup();
    };
  }, [rootMargin, deferUntilIdle]);

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
