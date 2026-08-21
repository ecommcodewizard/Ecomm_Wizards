import { inline } from "./Prose";
import type { Industries } from "@/lib/geo/types";

// Industries served. Every competitor page that has one of these renders a grid
// of nouns, which is why theirs read as padding and rank on nothing.
//
// This one carries the thing a noun grid cannot: what actually changes about
// marketing each vertical.
//
// Each industry is an h3 so the section chunks cleanly for search engines and
// for the AI answer engines that lift passages by heading.

/** Same split the hero uses on the H1: the last two words carry the brand
 *  gradient. Two words or fewer and the whole heading is the gradient span. */
function splitHeading(heading: string): { plain: string; accent: string } {
  const words = heading.trim().split(/\s+/).filter(Boolean);
  if (words.length <= 2) return { plain: "", accent: words.join(" ") };
  return { plain: words.slice(0, -2).join(" "), accent: words.slice(-2).join(" ") };
}

export default function IndustriesBlock({ industries }: { industries: Industries }) {
  const { plain, accent } = splitHeading(industries.heading);

  return (
    <section className="gpi" aria-labelledby="gpi-heading">
      <div className="gpi-inner">
        <h2 id="gpi-heading" className="gpi-h2">
          {plain ? <>{inline(plain)} </> : null}
          <span className="gp-gradient">{inline(accent)}</span>
        </h2>
        <p className="gpi-intro">{inline(industries.intro)}</p>

        <ul className="gpi-grid">
          {industries.items.map((item) => (
            <li key={item.name} className="gpi-card">
              <h3 className="gpi-name">{inline(item.name)}</h3>
              <p className="gpi-what">
                <span className="gpi-what-label">What changes:</span> {inline(item.whatsDifferent)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Dark band. It sits between "what we actually do" and the results
           slider, both of which are white, so the page keeps alternating. */
        .gpi { background: #000000; font-family: 'Poppins', sans-serif; padding: 60px 20px; }
        .gpi-inner { max-width: 1320px; margin: 0 auto; }
        .gpi-h2 { color: #ffffff; font-size: 42px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 auto 14px; max-width: 900px; text-wrap: balance; }
        .gpi-intro { color: rgba(255,255,255,.75); font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 36px; max-width: 900px; text-wrap: pretty; }

        .gpi-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .gpi-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.14); border-radius: 16px; padding: 26px; display: flex; flex-direction: column; gap: 12px; }

        .gpi-name { margin: 0; font-size: 19px; font-weight: 700; color: #ffffff; line-height: 1.3; }
        .gpi-what { margin: 0; font-size: 15px; line-height: 1.65; color: rgba(255,255,255,.72); flex-grow: 1; }
        .gpi-what-label { font-weight: 700; color: #ffffff; }

        @media (max-width: 1023px) {
          .gpi { padding: 44px 20px; }
          .gpi-h2 { font-size: 30px; }
          .gpi-intro { font-size: 16px; line-height: 26px; margin-bottom: 26px; }
          .gpi-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 640px) {
          .gpi { padding: 40px 16px; }
          .gpi-h2 { font-size: 26px; }
          .gpi-intro { font-size: 15px; line-height: 24px; }
          .gpi-grid { grid-template-columns: 1fr; }
          .gpi-card { padding: 22px; }
        }
      `,
        }}
      />
    </section>
  );
}
