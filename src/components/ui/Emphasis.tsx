import { text } from "./styles";

const EMPHASIS_PATTERN = /\*\*(.+?)\*\*/g;

/** Renders a string, turning **wrapped** phrases into emphasised spans. */
export function Emphasis({ children }: { children: string }) {
  const parts = children.split(EMPHASIS_PATTERN);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className={`font-medium ${text.heading}`}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
