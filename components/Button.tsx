// components/ui/Button.tsx

import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const className =
    variant === "primary"
      ? "inline-flex items-center border border-[var(--brown)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[var(--brown)] transition hover:bg-[var(--brown)] hover:text-[var(--white)]"
      : "inline-flex items-center border border-[var(--line)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[var(--brown-light)] transition hover:border-[var(--brown)] hover:text-[var(--brown)]";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
