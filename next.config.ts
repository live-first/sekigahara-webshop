import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://sekigahara-idolwars.net/**'),
      new URL('https://lime-light.tv/**'),
    ],
    unoptimized: true,
  },
  // output: 'export',
  // trailingSlash: true,
}

export default nextConfig
