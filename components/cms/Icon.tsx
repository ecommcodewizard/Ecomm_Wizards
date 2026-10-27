/* eslint-disable @next/next/no-img-element -- the admin panel renders outside the site's image pipeline */

/** Badge mark in the CMS nav, replacing Payload's default. */
export function Icon() {
  return (
    <img
      src="/images/ecomm-green-logo-cropped.png"
      alt="Ecomm Wizards"
      width={28}
      height={26}
    />
  );
}
