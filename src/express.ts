import express from 'express'
import { logger } from './middleware/logger'
import services from './routers'
import { catchHttpErrors, catchNotFoundError } from './middleware/errors'
export default function (app: any): void {
  // use json data
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  // use logger
  app.use(logger)
  // use services
  app.use(services)
  // catch 404 errors
  app.use(catchNotFoundError)
  // catch http errors
  app.use(catchHttpErrors)
}
