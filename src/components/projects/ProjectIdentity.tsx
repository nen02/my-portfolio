import { IProject } from "../../data/projects";
import { text } from "../ui";
import { StatusBadge } from "./ProjectBadges";
import { ACCENT, PLATFORM_LABEL } from "./projectTheme";

/** Icon, name, tagline + platforms and status — the header of a secondary card. */
export function ProjectIdentity({ project }: { project: IProject }) {
  const accent = ACCENT[project.accent];
  const platforms = project.platforms.map((p) => PLATFORM_LABEL[p]).join(" & ");

  return (
    <div className="flex items-center gap-3 mb-3">
      {project.icon ? (
        <img src={project.icon} alt="" className="w-11 h-11 rounded-xl flex-shrink-0" />
      ) : (
        <div className="w-11 h-11 rounded-xl flex-shrink-0 bg-purple-500/20 grid place-items-center font-bold text-purple-400">
          {project.name[0].toUpperCase()}
        </div>
      )}
      <div className="min-w-0">
        <h3 className={`text-xl font-bold ${text.heading}`}>{project.name}</h3>
        <p className={`text-sm ${accent.text}`}>
          {project.tagline} · {platforms}
        </p>
      </div>
      <div className="ml-auto self-start">
        <StatusBadge status={project.status} />
      </div>
    </div>
  );
}
