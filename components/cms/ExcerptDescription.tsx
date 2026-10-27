"use client";

import { Button, useField, useFormFields } from "@payloadcms/ui";
import { useState } from "react";

// The hint under the Excerpt field, plus an "Auto-generate" button that drafts
// the summary from the article body.
//
// It is a STARTING POINT, not a finished summary. It lifts the opening
// sentences rather than understanding the piece, which is usually close enough
// to edit and always faster than facing an empty box. The writer still owns the
// final wording — this only removes the blank-page problem.

const EXCERPT_MIN = 120;
const EXCERPT_MAX = 200;

type LexicalNode = {
  type?: string;
  text?: string;
  children?: LexicalNode[];
};

const nodeText = (node: LexicalNode): string =>
  typeof node.text === "string"
    ? node.text
    : (node.children ?? []).map(nodeText).join("");

/**
 * Opening paragraphs, joined until the minimum length is reached and then cut
 * at a sentence boundary if one falls in range, otherwise at a word boundary.
 * Headings and images are skipped: a summary that starts with a heading reads
 * like a fragment.
 */
function summarise(content: unknown): string {
  const root = (content as { root?: LexicalNode } | null)?.root;
  if (!root?.children?.length) return "";

  let text = "";
  for (const node of root.children) {
    if (node.type !== "paragraph") continue;
    const part = nodeText(node).replace(/\s+/g, " ").trim();
    if (!part) continue;
    text = text ? `${text} ${part}` : part;
    if (text.length >= EXCERPT_MAX) break;
  }
  if (!text) return "";
  if (text.length <= EXCERPT_MAX) return text;

  const window = text.slice(0, EXCERPT_MAX);
  // Prefer ending on a full sentence, but only if that still clears the
  // minimum — a one-line summary of a long article is worse than a cut one.
  const lastStop = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("! "),
    window.lastIndexOf("? "),
  );
  if (lastStop >= EXCERPT_MIN) return window.slice(0, lastStop + 1).trim();
  return `${window.replace(/\s+\S*$/, "").trim()}…`;
}

export function ExcerptDescription() {
  const { value, setValue } = useField<string>({ path: "excerpt" });
  const content = useFormFields(([fields]) => fields?.content?.value);
  const [note, setNote] = useState<string | null>(null);

  const current = typeof value === "string" ? value.length : 0;

  const generate = () => {
    const draft = summarise(content);
    if (!draft) {
      setNote("Write some of the article first — there is nothing to summarise yet.");
      return;
    }
    setValue(draft);
    setNote(
      draft.length < EXCERPT_MIN
        ? `Drafted ${draft.length} characters — a little short, so add a sentence.`
        : "Drafted from the opening of the article. Edit it to taste.",
    );
  };

  return (
    <div className="cms-excerpt">
      <p className="cms-excerpt__hint">
        A {EXCERPT_MIN} to {EXCERPT_MAX} character summary. Shown on article cards and
        used by Google if you leave the SEO description empty.{" "}
        <span className="cms-excerpt__count">
          {current}/{EXCERPT_MIN}–{EXCERPT_MAX}
        </span>
      </p>
      <Button buttonStyle="secondary" size="small" onClick={generate} type="button">
        Auto-generate from the article
      </Button>
      {note && <p className="cms-excerpt__note">{note}</p>}
    </div>
  );
}
