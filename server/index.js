const {
  createServer
} = require('feross')

const { host, port, isProd } = require('../config')

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

  httpServer.listen(port, '127.0.0.1', (err) => {
    if (err) throw err
    console.log(`Listening on port ${port}`)
  })
}
