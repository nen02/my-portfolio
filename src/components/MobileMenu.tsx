import { useEffect } from "react";
import navItems from "../data/navigation";
import profile from "../data/profile";
import { button, surface } from "./ui";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div id="mobile-menu" className={`md:hidden border-t ${surface.divider} bg-light-bg dark:bg-ink-900 shadow-xl`}>
      <div className="px-4 py-4 flex flex-col gap-1 text-base font-medium">
        {navItems.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={onClose} className="py-2.5 text-gray-700 dark:text-gray-300 hover:text-purple-500">
            {label}
          </a>
        ))}
        {profile.resumeUrl && (
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" onClick={onClose} className={`mt-2 ${button.primary}`}>
            Download Résumé
          </a>
        )}
      </div>
    </div>
  );
}
