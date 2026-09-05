import Link from "next/link";
import Image from "next/image";
import Prose, { inline } from "./Prose";
import type { Disciplines } from "@/lib/geo/types";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";
import { APP_CASE_STUDIES } from "@/lib/shopify-app-studies";
import { KLAVIYO_CASE_STUDIES } from "@/lib/klaviyo-studies";
import { CREATIVE_CASE_STUDIES } from "@/lib/creative-studies";
import { CASE_STUDY_VIDEOS, posterFor } from "@/lib/case-study-videos";
import LazyAutoplayVideo from "@/components/ui/LazyAutoplayVideo";

// Discipline deep-dives: alternating image + text rows, one per service the
// agency actually sells, each anchored to a published case study.
//
// WHY THIS EXISTS RATHER THAN THE SERVICES ACCORDION. On a page whose target
// keyword names a service ("shopify development agency los angeles") a task
// list is the right shape: the reader has already chosen the service and wants
// scope. On a page whose keyword is the BROAD agency term ("shopify agency new
// york") they have not chosen. They may want design, a build, SEO, marketing or
// retention, and Master Strategy section 6 is explicit that the keyword sets
// the angle without narrowing what the page sells. An accordion of ten build
// tasks answers that reader with the wrong question answered well.
//
// Every row's proof panel is read from the case-study corpus by slug. Brand
// name, image and headline metric are never retyped here, so a discipline
// cannot claim evidence that does not exist. A slug that resolves to nothing
// renders the row as text only rather than inventing a panel.

function findStudy(slug: string): CaseStudy | undefined {
  const pools: readonly CaseStudy[][] = [CASE_STUDIES, APP_CASE_STUDIES, KLAVIYO_CASE_STUDIES, CREATIVE_CASE_STUDIES];
  for (const pool of pools) {
    const hit = pool.find((s) => s.slug === slug);
    if (hit) return hit;
  }
  return undefined;
}

export default function DisciplineBlocks({ data }: { data: Disciplines }) {
  return (
    <section id="disciplines" className="gp-section gpd" style={{ scrollMarginTop: 90 }}>
      <div className="gp-inner">
        <p className="gpd-label">{data.label}</p>
        <h2 className="gp-h2 gpd-heading">{inline(data.heading)}</h2>
        <div className="gpd-intro"><Prose text={data.intro} /></div>

        <div className="gpd-rows">
          {data.items.map((item, i) => {
            const study = findStudy(item.caseSlug);
            return (
              <article key={item.label} className="gpd-row" data-flip={i % 2 === 1 ? "1" : undefined}>
                <div className="gpd-copy">
                  <p className="gpd-eyebrow">{item.label}</p>
                  <h3 className="gpd-h3">{inline(item.heading)}</h3>
                  {item.body ? <div className="gpd-body"><Prose text={item.body} /></div> : null}
                  {/* Sub-services, borrowed from dd.nyc's service cards. A
                      shortlist-stage reader scanning for their own job finds it
                      here without reading the paragraph above. */}
                  {item.covers?.length ? (
                    <ul className="gpd-covers">
                      {item.covers.map((c) => (
                        <li key={c} className="gpd-cover">
                          {c}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <Link href={item.cta.href} className="gp-btn gp-btn--dark gpd-cta">
                    <span>{item.cta.label}</span>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                      <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>

                {study ? (
                  <Link href={`/case-studies/${study.slug}`} className="gpd-proof" aria-label={`${study.brandName} case study`}>
                    <span className="gpd-shot">
                      {CASE_STUDY_VIDEOS[study.slug] ? (
                        // Moving, like the hero. Ecommerce is judged visually
                        // and a column of stills reads as a slide deck.
                        // LazyAutoplayVideo withholds the src until an
                        // IntersectionObserver says the row is worth loading,
                        // so six of these cost nothing above the fold.
                        <>
                          <LazyAutoplayVideo
                            src={CASE_STUDY_VIDEOS[study.slug]}
                            poster={posterFor(CASE_STUDY_VIDEOS[study.slug])}
                            className="gpd-video"
                            label={item.imageAlt ?? `${study.brandName} storefront we built`}
                          />
                          {/* A looping autoplay video has no pause control,
                              which fails WCAG 2.2.2 for anyone who asked for
                              reduced motion. CSS cannot stop playback, so the
                              still is rendered alongside and swapped by media
                              query; under reduced motion the file is never
                              fetched at all. */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={posterFor(CASE_STUDY_VIDEOS[study.slug])}
                            alt={item.imageAlt ?? `${study.brandName} storefront we built`}
                            className="gpd-still"
                            loading="lazy"
                            decoding="async"
                          />
                        </>
                      ) : (
                        <Image
                          src={study.heroImage}
                          alt={item.imageAlt ?? `${study.brandName} storefront we built`}
                          width={720}
                          height={540}
                          sizes="(max-width: 900px) 100vw, 46vw"
                          className="gpd-img"
                        />
                      )}
                    </span>
                    <span className="gpd-meta">
                      <span className="gpd-brand">{study.brandName}</span>
                      <span className="gpd-metric">
                        <span className="gpd-metric-v">{study.heroMetric}</span>
                        <span className="gpd-metric-l">{study.heroSubMetric}</span>
                      </span>
                    </span>
                  </Link>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gpd-label { font-size: 12px; letter-spacing: .14em; text-transform: uppercase; font-weight: 700; color: #2A9555; margin: 0 0 10px; }
          .gpd-heading { margin: 0 0 14px; max-width: 34ch; }
          .gpd-intro { max-width: 62ch; margin-bottom: 46px; }
          .gpd-intro p { margin: 0 0 12px; }

          .gpd-rows { display: flex; flex-direction: column; gap: 64px; }
          .gpd-row { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
          /* Alternating sides. The COPY keeps DOM order first on every row, so
             a screen reader and a keyboard always meet heading then proof,
             regardless of which side the image is painted on. */
          .gpd-row[data-flip] .gpd-copy { order: 2; }
          .gpd-row[data-flip] .gpd-proof { order: 1; }

          .gpd-eyebrow { font-size: 12px; letter-spacing: .12em; text-transform: uppercase; font-weight: 700; color: #6b7280; margin: 0 0 10px; }
          .gpd-h3 { font-size: clamp(24px, 2.6vw, 36px); line-height: 1.15; letter-spacing: -0.015em; font-weight: 700; color: #0f172a; margin: 0 0 14px; }
          .gpd-body p { margin: 0 0 12px; }
          .gpd-covers { list-style: none; display: flex; flex-wrap: wrap; gap: 6px; margin: 14px 0 0; padding: 0; }
          .gpd-cover { font-size: 12px; font-weight: 600; line-height: 1; color: #334155; background: #FBF7ED; border: 1px solid rgba(15,23,42,.10); border-radius: 999px; padding: 7px 11px; white-space: nowrap; }
          .gpd-cta { margin-top: 18px; }

          .gpd-proof { display: block; text-decoration: none; color: inherit; border-radius: 16px; overflow: hidden; background: #FBF7ED; border: 1px solid rgba(15,23,42,.08); transition: transform .25s ease, box-shadow .25s ease; }
          .gpd-proof:hover { transform: translateY(-3px); box-shadow: 0 14px 34px rgba(15,23,42,.10); }
          .gpd-shot { display: block; aspect-ratio: 4 / 3; overflow: hidden; background: #f0f0f0; }
          .gpd-img, .gpd-video { width: 100%; height: 100%; object-fit: cover; display: block; }
          .gpd-still { display: none; width: 100%; height: 100%; object-fit: cover; }
          @media (prefers-reduced-motion: reduce) {
            .gpd-video { display: none; }
            .gpd-still { display: block; }
          }
          .gpd-meta { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 16px 18px; }
          .gpd-brand { font-weight: 700; font-size: 15px; color: #0f172a; }
          .gpd-metric { display: flex; flex-direction: column; align-items: flex-end; line-height: 1.15; }
          .gpd-metric-v { font-weight: 800; font-size: 20px; color: #2A9555; font-variant-numeric: tabular-nums; }
          .gpd-metric-l { font-size: 12px; color: #6b7280; }

          /* Tablet band, iPad Pro portrait included (1024px). Two columns
             still fit, but the type was losing the fight with the image: the
             heading is sized off vw, so at 1024 it drops to about 26px while
             the media column keeps its full half. Three corrections, all
             pulling weight back to the copy.
               1. the copy column takes the larger share
               2. the heading leaves the vw curve and holds 30px
               3. the media gets shorter, so it stops out-running the copy
                  vertically as well as horizontally */
          @media (max-width: 1200px) and (min-width: 901px) {
            .gpd-row { grid-template-columns: 1.12fr 0.88fr; gap: 30px; }
            /* grid-template-columns is POSITIONAL, but the alternating rows
               swap sides with the order property. Without this the wide
               column always
               falls to whatever sits first in the grid, which on a flipped row
               is the image: every other row came out with a big visual and a
               squeezed column of copy. Mirror the ratio so the COPY keeps the
               larger share on both sides. */
            .gpd-row[data-flip] { grid-template-columns: 0.88fr 1.12fr; }
            .gpd-rows { gap: 52px; }
            .gpd-h3 { font-size: 30px; max-width: none; }
            .gpd-shot { aspect-ratio: 3 / 2; }
            .gpd-body p { font-size: 15.5px; }
            .gpd-cover { font-size: 11.5px; padding: 6px 10px; }
            .gpd-meta { padding: 13px 15px; }
            .gpd-metric-v { font-size: 18px; }
          }
          @media (max-width: 900px) {
            .gpd-rows { gap: 44px; }
            .gpd-row { grid-template-columns: 1fr; gap: 22px; }
            /* Stacked: copy always leads, so the flip is dropped entirely. */
            .gpd-row[data-flip] .gpd-copy,
            .gpd-row[data-flip] .gpd-proof { order: initial; }
            .gpd-heading { max-width: none; }
            .gpd-h3 { max-width: none; }
          }
          @media (prefers-reduced-motion: reduce) {
            .gpd-proof { transition: none; }
            .gpd-proof:hover { transform: none; }
          }
        `,
        }}
      />
    </section>
  );
}
