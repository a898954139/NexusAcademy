# Repository Guidelines

## Project Structure & Module Organization

Nexus Academy is a Vite + React site. Entry points live in `src/main.jsx` and `src/App.jsx`. Reusable layout components are in `src/components/` (`Header.jsx`, `Footer.jsx`) with colocated CSS files. Route-level pages live in `src/pages/`, shared global styling is in `src/styles/global.css`, and static assets are split between `src/assets/` for imported assets and `public/` for files served as-is. Reference material lives in `docs/` and the dated Markdown files at the repository root.

## Build, Test, and Development Commands

- `npm install` installs dependencies from `package-lock.json`.
- `npm run dev` starts the local Vite development server with hot reload.
- `npm run build` creates the production bundle in `dist/`.
- `npm run preview` serves the built bundle for local production checks.
- `npm run lint` runs ESLint across JavaScript and JSX files.

Run commands from the repository root.

## Coding Style & Naming Conventions

Use modern ES modules and React function components. Keep component and page filenames in PascalCase, for example `CoursesPage.jsx` or `Header.jsx`; keep CSS filenames matched to their component or page when styles are specific. Use camelCase for local variables and functions. Follow the existing style: two-space indentation, single quotes, no semicolons, and concise JSX. Prefer existing shared page styles before adding CSS patterns.

## Testing Guidelines

No automated test framework is currently configured. Before opening a pull request, run `npm run lint` and `npm run build`. For UI changes, also run `npm run dev` or `npm run preview` and manually verify the affected pages, responsive layouts, navigation, and language-specific content. If tests are added later, colocate them near the code they cover or under a clearly named `tests/` directory, and document the new command here.

## Commit & Pull Request Guidelines

Recent history uses short imperative commit subjects, sometimes with Conventional Commit prefixes such as `feat(ui): ...` and `fix(ui): ...`. Keep subjects concise and outcome-focused, for example `fix(ui): localize homepage links`.

Pull requests should include a brief summary, screenshots or screen recordings for visible UI changes, the commands run for verification, and any deployment notes such as GitHub Pages or custom-domain impact. Link related issues when available and call out known gaps explicitly.

## Security & Configuration Tips

Do not commit secrets, API keys, local `.env` files, or generated `dist/` output. Keep deployment configuration and base-path changes small and verify them with a production build before merging.
