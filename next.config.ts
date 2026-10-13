import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static build for GitHub Pages (lehesepp.ee, served from the domain root).
  output: "export",
  // Folder URLs (/privaatsus/index.html) so GitHub Pages serves them without the .html suffix.
  trailingSlash: true,
  // GitHub Pages has no image optimizer; images are served as-is.
  images: { unoptimized: true },
  // Response headers are not available on GitHub Pages. Prospect previews stay out of
  // search through the robots meta tag set in their generateMetadata.
  // cacheComponents / partialPrefetching are server features and are off for the static export.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
