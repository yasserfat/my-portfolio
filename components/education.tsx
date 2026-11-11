"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuGraduationCap } from "react-icons/lu";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Education() {
  const { ref } = useSectionInView("Education", 0.5);
  const { language } = useLanguage();
  const t = translations[language].education;

  return (
    <section
      ref={ref}
      id="education"
      className="mb-28 w-full max-w-[52rem] scroll-mt-28 px-2 sm:mb-40"
    >
      <SectionHeading>{t.heading}</SectionHeading>

      <motion.ol
        className="relative ml-3 space-y-6 border-l border-black/10 dark:border-white/15"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {t.items.map((item) => (
          <motion.li key={item.degree} variants={itemVariants} className="relative pl-8">
            <span
              className={`absolute -left-[1.05rem] top-4 flex h-8 w-8 items-center justify-center rounded-full border text-base shadow-sm ${
                item.current
                  ? "border-violet-500/30 bg-violet-50 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300"
                  : "border-black/10 bg-white text-gray-500 dark:border-white/15 dark:bg-gray-900 dark:text-gray-400"
              }`}
            >
              <LuGraduationCap />
            </span>

            <div
              className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-black/30 ${
                item.current
                  ? "border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-blue-500/5 dark:border-violet-500/25 dark:from-violet-500/15"
                  : "border-black/[0.06] bg-white dark:border-white/[0.08] dark:bg-white/[0.04]"
              }`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {item.degree}
                </h3>
                <div className="flex shrink-0 items-center gap-2">
                  {item.current ? (
                    <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-bold text-violet-600 dark:text-violet-400">
                      {t.present}
                    </span>
                  ) : null}
                  <span className="whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </span>
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {item.school} · {item.location}
              </p>
              {item.focus ? (
                <p className="mt-2 text-[13.5px] leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.focus}
                </p>
              ) : null}
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
