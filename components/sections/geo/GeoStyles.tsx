// Shared styles for every geo programme block. Rendered ONCE per page by the
// page template so the individual blocks stay small. Conventions match the
// live service pages (app/services/shopify-development-agency/page.tsx):
// Poppins, 1320px inner width, 60px/20px section padding, black / white / cream
// section bands, brand gradient on one keyword, green accents, 16px card radius.
//
// Class prefix: gp- (geo page). Blocks add their own scoped rules only when a
// rule is specific to that block.

export const GP = {
  dark: "#000000",
  white: "#ffffff",
  cream: "#FBF7ED",
  text: "#334155",
  ink: "#0f172a",
  green: "#2A9555",
  greenBright: "#3DC77A",
  greenSoft: "#61ce70",
  rule: "rgba(0,0,0,0.08)",
} as const;

export default function GeoStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .gp-section { font-family: 'Poppins', sans-serif; padding: 60px 20px; }
        .gp-section--dark { background: ${GP.dark}; color: ${GP.white}; }
        .gp-section--white { background: ${GP.white}; color: ${GP.ink}; }
        .gp-section--cream { background: ${GP.cream}; color: ${GP.ink}; }
        .gp-inner { max-width: 1320px; margin: 0 auto; }
        .gp-inner--narrow { max-width: 900px; margin: 0 auto; }
        .gp-inner--prose { max-width: 760px; margin: 0 auto; }

        .gp-eyebrow { display: inline-block; font-size: 13px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: ${GP.green}; margin: 0 0 12px; }
        .gp-section--dark .gp-eyebrow { color: ${GP.greenSoft}; }
        /* Headings are true black on light grounds, matching the sections that
           carry their own styles (engagement, categories). Body copy keeps the
           softer ink, so the heading still leads. Dark bands invert. */
        .gp-h2 { font-size: clamp(26px, 3.4vw, 40px); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; margin: 0 0 16px; text-wrap: balance; color: ${GP.dark}; }
        .gp-section--dark .gp-h2 { color: ${GP.white}; }
        .gp-h3 { font-size: 20px; font-weight: 700; line-height: 1.3; margin: 0 0 10px; }
        .gp-lead { font-size: 18px; line-height: 1.6; margin: 0 0 20px; color: ${GP.text}; }
        .gp-section--dark .gp-lead { color: rgba(255,255,255,0.82); }
        .gp-p { font-size: 16px; line-height: 1.75; margin: 0 0 16px; color: ${GP.text}; }
        .gp-p:last-child { margin-bottom: 0; }
        .gp-section--dark .gp-p { color: rgba(255,255,255,0.82); }
        .gp-p a, .gp-lead a { color: ${GP.green}; text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }
        .gp-section--dark .gp-p a { color: ${GP.greenSoft}; }
        .gp-gradient { background: var(--brand-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        .gp-card { background: ${GP.white}; border: 1px solid ${GP.rule}; border-radius: 16px; padding: 24px; }
        .gp-section--white .gp-card { background: ${GP.cream}; }
        .gp-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .gp-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }

        .gp-btn { display: inline-flex; align-items: center; gap: 10px; border-radius: 999px; padding: 15px 30px; font-size: 15px; font-weight: 600; text-decoration: none; line-height: 1; border: 1px solid transparent; transition: background .3s ease, transform .25s ease, box-shadow .25s ease, color .25s ease; cursor: pointer; }
        .gp-btn--dark { color: ${GP.white}; background: linear-gradient(${GP.dark}, ${GP.dark}) padding-box, ${GP.dark} border-box; }
        .gp-btn--dark:hover { background: linear-gradient(${GP.dark}, ${GP.dark}) padding-box, var(--brand-gradient) border-box; transform: translateY(-1px); box-shadow: 0 10px 28px -10px rgba(0,0,0,.45); }
        .gp-btn--light { color: ${GP.dark}; background: linear-gradient(${GP.white}, ${GP.white}) padding-box, ${GP.white} border-box; }
        .gp-btn--light:hover { background: linear-gradient(${GP.white}, ${GP.white}) padding-box, var(--brand-gradient) border-box; transform: translateY(-1px); }
        .gp-btn:focus-visible { outline: 3px solid ${GP.greenBright}; outline-offset: 3px; }
        .gp-link { color: ${GP.green}; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
        .gp-link:hover { text-decoration: underline; text-underline-offset: 3px; }

        /* Unfilled content slot. Only visible in development / preview builds. */
        .gp-needs-input { background: #FEF3C7; color: #78350F; border: 1px dashed #F59E0B; border-radius: 6px; padding: 1px 6px; font-weight: 500; }

        @media (max-width: 1024px) { .gp-grid-3 { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) {
          .gp-section { padding: 40px 18px; }
          .gp-grid-3, .gp-grid-2 { grid-template-columns: 1fr; }
          .gp-h2 { font-size: 26px; }
          .gp-lead { font-size: 16px; }
          .gp-p { font-size: 15px; }
          .gp-card { padding: 20px; }
        }
        @media (prefers-reduced-motion: reduce) { .gp-btn { transition: none; } }
      `,
      }}
    />
  );
}
