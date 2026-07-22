# Design System

## 목적

이 문서는 `still-building` 프로젝트의 시각적 기준과 UI 규칙을 정리하는 문서다.

- 현재 확정된 디자인 방향
- 페이지별 무드 차이
- 컬러, 폰트, 레이아웃 기준
- 공용 컴포넌트의 현재 상태

실제 화면 작업은 이 문서를 우선 기준으로 삼는다.

## 디자인 방향

현재 기준 무드는 다음과 같다.

- 키워드: `editorial`, `archive`, `calm`, `crafted`, `minimal`
- 인상: 차분하고 정제된 개인 아카이브
- 레이아웃 성향: 큰 타이포, 넓은 여백, 얇은 구분선, 낮은 밀도의 정보 배치
- 인터랙션 성향: 과한 장식보다 구조와 타이포 중심

## 디자인 컨셉

이 프로젝트는 페이지별 감정 차이를 의도적으로 가져간다.

### Home

Home은 차분하고 절제된 에디토리얼 디자인을 사용한다.

- 전시 포스터
- 건축 잡지
- Swiss Grid
- Editorial
- Minimal

정리된 구조, 큰 타이포, 안정적인 여백, 얇은 라인 사용이 핵심이다.

### Archive

Archive는 Home과 반대로 아날로그 감성을 적극적으로 사용한다.

- 편지봉투
- 콜라주
- 필름
- 폴라로이드
- 손글씨
- Scrapbook

완벽하게 정렬된 구조보다 기억과 감정, 수집의 분위기가 더 중요하다.

### 핵심 대비

- `Home` → 절제된 디자인
- `Archive` → 감성적인 디자인

이 대비는 프로젝트 전체에서 유지해야 하는 중요한 방향성이다.

## 레이아웃 기준

- 최대 콘텐츠 폭은 `max-w-6xl` 기준
- 좌우 여백은 주로 `px-8`
- 상단 시작 여백은 홈과 서브 페이지 모두 `pt-32` 계열을 기준으로 한다
- 구분은 진한 박스보다 `border`와 `line` 컬러로 해결
- 홈에서는 `grid` 기반 2단 구성과 4열 메뉴 요약 구조를 사용
- 서브 페이지는 `Container` + `PageHeader` + `Divider` + `SectionTitle` 조합을 기본 구조로 삼는다

## 컴포넌트 기준

현재 실제로 사용 중인 공용 컴포넌트는 아래와 같다.

- `Navbar`
- `Footer`
- `components/Container.tsx`
- `components/PageHeader.tsx`
- `components/SectionTitle.tsx`
- `components/Divider.tsx`
- `components/MenuCard.tsx`
- `components/Button.tsx`

### 컴포넌트 역할

- `Navbar`
  - 고정 상단 네비게이션
  - 브랜드 텍스트는 `STILL BUILDING`
  - 홈, 프로젝트, 노트, 아카이브, 나우 라우트를 노출
  - hover 시 번호가 왼쪽에서 나타나고 메뉴 텍스트가 이동하는 인터랙션 사용
  - 브랜드 hover 시 커서 형태의 짧은 blink 인터랙션 사용
- `Footer`
  - 저채도 브라운 계열의 작은 대문자 텍스트 사용
  - 사이트 소개, 이메일, GitHub, Colophon, Uses 링크 영역으로 구성
  - 일부 링크 대상 라우트는 아직 구현되지 않았으므로 추후 라우트 정리가 필요
- `Container`
  - `max-w-6xl`, `px-8` 기준의 공통 콘텐츠 폭 제공
- `PageHeader`
  - 서브 페이지의 label, 큰 세리프 title, description 구조 제공
- `SectionTitle`
  - 섹션 상단 라인, eyebrow, title, description 구조 제공
- `Divider`
  - `--line` 토큰 기반의 얇은 구분선
- `MenuCard`
  - 홈 하단 메뉴 요약 카드
  - hover 시 위로 살짝 이동
- `Button`
  - `primary`, `ghost` variant 제공
  - 내부 링크는 `next/link`, 외부 링크는 `<a>` 사용

따라서 현재 시점의 디자인 시스템은 홈 화면 중심의 기준선에서 서브 페이지용 기본 컴포넌트 세트로 확장되는 단계다.

## 현재 컬러 기준

글로벌 컬러는 [`app/globals.css`](/Users/jeje/Documents/GitHub/still-building/app/globals.css)에 정의되어 있다.

| 토큰            | 값        | 현재 역할                |
| --------------- | --------- | ------------------------ |
| `--bg`          | `#e2eaf2` | 기본 배경                |
| `--surface`     | `#cec8c2` | 대형 비주얼 블록/보조 면 |
| `--text`        | `#2d3536` | 기본 본문 텍스트         |
| `--brown`       | `#3b2823` | 진한 포인트 텍스트 계열  |
| `--brown-light` | `#88665c` | 보조 설명 텍스트         |
| `--line`        | `#c1ccd8` | 구분선                   |
| `--white`       | `#f7f7f5` | 밝은 중립 색상           |
| `--accent`      | `#4c6074` | 포인트 컬러              |

### 컬러 운영 원칙

- 새 UI를 만들 때는 가능하면 하드코딩보다 CSS 변수 사용을 우선한다.
- Tailwind CSS 변수 유틸리티는 현재 `text-(--brown)`, `border-(--line)` 같은 형태를 주로 사용한다.
- 일부 기존 컴포넌트에는 `text-[var(--brown-light)]` 형태도 남아 있으므로, 새 작업에서는 한 파일 안에서 표기 방식을 일관되게 맞춘다.
- 현재 팔레트는 "밝은 배경 + 저채도 블루/브라운 조합"을 유지하는 것이 맞다.

## 현재 폰트 기준

글로벌 폰트 설정은 [`app/layout.tsx`](/Users/jeje/Documents/GitHub/still-building/app/layout.tsx)에 있다.

### 실제 사용 기준

- Hero 메인 타이틀: `Monomakh`
- 기본 본문: `Hanken Grotesk` + `KoPubWorld Dotum`
- 긴 영문 문장/문장형 헤드라인: `EB Garamond`

### 글로벌 토큰

- `--font-hero`
- `--font-quote`
- `--font-body-latin`
- `--font-body-korean`
- `--font-body`

### Typography Design Token

타이포그래피는 [`app/globals.css`](/Users/jeje/Documents/GitHub/still-building/app/globals.css)의 `type-*` 클래스가 단일 진입점이다. 각 토큰은 폰트 패밀리, 크기, 굵기, 행간, 자간, 필요한 경우 대소문자 규칙을 함께 가진다. 컴포넌트에서는 토큰 하나를 먼저 적용하고, 색상·여백·정렬처럼 문맥에만 필요한 값만 추가한다.

| Token | Font | Size | Weight | Line Height | Letter Spacing | Transform | Usage |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `type-display` | Monomakh | `clamp(72px, 11vw, 144px)` | 400 | 0.86 | -0.055em | uppercase | Home의 사이트명처럼 넓은 여백을 점유하는 대표 문구 |
| `type-heading` | EB Garamond | `clamp(48px, 6vw, 72px)` | 400 | 0.98 | -0.035em | none | 페이지 제목, 문장형 에디토리얼 헤드라인 |
| `type-lede` | EB Garamond | `clamp(30px, 3vw, 36px)` | 400 | 1.25 | -0.015em | none | Home hero의 보조 문장, 짧은 인트로 카피 |
| `type-title` | Hanken Grotesk + KoPubWorld Dotum | `clamp(18px, 2vw, 28px)` | 500 | 1.08 | -0.035em | none | 섹션 제목, 카드 제목 |
| `type-body` | Hanken Grotesk + KoPubWorld Dotum | 16px | 400 | 1.7 | -0.012em | none | 한국어/영문 본문, 설명이 긴 문단 |
| `type-body-small` | Hanken Grotesk + KoPubWorld Dotum | 14px | 400 | 1.65 | -0.01em | none | 카드·프로젝트의 짧은 설명, 페이지 보조 설명 |
| `type-label` | Hanken Grotesk + KoPubWorld Dotum | 12px | 500 | 1.35 | 0.16em | uppercase | eyebrow, 버튼, 필터, 태그, Footer 링크 |
| `type-nav` | Hanken Grotesk + KoPubWorld Dotum | 14px | 500 | 1.4 | 0.08em | none | 전역 Navigation, 브랜드명 |
| `type-meta` | Hanken Grotesk + KoPubWorld Dotum | 12px | 400 | 1.4 | 0.08em | none | 연도, 카테고리, 순번 등 보조 데이터 |

### Typography 운영 원칙

- `type-*` 토큰 안에 이미 모든 활자 속성이 들어 있으므로 `text-*`, `leading-*`, `tracking-*`, `font-*`, `uppercase` 유틸리티를 함께 추가하지 않는다.
- 한 요소에는 목적에 맞는 토큰 하나만 사용한다. 크기를 조금 조정하기보다 인접 토큰 중 의미가 맞는 것을 선택한다.
- 색상(`text-(--brown-light)`), 폭(`max-w-*`), 정렬, 간격은 콘텐츠 문맥에 따라 각 컴포넌트에서 조합한다.
- 새 페이지는 `PageHeader`와 `SectionTitle`을 우선 사용해 제목·eyebrow·본문 리듬을 상속한다. 새 텍스트 역할이 생겨도 기존 9개 토큰에 명확히 들어가지 않을 때만 토큰 추가를 검토한다.

### 통합 기준

서로 다른 역할은 유지하되, 시각적인 미세 차이만 있던 스타일은 하나로 합쳤다.

- 12px 대문자 텍스트의 6개 자간 변형(`0.12em`~`0.24em`)을 `type-label` 1종으로 통합했다.
- 14px 설명 텍스트의 2개 행간 변형(24px, 28px)을 `type-body-small` 1종으로 통합했다.
- 12px 보조 정보의 3개 자간/대소문자 변형을 `type-meta` 1종으로 통합했다.
- 카드·섹션 제목의 3개 크기/행간 조합을 `type-title` 1종으로 통합했다.
- 기존의 페이지 제목과 Home의 보조 문장은 같은 세리프 계열을 유지하되, 정보 위계가 달라 `type-heading`과 `type-lede`로 분리했다.

### 운영 원칙

- Home Hero의 메인 타이틀에는 `type-display`를 사용한다
- 본문, 네비게이션, 버튼, 카드 제목, 설명 텍스트는 역할에 맞는 `type-*` 토큰을 사용한다
- 긴 영문 문장이나 문장형 헤드라인은 `type-heading` 또는 `type-lede`를 우선 사용한다
- 한국어 본문은 `KoPubWorld Dotum`, 영문/숫자 본문은 `Hanken Grotesk`가 자연스럽게 선택되는 스택을 기준으로 한다

## 현재 디자인 구현 상태

### 확정된 것

- 전체 무드는 차가운 블루-그레이 배경과 따뜻한 브라운 텍스트를 섞은 에디토리얼 포트폴리오 방향이다.
- 메인 타이포 조합은 `Monomakh` + `EB Garamond` + `Hanken Grotesk` + `KoPubWorld Dotum`이다.
- 홈 화면은 넓은 여백, 대문자 제목, 얇은 라인, 아카이브형 카피를 중심으로 구성된다.
- 글로벌 네비게이션과 푸터는 모든 페이지 공통 레이아웃에 포함된다.
- 홈의 메인 카피는 `Between logic and aesthetics.`를 사용한다.
- 주요 네비게이션은 `/`, `/projects`, `/notes`, `/archive`, `/now` 기준으로 정리되어 있다.

### 부분 확정

- 컬러 시스템은 CSS 변수로 선언되어 있고, Tailwind 변수 유틸리티 사용으로 옮겨가는 중이다.
- `/projects`, `/notes`, `/now`는 공통 서브 페이지 템플릿을 적용했다.
- `/archive`는 아직 매우 단순한 플레이스홀더 상태다.
- 푸터에는 `/about`, `/colophon`, `/uses` 링크가 있으나 해당 라우트는 아직 구현되지 않았다.

### 아직 미확정

- 페이지별 상세 레이아웃 규칙
- 버튼, 링크, 카드, 섹션 헤더의 세부 상태 규격
- 반응형 기준의 명확한 설계 원칙
- 푸터 보조 링크의 실제 라우트 구성

## 유지해야 하는 기준

- 홈 화면의 시각 언어를 전체 페이지의 기준으로 삼는다.
- 큰 제목, 낮은 채도의 색, 얇은 라인, 넓은 여백을 유지한다.
- 공용 스타일은 가능한 한 토큰과 공용 컴포넌트로 끌어올린다.

## 다음으로 확정해야 할 항목

1. `/about`, `/colophon`, `/uses` 라우트를 만들지, 링크를 제거할지 결정
2. `/archive`를 다른 서브 페이지와 같은 템플릿으로 정리
3. 버튼, 링크, 카드의 hover/focus 상태 규격 확정
4. spacing 규칙 문서화

## 기준 페이지

현재 디자인 기준 페이지는 [`app/page.tsx`](/Users/jeje/Documents/GitHub/still-building/app/page.tsx) 이다.

이 페이지를 기준으로 아래 항목을 복제/확장하는 방향이 적절하다.

- 타이포 대비
- 컬러 사용 방식
- 섹션 간 여백
- 라인 사용 밀도
- 정보 배치의 호흡

## 참고 파일

- [`app/globals.css`](/Users/jeje/Documents/GitHub/still-building/app/globals.css)
- [`app/layout.tsx`](/Users/jeje/Documents/GitHub/still-building/app/layout.tsx)
- [`app/page.tsx`](/Users/jeje/Documents/GitHub/still-building/app/page.tsx)
- [`components/Navbar.tsx`](/Users/jeje/Documents/GitHub/still-building/components/Navbar.tsx)
- [`components/Footer.tsx`](/Users/jeje/Documents/GitHub/still-building/components/Footer.tsx)
- [`components/PageHeader.tsx`](/Users/jeje/Documents/GitHub/still-building/components/PageHeader.tsx)
- [`components/SectionTitle.tsx`](/Users/jeje/Documents/GitHub/still-building/components/SectionTitle.tsx)
- [`components/Button.tsx`](/Users/jeje/Documents/GitHub/still-building/components/Button.tsx)
