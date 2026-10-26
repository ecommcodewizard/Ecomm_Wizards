/* Adapted from Payload's official scaffold (create-payload-app 3.92.0). */
import config from "@payload-config";
import "@payloadcms/next/css";
import { GRAPHQL_PLAYGROUND_GET } from "@payloadcms/next/routes";

export const GET = GRAPHQL_PLAYGROUND_GET(config);
