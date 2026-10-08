import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    // /global/ was the test URL for the global site, which now lives at /.
    return [{ source: "/global", destination: "/", permanent: true }];
  },
};

export default nextConfig;
