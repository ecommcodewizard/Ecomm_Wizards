import Link from "next/link";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center">

          {/* Left: Text content */}
          <div className="flex-1 pt-0 pb-16 sm:pt-16 sm:pb-20 lg:pt-12 lg:pb-28 lg:pr-12">
            <h1
              className="font-bold leading-tight"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(32px, 4vw, 42px)",
                lineHeight: "1.2",
                color: "#ffffff",
              }}
            >
              About{" "}
              <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Ecom Wizards</span>
              <br />
              A Leading Shopify Plus Agency
            </h1>

            <p
              className="mt-6 text-white"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "16px",
                lineHeight: "1.75",
                maxWidth: "560px",
                opacity: 0.9,
              }}
            >
              We&apos;re a global Shopify Plus agency helping ambitious ecommerce
              brands design, develop, and scale high-performance Shopify and
              Shopify Plus stores.
            </p>

            <div className="mt-8">
              <span className="inline-flex p-[2px] rounded-full shrink-0" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
                <Link
                  href="/book-shopify-consultation"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white transition-all hover:bg-white hover:text-black px-7 py-3.5"
                  style={{ fontFamily: "var(--font-sans)", fontSize: "16px", fontWeight: 600 }}
                >
                  Book a Free Consultation →
                </Link>
              </span>
            </div>
          </div>

          {/* Right: Image with purple glow */}
          <div className="relative flex-shrink-0 flex items-end justify-center lg:justify-end w-full lg:w-auto lg:max-w-[480px] xl:max-w-[520px] pb-0">
            {/* Purple / lavender glow behind the figure */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 65% at 50% 50%, rgba(120, 90, 200, 0.55) 0%, rgba(100, 70, 180, 0.25) 45%, transparent 75%)",
              }}
            />

            <Image
              src="/images/about_main_image_1024x1024.webp"
              alt="About Ecomm Wizards"
              width={451}
              height={576}
              priority
              className="relative z-10 object-contain w-full max-w-[360px] sm:max-w-[400px] lg:max-w-full"
              style={{ display: "block" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
