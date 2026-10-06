// The header is a fixed 72px tall. Sections jump to just under the top (scroll-mt-4) and their own top
// padding keeps the heading clear of the header. A section counts as current once its top is within
// this many pixels of the viewport top.
export const HEADER_OFFSET = 96;

// Sections the scroll-spy watches on the home page (keep as a module constant: stable hook dependency)
export const SECTION_IDS = ["about", "experience", "projects", "contact"];

export const navLinks = [
  { id: "about", name: "About", href: "/#about" },
  { id: "experience", name: "Experience", href: "/#experience" },
  { id: "projects", name: "Projects", href: "/#projects" },
  { id: "games", name: "Games", href: "/projects/games" },
  { id: "contact", name: "Contact", href: "/#contact" },
];

// "Games" is a separate page; the other links are sections of the home page.
export const isActiveLink = (pathname, activeId, link) =>
  link.id === "games" ? pathname.startsWith("/projects/games") : pathname === "/" && activeId === link.id;
