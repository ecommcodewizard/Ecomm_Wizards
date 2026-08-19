import Link from "next/link";
import type { CaseStudyRef } from "@/lib/geo/types";
import CaseStudyCard from "./CaseStudyCard";
import { inline } from "./Prose";

// Proof block: cream band, up to three CaseStudyCards (each deep-linking to
// /case-studies/<slug>), then one "See all case studies" button. Renders
// nothing when there is no proof; the page template decides what to show.

export default function ProofBlock({ heading, proof, allHref = "/case-studies" }: { heading: string; proof: CaseStudyRef[]; allHref?: string }) {
  if (proof.length === 0) return null;

  return (
    <section id="proof" className="gp-section gp-section--cream gpr" style={{ scrollMarginTop: 90 }}>
      <div className="gp-inner">
        <h2 className="gp-h2 gpr-heading">{inline(heading)}</h2>
        <div className="gp-grid-3 gpr-grid">
          {proof.map((p) => (
            <CaseStudyCard key={p.slug} study={p} />
          ))}
        </div>
        <div className="gpr-cta">
          <Link href={allHref} className="gp-btn gp-btn--dark">
            <span>See all case studies</span>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gpr-heading { text-align: center; margin-bottom: 28px; }
          .gpr-grid { align-items: stretch; }
          .gpr-cta { text-align: center; margin-top: 28px; }
        `,
        }}
      />
    </section>
  );
}
