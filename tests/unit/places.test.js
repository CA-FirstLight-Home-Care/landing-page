import assert from "node:assert/strict";
import { test } from "node:test";
import { MAX_ASSIGN_MILES, ZIP_ROUTING } from "../../assets/zip-routing.js";
import {
  matchCities,
  matchZips,
  placeQueryKind,
} from "../../assets/lib/places.js";

const cities = {
  pasadena: { city: "Pasadena", ids: ["pasadena"] },
  "south pasadena": { city: "South Pasadena", ids: ["glendale"] },
  glendale: { city: "Glendale", ids: ["glendale"] },
};

test("numbers query ZIPs and letters query cities", () => {
  assert.equal(placeQueryKind("917"), "zip");
  assert.equal(placeQueryKind("Pasadena"), "city");
  assert.equal(placeQueryKind("91710 Pasadena"), "city");
  assert.equal(placeQueryKind(""), "");
  assert.equal(placeQueryKind("   "), "");
});

test("city matches prefer the start of the name", () => {
  assert.deepEqual(matchCities("pas", cities), ["Pasadena", "South Pasadena"]);
  assert.deepEqual(matchCities("adena", cities), [
    "Pasadena",
    "South Pasadena",
  ]);
  assert.deepEqual(matchCities("south", cities), ["South Pasadena"]);
  assert.deepEqual(matchCities("zzz", cities), []);
});

test("ZIP suggestions skip non-alliance and far unlisted ZIPs", () => {
  const labels = matchZips("919", ZIP_ROUTING, MAX_ASSIGN_MILES).map(
    (item) => item.zip,
  );
  assert.equal(labels.includes("91901"), false);
  const near = matchZips("92882", ZIP_ROUTING, MAX_ASSIGN_MILES);
  assert.deepEqual(near, [{ zip: "92882", label: "92882, Corona" }]);
  const alliance = matchZips("91710", ZIP_ROUTING, MAX_ASSIGN_MILES);
  assert.deepEqual(alliance, [{ zip: "91710", label: "91710" }]);
  const blocked = matchZips("92647", ZIP_ROUTING, MAX_ASSIGN_MILES);
  assert.deepEqual(blocked, []);
  assert.equal(matchZips("917", ZIP_ROUTING, MAX_ASSIGN_MILES).length, 8);
});
