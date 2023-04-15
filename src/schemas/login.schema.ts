import { z } from "zod"

export const userLoginSchema = z.object({
    email: z.string().max(50),
    password: z.string().max(120)
})