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
      className="group block border-t border-[var(--line)] pt-6 transition hover:-translate-y-1"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--brown-light)]">
        {label}
      </p>

      <h3 className="mt-4 font-serif text-3xl text-[var(--brown)]">{title}</h3>

      <p className="mt-4 text-sm leading-6 text-[var(--text)]">{description}</p>

      <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-[var(--brown-light)] transition group-hover:text-[var(--brown)]">
        View →
      </span>
    </Link>
  );
}
