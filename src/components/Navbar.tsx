import { useState, useEffect } from "react";
import navItems, { HOME_ANCHOR } from "../data/navigation";
import profile from "../data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { ResumeIcon } from "./icons";
import { button, text } from "./ui";

const SCROLLED_OFFSET = 40;
const ACTIVE_SECTION_MARGIN = "-40% 0px -55% 0px";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLLED_OFFSET);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: ACTIVE_SECTION_MARGIN }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        solid
          ? "bg-white/80 dark:bg-black/70 backdrop-blur-md border-purple-500/10 shadow-lg shadow-black/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href={`#${HOME_ANCHOR}`} className={`font-display font-bold text-lg ${text.heading}`}>
          {profile.nickname}
          <span className="text-purple-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`relative text-sm font-medium transition-colors hover:text-purple-500 dark:hover:text-purple-400 ${
                  isActive ? text.accent : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-purple-500 dark:bg-purple-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className={`hidden sm:inline-flex ${button.pill}`}>
              Résumé
              <ResumeIcon />
            </a>
          )}
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`md:hidden ${button.ghost}`}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="h-full bg-purple-500" style={{ width: `${progress}%` }} />
      </div>
    </nav>
  );
}

export default Navbar;
