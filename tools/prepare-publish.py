from pathlib import Path
import base64
import hashlib
import json

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "publish"
OUT.mkdir(exist_ok=True)

PAGES = {
    "INDEX": "index.html",
    "SERVICES": "services.html",
    "LOCATIONS": "locations.html",
    "FAQS": "faqs.html",
}
ASSETS = {
    "assets/index.css": "text/css; charset=utf-8",
    "assets/services.css": "text/css; charset=utf-8",
    "assets/locations.css": "text/css; charset=utf-8",
    "assets/faqs.css": "text/css; charset=utf-8",
    "assets/index.js": "text/javascript; charset=utf-8",
    "assets/zip-routing.js": "text/javascript; charset=utf-8",
    "assets/nav.js": "text/javascript; charset=utf-8",
    "assets/locations.js": "text/javascript; charset=utf-8",
    "assets/faqs.js": "text/javascript; charset=utf-8",
    "assets/manrope-subset.woff": "font/woff",
}

# Fail rather than uploading an unexpected file left in the publishing folder.
allowed = set(PAGES.values()) | {"_worker.js", "assets"}
unexpected = [path.name for path in OUT.iterdir() if path.name not in allowed]
if unexpected:
    raise SystemExit(
        "Unexpected publish files, review and remove manually: "
        + ", ".join(unexpected)
    )

missing_assets = [name for name in ASSETS if not (ROOT / name).is_file()]
if missing_assets:
    raise SystemExit("Missing required site assets: " + ", ".join(missing_assets))

publish_assets = OUT / "assets"
publish_assets.mkdir(exist_ok=True)
unexpected_assets = [
    path.name for path in publish_assets.iterdir() if f"assets/{path.name}" not in ASSETS
]
if unexpected_assets:
    raise SystemExit(
        "Unexpected publish assets, review and remove manually: "
        + ", ".join(unexpected_assets)
    )

pages = []
for variable, filename in PAGES.items():
    body = (ROOT / filename).read_text()
    pages.append(f"const {variable} = {json.dumps(body, ensure_ascii=False)};")
    (OUT / filename).write_bytes((ROOT / filename).read_bytes())

asset_entries = []
for filename, content_type in ASSETS.items():
    source = ROOT / filename
    target = OUT / filename
    target.parent.mkdir(exist_ok=True)
    content = source.read_bytes()
    target.write_bytes(content)
    is_binary = filename.endswith(".woff")
    body = base64.b64encode(content).decode("ascii") if is_binary else content.decode()
    asset_entries.append(
        f"  {json.dumps('/' + filename)}: {{ body: {json.dumps(body)}, "
        f"contentType: {json.dumps(content_type)}, base64: {str(is_binary).lower()} }},"
    )

worker = "\n".join(pages) + "\n"
worker += "const ASSETS = {\n" + "\n".join(asset_entries) + "\n};\n"
worker += """export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD" },
      });
    }

    const path = new URL(request.url).pathname;
    const asset = ASSETS[path];
    if (asset) {
      const body = asset.base64
        ? Uint8Array.from(atob(asset.body), (character) =>
            character.charCodeAt(0),
          )
        : asset.body;
      return new Response(request.method === "HEAD" ? null : body, {
        status: 200,
        headers: {
          "Content-Type": asset.contentType,
          "Cache-Control": "public, max-age=300",
          "X-Content-Type-Options": "nosniff",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy": "geolocation=(self)",
        },
      });
    }

    const html =
      path === "/" || path === "/index.html"
        ? INDEX
        : path === "/services" || path === "/services.html"
          ? SERVICES
          : path === "/locations" || path === "/locations.html"
            ? LOCATIONS
            : path === "/faqs" || path === "/faqs.html"
              ? FAQS
              : null;
    if (html === null) {
      return new Response("Not found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }
    return new Response(request.method === "HEAD" ? null : html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "geolocation=(self)",
        "Content-Security-Policy":
          "form-action 'none'; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  },
};
"""
(OUT / "_worker.js").write_text(worker)
print("Prepared four public HTML files and allowlisted site assets in", OUT)
for filename in PAGES.values():
    print(filename, hashlib.sha256((OUT / filename).read_bytes()).hexdigest())
