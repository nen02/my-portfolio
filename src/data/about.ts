type IAbout = {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  /** Wrap phrases in **double asterisks** to emphasise them. */
  paragraphs: string[];
  /** The closing line; the project names from data/projects go between lead and trail. */
  sideProjects: { lead: string; trail: string };
};

const about: IAbout = {
  eyebrow: "About",
  heading: "From an unplanned start",
  headingAccent: "to building systems people use daily.",
  paragraphs: [
    "I originally wanted to study mechanical engineering, but we couldn't afford it, so I took Computer Science, a field I knew nothing about. It turned out to suit me: I placed second in the General Programming Contest in 2018 and **first in 2019**, the year I graduated.",
    "Since then I've built HR, payroll and accounting systems from the ground up. The HRIS I designed at Radztech served **1,000+ employees** across 10+ companies and cut their manual work by 90%. Today I'm at **Oracle NetSuite**, leading the Japan Localization SuiteApps and building the test tooling other teams rely on.",
    "What I love most is still the architecture — designing data models, simplifying processes and building interfaces that feel natural to use. I care most about building things that solve a real problem.",
  ],
  sideProjects: {
    lead: "Outside of work, I build my own products —",
    trail: "— where I try new ideas first. I think the best developers are the ones who never stop learning.",
  },
};

export default about;
export type { IAbout };
