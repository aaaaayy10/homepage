const categories={culture:{label:'문화·예술',icon:'🎨',color:'#e7e9d9',en:'ART & CULTURE'},health:{label:'건강·활력',icon:'🌿',color:'#e5eadf',en:'HEALTH & WELLNESS'},digital:{label:'디지털·생활',icon:'📱',color:'#ece6dc',en:'DIGITAL LIFE'},language:{label:'인문·어학',icon:'📚',color:'#e3e9eb',en:'LANGUAGE & LIFE'}};
// 기관 제공 2026년 하반기 시간표. 수강료는 4개월 기준.
const data=`생활체조|health|화·목|15:10–16:00|0|60|3층 으뜸마루
건강체조|health|화·목|12:10–13:00|40000|60|3층 으뜸마루
필라테스 1|health|목·금|09:10–10:00|40000|50|3층 으뜸마루
필라테스 2|health|월·수|11:10–12:00|40000|50|3층 으뜸마루
요가 1|health|월·수|12:10–13:00|40000|50|3층 으뜸마루
요가 2|health|화·목|10:10–11:00|40000|50|3층 으뜸마루
에어로빅|health|월·금|10:10–11:00|40000|60|3층 으뜸마루
라인댄스 1|health|화·목|11:10–12:00|40000|60|3층 으뜸마루
라인댄스 2|health|월·수|13:10–14:00|40000|60|3층 으뜸마루
댄스스포츠|health|화·목|16:10–17:00|40000|50|3층 으뜸마루
기타 초중급|culture|월·목|14:10–16:00|40000|40|2층 버금마루
기타 고급|culture|월·목|13:10–14:00|40000|40|2층 버금마루
오카리나 초급|culture|화·금|09:10–10:00|10000|40|2층 버금마루|환불 X
오카리나 중급|culture|화·금|10:10–11:00|40000|40|2층 버금마루
오카리나 고급|culture|화·금|11:10–12:00|40000|40|2층 버금마루
신바람 사물 초급|culture|금|13:30–15:30|10000|25|2층 버금마루|환불 X
신바람 사물 중급|culture|수|13:30–15:30|10000|25|2층 버금마루|환불 X
하모니카 초급|culture|목|09:00–10:30|40000|25|2층 버금마루
하모니카 중급|culture|목|10:40–12:10|40000|30|2층 버금마루
우쿨렐레|culture|월|10:10–12:00|40000|30|2층 버금마루
풀잎합창단|culture|화|13:10–15:00|40000|40|2층 버금마루
손가락 난타|culture|수|10:50–12:20|40000|40|2층 버금마루
가락장구|culture|목|16:00–17:30|40000|30|2층 버금마루
난타 초급|culture|월·금|15:10–16:00|10000|30|3층 으뜸마루|환불 X
난타 중급|culture|화·목|14:10–15:00|40000|30|3층 으뜸마루
힐링노래교실|culture|수·금|수 10:10–11:00 / 금 11:10–12:00|60000|80|3층 으뜸마루
캘리그라피 초급|culture|목|14:30–16:00|40000|14|2층 한울샘
캘리그라피 중급|culture|목|13:00–14:30|40000|14|2층 한울샘
동양화|culture|수|09:10–11:00|10000|14|2층 한울샘|환불 X
서예|culture|월·목|09:00–11:00|40000|14|2층 한울샘
민화 1|culture|화|10:10–12:00|40000|14|2층 한울샘
민화 2|culture|화|14:10–16:00|40000|14|2층 한울샘
힐링수채화|culture|월|13:30–15:30|10000|14|2층 한울샘|환불 X
금빛스케치|culture|수|13:30–15:30|40000|14|2층 한울샘
연필인물화 초급|culture|월|13:00–14:30|40000|15|2층 슬기샘
연필인물화 중급|culture|수|13:00–14:30|40000|15|2층 슬기샘
실용영어|language|월·금|10:10–11:00|40000|25|2층 바른샘
한자 초급|language|목|10:00–11:00|10000|20|2층 바른샘|환불 X
한문 (논어)|language|월·수|10:00–12:00|10000|20|2층 슬기샘|환불 X
일본어 초급|language|화·금|13:00–15:00|10000|20|2층 클릭샘|환불 X
컴퓨터 초급|digital|월·수|10:00–11:00|10000|20|2층 클릭샘|환불 X
컴퓨터 활용|digital|화|10:00–12:00|40000|20|2층 클릭샘
스마트폰 초급|digital|목|10:00–12:00|40000|20|2층 클릭샘
스마트폰 중급|digital|월|13:00–14:00|40000|20|2층 클릭샘`;
const programs=data.split('\n').map(line=>{const [title,category,days,time,fee,capacity,room,noRefund]=line.split('|');return {title,category,days,time,fee:Number(fee),capacity,room,noRefund,...categories[category]}});
let filter='all',limit=8;
const grid=document.querySelector('#program-grid'),search=document.querySelector('#search'),dialog=document.querySelector('dialog'),more=document.querySelector('#more-programs'),count=document.querySelector('#program-count');
const feeText=p=>p.fee===0?'무료':p.fee.toLocaleString('ko-KR')+'원';
function showProgram(p){document.querySelector('#dialog-title').textContent=p.title;document.querySelector('#dialog-description').textContent='2026년 하반기 · '+p.label;const detail=document.querySelector('#dialog-details');detail.replaceChildren();for(const [label,value] of [['요일',p.days],['시간',p.time],['장소',p.room],['정원',p.capacity+'명'],['수강료 (4개월)',feeText(p)]]){const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=value;detail.append(dt,dd)}document.querySelector('#dialog-note').textContent=p.noRefund?'기관 제공 시간표에는 이 강좌가 ‘환불 X’로 표시되어 있습니다. 반환 기준 적용은 접수 전 담당자에게 확인해 주세요.':'기관 제공 시간표 기준입니다. 운영 변경 및 현재 참여 가능 여부는 담당자에게 확인해 주세요.';renderCoursePlan(p);dialog.showModal()}
function render(){const query=search.value.trim().replace(/\s/g,'');const items=programs.filter(p=>(filter==='all'||p.category===filter)&&(p.title+p.label+p.days+p.room).replace(/\s/g,'').includes(query));grid.replaceChildren();count.textContent=`총 ${items.length}개 강좌 · ${Math.min(limit,items.length)}개 표시`;more.hidden=items.length<=limit;if(!items.length){const p=document.createElement('p');p.className='empty';p.textContent='검색 결과가 없습니다. 다른 검색어로 찾아보세요.';grid.append(p);return}items.slice(0,limit).forEach(p=>{const el=document.createElement('article');el.className='program-card';el.innerHTML=`<div class="card-art" style="background:${p.color}"><i>${p.en}</i><span aria-hidden="true">${p.icon}</span><b class="fee-badge">${feeText(p)}</b></div><div class="card-body"><span class="card-category">${p.label} · 정원 ${p.capacity}명</span><h3>${p.title}</h3><p class="course-time">${p.days} · ${p.time}</p><p class="course-room">${p.room}<br>수강료 ${feeText(p)}${p.fee?' / 4개월':''}</p><button aria-label="${p.title} 자세히 보기">자세히 보기 <span>↗</span></button></div>`;el.querySelector('button').addEventListener('click',()=>showProgram(p));grid.append(el)})}
for(const button of document.querySelectorAll('[data-filter]')){const key=button.dataset.filter;button.textContent+=` ${key==='all'?programs.length:programs.filter(p=>p.category===key).length}`;button.addEventListener('click',()=>{filter=key;limit=8;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});render()})}
search.addEventListener('input',()=>{limit=8;render()});more.addEventListener('click',()=>{const firstNew=grid.children.length;limit+=8;render();grid.children[firstNew]?.querySelector('button').focus({preventScroll:true})});document.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});document.querySelector('#font-size').addEventListener('click',e=>{const active=document.body.classList.toggle('large-text');e.currentTarget.setAttribute('aria-pressed',String(active));e.currentTarget.textContent=active?'기본 글자 크기 −':'글자 크게 ＋'});document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter==='all')));render();
