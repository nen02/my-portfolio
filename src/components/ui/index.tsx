import React, { useState, useEffect } from "react";

// ============================================================================
// Design System Constants
// ============================================================================

export const colors = {
  primary: "text-purple-600 dark:text-purple-400",
  primaryHover: "hover:text-purple-700 dark:hover:text-purple-300",
  secondary: "text-purple-700 dark:text-purple-300",
  background: "bg-purple-100/80 dark:bg-purple-900/20",
  backgroundHover: "hover:bg-purple-200/80 dark:hover:bg-purple-900/30",
  border: "border-purple-300 dark:border-purple-500/30",
  borderHover: "hover:border-purple-400 dark:hover:border-purple-500/50",
  accent: "text-pink-600 dark:text-pink-400",
};

export const gradients = {
  heading:
    "bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent",
  accent:
    "bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent",
};

// ============================================================================
// Reusable UI Components
// ============================================================================

interface GlowOrbProps {
  className?: string;
  color?: "purple" | "violet" | "fuchsia";
  delay?: number;
}

export function GlowOrb({ className = "", color = "purple", delay }: GlowOrbProps) {
  const colorClasses = {
    purple: "bg-purple-500/30",
    violet: "bg-violet-500/30",
    fuchsia: "bg-fuchsia-500/30",
  };

  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-40 ${colorClasses[color]} ${className}`}
      style={delay !== undefined ? { animationDelay: `${delay}s` } : undefined}
    />
  );
}

// ============================================================================
// Animated Glow Field
// ============================================================================

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

interface GlowFieldProps {
  count?: number;
}

export function GlowField({ count = 4 }: GlowFieldProps) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <AnimatedGlowOrb key={i} initialDelay={i * 700} />
      ))}
    </>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-32 scroll-mt-16 relative overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "4xl" | "6xl";
  className?: string;
}

export function Container({
  children,
  maxWidth = "6xl",
  className = "",
}: ContainerProps) {
  const maxWidthClasses = {
    "4xl": "max-w-4xl",
    "6xl": "max-w-6xl",
  };

  return (
    <div
      className={`container mx-auto px-5 ${maxWidthClasses[maxWidth]} relative z-10 ${className}`}
    >
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 dark:from-white dark:via-white dark:to-gray-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className = "", delay }: CardProps) {
  return (
    <div
      className={`p-8 rounded-2xl ${colors.background} ${colors.border} ${colors.borderHover} ${colors.backgroundHover} transition-all duration-300 ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

interface IconButtonProps {
  icon: React.ReactElement;
  href: string;
  label: string;
  className?: string;
}

export function IconButton({
  icon,
  href,
  label,
  className = "",
}: IconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 rounded-xl ${colors.background} ${colors.border} ${colors.borderHover} ${colors.backgroundHover} transition-all duration-300 group ${className}`}
      title={label}
    >
      {React.cloneElement(icon, {
        className: `text-gray-400 group-hover:${colors.primary} transition-colors`,
      })}
    </a>
  );
}

interface ScrollIndicatorProps {
  className?: string;
}

export function ScrollIndicator({ className = "" }: ScrollIndicatorProps) {
  return (
    <div className={`flex justify-center mt-12 ${className}`}>
      <div className="relative">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-purple-400 rounded-full animate-scroll" />
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Terminal Component
// ============================================================================

interface TerminalProps {
  title?: string;
  lines?: string[];
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function Terminal({
  title = "Terminal",
  lines = [],
  children,
  className = "",
  contentClassName = "",
}: TerminalProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-2xl border ${colors.border} w-96 flex-shrink-0 ${colors.background} ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-200 dark:bg-[#2d2d2d] border-b border-black/10 dark:border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-purple-500/80" />
        </div>
        <div className="ml-4 text-xs text-gray-500 dark:text-gray-400">{title}</div>
      </div>
      <div className={`p-4 bg-gray-50 dark:bg-[#1a1b26] font-mono text-xs space-y-1 ${contentClassName}`}>
        {children ||
          lines.map((line, index) => (
            <div key={index} className="text-gray-300 whitespace-pre-wrap">
              {line}
            </div>
          ))}
      </div>
    </div>
  );
}

interface CodeEditorProps {
  filename?: string;
  lines?: string[];
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function CodeEditor({
  filename = "code.js",
  lines = [],
  children,
  className = "",
  contentClassName = "",
}: CodeEditorProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-2xl border ${colors.border} w-96 flex-shrink-0 -mt-4 relative z-10 ${colors.background} ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-[#1e1e2e] border-b border-black/10 dark:border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-purple-500/80" />
        </div>
        <div className="ml-4 text-xs text-gray-500 dark:text-gray-500">{filename}</div>
      </div>
      <div className={`p-4 bg-white dark:bg-[#0d1117] font-mono text-xs ${contentClassName}`}>
        {children ||
          lines.map((line, index) => (
            <div key={index} className="flex items-center">
              <span className="text-gray-600 w-6 select-none flex-shrink-0">
                {index + 1}
              </span>
              <code className="text-gray-300 whitespace-pre">{line}</code>
            </div>
          ))}
      </div>
    </div>
  );
}

// ============================================================================
// Service Card Component
// ============================================================================

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({
  icon,
  title,
  description,
  delay,
}: ServiceCardProps) {
  return (
    <Card delay={delay}>
      <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <p className="font-semibold text-xl text-gray-800 dark:text-white mb-3 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
        {title}
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </Card>
  );
}

// ============================================================================
// Experience Item Component
// ============================================================================

interface ExperienceItemProps {
  period: string;
  title: string;
  company: string;
  description: string[];
}

export function ExperienceItem({
  period,
  title,
  company,
  description,
}: ExperienceItemProps) {
  return (
    <div className="relative flex flex-col md:flex-row items-start mb-8 md:mb-12 last:mb-0 md:gap-8">
      {/* Left side - Company, Position, Date */}
      <div className="md:w-1/2 md:pr-4 text-left pt-1 w-full">
        <p className="text-purple-400 text-sm font-medium mb-1">{period}</p>
        <h3 className="text-white font-bold text-base md:text-lg">{title}</h3>
        <p className="text-gray-400 text-sm">{company}</p>
      </div>

      {/* Right side - Details in a box */}
      <div className="md:w-1/2 md:pl-4 pt-3 md:pt-1 w-full">
        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 w-full">
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li
                key={index}
                className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
              >
                <span className="text-purple-400 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Tech Stack Item Component
// ============================================================================

interface TechStackItemProps {
  icon: string;
  name: string;
  delay?: number;
}

export function TechStackItem({ icon, name, delay }: TechStackItemProps) {
  return (
    <div
      className="group flex flex-col items-center p-6 rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:bg-purple-900/30"
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        <img
          src={icon}
          alt={name}
          className={`relative h-14 w-14 object-contain group-hover:scale-110 transition-transform duration-300 ${name === "Express" ? "brightness-0 invert" : ""}`}
        />
      </div>
      <p className="text-center mt-4 text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors">
        {name}
      </p>
    </div>
  );
}

// ============================================================================
// Footer Social Link Component
// ============================================================================

interface SocialLinkProps {
  icon: React.ReactElement;
  href: string;
  label: string;
}

export function SocialLink({ icon, href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 rounded-xl ${colors.background} ${colors.border} ${colors.borderHover} ${colors.backgroundHover} transition-all duration-300 group`}
      title={label}
    >
      {React.cloneElement(icon, {
        className: `text-gray-400 group-hover:${colors.primary} transition-colors`,
      })}
    </a>
  );
}
