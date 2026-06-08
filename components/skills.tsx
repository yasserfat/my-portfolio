"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { FaReact, FaNodeJs, FaMicrochip } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiTailwindcss,
  SiWebflow,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
  SiAirtable,
  SiOpencv,
  SiTensorflow,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  Icon?: IconType;
  initial?: string;
  color: string;
  bg: string;
};

const SKILLS: Skill[] = [
  { name: "React", Icon: FaReact, color: "#61DAFB", bg: "rgba(97,218,251,0.12)" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#111827", bg: "rgba(17,24,39,0.08)" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", bg: "rgba(49,120,198,0.12)" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", bg: "rgba(247,223,30,0.12)" },
  { name: "Vue.js", Icon: SiVuedotjs, color: "#4FC08D", bg: "rgba(79,192,141,0.12)" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", bg: "rgba(6,182,212,0.12)" },
  { name: "Webflow", Icon: SiWebflow, color: "#4353FF", bg: "rgba(67,83,255,0.12)" },
  { name: "Bubble.io", initial: "B", color: "#3B82F6", bg: "rgba(59,130,246,0.12)" },
  { name: "WeWeb", initial: "W", color: "#7C3AED", bg: "rgba(124,58,237,0.12)" },
  { name: "Node.js", Icon: FaNodeJs, color: "#339933", bg: "rgba(51,153,51,0.12)" },
  { name: "Python", Icon: SiPython, color: "#3776AB", bg: "rgba(55,118,171,0.12)" },
  { name: "Git", Icon: SiGit, color: "#F05032", bg: "rgba(240,80,50,0.12)" },
  { name: "GitHub", Icon: SiGithub, color: "#24292e", bg: "rgba(36,41,46,0.08)" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E", bg: "rgba(242,78,30,0.12)" },
  { name: "Airtable", Icon: SiAirtable, color: "#18BFFF", bg: "rgba(24,191,255,0.12)" },
  { name: "n8n", initial: "n8", color: "#EA4B26", bg: "rgba(234,75,38,0.12)" },
  { name: "Make", initial: "M", color: "#6D28D9", bg: "rgba(109,40,217,0.12)" },
  { name: "IoT", Icon: FaMicrochip, color: "#0891B2", bg: "rgba(8,145,178,0.12)" },
  { name: "RTOS", initial: "RT", color: "#16A34A", bg: "rgba(22,163,74,0.12)" },
  { name: "Computer Vision", Icon: SiOpencv, color: "#5C3EE8", bg: "rgba(92,62,232,0.12)" },
  { name: "Machine Learning", Icon: SiTensorflow, color: "#FF6F00", bg: "rgba(255,111,0,0.12)" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.04 * i, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 w-full max-w-[53rem] scroll-mt-28 text-center sm:mb-40 px-2"
    >
      <SectionHeading>{t.heading}</SectionHeading>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.name}
            custom={i}
            variants={itemVariants}
            className="flex flex-col items-center gap-2 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-white/[0.04] p-4 shadow-sm hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 cursor-default"
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ background: skill.bg }}
            >
              {skill.Icon ? (
                <skill.Icon
                  size={22}
                  style={{
                    color: skill.name === "Next.js" || skill.name === "GitHub"
                      ? undefined
                      : skill.color,
                  }}
                  className={
                    skill.name === "Next.js" || skill.name === "GitHub"
                      ? "text-gray-900 dark:text-white"
                      : undefined
                  }
                />
              ) : (
                <span
                  className="text-sm font-black text-white"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full text-[13px] font-black text-white"
                    style={{ backgroundColor: skill.color }}
                  >
                    {skill.initial}
                  </span>
                </span>
              )}
            </div>
            <span className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 leading-tight text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
