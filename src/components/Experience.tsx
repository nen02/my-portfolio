import experience from "../data/experience";
import { Section, Container, SectionHeader, GlowOrb } from "./ui";

// ============================================================================
// Experience Component
// ============================================================================

function Experience() {
  return (
    <Section>
      <GlowOrb className="top-20 left-20 w-96 h-96" />
      <GlowOrb className="bottom-20 right-20 w-80 h-80" color="violet" />
      <GlowOrb className="top-1/2 left-1/3 w-64 h-64" color="fuchsia" />

      <Container maxWidth="4xl">
        <SectionHeader title="Experience" subtitle="My professional journey" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-purple-500/30" />

          {experience.map((exp) => (
            <div
              key={exp.id}
              className="relative flex flex-col md:flex-row items-start mb-8 md:mb-12 last:mb-0 md:gap-8 pl-10 md:pl-0"
            >
              {/* Dot on the line */}
              <div className="absolute left-[19px] md:left-1/2 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2 z-10 mt-1" />

              {/* Left side - Company, Position, Date */}
              <div className="md:w-1/2 md:pr-4 text-left pt-1 w-full">
                <p className="text-purple-400 text-sm font-medium mb-1">
                  {exp.period}
                </p>
                <h3 className="text-white font-bold text-base md:text-lg">
                  {exp.title}
                </h3>
                <p className="text-gray-400 text-sm">{exp.company}</p>
              </div>

              {/* Right side - Details in a box */}
              <div className="md:w-1/2 md:pl-4 pt-3 md:pt-1 w-full">
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 w-full">
                  <ul className="space-y-2">
                    {exp.description.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-purple-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Experience;
