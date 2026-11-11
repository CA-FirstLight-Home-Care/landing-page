
'use strict';
const OFFICE_DATA=JSON.parse(document.getElementById('office-data').textContent);
const OFFICES=Object.fromEntries(OFFICE_DATA.offices.map(o=>[o.id,o]));
const OFFICE_EXTRAS=JSON.parse(document.getElementById('office-extras').textContent);
function displayOfficeName(o){return String(o.shortName).replace(/\u2013|\u2014/g,' / ');}
document.getElementById('zip').disabled=false;document.querySelector('#zip-form button').disabled=false;
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const phoneHref=o=>'tel:+1'+o.phone.replace(/\D/g,'');
const arrow='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
function lookupZip(value) {
  const zip=String(value).trim();
  if (!/^[0-9]{5}$/.test(zip)) return {status:'invalid', zip, offices:[]};
  const ids=OFFICE_DATA.zipToOfficeIds[zip] || [];
  return {status:ids.length>1?'overlap':ids.length===1?'covered':'uncovered',zip,offices:ids.map(id=>OFFICES[id])};
}
let selectedOfficeId=null;
const emptyContact=document.getElementById('contact-panel').innerHTML;
function setOffice(id,moveFocus=false){const o=OFFICES[id];if(!o)return;selectedOfficeId=id;document.getElementById('contact-panel').innerHTML=`<h3>${esc(displayOfficeName(o))}</h3><p class="office-service-areas">Serving ${esc(o.areas.join(', '))}.</p><div class="contact-card-actions">${o.phone?`<a class="button consultation" href="${phoneHref(o)}">Call ${esc(o.phone)}</a>`:''}<button class="button inquiry-trigger" id="inquiry-open" type="button" aria-haspopup="dialog" aria-controls="inquiry-dialog">Submit an inquiry</button></div><p class="micro">Inquiry placeholder. Nothing is sent.</p>`;document.dispatchEvent(new Event('officechange'));if(moveFocus)window.startCareQuestions();}
function clearOffice(){selectedOfficeId=null;document.getElementById('contact-panel').innerHTML=emptyContact;document.dispatchEvent(new Event('officechange'));if(window.resetCareFlow)window.resetCareFlow();}
function resultCard(o){return `<article class="result-office"><h3>${esc(displayOfficeName(o))}</h3><p class="areas">Serving ${esc(o.areas.join(', '))}.</p>${o.phone?`<a class="office-direct-phone" href="${phoneHref(o)}">${esc(o.phone)}<span class="sr-only">, call ${esc(displayOfficeName(o))}</span></a>`:''}<a class="button select-office" data-office="${esc(o.id)}" href="#care-questions">Confirm this office ${arrow}</a></article>`;}
function runLookup(event){if(event)event.preventDefault();const input=document.getElementById('zip'),message=document.getElementById('zip-message'),results=document.getElementById('lookup-results'),value=input.value.trim();message.textContent='';input.removeAttribute('aria-invalid');clearOffice();
 if(/^[0-9]{5}$/.test(value)){const result=lookupZip(value);if(result.status==='uncovered'){results.innerHTML=`<div class="fallback"><h3>Let’s look a little further.</h3><p>We do not have a participating office listed for ${esc(value)} in this draft. FirstLight care may still be available.</p><a class="button" href="${esc(OFFICE_DATA.nationalFinderUrl)}">Use FirstLight’s national location finder ${arrow}</a></div>`;}else{results.innerHTML=(result.status==='overlap'?`<p class="overlap-notice">${esc(value)} is listed under two offices in the source coverage sheet. We will not choose one for you. Confirm the right office with one of these teams.</p>`:`<p class="results-caption">Your listed office for ${esc(value)}</p>`)+result.offices.map(resultCard).join('');}}
 else{const query=value.toLocaleLowerCase('en-US'),exact=CITY_OFFICES[query],matches=exact?[exact]:Object.values(CITY_OFFICES).filter(c=>query.length>=3&&c.city.toLocaleLowerCase('en-US').includes(query));const ids=[...new Set(matches.flatMap(c=>c.ids))];if(!value||!ids.length){results.innerHTML='';input.setAttribute('aria-invalid','true');message.textContent='Enter a city we serve or a 5-digit ZIP code.';input.focus();return;}const city=exact?.city||value;if(ids.length>1){results.innerHTML=`<div class="city-ambiguity"><p class="overlap-notice">${ids.length} offices match ${esc(city)}. Enter the ZIP where care is needed to find the right office. We will not choose from the city name alone.</p><form id="main-city-zip-form" novalidate><label for="main-city-zip">ZIP where care is needed</label><div class="city-zip-row"><input id="main-city-zip" inputmode="numeric" maxlength="5" autocomplete="postal-code" aria-describedby="main-city-zip-error"><button class="button" type="submit">Find my office</button></div><p id="main-city-zip-error" class="field-error" role="alert"></p></form></div>`;}else{results.innerHTML=`<p class="results-caption">Office serving ${esc(city)}. The local team confirms coverage.</p>`+resultCard(OFFICES[ids[0]]);}}
 results.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});results.focus({preventScroll:true});}
document.addEventListener('submit',event=>{if(event.target.id!=='main-city-zip-form')return;event.preventDefault();const field=document.getElementById('main-city-zip'),z=field.value.trim();if(!/^[0-9]{5}$/.test(z)){field.setAttribute('aria-invalid','true');document.getElementById('main-city-zip-error').textContent='Enter a 5-digit ZIP code, using numbers only.';field.focus();return;}document.getElementById('zip').value=z;runLookup();});
document.getElementById('zip-form').addEventListener('submit',runLookup);
document.getElementById('zip').addEventListener('input',()=>{document.getElementById('zip-message').textContent='';document.getElementById('zip').removeAttribute('aria-invalid');document.getElementById('lookup-results').innerHTML='';clearOffice();});
document.addEventListener('click',event=>{const a=event.target.closest('.select-office');if(!a)return;event.preventDefault();setOffice(a.dataset.office,true);});
document.addEventListener('click',event=>{if(event.target.closest('#return-to-zip')){event.preventDefault();goCareStep(1);document.getElementById('zip').focus({preventScroll:true});}});
window.lookupZip=lookupZip;

function socialIcon(platform){
 const paths={Instagram:'M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5ZM16.5 7.5h.01M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',LinkedIn:'M5 9v12M5 4v.01M10 21V9m0 5c0-6 9-6 9 0v7',X:'m4 3 16 18M20 3 4 21M7 3H4l13 18h3'};
 return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${paths[platform]||'M3 12h18M12 3v18'}"/></svg>`;
}
function socialProfiles(o){
 const e=OFFICE_EXTRAS[o.id],links=e.socials;
 if(!links.length)return '<p class="social-unverified micro">Local social profiles have not yet been confirmed for this office.</p>';
 return `<details class="social-profiles"><summary>Office social profiles</summary><p class="micro">Optional links for ${esc(displayOfficeName(o))}. Each opens a new tab.</p><ul class="social-links">${links.map(x=>`<li><a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(displayOfficeName(o))} on ${esc(x.platform)} (opens in a new tab)">${socialIcon(x.platform)}<span>${esc(x.platform)}</span></a></li>`).join('')}</ul></details>`;
}
(()=>{
 const button=document.getElementById('find-closest'),status=document.getElementById('location-status'),results=document.getElementById('lookup-results'),zip=document.getElementById('zip');
 let requestId=0;
 document.getElementById('geo-option').hidden=false;
 function release(){button.disabled=false;button.removeAttribute('aria-busy');}
 function cancelLocation(){requestId++;release();status.textContent='';}
 zip.addEventListener('input',cancelLocation);
 document.getElementById('zip-form').addEventListener('submit',cancelLocation);
 document.addEventListener('click',e=>{if(e.target.closest('.select-office'))cancelLocation();});
 function distanceKm(a,b,c,d){const r=Math.PI/180,x=(c-a)*r,y=(d-b)*r;const h=Math.sin(x/2)**2+Math.cos(a*r)*Math.cos(c*r)*Math.sin(y/2)**2;return 6371*2*Math.atan2(Math.sqrt(h),Math.sqrt(Math.max(0,1-h)));}
 button.addEventListener('click',()=>{
  const token=++requestId;
  clearOffice();results.innerHTML='';zip.value='';zip.removeAttribute('aria-invalid');document.getElementById('zip-message').textContent='';
  if(!navigator.geolocation){status.textContent='Location is not available in this browser. Please enter the ZIP where care is needed.';return;}
  button.disabled=true;button.setAttribute('aria-busy','true');status.textContent='Your browser may ask permission to use your location. ZIP search is always available.';
  function fail(error){if(token!==requestId)return;release();const messages={1:'Location was not shared. Please enter the ZIP where care is needed instead.',2:'Your location could not be found. Please enter the ZIP where care is needed instead.',3:'Finding your location took too long. Please enter the ZIP where care is needed instead.'};status.textContent=messages[error&&error.code]||'Location is unavailable. Please enter the ZIP where care is needed instead.';}
  try{navigator.geolocation.getCurrentPosition(position=>{
   if(token!==requestId)return;
   const {latitude,longitude}=position.coords;
   if(!Number.isFinite(latitude)||!Number.isFinite(longitude)||Math.abs(latitude)>90||Math.abs(longitude)>180){fail({code:2});return;}
   release();
   const ranked=OFFICE_DATA.offices.map(o=>({office:o,km:distanceKm(latitude,longitude,OFFICE_EXTRAS[o.id].latitude,OFFICE_EXTRAS[o.id].longitude)})).sort((a,b)=>a.km-b.km);
   const nearest=ranked.filter(x=>Math.abs(x.km-ranked[0].km)<0.01),miles=ranked[0].km/1.609344;
   const distance=miles<1?'less than 1 mile away':`about ${Math.round(miles)} miles away`;
   const caption=nearest.length>1?'These offices share the nearest public address. Use your ZIP to confirm the right territory.':'Closest participating office by its public address. Use your ZIP to confirm service coverage.';
   status.textContent=`${nearest.length>1?nearest.length+' nearest offices':'Nearest office'}: ${nearest.map(x=>displayOfficeName(x.office)).join(' and ')}. Approximate straight-line distance, ${distance}.`;
   results.innerHTML=`<p class="results-caption">${esc(caption)}</p><p class="geo-distance">${esc(distance)} · straight-line estimate, not driving distance</p>`+nearest.map(x=>resultCard(x.office)).join('');

   results.scrollIntoView({block:'start'});results.focus({preventScroll:true});
  },fail,{enableHighAccuracy:false,timeout:10000,maximumAge:60000});}catch(error){fail(error);}
 });
})();


