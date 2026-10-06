"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isActiveLink, navLinks } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

const Nav = ({ activeId }) => {
  const pathname = usePathname();
  return (
    <nav aria-label="Primary" className="flex gap-8">
      {navLinks.map((link) => {
        const active = isActiveLink(pathname, activeId, link);
        return (
          <Link
            key={link.id}
            href={link.href}
            aria-current={active ? (link.id === "games" ? "page" : "location") : undefined}
            className={cn(
              "border-b-2 border-transparent font-medium transition-all hover:text-accent",
              active && "border-accent text-accent"
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
