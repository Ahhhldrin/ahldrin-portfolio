"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { ThemeChoice, useTheme } from "@/components/theme-provider";

const links = [
  { id: "about", label: "About me", number: "01" },
  { id: "projects", label: "Projects", number: "02" },
  { id: "skills", label: "Technical skills", number: "03" },
  { id: "certifications", label: "Certifications", number: "04" },
  { id: "github", label: "GitHub", number: "05" },
] as const;

function ThemeControl() {
  const { choice, setChoice } = useTheme();
  const choices: { value: ThemeChoice; label: string; mark: string }[] = [
    { value: "system", label: "System theme", mark: "◧" },
    { value: "light", label: "Light theme", mark: "☼" },
    { value: "dark", label: "Dark theme", mark: "☾" },
  ];
  return (
    <div className="theme-control" role="group" aria-label="Color theme">
      {choices.map(({ value, label, mark }) => (
        <button
          className={choice === value ? "theme-option is-selected" : "theme-option"}
          key={value}
          type="button"
          aria-label={label}
          aria-pressed={choice === value}
          onClick={() => setChoice(value)}
          title={label}
        >
          {mark}
        </button>
      ))}
    </div>
  );
}

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links.map(({ id }) => document.getElementById(id)).filter((section) => section !== null);
    const updateActive = () => {
      const marker = Math.min(window.innerHeight * 0.35, 300);
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) current = "github";
      setActive((previous) => previous === current ? previous : current);
    };
    const initialFrame = window.requestAnimationFrame(updateActive);
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const nav = (
    <nav className="side-nav" aria-label="Portfolio sections">
      {links.map(({ id, label, number }) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? "nav-link is-active" : "nav-link"}
          aria-current={active === id ? "location" : undefined}
          onClick={() => setMenuOpen(false)}
        >
          <span className="nav-link-indicator" aria-hidden="true">{active === id ? "→" : number}</span>
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="desktop-sidebar">
        <a className="brand" href="#home" aria-label={`${portfolio.name}, back to top`}>
          <span className="brand-name">{portfolio.name}</span>
        </a>
        <div className="sidebar-rule" />
        {nav}
        <div className="sidebar-bottom">
          <div className="sidebar-rule" />
          <div className="sidebar-bottom-row">
            <ThemeControl />
          </div>
          <div className="sidebar-contact">
            <p>For work, internship opportunities reach me at</p>
            <a className="sidebar-email" href={`mailto:${portfolio.email}`}>
              <span>{portfolio.email}</span><span aria-hidden="true">↗</span>
            </a>
          </div>
          <span className="sidebar-status" title="Portfolio in progress"><span className="status-dot" /> IN PROGRESS</span>
        </div>
      </aside>

      <header className="mobile-header">
        <a className="mobile-brand" href="#home">{portfolio.name}</a>
        <button
          type="button"
          className="menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "CLOSE ×" : "MENU +"}
        </button>
      </header>
      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          {nav}
          <div className="mobile-menu-bottom">
            <ThemeControl />
            <div className="mobile-menu-contact">
              <p>For work, internship opportunities reach me at</p>
              <a className="mobile-menu-email" href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
