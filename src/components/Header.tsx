import {
  faDiscord,
  faSquareGithub,
  faSquareUpwork,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type LinkProps = {
  key?: string;
  icon: IconDefinition;
  name: string;
  link: string;
};

const Link: React.FC<LinkProps> = ({ icon, name, link }) => {
  return (
    <a href={link} target='_blank'>
      <FontAwesomeIcon icon={icon} className='mr-1' />
      {name}
    </a>
  );
};

const links: LinkProps[] = [
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

function Header() {
  return (
    <div className='container max-w-screen-lg mx-auto flex justify-end h-10 items-center gap-x-5 max-md:px-2'>
      {links.map((link) => (
        <Link
          key={link.key}
          icon={link.icon}
          name={link.name}
          link={link.link}
        />
      ))}
    </div>
  );
}

export default Header;
