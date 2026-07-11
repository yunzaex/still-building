# Project Plan

## 목적

이 문서는 `still-building` 프로젝트의 현재 기준선과 다음 작업 순서를 정리하는 살아 있는 로드맵이다.

- 무엇이 이미 확정되었는지
- 지금 어디까지 구현되었는지
- 다음에 어떤 순서로 확장할지

앞으로의 디자인과 개발 작업은 이 문서를 우선 기준으로 맞춘다.

## 판단

이 문서는 기존 `docs/project-plan.md`를 현재 프로젝트 상태에 맞게 갱신한 버전이다.

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
- 아직 실제 라우트가 없는 푸터 링크: `/about`, `/colophon`, `/uses`

## 현재 상태 요약

| 범위 | 상태 | 메모 |
| --- | --- | --- |
| Home (`/`) | 진행 중 | 기본 레이아웃과 hero 이미지는 적용됐고, 반응형 세부 조정이 남아 있다. |
| Projects (`/projects`) | 기본 구조 완료 | 공통 템플릿은 적용됐고, 콘텐츠를 데이터화하는 단계가 남아 있다. |
| Notes (`/notes`) | 기본 구조 완료 | 공통 템플릿은 적용됐고, MDX 또는 목록형 콘텐츠 구조가 필요하다. |
| Archive (`/archive`) | 미완성 | 현재는 placeholder 수준이라 전체 구조를 새로 잡아야 한다. |
| Now (`/now`) | 기본 구조 완료 | 공통 템플릿은 적용됐고, 월별 기록 체계를 붙여야 한다. |
| About / Colophon / Uses | 미구현 | 푸터 링크가 먼저 노출되어 있으므로, 라우트를 만들거나 링크를 정리해야 한다. |
| 404 | 미구현 | 커스텀 404 페이지가 필요하다. |

## 우선순위 로드맵

### 1. Foundation polish

- [ ] `Label` 컴포넌트 추가
- [ ] `ImageFrame` 컴포넌트 추가
- [ ] hover 애니메이션 통일
- [ ] 디자인 토큰 정리: spacing / radius / shadow
- [ ] focus / accessibility 상태 정리
- [x] Home 실제 이미지 적용
- [ ] Home 반응형 세부 조정
- [ ] Footer 정보 완성
- [ ] 커스텀 404 페이지

### 2. Core route completion

- [ ] `/archive` 페이지 구축
- [ ] `/about` 페이지 구축
- [ ] `/colophon` 페이지 구축
- [ ] `/uses` 페이지 구축
- [ ] 푸터 링크와 실제 라우트 상태를 일치시키기

현재는 푸터에 링크가 먼저 노출되어 있으므로, dead link를 없애려면 라우트를 먼저 채우는 쪽이 맞다.

### 3. Editorial polish

- [ ] 반응형 디자인 전반 정리
- [ ] 스크롤 애니메이션
- [ ] 페이지 전환 애니메이션
- [ ] 이미지 hover 효과
- [ ] 다크 / 라이트 테마 또는 커스텀 테마 전략 재검토

### 4. Content production

- [ ] 프로젝트 상세 작성
- [ ] 노트 작성
- [ ] Archive 콘텐츠 추가
- [ ] About 작성
- [ ] Now 페이지 월별 기록

### 5. CMS / content workflow

- [ ] MDX 기반 노트 시스템
- [ ] MDX 기반 프로젝트 시스템
- [ ] 자동 목차 생성
- [ ] 코드 하이라이팅

### 6. Discovery / utility features

- [ ] 태그 필터
- [ ] 검색 기능
- [ ] Random Archive
- [ ] 사이트맵 페이지
- [ ] 방명록 (`Supabase` CRUD)
- [ ] Mood Stamp
- [ ] 방문자 통계

### 7. Launch

- [ ] SEO 설정
- [ ] Open Graph 이미지
- [ ] favicon 제작
- [ ] `Vercel` 배포
- [ ] Google Analytics 적용
- [ ] 커스텀 도메인 연결

### 8. Later expansions

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
