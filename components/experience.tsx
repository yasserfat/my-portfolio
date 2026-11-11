"use client";

import React from "react";
import Section from "./section";
import Timeline from "./timeline";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <Section id="experience" title={t.heading} inViewRef={ref}>
      <Timeline
        items={t.items.map((item) => ({
          key: item.role + item.date,
          date: item.date,
          title: item.role,
          subtitle: `${item.org}, ${item.place}`,
          body: (
            <>
              {item.text ? <p>{item.text}</p> : null}
              {item.bullets.length > 0 ? (
                <ul className="list-disc space-y-1.5 pl-5 marker:text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </>
          ),
        }))}
      />
    </Section>
  );
}
