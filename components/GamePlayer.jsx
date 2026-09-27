"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const src = gameSrc(game);

  useEffect(() => {
    setMissing(findMissingFeatures(game.requires));
  }, [game.requires]);

  // The game page inside the iframe asks to leave when the player picks Quit
  useEffect(() => {
    const onMessage = (event) => {
      if (event.origin !== window.location.origin || event.data?.source !== "kt-game") return;
      if (event.data.type === "quit") router.push("/projects/games");
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [router]);

  const tellGame = (type) =>
    frameRef.current?.contentWindow?.postMessage({ source: "kt-portfolio", type }, window.location.origin);

  // The game listens for keys on its own window, so hand it focus once it loads.
  const focusGame = () => frameRef.current?.contentWindow?.focus();
  // Fullscreen should not pause the game: warn it before focus moves, then hand focus back
  const enterFullscreen = async () => {
    try {
      await stageRef.current?.requestFullscreen?.();
    } finally {
      focusGame();
      tellGame("focus");
    }
  };

  return (
    <section className="flex flex-col justify-center py-8 xl:py-2">
      <div className="container mx-auto">
        <motion.div {...fadeIn} className="flex flex-col xl:flex-row gap-8">
          {/* game */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {/* Sized to fit the window height too, so the page does not scroll on laptops */}
            <div
              ref={stageRef}
              className="w-full mx-auto xl:mx-0 bg-black rounded-xl overflow-hidden shadow-2xl"
              style={{
                aspectRatio: `${game.width} / ${game.height}`,
                maxWidth: `min(${Math.round(game.width * 1.25)}px, calc((100svh - 230px) * ${game.width / game.height}))`,
              }}
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
              <Button onPointerDown={() => tellGame("keep-playing")} onClick={enterFullscreen} className="gap-2">
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
          <aside className="xl:w-[320px] shrink-0 bg-[#232329] rounded-xl p-5 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-[2px] text-white/50">
                {game.gl ? "3D" : "2D"}
              </span>
              <h1 className="text-2xl font-bold text-accent">{game.title}</h1>
              <p className="text-white/80 text-sm leading-relaxed">{game.tagline}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-accent">How To Play:</h2>
              <ul className="flex flex-col">
                {game.controls.map((control) => (
                  <li
                    key={control.action}
                    className="flex justify-between gap-4 border-b border-white/10 py-1 text-sm"
                  >
                    <span className="text-white/80">{control.action}</span>
                    <span className="text-accent font-semibold text-right">{control.key}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex flex-col gap-1 text-xs leading-relaxed text-white/60">
              <li>Press Play to start. Esc or a click outside the game pauses it.</li>
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
