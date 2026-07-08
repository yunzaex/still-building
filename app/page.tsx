import Image from "next/image";
import MenuCard from "@/components/MenuCard";

const menuItems = [
  {
    href: "/projects",
    label: "01",
    title: "Projects",
    description: "Things I've built and am building.",
  },
  {
    href: "/notes",
    label: "02",
    title: "Notes",
    description: "Thoughts, studies, and ideas.",
  },
  {
    href: "/archive",
    label: "03",
    title: "Archive",
    description: "Snapshots of the past.",
  },
  {
    href: "/now",
    label: "04",
    title: "Now",
    description: "What I'm into right now.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-(--bg) text-(--text)">
      <section className="mx-auto max-w-6xl px-8 pb-16 pt-32">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <h1 className="font-hero text-7xl uppercase leading-[0.9] tracking-tight md:text-9xl">
              Still
              <br />
              Building
            </h1>
          </div>

          <p className="font-quote max-w-md text-3xl leading-[1.25] text-(--brown-light) italic md:justify-self-end md:text-right md:text-4xl">
            Between logic and aesthetics.
          </p>
        </div>

        <div className="relative mt-16 aspect-[16/9] w-full overflow-hidden md:aspect-[2.2/1]">
          <Image
            src="/hero-image.webp"
            alt="Hero image"
            fill
            priority
            className="object-contain"
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
      </section>
    </main>
  );
}
