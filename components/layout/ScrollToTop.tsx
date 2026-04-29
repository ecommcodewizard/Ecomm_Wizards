"use client";

export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
      style={{ width: "40px", height: "40px", background: "#D4AF37" }}
      aria-label="Scroll to top"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
