import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
};

export default nextConfig;
