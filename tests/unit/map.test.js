import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { JSDOM } from "jsdom";
import {
  AREA_COLORS,
  areaColor,
  coordinateKey,
  markerIconAnchor,
  parseServiceAreas,
  placeReadyAreas,
  popupHtml,
  popupWidth,
  serviceAreaStats,
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

test("a popup names the office, phone, and care guide", () => {
  const html = popupHtml({
    id: "woodland hills",
    name: "Woodland Hills & Calabasas",
    phone: "(818) 443-1281",
    phoneHref: "tel:+18184431281",
    areas: "Woodland Hills, Calabasas",
  });
  const dom = new JSDOM(`<!doctype html><div id="root"></div>`);
  const root = dom.window.document.getElementById("root");
  root.innerHTML = html;
  assert.equal(
    root.querySelector("h3").textContent,
    "Woodland Hills & Calabasas",
  );
  assert.equal(
    root.querySelector("a").getAttribute("href"),
    "tel:+18184431281",
  );
  assert.equal(
    root.querySelector(".area-popup-start").getAttribute("href"),
    "index.html?office=woodland%20hills",
  );
  assert.equal(
    popupHtml({ id: "x", name: "X", areas: "Y" }).includes("<p><a"),
    false,
  );
});

test("the service area script loads the same areas as the GeoJSON", async () => {
  const script = await readFile(
    new URL("../../assets/service-areas.js", import.meta.url),
    "utf8",
  );
  const geojson = JSON.parse(
    await readFile(
      new URL("../../assets/service-areas.geojson", import.meta.url),
      "utf8",
    ),
  );
  const loaded = parseServiceAreas(script);
  assert.deepEqual(loaded, geojson);
  assert.equal(parseServiceAreas(geojson), geojson);
  assert.equal(parseServiceAreas("no marker"), null);
  assert.equal(parseServiceAreas("const SERVICE_AREAS = {;"), null);
  assert.equal(
    parseServiceAreas('const SERVICE_AREAS = {"type":"Nope"}'),
    null,
  );
  assert.equal(parseServiceAreas("const SERVICE_AREAS = null;"), null);
  assert.equal(
    parseServiceAreas(
      'const SERVICE_AREAS = {"type":"FeatureCollection","features":[]}',
    ).features.length,
    0,
  );
  assert.equal(parseServiceAreas({ type: "Feature" }), null);
  assert.equal(parseServiceAreas(null), null);

  const stats = serviceAreaStats(loaded);
  assert.equal(stats.ids.length, 15);
  assert.equal(stats.drawn.size, 141);
  assert.equal(stats.missing.size, 84);
  assert.equal(stats.drawn.has("91710"), true);
  assert.equal(stats.missing.has("91226"), true);
  assert.equal(stats.drawn.has("91226"), false);
  assert.equal(serviceAreaStats("not areas").ids.length, 0);
  assert.equal(
    serviceAreaStats({
      type: "FeatureCollection",
      features: [
        null,
        { properties: { id: "x", zips: ["1"], missingZips: ["2"] } },
      ],
    }).missing.size,
    1,
  );
});

test("shared offices get the next pin slot and their own color", () => {
  const point = { latitude: 34.1526952, longitude: -118.2545802 };
  const placed = placeReadyAreas([
    {
      id: "burbank",
      point,
      feature: { type: "Feature" },
      record: { name: "Burbank" },
    },
    {
      id: "glendale",
      point,
      feature: { type: "Feature" },
      record: { name: "Glendale" },
    },
    {
      id: "unknown-office",
      point: { latitude: 1, longitude: 2 },
      feature: {},
      record: {},
    },
  ]);
  assert.equal(placed[0].color, AREA_COLORS.burbank);
  assert.equal(placed[1].color, AREA_COLORS.glendale);
  assert.equal(placed[0].slot, 0);
  assert.equal(placed[1].slot, 1);
  assert.deepEqual(placed[1].anchor, [-5, 11]);
  assert.equal(placed[2].color, "#046a38");
  assert.equal(placeReadyAreas().length, 0);
});
