import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "portfolio";

const nextConfig: NextConfig = {
  devIndicators: false,
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
