import type { CollectionConfig } from "payload";

import { postContentEditor, simpleEditor } from "../lib/cms/editor";
import { importPostEndpoint } from "../lib/import/importPost";
import { revalidatePost, revalidatePostAfterDelete } from "../hooks/revalidate";

// Blog articles, served at /insights/<slug>.
//
// THE BODY IS ONE RICH-TEXT FIELD, NOT A STRUCTURE OF BLOCKS. An earlier
// version modelled the article as Sections, each holding typed Blocks, which
// mirrored the data shape the site renders. It was correct and unusable:
// writing a 2,000-word article meant clicking "Add Section", then "Add Block",
// then choosing "Paragraph", for every paragraph. The writer's experience
// decides whether a CMS gets used at all, so the body is now an ordinary
// editor. Headings in it still build the article's contents list.
//
// Two rules are enforced in hooks rather than in the interface, because hiding
// a control is not access control:
//   1. Only an admin can publish.
//   2. Nothing unpublished is visible to the public.

const EXCERPT_MIN = 80;
const EXCERPT_MAX = 300;
const ANSWER_MAX = 600;

const RESERVED_SLUGS = new Set(["", "new", "edit", "draft", "preview", "api", "feed", "rss"]);

const isAdmin = (user: unknown) => (user as { role?: string } | null)?.role === "admin";

const slugify = (input: string) =>
  input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    // The columns worth scanning at a glance: who wrote it, what it is about,
    // when it went out and when it last changed.
    defaultColumns: [
      "title",
      "_status",
      "author",
      "category",
      "publishedAt",
      "contentUpdatedAt",
    ],
    // Searching by slug matters once there are articles with similar titles,
    // since the slug is the thing that appears in a URL someone is holding.
    listSearchableFields: ["title", "slug"],
    group: "Blog",
    description: "Articles published at /insights.",
    components: {
      // The same shortcut as the sidebar link, where someone looking at the
      // list of articles will actually look for it.
      beforeListTable: ["/components/cms/ImportButton#ImportButton"],
    },
    preview: (doc) =>
      doc?.slug ? `https://ecommwizards.com/insights/${doc.slug}` : null,
  },

  // Serves POST /cms-api/posts/import, behind the "Import a doc" screen.
  endpoints: [importPostEndpoint],

  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      return { _status: { equals: "published" } };
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => isAdmin(user),
  },

  versions: {
    drafts: {
      autosave: { interval: 1500 },
      // The server runs on UTC, so a scheduled time is UTC, not local.
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },

  hooks: {
    beforeChange: [
      ({ data, req, originalDoc }) => {
        // A writer can POST _status: "published" straight to the API, so this
        // check cannot live in the UI.
        if (data._status === "published" && !isAdmin(req.user)) {
          data._status = "draft";
        }
        if (data._status === "published" && !originalDoc?.publishedAt) {
          data.publishedAt = new Date().toISOString();
        }
        data.contentUpdatedAt = new Date().toISOString();
        return data;
      },
    ],
    afterChange: [revalidatePost],
    afterDelete: [revalidatePostAfterDelete],
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      maxLength: 120,
      admin: {
        description:
          "The headline a reader sees. Under 65 characters keeps it from being cut off in Google.",
      },
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "excerpt",
              type: "textarea",
              required: true,
              minLength: EXCERPT_MIN,
              maxLength: EXCERPT_MAX,
              admin: {
                description: `One or two sentences on what the reader will learn (${EXCERPT_MIN}–${EXCERPT_MAX} characters). Shown on article cards and used as the search description if the SEO tab is left empty.`,
              },
            },
            {
              name: "heroImage",
              label: "Featured Image",
              type: "upload",
              relationTo: "media",
              admin: {
                description:
                  "Shown at the top of the article, on article cards, and when the link is shared. At least 1200 pixels wide.",
              },
            },
            {
              name: "content",
              type: "richText",
              editor: postContentEditor,
              required: true,
              admin: {
                description:
                  "The article. Use Heading 2 for each main section and Heading 3 beneath it — the contents list is built from the Heading 2s.",
              },
            },
            {
              name: "faqs",
              label: "FAQ",
              type: "array",
              labels: { singular: "Question", plural: "Questions" },
              admin: {
                description:
                  "Optional. Questions a reader would still have. These are published as FAQ structured data and can appear directly in Google, so answer them properly rather than teasing the service.",
              },
              fields: [
                {
                  name: "question",
                  type: "text",
                  required: true,
                  admin: { description: "Written the way a reader would ask it." },
                },
                {
                  name: "answer",
                  type: "richText",
                  editor: simpleEditor,
                  required: true,
                  admin: { description: "A direct answer in two to four sentences." },
                },
              ],
            },
            {
              type: "collapsible",
              label: "AI search extras (optional)",
              admin: {
                initCollapsed: true,
                description:
                  "Both optional. They render as their own blocks on the article and exist to make the page easy for AI search to quote.",
              },
              fields: [
                {
                  name: "answer",
                  label: "Direct answer",
                  type: "textarea",
                  maxLength: ANSWER_MAX,
                  admin: {
                    description:
                      "40–60 words answering the article's core question outright, no preamble. Written to be lifted verbatim by an AI result.",
                  },
                },
                {
                  name: "takeaways",
                  type: "array",
                  labels: { singular: "Takeaway", plural: "Takeaways" },
                  admin: {
                    description: "The points a reader should leave with. One sentence each.",
                  },
                  fields: [{ name: "text", type: "text", required: true }],
                },
              ],
            },
          ],
        },
        {
          label: "Settings",
          fields: [
            {
              name: "category",
              type: "relationship",
              relationTo: "categories",
              required: true,
              admin: {
                description:
                  "The topic. Each one points at a service, which is how an article leads somewhere.",
              },
            },
            {
              name: "tags",
              type: "relationship",
              relationTo: "tags",
              hasMany: true,
              admin: { description: "Optional. Smaller topics this article touches on." },
            },
            {
              name: "author",
              type: "relationship",
              relationTo: "authors",
              admin: {
                description:
                  "The byline. Falls back to the default author in Blog settings if left empty.",
              },
            },
            {
              name: "showTableOfContents",
              type: "checkbox",
              defaultValue: true,
              admin: {
                description:
                  "Builds a contents list from the Heading 2s. Worth turning off for a short article, where it is longer than the piece.",
              },
            },
          ],
        },
      ],
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description:
          "The end of the web address: /insights/your-slug. Filled in from the title if left empty. Changing it after publishing breaks existing links.",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            const derived = slugify(
              (value as string) || (data?.title as string) || "",
            );
            // RETURNING undefined RATHER THAN "" IS THE WHOLE POINT HERE.
            // Autosave creates a draft the moment "Create New" is clicked,
            // before any title exists, so the slug derives to empty. Postgres
            // permits many NULLs under a unique index but only one "", so the
            // second untitled draft collided and the create screen failed to
            // render at all — a blank page with error:valueMustBeUnique in the
            // log.
            return derived || undefined;
          },
        ],
      },
      validate: (value: unknown, options: unknown) => {
        const v = String(value ?? "");
        const status = (options as { data?: { _status?: string } })?.data?._status;
        if (!v) {
          // An untitled draft is a normal state; an untitled PUBLISHED post is
          // not, since the slug is its address.
          return status === "published"
            ? "A web address is required before publishing."
            : true;
        }
        if (RESERVED_SLUGS.has(v)) return `"${v}" is reserved — choose another.`;
        if (!/^[a-z0-9-]+$/.test(v))
          return "Use lowercase letters, numbers and hyphens only.";
        return true;
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        description:
          "Filled in automatically the first time the article is published. Edit it only to correct the record.",
      },
    },
    {
      name: "contentUpdatedAt",
      label: "Last updated",
      type: "date",
      admin: {
        position: "sidebar",
        readOnly: true,
        description: "Maintained automatically on every save.",
      },
    },
  ],
};
