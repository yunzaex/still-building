import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-(--bg)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <PageHeader label="01 / Projects" title="Things I’m building." />
        <ProjectGallery projects={projects} />
      </Container>
    </main>
  );
}
