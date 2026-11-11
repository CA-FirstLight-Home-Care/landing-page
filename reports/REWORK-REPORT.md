# Southern California one-page rework - final report

Live: https://firstlight-socal.pages.dev/  
Cloudflare Pages project: `firstlight-socal`; account `1b316c4a14fed87a4c721863184e0c77`, gcheung@firstlighthomecare.com (Gcheung@firstlighthomecare.com's Account).  
Final deployment: `c2a4fcac-0fe9-4157-905d-39b1ef7a39c8`, November 10, 2026, 7:48:08 PM PST.

## What changed

- One consistent path: find the local office by ZIP or consented location → Continue with this office → one shared contact panel → one verified telephone action. No repeated exits to office websites or separate service/FAQ pages. Optional directory uses the identical selection action.
- All fifteen offices are treated equally: alphabetical directory, no default office, no featured Montclair phone or price. Original offices.json, all 225 unique ZIP mappings, explicit overlap choices, verified contacts, TBD handling and exact draft disclaimer are unchanged.
- Six plain-English service comparisons explain who each is for, what caregivers do, how it differs and schedule considerations; overnight/24-hour/live-in is explained as scheduling rather than a different task category. Thirteen accessible FAQ expanders cover practical client questions, including pricing, minimums, benefits, timing, screening, continuity, backup, contracts, medical limits and location privacy.
- Location is requested only after clicking the button and granting browser permission. Matching runs on-device against build-time geocoded public office addresses. No coordinates are sent, stored, added to URLs or used by a third-party widget. Denial/unavailable/timeout cases announce the ZIP fallback. Shared-address nearest ties are shown equally; straight-line proximity never changes ZIP service coverage.
- Latest social scope applied: only verified Instagram, X and LinkedIn accounts. Thirteen links across seven offices; eight offices have none confirmed on these platforms. Labeled inline SVG links, 44px targets, safe new tabs, optional disclosure, no trackers/embeds.
- Modern geometric type, soft gradients, spacious cards, dark-green contact band and accessible green/yellow brand accents retained. Narrow navigation and social contrast polished after screenshot/axe review. Result text now stays fully opaque during its subtle translation animation, fixing a transient contrast issue caught by live axe; ZIP submission fails closed if JavaScript is disabled. Result and contact actions scroll fully into view below the sticky nav on mobile; six explicit viewport checks passed.

## Pricing wording used

> Rates vary by local office, the help needed and the schedule. Care is generally billed by the hour, and a minimum visit length may apply. Ask your local team for a written quote after a free care consultation, including any holiday, overtime, mileage and cancellation charges. There is no single Southern California alliance rate.

Why: only Montclair has supported numeric pricing. Publishing its rate as an alliance rate would be misleading, and featuring it would conflict with equal office treatment. No numeric office rate is now published. The free offer is an initial care consultation, not a blanket promise that every assessment, cancelled visit or service is free. Ask the local team for a written quote.

## Drive sources used (read only)

| File                                                                                                                                                   | Used for                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| [Understanding Our Services- Companion Care.docx](https://docs.google.com/document/d/1sD4sS8SCk3MEGRyFFoKV3Z_5nF6v945N/edit)                           | Companion duties and part-/full-time options                                |
| [Understanding Our Services- Dementia Care.docx](https://docs.google.com/document/d/1kTL3IsIKYLOItKcbfmzq68IU7CpEaP9u/edit)                            | Personalized routines, activities and dementia-support distinction          |
| [About FirstLight Home Care_with Travel Companion Services.docx](https://docs.google.com/document/d/1TlBIPw3tCbF8x-HTMmSSWXnyABZVkLzU/edit)            | Non-medical scope, service differences, direct-employee screening/training  |
| [Non-ICP Client Fit One-Pager - WellSky Intake Card - Montclair](https://docs.google.com/document/d/1d9GXDINfFR3EBUKC4ioDkZwi4gd98AIZLJ5G8QJHLJw/edit) | Confirms pricing is Montclair-only; no numeric rate generalized or featured |
| [Client Service Agreement - Standard Private Pay (BLANK)](https://drive.google.com/file/d/1lff4GQ4V2Zu2Ohi9BrKB28ZyTK2O-NwA/view)                      | Written/local rate terms; no universal cancellation or coverage guarantee   |
| [Client Intake & Onboarding Checklist](https://docs.google.com/document/d/1ZFPdHzed06A2Ka2cSfLvvHgCpxvjJSNzAd9bU5A4OVE/edit)                           | Assessment preparation, plan and agreement                                  |
| [Form #286 Telephone Intake Toolkit 4.8.2024](https://docs.google.com/document/d/1kgnkF2A1CPOTS39EjsAz1kNPz-H9aouP/edit)                               | First conversation, priorities and local market pricing questions           |

Public FirstLight sources: [service overview](https://www.firstlighthomecare.com/home-care-services/), [personal care](https://www.firstlighthomecare.com/home-care-services/personal-care/), [respite](https://www.firstlighthomecare.com/home-care-services/respite-care/), [veteran care](https://www.firstlighthomecare.com/home-care-services/specialty-care/veteran-care/), [recovery care](https://www.firstlighthomecare.com/home-care-services/specialty-care/rehabilitation-recovery-care/), [caregivers](https://www.firstlighthomecare.com/why-us/our-caregivers/). Exact fact/source mapping is in REFERENCE-NOTES-v3.md. No client records, PHI, internal margin targets or draft operational promises were published.

## Verified social links - requested platforms only

| Office                   | Instagram                                                             | X                                | LinkedIn                                                                          | Verification                                                                                                      |
| ------------------------ | --------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Burbank                  | Not verified                                                          | Not verified                     | Not verified                                                                      | No exact-office account verified on these platforms; omitted.                                                     |
| Chino Hills              | Not verified                                                          | Not verified                     | Not verified                                                                      | No exact-office account verified on these platforms; omitted.                                                     |
| Glendale                 | Not verified                                                          | Not verified                     | Not verified                                                                      | No exact-office account verified on these platforms; omitted.                                                     |
| Irvine                   | Not verified                                                          | Not verified                     | Not verified                                                                      | No exact-office account verified on these platforms; omitted.                                                     |
| Marina del Rey           | Not verified                                                          | Not verified                     | Not verified                                                                      | No exact-office account verified on these platforms; omitted.                                                     |
| Montclair                | [Instagram](https://www.instagram.com/firstlightmontclair)            | [X](https://x.com/FLHCMontclair) | [LinkedIn](https://www.linkedin.com/company/firstlight-home-care-of-montclair)    | Owner-supplied office hub matches name/address/phone; X profile independently confirms office.                    |
| Pasadena                 | [Instagram](https://www.instagram.com/firstlightpasadena/)            | [X](https://x.com/FLHC_Pasadena) | Not verified                                                                      | Official local office page links retained IG/LinkedIn. X profile names city and links exact official office page. |
| Rancho Cucamonga         | Not verified                                                          | Not verified                     | Not verified                                                                      | No exact-office account verified on these platforms; omitted.                                                     |
| San Clemente             | [Instagram](https://www.instagram.com/firstlight.sanclemente)         | Not verified                     | [LinkedIn](https://www.linkedin.com/company/firstlight-homecare-of-san-clemente)  | Official local office page links retained IG/LinkedIn.                                                            |
| San Gabriel              | Not verified                                                          | Not verified                     | Not verified                                                                      | No exact-office account verified on these platforms; omitted.                                                     |
| Simi Valley              | [Instagram](https://www.instagram.com/firstlightventuracounty)        | Not verified                     | [LinkedIn](https://www.linkedin.com/company/firstlight-home-care-of-simi-valley/) | Official local office page links retained IG/LinkedIn.                                                            |
| Temecula                 | Not verified                                                          | [X](https://x.com/FLHC_Temecula) | Not verified                                                                      | X profile names city and links exact official office page.                                                        |
| West Hollywood           | Not verified                                                          | Not verified                     | Not verified                                                                      | No exact-office account verified on these platforms; omitted.                                                     |
| Whittier                 | [Instagram](https://www.instagram.com/firstlight_home_care_whittier/) | Not verified                     | [LinkedIn](https://www.linkedin.com/company/firstlight-home-care-whittier/)       | Official local office page links retained IG/LinkedIn.                                                            |
| Woodland Hills–Calabasas | [Instagram](https://www.instagram.com/flhcwoodlandhillscalabasas/)    | Not verified                     | Not verified                                                                      | Official local office page links retained IG/LinkedIn.                                                            |

National accounts are excluded. A possible Rancho Cucamonga X profile (@FirstLight_RCH) only points to an old subdomain; omitted pending stronger current corroboration. Social research used official public links and connected public X search; broader search CLI was unavailable, so this is not an exhaustive platform-wide audit. Full exact verification URLs and address-geocoder sources: OFFICE-SOCIAL-GEO-REPORT.md.

## Sources and facts still needing local confirmation

- Other offices’ numeric pricing/minimums; specific local holiday/overtime/mileage/assessment/cancellation fees and notice periods.
- Guaranteed start dates, the same caregiver every shift, uninterrupted backup, overnight staffing/rest arrangements, 24-hour/live-in availability and benefit/VA/insurer participation or eligibility. The page asks/qualifies these instead of promising them.
- Montclair’s canonical FirstLight office-page URL remains TBD, unchanged. Its verified phone remains available through the same shared contact action as every other office.
- Eight offices have no confirmed Instagram/X/LinkedIn profile. No uncertain handles or national-account substitutions.

## Tests and deployment scope

- 45 functional regression checks passed, including every original ZIP mapping, 91710 → Montclair, 91709 → Chino Hills, 91396 and 91226 explicit overlaps, 10001 national fallback, all 15 phone actions, filter/no-JavaScript behavior and zero external font/widget/lookup requests.
- 96 location/social checks passed, covering all office points, both shared-address ties, permission denial, unavailable/timeout/invalid location, stale callbacks, keyboard activation, no visitor-coordinate storage/transmission and all 13 exact profiles.
- Axe-core 4.14.0: zero violations in 15 local states and three live states. Forty-two targeted accessibility checks passed: semantic landmarks/headings, skip link, labels/inline error/live results, keyboard filters/expanders, visible focus, ≥44px targets, 320px reflow, 200% zoom-equivalent and text enlargement, reduced motion and contrast. Checked text pairings minimum 5.37:1. Remaining axe incomplete items (gradient overlap and single-character X naming) manually reviewed; this is not a formal screen-reader certification.
- curl live root 200, exact byte-for-byte local match, correct title/ZIP/location controls; /index.html serves the same HTML. Live Chromium verified 91710 and additional ZIPs/overlaps/fallback plus the native Geolocation API with explicit synthetic-test permission. No JS errors or external asset/widget requests.
- Only HTML is served through the existing Pages advanced-mode wrapper; every other path is explicitly 404. Twenty-three tested private/unknown paths include README, offices.json, office-extras.json, old HTML backups, screenshots, source/test/reference files and worker/script paths. No directories uploaded, no custom domains, no purchases, no other project modified. Draft remains noindex/nofollow.

## Files

- Current self-contained page: /workspace/socal-landing/index.html
- Original live backup: /workspace/socal-landing/index-v2.html
- Fresh live desktop screenshot: /workspace/socal-landing/desktop.png (1440×5173)
- Fresh live mobile screenshot: /workspace/socal-landing/mobile.png (390×8375)
- Readable hero/contact detail crops: desktop-top.png, mobile-top.png, desktop-contact.png, mobile-contact.png
- Editable non-ZIP public metadata: office-extras.json; immutable reviewed ZIP/office dataset: offices.json
- Evidence: test-results.json, accessibility-results.json, location-social-results.json, deployment/live-verification.json
- All reports, source files, backups and screenshots remain local, not served.

## Decisions for Gary

- The one primary action is a phone call, not an online intake form. Confirm that choice and the free-initial-consultation offer with every office.
- Obtain local rate/minimum/agreement information and any missing verified social profiles before corporate approval.
- Confirm the public office addresses remain current, especially shared offices. Nearest physical office is deliberately distinct from territory assignment.
