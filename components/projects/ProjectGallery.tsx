import type { Project } from "@/data/projects";

import ProjectCard from "./ProjectCard";
import styles from "./ProjectGallery.module.css";

type ProjectGalleryProps = {
  projects: Project[];
};

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <section className="mt-6 sm:mt-8" aria-label="Projects gallery">
      <p
        id="projects-gallery-instructions"
        className="type-label py-6 text-(--brown-light)"
      >
        Scroll to explore
        <span aria-hidden="true"> →</span>
      </p>

      <ol
        className={styles.rail}
        aria-describedby="projects-gallery-instructions"
      >
        {projects.map((project) => (
          <li key={project.slug} className={styles.item}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ol>
    </section>
  );
}
