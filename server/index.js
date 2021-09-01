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
