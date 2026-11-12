import assert from "node:assert/strict";
import { test } from "node:test";
import {
  MAX_ASSIGN_MILES,
  ZIP_ROUTING,
  referralHref,
  routeZip,
} from "../../assets/zip-routing.js";
import {
  createRouteZip,
  referralHref as hrefFor,
} from "../../assets/lib/routing.js";

test("referral URL adds loc only for a 5 digit ZIP", () => {
  assert.equal(
    referralHref("92647"),
    "https://www.firstlighthomecare.com/locations/?loc=92647",
  );
  assert.equal(
    referralHref("12"),
    "https://www.firstlighthomecare.com/locations/",
  );
  assert.equal(referralHref(""), ZIP_ROUTING.referralUrl);
  assert.equal(
    hrefFor("10001", "https://example.test/locations/"),
    "https://example.test/locations/?loc=10001",
  );
});

test("alliance, overlap, referral, and outside ZIPs follow the sheet", () => {
  assert.equal(MAX_ASSIGN_MILES, 30);
  assert.deepEqual(routeZip("91710"), {
    kind: "alliance",
    zip: "91710",
    ids: ["montclair"],
  });
  assert.equal(routeZip("91780").kind, "alliance");
  assert.deepEqual(routeZip("91226").ids, ["burbank", "glendale"]);
  assert.equal(routeZip("91226").kind, "overlap");
  assert.equal(routeZip("92647").kind, "referral");
  assert.equal(routeZip("94103").kind, "referral");
  assert.equal(routeZip("10001").kind, "outside");
  assert.equal(routeZip("1234").kind, "invalid");
  assert.equal(routeZip("  ").kind, "invalid");
  assert.equal(routeZip().kind, "invalid");
  assert.equal(routeZip(null).zip, "");
});

test("unlisted ZIPs past 30 miles are referred and closer ones are assigned", () => {
  const rows = Object.values(ZIP_ROUTING.unlistedSoCal);
  const assigned = rows.filter((row) => row.d <= MAX_ASSIGN_MILES);
  const referred = rows.filter((row) => row.d > MAX_ASSIGN_MILES);
  assert.equal(rows.length, 827);
  assert.equal(assigned.length, 507);
  assert.equal(referred.length, 320);
  assert.equal(routeZip("92882").kind, "unlisted");
  assert.equal(routeZip("92882").city, "Corona");
  assert.equal(routeZip("91901").kind, "outside");
  assert.ok(ZIP_ROUTING.unlistedSoCal["91901"].d > 30);
  assert.equal(routeZip("92399").kind, "outside");
});

test("a distance of exactly 30 miles is still assigned", () => {
  const routing = {
    referralUrl: "https://example.test/",
    allianceZips: {},
    nonAllianceZips: [],
    unlistedSoCal: {
      11111: { o: ["irvine"], d: 30, c: "Edge" },
      22222: { o: ["irvine"], d: 30.01, c: "Past" },
    },
  };
  const route = createRouteZip(routing, { random: () => 0 });
  assert.equal(route("11111").kind, "unlisted");
  assert.equal(route("11111").id, "irvine");
  assert.equal(route("22222").kind, "outside");
  assert.equal(createRouteZip(routing)("11111").id, "irvine");
});

test("the random office is chosen once and can be injected", () => {
  const picks = new Map();
  let calls = 0;
  const route = createRouteZip(ZIP_ROUTING, {
    picks,
    random: () => {
      calls += 1;
      return 0;
    },
  });
  const first = route("91756");
  const second = route("91756");
  assert.equal(first.kind, "unlisted");
  assert.equal(first.id, "san-gabriel");
  assert.equal(second.id, first.id);
  assert.equal(calls, 1);
  const last = createRouteZip(ZIP_ROUTING, { random: () => 0.999 });
  assert.equal(last("91756").id, "pasadena");
});
