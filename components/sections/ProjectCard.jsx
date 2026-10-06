"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cardClass =
  "group flex h-full flex-col items-center gap-4 rounded-xl bg-[#232329] p-7 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

const CardBody = ({ project }) => {
  const Icon = project.icon;
  return (
    <>
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-3xl text-accent ring-1 ring-accent/30 transition-colors duration-300 group-hover:bg-accent group-hover:text-primary">
        <Icon aria-hidden="true" />
      </span>
      {/* two-line title height reserved on multi-column layouts so descriptions line up across a row */}
      <h3 className="flex items-center justify-center text-xl font-bold leading-snug transition-colors group-hover:text-accent sm:min-h-[3.5rem]">
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed text-white/75 text-balance">{project.description}</p>
      <p className="mt-auto pt-2 text-xs leading-relaxed text-white/55">
        <span className="text-accent/80">Tech:</span> {project.tech.join(" · ")}
      </p>
    </>
  );
};

const ProjectCard = ({ project, index }) => {
  const body = <CardBody project={project} />;
  let card;
  if (project.href?.startsWith("/")) {
    card = (
      <Link href={project.href} className={cardClass}>
        {body}
      </Link>
    );
  } else if (project.href) {
    card = (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} (opens in a new tab)`}
        className={cardClass}
      >
        {body}
      </a>
    );
  } else {
    card = <div className={cardClass}>{body}</div>;
  }

  // Motion sits on the <li> so it never fights the card's hover lift
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08, ease: "easeOut" }}
    >
      {card}
    </motion.li>
  );
};

export default ProjectCard;
