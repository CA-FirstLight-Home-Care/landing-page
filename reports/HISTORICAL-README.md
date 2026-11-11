> DEPLOYED: https://firstlight-socal.pages.dev/ - November 10, 2026 (PST). See DEPLOYMENT.md for scope and live verification. Only the one-page HTML is served; local notes and evidence are not public. Earlier “not published” statements below describe the original drafting stage.

> CURRENT VERSION: modern v2 redesign is now `index.html`; the original is preserved as `index-v1.html`. Read `REDESIGN-NOTES.md` for design/accessibility results and use `redesign.py` for visual rebuilds. Legacy `build.py` alone regenerates the old v1 look. All territory/contact/source findings below remain unchanged.

# FirstLight Home Care of Southern California - working draft

Built and reviewed November 10, 2026 (PST). **Local draft only. Not published or sent.**

## Open it

Open `index.html` in a modern browser. It works directly from disk with no server, account, package install, API key, or network request. The only form is a local ZIP lookup. The page does not collect names, email addresses, care details, cookies, or analytics. External links and telephone links open only when selected.

## Files

- `index.html` - one self-contained HTML file; styles, JavaScript, logo, office metadata and ZIP routing are embedded.
- `desktop.png` - full-page 1440px desktop render with 91710 → Montclair result.
- `mobile.png` - full-page 390px mobile render with the same lookup.
- `desktop-top.png`, `mobile-top.png`, `mobile-lookup.png` - readable close-up screenshots.
- `desktop-initial.png`, `mobile-initial.png` - initial empty-search state.
- `overlap.png`, `uncovered.png` - overlap and no-match examples.
- `offices.json` - formatted, easy-to-read/export office data and explicit `zipToOfficeIds` object. The same object is embedded in `index.html` in `<script id="office-data" type="application/json">`.
- `source-current.xlsx` - fresh read-only download from the supplied Drive file; original named `20260708 CA Zip Codes.xlsx`.
- `source-audit.json` - every selected source ZIP cell and raw owner/territory, excluded territories, duplicates and overlaps.
- `verification.json` - source URLs, verification method and all contact-status notes.
- `test-results.json` - passing automated Chromium tests.
- `build.py` - repeatable offline build from the workbook and explicit territory allowlist. Python 3 + openpyxl required to rebuild, not to use the page.
- `test_page.py` - local Playwright/installed-Chrome QA script; reads only this draft. Playwright is installed for this run in `/tmp/socal-playwright`.
- `research/` - official corporate assets, directory HTML and initial HTTP fetch evidence.

## Coverage and exact source tab

The Google Sheets connector was tried first and returned “Office file; use Drive.” The supplied file was downloaded with the first-party DownloadFile tool, without converting or editing the original.

**The URL's gid 143651117 is `Zip Codes`, not the tab named `SoCal`.** Verified using the XLSX's `xl/metadata` Google round-trip extension: Excel sheetId 1 maps to 143651117; sheetId 3 (`SoCal`) maps to 1156706436. This matters: `Zip Codes` has Prashant Kumar with territory IDs 397A and 309C, while older `SoCal`/`Owners` entries still list Charith Weerasuriya and older IDs for those areas. The requested tab controls all assignments. No ZIPs from other tabs, public websites, knowledge or postal lookups were added.

**225 unique ZIPs, 229 selected source rows, 16 territory IDs, 15 office cards.** Counts below are unique per office; their sum is 227 because two ZIPs occur in two offices. Scot's Simi Valley and Camarillo territories share one Simi Valley card: its verified official page explicitly serves Camarillo.

| Office / verified website                                                                      | Source territory IDs | ZIP count | Local alliance team displayed         | Main phone     |
| ---------------------------------------------------------------------------------------------- | -------------------- | --------: | ------------------------------------- | -------------- |
| [Burbank](https://www.firstlighthomecare.com/home-healthcare-burbank/)                         | 191C                 |        14 | David Kapojos                         | (626) 360-0048 |
| [Chino Hills](https://www.firstlighthomecare.com/home-healthcare-chino-hills/)                 | 513                  |         7 | Kevan Kwan; Lori Kwan; David Kapojos  | (909) 660-8900 |
| [Glendale](https://www.firstlighthomecare.com/home-healthcare-glendale/)                       | 360A                 |        27 | David Kapojos                         | (626) 360-0048 |
| [Irvine](https://www.firstlighthomecare.com/home-healthcare-irvine/)                           | 397A                 |        20 | Prashant Kumar (PK)                   | (949) 704-2969 |
| [Marina del Rey](https://www.firstlighthomecare.com/home-healthcare-marina-del-rey/)           | 535                  |        12 | Jason Taylor                          | (310) 956-4811 |
| Montclair (URL TBD)                                                                            | 576                  |         5 | Gary Cheung; YongMing Zheng           | (840) 200-9868 |
| [Pasadena](https://www.firstlighthomecare.com/home-healthcare-pasadena-altadena/)              | 346                  |        28 | David Kapojos                         | (626) 360-0048 |
| [Rancho Cucamonga](https://www.firstlighthomecare.com/home-healthcare-rancho-cucamonga/)       | 296                  |         9 | Lolita Pinto                          | (909) 321-4466 |
| [San Clemente](https://www.firstlighthomecare.com/home-healthcare-sanclemente/)                | 460                  |        11 | Sean Ruitenberg; Stephanie Ruitenberg | (949) 940-8500 |
| [San Gabriel](https://www.firstlighthomecare.com/home-healthcare-san-gabriel/)                 | 174B                 |        12 | David Kapojos                         | (626) 360-0048 |
| [Simi Valley](https://www.firstlighthomecare.com/home-healthcare-simi-valley/)                 | 442, 493             |        32 | Scot Kuratsu                          | (805) 915-4706 |
| [Temecula](https://www.firstlighthomecare.com/home-healthcare-temecula-valley/)                | 309C                 |         9 | Prashant Kumar (PK)                   | (951) 395-0821 |
| [West Hollywood](https://www.firstlighthomecare.com/home-healthcare-west-hollywood/)           | 561                  |         9 | Zachary Wechsler                      | (424) 230-8833 |
| [Whittier](https://www.firstlighthomecare.com/home-healthcare-whittier/)                       | 470                  |        15 | Julio Rivas                           | (562) 800-6922 |
| [Woodland Hills–Calabasas](https://www.firstlighthomecare.com/home-healthcare-woodland-hills/) | 490                  |        17 | Tommy Webber; Megan Lange             | (818) 443-1281 |

### Included people

All 15 supplied Chat members are represented in matching alliance teams: Lolita Pinto, David Kapojos, Gary Cheung, Jason Taylor, Julio Rivas, Kevan Kwan, Lori Kwan, Megan Lange, Prashant Kumar (PK; displayed as Gary requested instead of Prashant Rameshkumar), Scot Kuratsu, Sean Ruitenberg, Stephanie Ruitenberg, Tommy Webber, YongMing Zheng, Zachary Wechsler.

Matching notes:

- Source `Gary Chueng`, territory 576, is Gary Cheung: corrected display spelling, supported by the workbook Owners label and supplied Montclair context. Its five ZIPs are exactly **91710, 91762, 91763, 91766, 91767**. No other Ontario/Pomona/Chino codes were inferred.
- Source `Thomas Webber`, territory 490, is displayed as Tommy Webber. The official office page directly names “Tommy Webber and Megan Lange.”
- YongMing Zheng and Lori Kwan are alliance-team contacts based on the supplied meeting context, not separately named ZIP owners in the source. No additional ZIPs were assigned to them. The UI says **“Local alliance team”**, not an exhaustive legal ownership roster.
- Source 296 also names Sunil Pinto; source 513 also names Roland Demasco. These offices qualify because Lolita/Kevan/David are members. Sunil and Roland are not displayed as alliance members, and no nonmember-only territory was imported. The Chino Hills website spells Roland's surname Damasco and David's surname Kapajos; draft uses Gary's supplied member spellings.

### Excluded source territories

Every territory without a supplied Chat member was excluded; these are:

- 130: Charles Park, Ray Kikavousi (17 ZIPs)
- 353: Ernesto Ortega (16 ZIPs)
- 366: Jason Landau (14 ZIPs)
- 371: Jim Carteris (11 ZIPs)
- 244: Larry Roberts (11 ZIPs)
- 234: Mark and Charlie Paretchan (39 ZIPs)
- 316: Paul Terpeluk (8 ZIPs)
- 416: Nicole Freeman (19 ZIPs)
- 425: Matt & Carolyn August (15 ZIPs)
- 447: Kanisha Golden (7 ZIPs)
- 453: Ellen Wong (12 ZIPs)
- 463: Felipe Dos Santos De Souza, Jonathan Dos Santos De Souza, Jordan Belcher (15 ZIPs)
- 498: David and Ruth Kim (22 ZIPs)
- 520: Hai Tran (13 ZIPs)
- 528: Rohit Punj (23 ZIPs)
- 530: Loc Lam (25 ZIPs)
- 550: Rajvir Sahota (23 ZIPs)
- 448: Kanisha Golden (19 ZIPs)
- 412: Paul Terpeluk (9 ZIPs)
- 372: Jim Carteris (14 ZIPs)
- 522: Hai Tran (13 ZIPs)
- 405: Jason Landau (14 ZIPs)
- 426: Matt & Carolyn August (16 ZIPs)
- 133: Charles Park, Ray Kikavousi (12 ZIPs)
- 413: Paul Terpeluk (43 ZIPs)
- 492: David and Ruth Kim (12 ZIPs)
- 433: Jim Carteris (15 ZIPs)
- 449: Kanisha Golden (14 ZIPs)
- 305A: Jason Landau (9 ZIPs)
- 136: Charles Park, Ray Kikavousi (16 ZIPs)
- 496: Matt & Carolyn August (12 ZIPs)
- 437: Jason Landau (20 ZIPs)
- 254: Mark and Charlie Paretchan (21 ZIPs)
- 432: Jim Carteris (20 ZIPs)
- 558: Matt & Carolyn August (13 ZIPs)
- 302: Charles Park, Ray Kikavousi (15 ZIPs)
- 541: Jason Landau (8 ZIPs)

The older SoCal tab's Charith Weerasuriya entries were not imported or independently reassigned. The requested `Zip Codes` tab already assigns those ZIPs directly to Prashant Kumar. No source territorial owner was silently overridden.

## Duplicates / routing decisions that need owner review

- **91396:** appears in both Scot Kuratsu's territory 442 and Thomas/Tommy Webber's territory 490. The lookup shows **both offices with an explicit ambiguity warning**, not an invented winner. Resolve before launch.
- **91226:** appears in David Kapojos's Burbank territory 191C and Glendale territory 360A. Same owner/phone, two office pages. Both appear with the same warning until the group chooses a single office or retains both.
- Duplicate repeated rows for **91210** (Burbank) and **91775** (San Gabriel) were deduplicated within the same office. No territory assignment was changed.
- No other ambiguous person/territory matches were guessed. The above aliases and co-team inclusions are explicit and reviewable.

## Verified links / phones and remaining TBD

- **14 office-specific URLs loaded and showed the correct named office in WebFetch.** All 14 displayed main numbers match the official national directory and the office main call/footer number. Direct requests initially hit 403 for most offices; WebFetch successfully returned official office content, so the public-fetch fallback is explicitly recorded.
- **Montclair office URL is TBD.** The attempted `/home-healthcare-montclair/` returned national-finder content, not a verified Montclair office page, and is not used. Its **(840) 200-9868** number comes from Gary's supplied context, not independently verified from an official office page. The Montclair consultation button uses the supplied telephone number and is labeled as a phone fallback while the office website is confirmed. This is the one intentional exception to office-page consultation links.
- **Simi Valley:** selected **(805) 915-4706**, present in the main call link, footer and national directory. A lower paragraph says 805-915-5676; Scot should confirm the intended number before launch. No fabricated phone was used.
- FirstLight national finder was opened and verified: https://www.firstlighthomecare.com/locations/ . Uncovered ZIPs link there rather than being routed to a nearby/nonmember office.
- No email address is needed on the draft; avoiding a shared inbox also avoids accidentally implying one owner manages all independent offices.

## Design and publication decisions for Gary

1. **Corporate approval and hosting first.** The page has a conspicuous review banner, `noindex,nofollow`, and the exact requested independently-owned/corporate-not-approved footer. It is not a live approved regional office. Corporate should approve the regional name, logo usage, disclaimer, domain and proposed subdomain before anything is hosted.
2. **ZIP-first, with equal office visibility.** No Montclair priority, lead capture, commission routing or implied blanket coverage. The office list is alphabetical. A native expandable directory keeps the mobile page practical while leaving every office discoverable.
3. **Warm, restrained brand direction.** Official embedded logo, FirstLight-site green `#046a38` and yellow `#ffc71e`, cream background, readable system type, no stock testimonials, marketing statistics or AI language. Hero: “Good care starts close to home.” No remote fonts or third-party embeds.
4. **Routing governance.** Gary and the owners should approve the 91396/91226 overlaps, corrected names, alliance-contact label and the sheet's ability to act as the shared territory authority. The page does not automatically sync to the sheet; review/rebuild is deliberate.
5. **Montclair CTA and legal identity.** Confirm Montclair's permanent official page and main number. MINGA GROUP LLC is not presented as the owner of the entire alliance. If desired, add it only to Montclair's own legal details.
6. **Consultation wording and service availability.** Keep or revise “Request a free care consultation” after owner/corporate review. Personal Care, Companion Care, Dementia Care and Respite Care come from the official FirstLight site; the page explicitly asks visitors to confirm local availability.

## QA performed

- Rendered and visually inspected desktop and mobile full-page screenshots, plus readable top/lookup crops. No clipping, overlap or horizontal overflow found.
- Verified every one of the **225 unique ZIP mappings** against the source-derived data.
- Interactive covered ZIP tests: 91710, 92602, 92591, 93010, 90601, 91709, 90069.
- Uncovered **10001** → national finder, never a local nonmember guess.
- Both ambiguous ZIPs show two offices and a warning.
- Empty, short, alphabetic and potentially malicious input rejected safely.
- Checked widths 320, 390, 768, 1024, 1440px; no horizontal overflow.
- All 15 consultation actions validated; working native directory with JavaScript disabled; visible focus styles, explicit input label and live result region.
- Zero JavaScript errors. Zero external network requests on load/ZIP lookup. No client data, fake reviews, unverified statistics, publishing, emailing, posting or source-sheet edits.

## Editing safely

For a source-driven update, replace the local workbook only after downloading the approved revision, review the explicit owner/territory allowlist and office definitions in `build.py`, then run `python3 build.py` and rerun QA. It will rebuild `index.html`, `offices.json` and `source-audit.json`; screenshots must then be regenerated. **The source Drive workbook remains untouched.**

For an HTML-only handoff, the data is fully readable in the embedded `office-data` JSON block; `offices.json` is the matching review/export snapshot. Keep office `zipCodes` and `zipToOfficeIds` in sync. Do not choose the first office for an overlapping ZIP.

## Sources

- Source workbook: https://docs.google.com/spreadsheets/d/1F_2B0a-3bMgodfawzJHrkoeIbD6b8luI/edit?gid=143651117#gid=143651117
- Corporate services/names: https://www.firstlighthomecare.com/
- Public directory (actual office links and numbers): https://www.firstlighthomecare.com/locations/all/
- National finder: https://www.firstlighthomecare.com/locations/
- Individual verified office URLs: linked in the table above and recorded in `verification.json`.

Research limitation: `parallel-cli` was not installed (`command not found`). No substitute search provider was used. The official site's own public navigation/directory plus WebFetch provided the required URLs and content; the page build was not blocked.
