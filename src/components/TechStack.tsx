import techStack from "../data/techStacks";
import { Section, Container, SectionHeader } from "./ui";

// ============================================================================
// Tech Stack Component
// ============================================================================

function TechStack() {
  return (
    <Section id="tech-stack">

      <Container>
        <SectionHeader title="Tech Stack" subtitle="Technologies I use" />

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={tech.key}
              className="group flex flex-col items-center p-6 rounded-2xl bg-purple-100/80 dark:bg-purple-900/20 border border-purple-300 dark:border-purple-500/30 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-300 hover:bg-purple-200/80 dark:hover:bg-purple-900/30"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`relative h-10 w-10 md:h-14 md:w-14 object-contain group-hover:scale-110 transition-transform duration-300 ${tech.name === "Express" ? "dark:brightness-0 dark:invert" : ""}`}
                />
              </div>
              <p className="text-center mt-4 text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default TechStack;
