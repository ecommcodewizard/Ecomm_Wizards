// Development / preview only. Marks a block whose content slot is empty so the
// author sees the gap while filling a page. Renders nothing in production: a
// block with an absent slot must never show placeholder text to a visitor.

export default function DevSlotNote({ block, note }: { block: string; note: string }) {
  if (process.env.NODE_ENV === "production" && process.env.GEO_PREVIEW !== "1") return null;
  return (
    <aside
      role="note"
      style={{
        fontFamily: "'Poppins', sans-serif",
        margin: 0,
        padding: "18px 20px",
        background: "#FFFBEB",
        borderTop: "1px dashed #F59E0B",
        borderBottom: "1px dashed #F59E0B",
        color: "#78350F",
        fontSize: 14,
        lineHeight: 1.6,
      }}
    >
      <strong style={{ display: "block", fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 4 }}>
        Empty slot · {block}
      </strong>
      {note}
    </aside>
  );
}
