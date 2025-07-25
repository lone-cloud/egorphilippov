const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    esmExternals: true,
  },
  compiler: {
    reactRemoveProperties: true,
    removeConsole: true,
  },
  images: { unoptimized: true },
};

module.exports = withBundleAnalyzer(nextConfig);
