import type { NextConfig } from "next";

const repoName = "portfolio";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "docs",
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
