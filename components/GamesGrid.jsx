"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGamepad } from "react-icons/fa";

import { games } from "@/lib/games";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } },
};

const GameThumb = ({ game }) =>
  game.thumb ? (
    <Image
      src={game.thumb}
      alt={`${game.title} gameplay`}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  ) : (
    // Placeholder until a screenshot is added in lib/games.js
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#2d2d34] to-[#1b1b20] text-white/30 transition-colors duration-500 group-hover:text-accent/70">
      <FaGamepad className="text-6xl" aria-hidden="true" />
      <span className="text-sm tracking-[2px] uppercase">{game.title}</span>
    </div>
  );

const GamesGrid = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div {...fadeIn} className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white">Game Developments</h1>
          <p className="text-white/80 max-w-[760px] mx-auto">
            C++ games I built with SDL3 and OpenGL in USC&apos;s TAC 380, compiled to WebAssembly with
            Emscripten. Pick one to play it right here. A desktop browser and keyboard work best.
          </p>
        </motion.div>

        <motion.ul {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {games.map((game) => (
            <li key={game.slug}>
              <Link
                href={`/projects/games/${game.slug}`}
                className="group h-full flex flex-col bg-[#232329] rounded-xl overflow-hidden border-l-4 border-accent/70 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
                  <GameThumb game={game} />
                </div>
                <div className="flex flex-col items-center text-center gap-3 p-6 flex-1">
                  <h2 className="text-2xl font-bold text-accent">{game.title}</h2>
                  <p className="text-white/80 text-sm">{game.tagline}</p>
                  <h3 className="text-accent text-sm mt-2">How To Play:</h3>
                  <ul className="text-xs text-white/90 leading-relaxed">
                    {game.controls.map((control) => (
                      <li key={control.action}>
                        {control.action}: <span className="text-accent">{control.key}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-2 text-[11px] uppercase tracking-[2px] text-white/40">
                    {game.lab}
                    {game.gl ? " · 3D / WebGL 2" : " · 2D"}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default GamesGrid;
