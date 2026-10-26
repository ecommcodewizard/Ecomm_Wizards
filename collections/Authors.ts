import type { CollectionConfig } from "payload";

// Article bylines, kept SEPARATE from Users on purpose.
//
// A user is someone who can sign in. An author is a name that appears on an
// article. They are not the same thing: people leave and their login is
// removed, but their articles keep their byline; and an article can be credited
// to someone who never had an account.
//
// Author detail also feeds the article's structured data, which is what lets a
// search engine attribute the piece to a named person rather than to nobody.
export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role"],
    group: "Blog",
    description: "Bylines. Separate from logins, so an author outlives an account.",
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) =>
      (user as { role?: string })?.role === "admin",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: { description: "As it appears on the article." },
    },
    {
      name: "role",
      type: "text",
      admin: {
        description:
          'Their title, e.g. "Shopify Development Specialist". Shown next to the name.',
      },
    },
    {
      name: "bio",
      type: "textarea",
      maxLength: 400,
      admin: {
        description:
          "A short description of why this person is worth reading on this subject. Experience, not adjectives.",
      },
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
    },
  ],
};
