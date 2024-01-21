/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_VERSION: process.env.API_VERSION,
    API_SERVER: process.env.API_SERVER,
  },
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com'
      }
    ]
  }
};

module.exports = nextConfig;
