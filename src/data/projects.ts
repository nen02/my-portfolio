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
  };
  color: string;
}

const projects: IProject[] = [
  {
    key: "nummz",
    name: "nummz",
    tagline: "Personal Finance Manager",
    description:
      "A mobile app for tracking expenses, managing budgets, monitoring debts, and planning finances — all stored locally on your device.",
    platforms: ["android"],
    tech: ["React Native", "Expo", "SQLite", "TypeScript"],
    status: "in-development",
    links: {
      privacy: "/privacy/nummz",
    },
    color: "from-violet-500 to-purple-600",
  },
];

export default projects;
