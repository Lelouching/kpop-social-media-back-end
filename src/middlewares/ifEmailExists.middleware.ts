import { getUserByEmailService } from "./../services/users/getUserByEmail.service"
import { NextFunction, Request, Response } from "express";
import { iUserInfo } from "../interfaces/users.interface";
import { AppError } from "../errors";

export const ifEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const user: iUserInfo | null = await getUserByEmailService(req.body.email)

    if(user){
        throw new AppError("Email already exists", 409)
    }

    return next()
}