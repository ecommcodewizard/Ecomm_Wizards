import { inline } from "./Prose";

// Small muted note with an amber-tinted border. Used for lines like the
// not-legal-advice disclaimer. Text is human-authored and rendered via inline().

export default function Disclaimer({ text }: { text: string }) {
  return (
    <aside className="gdis" role="note">
      <p className="gdis-text">{inline(text)}</p>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gdis { font-family: 'Poppins', sans-serif; border: 1px solid rgba(245,158,11,0.45); background: rgba(254,243,199,0.35); border-radius: 10px; padding: 12px 16px; margin: 20px 0 0; }
          .gdis-text { margin: 0; font-size: 13px; line-height: 1.6; color: #64748b; }
          .gdis-text a { color: #2A9555; text-decoration: underline; text-underline-offset: 2px; font-weight: 600; }
        `,
        }}
      />
    </aside>
  );
}
