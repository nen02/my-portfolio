type INavItem = {
  id: string;
  label: string;
};

const navItems: INavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const HOME_ANCHOR = "hero-section";

export default navItems;
export type { INavItem };
