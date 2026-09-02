import { inline } from "./Prose";

// How we approach the work, as its own section rather than a paragraph buried
// inside another block.
//
// Why it exists: the design argument on a geo page is the thing that separates
// us from a design studio, and a studio is who the reader is comparing us
// against. Carried as a paragraph inside "What we do about it" it sat about
// three quarters down the page with no heading of its own, and the owner - who
// commissioned it - could not find it. If the person who asked for it cannot
// find it, a prospect who does not know it exists has no chance.
//
// Cream band: the place layer above it is white and the proof block below
// carries its own cards, so this reads as a held beat between the two rather
// than as a third white slab.

export default function ApproachBlock({ text, heading }: { text: string; heading: string }) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (paragraphs.length === 0) return null;

  return (
    <section className="gp-section gp-section--cream gpap" aria-labelledby="gpap-heading">
      <div className="gp-inner--prose">
        <h2 id="gpap-heading" className="gp-h2">
          {inline(heading)}
        </h2>
        {paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? "gp-p gp-lead" : "gp-p"}>
            {inline(p)}
          </p>
        ))}
      </div>
    </section>
  );
}
