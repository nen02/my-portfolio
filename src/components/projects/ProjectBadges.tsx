import { ProjectStatus } from "../../data/projects";
import { STATUS } from "./projectTheme";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = STATUS[status];
  return (
    <span className={`text-xs px-2.5 py-1 rounded-full border font-medium whitespace-nowrap ${config.className}`}>
      {config.label}
    </span>
  );
}

export function ProjectLink({ href, label, className }: { href: string; label: string; className: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
    </a>
  );
}
