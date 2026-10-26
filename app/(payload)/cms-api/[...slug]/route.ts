/* Adapted from Payload's official scaffold (create-payload-app 3.92.0). */
/* Payload's REST API. Mounted at /cms-api rather than the default /api so   */
/* this catch-all can never sit in front of /api/lead or /api/bookings,      */
/* which receive live enquiries. Must match routes.api in payload.config.ts. */
import config from "@payload-config";
import "@payloadcms/next/css";
import {
  REST_DELETE,
  REST_GET,
  REST_OPTIONS,
  REST_PATCH,
  REST_POST,
  REST_PUT,
} from "@payloadcms/next/routes";

export const GET = REST_GET(config);
export const POST = REST_POST(config);
export const DELETE = REST_DELETE(config);
export const PATCH = REST_PATCH(config);
export const PUT = REST_PUT(config);
export const OPTIONS = REST_OPTIONS(config);
