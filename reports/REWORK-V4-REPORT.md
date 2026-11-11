# FirstLight SoCal — interactive draft (v4)

## Published release
- Public URL: https://firstlight-socal.pages.dev/
- Existing Pages project: `firstlight-socal`; account `1b316c4a14fed87a4c721863184e0c77` (`gcheung@firstlighthomecare.com`).
- Deployment: `75a8c277-98e5-4bc0-b65d-92833e5951a6`; completed November 10, 2026, 8:32:07 PM PST.
- Immutable release URL: https://75a8c277.firstlight-socal.pages.dev
- Local source: `/workspace/socal-landing/index.html` (190,123 bytes).
- SHA-256: `d02d6d214fa8ce6dca1c52c33a7d02d71e648c310297e3d54600d94d1659d14a`.
- Backup of the previous live version: `/workspace/socal-landing/index-v3.html` (149,614 bytes; SHA-256 `dfaf8271d4101427c35ed97fd11f4c5d266ca7c2bcec18166eabdac4caf13ba5`).
- Only the self-contained HTML is served, at `/` and `/index.html`. The existing Pages advanced-mode routing wrapper returns 404 for every other path. No source directory, helper, screenshot, report, office JSON, backup, or test evidence was uploaded as a public asset. No other project, domain, plan, or account setting changed.

## 1. Short care guide
The optional guide sits directly before the existing six service descriptions. It is a native, keyboard-operable disclosure, closed initially so the page stays approachable. Seven questions use fieldsets, legends, radio groups, and an explicit “not sure” option:

| Question | Effect on the guide |
| --- | --- |
| Who are you finding help for? | Self / family member or friend / someone else / not sure. Context only; does not infer a care level. |
| What everyday help would be useful? | Company, meals, or light household tasks → Companion care. Bathing, dressing, or toileting → Personal care. Both → both service descriptions. Not sure → no unsupported inference. |
| Are memory changes a concern? | Yes → Dementia & Alzheimer’s care, with a reason about familiar routines and preferences; explicitly not a diagnosis. |
| Is this after a hospital stay, surgery, illness, or injury? | Yes → Post-surgery & transitional care, for everyday help while getting back home. |
| What kind of schedule are you considering? | Occasional / regular daytime / overnight or day-and-night / not sure. Adds a scheduling note, not a seventh service or a promise of availability. Overnight staffing and rest arrangements must be confirmed locally. |
| Does a family caregiver need time to rest or be away? | Yes → Respite care, explaining a caregiver break with support in place. |
| Is the person a Veteran or a surviving spouse? | Yes → Veteran care. Benefit options remain conditional on eligibility and office participation. |

Matching services combine in the original six-service order and each includes a plain reason. All-unknown answers do not manufacture a recommendation. The guide does not diagnose, prescribe care, decide benefits, or replace an assessment. Recommendations are cleared if an answer changes. Answers are not transmitted or persistently stored. Validation provides a focused, linked error summary, group-level errors, and an announced result. Reset and page exit clear answers. Copy refers only to the existing service descriptions; no new clinical or price claims were added.

## 2. FAQ controls and local search
- Expand all / Collapse all apply to the currently matching questions (all 13 when there is no search).
- Search ranks existing questions with keyword/synonym scoring in the page. No model, server search, external API, or generated answer is involved.
- Visible badge: **“Placeholder: future AI assistant.”** Supporting copy: **“No AI is connected. This demo matches keywords and similar words in the FAQs on this page. Your search stays here.”**
- Example: `ltc` finds the existing insurance FAQ; `va` finds Veteran benefits; `same caregiver`, `caregiver sick`, and `gps` find their relevant existing answers.
- The strongest match opens, matching questions retain a stable ranked order, and Clear search / Escape restore the original list. Empty results have a clear message and disable the bulk controls.
- Accessible search label, status announcements, native details/summary, and keyboard controls remain available. FAQ content and pricing wording were not changed this round.

## 3. Subordinate contact placeholders
The existing selected-office call button remains the real, primary contact action. “Other ways to connect” is an optional disclosure below it, explicitly marked **Placeholders**. Both demos require a selected office and reset when the selected office changes.

### Booking
A button-styled anchor says “Preview booking link — Placeholder.” Its actual target is an in-page demo notice, not a real Calendly account. The text `calendly.com/placeholder` is only an example of a future link. Clicking opens no account, makes no request, and announces that nothing was booked.

### Contact form
Includes name, phone, email, five-digit ZIP, preferred phone/email contact, message, and a required demo acknowledgment checkbox. Name, ZIP, preferred contact, and acknowledgment are required. Phone is required for phone preference; email for email preference. Supplied optional contact values are also validated. Message is optional (500-character maximum).

Clearly labeled **Placeholder** and **demo only** throughout. Visitors are asked to use fictional details and not enter health information. The checkbox acknowledges that no request will be sent; it is not a marketing-consent claim. Accessible validation uses a focused linked error summary and associated inline errors. Successful validation clears fields and shows **“Demo only — not sent.”** It does not echo personal values or claim an office received anything. Without JavaScript, both forms fail closed. A Content Security Policy blocks form submissions and application network connections (`form-action 'none'; connect-src 'none'`). No backend, real AI, calendar integration, email, CRM, cookies, or persistent storage was added.

## Preserved
All 15 offices, all 225 unique ZIP mappings and overlaps, approved source rules, public contact details/TBDs, consent-only device-local geolocation, verified Instagram/X/LinkedIn links, equal office treatment, existing service/FAQ facts, pricing caveats, and the single selected-office contact path remain unchanged. No new Drive research was needed for this interaction-only revision; the prior source-backed service and FAQ text remains intact.

Exact footer remains:
> Draft – each office is independently owned and operated. Not yet approved by FirstLight Home Care corporate.

## Tests and review
- Original functional suite: 45/45 passed, including all ZIP mappings and source/footer integrity.
- Location/social suite: 96/96 passed.
- Legacy accessibility suite: 42/42 targeted checks, 15 axe states, zero violations.
- New interaction suite: 53/53 checks, 10 axe states, zero violations. Includes all 256 service-recommendation combinations, unknown answers, keyboard radio selection, validation/reset, FAQ ranking/bulk/no-results, inert booking, phone/email demo submissions, state clearing, no application network or persistent storage, no-JavaScript safety, reflow, and effective 44px targets.
- Dedicated keyboard audit: 216 Tab stops across 320px, 720px, and 1440px; no clipped/obscured focus; visible focus rings at least 3px. A genuine textarea focus-visibility issue was fixed before release.
- Reflow checked 320–1440px and at 200% viewport/text enlargement; reduced motion honored.
- Radios/checkboxes are 24px native controls inside at least 48px clickable labels, so the effective targets exceed the requested 44px. The older audit initially measured only the native control; its measurement was corrected to include the associated label, not by relaxing the target requirement or changing the live HTML.
- 27 checked foreground/background pairs all exceed 4.5:1; input boundaries exceed 3:1. Yellow is an accent/background with dark text, never small yellow text on white.
- Axe manual-review notices concern gradient/overlap background detection, non-text decorative marks, and stylized X-label detection. Reviewed the gradient endpoints and palette; decorative marks are hidden from assistive technology and the X social icon has an office-specific accessible X label. Automated testing is not a formal WCAG certification; real assistive-technology/user testing is still advisable.
- Live curl: HTTP 200, correct title and ZIP control, exact byte-for-byte match with local SHA above.
- Live browser: 91710 → Montclair; 91709 → Chino Hills; 92602 → Irvine; overlaps 91396 / 91226 explicit; 10001 → national finder fallback. Consent-based browser geolocation works with a synthetic public Irvine-office point.
- Live quiz, FAQ synonym ranking/bulk/no-results/clear, inert booking, and demo email validation/confirmation/clearing all passed. Seven live axe states have zero violations. No JS errors or external application requests were observed.
- 35 tested non-page/private paths return 404, including README, offices.json, all version backups, reports, test data, screenshots, and new helper files. Only the HTML is publicly served.
- Fresh live desktop/mobile and expanded-state captures were viewed critically. New sections stack cleanly on mobile; no horizontal clipping, overlapping controls, or focus issues found. Expanded examples use Irvine rather than featuring Montclair.

## Evidence and screenshots (local only)
All paths below are under `/workspace/socal-landing/`:
- `desktop.png`, `mobile.png`: fresh initial-state full-page captures.
- `new-sections-desktop.png`, `new-sections-mobile.png`: quiz recommendations, matching FAQ and contact placeholders visible.
- `quiz-desktop.png`, `quiz-mobile.png`: readable guide detail.
- `faq-search-desktop.png`, `faq-search-mobile.png`: FAQ/search detail.
- `contact-demo-desktop.png`, `contact-demo-mobile.png`: contact-demo detail.
- `test-results.json`, `location-social-results.json`, `accessibility-results.json`, `v4-test-results.json`, `v4-keyboard-results.json`.
- `deployment/live-verification-v4.json`: production checks and release identity.
- `deployment/preflight-v4.json`: published-content fingerprint and routing scope.

## Future work intentionally not connected
A real AI assistant, actual calendar account, or sending contact form needs separate implementation and approval. This release is deliberately a safe interactive draft; actual care inquiries still use the verified selected-office phone button.
