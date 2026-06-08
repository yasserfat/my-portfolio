"use client";

import Image from "next/image";
import myImg from "../public/persoanl_img.jpeg";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      ref={ref}
      id="home"
      className="flex min-h-[calc(100vh-7rem)] sm:min-h-[calc(100vh-9rem)] flex-col items-center justify-center w-full max-w-[54rem] text-center scroll-mt-[100rem] pb-6"
    >
      {/* Avatar */}
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.45) 0%, rgba(59,130,246,0.2) 55%, transparent 75%)",
              filter: "blur(14px)",
            }}
            animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.75, 0.45] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative p-[3px] rounded-full bg-gradient-to-br from-violet-400 via-pink-400 to-blue-500 shadow-2xl"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.05 }}
          >
            <Image
              src={myImg}
              alt="Yasser Fetouhi portrait"
              width={192}
              height={192}
              quality={95}
              priority
              className="h-28 w-28 rounded-full object-cover bg-white dark:bg-gray-900"
            />
          </motion.div>

          <motion.span
            className="absolute -bottom-1 -right-1 text-2xl select-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.25, duration: 0.7 }}
          >
            👋
          </motion.span>
        </div>
      </div>

    

      {/* Name & title */}
      <motion.div
        className="mb-3"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
          <span className="text-gray-900 dark:text-white">Fetouhi </span>
          <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Yasser
          </span>
        </h1>
        <p className="mt-2 text-base sm:text-lg text-gray-500 dark:text-gray-400 font-medium">
          {t.subtitle}{" "}
          <a
            href="https://devflows.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 underline underline-offset-4 decoration-dotted hover:decoration-solid transition-all"
          >
            devflows.eu
          </a>
          {" "}{t.subtitleSuffix}
        </p>
      </motion.div>

      {/* Bio */}
      <motion.p
        className="mb-4 px-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-[40rem] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        {t.bio1}{" "}
        <span className="font-semibold text-gray-900 dark:text-white">{t.bioHighlight1}</span>
        {t.bio2}{" "}
        <span className="font-semibold text-gray-900 dark:text-white">{t.bioHighlight2}</span>
        {t.bio3 ? <>{" "}{t.bio3}{" "}</> : ", "}
        <span className="font-semibold text-gray-900 dark:text-white">{t.bioHighlight3}</span>{" "}
        {t.bio4}
      </motion.p>

      {/* Stats row */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mb-4 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.45 }}
      >
        {t.stats.map((stat, i) => (
          <motion.div
            key={i}
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 + i * 0.07, duration: 0.4 }}
          >
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
              {stat.value}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Interest tags */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-2 mb-5 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.4 }}
      >
        {t.tags.map((tag) => (
          <span
            key={tag.label}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800/60 tracking-wide shadow-sm hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
          >
            <span>{tag.icon}</span>
            {tag.label}
          </span>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.33, duration: 0.45 }}
      >
        <Link
          href="#contact"
          className="group bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white px-7 py-3 flex items-center gap-2 rounded-full text-sm font-semibold outline-none focus:scale-110 hover:scale-105 active:scale-100 transition-all shadow-lg shadow-violet-500/30"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {t.contactMe}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition-transform" />
        </Link>

        <a
          className="group bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 px-7 py-3 flex items-center gap-2 rounded-full text-sm font-semibold text-gray-700 dark:text-white/80 outline-none focus:scale-110 hover:scale-105 active:scale-100 transition-all shadow-sm hover:border-gray-300 dark:hover:border-white/20"
          href="/CV.pdf"
          download
        >
          {t.downloadCv}
          <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition-transform" />
        </a>

        <div className="flex items-center gap-2">
          <a
            className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 p-3 text-gray-600 dark:text-white/60 hover:text-blue-600 dark:hover:text-blue-400 flex items-center rounded-full text-lg focus:scale-110 hover:scale-110 active:scale-100 transition-all shadow-sm"
            href="https://www.linkedin.com/in/yasser-fetouhi-b555b5235/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 p-3 text-gray-700 dark:text-white/60 hover:text-gray-900 dark:hover:text-white flex items-center text-[1.3rem] rounded-full focus:scale-110 hover:scale-110 active:scale-100 transition-all shadow-sm"
            href="https://github.com/yasserfat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
