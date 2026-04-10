import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  turbopack: {
    root: "./",
  },
};

export default nextConfig;
