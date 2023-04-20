/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    // remotePatterns is the config for URLs that the App need for work, this is necessary for the app security
    remotePatterns: [
      {
        hostname: "cloud.modyocdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
