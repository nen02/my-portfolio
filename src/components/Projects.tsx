import projects, { IProject, ProjectPlatform, ProjectStatus } from "../data/projects";
import { Section, Container, SectionHeader, colors } from "./ui";

// ============================================================================
// Badges
// ============================================================================

const PLATFORM_LABEL: Record<ProjectPlatform, string> = {
  android: "Android",
  ios: "iOS",
  web: "Web",
  desktop: "Desktop",
};

const PLATFORM_ICON: Record<ProjectPlatform, React.ReactNode> = {
  android: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
      <path d="M17.523 15.341a1.01 1.01 0 01-1.012-1.01 1.01 1.01 0 011.012-1.01 1.01 1.01 0 011.01 1.01 1.01 1.01 0 01-1.01 1.01m-11.046 0a1.01 1.01 0 01-1.01-1.01 1.01 1.01 0 011.01-1.01 1.01 1.01 0 011.012 1.01 1.01 1.01 0 01-1.012 1.01m11.4-6.021l1.96-3.394a.406.406 0 00-.149-.555.406.406 0 00-.555.15l-1.985 3.439A11.94 11.94 0 0012 8.318c-1.664 0-3.243.338-4.678.942L5.337 5.821a.406.406 0 00-.555-.15.406.406 0 00-.149.555l1.96 3.394C3.79 11.12 2.077 13.812 2 17h20c-.077-3.188-1.79-5.88-4.123-7.68" />
    </svg>
  ),
  ios: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  ),
  desktop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
};

const STATUS_CONFIG: Record<ProjectStatus, { label: string; className: string }> = {
  released: {
    label: "Released",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  beta: {
    label: "Beta",
    className: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
  "in-development": {
    label: "In Development",
    className: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
};

// ============================================================================
// Project Card
// ============================================================================

function ProjectCard({ project }: { project: IProject }) {
  const status = STATUS_CONFIG[project.status];

  return (
    <div className={`rounded-2xl p-px bg-gradient-to-br ${project.color} opacity-80 hover:opacity-100 transition-opacity duration-300`}>
      <div className="rounded-2xl bg-gray-50 dark:bg-[#0f0f18] p-6 h-full flex flex-col gap-5">

        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden">
            {project.icon ? (
              <img src={project.icon} alt={`${project.name} icon`} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full rounded-xl bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-400 font-bold text-xl">{project.name[0].toUpperCase()}</span>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">{project.name}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${status.className}`}>
                {status.label}
              </span>
            </div>
            <p className={`text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`text-xs px-2.5 py-1 rounded-lg ${colors.background} ${colors.border} text-gray-600 dark:text-gray-400`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1 border-t border-gray-200 dark:border-white/5">
          {/* Platforms */}
          <div className="flex items-center gap-1.5">
            {project.platforms.map((p) => (
              <span
                key={p}
                className={`flex items-center gap-1 text-xs px-2 py-1 rounded-lg ${colors.background} ${colors.border} text-gray-500 dark:text-gray-400`}
              >
                {PLATFORM_ICON[p]}
                {PLATFORM_LABEL[p]}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            {project.links.privacy && (
              <a
                href={project.links.privacy}
                className="text-xs text-gray-500 dark:text-gray-500 hover:text-purple-500 dark:hover:text-purple-400 transition-colors underline underline-offset-2"
              >
                Privacy Policy
              </a>
            )}
            {project.links.docs && (
              <a
                href={project.links.docs}
                className={`text-xs px-3 py-1.5 rounded-lg ${colors.background} ${colors.border} ${colors.borderHover} text-gray-600 dark:text-gray-400 font-medium transition-colors`}
              >
                Docs
              </a>
            )}
            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-lg bg-purple-500 hover:bg-purple-400 text-white font-medium transition-colors"
              >
                Play Store
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs px-3 py-1.5 rounded-lg ${colors.background} ${colors.border} ${colors.borderHover} text-gray-600 dark:text-gray-400 font-medium transition-colors`}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Projects Section
// ============================================================================

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeader title="Projects" subtitle="Things I've built" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.key} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Projects;
