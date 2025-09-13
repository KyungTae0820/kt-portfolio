"use client";

import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,

} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { PiFileCppBold } from "react-icons/pi";
import { SiJupyter } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Here is my basic information!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "KyungTae Kim (KT)",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) (917) 487 8930",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years",
    },
    {
      fieldName: "Discord",
      fieldValue: "KT0820#8549",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Korean",
    },
    {
      fieldName: "Email",
      fieldValue: "kimkyungtae12386@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Korean, Spanish",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "As a Junior in college, I am eager to gain experience at various companies in the future!",
  items: [
    {
      company: "VIOLA",
      position: "Chief Technology Officer (CTO)",
      duration: "Aug. 2025 - Present",
      link: " https://www.theviola.co",
      extraLink: "https://www.canva.com/design/DAGyzKSVyxw/x4J1JpmuKmog6DYOFkfmSg/edit",
    },
    {
      company: "Iris AI",
      position: "Software Engineer Intern",
      duration: "Jun. 2025 - Aug. 2025",
      link: "https://apps.apple.com/ng/app/iris-ai-assistant/id6473088049",
    },
    {
      company: "HairDAO",
      position: "Software Engineer Intern",
      duration: "Sep. 2022 - Dec. 2022",
      link: "https://www.hairdao.xyz/",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "As an international student and now become permanent resident at US, I have had the opportunity to collaborate, learn, and live with people from various countries, including South Korea, Brazil, and the United States. This has allowed me to gain a wide range of experiences.",
  items: [
    {
      institution: "University of Southern California",
      degree: "Computer Science and Computer Informatics",
      duration: "Aug. 2022 - Present",
    },
    {
      institution: "Republic of Korea Army",
      degree: "Artillery - Towed Howitzer Gunner",
      duration: "Jun. 2023 - Dec. 2024",
    },
    {
      institution: "Graded - The American School of São Paulo",
      degree: "High School Diploma & IB Diploma",
      duration: "Jan. 2019 - Jun. 2022",
    },
    {
      institution: "MIT BeaverWorks Summer Institute",
      degree: "BWSI Python Core 2021",
      duration: "May. 2021 - Aug. 2022",
    },
    {
      institution: "MIT BeaverWorks Summer Institute",
      degree: "BWSI Version Control: Git & Github 2021",
      duration: "May. 2021 - Aug. 2022",
    },
    {
      institution: "MIT BeaverWorks Summer Institute",
      degree: "BWSI Medlytics 2021",
      duration: "May. 2021 - Aug. 2022",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies",
  skillList: [
    {
      icon: <PiFileCppBold />,
      name: "C++",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiJupyter />,
      name: "Jupyter",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[180px] py-6 px-8 rounded-xl 
                           flex flex-col justify-center items-center lg:items-start gap-2"
                        >
                          <span className="text-accent text-sm">{item.duration}</span>
                          <h3 className="text-lg font-semibold max-w-[180px] text-center lg:text-left">
                            {item.company}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm max-w-[180px]">
                              {item.position}
                            </p>
                          </div>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-400 hover:underline break-all"
                            >
                              {item.link}
                            </a>
                          )}
                          {item.extraLink && (
                            <a
                              href={item.extraLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-400 hover:underline break-all"
                            >
                              {item.extraLink}
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.institution}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.degree}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
