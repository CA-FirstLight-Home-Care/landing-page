# Handoff export validation

Prepared Nov 11, 2026 07:02:50 AM PST. This export did not redeploy or change the public site.

- Four current HTML documents are byte-for-byte equal to the original working files and the last verified live release.
- Portable copies of the three main suites passed 243/243 checks: 183 core, 32 programs, 28 couples/table/FAQ.
- 32 local axe scans including the supplemental modal: zero violations. Core keyboard checks covered 315 stops; continuous 320-430px reflow and 200% text/modal checks passed.
- 18 sampled text/background contrast checks passed; minimum ratio 5.33:1.
- 36 offline advanced-worker route/method checks passed. Only eight page aliases return HTML; private/unknown paths return 404 and other methods return 405.
- The prepared publish folder contains exactly index.html, services.html, locations.html, faqs.html and _worker.js. It does not contain source data, reports, tests or notes.
- Only test machine paths/browser configuration and the excluded-backup existence assertion were adapted. Historical source backups are represented by hashes, not copied HTML.
- Original release evidence remains under reports/evidence; new export validation results use the handoff- prefix.
- No real calls, inquiries, bookings, emails or API writes were performed. No live deployment or account settings were changed.
- The archive uses a curated file allowlist. Backups, screenshots, dependency directories, caches, credential files and raw external HTML were excluded. Known credential-pattern scanning passed, including workbook XML.

See HANDOFF-MANIFEST.json for file hashes and scope. Automated/targeted accessibility checks are not formal WCAG certification.
