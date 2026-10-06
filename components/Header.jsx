"use client";

import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useActiveSection } from "./useActiveSection";
import { HEADER_OFFSET, SECTION_IDS } from "@/lib/nav-links";

const Header = () => {
  // One scroll-spy feeds both the desktop and mobile menus
  const activeId = useActiveSection(SECTION_IDS, HEADER_OFFSET);
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-primary/95 text-white backdrop-blur">
      <div className="container mx-auto flex h-[72px] items-center justify-between">
        <Link href="/#top" aria-label="KT Portfolio home" className="text-4xl font-semibold leading-none">
          KT<span className="text-accent">.</span>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav activeId={activeId} />
        </div>
        <div className="xl:hidden">
          <MobileNav activeId={activeId} />
        </div>
      </div>
    </header>
  );
};

export default Header;
