import type { Project } from "@/data/projects";

type ProjectListItemProps = {
  project: Project;
};

export default function ProjectListItem({ project }: ProjectListItemProps) {
  return (
    <article className="grid gap-6 border-b border-(--line) py-8 md:grid-cols-[0.8fr_1.6fr_auto] md:items-start">
      <div className="aspect-4/3 bg-(--surface)" />

      <div>
        <div className="mb-3 flex items-center gap-3">
          <h2 className="text-sm uppercase tracking-[0.16em]">
            {project.title}
          </h2>

          <span className="text-xs text-(--brown-light)">
            {project.category}
          </span>
        </div>

        <p className="mb-5 max-w-lg text-sm leading-6 text-(--brown-light)">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs uppercase tracking-[0.12em] text-(--brown-light)"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs tracking-[0.16em] text-(--brown-light)">
        {project.year}
      </p>
    </article>
  );
}
