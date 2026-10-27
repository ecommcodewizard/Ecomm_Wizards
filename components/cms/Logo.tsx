/* eslint-disable @next/next/no-img-element -- the admin panel renders outside the site's image pipeline */

/** Wordmark on the CMS login screen. */
export function Logo() {
  return (
    <img
      src="/images/ecomm-green.svg"
      alt="Ecomm Wizards"
      width={200}
      height={144}
      className="cms-logo"
    />
  );
}
