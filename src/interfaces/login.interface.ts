import { iUserInfo } from "./users.interface"
import { z } from "zod";
import { userLoginSchema } from "../schemas/login.schema";

export type iUserLogin = z.infer<typeof userLoginSchema>

export interface iUserLoginReturn{
    token: string,
    user: iUserInfo
}