"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// The box is the yellow circle's square; the photo is placed so the whole portrait (head and hands
// included) sits just inside the circle. Numbers come from the smallest circle enclosing the opaque
// pixels of /assets/photo.png (886 x 920): center (465.4, 477.6), radius 446.5, plus a 4% margin.
const PHOTO_STYLE = { width: "94.27%", left: "0.48%", top: "-0.82%" };

const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      // Fixed sizes so the photo never depends on the screen's pixel density
      className="relative aspect-square w-[300px] sm:w-[350px] md:w-[450px] xl:w-[min(500px,calc(100svh-320px))]"
    >
      <Image
        src="/assets/photo.png"
        priority
        quality={85}
        width={886}
        height={920}
        sizes="(max-width: 640px) 283px, (max-width: 768px) 330px, 472px"
        alt="Portrait of KyungTae Kim"
        className="absolute h-auto max-w-none"
        style={PHOTO_STYLE}
      />

      {/* circle animation around the photo */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none"
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
  );
};

export default Photo;
