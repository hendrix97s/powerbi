/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://teams.powerbi.com https://app.powerbi.com http://localhost:3000",
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
