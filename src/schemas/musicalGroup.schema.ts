import { z } from "zod"

export const musicalGroupCreateSchema = z.object({
    name: z.string().max(50),
    description: z.string(),
    membersQuantity: z.number().positive()
})

export const musicalGroupInfoSchema = musicalGroupCreateSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string()
})