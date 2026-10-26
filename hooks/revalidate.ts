import { revalidatePath } from "next/cache";
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from "payload";

// Clears the cached /insights pages when an article changes.
//
// Without this, publishing would appear to do nothing for up to five minutes
// (the `revalidate` set on those pages), which reads as a broken CMS. With it,
// the pages are rebuilt on the next visit and the cache window is only a
// backstop for anything that changes outside the admin — a scheduled publish
// firing, say, or a direct API write.
//
// Both the new and the old path are cleared, because renaming a slug leaves the
// previous URL cached and still serving the article at an address that no
// longer exists.

const paths = (doc: unknown, previousDoc?: unknown): string[] => {
  const slug = (doc as { slug?: string } | null)?.slug;
  const previousSlug = (previousDoc as { slug?: string } | null)?.slug;
  const list = ["/insights"];
  if (slug) list.push(`/insights/${slug}`);
  if (previousSlug && previousSlug !== slug) list.push(`/insights/${previousSlug}`);
  return list;
};

const clear = (list: string[]) => {
  for (const p of list) {
    try {
      revalidatePath(p);
    } catch {
      // revalidatePath needs a Next request context. A write from a script or a
      // test has none, and that is not a reason to fail the write — the page
      // still refreshes when its own revalidate window elapses.
    }
  }
};

export const revalidatePost: CollectionAfterChangeHook = ({ doc, previousDoc }) => {
  clear(paths(doc, previousDoc));
  return doc;
};

export const revalidatePostAfterDelete: CollectionAfterDeleteHook = ({ doc }) => {
  clear(paths(doc));
  return doc;
};
