import type { NextConfig } from "next";

const repoName = "portfolio";

const nextConfig: NextConfig = {
  devIndicators: false,
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "docs",
};

export default nextConfig;
