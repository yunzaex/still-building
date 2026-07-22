import Container from "@/components/Container";
import Divider from "@/components/Divider";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-(--bg)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <PageHeader label="Notes" title="Thoughts, studies, and small records." />

        <Divider />

        <section className="py-20">
          <SectionTitle
            eyebrow="Coming Soon"
            title="Notes Archive"
            description="현재는 페이지 구조를 먼저 구축하고 있으며, 이후 MDX 기반의 글 목록과 태그 시스템을 추가할 예정입니다."
          />
        </section>
      </Container>
    </main>
  );
}
