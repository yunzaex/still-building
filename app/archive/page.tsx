import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-(--bg)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <PageHeader label="Archive" title="Fragments worth keeping." />
      </Container>
    </main>
  );
}
