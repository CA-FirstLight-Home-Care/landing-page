import os
from pathlib import Path
import sys,json,threading,http.server,urllib.parse
from PIL import Image
sys.path.insert(0,'/tmp/socal-playwright')
from playwright.sync_api import sync_playwright
R=Path(__file__).resolve().parent.parent;checks=[];axes=[];server=None
class H(http.server.BaseHTTPRequestHandler):
 def do_GET(self):
  f={'/':'index.html','/services':'services.html','/locations':'locations.html','/faqs':'faqs.html'}.get(urllib.parse.urlsplit(self.path).path);self.send_response(200 if f else 404);self.send_header('Content-Type','text/html');self.end_headers();self.wfile.write((R/f).read_bytes() if f else b'Not found')
 def log_message(self,*a):pass
def ok(name,v):
 checks.append({'test':name,'passed':bool(v)});print(('PASS' if v else 'FAIL'),name,flush=True);assert v,name
if len(sys.argv)>1:URL=sys.argv[1].rstrip('/')+'/'
else:
 server=http.server.ThreadingHTTPServer(('127.0.0.1',0),H);threading.Thread(target=server.serve_forever,daemon=True).start();URL='http://127.0.0.1:'+str(server.server_port)+'/'
with sync_playwright() as p:
 b=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_EXECUTABLE_PATH') or ('/usr/bin/google-chrome' if Path('/usr/bin/google-chrome').exists() else p.chromium.executable_path),headless=True,args=['--no-sandbox']);q=b.new_page(viewport={'width':1440,'height':1000});q.emulate_media(reduced_motion='reduce');q.goto(URL)
 def axe(state):
  q.evaluate('scrollTo(0,0)')
  if not q.evaluate('typeof axe!=="undefined"'):q.add_script_tag(path=str(R/'node_modules/axe-core/axe.min.js'))
  d=q.evaluate('async()=>await axe.run(document,{runOnly:{type:"tag",values:["wcag2a","wcag2aa","wcag21a","wcag21aa","wcag22aa","best-practice"]}})');axes.append({'state':state,'violations':d['violations']});print(json.dumps(d['violations']) if d['violations'] else '',flush=True);ok('Axe '+state,not d['violations'])
 def crop(name):
  q.evaluate('scrollTo(0,0)');q.screenshot(path=str(R/'v7-couples-render-temp.png'),full_page=True);box=q.locator('#guided-flow').bounding_box();im=Image.open(R/'v7-couples-render-temp.png');im.crop((0,int(box['y']),im.width,min(im.height,int(box['y']+box['height'])))).save(R/name)
 ok('Only two-person selection triggers Couples care',q.evaluate('buildCareGuide({who:"couple"}).care.some(x=>x.id==="couples-care")&&!buildCareGuide({who:"loved"}).care.some(x=>x.id==="couples-care")'))
 ok('Couples choice does not infer shared benefit eligibility',q.evaluate('buildCareGuide({who:"couple"}).programs.length===0'))
 q.fill('#zip','91710');q.locator('#zip').press('Enter');q.locator('#quiz-who-couple').focus();q.keyboard.press('Space');ok('Couples radio works by keyboard and has a label',q.locator('#quiz-who-couple').is_checked() and 'Two people' in q.locator('label[for="quiz-who-couple"]').inner_text());ok('Two-person question explains separate assessments','Each person needs a separate assessment' in q.locator('#quiz-who-hint').inner_text());q.set_viewport_size({'width':320,'height':1000});axe('couples question 320');q.locator('#quiz-next').click()
 for key,vals in [('daily',['both']),('memory',['diagnosed']),('recovery',['yes']),('schedule',['aroundclock','respite']),('veteran',['veteran']),('ltc',['yes']),('pay',['options'])]:
  for v in vals:q.check('#quiz-'+key+'-'+v)
  q.locator('#quiz-next').click()
 ok('Eight-question flow yields seven possible care types including couples',q.locator('.summary-card-grid>li').count()==7 and q.locator('a[href="/services#couples-care"]').count()==1);ok('Program topics remain separately conditional',q.locator('.program-list>li').count()==12);ok('Couples result warns about individual staffing and benefit review','staffing and program eligibility must be checked individually' in q.locator('.summary-card-grid').inner_text())
 bad=[]
 for w in range(320,431):
  q.set_viewport_size({'width':w,'height':1000});d=q.evaluate('''()=>({ok:document.documentElement.scrollWidth<=document.documentElement.clientWidth,bad:[...document.querySelectorAll('#care-summary *')].some(e=>{let r=e.getBoundingClientRect();return r.width&&r.height&&(r.left<-.6||r.right>innerWidth+.6)})})''')
  if not d['ok'] or d['bad']:bad.append(w)
 ok('Seven-service couples results fit every width 320..430',not bad)
 for device,w,h in [('desktop',1440,1000),('mobile',390,1000)]:q.set_viewport_size({'width':w,'height':h});crop('v7-couples-step-3-'+device+'.png');q.evaluate('''()=>{const e=document.getElementById('care-summary');scrollTo({top:e.getBoundingClientRect().top+scrollY-document.querySelector('header').getBoundingClientRect().height-12,behavior:'instant'});}''');q.screenshot(path=str(R/('v7-couples-step-3-'+device+'-detail.png')));axe('couples results '+device)
 q.locator('#summary-continue').click();q.locator('#inquiry-open').click();text=q.locator('#inquiry-message').input_value();ok('Inquiry summary includes Couples care, two people and separate benefits review','Couples care' in text and 'Two people' in text and 'Each person needs a separate care assessment and benefits review' in text);axe('couples prefilled modal')
 for suffix in ['services','faqs']:
  for device,w,h in [('desktop',1440,1000),('mobile',390,1000)]:
   q.set_viewport_size({'width':w,'height':h});q.goto(URL+suffix);q.evaluate('document.fonts.ready');q.screenshot(path=str(R/('v7-'+suffix+'-'+device+'.png')),full_page=True);axe(suffix+' '+device)
   if suffix=='services':
    ok('Native comparison table semantics '+device,q.get_by_role('table').count()==1 and q.get_by_role('columnheader').count()==5 and q.get_by_role('rowheader').count()==7 and q.locator('table caption').inner_text().startswith('Compare seven') and q.locator('th[scope="row"]').count()==7 and q.locator('th[scope="col"]').count()==5);ok('Every comparison cell has explicit row and column headers '+device,q.locator('tbody td').evaluate_all('es=>es.every(e=>e.getAttribute("headers").split(" ").every(id=>document.getElementById(id)))'));ok('Couples description and only variable-local-rate wording '+device,all(x in q.locator('#couples-care').locator('..').inner_text() for x in ['One caregiver supports two people','Rates vary by local office']) and '$' not in q.locator('#couples-care').locator('..').inner_text())
   else:ok('FAQs are one column '+device,q.locator('.faq-intro').evaluate('(e)=>document.querySelector(".faq-column").getBoundingClientRect().top>=e.getBoundingClientRect().bottom') and len(q.locator('.faq-layout').evaluate('(e)=>getComputedStyle(e).gridTemplateColumns').split())==1)
 q.set_viewport_size({'width':320,'height':1000});q.goto(URL+'services#couples-care');ok('Existing service section links including couples focus the table row header',q.evaluate('document.activeElement.id==="couples-care"') and q.locator('#couples-care').bounding_box()['y']>=q.locator('header').bounding_box()['height']);q.keyboard.press('Tab');q.locator('#couples-care').focus();ok('Linked row header has a visible inset focus ring',q.locator('#couples-care').evaluate('(e)=>getComputedStyle(e).outlineWidth==="3px"&&getComputedStyle(e).outlineOffset==="-4px"'));ok('Mobile table uses stacked rows, not clipped or page-wide cells',q.locator('tbody tr').first.evaluate('(e)=>getComputedStyle(e).display==="block"') and q.evaluate('document.documentElement.scrollWidth<=document.documentElement.clientWidth'))
 b.close()
mode='live' if not server else 'local';(R/('couples-v7-'+mode+'-results.json')).write_text(json.dumps({'mode':mode,'url':URL,'passed':len(checks),'checks':checks,'axe':axes,'axeViolations':sum(len(s['violations']) for s in axes)},indent=2)+'\n');print('RESULT',mode,len(checks),'checks and',len(axes),'zero-violation axe scans')
if server:server.shutdown()
