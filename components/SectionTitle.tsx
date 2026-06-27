type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <header className="border-t border-[var(--line)] pt-8">
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[var(--brown-light)]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif text-4xl leading-tight text-[var(--brown)] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text)]">
          {description}
        </p>
      )}
    </header>
  );
}
