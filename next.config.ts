import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,   // ข้าม ESLint error ตอน build
  },
  typescript: {
    ignoreBuildErrors: true,    // ข้าม TS error ตอน build
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
