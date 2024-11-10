import {
  faLinkedin,
  faSquareGithub,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

type ILink = {
  key?: string;
  icon: IconDefinition;
  name: string;
  link: string;
};

const links: ILink[] = [
  {
    key: "github",
    icon: faSquareGithub,
    name: "Github",
    link: "https://github.com/nen02",
  },
  {
    key: "linkedin",
    icon: faLinkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/renen-rivera-746611328",
  },
];

export default links;
export type { ILink };
