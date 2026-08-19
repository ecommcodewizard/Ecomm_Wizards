import { hasNeedsInput, type OnlyHereAsset as OnlyHereAssetT } from "@/lib/geo/types";
import AssetTable from "./AssetTable";
import Prose, { inline } from "./Prose";

// The Only-Here Asset block. Order is mandatory (Page Spec): title, method
// disclosure ABOVE the artifact, the artifact itself, the derived conclusion,
// optional derived list, optional supporting blocks, review flag.
// Server component. All human-authored strings render through inline()/Prose.

export default function OnlyHereAsset({ asset, id = "asset" }: { asset: OnlyHereAssetT; id?: string }) {
  const { method } = asset;
  const blocks = asset.supportingBlocks ?? [];

  return (
    <section id={id} className="gp-section gp-section--white oha" style={{ scrollMarginTop: 90 }}>
      <div className="gp-inner">
        {/* (a) title */}
        <span className="gp-eyebrow">Only here</span>
        <h2 className="gp-h2">{inline(asset.title)}</h2>
        {asset.intro ? <Prose text={asset.intro} className="gp-lead" /> : null}

        {/* (b) method disclosure, above the artifact */}
        <div className="oha-method" role="group" aria-labelledby={`${id}-method-title`}>
          <p id={`${id}-method-title`} className="oha-method-title">
            Method
          </p>
          <dl className="oha-dl">
            {typeof method.sampleSize === "number" ? (
              <div className="oha-dl-row">
                <dt>Sample</dt>
                <dd>{method.sampleSize.toLocaleString("en-US")}</dd>
              </div>
            ) : null}
            {method.window ? (
              <div className="oha-dl-row">
                <dt>Window</dt>
                <dd>{inline(method.window)}</dd>
              </div>
            ) : null}
            <div className="oha-dl-row">
              <dt>Captured</dt>
              <dd>
                {hasNeedsInput(method.captured) ? inline(method.captured) : <time dateTime={method.captured}>{method.captured}</time>}
              </dd>
            </div>
            <div className="oha-dl-row oha-dl-row--wide">
              <dt>How gathered</dt>
              <dd>{inline(method.howGathered)}</dd>
            </div>
          </dl>
        </div>

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
          .oha-method { background: #FBF7ED; border: 1px solid rgba(0,0,0,0.08); border-radius: 12px; padding: 16px 20px; margin: 8px 0 20px; }
          .oha-method-title { font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: #2A9555; margin: 0 0 10px; }
          .oha-dl { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px 24px; margin: 0; }
          .oha-dl-row { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
          .oha-dl-row--wide { grid-column: 1 / -1; }
          .oha-dl dt { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: #64748b; }
          .oha-dl dd { margin: 0; font-size: 15px; line-height: 1.6; color: #0f172a; }
          .oha-dl dd a { color: #2A9555; text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }
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
            .oha-dl { grid-template-columns: 1fr; }
            .oha-derived .gp-p { font-size: 16px; }
            .oha-ul { font-size: 15px; }
          }
        `,
        }}
      />
    </section>
  );
}
