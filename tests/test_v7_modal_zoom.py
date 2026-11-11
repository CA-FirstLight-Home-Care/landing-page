import os
from pathlib import Path
import sys,json
sys.path.insert(0,'/tmp/socal-playwright')
from playwright.sync_api import sync_playwright
R=Path(__file__).resolve().parent.parent;url=(sys.argv[1].rstrip('/')+'/' if len(sys.argv)>1 else 'https://firstlight-socal.pages.dev/')
with sync_playwright() as p:
 b=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_EXECUTABLE_PATH') or ('/usr/bin/google-chrome' if Path('/usr/bin/google-chrome').exists() else p.chromium.executable_path),headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
 q=b.new_page(viewport={'width':720,'height':1000});q.emulate_media(reduced_motion='reduce');q.goto(url)
 q.fill('#zip','91710');q.locator('#zip').press('Enter')
 for key,values in [('who',['loved']),('daily',['personal']),('memory',['diagnosed']),('recovery',['yes']),('schedule',['regular','overnight','respite']),('veteran',['veteran']),('ltc',['yes']),('pay',['options'])]:
  for value in values:q.check('#quiz-'+key+'-'+value)
  q.locator('#quiz-next').click()
 q.locator('#summary-continue').click();q.locator('#inquiry-open').click();q.evaluate('document.documentElement.style.fontSize="200%"')
 d=q.evaluate("()=>({root:document.documentElement.scrollWidth,client:document.documentElement.clientWidth,bad:[...document.querySelectorAll('dialog[open] *')].filter(e=>{let r=e.getBoundingClientRect();return r.width&&r.height&&(r.left<-.6||r.right>innerWidth+.6)}).map(e=>e.id||e.tagName)})")
 assert d['root']<=d['client'] and not d['bad'],d
 q.add_script_tag(path=str(R/'node_modules/axe-core/axe.min.js'));a=q.evaluate('async()=>await axe.run(document,{runOnly:{type:"tag",values:["wcag2a","wcag2aa","wcag21a","wcag21aa","wcag22aa","best-practice"]}})');assert not a['violations'],a['violations']
 q.screenshot(path=str(R/'v7-inquiry-modal-200-percent.png'),full_page=True)
 q.evaluate('document.documentElement.style.fontSize=""')
 for label,w,h in [('desktop',1440,1000),('mobile',390,844)]:
  q.set_viewport_size({'width':w,'height':h});q.locator('#inquiry-message').scroll_into_view_if_needed();q.screenshot(path=str(R/('v7-inquiry-prefill-'+label+'.png')))
 (R/'live-v7-modal-zoom.json').write_text(json.dumps({'url':url,'mode':('local' if url.startswith(('http://127.0.0.1:','http://localhost:')) else 'live'),'modal200PercentReflow':d,'axeViolations':a['violations'],'axeIncomplete':a['incomplete'],'prefill':q.locator('#inquiry-message').input_value()},indent=2)+'\n')
 print('PASS 200% modal reflow and axe, zero violations; tested URL:',url)
 b.close()
