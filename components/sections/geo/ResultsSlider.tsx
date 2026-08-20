import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import { inline } from "./Prose";
import type { Results } from "@/lib/geo/types";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";
import { APP_CASE_STUDIES } from "@/lib/shopify-app-studies";
import { KLAVIYO_CASE_STUDIES } from "@/lib/klaviyo-studies";
import { CREATIVE_CASE_STUDIES } from "@/lib/creative-studies";

// Section 10 of the Shopify development landing page, rebuilt for the geo
// programme: cream band, centered heading, one supporting line, then the
// image-left / quote-right slider.
//
// TWO RULES THIS COMPONENT ENFORCES BY CONSTRUCTION:
//
// 1. Every quote, name, role, avatar, image and metric is read from the case
//    study by slug. Nothing is retyped here, so a testimonial can only appear
//    on a page if a real published study carries it with a named person. A
//    study with no quotePerson is skipped rather than given words. This is the
//    class of claim the July 2026 integrity pass removed.
//
// 2. Every slide sets `href` to its own study. The shared slider falls back to
//    a bare /case-studies link when href is omitted, which check-links fails on.
//
// The chip row carries the study's own result numbers rather than the app
// stack, because on a service page the numbers are the proof.

function findStudy(slug: string): CaseStudy | undefined {
  const pools: readonly CaseStudy[][] = [CASE_STUDIES, APP_CASE_STUDIES, KLAVIYO_CASE_STUDIES, CREATIVE_CASE_STUDIES];
  for (const pool of pools) {
    const hit = pool.find((s) => s.slug === slug);
    if (hit) return hit;
  }
  return undefined;
}

/** "+47%" + "Growth in Organic Revenue" -> "+47% Organic Revenue". Drops the
 *  filler that the value already implies, so the pill sits on one line next to
 *  two others. Casing is left alone: lowercasing the first letter mangles
 *  "SEO Equity Retained" and "AOV". */
function chip(value: string, label: string): string {
  const trimmed = label
    .replace(/^(higher|increase in|growth in|reduction in)\s+/i, "")
    .replace(/\s+(growth|improvement|reduction)$/i, "")
    .trim();
  return `${value} ${trimmed}`;
}

/** The page's own headline for this slide, with {brand} bolded. Falls back to
 *  the study's hero metric, which is right for a generic page but usually leads
 *  on the wrong number for a specific service. */
function headlineFor(s: CaseStudy, override?: string) {
  if (!override) {
    return (
      <>
        {s.heroMetric} {s.heroSubMetric.toLowerCase()} for <strong>{s.brandName}</strong>
      </>
    );
  }
  const parts = override.split("{brand}");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 ? <strong>{s.brandName}</strong> : null}
        </span>
      ))}
    </>
  );
}

export default function ResultsSlider({ results }: { results: Results }) {
  const studies = results.slugs
    .map((slug) => findStudy(slug))
    .filter((s): s is CaseStudy => Boolean(s) && Boolean(s!.quote) && Boolean(s!.quotePerson));

  if (studies.length === 0) return null;

  const slides: CaseStudySlide[] = studies.map((s) => ({
    key: s.slug,
    image: s.heroImage,
    alt: `${s.brandName} ecommerce store, ${s.serviceType.split("|")[0].trim().toLowerCase()}`,
    metrics: s.stats.slice(0, 3).map((stat) => chip(stat.value, stat.label)),
    metaLabel: "What changed:",
    headline: headlineFor(s, results.headlines?.[s.slug]),
    quote: s.quote!,
    avatar: s.quoteAvatar ?? "",
    name: s.quotePerson!,
    role: s.quoteRole ?? s.brandName,
    href: `/case-studies/${s.slug}`,
  }));

  return (
    <section className="gprs ssd-results-section" aria-label={results.heading}>
      <div className="gprs-inner">
        <h2 className="gprs-heading">{inline(results.heading)}</h2>
        <p className="gprs-desc">{inline(results.intro)}</p>
        <CaseStudySlider slides={slides} intervalMs={7000} showDots={false} />
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* White band: the proof-card section directly above is cream, and the
           slider carries its own white card with a cream quote panel inside,
           so it still reads as raised. */
        .gprs { background: #ffffff; font-family: 'Poppins', sans-serif; padding: 60px 20px; }
        .gprs-inner { max-width: 1320px; margin: 0 auto; }
        .gprs-heading { color: #000; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 16px; max-width: 1100px; text-wrap: balance; }
        /* text-wrap: pretty stops the last line falling to a single orphan word. */
        .gprs-desc { color: rgba(0,0,0,.8); font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 32px; max-width: 1000px; text-wrap: pretty; }
        @media (max-width: 1023px) {
          .gprs { padding: 44px 20px; }
          .gprs-heading { font-size: 30px; line-height: 40px; margin-bottom: 14px; }
          .gprs-desc { font-size: 16px; line-height: 26px; margin-bottom: 24px; }
        }
        @media (max-width: 640px) {
          .gprs { padding: 40px 16px; }
          .gprs-heading { font-size: 26px; line-height: 34px; }
          .gprs-desc { font-size: 15px; line-height: 24px; }
        }
      `,
        }}
      />
    </section>
  );
}
