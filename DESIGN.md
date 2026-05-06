# DESIGN.md

## Visual direction

Modern, calm, premium, technical and trustworthy.

Prefer:

- strong typography
- generous whitespace
- clear content hierarchy
- simple cards
- clean navigation
- static-first UI
- subtle hover states
- accessible contrast

Avoid:

- clutter
- heavy shadows
- excessive gradients
- excessive animations
- generic SaaS template noise
- React-style component complexity

## Layout system

Use a mobile-first layout.

Recommended container:

- max width: 1120px to 1280px
- horizontal padding: 24px mobile, 32px tablet, 48px desktop
- section padding: 64px mobile, 88px tablet, 112px desktop

Use Tailwind defaults and readable utility classes.

## Blog design

The blog should feel like a modern Astro content site, not a heavy CMS theme.

Required blog UI:

- blog index with post cards
- paginated archives
- category overview page
- category archive pages
- post detail layout
- featured image at the top of every post
- category badge on post cards
- date and reading metadata where useful
- visible breadcrumbs
- clear prose layout
- good mobile reading experience

## Post cards

Post cards should include:

- featured image
- category badge
- title
- description
- publish date
- link to the post

Card layout:

- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop if space allows

## Category pages

The categories overview should show all 6 categories.

Each category card should include:

- category name
- description
- number of posts
- link to category archive

## Motion

Use minimal CSS-only motion:

- `transition`
- `hover:`
- `focus-visible:`
- subtle transform if useful

Respect reduced motion.

## Implementation priority

1. Correct Astro-only architecture
2. Accessibility
3. Performance
4. Content clarity
5. Visual polish
6. Animation
