import { z } from "zod";
import { kpopArtistCreateSchema } from "../schemas/kpopArtists.schema";
import { Artist } from "../entities/kpopArtists.entities";

export type iKpopArtistCreate = z.infer<typeof kpopArtistCreateSchema>

export interface iKpopArtistList{
    next: string | null,
    previous: string | null,
    count: number,
    data: Artist[]
}