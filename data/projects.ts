import type { StaticImageData } from "next/image";

import stillBuildingImage from "@/public/project-stillbuilding.png";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  year: number;
  category: string;
  role: string;
  description: string;
  content: string[];
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
    content: [
      "STILL BUILDING is my personal website and digital archive for documenting design, development, and works in progress.",
      "I designed and built the site as an evolving space to collect projects, notes, and experiments in one place.",
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
      "A smart wardrobe service for managing clothing and daily outfits.",
    tags: ["React Native", "Expo", "TypeScript"],
    content: [
      "WEARTRACK is a smart wardrobe service that helps users keep track of their clothes and plan everyday outfits.",
      "I focused on building the frontend experience for browsing garments, organizing a personal wardrobe, and creating daily outfit combinations.",
    ],
    image: "/project-weartrack.svg",
    imageAlt: "WEARTRACK wardrobe management app preview",
    links: [{ label: "View source", href: "https://github.com/WEARTRACK/FE" }],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
