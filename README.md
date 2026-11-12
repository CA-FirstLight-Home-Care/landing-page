# FirstLight Home Care: Southern California Landing Site

[![Deploy to GitHub Pages](https://github.com/firstlight-socal/landing-page/actions/workflows/deploy.yml/badge.svg)](https://github.com/firstlight-socal/landing-page/actions/workflows/deploy.yml)
[![coverage](https://img.shields.io/endpoint?url=https://firstlight-socal.github.io/landing-page/badges/coverage.json)](https://github.com/firstlight-socal/landing-page/actions/workflows/test.yml)

Regional landing website for the Southern California Alliance of FirstLight Home Care franchise owners.

- **GitHub Pages URL**: https://firstlight-socal.github.io/landing-page/
- **Cloudflare Pages URL (alternative)**: https://firstlight-socal.pages.dev/
- **Routes & Pages**:
  - `index.html`: Hero, who we are / what we do, and four-step guided flow (office selection, care quiz, results, and inquiry modal).
  - `services.html`: Accessible comparison table of the seven core non-medical services and scheduling caveats.
  - `locations.html`: 15 participating offices directory with search/ZIP filtering, maps links, and verified contact links.
  - `faqs.html`: 13 single-column FAQs with local search and expand/collapse controls.
- **Page assets**: Page-specific JavaScript lives in `assets/`. Sass source styles live in `styles/`, with shared theme colors in `styles/_tokens.scss`; compiled CSS and the shared font are in `assets/`. Edit the root HTML, JavaScript, or Sass sources. Run `npm run build:css` to compile styles, or `npm run prepare:publish` to compile and refresh the Cloudflare publish output.
- **Configurations (`config/`)**:
  - `config/quiz.yaml`: Quiz questions, options, and branching keys.
  - `config/offices.yaml`: Participating office list, coverage ZIP mapping, addresses, and verified socials.
  - `config/services.yaml`: Seven core care service definitions, descriptions, tasks, and schedules.
  - `config/faqs.yaml`: Frequently asked questions and answers.

---

## Local Development & Testing

### Linting

```bash
npm run lint
```

### 1. Unit tests and coverage

```bash
npm install
npm test
```

`npm test` runs the unit tests with c8 and writes `coverage/coverage-summary.json`. Pure helpers live in `assets/lib/` (ZIP routing, autocomplete, distance, quiz scoring, formatting, and the service area map). `npm run test:routes` still checks the published pages. `npm run test:all` runs both.

The coverage badge is built by `node tools/coverage-badge.js` during the GitHub Pages deploy. After that deploy, the badge JSON is at `https://firstlight-socal.github.io/landing-page/badges/coverage.json`. shields.io reads that file, so the badge needs no account and no secret. The same files are also committed under `badges/` for the raw GitHub URL `https://raw.githubusercontent.com/firstlight-socal/landing-page/main/badges/coverage.json`.

### 2. Testing Routes Locally

```bash
npm install
node tests/test_routes.mjs
```

### 3. Local Preview Server

```bash
npm run preview -- 8788
# Visit http://127.0.0.1:8788
```

---

## Deployment & CI/CD

### GitHub Pages (Active)

A push to `main` builds the site and publishes that build to the root of the `gh-pages` branch (`.github/workflows/deploy.yml`). The public site is **https://firstlight-socal.github.io/landing-page/** once Pages is set to deploy from `gh-pages` at `/ (root)`.

The production publish includes `badges/coverage.json`, so the coverage badge stays at `https://firstlight-socal.github.io/landing-page/badges/coverage.json`. That publish cleans the branch root and keeps `pr-preview/`. A preview deploy writes only under `pr-preview/pr-<number>/`.

### Pull request previews

A pull request opened from this repository gets a temporary copy of the site at:

`https://firstlight-socal.github.io/landing-page/pr-preview/pr-<number>/`

`.github/workflows/preview.yml` publishes that folder when the pull request is opened, reopened, or updated, and removes it when the pull request is closed. The workflow leaves a sticky comment with the link. Fork pull requests are skipped, because GitHub does not give those workflows permission to publish.

Each page already sends `noindex`. `robots.txt` also disallows `/pr-preview/` and `/landing-page/pr-preview/`, so a preview is not offered to search engines. Page, stylesheet, script, font, GeoJSON, and Leaflet links are relative, so the same files work at the site root and under a preview folder.

### Cloudflare Pages (Alternative)

Whenever publishing to Cloudflare Pages:

```bash
npm run prepare:publish
npx wrangler pages deploy publish --project-name firstlight-socal --branch main
```

---

## Compliance & Privacy Standards

- **Private by Design**: Geolocation runs on-device upon explicit user click; no coordinates or answers are sent to external servers or persisted in browser storage.
- **WCAG 2.2 AA**: Accessible semantic landmarks, keyboard navigation, high contrast, reflow up to 200%, and responsive design down to 320px without horizontal overflow.
- **No Em/En Dashes**: All punctuation adheres to plain English hyphens, commas, or slashes.
- **Draft Disclaimer**: Each office is independently owned and operated. Not yet approved by FirstLight Home Care corporate.
