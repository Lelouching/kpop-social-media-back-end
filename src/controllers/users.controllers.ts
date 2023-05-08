import { Request, Response } from "express"
import { iUserInfo } from "../interfaces/users.interface"
import { createUserService } from "../services/users/createUser.service"
import { softDeleteUserService } from "../services/users/softDeleteUser.service"

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const user: iUserInfo = await createUserService(req.body)

    return res.status(201).json(user)
}

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = Number(req.params.id)

    await softDeleteUserService(userId)

    return res.status(204).send()
}