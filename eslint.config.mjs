// ESLint flat config. Added during the Next 16 upgrade.
//
// Next 16 REMOVED the `next lint` command, and `next build` no longer runs
// linting at all. `next lint` was the only thing wiring ESLint up here — the
// project had no config file of its own — so without this file there is no
// working lint setup, just a package.json script that errors.
//
// eslint-config-next 16 ships flat config (its /core-web-vitals export is a
// 4-entry array: next, next/typescript, and next/core-web-vitals), which is
// what ESLint 9 expects. It is NOT wired into the build: Hostinger deploys run
// `npm run build` only, and keeping lint out of that path means a lint warning
// can never take the site down.

import next from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      // Mirrors the tsconfig excludes — generated design-extract output, not
      // hand-written source.
      "design-extract/**",
      "design-extract-output/**",
      "design-system/**",
      "social-media-kit/**",
      "public/**",
      "*.tmp.js",
    ],
  },
  ...next,
];

export default config;
