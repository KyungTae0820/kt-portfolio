"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Returns the id of the section currently under the sticky header on "/", otherwise null.
export function useActiveSection(ids, offset) {
  const pathname = usePathname();
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActive(null);
      return undefined;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      // Look the sections up every time: they mount after this effect when arriving from another page
      const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
      if (sections.length === 0) return;
      // A short last section never reaches the header line, so treat the page bottom as "last section"
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = null;
      for (const el of sections) {
        if (el.getBoundingClientRect().top - offset <= 1) current = el.id;
      }
      setActive(atBottom ? sections[sections.length - 1].id : current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    // Re-measure when the page height changes (sections mounting, images and fonts loading)
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(document.body);
    schedule();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname, ids, offset]);

  return active;
}
