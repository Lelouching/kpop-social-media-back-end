import { z } from "zod"

export const musicalGroupCreateSchema = z.object({
    name: z.string().max(50),
    description: z.string().max(350),
    membersQuantity: z.number().positive().int()
})

export const musicalGroupInfoSchema = musicalGroupCreateSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date()
})