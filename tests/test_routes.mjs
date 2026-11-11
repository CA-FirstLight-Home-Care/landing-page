import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
import assert from 'node:assert/strict';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const worker=(await import('../publish/_worker.js')).default;
let checks=0;const check=(name,fn)=>{fn();checks++;console.log('PASS',name)};
const pages={'/':'index.html','/index.html':'index.html','/services':'services.html','/services.html':'services.html','/locations':'locations.html','/locations.html':'locations.html','/faqs':'faqs.html','/faqs.html':'faqs.html'};
for(const [path,file] of Object.entries(pages)){
 const response=await worker.fetch(new Request('https://example.test'+path));
 const body=await response.text();const local=await readFile(resolve(root,file),'utf8');
 check('Allowed page matches local '+path,()=>{assert.equal(response.status,200);assert.equal(body,local);assert.match(response.headers.get('Content-Type'),/text\/html/);assert.match(response.headers.get('Content-Security-Policy'),/connect-src 'none'/);assert.match(response.headers.get('X-Robots-Tag'),/noindex/)});
 const head=await worker.fetch(new Request('https://example.test'+path,{method:'HEAD'}));check('HEAD is empty '+path,()=>{assert.equal(head.status,200)});assert.equal(await head.text(),'');
}
for(const path of ['/README.md','/ANTIGRAVITY-HANDOFF.md','/offices.json','/office-extras.json','/source-current.xlsx','/source-audit.json','/index-v6.html','/services-v6.html','/locations-v6.html','/reports/REWORK-V7-REPORT.md','/tests/test_v7.py','/_worker.js','/publish/_worker.js','/desktop.png','/services/','/faqs/','/unknown']){
 const response=await worker.fetch(new Request('https://example.test'+path));check('Private/unknown route 404 '+path,()=>assert.equal(response.status,404));
}
for(const method of ['POST','PUT','DELETE']){const response=await worker.fetch(new Request('https://example.test/',{method}));check('Method rejected '+method,()=>assert.equal(response.status,405));}
console.log(`RESULT ${checks} offline routing checks passed. No network calls were made.`);
