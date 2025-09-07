import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.classbon.com",
      },
      {
        protocol: "https",
        hostname: "classbon-blog.s3.ir-thr-at1.arvanstorage.ir",
      },
      {
        protocol: "https",
        hostname: "classbon-blog.s3.ir-thr-at1.arvanstorage.com",
      },
      {
        protocol: "https",
        hostname: "minio-classbon.darkube.app",
        pathname: "/courses-images/**",
      },
    ],
  },
};

export default nextConfig;
