import express, { NextFunction } from 'express'

interface ResponseError extends Error {
  status?: number
}
module.exports = (
  err: ResponseError,
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  res.status(err.status ?? 500)
  res.json(err)
}
