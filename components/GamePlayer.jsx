"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiMaximize, FiRotateCcw } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { gameSrc } from "@/lib/games";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } },
};

// Returns the WebGL features this browser is missing for the game, if any.
const findMissingFeatures = (required = []) => {
  if (required.length === 0) return [];
  const gl = document.createElement("canvas").getContext("webgl2");
  if (!gl) return ["WebGL 2"];
  const missing = required.filter((extension) => !gl.getExtension(extension));
  gl.getExtension("WEBGL_lose_context")?.loseContext();
  return missing;
};

const GamePlayer = ({ game }) => {
  const frameRef = useRef(null);
  const stageRef = useRef(null);
  const [runId, setRunId] = useState(0); // bumping it remounts the iframe (restart)
  const [missing, setMissing] = useState([]);
  const src = gameSrc(game);

  useEffect(() => {
    setMissing(findMissingFeatures(game.requires));
  }, [game.requires]);

  // The game listens for keys on its own window, so hand it focus once it loads.
  const focusGame = () => frameRef.current?.contentWindow?.focus();
  const enterFullscreen = () => stageRef.current?.requestFullscreen?.();

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div {...fadeIn} className="flex flex-col xl:flex-row gap-8">
          {/* game */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <div
              ref={stageRef}
              className="w-full mx-auto bg-black rounded-xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: `${game.width} / ${game.height}`, maxWidth: Math.round(game.width * 1.25) }}
            >
              {/* Mounted right away so the download runs during the page intro animation */}
              <iframe
                key={runId}
                ref={frameRef}
                src={src}
                title={`${game.title} game`}
                className="block w-full h-full border-0"
                allow="fullscreen; autoplay"
                onLoad={focusGame}
              />
            </div>
            <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3">
              <Button onClick={enterFullscreen} className="gap-2">
                <FiMaximize aria-hidden="true" /> Fullscreen
              </Button>
              <Button variant="outline" onClick={() => setRunId((n) => n + 1)} className="gap-2">
                <FiRotateCcw aria-hidden="true" /> Restart
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href={src} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink aria-hidden="true" /> Open in new tab
                </a>
              </Button>
            </div>
            {missing.length > 0 && (
              <p role="alert" className="text-sm text-accent text-center xl:text-left">
                Your browser is missing {missing.join(", ")}, so this game may not display correctly. Try
                Chrome, Edge, or Safari.
              </p>
            )}
          </div>

          {/* info */}
          <aside className="xl:w-[340px] shrink-0 bg-[#232329] rounded-xl p-6 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-[2px] text-white/50">
                {game.lab}
                {game.gl ? " · 3D / WebGL 2" : " · 2D"}
              </span>
              <h1 className="text-3xl font-bold text-accent">{game.title}</h1>
              <p className="text-white/80">{game.tagline}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-accent">How To Play:</h2>
              <ul className="flex flex-col">
                {game.controls.map((control) => (
                  <li
                    key={control.action}
                    className="flex justify-between gap-4 border-b border-white/10 py-2 text-sm"
                  >
                    <span className="text-white/80">{control.action}</span>
                    <span className="text-accent font-semibold text-right">{control.key}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-white/60">
              <li>Press Play, then click the game once so it receives your keyboard.</li>
              {game.notes?.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            <Link
              href="/projects/games"
              className="mt-auto inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors"
            >
              <FiArrowLeft aria-hidden="true" /> All games
            </Link>
          </aside>
        </motion.div>
      </div>
    </section>
  );
};

export default GamePlayer;
