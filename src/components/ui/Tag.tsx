import { ReactNode } from "react";

const VARIANTS = {
  accent: "px-2.5 py-1 text-xs rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-300",
  outline: "px-2.5 py-1 text-xs rounded-md border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400",
  chip: "px-2.5 py-1.5 text-sm rounded-lg bg-purple-500/[.07] border border-purple-500/15 text-gray-700 dark:text-gray-300",
};

interface TagProps {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
}

export function Tag({ children, variant = "outline" }: TagProps) {
  return <span className={`inline-flex items-center gap-1.5 ${VARIANTS[variant]}`}>{children}</span>;
}

export function TagList({ items, variant }: { items: string[]; variant?: TagProps["variant"] }) {
  if (items.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Tag key={item} variant={variant}>
          {item}
        </Tag>
      ))}
    </div>
  );
}
