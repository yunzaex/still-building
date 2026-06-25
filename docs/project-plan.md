# Project Plan

## 목적

이 문서는 `still-building` 프로젝트의 현재 기준선을 정리하는 문서다.

- 현재 무엇이 이미 확정되었는지
- 어떤 시각 언어를 기준으로 작업해야 하는지
- 어떤 영역이 아직 미완성인지

앞으로의 디자인/개발 작업은 이 문서를 기준으로 일관성을 맞춘다.

## 프로젝트 철학

`Still Building`은 단순한 개발자 포트폴리오가 아니다.

이 프로젝트는 시간이 지날수록 계속 업데이트되는 개인 아카이브를 지향한다.

- 포트폴리오
- 프로젝트
- 공부 기록
- 여행
- 사진
- 생각

위와 같은 축적물을 하나의 공간 안에 쌓아가며, 사용자의 성장 과정을 기록하는 `Living Archive`를 목표로 한다.

이 프로젝트에서 중요한 것은 "완성"이 아니라 "지속적인 업데이트"다.

### 철학적 기준

- 완결된 결과물보다 축적되는 과정이 중요하다.
- 사이트는 이력서가 아니라 살아 있는 개인 기록 저장소여야 한다.
- 각 페이지는 정보 정리뿐 아니라 시간의 흐름과 변화의 흔적을 담아야 한다.
- 이후 기능 추가 역시 "계속 쌓이는 구조"를 우선으로 판단한다.

## 현재 상태 요약

### 확정된 것

- 프로젝트는 `Next.js 16`, `React 19`, `Tailwind CSS 4` 기반이다.
- `app/` 라우터 구조를 사용한다.
- 프로젝트 철학과 페이지 역할이 정리되었다.
- 디자인 규칙은 별도 문서로 분리되었다.

### 부분 확정

- 디자인 시스템은 방향이 정리되었지만 실제 공용 컴포넌트 구현은 아직 초기 상태다.
- 대부분의 서브 페이지는 아직 플레이스홀더 상태다.

### 아직 미확정

- 콘텐츠 모델과 데이터 구조
- SEO/metadata 문구

## 현재 프로젝트 구조

### 루트 구조

```text
app/
  about/page.tsx
  archive/page.tsx
  favicon.ico
  globals.css
  layout.tsx
  notes/page.tsx
  now/page.tsx
  page.tsx
  projects/page.tsx
components/
  Container.tsx
  Footer.tsx
  Navbar.tsx
  PageHeader.tsx
public/
docs/
```

### 구조 해석

- `app/layout.tsx`
  - 글로벌 폰트, `Navbar`, `Footer`를 묶는 최상위 레이아웃
- `app/page.tsx`
  - 현재 가장 완성도가 높은 기준 페이지
- `app/about`, `app/archive`, `app/notes`, `app/now`, `app/projects`
  - 라우트는 존재하지만 아직 제목만 있는 초기 상태
- `app/globals.css`
  - 컬러 토큰과 기본 타이포 설정 보관
- `components/`
  - 공용 UI 영역이 될 예정이지만 현재는 `Navbar`, `Footer` 중심

## 페이지 역할

### Home

- 사이트의 첫인상
- Editorial Landing Page

### Projects

- 프로젝트 아카이브

### Notes

- 공부 및 생각 기록

### Archive

- 사진
- 여행
- 공연
- 일상
- 추억

### Now

- 현재 집중하는 것
- 월별 업데이트

### About

- 자기소개
- 사이트 소개

## 페이지별 구현 상태

| 영역 | 상태 | 메모 |
| --- | --- | --- |
| 홈 (`/`) | 진행 중 | 현재 디자인 기준선 역할 |
| 프로젝트 (`/projects`) | 미구현 | 제목만 존재 |
| 노트 (`/notes`) | 미구현 | 제목만 존재 |
| 아카이브 (`/archive`) | 미구현 | 제목만 존재 |
| 나우 (`/now`) | 미구현 | 제목만 존재 |
| 소개 (`/about`) | 미구현 | 제목만 존재 |

## 디자인 시스템 문서

디자인 규칙은 별도 문서에서 관리한다.

- [`docs/design-system.md`](/Users/jeje/Documents/GitHub/still-building/docs/design-system.md)

이 문서에는 아래 항목이 정리되어 있다.

- 디자인 방향과 페이지별 컨셉
- 레이아웃 기준
- 컬러 토큰과 운영 원칙
- 폰트 기준
- 공용 컴포넌트 상태
- 디자인 기준 페이지와 다음 확정 항목

## 장기 로드맵

### v1

- 디자인 시스템
- 정적 페이지
- 반응형
- 배포

### v2

- MDX
- 태그
- 검색
- Theme

### v3

- Guestbook
- Supabase CRUD
- 방문자 기능

### v4

- Reading
- Photography
- Bookmarks
- Uses
