import assert from "node:assert/strict";
import { test } from "node:test";
import {
  AREA_COLORS,
  areaColor,
  coordinateKey,
  markerIconAnchor,
  popupWidth,
} from "../../assets/lib/map.js";

test("each alliance office has its own map color", () => {
  const colors = Object.values(AREA_COLORS);
  assert.equal(colors.length, 15);
  assert.equal(new Set(colors).size, 15);
  assert.equal(areaColor("irvine"), AREA_COLORS.irvine);
  assert.equal(areaColor("missing"), "#046a38");
});

test("shared office pins are offset and popups fit a phone", () => {
  assert.deepEqual(markerIconAnchor(0), [11, 11]);
  assert.deepEqual(markerIconAnchor(1), [-5, 11]);
  assert.equal(coordinateKey(34.1526952, -118.2545802), "34.153,-118.255");
  assert.equal(popupWidth(375), 240);
  assert.equal(popupWidth(320), 186);
  assert.equal(popupWidth(200), 150);
});
