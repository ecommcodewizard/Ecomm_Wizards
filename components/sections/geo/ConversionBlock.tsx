import Link from "next/link";
import type { Conversion } from "@/lib/geo/types";
import LeadForm from "@/components/ui/LeadForm";
import Prose, { inline } from "./Prose";

// Geo programme conversion block (spec section 7). Left column: what the reader
// gets, what we will tell them not to do, and when they hear back. Right
// column: the embedded lead form posting to /api/lead with the landing page
// path attached for attribution. Server component; only LeadForm is client.
//
// Copy Standard v2.0 section 1.2 makes this the only place on the page where
// the offer is asked for, and it has to carry BOTH doors to the same audit:
// book a call and a growth lead walks the findings through live, or leave
// details and we send them written. They are one choice, not two offers, so
// the button and the form sit in the same block rather than being scattered up
// the page. There is deliberately no "or fill in the form" line beside the
// button: the copy above already names both options in order, and a second
// pointer to the form was restating it.

const BOOKING_PATH = "/book-shopify-consultation";

export interface ConversionBlockProps {
  conversion: Conversion;
  landingPage: string;
  heading?: string;
  id?: string;
}

export default function ConversionBlock({ conversion, landingPage, heading = "Tell us about your store", id = "contact" }: ConversionBlockProps) {
  return (
    <section id={id} className="gp-section gp-section--cream gcb-section" aria-labelledby={`${id}-heading`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gcb-section { scroll-margin-top: 90px; }
          .gcb-grid { display: grid; grid-template-columns: 1fr; gap: 32px; align-items: start; }
          @media (min-width: 1024px) { .gcb-grid { grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); gap: 48px; } }
          .gcb-callout { border: 1px solid rgba(0,0,0,0.12); border-left: 3px solid #2A9555; border-radius: 12px; padding: 16px 18px; margin: 20px 0; background: rgba(255,255,255,0.6); }
          .gcb-callout-label { display: block; font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #2A9555; margin: 0 0 6px; }
          .gcb-callout .gp-p { margin-bottom: 0; }
          .gcb-response { font-size: 14px; line-height: 1.6; color: #64748b; margin: 0; }
          /* The audit: numbered because the three parts are a promise the
             reader is meant to be able to hold us to, not a list of features. */
          .gcb-audit { margin: 4px 0 16px; padding-left: 20px; display: flex; flex-direction: column; gap: 8px; }
          .gcb-audit li { font-size: 15.5px; line-height: 1.65; color: #334155; }
          .gcb-audit li::marker { font-weight: 700; color: #2A9555; }
          .gcb-limit { font-size: 15px; color: #334155; }
          .gcb-free { font-size: 15px; font-weight: 600; color: #0f172a; }
          /* The booking door. The form is the other one, in the column beside it. */
          .gcb-doors { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 16px; margin: 22px 0 4px; }
          /* Two-layer background so the border can carry the brand gradient:
             a flat black fill clipped to padding-box sits over a border-box
             layer that swaps from black to var(--brand-gradient) on hover. The
             same trick the form's submit button and the mid-page CTA use, so
             all three buttons behave identically. A plain "border-color" here
             cannot animate to a gradient, which is why the earlier version did
             nothing on hover. */
          .gcb-book { display: inline-flex; align-items: center; gap: 8px; border-radius: 999px; color: #fff; padding: 14px 30px; font-size: 15px; font-weight: 600; line-height: 1.2; text-decoration: none; border: 1px solid transparent; background: linear-gradient(#000, #000) padding-box, #000 border-box; transition: background .3s ease, transform .25s ease, box-shadow .25s ease; }
          .gcb-book:hover { background: linear-gradient(#000, #000) padding-box, var(--brand-gradient) border-box; transform: translateY(-1px); box-shadow: 0 10px 28px -10px rgba(0,0,0,.45); }
          /* Text stays white in every state: without this the global link color
             leaks through on visited/active. */
          .gcb-book:hover, .gcb-book:focus, .gcb-book:visited, .gcb-book:active { color: #fff; }
          .gcb-book:focus-visible { outline: 3px solid #3DC77A; outline-offset: 3px; }
          @media (max-width: 640px) { .gcb-grid { gap: 24px; } .gcb-book { width: 100%; justify-content: center; } }
          @media (prefers-reduced-motion: reduce) { .gcb-book { transition: none; } }
        `,
        }}
      />
      <div className="gp-inner gcb-grid">
        <div className="gcb-copy">
          <p className="gp-eyebrow">Next step</p>
          <h2 id={`${id}-heading`} className="gp-h2">{inline(heading)}</h2>

          {/* Copy Standard v2.0 section 8.4. The audit is the reason either door
              gets taken, so when a page carries one it leads, and the generic
              whatYouGet line steps aside rather than repeating it. The three
              hub pages currently carry the same content as prose in whatYouGet
              and fall through to the else branch; migrating them onto these
              typed fields is a follow-up, not a behaviour change. */}
          {conversion.audit ? (
            <>
              <Prose text={conversion.audit.transition} className="gp-lead" />
              <Prose text={conversion.audit.offer} />
              <ol className="gcb-audit">
                {conversion.audit.parts.map((p, i) => (
                  <li key={i}>{inline(p)}</li>
                ))}
              </ol>
              <p className="gp-p gcb-limit">{inline(conversion.audit.limit)}</p>
              {/* turnaround is optional: when it is unset the no-obligation line
                  stands on its own rather than trailing a stray space. */}
              <p className="gp-p gcb-free">
                {inline(conversion.audit.noObligation)}
                {conversion.audit.turnaround ? <> {inline(conversion.audit.turnaround)}</> : null}
              </p>
            </>
          ) : (
            <Prose text={conversion.whatYouGet} />
          )}

          <div className="gcb-doors">
            <Link href={BOOKING_PATH} className="gcb-book">
              Book a 30-minute call
              <svg width="16" height="12" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>

          <aside className="gcb-callout">
            <span className="gcb-callout-label">What we will tell you not to do</span>
            <Prose text={conversion.whatWeWillTellYouNotToDo} />
          </aside>
          <Prose text={conversion.responseExpectation} className="gp-p gcb-response" />
        </div>
        <div className="gcb-form">
          <LeadForm landingPage={landingPage} submitLabel="Send my details" />
        </div>
      </div>
    </section>
  );
}
