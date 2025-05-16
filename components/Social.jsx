import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const socials = [
  { icon: <FaGithub />, name: "Github", path: "https://github.com/KyungTae0820" },
  { icon: <SiLeetcode />, name: "Leetcode", path: "https://leetcode.com/u/kt__0820/" },
  { icon: <FaLinkedinIn />, name: "LinkedIn", path: "https://www.linkedin.com/in/kt-kim-42b96631a/" },
  { icon: <FaInstagram />, name: "Instagram", path: "https://www.instagram.com/we._.tech/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <TooltipProvider delayDuration={100} key={index}>
          <Tooltip>
            <TooltipTrigger className="w-[50px] h-[50px] flex justify-center items-center group">
              <Link href={item.path} className={iconStyles}>
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{item.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default Social;
