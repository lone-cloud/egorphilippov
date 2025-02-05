/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  compiler: {
    reactRemoveProperties: true,
    removeConsole: true,
    styledComponents: { fileName: false },
  },
};
