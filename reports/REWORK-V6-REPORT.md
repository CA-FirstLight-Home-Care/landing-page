# FirstLight Southern California, rework v6

## Live release

- Main: https://firstlight-socal.pages.dev/
- Services: https://firstlight-socal.pages.dev/services
- Locations: https://firstlight-socal.pages.dev/locations
- Project: `firstlight-socal`; account `1b316c4a14fed87a4c721863184e0c77`.
- Connected identity confirmed: `gcheung@firstlighthomecare.com`.
- Final deployment: `bcc15953-ba23-4deb-a55d-6fa9d1db42ca`; finished Nov 10, 2026 09:55:54 PM PST.
- Deployment-specific URL: https://bcc15953.firstlight-socal.pages.dev
- Pages Read and Pages Write both worked. No other project, domain, account setting or purchase was changed.

## What changed

- Location-only office labels everywhere. No owner names remain in any of the three raw public HTML bodies, including embedded JSON. Original owner/source audit records stay in local private JSON files.
- Step 1 candidates show only the office location, areas served and the essential confirmation action. No owner, phone, social profile or other contact detail appears in that card.
- All four steps use the same guided section. Only the current pane is shown. Confirming an office focuses the quiz; headings receive focus when changing steps, reduced motion is respected, and back/edit controls preserve answers. The header's start action also reveals Step 1 correctly.
- The quiz is eight optional questions. The dedicated respite, homeownership and life-insurance questions are gone.
- Separate alphabetical Locations page with all 15 offices, verified phones/websites or TBD, known area labels, sheet-only ZIP disclosures, verified IG/X/LinkedIn and deep links into the guide. All offices have equal-weight cards.
- City searches use original area labels plus the exact public Areas We Serve lists recorded in `city-aliases-v6.json`. Shared cities require ZIP clarification rather than silently choosing an office. No city-to-ZIP assignment was inferred or imported.
- Step 4 pre-fills the readonly office field, actual entered ZIP and an editable readable summary of all eight answers, suggested care types and discussion topics. Returning without changing the guide preserves edits; changing the guide refreshes the generated note.
- The scheduling placeholder has a fragment-only local prefill with office, ZIP, notes and any fictional name/email typed. Clicking it does not navigate or contact a booking service. The demo form validates and confirms that nothing was sent. Nothing is persisted.
- Fixed a narrow-screen hero phrase at 360px and preserved the font-license HTML comment so it cannot appear as page text. Kept the modern brand palette, accessible focus rings, plain copy and draft disclaimer.
- Preserved all six separate service explanations, all 13 FAQ answers/search/expand controls, pricing substance, overlap rules, verified contacts/socials and national-finder fallback.

## Final question list and rules

Every question can be skipped. Every question also offers Not sure / prefer not to say.

| #   | Question                                       | Summary effect                                                                                                                      |
| --- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Who are you finding help for?                  | Everyday context only; no names requested.                                                                                          |
| 2   | What everyday help would be useful?            | Companion, personal or both.                                                                                                        |
| 3   | What best describes their memory needs?        | Concerns and diagnosed suggest adapted memory support with different, non-diagnostic reasons.                                       |
| 4   | Is this after a hospital stay or surgery?      | Yes suggests post-surgery and transitional support.                                                                                 |
| 5   | When might help be needed?                     | Multi-select schedule; family caregiver break suggests respite. Overnight/day-and-night are schedules, not extra service types.     |
| 6   | Is the person a Veteran or a surviving spouse? | Veteran/surviving-spouse answers suggest Veteran care and VA discussion topics, not eligibility.                                    |
| 7   | Do they have long-term care insurance?         | Existing policy suggests a long-term care insurance review.                                                                         |
| 8   | How are they thinking about paying for care?   | Selected payment answers show the generic financial-consulting note; insurance and VA payment choices show their own review topics. |

Respite is now the **Give our family caregiver a break** checkbox in Question 5. It can be combined with regular daytime, occasional or overnight scheduling options. Not sure is exclusive.

Question 8 shows **Financial consulting may be available to help you explore ways to pay for care** for:

- Income, savings or other assets.
- Family members will help pay.
- Home equity or selling a home.
- Waiting for insurance, a home sale or benefits.
- Not sure how to pay, I would like to explore options.
- Not sure / prefer not to say.

Skipping Q8 does not trigger that note. Insurance alone leads to policy-review questions, and Veterans benefits leads to VA discussion questions. Removed homeownership/life-policy fields cannot independently trigger anything. No financial or booking vendor name is on the site. No qualification statement or benefit amount is given.

VA and insurance facts were retained from the prior sourced version:

- https://www.va.gov/pension/aid-attendance-housebound/
- https://www.va.gov/geriatrics/pages/Homemaker_and_Home_Health_Aide_Care.asp
- https://acl.gov/ltc/costs-and-who-pays/what-is-long-term-care-insurance

## Shared city handling and evidence

These are overlaps in the available city labels, not a comprehensive postal-city database. City labels find candidates; the unchanged source ZIP map is decisive, even if it resolves to a different office than the initial city candidates.

| Shared city | Offices in the available city labels | Coverage-label sources                                                                                                                                            |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Glendale    | Burbank, Glendale                    | [Burbank](https://www.firstlighthomecare.com/home-healthcare-burbank/); [Glendale](https://www.firstlighthomecare.com/home-healthcare-glendale/)                  |
| Los Angeles | Burbank, Glendale                    | [Burbank](https://www.firstlighthomecare.com/home-healthcare-burbank/); [Glendale](https://www.firstlighthomecare.com/home-healthcare-glendale/)                  |
| Ontario     | Montclair, Rancho Cucamonga          | Montclair: areas provided in Gary's original brief; [Rancho Cucamonga](https://www.firstlighthomecare.com/home-healthcare-rancho-cucamonga/)                      |
| Pomona      | Chino Hills, Montclair               | [Chino Hills](https://www.firstlighthomecare.com/home-healthcare-chino-hills/); Montclair: areas provided in Gary's original brief                                |
| Temple City | Pasadena, San Gabriel                | [Pasadena](https://www.firstlighthomecare.com/home-healthcare-pasadena-altadena/); [San Gabriel](https://www.firstlighthomecare.com/home-healthcare-san-gabriel/) |

Tested all five city prompts. For the real Pomona overlap, ZIP **91766 resolves only Montclair**, and **91768 resolves only Chino Hills**, using only the existing source sheet mappings. No office was auto-selected from the city label. Empty/invalid clarification fields have associated inline error text and keyboard focus. ZIPs **91396 and 91226** continue to show both listed offices with an explicit shared-ZIP notice and visitor choice.

## Data, pricing and sources unchanged

`offices.json` remains the editable authoritative input for the 225 unique ZIP mappings. `office-extras.json` remains the coordinate/contact/social audit input. The workbook and sheet were not edited. `build-v6.py` reads those local source files and publishes only required lookup fields, not ownership/audit internals. Public address coordinates and the 13 verified social links across seven offices are unchanged. Fourteen office websites remain verified; Montclair's unverified office website remains TBD, not invented. All 15 phone values were preserved.

| Location                   | Listed ZIP count | Office website status |
| -------------------------- | ---------------: | --------------------- |
| Burbank                    |               14 | Verified              |
| Chino Hills                |                7 | Verified              |
| Glendale                   |               27 | Verified              |
| Irvine                     |               20 | Verified              |
| Marina del Rey             |               12 | Verified              |
| Montclair                  |                5 | TBD                   |
| Pasadena                   |               28 | Verified              |
| Rancho Cucamonga           |                9 | Verified              |
| San Clemente               |               11 | Verified              |
| San Gabriel                |               12 | Verified              |
| Simi Valley                |               32 | Verified              |
| Temecula                   |                9 | Verified              |
| West Hollywood             |                9 | Verified              |
| Whittier                   |               15 | Verified              |
| Woodland Hills / Calabasas |               17 | Verified              |

Shared ZIP counts appear under each listed office; they are not an additional unique ZIP.

Pricing wording, unchanged except requested punctuation/name edits:

> Rates vary by local office, the help needed and the schedule. Care is generally billed by the hour, and a minimum visit length may apply. Ask your local team for a written quote after a free care consultation, including any holiday, overtime, mileage and cancellation charges. There is no single Southern California alliance rate.

This avoids presenting the previously known Montclair rate as an alliance-wide price. No hourly price or minimum specific to one office is shown as a regional promise.

The new city labels were extracted only from the exact `.service-areas-row li` lists in the already-verified FirstLight office pages under local `research/official-*.html`; `city-aliases-v6.json` records each public page URL. Existing Montclair city labels are those supplied by Gary. No new ZIP source was used.

## Verification

- Local: **148 checks passed**.
- Live: **148 checks passed**; exact final HTML hashes match local.
- Main, services, locations and their `.html` aliases: **200** and byte-for-byte identical to the local files. Main title and ZIP box confirmed with curl.
- **21 private/other paths checked: all 404**, including README, offices JSON, audit/workbook files, backups, screenshots, test results, deployment helpers and `_worker.js`.
- Raw live HTML grep: **0 owner names**, **0 FirstLight Home Care of prefixes**, **0 em/en dashes** across all three pages. Visible labels/aria/title cleanup was also checked.
- All **225 ZIP mappings** match the private source; uncovered 10001 falls back to the national finder; both shared ZIPs remain explicit choices.
- Live 91710 -> Montclair -> eight questions -> summary -> prefilled Step 4 works. Deep links validate office IDs and do not accept an uncovered or mismatched ZIP.
- **1,024 care-answer combinations** match the six care rules. Payment, Veteran/spouse, memory and LTC branches tested separately. Skip-all, Back, edit, questionnaire progress and the header start action passed.
- Booking preview is inert; its params carry the edited summary and fictional name/email. Demo validation/error focus and not-sent confirmation passed. No application external requests, persistent-storage writes or JavaScript errors in the browser suite.
- No horizontal overflow at **320, 360, 375, 390, 414px**, including each of the eight question screens, all four steps, long prefilled text, services, locations, expanded ZIPs and shared-city clarification. Both root dimensions and visible element bounds were checked, not just clipped overflow.
- **30 supplemental expanded-content reflow checks passed**: all six service suggestions plus all four program topics with answer review open at the five mobile widths; fully expanded contact/social/booking controls; all 15 ZIP disclosures open; and every office contact pane at 320px.
- 200% text enlargement and narrower viewport checks passed. Contact controls have effective tap targets at least 44px.
- **18 axe scans, 0 violations**, WCAG 2.0/2.1/2.2 A/AA tags and best-practice checks.
- **630 keyboard focus stops** across six page/flow states at 320, 720 and 1440px: visible focus rings, no obscured focus or traps.
- Axe's incomplete gradient-color items were additionally reviewed with computed foreground colors and actual sampled background pixels; **33 supplemental contrast checks passed**, minimum sampled text contrast **5.27:1**. Decorative arrows and single-letter X accessible names were reviewed. Automated and targeted tests are not a formal WCAG certification.

Detailed evidence: `v6-test-results.json`, `live-v6-results.json`, `live-verification-v6.json`, `contrast-v6-results.json`, `v6-expanded-results.json`. Security headers retain fail-closed form/network restrictions, geolocation self-only and noindex/nofollow for this draft.

## Files and screenshots

- Current: `/workspace/socal-landing/index.html`, `services.html`, `locations.html`.
- Backups: `/workspace/socal-landing/index-v5.html`, `/workspace/socal-landing/services-v5.html`. Locations is new, so there was no previous locations page to back up.
- The Pages function contains only the three exact public HTML bodies. Its static asset manifest is empty and its route allowlist returns 404 for everything else. No folder upload.

Fresh final-live screenshots, all under `/workspace/socal-landing/`:

- `/workspace/socal-landing/desktop.png`
- `/workspace/socal-landing/mobile.png`
- `/workspace/socal-landing/step-1-desktop.png`
- `/workspace/socal-landing/step-1-mobile.png`
- `/workspace/socal-landing/step-2-desktop.png`
- `/workspace/socal-landing/step-2-mobile.png`
- `/workspace/socal-landing/step-3-desktop.png`
- `/workspace/socal-landing/step-3-mobile.png`
- `/workspace/socal-landing/step-4-desktop.png`
- `/workspace/socal-landing/step-4-mobile.png`
- `/workspace/socal-landing/prefilled-step-4-desktop.png`
- `/workspace/socal-landing/prefilled-step-4-mobile.png`
- `/workspace/socal-landing/locations-desktop.png`
- `/workspace/socal-landing/locations-mobile.png`
- `/workspace/socal-landing/shared-city-desktop.png`
- `/workspace/socal-landing/shared-city-mobile.png`
- `/workspace/socal-landing/services-desktop.png`
- `/workspace/socal-landing/services-mobile.png`

No real calls, bookings, contact requests, emails or other messages were sent. The only external change was the explicitly authorized update to firstlight-socal.
