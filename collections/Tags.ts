import type { CollectionConfig } from "payload";

// Free-form labels for articles. Unlike categories, these carry no link to a
// service and nothing structural depends on them — they exist for grouping and
// for readers scanning related work.
export const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "label",
    defaultColumns: ["label", "slug"],
    group: "Blog",
    description: "Optional labels. Categories do the structural work; these do not.",
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
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
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
  ],
};
