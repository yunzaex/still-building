type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
};

export default function PageHeader({
  label,
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="grid gap-8 border-b border-(--line) pb-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
      <div>
        <p className="type-label mb-4 text-(--brown-light)">
          {label}
        </p>

        <h1 className="type-heading">
          {title}
        </h1>
      </div>

      <p className="type-body-small max-w-md text-(--brown-light) md:justify-self-end">
        {description}
      </p>
    </header>
  );
}
