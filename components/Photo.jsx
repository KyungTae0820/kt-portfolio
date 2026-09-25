"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Where the circular crop sits inside /assets/photo.png (886 x 920), measured from its transparency:
// center at 54.06% / 57.68% of the image, diameter 89.07% of the image width.
// The SVG circle below has r=250 in a 506 viewBox, so it is drawn 90.14% (= 89.07 * 506 / 500) of the image width.
const CROP_CENTER_X = "54.06%";
const CROP_CENTER_Y = "57.68%";
const CIRCLE_SIZE = "90.14%";

const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      // Fixed widths so the size never depends on the screen's pixel density
      className="relative w-[333px] sm:w-[388px] md:w-[450px] xl:w-[min(555px,calc(100svh-300px))]"
    >
      <Image
        src="/assets/photo.png"
        priority
        quality={85}
        width={886}
        height={920}
        sizes="(max-width: 640px) 333px, (max-width: 768px) 388px, 555px"
        alt="Portrait of KyungTae Kim"
        className="w-full h-auto"
      />

      {/* circle animation, centered on the photo's circular crop */}
      <motion.svg
        className="absolute aspect-square -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ left: CROP_CENTER_X, top: CROP_CENTER_Y, width: CIRCLE_SIZE }}
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
