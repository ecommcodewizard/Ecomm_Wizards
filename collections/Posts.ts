import type { CollectionConfig } from "payload";

// Blog articles, served at /insights/<slug>.
//
// Two rules shape this file:
//   1. Only an admin can publish. A writer can do everything else — create,
//      edit, upload, save — but the moment a post goes on the live site is an
//      admin's decision. Enforced in the hook below, not just hidden in the UI,
//      because hiding a control is not access control.
//   2. Nothing reaches the public site until it is published. The read rule
//      below is what guarantees that; drafts are invisible to visitors.

const EXCERPT_MIN = 80;
const EXCERPT_MAX = 300;

// Slugs that would collide with real pages under /insights, or that read as
// system routes. Kept deliberately short — this is not a profanity filter.
const RESERVED_SLUGS = new Set(["", "new", "edit", "draft", "preview", "api", "feed", "rss"]);

const isAdmin = (user: unknown) => (user as { role?: string } | null)?.role === "admin";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "_status", "publishedAt", "author"],
    group: "Content",
    description: "Articles published at /insights.",
    // Lets an editor open the real page while writing it.
    preview: (doc) =>
      doc?.slug ? `https://ecommwizards.com/insights/${doc.slug}` : null,
  },

  access: {
    // THE PUBLIC RULE. Signed-in users see everything, including drafts.
    // Everyone else — which means the live website and its visitors — sees
    // only posts whose status is published.
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
      // Saves as you type, so a browser crash or a closed tab does not lose an
      // afternoon's writing.
      autosave: { interval: 1500 },
      // Lets an admin set a post to go live at a chosen time. NOTE: the server
      // runs on UTC, so a scheduled time is UTC, not local.
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },

  hooks: {
    beforeChange: [
      ({ data, req, originalDoc }) => {
        // ENFORCES RULE 1. A writer can submit _status: "published" by calling
        // the API directly, so the check cannot live in the interface. If a
        // non-admin tries to publish, the post is forced back to draft.
        if (data._status === "published" && !isAdmin(req.user)) {
          data._status = "draft";
        }

        // Stamp the publish date the first time it actually goes live, so the
        // article shows when it was published rather than when it was created.
        if (data._status === "published" && !originalDoc?.publishedAt) {
          data.publishedAt = new Date().toISOString();
        }

        // Always track the last edit, which feeds dateModified in the page's
        // structured data.
        data.contentUpdatedAt = new Date().toISOString();

        return data;
      },
    ],
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      maxLength: 120,
      admin: {
        description:
          "The headline, as a reader sees it. The SEO tab can differ if you want a different title in Google.",
      },
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
          ({ value, data }) => {
            // Derive from the title when left blank, so nobody has to hand-type
            // a slug, but keep any slug that was set on purpose.
            const source = (value as string) || (data?.title as string) || "";
            return source
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "")
              .slice(0, 80);
          },
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
      name: "excerpt",
      type: "textarea",
      required: true,
      minLength: EXCERPT_MIN,
      maxLength: EXCERPT_MAX,
      admin: {
        description: `One or two sentences summarising the article (${EXCERPT_MIN}–${EXCERPT_MAX} characters). Used on listing pages and as the default meta description.`,
      },
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
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      admin: {
        position: "sidebar",
        description: "Shown as the byline, and used in the article's structured data.",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        description:
          "Set automatically when the post is first published. Edit it only to correct the record.",
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
