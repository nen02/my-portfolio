import { IProject, ProjectAccent, ProjectPlatform, ProjectStatus } from "../../data/projects";

// Full class strings so Tailwind can see them at build time.
export const ACCENT: Record<ProjectAccent, { text: string; border: string; hoverBorder: string; mediaBg: string }> = {
  teal: {
    text: "text-teal-500",
    border: "border-teal-500/30",
    hoverBorder: "hover:border-teal-500/50",
    mediaBg: "from-teal-500/30 to-cyan-900/20",
  },
  violet: {
    text: "text-violet-500",
    border: "border-violet-500/30",
    hoverBorder: "hover:border-violet-500/50",
    mediaBg: "from-violet-600/30 to-purple-900/20",
  },
  emerald: {
    text: "text-emerald-500",
    border: "border-emerald-500/30",
    hoverBorder: "hover:border-emerald-500/50",
    mediaBg: "from-emerald-600/25 to-teal-900/20",
  },
};

export const STATUS: Record<ProjectStatus, { label: string; className: string }> = {
  released: {
    label: "Released",
    className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  },
  beta: {
    label: "Beta",
    className: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  },
  "in-development": {
    label: "In Development",
    className: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
  },
};

export const PLATFORM_LABEL: Record<ProjectPlatform, string> = {
  android: "Android",
  ios: "iOS",
  web: "Web",
  desktop: "Desktop",
};

type LinkKey = keyof IProject["links"];

// Display order and labels for project links; the first available one is the primary action.
const LINK_LABELS: [LinkKey, string][] = [
  ["playStore", "Get it on Google Play ↗"],
  ["appStore", "App Store ↗"],
  ["web", "Visit site ↗"],
  ["docs", "Read the docs →"],
  ["page", "Details →"],
  ["github", "Source"],
  ["privacy", "Privacy"],
];

export function getProjectLinks(project: IProject) {
  return LINK_LABELS.flatMap(([key, label]) => {
    const href = project.links[key];
    return href ? [{ key, href, label }] : [];
  });
}
