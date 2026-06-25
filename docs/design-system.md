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
- 상단 시작 여백은 홈 기준 `pt-32`
- 구분은 진한 박스보다 `border`와 `line` 컬러로 해결
- 홈에서는 `grid` 기반 2단 구성과 4열 메뉴 요약 구조를 사용

## 컴포넌트 기준

현재 실제로 사용 중인 공용 컴포넌트는 아래와 같다.

- `Navbar`
- `Footer`

현재 파일은 있으나 아직 구현되지 않은 컴포넌트:

- `components/Container.tsx`
- `components/PageHeader.tsx`

따라서 현재 시점의 디자인 시스템은 "완성된 컴포넌트 라이브러리"라기보다 "홈 화면 중심의 스타일 기준선"에 가깝다.

## 현재 컬러 기준

글로벌 컬러는 [`app/globals.css`](/Users/jeje/Documents/GitHub/still-building/app/globals.css)에 정의되어 있다.

| 토큰 | 값 | 현재 역할 |
| --- | --- | --- |
| `--bg` | `#e2eaf2` | 기본 배경 |
| `--surface` | `#cec8c2` | 대형 비주얼 블록/보조 면 |
| `--text` | `#2d3536` | 기본 본문 텍스트 |
| `--brown` | `#3b2823` | 진한 포인트 텍스트 계열 |
| `--brown-light` | `#6a5048` | 보조 설명 텍스트 |
| `--line` | `#c3ccd6` | 구분선 |
| `--white` | `#f7f7f5` | 밝은 중립 색상 |
| `--accent` | `#8fa3b6` | 포인트 컬러 |

추가로 네비게이션에는 아래 하드코딩 색상이 쓰이고 있다.

- `#F2EFEA`
- `#9AA3AD`
- `#B7C9D9`

### 컬러 운영 원칙

- 새 UI를 만들 때는 가능하면 하드코딩보다 CSS 변수 사용을 우선한다.
- 네비게이션의 하드코딩 컬러는 추후 토큰화 대상이다.
- 현재 팔레트는 "밝은 배경 + 저채도 블루/브라운 조합"을 유지하는 것이 맞다.

## 현재 폰트 기준

글로벌 폰트 설정은 [`app/layout.tsx`](/Users/jeje/Documents/GitHub/still-building/app/layout.tsx)에 있다.

### 실제 사용 기준

- 기본 산세리프: `Hanken Grotesk`
- 세리프 디스플레이: `EB Garamond`

### 함께 로드되지만 보조 성격인 폰트

- `Geist`
- `Geist Mono`

### 운영 원칙

- 본문, 네비게이션, 설명 텍스트는 산세리프 기준
- 메인 헤드라인과 브랜드성 타이포는 세리프 기준
- 새 페이지를 만들 때는 홈 화면의 `font-serif` 사용 패턴을 우선 참고한다

## 현재 디자인 구현 상태

### 확정된 것

- 전체 무드는 차가운 블루-그레이 배경과 따뜻한 브라운 텍스트를 섞은 에디토리얼 포트폴리오 방향이다.
- 메인 타이포 조합은 `Hanken Grotesk` + `EB Garamond`다.
- 홈 화면은 넓은 여백, 대문자 제목, 얇은 라인, 아카이브형 카피를 중심으로 구성된다.
- 글로벌 네비게이션과 푸터는 모든 페이지 공통 레이아웃에 포함된다.

### 부분 확정

- 컬러 시스템은 CSS 변수로 선언되어 있으나, 일부 네비게이션 색상은 하드코딩되어 있다.
- 홈 화면의 레이아웃 언어는 잡혀 있으나 서브 페이지는 아직 플레이스홀더 상태다.
- 공용 컴포넌트 구조는 시작되었지만 실제 재사용 가능한 UI 시스템으로는 아직 확장되지 않았다.

### 아직 미확정

- 페이지별 상세 레이아웃 규칙
- 버튼, 링크, 카드, 섹션 헤더 등 세부 컴포넌트 규격
- 반응형 기준의 명확한 설계 원칙

## 유지해야 하는 기준

- 홈 화면의 시각 언어를 전체 페이지의 기준으로 삼는다.
- 큰 제목, 낮은 채도의 색, 얇은 라인, 넓은 여백을 유지한다.
- 공용 스타일은 가능한 한 토큰과 공용 컴포넌트로 끌어올린다.

## 다음으로 확정해야 할 항목

1. `Container`, `PageHeader` 등 기본 레이아웃 컴포넌트 정의
2. 네비게이션 컬러의 토큰화
3. 서브 페이지 공통 템플릿 정의
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
