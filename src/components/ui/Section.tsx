import { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";
import { surface, text } from "./styles";

// Start revealing a little before the section scrolls into view so fast
// scrolling never lands on a blank area.
const REVEAL_OPTIONS: IntersectionObserverInit = { rootMargin: "0px 0px 15% 0px" };

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bordered?: boolean;
}

export function Section({ children, id, className = "", bordered = false }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>(REVEAL_OPTIONS);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative py-20 md:py-28 scroll-mt-16 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${bordered ? `border-t ${surface.divider}` : ""} ${className}`}
    >
      {children}
    </section>
  );
}

const MAX_WIDTH = {
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
};

interface ContainerProps {
  children: ReactNode;
  maxWidth?: keyof typeof MAX_WIDTH;
  className?: string;
}

export function Container({ children, maxWidth = "6xl", className = "" }: ContainerProps) {
  return (
    <div className={`relative z-10 mx-auto w-full px-4 md:px-6 ${MAX_WIDTH[maxWidth]} ${className}`}>
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  className?: string;
}

export function SectionHeader({ eyebrow, title, className = "mb-12" }: SectionHeaderProps) {
  return (
    <div className={className}>
      <p className={`${text.eyebrow} mb-3`}>{eyebrow}</p>
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${text.heading}`}>{title}</h2>
    </div>
  );
}
