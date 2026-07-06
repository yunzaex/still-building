import Link from "next/link";

const footerLinks = [
  { name: "Colophon", href: "/colophon" },
  { name: "Uses", href: "/uses" },
];

export default function Footer() {
  const footerTextStyle =
    "text-xs uppercase tracking-[0.18em] text-[var(--brown-light)] transition-colors hover:text-[var(--brown)]";

  return (
    <footer className="border-t border-[var(--line)] px-8 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className={footerTextStyle}>© YOONJAE ARCHIVE — STILL BUILDING</p>

        <nav className="flex gap-6">
          <Link href="/about" className={footerTextStyle}>
            About this site
          </Link>
          <a href="mailto:yunjae27@g" className={footerTextStyle}>
            Email
          </a>
          <a
            href="https://github.com/yunzaex"
            target="_blank"
            rel="noreferrer"
            className={footerTextStyle}
          >
            GitHub
          </a>
        </nav>

        <nav className="flex gap-6">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className={footerTextStyle}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
