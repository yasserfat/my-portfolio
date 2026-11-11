"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, animate, useReducedMotion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import myImg from "../public/persoanl_img.jpeg";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { CONTACT_EMAIL, CV_PATH, GITHUB_URL, LINKEDIN_URL } from "@/lib/data";

// Face position in the square portrait, in percent of the image.
const FACE_BOX = { left: 38, top: 6.5, width: 33, height: 46 };
const CONFIDENCE = 0.93;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section
      ref={ref}
      id="home"
      className="mx-auto grid w-full max-w-page scroll-mt-[100rem] items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:min-h-[calc(100vh-3.5rem)] md:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] md:gap-14 md:py-12 lg:gap-20"
    >
      <DetectedPortrait alt={t.portraitAlt} />

      <div>
        <h1 className="max-w-[15em] font-display text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem]">
          {t.statement}
        </h1>

        <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted">
          {t.study} {t.open}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            {t.email}
          </a>
          <a
            href={CV_PATH}
            download="Yasser_Fetouhi_CV.pdf"
            className="rounded-md border border-ink/25 px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            {t.cv}
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-md text-lg text-muted transition-colors hover:text-ink"
            >
              <BsGithub />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-md text-lg text-muted transition-colors hover:text-ink"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted">{t.location}</p>
      </div>
    </section>
  );
}

// The page's one animated moment: a detection box draws itself around the
// face, then its label counts up to the confidence score.
function DetectedPortrait({ alt }: { alt: string }) {
  const reduceMotion = useReducedMotion();
  const [score, setScore] = useState(reduceMotion ? CONFIDENCE : 0);

  useEffect(() => {
    if (reduceMotion) {
      setScore(CONFIDENCE);
      return;
    }
    const controls = animate(0, CONFIDENCE, {
      delay: 1.05,
      duration: 0.7,
      ease: "easeOut",
      onUpdate: setScore,
    });
    return () => controls.stop();
  }, [reduceMotion]);

  return (
    <figure className="relative mx-auto w-full max-w-[19rem] md:max-w-none">
      <Image
        src={myImg}
        alt={alt}
        priority
        quality={90}
        sizes="(max-width: 768px) 19rem, 21rem"
        className="aspect-square w-full rounded-[3px] bg-surface object-cover"
      />

      <div
        className="pointer-events-none absolute"
        style={{
          left: `${FACE_BOX.left}%`,
          top: `${FACE_BOX.top}%`,
          width: `${FACE_BOX.width}%`,
          height: `${FACE_BOX.height}%`,
        }}
        aria-hidden
      >
        <svg className="absolute inset-0 h-full w-full overflow-visible">
          <motion.rect
            width="100%"
            height="100%"
            fill="none"
            stroke="rgb(var(--detect))"
            strokeWidth={2.5}
            initial={reduceMotion ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          />
        </svg>
        <motion.span
          className="absolute bottom-full left-[-1.25px] whitespace-nowrap bg-detect px-1.5 py-0.5 text-[12px] font-medium leading-tight text-white tabular-nums"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.2 }}
        >
          yasser {score.toFixed(2)}
        </motion.span>
      </div>
    </figure>
  );
}
