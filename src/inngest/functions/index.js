//Import every function you have:
import { userCreated } from "./userCreated.js";
import { welcomeEmail } from "./welcomeEmail.js";       // if you have it
import { nightlyReport } from "./nightlyReport.js";     // if you have it
// import { somethingElse } from "./somethingElse.js";  // add yours here

// Export ONE array with all functions:
export const allFunctions = [
  userCreated,
  welcomeEmail,
  nightlyReport,
  // somethingElse,
];
