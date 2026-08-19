import { inline } from "./Prose";
import type { Trust } from "@/lib/geo/types";

// Trust bar, matching section 2 of the Shopify development landing page: a
// centered heading and one supporting line above an infinite logo marquee.
//
// The same eight real client logos the landing page uses. These are the
// verified set from the July 2026 integrity pass; do not add a logo here for a
// brand that is not a client, and do not add one whose file is not already in
// public/images/Case studies/logos.
const CLIENT_LOGOS = [
  { src: "/images/Case%20studies/logos/111skin%20logo.png", alt: "111SKIN" },
  { src: "/images/Case%20studies/logos/Candy%20Kittens.webp", alt: "Candy Kittens" },
  { src: "/images/Case%20studies/logos/NEOM%20Wellbeing.png", alt: "NEOM Wellbeing" },
  { src: "/images/Case%20studies/logos/Ronaldo%20Jewelry.avif", alt: "Ronaldo Jewelry" },
  { src: "/images/Case%20studies/logos/Wild.svg", alt: "Wild" },
  { src: "/images/Case%20studies/logos/Everlast.png", alt: "Everlast" },
  { src: "/images/Case%20studies/logos/Saddleback.svg", alt: "Saddleback" },
  { src: "/images/Case%20studies/logos/Twillory.png", alt: "Twillory" },
];

export default function TrustBar({ trust }: { trust: Trust }) {
  return (
    <section className="gpt" aria-label="Brands that trust Ecomm Wizards">
      <div className="gpt-inner">
        <h2 className="gpt-h2">{inline(trust.heading)}</h2>
        <p className="gpt-sub">{inline(trust.subheading)}</p>

        {/* The list is rendered twice so the marquee loops without a seam. The
            second pass is hidden from assistive tech so logos are not
            announced twice. */}
        <div className="gpt-marquee">
          <ul className="gpt-track">
            {CLIENT_LOGOS.map((l) => (
              <li key={l.alt} className="gpt-slide">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.alt} className="gpt-logo" width={200} height={80} loading="lazy" decoding="async" />
              </li>
            ))}
            {CLIENT_LOGOS.map((l) => (
              <li key={`${l.alt}-dup`} className="gpt-slide" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt="" className="gpt-logo" width={200} height={80} loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .gpt { background: #ffffff; font-family: 'Poppins', sans-serif; }
        .gpt-inner { max-width: 1320px; margin: 0 auto; padding: 48px 20px; }
        .gpt-h2 { font-size: clamp(22px, 2.4vw, 30px); font-weight: 700; color: #0f172a; line-height: 1.3; text-align: center; margin: 0; text-wrap: balance; }
        .gpt-sub { font-size: 16px; color: #334155; line-height: 1.6; text-align: center; margin: 10px auto 0; max-width: 860px; }

        .gpt-marquee { margin-top: 20px; width: 100%; overflow: hidden; }
        .gpt-track { list-style: none; margin: 0; padding: 0; display: flex; align-items: center; gap: 40px; width: max-content; animation: gptScroll 32s linear infinite; }
        .gpt-marquee:hover .gpt-track { animation-play-state: paused; }
        .gpt-slide { flex: 0 0 auto; display: flex; align-items: center; justify-content: center; }
        .gpt-logo { height: 56px; width: auto; max-width: 190px; object-fit: contain; display: block; }
        @keyframes gptScroll { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }

        @media (max-width: 640px) {
          .gpt-inner { padding: 40px 18px; }
          .gpt-sub { font-size: 14px; }
          .gpt-track { gap: 16px; }
          .gpt-logo { height: 36px; max-width: 120px; }
        }
        /* A moving strip is decorative. If motion is unwelcome, hold it still
           and let the row scroll by hand instead. */
        @media (prefers-reduced-motion: reduce) {
          .gpt-track { animation: none; }
          .gpt-marquee { overflow-x: auto; }
        }
      `,
        }}
      />
    </section>
  );
}
