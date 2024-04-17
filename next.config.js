/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  swcMinify: false,
  trailingSlash: true,
  env: {
    HOST_NAME: 'https://markconfig.github.io',
  },
}

module.exports = nextConfig;
