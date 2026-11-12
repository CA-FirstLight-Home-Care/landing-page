import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import assert from "node:assert/strict";
import vm from "node:vm";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const worker = (await import("../publish/_worker.js")).default;
let checks = 0;
const check = (name, fn) => {
  fn();
  checks++;
  console.log("PASS", name);
};
const pages = {
  "/": "index.html",
  "/index.html": "index.html",
  "/services": "services.html",
  "/services.html": "services.html",
  "/locations": "locations.html",
  "/locations.html": "locations.html",
  "/faqs": "faqs.html",
  "/faqs.html": "faqs.html",
};
for (const [path, file] of Object.entries(pages)) {
  const response = await worker.fetch(
    new Request("https://example.test" + path),
  );
  const body = await response.text();
  const local = await readFile(resolve(root, file), "utf8");
  check("Allowed page matches local " + path, () => {
    assert.equal(response.status, 200);
    assert.equal(body, local);
    assert.match(
      local,
      new RegExp(
        `<link href="assets/${file.replace(".html", ".css")}" rel="stylesheet"`,
      ),
    );
    assert.doesNotMatch(local, /<style(?:\s|>)/);
    assert.doesNotMatch(local, /<script(?:\s[^>]*)?>\s*[^<\s]/);
    if (file === "index.html") {
      assert.doesNotMatch(local, /<datalist|find-closest|location-status/);
      assert.match(local, /role="combobox"/);
      assert.match(local, /id="city-suggestions"/);
      assert.match(local, /id="city-suggestions"[\s\S]*?role="listbox"/);
      assert.doesNotMatch(local, /id="quiz-next"|id="quiz-skip"|Skip question/);
      assert.match(local, /id="quiz-schedule-done"/);
    }
    assert.match(response.headers.get("Content-Type"), /text\/html/);
    assert.match(
      response.headers.get("Content-Security-Policy"),
      /connect-src 'none'/,
    );
    assert.match(response.headers.get("X-Robots-Tag"), /noindex/);
  });
  const head = await worker.fetch(
    new Request("https://example.test" + path, { method: "HEAD" }),
  );
  check("HEAD is empty " + path, () => {
    assert.equal(head.status, 200);
  });
  assert.equal(await head.text(), "");
}
const assets = {
  "/assets/index.css": ["index.css", /text\/css/],
  "/assets/services.css": ["services.css", /text\/css/],
  "/assets/locations.css": ["locations.css", /text\/css/],
  "/assets/faqs.css": ["faqs.css", /text\/css/],
  "/assets/index.js": ["index.js", /javascript/],
  "/assets/zip-routing.js": ["zip-routing.js", /javascript/],
  "/assets/nav.js": ["nav.js", /javascript/],
  "/assets/locations.js": ["locations.js", /javascript/],
  "/assets/faqs.js": ["faqs.js", /javascript/],
  "/assets/manrope-subset.woff": ["manrope-subset.woff", /font\/woff/],
};
for (const [path, [file, contentType]] of Object.entries(assets)) {
  const response = await worker.fetch(
    new Request("https://example.test" + path),
  );
  const body = Buffer.from(await response.arrayBuffer());
  const local = await readFile(resolve(root, "assets", file));
  check("Published asset matches local " + path, () => {
    assert.equal(response.status, 200);
    assert.deepEqual(body, local);
    assert.match(response.headers.get("Content-Type"), contentType);
  });
  const head = await worker.fetch(
    new Request("https://example.test" + path, { method: "HEAD" }),
  );
  check("HEAD asset is empty " + path, () => {
    assert.equal(head.status, 200);
  });
  assert.equal(await head.text(), "");
}
for (const path of [
  "/README.md",
  "/ANTIGRAVITY-HANDOFF.md",
  "/offices.json",
  "/office-extras.json",
  "/source-current.xlsx",
  "/source-audit.json",
  "/index-v6.html",
  "/services-v6.html",
  "/locations-v6.html",
  "/reports/REWORK-V7-REPORT.md",
  "/tests/test_v7.py",
  "/_worker.js",
  "/publish/_worker.js",
  "/desktop.png",
  "/services/",
  "/faqs/",
  "/unknown",
]) {
  const response = await worker.fetch(
    new Request("https://example.test" + path),
  );
  check("Private/unknown route 404 " + path, () =>
    assert.equal(response.status, 404),
  );
}
for (const method of ["POST", "PUT", "DELETE"]) {
  const response = await worker.fetch(
    new Request("https://example.test/", { method }),
  );
  check("Method rejected " + method, () => assert.equal(response.status, 405));
}
for (const file of [
  "index.html",
  "services.html",
  "locations.html",
  "faqs.html",
]) {
  const local = await readFile(resolve(root, file), "utf8");
  check("Mobile menu markup " + file, () => {
    assert.match(local, /class="nav-toggle-input"/);
    assert.match(local, /id="site-nav"/);
    assert.match(local, /src="assets\/nav\.js"/);
    assert.match(local, /class="when-closed">Menu</);
    assert.match(local, /class="when-open">Close</);
    assert.doesNotMatch(local, /[—–]/);
  });
}
const guide = await readFile(resolve(root, "index.html"), "utf8");
check("Mobile action bar and quiz dots", () => {
  assert.match(
    guide,
    /class="mobile-action-bar"[\s\S]*?hidden[\s\S]*?id="mobile-action-bar"/,
  );
  assert.match(guide, /id="mobile-call"/);
  assert.match(guide, /id="mobile-inquiry"/);
  assert.match(guide, /id="question-dots"/);
});
const guideScript = await readFile(resolve(root, "assets/index.js"), "utf8");
check("Mobile bar follows the chosen office", () => {
  assert.match(guideScript, /function syncMobileBar/);
  assert.match(guideScript, /#inquiry-open, #mobile-inquiry/);
  assert.match(guideScript, /question-dots/);
  assert.doesNotMatch(guideScript, /[—–]/);
});
for (const file of ["index.css", "services.css", "locations.css", "faqs.css"]) {
  const css = await readFile(resolve(root, "assets", file), "utf8");
  check("Mobile type, targets, and menu rules " + file, () => {
    assert.match(css, /@media \(max-width: 700px\)/);
    assert.match(css, /font-size: 18px/);
    assert.match(css, /\.nav-toggle \{/);
    assert.match(css, /min-height: 52px/);
    assert.match(css, /prefers-reduced-motion: reduce/);
    assert.doesNotMatch(css, /[—–]/);
  });
}
const guideJs = await readFile(resolve(root, "assets/index.js"), "utf8");
const locationJs = await readFile(resolve(root, "assets/locations.js"), "utf8");
const guideHtml = await readFile(resolve(root, "index.html"), "utf8");
const locationHtml = await readFile(resolve(root, "locations.html"), "utf8");
check("Guide autocomplete queries ZIP or city", () => {
  assert.match(guideJs, /function placeQueryKind/);
  assert.match(guideJs, /function zipMatches/);
  assert.match(guideJs, /function cityMatches/);
  assert.match(guideJs, /aria-activedescendant/);
  assert.match(guideJs, /Sorry, this ZIP code isn't in our service area yet\./);
  assert.match(guideJs, /Sorry, this city isn't in our service area yet\./);
  assert.match(guideJs, /referralHref/);
  assert.match(guideJs, /Find your local FirstLight office/);
  assert.match(guideJs, /navigator\.geolocation\.getCurrentPosition/);
  assert.match(guideJs, /PERMISSION|error\.code|messages\[error/);
  assert.match(guideJs, /Reverse geocoding belongs here/);
  assert.doesNotMatch(guideJs, /nationalDirectory\(/);
});
check("Guide locate control is in the field", () => {
  assert.match(guideHtml, /id="locate-button"/);
  assert.match(guideHtml, /aria-label="Use my location"/);
  assert.match(guideHtml, /class="locate-spinner"/);
  assert.match(guideHtml, /role="combobox"/);
  assert.doesNotMatch(guideHtml, /<datalist|find-closest|location-status/);
});
check("Locations search uses the same autocomplete", () => {
  assert.match(locationHtml, /id="location-locate"/);
  assert.match(locationHtml, /id="location-suggestions"/);
  assert.match(locationHtml, /role="combobox"/);
  assert.doesNotMatch(locationHtml, /<datalist/);
  assert.match(
    locationJs,
    /Sorry, this ZIP code isn't in our service area yet\./,
  );
  assert.match(locationJs, /Sorry, this city isn't in our service area yet\./);
  assert.match(locationJs, /referralHref/);
  assert.match(locationJs, /Find your local FirstLight office/);
  assert.match(locationJs, /getCurrentPosition/);
});
for (const file of ["index.css", "locations.css"]) {
  const css = await readFile(resolve(root, "assets", file), "utf8");
  check("Locate button styles " + file, () => {
    assert.match(css, /\.locate-button \{/);
    assert.match(css, /min-width: 48px/);
    assert.match(css, /min-height: 48px/);
    assert.match(css, /@keyframes locate-spin/);
    assert.match(css, /prefers-reduced-motion: reduce/);
  });
}
const routingCode = await readFile(
  resolve(root, "assets/zip-routing.js"),
  "utf8",
);
const routing = {};
vm.runInNewContext(routingCode, routing);
const routeZip = routing.routeZip;
check("30 mile cutoff splits unlisted ZIPs 507 and 320", () => {
  const rows = Object.values(routing.ZIP_ROUTING.unlistedSoCal);
  const assigned = rows.filter((row) => row.d <= routing.MAX_ASSIGN_MILES);
  const referred = rows.filter((row) => row.d > routing.MAX_ASSIGN_MILES);
  assert.equal(routing.MAX_ASSIGN_MILES, 30);
  assert.equal(rows.length, 827);
  assert.equal(assigned.length, 507);
  assert.equal(referred.length, 320);
});
check("Sample ZIPs follow the sheet order", () => {
  const office = (zip) => JSON.parse(JSON.stringify(routeZip(zip)));
  assert.deepEqual(office("91710"), {
    kind: "alliance",
    zip: "91710",
    ids: ["montclair"],
  });
  assert.deepEqual(office("91780"), {
    kind: "alliance",
    zip: "91780",
    ids: ["san-gabriel"],
  });
  assert.equal(office("92647").kind, "referral");
  assert.equal(office("92101").kind, "referral");
  assert.equal(
    routing.referralHref("92647"),
    "https://www.firstlighthomecare.com/locations/?loc=92647",
  );
  const near = office("91756");
  assert.equal(near.kind, "unlisted");
  assert.deepEqual(JSON.parse(JSON.stringify(near.ids)), [
    "san-gabriel",
    "glendale",
    "pasadena",
  ]);
  assert.ok(near.ids.includes(near.id));
  assert.equal(office("91756").id, near.id);
  const corona = office("92882");
  assert.equal(corona.kind, "unlisted");
  assert.deepEqual(JSON.parse(JSON.stringify(corona.ids)), [
    "irvine",
    "chino-hills",
    "montclair",
  ]);
  assert.ok(corona.ids.includes(corona.id));
  assert.equal(office("94103").kind, "referral");
  assert.equal(office("10001").kind, "outside");
  const far = office("91901");
  assert.equal(far.kind, "outside");
  assert.ok(routing.ZIP_ROUTING.unlistedSoCal["91901"].d > 30);
});
console.log(
  `RESULT ${checks} offline routing checks passed. No network calls were made.`,
);
