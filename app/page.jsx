"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

import { Button } from "@/components/ui/button";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const roles = ["Golfer", "Student", "Learner", "Software Developer", "Discharged Soldier"];

const Home = () => {
  const [index, setIndex] = useState(0);
  // Hidden until the page intro animation (2.4 s) has finished
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    const timeout = setTimeout(() => setShowContent(true), 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-4xl font-semibold">Fight On!✌️</span>
            <h1 className="h1 mb-6">
              Hi, I'm <br /> <span className="text-accent">KT</span>
            </h1>
            <p className="max-w-[650px] mb-9 text-white">
              I'm a{" "}
              {/* Local AnimatePresence so the role's exit animation never delays page navigation */}
              <AnimatePresence mode="wait" initial={false}>
                {showContent && (
                  <motion.span
                    key={roles[index]}
                    className="text-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {roles[index]}
                  </motion.span>
                )}
              </AnimatePresence>{" "}
              at the University of Southern California, studying Computer Science. As a student with a
              passion for mathematics, computer science, and electrical engineering, I’m constantly exploring
              the intersection of these fields to solve complex problems. Outside of academics, I find joy in
              playing golf, listening to a wide variety of music, and traveling—experiencing new cultures and
              broadening my perspectives along the way.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/KT - Resume.pdf" download>
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-colors duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
