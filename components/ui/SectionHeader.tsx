interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ badge, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span
          className="mb-3 inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest"
          style={{
            backgroundColor: "rgba(4,107,210,0.08)",
            color: "var(--color-secondary)",
            borderRadius: "var(--radius-full)",
            border: "1px solid rgba(4,107,210,0.15)",
          }}
        >
          {badge}
        </span>
      )}
      <h2
        className="font-bold"
        style={{
          fontSize: "42px",
          fontWeight: 600,
          lineHeight: "52px",
          color: "var(--color-dark)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 leading-relaxed ${centered ? "mx-auto max-w-2xl" : ""}`}
          style={{ color: "var(--color-muted)", fontSize: "16px", lineHeight: "1.75" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
