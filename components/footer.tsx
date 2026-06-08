"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">&copy; {t.copyright}</small>
      <p className="text-xs">
        <span className="font-semibold">{t.aboutLabel}</span> {t.tech}
      </p>
    </footer>
  );
}
