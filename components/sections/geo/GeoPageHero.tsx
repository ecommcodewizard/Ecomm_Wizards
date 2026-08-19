import Link from "next/link";
import Prose from "./Prose";

// Block 1: hero for hub and geo pages. Dark band, eyebrow chip, balanced H1
// with the brand gradient on its last two words, the qualifier line, and two
// CTAs. Deliberately no stat ticker, no logo wall, no carousel and no image:
// the geo pages open on the claim, not on decoration.

type Cta = { label: string; href: string };

type Props = {
  eyebrow: string;
  h1: string;
  qualifier: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
};

const DEFAULT_PRIMARY: Cta = { label: "Get in touch", href: "#contact" };

/** Split the H1 so the last two words can carry the gradient. Two words or
 *  fewer: the whole heading is the gradient span. */
function splitHeading(h1: string): { plain: string; accent: string } {
  const words = h1.trim().split(/\s+/).filter(Boolean);
  if (words.length <= 2) return { plain: "", accent: words.join(" ") };
  return { plain: words.slice(0, -2).join(" "), accent: words.slice(-2).join(" ") };
}

export default function GeoPageHero({ eyebrow, h1, qualifier, primaryCta = DEFAULT_PRIMARY, secondaryCta }: Props) {
  const { plain, accent } = splitHeading(h1);

  return (
    <section className="gp-section gp-section--dark gph" aria-labelledby="gph-h1">
      <div className="gp-inner">
        <span className="gph-badge">{eyebrow}</span>
        <h1 id="gph-h1" className="gph-h1">
          {plain ? <>{plain} </> : null}
          <span className="gp-gradient">{accent}</span>
        </h1>
        <div className="gph-qualifier">
          <Prose text={qualifier} className="gp-lead" />
        </div>
        <div className="gph-ctas">
          <span className="gph-ring">
            <Link href={primaryCta.href} className="gph-primary">
              <span>{primaryCta.label}</span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </span>
          {secondaryCta ? (
            <Link href={secondaryCta.href} className="gph-secondary">
              {secondaryCta.label}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ) : null}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gph-badge { display: inline-block; padding: 6px 16px; background: rgba(97,206,112,0.12); border: 1px solid rgba(97,206,112,0.3); border-radius: 999px; color: #61ce70; font-size: 13px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; }
          .gph-h1 { color: #ffffff; font-size: 48px; font-weight: 700; line-height: 1.15; letter-spacing: -0.01em; margin: 20px 0 0; max-width: 900px; text-wrap: balance; }
          .gph-qualifier { max-width: 640px; margin-top: 20px; }
          .gph-qualifier .gp-lead { margin-bottom: 12px; }
          .gph-qualifier .gp-lead:last-child { margin-bottom: 0; }
          .gph-ctas { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 32px; }
          .gph-ring { display: inline-flex; padding: 2px; border-radius: 999px; background: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); }
          .gph-primary { display: inline-flex; align-items: center; gap: 8px; border-radius: 999px; background: #000000; color: #ffffff; padding: 14px 32px; font-size: 15px; font-weight: 600; line-height: 1.2; text-decoration: none; white-space: nowrap; transition: background .3s ease, color .3s ease; }
          .gph-ring:hover .gph-primary { background: #ffffff; color: #000000; }
          .gph-primary:focus-visible { outline: 3px solid #3DC77A; outline-offset: 3px; }
          .gph-secondary { display: inline-flex; align-items: center; gap: 6px; padding: 14px 0; font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.7); text-decoration: none; transition: color .2s ease; }
          .gph-secondary:hover { color: #ffffff; }
          .gph-secondary:focus-visible { outline: 3px solid #3DC77A; outline-offset: 3px; border-radius: 4px; }
          @media (max-width: 1024px) { .gph-h1 { font-size: 40px; } }
          @media (max-width: 640px) { .gph-h1 { font-size: 28px; line-height: 1.22; margin-top: 16px; } .gph-ctas { margin-top: 24px; } .gph-primary { padding: 13px 26px; } }
          @media (prefers-reduced-motion: reduce) { .gph-primary, .gph-secondary { transition: none; } }
        `,
        }}
      />
    </section>
  );
}
