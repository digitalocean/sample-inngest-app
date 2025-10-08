import { Inngest } from "inngest";

/**
 * Inngest client:
 * - id is REQUIRED (fallback avoids build-time crash)
 * - eventKey only needed for server-side `send()` in prod
 * - baseUrl should be unset for Inngest Cloud
 */
export const inngest = new Inngest({
  id: process.env.INNGEST_APP_ID ?? "nextjs-inngest-doapp",
  name: process.env.INNGEST_APP_NAME,
  env: process.env.INNGEST_ENV ?? "prod",
  ...(process.env.INNGEST_BASE_URL ? { baseUrl: process.env.INNGEST_BASE_URL } : {}),
  ...(process.env.INNGEST_EVENT_KEY ? { eventKey: process.env.INNGEST_EVENT_KEY } : {}),
});
