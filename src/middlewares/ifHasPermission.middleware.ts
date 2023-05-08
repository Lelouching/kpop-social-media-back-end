import { NextFunction, Request, Response } from "express";

export const ifHasPermissionMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const id: number = Number(req.params.id)

    if(!req.userToken.admin && req.userToken.id !== id || req.userId && req.userId.admin){
        return res.status(403).json({
            message: "Insufficient permission"
        })
    }

    return next()
}