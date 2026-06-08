"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage, type Language } from "@/context/language-context";

const LANGS: { code: Language; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "de", flag: "🇩🇪", label: "DE" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
];

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = LANGS.find((l) => l.code === language)!;

  return (
    <div ref={ref} className="fixed bottom-20 right-5 z-50">
      {open && (
        <div className="absolute bottom-full mb-2 right-0 flex flex-col gap-1 items-end">
          {LANGS.filter((l) => l.code !== language).map((l) => (
            <button
              key={l.code}
              onClick={() => { setLanguage(l.code); setOpen(false); }}
              className="flex items-center gap-1.5 bg-white dark:bg-gray-950 border border-white/40 dark:border-black/40 shadow-lg rounded-full px-3 h-10 text-sm font-medium hover:scale-105 active:scale-100 transition-all backdrop-blur-sm"
            >
              <span>{l.flag}</span>
              <span className="text-gray-600 dark:text-gray-300">{l.label}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="bg-white dark:bg-gray-950 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all text-sm font-semibold text-gray-700 dark:text-gray-200 gap-0.5"
        aria-label="Switch language"
      >
        <span className="text-base leading-none">{current.flag}</span>
      </button>
    </div>
  );
}
