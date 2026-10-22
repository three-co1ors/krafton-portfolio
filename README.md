# Park Seongha — Backend & Systems Engineering Portfolio

크래프톤 Tech 인턴십 지원을 위해 구성한 **개인 포트폴리오** Next.js 사이트입니다. 크래프톤 공식 사이트가 아니며, 기업 로고·이미지·폰트를 복제하지 않고 브랜드의 **레드 / 블랙 컬러, 타이포그래피의 강한 대비, 간결한 편집형 레이아웃**에서 방향성만 참고했습니다.

## 시작

Node.js 20.9 이상 권장.

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 여세요.

## Vercel 배포

GitHub에 이 폴더를 새 저장소로 푸시한 다음 Vercel의 **Add New → Project**에서 해당 저장소를 선택하세요. Framework Preset은 Next.js, Build Command는 `npm run build`입니다.

## 수정 포인트

- 이름·메인 문구: `app/page.tsx`의 hero 섹션
- 프로젝트 내용: `app/page.tsx` 상단 `projects` 데이터
- 기술·경험: `experience-section`과 `skills-box`
- 디자인: `app/globals.css`의 `:root` 색상 변수
- 메타데이터: `app/layout.tsx`
- 링크: 소스에 있는 GitHub / 배포 URL을 제출 전에 반드시 실제로 클릭해 확인하세요.

## 제출 전 사실 확인

- HiVibe에서 직접 구현한 API·분석 파싱·배포 역할이 현행 원고와 일치하는지 확인
- Howsu와 Escapetato의 코드 공개 범위 및 저장소 접근 가능 여부 확인
- `https://hivibe.cloud` 서비스 운영 여부 확인
- 기술 스택에 있는 AWS RDS, Spring Security 등의 본인 기여 범위 최종 검토
- 본 페이지에는 임의의 사용자 수·성능 수치·수상 실적을 적지 않았습니다.

**지원 마감 주의:** 확인한 2027 크래프톤 채용연계형 인턴십 공지는 **2026-10-23 11:59 KST** 마감입니다. 10월 26일이 아닙니다. 지원 전 반드시 공식 채용 페이지를 다시 확인하세요.

## 참고

폰트는 웹 연결 시 Google Fonts를 불러오고, 연결이 없을 때 시스템 폰트로 대체합니다. 제작된 추상 그래픽·목업은 실제 제품 스크린샷이 아닙니다. 실제 화면으로 교체할 수 있습니다.


## 2026-10-22 지원서 반영 업데이트
- 프로젝트 4개: HiVibe, Howsu, 도망감자(왓더팜), 산딸기 어린이집
- HiVibe: Gemini 응답 구조화 및 API/배포, 졸업 발표 평가
- Howsu: OAuth 커스텀 토큰, Cloud Functions/FCM, 최종 보고서와 A+
- 게임 2종: 팀원 투표 MVP/프로젝트 수상, 데이터/씬 상태 문제 해결
- 미리보기는 `standalone-preview.html`을 열면 됩니다.
- 상단 그래픽과 프로젝트 도식은 개념도입니다. 실제 캡처 및 기여도 최종 확인 후 제출하세요.


## V4: 실제 프로젝트 화면 (2026-10-22)

- `public/images/howsu-login.webp` — Howsu 로그인 / 소셜 인증 화면
- `public/images/howsu-schedule.webp` — Howsu 일정 상세/수정 화면
- `public/images/howsu-todo.webp` — Howsu Todo 화면
- `public/images/escapetato-farm.webp` — 도망감자 농장 메인 화면
- `public/images/escapetato-login.webp` — 도망감자 로그인 화면

프로젝트 이미지 갤러리는 `app/page.tsx` 상단의 `galleryShots` 배열에서 수정할 수 있습니다.
클릭하면 원본 비율로 크게 볼 수 있습니다.

HiVibe는 AWS 계정 중단으로 데모 링크를 임시로 제거했습니다. 실제 스크린샷이 준비되면 `public/images/`에 이미지 파일을 넣고 `ProjectVisual`의 HiVibe 분기에 실제 화면을 추가하세요.
산딸기 어린이집은 현재 콘셉트 그래픽이며 실제 플레이 캡처가 준비되면 동일한 방식으로 교체할 수 있습니다.
`standalone-preview.html`은 스크린샷이 자체 포함되어 있어 단일 파일로 오프라인 미리보기가 가능합니다.


## V5: HiVibe + 산딸기 어린이집 실물 자료 (2026-10-22)

HiVibe 실제 서비스 스크린샷 4장을 추가했습니다.
- `/images/hivibe-home.webp`: 홈
- `/images/hivibe-diagnosis.webp`: 코드 진단
- `/images/hivibe-learning.webp`: 학습 및 힌트
- `/images/hivibe-mypage.webp`: 마이페이지

산딸기 어린이집 MP4 시연 영상 6개는 `public/videos/`에 있으며 포스터는 `public/images/nursery-*.webp` 입니다.
- chase.mp4: 추격전
- minigame.mp4: 퍼즐 미니게임
- clue.mp4: 단서 확인
- basement.mp4: 지하실
- bad-ending.mp4: 배드엔딩
- true-ending.mp4: 진엔딩

Next.js 소스는 `app/page.tsx`에 있는 `galleryShots`, `nurseryClips` 배열에서 경로 및 표시명을 수정할 수 있습니다.
외부 클라우드 라이브 데모는 중단된 상태이며 GitHub와 실제 화면 자료를 대신 제공하고 있습니다.
standalone-preview.html에는 이미지와 영상이 base64로 내장되어, 별도 서버 없이도 프로젝트 자료를 볼 수 있습니다.
