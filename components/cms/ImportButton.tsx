import Link from "next/link";

/** Shown above the Posts list: shortcut to the import screen. */
export function ImportButton() {
  return (
    <div className="cms-import-button">
      <Link href="/cms/import">Import from Google Doc or Word</Link>
    </div>
  );
}

/** Nav link to the import screen, under the collections. */
export function ImportNavLink() {
  return (
    <Link href="/cms/import" className="nav__link cms-import-navlink">
      Import a doc
    </Link>
  );
}
