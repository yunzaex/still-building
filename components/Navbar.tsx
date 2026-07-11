"use client";

import Link from "next/link";
import Container from "@/components/Container";

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "Notes", href: "/notes" },
  { name: "Archive", href: "/archive" },
  { name: "Now", href: "/now" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--line) bg-(--bg)/90 backdrop-blur-md">
      <Container>
        <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <Link
            href="/"
            className="group w-fit text-sm font-medium tracking-[0.16em] text-(--brown)"
          >
            <span>STILL BUILDING</span>
            <span className="ml-0.5 inline-block opacity-0 animate-cursor">
              |
            </span>
          </Link>

          <nav
            aria-label="주요 메뉴"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:justify-end sm:gap-x-7"
          >
            {navItems.map((item, index) => {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex min-w-24 items-center overflow-visible text-(--brown-light) transition-colors duration-200 hover:text-(--brown)"
                >
                  <span
                    className="
      absolute
      left-0
      text-xs
      tracking-[0.2em]
      opacity-0
      -translate-x-4
      transition-all
      duration-300
      group-hover:opacity-100
      group-hover:translate-x-0
    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="transition-transform duration-300 group-hover:translate-x-8">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
