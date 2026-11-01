import experience, { IExperience } from "../data/experience";
import { Section, Container, SectionHeader, TagList, text } from "./ui";

function TimelineDot({ current }: { current: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute left-0 -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full ${
        current ? "bg-purple-500 ring-4 ring-purple-500/20" : "bg-purple-500/50"
      }`}
    />
  );
}

/** Runs from below this item's dot to just above the next one, so it never crosses a dot. */
function TimelineConnector() {
  return (
    <span
      aria-hidden
      className="absolute left-0 -translate-x-1/2 w-px top-[1.625rem] -bottom-10 bg-purple-500/25"
    />
  );
}

function ExperienceItem({
  role,
  current,
  last,
}: {
  role: IExperience;
  current: boolean;
  last: boolean;
}) {
  return (
    <li className="pl-8 relative">
      {!last && <TimelineConnector />}
      <TimelineDot current={current} />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className={`font-bold ${role.compact ? "text-lg" : "text-xl"} ${text.heading}`}>
          {role.title} · <span className="text-purple-500">{role.company}</span>
        </h3>
        <span className={`text-sm font-medium ${text.muted}`}>{role.period}</span>
      </div>

      {role.compact ? (
        <p className={`mt-2 text-[15px] leading-relaxed ${text.body}`}>{role.description.join(" ")}</p>
      ) : (
        <ul className={`mt-3 space-y-2 text-[15px] leading-relaxed list-disc pl-5 marker:text-purple-500 ${text.body}`}>
          {role.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {role.tech.length > 0 && (
        <div className="mt-3">
          <TagList items={role.tech} variant="accent" />
        </div>
      )}
    </li>
  );
}

function Experience() {
  return (
    <Section id="experience" bordered>
      <Container maxWidth="4xl">
        <SectionHeader eyebrow="Experience" title="Where I've worked" />
        {/* The connector's -bottom-10 matches space-y-10 so it reaches the next dot. */}
        <ol className="relative ml-2 space-y-10">
          {experience.map((role, index) => (
            <ExperienceItem
              key={role.id}
              role={role}
              current={index === 0}
              last={index === experience.length - 1}
            />
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export default Experience;
