import {
  faDocker,
  faFigma,
  faGit,
  faLaravel,
  faNodeJs,
  faPython,
  faReact,
  faSass,
  faVuejs,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type tech = {
  key: string;
  icon: IconDefinition;
  name: string;
};

const techStack: tech[] = [
  {
    icon: faReact,
    key: "react",
    name: "React",
  },
  {
    icon: faVuejs,
    key: "vue",
    name: "Vue.js",
  },
  {
    icon: faNodeJs,
    key: "nodejs",
    name: "Node.js",
  },
  {
    icon: faLaravel,
    key: "laravel",
    name: "Laravel",
  },
  {
    icon: faDocker,
    key: "docker",
    name: "Docker",
  },
  {
    icon: faFigma,
    key: "figma",
    name: "Figma",
  },
  {
    icon: faPython,
    key: "python",
    name: "Python",
  },
  {
    icon: faSass,
    key: "sass",
    name: "Sass",
  },
  {
    icon: faGit,
    key: "git",
    name: "Git",
  },
  {
    icon: faDatabase,
    key: "sql",
    name: "Sql",
  },
];

function TechStack() {
  return (
    <section className="container max-w-screen-lg mx-auto py-16 max-lg:px-10">
      <div className="flex items-center gap-x-4">
        <div className="w-10 h-[2px] bg-[#3d3d3d]"></div>
        <h2 className="text-2xl font-bold block">Tech Stack</h2>
        <div className="flex-1 h-[2px] bg-[#3d3d3d]"></div>
      </div>
      <p className=" mb-12">
        I use a unified tech stack for development and deployment.
      </p>
      <div className="flex flex-wrap gap-x-28 gap-y-16 justify-center max-lg:gap-x-20 max-lg:gap-y-10">
        {techStack.map((tech) => (
          <div key={tech.key}>
            <FontAwesomeIcon icon={tech.icon} size="3x" />
            <p className="text-center mt-2 text-lg">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
