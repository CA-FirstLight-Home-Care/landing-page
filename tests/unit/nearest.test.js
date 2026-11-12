import assert from "node:assert/strict";
import { test } from "node:test";
import {
  NEAREST_TIE_KM,
  distanceKm,
  geolocationErrorMessage,
  rankByDistance,
  tiedNearest,
} from "../../assets/lib/nearest.js";

test("distance is zero at the same point and grows with latitude", () => {
  assert.equal(distanceKm(34, -118, 34, -118), 0);
  const oneDegree = distanceKm(34, -118, 35, -118);
  assert.ok(oneDegree > 110 && oneDegree < 112);
});

test("the nearest office tie stops at 0.05 km", () => {
  const ranked = rankByDistance([
    { id: "far", km: 3 },
    { id: "bad", km: Number.NaN },
    { id: "close", km: 1 },
    { id: "tied", km: 1 + NEAREST_TIE_KM - 0.001 },
    { id: "edge", km: 1 + NEAREST_TIE_KM },
  ]);
  assert.deepEqual(
    ranked.map((item) => item.id),
    ["close", "tied", "edge", "far"],
  );
  assert.deepEqual(
    tiedNearest(ranked).map((item) => item.id),
    ["close", "tied"],
  );
  assert.deepEqual(tiedNearest([]), []);
});

test("geolocation errors stay in plain English", () => {
  assert.match(geolocationErrorMessage({ code: 1 }), /permission was denied/i);
  assert.match(geolocationErrorMessage({ code: 2 }), /could not be found/i);
  assert.match(geolocationErrorMessage({ code: 3 }), /took too long/i);
  assert.match(
    geolocationErrorMessage({ code: 0 }),
    /cannot share your location/i,
  );
  assert.match(geolocationErrorMessage(null), /cannot share your location/i);
});
