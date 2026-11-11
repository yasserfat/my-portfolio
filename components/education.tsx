"use client";

import React from "react";
import Section from "./section";
import Timeline from "./timeline";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function Education() {
  const { ref } = useSectionInView("Education", 0.5);
  const { language } = useLanguage();
  const t = translations[language].education;

  return (
    <Section id="education" title={t.heading} inViewRef={ref}>
      <Timeline
        items={t.items.map((item) => ({
          key: item.degree,
          date: item.date,
          title: item.degree,
          subtitle: `${item.school}, ${item.place}`,
          body: item.focus ? <p>{item.focus}</p> : undefined,
        }))}
      />
    </Section>
  );
}
