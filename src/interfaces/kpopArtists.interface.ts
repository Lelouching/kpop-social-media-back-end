import { z } from "zod";
import { kpopArtistCreateSchema } from "../schemas/kpopArtists.schema";

export type iKpopArtistCreate = z.infer<typeof kpopArtistCreateSchema>