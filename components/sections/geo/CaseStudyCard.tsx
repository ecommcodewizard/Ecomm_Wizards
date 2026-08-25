import Image from "next/image";
import Link from "next/link";
import type { CaseStudyRef } from "@/lib/geo/types";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";
import { APP_CASE_STUDIES } from "@/lib/shopify-app-studies";
import { KLAVIYO_CASE_STUDIES } from "@/lib/klaviyo-studies";
import { CREATIVE_CASE_STUDIES } from "@/lib/creative-studies";
import { CASE_STUDY_VIDEOS, posterFor } from "@/lib/case-study-videos";
import LazyAutoplayVideo from "@/components/ui/LazyAutoplayVideo";
import { inline } from "./Prose";

// A proof card for a geo programme page. Resolves the study by slug across the
// four case-study arrays and deep-links to /case-studies/<slug>. Brand name and
// hero image come from the study data; the three labelled rows come from the
// page's CaseStudyRef. There is NO location field in either type, and this
// component must never render one.

function findStudy(slug: string): CaseStudy | undefined {
  const pools: readonly CaseStudy[][] = [CASE_STUDIES, APP_CASE_STUDIES, KLAVIYO_CASE_STUDIES, CREATIVE_CASE_STUDIES];
  for (const pool of pools) {
    const hit = pool.find((s) => s.slug === slug);
    if (hit) return hit;
  }
  return undefined;
}

/** Lowercase only the first character, so the phrase reads as a clause without
 *  destroying brand names like "Salesforce Commerce Cloud". */
function lowerFirst(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

export default function CaseStudyCard({ study }: { study: CaseStudyRef }) {
  const data = findStudy(study.slug);
  const video = CASE_STUDY_VIDEOS[study.slug];
  const href = `/case-studies/${study.slug}`;

  return (
    <Link href={href} className="gcs-card" data-proof-card="">
      {video || data?.heroImage ? (
        <div className="gcs-media">
          {video ? (
            // Same treatment as the case-studies grid: muted, looping, inline,
            // and not fetched until the card is near the viewport. This used to
            // be a plain <video autoPlay preload="none">, which does not defer
            // anything: autoplay needs the bytes, so the browser fetches
            // immediately and preload="none" is ignored. Three cards therefore
            // cost three full downloads on load. LazyAutoplayVideo withholds
            // src until an IntersectionObserver says it is worth having.
            <>
              <LazyAutoplayVideo
                src={video}
                poster={posterFor(video)}
                className="gcs-video"
              />
              {/* A looping autoplay video has no pause control, which fails
                  WCAG 2.2.2 for anyone who has asked for reduced motion. CSS
                  cannot stop playback, so the still poster is rendered
                  alongside and the two are swapped by media query. Under
                  reduced motion LazyAutoplayVideo also never fetches the file
                  at all, so it costs nothing beyond the hidden element. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={posterFor(video)}
                alt={`${data?.brandName ?? "Client"} ecommerce store, ${lowerFirst(study.whatWasBuilt)}`}
                className="gcs-still"
                loading="lazy"
                decoding="async"
              />
            </>
          ) : data?.heroImage ? (
            /* Alt names the brand and what the engagement was, so the image is
               described rather than labelled. No location, ever. */
            <Image
              src={data.heroImage}
              overrideSrc={data.heroImage}
              alt={`${data.brandName} ecommerce store, ${lowerFirst(study.whatWasBuilt)}`}
              fill
              className="gcs-img"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
          ) : null}
        </div>
      ) : null}
      <div className="gcs-body">
        {data ? <p className="gcs-brand">{data.brandName}</p> : null}
        <dl className="gcs-rows">
          <div className="gcs-row">
            <dt>Vertical</dt>
            <dd>{inline(study.vertical)}</dd>
          </div>
          <div className="gcs-row">
            <dt>What was built</dt>
            <dd>{inline(study.whatWasBuilt)}</dd>
          </div>
          <div className="gcs-row">
            <dt>Outcome</dt>
            <dd className="gcs-outcome">{inline(study.outcome)}</dd>
          </div>
        </dl>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gcs-card { display: flex; flex-direction: column; background: #ffffff; border-radius: 20px; overflow: hidden; text-decoration: none; border: 1px solid rgba(0,0,0,0.06); color: #0f172a; font-family: 'Poppins', sans-serif; transition: transform .22s ease, box-shadow .22s ease; height: 100%; }
          .gcs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .gcs-card:focus-visible { outline: 3px solid #3DC77A; outline-offset: 3px; }
          .gcs-media { position: relative; width: calc(100% - 16px); margin: 8px 8px 0; border-radius: 14px; overflow: hidden; aspect-ratio: 16 / 10; background: #e0ddd5; flex-shrink: 0; }
          .gcs-video { width: 100%; height: 100%; object-fit: cover; display: block; }
          .gcs-still { display: none; width: 100%; height: 100%; object-fit: cover; }
          .gcs-img { transition: transform .4s ease; }
          .gcs-card:hover .gcs-img { transform: scale(1.03); }
          .gcs-body { padding: 20px 20px 22px; display: flex; flex-direction: column; gap: 14px; flex-grow: 1; }
          .gcs-brand { font-size: 22px; font-weight: 700; line-height: 1.2; margin: 0; padding-bottom: 12px; border-bottom: 1px solid rgba(0,0,0,0.08); }
          .gcs-rows { margin: 0 0 auto; display: flex; flex-direction: column; gap: 10px; }
          .gcs-row { display: flex; flex-direction: column; gap: 2px; }
          .gcs-row dt { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; color: #000000; }
          .gcs-row dd { margin: 0; font-size: 14.5px; line-height: 1.55; color: #334155; }
          .gcs-outcome { font-weight: 700; color: #0f172a !important; }
          @media (prefers-reduced-motion: reduce) {
            .gcs-card, .gcs-img { transition: none; }
            .gcs-card:hover { transform: none; }
            .gcs-card:hover .gcs-img { transform: none; }
            /* Swap the looping preview for its still frame. */
            .gcs-video { display: none; }
            .gcs-still { display: block; }
          }
        `,
        }}
      />
    </Link>
  );
}
