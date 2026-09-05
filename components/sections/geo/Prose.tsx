import Link from "next/link";
import type { ReactNode } from "react";
import { BRAND_STATS } from "@/lib/brand-stats";
import { NEEDS_INPUT } from "@/lib/geo/types";

// Renders a human-authored prose slot. Paragraphs split on blank lines. One
// inline convention is supported inside the text:
//   [link:/path|Label] -> an internal link
// Unfilled "[NEEDS INPUT: ...]" markers render as a highlighted chip in
// development and preview builds; the route 404s in production while any
// remain, so this never reaches a visitor.
//
// There is deliberately no inline citation marker. On-page sourcing was retired
// by the owner, and validate-content fails any content file that still contains
// a [src:...] marker so it cannot creep back in.

const MARKER_RE = /(\[NEEDS INPUT[^\]]*\]|\[link:[^\]|]+\|[^\]]+\]|\*\*[^*]+\*\*)/gi;

// Brand-stat tokens. Writing {storesBuilt} instead of "150+" means a revised
// figure is one edit in lib/brand-stats.ts rather than a hunt through copy,
// which is how the previous revision left 37 files disagreeing. An unknown
// token is left visible rather than blanked, so the mistake is obvious.
const STAT_TOKEN_RE = /\{(storesBuilt|revenue|years|awards|rating)\}/g;

function substituteStats(text: string): string {
  return text.replace(STAT_TOKEN_RE, (_m, key: keyof typeof BRAND_STATS) => BRAND_STATS[key]);
}

export function inline(text: string): ReactNode[] {
  const parts = substituteStats(text).split(MARKER_RE).filter((p) => p !== "");
  return parts.map((part, i) => {
    if (part.startsWith(NEEDS_INPUT)) {
      return (
        <mark key={i} className="gp-needs-input" data-needs-input="">
          {part}
        </mark>
      );
    }
    const link = /^\[link:([^\]|]+)\|([^\]]+)\]$/.exec(part);
    if (link) {
      return (
        <Link key={i} href={link[1]}>
          {link[2]}
        </Link>
      );
    }
    const bold = /^\*\*([^*]+)\*\*$/.exec(part);
    if (bold) {
      return <strong key={i}>{bold[1]}</strong>;
    }
    return part;
  });
}

export default function Prose({ text, className = "gp-p" }: { text: string; className?: string }) {
  const paragraphs = substituteStats(text).split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i} className={className}>
          {inline(p)}
        </p>
      ))}
    </>
  );
}
