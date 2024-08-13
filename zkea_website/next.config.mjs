/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.exaustia.com",
        port: "",
        pathname: "/soz/**",
      },
    ],
  },
};

export default nextConfig;
