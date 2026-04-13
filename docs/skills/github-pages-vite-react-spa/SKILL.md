---
name: github-pages-vite-react-spa
description: Use when deploying a Vite-based React SPA to GitHub Pages, especially when routes refresh to 404, static assets load from the wrong path, or GitHub Actions Pages deploys fail on first publish.
---

# GitHub Pages Vite React SPA

## Overview
Deploying a Vite React SPA to GitHub Pages has three common failure points: router strategy, Vite base path, and Pages deployment state. Fix those in that order before changing unrelated code.

## When to Use
- Vite app is being deployed to a GitHub project site such as `https://user.github.io/repo/`
- React Router subpages fail on refresh
- Built assets load from `/assets/...` instead of `/<repo>/assets/...`
- `actions/deploy-pages` fails even though build passed

Do not use this for Next.js, Astro, or SSR deployments.

## Core Rules
- For GitHub Pages project sites, set Vite `base` to `/<repo-name>/`
- For React SPA routing on GitHub Pages, prefer `HashRouter`
- Use GitHub Actions Pages deploy, not branch-based static publishing hacks
- If first deploy fails with Pages `404 Not Found`, check Pages API before rewriting workflow

## Required App Changes

### 1. Router
Use `HashRouter` instead of `BrowserRouter` for a GitHub Pages SPA.

```jsx
import { HashRouter, Routes, Route } from 'react-router-dom'
```

Reason: GitHub Pages serves static files and does not provide SPA history fallback for arbitrary subpaths.

### 2. Vite Base Path
In `vite.config.js`:

```js
export default defineConfig({
  base: '/REPO_NAME/',
})
```

Without this, the deployed site usually loads blank or misses JS/CSS because assets resolve from the wrong root.

## Standard Workflow
Create `.github/workflows/deploy-pages.yml`:

```yaml
name: Deploy GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Verification
Always verify locally first:

```bash
npm run lint
npm run build
```

Then verify GitHub state:

```bash
gh auth status
gh workflow list --repo OWNER/REPO
gh run list --repo OWNER/REPO
gh run view <run-id> --log
gh api repos/OWNER/REPO/pages
```

## Failure Diagnosis

### Symptom: Build succeeds, deploy fails with 404
Typical log:

```text
Failed to create deployment ... 404 ... Ensure GitHub Pages has been enabled
```

Meaning:
- workflow exists
- artifact uploaded correctly
- GitHub Pages backend was not fully ready for deployment yet

Response:
1. Check Pages API:

```bash
gh api repos/OWNER/REPO/pages
```

2. If Pages shows enabled with `build_type: workflow`, rerun the workflow:

```bash
gh run rerun <run-id> --repo OWNER/REPO
```

3. Do not rewrite the workflow unless logs point to an actual YAML or build problem.

### Symptom: Workflow does not appear in Actions
Check:
- workflow file is committed on the remote default branch
- workflow branch trigger matches the actual default branch

### Symptom: Site loads but is blank or broken
Check:
- `base` path matches repo name exactly, including case
- built assets exist under `dist/assets`
- deployed URL is `https://user.github.io/repo/`

### Symptom: Subpages 404 on refresh
Cause:
- `BrowserRouter` on static hosting

Fix:
- switch to `HashRouter`

## Checklist
- `vite.config.js` has correct `base`
- router uses `HashRouter`
- Pages source is `GitHub Actions`
- workflow triggers on actual default branch
- local lint/build pass
- workflow build passes
- Pages deploy passes
- final URL opens

## Real-World Example
For repo `NexusAcademy`:
- Pages URL: `https://a898954139.github.io/NexusAcademy/`
- Vite base: `/NexusAcademy/`
- First Pages deploy failed with `404 Not Found`
- Pages API already showed enabled
- Workflow rerun succeeded without changing YAML
