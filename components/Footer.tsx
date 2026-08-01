import Link from "next/link";

import { siteConfig } from "@/config/site";

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

        <nav aria-label="External links" className={footerNavStyle}>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={footerTextStyle}
          >
            GitHub
          </a>

          <a
            href={siteConfig.velogUrl}
            target="_blank"
            rel="noreferrer"
            className={footerTextStyle}
          >
            Velog
          </a>

          <Link href="/colophon" className={footerTextStyle}>
            Colophon
          </Link>
        </nav>
      </div>
    </footer>
  );
}
