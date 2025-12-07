/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/foodem-landing-page',
  assetPrefix: '/foodem-landing-page/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
