import { inngest } from "../client.js";

export const userCreated = inngest.createFunction(
  { id: "user-created" },
  { event: "app/user.created" },
  async ({ event, step }) => {
    await step.run("log", async () => {
      console.log("[Inngest] New user:", event.data.email);
    });
    return { ok: true };
  }
);
