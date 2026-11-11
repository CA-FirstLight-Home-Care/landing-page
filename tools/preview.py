from pathlib import Path
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlsplit
import sys
ROOT=Path(__file__).resolve().parent.parent
ROUTES={'/':'index.html','/index.html':'index.html','/services':'services.html','/services.html':'services.html','/locations':'locations.html','/locations.html':'locations.html','/faqs':'faqs.html','/faqs.html':'faqs.html'}
class Handler(BaseHTTPRequestHandler):
 def do_GET(self):
  filename=ROUTES.get(urlsplit(self.path).path)
  self.send_response(200 if filename else 404)
  self.send_header('Content-Type','text/html; charset=utf-8' if filename else 'text/plain; charset=utf-8')
  self.send_header('Content-Security-Policy',"form-action 'none'; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'")
  self.end_headers()
  if self.command!='HEAD':self.wfile.write((ROOT/filename).read_bytes() if filename else b'Not found')
 do_HEAD=do_GET
 def do_POST(self):
  self.send_response(405);self.send_header('Allow','GET, HEAD');self.end_headers()
if __name__=='__main__':
 port=int(sys.argv[1]) if len(sys.argv)>1 else 8788
 print(f'Strict local preview: http://127.0.0.1:{port}/',flush=True)
 ThreadingHTTPServer(('127.0.0.1',port),Handler).serve_forever()
