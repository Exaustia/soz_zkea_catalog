/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
