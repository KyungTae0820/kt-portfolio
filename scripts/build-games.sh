#!/usr/bin/env bash
# Build the TAC 380 labs with Emscripten and copy the web build into public/games/<slug>/.
#
# Usage:  scripts/build-games.sh [slug ...]     (no arguments = all games)
# Env:    LABS_DIR, EMSDK_DIR, CPM_SOURCE_CACHE, JOBS, EXTRA_LINK_FLAGS
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LABS_DIR="${LABS_DIR:-$HOME/Documents/TAC380/labs-KyungTae0820}"
EMSDK_DIR="${EMSDK_DIR:-$HOME/emsdk}"
export CPM_SOURCE_CACHE="${CPM_SOURCE_CACHE:-$HOME/TAC_cache}"   # reuse SDL source downloads across labs
OUT_ROOT="$ROOT/public/games"
TEMPLATE="$ROOT/scripts/game-shell.template.html"
BUILD_ID="$(date -u +%Y%m%d%H%M)"                                # cache-buster baked into index.html
JOBS="${JOBS:-8}"
# Appended after the course link flags, so these win:
#   -O2                      optimize the link (the Emscripten toolchain adds no -O at link time)
#   INITIAL/MAXIMUM_MEMORY   start at 128 MB and grow, instead of reserving a fixed 1 GB
#   callMain                 lets the page start the game on the first click
EXTRA_LINK_FLAGS="${EXTRA_LINK_FLAGS:--O2 -sINITIAL_MEMORY=128MB -sALLOW_MEMORY_GROWTH=1 -sMAXIMUM_MEMORY=1GB -sEXPORTED_RUNTIME_METHODS=callMain}"

# slug | lab | title | width | height | image-rendering
GAMES=(
  "pong|Lab01|Pong|800|600|pixelated"
  "asteroids|Lab02|Asteroids|800|600|pixelated"
  "frogger|Lab03|Frogger|448|512|pixelated"
  "mario|Lab04|Super Mario Bros.|600|448|pixelated"
  "pacman|Lab05|Pac-Man|470|520|pixelated"
  "zelda|Lab06|The Legend of Zelda|512|448|pixelated"
  "starfox|Lab07|Star Fox|1024|768|auto"
  "mariokart|Lab08|Mario Kart|1024|768|auto"
  "portal|Lab12|Portal|1024|768|auto"
)

if [[ ! -f "$EMSDK_DIR/emsdk_env.sh" ]]; then
  echo "emsdk not found at $EMSDK_DIR. Install it with:" >&2
  echo "  git clone https://github.com/emscripten-core/emsdk.git ~/emsdk && cd ~/emsdk && ./emsdk install latest && ./emsdk activate latest" >&2
  exit 1
fi
# shellcheck disable=SC1091
source "$EMSDK_DIR/emsdk_env.sh" >/dev/null 2>&1
[[ -f "$TEMPLATE" ]] || { echo "missing $TEMPLATE" >&2; exit 1; }
echo "Using $(emcc --version | head -1)"

selected=("$@")
built=0
for entry in "${GAMES[@]}"; do
  IFS='|' read -r slug lab title width height rendering <<<"$entry"
  if ((${#selected[@]})) && [[ " ${selected[*]} " != *" $slug "* ]]; then continue; fi
  src="$LABS_DIR/$lab"
  out="$OUT_ROOT/$slug"
  [[ -d "$src" ]] || { echo "missing $src" >&2; exit 1; }
  echo "==> $lab -> $slug"

  # The course CMake checks for Assets/ relative to the current directory,
  # so configure from inside the lab folder or the assets are silently left out.
  (
    cd "$src"
    emcmake cmake -S . -B embuild -G Ninja \
      -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_POLICY_VERSION_MINIMUM=3.5 \
      -DCMAKE_EXE_LINKER_FLAGS_RELEASE="$EXTRA_LINK_FLAGS"
    cmake --build embuild -j"$JOBS"
  )

  mkdir -p "$out"
  cp "$src/embuild/$lab.js" "$src/embuild/$lab.wasm" "$out/"
  if [[ -f "$src/embuild/$lab.data" ]]; then cp "$src/embuild/$lab.data" "$out/"; else rm -f "$out/$lab.data"; fi
  # Our own page replaces the course-generated LabXX.html.
  sed -e "s|__NAME__|$lab|g" -e "s|__TITLE__|$title|g" -e "s|__WIDTH__|$width|g" \
      -e "s|__HEIGHT__|$height|g" -e "s|__RENDERING__|$rendering|g" -e "s|__BUILD__|$BUILD_ID|g" \
      "$TEMPLATE" > "$out/index.html"
  du -h "$out"/* | sed 's/^/    /'
  built=$((built + 1))
done

((built)) || { echo "No game matched: $*" >&2; exit 1; }
echo "Built $built game(s) into $OUT_ROOT"
