import { inline } from "./Prose";

// Block 3 of the geo spine: the reader's commercial world, and ONLY the facts
// this service touches.
//
// This is the block that most often degrades into a generic city paragraph, so
// two things are worth stating where a future editor will see them:
//
//   - No landmarks, weather, sports teams, food or traffic. Copy Standard v2.0
//     section 4 bans location decoration outright. "From Santa Monica to Silver
//     Lake" is decoration; "two-day ground reaches 34 states from a Dallas
//     node" is a commercial fact.
//   - It shares a geo with other pages, so it may repeat across them. The block
//     that must not repeat is the gradient layer below it.
//
// Cream band, so it reads as one movement with the hook above it.

// `heading` is optional. Without it the block renders headless and reads as
// narrative continuing from the hook, which is how the spine was drawn. With
// the optional blocks in place the page is long enough that a reader needs an
// anchor here, and a heading directly above the passage is one of the strongest
// signals for passage-level extraction. Pass one on any page of real length.
export default function PlaceLayer({ text, heading }: { text: string; heading?: string }) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (paragraphs.length === 0) return null;

  return (
    <section className="gp-section gp-section--white gppl" aria-labelledby={heading ? "gppl-heading" : undefined} aria-label={heading ? undefined : "This market"}>
      <div className="gp-inner--prose">
        {heading ? (
          <h2 id="gppl-heading" className="gp-h2 gppl-h2">
            {inline(heading)}
          </h2>
        ) : null}
        {paragraphs.map((p, i) => (
          <p key={i} className="gp-p">
            {inline(p)}
          </p>
        ))}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gppl-h2 { margin-bottom: 22px; }
          .gppl .gp-p:last-child { margin-bottom: 0; }
        `,
        }}
      />
    </section>
  );
}
