import type { AdminViewServerProps } from "payload";
import { DefaultTemplate } from "@payloadcms/next/templates";
import { Gutter } from "@payloadcms/ui";
import { redirect } from "next/navigation";

import { ImportForm } from "./ImportForm";

/** Admin screen at /cms/import: turn a Google Doc or Word file into a new draft post. */
export function ImportView({ initPageResult, params, searchParams }: AdminViewServerProps) {
  const { req, locale, permissions, visibleEntities } = initPageResult;
  // Slashless for the same reason as the fetch in ImportForm.
  if (!req.user) redirect("/cms/login?redirect=%2Fcms%2Fimport");
  return (
    <DefaultTemplate
      i18n={req.i18n}
      locale={locale}
      params={params}
      payload={req.payload}
      permissions={permissions}
      searchParams={searchParams}
      user={req.user}
      visibleEntities={visibleEntities}
    >
      <Gutter>
        <div className="cms-import">
          <h1>Import from Google Doc or Word</h1>
          <p className="cms-import__lede">
            Bring in an article you wrote somewhere else. It becomes a new draft with your
            headings, lists, links, bold and italic text, tables and images intact. The first
            big heading (Heading 1 or Title) becomes the article title.
          </p>
          <p className="cms-import__lede">
            This is more reliable than copying and pasting, which can silently flatten tables
            and lists into plain paragraphs.
          </p>
          <ImportForm />
        </div>
      </Gutter>
    </DefaultTemplate>
  );
}
