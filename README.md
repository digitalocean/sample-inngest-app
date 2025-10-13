# 🧩 Inngest + Next.js Sample App (DigitalOcean Template)

This guide describes how to use DigitalOcean App Platform to run a **Next.js + Inngest** application.

Note: Following these steps may result in charges for the use of DigitalOcean services.

# Requirements
* You need a DigitalOcean account. If you do not already have one, first sign up.
* You need an inngest add-on. If you do not already have one, add it from SaaS add-Ons. 

---

## 🚀 One-Click Deploy

Deploy this app to your own DigitalOcean account in one click:

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/zasghar26/Inngest-sampleApp/tree/main&spec=.do/deploy.template.yaml)


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
