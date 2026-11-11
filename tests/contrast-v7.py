import os
from pathlib import Path
from PIL import Image
import sys,json,re,math
sys.path.insert(0,'/tmp/socal-playwright');from playwright.sync_api import sync_playwright
R=Path(__file__).resolve().parent.parent;out=[];URL=(sys.argv[1].rstrip('/')+'/' if len(sys.argv)>1 else 'https://firstlight-socal.pages.dev/')
def lum(rgb):
 c=[v/255 for v in rgb];c=[v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in c];return sum(v*k for v,k in zip(c,[.2126,.7152,.0722]))
with sync_playwright() as p:
 b=p.chromium.launch(executable_path=os.environ.get('CHROMIUM_EXECUTABLE_PATH') or ('/usr/bin/google-chrome' if Path('/usr/bin/google-chrome').exists() else p.chromium.executable_path),headless=True,args=['--no-sandbox']);q=b.new_page(viewport={'width':1440,'height':1000});q.emulate_media(reduced_motion='reduce')
 for page,selectors in [('', ['#page-title','.underlined','.hero-copy > .eyebrow','.intro','.flow-privacy','.hero .text-link','.step-number']),('services',['.services-intro h1','.services-intro .eyebrow','.services-intro .wrap > p']),('locations',['.locations-intro h1','.locations-intro .eyebrow','.locations-intro .wrap > p'])]:
  q.goto(URL+page);q.evaluate('document.fonts.ready');q.evaluate('scrollTo(0,0)');items=[]
  for selector in selectors:
   for node in q.locator(selector).all():
    box=node.bounding_box()
    if box and box['width'] and box['height']:items.append({'selector':selector,'box':box,'color':node.evaluate('(e)=>getComputedStyle(e).color'),'text':node.inner_text()})
  q.screenshot(path=str(R/'contrast-foreground-v7.png'),full_page=True);original=Image.open(R/'contrast-foreground-v7.png').convert('RGB');q.add_style_tag(content='body *{color:transparent!important;-webkit-text-fill-color:transparent!important;text-shadow:none!important}');q.screenshot(path=str(R/'contrast-background-v7.png'),full_page=True);image=Image.open(R/'contrast-background-v7.png').convert('RGB')
  for item in items:
   fg=[float(v) for v in re.findall(r'[0-9.]+',item['color'])];a=fg[3] if len(fg)>3 else 1;box=item['box'];rect=(max(0,math.ceil(box['x'])),max(0,math.ceil(box['y'])),min(image.width,math.floor(box['x']+box['width'])),min(image.height,math.floor(box['y']+box['height'])));colors={bg for fgPixel,bg in zip(original.crop(rect).getdata(),image.crop(rect).getdata()) if max(abs(fgPixel[i]-bg[i]) for i in range(3))>12};assert colors,(page,item['selector']);ratios=[]
   for bg in colors:
    final=[fg[i]*a+bg[i]*(1-a) for i in range(3)];x,y=sorted([lum(final),lum(bg)]);ratios.append((y+.05)/(x+.05))
   minimum=min(ratios);entry={'page':page or 'main','selector':item['selector'],'text':item['text'],'foreground':item['color'],'minimumSampledRatio':round(minimum,2),'passed':minimum>=4.5};out.append(entry);print(entry,flush=True)
 b.close()
(R/'contrast-v7-results.json').write_text(json.dumps({'method':'Computed foreground colors against the background pixels underneath actual text ink, isolated by comparing screenshots before/after making text transparent in the test browser. This examines the gradient and decorative-background items axe marked for manual review. Decorative arrows/step numerals also reviewed; X social labels contain the visible X in their accessible names. No published HTML altered.','checks':out,'passed':all(x['passed'] for x in out)},indent=2)+'\n')
assert out and all(x['passed'] for x in out)
