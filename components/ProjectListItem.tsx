import type { Project } from "@/data/projects";
import Image from "next/image";

type ProjectListItemProps = {
  project: Project;
};

export default function ProjectListItem({ project }: ProjectListItemProps) {
  return (
    <article className="grid gap-6 border-b border-(--line) py-8 md:grid-cols-[0.8fr_1.6fr_auto] md:items-start">
      <div className="relative aspect-16/9 overflow-hidden bg-(--surface)">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            className="object-cover"
          />
        ) : null}
      </div>

      <div>
        <div className="mb-3 flex items-center gap-7">
          <h2 className="type-title">{project.title}</h2>

          <span className="type-body-small text-(--brown-light)">
            {project.category}
          </span>
        </div>

        <p className="type-body mb-5 max-w-lg text-(--brown-light)">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="type-label rounded-full border border-(--brown-light) px-3 py-1 text-(--brown-light)"
            >
              {" "}
              # {tag}
            </li>
          ))}
        </ul>
      </div>

      <p className="type-meta text-(--brown-light)">{project.year}</p>
    </article>
  );
}
