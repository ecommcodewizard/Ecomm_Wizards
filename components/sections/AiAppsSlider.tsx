const ITEMS = [
  {
    key: "recommendations",
    title: "AI Product Recommendations",
    description:
      'No generic “you might also like” nonsense. Our AI learns what your customers want – and shows them exactly that. Higher conversions. Bigger carts. Personalization that feels like magic.',
    image: "/images/ai-powered-1.webp",
    href: "/book-shopify-consultation",
  },
  {
    key: "speed",
    title: "AI-Powered Speed Optimization",
    description:
      "Slow stores lose money. We use AI to fix your Core Web Vitals and shave seconds off load time. Every second saved = 7% more conversions. Your competitors won't know what hit them.",
    image: "/images/ai-powered-2.webp",
    href: "/book-shopify-consultation",
  },
];

const LOGOS = [
  "/images/logo-slider-1.avif",
  "/images/logo-slider-3.avif",
  "/images/logo-slider-5.avif",
  "/images/logo-slider-8.avif",
  "/images/logo-slider-9.avif",
  "/images/logo-slider-10.avif",
  "/images/logo-slider-11.avif",
  "/images/logo-slider-13.avif",
  "/images/logo-slider-15.avif",
  "/images/logo-slider-16.avif",
];

export default function AiAppsSlider() {
  return (
    <section style={{ background: "#000000", padding: "0 20px" }}>
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "40px 0",
        }}
      >
        {/* Heading */}
        <h2
          className="ai-apps-heading"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(28px, 4.1vw, 42px)",
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            margin: "0 0 10px",
          }}
        >
          Custom{" "}
          <span
            style={{
              background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI-Powered
          </span>{" "}
          Shopify Apps
        </h2>

        {/* 2-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: 20,
            marginTop: 10,
          }}
        >
          {ITEMS.map((item) => (
            <div
              key={item.key}
              style={{
                background: "#121212",
                borderRadius: 16,
                overflow: "hidden",
                padding: 30,
                margin: "10px 0 0",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="ai-apps-card-img"
                style={{ width: "100%", aspectRatio: "422/294", objectFit: "cover", display: "block", borderRadius: 10, marginBottom: 16 }}
              />

              <h3
                className="ai-apps-card-title"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "0 0 16px",
                }}
              >
                {item.title}
              </h3>

              <p
                className="ai-apps-card-desc"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "#ffffff",
                  margin: "0 0 16px",
                }}
              >
                {item.description}
              </p>

              <span
                className="group inline-flex p-[2px] rounded-full ai-apps-btn-wrap"
                style={{
                  background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)",
                }}
              >
                <a
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-8 py-[14px] ai-apps-btn-link"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600, textDecoration: "none" }}
                >
                  <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">
                    Book a Call
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/arrow vector.png"
                    alt=""
                    width={16}
                    height={16}
                    className="transition-all duration-300 group-hover:brightness-0"
                  />
                </a>
              </span>
            </div>
          ))}
        </div>

        {/* Partner strip */}
        <div style={{ marginTop: 24, textAlign: "center" }}>
          <h2
            className="ai-apps-partner-heading"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 22,
              fontWeight: 600,
              color: "#ffffff",
              margin: "0 0 10px",
            }}
          >
            We have partnered with top Ai powered shopify apps
          </h2>

          <div
            style={{
              overflow: "hidden",
              width: "100%",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 22%, black 78%, transparent 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 22%, black 78%, transparent 100%)",
            }}
          >
            <div
              className="logo-strip"
              style={{ display: "flex", alignItems: "center", gap: 48, width: "max-content" }}
            >
              {[...LOGOS, ...LOGOS].map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt={`partner-${i + 1}`}
                  style={{
                    height: 50,
                    width: "auto",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                    opacity: 1,
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
