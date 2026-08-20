import type { OnlyHereAsset as OnlyHereAssetT } from "@/lib/geo/types";
import AssetTable from "./AssetTable";
import Prose, { inline } from "./Prose";

// The signature comparison block: something the reader cannot get elsewhere.
// Order: title, intro, the artifact, the conclusion drawn from it, an optional
// list, optional supporting blocks.
//
// The "Only here" eyebrow and the Method box were both removed by the owner.
// The first was internal shorthand that meant nothing to a reader; the second
// buried the table under process notes before anyone reached it. Where the
// figures came from is still recorded in the content file.
// Server component. All human-authored strings render through inline()/Prose.

export default function OnlyHereAsset({ asset, id = "asset" }: { asset: OnlyHereAssetT; id?: string }) {
  const blocks = asset.supportingBlocks ?? [];

  return (
    <section id={id} className="gp-section gp-section--white oha" style={{ scrollMarginTop: 90 }}>
      <div className="gp-inner">
        {/* (a) title */}
        <h2 className="gp-h2">{inline(asset.title)}</h2>
        {asset.intro ? <Prose text={asset.intro} className="gp-lead" /> : null}

        {/* (c) the artifact */}
        <AssetTable renderer={asset.renderer} columns={asset.columns} rows={asset.rows} caption={asset.title} id={`${id}-table`} />

        {/* (d) derived conclusion */}
        <div className="oha-derived">
          <Prose text={asset.derived} className="gp-p" />
        </div>

        {/* (e) derived list */}
        {asset.derivedList ? (
          <div className="oha-list">
            <h3 className="gp-h3">{inline(asset.derivedList.title)}</h3>
            <ul className="oha-ul">
              {asset.derivedList.items.map((item, i) => (
                <li key={i}>{inline(item)}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* (f) supporting blocks */}
        {blocks.length > 0 ? (
          <div className={blocks.length >= 2 ? "gp-grid-2 oha-blocks" : "oha-blocks"}>
            {blocks.map((b, i) => (
              <div key={i} className="oha-block">
                <h3 className="gp-h3">{inline(b.heading)}</h3>
                <Prose text={b.body} className="gp-p" />
              </div>
            ))}
          </div>
        ) : null}

        {/* (g) review flag */}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Bottom padding is tightened because the mid-page CTA sits directly
           below and should read as attached to this table, not as a separate
           band. Specificity beats .gp-section at every breakpoint. */
        .gp-section.oha { padding-bottom: 20px; }
          .oha-derived { margin: 24px 0 0; padding: 4px 0 4px 20px; border-left: 4px solid #2A9555; }
          .oha-derived .gp-p { font-size: 17px; }
          .oha-list { margin: 28px 0 0; }
          .oha-ul { margin: 0; padding: 0 0 0 22px; color: #334155; font-size: 16px; line-height: 1.75; }
          .oha-ul li { margin: 0 0 8px; }
          .oha-ul li::marker { color: #2A9555; }
          .oha-ul a { color: #2A9555; text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }
          .oha-blocks { margin: 32px 0 0; }
          .oha-block { min-width: 0; }
          @media (max-width: 640px) {
            .oha-derived .gp-p { font-size: 16px; }
            .oha-ul { font-size: 15px; }
          }
        `,
        }}
      />
    </section>
  );
}
