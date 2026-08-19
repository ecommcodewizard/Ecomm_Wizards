import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ServiceSchema from "@/components/seo/ServiceSchema";
import RelatedServices from "@/components/sections/RelatedServices";
import type { HubPage } from "@/lib/geo/types";
import { assertPublishable, canonicalUrl, publishedChildren } from "@/lib/geo/registry";
import { breadcrumbListJsonLd, breadcrumbTrail } from "@/lib/geo/schema";
import GeoStyles from "./GeoStyles";
import GeoPageHero from "./GeoPageHero";
import Hook from "./Hook";
import ServiceBlock from "./ServiceBlock";
import OnlyHereAsset from "./OnlyHereAsset";
import EngagementBlock from "./EngagementBlock";
import ScopeBoundary from "./ScopeBoundary";
import ProofBlock from "./ProofBlock";
import ObjectionBlock from "./ObjectionBlock";
import FAQBlock from "./FAQBlock";
import ConversionBlock from "./ConversionBlock";
import SourcesBlock from "./SourcesBlock";
import DevSlotNote from "./DevSlotNote";

// The hub spine (Page Specification v2.0 section 2.1), rendered in order from a
// typed content object. Every prose slot is filled by a human in
// lib/geo/pages/<slug>.ts; this template decides only layout and schema.
//
//  1 Hero  2 Hook  3 What we actually do  4 Only-Here Asset  5 How the
//  engagement runs  6 What we don't do  7 Proof  8 Objections  9 FAQ
//  10 Conversion + form  11 Sources
//
// Schema emitted: Service (shared <ServiceSchema/>), BreadcrumbList (from the
// same trail Breadcrumbs renders), FAQPage (inside FAQBlock, from the same
// array it renders). Nothing else.

export default function HubPageTemplate({ page }: { page: HubPage }) {
  // A page marked published that still has unfilled slots throws here, which
  // fails `next build`. That is the intended mechanical publish gate.
  assertPublishable(page);

  const trail = breadcrumbTrail(page);
  const url = canonicalUrl(page);
  const children = publishedChildren(page);
  const isMap = !!page.serviceMap?.length;

  return (
    <>
      <GeoStyles />
      <Breadcrumbs items={trail} />

      <GeoPageHero eyebrow={page.shortTitle} h1={page.h1} qualifier={page.qualifier} />

      <Hook text={page.hook} />

      <ServiceBlock
        heading="What we actually do"
        text={page.whatWeDo}
        variant={isMap ? "map" : "hub"}
        mapItems={page.serviceMap}
      />

      <OnlyHereAsset asset={page.asset} />

      <EngagementBlock heading="How the engagement runs" weeks={page.howEngagementRuns} />

      <ScopeBoundary heading="What we don't do" items={page.whatWeDontDo} />

      {page.proof.length > 0 ? (
        <ProofBlock heading="Proof" proof={page.proof} />
      ) : (
        <DevSlotNote block="7 · Proof" note="proof[] is empty. 2-3 vertically matched case studies with verified: true are required before publishing." />
      )}

      <ObjectionBlock heading="Objections" objections={page.objections} />

      <FAQBlock heading={`${page.shortTitle} FAQs`} faqs={page.faqs} />

      <ConversionBlock conversion={page.conversion} landingPage={page.path} />

      <SourcesBlock
        sources={page.sources}
        assetReview={{ captured: page.asset.method.captured, reviewAfterDays: page.asset.reviewAfterDays, title: page.asset.title }}
      />

      {/* Hub -> geo children. Rendered only for published children so a hub never
          links to a 404. Contextual list, not a footer block. */}
      {children.length > 0 && (
        <section className="gp-section gp-section--white" aria-label="Regional pages">
          <div className="gp-inner">
            <h2 className="gp-h2" style={{ fontSize: 24 }}>By market</h2>
            <ul className="gp-children">
              {children.map((c) => (
                <li key={c.path}>
                  <Link href={c.path} className="gp-link">
                    {c.geo.name}
                  </Link>
                </li>
              ))}
            </ul>
            <style dangerouslySetInnerHTML={{ __html: `.gp-children{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:10px 22px}` }} />
          </div>
        </section>
      )}

      {/* Structured data: BreadcrumbList from the same trail as the visible crumbs. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd(trail, page.path)) }} />
      <ServiceSchema url={url} name={page.shortTitle} serviceType={page.serviceType} description={page.metaDescription} />

      <RelatedServices current={page.path} />
    </>
  );
}
