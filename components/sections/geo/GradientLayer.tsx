import { inline } from "./Prose";

// Block 4 of the geo spine: service x place. The page's reason to exist.
//
// This is the one block that could not be moved to another page by changing a
// proper noun. Every other block on a geo page shares either its service with
// the hub or its geography with sibling pages; this one shares neither, which
// is why the specification calls it the answer to the duplication problem.
//
// Two hard requirements from the spec, both worth keeping in front of an editor:
//
//   - Minimum TWO verifiable sourced facts. Not two claims. Facts with a
//     provenance recorded in the page file, dated, with a review flag.
//   - 250-350 words. If it is shorter than that, the argument is almost
//     certainly generic and the page has failed the uniqueness gate whatever
//     check-shingles says.
//
// Cream band so it reads as the argument's centre of gravity, sitting between
// the white place layer above and the white asset below.

// `heading` is optional, and on a page of any length it should be supplied.
// This block carries the page's load-bearing claim, so leaving it untitled
// wastes the strongest passage on the page: an H2 immediately above a passage
// is a primary signal for extraction. The heading must not restate the
// keyword that opens the block, per Copy Standard 7.5.
export default function GradientLayer({ text, heading }: { text: string; heading?: string }) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (paragraphs.length === 0) return null;

  return (
    <section
      className="gp-section gp-section--cream gpgl"
      aria-labelledby={heading ? "gpgl-heading" : undefined}
      aria-label={heading ? undefined : "Why this market is different"}
    >
      <div className="gp-inner--prose">
        {heading ? (
          <h2 id="gpgl-heading" className="gp-h2 gpgl-h2">
            {inline(heading)}
          </h2>
        ) : null}
        {paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? "gp-lead" : "gp-p"}>
            {inline(p)}
          </p>
        ))}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gpgl-h2 { margin-bottom: 22px; }
          .gpgl .gp-lead { color: #0f172a; font-weight: 500; }
          .gpgl .gp-p:last-child, .gpgl .gp-lead:last-child { margin-bottom: 0; }
        `,
        }}
      />
    </section>
  );
}
