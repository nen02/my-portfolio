export type StrengthIcon = "database" | "integration" | "fullstack" | "quality";

type IStrength = {
  key: string;
  icon: StrengthIcon;
  title: string;
  description: string;
};

const strengths: IStrength[] = [
  {
    key: "backend",
    icon: "database",
    title: "Backend & data design",
    description: "Schemas, APIs and services that stay clean as features pile up.",
  },
  {
    key: "automation",
    icon: "integration",
    title: "Automation & integrations",
    description: "Payroll, biometrics, accounting, SAP — connecting systems so people don't have to.",
  },
  {
    key: "fullstack",
    icon: "fullstack",
    title: "Full-stack delivery",
    description: "From requirements with clients to web and mobile UIs people enjoy using.",
  },
  {
    key: "quality",
    icon: "quality",
    title: "Quality & mentoring",
    description: "Test automation frameworks, code reviews and mentoring engineers.",
  },
];

export default strengths;
export type { IStrength };
