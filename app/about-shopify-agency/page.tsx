import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AboutHero from "@/components/ui/AboutHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import BrandLogos from "@/components/ui/BrandLogos";

export const metadata: Metadata = {
  title: "About Ecomm Wizards | Leading Shopify Plus Agency",
  description: "Ecomm Wizards is a leading Shopify Plus agency with 8+ years of experience and $900M+ in client revenue. Meet the team behind 700+ successful Shopify stores.",
};

const STATS = [
  { value: "700+",  label: "Shopify Stores Built" },
  { value: "$900M+", label: "Client Revenue" },
  { value: "8+",    label: "Years Experience" },
  { value: "100%",  label: "Satisfaction Guarantee" },
];

const VALUES = [
  {
    title: "100% Satisfaction Guarantee",
    desc: "We stand behind every project we deliver. If you're not satisfied, we make it right — no excuses.",
  },
  {
    title: "Result-Oriented Approach",
    desc: "We don't measure success by deliverables. We measure it by revenue, conversions, and growth for your brand.",
  },
  {
    title: "A Hub for Innovative Minds",
    desc: "Our team continuously trains on Shopify Plus features, AI tools, and conversion psychology — staying ahead so you don't have to.",
  },
  {
    title: "Ownership Mentality",
    desc: "Every project is treated like it's our own brand. No shortcuts. No templates. No recycled strategies.",
  },
];

const JOURNEY = [
  { year: "2018", title: "Founded",          desc: "Started as a boutique Shopify development shop focused on high-converting custom themes." },
  { year: "2019", title: "First 50 Stores",  desc: "Grew rapidly through referrals, building a reputation for speed and quality." },
  { year: "2021", title: "Shopify Plus Partner", desc: "Became an official Shopify Plus Partner, unlocking enterprise-grade capabilities." },
  { year: "2023", title: "500+ Stores",      desc: "Passed 500 successful store launches with $500M+ in client revenue tracked." },
  { year: "2026", title: "700+ Stores",      desc: "Now a multi-award-winning agency with $900M+ in client revenue and a global team." },
];

const TEAM = [
  { name: "Brook Sanderson",    role: "CEO & Founder",           photo: "/images/Brooke_06ed70b4-ed6c-424a-a067-cd3985d1d53a.webp" },
  { name: "Jake Amos",          role: "Head of Development",     photo: "/images/Jack.webp" },
  { name: "Truc Peter",         role: "Lead Designer",           photo: "/images/truc_3cf9e54f-2814-4e5c-8095-b741b24e790d.webp" },
  { name: "Giana Moretti",      role: "CRO Strategist",          photo: "/images/Giana.webp" },
  { name: "Anthony Spallone",   role: "Shopify Plus Specialist", photo: "/images/Anthony_b22b2509-6844-4fb7-9f9c-2b601cd1d475.webp" },
  { name: "Julia Matviichuk",   role: "SEO Lead",                photo: "/images/Julia_Matviichuk.webp" },
  { name: "Caroline Jay",       role: "Client Success Manager",  photo: "/images/Caroline.webp" },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandLogos />

      {/* Stats */}
      <section className="border-b border-slate-100 bg-white py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-4xl font-extrabold text-slate-700">{s.value}</dt>
                <dd className="mt-1 text-sm text-slate-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                badge="Our Mission"
                title="We Don't Just Build Shopify Stores — We Build Revenue Machines"
                centered={false}
              />
              <p className="text-slate-500 leading-relaxed">
                At Ecomm Wizards, we believe that every ecommerce brand deserves a store that works as
                hard as they do. That means obsessing over conversion rates, page speed, UX design,
                and the full customer journey — not just shipping code.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                We don&apos;t just build Shopify stores — we build revenue machines. Our team of strategists,
                designers, developers, and growth experts work together on every project to deliver
                measurable outcomes, not just deliverables.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/free-shopify-store-audit" className="btn-primary">Get a Free Audit</Link>
                <Link href="/services" className="btn-outline">Our Services</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {VALUES.map((v) => (
                <div key={v.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-700 text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">{v.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-slate-700 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1
            text-xs font-semibold uppercase tracking-widest text-slate-200">Our Culture</span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            The Culture Behind Our High-Performance Shopify Agency
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-300 leading-relaxed">
            We believe excellence compounds. Our team continuously trains on the latest Shopify Plus
            features, ecommerce trends, AI tools, and conversion psychology frameworks. We foster a
            culture of ownership — every Shopify project is treated like it&apos;s our own brand.
            No shortcuts. No templates. No recycled strategies.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Journey"
            title="8 Years of Compounding Impact as a Shopify Agency"
            subtitle="From a small team to a multi-award winning agency — here's how we got here."
          />
          <div className="relative ml-4 border-l-2 border-slate-100 pl-8 space-y-10">
            {JOURNEY.map((j) => (
              <div key={j.year} className="relative">
                <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center
                  rounded-full bg-slate-700 text-xs font-bold text-white ring-4 ring-white">
                  {j.year.slice(2)}
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">{j.year}</span>
                <h3 className="mt-1 text-lg font-bold text-slate-800">{j.title}</h3>
                <p className="mt-1 text-slate-500">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Team"
            title="The Multi Award Winning Team at Ecomm Wizards"
            subtitle="Strategists, designers, developers, and growth experts — all under one roof."
          />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {TEAM.map((member) => (
              <div key={member.name}
                className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image src={member.photo} alt={member.name} fill className="object-cover" />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-800">{member.name}</p>
                <p className="mt-0.5 text-xs text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Get your Free UX + UI Shopify Audit"
        subheading="We'll show you exactly where you're losing revenue and how to fix it — no commitment required."
      />
    </>
  );
}
