# Keeps existing, sourced explanations; adds the owner's requested couples-care arrangement.
def add_service_comparison(page):
 grid=page.select_one('.service-grid');rows=[]
 for article in grid.select('article.service'):
  values={dt.get_text(' ',strip=True):dt.find_next_sibling('dd').get_text(' ',strip=True) for dt in article.select('dt')}
  schedule=article.select_one('.schedule-note').get_text(' ',strip=True).removeprefix('Schedule:').strip()
  rows.append([article['id'],article.h3.get_text(' ',strip=True),values['How it’s different'],values['Who it’s for'],values['What caregivers do'],schedule])
 rows.append(['couples-care','Couples care','1 caregiver supports 2 people in the same home when their individual needs can be safely met together.','2 adults in the same home, such as a couple, who each need everyday support.','Agreed companion or personal-care tasks for each person. Each person needs a separate assessment; 1 caregiver may not be enough for simultaneous hands-on needs.','Visits agreed with the local office after assessing both people. Rates vary by local office.'])
 wrap=page.new_tag('div',attrs={'class':'service-comparison-wrap'});table=page.new_tag('table',attrs={'class':'service-comparison','role':'table'});caption=page.new_tag('caption',id='services-comparison-caption');caption.string='Compare 7 types of non-medical home care';table.append(caption)
 thead=page.new_tag('thead',attrs={'role':'rowgroup'});tr=page.new_tag('tr',attrs={'role':'row'});headings=['Care type','What it is','Who it is for','Typical tasks','Typical schedule']
 for n,title in enumerate(headings):
  th=page.new_tag('th',attrs={'scope':'col','id':'service-col-'+str(n),'role':'columnheader'});th.string=title;tr.append(th)
 thead.append(tr);table.append(thead);tbody=page.new_tag('tbody',attrs={'role':'rowgroup'})
 for row in rows:
  tr=page.new_tag('tr',attrs={'role':'row'});th=page.new_tag('th',attrs={'scope':'row','id':row[0],'tabindex':'-1','role':'rowheader'});th.string=row[1];tr.append(th)
  for n,text in enumerate(row[2:],1):
   td=page.new_tag('td',attrs={'headers':row[0]+' service-col-'+str(n),'role':'cell'});label=page.new_tag('span',attrs={'class':'table-mobile-label','aria-hidden':'true'});label.string=headings[n];td.append(label);p=page.new_tag('p');p.string=text;td.append(p);tr.append(td)
  tbody.append(tr)
 table.append(tbody);wrap.append(table);grid.replace_with(wrap)
 note=page.new_tag('p',attrs={'class':'scope-note couples-source'});note.append('Couples care is a shared-care arrangement to discuss with your local office, not a promise that 1 caregiver is right for every household. FirstLight describes support for spouses and individually assessed personal care. ')
 for title,url in [('FirstLight: supporting spouses','https://www.firstlighthomecare.com/home-healthcare-salem/2016/03/20/include-spouses-caregiving/'),('FirstLight: personal care and local availability','https://www.firstlighthomecare.com/home-care-services/personal-care/')]:
  a=page.new_tag('a',href=url,attrs={'target':'_blank','rel':'noopener noreferrer'});a.string=title;hidden=page.new_tag('span',attrs={'class':'sr-only'});hidden.string=' (opens in a new tab)';a.append(hidden);note.append(a);note.append(' ')
 wrap.insert_after(note)
 return page
