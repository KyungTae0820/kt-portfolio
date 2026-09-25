# KyungTae Kim Portfolio

This is my personal website showcasing my experiences, projects, and skills as a **Computer Science and Computer Informatics student at the University of Southern California (USC).**

- Spearheaded responsive web application with dynamic rendering, routing, and SSR, optimizing meta tags and structured data to boost SEO performance, load speed, and crawlability, reducing LCP by **52% (<2.5s, Google Search Console)**.  
- Utilized **Tailwind CSS** for custom styling and **Node.js** for backend API integration, and deployed the application using **Vercel** for seamless CI/CD.  


---

## 📌 Sections

1. **About Me** — Education background and technical skills  
2. **Resume** — Professional experience, leadership, and internships  
3. **Projects** — Technical projects with GitHub links and demos, plus C++ games playable in the browser (`/projects/games`)  
4. **Contact** — Social media and contact information
   
---

## 🛠️ Technologies Used

- React  
- Next.js  
- JavaScript  
- Node.js  
- Tailwind CSS  
- Framer Motion  
- Vercel  

---

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
2. **Start the development server**
   ```bash
   npm run dev
3. **Open http://localhost:3000 in your browser.**
   
---

## 🎮 Browser Games

The games under `/projects/games` are my TAC 380 (USC Video Game Programming) labs, written in C++ with SDL3 and OpenGL and compiled to WebAssembly with [Emscripten](https://emscripten.org). Only the compiled builds live in this repo (`public/games/<slug>/`); the C++ source stays in the course repository.

To rebuild them:

1. **Install Emscripten** (one time)
   ```bash
   git clone https://github.com/emscripten-core/emsdk.git ~/emsdk
   cd ~/emsdk && ./emsdk install latest && ./emsdk activate latest
   ```
2. **Build** all games, or only the ones you name
   ```bash
   scripts/build-games.sh              # all
   scripts/build-games.sh pong portal  # some
   ```
   Set `LABS_DIR` if the labs repo is not at `~/Documents/TAC380/labs-KyungTae0820`.

The page that hosts each game comes from `scripts/game-shell.template.html`. Game titles, controls, and thumbnails for the cards are in `lib/games.js`; to add a thumbnail, put an image in `public/assets/games/` and set that game's `thumb` field.

---

## 📫 Contact

- Email: kimkyungtae12386@gmail.com
- LinkedIn: [KyungTae Kim](https://www.linkedin.com/in/kktkim)
- GitHub: [KyungTae0820](https://github.com/KyungTae0820)
- Website: [KT Portfolio](https://kt-portfolio-nu.vercel.app/)

