/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_VERSION: process.env.API_VERSION,
    API_SERVER: process.env.API_SERVER,
  },
};

module.exports = nextConfig;
