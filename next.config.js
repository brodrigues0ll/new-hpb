/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cache optimized images for 1 year — gallery photos don't change
    minimumCacheTTL: 31536000,
    // Serve images at these widths (Next.js picks the best fit for each device)
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [256, 384, 512, 640],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
