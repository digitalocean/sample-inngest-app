import { connect } from "inngest";
import { inngest } from "../src/inngest/client.js";
import { welcomeEmail } from "../src/inngest/functions/welcomeEmail.js";
import { nightlyReport } from "../src/inngest/functions/nightlyReport.js";

await connect({
  client: inngest,
  functions: [welcomeEmail, nightlyReport],
});

// Keep process alive
setInterval(() => {}, 60_000);
