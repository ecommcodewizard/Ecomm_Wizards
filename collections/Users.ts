import type { CollectionConfig } from "payload";

// Who can sign in to /cms. Payload adds email and password itself; everything
// below is additional.
//
// Two roles, because "can edit a draft" and "can put something on the live
// site" are different levels of trust. A writer can do all the work on a post
// and save it; only an admin can publish it or manage who else has access.
export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    defaultColumns: ["name", "email", "role"],
    group: "Settings",
  },
  access: {
    // Only admins manage accounts. Without this, any signed-in writer could
    // create an admin account for themselves and publish anything.
    create: ({ req: { user } }) => (user as { role?: string })?.role === "admin",
    delete: ({ req: { user } }) => (user as { role?: string })?.role === "admin",
    // Anyone signed in can read the user list, so posts can show an author.
    read: ({ req: { user } }) => Boolean(user),
    // Admins edit anyone; everyone else edits only their own account.
    update: ({ req: { user } }) => {
      if (!user) return false;
      if ((user as { role?: string }).role === "admin") return true;
      return { id: { equals: user.id } };
    },
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      admin: { description: "Shown as the author name on posts." },
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "writer",
      options: [
        { label: "Admin — can publish and manage users", value: "admin" },
        { label: "Writer — can create and edit drafts", value: "writer" },
      ],
      access: {
        // A writer must never be able to promote themselves to admin.
        update: ({ req: { user } }) =>
          (user as { role?: string })?.role === "admin",
      },
      admin: {
        description:
          "Only admins can change this, and only admins can publish posts.",
      },
    },
  ],
};
