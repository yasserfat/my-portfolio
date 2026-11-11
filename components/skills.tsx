"use client";

import React from "react";
import Section from "./section";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <Section id="skills" title={t.heading} inViewRef={ref}>
      <dl className="divide-y divide-rule">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="grid gap-x-8 gap-y-1 py-4 first:pt-0 sm:grid-cols-[9.5rem_minmax(0,1fr)]"
          >
            <dt className="text-sm text-muted sm:pt-0.5">{t.groups[group.id]}</dt>
            <dd className="max-w-[38rem] leading-relaxed">{group.items.join(", ")}</dd>
          </div>
        ))}
        <div className="grid gap-x-8 gap-y-2 py-4 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
          <dt className="text-sm text-muted sm:pt-0.5">{t.languagesTitle}</dt>
          <dd>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {t.languages.map((item) => (
                <li key={item.lang}>
                  {item.lang}{" "}
                  <span className="font-semibold tabular-nums">{item.level}</span>
                  {item.note ? <span className="text-muted"> ({item.note})</span> : null}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
