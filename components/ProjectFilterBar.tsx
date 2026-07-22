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
                ? "type-label text-(--text)"
                : "type-label text-(--brown-light) transition-colors hover:text-(--text)"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="type-label self-start text-(--brown-light) md:self-auto"
      >
        NEWEST ↓
      </button>
    </div>
  );
}
