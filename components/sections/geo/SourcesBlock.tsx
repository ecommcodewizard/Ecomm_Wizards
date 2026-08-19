import { hasNeedsInput, type Source } from "@/lib/geo/types";
import { inline } from "./Prose";

// Block 11: sources. One numbered entry per sourced claim, each with a stable
// id so inline [src:id] markers (rendered by Prose as #source-<id> links) land
// here. An optional first line carries the Only-Here Asset's own capture date
// and review window. Renders nothing when there is nothing to cite.

type Props = {
  sources: Source[];
  assetReview?: { captured: string; reviewAfterDays: number; title: string };
};

/** Hostname for display. Returns null when the string is not a parseable URL. */
function hostnameOf(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u.hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function SourceUrl({ url }: { url: string }) {
  if (hasNeedsInput(url)) return <span className="gpsr-url">{inline(url)}</span>;
  const host = hostnameOf(url);
  if (!host) return <span className="gpsr-url">{url}</span>;
  return (
    <a href={url} rel="nofollow noopener" target="_blank" className="gpsr-url gpsr-url--link">
      {host}
      <span className="gpsr-sr">, opens in a new tab</span>
    </a>
  );
}

export default function SourcesBlock({ sources, assetReview }: Props) {
  if (sources.length === 0 && !assetReview) return null;

  return (
    <section className="gp-section gp-section--white gpsr" aria-labelledby="gpsr-heading">
      <div className="gp-inner--narrow">
        <h2 id="gpsr-heading" className="gp-h2 gpsr-heading">
          Sources
        </h2>

        {assetReview ? (
          <p className="gpsr-asset">
            <span className="gpsr-asset-title">{inline(assetReview.title)}</span>
            <span className="gpsr-meta">
              <span>captured {inline(assetReview.captured)}</span>
              <span aria-hidden="true" className="gpsr-sep">
                &middot;
              </span>
              <span>review after {assetReview.reviewAfterDays} days</span>
            </span>
          </p>
        ) : null}

        {sources.length > 0 ? (
          <ol className="gpsr-list">
            {sources.map((s) => (
              <li key={s.id} id={`source-${s.id}`} className="gpsr-item">
                <span className="gpsr-claim">{inline(s.claim)}</span>
                <span className="gpsr-meta">
                  <span className="gpsr-publisher">{inline(s.publisher)}</span>
                  <span aria-hidden="true" className="gpsr-sep">
                    &middot;
                  </span>
                  <span>captured {inline(s.captured)}</span>
                  <span aria-hidden="true" className="gpsr-sep">
                    &middot;
                  </span>
                  <span>review after {s.reviewAfterDays} days</span>
                  <span aria-hidden="true" className="gpsr-sep">
                    &middot;
                  </span>
                  <SourceUrl url={s.url} />
                </span>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gpsr-heading { font-size: 24px; margin-bottom: 20px; }
          .gpsr-asset { display: flex; flex-direction: column; gap: 4px; margin: 0 0 20px; padding: 0 0 16px; border-bottom: 1px solid rgba(0,0,0,0.08); }
          .gpsr-asset-title { font-size: 15px; font-weight: 600; color: #0f172a; line-height: 1.5; }
          .gpsr-list { margin: 0; padding: 0 0 0 22px; display: flex; flex-direction: column; gap: 14px; }
          .gpsr-item { font-size: 14px; line-height: 1.6; color: #334155; scroll-margin-top: 110px; padding-left: 4px; }
          .gpsr-item::marker { color: #2A9555; font-weight: 600; }
          .gpsr-item:target { background: rgba(61,199,122,0.10); border-radius: 8px; outline: 2px solid rgba(42,149,85,0.35); outline-offset: 6px; }
          .gpsr-claim { display: block; color: #0f172a; }
          .gpsr-meta { display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px; font-size: 13px; color: #64748b; margin-top: 2px; }
          .gpsr-sep { color: rgba(0,0,0,0.3); }
          .gpsr-url { word-break: break-all; }
          .gpsr-url--link { color: #2A9555; font-weight: 600; text-decoration: underline; text-underline-offset: 2px; }
          .gpsr-url--link:focus-visible { outline: 3px solid #3DC77A; outline-offset: 2px; border-radius: 3px; }
          .gpsr-sr { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
          @media (max-width: 640px) { .gpsr-heading { font-size: 22px; } }
        `,
        }}
      />
    </section>
  );
}
