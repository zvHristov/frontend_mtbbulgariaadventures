import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async rewrites() {
    return [
      {
        source: '/rss.xml',
        destination: '/api/rss',
      },
    ];
  },
};

export default nextConfig;
