"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Section from "./section";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";
import { featuredProject, projectGroups, type ProjectMeta } from "@/lib/data";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  const { language } = useLanguage();
  const t = translations[language].projects;
  const featured = t.items[featuredProject.id];

  return (
    <Section id="projects" title={t.heading} inViewRef={ref}>
      <article className="flex flex-col gap-6 border-b border-rule pb-10 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div className="max-w-[36rem]">
          <h3 className="font-display text-2xl font-bold tracking-tight">{featured.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{featured.description}</p>
          <p className="mt-4 text-sm">{featuredProject.stack.join(", ")}</p>
          <p className="mt-1 text-sm text-muted">{t.status}</p>
        </div>
        <p className="shrink-0 sm:pt-1 sm:text-right">
          <span className="block font-display text-5xl font-bold leading-none tracking-tight tabular-nums text-detect">
            0.934
          </span>
          <span className="mt-1.5 block text-sm text-muted">{t.metricLabel}</span>
        </p>
      </article>

      <div className="mt-10 space-y-10">
        {projectGroups.map((group) => (
          <div key={group.id}>
            <h3 className="mb-1 text-sm font-semibold">{t.groups[group.id]}</h3>
            <ul className="divide-y divide-rule">
              {group.projects.map((project) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  title={t.items[project.id].title}
                  description={t.items[project.id].description}
                  linkLabel={project.linkKind === "site" ? t.site : t.code}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProjectRow({
  project,
  title,
  description,
  linkLabel,
}: {
  project: ProjectMeta;
  title: string;
  description: string;
  linkLabel: string;
}) {
  return (
    <li className="grid gap-x-8 gap-y-1 py-4 sm:grid-cols-[minmax(0,1fr)_auto]">
      <div className="max-w-[36rem]">
        <p className="font-medium">{title}</p>
        <p className="mt-1 text-[15px] leading-relaxed text-muted">{description}</p>
        <p className="mt-1.5 text-xs text-muted">{project.stack.join(", ")}</p>
      </div>
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${linkLabel}: ${title}`}
          className="group inline-flex items-center gap-1 self-start text-sm font-medium underline decoration-rule underline-offset-4 transition-colors hover:decoration-detect sm:mt-0.5"
        >
          {linkLabel}
          <FiArrowUpRight
            aria-hidden
            className="text-muted transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
          />
        </a>
      ) : null}
    </li>
  );
}
