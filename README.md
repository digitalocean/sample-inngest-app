Next.js + Inngest on DigitalOcean App Platform

This is a minimal example showing two ways to run Inngest:

serve() inside your Next.js API route at /api/inngest → simplest

connect() in a separate Worker component → scalable (long-running jobs, concurrency)

🚀 Local Development
npm install
npm run dev


Visit http://localhost:3000

Submit the form → fires user/created → triggers welcomeEmail job

Optional: run Inngest dev server for live debugging:

npx inngest-cli@latest dev

🔑 Required Environment Variables

Set these in DigitalOcean App Platform → Settings → Environment Variables (or in .env.local for local dev).

Variable	Required	Used By	Description
INNGEST_EVENT_KEY	✅ Yes	App + Worker	Secret key used when your app sends events to Inngest. Create in Inngest dashboard → Event Keys.
INNGEST_SIGNING_KEY	✅ if using serve()	Next.js API route	Secret used by Inngest to sign incoming requests to /api/inngest. Needed only if you’re using serve().
INNGEST_APP_NAME	✅ Yes	All components	Friendly identifier for your app in Inngest (e.g. nextjs-inngest-doapp).
INNGEST_ENV	✅ Yes	All components	Environment name, e.g. prod, staging, or dev. Helps separate deployments.
INNGEST_BASE_URL	❌ Optional	All components	Override Inngest API base (e.g. EU region: https://api.eu.inngest.com). Leave unset for default.
🖥️ Deploying on DigitalOcean App Platform

This repo includes a .do/app.yaml file that defines two components:

Web (Next.js)

Build Command: npm ci && npm run build

Run Command: npm run start

HTTP Port: 3000

Routes: /, /api

Env Vars: NODE_ENV, INNGEST_APP_NAME, INNGEST_ENV, INNGEST_EVENT_KEY, INNGEST_SIGNING_KEY

Worker (Inngest Worker, optional)

Build Command: npm ci && npm run build

Run Command: npm run worker

HTTP Port: 0

Env Vars: NODE_ENV, INNGEST_APP_NAME, INNGEST_ENV, INNGEST_EVENT_KEY

💡 If you only want the serve() pattern, you can delete the Worker component from .do/app.yaml.