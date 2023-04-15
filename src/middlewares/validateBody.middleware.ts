import { Request, Response, NextFunction } from "express"
import { ZodAny, ZodTypeAny } from "zod"

export const validateBodyMiddleware = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): void | Response => {
    const validateData: any = schema.parse(req.body)

    req.body = validateData

    return next()
}