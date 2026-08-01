import Image from "next/image";
import Container from "@/components/Container";
import MenuCard from "@/components/MenuCard";

const menuItems = [
  {
    href: "/projects",
    label: "01",
    title: "Projects",
    description: "Selected work and shipped experiments.",
  },
  {
    href: "/archive",
    label: "02",
    title: "Archive",
    description: "Photographs, places, sounds, and small memories.",
  },
  {
    href: "/lab",
    label: "03",
    title: "Lab",
    description: "Visual tests for motion, type, color, and code.",
  },
  {
    href: "/about",
    label: "04",
    title: "About",
    description: "The person and practice behind this site.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-(--bg) text-(--text)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <h1 className="type-display">
              Still
              <br />
              Building
            </h1>
          </div>

          <p className="type-lede ml-auto w-full max-w-[18rem] text-right text-(--brown-light) italic">
            Between logic and aesthetics.
          </p>
        </div>

        <div className="mt-16 w-full">
          <Image
            src="/main-home.webp"
            alt="Hero image"
            width={4622}
            height={2600}
            priority
            sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1199px) 85vw, 1152px"
            className="h-auto w-full"
          />
        </div>

        <section className="grid gap-8 py-24 md:grid-cols-4">
          {menuItems.map((item) => (
            <MenuCard
              key={item.href}
              href={item.href}
              label={item.label}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </Container>
    </main>
  );
}
