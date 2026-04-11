export type ProjectStatus = "released" | "beta" | "in-development";
export type ProjectPlatform = "android" | "ios" | "web" | "desktop";

export interface IProject {
  key: string;
  name: string;
  tagline: string;
  description: string;
  platforms: ProjectPlatform[];
  tech: string[];
  status: ProjectStatus;
  links: {
    playStore?: string;
    appStore?: string;
    github?: string;
    web?: string;
    privacy?: string;
    docs?: string;
  };
  color: string;
  icon?: string;
}

const projects: IProject[] = [
  {
    key: "ntrack",
    name: "ntrack",
    tagline: "Desktop Activity Tracker",
    description:
      "A system-tray agent that silently tracks active window usage and sends daily activity reports to the nwork backend. Runs on macOS, Windows, and Linux.",
    platforms: ["desktop"],
    tech: ["Python", "SQLite", "psutil", "pystray"],
    status: "released",
    links: {
      github: "https://github.com/nen02/ntrack-app",
      docs: "/docs/ntrack",
    },
    color: "from-emerald-500 to-teal-600",
    icon: "/ntrack-icon.png",
  },
  {
    key: "nummz",
    name: "nummz",
    tagline: "Personal Finance Manager",
    description:
      "A mobile app for tracking expenses, managing budgets, monitoring debts, and planning finances — all stored locally on your device.",
    platforms: ["android", "ios"],
    tech: ["React Native", "Expo", "SQLite", "TypeScript"],
    status: "in-development",
    links: {
      privacy: "/privacy/nummz",
    },
    color: "from-violet-500 to-purple-600",
    icon: "/nummz-icon.png",
  },
];

export default projects;
