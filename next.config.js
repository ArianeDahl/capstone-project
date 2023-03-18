/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { scrollRestoration: true },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "edamam.com",
      },
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com'
      // },
    ],
  },
};

module.exports = nextConfig;
