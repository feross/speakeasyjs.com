import { ApiError } from './errors.js'

export { ApiError }

export const api = (methods, handler) => async (req, res) => {
  if (
    (Array.isArray(methods) && !methods.includes(req.method)) ||
    (typeof methods === 'string' && req.method !== methods)
  ) {
    res.status(405)
    res.end()
    return
  }

  try {
    return await handler(req, res)
  } catch (err) {
    if (err instanceof ApiError) {
      res.status(err.status || 400)
      res.json({ err: { message: err.message, code: err.code } })
    } else {
      res.status(err.status || 500)
      res.json({ err: { message: 'Internal server error' } })
    }
  }
}
