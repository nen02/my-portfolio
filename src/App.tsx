import { useState, useEffect } from "react";
import {
  CallToAction,
  Experience,
  Footer,
  Hero,
  Navbar,
  PixelBackground,
  Projects,
  Services,
  TechStack,
} from "./components";
import { GlowField } from "./components/ui";
import { ThemeProvider } from "./context/ThemeContext";


function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 p-2.5 rounded-full bg-purple-500 hover:bg-purple-400 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Element not yet rendered — wait for paint then retry
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <ScrollToHash />
      <PixelBackground />
      <Navbar />
      <div className="content relative">
        <GlowField count={4} />
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
        <Services />
        <CallToAction />
        <Footer />
      </div>
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
