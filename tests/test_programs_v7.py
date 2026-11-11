import os
from pathlib import Path
import json,sys,threading,http.server,urllib.parse
from PIL import Image
sys.path.insert(0,'/tmp/socal-playwright')
from playwright.sync_api import sync_playwright
R=Path(__file__).resolve().parent.parent;checks=[];axes=[];server=None
class H(http.server.BaseHTTPRequestHandler):
 def do_GET(self):
  f={'/':'index.html','/services':'services.html','/locations':'locations.html','/faqs':'faqs.html'}.get(urllib.parse.urlsplit(self.path).path);self.send_response(200 if f else 404);self.send_header('Content-Type','text/html');self.end_headers();self.wfile.write((R/f).read_bytes() if f else b'Not found')
 def log_message(self,*a):pass
def ok(name,value):
 checks.append({'test':name,'passed':bool(value)});print(('PASS' if value else 'FAIL'),name,flush=True);assert value,name
if len(sys.argv)>1:URL=sys.argv[1].rstrip('/')+'/'
else:
 server=http.server.ThreadingHTTPServer(('127.0.0.1',0),H);threading.Thread(target=server.serve_forever,daemon=True).start();URL='http://127.0.0.1:'+str(server.server_port)+'/'
with sync_playwright() as p:
 b=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_EXECUTABLE_PATH') or ('/usr/bin/google-chrome' if Path('/usr/bin/google-chrome').exists() else p.chromium.executable_path),headless=True,args=['--no-sandbox','--disable-dev-shm-usage']);q=b.new_page(viewport={'width':1440,'height':1000});q.emulate_media(reduced_motion='reduce');requests=[];q.on('request',lambda req:requests.append(req.url));q.goto(URL)
 def ids(a):return q.evaluate('(a)=>buildCareGuide(a).programs.map(x=>x.id)',a)
 ok('Completely skipped guide has no inferred program eligibility',not ids({}))
 for value in ['concerns','none','unsure','skipped']:ok('GUIDE not inferred from memory answer '+value,'cms-guide' not in ids({'memory':value}))
 ok('Diagnosis triggers GUIDE referral','cms-guide' in ids({'memory':'diagnosed'}))
 for a in [{'daily':'personal'},{'daily':'companion'},{'recovery':'yes'},{'schedule':['respite']}]:ok('SCAN only conditionally surfaced for support need '+str(a),'scan-benefits' in ids(a))
 ok('SCAN not inferred from Veteran status alone','scan-benefits' not in ids({'veteran':'veteran'}))
 ok('IHSS daily and memory referrals','ihss' in ids({'daily':'both'}) and 'ihss' in ids({'memory':'concerns'}))
 ok('Community Supports personal-care topic needs daily-help signal','calaim-personal' in ids({'daily':'companion'}) and 'calaim-personal' not in ids({'memory':'diagnosed'}))
 ok('Community Supports respite only with caregiver-break answer','calaim-respite' in ids({'schedule':['respite']}) and 'calaim-respite' not in ids({'schedule':['regular']}))
 ok('ALW excluded from ordinary private home-care answers','assisted-living-waiver' not in ids({'daily':'both','schedule':['regular']}))
 ok('ALW different-setting referral only with intensive support signal','assisted-living-waiver' in ids({'daily':'personal','schedule':['aroundclock']}) and 'assisted-living-waiver' not in ids({'schedule':['aroundclock']}))
 ok('Local aging guidance without treating it as funding','local-aging' in ids({'pay':'options'}))
 ok('HICAP insurance-review referral','hicap' in ids({'ltc':'yes'}))
 ok('VA pension and actual home-care rules remain distinct','va-pension' in ids({'veteran':'spouse'}) and 'va-home-care' not in ids({'veteran':'spouse','daily':'personal'}) and 'va-home-care' in ids({'veteran':'veteran','daily':'personal'}))
 q.fill('#zip','91710');q.locator('#zip').press('Enter')
 maximum={'who':['loved'],'daily':['both'],'memory':['diagnosed'],'recovery':['yes'],'schedule':['aroundclock','overnight','respite'],'veteran':['veteran'],'ltc':['yes'],'pay':['options']}
 for key,values in maximum.items():
  for value in values:q.check('#quiz-'+key+'-'+value)
  q.locator('#quiz-next').click()
 ok('Maximum case has all 12 conditional discussion topics',q.locator('.program-list>li').count()==12)
 text=q.locator('#care-summary-content').inner_text();ok('Unasked eligibility, provider acceptance and incompatible coverage are explicit',all(x in text for x in ['not eligibility decisions','does not confirm that any FirstLight office participates in, accepts or bills any program','cannot be combined','No FirstLight participation is confirmed here','not a general voucher for private home care']))
 hosts=q.locator('.program-list a').evaluate_all('es=>es.map(e=>new URL(e.href).hostname)');ok('Every program citation is on an allowed official source domain',all(x in ['www.cms.gov','www.scanhealthplan.com','www.cdss.ca.gov','www.dhcs.ca.gov','aging.ca.gov','www.va.gov'] for x in hosts))
 q.locator('.county-resources summary').focus();q.keyboard.press('Enter');ok('County resource disclosure keyboard-operable',q.locator('.county-resources').evaluate('(e)=>e.open'));ok('All five counties plus Los Angeles City have verified resource links',q.locator('.county-program-links a').count()==6 and q.locator('.county-program-links a').evaluate_all('es=>es.every(e=>e.getBoundingClientRect().height>=44)'))
 q.locator('.county-resources').evaluate('(e)=>e.open=false')
 def axe(state):
  if not q.evaluate('typeof axe!=="undefined"'):q.add_script_tag(path=str(R/'node_modules/axe-core/axe.min.js'))
  d=q.evaluate('async()=>await axe.run(document,{runOnly:{type:"tag",values:["wcag2a","wcag2aa","wcag21a","wcag21aa","wcag22aa","best-practice"]}})');axes.append({'state':state,'violations':d['violations']});print(json.dumps(d['violations'],indent=2) if d['violations'] else '',flush=True);ok('Axe maximum referrals '+state,not d['violations'])
 for name,w,h in [('desktop',1440,1000),('mobile',390,844)]:
  q.set_viewport_size({'width':w,'height':h});q.locator('#summary-title').focus();q.evaluate('scrollTo(0,0)');q.screenshot(path=str(R/'v7-programs-render-temp.png'),full_page=True);box=q.locator('#guided-flow').bounding_box();im=Image.open(R/'v7-programs-render-temp.png');im.crop((0,int(box['y']),im.width,min(im.height,int(box['y']+box['height'])))).save(R/('v7-programs-step-3-'+name+'.png'));axe(name)
 q.set_viewport_size({'width':320,'height':1000});q.locator('.county-resources').evaluate('(e)=>e.open=true');bad=[]
 for w in range(320,431):
  q.set_viewport_size({'width':w,'height':1000});d=q.evaluate('''()=>({root:document.documentElement.scrollWidth,client:document.documentElement.clientWidth,bad:[...document.querySelectorAll('#care-summary *')].some(e=>{const r=e.getBoundingClientRect();return r.width&&r.height&&(r.left<-.6||r.right>innerWidth+.6)})})''')
  if d['root']>d['client'] or d['bad']:bad.append(w)
 ok('All maximum referrals plus expanded county resources fit every width 320..430',not bad);axe('expanded counties mobile')
 q.set_viewport_size({'width':720,'height':1000});q.evaluate('document.documentElement.style.fontSize="200%"');ok('Maximum referrals and county resources reflow at 200% text',q.evaluate('document.documentElement.scrollWidth<=document.documentElement.clientWidth'));axe('200% maximum results')
 q.evaluate('document.documentElement.style.fontSize=""');q.locator('#summary-continue').click();q.locator('#inquiry-open').click();ok('Inquiry prefill includes new programs without eligibility promise','CMS GUIDE' in q.locator('#inquiry-message').input_value() and 'not an assessment or eligibility decision' in q.locator('#inquiry-message').input_value())
 ok('No application network calls to programs or third parties',all(x.startswith(URL) for x in requests))
 b.close()
mode='live' if not server else 'local';(R/('programs-v7-'+mode+'-results.json')).write_text(json.dumps({'url':URL,'mode':mode,'passed':len(checks),'checks':checks,'axe':axes,'axeViolations':sum(len(x['violations']) for x in axes)},indent=2)+'\n');print('RESULT',mode,len(checks),'checks, zero axe violations',flush=True)
if server:server.shutdown()
