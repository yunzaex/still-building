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

### 운영 원칙

- 홈 Hero의 메인 타이틀만 `font-hero`를 사용한다
- 본문, 네비게이션, 버튼, 카드 제목, 설명 텍스트는 `font-body` 기준으로 유지한다
- 긴 영문 문장이나 문장형 헤드라인은 `font-quote`를 우선 사용한다
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
4. 타이포 스케일과 spacing 규칙 문서화

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
