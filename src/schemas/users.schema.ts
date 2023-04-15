import { z } from "zod"
import { musicalGroupInfoSchema } from "./musicalGroup.schema"
import { kpopArtistInfoSchema } from "./kpopArtists.schema"

export const userCreateSchema = z.object({
    name: z.string().max(25),
    username: z.string().max(20),
    image: z.string().max(256).nullish(),
    description: z.string().nullish(),
    email: z.string().max(50),
    password: z.string().max(120)
})

export const userInfoSchema = userCreateSchema.extend({
    id: z.number(),
    admin: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    favouriteMusicalGroups: musicalGroupInfoSchema.array().default([]),
    favouriteKpopArtists: kpopArtistInfoSchema.array().default([])
}).omit({ password: true })