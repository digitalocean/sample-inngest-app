import { inngest } from "../client.js";

export const welcomeEmail = inngest.createFunction(
  { id: "send-welcome-email" },
  { event: "user/created" },
  async ({ event, step, logger }) => {
    await step.sleep("delay", "15s");
    logger.info("Pretend to send a welcome email", { email: event.data.email });
    return { ok: true, email: event.data.email };
  }
);
