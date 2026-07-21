import CollectionFooter from "@/components/CollectionFooter";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ProjectFilterBar from "@/components/ProjectFilterBar";
import ProjectListItem from "@/components/ProjectListItem";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <Container>
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

        <CollectionFooter
          current={1}
          total={2}
          href="/projects"
          label="View all projects"
        />
      </Container>
    </main>
  );
}
