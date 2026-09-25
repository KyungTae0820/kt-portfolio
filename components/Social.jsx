import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const socials = [
  { icon: <FaGithub />, name: "Github", path: "https://github.com/KyungTae0820" },
  { icon: <FaLinkedinIn />, name: "LinkedIn", path: "https://www.linkedin.com/in/kktkim" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <div className={containerStyles}>
        {socials.map((item) => (
          <Tooltip key={item.name}>
            <TooltipTrigger asChild>
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className={iconStyles}
              >
                {item.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{item.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default Social;
