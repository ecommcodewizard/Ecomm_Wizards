import Image from "next/image";
import LazyAutoplayVideo from "@/components/ui/LazyAutoplayVideo";
import Link from "next/link";
import Prose from "./Prose";

// Block 1: hero for hub and geo pages. Dark band, eyebrow chip, balanced H1
// with the brand gradient on its last two words, the qualifier line, and two
// CTAs. Deliberately no stat ticker, no logo wall and no carousel: the page
// opens on the claim, not on decoration.
//
// An optional image splits the band into the two columns the Shopify
// development landing page uses (copy on the left, image on the right). With no
// image the copy runs full width, which is what the geo pages will do.

type Cta = { label: string; href: string };

type Props = {
  eyebrow: string;
  h1: string;
  qualifier: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  image?: { src: string; alt: string; aspect?: string; video?: string };
  /** Optional stat strip under the qualifier, matching the Shopify development
   *  landing page. Omitted by default: the page opens on the claim, not on
   *  decoration, and a strip only earns its place when the numbers are real. */
  stats?: { value: string; label: string }[];
};

// Copy Standard v2.0 section 1.4: one CTA label, used consistently, and it
// names what the reader gets rather than what we want. This button does not
// book anything itself; it carries the reader to the conversion block, which is
// the only place the offer is asked for and where both doors live.
const DEFAULT_PRIMARY: Cta = { label: "Talk to us", href: "#contact" };

/** Split the H1 so the last two words can carry the gradient. Two words or
 *  fewer: the whole heading is the gradient span. */
function splitHeading(h1: string): { plain: string; accent: string } {
  const words = h1.trim().split(/\s+/).filter(Boolean);
  if (words.length <= 2) return { plain: "", accent: words.join(" ") };
  return { plain: words.slice(0, -2).join(" "), accent: words.slice(-2).join(" ") };
}

export default function GeoPageHero({ eyebrow, h1, qualifier, primaryCta = DEFAULT_PRIMARY, secondaryCta, image, stats }: Props) {
  const { plain, accent } = splitHeading(h1);

  return (
    <section className="gp-section gp-section--dark gph" aria-labelledby="gph-h1">
      <div className={`gp-inner gph-grid${image ? " gph-grid--split" : ""}`}>
        <div className="gph-copy">
        <span className="gph-badge">{eyebrow}</span>
        <h1 id="gph-h1" className="gph-h1">
          {plain ? <>{plain} </> : null}
          <span className="gp-gradient">{accent}</span>
        </h1>
        <div className="gph-qualifier">
          <Prose text={qualifier} className="gp-lead" />
        </div>
        {stats && stats.length > 0 ? (
          <dl className="gph-stats">
            {stats.map((s) => (
              <div key={s.label} className="gph-stat">
                <dd className="gph-stat-num">{s.value}</dd>
                <dt className="gph-stat-label">{s.label}</dt>
              </div>
            ))}
          </dl>
        ) : null}

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

        {image ? (
          <div className="gph-media">
            {image.video ? (
              /* Autoplaying decoration. `src` is the poster, which is also the
                 entire experience under prefers-reduced-motion: LazyAutoplayVideo
                 never fetches the file in that case and the poster simply stays,
                 which is what WCAG 2.2.2 asks of anything that moves on its own.
                 That is why there is no second hidden <Image> here any more. It
                 was a duplicate of the poster carrying `priority`, so every
                 visitor preloaded a still that only reduced-motion visitors were
                 ever shown.

                 deferUntilIdle because a hero is on screen at first paint: the
                 poster has to win the race against the video, not tie with it. */
              <LazyAutoplayVideo
                src={image.video}
                poster={image.src}
                className="gph-img gph-video"
                deferUntilIdle
                style={image.aspect ? { aspectRatio: image.aspect, objectFit: "cover" } : undefined}
              />
            ) : (
              <Image
                src={image.src}
                overrideSrc={image.src}
                alt={image.alt}
                width={640}
                height={480}
                priority
                className="gph-img"
                style={image.aspect ? { aspectRatio: image.aspect, objectFit: "cover" } : undefined}
              />
            )}
          </div>
        ) : null}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gph-grid--split { display: grid; gap: 40px; align-items: center; }
          @media (min-width: 1024px) { .gph-grid--split { grid-template-columns: 1.1fr 1fr; } }
          .gph-media { display: flex; align-items: center; justify-content: center; }
          /* Natural proportions by default. Pages whose source file is taller
             than the copy column needs set heroImage.aspect, which arrives as
             an inline aspect-ratio + object-fit: cover, so the image is
             cropped rather than squashed. */
          .gph-img { width: 100%; height: auto; object-position: center; border-radius: 16px; display: block; box-shadow: 0 24px 64px rgba(0,0,0,0.45); }
          /* No reduced-motion display toggle here, deliberately. The poster is
             an attribute OF the video element, so hiding the video under
             prefers-reduced-motion would hide the still along with it and leave
             an empty column. LazyAutoplayVideo handles the requirement properly
             instead: it never assigns src in that case, so nothing ever moves
             and the poster is what stays on screen. */

          /* Hero stat strip, matching the Shopify development landing page. */
          .gph-stats { display: flex; flex-wrap: wrap; gap: 0; margin: 32px 0 0; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 24px; }
          .gph-stat { display: flex; flex-direction: column-reverse; gap: 4px; padding: 0 28px 0 0; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.12); }
          .gph-stat:last-child { border-right: none; padding-right: 0; margin-right: 0; }
          .gph-stat-num { margin: 0; font-size: 28px; font-weight: 800; line-height: 1; background: var(--brand-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
          .gph-stat-label { font-size: 13px; font-weight: 500; color: #ffffff; letter-spacing: .02em; }
          @media (max-width: 1023px) { .gph-stat { padding-right: 20px; margin-right: 20px; } .gph-stat-num { font-size: 24px; } }
          @media (max-width: 640px) {
            .gph-stats { margin-top: 20px; padding-top: 16px; gap: 14px 0; }
            .gph-stat { padding-right: 14px; margin-right: 14px; }
            .gph-stat-num { font-size: 20px; }
            .gph-stat-label { font-size: 11.5px; }
          }
          .gph-grid--split .gph-h1 { max-width: none; }
          .gph-grid--split .gph-qualifier { max-width: none; }
          @media (max-width: 1023px) { .gph-media { margin-top: 8px; } }
          @media (max-width: 640px) { .gph-img { border-radius: 10px; } }
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
