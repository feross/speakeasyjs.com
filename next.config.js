const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// Whether to generate and upload production source maps
const ENABLE_SOURCE_MAPS = process.env.RENDER === 'true'

module.exports = (phase, { defaultConfig }) => {
  let config = {
    ...defaultConfig,

    // Enable browser source map generation during the production build
    // on Render (i.e. not when building locally, for speed reasons)
    productionBrowserSourceMaps: ENABLE_SOURCE_MAPS,

    env: {
      // These are exposed in the client bundle
      HOSTNAME: process.env.HOSTNAME,
      IS_PULL_REQUEST: process.env.IS_PULL_REQUEST,
      PORT: process.env.PORT,
      RENDER_EXTERNAL_HOSTNAME: process.env.RENDER_EXTERNAL_HOSTNAME,
      RENDER_GIT_COMMIT: process.env.RENDER_GIT_COMMIT,
      RENDER: process.env.RENDER
    },

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
    if (process.env.ANALYZE === 'true') {
      const BundleAnalyzer = require('@next/bundle-analyzer')
      const withBundleAnalyzer = BundleAnalyzer({ enabled: true })
      config = withBundleAnalyzer(config)
    }
    return config
  }
}
