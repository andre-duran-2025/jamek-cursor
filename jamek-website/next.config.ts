import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable modern bundling and optimization
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@/components/ui', 'lucide-react', 'framer-motion'],
  },
  
  // Compress responses
  compress: true,
  
  // Enable images optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Enable static optimization
  generateStaticParams: true,
  
  // Bundle analyzer (uncomment to analyze bundle size)
  // ...(process.env.ANALYZE === 'true' && { bundleAnalyzer: { enabled: true } }),
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  
  // Cache static assets
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    }
  },
}

export default nextConfig