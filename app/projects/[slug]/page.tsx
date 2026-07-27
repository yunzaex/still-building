import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-(--bg)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <article>
          <header className="border-b border-(--line) pb-12">
            <p className="type-label mb-4 text-(--brown-light)">
              01 / Projects
            </p>

            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <h1 className="type-heading text-(--brown)">{project.title}</h1>

              <p className="type-body max-w-md text-(--text)">
                {project.description}
              </p>
            </div>
          </header>

          <div className="relative mt-8 aspect-[4/3] overflow-hidden border border-(--line) bg-(--surface) sm:mt-12">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(max-width: 1199px) calc(100vw - 48px), 1152px"
              className="object-cover"
            />
          </div>

          <div className="grid border-b border-(--line) py-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-(--line) pb-10 md:block md:border-b-0 md:pb-0">
              <div className="md:mb-8">
                <dt className="type-label mb-2 text-(--brown-light)">Year</dt>
                <dd className="type-body text-(--text)">{project.year}</dd>
              </div>

              <div className="md:mb-8">
                <dt className="type-label mb-2 text-(--brown-light)">
                  Category
                </dt>
                <dd className="type-body text-(--text)">{project.category}</dd>
              </div>

              <div>
                <dt className="type-label mb-2 text-(--brown-light)">Role</dt>
                <dd className="type-body text-(--text)">{project.role}</dd>
              </div>
            </dl>

            <div className="pt-10 md:pt-0">
              <h2 className="type-label mb-6 text-(--brown-light)">About</h2>

              <div className="grid gap-5">
                {project.content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="type-body max-w-2xl text-(--text)"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <section className="border-b border-(--line) py-10">
            <h2 className="type-label mb-5 text-(--brown-light)">Tags</h2>

            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="type-meta border border-(--line) px-3 py-2 text-(--accent)"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </section>

          {project.links.length > 0 ? (
            <section className="border-b border-(--line) py-10">
              <h2 className="type-label mb-5 text-(--brown-light)">Links</h2>

              <ul className="flex flex-wrap gap-x-8 gap-y-4">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="type-label border-b border-(--brown) pb-1 text-(--brown) focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-(--brown)"
                    >
                      {link.label} <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>
      </Container>
    </main>
  );
}
