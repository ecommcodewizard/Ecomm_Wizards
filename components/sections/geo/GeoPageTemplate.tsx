import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ServiceSchema from "@/components/seo/ServiceSchema";
import RelatedServices from "@/components/sections/RelatedServices";
import type { GeoPage } from "@/lib/geo/types";
import { assertPublishable, canonicalUrl, hubPathToLabel } from "@/lib/geo/registry";
import { breadcrumbListJsonLd, breadcrumbTrail } from "@/lib/geo/schema";
import GeoStyles from "./GeoStyles";
import GeoPageHero from "./GeoPageHero";
import TrustBar from "./TrustBar";
import Hook from "./Hook";
import QuickAnswer from "./QuickAnswer";
import SearchIntentBlock from "./SearchIntentBlock";
import PlaceLayer from "./PlaceLayer";
import GradientLayer from "./GradientLayer";
import ServicesAccordion from "./ServicesAccordion";
import ResultsSlider from "./ResultsSlider";
import HowWeWorkBlock from "./HowWeWorkBlock";
import ServiceBlock from "./ServiceBlock";
import OnlyHereAsset from "./OnlyHereAsset";
import ProofBlock from "./ProofBlock";
import ObjectionBlock from "./ObjectionBlock";
import FAQBlock from "./FAQBlock";
import ConversionBlock from "./ConversionBlock";
import DevSlotNote from "./DevSlotNote";

// The geo spine, Batch 1 Page Specification v2.0 section 2.2. Eleven blocks,
// 1,300-1,700 words. Different shape from the hub spine, which is why this is a
// separate template rather than a variant of HubPageTemplate:
//
//   1 Hero            H1 is the exact target keyword. "for [city] brands",
//                     never "in", "near me" or "your local".
//   2 Hook            The failure state brands in this market arrive in.
//   3 Place layer     The reader's commercial world, only the facts this
//                     service touches. Never a generic city block.
//   4 Gradient layer  Service x place. The page's reason to exist, and the
//                     only block that could not move to another page by
//                     swapping a proper noun. Minimum two sourced facts.
//   5 Only-Here Asset
//   6 What we do      The service as the response to blocks 3-5, not a menu.
//                     Price band stated, contextual link UP to the hub.
//   7 Proof           Vertically matched, never framed as a local client.
//   8 Objections      Three, at least one specific to this market's buyer.
//   9 FAQ             6-8, minimum 3 unique to this page.
//  10 Conversion + form
//  11 Sources         NOT rendered: the owner decided against on-page
//                     citations. Provenance stays in asset.method and in the
//                     page file.
//
// Uniqueness gate: blocks 3, 4, 5, 7, 8 and 9 are 100% unique to the page.
// Blocks 1, 6 and 10 may share structure only. check-shingles enforces it.
//
// Six optional blocks slot into that spine, all rendered only when the page
// file fills them. They are additive: none of them replaces a numbered block.
//
//   trust        under the hero          logo marquee, same eight clients
//   quickAnswer  under the hook          the passage AI answers lift
//   searchIntent under the quick answer  scope stated for the query itself
//   servicesList after the asset         keyword-mapped service accordion
//   results      after the services      named client quotes, disjoint from
//                                        the block 7 proof grid
//   howWeWork    after the results       the delivery terms that stand in for
//                                        an office we do not have
//
// Backgrounds alternate dark / white / cream down the whole page. The one
// repeat is hook -> quickAnswer, which is deliberate. Any new block has to be
// inserted where its own hardcoded band keeps that alternation intact.
//
// Schema emitted: Service with areaServed, BreadcrumbList, FAQPage. Never
// LocalBusiness, PostalAddress, geo coordinates or openingHours; this page
// makes no presence claim and must not imply one in markup either.

export default function GeoPageTemplate({ page }: { page: GeoPage }) {
  // A page marked published that still has unfilled slots throws here, which
  // fails `next build`. That is the intended mechanical publish gate.
  assertPublishable(page);

  const trail = breadcrumbTrail(page);
  const url = canonicalUrl(page);

  return (
    <>
      <GeoStyles />
      <Breadcrumbs items={trail} />

      <GeoPageHero
        eyebrow={page.shortTitle}
        h1={page.h1}
        qualifier={page.qualifier}
        image={page.heroImage}
        stats={page.heroStats}
        secondaryCta={{ label: page.assetCtaLabel ?? "See the teardown", href: "#asset" }}
      />

      {page.trust && <TrustBar trust={page.trust} />}

      <Hook text={page.hook} />

      {/* Cream directly under cream, on purpose: QuickAnswer sets padding-top 0
          so it reads as the hook's answer rather than as a new section. */}
      {page.quickAnswer && <QuickAnswer text={page.quickAnswer} />}

      {page.searchIntent && <SearchIntentBlock text={page.searchIntent} />}

      <PlaceLayer text={page.placeLayer} heading={page.placeLayerHeading} />

      <GradientLayer text={page.gradientLayer} heading={page.gradientLayerHeading} />

      <OnlyHereAsset asset={page.asset} />

      {/* Services list sits after the asset, not before it. The asset is what
          the page is here to give away; a service menu ahead of it reads as a
          pitch interrupting the argument. */}
      {page.servicesList && <ServicesAccordion data={page.servicesList} />}

      {/* Named client quotes. Uses different studies from the proof grid below,
          so the page shows six brands rather than the same three twice. */}
      {page.results && <ResultsSlider results={page.results} />}

      {page.howWeWork && <HowWeWorkBlock data={page.howWeWork} />}

      {/* Block 6 links UP to the hub. The geo variant of ServiceBlock renders
          that "Part of our ... service." line, which is the internal link the
          hub-and-spoke structure depends on. */}
      <ServiceBlock
        heading="What we do about it"
        text={page.whatWeDoAboutIt}
        variant="geo"
        hub={{ label: hubPathToLabel(page.hub), href: page.hub }}
      />

      {page.proof.length > 0 ? (
        <ProofBlock heading={page.proofHeading} proof={page.proof} />
      ) : (
        <DevSlotNote block="7 · Proof" note="proof[] is empty. 2-3 case studies matched to this market's dominant vertical, with verified: true, are required before publishing." />
      )}

      <ObjectionBlock heading={page.objectionsHeading} objections={page.objections} />

      <FAQBlock heading={`${page.shortTitle} FAQs`} faqs={page.faqs} />

      <ConversionBlock conversion={page.conversion} landingPage={page.path} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd(trail, page.path)) }} />
      <ServiceSchema
        url={url}
        name={page.shortTitle}
        serviceType={page.serviceType}
        description={page.metaDescription}
        areaServed={page.geo.areaServed}
        areaServedType={page.geo.type === "state" ? "State" : "AdministrativeArea"}
      />

      <RelatedServices current={page.path} />
    </>
  );
}
