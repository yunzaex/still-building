"use client";

import Link from "next/link";

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "Notes", href: "/notes" },
  { name: "Archive", href: "/archive" },
  { name: "Now", href: "/now" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-(--line) bg-(--bg)">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between text-sm">
        <Link
          href="/"
          className="group tracking-[0.25em] text-(--brown-light) transition-colors hover:text-(--brown)"
        >
          <span>STILL BUILDING</span>
          <span className="ml-0.5 inline-block opacity-0 animate-cursor">
            |
          </span>
        </Link>

        <div className="flex gap-6">
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
        </div>
      </nav>
    </header>
  );
}
