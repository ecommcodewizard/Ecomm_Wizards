import Link from "next/link";
import { inline } from "./Prose";

// A single-line conversion prompt placed mid-page, directly after the
// Only-Here Asset.
//
// Why it exists: the page runs past 2,400 words, and without this the only
// invitations to act are the hero button and the form at the very bottom. A
// reader who has just worked through the platform table is at the point of
// highest intent on the page, and asking there costs them no scrolling.
//
// Deliberately not a full band with a heading: a second large CTA block would
// compete with the real conversion section. One line, one button.

export default function InlineCta({ text, label, href = "#contact" }: { text: string; label: string; href?: string }) {
  return (
    <section className="gpc" aria-label="Get in touch">
      <div className="gpc-inner">
        <p className="gpc-text">{inline(text)}</p>
        <Link href={href} className="gpc-btn">
          {label}
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Cream band with a white card, the inverse of the section above it.
           That keeps this strip from being a third white block in a row while
           the card itself stays the brightest thing on screen. */
        .gpc { background: #FBF7ED; font-family: 'Poppins', sans-serif; padding: 20px 20px; }
        .gpc-inner { max-width: 1320px; margin: 0 auto; display: flex; flex-wrap: nowrap; align-items: center; justify-content: space-between; gap: 24px; background: #ffffff; border: 1px solid rgba(0,0,0,0.07); border-radius: 16px; padding: 24px 28px; }
        .gpc-text { font-size: 18px; font-weight: 600; color: #000000; line-height: 1.5; margin: 0; flex: 1 1 auto; min-width: 0; }
        /* Brand CTA treatment, identical to .gcb-book in ConversionBlock and the
           form's submit button, so every button on the page behaves the same.
           Two-layer background: a flat black fill clipped to padding-box sits
           over a border-box layer that swaps from black to the brand gradient
           on hover. The base state MUST declare both layers - a plain
           "background: #000" cannot animate to a gradient border, which is why
           this button previously did nothing on hover. */
        .gpc-btn { flex: 0 0 auto; display: inline-flex; align-items: center; gap: 10px; white-space: nowrap; color: #ffffff; border: 1px solid transparent; background: linear-gradient(#000, #000) padding-box, #000 border-box; border-radius: 999px; padding: 14px 28px; font-size: 15px; font-weight: 600; line-height: 1; text-decoration: none; transition: background .3s ease, transform .25s ease, box-shadow .25s ease; }
        .gpc-btn:hover { background: linear-gradient(#000, #000) padding-box, var(--brand-gradient) border-box; transform: translateY(-1px); box-shadow: 0 10px 28px -10px rgba(0,0,0,.45); }
        /* Text stays white in every state. Without this the global link color
           leaks through on visited and active, which is the one thing the
           hover must never change. */
        .gpc-btn:hover, .gpc-btn:focus, .gpc-btn:visited, .gpc-btn:active { color: #ffffff; }
        .gpc-btn:focus-visible { outline: 3px solid #3DC77A; outline-offset: 3px; }
        /* Tablet: drop a point of type rather than break the row, so the
           button keeps its place on the right. */
        @media (max-width: 1024px) {
          .gpc-text { font-size: 17px; }
          .gpc-inner { gap: 20px; }
        }
        /* Phone: the row genuinely has no space, so stack and let the button
           run full width under the text. */
        @media (max-width: 640px) {
          .gpc { padding: 20px 18px; }
          .gpc-inner { flex-wrap: wrap; flex-direction: column; align-items: stretch; padding: 20px; gap: 16px; }
          .gpc-text { font-size: 16px; }
          .gpc-btn { width: 100%; justify-content: center; }
        }
        @media (prefers-reduced-motion: reduce) { .gpc-btn { transition: none; } }
      `,
        }}
      />
    </section>
  );
}
