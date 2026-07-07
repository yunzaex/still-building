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
      <p className="text-xs uppercase tracking-[0.22em] text-(--brown-light)">
        {label}
      </p>

      <h3 className="mt-4 text-3xl text-(--brown)">{title}</h3>

      <p className="mt-4 text-sm leading-6 text-(--text)">{description}</p>

      <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-(--brown-light) transition group-hover:text-(--brown)">
        View →
      </span>
    </Link>
  );
}
