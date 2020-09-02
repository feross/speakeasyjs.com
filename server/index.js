// const { rollbar } = require('../secret')
const {
  createServer
  // createRollbar,
  // getRollbarHandler
} = require('feross')

// createRollbar({ accessToken: rollbar.accessToken })

const next = require('next')
const { host, port, isProd } = require('../config')

init()

async function init () {
  const nextApp = next({ dev: !isProd })

  await nextApp.prepare()

  const {
    app,
    httpServer
  } = createServer({
    host
  })

  app.use(nextApp.getRequestHandler())
  // app.use(getRollbarHandler())

  httpServer.listen(port, '127.0.0.1', (err) => {
    if (err) throw err
    console.log(`Listening on port ${port}`)
  })
}
