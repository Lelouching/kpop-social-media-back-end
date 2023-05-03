import { z } from "zod"

export const kpopArtistCreateSchema = z.object({
    name: z.string().max(20),
    description: z.string().max(350).nullish(),
    image: z.string().max(256),
    vocal: z.number().positive().int().max(10),
    dance: z.number().positive().int().max(10),
    standardKorean: z.number().positive().int().max(10),
    popularity: z.number().positive().int().max(10),
    rap: z.number().positive().int().max(10),
    stagePresence: z.number().positive().int().max(10),
    musicalGroup: z.string().max(50)
})

export const kpopArtistInfoSchema = kpopArtistCreateSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date()
})