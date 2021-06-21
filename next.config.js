const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const BundleAnalyzer = require('@next/bundle-analyzer')

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = (phase, { defaultConfig }) => {
  const config = {
    ...defaultConfig,

    eslint: {
      // Don't run eslint during `next build`
      ignoreDuringBuilds: true
    },

    // Disable Next.js "x-powered-by" header
    poweredByHeader: false,

    // Enable React strict mode
    reactStrictMode: true,

    redirects: async () => [
      {
        source: '/buy',
        destination: 'https://lu.ma/speakeasyjs',
        permanent: false
      },
      {
        source: '/talks',
        destination: '/',
        permanent: true
      }
    ]
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return config
  } else {
    return withBundleAnalyzer(config)
  }
}
