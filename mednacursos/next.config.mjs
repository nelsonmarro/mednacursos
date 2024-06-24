/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.avatarsinpixels.com",
      },
    ],
  },
  env: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_AUTH0_ID: process.env.AUTH_AUTH0_ID,
    AUTH_AUTH0_SECRET: process.env.AUTH_AUTH0_SECRET,
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
  },
};

export default nextConfig;
