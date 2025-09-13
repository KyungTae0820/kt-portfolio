"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [showContent, setShowContent] = useState(false); //페이지 콘텐츠를 숨기기위한 state
  const roles = ["Golfer", "Student", "Learner", "Software Developer", "Discharged Soldier"];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // 2초마다 변경

    setShowContent(false); // 애니메이션 시작 전 콘텐츠 숨김
    const timeout = setTimeout(() => setShowContent(true), 3000); // 애니메이션 완료 후 콘텐츠 표시 (2초 후)

    return () => {
      clearInterval(interval); // 컴포넌트가 언마운트되면 인터벌을 클리어
      clearTimeout(timeout); // 타임아웃 클리어
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
            <p className="max-w-[650px] mb-9 text-white/100">
              I'm a{" "}
              {showContent && (
                <motion.span
                  key={roles[index]}
                  className="text-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {roles[index]}
                </motion.span>
              )}
              {" "}at the University of Southern California, 
            studying Computer Science. As a student with a passion for mathematics, computer science, and electrical engineering, 
            I’m constantly exploring the intersection of these fields to solve complex problems. 
            Outside of academics, I find joy in playing golf, listening to a wide variety of music, and traveling—experiencing new cultures and broadening my perspectives along the way.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/KT - Resume.pdf" download className="inline-block">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
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
