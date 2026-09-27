// Browser builds of my C++ / SDL3 games.
// The web build of each game lives in public/games/<slug>/ and is produced by scripts/build-games.sh.
// thumb: 16:9 image under /public (null shows a placeholder).

// Newest (most advanced) first
export const games = [
  {
    slug: "portal",
    lab: "Lab12",
    title: "Portal",
    tagline: "Solve first-person puzzles with the portal gun.",
    width: 1024,
    height: 768,
    gl: true,
    requires: ["WEBGL_clip_cull_distance"],
    thumb: "/assets/games/portal.webp",
    controls: [
      { action: "Move", key: "W A S D" },
      { action: "Look", key: "Mouse" },
      { action: "Jump", key: "Space" },
      { action: "Blue portal", key: "Left Click" },
      { action: "Orange portal", key: "Right Click" },
      { action: "Close portals", key: "R" },
      { action: "Reload level", key: "F5" },
      { action: "Watch a replay", key: "P" },
    ],
    notes: [
      "Click the game to capture the mouse. Esc pauses and releases it.",
      "Works in Chrome, Edge, and Safari. Firefox lacks a WebGL feature this game needs.",
    ],
  },
  {
    slug: "mariokart",
    lab: "Lab08",
    title: "Mario Kart",
    tagline: "Race the enemy kart around a 3D track.",
    width: 1024,
    height: 768,
    gl: true,
    thumb: "/assets/games/mariokart.webp",
    controls: [
      { action: "Accelerate", key: "W" },
      { action: "Turn left", key: "A" },
      { action: "Turn right", key: "D" },
    ],
  },
  {
    slug: "starfox",
    lab: "Lab07",
    title: "Star Fox",
    tagline: "Fly an Arwing through a 3D tunnel and dodge the blocks.",
    width: 1024,
    height: 768,
    gl: true,
    thumb: "/assets/games/starfox.webp",
    controls: [
      { action: "Move", key: "W A S D" },
      { action: "Fire", key: "Space" },
      { action: "Barrel roll (restores shield)", key: "Q" },
    ],
  },
  {
    slug: "zelda",
    lab: "Lab06",
    title: "The Legend of Zelda",
    tagline: "Explore the dungeon and fight soldiers with your sword.",
    width: 512,
    height: 448,
    thumb: "/assets/games/zelda.webp",
    controls: [
      { action: "Move", key: "W A S D" },
      { action: "Sword", key: "Space" },
    ],
  },
  {
    slug: "pacman",
    lab: "Lab05",
    title: "Pac-Man",
    tagline: "Chomp through the maze while ghost AI hunts you down.",
    width: 470,
    height: 520,
    thumb: "/assets/games/pacman.webp",
    controls: [
      { action: "Move up", key: "W" },
      { action: "Move left", key: "A" },
      { action: "Move down", key: "S" },
      { action: "Move right", key: "D" },
    ],
  },
  {
    slug: "mario",
    lab: "Lab04",
    title: "Super Mario Bros.",
    tagline: "Run, jump, and stomp Goombas through World 1-1.",
    width: 600,
    height: 448,
    thumb: "/assets/games/mario.webp",
    controls: [
      { action: "Move left", key: "A" },
      { action: "Move right", key: "D" },
      { action: "Jump", key: "Space" },
    ],
  },
  {
    slug: "frogger",
    lab: "Lab03",
    title: "Frogger",
    tagline: "Hop across traffic and the river to reach the goal.",
    width: 448,
    height: 512,
    thumb: "/assets/games/frogger.webp",
    controls: [
      { action: "Move up", key: "W" },
      { action: "Move left", key: "A" },
      { action: "Move down", key: "S" },
      { action: "Move right", key: "D" },
    ],
  },
  {
    slug: "asteroids",
    lab: "Lab02",
    title: "Asteroids",
    tagline: "Thrust, rotate, and blast the asteroid field.",
    width: 800,
    height: 600,
    thumb: "/assets/games/asteroids.webp",
    controls: [
      { action: "Thrust", key: "W" },
      { action: "Reverse", key: "S" },
      { action: "Rotate", key: "A / D" },
      { action: "Fire", key: "Space" },
    ],
  },
  {
    slug: "pong",
    lab: "Lab01",
    title: "Pong",
    tagline: "Keep the ball in play with a single paddle.",
    width: 800,
    height: 600,
    thumb: "/assets/games/pong.webp",
    controls: [
      { action: "Move left", key: "A" },
      { action: "Move right", key: "D" },
    ],
    notes: ["In the web version a missed ball respawns instead of ending the game."],
  },

];

export const getGame = (slug) => games.find((game) => game.slug === slug);

export const gameSrc = (game) => `/games/${game.slug}/index.html`;
