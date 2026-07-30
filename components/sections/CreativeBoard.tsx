// Shared "Creative board" visual: a 4-tile grid of sample ad creative (static,
// video, UGC, carousel). Used in the creative-strategy page hero and as the
// homepage Creative Strategy section's imagePanel. Styles live in globals.css
// (.cs-board*). Decorative — the surrounding section carries the real copy.

// Real ad creative lives in public/images/Creative strategy services (spaces URL-encoded)
const CS_MEDIA = "/images/Creative%20strategy%20services";

const BOARD_TILES: { label: string; src: string; poster?: string; video: boolean }[] = [
  { label: "Static ad", src: `${CS_MEDIA}/Static%20ad.webp`, video: false },
  { label: "Video ad", src: `${CS_MEDIA}/Video%20ad.mp4`, poster: `${CS_MEDIA}/Video%20ad-poster.webp`, video: true },
  { label: "UGC", src: `${CS_MEDIA}/UGC%20ad.mp4`, poster: `${CS_MEDIA}/UGC%20ad-poster.webp`, video: true },
  { label: "Carousel", src: `${CS_MEDIA}/carousel%20ad.webp`, video: false },
];

export default function CreativeBoard() {
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
              <video className="cs-tile-media" src={t.src} poster={t.poster} autoPlay muted loop playsInline preload="metadata" aria-label={`${t.label} ad creative`} />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="cs-tile-media" src={t.src} alt={`${t.label} creative`} loading="lazy" decoding="async" />
            )}
            <span className="cs-tile-label">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
