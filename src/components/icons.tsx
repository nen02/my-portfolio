// Small inline icons shared across sections.

const STROKE_PROPS = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function ResumeIcon() {
  return (
    <svg className="w-3.5 h-3.5" {...STROKE_PROPS}>
      <path d="M12 4v12m0 0-4-4m4 4 4-4M5 20h14" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" {...STROKE_PROPS}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function CopyIcon() {
  return (
    <svg className="w-4 h-4" {...STROKE_PROPS}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} {...STROKE_PROPS}>
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}
