# 🧩 Inngest + Next.js Sample App (DigitalOcean Template)

This repository contains a sample **Next.js + Inngest** application that can be deployed directly to **DigitalOcean App Platform**.

It includes a one-click deploy template and an App Spec for manual or CLI deployment.

---

## 🚀 One-Click Deploy

Deploy this app to your own DigitalOcean account in one click:

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/zasghar26/Inngest-sampleApp/tree/main)


When clicked, DigitalOcean App Platform will preload your `.do/deploy.template.yaml` file.  
Review the environment variables and secrets, then click **Create App**.

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
