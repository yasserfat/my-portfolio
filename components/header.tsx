"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import type { SectionName } from "@/lib/types";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { language } = useLanguage();
  const t = translations[language].nav;

  return (
    <header className="z-[999] relative">
      {/* Mobile full-width background strip (hidden on sm+) */}
      <motion.div
        className="sm:hidden fixed top-0 left-0 h-[4.5rem] w-full border-b border-white/40 bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      />

      {/* Nav — auto-sizing pill on sm+, centered strip on mobile */}
      <motion.nav
        className={clsx(
          "fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 flex items-center py-2",
          "sm:top-6 sm:h-[3.25rem] sm:py-1 sm:px-2",
          "sm:rounded-full sm:border sm:border-white/40 sm:bg-white/80",
          "sm:shadow-lg sm:shadow-black/[0.03] sm:backdrop-blur-[0.5rem]",
          "dark:sm:bg-gray-950 dark:sm:border-black/40 dark:sm:bg-opacity-75"
        )}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-auto sm:flex-nowrap sm:gap-0">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center whitespace-nowrap px-2.5 py-3 text-[0.82rem] hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  { "text-gray-950 dark:text-gray-200": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name as SectionName);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {t[link.name as keyof typeof t]}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
