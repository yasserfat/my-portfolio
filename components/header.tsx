"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { BsMoon, BsSun } from "react-icons/bs";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage, type Language } from "@/context/language-context";
import { useTheme } from "@/context/theme-context";
import { translations } from "@/lib/translations";
import type { SectionName } from "@/lib/types";

const LANGS: Language[] = ["en", "de", "fr"];

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];

  const go = (name: SectionName) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="#home"
          onClick={() => go("Home")}
          className="font-display text-[1.05rem] font-bold tracking-tight"
        >
          Yasser Fetouhi
        </Link>

        <nav aria-label="Sections" className="hidden lg:block">
          <NavList activeSection={activeSection} labels={t.nav} onNavigate={go} />
        </nav>

        <div className="flex items-center gap-1">
          <div
            role="group"
            aria-label={t.header.language}
            className="flex items-center rounded-md border border-rule p-0.5"
          >
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                aria-pressed={language === code}
                lang={code}
                className={clsx(
                  "rounded-[4px] px-2 py-1 text-xs font-medium uppercase transition-colors",
                  language === code ? "bg-ink text-paper" : "text-muted hover:text-ink"
                )}
              >
                {code}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? t.header.toDark : t.header.toLight}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:text-ink"
          >
            {theme === "light" ? <BsMoon /> : <BsSun />}
          </button>
        </div>
      </div>

      {/* Small screens: the section links scroll sideways under the name */}
      <nav aria-label="Sections" className="overflow-x-auto border-t border-rule [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto max-w-page px-2 sm:px-4">
          <NavList activeSection={activeSection} labels={t.nav} onNavigate={go} />
        </div>
      </nav>
    </header>
  );
}

function NavList({
  activeSection,
  labels,
  onNavigate,
}: {
  activeSection: SectionName;
  labels: Record<SectionName, string>;
  onNavigate: (name: SectionName) => void;
}) {
  return (
    <ul className="flex items-center">
      {links
        .filter((link) => link.name !== "Home")
        .map((link) => {
          const active = activeSection === link.name;
          return (
            <li key={link.hash}>
              <Link
                href={link.hash}
                onClick={() => onNavigate(link.name)}
                aria-current={active ? "true" : undefined}
                className={clsx(
                  "relative block whitespace-nowrap px-2.5 py-3 text-sm transition-colors lg:py-2",
                  active ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {labels[link.name]}
                <span
                  aria-hidden
                  className={clsx(
                    "absolute inset-x-2.5 bottom-1 h-0.5 bg-detect transition-opacity lg:bottom-0",
                    active ? "opacity-100" : "opacity-0"
                  )}
                />
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
