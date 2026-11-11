# Modern redesign  -  November 10, 2026 (PST)

## Deliverables

- `index.html`: modern self-contained v2. All fonts, styles, logo and data embedded; no runtime network dependencies or trackers.
- `index-v1.html`: exact previous version, saved before any redesign changes. SHA-256 verified against `baseline-index.sha256`.
- `desktop.png` (1440 × 4293) and `mobile.png` (390 × 6875): re-rendered full-page screenshots, visually inspected.
- `desktop-top.png`, `mobile-top.png`, `mobile-lookup.png`: close-up review images.
- `modern.css`, `redesign.py`: editable visual build sources. Run `python3 redesign.py` to rebuild v2 from its preserved v1 baseline; do not run legacy `build.py` alone if you want to retain this look.
- `accessibility-results.json`, `contrast-results.json`, `test-results.json`: detailed test evidence.
- `FONT-LICENSE.txt`: SIL OFL 1.1 license for the locally installed, embedded Manrope font subset; also included inside the HTML comment so the single-file handoff carries it.

## What changed

1. Embedded Manrope variable type, larger confident headline, more generous spacing and a calmer visual hierarchy.
2. Full-width mint/yellow gradient hero with original decorative sun/orbit/land shapes, not unlicensed photography.
3. Centered ZIP search with a large pill-shaped field/button; rounded immediate result cards with a restrained entrance animation.
4. Sticky, translucent navigation with backdrop blur and a high-contrast primary action.
5. Rounded service and office cards, subtle shadows/hover states and consistent inline SVG iconography.
6. Search-as-you-type directory by city, office or local alliance team. Live result count, keyboard clear/Escape, and a helpful empty state; directory filters never affect routing.
7. Strong dark-green national-finder CTA band and brand-yellow action, with dark text instead of inaccessible yellow-on-white copy.

## What did not change

- The complete office-data object remains exactly equal to `offices.json`: 15 offices, 225 unique ZIPs, the same array-valued ZIP assignments.
- Original ZIP lookup JavaScript is unchanged byte-for-byte. Both overlaps, the 10001/uncovered national-finder fallback, errors and all TBD behavior remain intact.
- Verified URLs, phones, Montclair phone consultation fallback, owners/areas and directory action links are unchanged.
- Raw footer HTML, including the exact corporate-not-approved/independently-owned note, is unchanged byte-for-byte.
- Source workbook and other source audit/verification files were not edited.
- No publishing, posting, emailing, messaging or sharing occurred.

## Accessibility work and evidence

Target: WCAG 2.2 AA. Iterated to fix the initial automated landmark issue, clarify the labeled steps group, improve metadata readability, darken text on the yellow underline, strengthen input boundaries, and improve the skip link's actual focus behavior.

- axe-core 4.14.0: **0 detected violations across 9 tested states**, covering desktop initial/error/covered/overlap/uncovered states, directory empty/expanded states, 320px mobile and a 720px CSS layout viewport equivalent to 1440px at 200% browser zoom. Tags: WCAG 2 A/AA, 2.1 A/AA, 2.2 AA and best practices.
- **29 targeted interaction/reflow checks passed**: labeled errors/live announcements; semantic landmarks/heading sequence; working skip-link focus; keyboard directory filtering, Escape, clear and native details; visible focus rings; focus not obscured by the sticky nav at desktop and 320px; minimum 44px targets; decorative SVG hiding/alt text; widths 320–1440px; 200% text enlargement; reduced-motion behavior.
- Palette review: all explicitly checked text combinations clear **4.5:1**, including large display type. Lowest tested text pair is **4.86:1**. Input boundaries clear **3:1** (minimum tested **3.78:1**).
- axe retains `color-contrast` manual-review items for gradients, decorative symbols and sticky-layer overlaps. These are not silently counted as automated passes: the relevant worst-case background/foreground pairs were reviewed separately in `contrast-results.json`, and desktop/mobile/200%-text screenshots were visually inspected.
- No external font requests or trackers. Original no-JavaScript office browsing still works.

Automated scanning plus targeted visual/keyboard review is not a formal WCAG certification. Real assistive-technology/user testing remains appropriate before publication; no screen-reader certification is claimed.

## Regression

The existing ZIP suite still passes all 16 checks, including all 225 runtime memberships, seven covered examples, uncovered 10001, both overlap ZIPs, invalid input, all consultation links, no-JavaScript directory and zero external requests/JavaScript errors. Screenshot capture was refined to reset scrolling and finish animations, not change functional assertions.

## Maintenance

`redesign.py` reads the preserved v1 structure, embeds `modern.css` and the licensed font, adds directory filtering and asserts data/footer/original-lookup preservation before writing v2. `offices.json` was not changed. Any later territory change should be reviewed separately, then the source baseline updated intentionally before a v2 rebuild; never accidentally overwrite this design with the legacy v1 build.
