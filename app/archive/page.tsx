import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import EnvelopeArchive from "@/components/archive/EnvelopeArchive";
import { archiveCategories } from "@/data/archive";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-(--bg)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <PageHeader
          label="02 / Archive"
          title="Every piece of time I want to remember."
        />
        <EnvelopeArchive categories={archiveCategories} />
      </Container>
    </main>
  );
}
