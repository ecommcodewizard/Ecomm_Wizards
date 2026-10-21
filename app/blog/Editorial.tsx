"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { topicLabel, type Post } from "@/lib/blog/posts";
import { useBlogFilter } from "./useBlogFilter";

type Quote = { text: string; person: string; role: string };

// Quote cards sit after these post positions while browsing everything.
const QUOTE_AFTER = [1, 6];

export default function Editorial({ posts, quotes }: { posts: Post[]; quotes: Quote[] }) {
  const f = useBlogFilter(posts);

  return (
    <>
      <div className="ed-bar">
        <div className="ed-pills" role="group" aria-label="Filter by topic">
          {f.topics.map((t) => (
            <button key={t.slug} type="button" aria-pressed={f.topic === t.slug} onClick={() => f.setTopic(t.slug)}>
              {t.slug === "all" ? "All" : t.label}
            </button>
          ))}
        </div>
        <input
          className="ed-search"
          type="search"
          placeholder="Search"
          aria-label="Search articles"
          value={f.query}
          onChange={(e) => f.setQuery(e.target.value)}
        />
      </div>

      <div className="ed-grid">
        {f.results.map((p, i) => {
          const qi = f.browsing ? QUOTE_AFTER.indexOf(i) : -1;
          const q = quotes[qi];
          return (
            <Fragment key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="ed-card">
                <span className="ed-img">
                  {p.image && (
                    <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" priority={i < 4} />
                  )}
                  <span className="ed-tag">{topicLabel(p.topic)}</span>
                </span>
                <span className="ed-text">
                  <span className="ed-title">{p.title}</span>
                  <span className="ed-excerpt">{p.excerpt}</span>
                </span>
              </Link>
              {q && (
                <figure className={`ed-quote${qi === 0 ? " is-wide" : ""}`}>
                  <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
                  <figcaption>
                    {q.person}
                    <em>{q.role}</em>
                  </figcaption>
                </figure>
              )}
            </Fragment>
          );
        })}
      </div>

      {!f.results.length && (
        <p className="ed-empty">
          Nothing matches that yet. <button type="button" onClick={f.reset}>Show all articles</button>
        </p>
      )}
    </>
  );
}
