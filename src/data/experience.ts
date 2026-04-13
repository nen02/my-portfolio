type IExperience = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
};

const experience: IExperience[] = [
  {
    id: 0,
    title: "Senior Software Engineer",
    company: "Oracle NetSuite",
    period: "May 2025 – Present",
    description: [
      "Working as a One Engineer — taking on both development and QA responsibilities across the product lifecycle.",
      "Developing and maintaining NetSuite products using SuiteScript, Oracle's JavaScript-based scripting platform.",
    ],
  },
  {
    id: 1,
    title: "Senior Software Developer",
    company: "Radztech Business Solutions",
    period: "Jun 2022 – March 2025",
    description: [
      "Designed and delivered a Human Resource Information System (HRIS) for 10+ companies, serving 2000+ employees and automating manual processes by 90%.",
      "Implemented advanced features such as payroll integration, biometric timekeeping, and real-time geotagging for employee logging.",
      "Automated government-mandated deductions and accounting system integration, increasing data accuracy and efficiency.",
      "Mentored and managed a team of 2 junior developers, ensuring high-quality project delivery through code reviews and sprint planning.",
      "Analyzed business requirements and collaborated with clients to deliver solutions tailored to their operational goals.",
    ],
  },
  {
    id: 3,
    title: "Technical Assistant",
    company: "Government Service Insurance System (GSIS)",
    period: "Jan 2021 – May 2022",
    description: [
      "Automated 10+ processes using SAP scripting, saving over 15 hours of administrative work weekly.",
      "Developed a real-time transaction monitoring system using Excel and VBA, improving data integrity and reducing errors.",
    ],
  },
  {
    id: 4,
    title: "Full-stack Developer",
    company: "Technosite IT Business Solution",
    period: "Sep 2019 – May 2020",
    description: [
      "Spearheaded the development of a Food Service Management System, improving order accuracy by 20%.",
      "Designed and deployed a HRIS, delivering user-friendly solutions that enhanced operational efficiency.",
    ],
  },
];

export default experience;
export type { IExperience };
