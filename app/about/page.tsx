import Container from "@/components/Container";
import Divider from "@/components/Divider";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        label="About"
        title="A personal archive, still in progress."
        description="Still Building은 완성된 포트폴리오보다 성장의 과정을 기록하는 개인 아카이브를 목표로 합니다."
      />

      <Divider />

      <section className="py-20">
        <SectionTitle
          eyebrow="About This Site"
          title="Living Archive"
          description="프로젝트, 공부 기록, 여행, 사진, 생각들을 하나의 공간에 축적하며 시간이 흐를수록 계속 성장하는 웹사이트를 만들고 있습니다."
        />
      </section>
      <div className="mt-10">
        <Button href="/projects">View Projects</Button>
      </div>
    </Container>
  );
}
