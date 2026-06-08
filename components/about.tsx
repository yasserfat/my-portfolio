"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const LEVEL_COLORS: Record<string, string> = {
  C1: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  B2: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Native: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  Muttersprache: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  "Langue natale": "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
};

export default function About() {
  const { ref } = useSectionInView("About");
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 w-full max-w-[52rem] scroll-mt-28 px-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeading>{t.heading}</SectionHeading>

      <motion.p
        className="mx-auto mb-8 max-w-[38rem] text-center text-[15px] leading-relaxed text-stone-600 dark:text-stone-400"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        {t.opener}
      </motion.p>

      {/* Cards grid */}
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {t.cards.map((card) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            className={`group rounded-2xl border bg-gradient-to-br p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-black/30 ${card.gradient}`}
          >
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-2xl">{card.emoji}</span>
              <h3 className={`text-xs font-bold uppercase tracking-widest ${card.accent}`}>
                {card.title}
              </h3>
            </div>
            <p className="text-[13.5px] leading-relaxed text-gray-600 dark:text-gray-400">
              {card.content}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Languages section */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.15 }}
      >
        <div className="flex items-center gap-2.5 mb-4">
          <span className="text-xl">🗣️</span>
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
            {t.langHeading}
          </h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {t.langItems.map((item) => {
            const levelColor =
              LEVEL_COLORS[item.level] ??
              "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20";
            return (
              <div
                key={item.lang}
                className="flex items-center gap-3 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-white/[0.04] px-4 py-3 shadow-sm"
              >
                <span className="text-2xl">{item.flag}</span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {item.lang}
                  </span>
                  {item.note ? (
                    <span className="text-[11px] text-gray-400 dark:text-gray-500">
                      {item.note}
                    </span>
                  ) : null}
                </div>
                <span
                  className={`ml-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${levelColor}`}
                >
                  {item.level}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
}
