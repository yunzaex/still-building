import Link from "next/link";

import { siteConfig } from "@/config/site";

const footerLinks = [
  { name: "Colophon", href: "/colophon" },
  { name: "Uses", href: "/uses" },
];

const footerTextStyle = [
  "type-label",
  "text-(--surface)",
  "transition-colors duration-300",
  "hover:text-(--white)",
].join(" ");

const footerNavStyle = "flex flex-wrap items-center gap-x-6 gap-y-3";

export default function Footer() {
  return (
    <footer className="border-t border-(--line) bg-(--accent)">
      <div
        className={[
          "mx-auto flex max-w-6xl flex-col gap-6 px-8 py-8",
          "md:flex-row md:items-end md:justify-between",
        ].join(" ")}
      >
        <p className={footerTextStyle}>{siteConfig.copyright}</p>

        <nav aria-label="Contact links" className={footerNavStyle}>
          <Link href="/about" className={footerTextStyle}>
            About this site
          </Link>

          <a href={`mailto:${siteConfig.email}`} className={footerTextStyle}>
            Email
          </a>

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={footerTextStyle}
          >
            GitHub
          </a>
        </nav>

        <nav aria-label="Site information" className={footerNavStyle}>
          {footerLinks.map(({ name, href }) => (
            <Link key={href} href={href} className={footerTextStyle}>
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
