import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const ids = ["experience", "tech-stack", "services", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/80 backdrop-blur-md border-purple-500/10 shadow-lg shadow-black/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero-section"
          className="font-bold text-lg text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
        >
          Nen.
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-purple-500 dark:hover:text-purple-400 ${
                  isActive ? "text-purple-500 dark:text-purple-400" : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-purple-500 dark:bg-purple-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div
          className="h-full bg-purple-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-purple-500/10">
          <div className="container max-w-6xl mx-auto px-5 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-purple-500 dark:hover:text-purple-400 ${
                  activeSection === item.href.slice(1)
                    ? "text-purple-500 dark:text-purple-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
