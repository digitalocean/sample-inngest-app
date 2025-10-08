// app/api/inngest/route.js
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { serve } from "inngest/next";
import { inngest } from "../../../src/inngest/client.js";
import { allFunctions } from "../../../src/inngest/functions/index.js";

// Optional: quick env presence log (no secrets printed)
console.log("[/api/inngest] env presence:", {
  appId: !!process.env.INNGEST_APP_ID,
  eventKey: !!process.env.INNGEST_EVENT_KEY,
  signingKey: !!process.env.INNGEST_SIGNING_KEY,
});

// Register EVERYTHING here:
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: allFunctions,
});
