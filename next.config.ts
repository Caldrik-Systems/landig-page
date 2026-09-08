import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.caldrik.co" }],
        destination: "https://caldrik.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
