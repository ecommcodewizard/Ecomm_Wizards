import type { EngagementWeek } from "@/lib/geo/types";
import Prose, { inline } from "./Prose";

// Block 5: how the engagement runs, week by week. An ordered list because the
// order is the content: a vertical timeline with a left rail on desktop.

type Props = { heading: string; weeks: EngagementWeek[] };

export default function EngagementBlock({ heading, weeks }: Props) {
  if (weeks.length === 0) return null;

  return (
    <section className="gp-section gp-section--white gpe" aria-labelledby="gpe-heading">
      <div className="gp-inner--narrow">
        <h2 id="gpe-heading" className="gp-h2">
          {inline(heading)}
        </h2>
        <ol className="gpe-list">
          {weeks.map((w, i) => (
            <li key={i} className="gpe-item">
              <span className="gpe-dot" aria-hidden="true" />
              <span className="gpe-week">{inline(w.week)}</span>
              <div className="gpe-what">
                <Prose text={w.what} className="gp-p" />
              </div>
            </li>
          ))}
        </ol>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gpe .gp-h2 { margin-bottom: 32px; }
          .gpe-list { list-style: none; margin: 0; padding: 0; position: relative; }
          .gpe-item { position: relative; padding: 0 0 28px 36px; }
          .gpe-item:last-child { padding-bottom: 0; }
          .gpe-item::before { content: ""; position: absolute; left: 7px; top: 22px; bottom: -6px; width: 2px; background: rgba(42,149,85,0.25); }
          .gpe-item:last-child::before { display: none; }
          .gpe-dot { position: absolute; left: 0; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: #ffffff; border: 3px solid #2A9555; box-sizing: border-box; }
          .gpe-week { display: block; font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #2A9555; margin: 0 0 8px; line-height: 1.6; }
          .gpe-what .gp-p:last-child { margin-bottom: 0; }
          @media (max-width: 640px) { .gpe-item { padding-left: 30px; padding-bottom: 22px; } .gpe .gp-h2 { margin-bottom: 24px; } }
        `,
        }}
      />
    </section>
  );
}
