import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "https://ccssnavigator.com/",
        has: [{ type: "host", value: "www.ccssnavigator.com" }],
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "https://ccssnavigator.com/:path*",
        has: [{ type: "host", value: "www.ccssnavigator.com" }],
        permanent: true,
      },
      { source: "/dashboard", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
