import fs from "node:fs";

const forbidden = [
  "react",
  "react-dom",
  "@astrojs/react",
  "vue",
  "@astrojs/vue",
  "svelte",
  "@astrojs/svelte",
  "solid-js",
  "@astrojs/solid-js",
  "preact",
  "@astrojs/preact",
  "@astrojs/tailwind",
  "next",
  "framer-motion",
  "@react-three/fiber",
  "shadcn-ui",
];

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
const found = forbidden.filter((name) => Object.hasOwn(deps, name));

if (found.length > 0) {
  console.error(`Forbidden dependencies found: ${found.join(", ")}`);
  process.exit(1);
}

const filesToScan = ["astro.config.mjs"];
for (const file of filesToScan) {
  if (!fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  if (text.includes("@astrojs/tailwind")) {
    console.error("Forbidden @astrojs/tailwind usage found.");
    process.exit(1);
  }
}

console.log("No forbidden framework dependencies found.");
