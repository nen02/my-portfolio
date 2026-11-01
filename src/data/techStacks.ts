type ITech = {
  key: string;
  name: string;
  /** Path under /public. Omit for text-only chips. */
  icon?: string;
  /** Monochrome logos that need inverting on dark backgrounds. */
  invertOnDark?: boolean;
};

type ITechGroup = {
  key: string;
  label: string;
  items: ITech[];
};

const techGroups: ITechGroup[] = [
  {
    key: "backend",
    label: "Backend",
    items: [
      { key: "java", name: "Java", icon: "/svg/java.svg" },
      { key: "spring", name: "Spring Boot", icon: "/svg/spring.svg" },
      { key: "nodejs", name: "Node.js", icon: "/svg/nodejs.svg" },
      { key: "express", name: "Express", icon: "/svg/express.svg", invertOnDark: true },
      { key: "python", name: "Python", icon: "/svg/python.svg" },
      { key: "suitescript", name: "SuiteScript" },
    ],
  },
  {
    key: "frontend",
    label: "Frontend & Mobile",
    items: [
      { key: "typescript", name: "TypeScript", icon: "/svg/typescript.svg" },
      { key: "react", name: "React", icon: "/svg/react.svg" },
      { key: "angular", name: "Angular" },
      { key: "react-native", name: "React Native", icon: "/svg/react.svg" },
      { key: "expo", name: "Expo" },
      { key: "tailwind", name: "Tailwind CSS", icon: "/svg/tailwind.svg" },
    ],
  },
  {
    key: "data",
    label: "Databases",
    items: [
      { key: "postgresql", name: "PostgreSQL", icon: "/svg/postgresql.svg" },
      { key: "mysql", name: "MySQL", icon: "/svg/mysql.svg" },
      { key: "sqlite", name: "SQLite" },
    ],
  },
  {
    key: "testing",
    label: "Testing & DevOps",
    items: [
      { key: "playwright", name: "Playwright" },
      { key: "jest", name: "Jest" },
      { key: "junit", name: "JUnit" },
      { key: "docker", name: "Docker", icon: "/svg/docker.svg" },
      { key: "git", name: "Git", icon: "/svg/git.svg" },
    ],
  },
];

export default techGroups;
export type { ITech, ITechGroup };
