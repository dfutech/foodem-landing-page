/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Uncomment and set basePath if deploying to a subpath (e.g., /repo-name)
  // basePath: '/foodem-landing-page',
}

export default nextConfig
