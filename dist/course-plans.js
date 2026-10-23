const pilatesPlan={
 instructor:'김행화',capacity:50,
 goal:'노화로 약해지는 관절을 보호하고 근력을 강화하여 건강한 일상생활을 돕습니다.',
 method:'이론 및 호흡에 따른 필라테스 동작 · 기본 시니어 스트레칭',
 textbook:'없음',equipment:'세라밴드, 미니볼',preparation:'개강 후 준비',
 weeks:[
 ['9월','2주','필라테스 개요, 흉식호흡과 용어, 기본 스트레칭, 골반 좌우 평가'],
 ['9월','3주','근육과 뼈 이해하기, 경추 움직임에 따른 목 풀기, 어깨 가동성 확인 및 강화'],
 ['9월','4주','골반 자세 수정·강화, Calf Raise 20회, 혈당 및 기립성 저혈압 예방'],
 ['9월','5주','Hundred 2×2, 코어 강화 및 흉식호흡 익히기, Curl-up 10회, 원레그 스트레치'],
 ['10월','1주','Spine Twist & Saw, 흉추 회전과 가동성 확인, Balance & One Leg Lift, 롤링 밸런스'],
 ['10월','2주','Swimming Prep, 누워서 장요근 풀기·강화, 크리스 크로스, 밴드 활용 동작'],
 ['10월','3주','Bridge Pose, Bicycle, Scissor 각 20회, Rollover, Rolling'],
 ['10월','4주','Curl-up & Toe Tap, 복부 운동 기본 동작, 스쿼트 동작 변형'],
 ['11월','1주','미니볼, Seated Lean Back, Lean Back Twist, 오금 펴기, 트위스트'],
 ['11월','2주','캣 앤 카우, 수영 동작(척추 유연성·교정 강화), 밴드 사이드 스트레치, 숄더서클, 백스트레치, 힐 터치'],
 ['11월','3주','미니볼, 서서 드로잉·바이셉스 강화, 사이드 스트레치, 백 익스텐션 좌우 10회'],
 ['11월','4주','Single Leg Stretch~Double, 복부 강화·협응력 강화, 돌핀 플랭크 및 엘보우 플랭크 각 10×2']
 ]
};
const coursePlans={'필라테스 1':pilatesPlan,'필라테스 2':pilatesPlan};
function renderCoursePlan(program){const target=document.querySelector('#course-plan');target.replaceChildren();const plan=coursePlans[program.title];if(!plan)return;const heading=document.createElement('h3');heading.textContent='2026년 하반기 강의계획';target.append(heading);const info=document.createElement('dl');info.className='plan-info';for(const [label,value] of [['강사',plan.instructor],['강의 목표',plan.goal],['수업 방법',plan.method],['정원',plan.capacity+'명'],['교재',plan.textbook],['소요 기자재',plan.equipment],['준비물',plan.preparation],['수강 조건','제공된 이미지에 별도 기재 없음']]){const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=value;info.append(dt,dd)}target.append(info);const title=document.createElement('h4');title.textContent='월별·주차별 수업 내용';target.append(title);const table=document.createElement('table');table.className='plan-table';table.innerHTML='<caption>필라테스 1·2반 하반기 주차별 강의계획</caption><thead><tr><th scope="col">월·주차</th><th scope="col">강의 내용 요약</th></tr></thead>';const body=document.createElement('tbody');for(const [month,week,content] of plan.weeks){const tr=document.createElement('tr'),th=document.createElement('th'),td=document.createElement('td');th.scope='row';th.textContent=month+' '+week;td.textContent=content;tr.append(th,td);body.append(tr)}table.append(body);target.append(table);const note=document.createElement('p');note.className='plan-note';note.textContent='제공된 강의계획서 이미지의 내용을 읽기 쉽게 요약했습니다. 이미지 하단이 잘려 12월 계획은 원본 확인 후 추가 예정입니다.';target.append(note)}
