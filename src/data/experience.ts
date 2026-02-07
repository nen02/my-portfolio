type IExperience = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
};

const experience: IExperience[] = [
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
    id: 2,
    title: "Software Engineer (Part-Time)",
    company: "Dory PH, Inc.",
    period: "Sep 2024 – Oct 2024",
    description: [
      "Refactored codebases, reducing bugs and improving maintainability.",
      "Optimized API usage, achieving an 80% reduction in operational costs.",
      "Provided architectural recommendations, enhancing scalability and performance.",
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
  {
    id: 5,
    title: "Junior Web Developer",
    company: "WebFocus Solutions",
    period: "Jan 2019 – Aug 2019",
    description: [
      "Developed responsive websites using HTML, CSS, and JavaScript.",
      "Collaborated with designers to implement pixel-perfect UI/UX.",
      "Maintained and optimized existing web applications for performance.",
    ],
  },
  {
    id: 6,
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "2018 – 2019",
    description: [
      "Built custom web solutions for small businesses.",
      "Managed client relationships and project timelines.",
      "Delivered projects on time and within budget.",
    ],
  },
];

export default experience;
export type { IExperience };
