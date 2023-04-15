import { z } from "zod";

export const kpopArtistCreateSchema = z.object({
    name: z.string().max(20),
    image: z.string().max(256),
    vocal: z.number().positive().max(10),
    dance: z.number().positive().max(10),
    standardKorean: z.number().positive().max(10),
    popularity: z.number().positive().max(10),
    rap: z.number().positive().max(10),
    stagePresence: z.number().positive().max(10),
    musicalGroup: z.string().max(50)
})

export const kpopArtistInfoSchema = kpopArtistCreateSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    avaragePoints: z.number().positive().max(10)
})