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

## Theme and visual system

The site uses a minimal black/white theme inspired by shadcn/ui, but implemented natively with Astro and Tailwind.

Do not install shadcn/ui.
Do not install React.
Do not install Radix UI.

The visual system is based on semantic CSS variables:

- background
- foreground
- card
- card-foreground
- popover
- popover-foreground
- primary
- primary-foreground
- secondary
- secondary-foreground
- muted
- muted-foreground
- accent
- accent-foreground
- border
- input
- ring
- radius

The default mode is system preference.

The user may force light or dark mode.

System mode means no explicit `data-theme` attribute is set on `<html>`.

Forced light uses:

```html
<html data-theme="light">
```

Forced dark uses:

```html
<html data-theme="dark">
```

The design must remain almost monochrome:

- white / black
- black / white
- neutral gray scale
- no colorful gradients
- no colorful accent palette
- no heavy shadows
- no glassmorphism

Use contrast, spacing, typography, border, radius and hierarchy instead of color decoration.

The desired look is:

- minimal
- editorial
- technical
- calm
- premium
- fast
- accessible
- shadcn-inspired
- not JavaScript-heavy

## Component style after theme update

Buttons should use semantic variants:

- primary: `bg-primary text-primary-foreground`
- secondary: `bg-secondary text-secondary-foreground`
- outline: `border border-border bg-background text-foreground`
- ghost: minimal hover background

Cards should use:

- `bg-card`
- `text-card-foreground`
- `border-border`
- rounded token-based radius
- subtle hover border changes only

Muted text should use `text-muted-foreground`.

Do not use blue, sky or other colorful utility classes for core UI. Category badges, CTAs and links must remain monochrome unless a future project explicitly changes the brand palette.
