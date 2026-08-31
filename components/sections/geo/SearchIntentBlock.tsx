import { inline } from "./Prose";

// Written for the query rather than for the reader.
//
// QuickAnswer above it answers "what is this"; this block answers "is this page
// about the thing I searched for". Those are different jobs, which is why it is
// a separate block instead of two more sentences bolted onto the quick answer.
// An AI Overview lifting a passage wants scope stated flatly: who it serves,
// what is covered, what is not. A human skimming wants the same thing and gets
// it in three sentences, so nothing is sacrificed by writing it plainly.
//
// Deliberately NOT a definition of the H1 term. Copy Standard 5.1 bans
// definition sections in the body, and the one permitted definition already
// lives in the FAQ. Stating scope is a different act from defining a term.
//
// Dark band. It sits between the cream quick answer and the white place layer,
// and the page's only other dark stops are the hero and the objections, so this
// keeps the top third from running as one long light stretch.

export default function SearchIntentBlock({ text }: { text: string }) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (paragraphs.length === 0) return null;

  return (
    <section className="gp-section gp-section--dark gpsi" aria-label="Who this page is for">
      <div className="gp-inner--prose">
        {paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? "gp-lead" : "gp-p"}>
            {inline(p)}
          </p>
        ))}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gpsi .gp-lead { font-weight: 500; }
          .gpsi .gp-p:last-child, .gpsi .gp-lead:last-child { margin-bottom: 0; }
        `,
        }}
      />
    </section>
  );
}
