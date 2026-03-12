/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 允许外部图片
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
