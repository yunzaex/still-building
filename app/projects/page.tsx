import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ProjectFilterBar from "@/components/ProjectFilterBar";
import ProjectListItem from "@/components/ProjectListItem";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-(--bg)">
      <Container className="pb-12 pt-32 sm:pb-16 sm:pt-36">
        <PageHeader
          label="01 / Projects"
          title="Things I’m building."
          description="A collection of selected projects, experiments, and ongoing work."
        />

        <ProjectFilterBar />

        <div>
          {projects.map((project) => (
            <ProjectListItem key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
