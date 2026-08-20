import { inline } from "./Prose";

// Block 2: the hook. A short run of prose with no heading. First paragraph is
// the lead size, any that follow are body size.

export default function Hook({ text }: { text: string }) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (paragraphs.length === 0) return null;

  return (
    <section className="gp-section gp-section--cream gpk" aria-label="Introduction">
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
          /* The quick-answer block sits directly below with no top padding of
             its own, so the two read as one thought. Two classes to beat the
             .gp-section mobile override at every breakpoint. */
          .gp-section.gpk { padding-bottom: 20px; }
          .gpk .gp-lead { color: #0f172a; font-weight: 500; }
          .gpk .gp-lead:last-child { margin-bottom: 0; }
          .gpk .gp-p:last-child { margin-bottom: 0; }
        `,
        }}
      />
    </section>
  );
}
