import type { StaticImageData } from "next/image";

import stillBuildingImage from "@/public/project-stillbuilding.png";

export type Project = {
  title: string;
  year: number;
  category: string;
  role: string;
  description: string;
  tags: string[];
  image?: string | StaticImageData;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "STILL BUILDING",
    year: 2026,
    category: "Web",
    role: "Design & Development",
    description: "Personal website and digital archive.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: stillBuildingImage,
  },
  {
    title: "WEARTRACK",
    year: 2026,
    category: "App",
    role: "Frontend",
    description:
      "A smart wardrobe service for managing clothing and daily outfits.",
    tags: ["React Native", "Expo", "TypeScript"],
    image: "/project-weartrack.svg",
  },
];
