# Theme system prompt

Restyle this Astro starter into a minimal shadcn-inspired black/white design system.

Requirements:

- Astro only
- Tailwind v4/latest
- no React
- no shadcn package
- no Radix
- no client islands
- light/dark/system theme support
- system is default
- use semantic CSS variables
- use `data-theme` on `<html>` only for explicit light/dark
- no colorful palette
- no heavy shadows
- no JS except a tiny inline theme script and optional accessible ThemeToggle
- preserve SEO, RSS, sitemap, blog, categories, Featured Images and Docker/Coolify setup
- run `npm run build` and fix errors

Implementation files:

- `src/styles/global.css`
- `src/components/theme/ThemeScript.astro`
- `src/components/theme/ThemeToggle.astro`
- `src/layouts/BaseLayout.astro`
- `src/components/site/SiteHeader.astro`
- all major UI, blog and section components using old hard-coded colors

Validation:

- Light mode works.
- Dark mode works.
- System mode works.
- Forced modes override system preference.
- No React dependency exists.
- No hydration directive exists.
