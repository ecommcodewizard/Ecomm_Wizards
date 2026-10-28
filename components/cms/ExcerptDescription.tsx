"use client";

import { Button, useField, useFormFields } from "@payloadcms/ui";
import { useState } from "react";

import { EXCERPT_MAX, EXCERPT_MIN, excerptFrom } from "@/lib/cms/seo";

// The hint under the Excerpt field, plus an "Auto-generate" button that drafts
// the summary from the article body.
//
// It is a STARTING POINT, not a finished summary. It lifts the opening
// sentences rather than understanding the piece, which is usually close enough
// to edit and always faster than facing an empty box. The writer still owns the
// final wording — this only removes the blank-page problem.

export function ExcerptDescription() {
  const { value, setValue } = useField<string>({ path: "excerpt" });
  const content = useFormFields(([fields]) => fields?.content?.value);
  const [note, setNote] = useState<string | null>(null);

  const current = typeof value === "string" ? value.length : 0;

  const generate = () => {
    const draft = excerptFrom(content);
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
