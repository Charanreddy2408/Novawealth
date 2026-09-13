import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com", // LinkedIn OpenGraph images
      },
      {
        protocol: "https",
        hostname: "static.licdn.com", // LinkedIn static images
      },
      {
        protocol: "https",
        hostname: "dms.licdn.com", // LinkedIn media delivery
      },
      {
        protocol: "https",
        hostname: "*.tiktokcdn.com",
      },
      {
        protocol: "https",
        hostname: "*.tiktokcdn-us.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com", // YouTube thumbnails
      },
    ],
  },
};

export default nextConfig;
