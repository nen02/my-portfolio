import { IProject } from "../../data/projects";
import { surface, TagList, text } from "../ui";
import { ProjectIdentity } from "./ProjectIdentity";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectMedia } from "./ProjectMedia";
import { ACCENT } from "./projectTheme";

export function ProjectCard({ project }: { project: IProject }) {
  const accent = ACCENT[project.accent];

  return (
    <article className={`group overflow-hidden flex flex-col transition-colors ${surface.outline} !rounded-3xl ${accent.hoverBorder}`}>
      {project.media && (
        <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${accent.mediaBg} flex items-center justify-center`}>
          <ProjectMedia media={project.media} />
        </div>
      )}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <ProjectIdentity project={project} />
        <p className={`text-[15px] leading-relaxed mb-5 ${text.body}`}>{project.description}</p>
        <div className="mb-6">
          <TagList items={project.tech} />
        </div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
