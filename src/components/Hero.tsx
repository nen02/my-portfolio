import { useState, useEffect } from "react";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";

function FloatingOrb({ className }: { className: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-20 ${className}`} />
  );
}

function Terminal() {
  const commands = [
    "> npm run dev",
    "> Building...",
    "> Starting development server...",
    "> Server running at http://localhost:3000",
  ];

  const [displayedCommands, setDisplayedCommands] = useState<string[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentCommandIndex < commands.length) {
      const currentCommand = commands[currentCommandIndex];
      const timeoutId = setTimeout(() => {
        if (currentCharIndex < currentCommand.length) {
          setDisplayedCommands((prev) => {
            const newCommands = [...prev];
            if (!newCommands[currentCommandIndex]) {
              newCommands[currentCommandIndex] = "";
            }
            newCommands[currentCommandIndex] = currentCommand.substring(
              0,
              currentCharIndex + 1,
            );
            return newCommands;
          });
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setCurrentCommandIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }
      }, 30);
      return () => clearTimeout(timeoutId);
    }
  }, [currentCommandIndex, currentCharIndex]);

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 w-[24rem] flex-shrink-0">
      {/* Window header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 text-xs text-gray-400">Terminal</div>
      </div>
      {/* Terminal content */}
      <div className="p-4 bg-[#1a1b26] font-mono text-xs">
        {displayedCommands.map((cmd, index) => (
          <div key={index} className="text-gray-300">
            {cmd}
            {index === currentCommandIndex &&
              index === displayedCommands.length - 1 && (
                <span className="animate-pulse text-green-400 ml-1">_</span>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CodeEditor() {
  const code = `const developer = {
  name: 'River Aren',
  skills: ['React', 'Node.js', 'Python'],
  passionate: true,
  readyToBuild: true
};`;

  const [displayedCode, setDisplayedCode] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeChar = () => {
      if (isDeleting) {
        const newCode = code.substring(0, currentIndex - 1);
        setDisplayedCode(newCode);
        setCurrentLine(newCode.split("\n").length - 1);
        currentIndex--;
        if (currentIndex === 0) {
          isDeleting = false;
          timeoutId = setTimeout(typeChar, 1000);
        } else {
          timeoutId = setTimeout(typeChar, 30);
        }
      } else {
        const newCode = code.substring(0, currentIndex + 1);
        setDisplayedCode(newCode);
        setCurrentLine(newCode.split("\n").length - 1);
        currentIndex++;
        if (currentIndex === code.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeChar, 2000);
        } else {
          timeoutId = setTimeout(typeChar, 50);
        }
      }
    };

    timeoutId = setTimeout(typeChar, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const lines = displayedCode.split("\n");

  const highlightCode = (line: string) => {
    // Simple syntax highlighting
    let highlighted = line;
    // Highlight keywords
    highlighted = highlighted.replace(
      /\b(const|let|var)\b/g,
      '<span class="text-purple-400">$1</span>',
    );
    highlighted = highlighted.replace(
      /\b(true|false)\b/g,
      '<span class="text-purple-400">$1</span>',
    );
    // Highlight strings
    highlighted = highlighted.replace(
      /'[^']*'/g,
      '<span class="text-yellow-300">$&</span>',
    );
    return highlighted;
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 w-[24rem] flex-shrink-0 -mt-4 relative z-10">
      {/* Window header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 text-xs text-gray-500">developer.js</div>
      </div>
      {/* Code content */}
      <div className="p-4 bg-[#0d1117] font-mono text-xs">
        {lines.map((line, index) => (
          <div key={index} className="flex items-center">
            <span className="text-gray-600 w-6 select-none flex-shrink-0">
              {index + 1}
            </span>
            <code
              className="text-gray-300 whitespace-pre break-all"
              dangerouslySetInnerHTML={{ __html: highlightCode(line) }}
            />
            {index === currentLine && (
              <span className="w-1 h-4 bg-green-400 ml-1 animate-pulse inline-block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="max-w-6xl container mx-auto px-5 py-20 relative z-10">
      {/* Floating orbs */}
      <FloatingOrb className="w-96 h-96 bg-green-500 animate-float-slow top-0 left-0 -translate-x-1/2" />
      <FloatingOrb className="w-80 h-80 bg-emerald-600 animate-float top-20 right-0 translate-x-1/3" />
      <FloatingOrb className="w-64 h-64 bg-teal-500 animate-float-slow bottom-0 left-1/4" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Left side - Terminal and Code editor windows */}
        <div className="flex-shrink-0 order-2 lg:order-1 flex flex-col gap-6">
          <Terminal />
          <CodeEditor />
        </div>

        {/* Right side - Profile and text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 order-1 lg:order-2">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent rounded-3xl blur-2xl" />
            <img
              src="/images/profile.jpg"
              alt="profile"
              className="relative mx-auto lg:mx-0 rounded-full w-40 h-40 object-cover ring-2 ring-green-500/50 ring-offset-2 ring-offset-black"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Full-Stack
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            Building digital experiences with clean code and creative solutions.
            Let's bring your ideas to life.
          </p>

          <div className="w-full flex justify-center lg:justify-start">
            <a
              href="mailto:riverarenen02@gmail.com"
              className="group px-10 py-4 bg-green-500 hover:bg-green-400 text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
                Get in Touch
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero-section"
      className="bg-black relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="relative z-10 w-full">
        <Header />
        <Content />
      </div>
    </section>
  );
}

export default Hero;
