# Design System

## 목적

이 문서는 `still-building` 프로젝트의 현재 시각 언어와 UI 규칙을 정리한 문서다.

- 현재 코드에 적용된 디자인 방향
- 컬러, 폰트, 레이아웃 기준
- 공용 컴포넌트의 역할
- 프로젝트 목록과 상세 페이지의 UI 기준

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
- 모바일에서는 프로젝트 갤러리의 가로 스크롤 레일을 세로 목록으로 전환하고, 카드 콘텐츠는 세로로 읽을 수 있게 한다.

## Spacing 기준

이 프로젝트에는 별도의 CSS spacing 토큰이 없다. 따라서 새 화면은 Tailwind의 기본 spacing 단위와 아래의 공통 조합을 사용한다. 임의의 픽셀 값이나 컴포넌트마다 다른 여백을 추가하기 전에, 같은 역할의 조합을 우선 재사용한다.

| 구분 | 기본값 | 큰 화면 값 | 적용 위치 |
| --- | --- | --- | --- |
| 컨테이너 좌우 여백 | `px-4` (16px) | `sm:px-6` (24px), `lg:px-8` (32px) | 모든 `Container` 내부 콘텐츠 |
| 페이지 상·하단 여백 | `pt-32 pb-12` (128px / 48px) | `sm:pt-36 sm:pb-16` (144px / 64px) | Navbar 아래에서 시작하는 페이지 |
| 페이지 헤더 간격 | `gap-8 pb-12` (32px / 48px) | `md`에서 2열 전환 | `PageHeader`의 label·제목·하단 구분선 |
| 섹션 여백 | `py-20` (80px) | 콘텐츠에 따라 유지 | 일반 서브 페이지의 독립 섹션 |
| Home 주요 메뉴 섹션 | `py-24` (96px) | `md`에서 4열 전환 | Hero 다음 메뉴 카드 영역 |
| 컴포넌트 내부 여백 | `gap-4`~`gap-6`, `p-6` (16px~24px) | 필요 시 유지 | 카드 메타데이터, 패널, 링크 묶음 |
| 작은 메타데이터 간격 | `gap-2`~`gap-3`, `mt-4` | 필요 시 유지 | label, 설명, 태그, 보조 링크 |

### Spacing 운영 원칙

- `Container` 밖에서 페이지별 좌우 여백을 다시 정의하지 않는다. 전체 폭이 필요한 영역만 예외로 하고, 그 안의 콘텐츠는 다시 `Container`에 맞춘다.
- 읽기 흐름의 큰 단위는 `48px` 이상, 카드·메타데이터 같은 작은 단위는 `8px`의 배수 범위에서 조정한다.
- border는 간격을 대체하지 않는다. 구분선 앞뒤에도 콘텐츠 역할에 맞는 여백을 둔다.
- 같은 화면에서 같은 정보 계층에는 같은 간격을 쓴다. 예를 들어 eyebrow와 제목 사이에는 `mt-4`, 일반 카드 CTA 앞에는 `mt-6`을 기본으로 하되, 프로젝트 확장 패널 CTA는 패널 하단 정렬 규칙을 우선한다.
- 새 숫자 값이 필요하면 기존 조합으로 해결되지 않는 이유와 적용 범위를 함께 기록한다.

## Responsive breakpoint 기준

모바일 우선(base)으로 작성하고, 레이아웃 변화가 필요한 시점에만 breakpoint를 추가한다. 현재 공통 기준은 Tailwind의 기본 breakpoint와 프로젝트 갤러리의 모바일 예외를 따른다.

| 범위 | 기준 | 현재 사용하는 변화 | 새 UI 적용 원칙 |
| --- | --- | --- | --- |
| Mobile | 기본 ~639px | 단일 열, 좁은 좌우 여백, Projects는 세로 목록 | 기본 스타일을 먼저 작성하고 가로 스크롤·hover 전용 정보에 의존하지 않는다. |
| `sm` | 640px 이상 | `Container` 좌우 여백 확대, Navbar 가로 정렬, 페이지 상·하단 여백 확대 | 콘텐츠가 한 줄에 안정적으로 읽히는 최소 변화만 둔다. |
| `md` | 768px 이상 | Home hero 2열, Home 메뉴 4열, `PageHeader`와 Footer의 가로 배치 | 두 개 이상의 정보 묶음을 나란히 놓을 때 사용한다. |
| `lg` | 1024px 이상 | `Container` 좌우 여백을 32px로 확대 | 더 넓은 빈 공간이 실제로 필요한 경우에만 사용한다. |
| Gallery 예외 | 640px 미만 (`max-width: 639px`) | 가로 scroll-snap 레일을 세로 목록으로 바꾸고 정보 패널을 항상 노출 | 이 예외를 다른 컴포넌트의 일반 breakpoint로 확장하지 않는다. |

### Responsive 운영 원칙

- breakpoint는 화면 크기 자체보다 콘텐츠가 더 이상 읽기 좋지 않은 지점을 근거로 선택한다.
- `sm`, `md`, `lg` 외의 breakpoint를 추가하기 전에는 위 단계로 해결할 수 없는지 검토한다.
- 작은 화면에서는 숨겨진 hover 정보, 가로 전용 조작, 고정 폭 카드가 남지 않도록 한다.
- `clamp()`를 사용하는 타이포그래피는 별도 글자 크기 breakpoint를 만들기 전에 그 동작을 우선 유지한다.

## 인터랙션과 상태 스타일

상태 변화는 색상·위치·정보 노출 중 하나 이상으로 명확히 알리되, hover만으로 기능이나 콘텐츠가 드러나게 만들지 않는다. 아래 기준은 현재 Navbar, MenuCard, Footer, ProjectCard의 구현 패턴을 정리하고 새 인터랙티브 요소에 적용할 공통 규칙을 더한 것이다.

| 상태 | 시각 기준 | 적용 및 접근성 기준 |
| --- | --- | --- |
| 기본 | `--brown` 또는 `--brown-light` 텍스트, `--line` border, 정적인 카드 정보 | 링크와 버튼은 상호작용 전에도 목적을 알 수 있는 텍스트·아이콘을 제공한다. |
| Hover | `--brown`으로 색상 강조, 필요 시 최대 `-translate-y-1` 이동 | hover 효과는 `(hover: hover) and (pointer: fine)` 환경에서만 추가한다. Projects의 패널 확장처럼 중요한 정보는 다른 입력 방식에서도 접근 가능해야 한다. |
| Keyboard focus | `:focus-visible`에서 `1px solid var(--brown)`, `outline-offset: 4px` | mouse click에는 불필요한 outline을 보이지 않게 하고, Tab 탐색에는 항상 분명한 focus 표시를 제공한다. ProjectCard의 패널 확장도 focus 시 hover와 동일하게 동작한다. |
| Active / pressed | 현재 공통 active 스타일은 없다 | 새 버튼·토글처럼 눌림 상태가 의미 있는 UI는 `aria-pressed` 또는 해당 네이티브 상태를 사용하고, 색상 또는 border 변화로 선택 상태를 구분한다. 단순 링크에는 별도 active 스타일을 강제하지 않는다. |
| Disabled / unavailable | 현재 공통 disabled 스타일은 없다 | 동작할 수 없는 컨트롤은 가능한 한 렌더링하지 않는다. 남겨야 한다면 native `disabled`/`aria-disabled`와 비활성 시각 표현을 함께 제공하고, hover·focus로 실행 가능해 보이게 하지 않는다. |
| Reduced motion | Projects grid·상세 정보 opacity transition을 `0.01ms`로 축소 | `prefers-reduced-motion: reduce`에서 이동·확대·자동 재생을 제거하거나 즉시 완료한다. 콘텐츠를 읽기 위해 애니메이션이 끝날 필요가 없어야 한다. |

### 상태 스타일 운영 원칙

- 새 클릭 가능 요소는 시맨틱 `<a>`, `<button>`, 입력 요소를 우선 사용하며, 키보드로 같은 동작을 할 수 있어야 한다.
- focus 스타일을 `outline: none`으로 제거했다면 같은 요소에 `:focus-visible` 대체 스타일을 반드시 제공한다.
- 색상 변화만으로 현재 위치·선택·오류를 전달하지 않는다. 텍스트, 아이콘, border, `aria-current` 등 보조 단서를 함께 사용한다.
- transition은 일반적으로 `200ms`~`500ms` 범위의 현재 구현을 따른다. 단, Projects 카드 패널은 차분한 확장을 위해 `600ms`를 사용한다. 그 외에 인터랙션을 늦추는 긴 전환이나 무한 반복은 추가하지 않는다.
- 상태 QA는 pointer, Tab/Shift+Tab, Enter/Space, 터치, reduced-motion 환경을 모두 확인한다. 프로젝트 갤러리의 전체 QA는 별도 로드맵 항목으로 계속 관리한다.

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
  - `640px` 이상에서는 카드 최소 폭 `33rem`을 보장해 1/3 높이의 확장 패널 안에서도 상세 정보가 잘리지 않도록 한다.
- `ProjectCard`
  - 이미지, 제목, 연도, 설명, 카테고리, 역할, 태그를 표시한다.
  - 카드 외곽은 데스크톱에서 `4:5` 비율과 고정 이미지 크기를 유지하며, 이미지는 확대하지 않는다.
  - 흰색 하단 정보 패널은 접힌 상태에서 `7.25rem` 높이로 제목과 연도를 항상 표시하고, 데스크톱 hover 또는 `focus-within`에서 카드 높이의 약 `1/3`까지 grid 두 번째 행으로 부드럽게 확장되어 이미지 일부를 가린다.
  - 확장 상태에서는 설명, 카테고리·역할, 태그, CTA를 표시한다. `639px` 이하에서는 이미지가 `4:3` 비율을 사용하고 모든 상세 정보를 항상 표시한다.
  - `View project` CTA는 패널의 `1.5rem` 내부 여백을 기준으로 오른쪽 아래에 정렬한다. 모바일에서는 콘텐츠 흐름의 마지막 항목으로 자연스럽게 배치한다.
  - `:focus-visible` outline을 유지하며, `prefers-reduced-motion: reduce`에서는 grid와 상세 정보 전환을 사실상 즉시 완료한다.
  - `project.slug`를 사용해 `/projects/[slug]` 상세 라우트로 이동하는 링크 카드다.

## 프로젝트 상세 페이지 기준

`/projects/[slug]`는 목록 카드의 시각 언어를 확장한 상세 화면이다.

- hero 이미지와 제목을 첫 화면의 핵심으로 둔다.
- 연도, 카테고리, 역할, 태그는 제목 주변 또는 첫 콘텐츠 영역에서 빠르게 읽을 수 있어야 한다.
- 본문은 `content` 배열을 사용하며, 프로젝트 배경, 문제 정의, 작업 범위, 결과 순서로 확장할 수 있다.
- 외부 링크는 `links` 데이터가 있을 때만 표시한다.
- 프로젝트 간 이전/다음 이동과 `/projects` 복귀 링크는 같은 데이터 모델과 slug를 사용해 후속 구현한다.
- 목록 카드의 `View project` CTA는 항상 해당 프로젝트의 상세 라우트로 이동하며, 확장 패널에서는 오른쪽 아래에 배치한다.
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
| `--white` | `#f7f7f5` | 프로젝트 패널 배경과 밝은 면 |
| `--accent` | `#4c6074` | Footer와 프로젝트 정보 패널 텍스트 |

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
- `/projects/[slug]`의 hero 이미지, 프로젝트 메타데이터, 본문, 태그, 외부 링크 기반 상세 화면
- `slug` 기반 프로젝트 데이터 조회, 상세 라우트 연결, 존재하지 않는 slug의 not-found 처리
- 공통 spacing 조합, `sm`·`md`·`lg` responsive breakpoint, keyboard focus와 reduced-motion을 포함한 상태 스타일 기준

### 부분 구현

- `/notes`, `/now`, `/about`, `/archive`는 헤더와 placeholder 콘텐츠만 있다.
- 프로젝트 상세 페이지의 이전/다음 이동, `/projects` 복귀 링크, 반응형·접근성·이미지 최적화 QA가 남아 있다.
- `/colophon`, `/uses`는 Footer 링크만 있고 라우트가 없다.
- 카드의 grid 기반 패널 확장, focus, reduced-motion 상태는 구현되어 있으나 전체 페이지 QA가 남아 있다.

### 아직 미확정

- Notes, Archive의 콘텐츠 모델
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
- [`app/projects/[slug]/page.tsx`](/Users/jeje/Documents/GitHub/still-building/app/projects/[slug]/page.tsx)
- [`app/not-found.tsx`](/Users/jeje/Documents/GitHub/still-building/app/not-found.tsx)
- [`data/projects.ts`](/Users/jeje/Documents/GitHub/still-building/data/projects.ts)
- [`components/Navbar.tsx`](/Users/jeje/Documents/GitHub/still-building/components/Navbar.tsx)
- [`components/Footer.tsx`](/Users/jeje/Documents/GitHub/still-building/components/Footer.tsx)
- [`components/PageHeader.tsx`](/Users/jeje/Documents/GitHub/still-building/components/PageHeader.tsx)
- [`components/SectionTitle.tsx`](/Users/jeje/Documents/GitHub/still-building/components/SectionTitle.tsx)
- [`components/projects/ProjectGallery.tsx`](/Users/jeje/Documents/GitHub/still-building/components/projects/ProjectGallery.tsx)
- [`components/projects/ProjectCard.tsx`](/Users/jeje/Documents/GitHub/still-building/components/projects/ProjectCard.tsx)
