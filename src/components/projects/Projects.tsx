import projects from "../../data/projects";
import { Section, Container, SectionHeader } from "../ui";
import { ProjectCard } from "./ProjectCard";

function Projects() {
  return (
    <Section id="projects" bordered>
      <Container>
        <SectionHeader eyebrow="Projects" title="Things I've built" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.key} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Projects;
