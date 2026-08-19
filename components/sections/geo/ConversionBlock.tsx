import type { Conversion } from "@/lib/geo/types";
import LeadForm from "@/components/ui/LeadForm";
import Prose, { inline } from "./Prose";

// Geo programme conversion block (spec section 7). Left column: what the reader
// gets, what we will tell them not to do, and when they hear back. Right
// column: the embedded lead form posting to /api/lead with the landing page
// path attached for attribution. Server component; only LeadForm is client.

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
          @media (max-width: 640px) { .gcb-grid { gap: 24px; } }
        `,
        }}
      />
      <div className="gp-inner gcb-grid">
        <div className="gcb-copy">
          <p className="gp-eyebrow">Next step</p>
          <h2 id={`${id}-heading`} className="gp-h2">{inline(heading)}</h2>
          <Prose text={conversion.whatYouGet} />
          <aside className="gcb-callout">
            <span className="gcb-callout-label">What we will tell you not to do</span>
            <Prose text={conversion.whatWeWillTellYouNotToDo} />
          </aside>
          <Prose text={conversion.responseExpectation} className="gp-p gcb-response" />
        </div>
        <div className="gcb-form">
          <LeadForm landingPage={landingPage} />
        </div>
      </div>
    </section>
  );
}
