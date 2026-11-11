from pathlib import Path
import json, hashlib
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "publish"
OUT.mkdir(exist_ok=True)
pages = {"INDEX":"index.html", "SERVICES":"services.html", "LOCATIONS":"locations.html", "FAQS":"faqs.html"}
# Fail rather than uploading an unexpected file left in the publishing folder.
allowed = set(pages.values()) | {"_worker.js"}
unexpected = [p.name for p in OUT.iterdir() if p.name not in allowed]
if unexpected:
    raise SystemExit("Unexpected publish files, review and remove manually: " + ", ".join(unexpected))
constants = []
for variable, filename in pages.items():
    body = (ROOT / filename).read_text()
    constants.append("const " + variable + "=" + json.dumps(body, ensure_ascii=False) + ";")
    (OUT / filename).write_bytes((ROOT / filename).read_bytes())
worker = "\n".join(constants) + "\n" + r"""export default {
 async fetch(request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return new Response('Method not allowed', {status:405, headers:{Allow:'GET, HEAD'}});
  const path = new URL(request.url).pathname;
  const html = path==='/' || path==='/index.html' ? INDEX : path==='/services' || path==='/services.html' ? SERVICES : path==='/locations' || path==='/locations.html' ? LOCATIONS : path==='/faqs' || path==='/faqs.html' ? FAQS : null;
  if (html === null) return new Response('Not found', {status:404,headers:{'Content-Type':'text/plain; charset=utf-8','X-Content-Type-Options':'nosniff'}});
  return new Response(request.method==='HEAD' ? null : html, {status:200, headers:{
   'Content-Type':'text/html; charset=utf-8', 'Cache-Control':'public, max-age=300',
   'X-Content-Type-Options':'nosniff', 'Referrer-Policy':'strict-origin-when-cross-origin',
   'Permissions-Policy':'geolocation=(self)',
   'Content-Security-Policy':"form-action 'none'; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'",
   'X-Robots-Tag':'noindex, nofollow'
  }});
 }
};
"""
(OUT / '_worker.js').write_text(worker)
print("Prepared only four public HTML files and the allowlist worker in", OUT)
for filename in pages.values():
    print(filename, hashlib.sha256((OUT/filename).read_bytes()).hexdigest())
