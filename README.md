# spotify-astro

```sh
bunx create astro@latest
bunx astro add tailwind
bunx astro add react
bunx astro add svelte
bun install zustand 
bun add radix-ui
bun add clsx tailwind-merge
bunx astro add @astrojs/vercel
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── music
│   └── fonts
├── src
│   ├───api
│   │       get-info-playlist.json.js
│   ├───assets
│   │       astro.svg
│   │       background.svg
│   │
│   ├───components
│   │       AsideMenu.astro
│   │       CardPlayButton.jsx
│   │       Greeting.svelte
│   │       MusicsTablePlay.tsx
│   │       MusicTable.tsx
│   │       Player.jsx
│   │       PlayerControlButtonBar.jsx
│   │       PlayerCurrentSong.jsx
│   │       PlayerSoundControl.jsx
│   │       PlayerVolumeControl.jsx
│   │       PlayerVolumeIconComponent.tsx
│   │       PlayListItemCard.astro
│   │       SideMenuCard.astro
│   │       SideMenuItem.astro
│   │       Slider.tsx
│   │
│   ├───icons
│   │       Home.astro
│   │       Library.astro
│   │       MusicsTableIcons.tsx
│   │       Play.astro
│   │       PlayerIcons.tsx
│   │       Search.astro
│   │       VolumeIcons.tsx
│   │
│   ├───layouts
│   │       Layout.astro
│   │
│   ├───lib
│   │       colors.ts
│   │       data.ts
│   │
│   ├───pages
│   │   │   index.astro
│   │   │
│   │   └───playlist
│   │           [id].astro
│   ├───service
│   │       ApiService.ts
│   │
│   ├───store
│   │       playerStore.ts
│   │
│   └───styles
│           global.css
├── bun.lock
├── astro.config.mjs
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |
