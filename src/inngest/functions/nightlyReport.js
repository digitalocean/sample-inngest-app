import { inngest } from "../client.js";

export const nightlyReport = inngest.createFunction(
  { id: "nightly-report" },
  { cron: "TZ=Asia/Karachi 0 1 * * *" },
  async ({ step, logger }) => {
    const data = await step.run("generate-report", async () => {
      return { users: Math.floor(Math.random() * 1000) };
    });
    logger.info("Nightly report generated", data);
    return data;
  }
);
