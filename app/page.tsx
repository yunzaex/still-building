const menuItems = [
  {
    number: "01",
    title: "Projects",
    description: "Things I've built and am building.",
  },
  {
    number: "02",
    title: "Notes",
    description: "Thoughts, studies, and ideas.",
  },
  {
    number: "03",
    title: "Archive",
    description: "Snapshots of the past.",
  },
  {
    number: "04",
    title: "Now",
    description: "What I'm into right now.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-6xl px-8 pb-16 pt-32">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-6 text-sm tracking-[0.3em] text-[var(--brown-light)]">
              YOONJAE ARCHIVE
            </p>

            <h1 className="text-7xl font-semibold uppercase leading-[0.9] tracking-tight md:text-9xl">
              Still
              <br />
              Building
            </h1>
          </div>

          <p className="max-w-sm text-lg leading-8 text-[var(--brown-light)]">
            Projects, notes, and everything in between.
          </p>
        </div>

        <div className="mt-16 h-[520px] w-full bg-[var(--surface)]" />

        <section className="mt-8 grid gap-6 border-t border-[var(--line)] pt-6 md:grid-cols-4">
          {menuItems.map((item) => (
            <article
              key={item.number}
              className="border-r border-[var(--line)] pr-6 last:border-r-0"
            >
              <p className="mb-4 text-xs text-[var(--brown-light)]">
                {item.number}
              </p>

              <h2 className="text-2xl font-medium uppercase">{item.title}</h2>

              <p className="mt-3 text-sm leading-6 text-[var(--brown-light)]">
                {item.description}
              </p>

              <p className="mt-6 text-lg">↗</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
