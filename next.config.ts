import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/bothscape", destination: "/mission", permanent: false },
      { source: "/budget-timeline", destination: "/mission", permanent: false },
    ];
  },
};

export default nextConfig;
