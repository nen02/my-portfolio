import { useState, useEffect, useRef } from "react";
import { Container } from "./ui";

const stats = [
  { value: 6, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Companies Served" },
  { value: 2000, suffix: "+", label: "Employees Impacted" },
  { value: 90, suffix: "%", label: "Processes Automated" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 1200, active);

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 dark:from-purple-400 dark:via-violet-400 dark:to-purple-500 bg-clip-text text-transparent tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</span>
    </div>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="py-10 md:py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-8 rounded-2xl bg-purple-100/80 dark:bg-purple-900/20 border border-purple-300 dark:border-purple-500/30">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} active={active} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Stats;
