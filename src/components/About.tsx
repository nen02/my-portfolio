import { Section, Container } from "./ui";

function About() {
  return (
    <Section id="about">
      <Container maxWidth="4xl">
        <div className="flex flex-col items-center text-center gap-10">

          {/* Section label */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-purple-500/50" />
            <span className="text-purple-500 dark:text-purple-400 text-sm font-medium tracking-widest uppercase">
              About Me
            </span>
            <div className="h-px w-8 bg-purple-500/50" />
          </div>

          {/* Main heading */}
          <h2 className="text-2xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-white dark:via-white dark:to-gray-400 bg-clip-text text-transparent">
              Not the path I chose,
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 dark:from-purple-400 dark:via-violet-400 dark:to-purple-500 bg-clip-text text-transparent">
              but the one I owned.
            </span>
          </h2>

          {/* Story */}
          <div className="flex flex-col gap-6 text-left w-full max-w-2xl">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Growing up, I dreamed of studying mechanical engineering. But we didn't have
              the money for it, so I enrolled in Computer Science instead — a field I knew
              absolutely nothing about. No background in programming, no idea how any of
              it worked. Just a decision made out of necessity, and eventually, a passion
              I never expected.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              What I've come to love most is the architectural side of the craft — designing
              database structures, optimizing processes, and building interfaces that feel
              natural to use. But above all, what drives me is making software that actually
              solves something. Not just code that runs, but products that make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Outside of work, I build my own apps — like{" "}
              <span className="text-purple-500 dark:text-purple-400 font-medium">nummz</span>{" "}
              and{" "}
              <span className="text-purple-500 dark:text-purple-400 font-medium">ntrack</span>{" "}
              — and keep pushing my skills forward. I think the best developers are the ones
              who never stop learning.
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
}

export default About;
