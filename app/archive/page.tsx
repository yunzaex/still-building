import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-(--bg)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <PageHeader
          label="Archive"
          title="Fragments worth keeping."
          description="기억과 이미지, 작은 기록을 차분히 모아 두는 개인 아카이브입니다."
        />
      </Container>
    </main>
  );
}
