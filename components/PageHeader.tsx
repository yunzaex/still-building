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
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-(--brown-light)">
          {label}
        </p>

        <h1 className="font-serif text-5xl leading-none md:text-7xl">
          {title}
        </h1>
      </div>

      <p className="max-w-md text-sm leading-7 text-(--brown-light) md:justify-self-end">
        {description}
      </p>
    </header>
  );
}
