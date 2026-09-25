import { games } from "@/lib/games";

const SITE_URL = "https://kt-portfolio-nu.vercel.app";

export default function sitemap() {
  const pages = ["", "/resume", "/projects", "/projects/games", "/contact"];
  const gamePages = games.map((game) => `/projects/games/${game.slug}`);
  return [...pages, ...gamePages].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/projects/games/") ? 0.5 : 0.8,
  }));
}
