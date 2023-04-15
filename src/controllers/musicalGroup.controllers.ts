import { Request, Response } from "express"
import { MusicalGroup } from "../entities/musicalGroup.entities"
import { createMusicaGroupService } from "../services/musicalGroup/createMusicalGroup.service"

export const createMusicalGroupController = async (req: Request, res: Response): Promise<Response> => {
    const musicalGroup: MusicalGroup = await createMusicaGroupService(req.body)
    
    return res.status(200).json(musicalGroup)
}