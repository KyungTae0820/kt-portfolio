"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Algorithm Implementations of Leading Platforms or Applications",
    description:
      "Focuses on implementing complex algorithms used by top platforms and applications. The goal is to optimize and adapt various algorithms for real-world applications, including data processing, web services, etc.",
    href: "https://github.com/KyungTae0820/projects/tree/main/01",
  },
  {
    num: "02",
    title: "Constructions and Implemenations on Full-Stack Embedded Systems",
    description:
      "Designed and developed full-stack embedded systems that integrate hardware and software. From building the embedded circuit to implementing the control systems on the software side, the project explores the full development cycle of an embedded solution.",
    href: "https://www.instagram.com/we._.tech/",
  },
  {
    num: "03",
    title: "Game Developments",
    description:
      "Involves the development of interactive games with a focus on gameplay mechanics, CLI-based design, and real-time processing. I applied game development principles to create engaging and optimized games!",
    href: "https://github.com/KyungTae0820/projects/tree/main/03",
  },
  {
    num: "04",
    title: "Sophisticated Implementation of Fundamental C++ Syntax",
    description:
      "In-depth exploration of C++ syntax, implementing various fundamental concepts such as object-oriented programming, memory management, and data structures. The aim was to refine and enhance the core skills of C++ programming while tackling real-world challenges.",
    href: "https://github.com/KyungTae0820/projects/tree/main/04",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="text-center mb-12"  // Adjust spacing as needed
        >
          <h1 className="text-3xl font-bold text-white">Explore the various projects that I have worked on!</h1>
          <p className="text-white/80">
            Notice: By clicking the circle with the arrow, you will be redirected to the GitHub or Instagram page.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-between gap-6 min-h-[200px] group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[25px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/80">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
