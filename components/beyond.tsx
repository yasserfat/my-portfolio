"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

const hikingPhotos = [
  { src: "/hiking1.png", alt: "Mountain trail hike", caption: "Atlas Mountains, Algeria" },
  { src: "/hiking2.png", alt: "Summit views", caption: "Fire starting" },
  { src: "/hiking4.png", alt: "Trail run", caption: "On the trail" },
];

const volPhotos = [
  { src: "/vol1.jpeg", alt: "Workshop session 1", caption: "Workshop session" },
  { src: "/vol2.jpeg", alt: "Workshop session 2", caption: "Hands-on robotics" },
  { src: "/vol3.jpeg", alt: "Workshop session 3", caption: "Student projects" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function PhotoGrid({
  photos,
  sizes = "(max-width: 640px) 100vw, 33vw",
}: {
  photos: { src: string; alt: string; caption: string }[];
  sizes?: string;
}) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-3 sm:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {photos.map((photo, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md dark:shadow-black/40"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            sizes={sizes}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <p className="absolute bottom-3 left-4 text-[11px] font-medium tracking-wide text-white/90">
            {photo.caption}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Beyond() {
  const { language } = useLanguage();
  const t = translations[language].beyond;

  return (
    <section className="mb-28 w-full max-w-[52rem] scroll-mt-28 px-2">
      <SectionHeading>{t.heading}</SectionHeading>

      {/* Hiking */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-5 flex items-center gap-2">
          <span className="text-xl">🏔️</span>
          <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
            {t.hikingTitle}
          </h3>
        </div>
        <p className="mb-6 max-w-[38rem] text-[14px] leading-relaxed text-stone-600 dark:text-stone-400">
          {t.hikingText}
        </p>
        <PhotoGrid photos={hikingPhotos} />
      </motion.div>

      <div className="mb-12 h-px w-full bg-gray-100 dark:bg-white/5" />

      {/* Volunteering */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-5 flex items-center gap-2">
          <span className="text-xl">🎓</span>
          <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
            {t.volTitle}
          </h3>
        </div>

        <motion.div
          className="mb-6 inline-flex items-center gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/10 dark:bg-violet-500/15 px-5 py-3"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="text-3xl font-bold text-violet-600 dark:text-violet-400">200+</span>
          <span className="text-[13px] leading-snug text-violet-700 dark:text-violet-300">
            {t.volStat}
          </span>
        </motion.div>

        <p className="mb-6 max-w-[40rem] text-[14px] leading-relaxed text-stone-600 dark:text-stone-400">
          {t.volText}
        </p>

        <PhotoGrid photos={volPhotos} />
      </motion.div>
    </section>
  );
}
