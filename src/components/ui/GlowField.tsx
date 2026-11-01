import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const ORB_COLORS = ["purple", "violet", "fuchsia"] as const;
const COLOR_CLASSES = {
  purple: "bg-purple-500/20",
  violet: "bg-violet-500/20",
  fuchsia: "bg-fuchsia-500/20",
};

function rnd(min: number, max: number) {
  return min + Math.random() * (max - min);
}

interface OrbConfig {
  top: number;
  left: number;
  width: number;
  height: number;
  color: (typeof ORB_COLORS)[number];
}

function randomConfig(): OrbConfig {
  return {
    top: rnd(5, 95),
    left: rnd(5, 95),
    width: rnd(200, 500),
    height: rnd(200, 500),
    color: ORB_COLORS[Math.floor(Math.random() * ORB_COLORS.length)],
  };
}

function AnimatedGlowOrb({ initialDelay = 0 }: { initialDelay?: number }) {
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState<OrbConfig>(randomConfig);

  useEffect(() => {
    let cancelled = false;

    const cycle = (visibleDuration: number) => {
      setTimeout(() => {
        if (cancelled) return;
        setVisible(false);
        setTimeout(() => {
          if (cancelled) return;
          setConfig(randomConfig());
          setVisible(true);
          cycle(rnd(2500, 7000));
        }, 1500);
      }, visibleDuration);
    };

    const t = setTimeout(() => {
      if (cancelled) return;
      setConfig(randomConfig());
      setVisible(true);
      cycle(rnd(3000, 8000));
    }, initialDelay);

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [initialDelay]);

  return (
    <div
      className={`absolute rounded-full blur-3xl ${COLOR_CLASSES[config.color]}`}
      style={{
        top: `${config.top}%`,
        left: `${config.left}%`,
        width: config.width,
        height: config.height,
        opacity: visible ? 0.25 : 0,
        transition: "opacity 1.5s ease-in-out",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

export function GlowField({ count = 4 }: { count?: number }) {
  const reducedMotion = usePrefersReducedMotion();
  if (reducedMotion) return null;

  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <AnimatedGlowOrb key={i} initialDelay={i * 700} />
      ))}
    </>
  );
}
