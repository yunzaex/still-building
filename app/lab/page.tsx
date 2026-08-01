import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export default function LabPage() {
  return (
    <main className="min-h-screen bg-(--bg)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <PageHeader label="03 / Lab" title="Small tests for bigger ideas." />
        <p className="type-body mt-8 max-w-xl text-(--text)">
          인터랙션, 타이포그래피, 애니메이션 등
          <br />
          떠오른 아이디어를 자유롭게 구현하고 기록하는 공간입니다.
        </p>
      </Container>
    </main>
  );
}
