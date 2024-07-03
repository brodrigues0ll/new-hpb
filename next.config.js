/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wallpapers.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
