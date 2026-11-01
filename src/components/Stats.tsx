import { useState, useEffect } from "react";
import stats, { IStat } from "../data/stats";
import { useInView } from "../hooks/useInView";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { Container, surface, text } from "./ui";

const COUNT_DURATION_MS = 1200;
const FRAME_MS = 16;
const IN_VIEW_OPTIONS: IntersectionObserverInit = { threshold: 0.4 };

function useCountUp(target: number, active: boolean, instant: boolean) {
  const [count, setCount] = useState(instant ? target : 0);

  useEffect(() => {
    if (instant) {
      setCount(target);
      return;
    }
    if (!active) return;
    let current = 0;
    const step = target / (COUNT_DURATION_MS / FRAME_MS);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, FRAME_MS);
    return () => clearInterval(timer);
  }, [active, target, instant]);

  return count;
}

function StatItem({ stat, active, instant }: { stat: IStat; active: boolean; instant: boolean }) {
  const count = useCountUp(stat.value, active, instant);

  return (
    <div className="p-6 text-center bg-light-bg dark:bg-ink-900">
      <div className={`font-display text-3xl md:text-4xl font-bold tabular-nums ${text.accent}`}>
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className={`text-sm mt-1 ${text.muted}`}>{stat.label}</div>
    </div>
  );
}

function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(IN_VIEW_OPTIONS);
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div ref={ref} className="relative -mt-6">
      <Container>
        {/* gap-px over a tinted background draws the cell dividers */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden bg-gray-200 dark:bg-white/10 ${surface.outline}`}>
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} active={inView} instant={reducedMotion} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Stats;
