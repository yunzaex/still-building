import Link from "next/link";

import Container from "@/components/Container";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-(--bg)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <section className="border-y border-(--line) py-16 sm:py-24">
          <p className="type-label mb-5 text-(--brown-light)">
            404 / Not Found
          </p>

          <h1 className="type-heading max-w-2xl text-(--brown)">
            This page is not here.
          </h1>

          <p className="type-body mt-6 max-w-lg text-(--text)">
            The address may be incorrect, or the page may have moved.
          </p>

          <nav
            aria-label="404 page links"
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4"
          >
            <Link
              href="/"
              className="type-label border-b border-(--brown) pb-1 text-(--brown) focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-(--brown)"
            >
              Go home <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </section>
      </Container>
    </main>
  );
}
