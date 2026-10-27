import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/ui/CTASection";
import { topicOf } from "@/lib/blog/posts";
import { getPost, listPosts } from "@/lib/blog/cms";
import ArticleContent from "@/components/blog/ArticleContent";
import { RichText } from "@payloadcms/richtext-lexical/react";
import ArticleNav from "./ArticleNav";
import ShareLinks from "./ShareLinks";

const SITE = "https://ecommwizards.com";

// Rendered on demand, then cached. Previously every article was baked into the
// build from a fixed list, which cannot work once articles live in a database:
// a deploy would need database access, and a newly published article would not
// appear until the next deploy. getPost returns null for anything unpublished
// or non-existent, so unknown slugs still 404 exactly as before.
export const revalidate = 300;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const found = await getPost((await params).slug);
  if (!found) return {};
  const { post, article } = found;
  const url = `${SITE}/insights/${post.slug}`;
  return {
    title: { absolute: `${post.title} | Ecomm Wizards` },
    description: article.summary,
    alternates: { canonical: url },
    // The noindex that used to sit here was for the placeholder articles, which
    // are gone. Anything reaching this point is a real, published article, and
    // an unpublished one never renders at all — getPost filters on status.
    openGraph: {
      type: "article",
      url,
      siteName: "Ecomm Wizards",
      title: post.title,
      description: article.summary,
      publishedTime: post.date,
      modifiedTime: article.updated ?? post.date,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
    twitter: { card: "summary_large_image", title: post.title, description: article.summary, images: post.image ? [post.image] : undefined },
  };
}

const fmt = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
const date = (iso: string) => fmt.format(new Date(iso));

// The **bold** / [label](/href) helper that used to live here is gone: inline
// formatting and links are now the editor's job, and it stored them properly
// rather than as markdown inside a text field.

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const found = await getPost((await params).slug);
  if (!found) notFound();
  const { post, article } = found;
  const topic = topicOf(post.topic);
  const mins = post.readMins;
  const url = `${SITE}/insights/${post.slug}`;
  // Built from the body's H2s in lib/blog/cms.ts, and suppressible per article
  // for short pieces where a contents list is longer than the piece itself.
  const toc = [
    ...(article.showTableOfContents ? article.toc : []),
    ...(article.faqs.length ? [{ id: "faqs", title: "FAQs" }] : []),
  ];
  const updated = article.updated ?? post.date;
  // An edit only counts as an update if it happened after the article went
  // live. Publish dates can be set by hand, so "updated" is not automatically
  // the later of the two.
  const showUpdated = Boolean(article.updated) && updated > post.date;

  // Same topic first, then the newest of the rest. listPosts already returns
  // published posts newest-first, so this only needs to reorder by topic.
  const all = await listPosts();
  const related = [...all.filter((p) => p.topic === post.topic), ...all.filter((p) => p.topic !== post.topic)]
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: article.summary,
      image: post.image ? `${SITE}${post.image}` : undefined,
      datePublished: post.date,
      dateModified: article.updated ?? post.date,
      author: { "@id": `${SITE}/#organization` },
      publisher: {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "Ecomm Wizards",
        url: SITE,
        logo: { "@type": "ImageObject", url: `${SITE}/images/ecomm-green.png`, width: 636, height: 457 },
      },
      mainEntityOfPage: url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE}/insights` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
    article.faqs.length && {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      // answerText is the plain-text form of the same answer the page shows.
      // Google wants text here, not markup.
      mainEntity: article.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answerText } })),
    },
  ].filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="ar-hero" id="top">
        <div className="ar-hero-in">
          <nav className="ar-crumbs" aria-label="Breadcrumb">
            <Link href="/insights">Insights</Link>
            <span aria-hidden="true">/</span>
            <span>{topic.label}</span>
          </nav>
          <h1 className="ar-h1">{post.title}</h1>
          <p className="ar-summary">{article.summary}</p>
          <div className="ar-meta">
            <span className="ar-author">
              <span className="ar-avatar" aria-hidden="true">
                <Image src="/images/ecomm-green-logo-cropped.png" alt="" width={86} height={79} />
              </span>
              <span>
                <small>Published by</small>
                {/* The real byline from the CMS. This used to render
                    "EW {topic.specialist}" — a persona invented from the
                    category, shown regardless of who actually wrote the piece
                    and even when no author was set at all. post.author falls
                    back to "Ecomm Wizards", which is true, rather than to a
                    job title nobody holds. */}
                <b>{post.author}</b>
              </span>
            </span>
            <span className="ar-facts">
              <span>
                <small>Published</small>
                <time dateTime={post.date}>{date(post.date)}</time>
              </span>
              {/* Only when the article has genuinely been revised since
                  publication. A publish date set by hand can sit after the last
                  edit, which made the page claim it was "last updated" before
                  it existed. */}
              {showUpdated && (
                <span>
                  <small>Last updated</small>
                  <time dateTime={updated}>{date(updated)}</time>
                </span>
              )}
              <span>
                <small>Read time</small>
                {mins} min
              </span>
            </span>
          </div>
        </div>
      </header>

      {post.image && (
        <div className="ar-cover">
          <Image src={post.image} alt="" fill priority sizes="(min-width: 1360px) 1280px, 94vw" />
        </div>
      )}

      <div className="ar-body">
        <aside className="ar-toc">
          <ArticleNav items={toc} readMins={mins} />
        </aside>

        <article className="ar-main" id="article-body">
          {/* Both optional now, so each is hidden rather than rendered empty. */}
          {article.answer && (
            <section className="ar-answer" aria-labelledby="short-answer">
              <h2 id="short-answer">The short answer</h2>
              <p>{article.answer}</p>
            </section>
          )}

          {article.takeaways.length > 0 && (
            <section className="ar-take" aria-labelledby="takeaways">
              <h2 id="takeaways">Key takeaways</h2>
              <ul>
                {article.takeaways.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </section>
          )}

          {/* The body as written in the CMS editor. Its H2s carry the ids the
              contents list links to. */}
          <div className="ar-sec">
            <ArticleContent content={article.content} />
          </div>

          <p className="ar-updated">
            Last updated <time dateTime={updated}>{date(updated)}</time>
          </p>
        </article>

        <aside className="ar-rail">
          <div className="ar-rail-in">
            <div className="ar-help">
              <span className="ar-help-label">{topic.label}</span>
              <p className="ar-help-title">Want us to do this for your store?</p>
              <p className="ar-help-text">Book a free call and we&apos;ll look at your store together.</p>
              <Link href="/book-shopify-consultation" className="ar-help-btn">Book a free call</Link>
              <Link href={topic.service.href} className="ar-help-link">
                See our {topic.service.label}&nbsp;service&nbsp;<span aria-hidden="true">→</span>
              </Link>
            </div>
            <ShareLinks url={url} title={post.title} />
          </div>
        </aside>
      </div>

      {article.faqs.length > 0 && (
        <section className="ar-faq" aria-labelledby="faqs">
          <div className="ar-faq-in">
            <h2 id="faqs" className="ar-faq-h">
              Questions, <em>answered.</em>
            </h2>
            <div className="ar-faq-list">
              {article.faqs.map((f, i) => (
                <details key={i} name="faq">
                  <summary>{f.question}</summary>
                  <RichText data={f.answer} />
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="ar-more" aria-labelledby="more">
        <div className="ar-more-in">
          <div className="ar-more-head">
            <h2 id="more">Keep reading</h2>
            <Link href="/insights">All insights <span aria-hidden="true">→</span></Link>
          </div>
          <div className="ar-more-grid">
            {related.map((p) => (
              <Link key={p.slug} href={`/insights/${p.slug}`} className="ar-card">
                <span className="ar-card-img">
                  {p.image && <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 400px, 100vw" />}
                  <span className="ar-card-tag">{topicOf(p.topic).label}</span>
                </span>
                <span className="ar-card-title">{p.title}</span>
              </Link>
            ))}
          </div>
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
.ar-hero,.ar-body,.ar-faq,.ar-more{--hdr:100px}
@media (min-width:640px){.ar-hero,.ar-body,.ar-faq,.ar-more{--hdr:70px}}
@media (min-width:768px){.ar-hero,.ar-body,.ar-faq,.ar-more{--hdr:100px}}
@media (min-width:1024px){.ar-hero,.ar-body,.ar-faq,.ar-more{--hdr:86px}}
@media (min-width:1280px){.ar-hero,.ar-body,.ar-faq,.ar-more{--hdr:96px}}

/* Hero */
.ar-hero{position:relative;overflow:hidden;background:#0c0d0c;color:#fff;padding:72px 20px 220px}
.ar-hero::before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 50% 60% at 50% 0%,rgba(61,199,122,.22),transparent 70%)}
.ar-hero-in{position:relative;max-width:960px;margin:0 auto;text-align:center}
.ar-crumbs{display:flex;justify-content:center;gap:10px;margin-bottom:28px;font-size:13px;color:rgba(255,255,255,.55)}
.ar-crumbs a,.ar-crumbs a:visited{color:rgba(255,255,255,.55);text-decoration:none}
.ar-crumbs a:hover{color:#fff}
.ar-crumbs span:last-child{color:#fff}
.ar-h1{margin:0 auto 24px;max-width:900px;color:#fff;font-weight:400;font-size:clamp(36px,5.4vw,72px);line-height:1.05;letter-spacing:-.035em;text-wrap:balance}
.ar-summary{max-width:680px;margin:0 auto 40px;color:rgba(255,255,255,.7);font-size:clamp(17px,1.4vw,20px);line-height:1.6}
.ar-meta{display:inline-flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:20px 40px;padding:18px 28px;border:1px solid rgba(255,255,255,.12);border-radius:20px;background:rgba(255,255,255,.03);text-align:left}
.ar-author{display:flex;align-items:center;gap:12px}
.ar-author b{display:block;margin-top:2px;font-size:15px;font-weight:600}
.ar-author small,.ar-facts small{display:block;font-size:12px;color:rgba(255,255,255,.5)}
.ar-avatar{display:grid;place-items:center;flex:0 0 auto;width:44px;height:44px;border-radius:50%;background:#000;border:1px solid rgba(255,255,255,.16)}
.ar-avatar img{width:24px;height:auto}
.ar-facts{display:flex;flex-wrap:wrap;gap:12px 32px;font-size:14px}

/* Cover image overlaps the hero */
.ar-cover{position:relative;max-width:1280px;width:calc(100% - 40px);aspect-ratio:16/7;margin:-176px auto 0;border-radius:24px;overflow:hidden;background:#1a1b1a;box-shadow:0 40px 80px -40px rgba(0,0,0,.5)}
.ar-cover img{object-fit:cover}

/* Body: contents | article | help rail */
.ar-body{display:grid;grid-template-columns:240px minmax(0,720px) 280px;justify-content:center;gap:64px;max-width:1440px;margin:0 auto;padding:80px 40px 72px}
.ar-toc,.ar-rail{position:relative}
.ar-rail-in{position:sticky;top:calc(var(--hdr) + 32px);display:grid;gap:20px}

/* Contents nav */
.an{position:sticky;top:calc(var(--hdr) + 32px)}
.an-bar{display:none}
.an-panel{padding:24px;border-radius:20px;background:#0c0d0c;color:#fff}
@media (min-width:1024px){.an-panel{max-height:calc(100vh - var(--hdr) - 64px);overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.2) transparent}}
.an-head{color:#fff;font-size:inherit;line-height:1.3;display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin:0 0 12px}
.an-label{font-family:${SERIF};font-size:19px}
.an-left{font-size:12px;color:rgba(255,255,255,.55);white-space:nowrap;font-variant-numeric:tabular-nums}
.an-progress{display:block;height:2px;margin-bottom:16px;background:rgba(255,255,255,.12);border-radius:2px;overflow:hidden}
.an-progress span,.an-bar-progress{display:block;height:100%;background:var(--brand-gradient);transform-origin:left;transition:transform .15s linear}
.an-list{margin:0 0 18px;padding:0;list-style:none;display:grid;gap:2px}
.an-list a,.an-list a:visited{display:block;padding:7px 0 7px 14px;border-left:2px solid rgba(255,255,255,.1);color:rgba(255,255,255,.55);font-size:14px;line-height:1.35;text-decoration:none;transition:color .15s ease,border-color .15s ease}
.an-list a:hover{color:#fff}
.an-list a[aria-current]{color:#fff;font-weight:500;border-left-color:#3DC77A}
.an-top,.an-top:visited{font-size:13px;color:rgba(255,255,255,.55);text-decoration:none}
.an-top:hover{color:#fff}

/* Article typography */
.ar-main{min-width:0;color:#2b302c;font-size:18px;line-height:1.75}
.ar-main p{margin:0 0 22px;font-size:inherit;line-height:inherit;color:inherit}
.ar-main a:not(.ar-anchor),.ar-main a:not(.ar-anchor):visited{color:#000;text-decoration:underline;text-decoration-color:#3DC77A;text-decoration-thickness:2px;text-underline-offset:3px}
.ar-main a:not(.ar-anchor):hover{text-decoration-color:#000}
/* Only internal links are underlined; external links read as plain text until hovered */
.ar-main a[target="_blank"],.ar-main a[target="_blank"]:visited{color:inherit;text-decoration:none}
.ar-main a[target="_blank"]:hover,.ar-main a[target="_blank"]:focus-visible{text-decoration:underline;text-decoration-color:currentColor;text-decoration-thickness:1px}
.ar-main strong{color:#000;font-weight:600}

/* Tables. Comparison tables are a staple of these articles, and the body had
   no styling for them at all, so one would have rendered as unstyled rows.
   The wrapper scrolls horizontally rather than letting a wide table either
   overflow the page or squeeze its columns into unreadable slivers on a
   phone. */
.ar-main table{width:100%;margin:0 0 26px;border-collapse:collapse;font-size:16px;line-height:1.5}
.ar-main table th,.ar-main table td{padding:12px 14px;border:1px solid #e3e7e4;text-align:left;vertical-align:top}
.ar-main table th{background:#0c0d0c;color:#fff;font-weight:600;font-size:15px;letter-spacing:-.01em}
.ar-main table tr:nth-child(even) td{background:#f6f8f7}
.ar-main table p{margin:0}
/* Lexical wraps tables in a scroll container; style it whatever it is called. */
.ar-main .lexical-table-container,.ar-main .payload-richtext table{max-width:100%;overflow-x:auto}
@media (max-width:639px){
  .ar-main table{font-size:15px;display:block;overflow-x:auto;white-space:nowrap}
  .ar-main table th,.ar-main table td{padding:10px 12px}
}
.ar-sec{margin-top:64px}
.ar-sec h2{position:relative;margin:0 0 24px;color:#000;font-weight:500;font-size:clamp(28px,2.6vw,40px);line-height:1.15;letter-spacing:-.03em;text-wrap:balance;scroll-margin-top:calc(var(--hdr) + 32px)}
.ar-anchor,.ar-anchor:visited{position:absolute;left:-1em;width:1em;color:#3DC77A;text-decoration:none;opacity:0;transition:opacity .15s ease}
.ar-sec h2:hover .ar-anchor,.ar-anchor:focus-visible{opacity:1}
.ar-main h3{margin:36px 0 14px;color:#000;font-size:21px;font-weight:600;letter-spacing:-.01em}
.ar-main ul,.ar-main ol{margin:0 0 26px;padding:0;list-style:none;display:grid;gap:12px}
.ar-main li{position:relative;padding-left:34px}
.ar-main ul>li::before{content:"";position:absolute;left:8px;top:.68em;width:8px;height:8px;border-radius:50%;background:#3DC77A}
.ar-main ol{counter-reset:n}
.ar-main ol>li{counter-increment:n}
.ar-main ol>li::before{content:counter(n);position:absolute;left:0;top:.2em;display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:#0c0d0c;color:#fff;font-size:12px;font-weight:600;line-height:1}

.ar-answer{margin:0 0 32px}
.ar-answer h2{margin:0 0 12px;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#2A9555;scroll-margin-top:calc(var(--hdr) + 32px)}
.ar-main .ar-answer p{margin:0;color:#000;font-size:clamp(19px,1.6vw,22px);line-height:1.55;letter-spacing:-.01em}
.ar-main .ar-updated{margin:56px 0 0;padding-top:20px;border-top:1px solid #e6e9e6;font-size:14px;color:#5b635d}
.ar-take{padding:32px 36px;border-radius:20px;background:#f2f7f3;border:1px solid #dcebdf}
.ar-take h2{margin:0 0 16px;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#2A9555;scroll-margin-top:calc(var(--hdr) + 32px)}
.ar-take ul{margin:0;gap:10px;font-size:17px;line-height:1.6}

.ar-tip{margin:8px 0 30px;padding:24px 28px;border-radius:16px;background:#0c0d0c;color:rgba(255,255,255,.8)}
.ar-tip-label{display:block;margin-bottom:6px;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;background:var(--brand-gradient);-webkit-background-clip:text;background-clip:text;color:transparent}
.ar-tip p{margin:0;font-size:17px;line-height:1.65;color:rgba(255,255,255,.8)}
.ar-main .ar-tip strong{color:#fff}
.ar-main .ar-tip a:not(.ar-anchor),.ar-main .ar-tip a:not(.ar-anchor):visited{color:#fff}
.ar-main .ar-tip a:not(.ar-anchor):hover{text-decoration-color:#fff}

.ar-quote{margin:40px 0;padding:0}
.ar-quote p{margin:0;font-family:${SERIF};font-style:italic;font-size:clamp(26px,2.4vw,34px);line-height:1.3;color:#000;letter-spacing:-.01em}
.ar-quote p::before{content:"\\201C";display:block;height:.5em;font-size:2.4em;line-height:1;background:var(--brand-gradient);-webkit-background-clip:text;background-clip:text;color:transparent}
.ar-quote cite{display:block;margin-top:14px;font-size:14px;font-style:normal;color:#5b635d}

.ar-fig{margin:36px 0 40px}
.ar-fig img{width:100%;height:auto;border-radius:16px;background:#f2f2f0}
.ar-fig figcaption{margin-top:12px;font-size:14px;line-height:1.55;color:#5b635d}

/* Help rail */
.ar-help{position:relative;overflow:hidden;padding:28px;border-radius:20px;background:#0c0d0c;color:#fff}
.ar-help::before{content:"";position:absolute;right:-40%;top:-40%;width:90%;aspect-ratio:1;background:radial-gradient(circle,rgba(61,199,122,.25),transparent 65%);pointer-events:none}
.ar-help>*{position:relative}
.ar-help-label{font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;background:var(--brand-gradient);-webkit-background-clip:text;background-clip:text;color:transparent}
.ar-help-title{color:#fff;margin:10px 0 8px;font-size:22px;font-weight:500;line-height:1.2;letter-spacing:-.02em}
.ar-help-text{margin:0 0 20px;font-size:14px;line-height:1.55;color:rgba(255,255,255,.65)}
.ar-help-btn,.ar-help-btn:visited,.ar-help-btn:hover,.ar-help-btn:focus,.ar-help-btn:active{display:block;padding:12px 18px;border:1.5px solid #fff;border-radius:9999px;background:#fff;color:#000;font-size:14px;font-weight:600;text-align:center;text-decoration:none;transition:border-color .18s ease}
.ar-help-btn:hover,.ar-help-btn:focus-visible{border-color:#3DC77A}
.ar-help-link,.ar-help-link:visited,.ar-help-link:hover{display:block;margin-top:14px;font-size:13px;color:rgba(255,255,255,.7);text-align:center;text-decoration:none}
.ar-help-link:hover{color:#fff}

.sh{padding:22px 24px;border:1px solid #e3e7e3;border-radius:20px}
.sh-label{margin:0 0 12px;font-size:13px;font-weight:600;color:#000}
.sh-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.sh-btn,.sh-btn:visited,.sh-btn:hover,.sh-btn:focus,.sh-btn:active{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:9px 12px;white-space:nowrap;border:1px solid #d6dbd6;border-radius:9999px;background:#fff;color:#000;font:inherit;font-size:13px;text-decoration:none;cursor:pointer;transition:border-color .18s ease}
.sh-btn:hover,.sh-btn:focus-visible{border-color:#3DC77A}

/* FAQ */
.ar-faq{border-top:1px solid #e6e9e6;padding:72px 40px 88px}
.ar-faq-in{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:64px;max-width:1280px;margin:0 auto}
.ar-faq-h{margin:0;color:#000;font-weight:400;font-size:clamp(36px,4vw,60px);line-height:1.02;letter-spacing:-.04em;scroll-margin-top:calc(var(--hdr) + 32px)}
.ar-faq-h em{font-family:${SERIF};background:var(--brand-gradient);-webkit-background-clip:text;background-clip:text;color:transparent;padding-right:.06em}
.ar-faq-list details{border-bottom:1px solid #e6e9e6}
.ar-faq-list details:first-child{border-top:1px solid #e6e9e6}
.ar-faq-list summary{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:24px 0;color:#000;font-size:clamp(18px,1.6vw,22px);font-weight:500;letter-spacing:-.015em;cursor:pointer;list-style:none}
.ar-faq-list summary::-webkit-details-marker{display:none}
.ar-faq-list summary::after{content:"";flex:0 0 14px;height:14px;background:linear-gradient(#000,#000) center/14px 1.5px no-repeat,linear-gradient(#000,#000) center/1.5px 14px no-repeat;transition:transform .25s ease}
.ar-faq-list details[open] summary::after{transform:rotate(45deg)}
.ar-faq-list summary:hover{color:#2A9555}
.ar-faq-list details p{margin:0 0 24px;max-width:680px;color:#4a514c;font-size:17px;line-height:1.7}

/* Keep reading */
.ar-more{background:#0c0d0c;color:#fff;padding:96px 40px 112px}
.ar-more-in{max-width:1440px;margin:0 auto}
.ar-more-head{display:flex;justify-content:space-between;align-items:baseline;gap:20px;margin-bottom:36px}
.ar-more-head h2{margin:0;color:#fff;font-weight:300;font-size:clamp(32px,3.6vw,52px);letter-spacing:-.04em}
.ar-more-head a,.ar-more-head a:visited,.ar-more-head a:hover{color:rgba(255,255,255,.75);font-size:15px;text-decoration:none}
.ar-more-head a:hover{color:#fff}
.ar-more-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.ar-card,.ar-card:visited,.ar-card:hover,.ar-card:focus,.ar-card:active{display:flex;flex-direction:column;overflow:hidden;border-radius:20px;background:#191a19;border:1px solid rgba(255,255,255,.06);color:#fff;text-decoration:none;transition:transform .45s cubic-bezier(.2,.7,.2,1),border-color .3s ease}
.ar-card:hover,.ar-card:focus-visible{transform:translateY(-4px);border-color:rgba(61,199,122,.45)}
.ar-card-img{position:relative;display:block;aspect-ratio:16/11;overflow:hidden;background:#222}
.ar-card-img img{object-fit:cover;filter:grayscale(1);transition:filter .5s ease,transform .7s cubic-bezier(.2,.7,.2,1)}
.ar-card:hover .ar-card-img img{filter:none;transform:scale(1.04)}
@media (hover:none){.ar-card-img img{filter:none}}
.ar-card-tag{position:absolute;top:16px;left:16px;padding:6px 14px;border-radius:9999px;background:rgba(0,0,0,.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);font-size:13px}
.ar-card-title{padding:22px 22px 28px;font-size:clamp(19px,1.5vw,24px);font-weight:500;line-height:1.25;letter-spacing:-.025em}

/* Laptop: contents + article, help rail drops under the article */
@media (max-width:1279px){
  .ar-body{grid-template-columns:200px minmax(0,1fr) 240px;gap:40px;padding:64px 24px 64px}
  .ar-help{padding:24px 22px}
  .ar-help-title{font-size:19px}
  .an-head{display:grid;gap:2px}
  .sh{padding:20px}
  .sh-row{grid-template-columns:1fr}
}
/* Tablet & phone: contents become a sticky bar under the header */
@media (max-width:1023px){
  .ar-hero{padding:56px 20px 160px}
  .ar-cover{margin-top:-120px;aspect-ratio:16/9;border-radius:18px}
  .ar-body{display:block;padding:0 20px 56px;max-width:760px}
  .ar-toc{display:contents}
  .an{top:var(--hdr);z-index:20;margin:24px -20px 8px}
  .an-bar{position:relative;display:flex;align-items:center;gap:12px;width:100%;padding:14px 20px;border:0;border-bottom:1px solid #e6e9e6;background:#fff;box-shadow:0 8px 24px -16px rgba(0,0,0,.25);color:#000;font:inherit;text-align:left;cursor:pointer}
  .an-bar svg{flex:0 0 auto;transition:transform .2s ease}
  .an-bar[aria-expanded="true"] svg{transform:rotate(180deg)}
  .an-bar-text{flex:1;min-width:0;display:flex;flex-direction:column}
  .an-bar .an-label{font-family:inherit;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#2A9555}
  .an-current{font-size:15px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .an-bar-progress{position:absolute;left:0;right:0;bottom:-1px;height:2px}
  .an-panel{position:absolute;left:0;right:0;top:100%;max-height:70vh;overflow:auto;border-radius:0 0 20px 20px;box-shadow:0 30px 60px -20px rgba(0,0,0,.4)}
  .an-panel[data-open="false"]{display:none}
  .ar-sec{margin-top:52px}
  .ar-sec h2,.ar-take h2,.ar-answer h2,.ar-faq-h{scroll-margin-top:calc(var(--hdr) + 84px)}
  .ar-rail-in{position:static;grid-template-columns:1fr 1fr;align-items:start;margin-top:48px}
  .sh-row{grid-template-columns:1fr 1fr}
  .ar-faq{padding:56px 20px 72px}
  .ar-faq-in{grid-template-columns:1fr;gap:28px}
  .ar-more{padding:72px 20px 88px}
  .ar-more-grid{grid-template-columns:1fr 1fr}
}
@media (max-width:639px){
  .ar-hero{padding:44px 16px 120px}
  .ar-meta{display:grid;gap:16px;padding:16px 18px;width:100%}
  .ar-facts{gap:20px}
  .ar-cover{width:calc(100% - 32px);margin-top:-88px;border-radius:14px}
  .ar-body{padding:0 16px 48px}
  .ar-rail-in{grid-template-columns:1fr}
  .an{margin:20px -16px 8px}
  .an-bar{padding:12px 16px}
  .ar-main{font-size:17px}
  .ar-take{padding:24px 22px}
  .ar-tip{padding:20px 22px}
  .ar-anchor{display:none}
  .ar-faq{padding:48px 16px 64px}
  .ar-more{padding:64px 16px 80px}
  .ar-more-grid{grid-template-columns:1fr}
}
`;
