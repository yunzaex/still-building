import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import ArchiveRecords from "@/components/archive/ArchiveRecords";
import { archiveCategories, getArchiveCategoryBySlug } from "@/data/archive";

type ArchiveDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return archiveCategories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArchiveDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getArchiveCategoryBySlug(slug);
  return category ? { title: category.title, description: category.description } : {};
}

export default async function ArchiveDetailPage({ params }: ArchiveDetailPageProps) {
  const { slug } = await params;
  const category = getArchiveCategoryBySlug(slug);

  if (!category) notFound();

  return (
    <main className="min-h-screen bg-(--bg)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <header className="archive-detail-header">
          <Link href="/archive" className="type-label text-(--brown-light)">
            ← Back to archive
          </Link>
          <p className="type-label mt-10 text-(--brown-light)">
            {category.number} / {category.presentation}
          </p>
          <h1 className="type-heading mt-4 text-(--brown)">{category.title}</h1>
          <p className="type-lede mt-5 max-w-2xl text-(--brown)">{category.description}</p>
        </header>

        <ArchiveRecords category={category} />
      </Container>
    </main>
  );
}
