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
  /** Hide the header row visually. The <th> elements stay in the DOM so the
   *  table keeps real header semantics; only sighted readers lose them. */
  hideColumnHeaders?: boolean;
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

export default function AssetTable({ renderer, columns, rows, caption, hideColumnHeaders, id }: AssetTableProps) {
  return (
    // The min width is a custom property rather than an inline `min-width` so
    // the mobile card layout below can switch it off. An inline style would
    // beat the media query and keep the table wide.
    <div
      className="ga-wrap"
      id={id}
      data-renderer={renderer}
      data-noheader={hideColumnHeaders ? "true" : undefined}
      style={{ ["--ga-minw" as string]: `${180 + Math.max(0, columns.length - 1) * 140}px` }}
    >
      <table className="ga-table">
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
                  // data-label carries the column heading so the mobile card
                  // layout can print it beside the value, once the real <thead>
                  // is visually hidden.
                  <td key={ci} className={cls} data-label={columns[ci + 1] ?? ""}>
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
          .ga-table { width: 100%; min-width: var(--ga-minw, 0); border-collapse: collapse; font-size: 15px; color: #0f172a; }
          /* Screen-reader only. OnlyHereAsset passes asset.title as the caption,
             so rendering it visibly printed the section's own H2 a second time
             directly under itself, which is the restatement Copy Standard v2.0
             section 5.4 rules out. The element stays in the DOM because it is
             the table's accessible name; it is only hidden from sight. */
          .ga-caption { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap; border: 0; }
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

          /* Headers hidden but kept in the DOM: the rows explain themselves and
             a label like "Across the ten" made readers decode scaffolding
             before they reached the number. Screen readers still get them. */
          .ga-wrap[data-noheader="true"] thead { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap; border: 0; }
          .ga-wrap[data-noheader="true"] .ga-row:first-child .ga-rowlabel,
          .ga-wrap[data-noheader="true"] .ga-row:first-child .ga-td { border-top: none; }

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

          /* ── Phone and small tablet: stacked cards, no sideways scroll ──────
             A three-column table has a hard floor around 490px, so on a phone
             it could only be reached by dragging it sideways. A horizontal
             scroller with no visible affordance reads as a broken page rather
             than as a scroller, so below 900px each row becomes its own card:
             the row label on top, then one "Column / value" line per cell.
             Nothing is hidden and nothing has to be dragged.

             The <thead> stays in the DOM and is only visually hidden, so the
             table keeps its real header semantics for a screen reader; the
             visible column names come from data-label on each cell. */
          @media (max-width: 900px) {
            .ga-wrap { overflow-x: visible; border: none; background: transparent; border-radius: 0; }
            .ga-table { display: block; min-width: 0; font-size: 15px; }
            .ga-table thead { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap; border: 0; }
            .ga-table tbody { display: block; }
            .ga-row { display: block; background: #ffffff; border: 1px solid rgba(0,0,0,0.09); border-radius: 12px; margin-bottom: 12px; overflow: hidden; }
            .ga-row:last-child { margin-bottom: 0; }
            .ga-rowlabel { display: block; min-width: 0; width: auto; padding: 14px 16px; border-bottom: 1px solid rgba(0,0,0,0.08); font-size: 15.5px; }
            .ga-row:last-child .ga-rowlabel { border-bottom: 1px solid rgba(0,0,0,0.08); }
            .ga-td { display: flex; align-items: baseline; justify-content: space-between; gap: 14px; min-width: 0; width: auto; padding: 11px 16px; border-bottom: 1px solid rgba(0,0,0,0.05); text-align: left; }
            .ga-row .ga-td:last-child { border-bottom: none; }
            /* The column name, printed per cell now that the header row is gone. */
            .ga-td::before { content: attr(data-label); flex: 0 1 auto; font-size: 11.5px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; color: #64748b; line-height: 1.5; }
            .ga-td[data-label=""]::before { display: none; }
            /* Same reasoning as the desktop rule: if the headings are hidden
               there, they must not reappear as per-cell labels on a phone. */
            .ga-wrap[data-noheader="true"] .ga-td::before { display: none; }
            .ga-wrap[data-noheader="true"] .ga-td { justify-content: flex-start; }
            .ga-wrap[data-noheader="true"] .ga-td .ga-cell { justify-content: flex-start; text-align: left; }
            .ga-td .ga-cell { flex: 0 1 auto; justify-content: flex-end; text-align: right; }
            .ga-td--num { text-align: left; white-space: normal; }
            .ga-td--num .ga-cell { width: auto; }
            /* The proportional bar is measured against the cell, which is now a
               full-width row, so it would read as a meterless wash. */
            .ga-bar { display: none; }
          }
          @media (max-width: 640px) {
            .ga-rowlabel { font-size: 15px; padding: 13px 14px; }
            .ga-td { padding: 10px 14px; gap: 10px; }
          }
        `,
        }}
      />
    </div>
  );
}
