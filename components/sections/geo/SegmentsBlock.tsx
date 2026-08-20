import type { ReactNode } from "react";
import { inline } from "./Prose";
import type { SegmentIcon, Segments } from "@/lib/geo/types";

// "Who we work with", using the pain-card layout from section 4 of the Shopify
// development landing page: cream band, centered heading and supporting line,
// then a three-column grid of white cards. Each card carries a green icon tile,
// a title, the body, and a green callout strip pinned to the bottom.
//
// Sits straight after "what we actually do", because "is my category here?" is
// the reader's next question and this page qualifies hard and early. The
// categories match the verticals the proof block draws from, so the case
// studies below read as evidence rather than as whatever work was available.
//
// The callout names the failure mode rather than restating a benefit. A buyer
// who has shipped in their category recognizes their own incident in it, which
// is the only thing on this page that cannot be faked by a competitor.

const ICONS: Record<SegmentIcon, ReactNode> = {
  apparel: (
    <path d="M9 4l-5 2.5 1.5 4L8 9.5V24h12V9.5l2.5 1L24 6.5 19 4a3.5 3.5 0 01-10 0z" strokeWidth="1.5" strokeLinejoin="round" />
  ),
  beauty: (
    <>
      <path d="M11 4h6v3h-6z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.5 7h9a3 3 0 013 3v11a3 3 0 01-3 3h-9a3 3 0 01-3-3V10a3 3 0 013-3z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 15h8" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  consumable: (
    <>
      <path d="M7 6h14l-1.5 16a2 2 0 01-2 2h-7a2 2 0 01-2-2z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 13h12" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 3h6" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  jewelry: (
    <>
      <path d="M9 4h10l4 6-9 14L5 10z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 10h18M9 4l-4 6 9 14 9-14-4-6" strokeWidth="1.5" strokeLinejoin="round" />
    </>
  ),
  outdoor: (
    <>
      <path d="M3 22l7.5-13L15 17l2.5-4L25 22z" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="19.5" cy="7" r="2.5" strokeWidth="1.5" />
    </>
  ),
  wholesale: (
    <>
      <path d="M4 11l10-6 10 6v11a2 2 0 01-2 2H6a2 2 0 01-2-2z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 24v-7h6v7" strokeWidth="1.5" strokeLinejoin="round" />
    </>
  ),
  cart: (
    <>
      <path d="M4 5h3l2.5 12h11L23 8H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="22" r="1.6" strokeWidth="1.5" />
      <circle cx="20" cy="22" r="1.6" strokeWidth="1.5" />
    </>
  ),
  box: (
    <>
      <path d="M14 3l10 5v12l-10 5-10-5V8z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 8l10 5 10-5M14 13v12" strokeWidth="1.5" strokeLinejoin="round" />
    </>
  ),
  platform: (
    <>
      <rect x="3" y="5" width="22" height="15" rx="2" strokeWidth="1.5" />
      <path d="M3 10h22M10 24h8" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  search: (
    <>
      <circle cx="12.5" cy="12.5" r="7.5" strokeWidth="1.5" />
      <path d="M18 18l6 6" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  code: (
    <>
      <path d="M9 9l-5 5 5 5M19 9l5 5-5 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 5l-4 18" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  chart: (
    <>
      <path d="M4 23V5" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 23h20" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 19v-6M14 19V8M20 19v-9" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
};

export default function SegmentsBlock({ segments }: { segments: Segments }) {
  const { heading, intro, items } = segments;

  return (
    <section className="gpw" aria-label={heading}>
      <div className="gpw-inner">
        <h2 className="gpw-h2">{inline(heading)}</h2>
        <p className="gpw-intro">{inline(intro)}</p>

        <ul className="gpw-grid">
          {items.map((s) => (
            <li key={s.name} className="gpw-card">
              <span className="gpw-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor">
                  {ICONS[s.icon]}
                </svg>
              </span>
              <h3 className="gpw-name">{inline(s.name)}</h3>
              <p className="gpw-what">{inline(s.what)}</p>
              <p className="gpw-breaks">
                <span className="gpw-breaks-label">What breaks first: </span>
                {inline(s.breaks)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .gpw { background: #FBF7ED; font-family: 'Poppins', sans-serif; padding: 60px 20px; }
        .gpw-inner { max-width: 1320px; margin: 0 auto; }
        /* Heading and intro run the full width of the card grid below them, so
           the block reads as one column rather than a narrow header sitting on
           a wider body. */
        .gpw-h2 { color: #000; font-size: 42px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 0 16px; text-wrap: balance; }
        .gpw-intro { color: rgba(0,0,0,.75); font-size: 18px; line-height: 28px; text-align: center; margin: 0 0 24px; }

        .gpw-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .gpw-card { background: #fff; border-radius: 16px; padding: 28px; border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 12px; }
        .gpw-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
        .gpw-name { font-size: 18px; font-weight: 700; color: #000; margin: 0; line-height: 1.3; }
        .gpw-what { font-size: 14px; color: #334155; line-height: 1.7; margin: 0; flex-grow: 1; }
        .gpw-breaks { font-size: 13px; color: #2A9555; line-height: 1.5; background: rgba(61,199,122,0.08); border-radius: 8px; padding: 10px 14px; border-left: 3px solid #3DC77A; margin: 0; margin-top: auto; }
        .gpw-breaks-label { font-weight: 700; }

        @media (max-width: 1024px) {
          .gpw-h2 { font-size: 32px; }
          .gpw-intro { font-size: 16px; margin-bottom: 24px; }
          .gpw-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .gpw { padding: 40px 16px; }
          .gpw-h2 { font-size: 26px; margin-bottom: 12px; }
          .gpw-intro { font-size: 15px; margin-bottom: 12px; }
          .gpw-grid { grid-template-columns: 1fr; }
          .gpw-card { padding: 24px; }
        }
      `,
        }}
      />
    </section>
  );
}
