"use client";

import React from "react";
import Image from "next/image";
import Section from "./section";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { photos } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About", 0.3);
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <Section id="about" title={t.heading} inViewRef={ref}>
      <div className="max-w-[36rem] space-y-4 text-[17px] leading-[1.7]">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <PhotoSet srcs={photos.hiking} caption={t.hiking} alt={t.hikingAlt} />
        <PhotoSet srcs={photos.teaching} caption={t.teaching} alt={t.teachingAlt} />
      </div>
    </Section>
  );
}

function PhotoSet({ srcs, caption, alt }: { srcs: string[]; caption: string; alt: string }) {
  return (
    <figure>
      <div className="grid grid-cols-3 gap-2">
        {srcs.map((src, i) => (
          <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-surface">
            <Image
              src={src}
              alt={`${alt} (${i + 1}/${srcs.length})`}
              fill
              sizes="(max-width: 1024px) 30vw, 14rem"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}
