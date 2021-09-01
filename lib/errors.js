export class ApiError extends Error {
  constructor (status = 400, ...params) {
    if (typeof status !== 'number') {
      throw new Error('ApiError requires a valid status parameter')
    }

    // Pass remaining arguments to parent constructor
    super(...params)

    // Maintains proper stack trace for where error was thrown (only on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError)
    }

    this.name = 'ApiError'
    this.status = status
  }
}
