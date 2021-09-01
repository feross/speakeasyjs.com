import { api } from '../../lib/api.js'

export default api(['HEAD', 'GET'], async (req, res) => {
  res.status(200)
  res.json({
    status: 'ok'
  })
})
