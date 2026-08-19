import type { FAQ } from "@/lib/geo/types";
import { faqPageJsonLd } from "@/lib/geo/schema";
import GeoFaqAccordion from "./GeoFaqAccordion";
import { inline } from "./Prose";

// FAQ block: visible accordion + FAQPage JSON-LD built from the SAME array, so
// the two cannot drift. Markers are deliberately not stripped from the JSON-LD:
// draft pages 404 in production and the guardrail scripts check published pages.

export default function FAQBlock({ heading, faqs, id = "faq" }: { heading: string; faqs: FAQ[]; id?: string }) {
  return (
    <section id={id} className="gp-section gp-section--white gfb" style={{ scrollMarginTop: 90 }}>
      <div className="gfb-inner">
        <h2 className="gp-h2 gfb-heading">{inline(heading)}</h2>
        <GeoFaqAccordion idPrefix={id} faqs={faqs.map((f) => ({ q: f.question, a: f.answer }))} />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faqs)) }} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gfb-inner { max-width: 1100px; margin: 0 auto; }
          .gfb-heading { text-align: center; margin-bottom: 32px; }
          @media (min-width: 1024px) { .gfb-heading { margin-bottom: 40px; } }
        `,
        }}
      />
    </section>
  );
}
