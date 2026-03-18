/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/openclaw-learning',
  assetPrefix: '/openclaw-learning',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
