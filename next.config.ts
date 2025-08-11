import type { NextConfig } from "next";

const repoName = "portfolio";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs/portfolio",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
