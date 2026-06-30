import Link from "next/link";

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "Notes", href: "/notes" },
  { name: "Archive", href: "/archive" },
  { name: "Now", href: "/now" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-8 py-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between text-sm text-[var(--white)]">
        <Link href="/" className="tracking-[0.25em] text-[#9AA3AD]">
          YOONJAE
        </Link>

        <div className="flex gap-6 text-[#B7C9D9]">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
