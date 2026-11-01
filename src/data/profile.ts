type IProfile = {
  name: string;
  nickname: string;
  role: string;
  headlineAccent: string;
  /** Hero summary. Wrap phrases in **double asterisks** to emphasise them. */
  summary: string;
  greeting: string;
  availability: string;
  email: string;
  /** Leave empty to hide the location tag. */
  location: string;
  /** Leave empty to hide every résumé button. */
  resumeUrl: string;
  footerNote: string;
};

const profile: IProfile = {
  name: "Renen Rivera",
  nickname: "Nen",
  role: "Senior Software Engineer",
  headlineAccent: "building systems people rely on.",
  summary:
    "I design backends and the interfaces on top of them — HR, payroll and internal tools used daily by **1,000+ employees** across 10+ companies. Currently at **Oracle NetSuite**.",
  greeting: "Knock knock. Me. Nen 😄",
  availability: "Open to senior engineering roles",
  email: "riverarenen02@gmail.com",
  location: "",
  resumeUrl: "/Renen_Rivera_CV.pdf",
  footerNote: "Built with React, Tailwind & too much coffee.",
};

export default profile;
export type { IProfile };
