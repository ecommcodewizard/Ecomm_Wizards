import Image from "next/image";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import {
  RichText,
  type JSXConvertersFunction,
} from "@payloadcms/richtext-lexical/react";

import { headingId } from "@/lib/blog/cms";

// Renders an article body written in the CMS editor.
//
// Server-rendered: the markup is in the HTML Google receives, not assembled in
// the browser afterwards.

type Lexicalish = { text?: string; children?: Lexicalish[] };

const nodeText = (node: Lexicalish): string => {
  if (typeof node.text === "string") return node.text;
  return (node.children ?? []).map(nodeText).join("");
};

type MediaValue = {
  url?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
};

export default function ArticleContent({
  content,
}: {
  content: SerializedEditorState | null;
}) {
  if (!content) return null;

  // H2 ANCHORS MUST MATCH lib/blog/cms.ts tableOfContents EXACTLY, including
  // how it disambiguates two sections that share a heading. Both walk the body
  // in document order and apply the same rule, so the contents link and the
  // heading it points at always agree. Deriving them separately is how anchors
  // quietly stop working.
  const used = new Set<string>();
  const idFor = (title: string) => {
    let id = headingId(title);
    let n = 2;
    while (used.has(id)) id = `${headingId(title)}-${n++}`;
    used.add(id);
    return id;
  };

  const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
    ...defaultConverters,

    heading: ({ node, nodesToJSX }) => {
      const children = nodesToJSX({ nodes: node.children });
      const Tag = (node.tag ?? "h2") as "h2" | "h3" | "h4";
      // Only H2s are linked to, so only they need an id.
      return Tag === "h2" ? (
        <h2 id={idFor(nodeText(node as Lexicalish).trim())}>{children}</h2>
      ) : (
        <Tag>{children}</Tag>
      );
    },

    upload: ({ node }) => {
      const value = node.value as MediaValue | undefined;
      if (!value?.url) return null;
      const caption = (node.fields as { caption?: string } | undefined)?.caption;
      return (
        <figure className="ar-fig">
          <Image
            src={value.url}
            alt={value.alt ?? ""}
            width={value.width ?? 1600}
            height={value.height ?? 900}
            sizes="(min-width: 1024px) 720px, 100vw"
          />
          {caption ? <figcaption>{caption}</figcaption> : null}
        </figure>
      );
    },
  });

  return <RichText data={content} converters={converters} />;
}
