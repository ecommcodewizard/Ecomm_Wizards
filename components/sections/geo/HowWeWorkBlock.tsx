import { inline } from "./Prose";
import type { GeoPage } from "@/lib/geo/types";

// The honest-local block.
//
// Every geo page carries an unavoidable tension: it is written for buyers in a
// city, and we are not in that city. The FAQ answers that in one line ("no, we
// don't have an office"), which settles the honesty question but leaves the
// buyer's real one open, because "can we meet" is usually a proxy for "will
// someone be there when it matters".
//
// So this block replaces proximity with a delivery term. Named hours, a named
// channel, a named person on the day. Those are commitments a reader can hold
// us to, which is more than an office address would have given them.
//
// Rules for whoever edits the copy: no presence language, no "local team", no
// city name used as a credential. Each item states something we will actually
// do. If a line could not survive a client quoting it back at us, cut it.
//
// Cream band, numbered items. It follows the white results slider and precedes
// the white "what we do about it" block.

export default function HowWeWorkBlock({ data }: { data: NonNullable<GeoPage["howWeWork"]> }) {
  return (
    <section className="gp-section gp-section--cream gphw" aria-labelledby="gphw-heading">
      <div className="gp-inner--prose">
        <h2 id="gphw-heading" className="gp-h2">
          {inline(data.heading)}
        </h2>
        <p className="gp-lead gphw-intro">{inline(data.intro)}</p>

        <ol className="gphw-list">
          {data.items.map((item, i) => (
            <li key={item.title} className="gphw-item">
              <span className="gphw-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="gphw-body">
                <h3 className="gphw-title">{inline(item.title)}</h3>
                <p className="gphw-text">{inline(item.body)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gphw-intro { color: #0f172a; }
          .gphw-list { list-style: none; margin: 32px 0 0; padding: 0; display: grid; gap: 2px; }
          .gphw-item { display: flex; gap: 20px; align-items: flex-start; padding: 22px 0; border-top: 1px solid rgba(15,23,42,.12); }
          .gphw-item:last-child { border-bottom: 1px solid rgba(15,23,42,.12); }
          .gphw-num { flex: 0 0 auto; font-size: 13px; font-weight: 700; letter-spacing: .08em; color: #2A9555; padding-top: 4px; font-variant-numeric: tabular-nums; }
          .gphw-body { min-width: 0; }
          .gphw-title { font-size: 18px; font-weight: 650; color: #0f172a; margin: 0 0 6px; line-height: 1.35; }
          .gphw-text { font-size: 16px; line-height: 1.7; color: #334155; margin: 0; }
          @media (max-width: 640px) {
            .gphw-item { gap: 14px; padding: 18px 0; }
            .gphw-title { font-size: 17px; }
            .gphw-text { font-size: 15px; }
          }
        `,
        }}
      />
    </section>
  );
}
