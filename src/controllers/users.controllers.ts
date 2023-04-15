import { Request, Response } from "express";
import { iUserInfo } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const user: iUserInfo = await createUserService(req.body)

    return res.status(201).json(user)
}