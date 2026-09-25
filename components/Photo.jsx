"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex items-center justify-center w-full"
      >
        {/* image */}
        <div className="relative w-[70%] max-w-[400px] lg:w-[100%] lg:max-w-[800px] h-auto">
          <Image
            src="/assets/photo.png"
            priority
            quality={85}
            width={886}
            height={920}
            sizes="(max-width: 960px) 70vw, 800px"
            alt="Portrait of KyungTae Kim"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* circle animation */}
        <motion.svg
          className="absolute w-[300px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#FFCC00"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
