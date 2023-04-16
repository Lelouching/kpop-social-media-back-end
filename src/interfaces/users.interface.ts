import { z } from "zod";
import { userCreateSchema, userInfoSchema } from "../schemas/users.schema";

export type iUserCreate = z.infer<typeof userCreateSchema>
export type iUserInfo = z.infer<typeof userInfoSchema>

export interface iUserRequestInfo{
    id: number,
    email: string,
    admin: boolean
}