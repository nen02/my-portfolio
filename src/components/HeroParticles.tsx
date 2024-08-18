import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { ISourceOptions } from '@tsparticles/engine';

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
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'grab',
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
          l: 66,
          s: 66,
        },
      })),
    },
    links: {
      color: 'random',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: 'top',
      enable: true,
      outModes: 'out',
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
      type: 'square',
    },
    size: {
      value: { min: 5, max: 20 },
    },
  },
  detectRetina: true,
};

const HeroParticles = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  if (init) {
    return (
      <Particles
        id='tsparticles'
        // particlesLoaded={particlesLoaded}
        options={options}
        className='top-0 left-0 bottom-0 right-0 absolute p-0 m-0 z-0 rounded-b-[120px]'
      />
    );
  }

  return <></>;
};

export default HeroParticles;
