# 🧩 Inngest + Next.js Sample App (DigitalOcean Template)

Integrating DigitalOcean App Platform with Inngest allows you to concentrate on coding by enabling direct deployments from GitHub pushes. Both the App Platform and Inngest automatically scale your application without the need for any infrastructure setup, making this an ideal solution for SaaS and e-commerce websites.

A ready-to-deploy blueprint demonstrating how to build and run an event-driven Next.js app using Inngest on DigitalOcean App Platform.

This template helps you see how to wire up frontend triggers, background workflows, and deployment—all in one repo.

Note: Following these steps may result in charges for the use of DigitalOcean services.

# Requirements
* You need a DigitalOcean account. If you do not already have one, first sign up.
* You need an inngest add-on. If you do not already have one, add it from SaaS add-Ons. 

---

## What This Blueprint Gives You

By using this template, you get:

* A Next.js frontend + API routes that emit events to Inngest

* Inngest workflow/function definitions (background jobs triggered by events)

* A .do/deploy.template.yaml (or equivalent) configuration to deploy everything via DigitalOcean App Platform

* A jumpstart for building your own production event-driven systems, with deployment, secrets, and orchestration

---

## Application Components

* Next.js Frontend
  * Provides a UI that trigger events. For example, a user action calls /api/submit which sends an event to Inngest.

* Inngest Add-on
  * The managed Inngest service is the event ingestion layer. It receives events from your application and dispatches them to workflows/functions.

* Inngest Functions / Workflows
  * Background jobs or workflows defined in your code. They get invoked when events match. You can include retries, scheduling, steps, etc.

* .do/deploy.template.yaml
  * The DigitalOcean App Platform blueprint: defines how to deploy the frontend, the functions, the environment variables, etc.

* Environment Variables
  * Keys like INNGEST_EVENT_KEY, INNGEST_SIGNING_KEY, etc. These secure event submission and verification.

---

## Example Use Cases

You can use this template to build:

* Delayed or scheduled email sending flows. For example, automatically drafting personalized follow-up emails using a GenAI model that adapts tone and content based on user behavior.

* Workflow orchestration for user onboarding or post-signup tasks. Where an Agentic AI assistant dynamically guides new users, generates tailored recommendations, or sets up personalized configurations.

* Webhook event processing (e.g., for payments, notifications), enhanced with AI that classifies or summarizes incoming data, detects anomalies, or triggers intelligent routing decisions.

* Long-running, multi-step background jobs — where an Agentic AI can reason over intermediate outputs, make autonomous decisions, and retry or branch workflows as needed.

* AI-powered notifications — where the system doesn’t just send alerts, but also interprets context, suggests next steps, or triggers remediation actions.

---

## 🚀 One-Click Deploy

Deploy this app to your own DigitalOcean account in one click:

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/digitalocean/inngest-sample-app/tree/main&spec=.do/deploy.template.yaml)


* When clicked, DigitalOcean App Platform will preload your `.do/deploy.template.yaml` file.  
* Add Signing Key and Event Key from inngest add-on portal, currently app platform contains dummay values, then click **Create App**.


---

## ⚙️ Manual Deployment (CLI)

If you prefer using the DigitalOcean CLI or need to deploy a private repo:

```bash
# Authenticate once
doctl auth init

# Create a new app from the spec
doctl apps create --spec .do/deploy.template.yaml

# Update an existing app
doctl apps update <APP_ID> --spec .do/deploy.template.yaml
