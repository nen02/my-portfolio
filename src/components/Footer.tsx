import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import links, { ILink } from "../data/links";

const Link: React.FC<ILink> = ({ icon, name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-green-500/30 hover:bg-white/10 transition-all duration-300 group"
      title={name}
    >
      <FontAwesomeIcon
        icon={icon}
        className="text-gray-400 group-hover:text-green-400 transition-colors"
      />
    </a>
  );
};

function Footer() {
  return (
    <footer className="py-10 bg-black border-t border-white/10 relative">
      <div className="container max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-white font-semibold text-lg">Rivera Nen</p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
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
    </footer>
  );
}

export default Footer;
