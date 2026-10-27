// Turning Google Docs / Word markup into clean semantic HTML.
//
// Adapted from the same agency's 100xRetention implementation. Kept close to
// the original on purpose: each rule here exists because of a specific way one
// of those two editors mangles its export, and those are not things worth
// rediscovering by trial and error on live content.

import { JSDOM } from "jsdom";

export type CleanedDoc = {
  title: string | null;
  /** Cleaned body HTML. Images are left as <img> placeholders for the caller to upload and replace. */
  html: string;
  images: { placeholder: string; src: string; alt: string }[];
};

const BLOCK_TAGS = new Set([
  "P", "H1", "H2", "H3", "H4", "H5", "H6", "UL", "OL", "TABLE", "BLOCKQUOTE", "PRE", "HR", "IMG",
]);
const KEEP_ATTRS: Record<string, string[]> = {
  A: ["href"],
  IMG: ["src", "alt"],
  TD: ["colspan", "rowspan"],
  TH: ["colspan", "rowspan"],
  OL: ["start"],
};

/** Google wraps every link in https://www.google.com/url?q=<real url>&sa=...; this returns the real URL. */
function unwrapGoogleLink(href: string): string {
  try {
    const url = new URL(href);
    if (/(^|\.)google\.com$/.test(url.hostname) && url.pathname === "/url") {
      return url.searchParams.get("q") || href;
    }
  } catch {
    // relative or malformed: keep as is
  }
  return href;
}

/**
 * Turns Google Docs or Word (mammoth) HTML into clean, semantic HTML the Lexical importer understands:
 * - bold and italic set through inline styles (Google Docs) become <strong> and <em>
 * - styles, classes, ids, empty spans and empty paragraphs are removed
 * - the first H1 (or Google's "Title" paragraph) becomes the post title; later H1s become H2, H5 and H6 become H4
 * - images are lifted out of paragraphs so each becomes its own block
 */
export function cleanImportedHtml(source: string): CleanedDoc {
  const dom = new JSDOM(source);
  const doc = dom.window.document;
  const body = doc.body;

  body.querySelectorAll("style, script, meta, link, title, noscript").forEach((el) => el.remove());

  // Google Docs: formatting lives in inline styles on spans.
  body.querySelectorAll<HTMLElement>("span[style]").forEach((span) => {
    const style = span.getAttribute("style") ?? "";
    let node: HTMLElement = span;
    const wrap = (tag: string) => {
      const el = doc.createElement(tag);
      while (node.firstChild) el.appendChild(node.firstChild);
      node.appendChild(el);
      node = el;
    };
    if (/font-weight:\s*(700|bold)/.test(style)) wrap("strong");
    if (/font-style:\s*italic/.test(style)) wrap("em");
  });
  // Google exports headings with bold spans inside; the heading already says "this is bold".
  body
    .querySelectorAll("h1 strong, h2 strong, h3 strong, h4 strong, h5 strong, h6 strong")
    .forEach((el) => el.replaceWith(...Array.from(el.childNodes)));

  body
    .querySelectorAll("a[href]")
    .forEach((a) => a.setAttribute("href", unwrapGoogleLink(a.getAttribute("href") ?? "")));
  // Google adds empty anchors as bookmarks and comment markers.
  body.querySelectorAll("a:not([href])").forEach((a) => a.replaceWith(...Array.from(a.childNodes)));
  // Comment markers in the text, and the comment threads Google appends at the end.
  body.querySelectorAll("a[href^='#cmnt']").forEach((a) => {
    const thread = a.closest("div");
    if (a.getAttribute("href")?.startsWith("#cmnt_ref") && thread && thread.parentElement === body) {
      thread.remove();
    } else {
      (a.closest("sup") ?? a).remove();
    }
  });

  // Title: Google's "Title" paragraph style, else the first H1.
  let titleEl: Element | null = body.querySelector("p.title") ?? body.querySelector("h1");
  const title = titleEl?.textContent?.replace(/\s+/g, " ").trim() || null;
  titleEl?.remove();
  titleEl = null;
  body.querySelectorAll("p.subtitle").forEach((el) => el.remove());

  const rename = (el: Element, tag: string) => {
    const next = doc.createElement(tag);
    while (el.firstChild) next.appendChild(el.firstChild);
    el.replaceWith(next);
  };
  // A second H1 would compete with the post title, which is the page's only H1.
  body.querySelectorAll("h1").forEach((el) => rename(el, "h2"));
  // The editor offers H2-H4, so anything deeper flattens to H4.
  body.querySelectorAll("h5, h6").forEach((el) => rename(el, "h4"));

  // Strip presentation attributes everywhere.
  body.querySelectorAll("*").forEach((el) => {
    const keep = KEEP_ATTRS[el.tagName] ?? [];
    for (const attr of Array.from(el.attributes)) {
      if (!keep.includes(attr.name)) el.removeAttribute(attr.name);
    }
  });
  // Unwrap spans and divs (they carry nothing once styles are gone).
  body.querySelectorAll("span, div, font").forEach((el) => el.replaceWith(...Array.from(el.childNodes)));

  // Each image becomes a top-level block right after the block it sat in.
  const images: CleanedDoc["images"] = [];
  body.querySelectorAll("img").forEach((img, i) => {
    const src = img.getAttribute("src") ?? "";
    const placeholder = `import-image-${i}`;
    images.push({ placeholder, src, alt: img.getAttribute("alt")?.trim() ?? "" });
    let block: Element = img;
    while (block.parentElement && block.parentElement !== body) block = block.parentElement;
    const standalone = doc.createElement("img");
    standalone.setAttribute("data-import-placeholder", placeholder);
    if (block === img) {
      img.replaceWith(standalone);
    } else {
      block.after(standalone);
      img.remove();
    }
  });

  // Drop paragraphs and headings left empty (Google uses them as spacers).
  body.querySelectorAll("p, h2, h3, h4, li").forEach((el) => {
    if (!el.textContent?.trim() && !el.querySelector("img, br")) el.remove();
  });
  // Keep only known blocks at the top level; wrap stray inline content in paragraphs.
  for (const node of Array.from(body.childNodes)) {
    if (node.nodeType === 1 && BLOCK_TAGS.has((node as Element).tagName)) continue;
    if (node.nodeType === 3 && !node.textContent?.trim()) {
      node.remove();
      continue;
    }
    const p = doc.createElement("p");
    node.replaceWith(p);
    p.appendChild(node);
  }

  return { title, html: body.innerHTML, images };
}
