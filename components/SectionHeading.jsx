"use client";

import { motion } from "framer-motion";

const SectionHeading = ({ id, eyebrow, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="mb-10 xl:mb-14 text-center xl:text-left"
  >
    {eyebrow && <p className="text-sm uppercase tracking-[3px] text-accent">{eyebrow}</p>}
    <h2 id={id} className="text-3xl xl:text-5xl font-bold leading-tight">
      {title}
    </h2>
    <span aria-hidden="true" className="mt-4 block h-1 w-16 rounded bg-accent mx-auto xl:mx-0" />
    {description && <p className="mt-4 max-w-[720px] text-white/75 leading-relaxed mx-auto xl:mx-0">{description}</p>}
  </motion.div>
);

export default SectionHeading;
