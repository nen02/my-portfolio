import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import links from "../data/links";

// ============================================================================
// Footer Component
// ============================================================================

function Footer() {
  return (
    <footer className="py-16 bg-black relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-32 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container max-w-4xl mx-auto px-5 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Name and tagline */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-white font-bold text-2xl">Rivera Nen</p>
            <p className="text-gray-500 text-sm">
              Building digital experiences with passion
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-900/40 transition-all duration-300 group"
                title={link.name}
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  className="text-gray-400 group-hover:text-purple-400 transition-colors"
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 w-full">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
