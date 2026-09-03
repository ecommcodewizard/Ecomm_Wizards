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
import DisciplineBlocks from "./DisciplineBlocks";
import EngagementBlock from "./EngagementBlock";
import ResultsSlider from "./ResultsSlider";
import HowWeWorkBlock from "./HowWeWorkBlock";
import ServiceBlock from "./ServiceBlock";
import ApproachBlock from "./ApproachBlock";
import InlineCta from "./InlineCta";
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

      {/* Sits between the place layer and the proof, on the owner's
          instruction (2026-09-03). The place layer ends on what the reader is
          up against; this answers how we approach it, and the case studies
          immediately after show it working. Previously a paragraph inside
          "What we do about it", three quarters down the page. */}
      {page.approach && <ApproachBlock text={page.approach.body} heading={page.approach.heading} />}

      {/* Proof sits directly under the place layer on the owner's instruction
          (2026-09-02). The place layer ends on what the reader is competing
          against; the natural next question is "so who have you done this for",
          and answering it there rather than 600 words later keeps the argument
          moving. It used to sit below "What we do about it". */}
      {page.proof.length > 0 ? (
        <ProofBlock heading={page.proofHeading} proof={page.proof} />
      ) : (
        <DevSlotNote block="7 · Proof" note="proof[] is empty. 2-3 case studies matched to this market's dominant vertical, with verified: true, are required before publishing." />
      )}

      {/* Straight after the case studies: this is where a reader stops
          wondering whether we can do it. */}
      {page.proofCta && <InlineCta text={page.proofCta.text} label={page.proofCta.label} />}

      <GradientLayer text={page.gradientLayer} heading={page.gradientLayerHeading} />

      <OnlyHereAsset asset={page.asset} />

      {/* Wired 2026-09-03. InlineCta already existed and was rendered by
          HubPageTemplate, but the geo template never called it, so a geo page
          had no way to act between the hero and the services block: seven
          sections including proof and the asset. Both prompts point at
          #contact rather than presenting a second offer. */}
      {page.midCta && <InlineCta text={page.midCta.text} label={page.midCta.label} />}

      {/* Services list sits after the asset, not before it. The asset is what
          the page is here to give away; a service menu ahead of it reads as a
          pitch interrupting the argument. */}
      {/* Discipline deep-dives, for pages whose keyword is the broad agency
          term rather than a named service. A page sets EITHER this or the
          services accordion: they answer the same slot for two different
          readers, and rendering both would sell the service list twice. */}
      {page.disciplines && <DisciplineBlocks data={page.disciplines} />}

      {page.servicesList && <ServicesAccordion data={page.servicesList} />}

      {/* Numbered process. Optional, and only right where the reader has
          already chosen the service and wants the sequence: every page ranking
          for the Shopify SEO term walks through a numbered method, because that
          buyer has usually paid for SEO once already and wants to know what
          they are actually getting this time. Sits after the service list so
          the page says what the work is before it says how it runs. */}
      {page.engagement && <EngagementBlock engagement={page.engagement} />}

      {/* Named client quotes. Uses different studies from the proof grid below,
          so the page shows six brands rather than the same three twice. */}
      {page.results && <ResultsSlider results={page.results} />}

      {page.howWeWork && <HowWeWorkBlock data={page.howWeWork} />}

      {/* No `hub` prop, on the owner's instruction (2026-09-02): the appended
          "Part of our ... service." line read as bolted on. The hub-and-spoke
          uplink it provided has NOT been dropped - it moved into the first
          services card, where it sits inside a real sentence. If a future geo
          page removes that link from its copy, restore the prop here or the
          page will have no path up to its hub. */}
      <ServiceBlock heading="What we do about it" text={page.whatWeDoAboutIt} variant="geo" />

      {/* Directly after the price. The objections and FAQ that follow are where
          a reader settles their last doubt, and previously the nearest button
          was five sections away at the form. */}
      {page.closingCta && <InlineCta text={page.closingCta.text} label={page.closingCta.label} />}

      <ObjectionBlock heading={page.objectionsHeading} objections={page.objections} />

      {/* types.ts documents faqHeading as an override for the generic default,
          but the default was hardcoded here and the field was never read. The
          fallback is unchanged, so pages that do not set it are unaffected.
          Worth having: "<shortTitle> FAQs" repeats the page's target keyword in
          an H2, which Copy Standard 7.5 counts toward the body cap. */}
      <FAQBlock heading={page.faqHeading ?? `${page.shortTitle} FAQs`} faqs={page.faqs} />

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
