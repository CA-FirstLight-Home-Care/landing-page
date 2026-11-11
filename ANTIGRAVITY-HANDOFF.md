# Continue this FirstLight Southern California website in Google Antigravity

You are the coding agent continuing an existing working website. Do not start over or replace it with a generic template. Read this prompt and the supplied files, preserve the working behavior, and make only the next requested changes. Treat current public HTML and the rules below as the present specification. Historical reports describe earlier versions, not permission to restore removed features.

## 1. Goal, audience and current release

Build a welcoming regional landing site for the SoCal Alliance of FirstLight franchise owners. Visitors are older adults, adults needing non-medical help, spouses, family caregivers and people planning care. Help them find their closest participating office, confirm service coverage, answer a short care guide, understand useful services/payment questions, then contact the chosen local team. Treat all 15 offices equally. This is not a single regional agency, an eligibility engine or an approved corporate website.

Live pages:
- https://firstlight-socal.pages.dev/
- https://firstlight-socal.pages.dev/services
- https://firstlight-socal.pages.dev/locations
- https://firstlight-socal.pages.dev/faqs

Cloudflare Pages project: `firstlight-socal`. Account ID: `1b316c4a14fed87a4c721863184e0c77`. This ID is not a credential. Latest verified deployment: `033e3a24-ffc9-4d49-9fa3-a2516ceb0fe3`, Nov 10, 2026 11:40:38 PM PST. No new deployment was made to prepare this handoff. There is no Git repository or framework build requirement in this folder. Four self-contained HTML documents hold the live site, with embedded CSS, JavaScript, font, SVGs and required public lookup data.

## 2. Non-negotiable rules

- Use plain English. No em dashes or en dashes used as punctuation. Prefer periods, commas, ordinary hyphens or a slash.
- Never show franchise owner names, including in visible copy, accessible names, titles, public JSON or generated summaries.
- Office labels are the location only. Use `Pasadena`, not a brand-plus-location office name. Keep FirstLight branding in the header, page titles and footer. Use `Woodland Hills / Calabasas`.
- Do not name Elderlife, SilverAssist or other financial vendors in public pages, FAQs, summaries or links. Say: `Financial consulting may be available to help you explore ways to pay for care`.
- Do not publish dollar pricing, benefit dollar amounts or one office's minimums as regional terms. Rates vary by local office. No special Montclair price or hero fallback.
- Programs are things to ask a doctor, health plan, county, insurer or VA about. Never state that a visitor qualifies, receives approval, or that FirstLight accepts, participates in or bills a program without separate office-specific confirmation.
- Location matching runs only after a deliberate click and browser permission. Coordinates stay on the device, are not stored or added to URLs, and are not sent to any website service. No runtime geocoding.
- Quiz, city/ZIP search and FAQ search have no network calls. No analytics, cookies, persistent browser storage, external embeds or trackers are connected. Leaving clears the guide and inquiry state.
- WCAG 2.2 AA is a release requirement. Axe must show zero violations. No horizontal page overflow at any integer width from 320 through 430 CSS pixels; test every quiz/flow state, long content, expanded content and modal, not just the initial screen.
- Provide semantic landmarks, one H1 and ordered headings, skip link, labelled fields, inline errors, aria-live announcements, native fieldsets/legends and keyboard operation. Keep visible, unobscured focus rings, effective 44px targets, text contrast at least 4.5:1, decorative SVGs hidden, 200% text reflow and reduced-motion support. Never use small yellow text on white.
- Show only verified exact-office Instagram, X and LinkedIn links. No Facebook, YouTube, Linktree or national-account substitutions on the site. Research source URLs can remain in private audit files.
- Montclair's website reads `Office website under construction`. Do not invent a website URL. Its phone is `(840) 200-9868`, provided by Gary; it is the intentional exception to official-page phone verification.
- Keep the draft footer: `Draft. Each office is independently owned and operated. Not yet approved by FirstLight Home Care corporate.` Keep draft noindex/nofollow until separately approved.
- Do not publish the project folder or handoff archive. Only the prepared `publish/` directory may be uploaded. Do not change `firstlight-montclair`, other projects, custom domains, plans or purchases.
- Do not connect real contact, booking, email, CRM or AI services without a new explicit request and a reviewed privacy/security design.

Pricing wording currently retained in the FAQs:
> Rates vary by local office, the help needed and the schedule. Care is generally billed by the hour, and a minimum visit length may apply. Ask your local team for a written quote after a free care consultation, including any holiday, overtime, mileage and cancellation charges. There is no single Southern California alliance rate.

## 3. Main page: one four-step guided section

Hero: modern FirstLight green/yellow branding, plain introduction saying `answer a few questions`, and a centered privacy line: `Private by design. Answers stay in this page and are cleared when you leave.` One short service-reference link is enough. Keep one clear path rather than repeated office-website exits.

All four steps live in one guided section. Only the current pane is visible. The step indicator is keyboard operable, identifies the current step and disables future steps until unlocked. Move focus to the new step heading, scroll below the sticky header and respect reduced motion. Back, Change office and Edit my answers preserve relevant inputs. Changes invalidate downstream results until the guide is rebuilt.

Step 1, choose an office:
- Label: `Search by city or ZIP`. Search locally using the embedded data. City names can match directly or by meaningful partial text.
- Offer `Find my closest office`. Call the browser Geolocation API only after a click. Use pre-geocoded public street-address points and straight-line distance on the device. This is an approximate nearest office, not a driving route or proof of service coverage.
- Ask the visitor to confirm a candidate; never silently select the nearest or first match. Shared public-address ties remain choices.
- Candidate cards show location, areas served, verified phone as a tel link, and Confirm this office. No owner names, socials or other extras here.
- For cities matched by multiple offices, show an accessible ZIP prompt rather than picking one. Current shared city labels: Glendale, Los Angeles, Ontario, Pomona and Temple City. City labels only find candidates; the sheet ZIP map decides coverage.
- Pomona is a real test: 91766 resolves Montclair; 91768 resolves Chino Hills. Shared ZIPs 91396 and 91226 still show both listed offices with an explicit ambiguity notice and visitor choice.
- 91710 resolves Montclair. Uncovered 10001 offers https://www.firstlighthomecare.com/locations/ rather than guessing another office.
- Location denied/unavailable/timeout/invalid coordinates should announce a ZIP fallback. Ignore stale location callbacks after a search/change. Do not persist coordinates.
- Confirming advances to Step 2 and focuses its heading. Supported validated deep links such as `/?office=montclair&zip=91710` still work; invalid IDs are safe. Do not add Start here links back to the locations cards, since those were removed in Round 7.

Step 2, eight optional questions, one at a time:
- Display `Question N of 8`, progress, Back, Next and Skip. Blank Next and Skip are allowed. Every question also offers `Not sure / prefer not to say`.
- `Your office: <location>` and Change office share a wrapping row.
- Native radios for single choices, checkboxes for schedule. Not sure in the schedule is exclusive of other choices.

1. Who are you finding help for?
   Field key: `who`. Choose one.
   - `self`: Myself.
   - `loved`: A family member or friend.
   - `couple`: Two people in the same home, such as a couple.
   - `other`: Someone else.
   - `unsure`: Not sure / prefer not to say. Skip remains available.

2. What everyday help would be useful?
   Field key: `daily`. Choose one.
   - `companion`: Company, meals or light household tasks.
   - `personal`: Help with bathing, dressing or toileting.
   - `both`: Both kinds of help.
   - `unsure`: Not sure / prefer not to say. Skip remains available.

3. What best describes their memory needs?
   Field key: `memory`. Choose one.
   - `none`: No memory concerns.
   - `concerns`: Some memory changes or concerns.
   - `diagnosed`: A dementia diagnosis has been made.
   - `unsure`: Not sure / prefer not to say. Skip remains available.

4. Is this after a hospital stay or surgery?
   Field key: `recovery`. Choose one.
   - `yes`: Yes.
   - `no`: No.
   - `unsure`: Not sure / prefer not to say. Skip remains available.

5. When might help be needed?
   Field key: `schedule`. Choose all that apply.
   - `occasional`: A few hours or occasional visits.
   - `regular`: Regular daytime visits.
   - `overnight`: Overnight care.
   - `aroundclock`: 24-hour care (day and night).
   - `respite`: Give our family caregiver a break.
   - `unsure`: Not sure / prefer not to say. Skip remains available.

6. Is the person a Veteran or a surviving spouse?
   Field key: `veteran`. Choose one.
   - `veteran`: A Veteran.
   - `spouse`: A surviving spouse of a Veteran.
   - `no`: Neither.
   - `unsure`: Not sure / prefer not to say. Skip remains available.

7. Do they have long-term care insurance?
   Field key: `ltc`. Choose one.
   - `yes`: Yes.
   - `no`: No.
   - `unsure`: Not sure / prefer not to say. Skip remains available.

8. How are they thinking about paying for care?
   Field key: `pay`. Choose one.
   - `private`: Income, savings or other assets.
   - `family`: Family members will help pay.
   - `insurance`: An existing long-term care insurance policy.
   - `va`: Veterans benefits.
   - `home`: Home equity or selling a home.
   - `waiting`: Waiting for insurance, a home sale or benefits.
   - `options`: Not sure how to pay. I would like to explore options.
   - `unsure`: Not sure / prefer not to say. Skip remains available.

For two people in the same home, answer remaining questions about the person with greater needs. Each person still needs a separate care assessment and benefits review. The old separate respite, homeownership and life-insurance questions were intentionally removed; do not restore them.

Step 3, `Your care results`:
- Show the confirmed office, `Services you may need`, `Programs and payment options you may qualify for`, a schedule note and expandable answer review.
- Immediately qualify the program heading: these are questions, not eligibility decisions. The quiz does not collect age, Medicare/Medi-Cal enrollment, income/assets or full clinical eligibility.
- Explain that the guide is not a diagnosis, care assessment, financial recommendation, care plan or benefits decision. Nothing has been sent to the office.
- Put Edit my answers immediately left of Choose my next step. Service links open the matching services anchor in a new tab so the guide stays here.

Care mapping:
- `who=couple`: Couples care. One caregiver may support two people in the same home only when their individual needs can safely be met together; separate assessments and staffing/benefits checks are required.
- `daily=companion` or `both`: Companion care.
- `daily=personal` or `both`: Personal care.
- `memory=concerns` or `diagnosed`: Dementia & Alzheimer's care, with different non-diagnostic reasons.
- `recovery=yes`: Post-surgery & transitional care.
- `schedule` includes `respite`: Respite care. This folds caregiver breaks into question 5.
- `veteran=veteran` or `spouse`: Veteran care, not benefit approval.
- Overnight and 24-hour care are scheduling choices, not extra service categories. Confirm awake coverage, staff/rest arrangements, minimums and availability locally.
- All skipped answers produce no invented care match or program recommendation. Selecting couples alone does not imply eligibility for funding.

Step 4, next step:
- One merged office card, location and areas, with exactly two actions: Call, using the chosen office's verified tel link, and Submit an inquiry.
- Back and Change office utilities may remain outside the card. No inline contact form or booking link in this step.
- Submit an inquiry opens a labelled native modal dialog with focus containment, Tab/Shift-Tab wrapping, Escape, labelled Close and focus restoration.
- Fields: Name required, Phone required, Email optional, Best time to contact, Relationship to the person needing care, editable Message or notes, and readonly Office and ZIP.
- Validate name and a 10-15 digit phone accessibly. Validate email if supplied. Use an error summary linked to invalid fields plus associated inline errors.
- This is a placeholder. Ask for fictional details and no health information. Submission sends nothing, does not navigate or call an API, clears submitted personal fields and displays a `Nothing was sent` confirmation. Closing confirmation returns focus to the trigger.

Prefill:
- Carry the confirmed office, only the actual entered/validated ZIP, all eight answers, suggested services and program discussion topics into readable editable message text.
- Do not invent a ZIP from a city or geolocation match. Show Not provided when absent.
- Couples prefill says two people need support, remaining answers describe the person with greater needs, and individual care/benefits reviews are required.
- Preserve message edits when reopening during the same unchanged guide. If the office, ZIP or quiz answers change, regenerate the generated note. Leaving clears all state.
- Care and financial answers do not belong in share URLs, booking query strings or persistent storage. Earlier inert booking-prefill behavior is historical, not a reason to reintroduce transmission.

## 4. Program trigger specification

Use `daily` for companion/personal/both; `personal` for personal/both; `memory` for concerns/diagnosed; `respite`, `overnight` and `aroundclock` for the schedule checkboxes. The current `buildCareGuide` and `verifiedProgramTopics` functions in the main HTML are the executable specification.

| Topic | Trigger | What the page may say |
|---|---|---|
| CMS GUIDE | `memory=diagnosed` only | Ask a doctor/participating GUIDE team. Clinician-confirmed dementia, Original Medicare A/B as primary coverage and other CMS rules apply. Memory concerns alone do not trigger this referral. |
| SCAN at-home benefits | Any daily-help choice, `recovery=yes` or respite | Only for existing SCAN members: ask Member Services about the specific plan/year and authorized providers. No enrollment recommendation. |
| Medi-Cal IHSS | Daily help, memory concerns/diagnosis or 24-hour care | Ask county IHSS about Medi-Cal determination, health certification, assessment, approved tasks/hours/providers. Do not imply private-agency coverage. |
| CalAIM personal care/homemaker support | Any daily-help choice | Ask the Medi-Cal managed-care plan. May bridge or supplement IHSS in specified circumstances, not replace it; authorization/provider rules apply. |
| CalAIM caregiver respite | Respite checkbox | Ask the Medi-Cal plan about temporary non-medical caregiver relief. Not medical recuperative care or automatic coverage. |
| Medi-Cal Assisted Living Waiver | 24-hour care AND personal care or diagnosed dementia | Only if also considering a different living setting. Mainly approved assisted living, plus some approved subsidized housing arrangements, not a generic private-home-care voucher. Ask a Care Coordination Agency. |
| Local Area Agency on Aging | Daily/memory/recovery/respite/overnight/24-hour need, any recognized payment answer, or existing LTC policy | Ask the agency where the person lives. Do not derive their county from the selected office. Services/eligibility vary. |
| HICAP | Daily help, recovery, respite, existing LTC policy, or payment insurance/options/unsure | Free confidential insurance counseling for Medicare-eligible/soon-eligible people, not care funding. |
| VA Aid & Attendance | Veteran/surviving spouse OR payment Veterans benefits | Ask VA about a qualifying pension and separate service, care and financial requirements. Not automatic. |
| VA home/community care | Veteran, not spouse alone, AND personal care, memory needs or respite | Ask a VA social worker about assessed need, enrollment, community-care eligibility, local availability and VA-contracted providers. Separate from pension benefits. |
| Long-term care insurance review | `ltc=yes` OR payment insurance | Ask insurer about policy services, waiting period, claim rules and approved providers. No claim approval. |
| Financial consulting may be available | Payment private/family/home/waiting/options/unsure | Use the generic consulting sentence. Ask whether a free consultation is available locally. Not loan approval, product advice or free care. Insurance-only, VA-only and skipped payment do not independently trigger it. |

CMS GUIDE and Medicare Advantage, including SCAN, cannot be combined. GUIDE excludes PACE, elected Medicare hospice and long-term nursing-home/memory-care-unit residence, with further CMS rules. A participating team assesses and obtains consent; CMS confirms eligibility. FirstLight participation is unconfirmed. The October 2026 public CMS participant workbook had no direct FirstLight name match, but that does not establish absence under another legal name or partner roster.

Name GUIDE as an ask-your-doctor referral, not a FirstLight service. Name SCAN only as a plan-specific question for existing members, not a universal grant or an enrollment recommendation. FirstLight's SCAN network status is unconfirmed. Do not recommend switching coverage. All programs require the relevant independent review; never promise an office bills them.

The Assisted Living Waiver also has age 21+, full-scope Medi-Cal without share of cost, nursing-facility-level care, county/setting and capacity requirements. Room and board are not paid by it. The page asks a Care Coordination Agency to assess these, never the quiz.

County resources include Los Angeles County, separate City of Los Angeles, Orange, Riverside, San Bernardino and Ventura. A keyboard disclosure offers six official resource links. No county is inferred from an office's street address.

Official sources, checked Nov 10, 2026 PST:
- GUIDE access/eligibility: https://www.cms.gov/priorities/innovation/guide/faqs
- GUIDE overview: https://www.cms.gov/priorities/innovation/innovation-models/guide
- Participant roster: https://www.cms.gov/files/document/guide-participant-list.xlsx
- SCAN 2026 at-home support: https://www.scanhealthplan.com/en/scan-members/member-benefit-materials-and-information/2026-supplemental-benefits/at-home-support
- IHSS: https://www.cdss.ca.gov/in-home-supportive-services/ihss/apply-for-ihss
- Community Supports: https://www.dhcs.ca.gov/wp-content/uploads/2025/10/DHCS-Community-Supports-Policy-Guide.pdf
- July 2026 policy summary: https://www.dhcs.ca.gov/wp-content/uploads/2026/07/Summary-of-Changes-July-2026-Policy-Guide-Volume-1.pdf
- Assisted Living Waiver: https://www.dhcs.ca.gov/wp-content/uploads/2025/10/ALW-Program-Descriptand-Elig-2024.pdf
- VA pension: https://www.va.gov/pension/aid-attendance-housebound/
- VA home care: https://www.va.gov/geriatrics/pages/Homemaker_and_Home_Health_Aide_Care.asp
- LTC insurance: https://aging.ca.gov/Providers_and_Partners/Health_Insurance_Counseling_and_Advocacy_Program/Long_Term_Care_Insurance/
- HICAP: https://aging.ca.gov/Programs_and_Services/Medicare_Counseling/
- Local aging services: https://aging.ca.gov/Find_Services_in_My_County/

Research limits: CMS/CDSS/VA/Aging pages were read directly. SCAN needed a normal public fetch fallback after a 403. DHCS direct PDF reads returned security-challenge HTML, so only high-level facts supported by official-domain indexed excerpts were used. Those challenge responses are not real source PDFs and are not included in the archive. Recheck official current rules before strengthening claims. Detailed provenance is in `programs-v7-research.json` and `reports/REWORK-V7-REPORT.md`.

## 5. Reference pages

Services, `/services`:
- Seven-service accessible comparison table: Companion care, Personal care, Dementia & Alzheimer's care, Respite care, Post-surgery & transitional care, Veteran care and Couples care.
- Columns: Care type, What it is, Who it is for, Typical tasks, Typical schedule.
- Visible caption, real table/row/column semantics, `scope=col`, `scope=row` and explicit cell/header associations. Small screens use labelled stacked rows without page overflow. Do not remove table semantics when applying CSS.
- Stable anchors: `#companion-care`, `#personal-care`, `#memory-care`, `#respite-care`, `#transitional-care`, `#veteran-care`, `#couples-care`. Links focus the relevant row heading with a visible inset ring.
- Explain companion practical/social tasks versus personal hands-on tasks. Dementia support is adapted care, not a diagnosis or treatment. Respite describes a family caregiver break and can use companion/personal tasks. Recovery care is everyday non-medical help after discharge/illness/injury, not nursing, wound care or therapy.
- Couples wording is conditional: one caregiver supports two people when safe; simultaneous hands-on needs can require more staffing. Rates vary by local office. Do not promise a national staffing policy or availability at every office.
- FirstLight's own spouse article and personal-care page support individualized couple support, but an exact national one-caregiver-for-two definition was not found. Keep the limitation, not a fabricated quotation: https://www.firstlighthomecare.com/home-healthcare-salem/2016/03/20/include-spouses-caregiving/ and https://www.firstlighthomecare.com/home-care-services/personal-care/ .
- Keep overnight/24-hour/live-in scheduling caveats and a link back to start the guide.

Locations, `/locations`:
- All 15 offices, alphabetical and equal weight. Local-only city/ZIP filter; shared-city ZIP clarification still applies.
- Each card: location name, public street address linked to `https://www.google.com/maps/search/?api=1&query=<encoded address>`, verified phone link, website link or Montclair construction text, `Serving` city labels, verified icon-only IG/X/LinkedIn.
- Social SVGs are decorative; links have location/platform accessible labels and 44px effective targets. External links announce new-tab behavior and use safe rel attributes.
- No owners, ZIP lists, Start here button, Local office label, `Areas include` or `ZIP-specific coverage applies` text.

FAQs, `/faqs`:
- Separate page, not a section of the landing page. Label it `FAQs`, never Questions, in all navs.
- One centered column on desktop and mobile. Thirteen native details/summary answers.
- Topics: cost, minimum hours, insurance/Medicare, Veteran/spouse benefits, start timing, screening/training, same caregiver, sick/unavailable caregiver backup, agreements/changes/cancellation, non-medical boundaries/medications, first conversation preparation, geolocation privacy, choosing a service.
- Keep local keyword/synonym ranking, status/no-results text, Escape reset, Expand all and Collapse all. Bulk controls apply to matching questions. `ltc` should find insurance.
- Visible tag: `Placeholder: future AI assistant`. State that no AI is connected, matching happens in this page and search stays here. Do not silently call an AI API.
- The separate regional-price panel was removed; keep the sourced rates-vary wording and local questions, not numeric pricing.

## 6. Data, sources and verification

ZIP authority is ONLY Gary's workbook/tab:
https://docs.google.com/spreadsheets/d/1F_2B0a-3bMgodfawzJHrkoeIbD6b8luI/edit?gid=143651117#gid=143651117

The gid is the `Zip Codes` tab, not the older `SoCal` tab. Current approved snapshot has 15 office cards and 225 unique ZIPs. Office ZIP counts total 227 because two ZIPs are shared. Do not add ZIPs from office websites, Census, postal searches, nearby cities, geolocation or another workbook tab. City labels are search hints only, not permission to invent city-to-ZIP coverage. Never automatically sync or edit the source sheet.

Private files at project root:
- `offices.json`: original reviewed offices, areas, phones, office URLs, ZIP lists and array-valued `zipToOfficeIds`. It includes internal source/owner fields that must NOT be published.
- `source-current.xlsx`: read-only downloaded workbook snapshot; `source-audit.json`: exact row/cell/territory provenance, exclusions, duplicates and overlaps. Both are private development evidence.
- `verification.json`: official office-page/directory checks, phone notes and unresolved source details.
- `office-extras.json`: public street addresses, coordinates, geocoder/source URLs and verified social URLs with `verifiedFrom`/explanation.
- `city-aliases-v6.json`: sourced city labels and official page URLs. `shared-cities-v6.json`: the five known shared-city labels.
- `phones-v7-verification.json`: number, tel href, source and evidence for every office.
- `quiz-questions-v7.json`: exact question/options snapshot, plus the universal unsure/skip choices implemented in HTML.
- `programs-v7-research.json`, `couples-v7-research.json`: facts, sources and source limits.
- `historical-backup-hashes.json`: hash-only evidence of three pre-Round-7 backups. Actual backup HTML is intentionally excluded from this handoff.
- Public HTML contains only the sanitized fields needed by the page in embedded JSON. Update public copies deliberately; changing a private JSON file alone does not update a served HTML page.

Phones: 14 match tel links in official office HTML fetched Nov 10, 2026 PST. Montclair's number comes from Gary's explicit request, not an independently confirmed office page. No number was guessed or omitted. Simi Valley has an old conflicting body-paragraph number; the selected main-call/footer/directory number below is the one retained, pending local final confirmation.

| Location | Phone | Verification source |
|---|---|---|
| Burbank | (626) 360-0048 | https://www.firstlighthomecare.com/home-healthcare-burbank/ |
| Chino Hills | (909) 660-8900 | https://www.firstlighthomecare.com/home-healthcare-chino-hills/ |
| Glendale | (626) 360-0048 | https://www.firstlighthomecare.com/home-healthcare-glendale/ |
| Irvine | (949) 704-2969 | https://www.firstlighthomecare.com/home-healthcare-irvine/ |
| Marina del Rey | (310) 956-4811 | https://www.firstlighthomecare.com/home-healthcare-marina-del-rey/ |
| Montclair | (840) 200-9868 | Gary supplied; website under construction |
| Pasadena | (626) 360-0048 | https://www.firstlighthomecare.com/home-healthcare-pasadena-altadena/ |
| Rancho Cucamonga | (909) 321-4466 | https://www.firstlighthomecare.com/home-healthcare-rancho-cucamonga/ |
| San Clemente | (949) 940-8500 | https://www.firstlighthomecare.com/home-healthcare-sanclemente/ |
| San Gabriel | (626) 360-0048 | https://www.firstlighthomecare.com/home-healthcare-san-gabriel/ |
| Simi Valley | (805) 915-4706 | https://www.firstlighthomecare.com/home-healthcare-simi-valley/ |
| Temecula | (951) 395-0821 | https://www.firstlighthomecare.com/home-healthcare-temecula-valley/ |
| West Hollywood | (424) 230-8833 | https://www.firstlighthomecare.com/home-healthcare-west-hollywood/ |
| Whittier | (562) 800-6922 | https://www.firstlighthomecare.com/home-healthcare-whittier/ |
| Woodland Hills / Calabasas | (818) 443-1281 | https://www.firstlighthomecare.com/home-healthcare-woodland-hills/ |

Socials: 13 verified links across seven offices, no guessed/national accounts. The other eight offices have none confirmed, which is not proof that none exist. Exact attribution/evidence is in `office-extras.json` and `reports/OFFICE-SOCIAL-GEO-REPORT.md`. Montclair was checked against its supplied public hub and X profile; the hub is evidence, not a displayed platform. Official office outbound links establish other IG/LinkedIn attribution, and exact location/official website links establish the retained X profiles.

| Location | Platform | Verified URL | Evidence URL |
|---|---|---|---|
| Montclair | Instagram | https://www.instagram.com/firstlightmontclair | https://linktr.ee/flhcmontclair |
| Montclair | LinkedIn | https://www.linkedin.com/company/firstlight-home-care-of-montclair | https://linktr.ee/flhcmontclair |
| Montclair | X | https://x.com/FLHCMontclair | https://linktr.ee/flhcmontclair |
| Pasadena | Instagram | https://www.instagram.com/firstlightpasadena/ | https://www.firstlighthomecare.com/home-healthcare-pasadena-altadena/ |
| Pasadena | X | https://x.com/FLHC_Pasadena | https://x.com/FLHC_Pasadena |
| San Clemente | Instagram | https://www.instagram.com/firstlight.sanclemente | https://www.firstlighthomecare.com/home-healthcare-sanclemente/ |
| San Clemente | LinkedIn | https://www.linkedin.com/company/firstlight-homecare-of-san-clemente | https://www.firstlighthomecare.com/home-healthcare-sanclemente/ |
| Simi Valley | Instagram | https://www.instagram.com/firstlightventuracounty | https://www.firstlighthomecare.com/home-healthcare-simi-valley/ |
| Simi Valley | LinkedIn | https://www.linkedin.com/company/firstlight-home-care-of-simi-valley/ | https://www.firstlighthomecare.com/home-healthcare-simi-valley/ |
| Temecula | X | https://x.com/FLHC_Temecula | https://x.com/FLHC_Temecula |
| Whittier | Instagram | https://www.instagram.com/firstlight_home_care_whittier/ | https://www.firstlighthomecare.com/home-healthcare-whittier/ |
| Whittier | LinkedIn | https://www.linkedin.com/company/firstlight-home-care-whittier/ | https://www.firstlighthomecare.com/home-healthcare-whittier/ |
| Woodland Hills / Calabasas | Instagram | https://www.instagram.com/flhcwoodlandhillscalabasas/ | https://www.firstlighthomecare.com/home-healthcare-woodland-hills/ |

Addresses were geocoded once at build time using the free U.S. Census Geocoder, with OpenStreetMap Nominatim for the shared Burbank/Glendale building. Keep OpenStreetMap attribution. Exact query/feature URLs are recorded per office in `office-extras.json`. These are approximate physical office coordinates, not service-area definitions. Burbank/Glendale and Pasadena/San Gabriel share addresses and must remain nearest-office ties. No visitor address is sent to a geocoder.

Service/FAQ reference sources are mapped in `reports/REFERENCE-NOTES-v3.md`. Key Drive references already read: Understanding Our Services- Companion Care; Understanding Our Services- Dementia Care; About FirstLight Home Care_with Travel Companion Services; Client Service Agreement - Standard Private Pay (blank); Client Intake & Onboarding Checklist; Form #286 Telephone Intake Toolkit. Their exact names/links and fact mapping are in that report. Do not publish the private documents, operational notes, internal rates or client records. This archive has source notes, not signed client files.

## 7. File map and editing safely

The zip extracts a `socal-landing/` folder. Its layout is:

- `ANTIGRAVITY-HANDOFF.md`: this self-contained continuation prompt.
- `README.md`: short export entry point; historical original README is under reports.
- `index.html`: main hero and four-step guided flow, office/city/ZIP lookup, quiz, conditional results and inquiry modal.
- `services.html`: seven-service comparison, schedule caveats and return link.
- `locations.html`: alphabetical office directory and city/ZIP filter.
- `faqs.html`: single-column FAQs, local search and bulk controls.
- Root JSON/workbook files: private reviewed data and provenance listed above.
- `sources/`: current Round-7 JS/CSS/modal/table helper fragments for reference. These are not a complete standalone build system; the main HTML already has substituted question data and cumulative prior styles. Editing fragments alone changes nothing served.
- `tools/prepare-publish.py`: portable packaging helper. Copies only four public HTML files and generates the matching allowlist `_worker.js` in `publish/`. Fails if unexpected files are already in that folder.
- `tools/preview.py`: strict local preview server with the same eight page aliases and 404 fallback. Does not expose data or reports.
- `publish/`: the only upload directory, containing the four public HTML files plus `_worker.js`. No data/report/test files are in it.
- `tests/`: portable copies of the current core, program, couples, modal-reflow and contrast checks, plus an offline Worker-route test.
- `reports/`: original round reports and reference notes. They are historical. Current state is described here and in REWORK-V7-REPORT.md.
- `reports/evidence/`: last verified test results/contrast/route evidence. New tests produce fresh output in the local project root; they do not rewrite the historical evidence copies.
- `research/`: selected source-audit JSON and the official public CMS participant workbook. Failed PDF downloads, raw third-party pages and old vendor research were omitted.
- `requirements-test.txt`, `package.json`, `FONT-LICENSE.txt`: test dependencies, ES-module setting and embedded font license.
- `HANDOFF-MANIFEST.json`: file hashes and packaging notes.

Current HTML files are the editable authoritative website. Legacy `build.py`, `redesign.py` and build-v3/v4/v5/v6/v7 chains depend on omitted backup HTML and can overwrite newer work. They are intentionally not shipped as runnable rebuild commands. Do not recreate an old version by running one. If you later introduce a proper component/build system, do it as a separately tested refactor preserving all behavior. For now, consciously update the inline code/data and all shared headers/footers, then run tests and repackage the publishing worker. Keep `sources/` consistent with inline edits where relevant.

## 8. Local preview, tests and deployment

Use Python 3.10+ and a current Node LTS compatible with Wrangler. The original box used Python Playwright 1.65.0 and axe-core 4.14.0; requirements/package metadata pin those observed test versions. No dependency directories are included.

From the extracted project root:

    python3 -m venv .venv
    . .venv/bin/activate
    python -m pip install -r requirements-test.txt
    python -m playwright install chromium
    npm install
    python tools/prepare-publish.py
    node tests/test_routes.mjs
    python tests/test_v7.py
    python tests/test_programs_v7.py
    python tests/test_couples_v7.py

On Windows use `.venv\Scripts\Activate.ps1` instead of the POSIX activation line. Linux may require `python -m playwright install --with-deps chromium`. Browser launch uses `CHROMIUM_EXECUTABLE_PATH` if explicitly set, otherwise existing `/usr/bin/google-chrome`, otherwise Playwright's installed Chromium. The export tests discover the root relative to their file and read axe from `node_modules/axe-core/axe.min.js`.

The three main suites start their own strict temporary local HTTP servers. Historical file-existence-only checking for three excluded backups is replaced in the export by checking their recorded hashes. All other functional assertions remain. The expected current result is 183 core + 32 program + 28 couples/table/FAQ checks, 243 total, with zero axe violations. The original live run had 19 core + 4 program + 8 couples axe states, plus one supplemental modal scan, 32 total. Do not claim a future run passed without inspecting it.

For modal/contrast checks, start the preview in a separate terminal:

    python tools/preview.py 8788

Then run:

    python tests/test_v7_modal_zoom.py http://127.0.0.1:8788/
    python tests/contrast-v7.py http://127.0.0.1:8788/

Those tests generate local screenshots as evidence. Screenshots are intentionally absent from the supplied zip. Do not upload generated screenshots or test output. No real calls or inquiries should be made by tests.

To test an existing public release, pass its URL to the three main test scripts. They use synthetic demo values and never send the inquiry. Check that you are testing the intended host, not a production backend with real submission behavior. Test results should include 91710 -> Montclair -> quiz -> care results -> next step -> prefilled modal -> not-sent confirmation, shared ZIPs, the Pomona city gate, couples and payment branches, consent-only location, table semantics, FAQ search, keyboard and all widths 320-430. Manually review axe incomplete contrast items, focus behavior and screenshots. Automated scans are not formal WCAG certification.

Cloudflare publishing:

1. Re-run `python tools/prepare-publish.py` after every HTML change. The worker embeds the current HTML bytes; stale worker copies otherwise serve stale content even if static HTML was edited.
2. Verify local tests and inspect the five filenames in `publish/`.
3. Authenticate in the local IDE's supported secure browser flow, never by pasting a token into this prompt/source. Before any remote change, run the account/help checks:

       npx wrangler --version
       npx wrangler pages deploy --help
       npx wrangler login
       npx wrangler whoami

4. Confirm the account above, correct Pages permissions and project. Do not create a project or modify account settings. For an authorized update to this existing production project, use:

       npx wrangler pages deploy publish --project-name firstlight-socal --branch main

5. If access is refused, stop and report the exact missing permission. Do not scrape/mint credentials, switch accounts or use another project's permissions. No token or secret is included in this handoff.
6. Verify all four live pages and aliases return 200 and match local bytes; check data/reports/backups/test/screenshot URLs return 404. Re-run live behavior checks and capture desktop/mobile evidence.

The historical deployments used the Cloudflare MCP and an advanced-mode Pages Function with an empty static asset manifest. The supplied Wrangler upload folder additionally contains only the same four allowed public HTML files, plus `_worker.js`; no private asset is introduced. `_worker.js` takes full control of every request, embeds the four HTML bodies, and deliberately does NOT fall back to `env.ASSETS.fetch` or an SPA catch-all. There is no separate `/functions` directory. Allowed GET/HEAD paths are exactly:

    /                 /index.html
    /services         /services.html
    /locations        /locations.html
    /faqs             /faqs.html

All other GET/HEAD paths return 404, including trailing-slash variants unless explicitly added later. Other methods return 405. Keep this fail-closed allowlist. Security headers block form submission and application connections, allow geolocation only for this origin, and retain draft noindex/nofollow. A future real integration requires deliberate security-header changes, not silently removing protections.

Wrangler accepts a directory, not this handoff zip. Never run `pages deploy .` from the source root. Do not upload reports or the archive. Current command/routing references:
https://developers.cloudflare.com/pages/get-started/direct-upload/
https://developers.cloudflare.com/pages/functions/advanced-mode/

## 9. Complete change history by round

All recorded rounds below were built on Nov 10, 2026 PST. Round numbers track website revisions, not every intermediate authentication/test attempt. Later instructions supersede earlier ones.

Round 1, initial regional draft:
- Built the original self-contained landing page from the approved source-sheet tab and the supplied Alliance membership scope.
- Established the 15-office, 225-unique-ZIP map, duplicate-row deduplication, explicit two-office ZIP cases and national finder for uncovered ZIPs.
- Verified official office websites/phones where possible, left Montclair website unconfirmed, included the independently-owned/corporate-not-approved draft disclaimer and noindex.
- Had an office directory, basic service descriptions and direct office actions. Owner names and a Montclair-specific phone fallback appeared then; both are historical, not current requirements.
- Evidence: reports/HISTORICAL-README.md and original source/verification audits.

Round 2, modern accessible redesign and initial public hosting:
- Added embedded Manrope, spacious rounded cards, gradients, sticky navigation, brand-green/yellow accents and local directory filtering.
- Added/fixed landmarks/headings, skip-link focus, labels/errors/live updates, keyboard filters/expanders, large targets, contrast, 320px reflow, 200% text and reduced motion; axe findings were fixed.
- Preserved ZIP assignments and draft language. Backed up the original before redesign.
- After permission retries, published only allowed HTML on Cloudflare Pages `firstlight-socal`, not the unrelated project. Reports/REDESIGN-NOTES.md and DEPLOYMENT.md document the earlier release.

Round 3, single paved path, Drive-backed services/FAQ, equal offices and local location matching:
- Consolidated duplicate office exits into one path: find office -> choose office -> common contact action. At that time everything was on one page.
- Used Drive service descriptions, intake toolkit, blank agreement and checklist plus FirstLight public sources for six plain-English service comparisons and 13 FAQs.
- Removed regional numeric pricing rather than generalizing one office's known rate. Kept local quote/minimum/terms wording.
- Removed Montclair emphasis; alphabetized offices. Added click/consent-only geolocation using pre-geocoded public addresses, on-device straight-line matching, errors/fallback and shared-address ties.
- Researched social accounts; narrowed final scope to verified Instagram, X and LinkedIn only, 13 accounts across seven offices. Omitted uncertain accounts and other platforms.
- Evidence: reports/REWORK-REPORT.md, REFERENCE-NOTES-v3.md and OFFICE-SOCIAL-GEO-REPORT.md.

Round 4, first interactive guide and safe contact demos:
- Added a seven-question optional care quiz mapping to the existing six services with plain reasons and a not-an-assessment disclaimer.
- Added FAQ Expand all/Collapse all, local keyword/synonym ranking, no-results handling and a clearly marked future-AI placeholder. No AI/network.
- Added subordinate inert booking and non-sending contact-form demos, accessible validation, fictional-detail notices and not-sent confirmation. The phone remained primary.
- Maintained no-send security restrictions and local state clearing. Evidence: reports/REWORK-V4-REPORT.md.

Round 5, sequential office-first flow and separate services page:
- Replaced the old one-page-only rule with a guided main page plus `/services`.
- Office confirmation led to a one-question-at-a-time eleven-question guide, then service/program summary, then next-step contact; FAQ moved to the bottom of main.
- Added memory status, Veteran/surviving-spouse, insurance and funding questions. Researched conditional VA/LTC topics; removed named financial vendors and used generic consulting wording.
- Made summaries editable/backtrackable, focused headings, disabled unavailable future steps and preserved reduced-motion/privacy behavior. Evidence: reports/REWORK-V5-REPORT.md and PROGRAM-SOURCES-V5.md.

Round 6, consistent four-step shell, simpler questions, locations and prefill:
- Changed office display names to locations only, removed owner names everywhere public, and removed em/en dashes.
- Made Step 1 part of the same one-active-pane guided section as Steps 2-4. Fixed narrow mobile layout.
- Reduced eleven questions to eight: folded caregiver breaks into schedule and removed standalone homeownership/life-insurance questions. Generic consulting now depends on payment answers.
- Added `/locations`, alphabetical office filtering, websites/phones/socials, source city labels and validated office deep links.
- Prefilled office, actual ZIP, all answers and care/program summary into editable demo notes; the then-inert booking preview also had local-only prefill.
- Simplified Step 1 cards to location/areas only, removing owners and contact extras. Added accessible ZIP clarification for shared cities and retained both-office shared ZIP handling.
- Evidence: reports/REWORK-V6-REPORT.md. Round 7 later re-added phone links to Step 1 by explicit request.

Round 7, current page organization and inquiry modal:
- Centered hero privacy line and removed optional from the intro. Standardized Search by city or ZIP.
- Added verified phone links to Step 1 and locations. Put chosen office/Change office in one wrapping row and renamed schedule options to Overnight care and 24-hour care (day and night).
- Renamed the result headings and placed Edit my answers beside Choose my next step.
- Simplified Step 4 to Call + Submit an inquiry, replacing inline form/booking controls with a fully accessible, prefilled, non-sending modal and confirmation.
- Moved FAQs to `/faqs`, updated every nav and removed the separate regional-price panel.
- Updated location cards with Maps address links, icon-only verified social links, Serving copy and Montclair construction wording; removed ZIP lists, Start here, Local office and ZIP-specific-coverage wording.
- Program follow-up: completed official-source CMS GUIDE, SCAN, IHSS, CalAIM personal care/respite, ALW, VA, LTC, HICAP and county aging research; added conditional referrals and source links with no eligibility/billing claims. GUIDE participation and SCAN network status remain unconfirmed.
- Couples/table/FAQ follow-up: added the two-person quiz choice, conditional Couples care result and inquiry note; changed services to a seven-row accessible comparison table; made FAQs single-column.
- Final release verified 243 local and 243 live regression checks, 32 zero-violation live axe scans, 315 keyboard stops, 200% text and continuous 320-430px reflow, eight allowed 200 routes and 59 private-path 404s. No owner words/full office prefixes/em/en dashes remained in public HTML.
- Evidence: reports/REWORK-V7-REPORT.md and reports/evidence/. Older screenshots and backup HTML are not included in this export.

## 10. Open items and real integrations still needed

- Booking/Calendly: the older fake link was intentionally removed in Round 7. There is NO current Calendly link or connected account. Treat booking as an unimplemented future integration, not a broken live button. Only re-add it if requested; choose the correct office's calendar and review consent/privacy. Do not send health/payment answers in public query parameters.
- Inquiry backend: the modal sends nothing. Real routing to each office's CRM/email needs explicit approval, server-side validation, spam controls, secure delivery, retention/access controls, consent language and care-data privacy review. Do not put secrets in client HTML or merely relax CSP.
- FAQ AI: current search is deterministic local scoring. A real assistant would need approved sources, safety/privacy, budget and explicit consent before sending a query to an API. Keep the placeholder label until genuinely integrated.
- GUIDE: confirm the exact local legal entity, participating provider/team or contracted partner relationship with CMS/participating team before making office-specific participation statements. No direct name match is not proof of nonparticipation.
- SCAN: confirm current year, plan, benefit authorization and local provider/network contract before suggesting an office can deliver a covered benefit. Do not imply GUIDE and SCAN can be stacked.
- Couples: local offices must confirm safe staffing, individual assessments and availability. The national exact one-caregiver/two-person definition was not verified; it is conditional owner-requested draft wording.
- Confirm Montclair's eventual official website, missing verified socials for eight offices, Simi Valley's historical phone-text discrepancy, current addresses and unresolved shared ZIP governance. Do not invent fixes.
- Final corporate/office approval is outstanding. Keep local rate/terms/start-date/same-caregiver/backup/overnight and payer-acceptance claims qualified. Real assistive-technology/user testing remains advisable in addition to automated checks.

Your first action should be to inspect the current files, run the local tests, and summarize the next requested change before implementing it. Preserve this baseline. Do not deploy or connect a real integration merely because this handoff describes how.
