import Prose from "./Prose";

// Answer-first block, directly under the hook.
//
// Its whole job is to be quotable out of context. Google AI Overviews, ChatGPT
// search and Perplexity lift a self-contained passage that defines the entity
// and qualifies who it serves; a page that never states "an ecommerce agency
// is..." gives them nothing to lift, however good the rest of it is.
//
// Kept visually quiet on purpose. It is a definition, not a pitch, and the
// competitor pages that win this pattern put it in plain text near the top
// rather than dressing it up.

export default function QuickAnswer({ text }: { text: string }) {
  return (
    <section className="gp-section gp-section--cream gpq" aria-label="In short">
      <div className="gp-inner--prose">
        <p className="gpq-label">In short</p>
        <Prose text={text} className="gpq-text" />
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .gpq { padding-top: 0; }
        .gpq-label { font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #2A9555; margin: 0 0 10px; }
        .gpq-text { font-size: 18px; line-height: 1.7; color: #0f172a; margin: 0; border-left: 3px solid #3DC77A; padding-left: 18px; }
        @media (max-width: 640px) { .gpq-text { font-size: 16px; padding-left: 14px; } }
      `,
        }}
      />
    </section>
  );
}
