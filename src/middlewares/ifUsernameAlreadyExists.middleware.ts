import { NextFunction, Request, Response } from "express";
import { iUserInfo } from "../interfaces/users.interface";
import { getUserByUsernameService } from "../services/users/getUserByUsername.service";

export const ifUsernameAlreadyExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    if(!req.body?.username && req.method === "PATCH") return next()

    const user: iUserInfo | null = await getUserByUsernameService(req.body.username)

    if(user){
        return res.status(409).json({
            message: "Username already exists"
        })
    }

    return next()
}