"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

export type ThemeChoice = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

const ThemeContext = createContext<{
  choice: ThemeChoice;
  resolved: ResolvedTheme;
  setChoice: (choice: ThemeChoice) => void;
}>({ choice: "system", resolved: "dark", setChoice: () => {} });

const themeChangeEvent = "portfolio-theme-change";

function getThemeSnapshot() {
  let saved: string | null = null;
  try { saved = window.localStorage.getItem("portfolio-theme"); } catch { /* Storage can be disabled. */ }
  const choice: ThemeChoice = saved === "light" || saved === "dark" ? saved : "system";
  const system: ResolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  return `${choice}:${choice === "system" ? system : choice}`;
}

function subscribeTheme(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener(themeChangeEvent, callback);
  window.addEventListener("storage", callback);
  media.addEventListener("change", callback);
  return () => {
    window.removeEventListener(themeChangeEvent, callback);
    window.removeEventListener("storage", callback);
    media.removeEventListener("change", callback);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const snapshot = useSyncExternalStore(subscribeTheme, getThemeSnapshot, () => "system:dark");
  const [choice, resolved] = snapshot.split(":") as [ThemeChoice, ResolvedTheme];

  useEffect(() => {
    document.documentElement.dataset.theme = resolved;
    document.documentElement.style.colorScheme = resolved;
  }, [resolved]);

  const setChoice = useCallback((next: ThemeChoice) => {
    try { window.localStorage.setItem("portfolio-theme", next); } catch { /* Storage can be disabled. */ }
    window.dispatchEvent(new Event(themeChangeEvent));
  }, []);

  const value = useMemo(() => ({ choice, resolved, setChoice }), [choice, resolved, setChoice]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
