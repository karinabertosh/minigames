# MiniGames

Single Page Application for a catalog of browser mini-games, leaderboards, and player accounts. The project is built for Rolling Scopes School Qualifying Stage.

## Tech stack

- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/)

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check the project and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the codebase |
| `npm run deploy` | Build the app and publish `dist/` to the `gh-pages` branch |

## Getting started

```bash
npm install
npm run dev
```

## Git hooks

- `commit-msg` rejects commit messages that do not follow the [RS School Git convention](https://rs.school/docs/git-convention)

## Deploy to GitHub Pages

Production URL: https://karinabertosh.github.io/minigames/

The Vite `base` path is `/minigames/` to match this repository name.

### Manual deploy

```bash
npm run deploy
```

### Automatic deploy

Pushing to `story-1` runs `.github/workflows/deploy.yml` and publishes the `dist/` folder to the `gh-pages` branch. The workflow can also be started manually from the Actions tab.

After the first successful deploy, enable GitHub Pages:

1. Open **Settings → Pages**
2. Set **Source** to **Deploy from a branch**
3. Choose `gh-pages` and `/ (root)`
4. Save

## Project structure

```text
src/
  app/           # SPA bootstrap and router
  pages/         # page-level views
  components/    # shared UI
  features/      # feature modules
  services/      # API and storage adapters
  state/         # application state
  styles/        # tokens, mixins, global styles
  utils/         # shared helpers
  assets/        # icons and images
```
