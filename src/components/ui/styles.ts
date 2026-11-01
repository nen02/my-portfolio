// ============================================================================
// Shared class strings — the single source for repeated visual tokens
// ============================================================================

export const text = {
  heading: "text-gray-900 dark:text-white",
  body: "text-gray-600 dark:text-gray-400",
  muted: "text-gray-500",
  accent: "text-purple-500 dark:text-purple-400",
  eyebrow: "text-purple-500 dark:text-purple-400 text-sm font-semibold tracking-widest uppercase",
  gradientAccent: "bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent",
};

export const surface = {
  card: "rounded-2xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/[.02]",
  outline: "rounded-2xl border border-gray-200 dark:border-white/10",
  floating: "bg-white dark:bg-ink-700 border border-gray-200 dark:border-white/10 shadow-xl",
  divider: "border-gray-200 dark:border-white/5",
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300";

export const button = {
  primary: `${buttonBase} px-7 py-3.5 bg-purple-500 hover:bg-purple-400 text-white hover:shadow-lg hover:shadow-purple-500/30`,
  outline: `${buttonBase} px-7 py-3.5 border border-gray-300 dark:border-white/15 text-gray-800 dark:text-gray-200 hover:border-purple-500/60`,
  pill: `${buttonBase} px-4 py-2 text-sm font-medium border border-purple-500/40 text-purple-600 dark:text-purple-300 hover:bg-purple-500/10`,
  icon: "grid h-11 w-11 place-items-center rounded-full border border-gray-300 dark:border-white/15 text-gray-600 dark:text-gray-300 transition hover:border-purple-500/60 hover:text-purple-500",
  ghost: "p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-purple-500/10 transition-colors",
};
