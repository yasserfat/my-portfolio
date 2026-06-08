"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

type Category = "All" | "AI & CV" | "Web & Low-Code" | "Embedded & IoT";

const FILTERS: Category[] = ["All", "AI & CV", "Web & Low-Code", "Embedded & IoT"];

const CATEGORY_STYLES: Record<
  string,
  { badge: string; glow: string; dot: string }
> = {
  "AI & CV": {
    badge: "bg-violet-500/10 text-violet-500 border-violet-500/25 dark:bg-violet-500/15 dark:text-violet-400",
    glow: "hover:shadow-violet-500/15",
    dot: "bg-violet-400",
  },
  "Web & Low-Code": {
    badge: "bg-emerald-500/10 text-emerald-600 border-emerald-500/25 dark:bg-emerald-500/15 dark:text-emerald-400",
    glow: "hover:shadow-emerald-500/15",
    dot: "bg-emerald-400",
  },
  "Embedded & IoT": {
    badge: "bg-amber-500/10 text-amber-600 border-amber-500/25 dark:bg-amber-500/15 dark:text-amber-400",
    glow: "hover:shadow-amber-500/15",
    dot: "bg-amber-400",
  },
};

type Project = {
  title: string;
  category: Exclude<Category, "All">;
  tags: string[];
  description: string;
  link?: string;
  buttonLabel?: string;
  inProgress?: boolean;
};

const projects: Project[] = [
  {
    title: "Driver Behavior Detection (YOLOv8)",
    category: "AI & CV",
    tags: ["Python", "YOLOv8", "OpenCV", "Google Colab", "Roboflow"],
    description:
      "Real-time detection of unsafe driver behaviors — seatbelt violations and mobile phone usage — under challenging lighting conditions.",
    inProgress: true,
  },
  {
    title: "Scanned Exams → LaTeX + QR",
    category: "AI & CV",
    tags: ["Python", "Claude AI", "LaTeX", "OCR", "QR Code", "FastAPI", "Google Drive"],
    description:
      "Turns a scanned Arabic exam PDF into a fully formatted LaTeX document — extracts questions, figures, and solutions via Claude AI, compiles with XeLaTeX, uploads to Google Drive, and embeds a QR code in the printed exam paper.",
    link: "https://github.com/yasserfat/scaned-exams-to-letex-and-qr-code-for-solution",
    buttonLabel: "See Details",
  },
  {
    title: "Agon – AI Sports Nutrition Platform",
    category: "Web & Low-Code",
    tags: ["WeWeb", "Xano", "n8n", "Stripe", "AI", "Low-Code"],
    description:
      "AI-powered personalized sports nutrition platform — generates optimized meal plans, macros, and supplement recommendations for athletes.",
    link: "https://github.com/yasserfat/Agon-AI-Powered-Personalized-Sports-Nutrition-Platform",
    buttonLabel: "See Details",
  },
  {
    title: "Maze-Solving Robot",
    category: "Embedded & IoT",
    tags: ["C++", "ESP32", "PID Control", "IR Sensors", "Differential Drive", "Robotics"],
    description:
      "ESP32-powered autonomous maze-solving robot for the Polymaze competition — PID-controlled line following with a QTR A8 IR sensor array, differential drive steering, and color-sensor mini-game interactions. Two hardware generations (2023 & 2024).",
    link: "https://github.com/yasserfat/Maze-solving-robot",
    buttonLabel: "See Details",
  },
  {
    title: "IoT Debt Payment System",
    category: "Embedded & IoT",
    tags: ["C++", "IoT", "ESP32", "Hardware", "Automation"],
    description:
      "IoT system integrating hardware triggers with a debt tracking and payment workflow.",
    link: "https://github.com/yasserfat/IOT-system-for-debt-payment",
    buttonLabel: "See Details",
  },
  {
    title: "Solar EMS – IoT Energy Monitoring",
    category: "Embedded & IoT",
    tags: ["HTML", "JavaScript", "Firebase", "Chart.js", "ESP32", "Arduino"],
    description:
      "Real-time IoT solar energy monitoring dashboard — tracks power production, consumption, and battery state from an ESP32 device via Firebase.",
    link: "https://github.com/yasserfat/Solar-EMS-IoT-Monitoring-System",
    buttonLabel: "See Details",
  },
  {
    title: "DevFlows – Agency Website",
    category: "Web & Low-Code",
    tags: ["Webflow", "SEO", "Animation", "Low-Code"],
    description:
      "Marketing website for DevFlows, a low-code/AI agency — built while working there as a front-end developer.",
    link: "https://www.devflows.eu/",
    buttonLabel: "Visit Site",
  },
  {
    title: "Tera-Hertz Website",
    category: "Web & Low-Code",
    tags: ["Webflow", "Low-Code"],
    description:
      "Professional website built in Webflow while working at DevFlows.",
    link: "https://www.tera-hertz.fr/",
    buttonLabel: "Visit Site",
  },
  {
    title: "Tennis Eveil Website",
    category: "Web & Low-Code",
    tags: ["Webflow", "Low-Code"],
    description: "Club website built in Webflow while working at DevFlows.",
    link: "https://tenniseveil.com/",
    buttonLabel: "Visit Site",
  },
  {
    title: "THO Shipping Website",
    category: "Web & Low-Code",
    tags: ["Webflow", "Low-Code"],
    description:
      "Shipping company website built in Webflow while working at DevFlows.",
    link: "https://www.thoshipping.com/",
    buttonLabel: "Visit Site",
  },
];

const ExternalIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function ProjectCard({
  project,
  index,
  inProgressLabel,
  notPublishedLabel,
}: {
  project: Project;
  index: number;
  inProgressLabel: string;
  notPublishedLabel: string;
}) {
  const style = CATEGORY_STYLES[project.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.95 }}
      transition={{
        duration: 0.38,
        delay: index * 0.055,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex flex-col rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-white/[0.04] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${style.glow}`}
    >
      {project.inProgress && (
        <div className="absolute -top-2.5 left-4 z-10 flex items-center gap-1.5 rounded-full bg-rose-500 px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-widest text-white shadow">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          {inProgressLabel}
        </div>
      )}

      <span
        className={`absolute top-3.5 right-3.5 rounded-full border px-2 py-[2px] text-[10px] font-semibold tracking-wide ${style.badge}`}
      >
        {project.category}
      </span>

      <div className={`flex flex-col flex-1 ${project.inProgress ? "mt-4" : "mt-0"}`}>
        <h3 className="pr-20 text-sm font-semibold leading-snug text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-black/[0.05] dark:bg-white/[0.08] px-2.5 py-[3px] text-[11px] font-medium text-gray-600 dark:text-gray-300"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          {project.inProgress ? (
            <span className="inline-flex cursor-not-allowed select-none items-center gap-1.5 rounded-full border border-gray-200 dark:border-white/10 px-3.5 py-1.5 text-[11px] font-medium text-gray-300 dark:text-gray-600">
              {notPublishedLabel}
            </span>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-1.5 rounded-full border border-gray-800 dark:border-white/25 px-3.5 py-1.5 text-[11px] font-semibold text-gray-800 dark:text-white/80 transition-all duration-200 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 hover:border-gray-900 dark:hover:border-white"
            >
              {project.buttonLabel ?? "See Details"}
              <span className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                <ExternalIcon />
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const { language } = useLanguage();
  const t = translations[language].projects;

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const filterLabels: Record<Category, string> = {
    All: t.filterAll,
    "AI & CV": "AI & CV",
    "Web & Low-Code": "Web & Low-Code",
    "Embedded & IoT": "Embedded & IoT",
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 w-full max-w-5xl px-2"
    >
      <SectionHeading>{t.heading}</SectionHeading>

      <motion.div
        className="mb-10 flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {FILTERS.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "border-gray-900 bg-gray-900 text-white shadow-sm dark:border-white dark:bg-white dark:text-gray-900"
                : "border-gray-200 bg-transparent text-gray-500 hover:border-gray-400 hover:text-gray-700 dark:border-white/10 dark:text-gray-400 dark:hover:border-white/25 dark:hover:text-gray-200"
            }`}
          >
            {filterLabels[cat]}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              inProgressLabel={t.inProgress}
              notPublishedLabel={t.notPublished}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-10 text-center text-sm text-gray-400"
          >
            {t.empty}
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}
