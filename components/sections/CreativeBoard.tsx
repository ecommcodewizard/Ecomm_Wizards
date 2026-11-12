import LazyAutoplayVideo from "@/components/ui/LazyAutoplayVideo";
import { videoPosterFor } from "@/lib/case-study-videos";
// Shared "Creative board" visual: a 4-tile grid of sample ad creative (static,
// video, UGC, carousel). Used in the creative-strategy page hero and as the
// homepage Creative Strategy section's imagePanel. Styles live in globals.css
// (.cs-board*). Decorative — the surrounding section carries the real copy.

// Real ad creative lives in public/images/Creative strategy services (spaces URL-encoded)
const CS_MEDIA = "/images/Creative%20strategy%20services";

const BOARD_TILES: { label: string; src: string; poster?: string; video: boolean }[] = [
  { label: "Static ad", src: `${CS_MEDIA}/Static%20ad.webp`, video: false },
  { label: "Video ad", src: `${CS_MEDIA}/cards/Video%20ad.mp4`, poster: `${CS_MEDIA}/Video%20ad-poster.webp`, video: true },
  { label: "UGC", src: `${CS_MEDIA}/cards/UGC%20ad.mp4`, poster: `${CS_MEDIA}/UGC%20ad-poster.webp`, video: true },
  { label: "Carousel", src: `${CS_MEDIA}/carousel%20ad.webp`, video: false },
];

// Tile videos are 14-second, 720px encodes in cards/ (2026-11-12): the UGC
// original was 5.4 MB and sits in the creative-strategy hero. `aboveFold`
// holds the videos until the browser is idle so they never compete with the
// first paint, and loads the two still tiles eagerly.
export default function CreativeBoard({ aboveFold = false }: { aboveFold?: boolean } = {}) {
  return (
    <div className="cs-board" aria-hidden>
      <div className="cs-board-head">
        <span className="cs-board-dot" />
        <span className="cs-board-dot" style={{ background: "#C8F57A" }} />
        <span className="cs-board-dot" style={{ background: "#4EB771" }} />
        <span className="cs-board-tag">Creative board</span>
      </div>
      <div className="cs-board-grid">
        {BOARD_TILES.map((t) => (
          <div key={t.label} className="cs-board-tile">
            {t.video ? (
              <LazyAutoplayVideo src={t.src} poster={t.poster ?? videoPosterFor(t.src)} className="cs-tile-media" label={`${t.label} ad creative`} deferUntilIdle={aboveFold} />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="cs-tile-media" src={t.src} alt={`${t.label} creative`} loading={aboveFold ? "eager" : "lazy"} decoding="async" />
            )}
            <span className="cs-tile-label">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
