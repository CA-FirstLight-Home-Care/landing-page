import { escapeHtml } from "./format.js";

export const AREA_COLORS = {
  burbank: "#0e7a57",
  "chino-hills": "#1d4e89",
  glendale: "#b45309",
  irvine: "#0f766e",
  "marina-del-rey": "#6d28d9",
  montclair: "#9a3412",
  pasadena: "#3f6212",
  "rancho-cucamonga": "#9f1239",
  "san-clemente": "#0369a1",
  "san-gabriel": "#a16207",
  "simi-valley": "#4338ca",
  temecula: "#be185d",
  "west-hollywood": "#0f4c5c",
  whittier: "#4d7c0f",
  "woodland-hills": "#7c2d12",
};

export const AREA_FALLBACK_COLOR = "#046a38";

export function areaColor(id) {
  return AREA_COLORS[id] || AREA_FALLBACK_COLOR;
}

export function coordinateKey(latitude, longitude) {
  return latitude.toFixed(3) + "," + longitude.toFixed(3);
}

export function markerIconAnchor(slot) {
  return [11 - slot * 16, 11];
}

export function popupWidth(clientWidth) {
  return Math.max(150, Math.min(240, clientWidth - 134));
}

export function popupHtml(record) {
  const phone = record.phoneHref
    ? `<p><a href="${escapeHtml(record.phoneHref)}">${escapeHtml(record.phone)}</a></p>`
    : "";
  return (
    `<div class="area-popup">` +
    `<h3>${escapeHtml(record.name)}</h3>` +
    phone +
    `<p>${escapeHtml(record.areas)}</p>` +
    `<a class="area-popup-start" href="index.html?office=${encodeURIComponent(record.id)}">Start the care guide</a>` +
    `</div>`
  );
}
