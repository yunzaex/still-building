export type Project = {
  title: string;
  year: number;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "STILL BUILDING",
    year: 2026,
    category: "Web",
    description: "Personal website and digital archive.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "WEARTRACK",
    year: 2026,
    category: "App",
    description: "A smart wardrobe service for managing clothing.",
    tags: ["React Native", "Expo", "TypeScript"],
  },
];

export const projectCategories = ["All", "Web", "App", "AI", "Experiment"];
