const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const BundleAnalyzer = require('@next/bundle-analyzer')

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = (phase, { defaultConfig }) => {
  const config = {
    ...defaultConfig,
    poweredByHeader: false,
    reactStrictMode: true,
    redirects: async () => [
      {
        source: '/buy',
        destination: 'https://lu.ma/speakeasyjs',
        permanent: false
      }
    ]
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return config
  } else {
    return withBundleAnalyzer(config)
  }
}
