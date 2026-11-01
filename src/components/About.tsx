import about from "../data/about";
import projects from "../data/projects";
import { Section, Container, Emphasis, text } from "./ui";

/** "A, B and C" — the site's list style, without a serial comma. */
function joinNames(names: string[]): string {
  if (names.length < 2) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

const projectNames = joinNames(projects.map((project) => project.name));

function About() {
  return (
    <Section id="about">
      <Container className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
        <div>
          <p className={`${text.eyebrow} mb-3`}>{about.eyebrow}</p>
          <h2 className={`text-3xl md:text-4xl font-bold leading-tight text-balance ${text.heading}`}>
            {about.heading}
            <br />
            <span className={text.accent}>{about.headingAccent}</span>
          </h2>
        </div>

        <div className={`space-y-5 leading-relaxed text-[17px] ${text.body}`}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <Emphasis>{paragraph}</Emphasis>
            </p>
          ))}
          <p>
            {about.sideProjects.lead}{" "}
            <a href="#projects" className={`font-medium hover:underline ${text.accent}`}>
              {projectNames}
            </a>{" "}
            {about.sideProjects.trail}
          </p>
        </div>
      </Container>
    </Section>
  );
}

export default About;
