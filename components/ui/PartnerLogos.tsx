import Image from "next/image";

const PARTNERS = [
  { src: "/images/shopify-plus.svg",                                    alt: "Shopify Plus",   w: 120 },
  { src: "/images/64f0a5e309c841126c840791_klaviyo-300x89-1.png",       alt: "Klaviyo",        w: 100 },
  { src: "/images/64f098c0e38dec3a384cb182_rebuy.svg",                  alt: "Rebuy",          w: 80  },
  { src: "/images/64f098d045e1c6882b3f1871_recharge-300x59-1.png",      alt: "Recharge",       w: 100 },
  { src: "/images/64f0a5d44229c4e2b2495658_okendo-300x65-1.png",        alt: "Okendo",         w: 90  },
  { src: "/images/65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg", alt: "Gorgias", w: 90 },
  { src: "/images/triple-whale.svg",                                     alt: "Triple Whale",   w: 100 },
  { src: "/images/yotpo.svg",                                            alt: "Yotpo",          w: 80  },
  { src: "/images/64f0acefdb8f59708c94d775_wonderment-300x56-1.png",    alt: "Wonderment",     w: 110 },
];

interface PartnerLogosProps {
  heading?: string;
}

export default function PartnerLogos({ heading = "We partner with the best Shopify apps" }: PartnerLogosProps) {
  return (
    <section className="py-12 border-y border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            {heading}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {PARTNERS.map((p) => (
            <div key={p.alt} className="flex items-center justify-center">
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w * 2}
                height={60}
                className="h-7 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
