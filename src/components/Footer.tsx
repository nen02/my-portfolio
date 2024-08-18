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

function Footer() {
  return (
    <div className='bg-[#F6F5F4] py-5 border-t-[1px] border-t-gray-300'>
      <div className='container max-w-screen-lg mx-auto grid grid-cols-2 max-sm:grid-cols-1 justify-between items-center max-lg:px-2 gap-2'>
        <p>© 2024 All rights reserved.</p>
        <div className='flex justify-end max-sm:justify-start items-center gap-x-5'>
          {links.map((link) => (
            <Link
              key={link.key}
              icon={link.icon}
              name={link.name}
              link={link.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
