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
    <header className="border-t border-(--line) pt-8">
      {eyebrow && (
        <p className="type-label mb-3 text-(--brown-light)">
          {eyebrow}
        </p>
      )}

      <h2 className="type-title text-(--brown)">
        {title}
      </h2>

      {description && (
        <p className="type-body mt-4 max-w-2xl text-(--text)">
          {description}
        </p>
      )}
    </header>
  );
}
