import { z } from "zod"

const validateFloatNumber = (number: number) => parseFloat(number.toFixed(2))

export const kpopArtistCreateSchema = z.object({
    name: z.string().max(20),
    description: z.string().max(350).nullish(),
    image: z.string().max(256),
    vocal: z.number().positive().max(10).transform((number) => validateFloatNumber(number)),
    dance: z.number().positive().max(10).transform((number) => validateFloatNumber(number)),
    standardKorean: z.number().positive().max(10).transform((number) => validateFloatNumber(number)),
    popularity: z.number().positive().max(10).transform((number) => validateFloatNumber(number)),
    rap: z.number().positive().max(10).transform((number) => validateFloatNumber(number)),
    stagePresence: z.number().positive().max(10).transform((number) => validateFloatNumber(number)),
    musicalGroup: z.string().max(50)
})

export const kpopArtistInfoSchema = kpopArtistCreateSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    avaragePoints: z.number().positive().max(10)
})