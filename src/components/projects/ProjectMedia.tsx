import { ProjectMedia as Media } from "../../data/projects";

// ============================================================================
// Decorative illustrations — stand-ins until real screenshots exist
// ============================================================================

const TERMINAL_LINES = [
  { text: "$ ntrack status", className: "text-emerald-500/60" },
  { text: "● running in system tray", className: "" },
  { text: "  tracking active window…", className: "text-gray-400" },
  { text: "  daily report scheduled", className: "text-gray-400" },
  { text: "✓ daily report sent", className: "text-emerald-400" },
];

function TerminalIllustration() {
  return (
    <div aria-hidden className="w-full max-w-xs rounded-xl bg-ink-terminal border border-emerald-500/20 font-mono text-[11px] leading-5 text-emerald-300/90 p-4 shadow-2xl whitespace-pre">
      {TERMINAL_LINES.map((line) => (
        <div key={line.text} className={line.className}>
          {line.text}
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// Screenshot fan
// ============================================================================

const FAN_POSITIONS = [
  "rotate-[-6deg] translate-y-4 group-hover:translate-y-1",
  "group-hover:-translate-y-2",
  "rotate-[6deg] translate-y-4 group-hover:translate-y-1 hidden sm:block",
];

function ScreenshotFan({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="flex justify-center gap-4 pt-8 h-full">
      {images.slice(0, FAN_POSITIONS.length).map((image, i) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className={`w-28 self-start rounded-2xl shadow-2xl transition-transform duration-300 ${FAN_POSITIONS[i]}`}
        />
      ))}
    </div>
  );
}

// ============================================================================
// Sticker grid — brand art, tilted a little like stickers on a laptop
// ============================================================================

const STICKER_TILTS = ["-rotate-6", "rotate-3", "-rotate-2", "rotate-6", "-rotate-3", "rotate-2"];

function StickerGrid({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 p-4">
      {images.slice(0, STICKER_TILTS.length).map((image, i) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className={`w-16 h-16 drop-shadow-md transition-transform duration-300 group-hover:-translate-y-1 ${STICKER_TILTS[i]}`}
        />
      ))}
    </div>
  );
}

export function ProjectMedia({ media }: { media: Media }) {
  if (media.type === "screenshots") return <ScreenshotFan images={media.images} />;
  if (media.type === "stickers") return <StickerGrid images={media.images} />;
  return <TerminalIllustration />;
}
