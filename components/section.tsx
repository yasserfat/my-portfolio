import React from "react";

type SectionProps = {
  id: string;
  title: string;
  inViewRef?: (node?: Element | null) => void;
  children: React.ReactNode;
};

// Page sections share one structure: the title sits in a left column on wide
// screens and stays in view while its content scrolls past.
export default function Section({ id, title, inViewRef, children }: SectionProps) {
  return (
    <section
      id={id}
      ref={inViewRef}
      className="mx-auto grid w-full max-w-page scroll-mt-24 gap-6 border-t border-rule px-4 py-14 sm:px-6 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-12 md:py-20"
    >
      <h2 className="self-start font-display text-2xl font-bold tracking-tight md:sticky md:top-24 md:text-xl">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
