import Link from "next/link";

type CollectionFooterProps = {
  current: number;
  total: number;
  href: string;
  label: string;
};

export default function CollectionFooter({
  current,
  total,
  href,
  label,
}: CollectionFooterProps) {
  const formattedCurrent = String(current).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");

  return (
    <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="type-meta text-(--brown-light)">
        {formattedCurrent} / {formattedTotal}
      </p>

      <Link
        href={href}
        className="type-label transition-colors hover:text-(--brown)"
      >
        {label} →
      </Link>
    </div>
  );
}
