/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16 configuration
  // Turbopack is now the default bundler
  // Use --webpack flag in build command if you need Webpack instead
  
  // Image optimization settings
  images: {
    // Maximum redirects for image fetching (default: 3)
    maximumRedirects: 3,
  },
  
  // Enable cache components (replaces experimental.dynamicIO)
  // cacheComponents: true,
  
  // React strict mode (recommended)
  reactStrictMode: true,
}

module.exports = nextConfig

