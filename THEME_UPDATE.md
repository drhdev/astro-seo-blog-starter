# Theme update

This update adds a lightweight shadcn-inspired black/white theme system to the Astro SEO Blog Starter.

## New files

- `src/components/theme/ThemeScript.astro`
- `src/components/theme/ThemeToggle.astro`
- `prompts/theme-system.md`
- `THEME_UPDATE.md`

## Updated files

- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `src/layouts/BlogPostLayout.astro`
- `src/components/site/SiteHeader.astro`
- `src/components/site/SiteFooter.astro`
- `src/components/ui/ButtonLink.astro`
- `src/components/ui/SectionHeader.astro`
- `src/components/blog/Breadcrumbs.astro`
- `src/components/blog/CategoryBadge.astro`
- `src/components/blog/FeaturedImage.astro`
- `src/components/blog/PostCard.astro`
- `src/components/sections/HeroSection.astro`
- `src/components/sections/FeatureGrid.astro`
- `src/components/sections/CTASection.astro`
- several page files using old hard-coded slate/sky colors
- `AGENTS.md`
- `DESIGN.md`
- `README.md`
- `PRODUCTION.md`

## Behavior

- System is the default theme.
- Light and dark can be forced from the UI.
- Forced choice is stored in `localStorage.theme`.
- System mode removes the stored preference.
- No React, shadcn/ui, Radix or framework JavaScript is used.

## After applying

Run:

```bash
npm install
npm run build
npm run guard:no-react
```

Then manually verify light, dark and system modes.
