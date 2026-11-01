import { IProject } from "../../data/projects";
import { ProjectLink } from "./ProjectBadges";
import { ACCENT, getProjectLinks } from "./projectTheme";

export function ProjectLinks({ project }: { project: IProject }) {
  const links = getProjectLinks(project);
  if (links.length === 0) return null;
  const accent = ACCENT[project.accent];

  return (
    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold">
      {links.map((link, i) => (
        <ProjectLink
          key={link.key}
          href={link.href}
          label={link.label}
          className={i === 0 ? `${accent.text} hover:underline` : "text-gray-500 hover:text-purple-500 transition-colors"}
        />
      ))}
    </div>
  );
}
