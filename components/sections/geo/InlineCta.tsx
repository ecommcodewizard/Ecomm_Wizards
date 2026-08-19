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
        .gpc { background: #ffffff; font-family: 'Poppins', sans-serif; padding: 0 20px 20px; }
        .gpc-inner { max-width: 1320px; margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; background: #FBF7ED; border: 1px solid rgba(0,0,0,0.07); border-radius: 16px; padding: 24px 28px; }
        .gpc-text { font-size: 17px; font-weight: 600; color: #000000; line-height: 1.5; margin: 0; max-width: 820px; }
        .gpc-btn { display: inline-flex; align-items: center; gap: 10px; white-space: nowrap; background: #000000; color: #ffffff; border: 1px solid transparent; border-radius: 999px; padding: 14px 28px; font-size: 15px; font-weight: 600; line-height: 1; text-decoration: none; transition: background .3s ease, transform .25s ease; }
        .gpc-btn:hover { background: linear-gradient(#000, #000) padding-box, var(--brand-gradient) border-box; transform: translateY(-1px); }
        .gpc-btn:focus-visible { outline: 3px solid #3DC77A; outline-offset: 3px; }
        @media (max-width: 640px) {
          .gpc { padding: 0 18px 20px; }
          .gpc-inner { padding: 20px; }
          .gpc-text { font-size: 15.5px; }
          .gpc-btn { width: 100%; justify-content: center; }
        }
        @media (prefers-reduced-motion: reduce) { .gpc-btn { transition: none; } }
      `,
        }}
      />
    </section>
  );
}
