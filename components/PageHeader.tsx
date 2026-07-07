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
    <section className="pt-32 pb-20">
      <p className="mb-5 text-xs uppercase tracking-[0.28em] text-(--brown-light)">
        {label}
      </p>

      <h1 className="font-quote max-w-4xl text-6xl leading-none text-(--brown) md:text-8xl">
        {title}
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-(--text)">
        {description}
      </p>
    </section>
  );
}
