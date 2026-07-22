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
      ? "type-label inline-flex items-center border border-(--brown) px-5 py-3 text-(--brown) transition hover:bg-(--brown) hover:text-(--white)"
      : "type-label inline-flex items-center border border-(--line) px-5 py-3 text-(--brown-light) transition hover:border-(--brown) hover:text-(--brown)";

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
