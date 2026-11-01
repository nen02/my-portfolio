export type ProjectStatus = "released" | "beta" | "in-development";
export type ProjectPlatform = "android" | "ios" | "web" | "desktop";
export type ProjectAccent = "teal" | "violet" | "emerald";

type MediaImage = { src: string; alt: string };

export type ProjectMedia =
  | { type: "screenshots"; images: MediaImage[] }
  | { type: "stickers"; images: MediaImage[] }
  | { type: "illustration"; variant: "terminal" };

export interface IProject {
  key: string;
  name: string;
  tagline: string;
  description: string;
  platforms: ProjectPlatform[];
  tech: string[];
  status: ProjectStatus;
  links: {
    playStore?: string;
    appStore?: string;
    github?: string;
    web?: string;
    privacy?: string;
    docs?: string;
    page?: string;
  };
  accent: ProjectAccent;
  icon?: string;
  media?: ProjectMedia;
}

const projects: IProject[] = [
  {
    key: "tan-aw",
    name: "Tan-aw",
    tagline: "Map-first social app",
    description:
      "Share photos and moments pinned to places, and explore friends' moments on a playful, custom-styled map. Named after the Filipino word for \"to look\".",
    platforms: ["ios", "android"],
    tech: ["React Native", "Expo", "MapLibre", "Spring Boot", "PostGIS"],
    status: "in-development",
    links: {
      page: "/tan-aw",
    },
    accent: "teal",
    icon: "/tan-aw-icon.png",
    media: {
      type: "stickers",
      images: [
        { src: "/images/tan-aw/bo/hi.png", alt: "Bo waving hi" },
        { src: "/images/tan-aw/bo/coffee.png", alt: "Bo in a coffee cup" },
        { src: "/images/tan-aw/bo/beach.png", alt: "Bo at the beach" },
        { src: "/images/tan-aw/bo/celebrate.png", alt: "Bo celebrating" },
        { src: "/images/tan-aw/bo/cycling.png", alt: "Bo cycling" },
        { src: "/images/tan-aw/bo/love.png", alt: "Bo in love" },
      ],
    },
  },
  {
    key: "nummz",
    name: "nummz",
    tagline: "Personal Finance Manager",
    description:
      "Track expenses, budgets and debts — fully offline, with all data stored locally on your device.",
    platforms: ["android"],
    tech: ["React Native", "Expo", "SQLite", "TypeScript"],
    status: "released",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.nenspace.nummz",
      page: "/nummz",
      privacy: "/privacy/nummz",
    },
    accent: "violet",
    icon: "/nummz-icon.png",
    media: {
      type: "screenshots",
      images: [
        { src: "/images/nummz/dashboard_1.jpg", alt: "nummz dashboard screen" },
        { src: "/images/nummz/budget.jpg", alt: "nummz budget screen" },
        { src: "/images/nummz/credit_card.jpg", alt: "nummz credit card screen" },
      ],
    },
  },
  {
    key: "ntrack",
    name: "ntrack",
    tagline: "Desktop Activity Tracker",
    description:
      "A system-tray agent that tracks active-window usage and sends daily activity reports to any backend you connect it to.",
    platforms: ["desktop"],
    tech: ["Python", "SQLite", "psutil", "pystray"],
    status: "released",
    links: {
      docs: "/docs/ntrack",
    },
    accent: "emerald",
    icon: "/ntrack-icon.png",
    media: { type: "illustration", variant: "terminal" },
  },
];

export default projects;
