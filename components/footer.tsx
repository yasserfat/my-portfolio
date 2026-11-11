"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-page flex-col gap-1 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>&copy; 2026 Yasser Fetouhi</p>
        <p>{t.built}</p>
      </div>
    </footer>
  );
}
