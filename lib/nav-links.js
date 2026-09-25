export const navLinks = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

// "/projects" stays highlighted on nested routes such as "/projects/games/pong".
export const isActivePath = (pathname, path) =>
  path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);
