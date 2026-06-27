import Container from "@/components/Container";
import Divider from "@/components/Divider";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

export default function NowPage() {
  return (
    <Container>
      <PageHeader
        label="Now"
        title="What I am focusing on now."
        description="현재 진행 중인 프로젝트와 배우고 있는 것들을 꾸준히 업데이트하는 공간입니다."
      />

      <Divider />

      <section className="py-20">
        <SectionTitle
          eyebrow="Current Focus"
          title="Work in Progress"
          description="현재는 개인 포트폴리오와 모바일 프로젝트를 중심으로 개발과 디자인 시스템을 정리하고 있습니다."
        />
      </section>
    </Container>
  );
}
