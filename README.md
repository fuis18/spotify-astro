# spotify-astro

```sh
bunx create astro@latest
bunx astro add tailwind
bunx astro add react
bunx astro add svelte
bunx astro add @astrojs/vercel
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├───assets
│   │       astro.svg
│   │       background.svg
│   │
│   ├───components
│   │       AsideMenu.astro
│   │       Greeting.svelte
│   │       Player.jsx
│   │       PlayerControlButtonBar.jsx
│   │       PlayerCurrentSong.jsx
│   │       PlayerSoundControl.jsx
│   │       PlayerVolumeControl.jsx
│   │       PlayerVolumeIconComponent.tsx
│   │       PlayListItemCard.astro
│   │       SideMenuCard.astro
│   │       SideMenuItem.astro
│   │
│   ├───icons
│   │       Home.astro
│   │       Library.astro
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
│   │
│   └───styles
│           global.css
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

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

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
