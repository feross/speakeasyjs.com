const environment = exports.environment = process.env.NODE_ENV || 'development'

// Is the site running in production?
exports.isProd = environment === 'production'

// Is the site running in a pull request?
const isPr = exports.isPr = process.env.IS_PULL_REQUEST === 'true'

// Is the site running on Render?
const isRender = exports.isRender = process.env.RENDER === 'true'

// The git commit of the running site
exports.release = process.env.RENDER_GIT_COMMIT || 'development'

// Server port
const port = exports.port = Number(process.env.PORT) || 4000

// IP address to listen on
exports.bindAddress = isRender ? '0.0.0.0' : '127.0.0.1'

// Hostname on Render
const renderHostname = isPr
  ? process.env.RENDER_EXTERNAL_HOSTNAME
  : process.env.HOSTNAME

// Website hostname + port
const host = exports.host = isRender ? renderHostname : `localhost:${port}`

// Website protocol
const protocol = exports.protocol = isRender ? 'https' : 'http'

// Website origin (scheme + hostname + port)
const origin = exports.origin = `${protocol}://${host}`

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
exports.rootPath = process.cwd()
