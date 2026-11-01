import { useEffect, useRef, useState } from "react";

export type CopyStatus = "idle" | "copied" | "failed";

const RESET_DELAY_MS = 1500;

export function useCopyToClipboard() {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), RESET_DELAY_MS);
  };

  return { status, copy };
}
