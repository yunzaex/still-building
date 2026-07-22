import Link from "next/link";

type MenuCardProps = {
  href: string;
  label: string;
  title: string;
  description: string;
};

export default function MenuCard({
  href,
  label,
  title,
  description,
}: MenuCardProps) {
  return (
    <Link
      href={href}
      className="group block border-t border-(--line) pt-6 transition hover:-translate-y-1"
    >
      <p className="type-label text-(--brown-light)">{label}</p>

      <h3 className="type-title mt-4 text-(--brown)">{title}</h3>

      <p className="type-body-small mt-4 text-(--text)">{description}</p>

      <span className="type-label mt-6 inline-block text-(--brown-light) transition group-hover:text-(--brown)">
        View →
      </span>
    </Link>
  );
}
