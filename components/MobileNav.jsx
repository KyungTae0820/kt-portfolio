"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, isActivePath } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center" aria-label="Open menu">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Radix Dialog requires a title and description for screen readers */}
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <SheetDescription className="sr-only">Links to the pages of this site</SheetDescription>
        {/* logo */}
        <div className="mt-16 mb-20 text-center text-2xl">
          <SheetClose asChild>
            <Link href="/">
              <span className="text-4xl font-semibold">
                KT<span className="text-accent">.</span>
              </span>
            </Link>
          </SheetClose>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.path}>
              <Link
                href={link.path}
                className={cn(
                  "text-xl capitalize hover:text-accent transition-all",
                  isActivePath(pathname, link.path) && "text-accent border-b-2 border-accent"
                )}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
