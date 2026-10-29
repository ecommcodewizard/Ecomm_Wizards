import type { Metadata } from "next";
import CTASection from "@/components/ui/CTASection";
import { listPosts } from "@/lib/blog/cms";
import { CASE_STUDIES } from "@/lib/case-studies";
import Editorial from "./Editorial";

// Rendered on demand and then cached for five minutes, rather than built into
// the site at deploy time. Two reasons: a deploy would otherwise need database
// access (CI does not have it), and an article published in the CMS should
// appear without waiting for a rebuild. Publishing also revalidates this path
// directly, so the five minutes is only a backstop.
export const revalidate = 300;

const PAGE_TITLE = "Shopify Insights: Design, SEO, Email & AI Commerce | Ecomm Wizards";
const PAGE_DESCRIPTION =
  "Practical guides on Shopify design, development, SEO, AEO and GEO, email and agentic commerce, written by the team building and growing Shopify stores.";
const PAGE_URL = "https://ecommwizards.com/insights";
const OG_IMAGE = "/images/main-hero-f-desktop.webp";

export async function generateMetadata(): Promise<Metadata> {
  // The old hard-coded noindex existed because the page listed sample posts
  // whose articles did not exist, so every card was a dead link. Those are
  // gone, but an EMPTY listing is just as bad a thing to offer Google — so the
  // rule now follows reality: index it once there is something on it.
  const posts = await listPosts();
  return {
    ...metadataBase,
    robots: posts.length
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

const metadataBase: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Ecomm Wizards",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Ecomm Wizards Shopify insights" }],
  },
  twitter: { card: "summary_large_image", title: PAGE_TITLE, description: PAGE_DESCRIPTION, images: [OG_IMAGE] },
};

// Real, signed-off client quotes. The two shortest read best as cards.
const QUOTES = CASE_STUDIES.filter((c) => c.quote && c.quotePerson)
  .map((c) => ({ text: c.quote!, person: c.quotePerson!, role: c.quoteRole ?? c.brandName }))
  .sort((a, b) => a.text.length - b.text.length)
  .slice(0, 2);

export default async function BlogPage() {
  // Read times are computed from the article body in lib/blog/cms.ts, so a
  // card always reports the real length rather than a guess.
  const posts = await listPosts();

  return (
    <>
      <section className="ed">
        <div className="ed-wrap">
          <p className="ed-eyebrow">Ecomm Wizards / Insights</p>
          <h1 className="ed-h1">
            What&apos;s working in commerce, <em>right now.</em>
          </h1>
          <Editorial posts={posts} quotes={QUOTES} />
        </div>
      </section>
      <CTASection
        heading="Want this done on your store?"
        subheading="Book a free call. We'll look at your store and tell you what we'd fix first."
        background="#000"
        primaryWhite
        secondaryGradient
      />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
    </>
  );
}

const SERIF = `"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif`;

const CSS = `
.ed{background:#0c0d0c;padding:88px 40px 128px;color:#fff}
.ed-wrap{max-width:1760px;margin:0 auto}
.ed-eyebrow{margin:0 0 20px;color:rgba(255,255,255,.5);font-size:13px;letter-spacing:.04em}
.ed-h1{margin:0 0 40px;color:#fff;max-width:1000px;font-weight:300;font-size:clamp(40px,6.2vw,88px);line-height:1.02;letter-spacing:-.04em}
.ed-h1 em{font-family:${SERIF};font-style:italic;font-weight:400;letter-spacing:-.02em;background:var(--brand-gradient);-webkit-background-clip:text;background-clip:text;color:transparent;padding-right:.08em}

.ed-bar{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:28px}
.ed-pills{display:flex;flex-wrap:wrap;gap:8px}
.ed-pills button{padding:7px 14px;border:0;border-radius:9999px;background:rgba(255,255,255,.08);color:rgba(255,255,255,.75);font:inherit;font-size:13px;cursor:pointer;transition:background-color .18s ease,color .18s ease}
.ed-pills button:hover{background:rgba(255,255,255,.16);color:#fff}
.ed-pills button[aria-pressed="true"]{background:#fff;color:#000;font-weight:600}
.ed-search{flex:0 0 220px;padding:9px 16px;border:1px solid rgba(255,255,255,.18);border-radius:9999px;background:transparent;color:#fff;font:inherit;font-size:13px;outline:0}
.ed-search::placeholder{color:rgba(255,255,255,.45)}
.ed-search:focus{border-color:#3DC77A}

.ed-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-flow:dense;gap:44px 20px}
.ed-card,.ed-card:hover,.ed-card:visited,.ed-card:focus,.ed-card:active{display:flex;flex-direction:column;overflow:hidden;border-radius:20px;background:#191a19;border:1px solid rgba(255,255,255,.06);color:#fff;text-decoration:none;transition:transform .45s cubic-bezier(.2,.7,.2,1),border-color .3s ease}
.ed-card:hover,.ed-card:focus-visible{transform:translateY(-4px);border-color:rgba(61,199,122,.45)}
/* LANDSCAPE, BECAUSE THE PHOTOS ARE LANDSCAPE. This box used to be 1/1.1 —
   taller than wide — while the article it links to shows the same photo in a
   16/7 band. Nothing can fill both, so cover-fit silently cut the difference:
   a 1589x640 banner showed 37% of its width here, a 4:3 photo 68%. At 3/2 a
   normal wide photo arrives nearly whole, and the card stops being 400px of
   cropped image on a phone. */
.ed-img{position:relative;display:block;aspect-ratio:3/2;overflow:hidden;background:#222}
.ed-img img{object-fit:cover;filter:grayscale(1) contrast(1.05);transition:filter .5s ease,transform .7s cubic-bezier(.2,.7,.2,1)}
.ed-card:hover .ed-img img{filter:none;transform:scale(1.04)}
@media (hover:none){.ed-img img{filter:none}}
.ed-tag{position:absolute;top:16px;left:16px;padding:6px 14px;border-radius:9999px;background:rgba(0,0,0,.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);font-size:13px}
.ed-text{display:flex;flex-direction:column;gap:12px;padding:22px 22px 30px}
.ed-title{font-size:clamp(20px,1.55vw,26px);font-weight:500;line-height:1.25;letter-spacing:-.025em}
.ed-excerpt{color:rgba(255,255,255,.55);font-size:14px;line-height:1.55}

.ed-quote{display:flex;flex-direction:column;justify-content:space-between;gap:40px;margin:0;padding:40px 36px;border-radius:20px;background:#151615;border:1px solid rgba(255,255,255,.06);position:relative;overflow:hidden}
.ed-quote::before{content:"";position:absolute;inset:auto -30% -40% auto;width:70%;aspect-ratio:1;background:radial-gradient(circle,rgba(61,199,122,.18),transparent 65%);pointer-events:none}
.ed-quote.is-wide{grid-column:span 2}
.ed-quote blockquote{margin:0;font-weight:300;font-size:clamp(28px,3.1vw,48px);line-height:1.12;letter-spacing:-.035em}
.ed-quote:not(.is-wide) blockquote{font-size:clamp(24px,2.1vw,32px);line-height:1.15}
.ed-quote figcaption{display:flex;flex-direction:column;gap:4px;font-size:18px}
.ed-quote em{font-family:${SERIF};font-size:17px;color:rgba(255,255,255,.55)}
.ed-empty{padding:48px 0;color:rgba(255,255,255,.7)}
.ed-empty button{border:0;background:none;padding:0;font:inherit;color:#fff;font-weight:600;text-decoration:underline;cursor:pointer}

@media (max-width:1023px){
  .ed{padding:72px 24px 104px}
  .ed-grid{grid-template-columns:repeat(2,1fr)}
  .ed-bar{flex-direction:column;align-items:stretch}
  .ed-search{flex-basis:auto}
}
@media (max-width:639px){
  .ed{padding:56px 16px 80px}
  .ed-grid{grid-template-columns:1fr;gap:28px}
  .ed-quote.is-wide{grid-column:1/-1}
  .ed-quote{padding:28px 24px}
  .ed-quote:not(.is-wide){grid-column:1/-1}
  .ed-text{padding:20px 20px 26px}
  .ed-pills{flex-wrap:nowrap;overflow-x:auto;margin:0 -16px;padding:0 16px;scrollbar-width:none}
  .ed-pills::-webkit-scrollbar{display:none}
  .ed-pills button{white-space:nowrap}
}
`;
