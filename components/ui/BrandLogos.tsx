import Image from "next/image";

const BRANDS = [
  { src: "/images/Calvin-Klein-logo.png-1.png",  alt: "Calvin Klein",  w: 120 },
  { src: "/images/LVMH-logo.png-1.png",           alt: "LVMH",          w: 80  },
  { src: "/images/Logo-AriZona.png-1.png",        alt: "AriZona",       w: 100 },
  { src: "/images/Logo-Khaite.png-1.png",         alt: "Khaite",        w: 100 },
  { src: "/images/Olaplex-logo-new.avif",         alt: "Olaplex",       w: 110 },
  { src: "/images/P448-logo.png-1.png",           alt: "P448",          w: 80  },
  { src: "/images/Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif", alt: "Lids", w: 80 },
  { src: "/images/schutz-logo.png-2.png",         alt: "Schutz",        w: 100 },
];

interface BrandLogosProps {
  heading?: string;
  dark?: boolean;
}

export default function BrandLogos({ heading = "Trusted by the World's Most Innovative Brands", dark = false }: BrandLogosProps) {
  return (
    <section className={`py-14 ${dark ? "bg-slate-800" : "bg-slate-50"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <p className={`mb-8 text-center text-xs font-semibold uppercase tracking-widest ${dark ? "text-slate-400" : "text-slate-400"}`}>
            {heading}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {BRANDS.map((b) => (
            <div key={b.alt} className="flex items-center justify-center">
              <Image
                src={b.src}
                alt={b.alt}
                width={b.w * 2}
                height={60}
                className={`h-8 w-auto object-contain ${dark ? "brightness-0 invert opacity-60 hover:opacity-100" : "opacity-50 hover:opacity-80"} transition-opacity`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
