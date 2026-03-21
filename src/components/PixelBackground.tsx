import { useEffect, useRef } from "react";

interface Pixel {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: [number, number, number];
  maxOpacity: number;
}

const COLORS: [number, number, number][] = [
  [168, 85, 247],  // purple-500
  [139, 92, 246],  // violet-500
  [192, 132, 252], // purple-400
  [217, 70, 239],  // fuchsia-500
];

const GRID = 8;

function makePixel(w: number, h: number, randomY = false): Pixel {
  return {
    x: Math.floor(Math.random() * Math.ceil(w / GRID)) * GRID,
    y: randomY ? Math.random() * h : h + Math.random() * 100,
    size: Math.random() < 0.75 ? GRID : GRID * 2,
    speed: 0.3 + Math.random() * 0.9,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    maxOpacity: 0.15 + Math.random() * 0.35,
  };
}

export function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let paused = false;

    const pixels: Pixel[] = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(Math.max(15, Math.floor((canvas.width * canvas.height) / 60000)), 35);
    for (let i = 0; i < count; i++) {
      pixels.push(makePixel(canvas.width, canvas.height, true));
    }

    function draw() {
      if (paused) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const h = canvas.height;

      for (let i = 0; i < pixels.length; i++) {
        const p = pixels[i];
        p.y -= p.speed;

        if (p.y < -p.size * 2) {
          pixels[i] = makePixel(canvas.width, canvas.height);
          continue;
        }

        const progress = 1 - p.y / h;
        let alpha: number;
        if (progress < 0.1) alpha = (progress / 0.1) * p.maxOpacity;
        else if (progress > 0.65) alpha = ((1 - progress) / 0.35) * p.maxOpacity;
        else alpha = p.maxOpacity;

        const isDark = document.documentElement.classList.contains("dark");
        const finalAlpha = isDark ? alpha : alpha * 2.5;
        const [r, g, b] = p.color;
        ctx.fillStyle = `rgba(${r},${g},${b},${finalAlpha.toFixed(3)})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      raf = requestAnimationFrame(draw);
    }

    draw();

    const handleVisibility = () => {
      paused = document.hidden;
      if (!paused) draw();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
