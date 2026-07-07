import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import Divider from "@/components/Divider";

export default function ProjectsPage() {
  return (
    <Container>
      <PageHeader
        label="Projects"
        title="Things I have been building."
        description="수업 프로젝트, 개인 작업, 실험적인 웹 작업들을 시간의 흐름에 따라 정리하는 공간입니다."
      />

      <Divider />

      <section className="py-20">
        <SectionTitle
          eyebrow="Selected Works"
          title="Project Archive"
          description="아직은 정적 카드 구조로 시작하고, 이후 MDX나 데이터 배열 기반으로 확장합니다."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="border border-(--line) p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-(--brown-light)">
              Web
            </p>
            <h3 className="mt-4 text-3xl text-(--brown)">
              Still Building
            </h3>
            <p className="mt-4 leading-7 text-(--text)">
              개인 포트폴리오이자 계속 업데이트되는 아카이브 사이트.
            </p>
          </article>

          <article className="border border-(--line) p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-(--brown-light)">
              Product
            </p>
            <h3 className="mt-4 text-3xl text-(--brown)">
              WearTrack
            </h3>
            <p className="mt-4 leading-7 text-(--text)">
              스마트 옷장과 패션 소비 기록을 연결하는 모바일 서비스.
            </p>
          </article>
        </div>
      </section>
    </Container>
  );
}
