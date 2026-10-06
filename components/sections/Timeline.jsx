"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";

import { timelineKinds } from "@/lib/profile";
import { cn } from "@/lib/utils";

// On wide screens cards alternate sides of the line; below that, every card sits to the right.
const useIsWide = () => {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1200px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return wide;
};

const TimelineItem = ({ item, index, wide }) => {
  const reduce = useReducedMotion();
  const left = wide && index % 2 === 0;
  const kind = timelineKinds[item.kind];
  const Icon = kind.icon;

  return (
    <li className={cn("relative pl-14 xl:pl-0 xl:w-1/2", left ? "xl:self-start xl:pr-14" : "xl:self-end xl:pl-14")}>
      {/* icon on the line */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-5 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary ring-4 ring-primary",
          left ? "xl:left-auto xl:-right-5" : "xl:-left-5"
        )}
      >
        <Icon />
      </span>

      <motion.article
        initial={{ opacity: 0, x: reduce ? 0 : left ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl bg-[#232329] p-6 shadow-lg"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm text-accent">{item.dates}</span>
          <span className="rounded-full border border-accent/40 px-2.5 py-0.5 text-[11px] uppercase tracking-[2px] text-accent/90">
            {kind.label}
          </span>
        </div>
        <h3 className="mt-2 text-xl font-bold leading-snug">{item.title}</h3>
        <p className="mt-1 text-white/75">
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent transition-colors"
            >
              {item.org}
              <FiExternalLink aria-hidden="true" className="text-xs" />
            </a>
          ) : (
            item.org
          )}
          {/* location on its own line on phones so a wrapped line never strands the separator */}
          <span className="block sm:inline text-white/45">
            <span className="hidden sm:inline"> · </span>
            {item.location}
          </span>
        </p>

        {item.roles && (
          <ul className="mt-3 border-l border-white/15 pl-3 text-sm text-white/70">
            {item.roles.map((role) => (
              <li key={role.title}>
                {role.title} <span className="text-white/45">· {role.dates}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/85 marker:text-accent">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        {item.details && (
          <details className="group mt-2 text-sm">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1 text-accent hover:text-accent-hover [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">More</span>
              <span className="hidden group-open:inline">Less</span>
              <FiChevronDown aria-hidden="true" className="transition-transform group-open:rotate-180" />
            </summary>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-relaxed text-white/85 marker:text-accent">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </details>
        )}

        {item.tags && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Coursework">
            {item.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-xs text-white/80">
                {tag}
              </li>
            ))}
          </ul>
        )}

        {item.tech && (
          <p className="mt-4 text-xs leading-relaxed text-white/55">
            <span className="text-accent/80">Tech:</span> {item.tech.join(" · ")}
          </p>
        )}
      </motion.article>
    </li>
  );
};

const Timeline = ({ items }) => {
  const wide = useIsWide();
  return (
    <ol className="relative flex flex-col gap-8 xl:gap-6">
      {/* the vertical line: left edge on small screens, centered on wide screens */}
      <span aria-hidden="true" className="absolute inset-y-0 left-5 w-px bg-white/20 xl:left-1/2 xl:-translate-x-1/2" />
      {items.map((item, i) => (
        <TimelineItem key={`${item.org}-${item.dates}`} item={item} index={i} wide={wide} />
      ))}
    </ol>
  );
};

export default Timeline;
