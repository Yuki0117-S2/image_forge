// ═══════════════════════════════════════════════════════════════════
//  forge_tools.js
//  FORGE 도구 모음 공유 레지스트리.
//  - forge.html 카드 그리드의 데이터 소스
//  - 각 도구 HTML의 sibling-link 자동 결정
//
//  새 도구 추가 시: FORGE_TOOLS 배열에 객체 한 줄 push하면
//    1) forge.html 카드 자동 추가
//    2) 직전 도구의 sibling-link → 새 도구로 자동 변경
//    3) 새 도구의 sibling-link → 자동으로 첫 도구(magic_circle) 가리킴 (순환)
//
//  배열 순서 = sibling 순환 순서.
// ═══════════════════════════════════════════════════════════════════

window.FORGE_TOOLS = [
  {
    id:'magic_circle',
    cat:'Image · Sigil',
    title:'마법진',
    titleEn:'Magic Circle',
    icon:'◯',
    description:'룬·기하학·원소를 조합해 신성한 의식 다이어그램을 주조. 원 구조 · 룬 · 장식 · 색상 팔레트.',
    accent:'#8889CD',
    href:'magic_circle.html',
    tags:['EN/KR','이미지'],
    available:true,
  },
  {
    id:'sigil',
    cat:'Image · Crest',
    title:'가문 문양',
    titleEn:'Sigil',
    icon:'✦',
    description:'베이스 모티프 + 보조 모티프 + 격을 조합해 추상 가문 문장을 생성. 헤럴딕 · 트라이벌 · 가몬.',
    accent:'#BB6688',
    href:'sigil.html',
    tags:['EN/KR','이미지'],
    available:true,
  },
  {
    id:'weapon',
    cat:'Image · Armament',
    title:'무기',
    titleEn:'Weapon',
    icon:'⚔',
    description:'무기 종류 + 가문 모티프 + 손잡이 + 날 + 보석 + 원소 + 격을 조합해 가문 의식·전투용 무기를 주조. 검·창·완드·도끼.',
    accent:'#CCAA88',
    href:'weapon.html',
    tags:['EN/KR','이미지'],
    available:true,
  },
  {
    id:'tome',
    cat:'Image · Arcane',
    title:'마도서',
    titleEn:'Tome',
    icon:'📖',
    description:'마도서 종류 + 가문 모티프 + 표지 + 잠금 + 보석 + 원소 + 격을 조합해 가문의 그리모어를 제본. 주문서·금서·일기·두루마리.',
    accent:'#DDAACC',
    href:'tome.html',
    tags:['EN/KR','이미지'],
    available:true,
  },
  {
    id:'relic',
    cat:'Image · Artifact',
    title:'유물',
    titleEn:'Relic',
    icon:'💎',
    description:'유물 종류 + 가문 모티프 + 금속 세공 + 부속 장식 + 보석 + 원소 + 격을 조합해 가문의 신성한 장신구를 공예. 반지·왕관·아뮬렛·브로치.',
    accent:'#884499',
    href:'relic.html',
    tags:['EN/KR','이미지'],
    available:true,
  },
  {
    id:'banner',
    cat:'Image · Heraldry',
    title:'깃발',
    titleEn:'Banner',
    icon:'🏳️',
    description:'깃발 형태 + 가문 모티프 + 천 재질 + 가장자리 장식 + 보석 브로치 + 천 모션 + 격을 조합해 가문의 의례·전쟁 깃발을 주조. 곤팔론·페넌트·전쟁기.',
    accent:'#0077DD',
    href:'banner.html',
    tags:['EN/KR','이미지'],
    available:true,
  },
  {
    id:'architecture',
    cat:'Image · Landmark',
    title:'건축물',
    titleEn:'Architecture',
    icon:'🏛️',
    description:'건축 종류 + 양식 + 재료 + 첨탑 + 규모 + 모티프 + 격을 조합해 가문 랜드마크를 주조. 모드 분기로 시길 톤(가문 랜드마크) 또는 컨셉아트(환경 일러스트) 결 선택. 마법탑·대성당·검은 첨탑성.',
    accent:'#00BBDD',
    href:'architecture.html',
    tags:['EN/KR','이미지','모드'],
    available:true,
  },
  {
    id:'potion',
    cat:'Image · Alchemy',
    title:'물약',
    titleEn:'Potion',
    icon:'⚗️',
    description:'물약 종류 + 양식 + 병 형태 + 액체 상태 + 마개 + 모티프 + 효과·연출을 조합해 가문 영약을 주조. 모드 분기로 시길 톤(가문 의례 약병) 또는 컨셉아트(떠다니는 마법약 일러스트) 결 선택. 회복 물약·금단의 팅크처·전설의 만병통치약.',
    accent:'#FF7722',
    href:'potion.html',
    tags:['EN/KR','이미지','모드'],
    available:true,
  },
  {
    id:'creature',
    cat:'Image · Familiar',
    title:'사역마',
    titleEn:'Creature',
    icon:'🐺',
    description:'사역마 종류 + 양식 + 몸 형태 + 특수 부위 + 외피 + 모티프 + 자세를 조합해 가문 영물을 주조. 모드 분기로 시길 톤(가문 문장 사역마) 또는 컨셉아트(사역마 일러스트) 결 선택. 늑대·그리핀·키메라·천상 유니콘·저주받은 짐승.',
    accent:'#EE1166',
    href:'creature.html',
    tags:['EN/KR','이미지','모드'],
    available:true,
  },
  {
    id:'tarot',
    cat:'Image · Card',
    title:'타로 카드',
    titleEn:'Tarot',
    icon:'🔮',
    description:'메이저 아르카나 22장 + 양식 + 카드 프레임 + 중심 도상 + 신성 기하 + 모티프 + 정·역방향 + 카드 배치를 조합해 가문 타로 카드를 주조. 모드 분기로 시길 톤(가문 문장 타로) 또는 컨셉아트(타로 일러스트) 결 선택. 19번 카드 배치는 모드 C 전용 (UI 비활성화 신규 패턴).',
    accent:'#FF6699',
    href:'tarot.html',
    tags:['EN/KR','이미지','모드','신규'],
    available:true,
  },
  {
    id:'map',
    cat:'Image · Cartography',
    title:'지도',
    titleEn:'Map',
    icon:'🗺️',
    description:'지도 타입 + 양식 + 지형 + 핵심 랜드마크 + 생활요소 + 모티프 + 시점 + 레이아웃을 조합해 가문 영지 지도를 주조. 모드 분기 3결: 시길 톤(가문 문장 지도) / 컨셉아트(판타지 일러스트맵) / 탑다운 미니맵(페인터리 MMO). 5호기 신규 패턴.',
    accent:'#8889CD',
    href:'map.html',
    tags:['EN/KR','이미지','모드','신규','5호기'],
    available:true,
  },
  // ── 새 도구는 여기에 push ──
  // {
  //   id:'something_new', cat:'Category', title:'제목', titleEn:'Title',
  //   icon:'★', description:'설명', accent:'#DDAACC',
  //   href:'something.html', tags:['태그'], available:true,
  // },
];

// "준비 중" 카드 (선택적 — 비워둬도 됨)
window.FORGE_PLACEHOLDER_TOOLS = [
  // 예시:
  // { id:'_x', cat:'Coming Soon', title:'다음 도구', titleEn:'Next', icon:'◇',
  //   description:'준비 중인 새 도구.', accent:'#CCAA88', available:false, tags:['준비중'] },
];

// ═══════════════════════════════════════════════════════════════════
//  헬퍼: 현재 도구의 다음 도구를 순환 반환
//  - currentId: 'sigil', 'weapon' 등
//  - 마지막 도구는 자동으로 첫 도구 가리킴 (순환 마감)
//  - available !== false 인 도구만 후보 (준비 중인 도구 스킵)
// ═══════════════════════════════════════════════════════════════════
window.getNextForgeTool = function(currentId){
  const tools = (window.FORGE_TOOLS || []).filter(t => t.available !== false);
  if(!tools.length) return null;
  const idx = tools.findIndex(t => t.id === currentId);
  if(idx === -1) return tools[0];
  return tools[(idx + 1) % tools.length];
};

// ═══════════════════════════════════════════════════════════════════
//  자동 sibling-link 채우기
//  - 각 도구 HTML이 forge_tools.js 로드하면 자동 실행됨
//  - location.pathname에서 파일명 추출 → currentId로 사용
//  - 페이지에 id="sibling-link"인 <a> 요소가 있으면 자동 채움
//  - 없으면 (forge.html 등) 조용히 무시
// ═══════════════════════════════════════════════════════════════════
window.autoFillSiblingLink = function(){
  const path = (location.pathname || '').split('/').pop() || '';
  const currentId = path.replace(/\.html$/i, '');
  if(!currentId) return;
  const next = window.getNextForgeTool(currentId);
  if(!next) return;
  const el = document.getElementById('sibling-link');
  if(!el) return;
  el.href = next.href;
  el.innerHTML =
    (next.icon || '◇') +
    ' <span class="btn-label">' +
    (next.title || '') +
    '</span>';
};

// DOM 준비되면 자동 실행
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', window.autoFillSiblingLink);
} else {
  window.autoFillSiblingLink();
}
