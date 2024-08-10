/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.suitdev.com',
      },
    ],
  },
};

export default nextConfig;
