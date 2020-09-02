// Is the javascript environment a browser?
exports.isBrowser = typeof window !== 'undefined'

// Is the site running in production?
const isProd =
exports.isProd = process.env.NODE_ENV === 'production'

// Server port
exports.port = Number(process.env.PORT) || 4000

// Website hostname + port
const host =
exports.host = isProd
  ? 'speakeasyjs.com'
  : 'localhost:4000'

// Website origin (scheme + hostname + port)
const origin =
exports.origin = `${isProd ? 'https' : 'http'}://${host}`

// Title of the site
exports.siteName = 'Speakeasy JS'

// Description of the site
exports.siteDesc = 'The JavaScript meetup for 🥼 mad science, 🧙‍♂️ hacking, and 🧪 experiments'

// Twitter username of the site
exports.siteTwitter = 'Speakeasy_JS'

// Site logo
exports.siteImage = `${origin}/logo.png`

// Default image to represent site on social networks
exports.socialImage = `${origin}/social-share.png`

// Google Analytics
exports.tokenAnalytics = 'UA-3898076-28'

// Root path of project
exports.rootPath = process.env.WWW_ROOT + '/speakeasyjs.com'
