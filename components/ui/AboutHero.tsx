import Link from "next/link";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end">

          {/* Left: Text content */}
          <div className="flex-1 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pb-28 lg:pr-12">
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
              <span style={{ color: "var(--color-gold)" }}>Ecom Wizards</span>
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
              <Link href="/book-shopify-consultation" className="btn-gold-outline">
                Book a Free Consultation
                <span aria-hidden="true">→</span>
              </Link>
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
