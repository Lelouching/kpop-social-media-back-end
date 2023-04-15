import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";
import { iUserCreate } from "../interfaces/users.interface";

export const validateBodyMiddleware = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): void | Response => {
    const validateData: iUserCreate = schema.parse(req.body)

    req.body = validateData

    return next()
}