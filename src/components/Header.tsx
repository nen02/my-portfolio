import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import links, { ILink } from "../data/links";

const Link: React.FC<ILink> = ({ icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-300 p-3"
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </a>
  );
};

function Header() {
  return (
    <header className="w-full z-50">
      <div className="container max-w-6xl mx-auto flex justify-end items-center gap-x-8 max-md:px-4">
        {links.map((link) => (
          <Link
            key={link.key}
            icon={link.icon}
            name={link.name}
            link={link.link}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;
