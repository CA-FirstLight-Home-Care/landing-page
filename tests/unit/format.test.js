import assert from "node:assert/strict";
import { test } from "node:test";
import { JSDOM } from "jsdom";
import {
  directoryLinkHtml,
  displayOfficeName,
  escapeHtml,
  phoneHref,
} from "../../assets/lib/format.js";
import { popupHtml } from "../../assets/lib/map.js";

test("office names, phones, and referral links stay plain", () => {
  assert.equal(
    displayOfficeName({ shortName: "Woodland Hills\u2013Calabasas" }),
    "Woodland Hills / Calabasas",
  );
  assert.equal(phoneHref({ phone: "(840) 200-9868" }), "tel:+18402009868");
  assert.equal(
    escapeHtml(`<a href="x">&'`),
    "&lt;a href=&quot;x&quot;&gt;&amp;&#39;",
  );
  const link = directoryLinkHtml(
    "92647",
    "https://www.firstlighthomecare.com/locations/?loc=92647",
  );
  assert.match(link, /Find your local FirstLight office/);
  assert.match(link, /loc=92647/);
  assert.match(link, /target="_blank"/);
  assert.match(
    directoryLinkHtml("", "https://www.firstlighthomecare.com/locations/"),
    /Check our other directory here/,
  );
});

test("a map popup exposes the phone and the care guide in the DOM", () => {
  const html = popupHtml({
    id: "montclair",
    name: "Montclair",
    phone: "(840) 200-9868",
    phoneHref: "tel:+18402009868",
    areas: "Serving Chino, Montclair, Pomona, Ontario.",
  });
  const dom = new JSDOM(`<!doctype html><div id="root"></div>`);
  const root = dom.window.document.getElementById("root");
  root.innerHTML = html;
  assert.equal(root.querySelector("h3").textContent, "Montclair");
  assert.equal(
    root.querySelector('a[href^="tel:"]').textContent,
    "(840) 200-9868",
  );
  assert.equal(
    root.querySelector(".area-popup-start").getAttribute("href"),
    "index.html?office=montclair",
  );
  assert.match(root.textContent, /Pomona/);
  const empty = popupHtml({
    id: "none",
    name: "No phone",
    phone: "",
    phoneHref: "",
    areas: "Serving none.",
  });
  assert.equal(empty.includes("tel:"), false);
});
