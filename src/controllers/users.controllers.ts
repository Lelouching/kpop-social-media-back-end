import { recoverUserService } from "./../services/users/recoverUser.service"
import { Request, Response } from "express"
import { iUserInfo, iUserRequestInfo, iUserReturnUpdate, iUserUpdate } from "../interfaces/users.interface"
import { createUserService } from "../services/users/createUser.service"
import { softDeleteUserService } from "../services/users/softDeleteUser.service"
import { updateUserService } from "../services/users/updateUser.service"
import { DeepPartial } from "typeorm"
import { User } from "../entities/users.entities"

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

export const updateUserByIdController = async (req: Request, res: Response): Promise<Response> => {
    const oldUserInfo: iUserInfo = req.userId
    const newUserInfo: any = req.body
    const userToken: iUserRequestInfo = req.userToken

    const user: iUserReturnUpdate = await updateUserService(oldUserInfo, newUserInfo, userToken)

    return res.status(200).json(user)
}