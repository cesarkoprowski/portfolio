import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/portfolio_teste",
  assetPrefix: "/portfolio_teste",
  images: {
    unoptimized: true
  },
};

export default nextConfig;
