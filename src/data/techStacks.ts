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
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

type ITech = {
  key: string;
  icon: IconDefinition;
  name: string;
};

const techStack: ITech[] = [
  {
    icon: faReact,
    key: 'react',
    name: 'React',
  },
  {
    icon: faVuejs,
    key: 'vue',
    name: 'Vue.js',
  },
  {
    icon: faNodeJs,
    key: 'nodejs',
    name: 'Node.js',
  },
  {
    icon: faLaravel,
    key: 'laravel',
    name: 'Laravel',
  },
  {
    icon: faDocker,
    key: 'docker',
    name: 'Docker',
  },
  {
    icon: faFigma,
    key: 'figma',
    name: 'Figma',
  },
  {
    icon: faPython,
    key: 'python',
    name: 'Python',
  },
  {
    icon: faSass,
    key: 'sass',
    name: 'Sass',
  },
  {
    icon: faGit,
    key: 'git',
    name: 'Git',
  },
  {
    icon: faDatabase,
    key: 'sql',
    name: 'Sql',
  },
];

export default techStack;
export type { ITech };
