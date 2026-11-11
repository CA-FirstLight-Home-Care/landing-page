# Export test changes

The original scripts were copied from /workspace/socal-landing, not rewritten. Changes: resolve the project root relative to tests/, read axe-core from the local npm installation, support an optional CHROMIUM_EXECUTABLE_PATH and bundled Playwright Chromium, and allow an explicit URL for modal/contrast checks. Modal evidence labels local versus public URLs correctly. The sole excluded-backup existence assertion now verifies three recorded historical hashes instead. It does not claim those omitted files are present. All other website/functional/a11y assertions remain unchanged. Original live evidence is under reports/evidence/ and was not edited.

Test-generated PNGs are local output only, not included in the distributed archive or publish folder. No real inquiry/call/booking should be submitted during tests.
