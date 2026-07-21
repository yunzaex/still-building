import { projectCategories } from "@/data/projects";

export default function ProjectFilterBar() {
  return (
    <div className="flex flex-col gap-6 border-b border-(--line) py-6 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {projectCategories.map((category, index) => (
          <button
            key={category}
            type="button"
            className={
              index === 0
                ? "text-xs uppercase tracking-[0.16em] text-(--text)"
                : "text-xs uppercase tracking-[0.16em] text-(--brown-light) transition-colors hover:text-(--text)"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="self-start text-xs uppercase tracking-[0.16em] text-(--brown-light) md:self-auto"
      >
        Newest ↕
      </button>
    </div>
  );
}
