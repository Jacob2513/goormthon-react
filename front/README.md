# Front (Vite + React + TypeScript + TanStack Query)

## Scripts

- `npm run dev`: development server
- `npm run build`: production build (`dist`)
- `npm run preview`: preview built app
- `npm run typecheck`: TypeScript type check

## Vapor UI

- `@vapor-ui/core`, `@vapor-ui/icons` installed
- `src/main.tsx`:
  - `import "@vapor-ui/core/styles.css"`
  - `ThemeProvider` applied at app root
- `index.html` + `src/index.css`:
  - `.root { isolation: isolate; }` for portal layering
