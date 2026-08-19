import Prose, { inline } from "./Prose";
import type { Engagement } from "@/lib/geo/types";

// Block 5: how the engagement runs, as numbered phase cards.
//
// Deliberately the same shape as the process section on
// app/services/shopify-development-agency/page.tsx (section 7): a cream rounded
// panel inside a white band, a centered heading and one-line intro, then cards
// laid out 3 across on the top row and 2 centered beneath on desktop, 2 across
// on tablet, and stacked on mobile.
//
// The step numbers are generated from array position rather than authored, so
// they can never disagree with the order of the content. Numbering is real
// information here: these phases happen in sequence.

export default function EngagementBlock({ engagement }: { engagement: Engagement }) {
  const { heading, intro, steps } = engagement;

  return (
    <section className="gpe" aria-label={heading}>
      <div className="gpe-panel">
        <h2 className="gpe-h2">{inline(heading)}</h2>
        <Prose text={intro} className="gpe-intro" />

        <ol className="gpe-grid">
          {steps.map((s, i) => {
            // Top row takes three cards; the remainder centers beneath it.
            const span =
              i < 3 ? "gpe-card--third" : i === steps.length - 2 ? "gpe-card--lower-a" : "gpe-card--lower-b";
            return (
              <li key={s.title} className={`gpe-card ${span}`}>
                <span className="gpe-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="gpe-when">{inline(s.week)}</span>
                <h3 className="gpe-title">{inline(s.title)}</h3>
                <p className="gpe-body">{inline(s.what)}</p>
              </li>
            );
          })}
        </ol>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .gpe { background: #ffffff; font-family: 'Poppins', sans-serif; padding: 53px 20px; }
        .gpe-panel { max-width: 1320px; margin: 0 auto; background: #FBF7ED; border-radius: 28px; padding: 40px 48px; box-sizing: border-box; overflow: hidden; }
        .gpe-h2 { font-size: clamp(28px, 3.4vw, 42px); font-weight: 700; color: #000000; line-height: 1.2; text-align: center; margin: 0; text-wrap: balance; }
        .gpe-intro { font-size: 16px; color: #000000; line-height: 1.65; text-align: center; margin: 16px auto 0; max-width: 720px; }

        .gpe-grid { list-style: none; margin: 20px 0 0; padding: 0; display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; }
        .gpe-card { background: #ffffff; border-radius: 16px; padding: 30px; box-sizing: border-box; display: flex; flex-direction: column; }
        .gpe-card--third { grid-column: span 2; }
        .gpe-card--lower-a { grid-column: 2 / 4; }
        .gpe-card--lower-b { grid-column: 4 / 6; }

        .gpe-num { font-size: 50px; font-weight: 700; color: rgba(0,0,0,0.12); line-height: 1; margin: 0 0 10px; font-variant-numeric: tabular-nums; }
        .gpe-when { font-size: 12px; font-weight: 600; letter-spacing: .07em; text-transform: uppercase; color: #2A9555; margin: 0 0 6px; }
        .gpe-title { font-size: 20px; font-weight: 700; color: #000000; line-height: 1.3; margin: 0 0 10px; }
        .gpe-body { font-size: 15px; color: rgba(0,0,0,0.8); line-height: 1.7; margin: 0; }

        @media (max-width: 1279px) and (min-width: 1024px) {
          .gpe-panel { padding: 30px 40px; }
          .gpe-card { padding: 20px; }
        }
        @media (max-width: 1023px) {
          .gpe-panel { padding: 20px; }
          .gpe-grid { grid-template-columns: repeat(2, 1fr); }
          .gpe-card, .gpe-card--third, .gpe-card--lower-a, .gpe-card--lower-b { grid-column: auto; }
          .gpe-card { padding: 16px; }
          .gpe-num { font-size: 40px; }
          .gpe-title { font-size: 18px; }
          .gpe-body { font-size: 14px; }
          /* An odd final card centers itself rather than sitting lopsided. */
          .gpe-card:last-child:nth-child(odd) { grid-column: span 2; max-width: 360px; margin-inline: auto; }
        }
        @media (max-width: 640px) {
          .gpe { padding: 40px 16px; }
          .gpe-panel { padding: 15px; border-radius: 20px; }
          .gpe-grid { grid-template-columns: 1fr; }
          .gpe-card:last-child:nth-child(odd) { grid-column: auto; max-width: none; }
          .gpe-card { padding: 15px; }
          .gpe-num { font-size: 35px; }
          .gpe-intro { font-size: 14px; }
        }
      `,
        }}
      />
    </section>
  );
}
