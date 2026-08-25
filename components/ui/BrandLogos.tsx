import Image from "next/image";

// Real client logos (owner-supplied, /images/Case studies/logos). Replaced the
// famous-brand logos (Calvin Klein, LVMH, Olaplex, AriZona, Khaite, P448, Lids,
// Schutz) that were presented as clients but are not case-study clients.
const L = "/images/Case%20studies/logos";
const BRANDS = [
  { src: `${L}/111skin%20logo.png`,           alt: "111SKIN",        w: 120 },
  { src: `${L}/Candy%20Kittens.webp`,          alt: "Candy Kittens",  w: 130 },
  { src: `${L}/NEOM%20Wellbeing.png`,          alt: "NEOM Wellbeing", w: 130 },
  { src: `${L}/Ronaldo%20Jewelry.avif`,        alt: "Ronaldo Jewelry",w: 120 },
  { src: `${L}/Wild.svg`,                      alt: "Wild",           w: 90  },
  { src: `${L}/Saddleback.svg`,                alt: "Saddleback",     w: 120 },
  { src: `${L}/Twillory.png`,                  alt: "Twillory",       w: 110 },
  { src: `${L}/Dryrobe.svg`,                   alt: "Dryrobe",        w: 120 },
  { src: `${L}/John_Hardy.svg`,               alt: "John Hardy",     w: 120 },
  { src: `${L}/Loop_Earplugs.svg`,            alt: "Loop Earplugs",  w: 120 },
  { src: `${L}/ChloBo.svg`,                    alt: "ChloBo",         w: 100 },
  { src: `${L}/SNEAK%20Energy.svg`,           alt: "Sneak Energy",   w: 110 },
  { src: `${L}/this-works-logo.png`,          alt: "This Works",     w: 120 },
  { src: `${L}/Capelli-Sport-Plus-Logo.webp`, alt: "Capelli Sports", w: 120 },
  { src: `${L}/feetures.svg`,                 alt: "Feetures",       w: 110 },
  { src: `${L}/evielou_logo.svg`,             alt: "Evie Lou",       w: 110 },
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
                overrideSrc={b.src}
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
