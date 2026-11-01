import strengths, { StrengthIcon } from "../data/strengths";
import techGroups from "../data/techStacks";
import { Section, Container, SectionHeader, Tag, surface, text } from "./ui";

const ICON_PATHS: Record<StrengthIcon, JSX.Element> = {
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  integration: <path d="M4 4h6v6H4zM14 14h6v6h-6zM10 7h4a3 3 0 0 1 3 3v4" />,
  fullstack: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 21h8" />
    </>
  ),
  quality: (
    <>
      <path d="M9 12l2 2 4-4" />
      <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
    </>
  ),
};

function Strengths() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
      {strengths.map((strength) => (
        <div key={strength.key} className={`p-6 ${surface.card}`}>
          <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-500 grid place-items-center mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {ICON_PATHS[strength.icon]}
            </svg>
          </div>
          <h3 className={`font-bold text-lg mb-2 ${text.heading}`}>{strength.title}</h3>
          <p className={`text-sm leading-relaxed ${text.body}`}>{strength.description}</p>
        </div>
      ))}
    </div>
  );
}

function TechStack() {
  return (
    <>
      <h3 className={`text-2xl font-bold mb-6 ${text.heading}`}>Tech stack</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {techGroups.map((group) => (
          <div key={group.key} className={`p-5 ${surface.outline}`}>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${text.muted}`}>{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <Tag key={tech.key} variant="chip">
                  {tech.icon && (
                    <img src={tech.icon} alt="" className={`w-4 h-4 object-contain ${tech.invertOnDark ? "dark:invert" : ""}`} />
                  )}
                  {tech.name}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Skills() {
  return (
    <Section id="skills" bordered>
      <Container>
        <SectionHeader eyebrow="What I'm good at" title="Strengths" />
        <Strengths />
        <TechStack />
      </Container>
    </Section>
  );
}

export default Skills;
