/* Adapted from Payload's official scaffold (create-payload-app 3.92.0). */
/* Payload regenerates files like this, so keep edits here minimal.          */
/* Difference from the stock file: the admin route is /cms rather than       */
/* /admin, so the import map is read from ./cms instead of ./admin.          */
import config from "@payload-config";
import "@payloadcms/next/css";
import type { ServerFunctionClient } from "payload";
import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import React from "react";

import { importMap } from "./cms/importMap.js";
import "./custom.scss";

type Args = {
  children: React.ReactNode;
};

const serverFunction: ServerFunctionClient = async function (args) {
  "use server";
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  });
};

// NOTE: this renders its own <html>, which is why the site had to move into
// app/(frontend). Next allows more than one root layout only when no
// app/layout.tsx sits above them.
const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
);

export default Layout;
