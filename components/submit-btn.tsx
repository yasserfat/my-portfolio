"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const { language } = useLanguage();
  const label = translations[language].contact.submit;

  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85 disabled:opacity-60"
    >
      {pending ? (
        <span
          aria-hidden
          className="h-4 w-4 animate-spin rounded-full border-2 border-paper/40 border-t-paper motion-reduce:animate-none"
        />
      ) : null}
      {label}
    </button>
  );
}
