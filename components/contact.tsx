"use client";

import React from "react";
import toast from "react-hot-toast";
import Section from "./section";
import SubmitBtn from "./submit-btn";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { CONTACT_EMAIL } from "@/lib/data";

const fieldClass =
  "w-full rounded-md border border-rule bg-surface px-3.5 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <Section id="contact" title={t.heading} inViewRef={ref}>
      <p className="max-w-[34rem] leading-relaxed text-muted">{t.text}</p>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mt-4 inline-block break-all font-display text-2xl font-bold tracking-tight underline decoration-detect decoration-2 underline-offset-[6px] transition-colors hover:text-detect sm:text-3xl"
      >
        {CONTACT_EMAIL}
      </a>

      <form
        className="mt-10 max-w-[34rem] space-y-4"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success(t.success);
        }}
      >
        <div>
          <label htmlFor="senderEmail" className="mb-1.5 block text-sm font-medium">
            {t.emailLabel}
          </label>
          <input
            id="senderEmail"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            {t.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={5000}
            rows={6}
            placeholder={t.messagePlaceholder}
            className={`${fieldClass} resize-y`}
          />
        </div>
        <SubmitBtn />
      </form>
    </Section>
  );
}
