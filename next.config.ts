import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // generates static HTML/CSS/JS in ./out
  trailingSlash: true,    // /about → /about/index.html (Azure friendly)
  images: {
    unoptimized: true,    // required for static export (no Next.js image server)
  },
};

export default nextConfig;
