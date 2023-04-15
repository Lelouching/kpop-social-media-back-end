import { z } from "zod";
import { musicalGroupCreateSchema } from "../schemas/musicalGroup.schema";
import { MusicalGroup } from "../entities/musicalGroup.entities";

export type iMusicalGroupCreate = z.infer<typeof musicalGroupCreateSchema>

export interface iMusicalGroupList{
    next: string | null,
    previous: string | null,
    count: number,
    data: MusicalGroup[]
}