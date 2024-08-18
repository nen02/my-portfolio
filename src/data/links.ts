import {
  faDiscord,
  faSquareGithub,
  faSquareUpwork,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

type ILink = {
  key?: string;
  icon: IconDefinition;
  name: string;
  link: string;
};

const links: ILink[] = [
  {
    key: 'discord',
    icon: faDiscord,
    name: 'Discord',
    link: 'https://discordapp.com/users/1265838342415843388',
  },
  {
    key: 'github',
    icon: faSquareGithub,
    name: 'Github',
    link: 'https://github.com/nen02',
  },
  {
    key: 'upwork',
    icon: faSquareUpwork,
    name: 'Upwork',
    link: 'https://www.upwork.com/freelancers/~0108515af6feb7bcaa',
  },
];

export default links;
export type { ILink };
