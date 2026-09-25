import { notFound } from "next/navigation";

import GamePlayer from "@/components/GamePlayer";
import { games, getGame } from "@/lib/games";

// Only the games listed in lib/games.js exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return games.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const game = getGame(params.slug);
  if (!game) return {};
  return {
    title: `${game.title} (Play in Browser)`,
    description: `${game.tagline} Play ${game.title}, a C++ game by KyungTae Kim compiled to WebAssembly.`,
    alternates: { canonical: `/projects/games/${game.slug}` },
  };
}

export default function GamePage({ params }) {
  const game = getGame(params.slug);
  if (!game) notFound();
  return <GamePlayer game={game} />;
}
