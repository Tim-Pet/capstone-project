import e, { NextFunction } from 'express'

interface ResponseError extends Error {
  status?: number
}
module.exports = (
  err: ResponseError,
  req: e.Request,
  res: e.Response,
  next: NextFunction
) => {
  res.status(err.status ?? 500)
  res.json(err)
}
