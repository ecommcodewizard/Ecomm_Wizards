import Link from "next/link";

/** Nav link to the import screen, under the collections. */
export function ImportNavLink() {
  return (
    <Link href="/cms/import" className="nav__link cms-import-navlink">
      Import a doc
    </Link>
  );
}
