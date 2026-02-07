import techStack from "../data/techStacks";
import { Section, Container, SectionHeader, GlowOrb } from "./ui";

// ============================================================================
// Tech Stack Component
// ============================================================================

function TechStack() {
  return (
    <Section>
      <GlowOrb className="top-30 right-30 w-[500px] h-[500px]" color="violet" />
      <GlowOrb className="bottom-30 left-20 w-96 h-96" />
      <GlowOrb className="top-20 left-1/3 w-64 h-64" color="fuchsia" />
      <GlowOrb className="bottom-20 right-1/4 w-56 h-56" color="violet" />
      <GlowOrb className="top-1/2 right-20 w-48 h-48" />

      <Container>
        <SectionHeader title="Tech Stack" subtitle="Technologies I use" />

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={tech.key}
              className="group flex flex-col items-center p-6 rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:bg-purple-900/30"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`relative h-10 w-10 md:h-14 md:w-14 object-contain group-hover:scale-110 transition-transform duration-300 ${tech.name === "Express" ? "brightness-0 invert" : ""}`}
                />
              </div>
              <p className="text-center mt-4 text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors">
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
