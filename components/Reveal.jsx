"use client";

import { motion } from "framer-motion";

// Fades and lifts its content in the first time it scrolls into view
const Reveal = ({ as = "div", delay = 0, className, children }) => {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
