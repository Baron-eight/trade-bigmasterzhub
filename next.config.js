/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@deriv/core'],
  experimental: {
    webpackBuildWorker: false,
    cpus: 1,
  },
}

module.exports = nextConfig