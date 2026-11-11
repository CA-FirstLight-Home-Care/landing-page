# FirstLight Home Care: Southern California Landing Site

Regional landing website for the Southern California Alliance of FirstLight Home Care franchise owners.

- **Production URL**: https://firstlight-socal.pages.dev/
- **Routes**:
  - `/` (`/index.html`): Hero, who we are / what we do, and four-step guided flow (office selection, care quiz, results, and inquiry modal).
  - `/services` (`/services.html`): Accessible comparison table of the seven core non-medical services and scheduling caveats.
  - `/locations` (`/locations.html`): 15 participating offices directory with search/ZIP filtering, maps links, and verified contact links.
  - `/faqs` (`/faqs.html`): 13 single-column FAQs with local search and expand/collapse controls.
- **Configurations (`config/`)**:
  - `config/quiz.json` & `config/quiz.yaml`: Quiz questions, options, and branching keys.
  - `config/offices.json` & `config/offices.yaml`: Participating office list, coverage ZIP mapping, addresses, and verified socials.
  - `config/services.json` & `config/services.yaml`: Seven core care service definitions, descriptions, tasks, and schedules.
  - `config/faqs.json` & `config/faqs.yaml`: Frequently asked questions and answers.

---

## Local Development & Publishing

The live site is served via Cloudflare Pages through an allowlist `_worker.js` generated from the four standalone HTML files.

### 1. Preparing the Publish Bundle
Whenever changes are made to the HTML documents, repackage the `publish/` directory:
```bash
python3 tools/prepare-publish.py
```
This updates `publish/_worker.js` with embedded copies of the HTML files and verifies that only public files are included in `publish/`.

### 2. Testing Routes Locally
```bash
npm install
node tests/test_routes.mjs
```

### 3. Local Preview Server
```bash
python3 tools/preview.py 8788
# Visit http://127.0.0.1:8788
```

---

## Deployment & CI/CD

Deployment is automated via GitHub Actions on push/merge to the default branch (`main`).

### Required GitHub Secrets
To enable automated deployments via GitHub Actions, configure the following secrets in repository settings (**Settings > Secrets and variables > Actions**):
- `CLOUDFLARE_API_TOKEN`: Cloudflare API token with **Cloudflare Pages: Edit** permission.
- `CLOUDFLARE_ACCOUNT_ID`: `1b316c4a14fed87a4c721863184e0c77`

### Manual Deployment via Wrangler CLI
```bash
npx wrangler pages deploy publish --project-name firstlight-socal --branch main
```

---

## Compliance & Privacy Standards
- **Private by Design**: Geolocation runs on-device upon explicit user click; no coordinates or answers are sent to external servers or persisted in browser storage.
- **WCAG 2.2 AA**: Accessible semantic landmarks, keyboard navigation, high contrast, reflow up to 200%, and responsive design down to 320px without horizontal overflow.
- **No Em/En Dashes**: All punctuation adheres to plain English hyphens, commas, or slashes.
- **Draft Disclaimer**: Each office is independently owned and operated. Not yet approved by FirstLight Home Care corporate.
