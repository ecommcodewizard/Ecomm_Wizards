import type { AssetRenderer } from "@/lib/geo/types";
import { inline } from "./Prose";

// One accessible <table> with five style variants selected by `renderer`
// (data-renderer attribute + scoped CSS). Server component. Every cell string
// runs through inline() so [NEEDS INPUT] / [src:id] / [link:...] render.
//
// Wide tables scroll INSIDE .ga-wrap (overflow-x: auto); the page never scrolls
// sideways.

export type AssetTableRow = { label: string; cells: string[]; note?: string };

export type AssetTableProps = {
  renderer: AssetRenderer;
  columns: string[];
  rows: AssetTableRow[];
  caption: string;
  id?: string;
};

// ---------------------------------------------------------------------------
// matrix: status pills
// ---------------------------------------------------------------------------

type PillTone = "green" | "amber" | "blue" | "red";

// Order matters: longer / more specific keys first so "not fixable" does not
// match "no", and "re-authorization required" does not match anything else.
const STATUS_PILLS: { key: string; tone: PillTone }[] = [
  { key: "re-authorization required", tone: "red" },
  { key: "will not fix this", tone: "red" },
  { key: "makes it worse", tone: "red" },
  { key: "no effect", tone: "red" },
  { key: "start here", tone: "green" },
  { key: "helps a bit", tone: "amber" },
  { key: "next", tone: "blue" },
  { key: "native fix", tone: "green" },
  { key: "app required", tone: "amber" },
  { key: "custom work", tone: "blue" },
  { key: "not fixable", tone: "red" },
  { key: "transfers", tone: "green" },
  { key: "yes", tone: "green" },
  { key: "no", tone: "red" },
];

/** Returns the pill tone for a matrix cell, or null when the cell is plain.
 *  Matches case-insensitively on the trimmed text before any ":" or " -". */
export function matrixPillTone(cell: string): PillTone | null {
  const head = cell
    .trim()
    .toLowerCase()
    .split(/:| -/)[0]
    .trim();
  if (!head) return null;
  for (const { key, tone } of STATUS_PILLS) {
    if (head === key) return tone;
    if (head.startsWith(key)) {
      // Require a word boundary right after the key so "no" does not match
      // "notable" but does match "no (see note)".
      const next = head.charAt(key.length);
      if (next === "" || !/[a-z0-9]/.test(next)) return tone;
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// frequency: proportional bars
// ---------------------------------------------------------------------------

/** Parses "N of M", "N/M" or "N%" (with optional surrounding text) into a
 *  0..1 ratio, or null when the cell is not proportional. */
export function frequencyRatio(cell: string): number | null {
  const s = cell.trim();
  let m = /^(\d+(?:\.\d+)?)\s*(?:of|\/)\s*(\d+(?:\.\d+)?)\b/i.exec(s);
  if (m) {
    const n = parseFloat(m[1]);
    const d = parseFloat(m[2]);
    if (d > 0 && Number.isFinite(n / d)) return Math.max(0, Math.min(1, n / d));
    return null;
  }
  m = /^(\d+(?:\.\d+)?)\s*%/.exec(s);
  if (m) {
    const p = parseFloat(m[1]);
    if (Number.isFinite(p)) return Math.max(0, Math.min(1, p / 100));
  }
  return null;
}

/** True when a cell reads as a number (digits, %, $, commas, decimals, ranges). */
export function looksNumeric(cell: string): boolean {
  const s = cell.trim();
  if (!s) return false;
  return /^[~<>+\-]?\s*[$€]?\s*\d[\d,.]*\s*(?:%|x|k|m|bn|pts?)?(?:\s*(?:-|to|of|\/)\s*[$€]?\s*\d[\d,.]*\s*(?:%|x|k|m|bn|pts?)?)?$/i.test(s);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function CheckGlyph() {
  return (
    <svg className="ga-check" viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">
      <rect x="1.5" y="1.5" width="17" height="17" rx="4" fill="#ffffff" stroke="#2A9555" strokeWidth="1.6" />
    </svg>
  );
}

export default function AssetTable({ renderer, columns, rows, caption, id }: AssetTableProps) {
  return (
    <div className="ga-wrap" id={id} data-renderer={renderer}>
      <table className="ga-table" style={{ minWidth: `${180 + Math.max(0, columns.length - 1) * 140}px` }}>
        <caption className="ga-caption">{inline(caption)}</caption>
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={i} scope="col" className={i === 0 ? "ga-th ga-th--label" : "ga-th"}>
                {inline(col)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="ga-row">
              <th scope="row" className="ga-rowlabel">
                <span className="ga-rowlabel-main">
                  {renderer === "checklist" ? <CheckGlyph /> : null}
                  <span>{inline(row.label)}</span>
                </span>
                {row.note ? <span className="ga-rownote">{inline(row.note)}</span> : null}
              </th>
              {row.cells.map((cell, ci) => {
                const tone = renderer === "matrix" ? matrixPillTone(cell) : null;
                const ratio = renderer === "frequency" ? frequencyRatio(cell) : null;
                const numeric = renderer === "frequency" || renderer === "model" ? looksNumeric(cell) : false;
                const cls = ["ga-td", numeric ? "ga-td--num" : "", ratio !== null ? "ga-td--bar" : ""].filter(Boolean).join(" ");
                return (
                  <td key={ci} className={cls}>
                    {ratio !== null ? (
                      <span className="ga-bar" aria-hidden="true" style={{ width: `${Math.round(ratio * 100)}%` }} />
                    ) : null}
                    <span className="ga-cell">
                      {tone ? <span className={`ga-pill ga-pill--${tone}`} aria-hidden="true" /> : null}
                      {inline(cell)}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .ga-wrap { font-family: 'Poppins', sans-serif; overflow-x: auto; -webkit-overflow-scrolling: touch; border: 1px solid rgba(0,0,0,0.08); border-radius: 12px; background: #ffffff; max-width: 100%; }
          .ga-wrap:focus-visible { outline: 3px solid #3DC77A; outline-offset: 2px; }
          .ga-table { width: 100%; border-collapse: collapse; font-size: 15px; color: #0f172a; }
          .ga-caption { caption-side: top; text-align: left; font-size: 13px; font-weight: 600; color: #334155; padding: 12px 14px; background: #ffffff; border-bottom: 1px solid rgba(0,0,0,0.08); }
          .ga-th { background: #0f172a; font-size: 13px; font-weight: 700; letter-spacing: .04em; color: #ffffff; text-align: left; padding: 16px 18px; border-bottom: none; white-space: nowrap; min-width: 150px; vertical-align: middle; }
          .ga-th--label { min-width: 180px; }
          .ga-rowlabel, .ga-td { padding: 16px 18px; border-bottom: 1px solid rgba(0,0,0,0.07); vertical-align: middle; text-align: left; line-height: 1.5; min-width: 150px; }
          .ga-rowlabel { font-weight: 700; min-width: 190px; color: #000000; background: #FBF7ED; }
          .ga-rowlabel-main { display: inline-flex; align-items: flex-start; gap: 10px; }
          .ga-rownote { display: block; font-weight: 400; font-size: 13px; color: #64748b; margin-top: 4px; }
          .ga-row:last-child .ga-rowlabel, .ga-row:last-child .ga-td { border-bottom: none; }
          .ga-td { position: relative; }
          .ga-cell { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 8px; }
          .ga-table a { color: #2A9555; text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }
          .ga-check { flex-shrink: 0; margin-top: 2px; }

          /* comparison: bold label column, zebra rows, equal-width value columns */
          .ga-wrap[data-renderer="comparison"] .ga-table { table-layout: fixed; }
          .ga-wrap[data-renderer="comparison"] .ga-th--label { width: 22%; }
          .ga-wrap[data-renderer="comparison"] .ga-row:nth-child(even) .ga-rowlabel,
          .ga-wrap[data-renderer="comparison"] .ga-row:nth-child(even) .ga-td { background: rgba(251,247,237,0.5); }
          .ga-wrap[data-renderer="comparison"] .ga-row:hover .ga-td { background: rgba(61,199,122,0.07); }
          .ga-wrap[data-renderer="comparison"] .ga-td { font-size: 15px; font-weight: 600; color: #0f172a; }
          .ga-wrap[data-renderer="comparison"] .ga-rowlabel { font-weight: 700; }

          /* matrix: status pills */
          .ga-pill { display: inline-block; width: 10px; height: 10px; border-radius: 999px; flex-shrink: 0; }
          .ga-pill--green { background: #2A9555; }
          .ga-pill--amber { background: #F59E0B; }
          .ga-pill--blue { background: #2563EB; }
          .ga-pill--red { background: #DC2626; }
          .ga-wrap[data-renderer="matrix"] .ga-td { font-size: 14px; }

          /* checklist */
          .ga-wrap[data-renderer="checklist"] .ga-rowlabel { font-weight: 600; }

          /* frequency: right-aligned numbers, faint proportional bars */
          .ga-td--num { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
          .ga-td--num .ga-cell { justify-content: flex-end; width: 100%; }
          .ga-bar { position: absolute; left: 0; top: 0; bottom: 0; background: rgba(42,149,85,0.10); pointer-events: none; z-index: 0; }

          /* model: larger values, notes under label */
          .ga-wrap[data-renderer="model"] .ga-td { font-variant-numeric: tabular-nums; font-size: 15.5px; }
          .ga-wrap[data-renderer="model"] .ga-td--num { font-weight: 600; }
          .ga-wrap[data-renderer="model"] .ga-rownote { font-size: 13px; }

          @media (max-width: 640px) {
            .ga-table { font-size: 14px; }
            .ga-caption, .ga-th, .ga-rowlabel, .ga-td { padding: 10px 12px; }
          }
        `,
        }}
      />
    </div>
  );
}
