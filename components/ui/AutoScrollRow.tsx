"use client";
import type { ReactNode } from "react";

// Reusable continuous horizontal marquee. Duplicates the items so a
// translateX(-50%) loop is seamless (the gap is applied as per-cell margin so
// each set is exactly half the track). Pauses on hover, fades at both edges,
// and freezes for prefers-reduced-motion. Consolidates the ~20 hand-rolled
// `*-track` marquees across the service pages.

type Props = {
  items: ReactNode[];
  /** Seconds for one full loop. Lower = faster. */
  speedSec?: number;
  direction?: "left" | "right";
  /** Space between cells, in px. */
  gap?: number;
  ariaLabel?: string;
};

export default function AutoScrollRow({ items, speedSec = 32, direction = "left", gap = 14, ariaLabel }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="asr-viewport" role="group" aria-label={ariaLabel}>
      <div
        className={`asr-track${direction === "right" ? " asr-track--right" : ""}`}
        style={{ animationDuration: `${speedSec}s` }}
      >
        {doubled.map((node, i) => (
          <div className="asr-cell" key={i} aria-hidden={i >= items.length} style={{ marginRight: gap }}>
            {node}
          </div>
        ))}
      </div>
      <style>{`
        .asr-viewport{overflow:hidden;width:100%;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 5%,#000 95%,transparent 100%);mask-image:linear-gradient(to right,transparent 0,#000 5%,#000 95%,transparent 100%)}
        .asr-track{display:flex;flex-wrap:nowrap;width:max-content;animation-name:asrScrollL;animation-timing-function:linear;animation-iteration-count:infinite;will-change:transform}
        .asr-track--right{animation-name:asrScrollR}
        .asr-cell{flex:0 0 auto}
        .asr-viewport:hover .asr-track{animation-play-state:paused}
        @keyframes asrScrollL{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
        @keyframes asrScrollR{from{transform:translate3d(-50%,0,0)}to{transform:translate3d(0,0,0)}}
        @media (prefers-reduced-motion: reduce){.asr-track{animation:none!important}}
      `}</style>
    </div>
  );
}
