import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectDetailSection from "@/components/projects/ProjectDetailSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[projectIndex - 1];
  const nextProject = projects[projectIndex + 1];

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
            </div>
          </header>

          <section className="grid border-b border-(--line) py-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:py-14 lg:gap-20">
            <div className="relative aspect-square overflow-hidden border border-(--line) bg-(--surface)">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority
                sizes="(max-width: 767px) calc(100vw - 32px), 520px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col pt-8 md:pt-0">
              <div>
                <p className="type-lede max-w-xl text-(--brown)">
                  {project.description}
                </p>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-7 pt-8">
                <div>
                  <dt className="type-label mb-2 text-(--brown-light)">Year</dt>
                  <dd className="type-body-small text-(--text)">
                    {project.year}
                  </dd>
                </div>

                <div>
                  <dt className="type-label mb-2 text-(--brown-light)">
                    Category
                  </dt>
                  <dd className="type-body-small text-(--text)">
                    {project.category}
                  </dd>
                </div>

                <div>
                  <dt className="type-label mb-2 text-(--brown-light)">Role</dt>
                  <dd className="type-body-small text-(--text)">
                    {project.role}
                  </dd>
                </div>

                <div>
                  <dt className="type-label mb-2 text-(--brown-light)">
                    Stack
                  </dt>
                  <dd className="type-body-small text-(--text)">
                    {project.tags.slice(0, 3).join(", ")}
                  </dd>
                </div>
              </dl>

              {project.links.length > 0 ? (
                <ul className="mt-auto flex flex-wrap gap-x-7 gap-y-4 pt-10">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="type-label border-b border-(--brown) pb-1 text-(--brown) focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-(--brown)"
                      >
                        {link.label} <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>

          <ProjectDetailSection number="01" title="Overview">
            <div className="grid max-w-3xl gap-5">
              {project.overview.map((paragraph) => (
                <p key={paragraph} className="type-body text-(--text)">
                  {paragraph}
                </p>
              ))}
            </div>
          </ProjectDetailSection>

          <ProjectDetailSection number="02" title="Contribution">
            <div>
              {project.contributions.map((contribution, index) => (
                <article
                  key={contribution.title}
                  className={
                    index === 0 ? "pb-8" : "border-t border-(--line) py-8"
                  }
                >
                  <div className="grid gap-3 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-5">
                    <span className="type-meta text-(--brown-light)">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="type-title text-(--brown)">
                        {contribution.title}
                      </h3>

                      <p className="type-body mt-4 max-w-2xl text-(--text)">
                        {contribution.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </ProjectDetailSection>

          <ProjectDetailSection number="03" title="Challenges">
            <div className="grid gap-14">
              {project.challenges.map((challenge, index) => (
                <article key={challenge.title}>
                  <p className="type-meta mb-3 text-(--brown-light)">
                    Challenge {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="type-title text-(--brown)">
                    {challenge.title}
                  </h3>

                  <dl className="mt-7 grid gap-7 border-t border-(--line) pt-7 lg:grid-cols-3 lg:gap-10">
                    <div>
                      <dt className="type-label mb-3 text-(--brown-light)">
                        Problem
                      </dt>

                      <dd className="type-body-small text-(--text)">
                        {challenge.problem}
                      </dd>
                    </div>

                    <div>
                      <dt className="type-label mb-3 text-(--brown-light)">
                        Solution
                      </dt>

                      <dd className="type-body-small text-(--text)">
                        {challenge.solution}
                      </dd>
                    </div>

                    <div>
                      <dt className="type-label mb-3 text-(--brown-light)">
                        Result
                      </dt>

                      <dd className="type-body-small text-(--text)">
                        {challenge.result}
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </ProjectDetailSection>

          <ProjectDetailSection number="04" title="Result">
            <ol>
              {project.results.map((result, index) => (
                <li
                  key={result}
                  className={`
        grid grid-cols-[2rem_minmax(0,1fr)] gap-5 py-6
        ${index === 0 ? "" : "border-t border-(--line)"}
      `}
                >
                  <span className="type-meta text-(--brown-light)">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="type-body text-(--text)">{result}</p>
                </li>
              ))}
            </ol>
          </ProjectDetailSection>

          <ProjectDetailSection number="05" title="Reflection">
            <div className="grid max-w-3xl gap-5">
              {project.reflection.map((paragraph) => (
                <p key={paragraph} className="type-body text-(--text)">
                  {paragraph}
                </p>
              ))}
            </div>
          </ProjectDetailSection>

          <nav
            className="flex justify-center border-b border-(--line) py-10"
            aria-label="Project navigation"
          >
            <div className="inline-grid grid-cols-[2rem_auto_2rem] items-center gap-5 md:gap-7">
              <div className="flex justify-center">
                {previousProject ? (
                  <Link
                    href={`/projects/${previousProject.slug}`}
                    className="group inline-flex size-8 items-center justify-center
                      text-(--brown)
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-(--brown)"
                  >
                    <ChevronLeft
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
                      strokeWidth={1.5}
                    />
                  </Link>
                ) : (
                  <span aria-hidden="true" className="size-8" />
                )}
              </div>

              <Link
                href="/projects"
                className="
                  type-label whitespace-nowrap text-(--brown)
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-(--brown)
                "
              >
                Back to projects
              </Link>

              <div className="flex justify-center">
                {nextProject ? (
                  <Link
                    href={`/projects/${nextProject.slug}`}
                    className="group inline-flex size-8 items-center justify-center
                      text-(--brown)
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-(--brown)"
                  >
                    <ChevronRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </Link>
                ) : (
                  <span aria-hidden="true" className="size-8" />
                )}
              </div>
            </div>
          </nav>
        </article>
      </Container>
    </main>
  );
}
