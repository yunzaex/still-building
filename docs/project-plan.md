# Project Plan

## 목적

이 문서는 `still-building` 프로젝트의 현재 기준선과 다음 작업 순서를 정리하는 살아 있는 로드맵이다.

- 무엇이 이미 확정되었는지
- 지금 어디까지 구현되었는지
- 다음에 어떤 순서로 확장할지

앞으로의 디자인과 개발 작업은 이 문서를 우선 기준으로 맞춘다.

## 판단

이 문서는 기존 `docs/project-plan.md`를 현재 프로젝트 상태에 맞게 갱신한 버전이다.
현재 기준 커밋은 `fb6d83e`이며, 최근에는 Home 반응형 1차 적용과 Footer 정보·링크 정리가 반영되었다.

2026-07-21 제공된 시안을 페이지별 상세 디자인 기준으로 추가한다. 시안이 확정된 페이지는 `Projects`, `Notes`, `Now`, `About`, `Colophon`, `Uses`이며, `Archive`는 아직 별도의 상세 시안이 없다.

## 현재 기준선

- Stack: `Next.js 16.2.6`, `React 19.2.4`, `Tailwind CSS 4`
- Router: `app/` 라우터
- 공통 레이아웃: `app/layout.tsx`에서 `Navbar`와 `Footer`를 전역 적용
- 디자인 기준 문서: `docs/design-system.md`
- 현재 기준 페이지: `app/page.tsx`
- 글로벌 스타일과 토큰: `app/globals.css`
- 폰트 설정: `app/fonts.ts`
- 공용 컴포넌트: `components/Navbar.tsx`, `components/Footer.tsx`, `components/Container.tsx`, `components/PageHeader.tsx`, `components/SectionTitle.tsx`, `components/Divider.tsx`, `components/MenuCard.tsx`, `components/Button.tsx`
- 현재 구현된 주요 라우트: `/`, `/projects`, `/notes`, `/archive`, `/now`
- 콘텐츠가 구현되지 않은 푸터 링크: `/about`, `/colophon`, `/uses` (`/about`은 빈 `page.tsx` 파일만 존재)
- 상세 디자인 시안이 확정된 페이지: `/projects`, `/notes`, `/now`, `/about`, `/colophon`, `/uses`
- 상세 디자인 시안이 아직 없는 페이지: `/archive`

## 현재 상태 요약

| 범위 | 상태 | 메모 |
| --- | --- | --- |
| Home (`/`) | 진행 중 | 기본 레이아웃, hero 이미지, 1차 반응형이 적용됐고 세부 QA가 남아 있다. |
| Projects (`/projects`) | 시안 확정·구현 전 | 2단 hero, 카테고리 필터, 프로젝트 리스트, 페이지네이션 CTA 구조를 구현해야 한다. |
| Notes (`/notes`) | 시안 확정·구현 전 | 2단 hero, 카테고리 필터, 글 목록, 읽기 시간, 페이지네이션 CTA 구조를 구현해야 한다. |
| Now (`/now`) | 시안 확정·구현 전 | 월간 캘린더, 오늘의 체크리스트, 이번 달 기록, 아카이브 CTA 구조를 구현해야 한다. |
| Archive (`/archive`) | 시안 미정·placeholder | 현재는 제목만 있는 상태이며, 상세 디자인 방향을 먼저 확정해야 한다. |
| Footer | 기본 구성 완료·시안 반영 중 | 어두운 브라운 배경의 4열 정보 영역과 링크 구조를 시안 기준으로 정리한다. |
| About (`/about`) | 시안 확정·미구현 | Purpose, Approach, Philosophy와 이미지 영역을 구현해야 한다. 현재는 빈 `page.tsx`만 있다. |
| Colophon (`/colophon`) | 시안 확정·미구현 | 사이트·작성자·디자인/코드·폰트·배포 정보와 이미지를 구현해야 한다. |
| Uses (`/uses`) | 시안 확정·미구현 | Development, Design, Writing, Assets, 기타 도구를 그룹형 목록으로 구현해야 한다. |
| 404 | 미구현 | 커스텀 404 페이지가 필요하다. |

## 우선순위 로드맵

### 1. Shared page system

- [ ] 시안 공통 구조 정의: global navigation / 2단 hero / divider / content area / dark footer
- [ ] 서브 페이지의 반응형 기준 확정: desktop 2단 구성, mobile 단일 열 전환
- [ ] 카테고리 필터 바와 정렬 컨트롤 패턴 정의
- [ ] 프로젝트·노트 목록 행과 메타데이터 패턴 정의
- [ ] 월간 캘린더와 체크리스트 패턴 정의
- [ ] `Label`, `ImageFrame` 등 시안에 필요한 공용 컴포넌트 추가
- [ ] hover / focus / accessibility 상태 정리
- [ ] 디자인 토큰 정리: spacing / type scale / line / surface
- [x] Home 실제 이미지 적용
- [ ] Home 반응형 세부 조정
- [x] Footer 기본 정보 및 링크 구성
- [ ] Footer 시안 스타일 반영 및 반응형 정리
- [ ] 커스텀 404 페이지

공통 시스템을 먼저 확정하되, 전체 Foundation polish를 끝낼 때까지 페이지 구현을 멈추지는 않는다. 시안의 공통 패턴을 `Projects` 구현에 먼저 적용하고, 그 결과를 `Notes`, `Now`, 정보 페이지에 확장한다.

### 2. Primary page implementation

- [ ] `/projects` 시안 구현: hero / filter bar / project rows / count / CTA
- [ ] `/notes` 시안 구현: hero / filter bar / note rows / read time / count / CTA
- [ ] `/now` 시안 구현: calendar / today checklist / monthly note / archive CTA

### 3. Information page implementation

- [ ] `/about` 시안 구현: Purpose / Approach / Philosophy / image
- [ ] `/colophon` 시안 구현: site metadata / design & code / font / deploy / image
- [ ] `/uses` 시안 구현: grouped tools list / last updated
- [ ] 푸터 링크와 실제 라우트 상태를 일치시키기

### 4. Archive direction and implementation

- [ ] `/archive` 상세 디자인 방향 확정
- [ ] `/archive` 페이지 구축
- [ ] 사진·여행·공연·일상 등 Archive 콘텐츠 유형 정의

### 5. Editorial polish

- [ ] 반응형 디자인 전반 정리
- [ ] 스크롤 애니메이션
- [ ] 페이지 전환 애니메이션
- [ ] 이미지 hover 효과
- [ ] 다크 / 라이트 테마 또는 커스텀 테마 전략 재검토

### 6. Content production

- [ ] 프로젝트 상세 작성
- [ ] 노트 작성
- [ ] Archive 콘텐츠 추가
- [ ] About 작성
- [ ] Now 페이지 월별 기록

### 7. CMS / content workflow

- [ ] MDX 기반 노트 시스템
- [ ] MDX 기반 프로젝트 시스템
- [ ] 자동 목차 생성
- [ ] 코드 하이라이팅

### 8. Discovery / utility features

- [ ] 태그 필터
- [ ] 검색 기능
- [ ] Random Archive
- [ ] 사이트맵 페이지
- [ ] 방명록 (`Supabase` CRUD)
- [ ] Mood Stamp
- [ ] 방문자 통계

### 9. Launch

- [ ] SEO 설정
- [ ] Open Graph 이미지
- [ ] favicon 제작
- [ ] `Vercel` 배포
- [ ] Google Analytics 적용
- [ ] 커스텀 도메인 연결

### 10. Later expansions

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

- 전체 무드는 계속해서 editorial, calm, archive-like 방향을 유지한다.
- 새 화면은 가능한 한 토큰과 공용 컴포넌트를 먼저 재사용한다.
- 링크가 노출되는 라우트는 실제 페이지로 연결되도록 관리한다.
- `/archive`는 다른 페이지보다 더 감성적이고 아날로그한 실험을 허용하는 공간으로 둔다.

## 참고 문서

- `docs/design-system.md`
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/PageHeader.tsx`
- `components/SectionTitle.tsx`
- `components/Button.tsx`
