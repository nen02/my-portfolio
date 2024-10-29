import {
  faDiscord,
  faLinkedin,
  faSquareGithub,
  faSquareUpwork,
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
  {
    key: "upwork",
    icon: faSquareUpwork,
    name: "Upwork",
    link: "https://www.upwork.com/freelancers/~0108515af6feb7bcaa",
  },
];

export default links;
export type { ILink };
