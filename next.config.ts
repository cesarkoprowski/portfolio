import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
