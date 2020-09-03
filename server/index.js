const {
  createServer
  // createRollbar,
  // getRollbarHandler
} = require('feross')

// const { rollbar } = require('../secret')
const { host, port, isProd } = require('../config')

// createRollbar({ accessToken: rollbar.accessToken })

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
  // app.use(getRollbarHandler())

  httpServer.listen(port, '127.0.0.1', (err) => {
    if (err) throw err
    console.log(`Listening on port ${port}`)
  })
}
