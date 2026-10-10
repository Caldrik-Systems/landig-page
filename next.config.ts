import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async headers() {
    // "/" and "/insights/" differ by the visitor's country (see middleware.ts),
    // so no shared cache may keep one visitor's version for another.
    return ["/", "/insights/"].map((source) => ({
      source,
      headers: [{ key: "Cache-Control", value: "private, no-cache" }],
    }));
  },
};

export default nextConfig;
