import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import links, { ILink } from '../data/links';

const Link: React.FC<ILink> = ({ icon, name, link }) => {
  return (
    <a href={link} target='_blank'>
      <FontAwesomeIcon icon={icon} className='mr-1' />
      {name}
    </a>
  );
};

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
