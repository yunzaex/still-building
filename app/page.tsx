import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1115] text-[#F2EFEA]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-8">
        <p className="mb-4 text-sm tracking-[0.3em] text-[#9AA3AD]">
          YOONJAE ARCHIVE
        </p>

        <h1 className="text-6xl font-semibold tracking-tight md:text-8xl">
          Still building.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-[#B5ACA3]">
          Projects, notes, and everything in between.
        </p>

        <div className="mt-12 flex gap-6 text-sm text-[#B7C9D9]">
          <Link href="/projects">Projects</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/archive">Archive</Link>
          <Link href="/now">Now</Link>
        </div>
      </section>
    </main>
  );
}
