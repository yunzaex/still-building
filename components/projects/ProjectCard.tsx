import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";

import styles from "./ProjectGallery.module.css";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <div className={styles.media}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            loading="eager"
            sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1199px) 58vw, 640px"
            className={styles.image}
          />
        ) : null}
      </div>

      <div className={styles.summary}>
        <h3 className="type-title text-(--accent)">{project.title}</h3>
        <p className="type-meta text-(--accent)">{project.year}</p>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHeader} aria-hidden="true">
          <h3 className="type-title text-(--white)">{project.title}</h3>
          <p className="type-meta text-(--white)">{project.year}</p>
        </div>

        <p className="type-body-small max-w-md">{project.description}</p>

        <div className={styles.meta}>
          <p className="type-meta text-(--white)">
            {project.category} · {project.role}
          </p>
          <p className="type-meta text-(--white)">{project.tags.join(" · ")}</p>
        </div>

        <span className="type-label self-end">View project →</span>
      </div>
    </>
  );

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={styles.card}
      aria-label={`${project.title} 프로젝트 보기`}
    >
      {content}
    </Link>
  );
}
