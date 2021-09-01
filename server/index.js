// Load environment variables from .env, .env.local, etc. This explicit call
// into `@next/env` allows using environment variables before next() is called.
// More info: https://nextjs.org/docs/basic-features/environment-variables
const { loadEnvConfig } = require('@next/env')
loadEnvConfig('./', process.env.NODE_ENV !== 'production')

const {
  createServer
} = require('feross')

const { host, port, isProd, bindAddress } = require('../config')

const next = require('next')

init()

async function init () {
  const nextApp = next({ dev: !isProd })

  nextApp.prepare()

  const {
    app,
    httpServer
  } = createServer({
    host,
    isProd
  })

  app.use(nextApp.getRequestHandler())

  httpServer.listen(port, bindAddress, (err) => {
    if (err) throw err
    console.log(`Listening on port ${port}`)
  })
}
