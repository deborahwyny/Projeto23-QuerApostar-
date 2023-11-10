import { type ObjectSchema } from 'joi'
import { type Response, type Request, type NextFunction } from 'express'
export const schemaValidator = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body)
    if (validation.error !== undefined) {
      res.status(422).send(validation.error.message)
    } else {
      next()
    }
  }
}