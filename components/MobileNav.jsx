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
import { isActiveLink, navLinks } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

const MobileNav = ({ activeId }) => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center" aria-label="Open menu">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Radix Dialog requires a title and description for screen readers */}
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <SheetDescription className="sr-only">Links to the sections of this site</SheetDescription>
        {/* logo */}
        <div className="mt-16 mb-20 text-center text-2xl">
          <SheetClose asChild>
            <Link href="/#top">
              <span className="text-4xl font-semibold">
                KT<span className="text-accent">.</span>
              </span>
            </Link>
          </SheetClose>
        </div>
        {/* nav */}
        <nav aria-label="Primary" className="flex flex-col justify-center items-center gap-8">
          {navLinks.map((link) => {
            const active = isActiveLink(pathname, activeId, link);
            return (
              <SheetClose asChild key={link.id}>
                <Link
                  href={link.href}
                  aria-current={active ? (link.id === "games" ? "page" : "location") : undefined}
                  className={cn(
                    "text-xl border-b-2 border-transparent hover:text-accent transition-all",
                    active && "text-accent border-accent"
                  )}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
