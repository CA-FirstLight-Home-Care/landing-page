# Public deployment

Live URL: https://firstlight-socal.pages.dev/
Deployment URL: https://a21065e1.firstlight-socal.pages.dev/
Project: firstlight-socal
Cloudflare account: Gcheung@firstlighthomecare.com's Account
Connected identity: gcheung@firstlighthomecare.com
Account ID: 1b316c4a14fed87a4c721863184e0c77
Deployment ID: a21065e1-42b8-4f70-a590-d68d26fd0d03
Deployment completed: November 10, 2026, 7:02:33 PM PST

## Scope and serving mode

This is a NEW Cloudflare Pages project. Existing firstlight-montclair was not modified. No custom domain, purchase, plan change, or credential creation was used.

The current self-contained index.html is served byte-for-byte by a minimal Pages advanced-mode function. This lets the sanctioned connector deploy without extracting OAuth credentials or obtaining a separate upload JWT. It uses the normal Pages Functions serving path (subject to the account's function-request allowance), not an unlimited static-asset-only deployment. No paid plan was enabled.

Only / and /index.html return the HTML. All other routes return 404, including README, offices.json, old versions, screenshots, source workbooks, verification notes and the serving wrapper itself. HTML already embeds the necessary office data, font, styles, JavaScript and logo. No separate local files are publicly available.

The exact draft footer, noindex metadata, all ZIP mappings, TBD handling, phone numbers, official URLs, and accessible modern layout are unchanged.

## Evidence

- deployment/live-verification.json: curl/body equality, browser ZIP tests and excluded-file checks.
- deployment/live-headers.txt and deployment/live-index.html: fetched public response.
- deployment/live-desktop.png and deployment/live-mobile.png: browser verification screenshots kept locally only.
- deployment/preflight.json: approved source fingerprint.

Source SHA-256: 0cc3e7120561710f5e58612eb538772da43a6890400a48fb0da12b540cc921e6

## Maintenance caution

Do NOT upload the entire local deployment folder as a static directory: it contains local verification evidence and scripts. The approved deployment sends only the generated server-side wrapper holding the exact index.html response; it does not expose those neighboring files. For an update, regenerate the wrapper from the reviewed HTML and deploy only to firstlight-socal, then rerun live checks.
