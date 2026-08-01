# Project Plan

`still-building`은 콘텐츠를 많이 쌓는 사이트가 아니라, 프로젝트·개인 아카이브·시각적 실험이 서로 다른 역할을 가지는 하나의 완성도 높은 웹사이트를 목표로 한다.

## 목표와 역할

- `Projects`: 대표 작업과 프로젝트 상세를 보여준다.
- `Archive`: 프로젝트 밖의 사진, 여행, 공연, 음악, 일상을 보관한다.
- `Lab`: CSS, motion, canvas, SVG, typography 등의 실험 결과를 전시한다.
- `About`: 사이트를 만든 사람과 작업 방식, 사이트의 목적을 설명한다.
- `Colophon`: 사이트의 폰트, 색상, 기술 스택, 배포, 디자인 레퍼런스를 기록한다.
- Velog는 글과 학습 기록, GitHub는 소스와 구현 기록을 담당한다. 사이트 안에서 이 역할을 중복하지 않는다.

## IA와 라우팅

| 영역 | 라우트 | 페이지 역할 | 현재 상태 |
| --- | --- | --- | --- |
| Home | `/` | 사이트의 인상과 네 가지 핵심 영역으로 진입하는 홈 | 구현 완료 |
| Projects | `/projects` | 대표 프로젝트 목록과 관련 정보 | 구현 완료 |
| Project detail | `/projects/[slug]` | 프로젝트 상세, 메타데이터, 결과, 관련 링크 | 구현 완료 |
| Archive | `/archive` | envelope 안의 postcard 다섯 장으로 카테고리 탐색 | 기반 구현 완료 |
| Archive detail | `/archive/[slug]` | 카테고리 성격에 맞는 gallery, filmstrip, tickets, playlist, field-notes | 기반 구현 완료 |
| Lab | `/lab` | 시각적 실험을 전시할 확장 영역 | 헤더·설명만 구현 |
| About | `/about` | 자기소개, 작업 방식, 사이트의 목적 | 헤더만 구현 |
| Colophon | `/colophon` | 사이트 자체를 설명하는 정보 페이지 | 헤더만 구현 |
| Not found | `/_not-found` | 존재하지 않는 주소와 삭제된 페이지 안내 | 구현 완료 |

### 전역 영역

- Navbar: `Projects / Archive / Lab / About`
- Footer: `GitHub / Velog / Colophon`
- GitHub와 Velog는 외부 링크, Colophon은 내부 라우트다.
- Notes, Now, Uses, Resume, About this site는 현재 IA에서 제거했다.

## 현재 구현 상태

### 구현 완료 또는 기반이 준비된 영역

- Home hero, 메뉴 카드, 기존 디자인 시스템 적용
- Projects 목록의 가로 갤러리와 모바일 세로 전환
- Project detail의 slug 라우트, 상세 콘텐츠, 이전/다음 탐색, not-found 처리
- Archive 카테고리 데이터와 동적 상세 라우트
- Archive envelope/postcard의 각도·위치·겹침·hover/focus 인터랙션
- Archive 상세 표현 타입: `gallery`, `filmstrip`, `tickets`, `playlist`, `field-notes`
- 공통 Navbar, Footer, Container, PageHeader, SectionTitle, Divider
- 삭제된 `/notes`, `/now`, `/uses`, `/resume` 파일과 내부 링크 정리

### 미완성 정보 페이지

- About은 `PageHeader`만 있는 상태다. 이후 자기소개, frontend practice, 협업·연락 맥락을 추가한다.
- Colophon은 `PageHeader`만 있는 상태다. 이후 fonts, color system, stack, deployment, design references를 추가한다.
- Lab은 `PageHeader`와 `type-body` 설명문만 있는 상태다. 구체적인 실험 구현은 가장 후순위로 진행한다.

## 작업 순서

### 0. 구조와 공통 기반 — 완료

- [x] App Router 기준 전체 페이지 구조 정리
- [x] Navbar를 `Projects / Archive / Lab / About`으로 변경
- [x] Footer를 `GitHub / Velog / Colophon`으로 변경
- [x] Notes, Now, Uses, Resume 페이지와 링크 제거
- [x] 공통 색상·타이포그래피·간격 토큰 유지
- [x] 404 페이지와 삭제된 주소의 fallback 확인

### 1. Projects — 구현 완료, 품질 검수 남음

- [x] 프로젝트 목록과 카드 갤러리 구현
- [x] 프로젝트 상세 동적 라우트 구현
- [x] 관련 링크, 메타데이터, 이전/다음 탐색 연결
- [x] 실제 프로젝트 이미지·본문 최종 검수
- [x] 320/639/640px 경계와 터치 환경 QA

### 2. Archive — 기반 구현 완료, 콘텐츠 확장 단계

- [x] 다섯 개 카테고리와 공통/개별 콘텐츠 데이터 구조 정의
- [x] envelope와 겹쳐진 postcard 메인 화면 구현
- [x] postcard hover, focus, reduced-motion 처리
- [x] `/archive/[slug]` 동적 라우트 구현
- [x] 카테고리별 표현 컴포넌트 구조 구현
- [ ] 실제 사진·기록·음악·티켓 콘텐츠 추가
- [ ] 실제 이미지 비율과 콘텐츠 밀도에 맞춘 상세 화면 조정
- [ ] 모바일·터치·키보드 실기기 QA

### 3. About — 다음 구현 대상

- [ ] 자기소개와 브랜드 소개 콘텐츠 확정
- [ ] 작업 방식, frontend practice, 협업 가능 범위 작성
- [ ] 텍스트 중심 레이아웃과 필요한 이미지 방향 결정
- [ ] 헤더 아래에 자기소개와 브랜드 소개 섹션 추가
- [ ] 모바일·접근성·metadata QA

### 4. Colophon — About 이후 구현

- [ ] 실제 사용 폰트와 typography token 문서화
- [ ] color system과 주요 UI 규칙 정리
- [ ] stack, deployment, design references 확정
- [ ] 헤더 아래에 폰트·색상·스택·배포·레퍼런스 목록 추가
- [ ] 정보가 늘어나도 읽기 쉬운 목록·표현 방식 검수

### 5. Lab — 가장 후순위

- [ ] 첫 실험의 범위와 구현 방식 결정
- [ ] 실험 데이터 모델과 독립적인 렌더링 구조 설계
- [ ] 첫 CSS 또는 Motion 실험 구현
- [ ] Canvas, SVG, Three.js 실험을 추가할 수 있는 확장 규칙 마련
- [ ] 실험별 컨트롤, 상태, 키보드 접근성, reduced-motion 기준 마련

Lab은 구현하고 싶은 실험이 생겼을 때 자유롭게 확장할 수 있도록 고정된 콘텐츠 형식을 먼저 만들지 않는다.

### 6. 출시 전 통합 QA

- [ ] 모든 내부 링크와 삭제된 라우트 재검수
- [ ] Navbar/Footer의 desktop·mobile 상태 검수
- [ ] 전체 페이지의 spacing, typography, color token 일관성 검수
- [ ] hover, focus-visible, touch, reduced-motion 검수
- [ ] SEO metadata와 Open Graph 이미지 추가
- [ ] favicon, 배포 환경, 커스텀 도메인 정리

## 데이터와 폴더 구조

- `data/projects.ts`: 프로젝트 목록과 상세 콘텐츠
- `data/archive.ts`: Archive 카테고리, 공통 메타데이터, `kind`별 콘텐츠
- `components/projects/`: 프로젝트 목록과 상세용 컴포넌트
- `components/archive/`: envelope, postcard, Archive 상세 표현 컴포넌트
- `app/globals.css`: 디자인 토큰, 전역 타입, 페이지별 최소 레이아웃 스타일

새 콘텐츠는 페이지 컴포넌트에 반복해서 작성하지 않고 데이터와 표현 컴포넌트를 확장한다.
