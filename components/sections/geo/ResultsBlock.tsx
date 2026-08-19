import Image from "next/image";
import Link from "next/link";
import { inline } from "./Prose";
import type { Results } from "@/lib/geo/types";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";
import { APP_CASE_STUDIES } from "@/lib/shopify-app-studies";
import { KLAVIYO_CASE_STUDIES } from "@/lib/klaviyo-studies";
import { CREATIVE_CASE_STUDIES } from "@/lib/creative-studies";

// Results and client voice, following section 10 of the Shopify development
// landing page: cream band, centered heading, one supporting line, then the
// proof itself.
//
// TWO DELIBERATE DEPARTURES FROM THAT SECTION:
//
// 1. It is a static grid, not the CaseStudySlider. The slider is a client
//    component whose slides fall back to a bare /case-studies link when no href
//    is given, which is the deep-link bug logged against the site and which
//    check-links fails on. A server-rendered grid deep-links every card, puts
//    all three quotes in the DOM for crawlers, and ships no client JS.
//
// 2. Every quote is read from lib/case-studies.ts by slug rather than retyped
//    here. A quote can therefore only appear on this page if a real, published
//    case study carries it with a named person and role. The landing page's
//    slider includes a BARK quote that no case study backs; that is exactly the
//    class of claim the July 2026 integrity pass removed, so it is not here.
//    If a study has no quotePerson, the card renders the outcome without a
//    quote rather than inventing one.

function findStudy(slug: string): CaseStudy | undefined {
  const pools: readonly CaseStudy[][] = [CASE_STUDIES, APP_CASE_STUDIES, KLAVIYO_CASE_STUDIES, CREATIVE_CASE_STUDIES];
  for (const pool of pools) {
    const hit = pool.find((s) => s.slug === slug);
    if (hit) return hit;
  }
  return undefined;
}

export default function ResultsBlock({ results }: { results: Results }) {
  const cards = results.slugs.map((slug) => findStudy(slug)).filter((s): s is CaseStudy => Boolean(s));
  if (cards.length === 0) return null;

  return (
    <section className="gpr2" aria-label={results.heading}>
      <div className="gpr2-inner">
        <h2 className="gpr2-h2">{inline(results.heading)}</h2>
        <p className="gpr2-desc">{inline(results.intro)}</p>

        <ul className="gpr2-grid">
          {cards.map((s) => (
            <li key={s.slug} className="gpr2-card">
              <p className="gpr2-metric">
                <span className="gpr2-metric-value">{s.heroMetric}</span>
                <span className="gpr2-metric-label">{s.heroSubMetric}</span>
              </p>

              {s.quote && s.quotePerson ? (
                <blockquote className="gpr2-quote">
                  <p>{s.quote}</p>
                </blockquote>
              ) : null}

              <div className="gpr2-person">
                {s.quoteAvatar && s.quotePerson ? (
                  <Image src={s.quoteAvatar} alt={`${s.quotePerson}, ${s.brandName}`} width={44} height={44} className="gpr2-avatar" loading="lazy" />
                ) : null}
                <span className="gpr2-person-text">
                  {s.quotePerson ? <span className="gpr2-name">{s.quotePerson}</span> : <span className="gpr2-name">{s.brandName}</span>}
                  <span className="gpr2-role">{s.quoteRole ?? s.industry}</span>
                </span>
              </div>

              <Link href={`/case-studies/${s.slug}`} className="gpr2-link" data-proof-card="">
                Read the {s.brandName} case study
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .gpr2 { background: #FBF7ED; font-family: 'Poppins', sans-serif; padding: 60px 20px; }
        .gpr2-inner { max-width: 1320px; margin: 0 auto; }
        .gpr2-h2 { color: #000; font-size: 42px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 auto 16px; text-wrap: balance; }
        .gpr2-desc { color: rgba(0,0,0,.8); font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 32px; max-width: 1000px; }

        .gpr2-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .gpr2-card { background: #ffffff; border: 1px solid rgba(0,0,0,0.07); border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 16px; }

        .gpr2-metric { margin: 0; display: flex; flex-direction: column; gap: 2px; }
        .gpr2-metric-value { font-size: 38px; font-weight: 800; line-height: 1; background: var(--brand-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .gpr2-metric-label { font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: #000000; }

        .gpr2-quote { margin: 0; }
        .gpr2-quote p { margin: 0; font-size: 15px; line-height: 1.7; color: #334155; }
        .gpr2-quote p::before { content: "\\201C"; }
        .gpr2-quote p::after { content: "\\201D"; }

        .gpr2-person { display: flex; align-items: center; gap: 10px; margin-top: auto; padding-top: 4px; }
        .gpr2-avatar { border-radius: 50%; object-fit: cover; flex-shrink: 0; }
        .gpr2-person-text { display: flex; flex-direction: column; }
        .gpr2-name { font-size: 14px; font-weight: 700; color: #0f172a; line-height: 1.3; }
        .gpr2-role { font-size: 12.5px; color: #64748b; line-height: 1.3; }

        .gpr2-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13.5px; font-weight: 600; color: #2A9555; text-decoration: none; }
        .gpr2-link:hover { text-decoration: underline; text-underline-offset: 3px; }
        .gpr2-link:focus-visible { outline: 3px solid #3DC77A; outline-offset: 3px; border-radius: 4px; }

        @media (max-width: 1023px) {
          .gpr2 { padding: 44px 20px; }
          .gpr2-h2 { font-size: 30px; line-height: 40px; }
          .gpr2-desc { font-size: 16px; line-height: 26px; margin-bottom: 24px; }
          .gpr2-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .gpr2 { padding: 40px 16px; }
          .gpr2-h2 { font-size: 26px; line-height: 34px; }
          .gpr2-desc { font-size: 15px; line-height: 24px; }
          .gpr2-card { padding: 24px; }
        }
      `,
        }}
      />
    </section>
  );
}
