import type { GlobalConfig } from "payload";

// Settings that apply to the blog as a whole rather than to one article.
//
// A "global" in Payload is a single record rather than a list — there is one
// of this, not many, so it is edited in place.
export const BlogSettings: GlobalConfig = {
  slug: "blog-settings",
  admin: {
    group: "Settings",
    description: "Applies to the whole /insights section.",
  },
  access: {
    read: () => true,
    // Only admins, because these change every page in the section at once.
    update: ({ req: { user } }) =>
      (user as { role?: string })?.role === "admin",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      defaultValue: "Insights",
      admin: { description: "The heading at the top of /insights." },
    },
    {
      name: "intro",
      type: "textarea",
      maxLength: 300,
      admin: { description: "The paragraph under that heading." },
    },
    {
      name: "postsPerPage",
      type: "number",
      defaultValue: 12,
      min: 3,
      max: 48,
      admin: { description: "How many article cards to show before paging." },
    },
    {
      name: "defaultAuthor",
      type: "relationship",
      relationTo: "authors",
      admin: {
        description:
          "Used as the byline when an article does not name one, so no article publishes without an author.",
      },
    },
  ],
};
