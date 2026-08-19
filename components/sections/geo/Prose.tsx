import Link from "next/link";
import type { ReactNode } from "react";
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

const MARKER_RE = /(\[NEEDS INPUT[^\]]*\]|\[link:[^\]|]+\|[^\]]+\])/gi;

export function inline(text: string): ReactNode[] {
  const parts = text.split(MARKER_RE).filter((p) => p !== "");
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
    return part;
  });
}

export default function Prose({ text, className = "gp-p" }: { text: string; className?: string }) {
  const paragraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
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
