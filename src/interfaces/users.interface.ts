import { z } from "zod";
import { userCreateSchema, userInfoSchema, userUpdateReturnSchema, userUpdateSchema } from "../schemas/users.schema";

export type iUserCreate = z.infer<typeof userCreateSchema>
export type iUserInfo = z.infer<typeof userInfoSchema>
export type iUserUpdate = z.infer<typeof userUpdateSchema>
export type iUserReturnUpdate = z.infer<typeof userUpdateReturnSchema>

export interface iUserRequestInfo{
    id: number,
    email: string,
    admin: boolean
}