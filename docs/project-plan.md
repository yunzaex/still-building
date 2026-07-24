# Project Plan

## 목적

이 문서는 `still-building` 프로젝트의 현재 코드 기준선과 다음 작업 순서를 정리하는 살아 있는 로드맵이다.

- 무엇이 구현되어 있는지
- 어떤 페이지와 기능이 아직 placeholder인지
- 다음 작업을 어떤 순서로 확장할지

앞으로의 디자인과 개발 작업은 이 문서를 기준으로 맞춘다.

## 현재 기준선

기준일: `2026-07-24`

- Stack: `Next.js 16.2.6`, `React 19.2.4`, `Tailwind CSS 4`
- Router: `app/` 라우터
- 전역 레이아웃: `app/layout.tsx`에서 `Navbar`와 `Footer` 적용
- 글로벌 스타일과 타이포그래피 토큰: `app/globals.css`
- 폰트 설정: `app/fonts.ts`
- 사이트 설정: `config/site.ts`
- 현재 라우트: `/`, `/projects`, `/notes`, `/archive`, `/now`, `/about`
- 푸터 연결 라우트: `/about`은 placeholder 페이지가 있고, `/colophon`과 `/uses`는 아직 없다.
- 프로젝트 데이터: `data/projects.ts`에 `STILL BUILDING`, `WEARTRACK` 두 항목이 정의되어 있다.
- 프로젝트 목록 UI: `components/projects/ProjectGallery.tsx`, `ProjectCard.tsx`, `ProjectGallery.module.css` 기반의 가로 갤러리다.
- 프로젝트 상세 라우트: 아직 없으며, 현재 프로젝트 카드에도 실제 상세 페이지 `href`가 연결되어 있지 않다.

## 현재 상태 요약

| 범위 | 상태 | 현재 구현 |
| --- | --- | --- |
| Home (`/`) | 1차 구현 완료·QA 중 | `Still Building` hero, 실제 hero 이미지, 4개 메뉴 카드, 반응형 레이아웃 |
| Projects (`/projects`) | 1차 구현 완료·상세 페이지 미구현 | `PageHeader`와 프로젝트 갤러리, 데스크톱 가로 스크롤, 모바일 세로 스택, 이미지·연도·설명·역할·태그 패널 |
| Project detail (`/projects/[slug]`) | 미구현 | slug 기반 라우트, 상세 콘텐츠, 이전/다음 이동, 목록 카드 연결이 필요하다. |
| Notes (`/notes`) | placeholder | 페이지 헤더와 “Notes Archive” 안내만 있다. |
| Now (`/now`) | placeholder | 페이지 헤더와 현재 집중 영역 안내만 있다. |
| Archive (`/archive`) | placeholder | 제목만 있으며 콘텐츠 모델과 상세 디자인이 정해지지 않았다. |
| About (`/about`) | placeholder | 페이지 헤더만 있다. |
| Colophon (`/colophon`) | 미구현 | 푸터 링크만 존재한다. |
| Uses (`/uses`) | 미구현 | 푸터 링크만 존재한다. |
| Footer | 기본 구현 완료 | About, Email, GitHub, Colophon, Uses 링크를 제공한다. 연결 대상 라우트 정리가 남아 있다. |
| 404 | 미구현 | 커스텀 not-found 화면이 필요하다. |

## 우선순위 로드맵

### 1. 공통 기반과 품질 정리

- [x] 전역 `Navbar`, `Footer`, `Container` 구성
- [x] Home 실제 이미지 적용
- [x] Home 1차 반응형 레이아웃 적용
- [x] `type-*` 타이포그래피 토큰 정리
- [x] `PageHeader`, `SectionTitle`, `Divider` 기반 서브 페이지 구조 적용
- [x] 프로젝트 카드·갤러리 1차 UI 구현
- [ ] Home 반응형 세부 QA
- [ ] 프로젝트 갤러리의 hover / focus / keyboard / reduced-motion 상태 QA
- [ ] 공통 spacing, responsive breakpoint, 상태 스타일을 문서화
- [ ] 커스텀 404 페이지
- [ ] `app/layout.tsx`의 starter metadata를 사이트 정보에 맞게 갱신

### 2. Projects 목록과 프로젝트 상세 페이지

프로젝트 목록은 이미 1차 갤러리로 구현되어 있으므로, 다음 단계는 각 프로젝트를 실제로 읽을 수 있는 상세 경험을 연결하는 것이다.

- [x] `/projects` 페이지의 프로젝트 갤러리 구현
- [ ] 프로젝트 데이터에 `slug`와 상세 콘텐츠 필드 추가
- [ ] `/projects/[slug]` 동적 라우트 구현
- [ ] 상세 페이지 구성: hero 이미지, 제목, 연도, 카테고리, 역할, 태그, 설명, 외부 링크
- [ ] 프로젝트 목록 카드의 `href`와 “View project” CTA를 상세 라우트에 연결
- [ ] 상세 페이지의 이전/다음 프로젝트 이동 및 `/projects` 복귀 링크 추가
- [ ] 존재하지 않는 slug의 not-found 처리
- [ ] 상세 페이지 반응형·접근성·이미지 최적화 QA

### 3. Notes와 Now 구현

- [ ] `/notes` 목록 구현: 카테고리/태그, 글 목록, 작성일, 읽기 시간, 페이지네이션 또는 더보기 CTA
- [ ] `/now` 구현: 현재 집중 영역, 체크리스트, 월별 기록, Archive 연결
- [ ] Notes와 Now에 프로젝트 갤러리에서 검증한 공통 헤더·구분선·메타 패턴 확장

### 4. Information 페이지와 Footer 연결 정리

- [ ] `/about` 구현: Purpose / Approach / Philosophy / 이미지
- [ ] `/colophon` 라우트와 페이지 구현: 사이트, 작성자, 디자인·코드, 폰트, 배포 정보
- [ ] `/uses` 라우트와 페이지 구현: Development / Design / Writing / Assets 도구 목록
- [ ] Footer의 모든 링크가 실제 라우트로 연결되도록 정리

### 5. Archive 방향과 구현

- [ ] `/archive`의 콘텐츠 유형과 상세 디자인 방향 확정
- [ ] `/archive` 페이지 구축
- [ ] 사진·여행·공연·일상 등 Archive 콘텐츠 모델 정의
- [ ] 필요할 경우 Archive 상세 페이지 라우트 추가

### 6. 콘텐츠와 콘텐츠 워크플로

- [ ] STILL BUILDING과 WEARTRACK 프로젝트 상세 콘텐츠 작성
- [ ] Notes 글 작성
- [ ] Archive 콘텐츠 추가
- [ ] About 및 Now의 실제 콘텐츠 작성
- [ ] MDX 기반 Notes 시스템 도입
- [ ] MDX 기반 Project detail 시스템 도입
- [ ] 자동 목차와 코드 하이라이팅

### 7. 탐색·유틸리티 기능

- [ ] 태그 필터
- [ ] 검색 기능
- [ ] Random Archive
- [ ] 사이트맵 페이지
- [ ] 방명록 (`Supabase` CRUD)
- [ ] Mood Stamp
- [ ] 방문자 통계

### 8. 출시 준비

- [ ] SEO metadata 설정
- [ ] Open Graph 이미지
- [ ] favicon 제작 또는 정리
- [ ] `Vercel` 배포
- [ ] Google Analytics 적용 여부 결정 및 적용
- [ ] 커스텀 도메인 연결

### 9. 이후 확장

- [ ] Guestbook 디자인 개선
- [ ] 연도별 Archive
- [ ] Reading List
- [ ] Learning Progress
- [ ] Tech Stack 페이지
- [ ] Changelog 페이지
- [ ] Uses 페이지 고도화
- [ ] Inspirations 페이지
- [ ] Photography 페이지
- [ ] Bookmarks 페이지

## 운영 원칙

- 전체 무드는 `editorial`, `calm`, `archive-like` 방향을 유지한다.
- 새 화면은 가능한 한 CSS 토큰과 공용 컴포넌트를 먼저 재사용한다.
- 상세 라우트가 연결된 프로젝트는 실제 링크 CTA로 제공하고, 그 전에는 정보 패널로만 표시한다.
- `/projects`의 상세 페이지는 목록 갤러리와 동일한 타이포그래피·색상·여백 체계를 공유한다.
- `/archive`는 다른 페이지보다 감성적이고 아날로그한 실험을 허용하는 공간으로 둔다.

## 참고 문서와 파일

- `docs/design-system.md`
- `app/layout.tsx`
- `app/page.tsx`
- `app/projects/page.tsx`
- `app/globals.css`
- `data/projects.ts`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/PageHeader.tsx`
- `components/SectionTitle.tsx`
- `components/projects/ProjectGallery.tsx`
- `components/projects/ProjectCard.tsx`
