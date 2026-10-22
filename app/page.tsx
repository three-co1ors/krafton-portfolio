'use client';

import { useState } from 'react';

type Project = {
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  problem: string;
  solution: string;
  results: string[];
  github: string;
  live?: string;
  kind: 'hivibe' | 'howsu' | 'escapetato' | 'nursery';
};

const projects: Project[] = [
  {
    number: '01', tag: 'BACKEND / AI INTEGRATION', title: 'HiVibe',
    subtitle: 'AI 기반 코드 분석 및 학습 플랫폼',
    description: 'AI가 생성한 코드를 그대로 받아들이지 않고 이해하는 힘을 기를 수 있도록, 진단·학습·복습·보상이 이어지는 서비스를 기획했습니다. 2인 졸업 프로젝트에서 핵심 기능과 배포를 담당했습니다.',
    stack: ['JAVA 21', 'SPRING BOOT', 'MYSQL', 'GEMINI API', 'DOCKER', 'AWS EC2 / RDS'],
    problem: 'AI 응답 형식이 요청마다 달라 결과 파싱이 반복적으로 실패했습니다.',
    solution: 'XML 출력 규칙과 서버 점수 보정·누락 필드 처리·타임아웃을 구현해 AI 응답을 검증 가능한 진단 데이터로 구조화했습니다.',
    results: ['진단·노트·마이페이지·배지 REST API 및 데이터 모델 구현', 'AWS EC2·RDS, Nginx 기반 서비스 배포', '졸업 발표 PPT 직접 제작 · 교수님의 후배 사례 공유 제안'],
    github: 'https://github.com/three-co1ors/SH_Hivibe', kind: 'hivibe'
  },
  {
    number: '02', tag: 'APP / DATA FLOW', title: 'Howsu',
    subtitle: '반려동물과 가족을 위한 공유 생활 관리 앱',
    description: '3인 팀에서 사용자 인증, 가족 공유 데이터, 일정·알림 시스템을 구현하고 최종 프로젝트 보고서 작성까지 담당한 Android 앱입니다.',
    stack: ['KOTLIN', 'JETPACK COMPOSE', 'FIRESTORE', 'CLOUD FUNCTIONS', 'FCM', 'GIT'],
    problem: '카카오·네이버 OAuth 토큰을 Firebase Auth에 직접 사용할 수 없어 사용자 인증을 통합하는 서버 측 처리가 필요했습니다.',
    solution: 'Cloud Functions에서 OAuth 토큰을 검증하고 Firebase Custom Token을 발급하도록 구현했습니다. 가족 변경에는 Firestore Batch를 적용했습니다.',
    results: ['Google·Kakao·Naver·이메일 로그인과 공유 일정 구현', 'Cloud Functions·FCM 기반 알림 연동', '최종 보고서 직접 작성 · 프로젝트 A+ 학점'],
    github: 'https://github.com/three-co1ors/SH_HOWSU', kind: 'howsu'
  },
  {
    number: '03', tag: 'GAME / DATA CONSISTENCY', title: '도망감자',
    subtitle: '왓더팜 · Unity 모바일 방치형 게임',
    description: '게임의 재미를 뒷받침하는 것은 저장 데이터의 일관성과 끊기지 않는 플레이 흐름이라고 생각합니다. 시스템 설계와 비동기 저장 문제를 해결했습니다.',
    stack: ['UNITY', 'C#', 'FIREBASE', 'ANDROID', 'SYSTEM DESIGN'],
    problem: 'Firebase 불러오기가 끝나기 전에 저장 함수가 실행되어 기존 퀘스트 진행도가 초기값으로 덮이는 문제가 발생했습니다.',
    solution: '비동기 실행 순서를 추적하고 로딩 완료를 확인하는 isLoaded guard를 적용해 데이터 덮어쓰기를 방지했습니다.',
    results: ['인벤토리·도감·상점 및 공통 시스템 구현', 'Firebase 비동기 세이브·로드 문제 해결', '동아리 프로젝트 대상 · 팀원 투표 MVP 선정'],
    github: 'https://github.com/three-co1ors/SH_Escapetato', kind: 'escapetato'
  },
  {
    number: '04', tag: 'GAME / RUNTIME SYSTEM', title: '산딸기 어린이집',
    subtitle: 'Unity 2D 공포 어드벤처 · 팀 프로젝트',
    description: '4인 팀에서 전체 Tilemap과 프롤로그부터 엔딩까지의 씬 구성, NPC 이벤트, 미니게임 및 플레이 흐름을 연결했습니다.',
    stack: ['UNITY', 'C#', 'TILEMAP', 'COROUTINE', 'GIT'],
    problem: '씬 전환·재진입 과정에서 조명 상태가 복원되지 않고, 벽 모서리에서 플레이어 이동이 막히는 문제가 발생했습니다.',
    solution: '씬 상태 플래그를 초기화하고 PlayerManager 이동 벡터를 수정해 sliding을 적용했습니다. 전환 효과의 Coroutine 실행 순서도 조정했습니다.',
    results: ['Day1~Day6 및 지하실 씬 구성 · NPC·퍼즐 통합', '플레이어 충돌과 씬 상태 오류 해결', '프로젝트 최우수상 · 팀원 투표 MVP 선정'],
    github: 'https://github.com/three-co1ors/SH_OhEng', kind: 'nursery'
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

function SystemsGraphic() {
  return <div className="hero-graphic" aria-label="서비스, API, 데이터베이스가 연결되는 서버 구조를 추상화한 그래픽">
    <div className="graphic-top"><span>FIG. 001 — SYSTEMS THINKING</span><span>ARCHITECTURE / LIVE</span></div>
    <svg className="system-map" viewBox="0 0 620 540" role="img" aria-label="클라이언트, 서버 API, 데이터베이스 간 데이터 흐름 그래픽">
      <defs>
        <linearGradient id="lineFade" x1="0" x2="1"><stop offset="0" stopColor="#ed352e" /><stop offset="1" stopColor="#ffe0d9" /></linearGradient>
        <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#606060" opacity=".34" /></pattern>
      </defs>
      <rect x="0" y="0" width="620" height="540" fill="url(#dots)" />
      <circle cx="310" cy="268" r="202" fill="none" stroke="#454545" strokeDasharray="2 12" />
      <circle cx="310" cy="268" r="137" fill="none" stroke="#383838" strokeDasharray="2 10" />
      <path d="M134 145 L310 268 L491 135 M310 268 L130 405 M310 268 L492 402" fill="none" stroke="#777" strokeWidth="1.3" strokeDasharray="5 8" />
      <path d="M134 145 L310 268 L491 135" fill="none" stroke="url(#lineFade)" strokeWidth="2" className="signal-line" />
      <path d="M130 405 L310 268 L492 402" fill="none" stroke="#ec392e" strokeWidth="1.5" opacity=".7" className="signal-line delay" />
      <circle cx="134" cy="145" r="8" fill="#f03a31" /><circle cx="491" cy="135" r="8" fill="#f03a31" />
      <circle cx="130" cy="405" r="8" fill="#f03a31" /><circle cx="492" cy="402" r="8" fill="#f03a31" />
      <rect x="203" y="207" width="215" height="122" rx="3" fill="#ef3830" stroke="#ef3830" />
      <text x="224" y="233" fill="#1a1515" fontSize="12" fontWeight="700" letterSpacing="2">CORE / 01</text>
      <text x="224" y="280" fill="#161616" fontSize="38" fontWeight="900" letterSpacing="-2">SERVER</text>
      <text x="225" y="302" fill="#191919" fontSize="11" letterSpacing="2">CONTROL · CONNECT · SCALE</text>
      <text x="82" y="126" fill="#d0d0d0" fontSize="11" letterSpacing="2">CLIENT</text>
      <text x="446" y="114" fill="#d0d0d0" fontSize="11" letterSpacing="2">API</text>
      <text x="74" y="432" fill="#d0d0d0" fontSize="11" letterSpacing="2">AUTH</text>
      <text x="467" y="429" fill="#d0d0d0" fontSize="11" letterSpacing="2">DATA</text>
      <path d="M28 32h34 M28 32v34 M592 32h-34 M592 32v34 M28 508h34 M28 508v-34 M592 508h-34 M592 508v-34" stroke="#848484" fill="none" />
      <text x="30" y="492" fill="#858585" fontSize="10" letterSpacing="2">ENGINEERED FOR CONTINUITY</text>
    </svg>
    <div className="graphic-bottom"><span><i className="pulse" /> SYSTEM ONLINE</span><span>01 / 04</span></div>
  </div>;
}


const galleryShots: Record<'hivibe' | 'howsu' | 'escapetato', { src: string; title: string }[]> = {
  hivibe: [
    { src: '/images/hivibe-home.webp', title: '서비스 메인 화면' },
    { src: '/images/hivibe-diagnosis.webp', title: 'AI 코드 진단 및 점수' },
    { src: '/images/hivibe-learning.webp', title: '빈칸 학습 · 힌트 기능' },
    { src: '/images/hivibe-mypage.webp', title: '마이페이지 · 티어 시스템' }
  ],
  howsu: [
    { src: '/images/howsu-login.webp', title: '로그인 · 소셜 인증' },
    { src: '/images/howsu-schedule.webp', title: '가족 일정 관리' },
    { src: '/images/howsu-todo.webp', title: '공유 Todo 관리' }
  ],
  escapetato: [
    { src: '/images/escapetato-farm.webp', title: '농장 플레이 화면' },
    { src: '/images/escapetato-login.webp', title: '게임 로그인 화면' }
  ]
};

function ScreenshotGallery({ kind }: { kind: 'hivibe' | 'howsu' | 'escapetato' }) {
  const shots = galleryShots[kind];
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const shot = shots[current];
  return <div className={'visual screenshot-gallery gallery-' + kind}>
    <div className="visual-chrome"><span>REAL PROJECT SCREENS / {kind === 'hivibe' ? 'HIVIBE' : kind === 'howsu' ? 'HOWSU' : 'DORMANGAMJA'}</span><span className="visual-light" /></div>
    <button type="button" className="gallery-stage" onClick={() => setExpanded(true)} aria-label={shot.title + ' 크게 보기'} title="클릭해 크게 보기">
      <img src={shot.src} alt={kind === 'hivibe' ? 'HiVibe ' + shot.title : kind === 'howsu' ? 'Howsu ' + shot.title : '도망감자 ' + shot.title} />
      <span className="gallery-enlarge">↗ 확대 보기</span>
    </button>
    <div className="gallery-bar"><span>{String(current + 1).padStart(2, '0')} / {String(shots.length).padStart(2, '0')}</span><strong>{shot.title}</strong><span>REAL SCREENSHOT</span></div>
    <div className="gallery-thumbnails" aria-label="프로젝트 화면 선택">
      {shots.map((item, i) => <button type="button" key={item.src} className={'gallery-thumb' + (current === i ? ' active' : '')} onClick={() => setCurrent(i)} aria-label={item.title + ' 이미지 보기'} aria-pressed={current === i}>
        <img src={item.src} alt="" /><span>{item.title}</span>
      </button>)}
    </div>
    {expanded && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={shot.title + ' 확대 이미지'} onClick={() => setExpanded(false)}>
      <div className="gallery-lightbox-inner" onClick={e => e.stopPropagation()}>
        <div className="lightbox-top"><span>{shot.title} · {current + 1}/{shots.length}</span><button type="button" onClick={() => setExpanded(false)} aria-label="확대 이미지 닫기">닫기 ✕</button></div>
        <img src={shot.src} alt={shot.title} />
        <div className="lightbox-pagination"><button type="button" onClick={() => setCurrent((current + shots.length - 1) % shots.length)}>← 이전</button><button type="button" onClick={() => setCurrent((current + 1) % shots.length)}>다음 →</button></div>
      </div>
    </div>}
  </div>;
}


const nurseryClips = [
  { src: '/videos/chase.mp4', poster: '/images/nursery-chase.webp', title: '추격전' },
  { src: '/videos/minigame.mp4', poster: '/images/nursery-minigame.webp', title: '퍼즐 미니게임' },
  { src: '/videos/clue.mp4', poster: '/images/nursery-clue.webp', title: '단서 확인' },
  { src: '/videos/basement.mp4', poster: '/images/nursery-basement.webp', title: '지하실' },
  { src: '/videos/bad-ending.mp4', poster: '/images/nursery-bad-ending.webp', title: '배드엔딩' },
  { src: '/videos/true-ending.mp4', poster: '/images/nursery-true-ending.webp', title: '진엔딩' }
];
function NurseryVideoGallery() {
  const [current, setCurrent] = useState(0);
  const clip = nurseryClips[current];
  return <div className="visual nursery-video-gallery">
    <div className="visual-chrome"><span>REAL GAMEPLAY / 산딸기 어린이집</span><span className="visual-light" /></div>
    <div className="nursery-video-main">
      <video key={clip.src} src={clip.src} poster={clip.poster} controls playsInline preload="metadata" aria-label={'산딸기 어린이집 ' + clip.title + ' 플레이 영상'}>브라우저가 비디오 재생을 지원하지 않습니다.</video>
    </div>
    <div className="gallery-bar"><span>{String(current + 1).padStart(2, '0')} / 06</span><strong>{clip.title}</strong><span>MP4 / GAMEPLAY</span></div>
    <div className="nursery-video-thumbs" aria-label="게임 플레이 영상 선택">
      {nurseryClips.map((item, i) => <button type="button" key={item.src} className={'nursery-video-thumb' + (current === i ? ' active' : '')} onClick={() => setCurrent(i)} aria-label={item.title + ' 영상 선택'} aria-pressed={current === i}>
        <img src={item.poster} alt="" /><span>▶ {item.title}</span>
      </button>)}
    </div>
    <div className="nursery-video-tip">썸네일을 선택하고 영상의 재생 버튼을 눌러 확인할 수 있습니다.</div>
  </div>;
}

function ProjectVisual({ kind }: { kind: Project['kind'] }) {
  if (kind === 'hivibe') return <ScreenshotGallery kind="hivibe" />;
  if (kind === 'howsu') return <ScreenshotGallery kind="howsu" />;
  if (kind === 'nursery') return <NurseryVideoGallery />;
  return <ScreenshotGallery kind="escapetato" />;
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'BACKEND' | 'APP' | 'GAME'>('ALL');
  const visibleProjects = projects.filter(p => activeFilter === 'ALL' || (activeFilter === 'BACKEND' && p.kind === 'hivibe') || (activeFilter === 'APP' && p.kind === 'howsu') || (activeFilter === 'GAME' && (p.kind === 'escapetato' || p.kind === 'nursery')));

  return <main id="top">
    <div className="utility-bar"><div className="wrap"><span>PORTFOLIO / 2026</span><span>BACKEND · SYSTEMS · GAME TECH</span></div></div>
    <nav className="navigation wrap" aria-label="메인 메뉴">
      <a href="#top" className="mark"><span className="mark-symbol">PS<span>.</span></span><span className="mark-text">PARK SEONGHA<br />SOFTWARE ENGINEER</span></a>
      <div className="nav-links"><a href="#projects">WORK</a><a href="#approach">APPROACH</a><a href="#experience">EXPERIENCE</a><a href="#contact">CONTACT</a></div>
      <a className="nav-git" href="https://github.com/three-co1ors" target="_blank" rel="noopener noreferrer">GITHUB <Arrow diagonal /></a>
      <details className="mobile-nav"><summary aria-label="메뉴 열기">MENU <span>☰</span></summary><div><a href="#projects">WORK</a><a href="#approach">APPROACH</a><a href="#experience">EXPERIENCE</a><a href="#contact">CONTACT</a><a href="https://github.com/three-co1ors" target="_blank" rel="noopener noreferrer">GITHUB ↗</a></div></details>
    </nav>

    <section className="hero">
      <div className="wrap hero-wrap">
        <div className="hero-eyebrow"><span className="eyebrow-line" /><span>ENGINEERING PORTFOLIO</span><span className="hero-counter">[ 01 / 05 ]</span></div>
        <div className="hero-main"><div className="hero-type"><div className="hero-deco">PARK SEONGHA / PERSONAL PORTFOLIO</div><h1 className="hero-name">박성하<span>.</span></h1><div className="hero-summary"><span>SERVER / BACKEND DEVELOPER</span><p>할 수 없는 이유보다<br />해낼 수 있는 방법을 먼저 찾습니다.</p><a href="#projects" className="round-cta" aria-label="프로젝트 보러 가기"><Arrow diagonal /></a></div></div></div>
        <div className="hero-bottom"><span>01 — SELECTED ENGINEERING WORKS</span><span>SCROLL TO EXPLORE ↓</span><span>SEOUL, KR / AVAILABLE 2027</span></div>
      </div>
    </section>

    <section className="intro-dark"><div className="wrap intro-grid"><div><p className="eyebrow dark-eyebrow">WHO I AM <span>— 001</span></p><h2>하고 싶은 일이 생기면<br /><span>일단 하자!</span></h2><p className="intro-desc">머리 아픈 문제를 오래 붙잡고 고민하는 시간을 좋아합니다. 낯선 길 앞에서도 해낼 방법을 찾고, 떠오른 아이디어를 직접 동작하는 결과물로 완성합니다. 새로운 도전을 즐기는 개발자 박성하입니다.</p><div className="intro-tags"><span>SPRING BOOT</span><span>DATA MODELING</span><span>REST API</span><span>SYSTEM DEBUGGING</span></div></div><SystemsGraphic /></div></section>

    <section className="projects-section" id="projects"><div className="wrap"><div className="section-head"><div><p className="eyebrow">SELECTED WORKS <span>— 002</span></p><h2>PROJECT<span>S.</span></h2></div><p>어떤 기술을 썼는지보다<br />문제를 어떻게 해결했는지</p></div><div className="project-filters" aria-label="프로젝트 필터">{(['ALL', 'BACKEND', 'APP', 'GAME'] as const).map(f => <button type="button" onClick={() => setActiveFilter(f)} key={f} className={f === activeFilter ? 'selected' : ''} aria-pressed={f === activeFilter}>{f}<span>{f === 'ALL' ? '04' : f === 'GAME' ? '02' : '01'}</span></button>)}</div>
      <div className="project-list">{visibleProjects.map(p => <article key={p.number} className="project-card"><div className="project-topline"><span>PROJECT / {p.number}</span><span>{p.tag}</span><span>2025 — 2026</span></div><div className="project-layout"><div className="project-copy"><h3>{p.title}<span>.</span></h3><p className="project-subtitle">{p.subtitle}</p><p className="project-description">{p.description}</p><div className="project-stack">{p.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={p.github} target="_blank" rel="noopener noreferrer">VIEW SOURCE <Arrow diagonal /></a></div></div><ProjectVisual kind={p.kind} /></div>{p.kind === 'hivibe' && <div className="brand-story"><span className="brand-story-label">NAMING STORY / WHY HIVIBE?</span><p><strong>High your Vibe</strong> — AI 시대에 더 높은 완성도의 바이브 코딩을 지향한다는 뜻과, 학습자의 곁에서 힘을 북돋아 주는 <strong>Hi-Five</strong> 같은 코딩 메이트가 되겠다는 마음을 이름에 담았습니다.</p></div>}{p.kind === 'hivibe' && <div className="offline-note"><span>DEMO STATUS</span><p>HiVibe 실서비스 시연은 현재 중단되어 있습니다. 구현 코드와 기술 설명은 GitHub에서 확인할 수 있습니다. 실제 서비스 화면은 오른쪽 갤러리에서 확인할 수 있습니다.</p></div>}<div className="project-insight"><div className="insight-label">PROBLEM → SOLUTION</div><div><span className="mini-label">01 / CHALLENGE</span><p>{p.problem}</p></div><div><span className="mini-label">02 / APPROACH</span><p>{p.solution}</p></div></div><div className="project-results"><span>IMPLEMENTED</span><ul>{p.results.map(x => <li key={x}>{x}</li>)}</ul></div></article>)}</div>
    </div></section>

    <section className="approach-section" id="approach"><div className="wrap"><div className="section-head inverted"><div><p className="eyebrow">HOW I WORK <span>— 003</span></p><h2>DESIGN FOR<br /><span>WHAT'S NEXT.</span></h2></div><p>기술은 목적이 아니라<br />문제를 해결하는 수단입니다.</p></div><div className="approach-grid"><div className="approach-card"><span className="ap-number">01 / TRACE</span><div className="ap-icon">⌁</div><h3>흐름을 끝까지 추적</h3><p>현상에 머무르지 않고 이벤트 순서와 데이터 상태를 따라가 문제의 실제 원인을 찾습니다.</p><span className="ap-foot">ASYNC / DEBUGGING</span></div><div className="approach-card"><span className="ap-number">02 / STRUCTURE</span><div className="ap-icon">⌘</div><h3>구조로 복잡성을 관리</h3><p>기능별 API와 데이터 모델의 책임을 나누고, 예상 밖의 입력에도 대응하는 구조를 고민합니다.</p><span className="ap-foot">REST API / DATA MODEL</span></div><div className="approach-card"><span className="ap-number">03 / DELIVER</span><div className="ap-icon">↗</div><h3>실제 서비스까지 연결</h3><p>구현에서 끝내지 않고 Docker, 서버 환경, 배포와 운영 단계까지 직접 경험합니다.</p><span className="ap-foot">DOCKER / AWS / DEPLOYMENT</span></div></div></div></section>

    <section className="experience-section" id="experience"><div className="wrap"><div className="section-head"><div><p className="eyebrow">BACKGROUND <span>— 004</span></p><h2>BEYOND<br />THE CODE<span>.</span></h2></div><p><br />다양한 경험들</p></div><div className="experience-content"><div className="timeline"><div className="timeline-row"><span>EDUCATION</span><div><h3>Sookmyung Women's University</h3><p>컴퓨터과학 전공 · 2027년 2월 졸업 예정</p></div><b>2027.02</b></div><div className="timeline-row"><span>SECURITY</span><div><h3>SISS</h3><p>Linux · 웹/시스템 해킹 · 리버싱 기초 학습 · 시스템 학술부장/운영진 · CTF 문제 출제 2회</p></div><b>2 YEARS</b></div><div className="timeline-row"><span>COLLABORATION</span><div><h3>두을장학재단 · SOLUX</h3><p>두을장학재단 장학생 및 부기장 활동 · 팀 프로젝트에서 문서화와 시스템 통합 경험</p></div><b>CO-OP</b></div><div className="timeline-row"><span>FOUNDATION</span><div><h3>Computer Science</h3><p>운영체제 · 자료구조 · 네트워크 · 데이터베이스 · 시스템 프로그래밍</p></div><b>CORE CS</b></div></div><aside className="skills-box"><p className="skills-eyebrow">CURRENT TOOLKIT</p><h3>TOOLS &<br />TECH STACK.</h3><div className="skill-group"><span>BACKEND & DATA</span><p>Java · Spring Boot · MySQL · REST API · Firebase</p></div><div className="skill-group"><span>INFRA & SYSTEM</span><p>Docker · AWS EC2 / RDS · Nginx · Linux · Git</p></div><div className="skill-group"><span>APPLICATION & GAME</span><p>Kotlin · Jetpack Compose · C# · Unity · Python</p></div><p className="skills-note">ADsP 취득 · 프로젝트에서 실제 사용한 기술을 중심으로 정리했습니다.</p></aside></div></div></section>

    <section className="contact-section" id="contact"><div className="wrap"><p className="eyebrow">LET'S CONNECT <span>— 005</span></p><div className="contact-layout"><h2>BUILD WHAT<br /><em>COMES NEXT.</em></h2><div><p>끊임없이 배우고, 고민하는<br />개발자가 되겠습니다.</p><a className="contact-button" href="https://github.com/three-co1ors" target="_blank" rel="noopener noreferrer">EXPLORE MY GITHUB <Arrow diagonal /></a></div></div><div className="footer"><span>© 2026 PARK SEONGHA</span><span>BACKEND · SYSTEMS ENGINEERING</span><a href="#top">BACK TO TOP ↑</a></div></div></section>
  </main>;
}
