import type { Objection } from "@/lib/geo/types";
import Prose, { inline } from "./Prose";

// Block 8: objections. Each objection is quoted as a card heading (in the
// reader's words) with the answer beneath. Three across on desktop.

type Props = { heading: string; objections: Objection[] };

export default function ObjectionBlock({ heading, objections }: Props) {
  if (objections.length === 0) return null;

  return (
    <section className="gp-section gp-section--dark gpo" aria-labelledby="gpo-heading">
      <div className="gp-inner">
        <h2 id="gpo-heading" className="gp-h2 gpo-heading">
          {inline(heading)}
        </h2>
        <div className="gp-grid-3">
          {objections.map((o, i) => (
            <article key={i} className="gpo-card">
              <h3 className="gpo-objection">
                <span className="gpo-quote">&ldquo;</span>
                {inline(o.objection)}&rdquo;
              </h3>
              <div className="gpo-answer">
                <Prose text={o.answer} className="gp-p" />
              </div>
            </article>
          ))}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gpo-heading { color: #ffffff; margin-bottom: 32px; max-width: 760px; }
          .gpo-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 14px; }
          .gpo-quote { color: #3DC77A; font-size: 28px; line-height: 0; position: relative; top: 6px; margin-right: 2px; font-weight: 700; }
          .gpo-objection { margin: 0; color: #ffffff; font-size: 18px; font-weight: 600; line-height: 1.4; }
          .gpo-answer .gp-p:last-child { margin-bottom: 0; }
          @media (max-width: 640px) { .gpo-heading { margin-bottom: 24px; } .gpo-card { padding: 20px; } .gpo-objection { font-size: 17px; } }
        `,
        }}
      />
    </section>
  );
}
