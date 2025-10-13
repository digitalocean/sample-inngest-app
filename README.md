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
