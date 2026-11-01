type IExperience = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
  /** Older roles render as a single condensed paragraph. */
  compact?: boolean;
};

const experience: IExperience[] = [
  {
    id: 0,
    title: "Senior Software Engineer",
    company: "Oracle NetSuite",
    period: "May 2025 – Present",
    description: [
      "Led development of the NetSuite Japan Localization SuiteApps — Japan Localization, Financial Statements, Bank Feeds and Fixed Asset Reports.",
      "Designed a reusable Playwright automation framework that sped up the migration from Groovy-based UI tests across multiple teams, with up to 10× faster test execution.",
      "Built NSync, an internal tool that synchronizes test data across 10+ NetSuite test accounts, streamlining development and QA.",
      "Owned feature planning, solution design and testing strategy, keeping automated test suites at a consistent 100% pass rate.",
      "Performed code reviews, mentored engineers, and drove AI adoption (Claude, Codex) in engineering workflows.",
    ],
    tech: ["SuiteScript", "JavaScript", "Playwright", "Test Automation"],
  },
  {
    id: 1,
    title: "Senior Software Developer",
    company: "Radztech Business Solutions",
    period: "Jun 2022 – Mar 2025",
    description: [
      "Designed and delivered a Human Resource Information System (HRIS) for 10+ companies, serving 1,000+ employees and automating manual processes by 90%.",
      "Implemented advanced features such as payroll integration, biometric timekeeping, and real-time geotagging for employee logging.",
      "Automated government-mandated deductions and accounting system integration, increasing data accuracy and efficiency.",
      "Mentored and managed a team of 2 junior developers, ensuring high-quality project delivery through code reviews and sprint planning.",
      "Analyzed business requirements and collaborated with clients to deliver solutions tailored to their operational goals.",
    ],
    tech: [],
  },
  {
    id: 4,
    title: "Software Engineer (Part-Time)",
    company: "Dory PH, Inc.",
    period: "Sep 2024 – Oct 2024",
    description: [
      "Refactored codebases to reduce bugs and improve maintainability.",
      "Optimized API usage, cutting operational costs by 80%, and advised on architecture for scalability.",
    ],
    tech: [],
    compact: true,
  },
  {
    id: 2,
    title: "Technical Assistant",
    company: "GSIS",
    period: "Jan 2021 – May 2022",
    description: [
      "Automated 10+ processes with SAP scripting, saving 15+ hours of admin work weekly.",
      "Built a real-time transaction monitor in Excel/VBA, improving data integrity.",
    ],
    tech: ["SAP Scripting", "VBA"],
    compact: true,
  },
  {
    id: 3,
    title: "Full-stack Developer",
    company: "Technosite IT Business Solution",
    period: "Sep 2019 – May 2020",
    description: [
      "Built a Food Service Management System, improving order accuracy by 20%.",
      "Designed and deployed an HRIS for day-to-day operations.",
    ],
    tech: [],
    compact: true,
  },
];

export default experience;
export type { IExperience };
