import { useState, useEffect } from "react";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlowOrb, ScrollIndicator, Terminal, CodeEditor } from "./ui";

// ============================================================================
// Typed Content Components
// ============================================================================

interface TerminalLine {
  content: string;
  highlight?: Record<string, string>;
}

function TypedTerminal() {
  const terminalLines: TerminalLine[] = [
    { content: "$ cat about.txt" },
    { content: "Name: Rivera Nen" },
    { content: "Role: Full-Stack Developer" },
    { content: "Location: Philippines" },
    { content: "$ echo $HOBBIES" },
    { content: "Gaming 🎮 | Music 🎵 | Coding 💻" },
    { content: "$ echo $FAVORITES" },
    { content: "Anime: classroom of the Elite" },
    { content: "Color: Dark | Editor: Neovim" },
  ];

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const currentLine = terminalLines[currentLineIndex];
      const timeoutId = setTimeout(() => {
        if (currentCharIndex < currentLine.content.length) {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            if (!newLines[currentLineIndex]) {
              newLines[currentLineIndex] = "";
            }
            newLines[currentLineIndex] = currentLine.content.substring(
              0,
              currentCharIndex + 1,
            );
            return newLines;
          });
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }
      }, 30);
      return () => clearTimeout(timeoutId);
    }
  }, [currentLineIndex, currentCharIndex]);

  const highlightLine = (line: string): string => {
    let highlighted = line;

    // Commands
    if (line.startsWith("$")) {
      highlighted = `<span class="text-purple-400 font-bold">${line}</span>`;
    }
    // Labels
    else if (line.includes(":")) {
      const parts = line.split(":");
      const label = parts[0] + ":";
      const value = parts.slice(1).join(":");
      highlighted = `<span class="text-purple-300">${label}</span><span class="text-yellow-300">${value}</span>`;
    }
    // Hobbies
    else if (line.includes("|")) {
      const parts = line.split("|");
      highlighted = parts
        .map((p) => `<span class="text-pink-400">${p.trim()}</span>`)
        .join('<span class="text-gray-500"> | </span>');
    }

    return highlighted;
  };

  return (
    <Terminal title="about.txt" lines={displayedLines}>
      {displayedLines.map((line, index) => (
        <div
          key={index}
          className="text-gray-300"
          dangerouslySetInnerHTML={{ __html: highlightLine(line) }}
        />
      ))}
      {currentLineIndex >= terminalLines.length && (
        <div className="text-purple-400 animate-pulse">_</div>
      )}
    </Terminal>
  );
}

function TypedCodeEditor() {
  const code = `const developer = {
  name: 'River Aren',
  skills: ['React', 'Node.js'],
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

    return () => clearTimeout(timeoutId);
  }, []);

  const lines = displayedCode.split("\n");

  const highlightCode = (line: string): string => {
    let highlighted = line;
    highlighted = highlighted.replace(
      /\b(const|let|var)\b/g,
      '<span class="text-purple-400">$1</span>',
    );
    highlighted = highlighted.replace(
      /\b(true|false)\b/g,
      '<span class="text-purple-400">$1</span>',
    );
    highlighted = highlighted.replace(
      /'[^']*'/g,
      '<span class="text-yellow-300">$&</span>',
    );
    return highlighted;
  };

  return (
    <CodeEditor filename="developer.js">
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
            <span className="w-1 h-4 bg-purple-400 ml-1 animate-pulse inline-block" />
          )}
        </div>
      ))}
    </CodeEditor>
  );
}

// ============================================================================
// Hero Content
// ============================================================================

function HeroContent() {
  return (
    <div className="max-w-6xl container mx-auto px-5 py-20 relative z-10">
      {/* Floating orbs */}
      <GlowOrb className="w-96 h-96 bg-purple-500 animate-float-slow top-0 left-0 -translate-x-1/2" />
      <GlowOrb className="w-80 h-80 bg-violet-600 animate-float top-20 right-0 translate-x-1/3" />
      <GlowOrb className="w-64 h-64 bg-fuchsia-500 animate-float-slow bottom-0 left-1/4" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Left side - Terminal and Code editor windows */}
        <div className="flex-shrink-0 order-2 lg:order-1 flex flex-col gap-8">
          <TypedTerminal />
          <TypedCodeEditor />
        </div>

        {/* Right side - Profile and text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 order-1 lg:order-2">
          <div className="relative mb-8 lg:ml-20">
            {/* Profile image */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-3xl blur-2xl" />
            <img
              src="/images/profile.jpg"
              alt="profile"
              className="relative mx-auto lg:mx-0 rounded-full w-40 h-40 object-cover ring-2 ring-purple-500/50 ring-offset-2 ring-offset-black"
            />
            {/* Chat bubble - positioned at top-right of image */}
            <div className="absolute -top-5 -right-32 animate-float-gentle z-10">
              <div className="relative bg-purple-500 text-white px-4 py-2 rounded-2xl text-sm font-medium whitespace-nowrap shadow-lg shadow-purple-500/30">
                {/* Bubble arrow - pointing down-left from bottom-left */}
                <div className="absolute bottom-[-3px] left-4 transform translate-y-1 w-0 h-0 border-t-[20px] border-t-purple-500 border-r-[20px] border-r-transparent" />
                <span className="pl-2">Knock knock. Me. Nen 😄</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              Full-Stack
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
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
              className="group px-10 py-4 bg-purple-500 hover:bg-purple-400 text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
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

// ============================================================================
// Main Hero Component
// ============================================================================

function Hero() {
  return (
    <section
      id="hero-section"
      className="bg-black relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="relative z-10 w-full pb-16">
        <HeroContent />
        <ScrollIndicator />
      </div>
    </section>
  );
}

export default Hero;
