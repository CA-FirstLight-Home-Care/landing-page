import { mkdir, readFile, writeFile } from "node:fs/promises";

const summary = JSON.parse(
  await readFile(new URL("../coverage/coverage-summary.json", import.meta.url)),
);
const lines = summary.total.lines.pct;
const message = Number(lines).toFixed(1).replace(/\.0$/, "") + "%";
const color =
  lines >= 90
    ? "brightgreen"
    : lines >= 80
      ? "green"
      : lines >= 70
        ? "yellowgreen"
        : "yellow";
const badge = {
  schemaVersion: 1,
  label: "coverage",
  message,
  color,
};
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="118" height="20" role="img" aria-label="coverage: ${message}">
  <title>coverage: ${message}</title>
  <rect width="118" height="20" rx="3" fill="#555"/>
  <rect x="62" width="56" height="20" fill="#4c1"/>
  <text x="31" y="14" text-anchor="middle" fill="#fff" font-family="Verdana,DejaVu Sans,sans-serif" font-size="11">coverage</text>
  <text x="90" y="14" text-anchor="middle" fill="#fff" font-family="Verdana,DejaVu Sans,sans-serif" font-size="11">${message}</text>
</svg>
`;
await mkdir(new URL("../badges/", import.meta.url), { recursive: true });
await writeFile(
  new URL("../badges/coverage.json", import.meta.url),
  JSON.stringify(badge, null, 2) + "\n",
);
await writeFile(new URL("../badges/coverage.svg", import.meta.url), svg);
console.log("coverage badge", message);
