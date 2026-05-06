export const categories = [
  {
    slug: "astro",
    name: "Astro",
    description: "Guides zu Astro, Komponenten, Routing und moderner statischer Website-Architektur.",
  },
  {
    slug: "seo",
    name: "SEO",
    description: "Technische und inhaltliche SEO-Grundlagen für bessere Auffindbarkeit.",
  },
  {
    slug: "design-systems",
    name: "Design Systems",
    description: "Design Tokens, Komponentenlogik und skalierbare UI-Systeme.",
  },
  {
    slug: "performance",
    name: "Performance",
    description: "Schnelle Ladezeiten, schlanke Assets und stabile Core-Web-Vitals.",
  },
  {
    slug: "content-strategy",
    name: "Content Strategy",
    description: "Planung, Struktur und Pflege nützlicher Inhalte.",
  },
  {
    slug: "automation",
    name: "Automation",
    description: "Automatisierte Workflows für Content, Publishing und Qualitätssicherung.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
