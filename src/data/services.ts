type IService = {
  key: number;
  url: string;
  title: string;
  description: string;
};

const services: IService[] = [
  {
    key: 1,
    url: "/svg/creative-design.svg",
    title: "Creative Design",
    description:
      "Crafting visually stunning designs that captivate and engage your audience.",
  },
  {
    key: 2,
    url: "/svg/website.svg",
    title: "Website",
    description:
      "Creating dynamic and user-friendly websites tailored to your business needs.",
  },
  {
    key: 3,
    url: "/svg/mobile-app.svg",
    title: "Mobile App",
    description:
      "Building robust mobile apps that offer a smooth and engaging user experience.",
  },
  {
    key: 4,
    url: "/svg/custom-dev.svg",
    title: "Custom Dev",
    description:
      "Delivering tailored development solutions for complex challenges.",
  },
];

export default services;
export type { IService };
