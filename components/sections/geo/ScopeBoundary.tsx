import { inline } from "./Prose";

// Block 6: what we do not do. A plain list, one boundary per line, each with a
// muted "no" glyph. Unordered on purpose: there is no sequence here.

type Props = { heading: string; items: string[] };

function NoGlyph() {
  return (
    <svg className="gpb-glyph" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8.25" stroke="rgba(239,68,68,0.8)" strokeWidth="1.5" />
      <path d="M4.5 4.5l11 11" stroke="rgba(239,68,68,0.8)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ScopeBoundary({ heading, items }: Props) {
  if (items.length === 0) return null;

  return (
    <section className="gp-section gp-section--cream gpb" aria-labelledby="gpb-heading">
      <div className="gp-inner--narrow">
        <h2 id="gpb-heading" className="gp-h2">
          {inline(heading)}
        </h2>
        <ul className="gpb-list">
          {items.map((item, i) => (
            <li key={i} className="gpb-item">
              <NoGlyph />
              <span className="gpb-text">{inline(item)}</span>
            </li>
          ))}
        </ul>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* The proof block below is also cream, so a bottom pad here only
             adds dead space between two bands of the same color. Two classes to
             beat the .gp-section mobile override. */
          .gp-section.gpb { padding-bottom: 0; }
          .gpb .gp-h2 { margin-bottom: 24px; }
          .gpb-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 14px; }
          .gpb-item { display: flex; align-items: flex-start; gap: 12px; }
          .gpb-glyph { flex-shrink: 0; margin-top: 3px; }
          .gpb-text { font-size: 16px; line-height: 1.7; color: #334155; }
          @media (max-width: 640px) { .gpb-text { font-size: 15px; } .gpb .gp-h2 { margin-bottom: 20px; } }
        `,
        }}
      />
    </section>
  );
}
