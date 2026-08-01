import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import EnvelopeArchive from "@/components/archive/EnvelopeArchive";
import { archiveCategories } from "@/data/archive";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-(--bg)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <PageHeader label="02 / Archive" title="Fragments worth keeping." />
        <p className="type-body archive-intro max-w-xl text-(--text)">
          A personal collection of photographs, places, performances, music, and
          everyday details. Pick a card to open a drawer of memories.
        </p>
        <EnvelopeArchive categories={archiveCategories} />
      </Container>
    </main>
  );
}
