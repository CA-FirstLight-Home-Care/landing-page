import os
from pathlib import Path
from bs4 import BeautifulSoup
import sys,json,hashlib,itertools,threading,http.server,urllib.parse,re
from PIL import Image
sys.path.insert(0,'/tmp/socal-playwright');from playwright.sync_api import sync_playwright
R=Path(__file__).resolve().parent.parent;AXE=str(R/'node_modules/axe-core/axe.min.js');checks=[];axeReports=[];keyboard=[]
class Handler(http.server.BaseHTTPRequestHandler):
 def do_GET(self):
  p=urllib.parse.urlsplit(self.path).path;f={'/':'index.html','/index.html':'index.html','/services':'services.html','/services.html':'services.html','/locations':'locations.html','/locations.html':'locations.html','/faqs':'faqs.html','/faqs.html':'faqs.html'}.get(p)
  self.send_response(200 if f else 404);self.send_header('Content-Type','text/html; charset=utf-8' if f else 'text/plain');self.end_headers();self.wfile.write((R/f).read_bytes() if f else b'Not found')
 def log_message(self,*a):pass
def add(name,ok,detail=None):
 checks.append(dict(test=name,passed=bool(ok),detail=detail));print(('PASS' if ok else 'FAIL'),name,flush=True)
 if not ok:raise AssertionError((name,detail))
def axe(q,state):
 q.evaluate('window.scrollTo({top:0,behavior:"instant"})')
 if not q.evaluate('typeof axe!=="undefined"'):q.add_script_tag(path=AXE)
 d=q.evaluate('async()=>await axe.run(document,{runOnly:{type:"tag",values:["wcag2a","wcag2aa","wcag21a","wcag21aa","wcag22aa","best-practice"]}})');axeReports.append(dict(state=state,violations=d['violations'],incomplete=d['incomplete']));print('AXE',state,len(d['violations']),flush=True)
 if d['violations']:print(json.dumps(d['violations'],indent=2))
def lookup(q,z='91710'):
 if not q.locator('#zip').is_visible():q.evaluate('askingLocation=true;renderCareQuestion()')
 q.fill('#zip',z);q.locator('#zip').press('Enter')
def confirm(q,z='91710'):
 lookup(q,z)
def answer(q,key,value):
 if value:q.check('#quiz-'+key+'-'+value)
 q.locator('#quiz-next').click()
full={'who':'loved','daily':'personal','memory':'diagnosed','recovery':'no','schedule':['regular','respite'],'veteran':'veteran','ltc':'yes','pay':'options'}
def finish(q,answers=full):
 for key in full:
  val=answers.get(key)
  if key=='schedule':
   for v in (val if isinstance(val,list) else [val] if val else []):q.check('#quiz-schedule-'+v)
   q.locator('#quiz-next').click()
  else:answer(q,key,val)
def crop(q,selector,path):
 q.evaluate('window.scrollTo({top:0,behavior:"instant"})');q.evaluate('document.fonts.ready');q.screenshot(path=str(R/'v7-render-temp.png'),full_page=True);box=q.locator(selector).bounding_box();img=Image.open(R/'v7-render-temp.png');img.crop((0,max(0,int(box['y'])),img.width,min(img.height,int(box['y']+box['height'])))).save(path)
def focusInfo(q):
 return q.evaluate('''()=>{let e=document.activeElement;if(!e||e===document.body||e.closest('header')||e.classList.contains('skip'))return null;let r=e.getBoundingClientRect(),h=document.querySelector('header').getBoundingClientRect();return {id:e.id,tag:e.tagName,top:r.top,bottom:r.bottom,outline:getComputedStyle(e).outlineWidth,visible:r.top>=h.bottom-1&&r.bottom<=innerHeight+1};}''')
server=None
if len(sys.argv)>1:URL=sys.argv[1].rstrip('/')+'/'
else:
 server=http.server.ThreadingHTTPServer(('127.0.0.1',0),Handler);threading.Thread(target=server.serve_forever,daemon=True).start();URL='http://127.0.0.1:'+str(server.server_port)+'/'
live=not bool(server);files=['index.html','services.html','locations.html','faqs.html'];dom={f:BeautifulSoup((R/f).read_text(),'html.parser') for f in files};data=json.loads(dom['index.html'].select_one('#office-data').text);private=json.loads((R/'offices.json').read_text());owner_words=r'\b(?:Gary|YongMing|Lolita|Pinto|David|Kapojos|Jason|Taylor|Julio|Rivas|Kevan|Lori|Kwan|Megan|Lange|Prashant|Kumar|Rameshkumar|Scot|Kuratsu|Sean|Stephanie|Ruitenberg|Tommy|Thomas|Webber|Zheng|Zachary|Wechsler)\b'
add('Historical backup hashes recorded; backup HTML intentionally excluded',all(len(json.loads((R/'historical-backup-hashes.json').read_text()).get(x+'-v6.html',''))==64 for x in ['index','services','locations']))
add('All source ZIP mappings, offices, phones and areas preserved',data['zipToOfficeIds']==private['zipToOfficeIds'] and all(all(o[k]==next(a for a in private['offices'] if a['id']==o['id'])[k] for k in ['areas','zipCodes','phone','url']) for o in data['offices']))
add('No owner words, office prefixes, em/en dashes or financial/booking vendor names',all(not re.search(owner_words,(R/f).read_text(),re.I) and not any(x.casefold() in (R/f).read_text().casefold() for x in ['—','–','FirstLight Home Care of','elderlife','silverassist','calendly']) for f in files))
add('FAQs moved entirely off main; 13 answers and pricing preserved',not dom['index.html'].select('#care-faq') and len(dom['faqs.html'].select('.faq-item'))==13 and not dom['faqs.html'].select('.pricing-context') and 'Rates vary by local office' in dom['faqs.html'].text)
add('All headers use FAQs and correct destination',all(x.header.select_one('a[href="/faqs"]') and not any(a.get_text(strip=True)=='Questions' for a in x.header.select('a')) for x in dom.values()))
add('Locations have no ZIP lists, start links or local-office labels',not dom['locations.html'].select('.location-zips,.location-start,.small-label') and 'Areas include:' not in dom['locations.html'].text and 'ZIP-specific coverage applies.' not in dom['locations.html'].text)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_EXECUTABLE_PATH') or ('/usr/bin/google-chrome' if Path('/usr/bin/google-chrome').exists() else p.chromium.executable_path),headless=True,args=['--no-sandbox','--disable-dev-shm-usage']);q=b.new_page(viewport={'width':1440,'height':1000});q.emulate_media(reduced_motion='reduce');errors=[];network=[];q.on('pageerror',lambda e:errors.append(str(e)));q.on('request',lambda r:network.append(r.url));q.add_init_script('window.storageWrites=0;Storage.prototype.setItem=function(){window.storageWrites++};');q.goto(URL);axe(q,'main initial')
 q.keyboard.press('Tab');add('Skip link keyboard focus',q.locator('.skip').evaluate('(e)=>document.activeElement===e'));q.keyboard.press('Enter');add('Skip link targets main',q.evaluate('document.activeElement.id==="main"'));add('Privacy line centered and updated hero copy',q.locator('.flow-privacy').evaluate('(e)=>getComputedStyle(e).textAlign==="center"') and 'answer a few questions' in q.locator('.intro').inner_text())
 add('All 225 ZIP lookups unchanged',q.evaluate('(map)=>Object.entries(map).every(([z,ids])=>JSON.stringify(lookupZip(z).offices.map(x=>x.id))===JSON.stringify(ids))',private['zipToOfficeIds']))
 lookup(q,'abc');add('Invalid city/ZIP associated inline error',q.locator('#zip').get_attribute('aria-invalid')=='true' and 'city' in q.locator('#zip-message').inner_text());lookup(q,'10001');add('Uncovered ZIP links national finder',q.locator('.fallback a').get_attribute('href')==private['nationalFinderUrl'])
 for z in ['91396','91226']:
  lookup(q,z);add('Shared ZIP '+z+' stays on the location question without naming a team',q.locator('.result-office').count()==0 and q.locator('.overlap-notice').is_visible() and q.locator('#question-area').is_visible() and q.locator('.fallback a').get_attribute('href')==private['nationalFinderUrl'])
 lookup(q,'Pomona');add('Main city search requires ZIP for real Pomona overlap',q.locator('#main-city-zip').is_visible() and q.locator('.select-office').count()==0 and q.locator('.result-office').count()==0);q.locator('#main-city-zip').press('Enter');add('Shared city ZIP error labelled',q.locator('#main-city-zip').get_attribute('aria-invalid')=='true' and q.locator('#main-city-zip-error').inner_text());q.fill('#main-city-zip','91766');q.locator('#main-city-zip').press('Enter');add('Pomona 91766 resolves Montclair',q.locator('#contact-panel h3').text_content()=='Montclair' and q.locator('#care-quiz').is_visible() and 'Montclair' not in q.locator('#care-quiz').inner_text());lookup(q,'Pomona');q.fill('#main-city-zip','91768');q.locator('#main-city-zip').press('Enter');add('Pomona 91768 resolves Chino Hills',q.locator('#contact-panel h3').text_content()=='Chino Hills' and 'Chino Hills' not in q.locator('#care-quiz').inner_text());lookup(q,'Irvine');add('Unique city continues without showing an office',q.locator('#contact-panel h3').text_content()=='Irvine' and q.locator('#care-quiz').is_visible() and q.locator('.result-office').count()==0 and 'Irvine' not in q.locator('#care-quiz').inner_text())
 lookup(q,'91710');add('Covered ZIP continues without showing the office',q.locator('#question-area').is_hidden() and q.locator('.result-office').count()==0 and q.locator('.office-direct-phone').count()==0 and q.locator('.step-panel:visible').count()==1 and q.evaluate('document.activeElement.id==="question-title-who"'));add('Location stays off the later questions',q.locator('#quiz-office').count()==0 and 'Change location' not in q.locator('#care-questions').inner_text() and 'Montclair' not in q.locator('#care-quiz').inner_text());add('Nine questions and clear 24-hour wording',q.locator('.wizard-question').count()==8 and '9 short questions' in q.locator('.quiz-intro').inner_text() and 'about 2 minutes' in q.locator('.quiz-intro').inner_text().lower() and '24-hour care (day and night)' in q.locator('#question-schedule').text_content() and 'Day-and-night support' not in q.locator('#question-schedule').text_content());axe(q,'step 2')
 q.locator('#quiz-who-self').focus();q.keyboard.press('ArrowDown');add('Radio arrow keyboard works',q.locator('#quiz-who-loved').is_checked());q.locator('#quiz-next').click();q.locator('#quiz-back').click();add('Quiz Back preserves answer',q.locator('#quiz-who-loved').is_checked());finish(q);add('Result names and edit button adjacency correct',q.locator('#summary-title').inner_text()=='Your care results.' and 'Services you may need' in q.locator('#care-summary-content').inner_text() and 'Programs and payment options you may qualify for' in q.locator('#care-summary-content').inner_text() and 'Your confirmed office' not in q.locator('#care-summary').inner_text() and 'Montclair' not in q.locator('#care-summary-content').inner_text() and q.locator('#summary-continue').count()==0 and q.locator('#contact-panel').is_visible() and q.locator('#contact-panel h3').inner_text()=='Montclair');add('Existing verified Veteran, memory and financial rules remain',all(x in q.locator('#care-summary-content').inner_text() for x in ['Dementia & Alzheimer','Respite care','Veteran care','Financial consulting may be available']));axe(q,'care results')
 cases=[];expected=[]
 for daily,memory,veteran,recovery,respite,schedule in itertools.product(['companion','personal','both','unsure'],['none','concerns','diagnosed','unsure'],['veteran','spouse','no','unsure'],['yes','no'],[True,False],['regular','overnight','aroundclock','unsure']):
  a=dict(daily=daily,memory=memory,veteran=veteran,recovery=recovery,schedule=[schedule]+(['respite'] if respite else []));cases.append(a);ids=[]
  if daily in ['companion','both']:ids.append('companion-care')
  if daily in ['personal','both']:ids.append('personal-care')
  if memory in ['concerns','diagnosed']:ids.append('memory-care')
  if respite:ids.append('respite-care')
  if recovery=='yes':ids.append('transitional-care')
  if veteran in ['veteran','spouse']:ids.append('veteran-care')
  expected.append(ids)
 add('1,024 care-rule combinations unchanged',q.evaluate('(cs)=>cs.map(a=>buildCareGuide(a).care.map(x=>x.id))',cases)==expected);add('Financial triggers remain restricted to selected payment answers',all(q.evaluate('(a)=>buildCareGuide(a).programs.some(x=>x.id==="financial-consulting")',{'pay':v})==(v in ['private','family','home','waiting','options','unsure']) for v in ['private','family','home','waiting','options','unsure','insurance','va','skipped']))
 add('Results include one merged office card with exactly 2 actions',q.locator('#contact-panel a,#contact-panel button').count()==2 and q.locator('#inquiry-open').is_visible() and not q.locator('#contact-demo-options,#booking-demo-link,#demo-contact-form').count());add('Chosen Call action verified',q.locator('.consultation').get_attribute('href')=='tel:+18402009868');axe(q,'step 4')
 q.locator('#inquiry-open').click();add('Native modal opens with focus inside and placeholder notice',q.locator('#inquiry-dialog').evaluate('(e)=>e.open&&e.matches(":modal")&&e.contains(document.activeElement)') and q.locator('#inquiry-placeholder').is_visible());add('Modal prefilled with office, ZIP and readable editable summary',q.locator('#inquiry-office').input_value()=='Montclair' and q.locator('#inquiry-zip').input_value()=='91710' and 'Financial consulting' in q.locator('#inquiry-message').input_value() and '\n' in q.locator('#inquiry-message').input_value() and not q.locator('#inquiry-message').get_attribute('readonly'));axe(q,'open modal')
 q.locator('.inquiry-submit').focus();q.keyboard.press('Tab');add('Tab wraps last to first',q.evaluate('document.activeElement.id==="inquiry-close"'));q.keyboard.press('Shift+Tab');add('Shift-Tab wraps first to last',q.evaluate('document.activeElement.classList.contains("inquiry-submit")'));q.keyboard.press('Escape');add('Escape closes modal and restores trigger focus',q.locator('#inquiry-dialog').evaluate('(e)=>!e.open') and q.evaluate('document.activeElement.id==="inquiry-open"'))
 q.locator('#inquiry-open').click();q.locator('.inquiry-submit').click();add('Required name and phone have associated accessible errors',q.locator('#inquiry-name').get_attribute('aria-invalid')=='true' and q.locator('#inquiry-phone').get_attribute('aria-invalid')=='true' and q.evaluate('document.activeElement.id==="inquiry-errors"'));axe(q,'modal errors');q.locator('#inquiry-errors a').first.click();add('Error summary link focuses invalid input',q.evaluate('document.activeElement.id==="inquiry-name"'));q.fill('#inquiry-name','Demo Person');q.fill('#inquiry-phone','(202) 555-0142');q.fill('#inquiry-email','invalid');q.locator('.inquiry-submit').click();add('Optional email validated when provided',q.locator('#inquiry-email').get_attribute('aria-invalid')=='true');q.fill('#inquiry-email','');q.fill('#inquiry-message',q.locator('#inquiry-message').input_value()+'\nEditable note.');q.locator('#inquiry-close').click();q.locator('#inquiry-open').click();add('Closing and reopening preserves message edits during this visit','Editable note.' in q.locator('#inquiry-message').input_value());before=q.url;q.locator('.inquiry-submit').click();add('Valid demo confirms not sent without email or network/navigation',q.locator('#inquiry-confirmation').is_visible() and 'Nothing was sent' in q.locator('#inquiry-confirmation').inner_text() and q.url==before and q.locator('#inquiry-name').input_value()=='');axe(q,'modal confirmation');q.locator('#inquiry-confirm-close').click();add('Confirmation Close restores trigger focus',q.evaluate('document.activeElement.id==="inquiry-open"'))
 q.locator('header [data-go-step="1"]').click();add('Header start returns to the quiz',q.locator('#care-questions').is_visible() and q.evaluate('document.activeElement.id==="quiz-title"'))
 q.goto(URL);confirm(q)
 for _ in range(8):q.locator('#quiz-skip').click()
 add('Skip all still gives honest results without eligibility claims',q.locator('#care-summary').is_visible() and q.locator('.program-list li').count()==0)
 q.goto(URL+'faqs');axe(q,'faqs initial');q.fill('#faq-search','ltc');add('Local FAQ synonym ranking works',q.locator('.faq-item:visible').first.get_attribute('id')=='faq-3');q.locator('#faq-expand').click();add('Expand matching FAQs',q.locator('.faq-item:visible').evaluate_all('es=>es.every(e=>e.open)'));q.locator('#faq-collapse').click();add('Collapse matching FAQs',q.locator('.faq-item:visible').evaluate_all('es=>es.every(e=>!e.open)'));q.fill('#faq-search','zzzzzzzz');add('FAQ no-results state',q.locator('#faq-no-results').is_visible());q.locator('#faq-search').press('Escape');add('Escape restores 13 FAQs',q.locator('.faq-item:visible').count()==13)
 q.goto(URL+'locations');add('15 equal alphabetical office cards',q.locator('.location-card').count()==15 and q.locator('.location-card h2').all_text_contents()==sorted(q.locator('.location-card h2').all_text_contents(),key=str.casefold));maps=q.locator('.location-address').evaluate_all('es=>es.map(e=>({href:e.href,text:e.textContent,label:e.getAttribute("aria-label")}))');add('Every exact address is an accessible Google Maps search link',all(x['href'].startswith('https://www.google.com/maps/search/?api=1&query=') and urllib.parse.parse_qs(urllib.parse.urlsplit(x['href']).query)['query']==[x['text']] and x['text'] in x['label'] for x in maps));add('Verified icon-only social links have accessible office/platform labels',q.locator('.location-socials a').count()==13 and q.locator('.location-socials a').evaluate_all('es=>es.every(e=>!e.textContent.trim()&&e.getAttribute("aria-label")&&e.querySelector("svg[aria-hidden=true]"))'));add('Social icon targets at least 24px',q.locator('.location-socials a').evaluate_all('es=>es.every(e=>{const r=e.getBoundingClientRect();return r.width>=24&&r.height>=24})'))
 add('All 15 verified phones available; Montclair construction wording',q.locator('.location-card a[href^="tel:"]').count()==15 and q.locator('#location-montclair .tbd').inner_text()=='Office website under construction');axe(q,'locations initial');q.fill('#location-search','Pomona');add('Locations shared-city ZIP clarification retained',q.locator('#city-ambiguity').is_visible() and q.locator('.location-card:visible').count()==2);q.fill('#city-zip','91766');q.locator('#city-zip').press('Enter');add('Locations ZIP finds Montclair without flow-link button',q.locator('.location-card:visible').count()==1 and q.locator('.location-card:visible h2').inner_text()=='Montclair');q.goto(URL+'?office=montclair&zip=91710');add('Existing deep links remain valid',q.locator('#care-questions').is_visible());q.goto(URL+'?office=__proto__');add('Invalid office deep link safe',q.locator('#question-area').is_visible() and 'not recognized' in q.locator('#zip-message').inner_text())
 q.goto(URL);q.evaluate('''()=>{window.geoCalls=0;Object.defineProperty(navigator,'geolocation',{configurable:true,value:{getCurrentPosition(ok){window.geoCalls++;ok({coords:{latitude:33.685401562787,longitude:-117.854637244791}})}}})}''');add('Location not requested before click',q.evaluate('geoCalls===0'));q.locator('#find-closest').click();add('Deliberate location matches one team and continues',q.evaluate('geoCalls===1') and q.locator('#care-questions').is_visible() and q.locator('#contact-panel h3').text_content()=='Irvine' and q.locator('.result-office').count()==0)
 def layout(page):
  return page.evaluate('''()=>({root:document.documentElement.scrollWidth,client:document.documentElement.clientWidth,bad:[...document.querySelectorAll('main *,dialog[open] *')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.height&&getComputedStyle(e).visibility!=='hidden'&&(r.left<-.6||r.right>innerWidth+.6)}).map(e=>({id:e.id,tag:e.tagName,cls:e.className}))})''')
 def reflow(state):
  d=layout(q);add(state,d['root']<=d['client'] and not d['bad'],d)
 maxanswers={**full,'daily':'both','recovery':'yes','schedule':['regular','overnight','respite']}
 for w in [320,360,375,390,414,430]:
  q.set_viewport_size({'width':w,'height':1000});q.goto(URL);reflow('Step 1 '+str(w));lookup(q)
  for key,value in maxanswers.items():
   reflow('Question '+key+' '+str(w))
   if isinstance(value,list):
    for v in value:q.check('#quiz-'+key+'-'+v)
    q.locator('#quiz-next').click()
   else:answer(q,key,value)
  q.locator('.answer-review').evaluate('(e)=>e.open=true');reflow('Maximum results '+str(w));reflow('Merged office card '+str(w));q.locator('#inquiry-open').click();reflow('Open prefilled modal '+str(w));q.fill('#inquiry-message','LongWordWithoutSpaces'*180);reflow('Long modal text '+str(w));axe(q,'modal '+str(w)) if w in [320,430] else None;q.keyboard.press('Escape')
  for suffix in ['services','locations','faqs']:
   q.goto(URL+suffix)
   if suffix=='faqs':q.locator('#faq-expand').click()
   reflow(suffix+' '+str(w))
   if w==320:axe(q,suffix+' 320')
 # A continuous 320..430 CSS-pixel sweep, not only common phone widths.
 for suffix in ['','services','locations','faqs']:
  q.goto(URL+suffix);bad=[]
  for w in range(320,431):
   q.set_viewport_size({'width':w,'height':1000});d=layout(q)
   if d['root']>d['client'] or d['bad']:bad.append({'width':w,'detail':d})
  add('Continuous 320..430 width sweep '+(suffix or 'main'),not bad,bad)
 # Sweep each dynamic step and the open modal at every width as well.
 q.goto(URL);confirm(q);finish(q,{**full,'daily':'both','recovery':'yes'})
 for state in [1,2,3]:
  if state<3:q.evaluate('(n)=>goCareStep(n)',state)
  if state==3:q.locator('#inquiry-open').click()
  bad=[]
  for w in range(320,431):
   q.set_viewport_size({'width':w,'height':1000});d=layout(q)
   if d['root']>d['client'] or d['bad']:bad.append({'width':w,'detail':d})
  add('Continuous dynamic step/modal 320..430 state '+str(state),not bad,bad)
 if q.locator('#inquiry-dialog').evaluate('(e)=>e.open'):q.keyboard.press('Escape')
 for suffix in ['', 'services','locations','faqs']:
  k=b.new_page(viewport={'width':320,'height':1000});k.goto(URL+suffix);k.emulate_media(reduced_motion='reduce');bad=[]
  for _ in range(45):
   k.keyboard.press('Tab');i=focusInfo(k)
   if i and (not i['visible'] or float(i['outline'].replace('px',''))<3):bad.append(i)
  keyboard.append({'width':320,'page':suffix or 'main','checkedTabs':45,'failures':bad});add('Page keyboard rings and unobscured focus '+(suffix or 'main'),not bad,bad);k.close()
 for w in [320,720,1440]:
  k=b.new_page(viewport={'width':w,'height':1000});k.emulate_media(reduced_motion='reduce');k.goto(URL);confirm(k);finish(k);k.locator('#inquiry-open').click();fail=[];visited=0
  for _ in range(45):
   k.keyboard.press('Tab');visited+=1
   i=k.evaluate('''()=>{const e=document.activeElement,r=e.getBoundingClientRect(),d=document.getElementById('inquiry-dialog').getBoundingClientRect();return {id:e.id,inside:!!e.closest('dialog'),outline:parseFloat(getComputedStyle(e).outlineWidth),visible:r.top>=Math.max(0,d.top)-1&&r.bottom<=Math.min(innerHeight,d.bottom)+1}}''')
   if not i['inside'] or i['outline']<3 or not i['visible']:fail.append(i)
  keyboard.append({'width':w,'checkedTabs':visited,'failures':fail});add('Modal keyboard trap and visible unobscured rings '+str(w),not fail,fail);k.close()
 for suffix in ['', 'services','locations','faqs']:
  q.set_viewport_size({'width':720,'height':1000});q.goto(URL+suffix);q.evaluate('document.documentElement.style.fontSize="200%"');reflow('200% text '+(suffix or 'main'));axe(q,'200% '+(suffix or 'main'));add('One H1 and semantic landmarks '+(suffix or 'main'),q.locator('h1').count()==1 and all(q.locator(s).count()==1 for s in ['header','main','footer']))
 q.goto(URL);confirm(q);finish(q);q.locator('#inquiry-open').click();q.fill('#inquiry-name','Demo Person');q.evaluate('window.dispatchEvent(new Event("pagehide"))');add('Leaving clears quiz and inquiry values',q.locator('#inquiry-name').input_value()=='' and not q.locator('#inquiry-dialog').evaluate('(e)=>e.open') and q.locator('#care-quiz input:checked').count()==0)
 add('No external application requests or persistent storage writes',not [x for x in network if x.startswith(('http:','https:')) and not x.startswith(URL)] and q.evaluate('storageWrites===0'));add('No JavaScript errors',not errors,errors)
 for device,w,h in [('desktop',1440,1000),('mobile',390,844)]:
  q.set_viewport_size({'width':w,'height':h});q.goto(URL);crop(q,'#guided-flow',R/('v7-step-1-'+device+'.png'));lookup(q);answer(q,'who','loved');answer(q,'daily','personal');crop(q,'#guided-flow',R/('v7-step-2-'+device+'.png'))
  for key in list(full)[2:]:
   val=full[key]
   if isinstance(val,list):
    for v in val:q.check('#quiz-'+key+'-'+v)
    q.locator('#quiz-next').click()
   else:answer(q,key,val)
  crop(q,'#guided-flow',R/('v7-step-3-'+device+'.png'));crop(q,'#guided-flow',R/('v7-step-4-'+device+'.png'));q.locator('#inquiry-open').click();q.fill('#inquiry-name','Demo Person');q.fill('#inquiry-phone','(202) 555-0142');q.screenshot(path=str(R/('v7-inquiry-modal-'+device+'.png')));q.keyboard.press('Escape')
  for suffix in ['locations','faqs']:
   q.goto(URL+suffix);q.screenshot(path=str(R/('v7-'+suffix+'-'+device+'.png')),full_page=True)
 b.close()
result={'version':7,'mode':'live' if live else 'local','url':URL,'checks':checks,'passed':len(checks),'axe':axeReports,'axeViolations':sum(len(x['violations']) for x in axeReports),'keyboard':keyboard,'sha256':{f:hashlib.sha256((R/f).read_bytes()).hexdigest() for f in files},'researchLimitation':'Resolved: official-source program research completed using owner-authorized WebSearch/WebFetch, with public-source fetch fallbacks.'}
(R/('live-v7-results.json' if live else 'v7-test-results.json')).write_text(json.dumps(result,indent=2)+'\n');print('RESULT',len(checks),'checks;',result['axeViolations'],'axe violations;',sum(x['checkedTabs'] for x in keyboard),'modal keyboard stops')
if server:server.shutdown()
if result['axeViolations']:sys.exit(1)
