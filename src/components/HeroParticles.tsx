import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions } from "@tsparticles/engine";

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const options: ISourceOptions = {
  autoPlay: true,
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      push: {
        quantity: 1,
      },
    },
  },
  fullScreen: false,
  smooth: true,
  particles: {
    color: {
      value: Array.from({ length: 20 }, () => ({
        hsl: {
          h: randomNumber(0, 360),
          s: 80,
          l: 80,
        },
      })),
    },
    links: {
      color: "random",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "top",
      enable: true,
      outModes: "out",
      random: false,
      speed: 0.5,
      straight: true,
      attract: {
        enable: true,
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 50,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "square",
    },
    size: {
      value: { min: 5, max: 20 },
    },
  },
  detectRetina: true,
};

const HeroParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="top-0 left-0 bottom-0 right-0 absolute p-0 m-0 z-0 rounded-b-[120px]"
      />
    );
  }

  return <></>;
};

export default HeroParticles;
