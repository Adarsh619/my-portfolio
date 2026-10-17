# Adarsh Pradhan R — Portfolio

Personal portfolio built with **Next.js (App Router), React 19, GSAP + ScrollTrigger, Lenis, Motion and React Three Fiber**.
Exported as a static site, so it deploys to **Netlify** or **GitHub Pages** with no server.

## Tech stack

| Layer | Library | Used for |
|---|---|---|
| Framework | Next.js 15, React 19 | Pages, routing, static export |
| Smooth scroll | Lenis (`lenis/react`) | Inertia scrolling, `scrollTo` for the nav |
| Scroll animation | GSAP + ScrollTrigger + `@gsap/react` | Loader, heading reveals, count-up, timeline, scrubbed progress |
| UI motion | Motion (`motion/react`) | Layout-animated nav pill, project and skill transitions, palette, dock, reveals, scroll-velocity marquee |
| 3D | Three.js, React Three Fiber, drei | The 3D orb in the hero (`Float`, `MeshDistortMaterial`) |
| Effects | Canvas (custom) | Particle network background, Magnetic buttons, spotlight cards (React Bits style) |
| Icons | lucide-react | Icons |
| Fonts | Space Grotesk + Inter via `next/font` | Typography |

## Run locally (VS Code)

Requires **Node.js 18.18+** (Node 20 recommended).

```bash
cd my-portfolio-react
npm install
npm run dev          # http://localhost:3000
```

To check the production build: `npm run build` (writes `out/`), then `npm start` (serves on port 3000).

## Edit your content

| What | Where |
|---|---|
| Name, bio, projects, skills, experience, education, certifications, links | `data/portfolio.js` |
| Colours, fonts, spacing | `app/globals.css` (`:root`) |
| Resume | Replace `public/assets/Adarsh_Pradhan_Resume.pdf` (keep the name) |
| Photo | Add `public/assets/photo.jpg`, then swap the `.photo` block in `components/Hero.jsx` for `<img src="/assets/photo.jpg" />` (set `object-fit: cover`, `border-radius: 50%`) |
| 3D orb | `components/HeroOrb.jsx` |

Shortcut on the site: **Ctrl/⌘ + K** opens quick find.

## Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio v2: Next.js + React + GSAP + Lenis + Motion + R3F"
git branch -M main
git remote add origin https://github.com/Adarsh619/my-portfolio.git
git push -u origin main
```

Create an empty repository named `my-portfolio` on GitHub first (no README, .gitignore or licence).

## Deploy later

**GitHub Pages (automatic):** the workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`. Turn it on once under **Settings → Pages → Source: GitHub Actions**. The site will be at `https://adarsh619.github.io/my-portfolio/`.
If you name the repo `adarsh619.github.io`, delete the `NEXT_PUBLIC_BASE_PATH` line in the workflow, because that site lives at the root.

**Netlify:** `netlify.toml` is already set (build `npm run build`, publish `out`). Import the GitHub repo on netlify.com and deploy. No base path is needed.

## Licence

Content © Adarsh Pradhan R. All rights reserved.
