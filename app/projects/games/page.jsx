import GamesGrid from "@/components/GamesGrid";

export const metadata = {
  title: "Games",
  description:
    "Play KyungTae Kim's C++ / SDL3 games in the browser: Pong, Asteroids, Frogger, Mario, Pac-Man, Zelda, Star Fox, Mario Kart, and Portal, compiled to WebAssembly.",
  alternates: { canonical: "/projects/games" },
};

export default function GamesPage() {
  return <GamesGrid />;
}
