# How to update this portfolio

This guide covers everyday changes: text, projects, screenshots, colours, icon, and publishing.

---

## 1. Run it locally first

In the VS Code terminal, from the project folder:

```powershell
npm install        # only needed once, or after package.json changes
npm run dev
```

Open http://localhost:3000. Keep the terminal open while you edit. Changes appear after you save the file and refresh the page.

Stop the server with **Ctrl + C**.

---

## 2. Where things live

| What you want to change | File |
|---|---|
| Name, email, LinkedIn, GitHub, bio, stats, hero headline | `data/portfolio.js` (top of the file) |
| Projects (names, descriptions, highlights, stack, links, screenshots) | `data/portfolio.js` → `PROJECTS` |
| Skills | `data/portfolio.js` → `SKILLS` |
| Work experience, education, certifications | `data/portfolio.js` → `EXPERIENCE`, `EDUCATION`, `CERTIFICATIONS` |
| Hero headline size, colours, fonts, spacing | `app/globals.css` (colours are at the top, in `:root`) |
| Site icon (browser tab) | `app/icon.svg` |
| Resume PDF | `public/assets/Adarsh_Pradhan_Resume.pdf` (keep the same file name) |
| Project screenshots | `public/projects/` (see section 4) |
| Section headings (for example "About me.") | `components/About.jsx`, `components/Projects.jsx` and the other section files |
| Animations | `components/` (for example `Hero.jsx`, `DotField.jsx`, `ParticleField.jsx`) |

You can edit most content without touching any code: change only the text inside the quotes in `data/portfolio.js`.

---

## 3. Editing a project

Open `data/portfolio.js`, find the project in `PROJECTS`, and change its fields:

- `name`, `title`, `tagline`, `year`: what appears on the card.
- `tags`: the technologies shown as chips.
- `problem`, `solution`, `highlights`: the text in the side panel.
- `images`: the screenshot file names (see section 4). The first one is the card cover.
- `liveUrl`: the live link, for example `'https://aizenmap.netlify.app'`. Use `null` if there isn't one.
- `codeUrl`: the GitHub repo link. Use `null` if there isn't one.

Keep the quote marks and commas exactly as they are. A missing comma or quote will stop the site from building.

To add a project, copy one whole block from `{` to `},`, paste it after the last project, and change its values. To remove one, delete its whole block.

---

## 4. Adding screenshots

1. Take a screenshot: press **Win + Shift + S**, select the area, then save it as a PNG.
2. Name it exactly as listed in `public/projects/README.md`, for example `groundwork-1.png`.
3. Copy it into the `public/projects/` folder.

Until the file exists, the site shows a built-in preview instead of a broken image. You don't need to change any code. Use screenshots around 1600 × 1000 pixels (16:10).

---

## 5. Changing colours and the theme

Open `app/globals.css`:

- **Dark mode colours:** the `:root` block at the top, for example `--accent: #c8ff3d;` (the lime colour).
- **Light mode colours:** the `:root[data-theme='light']` block near the bottom.
- **Background glow:** `--glow-a`, `--glow-b`, `--glow-c` in the same places.

Visitors can switch modes with the sun/moon button in the side panel. Their choice is saved in their browser.

---

## 6. Publishing your changes

The site is hosted on GitHub Pages. It updates automatically when you push to GitHub.

1. Save your changes in VS Code.
2. Open **Source Control** (the branch icon, or **Ctrl + Shift + G**).
3. Click **+** beside each changed file, or **+** beside **Changes** to add them all.
4. Type a short message, such as "Update project screenshots", and click **Commit**.
5. Click **Sync Changes**.
6. Go to the repo on GitHub → **Actions** tab. Wait for "Deploy to GitHub Pages" to show a green tick (about 1–3 minutes).
7. Refresh the live site: https://adarsh619.github.io/my-portfolio/

If you ever see a red cross, open the failed run, read the error, and fix the file it mentions. Then commit and sync again.

---

## 7. Before you publish: quick checklist

- [ ] The site runs locally without errors (`npm run dev`).
- [ ] Every project's `images` file exists in `public/projects/`, or you're happy with the preview.
- [ ] Email, LinkedIn and GitHub links are correct in `data/portfolio.js`.
- [ ] The resume PDF is the latest version.
- [ ] Both light and dark modes look right.
- [ ] The site looks good on a phone (narrow the browser window).

---

## 8. Troubleshooting

| Problem | Fix |
|---|---|
| Site won't start locally | Check the terminal for the file name and line number shown in the error. Usually a missing quote or comma in `data/portfolio.js`. |
| Changes don't show on the live site | Check the Actions tab. If the run is red, fix the error. If it's green, press **Ctrl + F5** to refresh without the cache. |
| Browser tab icon hasn't changed | Close and reopen the tab, or clear the cache, because browsers keep old icons. |
| Screenshot doesn't appear | Check the file name matches exactly, including lower-case letters and the `.png` ending. |
| Resume button doesn't work | Check the file is at `public/assets/Adarsh_Pradhan_Resume.pdf`. |
| Want the old design back | In Source Control → **Timeline** or **History**, find the earlier commit, and restore the file. Or tell the assistant what you want back. |

---

## 9. Ideas for later

- A contact form that emails you directly (for example with Formspree).
- A custom domain such as `yourname.dev`, set up in GitHub Pages settings.
- Links to live demos and code for every project.
