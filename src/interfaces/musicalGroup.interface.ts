import { z } from "zod";
import { musicalGroupCreateSchema } from "../schemas/musicalGroup.schema";

export type iMusicalGroupCreate = z.infer<typeof musicalGroupCreateSchema>