import React from "react";

export type TimelineItem = {
  key: string;
  date: string;
  title: string;
  subtitle: string;
  body?: React.ReactNode;
};

// Dated entries for experience and education: the date sits in its own
// column on wide screens so the list reads top to bottom as a timeline.
export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="divide-y divide-rule">
      {items.map((item) => (
        <li
          key={item.key}
          className="grid gap-x-8 gap-y-1 py-5 first:pt-0 sm:grid-cols-[9.5rem_minmax(0,1fr)]"
        >
          <p className="text-sm text-muted tabular-nums sm:pt-0.5">{item.date}</p>
          <div className="max-w-[38rem]">
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-[15px] text-muted">{item.subtitle}</p>
            {item.body ? (
              <div className="mt-3 space-y-2 text-[15px] leading-relaxed">{item.body}</div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
