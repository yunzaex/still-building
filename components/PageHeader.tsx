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
      <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[var(--brown-light)]">
        {label}
      </p>

      <h1 className="max-w-4xl font-serif text-6xl leading-none text-[var(--brown)] md:text-8xl">
        {title}
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--text)]">
        {description}
      </p>
    </section>
  );
}
