import { NextFunction, Request, Response } from "express";
import { iUserInfo } from "../interfaces/users.interface";
import { getUserByUsernameService } from "../services/users/getUserByUsername.service";
import { AppError } from "../errors";

export const ifUsernameExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    const user: iUserInfo | null = await getUserByUsernameService(req.body.username)

    if(user){
        throw new AppError("Username already exists", 409)
    }

    return next()
}