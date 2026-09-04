import type { Conversion } from "@/lib/geo/types";
import BookingSwitch from "./BookingSwitch";
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

export default function ConversionBlock({ conversion, landingPage, heading, id = "contact" }: ConversionBlockProps) {
  // Page-supplied heading wins, then the caller's prop, then the default.
  const sectionHeading = conversion.heading ?? heading ?? "Tell us about your store";
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
          /* The delivery promise. Sits directly above the button and is the
             sentence that earns the click, so it reads a step heavier than the
             body around it. */
          .gcb-delivery { font-size: 16px; color: #0f172a; border-left: 3px solid #2A9555; padding-left: 14px; margin: 18px 0 0; }
          .gcb-free { font-size: 15px; font-weight: 600; color: #0f172a; }
          .gcb-second { font-size: 14.5px; line-height: 1.55; color: #475569; margin: 14px 0 0; }
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
      {/* BookingSwitch owns the grid because the button and the panel it swaps
          live in different columns and must share one piece of state. The prose
          is passed in as slots: it is still rendered on the server, so none of
          it reaches the client bundle. */}
      <BookingSwitch
        landingPage={landingPage}
        bookingPath={BOOKING_PATH}
        // Unique per page. The landing path is already unique and stable, so it
        // is the natural key; cal.com only needs a string no other embed on the
        // page uses.
        calNamespace={`gcb${landingPage.replace(/[^a-z0-9]+/gi, "-")}`}
        above={
          <>
          <p className="gp-eyebrow">Next step</p>
          <h2 id={`${id}-heading`} className="gp-h2">{inline(sectionHeading)}</h2>

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
              {/* Turnaround moved ABOVE the button on 2026-09-02. It carries the
                  delivery promise and the one sentence arguing for the call, and
                  while it sat in the small print below the button it was doing
                  neither job. Optional, so pages without one skip it. */}
              {conversion.audit.turnaround ? (
                <p className="gp-p gcb-delivery">{inline(conversion.audit.turnaround)}</p>
              ) : null}
            </>
          ) : (
            <Prose text={conversion.whatYouGet} />
          )}

          {/* The second door sits ABOVE the button, on the owner's instruction
              (2026-09-03). Below it, the last thing a reader saw before the CTA
              was an alternative to taking it. Above it, the button is the final
              word and the fallback is already dealt with. Quieter than the
              button on purpose: it is an alternative, not a competing offer. */}
          {conversion.audit?.secondDoor ? (
            <p className="gp-p gcb-second">{inline(conversion.audit.secondDoor)}</p>
          ) : null}
          </>
        }
        below={
          <>
          {conversion.audit ? (
            <p className="gp-p gcb-free">{inline(conversion.audit.noObligation)}</p>
          ) : null}

          <aside className="gcb-callout">
            <span className="gcb-callout-label">What we will tell you not to do</span>
            <Prose text={conversion.whatWeWillTellYouNotToDo} />
          </aside>
          <Prose text={conversion.responseExpectation} className="gp-p gcb-response" />
          </>
        }
      />
    </section>
  );
}
