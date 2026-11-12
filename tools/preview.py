from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys

ROOT = Path(__file__).resolve().parent.parent
ROUTES = {
    "/": "index.html",
    "/index.html": "index.html",
    "/services": "services.html",
    "/services.html": "services.html",
    "/locations": "locations.html",
    "/locations.html": "locations.html",
    "/faqs": "faqs.html",
    "/faqs.html": "faqs.html",
}
ASSETS = {
    "/assets/index.css": ("assets/index.css", "text/css; charset=utf-8"),
    "/assets/services.css": ("assets/services.css", "text/css; charset=utf-8"),
    "/assets/locations.css": ("assets/locations.css", "text/css; charset=utf-8"),
    "/assets/faqs.css": ("assets/faqs.css", "text/css; charset=utf-8"),
    "/assets/index.js": ("assets/index.js", "text/javascript; charset=utf-8"),
    "/assets/locations.js": ("assets/locations.js", "text/javascript; charset=utf-8"),
    "/assets/faqs.js": ("assets/faqs.js", "text/javascript; charset=utf-8"),
    "/assets/zip-routing.js": ("assets/zip-routing.js", "text/javascript; charset=utf-8"),
    "/assets/lib/routing.js": ("assets/lib/routing.js", "text/javascript; charset=utf-8"),
    "/assets/lib/places.js": ("assets/lib/places.js", "text/javascript; charset=utf-8"),
    "/assets/lib/nearest.js": ("assets/lib/nearest.js", "text/javascript; charset=utf-8"),
    "/assets/lib/format.js": ("assets/lib/format.js", "text/javascript; charset=utf-8"),
    "/assets/lib/quiz.js": ("assets/lib/quiz.js", "text/javascript; charset=utf-8"),
    "/assets/lib/map.js": ("assets/lib/map.js", "text/javascript; charset=utf-8"),
    "/assets/nav.js": ("assets/nav.js", "text/javascript; charset=utf-8"),
    "/assets/leaflet.min.css": ("assets/leaflet.min.css", "text/css; charset=utf-8"),
    "/assets/leaflet.min.js": ("assets/leaflet.min.js", "text/javascript; charset=utf-8"),
    "/assets/service-map.css": ("assets/service-map.css", "text/css; charset=utf-8"),
    "/assets/service-map.js": ("assets/service-map.js", "text/javascript; charset=utf-8"),
    "/assets/service-areas.js": ("assets/service-areas.js", "text/javascript; charset=utf-8"),
    "/assets/service-areas.geojson": (
        "assets/service-areas.geojson",
        "application/geo+json; charset=utf-8",
    ),
    "/assets/manrope-subset.woff": ("assets/manrope-subset.woff", "font/woff"),
}
SECURITY_POLICY = (
    "form-action 'none'; connect-src 'none'; frame-src 'none'; "
    "object-src 'none'; base-uri 'none'"
)


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        path = unquote(urlsplit(self.path).path)
        filename = ROUTES.get(path)
        asset = ASSETS.get(path)

        if filename:
            content_type = "text/html; charset=utf-8"
            body = (ROOT / filename).read_bytes()
        elif asset:
            filename, content_type = asset
            body = (ROOT / filename).read_bytes()
        else:
            self.send_response(404)
            self.send_header("Content-Type", "text/plain; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            if self.command != "HEAD":
                self.wfile.write(b"Not found")
            return

        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Security-Policy", SECURITY_POLICY)
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    do_HEAD = do_GET

    def do_POST(self):
        self.send_response(405)
        self.send_header("Allow", "GET, HEAD")
        self.send_header("Cache-Control", "no-store")
        self.end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8788
    print(f"Strict local preview: http://127.0.0.1:{port}/", flush=True)
    ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()
