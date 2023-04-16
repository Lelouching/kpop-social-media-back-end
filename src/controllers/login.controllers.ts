import { Request, Response } from "express";
import { loginUserService } from "../services/login/loginUser.service";
import { iUserLoginReturn } from "../interfaces/login.interface";

export const loginUserController = async (req: Request, res: Response): Promise<Response> => {
    const userData: iUserLoginReturn = await loginUserService(req.body)

    return res.status(200).json({
        token: userData.token,
        user: userData.user
    })
}