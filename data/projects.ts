import type { StaticImageData } from "next/image";

import stillBuildingImage from "@/public/project-stillbuilding.png";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectContribution = {
  title: string;
  description: string;
};

export type ProjectChallenge = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

export type Project = {
  slug: string;
  title: string;
  year: number;
  category: string;
  role: string;

  description: string;

  overview: string[];
  contributions: ProjectContribution[];
  challenges: ProjectChallenge[];
  results: string[];
  reflection: string[];

  tags: string[];
  image: string | StaticImageData;
  imageAlt: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "still-building",
    title: "STILL BUILDING",
    year: 2026,
    category: "Web",
    role: "Design & Development",
    description: "Personal website and digital archive.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    overview: [
      "프로젝트 결과물만 정리하는 일반적인 포트폴리오보다, 무엇을 만들고 있는지와 그 과정에서 남긴 기록까지 함께 보여주는 공간이 필요했습니다.",
      "이를 위해 프로젝트를 소개하는 Projects, 생각과 학습을 기록하는 Notes, 과거 작업을 보관하는 Archive, 현재 관심사와 활동을 보여주는 Now로 사이트의 콘텐츠 구조를 나누었습니다.",
      "완성된 결과만 전시하는 공간이 아니라 앞으로도 콘텐츠를 계속 추가하고 구조를 확장할 수 있는 개인 아카이브를 목표로 디자인하고 개발했습니다.",
    ],

    contributions: [
      {
        title: "정보 구조 설계",
        description:
          "Projects, Notes, Archive, Now의 역할을 구분하고, 서로 다른 콘텐츠가 한 사이트 안에서 일관된 흐름을 갖도록 전체 정보 구조를 설계했습니다.",
      },
      {
        title: "디자인 시스템 구축",
        description:
          "색상, 타이포그래피, 여백, 컨테이너, 구분선 등의 공통 규칙을 토큰과 컴포넌트로 정리해 페이지마다 같은 디자인 언어를 사용하도록 구성했습니다.",
      },
      {
        title: "반응형 레이아웃 구현",
        description:
          "Next.js와 Tailwind CSS를 사용해 홈과 프로젝트 페이지를 구현하고, 데스크톱부터 모바일까지 콘텐츠의 위계가 유지되도록 반응형 레이아웃을 적용했습니다.",
      },
    ],

    challenges: [
      {
        title: "콘텐츠가 늘어나도 유지되는 구조 만들기",
        problem:
          "초기 화면만 완성하는 방식으로 개발하면 프로젝트와 기록이 늘어날수록 페이지 구조와 스타일이 중복될 수 있었습니다.",
        solution:
          "공통 컴포넌트를 만들고 프로젝트 정보를 데이터 파일에서 관리하도록 구조를 분리했습니다.",
        result:
          "새 프로젝트를 추가할 때 페이지 마크업을 반복하지 않고 데이터만 추가해 쉽게 확장할 수 있게 되었습니다.",
      },
      {
        title: "감성과 가독성 사이의 균형",
        problem:
          "세리프 타이틀과 차분한 색상을 강조하면 분위기는 살아나지만, 본문 가독성과 정보 전달력이 약해질 수 있었습니다.",
        solution:
          "큰 제목과 라벨에는 개성 있는 타이포그래피를 사용하고, 긴 본문에는 가독성이 높은 서체와 제한된 본문 너비를 적용했습니다.",
        result:
          "사이트의 에디토리얼한 분위기를 유지하면서도 프로젝트 설명을 편하게 읽을 수 있는 위계를 만들었습니다.",
      },
    ],

    results: [
      "프로젝트와 기록을 한곳에서 탐색할 수 있는 개인 포트폴리오 구조를 완성했습니다.",
      "공통 레이아웃과 디자인 토큰을 적용해 페이지별 스타일의 일관성을 확보했습니다.",
      "프로젝트 데이터를 기반으로 목록과 동적 상세페이지를 확장할 수 있는 구조를 구현했습니다.",
    ],

    reflection: [
      "처음에는 각 화면의 시각적인 완성도에 집중했지만, 작업을 진행하면서 포트폴리오 역시 콘텐츠가 계속 쌓이는 하나의 제품이라는 점을 알게 되었습니다.",
      "이번 작업을 통해 한 화면을 예쁘게 만드는 것보다 공통 규칙과 재사용 가능한 구조를 먼저 설계하는 것이 이후의 개발 속도와 완성도에 더 큰 영향을 준다는 점을 배웠습니다.",
    ],

    image: stillBuildingImage,
    imageAlt: "STILL BUILDING project preview",
    links: [
      {
        label: "View source",
        href: "https://github.com/yunzaex/still-building",
      },
    ],
  },
  {
    slug: "weartrack",
    title: "WEARTRACK",
    year: 2026,
    category: "App",
    role: "Frontend",
    description:
      "An AI-powered iOS app that helps users manage their wardrobe.",
    tags: ["React Native", "Expo", "TypeScript"],
    overview: [
      "옷이 많아도 자주 입는 옷만 반복하거나 이미 가지고 있는 것과 비슷한 옷을 다시 구매하는 문제에서 출발했습니다.",
      "WEARTRACK은 사진을 통해 의류를 등록하고 디지털 옷장에서 보유한 옷을 확인할 수 있도록 합니다. 여기에 퀘스트, 주간 회고, 장기 미착용 알림을 연결해 단순한 의류 보관을 넘어 실제 옷장 활용으로 이어지도록 설계했습니다.",
      "사용자는 자신의 옷장 현황과 착용 기록을 확인하고, 평소 잘 입지 않던 옷을 다시 활용하는 습관을 만들 수 있습니다.",
    ],

    contributions: [
      {
        title: "온보딩 및 계정 관리",
        description:
          "온보딩, 닉네임 중복 확인, 마이페이지, 로그아웃과 회원탈퇴 등 앱 진입부터 계정 관리까지 이어지는 사용자 흐름을 구현했습니다.",
      },
      {
        title: "디지털 옷장과 의류 관리",
        description:
          "옷장 생성과 조회, 의류 목록, 검색과 필터, 의류 상세 정보 수정 등 사용자가 자신의 옷을 탐색하고 관리하는 핵심 기능을 구현했습니다.",
      },
      {
        title: "사용자 리텐션 기능",
        description:
          "퀘스트, 오늘 입은 옷, 주간 회고, 장기 미착용 의류와 알림 기능을 구현해 사용자가 앱을 반복적으로 사용하도록 돕는 경험을 구성했습니다.",
      },
      {
        title: "공통 피드백 컴포넌트",
        description:
          "공통 Alert와 Toast를 적용해 성공, 오류, 확인이 필요한 상황에서 일관된 사용자 피드백을 제공하도록 개선했습니다.",
      },
    ],

    challenges: [
      {
        title: "빌드 자격증명 오류",
        problem:
          "인증서와 프로비저닝 프로파일이 일치하지 않아 EAS iOS Development Build가 반복해서 실패했습니다.",
        solution:
          "기존 로컬 자격증명을 정리하고 Expo Remote Credentials 방식으로 전환해 인증서와 프로비저닝 프로파일을 다시 발급했습니다.",
        result:
          "Development Build 생성에 성공했고 실제 iPhone에서 로그인과 핵심 기능을 검증할 수 있었습니다.",
      },
      {
        title: "사진 분석 요청 타임아웃",
        problem:
          "의류 사진 분석에 시간이 걸리면서 서버에서는 정상 처리 중인데도 클라이언트에서는 요청 실패로 판단하는 문제가 발생했습니다.",
        solution:
          "실제 API 처리 시간을 기준으로 요청 제한 시간을 조정하고 로딩과 오류 상태를 분리해 처리했습니다.",
        result:
          "분석이 완료되기 전에 요청이 종료되는 문제를 줄이고 의류 등록 흐름을 안정화했습니다.",
      },
    ],

    results: [
      "온보딩부터 디지털 옷장, 퀘스트, 주간 회고, 알림, 마이페이지까지 핵심 사용자 흐름을 구현했습니다.",
      "Expo Development Build를 생성하고 iOS 실기기에서 주요 기능을 검증했습니다.",
      "공통 피드백 UI와 서버 상태 관리 방식을 정리해 사용자 경험과 코드 일관성을 개선했습니다.",
    ],

    reflection: [
      "웹 프론트엔드 중심의 경험에서 React Native 기반 모바일 앱 개발로 범위를 확장하며 실기기 연결, 네이티브 권한, 인증서와 배포 환경을 직접 다뤘습니다.",
      "기능 구현만으로 앱이 완성되는 것이 아니라 외부 인증, 네이티브 설정, API 응답 시간과 같은 환경적 요소도 초기 개발 계획에 포함해야 한다는 점을 배웠습니다.",
    ],

    image: "/project-weartrack.svg",
    imageAlt: "WEARTRACK wardrobe management app preview",
    links: [{ label: "View source", href: "https://github.com/WEARTRACK/FE" }],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
