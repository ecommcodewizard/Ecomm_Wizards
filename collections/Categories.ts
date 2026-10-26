import type { CollectionConfig } from "payload";

// Article topics.
//
// These mirror lib/blog/posts.ts TOPICS, which deliberately map one-to-one to
// services we sell, so every article can point a reader at something they can
// buy. Keep that property: a category with no matching service is a category
// that sends readers nowhere.
export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "label",
    defaultColumns: ["label", "slug", "serviceHref"],
    group: "Blog",
    description: "Topics. Each one should point at a service we sell.",
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
      name: "label",
      type: "text",
      required: true,
      admin: { description: 'As a reader sees it, e.g. "Shopify Development".' },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { description: "Used in filter links, e.g. development." },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            const source = (value as string) || (data?.label as string) || "";
            return source
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");
          },
        ],
      },
    },
    {
      name: "specialist",
      type: "text",
      admin: {
        description:
          'The byline role for articles on this topic, e.g. "Shopify Development Specialist".',
      },
    },
    {
      name: "serviceLabel",
      type: "text",
      admin: { description: 'The service to link to, e.g. "Shopify Development".' },
    },
    {
      name: "serviceHref",
      type: "text",
      admin: {
        description:
          "Where that link goes, e.g. /services/shopify-development-agency",
      },
      validate: (value: unknown) => {
        const v = String(value ?? "");
        if (!v) return true;
        if (!v.startsWith("/"))
          return "Use a path on this site, starting with /";
        return true;
      },
    },
  ],
};
