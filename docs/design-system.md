# Design System

## 목적

이 문서는 `still-building` 프로젝트의 현재 시각 언어와 UI 규칙을 정리한 문서다.

- 현재 코드에 적용된 디자인 방향
- 컬러, 폰트, 레이아웃 기준
- 공용 컴포넌트의 역할
- 프로젝트 목록과 향후 상세 페이지의 UI 기준

실제 화면 작업은 이 문서를 우선 기준으로 삼는다.

## 디자인 방향

현재 기준 무드는 다음과 같다.

- 키워드: `editorial`, `archive`, `calm`, `crafted`, `minimal`
- 인상: 차분하고 정제된 개인 아카이브
- 레이아웃: 큰 타이포, 넓은 여백, 얇은 구분선, 낮은 정보 밀도
- 인터랙션: 장식보다 구조, 타이포그래피, 이미지의 움직임을 중심으로 구성

페이지별 감정 차이도 유지한다.

- `Home`: 전시 포스터와 건축 잡지에 가까운 절제된 Editorial / Swiss Grid
- `Projects`: 이미지와 메타데이터를 중심으로 탐색하는 큐레이션 갤러리
- `Archive`: 향후 콜라주, 필름, 폴라로이드, 손글씨 같은 아날로그 표현을 허용

## 레이아웃 기준

- 콘텐츠 최대 폭은 `max-w-6xl`이다.
- `Container`의 좌우 여백은 기본 `px-4`, `sm:px-6`, `lg:px-8`이다.
- 상단 시작 여백은 페이지 헤더 기준 `pt-32`, 큰 화면에서는 `sm:pt-36`을 사용한다.
- 강한 박스보다 `--line` 기반의 얇은 border와 여백으로 영역을 구분한다.
- Home은 hero 2단 그리드와 4열 메뉴 카드 구조를 사용한다.
- 서브 페이지는 `Container` + `PageHeader`를 기본으로 사용하고, 콘텐츠 성격에 따라 `Divider`와 `SectionTitle`을 조합한다.
- 모바일에서는 가로 탐색이 필요한 프로젝트 갤러리만 스크롤 레일을 유지하고, 카드 콘텐츠는 세로로 읽을 수 있게 전환한다.

## 공용 컴포넌트

현재 코드에서 사용 중인 공용 컴포넌트는 다음과 같다.

- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/Container.tsx`
- `components/PageHeader.tsx`
- `components/SectionTitle.tsx`
- `components/Divider.tsx`
- `components/MenuCard.tsx`
- `components/projects/ProjectGallery.tsx`
- `components/projects/ProjectCard.tsx`

### 컴포넌트 역할

- `Navbar`
  - 고정 상단 네비게이션
  - `STILL BUILDING` 브랜드와 `/`, `/projects`, `/notes`, `/archive`, `/now` 링크 제공
  - 데스크톱에서는 hover 시 번호와 텍스트 이동 효과를 사용한다.
  - 모바일에서는 메뉴가 여러 줄로 감싸질 수 있다.
- `Footer`
  - `--accent` 배경과 `--surface` 텍스트를 사용하는 하단 영역
  - About, Email, GitHub, Colophon, Uses 링크를 제공한다.
  - `/colophon`과 `/uses`는 라우트 구현 전까지 연결 상태를 함께 관리해야 한다.
- `Container`
  - `max-w-6xl`과 반응형 좌우 padding을 제공하는 공통 래퍼
- `PageHeader`
  - label과 큰 세리프 제목을 하단 border와 함께 표시하는 서브 페이지 헤더
- `SectionTitle`
  - 상단 border, eyebrow, 제목, 설명으로 구성된 콘텐츠 섹션 헤더
- `Divider`
  - `--line` 기반의 1px 수평 구분선
- `MenuCard`
  - Home 하단 메뉴 요약 카드
  - hover 시 위로 살짝 이동하고 링크 색상이 변한다.
- `ProjectGallery`
  - 프로젝트 목록을 `<ol>` 기반의 갤러리로 출력한다.
  - 데스크톱에서는 가로 스크롤과 scroll snap을 사용하고, 작은 화면에서는 세로 목록으로 바뀐다.
- `ProjectCard`
  - 이미지, 제목, 연도, 설명, 카테고리, 역할, 태그를 표시한다.
  - hover/focus 시 하단 정보 패널이 올라온다.
  - `project.href`가 있을 때만 링크 카드가 되며, 현재 데이터에는 상세 라우트가 연결되어 있지 않다.

## 프로젝트 상세 페이지 기준

향후 `/projects/[slug]`는 목록 카드의 시각 언어를 확장하는 상세 화면으로 설계한다.

- hero 이미지와 제목을 첫 화면의 핵심으로 둔다.
- 연도, 카테고리, 역할, 태그는 제목 주변 또는 첫 콘텐츠 영역에서 빠르게 읽을 수 있어야 한다.
- 본문은 프로젝트 배경, 문제 정의, 작업 범위, 결과 순서로 확장할 수 있어야 한다.
- 외부 링크와 `/projects` 복귀 링크를 명확히 제공한다.
- 프로젝트 간 이전/다음 이동은 같은 데이터 모델과 slug를 사용한다.
- 목록 카드의 `View project` CTA는 상세 라우트가 연결된 경우에만 활성 링크로 동작한다.
- 이미지에는 실제 콘텐츠를 설명하는 alt 텍스트를 제공하고, 상세 이미지가 늘어나면 `sizes`와 loading 우선순위를 다시 검토한다.

## 컬러 기준

글로벌 컬러는 [`app/globals.css`](/Users/jeje/Documents/GitHub/still-building/app/globals.css)에 정의되어 있다.

| 토큰 | 값 | 현재 역할 |
| --- | --- | --- |
| `--bg` | `#e2eaf2` | 전체 페이지 기본 배경 |
| `--surface` | `#cec8c2` | 보조 면, Footer 텍스트 |
| `--text` | `#2d3536` | 기본 본문 텍스트 |
| `--brown` | `#3b2823` | 브랜드와 주요 제목 |
| `--brown-light` | `#88665c` | eyebrow, 보조 설명 |
| `--line` | `#c1ccd8` | border와 구분선 |
| `--white` | `#f7f7f5` | 프로젝트 패널의 밝은 텍스트 |
| `--accent` | `#4c6074` | Footer와 프로젝트 정보 패널 |

### 컬러 운영 원칙

- 새 UI는 하드코딩 색상보다 CSS 변수 사용을 우선한다.
- Tailwind CSS 변수 유틸리티는 `text-(--brown)`, `border-(--line)` 같은 현재 프로젝트 표기 방식을 따른다.
- 밝은 블루-그레이 배경과 저채도 브라운·블루 포인트의 대비를 유지한다.
- 정보 패널처럼 강조가 필요한 영역에만 `--accent`를 넓게 사용한다.

## 폰트와 타이포그래피

폰트 설정은 [`app/fonts.ts`](/Users/jeje/Documents/GitHub/still-building/app/fonts.ts)와 [`app/layout.tsx`](/Users/jeje/Documents/GitHub/still-building/app/layout.tsx)에 있다.

- Home hero: `Monomakh`
- 본문과 UI: `Hanken Grotesk` + `KoPubWorld Dotum`
- 페이지 제목과 문장형 헤드라인: `EB Garamond`

글로벌 폰트 변수:

- `--font-hero`
- `--font-quote`
- `--font-body-latin`
- `--font-body-korean`
- `--font-body`

타이포그래피 토큰은 [`app/globals.css`](/Users/jeje/Documents/GitHub/still-building/app/globals.css)의 `type-*` 클래스가 단일 진입점이다.

| Token | Font | Size | Weight | Line Height | Letter Spacing | Usage |
| --- | --- | --- | --- | --- | --- | --- |
| `type-display` | Monomakh | `clamp(4.5rem, 11vw, 9rem)` | 400 | 0.86 | -0.055em | Home 대표 타이틀 |
| `type-heading` | EB Garamond | `clamp(3rem, 6vw, 4.5rem)` | 400 | 0.98 | -0.035em | 페이지 제목 |
| `type-lede` | EB Garamond | `clamp(1.875rem, 3vw, 2.25rem)` | 400 | 1.25 | -0.015em | Home 보조 문장 |
| `type-title` | Hanken Grotesk + KoPubWorld Dotum | `clamp(1.125rem, 2vw, 1.75rem)` | 500 | 1.08 | -0.035em | 섹션·카드 제목 |
| `type-body` | Hanken Grotesk + KoPubWorld Dotum | 1rem | 400 | 1.7 | -0.012em | 본문 |
| `type-body-small` | Hanken Grotesk + KoPubWorld Dotum | 0.875rem | 400 | 1.65 | -0.01em | 짧은 설명 |
| `type-label` | Hanken Grotesk + KoPubWorld Dotum | 0.75rem | 500 | 1.35 | 0.16em | eyebrow, 버튼, CTA, 태그 |
| `type-nav` | Hanken Grotesk + KoPubWorld Dotum | 0.875rem | 500 | 1.4 | 0.08em | 전역 네비게이션 |
| `type-meta` | Hanken Grotesk + KoPubWorld Dotum | 0.75rem | 400 | 1.4 | 0.08em | 연도, 카테고리, 역할 |

### 타이포그래피 운영 원칙

- 한 요소에는 목적에 맞는 `type-*` 토큰 하나를 먼저 적용한다.
- 토큰에 포함된 font, size, weight, line-height, letter-spacing을 별도 유틸리티로 중복 지정하지 않는다.
- 색상, 최대 폭, 정렬, 간격은 토큰과 문맥에 맞게 조합한다.
- 새 텍스트 역할이 기존 토큰에 명확히 들어가지 않을 때만 토큰 추가를 검토한다.

## 현재 구현 상태

### 확정된 것

- 차가운 블루-그레이 배경과 따뜻한 브라운 텍스트를 섞은 에디토리얼 포트폴리오 방향
- `Monomakh` + `EB Garamond` + `Hanken Grotesk` + `KoPubWorld Dotum` 조합
- Home의 `Still Building` hero와 `Between logic and aesthetics.` 카피
- 모든 페이지의 전역 Navbar와 Footer
- `/projects`의 카드형 가로 갤러리와 모바일 세로 전환

### 부분 구현

- `/notes`, `/now`, `/about`, `/archive`는 헤더와 placeholder 콘텐츠만 있다.
- `/projects` 데이터에는 이미지와 목록용 메타데이터가 있지만 `slug`와 상세 콘텐츠는 없다.
- `/colophon`, `/uses`는 Footer 링크만 있고 라우트가 없다.
- 카드의 overlay, focus, reduced-motion 상태는 구현되어 있으나 전체 페이지 QA가 남아 있다.

### 아직 미확정

- `/projects/[slug]` 상세 페이지의 콘텐츠 구조와 이미지 배치
- Notes, Archive의 콘텐츠 모델
- 페이지별 세부 responsive breakpoint
- Footer 보조 링크(`/colophon`, `/uses`)를 실제로 구현할 시점

## 유지해야 하는 기준

- 큰 제목, 낮은 채도의 색, 얇은 라인, 넓은 여백을 유지한다.
- 새 페이지는 기존 토큰과 `Container`, `PageHeader`, `SectionTitle`을 우선 재사용한다.
- 프로젝트 상세 페이지도 목록과 같은 색상·타이포그래피 체계를 공유한다.
- 인터랙션은 hover만 의존하지 않고 keyboard focus와 reduced motion을 함께 고려한다.

## 참고 파일

- [`app/globals.css`](/Users/jeje/Documents/GitHub/still-building/app/globals.css)
- [`app/fonts.ts`](/Users/jeje/Documents/GitHub/still-building/app/fonts.ts)
- [`app/layout.tsx`](/Users/jeje/Documents/GitHub/still-building/app/layout.tsx)
- [`app/page.tsx`](/Users/jeje/Documents/GitHub/still-building/app/page.tsx)
- [`app/projects/page.tsx`](/Users/jeje/Documents/GitHub/still-building/app/projects/page.tsx)
- [`data/projects.ts`](/Users/jeje/Documents/GitHub/still-building/data/projects.ts)
- [`components/Navbar.tsx`](/Users/jeje/Documents/GitHub/still-building/components/Navbar.tsx)
- [`components/Footer.tsx`](/Users/jeje/Documents/GitHub/still-building/components/Footer.tsx)
- [`components/PageHeader.tsx`](/Users/jeje/Documents/GitHub/still-building/components/PageHeader.tsx)
- [`components/SectionTitle.tsx`](/Users/jeje/Documents/GitHub/still-building/components/SectionTitle.tsx)
- [`components/projects/ProjectGallery.tsx`](/Users/jeje/Documents/GitHub/still-building/components/projects/ProjectGallery.tsx)
- [`components/projects/ProjectCard.tsx`](/Users/jeje/Documents/GitHub/still-building/components/projects/ProjectCard.tsx)
