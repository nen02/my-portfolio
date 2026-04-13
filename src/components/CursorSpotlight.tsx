import { useState, useEffect } from "react";

function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setActive(true);
    };
    const leave = () => setActive(false);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        opacity: active ? 1 : 0,
        background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(168, 85, 247, 0.07), transparent 40%)`,
      }}
    />
  );
}

export default CursorSpotlight;
