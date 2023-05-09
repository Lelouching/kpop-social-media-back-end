import { recoverUserService } from "./../services/users/recoverUser.service"
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
    const user: iUserInfo = req.userId

    await softDeleteUserService(userId, user)

    return res.status(204).send()
}

export const getUserByIdController = async (req: Request, res: Response): Promise<Response> => {
    const user: iUserInfo = req.userId

    return res.status(200).json(user)
}

export const recoverUserByIdController = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = Number(req.params.id)
    const user: iUserInfo = req.userId

    await recoverUserService(userId, user)

    return res.status(204).send()
}