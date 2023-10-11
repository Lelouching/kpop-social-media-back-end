import { getUserByEmailService } from "../services/users/getUserByEmail.service"
import { NextFunction, Request, Response } from "express"
import { iUserInfo } from "../interfaces/users.interface"

export const ifEmailAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    if(!req.body?.email && req.method === "PATCH") return next()

    const user: iUserInfo | null = await getUserByEmailService(req.body.email)

    if(user){
        return res.status(409).json({
            message: "Email already exists"
        })
    }

    return next()
}