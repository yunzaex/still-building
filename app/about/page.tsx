import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-(--bg)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <PageHeader
          label="About"
          title="A personal practice in progress."
          description="디자인과 개발 사이에서 오래 쓰일 수 있는 디지털 경험을 만듭니다."
        />
      </Container>
    </main>
  );
}
