export const site = {
  name: import.meta.env.PUBLIC_SITE_NAME || "Astro SEO Blog Starter",
  description:
    "Ein schneller Astro Starter für SEO-optimierte Websites mit Blog, Kategorien, RSS, Sitemap, Docker und Coolify-Deployment.",
  url: import.meta.env.PUBLIC_SITE_URL || "https://example.com",
  locale: import.meta.env.PUBLIC_SITE_LOCALE || "de-DE",
  author: import.meta.env.PUBLIC_SITE_AUTHOR || "Editorial Team",
  defaultOgImage: "/og/default-og.svg",
  organization: {
    name: import.meta.env.PUBLIC_SITE_NAME || "Astro SEO Blog Starter",
    logo: "/favicon.svg",
  },
  nav: [
    { label: "Blog", href: "/blog/" },
    { label: "Kategorien", href: "/categories/" },
    { label: "Über", href: "/about/" },
    { label: "Kontakt", href: "/contact/" },
  ],
  footer: [
    { label: "RSS", href: "/rss.xml" },
    { label: "Datenschutz", href: "/privacy/" },
    { label: "Impressum", href: "/imprint/" },
  ],
} as const;
