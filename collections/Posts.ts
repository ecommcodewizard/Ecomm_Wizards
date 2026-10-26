import type { CollectionConfig } from "payload";

// Blog articles, served at /insights/<slug>.
//
// THE FIELD LIST MIRRORS lib/blog/articles.ts ON PURPOSE. That shape — a short
// direct `answer`, `takeaways`, typed section blocks, `faqs` and `sources` — is
// deliberate work to make articles quotable by AI search, not decoration. A
// single rich-text box would have been quicker to build and would have thrown
// that away, so the structure is reproduced here field for field.
//
// Two rules are enforced server-side, in hooks rather than in the interface,
// because hiding a control is not access control:
//   1. Only an admin can publish.
//   2. Nothing unpublished is visible to the public.

const EXCERPT_MIN = 80;
const EXCERPT_MAX = 300;
// The answer block exists to be lifted verbatim by an AI search result, which
// is why it is capped rather than open-ended.
const ANSWER_MIN = 150;
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
    defaultColumns: ["title", "_status", "category", "publishedAt"],
    group: "Blog",
    description: "Articles published at /insights.",
    preview: (doc) =>
      doc?.slug ? `https://ecommwizards.com/insights/${doc.slug}` : null,
  },

  access: {
    // Signed-in users see drafts; the public sees published posts only. This
    // single rule is what keeps unfinished writing off the live site.
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
  },

  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              maxLength: 120,
              admin: {
                description:
                  "The headline a reader sees. The SEO tab can differ if you want a different title in Google.",
              },
            },
            {
              name: "excerpt",
              type: "textarea",
              required: true,
              minLength: EXCERPT_MIN,
              maxLength: EXCERPT_MAX,
              admin: {
                description: `The standfirst under the title, and the text on listing cards (${EXCERPT_MIN}–${EXCERPT_MAX} characters).`,
              },
            },
            {
              name: "answer",
              type: "textarea",
              minLength: ANSWER_MIN,
              maxLength: ANSWER_MAX,
              admin: {
                description:
                  "A direct answer to the article's core question, roughly 40–60 words. Written to be quoted verbatim by AI search, so answer the question outright — no preamble, no 'it depends'.",
              },
            },
            {
              name: "takeaways",
              type: "array",
              labels: { singular: "Takeaway", plural: "Takeaways" },
              admin: {
                description:
                  "The points someone should leave with. One sentence each.",
              },
              fields: [{ name: "text", type: "text", required: true }],
            },
            {
              name: "heroImage",
              type: "upload",
              relationTo: "media",
              admin: {
                description:
                  "The image at the top of the article, also used when the link is shared.",
              },
            },
            {
              name: "sections",
              type: "array",
              labels: { singular: "Section", plural: "Sections" },
              admin: {
                description:
                  "The article body. Each section becomes a heading plus its content, and feeds the on-page contents list.",
              },
              fields: [
                {
                  name: "title",
                  type: "text",
                  required: true,
                },
                {
                  name: "anchor",
                  type: "text",
                  admin: {
                    description:
                      "The link target for the contents list. Filled in from the title if left blank.",
                  },
                  hooks: {
                    beforeValidate: [
                      ({ value, siblingData }) =>
                        slugify(
                          (value as string) ||
                            ((siblingData as { title?: string })?.title ?? ""),
                        ),
                    ],
                  },
                },
                {
                  name: "blocks",
                  type: "blocks",
                  required: true,
                  blocks: [
                    {
                      slug: "paragraph",
                      labels: { singular: "Paragraph", plural: "Paragraphs" },
                      fields: [
                        {
                          name: "text",
                          type: "textarea",
                          required: true,
                          admin: {
                            description:
                              "Supports **bold** and [label](/link).",
                          },
                        },
                      ],
                    },
                    {
                      slug: "heading",
                      labels: { singular: "Sub-heading", plural: "Sub-headings" },
                      fields: [{ name: "text", type: "text", required: true }],
                    },
                    {
                      slug: "list",
                      labels: { singular: "List", plural: "Lists" },
                      fields: [
                        {
                          name: "style",
                          type: "select",
                          required: true,
                          defaultValue: "ul",
                          options: [
                            { label: "Bulleted", value: "ul" },
                            { label: "Numbered", value: "ol" },
                          ],
                        },
                        {
                          name: "items",
                          type: "array",
                          required: true,
                          fields: [
                            { name: "text", type: "text", required: true },
                          ],
                        },
                      ],
                    },
                    {
                      slug: "tip",
                      labels: { singular: "Tip", plural: "Tips" },
                      fields: [
                        { name: "text", type: "textarea", required: true },
                      ],
                    },
                    {
                      slug: "quote",
                      labels: { singular: "Quote", plural: "Quotes" },
                      fields: [
                        { name: "text", type: "textarea", required: true },
                        {
                          name: "cite",
                          type: "text",
                          admin: {
                            description:
                              "Who said it. Never attribute a quote to a named person who did not say it.",
                          },
                        },
                      ],
                    },
                    {
                      slug: "image",
                      labels: { singular: "Image", plural: "Images" },
                      fields: [
                        {
                          name: "image",
                          type: "upload",
                          relationTo: "media",
                          required: true,
                        },
                        { name: "caption", type: "text" },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "faqs",
              type: "array",
              labels: { singular: "Question", plural: "Questions" },
              admin: {
                description:
                  "Questions a reader would still have. These become FAQ structured data, so answer them properly rather than teasing the service.",
              },
              fields: [
                { name: "question", type: "text", required: true },
                { name: "answer", type: "textarea", required: true },
              ],
            },
            {
              name: "sources",
              type: "array",
              labels: { singular: "Source", plural: "Sources" },
              admin: {
                description:
                  "Outside sources the article relies on. Citing real ones is part of why AI search trusts a page.",
              },
              fields: [
                { name: "title", type: "text", required: true },
                { name: "publisher", type: "text", required: true },
                { name: "url", type: "text", required: true },
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
          "The web address: /insights/your-slug. Changing it after publishing breaks existing links.",
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) =>
            slugify((value as string) || (data?.title as string) || ""),
        ],
      },
      validate: (value: unknown) => {
        const v = String(value ?? "");
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
          "Set automatically when first published. Edit only to correct the record.",
      },
    },
    {
      name: "contentUpdatedAt",
      type: "date",
      admin: {
        position: "sidebar",
        readOnly: true,
        description: "Last updated. Maintained automatically.",
      },
    },
  ],
};
