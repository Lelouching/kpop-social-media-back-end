import { NextFunction, Request, Response } from "express"
import { getUserByIdService } from "../services/users/getUserById.service"
import { iUserInfo } from "../interfaces/users.interface"

export const ifUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const userId: number = Number(req.params.id)
    const ifUserExists: iUserInfo | null = await getUserByIdService(userId)

    if(!ifUserExists){
        return res.status(404).json({
            message: "User does not exist"
        })
    }

    req.userId = ifUserExists

    return next()
}