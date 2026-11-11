# Guided flow rework - v5

## Live release

- Main: https://firstlight-socal.pages.dev/
- Service reference: https://firstlight-socal.pages.dev/services
- Aliases `/index.html` and `/services.html` serve the same two exact files.
- Existing project `firstlight-socal`; account `1b316c4a14fed87a4c721863184e0c77` (`gcheung@firstlighthomecare.com`).
- Deployment `94f0c97c-9d40-4cc8-a4b2-1df283144ec1`; November 10, 2026, 9:06:24 PM PST.
- Only the two HTML bodies are served through the minimal Pages function. Every other path returns 404; non-GET/HEAD methods return 405. No directory upload, new project, custom domain, purchase or other-project change.
- Previous live page preserved as `/workspace/socal-landing/index-v4.html` (SHA-256 `d02d6d214fa8ce6dca1c52c33a7d02d71e648c310297e3d54600d94d1659d14a`).

## New flow

1. Hero with a four-step indicator, one short services-reference link, and privacy explanation.
2. **Step 1 - Choose your office.** ZIP, consent-only location, or city directory finds candidates; the visitor must explicitly confirm an office. A unique ZIP/location result no longer automatically selects an office. Overlapping ZIPs and shared-address location results are not silently resolved.
3. **Step 2 - Your needs.** Confirmation scrolls and focuses the step heading. Eleven optional questions appear one at a time, with Back, Next, Skip and “Question N of 11.” Nothing is required. Current and completed steps are keyboard-operable, while unavailable later steps are disabled.
4. **Step 3 - Your guide.** Finishing the quiz focuses a summary containing the confirmed office, suggested care topics with service-section links, optional program/funding questions with reasons, scheduling caveats, and a review of answers. “Edit my answers” preserves selections; changing an answer invalidates downstream steps until the guide is rebuilt.
5. **Step 4 - Next step.** One continue button moves focus here. The verified local phone call remains primary. Scheduling and message/contact-form demos are subordinate and explicitly marked placeholders. No account is connected, no booking is made and no form data is sent or persistently stored. The form still validates accessibly, clears values and confirms “Demo only - not sent.”
6. **FAQ at the bottom**, after next step. Existing answers and pricing wording are unchanged. Expand/collapse matching questions and the local keyword/synonym search remain; the search visibly says it is a future-AI placeholder with no connected AI.

The main page uses progressive disclosure: the active guide/summary/contact stage is shown, rather than repeating three long panels at once. The office section remains available above, and people can return to change offices or answers. All step and question transitions move focus to headings and respect reduced motion.

## Questions and mapping

All questions have “Not sure / prefer not to say”; Skip and blank Next are also supported.

| #   | Question                                       | Effect                                                                                                                                                                                                                                                               |
| --- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Who are you finding help for?                  | Self / family or friend / someone else. Context only; no care-level inference.                                                                                                                                                                                       |
| 2   | What everyday help would be useful?            | Company/meals/household help → Companion care; bathing/dressing/toileting → Personal care; both → both.                                                                                                                                                              |
| 3   | What best describes their memory needs?        | None / some concerns / diagnosed dementia. Concerns and diagnosis both suggest discussing memory support, with different reasons and no diagnosis inferred.                                                                                                          |
| 4   | Is this after a hospital stay or surgery?      | Yes → Post-surgery/transitional care; includes illness/injury context.                                                                                                                                                                                               |
| 5   | When might help be needed?                     | A few hours/occasional, regular daytime, overnight, or day-and-night. Schedule note only, with local hours, staffing, rest arrangements and availability to confirm.                                                                                                 |
| 6   | Does a family caregiver need a break?          | Yes → Respite care.                                                                                                                                                                                                                                                  |
| 7   | Is the person a Veteran or a surviving spouse? | Either → Veteran care and VA pension/Aid & Attendance questions. A Veteran with relevant help/support needs can also ask about the distinct VA home-care program. Surviving-spouse status alone does not trigger that home-care program.                             |
| 8   | Do they have long-term care insurance?         | Yes → Policy review; also triggered if insurance is selected as planned payment. No claim approval inferred.                                                                                                                                                         |
| 9   | Does the person own a home?                    | Yes → Generic financial-consultation and home-related funding questions. No recommendation to sell/borrow and no eligibility inference.                                                                                                                              |
| 10  | Do they have a life insurance policy?          | Yes → A licensed policy-review question only; no conversion, settlement or cash-value promise.                                                                                                                                                                       |
| 11  | How are they thinking about paying?            | Income/savings/family; existing LTC policy; Veterans benefits; waiting on sale/insurance/benefits; or exploring options. Answers can add the relevant review topics. Waiting adds a cautious short-term-funding question; exploring options adds generic consulting. |

Care types combine in the original six-service order. Skipping everything yields no invented care or program matches and still allows a conversation with the chosen office.

## Financial and program wording

Gary’s later instruction is applied throughout both public files, FAQ and generated summary: **no named financial or booking vendor appears**, and there are no vendor links. The scheduling demo is labeled generically rather than using a booking-company name.

Exact generic wording:

> Financial consulting may be available to help you explore ways to pay for care. Ask your local office whether a free consultation is available. A conversation is not a loan approval, benefits decision or recommendation to buy a product.

Program cards always frame topics as “may be worth asking about.” They explicitly distinguish VA pension/Aid & Attendance from VA home-care support, identify policy/provider review needs, and caution about loan repayment, costs and separate terms. No dollar amount or eligibility decision is generated. Life-insurance conversion/settlement availability was not verified and is not claimed. No office participation or product approval is promised.

Facts and source URLs, including the two relevant Drive files, are recorded in `/workspace/socal-landing/PROGRAM-SOURCES-V5.md`. Private Drive URLs, brochure images, marketing pricing, provider contacts and source notes were not published.

## Preserved

- The same 15 offices and exact 225 unique ZIP mappings, overlaps, owners, phones, website TBDs, verified social data and geocoding sources.
- Only previously verified Instagram, X and LinkedIn links (13 links across 7 offices), shown in the selected-office contact panel. No new accounts guessed.
- Equal office treatment; no featured/default Montclair office or office-specific price. Screenshots use Irvine to avoid featuring Montclair; required live tests use 91710 → Montclair.
- Six source-backed service explanations, comparison and overnight/live-in caveats moved intact to the services page, with six stable anchors and the same header/footer appearance. Summary service links open a new tab so answers remain in the main flow.
- Pricing wording remains: “Rates vary by local office, the help needed and the schedule. Care is generally billed by the hour, and a minimum visit length may apply. Ask your local team for a written quote after a free care consultation, including any holiday, overtime, mileage and cancellation charges. There is no single Southern California alliance rate.”
- Exact draft note on both pages: “Draft – each office is independently owned and operated. Not yet approved by FirstLight Home Care corporate.”

## Verification

- Local and live comprehensive suite: **87/87 checks passed each**.
- **1,024 combinations** of care answers checked against the expected six-service mapping.
- Additional live tests: **6/6 passed**, including different answers changing the rendered summary, the far edge of a large radio label being clickable, reduced motion, and the actual browser Geolocation API with explicit test permission and synthetic public Irvine-office coordinates.
- Live end-to-end: **91710 → Montclair candidate → explicit confirmation → eleven questions → guide → next-step call/demos**, all correct. ZIP overlaps 91396/91226 stay explicit; 10001 stays uncovered with the national finder fallback. All 225 ZIP mappings exactly matched the source.
- Axe-core WCAG A/AA + 2.2 AA and best-practice scans: **22 states locally and 22 live; zero violations**.
- Keyboard audit: **405 Tab stops per run** across 320px, 720px and 1440px, with visible ≥3px focus rings and no obscured/clipped focus.
- Reflow checked at 320px/390px/720px/1440px; questions and services tested at 200% text enlargement. Semantic landmarks, single H1 and ordered headings, proper fieldsets/legends, skip link, labels, inline form errors and announcements passed.
- Effective clickable targets ≥44px. Question labels are ≥54px; native radio/checkbox controls remain 24px within large clickable labels. A real far-edge click was tested live.
- **35 text/background pairs ≥4.5:1**; minimum checked ratio 5.37:1. Gradient endpoints/palette and decorative non-text contrast-review notices were reviewed. Yellow is an accent/background with dark text.
- Reduced motion turns off smooth scrolling/animation. Step transitions focus the next step heading; question transitions focus the question heading.
- Scheduling is inert; demo form stays local, validates, clears values and announces not sent. Page exit clears office/quiz/search state. No-JavaScript mode fails closed but leaves the services link, office numbers and FAQs readable.
- No JavaScript errors, application network calls or persistent-storage writes observed. CSP blocks application connections and form submissions; native geolocation is allowed only for this origin and only requested after a click.
- Curl: root/index and services/services.html **200 with exact local byte matches**. **32 tested non-page/private paths return 404**, including office JSON, README, version backups, helpers, reports, screenshots, research and test data.
- Fresh live captures were viewed critically; all steps and the service reference stack cleanly on mobile, with no horizontal clipping or overlapping controls.
- These automated and targeted browser checks are not formal WCAG certification; real assistive-technology/user testing remains advisable.

## Local files and screenshots

All files are under `/workspace/socal-landing/`:

- Main: `index.html`; reference: `services.html`; backup: `index-v4.html`.
- `desktop.png`, `mobile.png`: initial main page.
- `step-1-desktop.png`, `step-1-mobile.png`: office candidate/confirmation.
- `step-2-desktop.png`, `step-2-mobile.png`: sequential quiz, memory question (3 of 11).
- `step-3-desktop.png`, `step-3-mobile.png`: rendered care/program guide.
- `step-4-desktop.png`, `step-4-mobile.png`: call and expanded placeholder options.
- `services-desktop.png`, `services-mobile.png`: separate service reference.
- `faq-v5-desktop.png`, `faq-v5-mobile.png`: bottom FAQ.
- `v5-test-results.json`, `live-v5-results.json`, `v5-extra-live-results.json`, `v5-contrast-results.json`.
- `deployment/live-verification-v5.json`, `deployment/preflight-v5.json`.
- `PROGRAM-SOURCES-V5.md`: sourced facts and explicit limitations.

## Fingerprints

- index.html: `17cc7cf72da888142c8d015ca62a888a55df238ada971753d23e5df48cc1cd7e`
- services.html: `5e6fe8ae860ad25e179bfc54b15556d864bc03e8ac0cef996258be918c067e35`
